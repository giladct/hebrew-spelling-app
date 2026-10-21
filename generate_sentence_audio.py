#!/usr/bin/env python3
"""
Generate audio for stage 13 (order the sentence): every word and every full sentence.
Skips files that already exist. Run from the hebrew_spelling directory:
    python generate_sentence_audio.py
Requires: pip install gtts
"""
import re
import sys
from pathlib import Path
from gtts import gTTS

sys.stdout.reconfigure(encoding='utf-8', errors='replace')

src = Path('www/app.js').read_text(encoding='utf-8')
block = re.search(r'const SENTENCES = \[(.*?)\n\];', src, re.S).group(1)
audio_dir = Path('www') / 'audio'

# gTTS ignores niqqud for stress and reads the verb אוֹכֵל like the noun אֹכֶל (stress on the first
# syllable). A silent aleph after the tsere pulls the stress to the last syllable (milra).
PRONOUNCE_AS = {'אוֹכֵל': 'אוֹכֵאל'}

def spoken(text):
    for k, v in PRONOUNCE_AS.items():
        text = text.replace(k, v)
    return text

jobs = []   # (spoken text, file stem)
for m in re.finditer(r'words: \[([^\]]*)\]', block):
    words = re.findall(r"'([^']+)'", m.group(1))
    jobs.append((' '.join(words), '_'.join(words)))
    jobs.extend((w, w) for w in words)

seen = set()
for text, stem in jobs:
    if stem in seen:
        continue
    seen.add(stem)
    path = audio_dir / (stem + '.mp3')
    if path.exists():
        print('exists ', stem)
        continue
    gTTS(text=spoken(text), lang='iw').save(str(path))
    print('created', stem)
