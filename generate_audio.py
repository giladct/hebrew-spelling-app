#!/usr/bin/env python3
"""
Generate Hebrew TTS MP3 files for all words AND syllable tiles.
Outputs:
  www/audio/<word>.mp3      - word files (for the hint button)
  www/audio/tile_NNN.mp3    - tile files (for tile-tap sounds)
  www/audio/tiles.js        - JS manifest: TILE_AUDIO[tile+'_'+is_final] = filename

Run from the hebrew_spelling directory:
    python generate_audio.py
Requires: pip install gtts
"""
import sys
import json
from pathlib import Path
from gtts import gTTS

sys.stdout.reconfigure(encoding='utf-8', errors='replace')

# ---- Hebrew constants (mirrors app.js) ----
PATACH = 'ַ'   # ַ
DAGESH = 'ּ'   # ּ
RAFE   = 'ֿ'   # ֿ

def is_hebrew_base(ch):
    return 'א' <= ch <= 'ת'

def with_rafe(tile):
    result = ''
    for i, ch in enumerate(tile):
        result += ch
        if ch in 'בכפ':
            j = i + 1
            has_dagesh = False
            while j < len(tile) and not is_hebrew_base(tile[j]):
                if tile[j] == DAGESH:
                    has_dagesh = True
                j += 1
            if not has_dagesh:
                result += RAFE
    return result

def is_furtive_patach(tile):
    return len(tile) == 2 and tile[1] == PATACH and tile[0] in 'חעה'

def furtive_to_speech(tile):
    return 'א' + PATACH + tile[0]

def get_spoken_text(letter, is_final):
    if is_final and is_furtive_patach(letter):
        return with_rafe(furtive_to_speech(letter))
    ends_in_bare_patach = bool(letter) and letter[-1] == PATACH
    return with_rafe(letter) + ('א' if ends_in_bare_patach else '')

def get_final_indices(word):
    group_sizes = word.get('groupSizes') or [len(word['tiles'])]
    final_indices = set()
    idx = 0
    for size in group_sizes:
        final_indices.add(idx + size - 1)
        idx += size
    return final_indices

# ---- Word names (for hint button) ----
WORD_NAMES = [
    'גמל','שבת','מצה','חלב','גלגל','בקר','מפה','חלה','סבא','גמד',
    'כיסים','סירים','גירים','תיקים','פילים','סינית','מיצים','תינוק','כיסא','סיפור',
    'בית','מטבח','צמיד','כתה','סכין','גדי','סירה','פטיש','מיטה','סכינים',
    'עוגה','עורב','עוגן','כוכב','ציפור','עולם','עופות','חומה','כובע','מקום',
    'כלב','ספר','פרח','עצים','מלך','ביצה','עגל','גשר','בגד','עדר',
    'תפוח','תפוז','חומוס','סוכר','כדור','לולב','סוסים','סולם','צורה','סוכה',
    'קשת בענן','תיק גב','בית ספר','כלב ים','סוס ים',
    'דג זהב','כוכב ים','גן חיות','כובע קסם','סל פירות',
]

# ---- All levels data (mirrors app.js LEVELS) ----
LEVELS = [
  [
    {'name':'גמל','tiles':['גָּ','מַל']},
    {'name':'שבת','tiles':['שַׁ','בָּת']},
    {'name':'מצה','tiles':['מַ','צָּה']},
    {'name':'חלב','tiles':['חַ','לָּב']},
    {'name':'גלגל','tiles':['גַּל','גַּל']},
    {'name':'בקר','tiles':['בָּ','קָר']},
    {'name':'מפה','tiles':['מַ','פָּה']},
    {'name':'חלה','tiles':['חַ','לָּה']},
    {'name':'סבא','tiles':['סַ','בָּא']},
    {'name':'גמד','tiles':['גַּ','מָּד']},
  ],
  [
    {'name':'כיסים','tiles':['כִּי','סִים']},
    {'name':'סירים','tiles':['סִי','רִים']},
    {'name':'גירים','tiles':['גִּי','רִים']},
    {'name':'תיקים','tiles':['תִּי','קִים']},
    {'name':'פילים','tiles':['פִּי','לִים']},
    {'name':'סינית','tiles':['סִי','נִית']},
    {'name':'מיצים','tiles':['מִי','צִים']},
    {'name':'תינוק','tiles':['תִּי','נוֹק']},
    {'name':'כיסא','tiles':['כִּ','סֵּא']},
    {'name':'סיפור','tiles':['סִי','פּוּר']},
  ],
  [
    {'name':'בית','tiles':['בַּ','יִת']},
    {'name':'מטבח','tiles':['מִט','בָּח']},
    {'name':'צמיד','tiles':['צָ','מִיד']},
    {'name':'כתה','tiles':['כִּ','תָּה']},
    {'name':'סכין','tiles':['סַ','כִּין']},
    {'name':'גדי','tiles':['גְּ','דִי']},
    {'name':'סירה','tiles':['סִי','רָה']},
    {'name':'פטיש','tiles':['פַּ','טִּיש']},
    {'name':'מיטה','tiles':['מִי','טָּה']},
    {'name':'סכינים','tiles':['סַ','כִּי','נִים']},
  ],
  [
    {'name':'עוגה','tiles':['עוּ','גָה']},
    {'name':'עורב','tiles':['עוֹ','רֵב']},
    {'name':'עוגן','tiles':['עוֹ','גֵן']},
    {'name':'כוכב','tiles':['כּוֹ','כָב']},
    {'name':'ציפור','tiles':['צִי','פּוֹר']},
    {'name':'עולם','tiles':['עוֹ','לָם']},
    {'name':'עופות','tiles':['עוֹ','פוֹת']},
    {'name':'חומה','tiles':['חוֹ','מָה']},
    {'name':'כובע','tiles':['כּוֹ','בַע']},
    {'name':'מקום','tiles':['מָ','קוֹם']},
  ],
  [
    {'name':'כלב','tiles':['כֶּ','לֶב']},
    {'name':'ספר','tiles':['סֵ','פֶר']},
    {'name':'פרח','tiles':['פֶּ','רַח']},
    {'name':'עצים','tiles':['עֵ','צִים']},
    {'name':'מלך','tiles':['מֶ','לֶך']},
    {'name':'ביצה','tiles':['בֵּי','צָה']},
    {'name':'עגל','tiles':['עֵ','גֶל']},
    {'name':'גשר','tiles':['גֶּ','שֶׁר']},
    {'name':'בגד','tiles':['בֶּ','גֶד']},
    {'name':'עדר','tiles':['עֵ','דֶר']},
  ],
  [
    {'name':'תפוח','tiles':['תַּ','פּוּ','חַ']},
    {'name':'תפוז','tiles':['תַּ','פּוּז']},
    {'name':'חומוס','tiles':['חֻ','מּוּס']},
    {'name':'סוכר','tiles':['סוּ','כָּר']},
    {'name':'כדור','tiles':['כַּ','דּוּר']},
    {'name':'לולב','tiles':['לוּ','לָב']},
    {'name':'סוסים','tiles':['סוּ','סִים']},
    {'name':'סולם','tiles':['סוּ','לָּם']},
    {'name':'צורה','tiles':['צוּ','רָה']},
    {'name':'סוכה','tiles':['סֻ','כָּה']},
  ],
  [
    {'name':'קשת בענן','tiles':['קֶ','שֶׁת','בְּ','עָ','נָן'],'groupSizes':[2,3]},
    {'name':'תיק גב','tiles':['תִּיק','גַּב'],'groupSizes':[1,1]},
    {'name':'בית ספר','tiles':['בֵּית','סֵ','פֶר'],'groupSizes':[1,2]},
    {'name':'כלב ים','tiles':['כֶּ','לֶב','יָם'],'groupSizes':[2,1]},
    {'name':'סוס ים','tiles':['סוּס','יָם'],'groupSizes':[1,1]},
    {'name':'דג זהב','tiles':['דַּג','זָ','הָב'],'groupSizes':[1,2]},
    {'name':'כוכב ים','tiles':['כּוֹ','כַב','יָם'],'groupSizes':[2,1]},
    {'name':'גן חיות','tiles':['גַּן','חַ','יּוֹת'],'groupSizes':[1,2]},
    {'name':'כובע קסם','tiles':['כּוֹ','בַע','קֶ','סֶם'],'groupSizes':[2,2]},
    {'name':'סל פירות','tiles':['סַל','פֵּי','רוֹת'],'groupSizes':[1,2]},
  ],
]

audio_dir = Path('www') / 'audio'
audio_dir.mkdir(parents=True, exist_ok=True)

# gTTS mispronounces some syllables — use alternative text that sounds correct
PRONOUNCE_AS = {
    'סוּ': 'סֻ',   # shuruk on vav → gTTS says "sui"; kubutz reads as "su"
    'בֶשׂ': 'וֶשׂ',  # bet without dagesh = vet (v), but gTTS reads as "b"; vav forces "v"
    'מפה': 'מַפָּה',  # without niqqud gTTS says "mipa"; with patach gives "mapa"
    'כָֿבֿ': 'חָב',  # כָב (kaf without dagesh) → het forces "kh" sound → "khav"
}

def gen(text, path):
    if path.exists():
        return False
    spoken = PRONOUNCE_AS.get(text, text)
    tts = gTTS(text=spoken.replace(RAFE, ''), lang='iw')
    tts.save(str(path))
    return True

# ---- Syllable Match: all words and syllables ----
SM_CONTENT = [
    # Set 1 (כֶּ) syllables — words כלב/כתר already in WORD_NAMES, כֶּבֶשׂ already generated
    'לֶב', 'תֶר', 'בֶשׂ',
    # Set 2 (שֶׁ)
    'שֶׁמֶשׁ', 'שֶׁלֶג', 'שֶׁקֶל', 'שֶׁ', 'מֶשׁ', 'לֶג', 'קֶל',
    # Set 3 (נָ)
    'נָחָשׁ', 'נָמֵר', 'נָהָר', 'נָ', 'חָשׁ', 'מֵר', 'הָר',
    # Set 4 (מָ)
    'מָיִם', 'מָטָר', 'מָגֵן', 'מָ', 'יִם', 'טָר', 'גֵן',
    # Set 5 (סוּ)
    'סוּסָה', 'סוּכָּה', 'סוּלָּם', 'סוּ', 'סָה', 'כָּה', 'לָּם',
    # Set 6 (חָ)
    'חָלָב', 'חֲמוֹר', 'חָצִיל', 'חָ', 'לָב', 'מוֹר', 'צִיל',
    # Set 7 (לוֹן)
    'בָּלוֹן', 'חַלּוֹן', 'סָלוֹן', 'לוֹן', 'בָּ', 'חַ', 'סָ',
    # Set 8 (רָה)
    'סִירָה', 'תּוֹרָה', 'מְנוֹרָה', 'רָה', 'סִי', 'תּוֹ', 'מְנוֹ',
    # Set 9 (פָּה)
    'מַפָּה', 'כִּפָּה', 'חֻפָּה', 'פָּה', 'מַ', 'כִּ', 'חֻ',
    # Set 10 (כָּה)
    'סֻכָּה', 'מַכָּה', 'חֲנֻכָּה', 'כָּה', 'סֻ', 'חֲנֻ',
    # Set 11 (לָּה)
    'כַּלָּה', 'חַלָּה', 'תְּפִלָּה', 'לָּה', 'כַּ', 'תְּפִ',
]

# ---- 1. Word files ----
print('=== Words ===')
for word in WORD_NAMES:
    path = audio_dir / (word.replace(' ', '_') + '.mp3')
    status = 'ok' if gen(word, path) else 'skip'
    print(f'  {status}  {word}')

print('\n=== Syllable Match ===')
for item in SM_CONTENT:
    path = audio_dir / (item + '.mp3')
    status = 'ok' if gen(item, path) else 'skip'
    print(f'  {status}  {item}')

# ---- 2. Tile files ----
print('\n=== Tiles ===')

# Map spoken_text -> filename
spoken_to_file = {}  # spoken_text -> 'tile_NNN.mp3'
# Map (tile, is_final_str) -> filename  (for the JS manifest)
manifest = {}

counter = [0]

def get_tile_file(spoken_text):
    if spoken_text not in spoken_to_file:
        counter[0] += 1
        spoken_to_file[spoken_text] = f'tile_{counter[0]:03d}.mp3'
    return spoken_to_file[spoken_text]

for level in LEVELS:
    for word in level:
        finals = get_final_indices(word)
        for i, tile in enumerate(word['tiles']):
            is_final = i in finals
            spoken = get_spoken_text(tile, is_final)
            filename = get_tile_file(spoken)
            key = tile + '_' + ('1' if is_final else '0')
            manifest[key] = filename

# Generate audio for each unique spoken text
for spoken, filename in sorted(spoken_to_file.items(), key=lambda x: x[1]):
    path = audio_dir / filename
    status = 'ok' if gen(spoken, path) else 'skip'
    print(f'  {status}  {filename}  ({spoken.replace(RAFE, "")})')

# ---- 3. Write tiles.js manifest ----
tiles_js = audio_dir / 'tiles.js'
lines = ['// Auto-generated by generate_audio.py — do not edit manually.\n',
         'const TILE_AUDIO = {\n']
for key, filename in sorted(manifest.items()):
    lines.append(f'  {json.dumps(key)}: {json.dumps(filename)},\n')
lines.append('};\n')

with open(tiles_js, 'w', encoding='utf-8') as f:
    f.writelines(lines)
print(f'\nWrote {tiles_js} ({len(manifest)} entries)')
print(f'Total tile files: {len(spoken_to_file)}')
