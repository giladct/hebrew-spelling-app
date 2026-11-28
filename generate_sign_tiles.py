#!/usr/bin/env python3
"""Syllable-tile audio for the road-sign words of stage 21 and the flag words of stage 22 (mirrors SIGN_WORDS and FLAG_WORDS in app.js).
Run from the hebrew_spelling directory:  python generate_sign_tiles.py
Adds the missing (tile, is_final) entries to www/audio/tiles.js and creates tile_NNN.mp3 files after the last existing one;
existing entries are left alone. NOTE: generate_audio.py rewrites tiles.js from scratch and would drop these entries -
run this script again after it. Nobody can listen here: the owner must check the tiles by ear.
"""
import re
import sys
import json
from pathlib import Path
from gtts import gTTS

sys.stdout.reconfigure(encoding='utf-8', errors='replace')

PATACH = 'ַ'
DAGESH = 'ּ'
RAFE = 'ֿ'

def is_hebrew_base(ch):
    return 'א' <= ch <= 'ת'

def with_rafe(tile):
    out = ''
    for i, ch in enumerate(tile):
        out += ch
        if ch in 'בכפ':   # bet, kaf, pe
            j = i + 1
            has_dagesh = False
            while j < len(tile) and not is_hebrew_base(tile[j]):
                if tile[j] == DAGESH:
                    has_dagesh = True
                j += 1
            if not has_dagesh:
                out += RAFE
    return out

def is_furtive_patach(tile):
    return len(tile) == 2 and tile[1] == PATACH and tile[0] in 'חעה'

SHEVA = 'ְ'
SOFIT = {'כ': 'ך', 'מ': 'ם', 'נ': 'ן', 'פ': 'ף', 'צ': 'ץ'}

def closed_syllable_speech(tile):
    """A closed syllable written with a silent sheva (מַנְ, אַרְ) makes gTTS add a vowel ('mane'). Drop the sheva and use the
    sofit letter ('מַן' = man). Single-letter tiles (לְ, בְּ, שְׁ) keep their vocal sheva. Returns None when not a closed syllable."""
    bases = [i for i, ch in enumerate(tile) if is_hebrew_base(ch)]
    if len(bases) < 2:
        return None
    cluster = tile[bases[-1]:]
    if SHEVA not in cluster:
        return None
    last = tile[bases[-1]]
    rest = cluster.replace(SHEVA, '')
    return tile[:bases[-1]] + SOFIT.get(last, last) + rest[1:]

# Per-tile overrides (same trick as generate_audio.py: sofit pe always reads "f"). 'פָ' with a rafe was read "poo".
# gTTS ignores the rafe: bet/kaf/pe without dagesh read as b/k/p. vav forces "v", het forces "kh", sofit pe forces "f" (as in generate_audio.py).
TILE_PRONOUNCE_AS = {
    'פָ': 'ףָ',
    'פַ': 'ףַ',      # fa (bare patach gets an alef added below)
    'פַת': 'ףַת',    # fat
    'בַר': 'וַר',    # var
    'בִיל': 'וִיל',  # vil
    'בְ': 'וְ',      # ve
    'בִישׁ': 'וִישׁ', # vish
    'כֵי': 'חֵי',    # khei
    'שְׁ': 'שֶׁ',    # she (a lone shin+sheva was read without its vowel)
    'מַעְ': 'מַ',    # ma (silent ayin; bare patach gets an alef added below)
}

# Tiles whose mp3 was made by hand and must never be regenerated here. 'בִיל' (tile_136.mp3): gTTS kept saying it wrong for every
# spelling, so the owner picked (26.11.2026) a Microsoft voice: edge-tts he-IL-HilaNeural, text 'וִיל', silence trimmed.
HAND_MADE = {'בִיל'}

def get_spoken_text(letter, is_final):
    if letter in TILE_PRONOUNCE_AS:
        base = TILE_PRONOUNCE_AS[letter]
        return with_rafe(base) + ('א' if base[-1] == PATACH else '')
    closed = closed_syllable_speech(letter)
    if closed:
        return with_rafe(closed)
    if is_final and is_furtive_patach(letter):
        return with_rafe('א' + PATACH + letter[0])
    ends_in_bare_patach = bool(letter) and letter[-1] == PATACH
    return with_rafe(letter) + ('א' if ends_in_bare_patach else '')

SIGN_WORDS = [
    {'tiles': ['עֲ', 'צוֹר']},
    {'tiles': ['מַ', 'עֲ', 'בַר', 'חֲ', 'צִי', 'יָה'], 'groupSizes': [3, 3]},
    {'tiles': ['רַמְ', 'זוֹר', 'לְ', 'פָ', 'נֶיךָ'], 'groupSizes': [2, 3]},
    {'tiles': ['הוֹל', 'כֵי', 'רֶ', 'גֶל'], 'groupSizes': [2, 2]},
    {'tiles': ['שְׁ', 'בִיל', 'אוֹ', 'פַ', 'נַּיִם'], 'groupSizes': [2, 3]},
    {'tiles': ['אֵין', 'כְּ', 'נִי', 'סָה'], 'groupSizes': [1, 3]},
    {'tiles': ['עוֹ', 'בְ', 'דִים', 'בַּ', 'כְּ', 'בִישׁ'], 'groupSizes': [3, 3]},
    {'tiles': ['חֲ', 'נָ', 'יָה']},
    {'tiles': ['מַעְ', 'גַּל', 'תְּ', 'נוּ', 'עָה'], 'groupSizes': [2, 3]},
    # stage 22 (flags), mirrors FLAG_WORDS in app.js
    {'tiles': ['יִשְׂ', 'רָ', 'אֵל']},
    {'tiles': ['אַרְ', 'צוֹת', 'הַ', 'בְּ', 'רִית'], 'groupSizes': [2, 3]},
    {'tiles': ['בְּרִי', 'טַנְ', 'יָה']},
    {'tiles': ['צָרְ', 'פַת']},
    {'tiles': ['גֶּרְ', 'מַנְ', 'יָה']},
    {'tiles': ['אִי', 'טַלְ', 'יָה']},
    {'tiles': ['סְ', 'פָ', 'רַד']},
    {'tiles': ['קָ', 'נָ', 'דָה']},
    {'tiles': ['יַ', 'פָּן']},
    {'tiles': ['בְּ', 'רָ', 'זִיל']},
]

audio_dir = Path('www') / 'audio'
tiles_js = audio_dir / 'tiles.js'
text = tiles_js.read_text(encoding='utf-8')
manifest = {}
for m in re.finditer(r'^\s*("(?:[^"\\]|\\.)*"):\s*("(?:[^"\\]|\\.)*"),?\s*$', text, re.M):
    manifest[json.loads(m.group(1))] = json.loads(m.group(2))
counter = max(int(re.search(r'tile_(\d+)', f).group(1)) for f in manifest.values())
print('existing entries:', len(manifest), 'last tile number:', counter)

spoken_to_file = {}
regenerated = set()
for word in SIGN_WORDS:
    sizes = word.get('groupSizes') or [len(word['tiles'])]
    finals, idx = set(), 0
    for size in sizes:
        finals.add(idx + size - 1)
        idx += size
    for i, tile in enumerate(word['tiles']):
        is_final = i in finals
        key = tile + '_' + ('1' if is_final else '0')
        if key in manifest:
            continue
        spoken = get_spoken_text(tile, is_final)
        if spoken not in spoken_to_file:
            counter += 1
            spoken_to_file[spoken] = f'tile_{counter:03d}.mp3'
        manifest[key] = spoken_to_file[spoken]

for spoken, filename in spoken_to_file.items():
    path = audio_dir / filename
    if not path.exists():
        gTTS(text=spoken, lang='iw').save(str(path))
    print('created', filename, spoken.replace(RAFE, ''))

# Closed syllables that were already generated with the old (sheva-vowel) pronunciation: regenerate their file in place.
for word in SIGN_WORDS:
    for tile in word['tiles']:
        if tile in HAND_MADE or not (tile in TILE_PRONOUNCE_AS or closed_syllable_speech(tile)):
            continue
        for suffix in ('0', '1'):
            filename = manifest.get(tile + '_' + suffix)
            if filename and filename not in regenerated:
                regenerated.add(filename)
                spoken = get_spoken_text(tile, suffix == '1')
                gTTS(text=spoken, lang='iw').save(str(audio_dir / filename))
                print('regenerated', filename, tile, '->', spoken.replace(RAFE, ''))

lines = ['// Auto-generated by generate_audio.py (+ generate_sign_tiles.py for the road-sign tiles) - do not edit manually.\n',
         'const TILE_AUDIO = {\n']
for key, filename in sorted(manifest.items()):
    lines.append(f'  {json.dumps(key)}: {json.dumps(filename)},\n')
lines.append('};\n')
tiles_js.write_text(''.join(lines), encoding='utf-8')
print('Wrote tiles.js with', len(manifest), 'entries')
