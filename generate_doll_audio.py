#!/usr/bin/env python3
"""Audio for the clothes words of the doll stage (stage 19). Skips existing files.
Run from the hebrew_spelling directory:  python generate_doll_audio.py
(כובע already exists from stage 5.) Nobody can listen here - the owner must check these by ear.
"""
import sys
from pathlib import Path
from gtts import gTTS

sys.stdout.reconfigure(encoding='utf-8', errors='replace')

WORDS = {'חולצה': 'חֻלְצָה', 'מכנסיים': 'מִכְנָסַיִם', 'נעליים': 'נַעֲלַיִם',
         'משקפיים': 'מִשְׁקָפַיִם', 'צעיף': 'צָעִיף',
         # stage 20 (fashion doll); files with a space in the name use an underscore, like the other word files
         'גופייה': 'גּוּפִיָּה', 'חצאית': 'חֲצָאִית', 'נעלי_עקב': 'נַעֲלֵי עָקֵב', 'תיק': 'תִּיק',
         'שרשרת': 'שַׁרְשֶׁרֶת', 'עגילים': 'עֲגִילִים', 'משקפי_שמש': 'מִשְׁקְפֵי שֶׁמֶשׁ'}   # file name -> text sent to gTTS

audio_dir = Path('www') / 'audio'
for stem, text in WORDS.items():
    path = audio_dir / (stem + '.mp3')
    if path.exists():
        print('exists ', stem)
        continue
    gTTS(text=text, lang='iw').save(str(path))
    print('created', stem)
