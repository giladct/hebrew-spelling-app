#!/usr/bin/env python3
"""Spoken instruction played when a stage opens (after the ad). Texts approved by the owner 28.11.2026.
Voice: Gemini TTS, voice "Leda", chosen by the owner 28.11.2026 (Microsoft Avri was tried first but ignores
niqqud and got the stress of "תגררו" wrong). Gemini reads the niqqud, so the texts are written with full niqqud.
Needs the Gemini API key in the GEMINI_API_KEY environment variable (never put the key in a file).
Run from the hebrew_spelling directory:  python generate_instruction_audio.py   (--force re-records all;
or name files to re-record:  python generate_instruction_audio.py instr_08 instr_10)
Gemini is not deterministic: every run sounds a little different. The owner must check each file by ear.
File: www/audio/instr_<first stage>.mp3; stages that play the same game share one file (see INSTRUCTION_AUDIO in app.js).
"""
import base64
import json
import os
import subprocess
import sys
import tempfile
import time
import urllib.request
from pathlib import Path

sys.stdout.reconfigure(encoding='utf-8', errors='replace')

MODEL = os.environ.get('GEMINI_TTS_MODEL', 'models/gemini-3.8-flash-tts')   # the free daily quota is per model: switch model when one runs out
VOICE = 'Leda'
# Short "Say ...:" form. The first run used a long "Read aloud in Hebrew, in a warm ..." style and Gemini often
# spoke that English text before the sentence (files of ~12 s). After recording, check that a file is ~3-5 s;
# tools/trim_instruction_prefix.py cuts such a prefix when there is a clear pause before the Hebrew.
STYLE = 'Say cheerfully, slowly and clearly, for young children'
MAX_SECONDS = 6.5
# After recording, run tools/polish_instruction_audio.py <backup dir> instr_NN ... : it cuts the noise burst Gemini
# leaves at the end and speeds the speech up x1.15 (owner 28.11.2026: a bit slow, noise at the end). Once per file.

TEXTS = {
    'instr_01': 'תִּגְרְרוּ אֶת הַהֲבָרוֹת וְהַרְכִּיבוּ אֶת הַמִּלָּה.',                       # stages 1-6
    'instr_07': 'תִּגְרְרוּ אֶת הַהֲבָרוֹת וְהַרְכִּיבוּ שְׁתֵּי מִלִּים.',                      # stage 7
    'instr_08': 'תִּגְרְרוּ אֶת הַהֲבָרָה הַחֲסֵרָה בַּסּוֹף.',                                 # stage 8
    'instr_09': 'תִּגְרְרוּ אֶת הַהֲבָרָה הַחֲסֵרָה בַּהַתְחָלָה.',                             # stage 9
    'instr_10': 'תִּגְרְרוּ כָּל הֲבָרָה לַתְּמוּנָה הַנְּכוֹנָה.',                             # stage 10
    'instr_11': 'לַחֲצוּ עַל הָרַמְקוֹל, וּבַחֲרוּ אֶת הַמִּלָּה שֶׁשְּׁמַעְתֶּם.',          # stages 11-12
    'instr_13': 'סַדְּרוּ אֶת הַמִּלִּים לְמִשְׁפָּט.',                                      # stage 13
    'instr_14': 'מִצְאוּ זוּגוֹת שֶׁל מִלָּה וּתְמוּנָה.',                                    # stages 14-15
    'instr_16': 'תִּגְרְרוּ הֲבָרוֹת וְהַשְׁלִימוּ אֶת הַתַּשְׁבֵּץ.',                          # stages 16-17
    'instr_18': 'הַרְכִּיבוּ אֶת הַתְּמוּנָה, וְאַחַר כָּךְ אֶת הַמִּלָּה.',                 # stage 18
    'instr_19': 'קִרְאוּ אֶת הַמִּלָּה וְהַלְבִּישׁוּ אֶת הַבֻּבָּה.',                       # stages 19-20
    'instr_21': 'תִּגְרְרוּ אֶת הַהֲבָרוֹת וְהַרְכִּיבוּ אֶת שֵׁם הַתַּמְרוּר.',              # stage 21
    'instr_22': 'תִּגְרְרוּ אֶת הַהֲבָרוֹת וְהַרְכִּיבוּ אֶת שֵׁם הַמְּדִינָה.',              # stage 22
}


def synth(text, out_mp3):
    key = os.environ.get('GEMINI_API_KEY')
    if not key:
        sys.exit('GEMINI_API_KEY is not set')
    body = {'contents': [{'parts': [{'text': STYLE + ':\n' + text}]}],
            'generationConfig': {'responseModalities': ['AUDIO'],
                                 'speechConfig': {'voiceConfig': {'prebuiltVoiceConfig': {'voiceName': VOICE}}}}}
    req = urllib.request.Request(f'https://generativelanguage.googleapis.com/v1beta/{MODEL}:generateContent',
                                 data=json.dumps(body).encode(),
                                 headers={'Content-Type': 'application/json', 'x-goog-api-key': key})
    with urllib.request.urlopen(req, timeout=120) as r:
        resp = json.load(r)
    pcm = base64.b64decode(resp['candidates'][0]['content']['parts'][0]['inlineData']['data'])
    raw = Path(tempfile.mkdtemp()) / 'a.pcm'
    raw.write_bytes(pcm)
    # 24 kHz mono PCM -> mp3; trim silence at both ends so the instruction starts right away
    subprocess.run(['ffmpeg', '-v', 'error', '-y', '-f', 's16le', '-ar', '24000', '-ac', '1', '-i', str(raw),
                    '-af', 'silenceremove=start_periods=1:start_threshold=-45dB,areverse,'
                           'silenceremove=start_periods=1:start_threshold=-45dB,areverse',
                    '-b:a', '64k', str(out_mp3)], check=True)


def main():
    args = [a for a in sys.argv[1:] if not a.startswith('--')]
    force = '--force' in sys.argv
    audio_dir = Path('www') / 'audio'
    for stem, text in TEXTS.items():
        if args and stem not in args:
            continue
        path = audio_dir / (stem + '.mp3')
        if path.exists() and not (force or args):
            print('exists ', stem)
            continue
        for attempt in range(3):
            try:
                synth(text, path)
                dur = float(subprocess.run(['ffprobe', '-v', 'error', '-show_entries', 'format=duration',
                                            '-of', 'csv=p=0', str(path)], capture_output=True, text=True).stdout)
                print('created', stem, f'{dur:.1f}s', '<- TOO LONG, probably spoke the style text' if dur > MAX_SECONDS else '')
                break
            except Exception as e:      # rate limit / transient error: wait and retry
                print('retry  ', stem, type(e).__name__, getattr(e, 'code', ''))
                time.sleep(20)
        else:
            print('FAILED ', stem)


main()
