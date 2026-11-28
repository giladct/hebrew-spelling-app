#!/usr/bin/env python3
"""Cuts the spoken English style prompt off Gemini instruction recordings.
Gemini sometimes reads the style text ("Read aloud in Hebrew, ...") before the Hebrew sentence (found 28.11.2026:
files of ~12 s instead of ~3-4 s). The Hebrew follows the first pause of 0.6 s or more, so keep only what comes after it.
Files under 6 s are left alone. Originals are copied to <backup dir> first.
Run from hebrew_spelling:  python tools/trim_instruction_prefix.py <backup dir> [instr_NN ...]
"""
import re
import shutil
import subprocess
import sys
from pathlib import Path

backup = Path(sys.argv[1]); backup.mkdir(parents=True, exist_ok=True)
names = sys.argv[2:]
for f in sorted(Path('www/audio').glob('instr_*.mp3')):
    if names and f.stem not in names:
        continue
    dur = float(subprocess.run(['ffprobe', '-v', 'error', '-show_entries', 'format=duration', '-of', 'csv=p=0', str(f)],
                               capture_output=True, text=True).stdout)
    if dur < 6:
        print(f'{f.stem}: {dur:.1f}s, left alone')
        continue
    log = subprocess.run(['ffmpeg', '-i', str(f), '-af', 'silencedetect=noise=-40dB:d=0.6', '-f', 'null', '-'],
                         capture_output=True, text=True).stderr
    ends = [float(x) for x in re.findall(r'silence_end: ([\d.]+)', log)]
    if not ends:
        print(f'{f.stem}: {dur:.1f}s, no pause found - CHECK BY EAR')
        continue
    start = max(0.0, ends[0] - 0.05)
    shutil.copy2(f, backup / f.name)
    tmp = f.with_suffix('.tmp.mp3')
    subprocess.run(['ffmpeg', '-v', 'error', '-y', '-ss', f'{start:.3f}', '-i', str(f), '-b:a', '64k', str(tmp)], check=True)
    tmp.replace(f)
    new = float(subprocess.run(['ffprobe', '-v', 'error', '-show_entries', 'format=duration', '-of', 'csv=p=0', str(f)],
                               capture_output=True, text=True).stdout)
    print(f'{f.stem}: {dur:.1f}s -> {new:.1f}s (cut first {start:.1f}s)')
