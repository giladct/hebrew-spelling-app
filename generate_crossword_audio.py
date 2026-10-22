#!/usr/bin/env python3
"""Audio for words used only by the syllable crossword (stage 15). Skips existing files.
Run from the hebrew_spelling directory:  python generate_crossword_audio.py
"""
import sys
from pathlib import Path
from gtts import gTTS

sys.stdout.reconfigure(encoding='utf-8', errors='replace')

WORDS = {'בננה': 'בָּנָנָה', 'עננים': 'עֲנָנִים', 'ספה': 'סַפָּה', 'קולה': 'קוֹלָה',
         'ביצים': 'בֵּיצִים', 'פורים': 'פּוּרִים', 'חיות': 'חַיּוֹת', 'כפיות': 'כַּפִּיּוֹת',
         'סירות': 'סִירוֹת', 'ענן': 'עָנָן',
         'קסם': 'קֶסֶם', 'קשת': 'קֶשֶׁת', 'קשר': 'קֶשֶׁר', 'מנה': 'מָנָה', 'בנים': 'בָּנִים',
         'פירות': 'פֵּירוֹת'}   # file name -> text sent to gTTS

audio_dir = Path('www') / 'audio'
for stem, text in WORDS.items():
    path = audio_dir / (stem + '.mp3')
    if path.exists():
        print('exists ', stem)
        continue
    gTTS(text=text, lang='iw').save(str(path))
    print('created', stem)
