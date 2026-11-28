#!/usr/bin/env python3
"""Cleans and speeds up Gemini instruction recordings (owner 28.11.2026: "a bit slow" and "noise at the end").
- Gemini audio often ends with a short loud burst after a silence: everything after the last real speech is cut
  (a non-silent bit shorter than 0.5 s that follows a silence of 150 ms or more counts as noise).
- Short fade-out, then tempo x TEMPO (pitch unchanged), then 0.1 s of silence.
Run from hebrew_spelling:  python tools/polish_instruction_audio.py <backup dir> instr_01 instr_07 ...
Originals are copied to <backup dir> first. Run it once per file (running twice speeds up twice).
"""
import shutil
import subprocess
import sys
import tempfile
from pathlib import Path
import numpy as np

import os
TEMPO = float(os.environ.get('POLISH_TEMPO', '1.15'))   # file 10 (Gemini 3.1 model, slower) needed 1.35
RATE = 24000
FRAME = int(0.02 * RATE)          # 20 ms
SILENT_DB = -45


def load(path):
    raw = subprocess.run(['ffmpeg', '-v', 'error', '-i', str(path), '-f', 's16le', '-ac', '1', '-ar', str(RATE), '-'],
                         capture_output=True, check=True).stdout
    return np.frombuffer(raw, dtype=np.int16).astype(np.float32)


def frame_db(s):
    n = len(s) // FRAME
    f = s[:n * FRAME].reshape(n, FRAME)
    return 20 * np.log10(np.sqrt(np.mean(f ** 2, axis=1)) + 1e-9) - 20 * np.log10(32768)


def speech_end(s):
    """Sample index where real speech ends (trailing noise bursts and silence excluded)."""
    db = frame_db(s)
    loud = db > SILENT_DB
    end = len(db)
    while True:
        idx = np.where(loud[:end])[0]
        if len(idx) == 0:
            return len(s)
        last = idx[-1] + 1                       # end of the last loud run
        run_start = last
        while run_start > 0 and loud[run_start - 1]:
            run_start -= 1
        gap = run_start
        while gap > 0 and not loud[gap - 1]:
            gap -= 1
        silence_before = run_start - gap
        if (last - run_start) * 0.02 < 0.5 and silence_before * 0.02 >= 0.15 and gap > 0:
            end = gap                            # that last run is a noise burst: drop it, look again
            continue
        return min(len(s), last * FRAME + int(0.06 * RATE))


backup = Path(sys.argv[1]); backup.mkdir(parents=True, exist_ok=True)
for stem in sys.argv[2:]:
    path = Path('www/audio') / (stem + '.mp3')
    shutil.copy2(path, backup / path.name)
    s = load(path)
    cut = speech_end(s)
    s = s[:cut].copy()
    fade = int(0.04 * RATE)
    s[-fade:] *= np.linspace(1, 0, fade)
    wav = Path(tempfile.mkdtemp()) / 'a.wav'
    import wave
    with wave.open(str(wav), 'wb') as w:
        w.setnchannels(1); w.setsampwidth(2); w.setframerate(RATE)
        w.writeframes(s.astype(np.int16).tobytes())
    tmp = path.with_suffix('.tmp.mp3')
    subprocess.run(['ffmpeg', '-v', 'error', '-y', '-i', str(wav), '-af', f'atempo={TEMPO},apad=pad_dur=0.1',
                    '-b:a', '64k', str(tmp)], check=True)
    tmp.replace(path)
    print(f'{stem}: cut {(len(load(backup / path.name)) - cut) / RATE:.2f}s from the end, now '
          f'{len(load(path)) / RATE:.2f}s')
