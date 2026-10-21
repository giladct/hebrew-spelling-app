#!/usr/bin/env python3
"""
Generate word audio for stage 11 (camel to the oasis). Skips files that already exist.
Run from the hebrew_spelling directory:
    python generate_camel_audio.py
Requires: pip install gtts
"""
import re
import sys
from pathlib import Path
from gtts import gTTS

sys.stdout.reconfigure(encoding='utf-8', errors='replace')

# Read the word sets straight from app.js so the two never drift apart.
src = Path('www/app.js').read_text(encoding='utf-8')
words = []
for name in ('CAMEL_SETS', 'CAMEL_HARD_SETS'):
    block = re.search(r'const ' + name + r' = \[(.*?)\n\];', src, re.S).group(1)
    words += re.findall(r"'([^']+)'", block)

audio_dir = Path('www') / 'audio'
for w in words:
    path = audio_dir / (w + '.mp3')
    if path.exists():
        print('exists ', w)
        continue
    gTTS(text=w, lang='iw').save(str(path))
    print('created', w)
