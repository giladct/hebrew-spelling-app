import sys, json
sys.stdout.reconfigure(encoding='utf-8')

with open(r'www\audio\tiles.js', encoding='utf-8') as f:
    content = f.read()

# Extract TILE_AUDIO dict by parsing the JS manually
lines = content.splitlines()
for line in lines[2:]:  # skip header lines
    line = line.strip().rstrip(',')
    if not line or line == '};':
        continue
    # Format: "key": "value"
    try:
        key_str, val_str = line.split('": "')
        key = json.loads('"' + key_str.lstrip('"') + '"')
        val = val_str.rstrip('"')
        # kaf=05DB, kamats=05B8, bet=05D1
        if key.startswith('כָב'):
            print(f'kav: key={repr(key)} -> {val}')
        # mem=05DE
        if key.startswith('מַ') or key.startswith('מִ'):
            print(f'mem: key={repr(key)} -> {val}')
    except Exception as e:
        pass
