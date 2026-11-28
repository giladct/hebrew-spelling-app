#!/usr/bin/env python3
"""Audio for the road-sign names of stage 21. Skips existing files.
Run from the hebrew_spelling directory:  python generate_sign_audio.py
File names have no niqqud and spaces become underscores (like the other word files).
The niqqud sent to gTTS was written by Claude. Nobody can listen here - the owner must check these by ear.
"""
import sys
from pathlib import Path
from gtts import gTTS

sys.stdout.reconfigure(encoding='utf-8', errors='replace')

WORDS = {'עצור': 'עֲצוֹר', 'מעבר_חצייה': 'מַעֲבַר חֲצִיָּה', 'רמזור_לפניך': 'רַמְזוֹר לְפָנֶיךָ',
         'הולכי_רגל': 'הוֹלְכֵי רֶגֶל', 'שביל_אופניים': 'שְׁבִיל אוֹפַנַּיִם', 'אין_כניסה': 'אֵין כְּנִיסָה',
         'עובדים_בכביש': 'עוֹבְדִים בַּכְּבִישׁ', 'חניה': 'חֲנָיָה', 'מעגל_תנועה': 'מַעְגַּל תְּנוּעָה'}

audio_dir = Path('www') / 'audio'
for stem, text in WORDS.items():
    path = audio_dir / (stem + '.mp3')
    if path.exists():
        print('exists ', stem)
        continue
    gTTS(text=text, lang='iw').save(str(path))
    print('created', stem)
