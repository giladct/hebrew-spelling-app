#!/usr/bin/env python3
"""Audio for the country names of the flags stage (stage 22). Skips existing files.
Run from the hebrew_spelling directory:  python generate_flag_audio.py
File names have no niqqud and spaces become underscores. The niqqud sent to gTTS is Claude's proposal;
nobody can listen here - the owner must check these by ear.
"""
import sys
from pathlib import Path
from gtts import gTTS

sys.stdout.reconfigure(encoding='utf-8', errors='replace')

WORDS = {'ישראל': 'יִשְׂרָאֵל', 'ארצות_הברית': 'אַרְצוֹת הַבְּרִית', 'בריטניה': 'בְּרִיטַנְיָה', 'צרפת': 'צָרְפַת',
         'גרמניה': 'גֶּרְמַנְיָה', 'איטליה': 'אִיטַלְיָה', 'ספרד': 'סְפָרַד', 'קנדה': 'קָנָדָה', 'יפן': 'יַפָּן', 'ברזיל': 'בְּרָזִיל'}

audio_dir = Path('www') / 'audio'
for stem, text in WORDS.items():
    path = audio_dir / (stem + '.mp3')
    if path.exists():
        print('exists ', stem)
        continue
    gTTS(text=text, lang='iw').save(str(path))
    print('created', stem)
