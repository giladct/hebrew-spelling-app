// Finds syllable-crossword layouts for stages 16-17 from the words that already have audio.
//
//   node tools/crossword-search.js 4        # all 4-word layouts (3 for 3-word ones, ...)
//
// Two words may cross only on a syllable with the same text AND the same position class (final /
// non-final), because the tile audio differs by position (e.g. final "חַ" is read "ach").
// A word is usable only if audio/<name>.mp3 exists and every syllable has a TILE_AUDIO entry.
// To try a new word before recording it, add it to EXTRA (then create its audio with
// generate_crossword_audio.py). Output: one layout per word set, with r/c ready for CROSSWORDS_*.
const fs = require('fs');
const path = require('path');
const www = path.join(__dirname, '..', 'www');
const src = fs.readFileSync(path.join(www, 'app.js'), 'utf8');
const cut = (start, end) => { const i = src.indexOf(start); return src.slice(i, src.indexOf(end, i) + end.length); };
const LEVELS = new Function(cut('const LEVELS = [', '\n];') + ';return LEVELS;')();
const SM = new Function(cut('const SYLLABLE_MATCH_SETS = [', '\n];') + ';return SYLLABLE_MATCH_SETS;')();
const EMOJI = new Function(cut('const EMOJI_MAP = {', '\n};') + ';return EMOJI_MAP;')();
const TILE_AUDIO = new Function(fs.readFileSync(path.join(www, 'audio', 'tiles.js'), 'utf8') + ';return TILE_AUDIO;')();

// pictures that confuse children, or words the owner asked to drop
const SKIP = new Set(['עגל', 'בקר', 'עורב', 'מקום', 'צורה', 'מלך', 'עדר', 'מָגֵן', 'מַכָּה']);
// candidate words not in LEVELS / SM sets: { name: audio file stem, syl: [...] }
const EXTRA = [
  { name: 'בננה', syl: ['בָּ', 'נָ', 'נָה'] },
  { name: 'עננים', syl: ['עֲ', 'נָ', 'נִים'] },
  { name: 'ספה', syl: ['סַ', 'פָּה'] },
  { name: 'קולה', syl: ['קוֹ', 'לָּה'] },
];

const strip = t => t.replace(/[֑-ׇ]/g, '');
const W = [];
LEVELS.slice(0, 6).forEach(l => l.words.forEach(w => { if (EMOJI[w.name]) W.push({ name: w.name, syl: w.tiles }); }));
SM.forEach(set => set.pairs.forEach(p => {
  if (EMOJI[p.name] && !W.some(w => strip(w.name) === strip(p.name)))
    W.push({ name: p.name, syl: set.fixedEnd ? [p.syllable, set.fixed] : [set.fixed, p.syllable] });
}));
EXTRA.forEach(w => { if (!W.some(x => x.name === w.name)) W.push(w); });
const fin = (w, i) => i === w.syl.length - 1;
const usable = W.filter(w => !SKIP.has(w.name)
  && !/^[חעה]ַ$/.test(w.syl[w.syl.length - 1])                       // furtive patach at the end
  && fs.existsSync(path.join(www, 'audio', w.name.replace(/ /g, '_') + '.mp3'))
  && w.syl.every((s, i) => TILE_AUDIO[s + '_' + (fin(w, i) ? 1 : 0)]));

const MAXC = 5, MAXR = 6;   // syllable columns / rows (+1 for the clue gutter); 5 columns still fit 360px
const IDX = {};
usable.forEach(w => w.syl.forEach((s, i) => { (IDX[s + '|' + fin(w, i)] = IDX[s + '|' + fin(w, i)] || []).push(w); }));
const cellsOf = p => p.w.syl.map((s, i) => ({ r: p.dir === 'v' ? p.r + i : p.r, c: p.dir === 'h' ? p.c + i : p.c, s, f: fin(p.w, i) }));

// Valid = crossings agree, fits the size limit, no two cells touch unless they are in the same word,
// and every picture clue (before the first syllable) lands on an empty square.
function valid(placed) {
  const map = new Map(), wordAt = new Map();
  for (let k = 0; k < placed.length; k++) for (const cell of cellsOf(placed[k])) {
    const key = cell.r + ',' + cell.c, d = placed[k].dir;
    const e = map.get(key);
    if (e) { if (e.dirs.has(d) || e.s !== cell.s || e.f !== cell.f) return null; e.dirs.add(d); }
    else map.set(key, { s: cell.s, f: cell.f, dirs: new Set([d]) });
    wordAt.set(key + d, k);
  }
  const rs = [...map.keys()].map(k => +k.split(',')[0]), cs = [...map.keys()].map(k => +k.split(',')[1]);
  const dr = 1 - Math.min(...rs), dc = 1 - Math.min(...cs);
  if (Math.max(...rs) + dr > MAXR || Math.max(...cs) + dc > MAXC) return null;
  for (const key of map.keys()) {
    const [r, c] = key.split(',').map(Number);
    const right = r + ',' + (c + 1), below = (r + 1) + ',' + c;
    if (map.has(right) && !(wordAt.has(key + 'h') && wordAt.get(key + 'h') === wordAt.get(right + 'h'))) return null;
    if (map.has(below) && !(wordAt.has(key + 'v') && wordAt.get(key + 'v') === wordAt.get(below + 'v'))) return null;
  }
  const clues = new Set();
  for (const p of placed) {
    const key = (p.dir === 'v' ? p.r - 1 : p.r) + ',' + (p.dir === 'h' ? p.c - 1 : p.c);
    if (map.has(key) || clues.has(key)) return null;
    clues.add(key);
  }
  return { dr, dc };
}

const target = +process.argv[2] || 3;
const found = new Map();   // word set -> first layout
(function rec(placed) {
  if (placed.length === target) {
    const sig = placed.map(p => p.w.name).sort().join(' · ');
    if (!found.has(sig)) found.set(sig, { placed, v: valid(placed) });
    return;
  }
  if (placed.length === 0) { usable.forEach(w => rec([{ w, r: 10, c: 10, dir: 'h' }])); return; }
  for (const host of placed) for (const cell of cellsOf(host)) for (const cand of IDX[cell.s + '|' + cell.f] || []) {
    if (placed.some(p => p.w.name === cand.name)) continue;
    const dir = host.dir === 'h' ? 'v' : 'h';
    const j = cand.syl.findIndex((s, i) => s === cell.s && fin(cand, i) === cell.f);
    const next = placed.concat([{ w: cand, dir, r: dir === 'v' ? cell.r - j : cell.r, c: dir === 'h' ? cell.c - j : cell.c }]);
    if (valid(next)) rec(next);
  }
})([]);

console.log(`${usable.length} usable words, ${found.size} word sets with ${target} words\n`);
for (const [sig, { placed, v }] of found) {
  console.log(sig);
  placed.forEach(p => console.log(`  { name: '${p.w.name}', syl: [${p.w.syl.map(s => `'${s}'`).join(', ')}], r: ${p.r + v.dr}, c: ${p.c + v.dc}, dir: '${p.dir}' },`));
}
