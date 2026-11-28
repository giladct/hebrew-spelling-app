#!/usr/bin/env python3
"""Fixes the first word of instruction recordings where Avri mispronounces "תגררו".
In instr_01 the word comes out right ("tigreru"); in other sentences the same spelling is read wrongly.
So: take "תיגרֶרו" from the instr_01 sentence and glue it to the rest of each sentence (from its second word on).
Word positions come from edge-tts WordBoundary events. Each cut is made at the quietest 5 ms between the
first and second word, and the two parts are joined with a short crossfade, so there is no click
(owner heard a click with a plain cut, 28.11.2026).
Run from the hebrew_spelling directory after generate_instruction_audio.py:  python tools/splice_instruction_audio.py
The owner must check the results by ear.
"""
import asyncio
import subprocess
import sys
import tempfile
import wave
from pathlib import Path
import numpy as np
import edge_tts

sys.stdout.reconfigure(encoding='utf-8', errors='replace')
SRC = Path('generate_instruction_audio.py').read_text(encoding='utf-8')
NS = {}
exec(SRC.split('async def record')[0], NS)          # VOICE, TEXTS
VOICE, TEXTS = NS['VOICE'], NS['TEXTS']

GOOD = 'instr_01'                                    # its "תיגרֶרו" is right (owner, by ear)
FIX = ['instr_08', 'instr_09', 'instr_10', 'instr_16', 'instr_21', 'instr_22']
RATE = 24000
FADE = int(0.025 * RATE)                             # 25 ms crossfade


async def synth(text, mp3_path):
    """Writes the mp3 and returns word boundaries [(offset_s, duration_s, word)]."""
    for _ in range(3):
        words = []
        c = edge_tts.Communicate(text, VOICE, boundary='WordBoundary')
        with open(mp3_path, 'wb') as f:
            try:
                async for chunk in c.stream():
                    if chunk['type'] == 'audio':
                        f.write(chunk['data'])
                    elif chunk['type'] == 'WordBoundary':
                        words.append((chunk['offset'] / 1e7, chunk['duration'] / 1e7, chunk['text']))
            except edge_tts.exceptions.NoAudioReceived:
                continue
        if words:
            return words
    raise RuntimeError('no audio for ' + text)


def ff(*args):
    subprocess.run(['ffmpeg', '-v', 'error', '-y', *args], check=True)


def load(mp3):
    wav = mp3.with_suffix('.wav')
    ff('-i', str(mp3), '-ar', str(RATE), '-ac', '1', str(wav))
    with wave.open(str(wav)) as w:
        return np.frombuffer(w.readframes(w.getnframes()), dtype=np.int16).astype(np.float32)


def quietest(samples, start_s, end_s):
    """Sample index of the quietest 5 ms window between start_s and end_s."""
    a, b = int(start_s * RATE), int(end_s * RATE)
    if b - a < 240:
        a, b = a - 240, b + 240
    win = 120
    best, best_i = None, a
    for i in range(a, b - win, win // 2):
        e = float(np.mean(samples[i:i + win] ** 2))
        if best is None or e < best:
            best, best_i = e, i + win // 2
    return best_i


def silence_edge(samples, i, step):
    """From a silent sample i, walk (step -1 back / +1 forward) to where speech starts; returns that index."""
    ref = np.sqrt(np.mean(samples ** 2)) * 0.05
    win = 120
    while 0 < i < len(samples) - win and np.sqrt(np.mean(samples[i:i + win] ** 2)) < ref:
        i += step * win // 2
    return i


KEEP = int(0.12 * RATE)                              # silence kept on each side: ~0.25 s pause in total


def save_mp3(samples, path):
    wav = Path(tempfile.mkdtemp()) / 'out.wav'
    with wave.open(str(wav), 'wb') as w:
        w.setnchannels(1); w.setsampwidth(2); w.setframerate(RATE)
        w.writeframes(np.clip(samples, -32768, 32767).astype(np.int16).tobytes())
    ff('-i', str(wav), '-b:a', '48k', str(path))


def with_pause(text):
    """Comma after the first word: the voice then leaves a real silence there, so the cut lands in silence."""
    first, rest = text.split(' ', 1)
    return first + ', ' + rest


async def main():
    tmp = Path(tempfile.mkdtemp())
    gw = await synth(with_pause(TEXTS[GOOD]), tmp / 'good.mp3')
    good = load(tmp / 'good.mp3')
    g_cut = quietest(good, gw[0][0] + gw[0][1], gw[1][0])
    g_cut = min(g_cut, silence_edge(good, g_cut, -1) + KEEP)
    head = good[:g_cut + FADE]
    for stem in FIX:
        w = await synth(with_pause(TEXTS[stem]), tmp / f'{stem}.mp3')
        src = load(tmp / f'{stem}.mp3')
        s_cut = quietest(src, w[0][0] + w[0][1], w[1][0])
        s_cut = max(s_cut, silence_edge(src, s_cut, +1) - KEEP)
        tail = src[s_cut:]
        t = np.linspace(0, 1, FADE)
        mixed = head[-FADE:] * np.cos(t * np.pi / 2) + tail[:FADE] * np.sin(t * np.pi / 2)
        out = np.concatenate([head[:-FADE], mixed, tail[FADE:]])
        save_mp3(out, Path('www') / 'audio' / f'{stem}.mp3')
        lvl = lambda s, i: float(np.sqrt(np.mean(s[i - 120:i + 120] ** 2)) / np.sqrt(np.mean(s ** 2)))
        print('spliced', stem, f'(good cut {g_cut / RATE:.2f}s level {lvl(good, g_cut):.2f}, '
                               f'own cut {s_cut / RATE:.2f}s level {lvl(src, s_cut):.2f})')

asyncio.run(main())
