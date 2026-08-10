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
// Four screens: homeScreen → gameScreen | syllableMatchScreen | dualWordScreen
// Navigation via showHome() / showGame() / showSyllableMatchScreen() / showDualWordScreen()
//
// AUDIO SYSTEM
//   Tile taps:  TILE_AUDIO[syllable + "_" + (isFinal?"1":"0")] → tile_NNN.mp3  (+TTS fallback)
//   Word hints: playAudioFile("audio/{name}.mp3")                               (+TTS fallback)
//   Both share a single AudioContext (_audioCtx / getAudioCtx)
//   Tile sounds use is_final to get the right pronunciation for syllable position in the word
//
// LOCALSTORAGE
//   PROGRESS_KEY:  { level, index } — which word the user was on (restored on resume)
//   COMPLETED_KEY: [0,1,...] — completed stage indices:
//     0–6 = LEVELS[i], 7 = SM "last syllable varies", 8 = SM "first syllable varies", 9 = DualWord
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

function buildStageCards() {
  const completed = getCompletedLevels();
  stageCardsEl.innerHTML = '';
  LEVELS.forEach((lvl, i) => {
    const card = document.createElement('button');
    card.className = 'stageCard' + (completed.has(i) ? ' completed' : '');
    card.style.setProperty('--card-color', STAGE_COLORS[i % STAGE_COLORS.length]);
    card.innerHTML = `<span class="stageIcon">${STAGE_ICONS[i] || ''}</span><span class="stageLabelRow"><span class="stageNum">${i + 1}</span><span class="stageLabel">${lvl.label}</span></span>`;
    card.addEventListener('click', () => startStage(i));
    stageCardsEl.appendChild(card);
  });
  const smCard = document.createElement('button');
  smCard.className = 'stageCard' + (completed.has(LEVELS.length) ? ' completed' : '');
  smCard.style.setProperty('--card-color', '#b02878');
  smCard.innerHTML = `<span class="stageIcon">${STAGE_ICONS[LEVELS.length] || '🧩'}</span><span class="stageLabelRow"><span class="stageNum">${LEVELS.length + 1}</span><span class="stageLabel">הַבָרָה אַחֲרוֹנָה מִשְׁתַּנָּה</span></span>`;
  smCard.addEventListener('click', () => startSyllableMatch(0, SM_FIXED_END_START - 1));
  stageCardsEl.appendChild(smCard);

  const smCard2 = document.createElement('button');
  smCard2.className = 'stageCard' + (completed.has(LEVELS.length + 1) ? ' completed' : '');
  smCard2.style.setProperty('--card-color', '#6aa014');
  smCard2.innerHTML = `<span class="stageIcon">${STAGE_ICONS[LEVELS.length + 1] || '🔡'}</span><span class="stageLabelRow"><span class="stageNum">${LEVELS.length + 2}</span><span class="stageLabel">הַבָרָה רִאשׁוֹנָה מִשְׁתַּנָּה</span></span>`;
  smCard2.addEventListener('click', () => startSyllableMatch(SM_FIXED_END_START));
  stageCardsEl.appendChild(smCard2);

  const dw10Card = document.createElement('button');
  dw10Card.className = 'stageCard' + (completed.has(LEVELS.length + 2) ? ' completed' : '');
  dw10Card.style.setProperty('--card-color', '#3838a8');
  dw10Card.innerHTML = `<span class="stageIcon">${STAGE_ICONS[LEVELS.length + 2] || '🎯'}</span><span class="stageLabelRow"><span class="stageNum">${LEVELS.length + 3}</span><span class="stageLabel">שְׁתֵּי מִלִּים</span></span>`;
  dw10Card.addEventListener('click', () => startDualWord(0));
  stageCardsEl.appendChild(dw10Card);
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
  homeScreen.classList.remove('hidden');
  gameScreen.classList.add('hidden');
  syllableMatchScreen.classList.add('hidden');
  dualWordScreen.classList.add('hidden');
}

function showGame() {
  homeScreen.classList.add('hidden');
  gameScreen.classList.remove('hidden');
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
  homeScreen.classList.add('hidden');
  gameScreen.classList.add('hidden');
  syllableMatchScreen.classList.remove('hidden');
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
  homeScreen.classList.add('hidden');
  gameScreen.classList.add('hidden');
  syllableMatchScreen.classList.add('hidden');
  dualWordScreen.classList.remove('hidden');
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

// kick off
restoreProgress();
buildStageCards();
showHome();
