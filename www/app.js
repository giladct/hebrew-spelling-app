// ---- Word data, grouped by level (each level uses a single niqqud) ----
const LEVELS = [
  {
    label: 'קָמָץ וּפַתַח',
    words: [
      {
        name: 'גמל',
        tiles: ['גָּ', 'מַל']
      },
      {
        name: 'שבת',
        tiles: ['שַׁ', 'בָּת']
      },
      {
        name: 'תמר',
        tiles: ['תָּ', 'מָר']
      },
      {
        name: 'חלב',
        tiles: ['חַ', 'לָּב']
      },
      {
        name: 'גלגל',
        tiles: ['גַּל', 'גַּל']
      },
      {
        name: 'בקר',
        tiles: ['בָּ', 'קָר']
      },
      {
        name: 'מפה',
        tiles: ['מַ', 'פָּה']
      },
      {
        name: 'חלה',
        tiles: ['חַ', 'לָּה']
      },
      {
        name: 'סבא',
        tiles: ['סַ', 'בָּא']
      },
      {
        name: 'מתנה',
        tiles: ['מַ', 'תָּ', 'נָה']
      }
    ]
  },
  {
    label: 'חִירִיק',
    words: [
      {
        name: 'כפית',
        tiles: ['כַּ', 'פִּית']
      },
      {
        name: 'סירים',
        tiles: ['סִי', 'רִים']
      },
      {
        name: 'גירים',
        tiles: ['גִּי', 'רִים']
      },
      {
        name: 'תיקים',
        tiles: ['תִּי', 'קִים']
      },
      {
        name: 'פילים',
        tiles: ['פִּי', 'לִים']
      },
      {
        name: 'סינית',
        tiles: ['סִי', 'נִית']
      },
      {
        name: 'מיצים',
        tiles: ['מִי', 'צִים']
      },
      {
        name: 'טיפה',
        tiles: ['טִי', 'פָּה']
      },
      {
        name: 'חללית',
        tiles: ['חַ', 'לָ', 'לִית']
      },
      {
        name: 'ענבים',
        tiles: ['עֲ', 'נָ', 'בִים']
      }
    ]
  },
  {
    label: 'קָמָץ, פַּתַח וְחִירִיק',
    words: [
      {
        name: 'בית',
        tiles: ['בַּ', 'יִת']
      },
      {
        name: 'מגדל',
        tiles: ['מִגְ', 'דָּל']
      },
      {
        name: 'צמיד',
        tiles: ['צָ', 'מִיד']
      },
      {
        name: 'מכתב',
        tiles: ['מִכְ', 'תָּב']
      },
      {
        name: 'סכין',
        tiles: ['סַ', 'כִּין']
      },
      {
        name: 'גדי',
        tiles: ['גְּ', 'דִי']
      },
      {
        name: 'סירה',
        tiles: ['סִי', 'רָה']
      },
      {
        name: 'פטיש',
        tiles: ['פַּ', 'טִּיש']
      },
      {
        name: 'מיטה',
        tiles: ['מִי', 'טָּה']
      },
      {
        name: 'סכינים',
        tiles: ['סַ', 'כִּי', 'נִים']
      }
    ]
  },
  {
    label: 'חוֹלָם',
    words: [
      {
        name: 'עוגה',
        tiles: ['עוּ', 'גָה']
      },
      {
        name: 'עורב',
        tiles: ['עוֹ', 'רֵב']
      },
      {
        name: 'עוגן',
        tiles: ['עוֹ', 'גֵן']
      },
      {
        name: 'כוכב',
        tiles: ['כּוֹ', 'כָב']
      },
      {
        name: 'ציפור',
        tiles: ['צִי', 'פּוֹר']
      },
      {
        name: 'עולם',
        tiles: ['עוֹ', 'לָם']
      },
      {
        name: 'עופות',
        tiles: ['עוֹ', 'פוֹת']
      },
      {
        name: 'חומה',
        tiles: ['חוֹ', 'מָה']
      },
      {
        name: 'כובע',
        tiles: ['כּוֹ', 'בַע']
      },
      {
        name: 'מקום',
        tiles: ['מָ', 'קוֹם']
      }
    ]
  },
  {
    label: 'צֵירֵה וְסֵגוֹל',
    words: [
      {
        name: 'כלב',
        tiles: ['כֶּ', 'לֶב']
      },
      {
        name: 'ספר',
        tiles: ['סֵ', 'פֶר']
      },
      {
        name: 'פרח',
        tiles: ['פֶּ', 'רַח']
      },
      {
        name: 'עצים',
        tiles: ['עֵ', 'צִים']
      },
      {
        name: 'מלך',
        tiles: ['מֶ', 'לֶך']
      },
      {
        name: 'ביצה',
        tiles: ['בֵּי', 'צָה']
      },
      {
        name: 'עגל',
        tiles: ['עֵ', 'גֶל']
      },
      {
        name: 'גשר',
        tiles: ['גֶּ', 'שֶׁר']
      },
      {
        name: 'בגד',
        tiles: ['בֶּ', 'גֶד']
      },
      {
        name: 'עדר',
        tiles: ['עֵ', 'דֶר']
      }
    ]
  },
  {
    label: 'שׁוּרוּק וְקֻבּוּץ',
    words: [
      {
        name: 'תפוח',
        tiles: ['תַּ', 'פּוּ', 'חַ']
      },
      {
        name: 'תפוז',
        tiles: ['תַּ', 'פּוּז']
      },
      {
        name: 'חומוס',
        tiles: ['חֻ', 'מּוּס']
      },
      {
        name: 'סוכריה',
        tiles: ['סוּ', 'כָּ', 'רִיָּה']
      },
      {
        name: 'כדור',
        tiles: ['כַּ', 'דּוּר']
      },
      {
        name: 'קוקוס',
        tiles: ['קוֹ', 'קוּס']
      },
      {
        name: 'סוסים',
        tiles: ['סוּ', 'סִים']
      },
      {
        name: 'סולם',
        tiles: ['סוּ', 'לָּם']
      },
      {
        name: 'צורה',
        tiles: ['צוּ', 'רָה']
      },
      {
        name: 'סיכה',
        tiles: ['סִי', 'כָּה']
      }
    ]
  },
  {
    label: 'צִמְדֵי מִלִּים',
    words: [
      {
        name: 'קשת בענן',
        tiles: ['קֶ', 'שֶׁת', 'בְּ', 'עָ', 'נָן'],
        groupSizes: [2,3]
      },
      {
        name: 'תיק גב',
        tiles: ['תִּיק', 'גַּב'],
        groupSizes: [1,1]
      },
      {
        name: 'בית ספר',
        tiles: ['בֵּית', 'סֵ', 'פֶר'],
        groupSizes: [1,2]
      },
      {
        name: 'כלב ים',
        tiles: ['כֶּ', 'לֶב', 'יָם'],
        groupSizes: [2,1]
      },
      {
        name: 'דב קוטב',
        tiles: ['דֹּב', 'קוֹ', 'טֶב'],
        groupSizes: [1,2]
      },
      {
        name: 'ירח מלא',
        tiles: ['יָ', 'רֵחַ', 'מָ', 'לֵא'],
        groupSizes: [2,2]
      },
      {
        name: 'גלגל ענק',
        tiles: ['גַּל', 'גַּל', 'עָ', 'נָק'],
        groupSizes: [2,2]
      },
      {
        name: 'גן חיות',
        tiles: ['גַּן', 'חַ', 'יּוֹת'],
        groupSizes: [1,2]
      },
      {
        name: 'כובע קסם',
        tiles: ['כּוֹ', 'בַע', 'קֶ', 'סֶם'],
        groupSizes: [2,2]
      },
      {
        name: 'סל פירות',
        tiles: ['סַל', 'פֵּי', 'רוֹת'],
        groupSizes: [1,2]
      }
    ]
  }
];

// ---- Syllable Match data ----
const SYLLABLE_MATCH_SETS = [
  {
    label: 'הַבָּרוֹת',
    fixed: 'כֶּ',
    pairs: [
      {
        syllable: 'לֶב',
        name: 'כלב'
      },
      {
        syllable: 'תֶר',
        name: 'כתר'
      },
      {
        syllable: 'בֶשׂ',
        name: 'כֶּבֶשׂ'
      }
    ]
  },
  {
    label: 'הַבָרָה שֶׁ',
    fixed: 'שֶׁ',
    pairs: [
      {
        syllable: 'מֶשׁ',
        name: 'שֶׁמֶשׁ'
      },
      {
        syllable: 'לֶג',
        name: 'שֶׁלֶג'
      },
      {
        syllable: 'קֶל',
        name: 'שֶׁקֶל'
      }
    ]
  },
  {
    label: 'הַבָרָה נָ',
    fixed: 'נָ',
    pairs: [
      {
        syllable: 'חָשׁ',
        name: 'נָחָשׁ'
      },
      {
        syllable: 'מֵר',
        name: 'נָמֵר'
      },
      {
        syllable: 'הָר',
        name: 'נָהָר'
      }
    ]
  },
  {
    label: 'הַבָרָה מָ',
    fixed: 'מָ',
    pairs: [
      {
        syllable: 'יִם',
        name: 'מָיִם'
      },
      {
        syllable: 'פָּה',
        name: 'מַפָּה'
      },
      {
        syllable: 'גֵן',
        name: 'מָגֵן'
      }
    ]
  },
  {
    label: 'הַבָרָה סוּ',
    fixed: 'סוּ',
    pairs: [
      {
        syllable: 'סָה',
        name: 'סוּסָה'
      },
      {
        syllable: 'כָּה',
        name: 'סוּכָּה'
      },
      {
        syllable: 'לָּם',
        name: 'סוּלָּם'
      }
    ]
  },
  {
    label: 'הַבָרָה חָ',
    fixed: 'חָ',
    pairs: [
      {
        syllable: 'לָב',
        name: 'חָלָב'
      },
      {
        syllable: 'מוֹר',
        name: 'חֲמוֹר'
      },
      {
        syllable: 'צִיל',
        name: 'חָצִיל'
      }
    ]
  },
  {
    label: 'הַבָרָה לוֹן',
    fixed: 'לוֹן',
    fixedEnd: true,
    pairs: [
      {
        syllable: 'בָּ',
        name: 'בָּלוֹן'
      },
      {
        syllable: 'חַ',
        name: 'חַלּוֹן'
      },
      {
        syllable: 'סָ',
        name: 'סָלוֹן'
      }
    ]
  },
  {
    label: 'הַבָרָה רָה',
    fixed: 'רָה',
    fixedEnd: true,
    pairs: [
      {
        syllable: 'סִי',
        name: 'סִירָה'
      },
      {
        syllable: 'תּוֹ',
        name: 'תּוֹרָה'
      },
      {
        syllable: 'מְנוֹ',
        name: 'מְנוֹרָה'
      }
    ]
  },
  {
    label: 'הַבָרָה צָה',
    fixed: 'צָה',
    fixedEnd: true,
    pairs: [
      {
        syllable: 'בֵּי',
        name: 'בֵּיצָה'
      },
      {
        syllable: 'פִּי',
        name: 'פִּיצָה'
      },
      {
        syllable: 'פְּצָ',
        name: 'פְּצָצָה'
      }
    ]
  },
  {
    label: 'הַבָרָה כָּה',
    fixed: 'כָּה',
    fixedEnd: true,
    pairs: [
      {
        syllable: 'סִי',
        name: 'סִיכָּה'
      },
      {
        syllable: 'מַ',
        name: 'מַכָּה'
      },
      {
        syllable: 'חֲנֻ',
        name: 'חֲנֻכָּה'
      }
    ]
  },
  {
    label: 'הַבָרָה לָּה',
    fixed: 'לָּה',
    fixedEnd: true,
    pairs: [
      {
        syllable: 'כַּ',
        name: 'כַּלָּה'
      },
      {
        syllable: 'חַ',
        name: 'חַלָּה'
      },
      {
        syllable: 'תְּפִ',
        name: 'תְּפִלָּה'
      }
    ]
  }
];

// SM_FIXED_END_START separates the two SM stage-card groups:
//   indices 0..(SM_FIXED_END_START-1) = "last syllable varies" (fixed prefix)
//   indices SM_FIXED_END_START..end   = "first syllable varies" (fixed suffix, fixedEnd:true)
const SM_FIXED_END_START = SYLLABLE_MATCH_SETS.findIndex(s => s.fixedEnd);

// ---- Stage 10: Two Words data ----
const DUAL_WORD_PUZZLES = [
  ['גמל', 'חלה'],
  ['תמר', 'חלב'],
  ['כפית', 'טיפה'],
  ['בית', 'מיטה'],
  ['עוגה', 'כוכב'],
  ['כלב', 'ספר'],
  ['פרח', 'עגל'],
  ['תפוח', 'כדור'],
  ['סכין', 'מפה'],
  ['ציפור', 'חומה'],
];

// ============================================================
// APP STRUCTURE
// One <div> per screen, all direct children of #app (index.html). showScreen(el) shows one and hides
// the rest; showHome() rebuilds the stage cards and shows the home screen.
//
// STAGES  (number shown = LEVELS.length + stageOffset; LEVELS.length is 7)
//   #     screen               game                                   COMPLETED_KEY entry
//   1-7   gameScreen           build the word from syllables (LEVELS)   0-6
//   8     syllableMatchScreen  last syllable varies                     7
//   9     syllableMatchScreen  first syllable varies                    8
//   10    dualWordScreen       two words                                9
//   11-12 camelScreen          hear a word, pick it (CAMEL_STAGES)      10, 11
//   13    sentenceScreen       order a 3-word sentence                  12
//   14-15 memScreen            memory word<->picture (MEM_STAGES)       13, 16
//   16-17 xwScreen             syllable crossword (CROSSWORD_STAGES)    14, 15
//   Home-screen sections: STAGE_GROUPS (by shown number).
//   COMPLETED_KEY entries are stored in users' devices, so never renumber them; renumbering the shown
//   stage number (stageOffset) is safe. Adding a level to LEVELS would shift every LEVELS.length-based
//   key - avoid, or migrate saved progress.
//
// AUDIO SYSTEM
//   Tile taps:  TILE_AUDIO[syllable + "_" + (isFinal?"1":"0")] -> tile_NNN.mp3  (+TTS fallback)
//   Words:      playAudioFile("audio/{name}.mp3") via speakWord / speakAudio     (+TTS fallback)
//   Both share a single AudioContext (_audioCtx / getAudioCtx)
//   Tile sounds use is_final to get the right pronunciation for syllable position in the word
//   New audio: generate_audio.py (stages 1-10), generate_camel_audio.py, generate_sentence_audio.py,
//   generate_crossword_audio.py - each skips files that already exist.
//
// LOCALSTORAGE
//   PROGRESS_KEY:  { level, index } - which word the user was on in stages 1-7 (restored on resume)
//   COMPLETED_KEY: [0,1,...] - completed stage entries (table above)
// ============================================================

function lookupWord(name) {
  for (const level of LEVELS) {
    const found = level.words.find(w => w.name === name);
    if (found) return found;
  }
  return null;
}

let currentLevel = 0;
let currentIndex = 0;
let currentWord = null;
let tray = [];   // array of {id, letter, el}
let slotState = []; // array of letter or null, by slot index

let wordAttempts = 0;

let smSet = null;
let smSetIndex = 0;
let smEndIndex = 0;
let smCompleted = [];
let smPicOrder = [];

const PRAISE_PHRASES = [
  'מְעוּלֶּה',
  'מַדְהִים',
  'כָּל הַכָּבוֹד',
  'נִפְלָא',
  'יָפֶה מְאֹד',
  'מְצֻיָּן',
  'טוֹב מְאֹד',
  'נֶהְדָּר'
];
function randomPraise() {
  return PRAISE_PHRASES[Math.floor(Math.random() * PRAISE_PHRASES.length)];
}

const pictureBox = document.getElementById('pictureBox');
const slotsEl = document.getElementById('slots');
const trayEl = document.getElementById('tray');
const feedbackEl = document.getElementById('feedback');
const nextBtn = document.getElementById('nextBtn');
const hintBtn = document.getElementById('hintBtn');
const skipBtn = document.getElementById('skipBtn');
const wordIndexEl = document.getElementById('wordIndex');
const wordTotalEl = document.getElementById('wordTotal');
const homeScreen = document.getElementById('homeScreen');
const gameScreen = document.getElementById('gameScreen');
const stageCardsEl = document.getElementById('stageCards');
const continueBtn = document.getElementById('continueBtn');
const nextLevelBtn = document.getElementById('nextLevelBtn');
const homeBtn = document.getElementById('homeBtn');
const syllableMatchScreen = document.getElementById('syllableMatchScreen');
const smHomeBtn = document.getElementById('smHomeBtn');
const smSkipBtn = document.getElementById('smSkipBtn');
const smTitle = document.getElementById('smTitle');
const gameStageNumEl = document.getElementById('gameStageNum');
const smTileBar = document.getElementById('smTileBar');
const smRows = document.getElementById('smRows');

// Speak syllable when clicking a completed tile or filled slot (event delegation — survives re-renders)
smTileBar.addEventListener('click', (e) => {
  const tile = e.target.closest('.smTile');
  if (tile && smCompleted.length >= smSet?.pairs.length) {
    speakSmSyllable(tile.textContent, false);
  }
});
smRows.addEventListener('click', (e) => {
  const slot = e.target.closest('.smSlot.filled');
  if (slot && smSet) {
    speakSmSyllable(smSet.pairs[parseInt(slot.dataset.pairIdx)].syllable, false);
  }
});
const smFeedbackEl = document.getElementById('smFeedback');
const attemptsEl = document.getElementById('attemptsEl');
const attemptsCountEl = document.getElementById('attemptsCount');
const headerLevelTitle = document.getElementById('headerLevelTitle');

const dualWordScreen = document.getElementById('dualWordScreen');
const camelScreen = document.getElementById('camelScreen');
const dw10HomeBtn = document.getElementById('dw10HomeBtn');
const dw10SkipBtn = document.getElementById('dw10SkipBtn');
const dw10TitleEl = document.getElementById('dw10Title');
const dw10RowsEl = document.getElementById('dw10Rows');
const dw10TrayEl = document.getElementById('dw10Tray');
const dw10FeedbackEl = document.getElementById('dw10Feedback');

const STAGE_COLORS = ['#3a6fa8', '#7b5ea7', '#c4663a', '#4a8b5f', '#a64545', '#3a8a7a', '#c4a010'];
const STAGE_ICONS  = ['🐫', '🐘', '🏠', '⭐', '📚', '🍎', '🌈', '🧩', '🦜', '🎯'];

const EMOJI_MAP = {
  // Level 1
  'גמל':'🐪', 'שבת':'🕯️🕯️', 'תמר':'🌴', 'חלב':'🥛', 'גלגל':'🛞',
  'בקר':'🐄', 'מפה':'🗺️', 'חלה':'🍞', 'סבא':'👴', 'מתנה':'🎁',
  // Level 2
  'כפית':'🥄', 'סירים':'🍲🍲', 'גירים':'🖍️🖍️', 'תיקים':'🎒🎒', 'פילים':'🐘🐘',
  'סינית':'🥢', 'מיצים':'🧃🧃', 'טיפה':'💧', 'חללית':'🚀', 'ענבים':'🍇',
  // Level 3
  'בית':'🏠', 'מגדל':'🗼', 'צמיד':'📿', 'מכתב':'✉️', 'סכין':'🔪',
  'גדי':'🐐', 'סירה':'⛵', 'פטיש':'🔨', 'מיטה':'🛏️', 'סכינים':'🔪🔪',
  // Level 4
  'עוגה':'🎂', 'עורב':'🐦‍⬛', 'עוגן':'⚓', 'כוכב':'⭐', 'ציפור':'🐦',
  'עולם':'🌍', 'עופות':'🐓🐓', 'חומה':'🧱', 'כובע':'🎩', 'מקום':'📍',
  // Level 5
  'כלב':'🐕', 'ספר':'📖', 'פרח':'🌸', 'עצים':'🌲🌲', 'מלך':'🫅',
  'ביצה':'🥚', 'עגל':'🐮', 'גשר':'🌉', 'בגד':'👕', 'עדר':'🐑🐑',
  // Level 6
  'תפוח':'🍎', 'תפוז':'🍊', 'חומוס':'🥣', 'סוכריה':'🍬', 'כדור':'⚽',
  'קוקוס':'🥥', 'סוסים':'🐎🐎', 'סולם':'🪜', 'צורה':'🔷', 'סיכה':'📌',
  // Level 7
  'קשת בענן':'🌈', 'תיק גב':'🎒', 'בית ספר':'🏫', 'כלב ים':'🦭',
  'דב קוטב':'🐻‍❄️', 'ירח מלא':'🌕', 'גלגל ענק':'🎡', 'גן חיות':'🦁',
  'כובע קסם':'🎩', 'סל פירות':'🧺',
  // SM pairs not in LEVELS
  'כתר':'👑', 'כֶּבֶשׂ':'🐑',
  'שֶׁמֶשׁ':'☀️', 'שֶׁלֶג':'⛄', 'שֶׁקֶל':'🪙',
  'נָחָשׁ':'🐍', 'נָמֵר':'🐆', 'נָהָר':'🏞️',
  'מָיִם':'💦', 'מָגֵן':'✡️',
  'סוּסָה':'🐴', 'סוּכָּה':'🛖', 'סוּלָּם':'🪜',
  'חָלָב':'🥛', 'חֲמוֹר':'🫏', 'חָצִיל':'🍆',
  'בָּלוֹן':'🎈', 'חַלּוֹן':'🪟', 'סָלוֹן':'🛋️',
  'סִירָה':'⛵', 'תּוֹרָה':'📜', 'מְנוֹרָה':'🪔',
  'מַפָּה':'🗺️', 'בֵּיצָה':'🥚', 'פִּיצָה':'🍕', 'פְּצָצָה':'💣',
  'סִיכָּה':'📌', 'מַכָּה':'💥', 'חֲנֻכָּה':'🕎',
  'כַּלָּה':'👰', 'חַלָּה':'🍞', 'תְּפִלָּה':'🙏',
};

function currentWords() {
  return LEVELS[currentLevel].words;
}

// One home-screen card. num = stage number shown, completedKey = its COMPLETED_KEY entry.
function makeStageCard(num, completedKey, icon, color, label, onClick, completed) {
  const card = document.createElement('button');
  card.className = 'stageCard' + (completed.has(completedKey) ? ' completed' : '');
  card.style.setProperty('--card-color', color);
  card.innerHTML = `<span class="stageIcon">${icon}</span><span class="stageLabelRow"><span class="stageNum">${num}</span><span class="stageLabel">${label}</span></span>`;
  card.addEventListener('click', onClick);
  stageCardsEl.appendChild(card);
}

// Creates every stage card (any order), then groupStageCards() sorts them into STAGE_GROUPS.
function buildStageCards() {
  const completed = getCompletedLevels();
  const L = LEVELS.length;
  stageCardsEl.innerHTML = '';
  LEVELS.forEach((lvl, i) => {
    makeStageCard(i + 1, i, STAGE_ICONS[i] || '', STAGE_COLORS[i % STAGE_COLORS.length], lvl.label, () => startStage(i), completed);
  });
  makeStageCard(L + 1, L, STAGE_ICONS[L] || '🧩', '#b02878', 'הַבָרָה אַחֲרוֹנָה מִשְׁתַּנָּה',
    () => startSyllableMatch(0, SM_FIXED_END_START - 1), completed);
  makeStageCard(L + 2, L + 1, STAGE_ICONS[L + 1] || '🔡', '#6aa014', 'הַבָרָה רִאשׁוֹנָה מִשְׁתַּנָּה',
    () => startSyllableMatch(SM_FIXED_END_START), completed);
  makeStageCard(L + 3, L + 2, STAGE_ICONS[L + 2] || '🎯', '#3838a8', 'שְׁתֵּי מִלִּים', () => startDualWord(0), completed);
  CAMEL_STAGES.forEach(cfg => {
    makeStageCard(L + cfg.stageOffset, L + cfg.completedOffset, cfg.icon, cfg.color, cfg.title, () => startCamel(cfg), completed);
  });
  makeStageCard(L + 6, L + 5, '📝', '#2f8f83', 'סַדְּרוּ אֶת הַמִּשְׁפָּט', startSentences, completed);
  MEM_STAGES.forEach(cfg => {
    makeStageCard(L + cfg.stageOffset, L + cfg.completedOffset, cfg.icon, cfg.color, cfg.title, () => startMemory(cfg), completed);
  });
  CROSSWORD_STAGES.forEach(cfg => {
    makeStageCard(L + cfg.stageOffset, L + cfg.completedOffset, cfg.icon, cfg.color, cfg.title, () => startCrossword(cfg), completed);
  });
  groupStageCards();
}

// Home-screen sections. Each card is found by the stage number it shows, then regrouped here.
const STAGE_GROUPS = [
  { title: 'קְרִיאָה – מַתְחִילִים', stages: [1, 2, 3, 4, 5, 6] },
  { title: 'קְרִיאָה – מִתְקַדְּמִים', stages: [7, 8, 9, 10] },
  { title: 'קְרִיאָה מְדֻיֶּקֶת', stages: [11, 12] },
  { title: 'מִשְׁפָּטִים', stages: [13] },
  { title: 'מִשְׂחָקִים', stages: [14, 15, 16, 17] },
];

function groupStageCards() {
  const byNum = {};
  Array.from(stageCardsEl.children).forEach(c => { byNum[c.querySelector('.stageNum').textContent.trim()] = c; });
  stageCardsEl.innerHTML = '';
  STAGE_GROUPS.forEach(group => {
    const section = document.createElement('section');
    section.className = 'stageGroup';
    const title = document.createElement('h2');
    title.className = 'stageGroupTitle';
    title.textContent = group.title;
    const grid = document.createElement('div');
    grid.className = 'stageGroupGrid';
    group.stages.forEach(n => { if (byNum[n]) grid.appendChild(byNum[n]); });
    section.appendChild(title);
    section.appendChild(grid);
    stageCardsEl.appendChild(section);
  });
}

// Show one screen (a direct child <div> of #app) and hide all the others.
function showScreen(screen) {
  document.querySelectorAll('#app > div').forEach(d => d.classList.toggle('hidden', d !== screen));
}

function showHome() {
  buildStageCards();
  const completed = getCompletedLevels();
  const nextLevel = Array.from({length: LEVELS.length}, (_, i) => i).find(i => !completed.has(i));
  if (nextLevel !== undefined && completed.size > 0) {
    nextLevelBtn.textContent = 'לְשָׁלָב ' + (nextLevel + 1) + ' ←';
    nextLevelBtn.classList.remove('hidden');
  } else {
    nextLevelBtn.classList.add('hidden');
  }
  continueBtn.classList.toggle('hidden', !hasSavedProgress());
  showScreen(homeScreen);
}

function showGame() {
  showScreen(gameScreen);
}

function startStage(level, index = 0) {
  currentLevel = level;
  currentIndex = index;
  showGame();
  loadWord(currentIndex);
}

homeBtn.addEventListener('click', showHome);
continueBtn.addEventListener('click', () => startStage(currentLevel, currentIndex));

function isWideTile(letter) {
  return (letter.match(/[א-ת]/g) || []).length > 1;
}

function shuffle(arr) {
  const a = arr.slice();
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

const PROGRESS_KEY = 'hebrewSpellingProgress';
const COMPLETED_KEY = 'hebrewSpellingCompleted';

function getCompletedLevels() {
  try {
    return new Set(JSON.parse(localStorage.getItem(COMPLETED_KEY)) || []);
  } catch (e) {
    return new Set();
  }
}

function markLevelComplete(level) {
  try {
    const completed = getCompletedLevels();
    completed.add(level);
    localStorage.setItem(COMPLETED_KEY, JSON.stringify([...completed]));
  } catch (e) {}
}

function saveProgress() {
  try {
    localStorage.setItem(PROGRESS_KEY, JSON.stringify({ level: currentLevel, index: currentIndex }));
  } catch (e) {
    // localStorage unavailable (e.g. private mode) - progress just won't persist
  }
}

function hasSavedProgress() {
  try {
    const saved = JSON.parse(localStorage.getItem(PROGRESS_KEY));
    return !!(saved && LEVELS[saved.level] && LEVELS[saved.level].words[saved.index]);
  } catch (e) {
    return false;
  }
}

function restoreProgress() {
  try {
    const saved = JSON.parse(localStorage.getItem(PROGRESS_KEY));
    if (saved && LEVELS[saved.level] && LEVELS[saved.level].words[saved.index]) {
      currentLevel = saved.level;
      currentIndex = saved.index;
    }
  } catch (e) {
    // ignore corrupt/missing saved progress
  }
}

function loadWord(index) {
  currentWord = currentWords()[index];
  saveProgress();
  headerLevelTitle.textContent = LEVELS[currentLevel].label;
  gameStageNumEl.textContent = currentLevel + 1;
  wordIndexEl.textContent = index + 1;
  wordTotalEl.textContent = currentWords().length;
  pictureBox.textContent = EMOJI_MAP[currentWord.name] || '';
  feedbackEl.textContent = '';
  feedbackEl.className = '';
  nextBtn.classList.add('hidden');
  wordAttempts = 0;
  attemptsEl.classList.add('hidden');

  slotState = new Array(currentWord.tiles.length).fill(null);
  slotsEl.innerHTML = '';
  const effectiveWidth = currentWord.tiles.reduce((sum, t) => sum + (isWideTile(t) ? 1.5 : 1), 0);
  slotsEl.classList.toggle('compact', effectiveWidth > 4);
  trayEl.classList.toggle('compact', effectiveWidth > 4);
  const groupBoundaries = new Set();
  if (currentWord.groupSizes) {
    let sum = 0;
    for (const size of currentWord.groupSizes.slice(0, -1)) {
      sum += size;
      groupBoundaries.add(sum);
    }
  }
  for (let i = 0; i < currentWord.tiles.length; i++) {
    if (groupBoundaries.has(i)) {
      const gap = document.createElement('div');
      gap.className = 'wordGap';
      slotsEl.appendChild(gap);
    }
    const slot = document.createElement('div');
    slot.className = 'slot';
    slot.dataset.index = i;
    if (isWideTile(currentWord.tiles[i])) slot.classList.add('wide');
    slotsEl.appendChild(slot);
  }

  const groupSizesForSpeech = currentWord.groupSizes || [currentWord.tiles.length];
  const finalIndices = new Set();
  let gIdx = 0;
  for (const size of groupSizesForSpeech) {
    finalIndices.add(gIdx + size - 1);
    gIdx += size;
  }

  const order = shuffle(currentWord.tiles.map((_, i) => i));
  trayEl.innerHTML = '';
  tray = order.map(tileIndex => {
    const letter = currentWord.tiles[tileIndex];
    const tile = document.createElement('div');
    tile.className = 'tile';
    if (isWideTile(letter)) tile.classList.add('wide');
    tile.textContent = letter;
    tile.dataset.letter = letter;
    tile.dataset.final = finalIndices.has(tileIndex) ? '1' : '0';
    trayEl.appendChild(tile);
    attachDrag(tile);
    return tile;
  });
  setTimeout(() => speakWord(currentWord), 600);
}

// ---- Drag & drop via Pointer Events ----
let dragData = null;

function attachDrag(tile) {
  tile.addEventListener('pointerdown', onPointerDown);
}

function onPointerDown(e) {
  const tile = e.currentTarget;
  speakLetter(tile.dataset.letter, tile.dataset.final === '1');
  if (tile.dataset.locked === '1') return;
  tile.setPointerCapture(e.pointerId);
  const rect = tile.getBoundingClientRect();
  dragData = {
    tile,
    offsetX: e.clientX - rect.left,
    offsetY: e.clientY - rect.top,
    startX: e.clientX,
    startY: e.clientY,
    fromSlot: tile.parentElement.classList.contains('slot') ? tile.parentElement : null,
    width: rect.width,
    height: rect.height
  };
  tile.classList.add('dragging');
  tile.style.left = rect.left + 'px';
  tile.style.top = rect.top + 'px';
  tile.style.width = rect.width + 'px';
  tile.style.height = rect.height + 'px';
  document.body.appendChild(tile);

  tile.addEventListener('pointermove', onPointerMove);
  tile.addEventListener('pointerup', onPointerUp);
}

function onPointerMove(e) {
  if (!dragData) return;
  dragData.tile.style.left = (e.clientX - dragData.offsetX) + 'px';
  dragData.tile.style.top = (e.clientY - dragData.offsetY) + 'px';
}

const TAP_THRESHOLD = 8;

function onPointerUp(e) {
  if (!dragData) return;
  const { tile, fromSlot, startX, startY } = dragData;
  tile.classList.remove('dragging');
  tile.removeEventListener('pointermove', onPointerMove);
  tile.removeEventListener('pointerup', onPointerUp);

  tile.style.position = '';
  tile.style.left = '';
  tile.style.top = '';
  tile.style.width = '';
  tile.style.height = '';

  const movedDistance = Math.hypot(e.clientX - startX, e.clientY - startY);
  if (movedDistance < TAP_THRESHOLD) {
    if (!fromSlot) {
      const emptyIndex = slotState.findIndex(s => s === null);
      if (emptyIndex !== -1) {
        // data-index not DOM position — wordGap divs shift children
        const targetSlot = slotsEl.querySelector(`.slot[data-index="${emptyIndex}"]`);
        targetSlot.appendChild(tile);
        targetSlot.classList.add('filled');
        targetSlot.classList.remove('correct', 'wrong');
        slotState[emptyIndex] = tile.dataset.letter;
        clearCheckStateExcept();
      } else {
        trayEl.appendChild(tile);
      }
    } else {
      fromSlot.classList.remove('filled', 'correct', 'wrong');
      slotState[fromSlot.dataset.index] = null;
      trayEl.appendChild(tile);
      clearCheckStateExcept();
    }
    dragData = null;
    maybeCheck();
    return;
  }

  tile.style.visibility = 'hidden';
  const targetEl = document.elementFromPoint(e.clientX, e.clientY);
  tile.style.visibility = 'visible';

  const targetSlot = targetEl ? targetEl.closest('.slot') : null;
  const targetTray = targetEl ? targetEl.closest('#tray') : null;

  if (targetSlot && !targetSlot.classList.contains('filled')) {
    // place into target slot
    if (fromSlot) {
      fromSlot.classList.remove('filled');
      slotState[fromSlot.dataset.index] = null;
    }
    targetSlot.appendChild(tile);
    targetSlot.classList.add('filled');
    targetSlot.classList.remove('correct', 'wrong');
    slotState[targetSlot.dataset.index] = tile.dataset.letter;
    clearCheckStateExcept();
  } else if (targetTray || !targetSlot) {
    // dropped on the tray (or empty space) - pull it back to the tray
    if (fromSlot) {
      fromSlot.classList.remove('filled');
      slotState[fromSlot.dataset.index] = null;
      clearCheckStateExcept();
    }
    trayEl.appendChild(tile);
  } else {
    // dropped on an occupied slot - snap back to where it came from
    if (fromSlot) {
      fromSlot.appendChild(tile);
    } else {
      trayEl.appendChild(tile);
    }
  }

  dragData = null;
  maybeCheck();
}

function clearCheckStateExcept() {
  feedbackEl.textContent = '';
  feedbackEl.className = '';
  nextBtn.classList.add('hidden');
}

function maybeCheck() {
  if (slotState.every(s => s !== null)) {
    checkAnswer();
  }
}

function checkAnswer() {
  // .slot not .children — wordGap divs shift indices
  const slots = Array.from(slotsEl.querySelectorAll('.slot'));
  let allCorrect = true;
  slots.forEach((slot, i) => {
    const correct = slotState[i] === currentWord.tiles[i];
    slot.classList.toggle('correct', correct);
    slot.classList.toggle('wrong', !correct);
    if (!correct) allCorrect = false;
  });

  if (allCorrect) {
    slots.forEach(slot => {
      const t = slot.firstElementChild;
      t.dataset.locked = '1';
      t.style.cursor = 'pointer';
    });
    playSuccess();
    attemptsEl.classList.add('hidden');

    if (currentIndex === currentWords().length - 1) {
      feedbackEl.textContent = 'כָּל הַכָּבוֹד! סִיַּמְתָּ אֶת הַשָּׁלָב! 🎉';
      feedbackEl.className = 'success';
      nextBtn.classList.remove('hidden');
    } else {
      feedbackEl.textContent = randomPraise() + '! ✓';
      feedbackEl.className = 'success';
      nextBtn.classList.remove('hidden');
    }
  } else {
    feedbackEl.textContent = 'נַסֵּה שׁוּב';
    feedbackEl.className = 'error';
    playError();
    wordAttempts++;
    attemptsEl.classList.remove('hidden');
    attemptsCountEl.textContent = wordAttempts;
    slotsEl.classList.add('shake');
    setTimeout(() => {
      slotsEl.classList.remove('shake');
      slots.forEach((slot, i) => {
        if (!slot.classList.contains('correct')) {
          const tile = slot.firstElementChild;
          if (tile) {
            trayEl.appendChild(tile);
          }
          slot.classList.remove('filled', 'wrong');
          slotState[i] = null;
        }
      });
      feedbackEl.textContent = '';
      feedbackEl.className = '';
    }, 800);
  }
}

const smNextBtn = document.getElementById('smNextBtn');
const dw10NextBtn = document.getElementById('dw10NextBtn');

nextBtn.addEventListener('click', () => {
  if (currentIndex === currentWords().length - 1) {
    markLevelComplete(currentLevel);
    showHome();
  } else {
    currentIndex = (currentIndex + 1) % currentWords().length;
    loadWord(currentIndex);
  }
});

nextLevelBtn.addEventListener('click', () => {
  const completed = getCompletedLevels();
  const nextLevel = Array.from({length: LEVELS.length}, (_, i) => i).find(i => !completed.has(i));
  if (nextLevel !== undefined) startStage(nextLevel);
});

hintBtn.addEventListener('click', () => {
  speakWord(currentWord);
});

skipBtn.addEventListener('click', () => {
  currentIndex = (currentIndex + 1) % currentWords().length;
  loadWord(currentIndex);
});

let hebrewVoice = null;
function pickHebrewVoice() {
  const voices = speechSynthesis.getVoices();
  hebrewVoice = voices.find(v => v.lang && v.lang.startsWith('he')) || null;
}
if ('speechSynthesis' in window) {
  pickHebrewVoice();
  speechSynthesis.addEventListener('voiceschanged', pickHebrewVoice);
}

function isNativeApp() {
  return !!(window.Capacitor && window.Capacitor.isNativePlatform && window.Capacitor.isNativePlatform());
}

function speak(text) {
  if (isNativeApp()) {
    const tts = window.Capacitor.Plugins.TextToSpeech;
    tts.stop().catch(() => {});
    tts.speak({ text, lang: 'he-IL', rate: 0.85, category: 'ambient' })
      .catch(err => console.error('native TTS error', err));
    return;
  }

  if (!('speechSynthesis' in window)) {
    console.warn('speechSynthesis not supported in this browser');
    return;
  }
  // cancel only if speaking — speak() right after cancel() in same tick drops the utterance (Chrome bug)
  if (speechSynthesis.speaking || speechSynthesis.pending) {
    speechSynthesis.cancel();
  }
  const utterance = new SpeechSynthesisUtterance(text);
  const voices = speechSynthesis.getVoices();
  const voice = hebrewVoice || voices[0] || null;
  utterance.voice = voice || undefined;
  utterance.lang = voice ? voice.lang : 'he-IL';
  utterance.rate = 0.85;
  utterance.onerror = (e) => console.error('speech error', e.error);
  speechSynthesis.speak(utterance);
}

const PATACH = 'ַ';
const DAGESH = 'ּ';
const RAFE = 'ֿ';

// Undageshed ב/כ/פ should sound soft (v/kh/f); rafe makes that explicit for TTS.
function withRafe(tile) {
  let result = '';
  for (let i = 0; i < tile.length; i++) {
    const ch = tile[i];
    result += ch;
    if (/[בכפ]/.test(ch)) {
      let j = i + 1;
      let hasDagesh = false;
      while (j < tile.length && !/[א-ת]/.test(tile[j])) {
        if (tile[j] === DAGESH) hasDagesh = true;
        j++;
      }
      if (!hasDagesh) result += RAFE;
    }
  }
  return result;
}

// Furtive patach (ח/ע/ה + patach) is spoken before the consonant — reorder for TTS.
function isFurtivePatach(tile) {
  return tile.length === 2 && tile.charAt(1) === PATACH && /[חעה]/.test(tile.charAt(0));
}

function furtiveToSpeech(tile) {
  return 'א' + PATACH + tile.charAt(0);
}

function speakWord(word) {
  const filename = 'audio/' + word.name.replace(/ /g, '_') + '.mp3';
  playAudioFile(filename, () => speak(word.name));
}

let _audioCtx = null;
function getAudioCtx() {
  if (!_audioCtx) _audioCtx = new (window.AudioContext || window.webkitAudioContext)();
  return _audioCtx;
}

async function playAudioFile(path, fallback) {
  try {
    const ctx = getAudioCtx();
    if (ctx.state === 'suspended') await ctx.resume();
    const resp = await fetch(path + '?v=3');
    if (!resp.ok) throw new Error('not found');
    const buf = await ctx.decodeAudioData(await resp.arrayBuffer());
    const src = ctx.createBufferSource();
    src.buffer = buf;
    src.connect(ctx.destination);
    src.start(0);
  } catch (e) {
    fallback();
  }
}

function speakLetter(letter, isFinalTile) {
  if (typeof TILE_AUDIO !== 'undefined') {
    const filename = TILE_AUDIO[letter + '_' + (isFinalTile ? '1' : '0')];
    if (filename) {
      playAudioFile('audio/' + filename, () => speakLetterViaTTS(letter, isFinalTile));
      return;
    }
  }
  speakLetterViaTTS(letter, isFinalTile);
}

function speakLetterViaTTS(letter, isFinalTile) {
  if (isFinalTile && isFurtivePatach(letter)) {
    speak(withRafe(furtiveToSpeech(letter)));
    return;
  }
  // Bare-patach tiles get a silent aleph so TTS doesn't add a trailing glide ("תַּ" → "תַּא").
  const endsInBarePatach = letter.charAt(letter.length - 1) === PATACH;
  speak(withRafe(letter) + (endsInBarePatach ? 'א' : ''));
}

// SM fixedEnd: determines which syllable is "final" (word-ending position affects pronunciation)
//   fixedEnd=false (prefix sets): fixed is at start (pos 0), variable at end (pos 1 = final)
//     → speakSmSyllable(variable, isFixed=false) → isFinal=true; fixed → isFinal=false
//   fixedEnd=true (suffix sets): variable is at start (pos 0), fixed at end (pos 1 = final)
//     → speakSmSyllable(variable, isFixed=false) → isFinal=false; fixed → isFinal=true
function speakSmSyllable(syllable, isFixed) {
  const isFinal = isFixed ? !!(smSet && smSet.fixedEnd) : !(smSet && smSet.fixedEnd);
  speakLetter(syllable, isFinal);
}

// ---- Audio feedback ----
function playTone(freq, start, duration, type = 'sine') {
  const ctx = getAudioCtx();
  const osc = ctx.createOscillator();
  const gain = ctx.createGain();
  osc.type = type;
  osc.frequency.value = freq;
  gain.gain.setValueAtTime(0.2, ctx.currentTime + start);
  gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + start + duration);
  osc.connect(gain);
  gain.connect(ctx.destination);
  osc.start(ctx.currentTime + start);
  osc.stop(ctx.currentTime + start + duration);
}

function playSuccess() {
  playTone(523.25, 0, 0.15);
  playTone(659.25, 0.15, 0.15);
  playTone(783.99, 0.3, 0.25);
}

function playError() {
  playTone(180, 0, 0.3, 'sawtooth');
}

// ---- Shared helpers used by several games ----
// Plays audio/<text>.mp3 (text may carry niqqud - it is the file name); device TTS if the file is missing.
function speakAudio(text) {
  playAudioFile('audio/' + text + '.mp3', () => speak(text));
}

// Stars flying out of an element (the element must be position: relative).
function sparkle(btn) {
  const icons = ['⭐', '✨'];
  for (let i = 0; i < 8; i++) {
    const sp = document.createElement('span');
    sp.className = 'sparkle';
    sp.textContent = icons[i % 2];
    const angle = (i / 8) * Math.PI * 2;
    sp.style.setProperty('--dx', Math.round(Math.cos(angle) * 70) + 'px');
    sp.style.setProperty('--dy', Math.round(Math.sin(angle) * 34) + 'px');
    btn.appendChild(sp);
    setTimeout(() => sp.remove(), 950);
  }
}

// Full-screen confetti for finishing a stage; removed by itself after ~5 s.
function showConfetti() {
  const old = document.getElementById('confetti');
  if (old) old.remove();
  const box = document.createElement('div');
  box.id = 'confetti';
  const colors = ['#ef5350', '#ffca28', '#66bb6a', '#42a5f5', '#ab47bc', '#ff7043'];
  for (let i = 0; i < 48; i++) {
    const p = document.createElement('span');
    p.className = 'confettiPiece';
    p.style.left = Math.random() * 100 + '%';
    p.style.setProperty('--color', colors[i % colors.length]);
    p.style.setProperty('--dur', (2.2 + Math.random() * 1.6).toFixed(2) + 's');
    p.style.setProperty('--delay', (Math.random() * 0.8).toFixed(2) + 's');
    p.style.setProperty('--drift', Math.round(Math.random() * 120 - 60) + 'px');
    box.appendChild(p);
  }
  document.body.appendChild(box);
  setTimeout(() => box.remove(), 4800);
}

// ---- Syllable Match game logic ----
smHomeBtn.addEventListener('click', showHome);

smSkipBtn.addEventListener('click', () => {
  const nextIdx = smSetIndex + 1;
  if (nextIdx <= smEndIndex) {
    startSyllableMatch(nextIdx, smEndIndex);
  } else {
    showHome();
  }
});

let smDragData = null;

function attachSmTileDrag(tile) {
  tile.style.cursor = 'grab';
  tile.style.touchAction = 'none';
  tile.addEventListener('pointerdown', onSmTilePointerDown);
}

function onSmTilePointerDown(e) {
  if (!smSet || smCompleted.length >= smSet.pairs.length) return;
  const tile = e.currentTarget;
  speakSmSyllable(tile.textContent, false);
  tile.setPointerCapture(e.pointerId);
  const rect = tile.getBoundingClientRect();
  smDragData = {
    el: tile,
    pairIdx: parseInt(tile.dataset.pairIdx),
    offsetX: e.clientX - rect.left,
    offsetY: e.clientY - rect.top,
    startX: e.clientX,
    startY: e.clientY,
  };
  tile.classList.add('dragging');
  tile.style.left = rect.left + 'px';
  tile.style.top = rect.top + 'px';
  tile.style.width = rect.width + 'px';
  tile.style.height = rect.height + 'px';
  document.body.appendChild(tile);
  tile.addEventListener('pointermove', onSmTilePointerMove);
  tile.addEventListener('pointerup', onSmTilePointerUp);
}

function onSmTilePointerMove(e) {
  if (!smDragData) return;
  const tile = smDragData.el;
  tile.style.left = (e.clientX - smDragData.offsetX) + 'px';
  tile.style.top  = (e.clientY - smDragData.offsetY) + 'px';
  const tileRect = tile.getBoundingClientRect();
  document.querySelectorAll('.smSlot').forEach(s => {
    const sr = s.getBoundingClientRect();
    const touches = Math.min(tileRect.right, sr.right) > Math.max(tileRect.left, sr.left) &&
                    Math.min(tileRect.bottom, sr.bottom) > Math.max(tileRect.top, sr.top);
    s.classList.toggle('drag-over', touches);
  });
}

function onSmTilePointerUp(e) {
  if (!smDragData) return;
  const { el: tile, pairIdx, startX, startY } = smDragData;
  smDragData = null;
  document.querySelectorAll('.smSlot').forEach(s => s.classList.remove('drag-over'));
  tile.removeEventListener('pointermove', onSmTilePointerMove);
  tile.removeEventListener('pointerup', onSmTilePointerUp);

  const movedDistance = Math.hypot(e.clientX - startX, e.clientY - startY);

  let bestSlot = null;
  if (movedDistance >= TAP_THRESHOLD) {
    const tileRect = tile.getBoundingClientRect();
    let bestOverlap = 0;
    document.querySelectorAll('.smSlot').forEach(s => {
      const sr = s.getBoundingClientRect();
      const ox = Math.min(tileRect.right, sr.right) - Math.max(tileRect.left, sr.left);
      const oy = Math.min(tileRect.bottom, sr.bottom) - Math.max(tileRect.top, sr.top);
      if (ox > 0 && oy > 0 && ox * oy > bestOverlap) {
        bestOverlap = ox * oy;
        bestSlot = s;
      }
    });
  }

  tile.classList.remove('dragging');
  tile.style.position = '';
  tile.style.left = '';
  tile.style.top = '';
  tile.style.width = '';
  tile.style.height = '';

  if (movedDistance < TAP_THRESHOLD) {
    smTileBar.appendChild(tile);
    return;
  }

  const slot = bestSlot;
  if (!slot) {
    smTileBar.appendChild(tile);
    return;
  }
  const slotPairIdx = parseInt(slot.dataset.pairIdx);
  if (slotPairIdx === pairIdx) {
    tile.remove();
    handleSmDrop(pairIdx);
  } else {
    smTileBar.appendChild(tile);
    playError();
    slot.classList.add('shake');
    slot.addEventListener('animationend', () => slot.classList.remove('shake'), { once: true });
  }
}

function showSyllableMatchScreen() {
  showScreen(syllableMatchScreen);
}

function startSyllableMatch(setIndex, endIndex) {
  smNextBtn.classList.add('hidden');
  smSetIndex = setIndex;
  smEndIndex = (endIndex !== undefined) ? endIndex : SYLLABLE_MATCH_SETS.length - 1;
  smSet = SYLLABLE_MATCH_SETS[setIndex];
  smCompleted = [];
  smPicOrder = shuffle([0, 1, 2]);
  const smIsStage9 = setIndex >= SM_FIXED_END_START;
  const smStageNum = smIsStage9 ? LEVELS.length + 2 : LEVELS.length + 1;
  const smStageName = smIsStage9 ? 'הַבָרָה רִאשׁוֹנָה מִשְׁתַּנָּה' : 'הַבָרָה אַחֲרוֹנָה מִשְׁתַּנָּה';
  const smWordInStage = smIsStage9 ? setIndex - SM_FIXED_END_START + 1 : setIndex + 1;
  const smTotalInStage = smIsStage9 ? SYLLABLE_MATCH_SETS.length - SM_FIXED_END_START : SM_FIXED_END_START;
  smTitle.innerHTML = `${smStageName}<br><span class="stageProgress">שלב ${smStageNum} - מָסָךְ ${smWordInStage} מִתּוֹךְ ${smTotalInStage}</span>`;
  smFeedbackEl.textContent = '';
  showSyllableMatchScreen();
  renderSmRows();
  renderSmTileBar();
}

function renderSmRows() {
  smRows.innerHTML = '';
  smPicOrder.forEach(pairIdx => {
    const pair = smSet.pairs[pairIdx];
    const isMatched = smCompleted.includes(pairIdx);

    const row = document.createElement('div');
    row.className = 'smRow';

    const cardCol = document.createElement('div');
    cardCol.className = 'smCardCol';

    const card = document.createElement('div');
    card.className = 'smCard' + (isMatched ? ' matched' : '');
    card.dataset.pairIdx = pairIdx;
    card.textContent = EMOJI_MAP[pair.name] || '';
    card.addEventListener('click', () => speakWord({ name: pair.name }));
    const speakBtn = document.createElement('button');
    speakBtn.className = 'smSpeakBtn';
    speakBtn.textContent = '🔊 הַשְׁמַע מִלָּה';
    speakBtn.addEventListener('click', () => speakWord({ name: pair.name }));

    cardCol.appendChild(card);
    cardCol.appendChild(speakBtn);

    const fixedTile = document.createElement('div');
    fixedTile.className = 'smTile smFixed';
    fixedTile.textContent = smSet.fixed;
    fixedTile.addEventListener('pointerdown', () => speakSmSyllable(smSet.fixed, true));

    const slot = document.createElement('div');
    slot.className = 'smSlot' + (isMatched ? ' filled' : '');
    slot.dataset.pairIdx = pairIdx;
    if (isMatched) {
      slot.textContent = pair.syllable;
    }

    row.appendChild(cardCol);
    if (smSet.fixedEnd) {
      row.appendChild(slot);
      row.appendChild(fixedTile);
    } else {
      row.appendChild(fixedTile);
      row.appendChild(slot);
    }
    smRows.appendChild(row);
  });
}

function renderSmTileBar() {
  smTileBar.innerHTML = '';
  const allDone = smCompleted.length >= smSet.pairs.length;
  if (allDone) {
    smTileBar.classList.add('hidden');
    return;
  }
  smTileBar.classList.remove('hidden');
  smSet.pairs.forEach((pair, idx) => {
    if (smCompleted.includes(idx)) return;
    const tile = document.createElement('div');
    tile.className = 'smTile';
    tile.dataset.pairIdx = idx;
    tile.textContent = pair.syllable;
    attachSmTileDrag(tile);
    smTileBar.appendChild(tile);
  });
}

function handleSmDrop(pairIdx) {
  if (smCompleted.includes(pairIdx)) return;
  smCompleted.push(pairIdx);
  playSuccess();
  renderSmRows();
  renderSmTileBar();
  speakWord({ name: smSet.pairs[pairIdx].name });
  if (smCompleted.length >= smSet.pairs.length) {
    smFeedbackEl.textContent = 'כָּל הַכָּבוֹד! 🎉';
    const nextIdx = smSetIndex + 1;
    smNextBtn.onclick = () => {
      smNextBtn.classList.add('hidden');
      if (nextIdx <= smEndIndex) {
        startSyllableMatch(nextIdx, smEndIndex);
      } else {
        markLevelComplete(smSetIndex >= SM_FIXED_END_START ? LEVELS.length + 1 : LEVELS.length);
        showHome();
      }
    };
    smNextBtn.classList.remove('hidden');
  }
}

// ---- Stage 10: Two Words game logic ----
let dw10PuzzleIdx = 0;
let dw10Words = [];
let dw10SlotState = [];
let dw10WordDone = [];
let dw10DragData = null;

dw10HomeBtn.addEventListener('click', showHome);

dw10SkipBtn.addEventListener('click', () => {
  const next = dw10PuzzleIdx + 1;
  if (next < DUAL_WORD_PUZZLES.length) {
    startDualWord(next);
  } else {
    showHome();
  }
});

function showDualWordScreen() {
  showScreen(dualWordScreen);
}

function startDualWord(puzzleIdx) {
  dw10NextBtn.classList.add('hidden');
  dw10PuzzleIdx = puzzleIdx;
  dw10Words = DUAL_WORD_PUZZLES[puzzleIdx].map(lookupWord);
  dw10SlotState = dw10Words.map(w => new Array(w.tiles.length).fill(null));
  dw10WordDone = [false, false];
  dw10TitleEl.innerHTML = `שְׁתֵּי מִלִּים<br><span class="stageProgress">שלב ${LEVELS.length + 3} - מָסָךְ ${puzzleIdx + 1} מִתּוֹךְ ${DUAL_WORD_PUZZLES.length}</span>`;
  dw10FeedbackEl.textContent = '';
  showDualWordScreen();
  renderDw10Rows();
  renderDw10Tray();
}

function renderDw10Rows() {
  dw10RowsEl.innerHTML = '';
  dw10Words.forEach((word, wordIdx) => {
    const row = document.createElement('div');
    row.className = 'dw10Row';

    // Picture col — DOM-first = visual RIGHT in RTL
    const picCol = document.createElement('div');
    picCol.className = 'dw10PicCol';

    const pic = document.createElement('div');
    pic.className = 'dw10Pic';
    pic.textContent = EMOJI_MAP[word.name] || '';
    pic.addEventListener('click', () => speakWord(word));

    const speakBtn = document.createElement('button');
    speakBtn.className = 'dw10SpeakBtn';
    speakBtn.textContent = '🔊 הַשְׁמַע';
    speakBtn.addEventListener('click', () => speakWord(word));

    picCol.appendChild(pic);
    picCol.appendChild(speakBtn);

    // Slots — after pic = visual LEFT in RTL
    const slotsDiv = document.createElement('div');
    slotsDiv.className = 'dw10Slots';

    word.tiles.forEach((tile, slotIdx) => {
      const slot = document.createElement('div');
      slot.className = 'dw10Slot';
      if (isWideTile(tile)) slot.classList.add('wide');
      slot.dataset.wordIdx = wordIdx;
      slot.dataset.slotIdx = slotIdx;
      slotsDiv.appendChild(slot);
    });

    row.appendChild(picCol);
    row.appendChild(slotsDiv);
    dw10RowsEl.appendChild(row);
  });
}

function renderDw10Tray() {
  dw10TrayEl.innerHTML = '';
  const allTiles = [];
  dw10Words.forEach((word, wordIdx) => {
    const lastIdx = word.tiles.length - 1;
    word.tiles.forEach((letter, tileIdx) => {
      allTiles.push({ letter, wordIdx, tileIdx, isFinal: tileIdx === lastIdx });
    });
  });
  shuffle(allTiles).forEach(({ letter, wordIdx, tileIdx, isFinal }) => {
    const tile = document.createElement('div');
    tile.className = 'dw10Tile';
    if (isWideTile(letter)) tile.classList.add('wide');
    tile.textContent = letter;
    tile.dataset.letter = letter;
    tile.dataset.wordIdx = wordIdx;
    tile.dataset.tileIdx = tileIdx;
    tile.dataset.final = isFinal ? '1' : '0';
    attachDw10Drag(tile);
    dw10TrayEl.appendChild(tile);
  });
}

function attachDw10Drag(tile) {
  tile.addEventListener('pointerdown', onDw10PointerDown);
}

function onDw10PointerDown(e) {
  const tile = e.currentTarget;
  speakLetter(tile.dataset.letter, tile.dataset.final === '1');
  if (tile.dataset.locked === '1') return;
  tile.setPointerCapture(e.pointerId);
  const rect = tile.getBoundingClientRect();
  const fromSlot = tile.parentElement.classList.contains('dw10Slot') ? tile.parentElement : null;
  dw10DragData = { tile, fromSlot,
    offsetX: e.clientX - rect.left, offsetY: e.clientY - rect.top,
    startX: e.clientX, startY: e.clientY };
  tile.classList.add('dragging');
  tile.style.left = rect.left + 'px';
  tile.style.top = rect.top + 'px';
  tile.style.width = rect.width + 'px';
  tile.style.height = rect.height + 'px';
  document.body.appendChild(tile);
  tile.addEventListener('pointermove', onDw10PointerMove);
  tile.addEventListener('pointerup', onDw10PointerUp);
}

function onDw10PointerMove(e) {
  if (!dw10DragData) return;
  const tile = dw10DragData.tile;
  tile.style.left = (e.clientX - dw10DragData.offsetX) + 'px';
  tile.style.top  = (e.clientY - dw10DragData.offsetY) + 'px';
  const tr = tile.getBoundingClientRect();
  document.querySelectorAll('.dw10Slot').forEach(s => {
    if (s.classList.contains('filled')) { s.classList.remove('drag-over'); return; }
    const sr = s.getBoundingClientRect();
    const overlaps = Math.min(tr.right, sr.right) > Math.max(tr.left, sr.left) &&
                     Math.min(tr.bottom, sr.bottom) > Math.max(tr.top, sr.top);
    s.classList.toggle('drag-over', overlaps);
  });
}

function onDw10PointerUp(e) {
  if (!dw10DragData) return;
  const { tile, fromSlot, startX, startY } = dw10DragData;
  dw10DragData = null;
  document.querySelectorAll('.dw10Slot').forEach(s => s.classList.remove('drag-over'));
  tile.removeEventListener('pointermove', onDw10PointerMove);
  tile.removeEventListener('pointerup', onDw10PointerUp);

  const movedDistance = Math.hypot(e.clientX - startX, e.clientY - startY);

  // Find best overlapping empty slot (while still dragging = position:fixed)
  let bestSlot = null;
  if (movedDistance >= TAP_THRESHOLD) {
    const tr = tile.getBoundingClientRect();
    let bestOverlap = 0;
    document.querySelectorAll('.dw10Slot').forEach(s => {
      if (s.classList.contains('filled')) return;
      const sr = s.getBoundingClientRect();
      const ox = Math.min(tr.right, sr.right) - Math.max(tr.left, sr.left);
      const oy = Math.min(tr.bottom, sr.bottom) - Math.max(tr.top, sr.top);
      if (ox > 0 && oy > 0 && ox * oy > bestOverlap) {
        bestOverlap = ox * oy;
        bestSlot = s;
      }
    });
  }

  tile.classList.remove('dragging');
  tile.style.position = '';
  tile.style.left = '';
  tile.style.top = '';
  tile.style.width = '';
  tile.style.height = '';

  if (movedDistance < TAP_THRESHOLD) {
    // Tap: return placed tile to tray, or fill next empty slot from tray
    if (fromSlot) {
      const wi = parseInt(fromSlot.dataset.wordIdx);
      const si = parseInt(fromSlot.dataset.slotIdx);
      fromSlot.classList.remove('filled');
      dw10SlotState[wi][si] = null;
      dw10TrayEl.appendChild(tile);
    } else {
      let placed = false;
      for (let wi = 0; wi < dw10Words.length && !placed; wi++) {
        if (dw10WordDone[wi]) continue;
        for (let si = 0; si < dw10Words[wi].tiles.length && !placed; si++) {
          if (dw10SlotState[wi][si] !== null) continue;
          const target = dw10RowsEl.querySelector(`.dw10Slot[data-word-idx="${wi}"][data-slot-idx="${si}"]`);
          if (target) {
            target.appendChild(tile);
            target.classList.add('filled');
            dw10SlotState[wi][si] = tile.dataset.letter;
            placed = true;
            dw10MaybeCheck(wi);
          }
        }
      }
      if (!placed) dw10TrayEl.appendChild(tile);
    }
    return;
  }

  if (bestSlot) {
    if (fromSlot) {
      const wi = parseInt(fromSlot.dataset.wordIdx);
      const si = parseInt(fromSlot.dataset.slotIdx);
      fromSlot.classList.remove('filled');
      dw10SlotState[wi][si] = null;
    }
    const twi = parseInt(bestSlot.dataset.wordIdx);
    const tsi = parseInt(bestSlot.dataset.slotIdx);
    bestSlot.appendChild(tile);
    bestSlot.classList.add('filled');
    dw10SlotState[twi][tsi] = tile.dataset.letter;
    dw10MaybeCheck(twi);
  } else {
    if (fromSlot) {
      fromSlot.appendChild(tile);
    } else {
      dw10TrayEl.appendChild(tile);
    }
  }
}

function dw10MaybeCheck(wordIdx) {
  if (dw10WordDone[wordIdx]) return;
  if (dw10SlotState[wordIdx].every(s => s !== null)) {
    dw10CheckWord(wordIdx);
  }
}

function dw10CheckWord(wordIdx) {
  const word = dw10Words[wordIdx];
  const slots = Array.from(dw10RowsEl.querySelectorAll(`.dw10Slot[data-word-idx="${wordIdx}"]`));
  let allCorrect = true;
  slots.forEach((slot, si) => {
    const correct = dw10SlotState[wordIdx][si] === word.tiles[si];
    slot.classList.toggle('correct', correct);
    slot.classList.toggle('wrong', !correct);
    if (!correct) allCorrect = false;
  });

  if (allCorrect) {
    slots.forEach(slot => {
      if (slot.firstElementChild) {
        slot.firstElementChild.dataset.locked = '1';
        slot.firstElementChild.style.cursor = 'pointer';
      }
    });
    dw10WordDone[wordIdx] = true;
    playSuccess();
    speakWord(word);
    if (dw10WordDone.every(Boolean)) {
      dw10FeedbackEl.textContent = 'כָּל הַכָּבוֹד! 🎉';
      const nextIdx = dw10PuzzleIdx + 1;
      dw10NextBtn.onclick = () => {
        dw10NextBtn.classList.add('hidden');
        if (nextIdx < DUAL_WORD_PUZZLES.length) {
          startDualWord(nextIdx);
        } else {
          markLevelComplete(LEVELS.length + 2);
          showHome();
        }
      };
      dw10NextBtn.classList.remove('hidden');
    }
  } else {
    playError();
    slots.forEach(slot => {
      if (slot.classList.contains('wrong')) {
        slot.classList.add('shake');
        slot.addEventListener('animationend', () => slot.classList.remove('shake'), { once: true });
      }
    });
    setTimeout(() => {
      slots.forEach((slot, si) => {
        if (slot.classList.contains('wrong')) {
          const t = slot.firstElementChild;
          if (t) dw10TrayEl.appendChild(t);
          slot.classList.remove('filled', 'wrong');
          dw10SlotState[wordIdx][si] = null;
        }
      });
    }, 700);
  }
}

// ---- Stages 11-12: camel walks to the oasis ----
// Each set: three similar-sounding words (written with niqqud). The app says one of them,
// the child picks the written word. Audio: audio/<word>.mp3 (see generate_camel_audio.py).
const CAMEL_SETS = [
  ['גַּנָּן', 'עָנָן', 'גַּנָּב'],
  ['שֶׁמֶשׁ', 'שֶׁלֶג', 'שֶׁקֶל'],
  ['נָחָשׁ', 'נָמֵר', 'נָהָר'],
  ['סוּסָה', 'סוּכָּה', 'סוּלָּם'],
  ['חָלָב', 'חָצִיל', 'חֲמוֹר'],
  ['בָּלוֹן', 'חַלּוֹן', 'סָלוֹן'],
  ['מַפָּה', 'מַכָּה', 'מַצָּה'],
  ['כִּסֵּא', 'כִּפָּה', 'כִּתָּה'],
  ['תַּפּוּחַ', 'תַּפּוּז', 'תַּנּוּר'],
  ['גֶּשֶׁר', 'גֶּזֶר', 'גֶּשֶׁם'],
];
// Stage 12 (hard): longer, more similar words
const CAMEL_HARD_SETS = [
  ['עַכְבָּר', 'עַכְבִּישׁ', 'עַכְשָׁו'],
  ['מִסְפָּר', 'מִסְפָּרָה', 'מִסְפָּרַיִם'],
  ['מְכוֹנִית', 'מְכוֹנָה', 'מְנוֹרָה'],
  ['תַּפּוּזִים', 'תַּפּוּחִים', 'תַּנּוּרִים'],
  ['פַּרְפָּרִים', 'פַּרְדֵּסִים', 'פַּרְצוּפִים'],
  ['מִטְרִיָּה', 'מִטְפַּחַת', 'מִטְבָּח'],
  ['שׁוֹמֵר', 'שׁוֹטֵר', 'שׁוֹפֵט'],
  ['כַּדּוּרֶגֶל', 'כַּדּוּרְסַל', 'כַּדּוּרִים'],
  ['חַלּוֹנוֹת', 'חֲלוֹמוֹת', 'חֲבִילוֹת'],
  ['מִשְׁפָּחָה', 'מִשְׁקָפַיִם', 'מִקְלַחַת'],
];
// Stage number shown = LEVELS.length + stageOffset; COMPLETED_KEY entry = LEVELS.length + completedOffset.
const CAMEL_STAGES = [
  { sets: CAMEL_SETS,      stageOffset: 4, completedOffset: 3, title: 'הַגָּמָל וְהָאוֹאָזִיס', icon: '🏝️', color: '#c9892b' },
  { sets: CAMEL_HARD_SETS, stageOffset: 5, completedOffset: 4, title: 'הַגָּמָל וְהָאוֹאָזִיס – קָשֶׁה', icon: '🌵', color: '#a8571f' },
];
const CAMEL_STEPS_TO_OASIS = 6;
const CAMEL_START_RIGHT_PCT = 3;   // start position, % of the scene width from the right edge

const camelHomeBtn = document.getElementById('camelHomeBtn');
const camelTitleEl = document.getElementById('camelTitle');
const camelWalkerEl = document.getElementById('camelWalker');
const camelHearBtn = document.getElementById('camelHearBtn');
const camelOptionsEl = document.getElementById('camelOptions');
const camelFeedbackEl = document.getElementById('camelFeedback');
const camelNextBtn = document.getElementById('camelNextBtn');
const camelInstructionEl = document.getElementById('camelInstruction');

let camelCfg = CAMEL_STAGES[0];
let camelStep = 0;
let camelQueue = [];
let camelLastSet = -1;
let camelTarget = '';
let camelLocked = false;
let camelTimer = null;

function camelNextSet() {
  if (camelQueue.length === 0) {
    camelQueue = shuffle(camelCfg.sets.map((_, i) => i));
    if (camelQueue[0] === camelLastSet) camelQueue.push(camelQueue.shift());
  }
  camelLastSet = camelQueue.shift();
  return camelCfg.sets[camelLastSet];
}

const camelBodyEl = document.getElementById('camelBody');
const camelSceneEl = document.getElementById('camelScene');
const camelOasisEl = document.getElementById('camelOasis');
let camelAnimTimer = null;

// Distance (px, from the scene's right edge) for the camel at a given step. The last step stops right
// next to the tree, measured from the real tree/camel widths so it works at any screen width.
function camelRightPx(step) {
  const sceneW = camelSceneEl.clientWidth;
  const start = sceneW * CAMEL_START_RIGHT_PCT / 100;
  const treeEdge = camelOasisEl.offsetLeft + camelOasisEl.offsetWidth;
  const end = Math.max(start, sceneW - treeEdge - camelWalkerEl.offsetWidth + 8);
  return start + (step / CAMEL_STEPS_TO_OASIS) * (end - start);
}

function camelDust(rightPx) {
  const dust = document.createElement('span');
  dust.className = 'camelDust';
  dust.textContent = '💨';
  dust.style.right = rightPx + 'px';
  camelSceneEl.appendChild(dust);
  setTimeout(() => dust.remove(), 850);
}

function camelCelebrate() {
  showConfetti();
  camelOasisEl.classList.add('shake');
  setTimeout(() => {
    camelWalkerEl.classList.remove('walking');
    camelWalkerEl.classList.add('cheer');
  }, 950);
}

function camelResetAnim() {
  clearTimeout(camelAnimTimer);
  camelWalkerEl.classList.remove('walking', 'oops', 'cheer');
  camelBodyEl.classList.remove('flip');
  camelOasisEl.classList.remove('shake');
  const conf = document.getElementById('confetti');
  if (conf) conf.remove();
}

function renderCamelStep(animate, back) {
  const right = camelRightPx(camelStep);
  const oldRight = parseFloat(camelWalkerEl.style.right) || right;
  camelWalkerEl.style.right = right + 'px';
  if (animate) {
    clearTimeout(camelAnimTimer);
    camelWalkerEl.classList.remove('oops');
    camelWalkerEl.classList.add('walking');
    if (back) {
      camelBodyEl.classList.add('flip');
      camelWalkerEl.classList.add('oops');
      camelDust(oldRight);
    } else {
      camelBodyEl.classList.remove('flip');
    }
    camelAnimTimer = setTimeout(() => {
      camelWalkerEl.classList.remove('walking', 'oops');
      camelBodyEl.classList.remove('flip');
    }, 900);
  }
  camelTitleEl.innerHTML = `${camelCfg.title}<br><span class="stageProgress">שלב ${LEVELS.length + camelCfg.stageOffset} - צַעַד ${camelStep} מִתּוֹךְ ${CAMEL_STEPS_TO_OASIS}</span>`;
}

function startCamel(cfg) {
  clearTimeout(camelTimer);
  camelCfg = cfg;
  camelResetAnim();
  camelStep = 0;
  camelQueue = [];
  camelLastSet = -1;
  camelNextBtn.classList.add('hidden');
  camelHearBtn.classList.remove('hidden');
  camelInstructionEl.classList.remove('hidden');
  showScreen(camelScreen);
  camelWalkerEl.style.transition = 'none';
  renderCamelStep(false);
  void camelWalkerEl.offsetWidth;
  camelWalkerEl.style.transition = '';
  camelNewRound();
}

function camelNewRound() {
  camelLocked = false;
  camelFeedbackEl.textContent = '';
  camelFeedbackEl.classList.remove('bad');
  const set = camelNextSet();
  camelTarget = set[Math.floor(Math.random() * set.length)];
  camelOptionsEl.innerHTML = '';
  shuffle(set).forEach(word => {
    const btn = document.createElement('button');
    btn.className = 'camelOption';
    btn.textContent = word;
    btn.addEventListener('click', () => camelPick(btn, word));
    camelOptionsEl.appendChild(btn);
  });
  speakAudio(camelTarget);
}

function camelPick(btn, word) {
  if (camelLocked || btn.classList.contains('wrong')) return;
  if (word === camelTarget) {
    camelLocked = true;
    btn.classList.add('correct');
    playSuccess();
    camelStep++;
    sparkle(btn);
    renderCamelStep(true, false);
    if (camelStep >= CAMEL_STEPS_TO_OASIS) {
      camelFeedbackEl.textContent = 'הַגָּמָל הִגִּיעַ לָאוֹאָזִיס! 🎉';
      camelHearBtn.classList.add('hidden');
      camelInstructionEl.classList.add('hidden');
      markLevelComplete(LEVELS.length + camelCfg.completedOffset);
      camelCelebrate();
      camelNextBtn.classList.remove('hidden');
    } else {
      camelFeedbackEl.textContent = randomPraise() + '!';
      camelTimer = setTimeout(camelNewRound, 1300);
    }
  } else {
    btn.classList.add('wrong');
    playError();
    if (camelStep > 0) {
      camelStep--;
      renderCamelStep(true, true);
    }
    camelFeedbackEl.textContent = 'נַסוּ שׁוּב';
    camelFeedbackEl.classList.add('bad');
    speakAudio(camelTarget);
  }
}

camelHomeBtn.addEventListener('click', () => { clearTimeout(camelTimer); camelResetAnim(); showHome(); });
camelNextBtn.addEventListener('click', () => { camelResetAnim(); showHome(); });
camelHearBtn.addEventListener('click', () => speakAudio(camelTarget));

window.addEventListener('resize', () => {
  if (camelScreen.classList.contains('hidden')) return;
  camelWalkerEl.style.transition = 'none';
  camelWalkerEl.style.right = camelRightPx(camelStep) + 'px';
  void camelWalkerEl.offsetWidth;
  camelWalkerEl.style.transition = '';
});

// ---- Stage 13: order the sentence (3 words) ----
// Audio: audio/<word>.mp3 for each word and audio/<w1>_<w2>_<w3>.mp3 for the sentence
// (see generate_sentence_audio.py).
const SENTENCES = [
  { words: ['סַבָּא', 'אוֹכֵל', 'תַּפּוּחַ'], pic: '👴🍎' },
  { words: ['אִמָּא', 'אוֹפָה', 'עוּגָה'], pic: '👩🎂' },
  { words: ['הַיֶּלֶד', 'קוֹרֵא', 'סֵפֶר'], pic: '👦📖' },
  { words: ['הַכֶּלֶב', 'אוֹכֵל', 'עֶצֶם'], pic: '🐕🦴' },
  { words: ['הַגָּמָל', 'שׁוֹתֶה', 'מַיִם'], pic: '🐪💧' },
  { words: ['הַצִּפּוֹר', 'שָׁרָה', 'שִׁיר'], pic: '🐦🎵' },
  { words: ['הַיַּלְדָּה', 'אוֹכֶלֶת', 'פִּיצָה'], pic: '👧🍕' },
  { words: ['אַבָּא', 'פּוֹתֵחַ', 'חַלּוֹן'], pic: '👨🪟' },
  { words: ['הַיֶּלֶד', 'שׁוֹתֶה', 'חָלָב'], pic: '👦🥛' },
  { words: ['הַנָּמֵר', 'רָץ', 'מַהֵר'], pic: '🐆💨' },
];

const sentenceScreen = document.getElementById('sentenceScreen');
const sentHomeBtn = document.getElementById('sentHomeBtn');
const sentTitleEl = document.getElementById('sentTitle');
const sentPicEl = document.getElementById('sentPic');
const sentSlotsEl = document.getElementById('sentSlots');
const sentTrayEl = document.getElementById('sentTray');
const sentFeedbackEl = document.getElementById('sentFeedback');
const sentNextBtn = document.getElementById('sentNextBtn');

let sentOrder = [];     // shuffled indices into SENTENCES
let sentPos = 0;        // position in sentOrder
let sentCur = null;     // current SENTENCES entry
let sentSlots = [];     // per slot: word or null
let sentLocked = [];    // per slot: true once the word is correct
let sentTray = [];      // words still below the slots
let sentTimer = null;
let sentDone = false;

function speakSentence(words) {
  playAudioFile('audio/' + words.join('_') + '.mp3', () => speak(words.join(' ')));
}

function startSentences() {
  clearTimeout(sentTimer);
  sentOrder = shuffle(SENTENCES.map((_, i) => i));
  sentPos = 0;
  showScreen(sentenceScreen);
  sentLoad();
}

function sentLoad() {
  sentCur = SENTENCES[sentOrder[sentPos]];
  sentSlots = sentCur.words.map(() => null);
  sentLocked = sentCur.words.map(() => false);
  sentDone = false;
  sentNextBtn.classList.add('hidden');
  sentFeedbackEl.textContent = '';
  sentPicEl.textContent = sentCur.pic;
  sentTitleEl.innerHTML = `סַדְּרוּ אֶת הַמִּשְׁפָּט<br><span class="stageProgress">שלב ${LEVELS.length + 6} - מִשְׁפָּט ${sentPos + 1} מִתּוֹךְ ${sentOrder.length}</span>`;
  // shuffled tray, never already in the right order
  let tray = shuffle(sentCur.words);
  while (tray.every((w, i) => w === sentCur.words[i])) tray = shuffle(sentCur.words);
  sentTray = tray;
  sentRender();
}


function sentRender() {
  sentSlotsEl.innerHTML = '';
  sentSlots.forEach((word, i) => {
    const slot = document.createElement('div');
    slot.className = 'sentSlot' + (word ? ' filled' : '');
    if (word) {
      const chip = document.createElement('button');
      chip.className = 'sentChip' + (sentLocked[i] ? ' ok' : '');
      chip.textContent = word;
      chip.addEventListener('click', () => {
        if (sentLocked[i] || sentDone) { speakAudio(word); return; }
        sentSlots[i] = null;
        sentTray.push(word);
        sentRender();
      });
      slot.appendChild(chip);
    }
    sentSlotsEl.appendChild(slot);
  });
  sentTrayEl.innerHTML = '';
  sentTray.forEach(word => {
    const chip = document.createElement('button');
    chip.className = 'sentChip';
    chip.textContent = word;
    chip.addEventListener('click', () => sentPlace(word));
    sentTrayEl.appendChild(chip);
  });
}

function sentPlace(word) {
  if (sentDone) return;
  const i = sentSlots.indexOf(null);
  if (i === -1) return;
  sentSlots[i] = word;
  sentTray.splice(sentTray.indexOf(word), 1);
  speakAudio(word);
  sentRender();
  if (sentSlots.every(w => w !== null)) sentCheck();
}

function sentCheck() {
  const wrong = [];
  sentSlots.forEach((w, i) => { if (w !== sentCur.words[i]) wrong.push(i); });
  if (wrong.length === 0) {
    sentDone = true;
    sentSlots.forEach((_, i) => { sentLocked[i] = true; });
    sentRender();
    sentSlotsEl.querySelectorAll('.sentSlot').forEach(sparkle);
    playSuccess();
    sentFeedbackEl.textContent = randomPraise() + '!';
    sentTimer = setTimeout(() => speakSentence(sentCur.words), 500);
    const last = sentPos === sentOrder.length - 1;
    if (last) {
      markLevelComplete(LEVELS.length + 5);
      showConfetti();
      sentNextBtn.textContent = 'חֲזָרָה לַבַּיִת ←';
    } else {
      sentNextBtn.textContent = 'הַבָּא ←';
    }
    sentNextBtn.classList.remove('hidden');
    return;
  }
  playError();
  sentFeedbackEl.textContent = '';
  sentSlots.forEach((_, i) => { if (!wrong.includes(i)) sentLocked[i] = true; });
  sentRender();
  const chips = sentSlotsEl.querySelectorAll('.sentChip');
  wrong.forEach(i => chips[i].classList.add('bad'));
  sentTimer = setTimeout(() => {
    wrong.forEach(i => { sentTray.push(sentSlots[i]); sentSlots[i] = null; });
    sentRender();
  }, 800);
}

sentHomeBtn.addEventListener('click', () => { clearTimeout(sentTimer); showHome(); });
sentNextBtn.addEventListener('click', () => {
  clearTimeout(sentTimer);
  if (sentPos === sentOrder.length - 1) { showHome(); return; }
  sentPos++;
  sentLoad();
});

// ---- Stages 14-15: memory game (written word <-> picture) ----
// Words come from stages 1-6 that have a single, unambiguous emoji (see MEM_EXCLUDE).
// cols x rows = pairs * 2 cards. The hard stage uses only the longer words (stages 3-6) on a 4-wide x 5-tall
// board. In both stages a wrong pair stays face up until the child taps the first card of the next pair.
const MEM_STAGES = [
  { cols: 3, pairs: 6, boards: 3, levelFrom: 0, levelTo: 6, stageOffset: 7, completedOffset: 6,
    title: 'מִשְׂחָק זִכָּרוֹן', icon: '🃏', color: '#8e44ad' },
  { cols: 4, pairs: 10, boards: 2, levelFrom: 2, levelTo: 6, stageOffset: 8, completedOffset: 9,
    title: 'מִשְׂחָק זִכָּרוֹן – קָשֶׁה', icon: '🎴', color: '#6c3483' },
];
// near-duplicate or abstract pictures that would confuse a child
const MEM_EXCLUDE = new Set(['עגל', 'בקר', 'עורב', 'מקום', 'צורה', 'מלך', 'חומוס']);

const memScreen = document.getElementById('memScreen');
const memHomeBtn = document.getElementById('memHomeBtn');
const memTitleEl = document.getElementById('memTitle');
const memGridEl = document.getElementById('memGrid');
const memFeedbackEl = document.getElementById('memFeedback');
const memNextBtn = document.getElementById('memNextBtn');

let memCfg = MEM_STAGES[0];
let memPool = [];
let memBoard = 0;
let memCards = [];
let memFlipped = [];
let memPending = null;   // wrong pair still face up

function memBuildPool() {
  const pool = [];
  LEVELS.slice(memCfg.levelFrom, memCfg.levelTo).forEach(level => {
    level.words.forEach(w => {
      const emoji = EMOJI_MAP[w.name];
      if (!emoji || MEM_EXCLUDE.has(w.name) || /\s/.test(w.name)) return;
      const chars = Array.from(emoji);   // "two of the same" emoji means a plural word - skip
      const half = chars.length / 2;
      if (chars.length % 2 === 0 && chars.slice(0, half).join('') === chars.slice(half).join('')) return;
      pool.push({ name: w.name, text: w.tiles.join(''), emoji });
    });
  });
  return shuffle(pool);
}

function startMemory(cfg) {
  memCfg = cfg;
  memPool = memBuildPool();
  memBoard = 0;
  showScreen(memScreen);
  memLoadBoard();
}

function memLoadBoard() {
  memFlipped = [];
  memPending = null;
  memNextBtn.classList.add('hidden');
  memFeedbackEl.textContent = '';
  memTitleEl.innerHTML = `${memCfg.title}<br><span class="stageProgress">שלב ${LEVELS.length + memCfg.stageOffset} - לוּחַ ${memBoard + 1} מִתּוֹךְ ${memCfg.boards}</span>`;
  const pairs = memPool.slice(memBoard * memCfg.pairs, (memBoard + 1) * memCfg.pairs);
  memGridEl.style.gridTemplateColumns = `repeat(${memCfg.cols}, 1fr)`;
  memGridEl.dataset.cols = memCfg.cols;
  const cards = [];
  pairs.forEach(p => {
    cards.push({ key: p.name, type: 'word', label: p.text });
    cards.push({ key: p.name, type: 'pic', label: p.emoji });
  });
  memCards = shuffle(cards);
  memGridEl.innerHTML = '';
  memCards.forEach(card => {
    const el = document.createElement('button');
    el.className = 'memCard ' + card.type;
    el.innerHTML = '<span class="memInner"><span class="memFront">❓</span><span class="memBack"></span></span>';
    el.querySelector('.memBack').textContent = card.label;
    if (card.type === 'word' && (card.label.match(/[א-ת]/g) || []).length >= 6) el.classList.add('long');
    el.addEventListener('click', () => memFlip(card, el));
    card.el = el;
    card.matched = false;
    memGridEl.appendChild(el);
  });
}

function memFlip(card, el) {
  if (card.matched || memFlipped.includes(card)) return;
  if (memPending) {
    if (memPending.includes(card)) return;
    memPending.forEach(c => c.el.classList.remove('flipped'));
    memPending = null;
  }
  el.classList.add('flipped');
  memFlipped.push(card);
  if (card.type === 'pic') speakWord({ name: card.key });
  if (memFlipped.length < 2) return;
  const [a, b] = memFlipped;
  if (a.key === b.key && a.type !== b.type) {
    a.matched = b.matched = true;
    a.el.classList.add('matched');
    b.el.classList.add('matched');
    sparkle(a.el);
    sparkle(b.el);
    playSuccess();
    memFlipped = [];
    if (memCards.every(c => c.matched)) memBoardDone();
  } else {
    memPending = [a, b];
    memFlipped = [];
  }
}

function memBoardDone() {
  memFeedbackEl.textContent = randomPraise() + '!';
  const last = memBoard === memCfg.boards - 1;
  if (last) {
    markLevelComplete(LEVELS.length + memCfg.completedOffset);
    showConfetti();
    memNextBtn.textContent = 'חֲזָרָה לַבַּיִת ←';
  } else {
    memNextBtn.textContent = 'הַלּוּחַ הַבָּא ←';
  }
  memNextBtn.classList.remove('hidden');
}

memHomeBtn.addEventListener('click', showHome);
memNextBtn.addEventListener('click', () => {
  if (memBoard === memCfg.boards - 1) { showHome(); return; }
  memBoard++;
  memLoadBoard();
});

// ---- Stages 16-17: syllable crossword ----
// Words are written right-to-left (dir 'h') or top-to-bottom (dir 'v'), one syllable per cell.
// r/c are 1-based grid coordinates of the first syllable (c = 1 is the right-most column).
// Words that cross share a cell, so the shared syllable must be identical in both words.
// The picture clue sits in the cell before the first syllable (row/col 0 is the clue gutter).
// Word audio: audio/<name>.mp3 ("בננה" is generated by generate_crossword_audio.py).
const CROSSWORDS_EASY = [
  [
    { name: 'חלב', syl: ['חַ', 'לָּב'], r: 1, c: 1, dir: 'h' },
    { name: 'חלה', syl: ['חַ', 'לָּה'], r: 1, c: 1, dir: 'v' },
  ],
  [
    { name: 'בננה', syl: ['בָּ', 'נָ', 'נָה'], r: 2, c: 1, dir: 'h', emoji: '🍌' },
    { name: 'ענבים', syl: ['עֲ', 'נָ', 'בִים'], r: 1, c: 2, dir: 'v' },
  ],
  [
    { name: 'מתנה', syl: ['מַ', 'תָּ', 'נָה'], r: 3, c: 1, dir: 'h' },
    { name: 'בננה', syl: ['בָּ', 'נָ', 'נָה'], r: 1, c: 3, dir: 'v', emoji: '🍌' },
  ],
  [
    { name: 'מתנה', syl: ['מַ', 'תָּ', 'נָה'], r: 1, c: 2, dir: 'h' },
    { name: 'מפה', syl: ['מַ', 'פָּה'], r: 1, c: 2, dir: 'v' },
    { name: 'טיפה', syl: ['טִי', 'פָּה'], r: 2, c: 1, dir: 'h' },
  ],
  [
    { name: 'סירים', syl: ['סִי', 'רִים'], r: 2, c: 1, dir: 'h' },
    { name: 'גירים', syl: ['גִּי', 'רִים'], r: 1, c: 2, dir: 'v' },
    { name: 'סירה', syl: ['סִי', 'רָה'], r: 2, c: 1, dir: 'v' },
  ],  [
    { name: 'ביצה', syl: ['בֵּי', 'צָה'], r: 1, c: 2, dir: 'v' },
    { name: 'פִּיצָה', syl: ['פִּי', 'צָה'], r: 2, c: 1, dir: 'h' },
    { name: 'פילים', syl: ['פִּי', 'לִים'], r: 2, c: 1, dir: 'v' },
  ],
  [
    { name: 'מיטה', syl: ['מִי', 'טָּה'], r: 1, c: 2, dir: 'h' },
    { name: 'מיצים', syl: ['מִי', 'צִים'], r: 1, c: 2, dir: 'v' },
    { name: 'עצים', syl: ['עֵ', 'צִים'], r: 2, c: 1, dir: 'h' },
  ],  [
    { name: 'חלב', syl: ['חַ', 'לָּב'], r: 1, c: 2, dir: 'h' },
    { name: 'חלה', syl: ['חַ', 'לָּה'], r: 1, c: 2, dir: 'v' },
    { name: 'קולה', syl: ['קוֹ', 'לָּה'], r: 2, c: 1, dir: 'h', emoji: '🥤' },
  ],
  [
    { name: 'מפה', syl: ['מַ', 'פָּה'], r: 2, c: 1, dir: 'h' },
    { name: 'מתנה', syl: ['מַ', 'תָּ', 'נָה'], r: 2, c: 1, dir: 'v' },
    { name: 'ספה', syl: ['סַ', 'פָּה'], r: 1, c: 2, dir: 'v', emoji: '🛋️' },
  ],
];

// Stage 17 (hard): 3 and 4 words per crossword. Shared syllables must sound the same in both words
// (same text AND same final/non-final position). Layouts were found with a search script over the
// words that have audio; ask before adding words without audio.
const CROSSWORDS_HARD = [
  [
    { name: 'תמר', syl: ['תָּ', 'מָר'], r: 3, c: 2, dir: 'v' },
    { name: 'מתנה', syl: ['מַ', 'תָּ', 'נָה'], r: 3, c: 1, dir: 'h' },
    { name: 'בננה', syl: ['בָּ', 'נָ', 'נָה'], r: 1, c: 3, dir: 'v', emoji: '🍌' },
  ],
  [
    { name: 'חללית', syl: ['חַ', 'לָ', 'לִית'], r: 1, c: 2, dir: 'h' },
    { name: 'חלה', syl: ['חַ', 'לָּה'], r: 1, c: 2, dir: 'v' },
    { name: 'כַּלָּה', syl: ['כַּ', 'לָּה'], r: 2, c: 1, dir: 'h' },
  ],
  [
    { name: 'סוּכָּה', syl: ['סוּ', 'כָּה'], r: 1, c: 2, dir: 'v' },
    { name: 'סוכריה', syl: ['סוּ', 'כָּ', 'רִיָּה'], r: 1, c: 2, dir: 'h' },
    { name: 'סיכה', syl: ['סִי', 'כָּה'], r: 2, c: 1, dir: 'h' },
  ],
  [
    { name: 'סירים', syl: ['סִי', 'רִים'], r: 2, c: 2, dir: 'h' },
    { name: 'סיכה', syl: ['סִי', 'כָּה'], r: 2, c: 2, dir: 'v' },
    { name: 'גירים', syl: ['גִּי', 'רִים'], r: 1, c: 3, dir: 'v' },
    { name: 'סוּכָּה', syl: ['סוּ', 'כָּה'], r: 3, c: 1, dir: 'h' },
  ],
  [
    { name: 'מפה', syl: ['מַ', 'פָּה'], r: 2, c: 3, dir: 'h' },
    { name: 'מתנה', syl: ['מַ', 'תָּ', 'נָה'], r: 2, c: 3, dir: 'v' },
    { name: 'בננה', syl: ['בָּ', 'נָ', 'נָה'], r: 4, c: 1, dir: 'h', emoji: '🍌' },
    { name: 'טיפה', syl: ['טִי', 'פָּה'], r: 1, c: 4, dir: 'v' },
  ],  [
    { name: 'מפה', syl: ['מַ', 'פָּה'], r: 1, c: 3, dir: 'h' },
    { name: 'מתנה', syl: ['מַ', 'תָּ', 'נָה'], r: 1, c: 3, dir: 'v' },
    { name: 'בננה', syl: ['בָּ', 'נָ', 'נָה'], r: 3, c: 1, dir: 'h', emoji: '🍌' },
  ],
  [
    { name: 'מתנה', syl: ['מַ', 'תָּ', 'נָה'], r: 3, c: 2, dir: 'h' },
    { name: 'בננה', syl: ['בָּ', 'נָ', 'נָה'], r: 1, c: 4, dir: 'v', emoji: '🍌' },
    { name: 'מפה', syl: ['מַ', 'פָּה'], r: 3, c: 2, dir: 'v' },
    { name: 'טיפה', syl: ['טִי', 'פָּה'], r: 4, c: 1, dir: 'h' },
  ],  [
    { name: 'מפה', syl: ['מַ', 'פָּה'], r: 2, c: 3, dir: 'h' },
    { name: 'מתנה', syl: ['מַ', 'תָּ', 'נָה'], r: 2, c: 3, dir: 'v' },
    { name: 'ספה', syl: ['סַ', 'פָּה'], r: 1, c: 4, dir: 'v', emoji: '🛋️' },
    { name: 'בננה', syl: ['בָּ', 'נָ', 'נָה'], r: 4, c: 1, dir: 'h', emoji: '🍌' },
  ],
  [
    { name: 'מפה', syl: ['מַ', 'פָּה'], r: 4, c: 1, dir: 'h' },
    { name: 'ספה', syl: ['סַ', 'פָּה'], r: 3, c: 2, dir: 'v', emoji: '🛋️' },
    { name: 'סכינים', syl: ['סַ', 'כִּי', 'נִים'], r: 3, c: 2, dir: 'h' },
    { name: 'עננים', syl: ['עֲ', 'נָ', 'נִים'], r: 1, c: 4, dir: 'v', emoji: '☁️☁️' },
  ],
  [
    { name: 'סבא', syl: ['סַ', 'בָּא'], r: 1, c: 3, dir: 'h' },
    { name: 'סכינים', syl: ['סַ', 'כִּי', 'נִים'], r: 1, c: 3, dir: 'v' },
    { name: 'עננים', syl: ['עֲ', 'נָ', 'נִים'], r: 3, c: 1, dir: 'h', emoji: '☁️☁️' },
    { name: 'ענבים', syl: ['עֲ', 'נָ', 'בִים'], r: 3, c: 1, dir: 'v' },
  ],
  [
    { name: 'ענבים', syl: ['עֲ', 'נָ', 'בִים'], r: 1, c: 3, dir: 'h' },
    { name: 'עננים', syl: ['עֲ', 'נָ', 'נִים'], r: 1, c: 3, dir: 'v', emoji: '☁️☁️' },
    { name: 'סכינים', syl: ['סַ', 'כִּי', 'נִים'], r: 3, c: 1, dir: 'h' },
  ],
];

// stageOffset: stage number shown = LEVELS.length + stageOffset; completedOffset: COMPLETED_KEY entry
// (kept stable when stages are renumbered, so saved progress stays valid)
const CROSSWORD_STAGES = [
  { puzzles: CROSSWORDS_EASY, stageOffset: 9, completedOffset: 7, title: 'תַּשְׁחֵץ הֲבָרוֹת', icon: '🔠', color: '#16a085' },
  { puzzles: CROSSWORDS_HARD, stageOffset: 10, completedOffset: 8, title: 'תַּשְׁחֵץ הֲבָרוֹת – קָשֶׁה', icon: '🧠', color: '#0e6655' },
];

const xwScreen = document.getElementById('xwScreen');
const xwHomeBtn = document.getElementById('xwHomeBtn');
const xwTitleEl = document.getElementById('xwTitle');
const xwGridEl = document.getElementById('xwGrid');
const xwBankEl = document.getElementById('xwBank');
const xwFeedbackEl = document.getElementById('xwFeedback');
const xwNextBtn = document.getElementById('xwNextBtn');
const xwSkipBtn = document.getElementById('xwSkipBtn');

let xwCfg = CROSSWORD_STAGES[0];
let xwIndex = 0;
let xwWords = [];     // [{name, emoji, dir, r, c, keys:[cellKey...], done}]
let xwCells = {};     // key "r,c" -> {r, c, expected, locked, bad, badText, isFinal}
let xwTiles = [];     // [{text, used}]
let xwSel = null;     // selected cell key
let xwTimer = null;

function xwCellKey(r, c) { return r + ',' + c; }

function startCrossword(cfg) {
  clearTimeout(xwTimer);
  xwCfg = cfg;
  showScreen(xwScreen);
  xwIndex = 0;
  xwLoad();
}

function xwLoad() {
  clearTimeout(xwTimer);
  xwCells = {};
  xwWords = xwCfg.puzzles[xwIndex].map(w => {
    const keys = w.syl.map((syl, i) => {
      const r = w.dir === 'v' ? w.r + i : w.r;
      const c = w.dir === 'h' ? w.c + i : w.c;
      const key = xwCellKey(r, c);
      const last = i === w.syl.length - 1;
      if (!xwCells[key]) xwCells[key] = { r, c, expected: syl, locked: false, bad: false, isFinal: false };
      if (xwCells[key].expected !== syl) console.error('crossword mismatch at', key, w.name);
      if (last) xwCells[key].isFinal = true;
      return key;
    });
    return { name: w.name, emoji: w.emoji || EMOJI_MAP[w.name] || '❓', dir: w.dir, r: w.r, c: w.c, keys, done: false };
  });
  xwTiles = shuffle(Object.values(xwCells).map(cell => ({ text: cell.expected, used: false })));
  xwNextBtn.classList.add('hidden');
  xwSkipBtn.classList.remove('hidden');
  xwFeedbackEl.textContent = '';
  xwTitleEl.innerHTML = `${xwCfg.title}<br><span class="stageProgress">שלב ${LEVELS.length + xwCfg.stageOffset} - תַּשְׁחֵץ ${xwIndex + 1} מִתּוֹךְ ${xwCfg.puzzles.length}</span>`;
  xwSel = null;
  xwSelectNext();
  xwRender();
}

function xwSelectNext() {
  for (const w of xwWords) {
    const k = w.keys.find(key => !xwCells[key].locked);
    if (k) { xwSel = k; return; }
  }
  xwSel = null;
}

function xwRender() {
  const maxR = Math.max(...Object.values(xwCells).map(c => c.r));
  const maxC = Math.max(...Object.values(xwCells).map(c => c.c));
  xwGridEl.style.gridTemplateColumns = `repeat(${maxC + 1}, minmax(0, 1fr))`;
  xwGridEl.dataset.cols = maxC + 1;
  xwGridEl.style.gridTemplateRows = `repeat(${maxR + 1}, auto)`;
  xwGridEl.innerHTML = '';
  // clue cells
  xwWords.forEach(w => {
    const clue = document.createElement('button');
    clue.className = 'xwClue';
    clue.dataset.dir = w.dir;
    clue.style.gridRow = (w.dir === 'v' ? w.r - 1 : w.r) + 1;
    clue.style.gridColumn = (w.dir === 'h' ? w.c - 1 : w.c) + 1;
    clue.innerHTML = '<span></span><span class="xwArrow ' + w.dir + '"></span>';
    clue.firstChild.textContent = w.emoji;
    clue.addEventListener('click', () => speakWord({ name: w.name }));
    xwGridEl.appendChild(clue);
  });
  // syllable cells
  Object.entries(xwCells).forEach(([key, cell]) => {
    const el = document.createElement('button');
    el.className = 'xwCell' + (cell.locked ? ' locked' : '') + (cell.bad ? ' bad' : '') + (xwSel === key ? ' sel' : '');
    el.style.gridRow = cell.r + 1;
    el.style.gridColumn = cell.c + 1;
    el.dataset.key = key;
    const shown = cell.locked ? cell.expected : (cell.bad ? cell.badText : '');
    el.textContent = shown;
    if ((shown.match(/[א-ת]/g) || []).length >= 3) el.classList.add('long');
    el.addEventListener('click', () => {
      if (cell.locked) { speakLetter(cell.expected, cell.isFinal); return; }
      xwSel = key;
      xwRender();
    });
    xwGridEl.appendChild(el);
  });
  // bank
  xwBankEl.innerHTML = '';
  xwTiles.forEach(tile => {
    if (tile.used) return;
    const b = document.createElement('button');
    b.className = 'xwTile';
    b.textContent = tile.text;
    b.addEventListener('pointerdown', e => xwDragStart(e, tile, b));
    xwBankEl.appendChild(b);
  });
}

// Drag a syllable from the bank onto a cell. A short press (no real movement) is a tap and
// puts the syllable in the selected cell, as before.
function xwDragStart(e, tile, btn) {
  if (e.button !== undefined && e.button !== 0) return;
  e.preventDefault();
  const startX = e.clientX, startY = e.clientY;
  const rect = btn.getBoundingClientRect();
  const offX = startX - rect.left, offY = startY - rect.top;
  let ghost = null, over = null, moved = false;
  btn.setPointerCapture(e.pointerId);

  const move = ev => {
    if (!moved) {
      if (Math.hypot(ev.clientX - startX, ev.clientY - startY) < 8) return;
      moved = true;
      ghost = btn.cloneNode(true);
      ghost.classList.add('xwGhost');
      ghost.style.width = rect.width + 'px';
      document.body.appendChild(ghost);
      btn.style.opacity = '0.3';
    }
    ghost.style.left = (ev.clientX - offX) + 'px';
    ghost.style.top = (ev.clientY - offY) + 'px';
    const hit = document.elementFromPoint(ev.clientX, ev.clientY);
    const cellEl = hit && hit.closest ? hit.closest('.xwCell:not(.locked)') : null;
    if (cellEl !== over) {
      if (over) over.classList.remove('dragOver');
      over = cellEl;
      if (over) over.classList.add('dragOver');
    }
  };
  const finish = (drop) => {
    btn.removeEventListener('pointermove', move);
    btn.removeEventListener('pointerup', up);
    btn.removeEventListener('pointercancel', cancel);
    if (ghost) ghost.remove();
    btn.style.opacity = '';
    if (over) over.classList.remove('dragOver');
    if (!drop) return;
    if (!moved) { xwPlace(tile); return; }
    if (over && over.dataset.key) { xwSel = over.dataset.key; xwPlace(tile); }
  };
  const up = () => finish(true);
  const cancel = () => finish(false);
  btn.addEventListener('pointermove', move);
  btn.addEventListener('pointerup', up);
  btn.addEventListener('pointercancel', cancel);
}

function xwPlace(tile) {
  if (!xwSel) return;
  const cell = xwCells[xwSel];
  if (cell.locked || cell.bad) return;
  speakLetter(tile.text, cell.isFinal);
  if (tile.text !== cell.expected) {
    cell.bad = true;
    cell.badText = tile.text;
    playError();
    xwRender();
    xwTimer = setTimeout(() => { cell.bad = false; xwRender(); }, 700);
    return;
  }
  cell.locked = true;
  tile.used = true;
  const key = xwSel;
  xwSelectNext();
  xwRender();
  // words completed by this cell
  xwWords.forEach(w => {
    if (!w.done && w.keys.includes(key) && w.keys.every(k => xwCells[k].locked)) {
      w.done = true;
      w.keys.forEach(k => {
        const el = xwGridEl.querySelector(`.xwCell[data-key="${k}"]`);
        if (el) sparkle(el);
      });
      playSuccess();
      xwTimer = setTimeout(() => speakWord({ name: w.name }), 450);
    }
  });
  if (xwWords.every(w => w.done)) xwPuzzleDone();
}

function xwPuzzleDone() {
  xwSkipBtn.classList.add('hidden');
  xwFeedbackEl.textContent = randomPraise() + '!';
  const last = xwIndex === xwCfg.puzzles.length - 1;
  if (last) {
    markLevelComplete(LEVELS.length + xwCfg.completedOffset);
    showConfetti();
    xwNextBtn.textContent = 'חֲזָרָה לַבַּיִת ←';
  } else {
    xwNextBtn.textContent = 'הַבָּא ←';
  }
  xwNextBtn.classList.remove('hidden');
}

xwHomeBtn.addEventListener('click', () => { clearTimeout(xwTimer); showHome(); });
// skip: next puzzle, or back home after the last one (the stage is not marked complete)
xwSkipBtn.addEventListener('click', () => {
  clearTimeout(xwTimer);
  if (xwIndex === xwCfg.puzzles.length - 1) { showHome(); return; }
  xwIndex++;
  xwLoad();
});
xwNextBtn.addEventListener('click', () => {
  if (xwIndex === xwCfg.puzzles.length - 1) { showHome(); return; }
  xwIndex++;
  xwLoad();
});

// kick off
restoreProgress();
showHome();
