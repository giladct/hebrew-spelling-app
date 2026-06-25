// ---- Word data (only קמץ / פתח niqqud) ----
const WORDS = [
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
    name: 'דג',
    tiles: ['דָּ', 'ג'],
    svg: `<svg viewBox="0 0 200 200">
      <ellipse cx="100" cy="100" rx="65" ry="40" fill="#5dade2"/>
      <path d="M165 100 L195 70 L195 130 Z" fill="#3498db"/>
      <circle cx="65" cy="90" r="8" fill="white"/>
      <circle cx="63" cy="90" r="4" fill="#222"/>
      <path d="M40 100 Q55 90 70 100 Q55 110 40 100 Z" fill="#3498db"/>
    </svg>`
  },
  {
    name: 'גן',
    tiles: ['גַּ', 'ן'],
    svg: `<svg viewBox="0 0 200 200">
      <circle cx="160" cy="40" r="20" fill="#f9d71c"/>
      <rect x="92" y="110" width="16" height="60" fill="#8b5a2b"/>
      <circle cx="100" cy="90" r="45" fill="#2ecc71"/>
      <rect x="0" y="170" width="200" height="20" fill="#7bc043"/>
    </svg>`
  },
  {
    name: 'סל',
    tiles: ['סַ', 'ל'],
    svg: `<svg viewBox="0 0 200 200">
      <circle cx="80" cy="60" r="22" fill="#e74c3c"/>
      <circle cx="115" cy="55" r="22" fill="#f39c12"/>
      <circle cx="100" cy="80" r="22" fill="#e74c3c"/>
      <path d="M40 100 L160 100 L145 165 Q100 180 55 165 Z" fill="#c98b4a"/>
      <path d="M40 100 L160 100 L155 115 L45 115 Z" fill="#a8763a"/>
      <path d="M55 130 L145 130 M50 150 L150 150" stroke="#8b5a2b" stroke-width="3" fill="none"/>
    </svg>`
  },
  {
    name: 'כד',
    tiles: ['כַּ', 'ד'],
    svg: `<svg viewBox="0 0 200 200">
      <path d="M80 50 Q70 40 80 30 L120 30 Q130 40 120 50 Z" fill="#9b6b43"/>
      <path d="M75 50 Q40 70 45 120 Q48 170 100 175 Q152 170 155 120 Q160 70 125 50 Z" fill="#c98b4a"/>
      <path d="M155 90 Q180 95 180 120 Q180 140 158 138" stroke="#9b6b43" stroke-width="8" fill="none"/>
    </svg>`
  }
];

let order = [];
let currentIndex = 0;
let currentWord = null;
let tray = [];   // array of {id, letter, el}
let slotState = []; // array of letter or null, by slot index

const pictureBox = document.getElementById('pictureBox');
const slotsEl = document.getElementById('slots');
const trayEl = document.getElementById('tray');
const feedbackEl = document.getElementById('feedback');
const nextBtn = document.getElementById('nextBtn');
const wordIndexEl = document.getElementById('wordIndex');
const wordTotalEl = document.getElementById('wordTotal');

wordTotalEl.textContent = WORDS.length;

function shuffle(arr) {
  const a = arr.slice();
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

function loadWord(index) {
  currentWord = WORDS[index];
  wordIndexEl.textContent = index + 1;
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
  currentIndex = (currentIndex + 1) % WORDS.length;
  loadWord(currentIndex);
});

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
