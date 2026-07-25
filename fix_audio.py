#!/usr/bin/env python3
"""
Fix mispronounced audio files.
Run from hebrew_spelling directory: python fix_audio.py
"""
import sys
from pathlib import Path
from gtts import gTTS

sys.stdout.reconfigure(encoding='utf-8', errors='replace')

audio_dir = Path('www') / 'audio'

fixes = [
    # tile_055 = כָב (final tile of כוכב)
    # kaf without dagesh = soft 'kh'; gTTS reads bare כ as hard 'k'
    # Use het (ח) which always sounds like 'kh'
    ('tile_055.mp3', 'חָב',  'כָב (khav)'),

    # מפה word — gTTS reads unvowelized מפה as "mipa"; needs patach under mem
    ('מפה.mp3', 'מַפָּה', 'מפה (mapa)'),
]

for filename, spoken, label in fixes:
    path = audio_dir / filename
    path.unlink(missing_ok=True)
    gTTS(text=spoken, lang='iw').save(str(path))
    print(f'  ok  {filename}  ({label})')
