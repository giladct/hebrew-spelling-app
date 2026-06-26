// ---- Word data, grouped by level (each level uses a single niqqud) ----
const LEVELS = [
  {
    label: 'קָמָץ וּפַתַח',
    words: [
      {
        name: 'גמל',
        tiles: ['גָּ', 'מַל'],
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
        tiles: ['שַׁ', 'בָּת'],
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
        tiles: ['מַ', 'צָּה'],
        svg: `<svg viewBox="0 0 200 200">
          <rect x="40" y="50" width="120" height="100" rx="4" fill="#e8d4a0" stroke="#c9a86a" stroke-width="4"/>
          <path d="M55 70 L145 70 M55 90 L145 90 M55 110 L145 110 M55 130 L145 130" stroke="#c9a86a" stroke-width="3"/>
        </svg>`
      },
      {
        name: 'חלב',
        tiles: ['חַ', 'לָּב'],
        svg: `<svg viewBox="0 0 200 200">
          <path d="M75 40 L125 40 L135 175 Q100 190 65 175 Z" fill="#ecf0f1" stroke="#bdc3c7" stroke-width="4"/>
          <path d="M70 95 L130 95 L135 175 Q100 190 65 175 Z" fill="#ffffff"/>
        </svg>`
      },
      {
        name: 'גלגל',
        tiles: ['גַּל', 'גַּל'],
        svg: `<svg viewBox="0 0 200 200">
          <circle cx="100" cy="100" r="70" fill="#2c3e50"/>
          <circle cx="100" cy="100" r="35" fill="#bdc3c7"/>
          <circle cx="100" cy="100" r="10" fill="#2c3e50"/>
          <path d="M100 65 L100 135 M65 100 L135 100 M77 77 L123 123 M123 77 L77 123" stroke="#7f8c8d" stroke-width="6"/>
        </svg>`
      },
      {
        name: 'בקר',
        tiles: ['בָּ', 'קָר'],
        svg: `<svg viewBox="0 0 200 200">
          <ellipse cx="55" cy="78" rx="18" ry="24" fill="#3a2a1a"/>
          <ellipse cx="145" cy="78" rx="18" ry="24" fill="#3a2a1a"/>
          <ellipse cx="55" cy="78" rx="9" ry="14" fill="#f5b8c4"/>
          <ellipse cx="145" cy="78" rx="9" ry="14" fill="#f5b8c4"/>
          <path d="M68 55 L60 35 M132 55 L140 35" stroke="#ecf0f1" stroke-width="7" stroke-linecap="round"/>
          <ellipse cx="100" cy="120" rx="58" ry="46" fill="#fff"/>
          <ellipse cx="70" cy="105" rx="14" ry="18" fill="#2c3e50"/>
          <ellipse cx="130" cy="125" rx="16" ry="14" fill="#2c3e50"/>
          <circle cx="78" cy="100" r="5" fill="#2c3e50"/>
          <circle cx="112" cy="100" r="5" fill="#2c3e50"/>
          <ellipse cx="95" cy="118" rx="14" ry="10" fill="#f5b8c4"/>
        </svg>`
      },
      {
        name: 'מפה',
        tiles: ['מַ', 'פָּה'],
        svg: `<svg viewBox="0 0 200 200">
          <rect x="40" y="40" width="120" height="120" fill="#f0e6d2" stroke="#c9a86a" stroke-width="4"/>
          <path d="M55 90 Q90 60 110 90 Q130 120 145 100" stroke="#e74c3c" stroke-width="4" fill="none" stroke-dasharray="6 4"/>
          <path d="M60 60 L60 140 M100 50 L100 150 M140 60 L140 140" stroke="#c9a86a" stroke-width="2"/>
          <circle cx="145" cy="100" r="6" fill="#e74c3c"/>
        </svg>`
      },
      {
        name: 'חלה',
        tiles: ['חַ', 'לָּה'],
        svg: `<svg viewBox="0 0 200 200">
          <path d="M30 130 Q30 110 55 108 Q55 90 80 95 Q90 80 100 95 Q110 80 120 95 Q145 90 145 108 Q170 110 170 130 Q170 150 100 150 Q30 150 30 130 Z" fill="#c9893a"/>
          <path d="M40 115 Q60 100 80 112 M90 105 Q100 95 110 105 M120 112 Q140 100 160 115" stroke="#a8702a" stroke-width="3" fill="none"/>
        </svg>`
      },
      {
        name: 'סבא',
        tiles: ['סַ', 'בָּא'],
        svg: `<svg viewBox="0 0 200 200">
          <circle cx="100" cy="85" r="50" fill="#f0c8a0"/>
          <path d="M55 75 Q100 50 145 75 Q145 55 100 50 Q55 55 55 75 Z" fill="#ecf0f1"/>
          <path d="M70 110 Q100 125 130 110" stroke="#bdc3c7" stroke-width="6" fill="none"/>
          <circle cx="80" cy="85" r="5" fill="#2c3e50"/>
          <circle cx="120" cy="85" r="5" fill="#2c3e50"/>
          <rect x="60" y="140" width="80" height="50" rx="10" fill="#5dade2"/>
        </svg>`
      },
      {
        name: 'גמד',
        tiles: ['גַּ', 'מָּד'],
        svg: `<svg viewBox="0 0 200 200">
          <path d="M70 90 L100 40 L130 90 Z" fill="#e74c3c"/>
          <circle cx="100" cy="110" r="28" fill="#f0c8a0"/>
          <path d="M75 120 Q100 145 125 120" stroke="#fff" stroke-width="10" fill="none"/>
          <rect x="80" y="135" width="40" height="50" rx="10" fill="#3498db"/>
        </svg>`
      }
    ]
  },
  {
    label: 'חִירִיק',
    words: [
      {
        name: 'כיסים',
        tiles: ['כִּי', 'סִים'],
        svg: `<svg viewBox="0 0 200 200">
          <rect x="20" y="55" width="75" height="100" rx="8" fill="#5dade2"/>
          <path d="M20 85 Q57 108 95 85 L95 145 Q57 162 20 145 Z" fill="#3498db"/>
          <rect x="105" y="55" width="75" height="100" rx="8" fill="#5dade2"/>
          <path d="M105 85 Q142 108 180 85 L180 145 Q142 162 105 145 Z" fill="#3498db"/>
        </svg>`
      },
      {
        name: 'סירים',
        tiles: ['סִי', 'רִים'],
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
        tiles: ['גִּי', 'רִים'],
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
        tiles: ['תִּי', 'קִים'],
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
        tiles: ['פִּי', 'לִים'],
        svg: `<svg viewBox="0 0 200 200">
          <ellipse cx="75" cy="125" rx="45" ry="34" fill="#95a5a6"/>
          <ellipse cx="38" cy="105" rx="19" ry="23" fill="#7f8c8d"/>
          <path d="M108 122 Q128 126 124 150 Q120 168 105 164" stroke="#95a5a6" stroke-width="10" fill="none"/>
          <ellipse cx="150" cy="135" rx="35" ry="26" fill="#bdc3c7"/>
          <ellipse cx="120" cy="120" rx="15" ry="18" fill="#95a5a6"/>
          <path d="M175 132 Q190 135 187 152 Q184 165 173 162" stroke="#bdc3c7" stroke-width="8" fill="none"/>
        </svg>`
      },
      {
        name: 'סינית',
        tiles: ['סִי', 'נִית'],
        svg: `<svg viewBox="0 0 200 200">
          <ellipse cx="100" cy="120" rx="80" ry="30" fill="#bdc3c7"/>
          <ellipse cx="100" cy="112" rx="62" ry="20" fill="#95a5a6"/>
          <circle cx="70" cy="110" r="14" fill="#ecf0f1"/>
          <circle cx="130" cy="110" r="14" fill="#ecf0f1"/>
        </svg>`
      },
      {
        name: 'מיצים',
        tiles: ['מִי', 'צִים'],
        svg: `<svg viewBox="0 0 200 200">
          <path d="M40 60 L80 60 L74 150 L46 150 Z" fill="#f39c12"/>
          <rect x="56" y="40" width="8" height="20" fill="#ecf0f1"/>
          <path d="M120 60 L160 60 L154 150 L126 150 Z" fill="#e74c3c"/>
          <rect x="136" y="40" width="8" height="20" fill="#ecf0f1"/>
        </svg>`
      },
      {
        name: 'תינוק',
        tiles: ['תִּי', 'נוֹק'],
        svg: `<svg viewBox="0 0 200 200">
          <circle cx="100" cy="100" r="55" fill="#f5e0c8"/>
          <path d="M55 90 Q100 55 145 90" stroke="#fff" stroke-width="22" fill="none"/>
          <circle cx="80" cy="100" r="6" fill="#2c3e50"/>
          <circle cx="120" cy="100" r="6" fill="#2c3e50"/>
          <path d="M88 125 Q100 133 112 125" stroke="#2c3e50" stroke-width="3" fill="none"/>
          <circle cx="65" cy="118" r="9" fill="#f5b8c4" opacity="0.7"/>
          <circle cx="135" cy="118" r="9" fill="#f5b8c4" opacity="0.7"/>
        </svg>`
      },
      {
        name: 'כיסא',
        tiles: ['כִּ', 'סֵּא'],
        svg: `<svg viewBox="0 0 200 200">
          <rect x="130" y="40" width="18" height="140" rx="4" fill="#8b5a2b"/>
          <rect x="60" y="110" width="18" height="70" rx="4" fill="#8b5a2b"/>
          <rect x="60" y="100" width="88" height="16" rx="4" fill="#a0683c"/>
          <rect x="120" y="40" width="28" height="16" rx="4" fill="#a0683c"/>
        </svg>`
      },
      {
        name: 'סיפור',
        tiles: ['סִי', 'פּוּר'],
        svg: `<svg viewBox="0 0 200 200">
          <path d="M100 55 Q60 40 30 55 L30 145 Q60 133 100 145 Z" fill="#9b59b6"/>
          <path d="M100 55 Q140 40 170 55 L170 145 Q140 133 100 145 Z" fill="#8e44ad"/>
          <path d="M45 65 L48 60 L51 65 L56 66 L51 70 L52 75 L48 72 L44 75 L45 70 L40 66 Z" fill="#f1c40f"/>
          <path d="M150 80 L153 75 L156 80 L161 81 L156 85 L157 90 L153 87 L149 90 L150 85 L145 81 Z" fill="#f1c40f"/>
        </svg>`
      }
    ]
  },
  {
    label: 'קָמָץ, פַּתַח וְחִירִיק',
    words: [
      {
        name: 'בית',
        tiles: ['בַּ', 'יִת'],
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
        tiles: ['מִט', 'בָּח'],
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
        tiles: ['צָ', 'מִיד'],
        svg: `<svg viewBox="0 0 200 200">
          <circle cx="100" cy="100" r="65" fill="none" stroke="#d4af37" stroke-width="18"/>
          <circle cx="100" cy="40" r="13" fill="#e74c3c"/>
          <circle cx="150" cy="75" r="10" fill="#3498db"/>
          <circle cx="150" cy="125" r="10" fill="#2ecc71"/>
        </svg>`
      },
      {
        name: 'כתה',
        tiles: ['כִּ', 'תָּה'],
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
        tiles: ['סַ', 'כִּין'],
        svg: `<svg viewBox="0 0 200 200">
          <rect x="95" y="120" width="22" height="60" rx="6" fill="#8b5a2b"/>
          <path d="M95 120 L130 30 Q135 25 130 50 L117 120 Z" fill="#bdc3c7"/>
        </svg>`
      },
      {
        name: 'גדי',
        tiles: ['גָּ', 'דִי'],
        svg: `<svg viewBox="0 0 200 200">
          <ellipse cx="100" cy="125" rx="40" ry="30" fill="#f5deb3"/>
          <circle cx="140" cy="100" r="22" fill="#f5deb3"/>
          <path d="M132 80 L128 68 M148 80 L152 68" stroke="#deb887" stroke-width="4"/>
          <circle cx="148" cy="95" r="2.5" fill="#222"/>
          <rect x="75" y="148" width="10" height="20" fill="#deb887"/>
          <rect x="115" y="148" width="10" height="20" fill="#deb887"/>
        </svg>`
      },
      {
        name: 'סירה',
        tiles: ['סִי', 'רָה'],
        svg: `<svg viewBox="0 0 200 200">
          <path d="M30 120 L170 120 L150 150 Q100 165 50 150 Z" fill="#c0392b"/>
          <rect x="95" y="60" width="6" height="60" fill="#8b5a2b"/>
          <path d="M101 65 L140 105 L101 105 Z" fill="#ecf0f1"/>
          <ellipse cx="100" cy="160" rx="90" ry="10" fill="#5dade2"/>
        </svg>`
      },
      {
        name: 'פטיש',
        tiles: ['פַּ', 'טִּיש'],
        svg: `<svg viewBox="0 0 200 200">
          <rect x="92" y="80" width="16" height="100" rx="6" fill="#8b5a2b"/>
          <rect x="55" y="45" width="90" height="38" rx="8" fill="#7f8c8d"/>
        </svg>`
      },
      {
        name: 'מטה',
        tiles: ['מִ', 'טָּה'],
        svg: `<svg viewBox="0 0 200 200">
          <rect x="35" y="120" width="130" height="20" fill="#8b5a2b"/>
          <rect x="35" y="140" width="14" height="35" fill="#5a3a1b"/>
          <rect x="151" y="140" width="14" height="35" fill="#5a3a1b"/>
          <rect x="45" y="90" width="35" height="35" rx="8" fill="#ecf0f1"/>
          <rect x="80" y="105" width="85" height="20" fill="#3498db"/>
        </svg>`
      },
      {
        name: 'סכינים',
        tiles: ['סַ', 'כִּי', 'נִים'],
        svg: `<svg viewBox="0 0 200 200">
          <rect x="80" y="110" width="18" height="55" rx="5" fill="#8b5a2b" transform="rotate(-15 89 137)"/>
          <path d="M80 110 L110 25 Q114 21 110 42 L99 110 Z" fill="#bdc3c7" transform="rotate(-15 89 137)"/>
          <rect x="100" y="110" width="18" height="55" rx="5" fill="#8b5a2b" transform="rotate(15 109 137)"/>
          <path d="M100 110 L130 25 Q134 21 130 42 L119 110 Z" fill="#bdc3c7" transform="rotate(15 109 137)"/>
        </svg>`
      }
    ]
  },
  {
    label: 'חוֹלָם',
    words: [
      {
        name: 'עוגה',
        tiles: ['עוֹ', 'גָה'],
        svg: `<svg viewBox="0 0 200 200">
          <rect x="45" y="110" width="110" height="55" fill="#e8c4a0"/>
          <rect x="45" y="90" width="110" height="22" fill="#fff"/>
          <circle cx="65" cy="90" r="6" fill="#e74c3c"/>
          <circle cx="100" cy="90" r="6" fill="#f1c40f"/>
          <circle cx="135" cy="90" r="6" fill="#3498db"/>
          <path d="M95 70 L95 88 M115 70 L115 88" stroke="#f39c12" stroke-width="4"/>
          <ellipse cx="95" cy="68" rx="3" ry="5" fill="#e74c3c"/>
          <ellipse cx="115" cy="68" rx="3" ry="5" fill="#e74c3c"/>
        </svg>`
      },
      {
        name: 'עורב',
        tiles: ['עוֹ', 'רֵב'],
        svg: `<svg viewBox="0 0 200 200">
          <ellipse cx="95" cy="105" rx="50" ry="38" fill="#2c3e50"/>
          <circle cx="145" cy="80" r="24" fill="#2c3e50"/>
          <path d="M167 78 L195 73 L195 85 Z" fill="#1a1a1a"/>
          <circle cx="153" cy="73" r="3.5" fill="#fff"/>
          <path d="M60 95 Q35 100 30 80 Q55 80 70 95 Z" fill="#1a1a1a"/>
          <path d="M75 140 L65 168" stroke="#1a1a1a" stroke-width="5" stroke-linecap="round"/>
          <path d="M105 142 L112 170" stroke="#1a1a1a" stroke-width="5" stroke-linecap="round"/>
        </svg>`
      },
      {
        name: 'עוגן',
        tiles: ['עוֹ', 'גֵן'],
        svg: `<svg viewBox="0 0 200 200">
          <circle cx="100" cy="50" r="14" fill="none" stroke="#7f8c8d" stroke-width="8"/>
          <path d="M100 64 L100 150" stroke="#7f8c8d" stroke-width="8"/>
          <path d="M60 90 L140 90" stroke="#7f8c8d" stroke-width="8"/>
          <path d="M100 150 Q60 150 55 120 M100 150 Q140 150 145 120" stroke="#7f8c8d" stroke-width="8" fill="none"/>
        </svg>`
      },
      {
        name: 'כוכב',
        tiles: ['כּוֹ', 'כָב'],
        svg: `<svg viewBox="0 0 200 200">
          <path d="M100 20 L118 75 L178 75 L130 110 L148 168 L100 132 L52 168 L70 110 L22 75 L82 75 Z" fill="#f9d71c" stroke="#e8b923" stroke-width="3"/>
        </svg>`
      },
      {
        name: 'ציפור',
        tiles: ['צִי', 'פּוֹר'],
        svg: `<svg viewBox="0 0 200 200">
          <rect x="20" y="150" width="160" height="10" fill="#8b5a2b"/>
          <ellipse cx="110" cy="110" rx="55" ry="40" fill="#3498db"/>
          <circle cx="155" cy="85" r="25" fill="#3498db"/>
          <path d="M178 85 L195 80 L195 92 Z" fill="#f39c12"/>
          <circle cx="163" cy="78" r="4" fill="#222"/>
          <path d="M70 110 Q40 105 35 130 Q60 130 80 120 Z" fill="#2980b9"/>
          <rect x="100" y="148" width="6" height="14" fill="#f39c12"/>
          <rect x="120" y="148" width="6" height="14" fill="#f39c12"/>
        </svg>`
      },
      {
        name: 'עולם',
        tiles: ['עוֹ', 'לָם'],
        svg: `<svg viewBox="0 0 200 200">
          <circle cx="100" cy="100" r="70" fill="#3498db"/>
          <path d="M50 70 Q80 60 100 75 Q130 60 150 80 Q120 100 130 130 Q100 120 90 140 Q70 110 50 70 Z" fill="#27ae60"/>
        </svg>`
      },
      {
        name: 'עופות',
        tiles: ['עוֹ', 'פוֹת'],
        svg: `<svg viewBox="0 0 200 200">
          <path d="M40 90 Q55 75 70 88 Q60 80 50 95 Z" fill="#3498db"/>
          <path d="M30 95 Q45 80 60 93 M60 93 Q75 78 90 91" stroke="#3498db" stroke-width="6" fill="none"/>
          <path d="M110 60 Q125 45 140 58 M140 58 Q155 43 170 56" stroke="#e67e22" stroke-width="6" fill="none"/>
          <path d="M80 130 Q95 115 110 128 M110 128 Q125 113 140 126" stroke="#27ae60" stroke-width="6" fill="none"/>
        </svg>`
      },
      {
        name: 'חומה',
        tiles: ['חוֹ', 'מָה'],
        svg: `<svg viewBox="0 0 200 200">
          <rect x="30" y="90" width="140" height="80" fill="#c9a86a"/>
          <rect x="30" y="70" width="25" height="20" fill="#c9a86a"/>
          <rect x="75" y="70" width="25" height="20" fill="#c9a86a"/>
          <rect x="120" y="70" width="25" height="20" fill="#c9a86a"/>
          <rect x="165" y="70" width="20" height="20" fill="#c9a86a"/>
          <rect x="40" y="105" width="30" height="15" fill="#a8895a"/>
          <rect x="90" y="105" width="30" height="15" fill="#a8895a"/>
          <rect x="40" y="135" width="30" height="15" fill="#a8895a"/>
          <rect x="90" y="135" width="30" height="15" fill="#a8895a"/>
        </svg>`
      },
      {
        name: 'כובע',
        tiles: ['כּוֹ', 'בַע'],
        svg: `<svg viewBox="0 0 200 200">
          <ellipse cx="100" cy="140" rx="80" ry="14" fill="#2c3e50"/>
          <path d="M55 140 Q55 75 100 75 Q145 75 145 140 Z" fill="#34495e"/>
          <rect x="55" y="130" width="90" height="14" fill="#e74c3c"/>
        </svg>`
      },
      {
        name: 'מקום',
        tiles: ['מָ', 'קוֹם'],
        svg: `<svg viewBox="0 0 200 200">
          <path d="M100 30 Q150 30 150 85 Q150 130 100 180 Q50 130 50 85 Q50 30 100 30 Z" fill="#e74c3c"/>
          <circle cx="100" cy="85" r="25" fill="#fff"/>
        </svg>`
      }
    ]
  },
  {
    label: 'צֵירֵה וְסֵגוֹל',
    words: [
      {
        name: 'כלב',
        tiles: ['כֶּ', 'לֶב'],
        svg: `<svg viewBox="0 0 200 200">
          <ellipse cx="100" cy="115" rx="55" ry="48" fill="#d2a679"/>
          <ellipse cx="55" cy="75" rx="20" ry="32" fill="#a9744f" transform="rotate(-20 55 75)"/>
          <ellipse cx="145" cy="75" rx="20" ry="32" fill="#a9744f" transform="rotate(20 145 75)"/>
          <ellipse cx="100" cy="135" rx="22" ry="16" fill="#f0e0b0"/>
          <circle cx="82" cy="105" r="6" fill="#2c3e50"/>
          <circle cx="118" cy="105" r="6" fill="#2c3e50"/>
          <ellipse cx="100" cy="125" rx="7" ry="5" fill="#2c3e50"/>
          <path d="M92 140 Q100 150 108 140" stroke="#e74c3c" stroke-width="4" fill="none"/>
        </svg>`
      },
      {
        name: 'ספר',
        tiles: ['סֵ', 'פֶר'],
        svg: `<svg viewBox="0 0 200 200">
          <path d="M100 60 Q60 45 30 60 L30 150 Q60 138 100 150 Z" fill="#e74c3c"/>
          <path d="M100 60 Q140 45 170 60 L170 150 Q140 138 100 150 Z" fill="#c0392b"/>
          <path d="M40 75 L90 85 M40 95 L90 103 M40 113 L90 121" stroke="#fff" stroke-width="3" opacity="0.7"/>
        </svg>`
      },
      {
        name: 'פרח',
        tiles: ['פֶּ', 'רַח'],
        svg: `<svg viewBox="0 0 200 200">
          <rect x="95" y="120" width="10" height="55" fill="#2ecc71"/>
          <path d="M95 150 Q70 150 65 170" stroke="#2ecc71" stroke-width="6" fill="none"/>
          <circle cx="100" cy="90" r="18" fill="#f39c12"/>
          <ellipse cx="100" cy="55" rx="16" ry="22" fill="#e74c3c"/>
          <ellipse cx="100" cy="125" rx="16" ry="22" fill="#e74c3c"/>
          <ellipse cx="65" cy="90" rx="22" ry="16" fill="#e74c3c"/>
          <ellipse cx="135" cy="90" rx="22" ry="16" fill="#e74c3c"/>
        </svg>`
      },
      {
        name: 'עצים',
        tiles: ['עֵ', 'צִים'],
        svg: `<svg viewBox="0 0 200 200">
          <rect x="48" y="110" width="14" height="55" fill="#8b5a2b"/>
          <circle cx="55" cy="85" r="40" fill="#2ecc71"/>
          <rect x="138" y="95" width="14" height="70" fill="#8b5a2b"/>
          <circle cx="145" cy="65" r="48" fill="#27ae60"/>
        </svg>`
      },
      {
        name: 'מלך',
        tiles: ['מֶ', 'לֶך'],
        svg: `<svg viewBox="0 0 200 200">
          <path d="M40 130 L40 80 L75 110 L100 70 L125 110 L160 80 L160 130 Z" fill="#f1c40f" stroke="#d4af37" stroke-width="4"/>
          <rect x="40" y="128" width="120" height="18" fill="#f1c40f" stroke="#d4af37" stroke-width="4"/>
          <circle cx="100" cy="80" r="9" fill="#e74c3c"/>
          <circle cx="60" cy="100" r="7" fill="#3498db"/>
          <circle cx="140" cy="100" r="7" fill="#2ecc71"/>
        </svg>`
      },
      {
        name: 'ביצה',
        tiles: ['בֵּי', 'צָה'],
        svg: `<svg viewBox="0 0 200 200">
          <path d="M100 40 Q140 90 140 130 Q140 170 100 170 Q60 170 60 130 Q60 90 100 40 Z" fill="#fdfdfd" stroke="#e8e8e8" stroke-width="3"/>
        </svg>`
      },
      {
        name: 'עגל',
        tiles: ['עֵ', 'גֶל'],
        svg: `<svg viewBox="0 0 200 200">
          <ellipse cx="48" cy="95" rx="14" ry="22" fill="#d2a679" transform="rotate(-25 48 95)"/>
          <ellipse cx="152" cy="95" rx="14" ry="22" fill="#d2a679" transform="rotate(25 152 95)"/>
          <path d="M85 75 L80 58 M115 75 L120 58" stroke="#ecf0f1" stroke-width="6" stroke-linecap="round"/>
          <ellipse cx="100" cy="125" rx="46" ry="36" fill="#d2a679"/>
          <circle cx="78" cy="118" r="13" fill="#fff"/>
          <circle cx="120" cy="135" r="9" fill="#fff"/>
          <ellipse cx="100" cy="138" rx="16" ry="10" fill="#f0e0c8"/>
          <circle cx="88" cy="112" r="4" fill="#2c3e50"/>
          <circle cx="112" cy="112" r="4" fill="#2c3e50"/>
        </svg>`
      },
      {
        name: 'גשר',
        tiles: ['גֶּ', 'שֶׁר'],
        svg: `<svg viewBox="0 0 200 200">
          <path d="M20 140 Q100 70 180 140" stroke="#a0522d" stroke-width="12" fill="none"/>
          <rect x="10" y="135" width="180" height="10" fill="#a0522d"/>
          <rect x="0" y="150" width="200" height="20" fill="#5dade2"/>
        </svg>`
      },
      {
        name: 'בגד',
        tiles: ['בֶּ', 'גֶד'],
        svg: `<svg viewBox="0 0 200 200">
          <path d="M70 50 L100 65 L130 50 L160 80 L140 100 L130 90 L130 170 L70 170 L70 90 L60 100 L40 80 Z" fill="#3498db"/>
        </svg>`
      },
      {
        name: 'עדר',
        tiles: ['עֵ', 'דֶר'],
        svg: `<svg viewBox="0 0 200 200">
          <rect x="46" y="135" width="6" height="20" fill="#2c3e50"/>
          <rect x="70" y="135" width="6" height="20" fill="#2c3e50"/>
          <ellipse cx="60" cy="120" rx="28" ry="20" fill="#fdfdfd"/>
          <circle cx="40" cy="112" r="9" fill="#fdfdfd"/>
          <circle cx="55" cy="105" r="10" fill="#fdfdfd"/>
          <circle cx="72" cy="110" r="9" fill="#fdfdfd"/>
          <circle cx="33" cy="106" r="11" fill="#2c3e50"/>
          <rect x="95" y="145" width="6" height="20" fill="#2c3e50"/>
          <rect x="122" y="145" width="6" height="20" fill="#2c3e50"/>
          <ellipse cx="110" cy="130" rx="32" ry="22" fill="#fdfdfd"/>
          <circle cx="87" cy="120" r="10" fill="#fdfdfd"/>
          <circle cx="105" cy="112" r="11" fill="#fdfdfd"/>
          <circle cx="125" cy="118" r="10" fill="#fdfdfd"/>
          <circle cx="80" cy="116" r="12" fill="#2c3e50"/>
          <rect x="150" y="130" width="5" height="18" fill="#2c3e50"/>
          <rect x="173" y="130" width="5" height="18" fill="#2c3e50"/>
          <ellipse cx="160" cy="118" rx="24" ry="16" fill="#fdfdfd"/>
          <circle cx="142" cy="111" r="8" fill="#fdfdfd"/>
          <circle cx="178" cy="111" r="8" fill="#fdfdfd"/>
          <circle cx="138" cy="106" r="9" fill="#2c3e50"/>
        </svg>`
      }
    ]
  },
  {
    label: 'שׁוּרוּק וְקֻבּוּץ',
    words: [
      {
        name: 'תפוח',
        tiles: ['תַּ', 'פּוּ', 'חַ'],
        svg: `<svg viewBox="0 0 200 200">
          <path d="M100 70 Q60 60 50 100 Q42 150 100 165 Q158 150 150 100 Q140 60 100 70 Z" fill="#e74c3c"/>
          <path d="M97 70 Q90 50 100 35" stroke="#8b5a2b" stroke-width="5" fill="none"/>
          <ellipse cx="112" cy="42" rx="14" ry="8" fill="#2ecc71" transform="rotate(20 112 42)"/>
        </svg>`
      },
      {
        name: 'תפוז',
        tiles: ['תַּ', 'פּוּז'],
        svg: `<svg viewBox="0 0 200 200">
          <circle cx="100" cy="105" r="62" fill="#f39c12"/>
          <ellipse cx="105" cy="48" rx="13" ry="7" fill="#2ecc71" transform="rotate(-15 105 48)"/>
          <path d="M100 43 L100 58" stroke="#8b5a2b" stroke-width="4"/>
        </svg>`
      },
      {
        name: 'חומוס',
        tiles: ['חֻ', 'מּוּס'],
        svg: `<svg viewBox="0 0 200 200">
          <ellipse cx="100" cy="120" rx="80" ry="40" fill="#ecf0f1" stroke="#bdc3c7" stroke-width="5"/>
          <ellipse cx="100" cy="110" rx="62" ry="28" fill="#e8c97a"/>
          <path d="M70 105 Q100 95 130 105" stroke="#d4a73a" stroke-width="3" fill="none"/>
          <circle cx="100" cy="100" r="6" fill="#6b8e23"/>
          <path d="M65 105 Q60 90 70 80" stroke="#f1c40f" stroke-width="3" fill="none"/>
        </svg>`
      },
      {
        name: 'סוכר',
        tiles: ['סוּ', 'כָּר'],
        svg: `<svg viewBox="0 0 200 200">
          <rect x="50" y="80" width="40" height="40" fill="#fff" stroke="#ccc" stroke-width="2"/>
          <rect x="95" y="80" width="40" height="40" fill="#fff" stroke="#ccc" stroke-width="2"/>
          <rect x="72" y="115" width="40" height="40" fill="#fff" stroke="#ccc" stroke-width="2"/>
          <rect x="117" y="115" width="40" height="40" fill="#fff" stroke="#ccc" stroke-width="2"/>
        </svg>`
      },
      {
        name: 'כדור',
        tiles: ['כַּ', 'דּוּר'],
        svg: `<svg viewBox="0 0 200 200">
          <circle cx="100" cy="100" r="65" fill="#fff" stroke="#2c3e50" stroke-width="4"/>
          <path d="M100 35 L100 165 M35 100 L165 100" stroke="#2c3e50" stroke-width="3"/>
          <path d="M55 55 Q100 75 145 55 M55 145 Q100 125 145 145" stroke="#2c3e50" stroke-width="3" fill="none"/>
          <circle cx="100" cy="100" r="20" fill="#e74c3c"/>
        </svg>`
      },
      {
        name: 'לולב',
        tiles: ['לוּ', 'לָב'],
        svg: `<svg viewBox="0 0 200 200">
          <path d="M100 180 L100 60" stroke="#6a8a3a" stroke-width="6"/>
          <path d="M100 70 Q70 40 50 30 Q75 60 100 90" fill="#7ba348"/>
          <path d="M100 70 Q130 40 150 30 Q125 60 100 90" fill="#7ba348"/>
          <path d="M100 50 Q90 30 95 15 Q105 30 100 50 Z" fill="#8fb85a"/>
        </svg>`
      },
      {
        name: 'סוסים',
        tiles: ['סוּ', 'סִים'],
        svg: `<svg viewBox="0 0 200 200">
          <g>
            <ellipse cx="55" cy="125" rx="30" ry="18" fill="#8b5a2b"/>
            <rect x="35" y="135" width="7" height="28" fill="#8b5a2b"/>
            <rect x="68" y="135" width="7" height="28" fill="#8b5a2b"/>
            <rect x="68" y="95" width="14" height="38" rx="6" fill="#8b5a2b" transform="rotate(-25 75 114)"/>
            <ellipse cx="92" cy="90" rx="20" ry="12" fill="#8b5a2b"/>
            <path d="M108 86 L122 84 L109 94 Z" fill="#8b5a2b"/>
            <path d="M85 78 L90 68 L95 79 Z" fill="#8b5a2b"/>
            <path d="M70 95 Q80 85 92 88" stroke="#5a3a1b" stroke-width="4" fill="none"/>
          </g>
          <g transform="translate(60,5)">
            <ellipse cx="55" cy="125" rx="30" ry="18" fill="#d2a679"/>
            <rect x="35" y="135" width="7" height="28" fill="#d2a679"/>
            <rect x="68" y="135" width="7" height="28" fill="#d2a679"/>
            <rect x="68" y="95" width="14" height="38" rx="6" fill="#d2a679" transform="rotate(-25 75 114)"/>
            <ellipse cx="92" cy="90" rx="20" ry="12" fill="#d2a679"/>
            <path d="M108 86 L122 84 L109 94 Z" fill="#d2a679"/>
            <path d="M85 78 L90 68 L95 79 Z" fill="#d2a679"/>
            <path d="M70 95 Q80 85 92 88" stroke="#a0683c" stroke-width="4" fill="none"/>
          </g>
        </svg>`
      },
      {
        name: 'סולם',
        tiles: ['סוּ', 'לָּם'],
        svg: `<svg viewBox="0 0 200 200">
          <rect x="60" y="30" width="10" height="150" fill="#8b5a2b"/>
          <rect x="130" y="30" width="10" height="150" fill="#8b5a2b"/>
          <rect x="60" y="55" width="80" height="10" fill="#a0683c"/>
          <rect x="60" y="95" width="80" height="10" fill="#a0683c"/>
          <rect x="60" y="135" width="80" height="10" fill="#a0683c"/>
        </svg>`
      },
      {
        name: 'צורה',
        tiles: ['צוּ', 'רָה'],
        svg: `<svg viewBox="0 0 200 200">
          <circle cx="55" cy="60" r="30" fill="#3498db"/>
          <rect x="105" y="35" width="55" height="55" fill="#e74c3c"/>
          <path d="M55 120 L90 175 L20 175 Z" fill="#f1c40f"/>
          <path d="M130 110 L170 150 L130 190 L90 150 Z" fill="#2ecc71"/>
        </svg>`
      },
      {
        name: 'סוכה',
        tiles: ['סֻ', 'כָּה'],
        svg: `<svg viewBox="0 0 200 200">
          <rect x="40" y="100" width="120" height="70" fill="#e8d4a0" stroke="#c9a86a" stroke-width="3"/>
          <path d="M30 100 L100 60 L170 100 Z" fill="none" stroke="#2ecc71" stroke-width="6" stroke-dasharray="8 6"/>
          <rect x="80" y="130" width="40" height="40" fill="#8b5a2b"/>
        </svg>`
      }
    ]
  },
  {
    label: 'צִמְדֵי מִלִּים',
    words: [
      {
        name: 'קשת בענן',
        tiles: ['קֶ', 'שֶׁת', 'בְּ', 'עָ', 'נָן'],
        groupSizes: [2,3],
        svg: `<svg viewBox="0 0 200 200">
          <path d="M20 150 A80 80 0 0 1 180 150" stroke="#e74c3c" stroke-width="10" fill="none"/>
          <path d="M30 150 A70 70 0 0 1 170 150" stroke="#f39c12" stroke-width="10" fill="none"/>
          <path d="M40 150 A60 60 0 0 1 160 150" stroke="#f1c40f" stroke-width="10" fill="none"/>
          <path d="M50 150 A50 50 0 0 1 150 150" stroke="#2ecc71" stroke-width="10" fill="none"/>
          <path d="M60 150 A40 40 0 0 1 140 150" stroke="#3498db" stroke-width="10" fill="none"/>
          <ellipse cx="35" cy="150" rx="28" ry="16" fill="#fff"/>
          <ellipse cx="165" cy="150" rx="28" ry="16" fill="#fff"/>
        </svg>`
      },
      {
        name: 'תיק גב',
        tiles: ['תִּיק', 'גַּב'],
        groupSizes: [1,1],
        svg: `<svg viewBox="0 0 200 200">
          <path d="M70 55 Q70 30 100 30 Q130 30 130 55" stroke="#8b5a2b" stroke-width="9" fill="none"/>
          <rect x="45" y="55" width="110" height="120" rx="18" fill="#3498db"/>
          <rect x="80" y="85" width="40" height="35" rx="8" fill="#2980b9"/>
          <rect x="45" y="100" width="110" height="10" fill="#2980b9"/>
        </svg>`
      },
      {
        name: 'בית ספר',
        tiles: ['בֵּית', 'סֵ', 'פֶר'],
        groupSizes: [1,2],
        svg: `<svg viewBox="0 0 200 200">
          <rect x="35" y="90" width="130" height="85" fill="#f0e0b0"/>
          <path d="M25 90 L100 45 L175 90 Z" fill="#c0392b"/>
          <rect x="85" y="130" width="30" height="45" fill="#8b5a2b"/>
          <rect x="50" y="105" width="22" height="22" fill="#5dade2"/>
          <rect x="128" y="105" width="22" height="22" fill="#5dade2"/>
          <rect x="92" y="35" width="6" height="18" fill="#7f8c8d"/>
          <path d="M98 35 L120 42 L98 49 Z" fill="#3498db"/>
        </svg>`
      },
      {
        name: 'כלב ים',
        tiles: ['כֶּ', 'לֶב', 'יָם'],
        groupSizes: [2,1],
        svg: `<svg viewBox="0 0 200 200">
          <ellipse cx="100" cy="170" rx="90" ry="16" fill="#5dade2"/>
          <path d="M55 170 Q40 110 75 80 Q100 65 125 80 Q160 110 145 170 Z" fill="#7f8c8d"/>
          <ellipse cx="80" cy="100" rx="10" ry="14" fill="#7f8c8d" transform="rotate(-20 80 100)"/>
          <ellipse cx="120" cy="100" rx="10" ry="14" fill="#7f8c8d" transform="rotate(20 120 100)"/>
          <circle cx="88" cy="85" r="4" fill="#2c3e50"/>
          <circle cx="112" cy="85" r="4" fill="#2c3e50"/>
          <path d="M75 95 L60 92 M75 98 L58 100 M125 95 L140 92 M125 98 L142 100" stroke="#2c3e50" stroke-width="2"/>
        </svg>`
      },
      {
        name: 'סוס ים',
        tiles: ['סוּס', 'יָם'],
        groupSizes: [1,1],
        svg: `<svg viewBox="0 0 200 200">
          <path d="M110 40 Q140 40 135 70 Q160 75 150 100 Q145 115 125 110 Q130 130 110 140 Q120 155 100 165 Q70 175 65 150 Q50 145 55 125 Q40 120 50 105 Q45 90 65 90 Q60 65 90 55 Q100 50 110 40 Z" fill="#f39c12"/>
          <circle cx="120" cy="55" r="4" fill="#2c3e50"/>
          <path d="M95 60 Q85 65 88 75 Q78 78 82 88" stroke="#e67e22" stroke-width="4" fill="none"/>
        </svg>`
      },
      {
        name: 'דג זהב',
        tiles: ['דַּג', 'זָ', 'הָב'],
        groupSizes: [1,2],
        svg: `<svg viewBox="0 0 200 200">
          <ellipse cx="100" cy="100" rx="62" ry="38" fill="#f1c40f"/>
          <path d="M158 100 L190 75 L190 125 Z" fill="#e8b923"/>
          <circle cx="70" cy="92" r="7" fill="white"/>
          <circle cx="68" cy="92" r="3.5" fill="#222"/>
          <path d="M45 100 Q58 92 70 100 Q58 108 45 100 Z" fill="#e8b923"/>
        </svg>`
      },
      {
        name: 'כוכב ים',
        tiles: ['כּוֹ', 'כַב', 'יָם'],
        groupSizes: [2,1],
        svg: `<svg viewBox="0 0 200 200">
          <path d="M100 25 L120 80 L178 85 L128 118 L142 175 L100 140 L58 175 L72 118 L22 85 L80 80 Z" fill="#e67e22" stroke="#c8650f" stroke-width="3"/>
          <circle cx="85" cy="95" r="3" fill="#c8650f"/>
          <circle cx="115" cy="95" r="3" fill="#c8650f"/>
          <circle cx="100" cy="115" r="3" fill="#c8650f"/>
        </svg>`
      },
      {
        name: 'גן חיות',
        tiles: ['גַּן', 'חַ', 'יּוֹת'],
        groupSizes: [1,2],
        svg: `<svg viewBox="0 0 200 200">
          <rect x="20" y="120" width="160" height="12" fill="#8b5a2b"/>
          <rect x="30" y="90" width="8" height="42" fill="#8b5a2b"/>
          <rect x="70" y="90" width="8" height="42" fill="#8b5a2b"/>
          <rect x="122" y="90" width="8" height="42" fill="#8b5a2b"/>
          <rect x="162" y="90" width="8" height="42" fill="#8b5a2b"/>
          <circle cx="100" cy="85" r="32" fill="#e67e22"/>
          <circle cx="78" cy="65" r="12" fill="#e67e22"/>
          <circle cx="122" cy="65" r="12" fill="#e67e22"/>
          <circle cx="90" cy="82" r="3.5" fill="#2c3e50"/>
          <circle cx="110" cy="82" r="3.5" fill="#2c3e50"/>
        </svg>`
      },
      {
        name: 'כובע קסם',
        tiles: ['כּוֹ', 'בַע', 'קֶ', 'סֶם'],
        groupSizes: [2,2],
        svg: `<svg viewBox="0 0 200 200">
          <ellipse cx="100" cy="150" rx="70" ry="14" fill="#2c3e50"/>
          <path d="M85 150 L105 40 L140 150 Z" fill="#8e44ad"/>
          <rect x="80" y="135" width="60" height="14" fill="#f1c40f"/>
          <path d="M60 70 L66 56 L72 70 L86 76 L72 82 L66 96 L60 82 L46 76 Z" fill="#f1c40f"/>
        </svg>`
      },
      {
        name: 'סל פירות',
        tiles: ['סַל', 'פֵּי', 'רוֹת'],
        groupSizes: [1,2],
        svg: `<svg viewBox="0 0 200 200">
          <path d="M40 110 L160 110 L145 170 Q100 182 55 170 Z" fill="#c98b4a"/>
          <path d="M40 110 L160 110 L155 122 L45 122 Z" fill="#a8763a"/>
          <circle cx="80" cy="90" r="22" fill="#e74c3c"/>
          <circle cx="115" cy="85" r="22" fill="#f39c12"/>
          <circle cx="100" cy="105" r="20" fill="#2ecc71"/>
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
const skipBtn = document.getElementById('skipBtn');
const wordIndexEl = document.getElementById('wordIndex');
const wordTotalEl = document.getElementById('wordTotal');
const homeScreen = document.getElementById('homeScreen');
const gameScreen = document.getElementById('gameScreen');
const stageCardsEl = document.getElementById('stageCards');
const continueBtn = document.getElementById('continueBtn');
const homeBtn = document.getElementById('homeBtn');

const STAGE_COLORS = ['#3498db', '#9b59b6', '#e67e22', '#27ae60', '#e74c3c', '#16a085', '#d35400'];

function currentWords() {
  return LEVELS[currentLevel].words;
}

function buildStageCards() {
  stageCardsEl.innerHTML = '';
  LEVELS.forEach((lvl, i) => {
    const card = document.createElement('button');
    card.className = 'stageCard';
    card.style.setProperty('--card-color', STAGE_COLORS[i % STAGE_COLORS.length]);
    card.innerHTML = `<span class="stageNum">${i + 1}</span><span class="stageLabel">${lvl.label}</span>`;
    card.addEventListener('click', () => startStage(i));
    stageCardsEl.appendChild(card);
  });
}

function showHome() {
  if (hasSavedProgress()) {
    continueBtn.classList.remove('hidden');
  } else {
    continueBtn.classList.add('hidden');
  }
  homeScreen.classList.remove('hidden');
  gameScreen.classList.add('hidden');
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

function goToLevel(level) {
  currentLevel = level;
  currentIndex = 0;
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
  wordIndexEl.textContent = index + 1;
  wordTotalEl.textContent = currentWords().length;
  pictureBox.innerHTML = currentWord.svg;
  feedbackEl.textContent = '';
  feedbackEl.className = '';
  nextBtn.classList.add('hidden');

  slotState = new Array(currentWord.tiles.length).fill(null);
  slotsEl.innerHTML = '';
  // Wide tiles (2+ letters merged together) take up noticeably more
  // horizontal space than normal ones, so a handful of them can overflow a
  // phone screen even with only 4-5 tiles total - weight them accordingly
  // instead of just counting tiles.
  const effectiveWidth = currentWord.tiles.reduce((sum, t) => sum + (isWideTile(t) ? 1.5 : 1), 0);
  slotsEl.classList.toggle('compact', effectiveWidth > 4);
  trayEl.classList.toggle('compact', effectiveWidth > 4);
  // groupSizes (e.g. [3, 4]) marks where a two-word phrase splits, so we can
  // draw a visual gap between the words without affecting slot indices.
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
    // Slots that will hold a "wide" tile (2+ base letters merged together,
    // e.g. "מַל") need to be widened to match, or the tile placed inside
    // would overflow the slot's own box.
    if (isWideTile(currentWord.tiles[i])) slot.classList.add('wide');
    slotsEl.appendChild(slot);
  }

  const shuffled = shuffle(currentWord.tiles);
  trayEl.innerHTML = '';
  tray = shuffled.map((letter, i) => {
    const tile = document.createElement('div');
    tile.className = 'tile';
    // Tiles that merged a vowel-less consonant onto the previous syllable
    // (e.g. "מַל") contain 2+ base letters, which don't fit at the normal
    // single-letter tile size - widen and shrink the font to compensate.
    if (isWideTile(letter)) tile.classList.add('wide');
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
  speakLetter(tile.dataset.letter);
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
    // Treated as a tap rather than a drag - just drop the tile into the
    // next empty slot so kids who can't drag precisely can still play.
    if (!fromSlot) {
      const emptyIndex = slotState.findIndex(s => s === null);
      if (emptyIndex !== -1) {
        // Look up by data-index rather than DOM child position - wordGap
        // spacer divs (inserted for two-word phrases) shift raw child
        // indices out of alignment with the logical slot index.
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
      // Tapping a tile that's already placed sends it back down to the tray.
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
  // Use .slot specifically, not slotsEl.children - the children list also
  // includes wordGap spacer divs (for two-word phrases), which would shift
  // every index out of alignment with slotState/currentWord.tiles.
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
      slot.firstElementChild.dataset.locked = '1';
    });
    playSuccess();

    if (currentIndex === currentWords().length - 1) {
      feedbackEl.textContent = 'כל הכבוד! סיימת את השלב! 🎈';
      feedbackEl.className = 'success';
      celebrateStage();
    } else {
      feedbackEl.textContent = 'מעולה! ✓';
      feedbackEl.className = 'success';
      nextBtn.classList.remove('hidden');
    }
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

const balloonsOverlay = document.getElementById('balloonsOverlay');
const BALLOON_COLORS = ['#e74c3c', '#3498db', '#f39c12', '#2ecc71', '#9b59b6', '#e67e22'];

function celebrateStage() {
  for (let i = 0; i < 18; i++) {
    const balloon = document.createElement('div');
    balloon.className = 'balloon';
    balloon.style.left = Math.random() * 96 + '%';
    balloon.style.background = BALLOON_COLORS[i % BALLOON_COLORS.length];
    balloon.style.setProperty('--drift', (Math.random() * 60 - 30) + 'px');
    const duration = 2.6 + Math.random() * 1.4;
    balloon.style.animationDuration = duration + 's';
    balloon.style.animationDelay = (Math.random() * 0.6) + 's';
    balloonsOverlay.appendChild(balloon);
    setTimeout(() => balloon.remove(), (duration + 1) * 1000);
  }

  setTimeout(() => {
    const nextLevel = (currentLevel + 1) % LEVELS.length;
    goToLevel(nextLevel);
  }, 2200);
}

nextBtn.addEventListener('click', () => {
  currentIndex = (currentIndex + 1) % currentWords().length;
  loadWord(currentIndex);
});

hintBtn.addEventListener('click', () => {
  speakWord(currentWord.name);
});

skipBtn.addEventListener('click', () => {
  currentIndex = (currentIndex + 1) % currentWords().length;
  loadWord(currentIndex);
});

// ---- Hint: speak the word aloud ----
// Android's WebView does not implement the Web Speech API, so inside the
// native app we use the @capacitor-community/text-to-speech plugin (backed
// by Android's own TextToSpeech engine). In a plain browser (desktop
// testing) we fall back to window.speechSynthesis.
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
  // Only cancel if something is actually playing - calling speak() right
  // after cancel() in the same tick is a known Chrome bug that silently
  // drops the new utterance. Staying synchronous (no setTimeout) also
  // matters: deferring the call can lose the "user gesture" association
  // some browsers require to allow audio at all.
  if (speechSynthesis.speaking || speechSynthesis.pending) {
    speechSynthesis.cancel();
  }
  const utterance = new SpeechSynthesisUtterance(text);
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
}

function speakWord(word) {
  speak(word);
}

function speakLetter(letter) {
  // An "open" tile (ends right on a vowel mark, e.g. "תַּ", with nothing
  // after it) often gets mispronounced by TTS engines with a trailing
  // glide ("tai" instead of "ta"). Appending a silent aleph closes the
  // syllable the way real Hebrew words do, fixing the pronunciation
  // without changing what's shown on the tile itself.
  const lastChar = letter.charAt(letter.length - 1);
  const isOpenSyllable = !/[א-ת]/.test(lastChar);
  speak(isOpenSyllable ? letter + 'א' : letter);
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
restoreProgress();
buildStageCards();
showHome();
