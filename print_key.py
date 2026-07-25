import sys
sys.stdout.reconfigure(encoding='utf-8')

PATACH = 'ַ'
DAGESH = 'ּ'
RAFE   = 'ֿ'

def is_hebrew_base(ch):
    return 'א' <= ch <= 'ת'

def with_rafe(tile):
    result = ''
    for i, ch in enumerate(tile):
        result += ch
        if ch in 'בכפ':  # bet kaf pe
            j = i + 1
            has_dagesh = False
            while j < len(tile) and not is_hebrew_base(tile[j]):
                if tile[j] == DAGESH:
                    has_dagesh = True
                j += 1
            if not has_dagesh:
                result += RAFE
    return result

# key for כָב (final tile of כוכב)
tile = 'כָב'  # kaf + kamats + bet
spoken = with_rafe(tile)
print('spoken repr:', repr(spoken))
print('as escaped:', spoken.encode('unicode_escape').decode())
