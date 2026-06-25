// ---- Word data, grouped by level (each level uses a single niqqud) ----
const LEVELS = [
  {
    label: 'שלב 1: קמץ ופתח',
    words: [
      {
        name: 'גמל',
        tiles: ['גָּ', 'מַ', 'ל'],
        svg: `<svg viewBox="0 0 200 200">
          <ellipse cx="100" cy="150" rx="70" ry="14" fill="#f0e0b0"/>
          <path d="M40 150 Q40 100 70 95 Q75 70 95 75 Q100 55 115 75 Q135 70 140 95 Q165 100 165 150 Z" fill="#d2a679"/>
          <path d="M40 150 L35 175 L48 175 L52 150 Z" fill="#b8895f"/>
          <path d="M150 150 L155 175 L142 175 L138 150 Z" fill="#b8895f"/>
          <path d="M70 150 L65 175 L78 175 L82 150 Z" fill="#b8895f"/>
          <path d="M120 150 L125 175 L112 175 L108 150 Z" fill="#b8895f"/>
          <path d="M150 95 Q170 80 175 60 Q160 65 150 80 Z" fill="#d2a679"/>
          <circle cx="172" cy="58" r="10" fill="#d2a679"/>
          <circle cx="176" cy="55" r="2" fill="#333"/>
        </svg>`
      },
      {
        name: 'שבת',
        tiles: ['שַׁ', 'בָּ', 'ת'],
        svg: `<svg viewBox="0 0 200 200">
          <rect x="55" y="120" width="18" height="55" fill="#f0e0b0"/>
          <rect x="127" y="120" width="18" height="55" fill="#f0e0b0"/>
          <path d="M64 120 Q55 95 64 80 Q73 95 64 120 Z" fill="#f39c12"/>
          <path d="M136 120 Q127 95 136 80 Q145 95 136 120 Z" fill="#f39c12"/>
          <ellipse cx="64" cy="78" rx="6" ry="10" fill="#e74c3c"/>
          <ellipse cx="136" cy="78" rx="6" ry="10" fill="#e74c3c"/>
        </svg>`
      },
      {
        name: 'מצה',
        tiles: ['מַ', 'צָּ', 'ה'],
        svg: `<svg viewBox="0 0 200 200">
          <rect x="40" y="50" width="120" height="100" rx="4" fill="#e8d4a0" stroke="#c9a86a" stroke-width="4"/>
          <path d="M55 70 L145 70 M55 90 L145 90 M55 110 L145 110 M55 130 L145 130" stroke="#c9a86a" stroke-width="3"/>
        </svg>`
      },
      {
        name: 'חלב',
        tiles: ['חַ', 'לָּ', 'ב'],
        svg: `<svg viewBox="0 0 200 200">
          <path d="M75 40 L125 40 L135 175 Q100 190 65 175 Z" fill="#ecf0f1" stroke="#bdc3c7" stroke-width="4"/>
          <path d="M70 95 L130 95 L135 175 Q100 190 65 175 Z" fill="#ffffff"/>
        </svg>`
      },
      {
        name: 'גלגל',
        tiles: ['גַּ', 'ל', 'גַּ', 'ל'],
        svg: `<svg viewBox="0 0 200 200">
          <circle cx="100" cy="100" r="70" fill="#2c3e50"/>
          <circle cx="100" cy="100" r="35" fill="#bdc3c7"/>
          <circle cx="100" cy="100" r="10" fill="#2c3e50"/>
          <path d="M100 65 L100 135 M65 100 L135 100 M77 77 L123 123 M123 77 L77 123" stroke="#7f8c8d" stroke-width="6"/>
        </svg>`
      }
    ]
  },
  {
    label: 'שלב 2: חיריק',
    words: [
      {
        name: 'כיסים',
        tiles: ['כִּי', 'סִי', 'ם'],
        svg: `<svg viewBox="0 0 200 200">
          <rect x="20" y="55" width="75" height="100" rx="8" fill="#5dade2"/>
          <path d="M20 85 Q57 108 95 85 L95 145 Q57 162 20 145 Z" fill="#3498db"/>
          <rect x="105" y="55" width="75" height="100" rx="8" fill="#5dade2"/>
          <path d="M105 85 Q142 108 180 85 L180 145 Q142 162 105 145 Z" fill="#3498db"/>
        </svg>`
      },
      {
        name: 'סירים',
        tiles: ['סִי', 'רִי', 'ם'],
        svg: `<svg viewBox="0 0 200 200">
          <rect x="15" y="105" width="80" height="45" rx="6" fill="#b0b0b0"/>
          <rect x="8" y="92" width="94" height="14" rx="6" fill="#7f8c8d"/>
          <rect x="0" y="112" width="16" height="10" rx="4" fill="#7f8c8d"/>
          <rect x="94" y="112" width="16" height="10" rx="4" fill="#7f8c8d"/>
          <rect x="115" y="95" width="75" height="55" rx="6" fill="#b0b0b0"/>
          <rect x="108" y="80" width="89" height="14" rx="6" fill="#7f8c8d"/>
          <rect x="100" y="102" width="16" height="10" rx="4" fill="#7f8c8d"/>
          <rect x="189" y="102" width="16" height="10" rx="4" fill="#7f8c8d"/>
        </svg>`
      },
      {
        name: 'גירים',
        tiles: ['גִּי', 'רִי', 'ם'],
        svg: `<svg viewBox="0 0 200 200">
          <rect x="55" y="40" width="24" height="120" rx="7" fill="#f5f5f5" stroke="#ccc" stroke-width="3"/>
          <rect x="55" y="40" width="24" height="18" rx="7" fill="#e74c3c"/>
          <rect x="100" y="40" width="24" height="120" rx="7" fill="#f5f5f5" stroke="#ccc" stroke-width="3"/>
          <rect x="100" y="40" width="24" height="18" rx="7" fill="#27ae60"/>
          <rect x="145" y="40" width="24" height="120" rx="7" fill="#f5f5f5" stroke="#ccc" stroke-width="3"/>
          <rect x="145" y="40" width="24" height="18" rx="7" fill="#3498db"/>
        </svg>`
      },
      {
        name: 'תיקים',
        tiles: ['תִּי', 'קִי', 'ם'],
        svg: `<svg viewBox="0 0 200 200">
          <path d="M40 55 Q40 32 62 32 Q84 32 84 55" stroke="#8b5a2b" stroke-width="8" fill="none"/>
          <rect x="22" y="55" width="80" height="100" rx="14" fill="#f39c12"/>
          <rect x="48" y="80" width="28" height="25" rx="6" fill="#d68910"/>
          <path d="M116 60 Q116 37 138 37 Q160 37 160 60" stroke="#8b5a2b" stroke-width="8" fill="none"/>
          <rect x="98" y="60" width="80" height="100" rx="14" fill="#27ae60"/>
          <rect x="124" y="85" width="28" height="25" rx="6" fill="#1e8449"/>
        </svg>`
      },
      {
        name: 'פילים',
        tiles: ['פִּי', 'לִי', 'ם'],
        svg: `<svg viewBox="0 0 200 200">
          <ellipse cx="75" cy="125" rx="45" ry="34" fill="#95a5a6"/>
          <ellipse cx="38" cy="105" rx="19" ry="23" fill="#7f8c8d"/>
          <path d="M108 122 Q128 126 124 150 Q120 168 105 164" stroke="#95a5a6" stroke-width="10" fill="none"/>
          <ellipse cx="150" cy="135" rx="35" ry="26" fill="#bdc3c7"/>
          <ellipse cx="120" cy="120" rx="15" ry="18" fill="#95a5a6"/>
          <path d="M175 132 Q190 135 187 152 Q184 165 173 162" stroke="#bdc3c7" stroke-width="8" fill="none"/>
        </svg>`
      }
    ]
  },
  {
    label: 'שלב 3: קמץ, פתח וחיריק',
    words: [
      {
        name: 'בית',
        tiles: ['בַּ', 'יִ', 'ת'],
        svg: `<svg viewBox="0 0 200 200">
          <path d="M30 100 L100 40 L170 100 Z" fill="#e74c3c"/>
          <rect x="45" y="100" width="110" height="80" fill="#f0e0b0"/>
          <rect x="85" y="135" width="30" height="45" fill="#8b5a2b"/>
          <rect x="55" y="115" width="25" height="25" fill="#5dade2"/>
          <rect x="120" y="115" width="25" height="25" fill="#5dade2"/>
        </svg>`
      },
      {
        name: 'מטבח',
        tiles: ['מִ', 'ט', 'בָּ', 'ח'],
        svg: `<svg viewBox="0 0 200 200">
          <rect x="40" y="80" width="120" height="90" rx="8" fill="#ecf0f1" stroke="#bdc3c7" stroke-width="4"/>
          <circle cx="70" cy="100" r="14" fill="#7f8c8d"/>
          <circle cx="130" cy="100" r="14" fill="#7f8c8d"/>
          <circle cx="70" cy="100" r="6" fill="#2c3e50"/>
          <circle cx="130" cy="100" r="6" fill="#2c3e50"/>
          <rect x="55" y="140" width="90" height="10" rx="3" fill="#7f8c8d"/>
        </svg>`
      },
      {
        name: 'צמיד',
        tiles: ['צָ', 'מִי', 'ד'],
        svg: `<svg viewBox="0 0 200 200">
          <circle cx="100" cy="100" r="65" fill="none" stroke="#d4af37" stroke-width="18"/>
          <circle cx="100" cy="40" r="13" fill="#e74c3c"/>
          <circle cx="150" cy="75" r="10" fill="#3498db"/>
          <circle cx="150" cy="125" r="10" fill="#2ecc71"/>
        </svg>`
      },
      {
        name: 'כתה',
        tiles: ['כִּ', 'תָּ', 'ה'],
        svg: `<svg viewBox="0 0 200 200">
          <rect x="20" y="170" width="20" height="10" fill="#8b5a2b"/>
          <rect x="160" y="170" width="20" height="10" fill="#8b5a2b"/>
          <rect x="30" y="50" width="140" height="100" rx="6" fill="#2e8b57" stroke="#8b5a2b" stroke-width="10"/>
          <path d="M55 90 Q80 80 105 90" stroke="#fff" stroke-width="4" fill="none"/>
          <path d="M55 115 Q90 105 130 115" stroke="#fff" stroke-width="4" fill="none"/>
        </svg>`
      },
      {
        name: 'סכין',
        tiles: ['סַ', 'כִּי', 'ן'],
        svg: `<svg viewBox="0 0 200 200">
          <rect x="95" y="120" width="22" height="60" rx="6" fill="#8b5a2b"/>
          <path d="M95 120 L130 30 Q135 25 130 50 L117 120 Z" fill="#bdc3c7"/>
        </svg>`
      }
    ]
  }
];

let currentLevel = 0;
let currentIndex = 0;
let currentWord = null;
let tray = [];   // array of {id, letter, el}
let slotState = []; // array of letter or null, by slot index

const pictureBox = document.getElementById('pictureBox');
const slotsEl = document.getElementById('slots');
const trayEl = document.getElementById('tray');
const feedbackEl = document.getElementById('feedback');
const nextBtn = document.getElementById('nextBtn');
const hintBtn = document.getElementById('hintBtn');
const wordIndexEl = document.getElementById('wordIndex');
const wordTotalEl = document.getElementById('wordTotal');
const levelBtns = Array.from(document.querySelectorAll('.levelBtn'));

function currentWords() {
  return LEVELS[currentLevel].words;
}

levelBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    const level = Number(btn.dataset.level);
    if (level === currentLevel) return;
    currentLevel = level;
    currentIndex = 0;
    levelBtns.forEach(b => b.classList.toggle('active', Number(b.dataset.level) === currentLevel));
    loadWord(currentIndex);
  });
});

function shuffle(arr) {
  const a = arr.slice();
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

function loadWord(index) {
  currentWord = currentWords()[index];
  wordIndexEl.textContent = index + 1;
  wordTotalEl.textContent = currentWords().length;
  pictureBox.innerHTML = currentWord.svg;
  feedbackEl.textContent = '';
  feedbackEl.className = '';
  nextBtn.classList.add('hidden');

  slotState = new Array(currentWord.tiles.length).fill(null);
  slotsEl.innerHTML = '';
  for (let i = 0; i < currentWord.tiles.length; i++) {
    const slot = document.createElement('div');
    slot.className = 'slot';
    slot.dataset.index = i;
    slotsEl.appendChild(slot);
  }

  const shuffled = shuffle(currentWord.tiles);
  trayEl.innerHTML = '';
  tray = shuffled.map((letter, i) => {
    const tile = document.createElement('div');
    tile.className = 'tile';
    tile.textContent = letter;
    tile.dataset.letter = letter;
    trayEl.appendChild(tile);
    attachDrag(tile);
    return tile;
  });
}

// ---- Drag & drop via Pointer Events ----
let dragData = null;

function attachDrag(tile) {
  tile.addEventListener('pointerdown', onPointerDown);
}

function onPointerDown(e) {
  const tile = e.currentTarget;
  if (tile.dataset.locked === '1') return;
  tile.setPointerCapture(e.pointerId);
  const rect = tile.getBoundingClientRect();
  dragData = {
    tile,
    offsetX: e.clientX - rect.left,
    offsetY: e.clientY - rect.top,
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

function onPointerUp(e) {
  if (!dragData) return;
  const { tile, fromSlot } = dragData;
  tile.classList.remove('dragging');
  tile.removeEventListener('pointermove', onPointerMove);
  tile.removeEventListener('pointerup', onPointerUp);

  tile.style.visibility = 'hidden';
  const targetEl = document.elementFromPoint(e.clientX, e.clientY);
  tile.style.visibility = 'visible';
  tile.style.position = '';
  tile.style.left = '';
  tile.style.top = '';
  tile.style.width = '';
  tile.style.height = '';

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
  const slots = Array.from(slotsEl.children);
  let allCorrect = true;
  slots.forEach((slot, i) => {
    const correct = slotState[i] === currentWord.tiles[i];
    slot.classList.toggle('correct', correct);
    slot.classList.toggle('wrong', !correct);
    if (!correct) allCorrect = false;
  });

  if (allCorrect) {
    slots.forEach(slot => {
      slot.firstElementChild.dataset.locked = '1';
    });
    feedbackEl.textContent = 'מעולה! ✓';
    feedbackEl.className = 'success';
    playSuccess();
    nextBtn.classList.remove('hidden');
  } else {
    feedbackEl.textContent = 'נסה שוב';
    feedbackEl.className = 'error';
    playError();
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

nextBtn.addEventListener('click', () => {
  currentIndex = (currentIndex + 1) % currentWords().length;
  loadWord(currentIndex);
});

hintBtn.addEventListener('click', () => {
  speakWord(currentWord.name);
});

// ---- Hint: speak the word aloud (Web Speech API) ----
let hebrewVoice = null;
function pickHebrewVoice() {
  const voices = speechSynthesis.getVoices();
  hebrewVoice = voices.find(v => v.lang && v.lang.startsWith('he')) || null;
}
if ('speechSynthesis' in window) {
  pickHebrewVoice();
  speechSynthesis.addEventListener('voiceschanged', pickHebrewVoice);
}

function speakWord(word) {
  if (!('speechSynthesis' in window)) {
    console.warn('speechSynthesis not supported in this browser/WebView');
    return;
  }
  speechSynthesis.cancel();
  // Chrome has a bug where speak() right after cancel() can be silently
  // dropped, so fire it on the next tick instead of synchronously.
  setTimeout(() => {
    const utterance = new SpeechSynthesisUtterance(word);
    const voices = speechSynthesis.getVoices();
    // No Hebrew voice on this device? Fall back to whatever voice exists
    // rather than requesting "he-IL" with no matching voice, which some
    // browsers silently refuse to speak at all.
    const voice = hebrewVoice || voices[0] || null;
    utterance.voice = voice || undefined;
    utterance.lang = voice ? voice.lang : 'he-IL';
    utterance.rate = 0.85;
    utterance.onerror = (e) => console.error('speech error', e.error);
    speechSynthesis.speak(utterance);
  }, 50);
}

// ---- Audio feedback (Web Audio API, no files needed) ----
let audioCtx = null;
function getCtx() {
  if (!audioCtx) audioCtx = new (window.AudioContext || window.webkitAudioContext)();
  return audioCtx;
}

function playTone(freq, start, duration, type = 'sine') {
  const ctx = getCtx();
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

// kick off
loadWord(currentIndex);
