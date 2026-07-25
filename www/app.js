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
        tiles: ['גְּ', 'דִי'],
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
        name: 'מיטה',
        tiles: ['מִי', 'טָּה'],
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
        tiles: ['עוּ', 'גָה'],
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

// ---- Syllable Match data ----
const SYLLABLE_MATCH_SETS = [
  {
    label: 'הַבָּרוֹת',
    fixed: 'כֶּ',
    pairs: [
      {
        syllable: 'לֶב',
        name: 'כלב',
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
        syllable: 'תֶר',
        name: 'כתר',
        svg: `<svg viewBox="0 0 200 200">
          <rect x="28" y="145" width="144" height="28" rx="6" fill="#f1c40f" stroke="#d4a017" stroke-width="3"/>
          <path d="M28 145 L28 92 L66 122 L100 58 L134 122 L172 92 L172 145 Z"
                fill="#f1c40f" stroke="#d4a017" stroke-width="3" stroke-linejoin="round"/>
          <circle cx="100" cy="70" r="10" fill="#e74c3c"/>
          <circle cx="57" cy="113" r="8" fill="#3498db"/>
          <circle cx="143" cy="113" r="8" fill="#2ecc71"/>
          <circle cx="60" cy="155" r="6" fill="#9b59b6"/>
          <circle cx="140" cy="155" r="6" fill="#e67e22"/>
        </svg>`
      },
      {
        syllable: 'בֶשׂ',
        name: 'כֶּבֶשׂ',
        svg: `<svg viewBox="0 0 200 200">
          <ellipse cx="95" cy="125" rx="56" ry="38" fill="#ecf0f1"/>
          <circle cx="48" cy="108" r="26" fill="#ecf0f1"/>
          <circle cx="75" cy="90" r="28" fill="#ecf0f1"/>
          <circle cx="115" cy="88" r="28" fill="#ecf0f1"/>
          <circle cx="145" cy="106" r="24" fill="#ecf0f1"/>
          <rect x="67" y="158" width="12" height="24" rx="5" fill="#7f8c8d"/>
          <rect x="110" y="158" width="12" height="24" rx="5" fill="#7f8c8d"/>
          <ellipse cx="158" cy="105" rx="22" ry="19" fill="#7f8c8d"/>
          <ellipse cx="147" cy="90" rx="7" ry="12" fill="#7f8c8d" transform="rotate(-15 147 90)"/>
          <circle cx="164" cy="99" r="3.5" fill="#2c3e50"/>
          <path d="M151 113 Q158 118 164 113" stroke="#2c3e50" stroke-width="2.5" fill="none"/>
        </svg>`
      }
    ]
  },
  {
    label: 'הַבָרָה שֶׁ',
    fixed: 'שֶׁ',
    pairs: [
      {
        syllable: 'מֶשׁ',
        name: 'שֶׁמֶשׁ',
        svg: `<svg viewBox="0 0 200 200">
          <circle cx="100" cy="100" r="42" fill="#f1c40f"/>
          <g stroke="#f39c12" stroke-width="8" stroke-linecap="round">
            <line x1="100" y1="18" x2="100" y2="42"/>
            <line x1="100" y1="158" x2="100" y2="182"/>
            <line x1="18" y1="100" x2="42" y2="100"/>
            <line x1="158" y1="100" x2="182" y2="100"/>
            <line x1="43" y1="43" x2="60" y2="60"/>
            <line x1="140" y1="140" x2="157" y2="157"/>
            <line x1="157" y1="43" x2="140" y2="60"/>
            <line x1="60" y1="140" x2="43" y2="157"/>
          </g>
        </svg>`
      },
      {
        syllable: 'לֶג',
        name: 'שֶׁלֶג',
        svg: `<svg viewBox="0 0 200 200">
          <circle cx="100" cy="158" r="36" fill="#ecf0f1" stroke="#bdc3c7" stroke-width="3"/>
          <circle cx="100" cy="103" r="27" fill="#ecf0f1" stroke="#bdc3c7" stroke-width="3"/>
          <circle cx="100" cy="60" r="19" fill="#ecf0f1" stroke="#bdc3c7" stroke-width="3"/>
          <circle cx="92" cy="57" r="3" fill="#2c3e50"/>
          <circle cx="108" cy="57" r="3" fill="#2c3e50"/>
          <line x1="100" y1="60" x2="114" y2="64" stroke="#e67e22" stroke-width="4" stroke-linecap="round"/>
          <circle cx="100" cy="96" r="4" fill="#7f8c8d"/>
          <circle cx="100" cy="107" r="4" fill="#7f8c8d"/>
          <circle cx="100" cy="118" r="4" fill="#7f8c8d"/>
          <line x1="73" y1="98" x2="52" y2="85" stroke="#8b5a2b" stroke-width="5" stroke-linecap="round"/>
          <line x1="127" y1="98" x2="148" y2="85" stroke="#8b5a2b" stroke-width="5" stroke-linecap="round"/>
        </svg>`
      },
      {
        syllable: 'קֶל',
        name: 'שֶׁקֶל',
        svg: `<svg viewBox="0 0 200 200">
          <circle cx="100" cy="100" r="72" fill="#c8a020" stroke="#a07818" stroke-width="5"/>
          <circle cx="100" cy="100" r="62" fill="#d4b030" stroke="#b09020" stroke-width="2"/>
          <rect x="82" y="62" width="9" height="64" rx="4" fill="#8b6914"/>
          <rect x="109" y="62" width="9" height="64" rx="4" fill="#8b6914"/>
          <path d="M76 82 Q100 92 124 82" stroke="#8b6914" stroke-width="6" fill="none" stroke-linecap="round"/>
          <path d="M76 102 Q100 112 124 102" stroke="#8b6914" stroke-width="6" fill="none" stroke-linecap="round"/>
        </svg>`
      }
    ]
  },
  {
    label: 'הַבָרָה נָ',
    fixed: 'נָ',
    pairs: [
      {
        syllable: 'חָשׁ',
        name: 'נָחָשׁ',
        svg: `<svg viewBox="0 0 200 200">
          <path d="M28 155 Q55 125 75 148 Q95 170 118 142 Q140 112 162 135 Q178 150 172 170"
                stroke="#2ecc71" stroke-width="22" fill="none" stroke-linecap="round"/>
          <path d="M28 155 Q55 125 75 148 Q95 170 118 142 Q140 112 162 135 Q178 150 172 170"
                stroke="#27ae60" stroke-width="14" fill="none" stroke-linecap="round"/>
          <circle cx="172" cy="170" r="14" fill="#27ae60"/>
          <circle cx="165" cy="163" r="3.5" fill="#2c3e50"/>
          <circle cx="178" cy="163" r="3.5" fill="#2c3e50"/>
          <path d="M165 177 L158 185 M165 177 L172 185" stroke="#e74c3c" stroke-width="3" stroke-linecap="round"/>
        </svg>`
      },
      {
        syllable: 'מֵר',
        name: 'נָמֵר',
        svg: `<svg viewBox="0 0 200 200">
          <ellipse cx="92" cy="132" rx="57" ry="34" fill="#e8a020"/>
          <circle cx="148" cy="102" r="28" fill="#e8a020"/>
          <path d="M130 78 L124 60 L138 70 Z" fill="#c07810"/>
          <path d="M163 78 L169 60 L156 70 Z" fill="#c07810"/>
          <circle cx="154" cy="97" r="3.5" fill="#2c3e50"/>
          <line x1="136" y1="114" x2="124" y2="118" stroke="#2c3e50" stroke-width="2.5" stroke-linecap="round"/>
          <line x1="162" y1="114" x2="174" y2="118" stroke="#2c3e50" stroke-width="2.5" stroke-linecap="round"/>
          <circle cx="68" cy="122" r="9" fill="#7a4800" opacity="0.55"/>
          <circle cx="105" cy="140" r="8" fill="#7a4800" opacity="0.55"/>
          <circle cx="128" cy="118" r="9" fill="#7a4800" opacity="0.55"/>
          <rect x="57" y="160" width="12" height="26" rx="5" fill="#e8a020"/>
          <rect x="92" y="162" width="12" height="26" rx="5" fill="#e8a020"/>
          <rect x="128" y="158" width="12" height="26" rx="5" fill="#e8a020"/>
          <path d="M40 130 Q22 148 20 168" stroke="#c07810" stroke-width="10" fill="none" stroke-linecap="round"/>
        </svg>`
      },
      {
        syllable: 'הָר',
        name: 'נָהָר',
        svg: `<svg viewBox="0 0 200 200">
          <rect x="0" y="0" width="200" height="200" fill="#5a9e3a"/>
          <path d="M0 72 Q30 86 65 72 Q100 58 135 72 Q170 86 200 72 L200 128 Q170 114 135 128 Q100 142 65 128 Q30 114 0 128 Z" fill="#5dade2"/>
          <path d="M0 90 Q30 104 65 90 Q100 76 135 90 Q170 104 200 90" stroke="#3498db" stroke-width="3" fill="none"/>
          <path d="M0 110 Q30 124 65 110 Q100 96 135 110 Q170 124 200 110" stroke="#2980b9" stroke-width="2" fill="none"/>
        </svg>`
      }
    ]
  },
  {
    label: 'הַבָרָה מָ',
    fixed: 'מָ',
    pairs: [
      {
        syllable: 'יִם',
        name: 'מָיִם',
        svg: `<svg viewBox="0 0 200 200">
          <path d="M65 30 Q65 12 55 22 Q42 35 65 48 Q88 35 75 22 Q65 12 65 30 Z" fill="#5dade2"/>
          <path d="M135 45 Q135 27 125 37 Q112 50 135 63 Q158 50 145 37 Q135 27 135 45 Z" fill="#3498db"/>
          <path d="M100 68 Q100 50 90 60 Q77 73 100 86 Q123 73 110 60 Q100 50 100 68 Z" fill="#5dade2"/>
          <rect x="0" y="115" width="200" height="85" fill="#3498db"/>
          <path d="M0 115 Q25 100 50 115 Q75 130 100 115 Q125 100 150 115 Q175 130 200 115" fill="#5dade2"/>
          <path d="M0 145 Q25 133 50 145 Q75 157 100 145 Q125 133 150 145 Q175 157 200 145" stroke="#2980b9" stroke-width="3" fill="none"/>
        </svg>`
      },
      {
        syllable: 'טָר',
        name: 'מָטָר',
        svg: `<svg viewBox="0 0 200 200">
          <ellipse cx="100" cy="68" rx="58" ry="36" fill="#7f8c8d"/>
          <ellipse cx="63" cy="78" rx="34" ry="24" fill="#95a5a6"/>
          <ellipse cx="140" cy="78" rx="32" ry="23" fill="#95a5a6"/>
          <line x1="55" y1="112" x2="48" y2="145" stroke="#5dade2" stroke-width="5" stroke-linecap="round"/>
          <line x1="80" y1="110" x2="73" y2="145" stroke="#5dade2" stroke-width="5" stroke-linecap="round"/>
          <line x1="105" y1="108" x2="98" y2="143" stroke="#5dade2" stroke-width="5" stroke-linecap="round"/>
          <line x1="130" y1="110" x2="123" y2="145" stroke="#5dade2" stroke-width="5" stroke-linecap="round"/>
          <line x1="155" y1="112" x2="148" y2="145" stroke="#5dade2" stroke-width="5" stroke-linecap="round"/>
          <line x1="68" y1="155" x2="60" y2="185" stroke="#3498db" stroke-width="4" stroke-linecap="round"/>
          <line x1="100" y1="153" x2="92" y2="183" stroke="#3498db" stroke-width="4" stroke-linecap="round"/>
          <line x1="132" y1="155" x2="124" y2="185" stroke="#3498db" stroke-width="4" stroke-linecap="round"/>
        </svg>`
      },
      {
        syllable: 'גֵן',
        name: 'מָגֵן',
        svg: `<svg viewBox="0 0 200 200">
          <polygon points="100,22 156,118 44,118" fill="none" stroke="#3498db" stroke-width="10" stroke-linejoin="round"/>
          <polygon points="100,178 44,82 156,82" fill="none" stroke="#3498db" stroke-width="10" stroke-linejoin="round"/>
        </svg>`
      }
    ]
  },
  {
    label: 'הַבָרָה סוּ',
    fixed: 'סוּ',
    pairs: [
      {
        syllable: 'סָה',
        name: 'סוּסָה',
        svg: `<svg viewBox="0 0 200 200">
          <ellipse cx="92" cy="132" rx="54" ry="32" fill="#c8924c"/>
          <rect x="137" y="87" width="16" height="48" rx="7" fill="#c8924c" transform="rotate(-22 145 111)"/>
          <ellipse cx="148" cy="92" rx="23" ry="17" fill="#c8924c"/>
          <path d="M163 82 L180 78 L165 93 Z" fill="#c8924c"/>
          <path d="M137 76 L132 58 L144 68 Z" fill="#a07038"/>
          <circle cx="156" cy="87" r="3" fill="#2c3e50"/>
          <rect x="53" y="159" width="13" height="26" rx="5" fill="#c8924c"/>
          <rect x="77" y="161" width="13" height="26" rx="5" fill="#c8924c"/>
          <rect x="116" y="157" width="13" height="26" rx="5" fill="#c8924c"/>
          <rect x="140" y="157" width="13" height="26" rx="5" fill="#c8924c"/>
          <path d="M43 130 Q26 142 23 165" stroke="#a07038" stroke-width="9" fill="none" stroke-linecap="round"/>
        </svg>`
      },
      {
        syllable: 'כָּה',
        name: 'סוּכָּה',
        svg: `<svg viewBox="0 0 200 200">
          <rect x="38" y="108" width="124" height="74" fill="#e8d4a0" stroke="#c9a86a" stroke-width="4"/>
          <rect x="83" y="138" width="34" height="44" fill="#8b5a2b"/>
          <rect x="33" y="98" width="134" height="12" rx="4" fill="#8b5a2b"/>
          <path d="M38 98 Q58 76 80 86 Q100 76 122 86 Q142 76 162 98" fill="#2ecc71" stroke="#27ae60" stroke-width="2"/>
          <path d="M42 98 Q62 72 84 84 Q100 72 118 84 Q140 72 158 98" fill="none" stroke="#27ae60" stroke-width="5" stroke-dasharray="8 5"/>
          <circle cx="68" cy="68" r="5" fill="#f1c40f"/>
          <line x1="68" y1="68" x2="68" y2="84" stroke="#2ecc71" stroke-width="2"/>
          <circle cx="132" cy="68" r="5" fill="#e74c3c"/>
          <line x1="132" y1="68" x2="132" y2="83" stroke="#2ecc71" stroke-width="2"/>
        </svg>`
      },
      {
        syllable: 'לָּם',
        name: 'סוּלָּם',
        svg: `<svg viewBox="0 0 200 200">
          <rect x="55" y="18" width="13" height="170" rx="5" fill="#8b5a2b"/>
          <rect x="132" y="18" width="13" height="170" rx="5" fill="#8b5a2b"/>
          <rect x="55" y="46" width="90" height="11" rx="4" fill="#a07038"/>
          <rect x="55" y="86" width="90" height="11" rx="4" fill="#a07038"/>
          <rect x="55" y="126" width="90" height="11" rx="4" fill="#a07038"/>
          <rect x="55" y="166" width="90" height="11" rx="4" fill="#a07038"/>
        </svg>`
      }
    ]
  },
  {
    label: 'הַבָרָה חָ',
    fixed: 'חָ',
    pairs: [
      {
        syllable: 'לָב',
        name: 'חָלָב',
        svg: `<svg viewBox="0 0 200 200">
          <path d="M65 55 L75 165 H125 L135 55 Z" fill="white" stroke="#bbb" stroke-width="3"/>
          <ellipse cx="100" cy="56" rx="35" ry="9" fill="white" stroke="#ccc" stroke-width="2"/>
          <path d="M72 80 L75 148" stroke="rgba(150,180,220,0.4)" stroke-width="9" stroke-linecap="round"/>
        </svg>`
      },
      {
        syllable: 'מוֹר',
        name: 'חֲמוֹר',
        svg: `<svg viewBox="0 0 200 200">
          <ellipse cx="108" cy="130" rx="56" ry="36" fill="#a09080"/>
          <ellipse cx="50" cy="95" rx="30" ry="25" fill="#a09080"/>
          <ellipse cx="37" cy="66" rx="7" ry="20" fill="#a09080" transform="rotate(-15 37 66)"/>
          <ellipse cx="37" cy="66" rx="4" ry="15" fill="#e8c0c0" transform="rotate(-15 37 66)"/>
          <ellipse cx="58" cy="64" rx="7" ry="20" fill="#a09080" transform="rotate(12 58 64)"/>
          <ellipse cx="58" cy="64" rx="4" ry="15" fill="#e8c0c0" transform="rotate(12 58 64)"/>
          <ellipse cx="32" cy="103" rx="17" ry="12" fill="#c0b0a0"/>
          <circle cx="47" cy="90" r="5" fill="#2c3e50"/>
          <circle cx="49" cy="88" r="2" fill="white"/>
          <ellipse cx="26" cy="106" rx="3" ry="2" fill="#7a6050"/>
          <ellipse cx="36" cy="108" rx="3" ry="2" fill="#7a6050"/>
          <rect x="75" y="158" width="14" height="26" rx="5" fill="#8a7060"/>
          <rect x="100" y="162" width="14" height="22" rx="5" fill="#8a7060"/>
          <rect x="130" y="158" width="14" height="26" rx="5" fill="#8a7060"/>
          <rect x="148" y="158" width="14" height="26" rx="5" fill="#8a7060"/>
          <path d="M162 128 Q182 115 176 135 Q170 150 160 142" stroke="#7a6050" stroke-width="5" fill="none" stroke-linecap="round"/>
        </svg>`
      },
      {
        syllable: 'צִיל',
        name: 'חָצִיל',
        svg: `<svg viewBox="0 0 200 200">
          <ellipse cx="100" cy="128" rx="54" ry="58" fill="#7d3c98"/>
          <ellipse cx="82" cy="102" rx="17" ry="24" fill="#9b59b6" opacity="0.5"/>
          <ellipse cx="100" cy="70" rx="28" ry="13" fill="#27ae60"/>
          <path d="M100 57 Q82 42 79 56" fill="#2ecc71"/>
          <path d="M100 57 Q118 42 121 56" fill="#2ecc71"/>
          <line x1="100" y1="57" x2="100" y2="30" stroke="#1e8449" stroke-width="6" stroke-linecap="round"/>
        </svg>`
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
        name: 'בָּלוֹן',
        svg: `<svg viewBox="0 0 200 200">
          <ellipse cx="100" cy="90" rx="55" ry="68" fill="#e74c3c"/>
          <ellipse cx="80" cy="65" rx="18" ry="25" fill="#f1948a" opacity="0.5"/>
          <path d="M91 158 Q95 168 100 172 Q105 168 109 158" fill="#c0392b"/>
          <path d="M100 172 Q96 183 100 196" stroke="#7f8c8d" stroke-width="2" fill="none"/>
        </svg>`
      },
      {
        syllable: 'חַ',
        name: 'חַלּוֹן',
        svg: `<svg viewBox="0 0 200 200">
          <rect x="28" y="22" width="144" height="156" rx="8" fill="#85c1e9" stroke="#7f8c8d" stroke-width="10"/>
          <line x1="100" y1="22" x2="100" y2="178" stroke="#7f8c8d" stroke-width="8"/>
          <line x1="28" y1="100" x2="172" y2="100" stroke="#7f8c8d" stroke-width="8"/>
          <path d="M44 34 L56 34 L44 62 Z" fill="white" opacity="0.5"/>
          <path d="M116 34 L128 34 L116 62 Z" fill="white" opacity="0.5"/>
        </svg>`
      },
      {
        syllable: 'סָ',
        name: 'סָלוֹן',
        svg: `<svg viewBox="0 0 200 200">
          <rect x="35" y="118" width="130" height="52" rx="12" fill="#8e44ad"/>
          <rect x="18" y="103" width="30" height="67" rx="10" fill="#9b59b6"/>
          <rect x="152" y="103" width="30" height="67" rx="10" fill="#9b59b6"/>
          <rect x="35" y="78" width="130" height="46" rx="10" fill="#9b59b6"/>
          <line x1="100" y1="118" x2="100" y2="165" stroke="#7d3c98" stroke-width="3"/>
          <rect x="48" y="163" width="14" height="18" rx="4" fill="#7d3c98"/>
          <rect x="138" y="163" width="14" height="18" rx="4" fill="#7d3c98"/>
        </svg>`
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
        name: 'סִירָה',
        svg: `<svg viewBox="0 0 200 200">
          <line x1="100" y1="30" x2="100" y2="136" stroke="#8b5a2b" stroke-width="5"/>
          <path d="M100 36 L162 102 L100 112 Z" fill="#ecf0f1" stroke="#bdc3c7" stroke-width="2"/>
          <path d="M28 136 Q100 160 172 136 L160 166 Q100 178 40 166 Z" fill="#2980b9"/>
          <path d="M18 158 Q100 170 182 158" stroke="#5dade2" stroke-width="3" fill="none"/>
        </svg>`
      },
      {
        syllable: 'תּוֹ',
        name: 'תּוֹרָה',
        svg: `<svg viewBox="0 0 200 200">
          <rect x="24" y="34" width="22" height="132" rx="11" fill="#7d3c98"/>
          <rect x="154" y="34" width="22" height="132" rx="11" fill="#7d3c98"/>
          <rect x="38" y="48" width="124" height="104" fill="#f5e6c8" stroke="#c9a86a" stroke-width="3"/>
          <line x1="55" y1="72" x2="145" y2="72" stroke="#8b7355" stroke-width="2.5"/>
          <line x1="55" y1="90" x2="145" y2="90" stroke="#8b7355" stroke-width="2.5"/>
          <line x1="55" y1="108" x2="145" y2="108" stroke="#8b7355" stroke-width="2.5"/>
          <line x1="55" y1="126" x2="118" y2="126" stroke="#8b7355" stroke-width="2.5"/>
        </svg>`
      },
      {
        syllable: 'מְנוֹ',
        name: 'מְנוֹרָה',
        svg: `<svg viewBox="0 0 200 200">
          <path d="M65 178 Q100 168 135 178 L128 185 Q100 190 72 185 Z" fill="#f1c40f"/>
          <rect x="94" y="110" width="12" height="65" rx="5" fill="#f1c40f"/>
          <rect x="22" y="110" width="156" height="9" rx="4" fill="#f1c40f"/>
          <path d="M36 110 Q36 82 44 68" stroke="#f1c40f" stroke-width="8" fill="none" stroke-linecap="round"/>
          <path d="M62 110 Q62 90 68 78" stroke="#f1c40f" stroke-width="8" fill="none" stroke-linecap="round"/>
          <path d="M83 110 Q83 94 87 84" stroke="#f1c40f" stroke-width="8" fill="none" stroke-linecap="round"/>
          <line x1="100" y1="110" x2="100" y2="62" stroke="#f1c40f" stroke-width="8" stroke-linecap="round"/>
          <path d="M117 110 Q117 94 113 84" stroke="#f1c40f" stroke-width="8" fill="none" stroke-linecap="round"/>
          <path d="M138 110 Q138 90 132 78" stroke="#f1c40f" stroke-width="8" fill="none" stroke-linecap="round"/>
          <path d="M164 110 Q164 82 156 68" stroke="#f1c40f" stroke-width="8" fill="none" stroke-linecap="round"/>
          <ellipse cx="44" cy="63" rx="5" ry="8" fill="#e67e22"/>
          <ellipse cx="68" cy="73" rx="5" ry="8" fill="#e67e22"/>
          <ellipse cx="87" cy="79" rx="5" ry="8" fill="#e67e22"/>
          <ellipse cx="100" cy="57" rx="5" ry="8" fill="#e67e22"/>
          <ellipse cx="113" cy="79" rx="5" ry="8" fill="#e67e22"/>
          <ellipse cx="132" cy="73" rx="5" ry="8" fill="#e67e22"/>
          <ellipse cx="156" cy="63" rx="5" ry="8" fill="#e67e22"/>
        </svg>`
      }
    ]
  },
  {
    label: 'הַבָרָה פָּה',
    fixed: 'פָּה',
    fixedEnd: true,
    pairs: [
      {
        syllable: 'מַ',
        name: 'מַפָּה',
        svg: `<svg viewBox="0 0 200 200">
          <rect x="22" y="42" width="156" height="116" rx="8" fill="#ecf0f1" stroke="#bdc3c7" stroke-width="4"/>
          <rect x="27" y="47" width="68" height="50" rx="4" fill="#5dade2" opacity="0.75"/>
          <rect x="100" y="47" width="73" height="50" rx="4" fill="#2ecc71" opacity="0.75"/>
          <rect x="27" y="102" width="48" height="50" rx="4" fill="#e67e22" opacity="0.75"/>
          <rect x="80" y="102" width="93" height="50" rx="4" fill="#9b59b6" opacity="0.75"/>
        </svg>`
      },
      {
        syllable: 'כִּ',
        name: 'כִּפָּה',
        svg: `<svg viewBox="0 0 200 200">
          <path d="M28 145 Q28 55 100 38 Q172 55 172 145 Z" fill="#2c3e50"/>
          <path d="M28 145 Q35 105 100 92 Q165 105 172 145" stroke="#3498db" stroke-width="7" fill="none"/>
          <path d="M34 145 Q42 118 100 108 Q158 118 166 145" stroke="#e74c3c" stroke-width="4" fill="none"/>
          <ellipse cx="100" cy="42" rx="5" ry="5" fill="#f1c40f"/>
        </svg>`
      },
      {
        syllable: 'חֻ',
        name: 'חֻפָּה',
        svg: `<svg viewBox="0 0 200 200">
          <rect x="26" y="90" width="9" height="90" rx="4" fill="#8b5a2b"/>
          <rect x="165" y="90" width="9" height="90" rx="4" fill="#8b5a2b"/>
          <rect x="86" y="90" width="9" height="90" rx="4" fill="#8b5a2b"/>
          <rect x="105" y="90" width="9" height="90" rx="4" fill="#8b5a2b"/>
          <rect x="23" y="53" width="154" height="40" rx="5" fill="#fff" stroke="#bdc3c7" stroke-width="3"/>
          <rect x="25" y="55" width="150" height="7" fill="#f1c40f"/>
          <rect x="25" y="80" width="150" height="7" fill="#f1c40f"/>
          <circle cx="62" cy="69" r="8" fill="#e74c3c" opacity="0.8"/>
          <circle cx="100" cy="69" r="8" fill="#e74c3c" opacity="0.8"/>
          <circle cx="138" cy="69" r="8" fill="#e74c3c" opacity="0.8"/>
        </svg>`
      }
    ]
  },
  {
    label: 'הַבָרָה כָּה',
    fixed: 'כָּה',
    fixedEnd: true,
    pairs: [
      {
        syllable: 'סֻ',
        name: 'סֻכָּה',
        svg: `<svg viewBox="0 0 200 200">
          <rect x="38" y="108" width="124" height="74" fill="#e8d4a0" stroke="#c9a86a" stroke-width="4"/>
          <rect x="83" y="138" width="34" height="44" fill="#8b5a2b"/>
          <rect x="33" y="98" width="134" height="12" rx="4" fill="#8b5a2b"/>
          <path d="M38 98 Q58 76 80 86 Q100 76 122 86 Q142 76 162 98" fill="#2ecc71" stroke="#27ae60" stroke-width="2"/>
          <circle cx="65" cy="72" r="5" fill="#f1c40f"/>
          <circle cx="100" cy="68" r="5" fill="#e74c3c"/>
          <circle cx="135" cy="72" r="5" fill="#3498db"/>
        </svg>`
      },
      {
        syllable: 'מַ',
        name: 'מַכָּה',
        svg: `<svg viewBox="0 0 200 200">
          <rect x="28" y="82" width="144" height="36" rx="18" fill="#f0c080"/>
          <rect x="68" y="90" width="64" height="20" rx="5" fill="#f5dba0"/>
          <rect x="92" y="93" width="12" height="14" rx="3" fill="#e74c3c" opacity="0.75"/>
          <rect x="85" y="98" width="26" height="5" rx="2" fill="#e74c3c" opacity="0.75"/>
          <circle cx="46" cy="96" r="4" fill="#d4a060" opacity="0.6"/>
          <circle cx="46" cy="104" r="3" fill="#d4a060" opacity="0.6"/>
          <circle cx="154" cy="96" r="4" fill="#d4a060" opacity="0.6"/>
          <circle cx="154" cy="104" r="3" fill="#d4a060" opacity="0.6"/>
        </svg>`
      },
      {
        syllable: 'חֲנֻ',
        name: 'חֲנֻכָּה',
        svg: `<svg viewBox="0 0 200 200">
          <path d="M62 174 Q100 164 138 174 L132 181 Q100 187 68 181 Z" fill="#f1c40f"/>
          <rect x="95" y="100" width="10" height="72" rx="4" fill="#f1c40f"/>
          <rect x="18" y="100" width="164" height="8" rx="3" fill="#f1c40f"/>
          <line x1="100" y1="100" x2="100" y2="48" stroke="#f1c40f" stroke-width="7"/>
          <line x1="30" y1="103" x2="30" y2="66" stroke="#f1c40f" stroke-width="6"/>
          <line x1="49" y1="103" x2="49" y2="70" stroke="#f1c40f" stroke-width="6"/>
          <line x1="68" y1="103" x2="68" y2="74" stroke="#f1c40f" stroke-width="6"/>
          <line x1="84" y1="103" x2="84" y2="77" stroke="#f1c40f" stroke-width="6"/>
          <line x1="116" y1="103" x2="116" y2="77" stroke="#f1c40f" stroke-width="6"/>
          <line x1="132" y1="103" x2="132" y2="74" stroke="#f1c40f" stroke-width="6"/>
          <line x1="151" y1="103" x2="151" y2="70" stroke="#f1c40f" stroke-width="6"/>
          <line x1="170" y1="103" x2="170" y2="66" stroke="#f1c40f" stroke-width="6"/>
          <ellipse cx="100" cy="44" rx="5" ry="7" fill="#e67e22"/>
          <ellipse cx="30" cy="62" rx="4" ry="6" fill="#e67e22"/>
          <ellipse cx="49" cy="66" rx="4" ry="6" fill="#e67e22"/>
          <ellipse cx="68" cy="70" rx="4" ry="6" fill="#e67e22"/>
          <ellipse cx="84" cy="73" rx="4" ry="6" fill="#e67e22"/>
          <ellipse cx="116" cy="73" rx="4" ry="6" fill="#e67e22"/>
          <ellipse cx="132" cy="70" rx="4" ry="6" fill="#e67e22"/>
          <ellipse cx="151" cy="66" rx="4" ry="6" fill="#e67e22"/>
          <ellipse cx="170" cy="62" rx="4" ry="6" fill="#e67e22"/>
        </svg>`
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
        name: 'כַּלָּה',
        svg: `<svg viewBox="0 0 200 200">
          <path d="M58 52 Q100 30 142 52 L146 132 Q100 148 54 132 Z" fill="#ecf0f1" opacity="0.85"/>
          <circle cx="100" cy="72" r="26" fill="#fde3c8"/>
          <path d="M74 94 Q54 138 44 178 Q100 185 156 178 Q146 138 126 94 Z" fill="#fff" stroke="#ecf0f1" stroke-width="2"/>
          <circle cx="84" cy="48" r="6" fill="#f1c40f"/>
          <circle cx="100" cy="43" r="6" fill="#f1c40f"/>
          <circle cx="116" cy="48" r="6" fill="#f1c40f"/>
          <circle cx="91" cy="70" r="3" fill="#2c3e50"/>
          <circle cx="109" cy="70" r="3" fill="#2c3e50"/>
          <path d="M93 82 Q100 88 107 82" stroke="#2c3e50" stroke-width="2.5" fill="none" stroke-linecap="round"/>
        </svg>`
      },
      {
        syllable: 'חַ',
        name: 'חַלָּה',
        svg: `<svg viewBox="0 0 200 200">
          <ellipse cx="100" cy="122" rx="82" ry="44" fill="#d4a850"/>
          <ellipse cx="68" cy="112" rx="30" ry="20" fill="#e8c060" opacity="0.9"/>
          <ellipse cx="100" cy="120" rx="30" ry="20" fill="#c49040" opacity="0.9"/>
          <ellipse cx="132" cy="112" rx="30" ry="20" fill="#e8c060" opacity="0.9"/>
          <ellipse cx="84" cy="130" rx="28" ry="18" fill="#c49040" opacity="0.8"/>
          <ellipse cx="116" cy="130" rx="28" ry="18" fill="#e8c060" opacity="0.8"/>
          <ellipse cx="70" cy="107" rx="5" ry="2" fill="#f5e8c0" transform="rotate(-25 70 107)"/>
          <ellipse cx="100" cy="114" rx="5" ry="2" fill="#f5e8c0" transform="rotate(10 100 114)"/>
          <ellipse cx="130" cy="107" rx="5" ry="2" fill="#f5e8c0" transform="rotate(25 130 107)"/>
        </svg>`
      },
      {
        syllable: 'תְּפִ',
        name: 'תְּפִלָּה',
        svg: `<svg viewBox="0 0 200 200">
          <rect x="42" y="38" width="116" height="148" rx="8" fill="#2c3e50" stroke="#1a252f" stroke-width="3"/>
          <rect x="42" y="38" width="16" height="148" rx="4" fill="#1a252f"/>
          <polygon points="100,65 117,95 83,95" fill="none" stroke="#f1c40f" stroke-width="4"/>
          <polygon points="100,103 83,73 117,73" fill="none" stroke="#f1c40f" stroke-width="4"/>
          <line x1="67" y1="122" x2="150" y2="122" stroke="#34495e" stroke-width="2"/>
          <line x1="67" y1="138" x2="150" y2="138" stroke="#34495e" stroke-width="2"/>
          <line x1="67" y1="154" x2="150" y2="154" stroke="#34495e" stroke-width="2"/>
          <line x1="67" y1="170" x2="130" y2="170" stroke="#34495e" stroke-width="2"/>
        </svg>`
      }
    ]
  }
];

// ---- Stage 10: Two Words data ----
const DUAL_WORD_PUZZLES = [
  ['גמל', 'שבת'],
  ['מצה', 'חלב'],
  ['כיסים', 'פילים'],
  ['בית', 'מיטה'],
  ['עוגה', 'כוכב'],
  ['כלב', 'ספר'],
  ['פרח', 'עגל'],
  ['תפוח', 'כדור'],
  ['סכינים', 'מפה'],
  ['ציפור', 'חומה'],
];

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

let smSet = null;
let smSetIndex = 0;
let smEndIndex = 0;
let smCompleted = [];
let smPicOrder = [];
let smPairQueue = [];
let smQueuePos = 0;

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
const homeBtn = document.getElementById('homeBtn');
const syllableMatchScreen = document.getElementById('syllableMatchScreen');
const smHomeBtn = document.getElementById('smHomeBtn');
const smSkipBtn = document.getElementById('smSkipBtn');
const smTitle = document.getElementById('smTitle');
const smTileBar = document.getElementById('smTileBar');
const smRows = document.getElementById('smRows');
const smFeedbackEl = document.getElementById('smFeedback');

const dualWordScreen = document.getElementById('dualWordScreen');
const dw10HomeBtn = document.getElementById('dw10HomeBtn');
const dw10SkipBtn = document.getElementById('dw10SkipBtn');
const dw10TitleEl = document.getElementById('dw10Title');
const dw10RowsEl = document.getElementById('dw10Rows');
const dw10TrayEl = document.getElementById('dw10Tray');
const dw10FeedbackEl = document.getElementById('dw10Feedback');

const STAGE_COLORS = ['#3498db', '#9b59b6', '#e67e22', '#27ae60', '#e74c3c', '#16a085', '#d35400'];
const STAGE_ICONS  = ['🐫', '🐘', '🏠', '⭐', '📚', '🍎', '🌈', '🧩', '🔡', '🎯'];

function currentWords() {
  return LEVELS[currentLevel].words;
}

function buildStageCards() {
  stageCardsEl.innerHTML = '';
  LEVELS.forEach((lvl, i) => {
    const card = document.createElement('button');
    card.className = 'stageCard';
    card.style.setProperty('--card-color', STAGE_COLORS[i % STAGE_COLORS.length]);
    card.innerHTML = `<span class="stageIcon">${STAGE_ICONS[i] || ''}</span><span class="stageLabelRow"><span class="stageNum">${i + 1}</span><span class="stageLabel">${lvl.label}</span></span>`;
    card.addEventListener('click', () => startStage(i));
    stageCardsEl.appendChild(card);
  });
  const fixedEndStart = SYLLABLE_MATCH_SETS.findIndex(s => s.fixedEnd);

  const smCard = document.createElement('button');
  smCard.className = 'stageCard';
  smCard.style.setProperty('--card-color', '#c0392b');
  smCard.innerHTML = `<span class="stageIcon">${STAGE_ICONS[LEVELS.length] || '🧩'}</span><span class="stageLabelRow"><span class="stageNum">${LEVELS.length + 1}</span><span class="stageLabel">הַתְאָמַת הַבָרוֹת</span></span>`;
  smCard.addEventListener('click', () => startSyllableMatch(0, fixedEndStart - 1));
  stageCardsEl.appendChild(smCard);

  const smCard2 = document.createElement('button');
  smCard2.className = 'stageCard';
  smCard2.style.setProperty('--card-color', '#16a085');
  smCard2.innerHTML = `<span class="stageIcon">${STAGE_ICONS[LEVELS.length + 1] || '🔡'}</span><span class="stageLabelRow"><span class="stageNum">${LEVELS.length + 2}</span><span class="stageLabel">הַבָרָה רִאשׁוֹנָה מִשְׁתַּנָּה</span></span>`;
  smCard2.addEventListener('click', () => startSyllableMatch(fixedEndStart));
  stageCardsEl.appendChild(smCard2);

  const dw10Card = document.createElement('button');
  dw10Card.className = 'stageCard';
  dw10Card.style.setProperty('--card-color', '#8e44ad');
  dw10Card.innerHTML = `<span class="stageIcon">${STAGE_ICONS[LEVELS.length + 2] || '🎯'}</span><span class="stageLabelRow"><span class="stageNum">${LEVELS.length + 3}</span><span class="stageLabel">שְׁתֵּי מִלִּים</span></span>`;
  dw10Card.addEventListener('click', () => startDualWord(0));
  stageCardsEl.appendChild(dw10Card);
}

function showHome() {
  if (hasSavedProgress()) {
    continueBtn.classList.remove('hidden');
  } else {
    continueBtn.classList.add('hidden');
  }
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

  // Track which tile ends each word in the phrase (last tile overall for a
  // single word, last tile of each group for a word pair) - tapping that
  // tile needs to know its position to detect furtive patach.
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
    // Tiles that merged a vowel-less consonant onto the previous syllable
    // (e.g. "מַל") contain 2+ base letters, which don't fit at the normal
    // single-letter tile size - widen and shrink the font to compensate.
    if (isWideTile(letter)) tile.classList.add('wide');
    tile.textContent = letter;
    tile.dataset.letter = letter;
    tile.dataset.final = finalIndices.has(tileIndex) ? '1' : '0';
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
  speakLetter(tile.dataset.letter, tile.dataset.final === '1');
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
      feedbackEl.textContent = 'כָּל הַכָּבוֹד! סִיַּמְתָּ אֶת הַשָּׁלָב! 🎈';
      feedbackEl.className = 'success';
      celebrateStage();
    } else {
      feedbackEl.textContent = randomPraise() + '! ✓';
      feedbackEl.className = 'success';
      nextBtn.classList.remove('hidden');
    }
  } else {
    feedbackEl.textContent = 'נַסֵּה שׁוּב';
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

function celebrateStage(onDone) {
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
    if (onDone) {
      onDone();
    } else {
      const nextLevel = (currentLevel + 1) % LEVELS.length;
      goToLevel(nextLevel);
    }
  }, 2200);
}

nextBtn.addEventListener('click', () => {
  currentIndex = (currentIndex + 1) % currentWords().length;
  loadWord(currentIndex);
});

hintBtn.addEventListener('click', () => {
  speakWord(currentWord);
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

const PATACH = 'ַ';
const DAGESH = 'ּ';
const RAFE = 'ֿ';

// TTS engines sometimes default ב/כ/פ to their hard (dagesh) sound when the
// text has no explicit marking either way. Since these tiles never carry a
// dagesh unless we put one there ourselves, every undageshed ב/כ/פ in our
// data is supposed to sound soft (v/kh/f) - adding the rafe mark makes that
// explicit instead of leaving it to the engine's guess.
function withRafe(tile) {
  let result = '';
  for (let i = 0; i < tile.length; i++) {
    const ch = tile[i];
    result += ch;
    if (/[בכפ]/.test(ch)) {
      // The dagesh isn't always the very next character - some tiles put
      // the vowel mark before it (e.g. "בְּ" is ב+sheva+dagesh) - so scan
      // through this letter's combining marks rather than checking only
      // the immediate neighbor.
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

// A tile/word ending in ח/ע/ה carrying a patach ("furtive patach", e.g. the
// last syllable of תפוח) is pronounced *before* that consonant ("ach") even
// though it's written after it. Reordering it for speech as if it were an
// alef vowel-carrier fixes that without touching what's shown on the tile.
function isFurtivePatach(tile) {
  return tile.length === 2 && tile.charAt(1) === PATACH && /[חעה]/.test(tile.charAt(0));
}

function furtiveToSpeech(tile) {
  return 'א' + PATACH + tile.charAt(0);
}

function speakWord(word) {
  // In the native app use the Capacitor TTS plugin (it works reliably).
  // In a plain browser, prefer the pre-recorded MP3 file bundled with the
  // app (audio/<name>.mp3) so the hint works even without a Hebrew TTS
  // voice installed. Fall back to speechSynthesis if the file is absent.
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
    const resp = await fetch(path);
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
  // An "open" tile ending right on a patach (e.g. "תַּ"), with nothing
  // after it, often gets mispronounced by TTS engines with a trailing
  // glide ("tai" instead of "ta"). Appending a silent aleph closes the
  // syllable the way real Hebrew words do. Other vowels (e.g. sheva)
  // don't have this problem and sound worse with the aleph appended, so
  // this is deliberately limited to patach.
  const endsInBarePatach = letter.charAt(letter.length - 1) === PATACH;
  speak(withRafe(letter) + (endsInBarePatach ? 'א' : ''));
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
  tile.addEventListener('pointerdown', onSmTilePointerDown);
}

function onSmTilePointerDown(e) {
  if (!smSet || smCompleted.length >= smSet.pairs.length) return;
  const tile = e.currentTarget;
  speakWord({ name: tile.textContent });
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

  // Check overlap while tile is still position:fixed (dragging class intact)
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
  smTileBar.appendChild(tile);

  if (movedDistance < TAP_THRESHOLD) {
    speakWord({ name: smSet.pairs[pairIdx].syllable });
    return;
  }

  const slot = bestSlot;
  if (!slot) return;
  const slotPairIdx = parseInt(slot.dataset.pairIdx);
  if (slotPairIdx === pairIdx) {
    handleSmDrop(pairIdx);
  } else {
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
  smSetIndex = setIndex;
  smEndIndex = (endIndex !== undefined) ? endIndex : SYLLABLE_MATCH_SETS.length - 1;
  smSet = SYLLABLE_MATCH_SETS[setIndex];
  smCompleted = [];
  smPicOrder = shuffle([0, 1, 2]);
  smTitle.textContent = smSet.label;
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
    card.innerHTML = pair.svg;
    card.addEventListener('click', () => speakWord({ name: pair.name }));
    if (isMatched) {
      const wordLabel = document.createElement('div');
      wordLabel.className = 'smCardWord';
      wordLabel.textContent = smSet.fixedEnd
        ? pair.name
        : smSet.fixed + pair.syllable;
      card.appendChild(wordLabel);
    }

    const speakBtn = document.createElement('button');
    speakBtn.className = 'smSpeakBtn';
    speakBtn.textContent = '🔊 הַשְׁמַע מִלָּה';
    speakBtn.addEventListener('click', () => speakWord({ name: pair.name }));

    cardCol.appendChild(card);
    cardCol.appendChild(speakBtn);

    const fixedTile = document.createElement('div');
    fixedTile.className = 'smTile smFixed';
    fixedTile.textContent = smSet.fixed;
    fixedTile.addEventListener('pointerdown', () => speakWord({ name: smSet.fixed }));

    const slot = document.createElement('div');
    slot.className = 'smSlot' + (isMatched ? ' filled' : '');
    slot.dataset.pairIdx = pairIdx;
    if (isMatched) slot.textContent = pair.syllable;

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
    if (nextIdx <= smEndIndex) {
      setTimeout(() => celebrateStage(() => startSyllableMatch(nextIdx, smEndIndex)), 1500);
    } else {
      setTimeout(() => celebrateStage(showHome), 1500);
    }
  }
}

function playSmCurrent() {
  if (!smSet || smQueuePos >= smSet.pairs.length) return;
  const pair = smSet.pairs[smPairQueue[smQueuePos]];
  speakWord({ name: pair.name });
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
  dw10PuzzleIdx = puzzleIdx;
  dw10Words = DUAL_WORD_PUZZLES[puzzleIdx].map(lookupWord);
  dw10SlotState = dw10Words.map(w => new Array(w.tiles.length).fill(null));
  dw10WordDone = [false, false];
  dw10TitleEl.textContent = `${puzzleIdx + 1} / ${DUAL_WORD_PUZZLES.length}`;
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
    pic.innerHTML = word.svg;
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
  if (tile.dataset.locked === '1') return;
  speakLetter(tile.dataset.letter, tile.dataset.final === '1');
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
      if (slot.firstElementChild) slot.firstElementChild.dataset.locked = '1';
    });
    dw10WordDone[wordIdx] = true;
    playSuccess();
    speakWord(word);
    if (dw10WordDone.every(Boolean)) {
      dw10FeedbackEl.textContent = 'כָּל הַכָּבוֹד! 🎉';
      const nextIdx = dw10PuzzleIdx + 1;
      setTimeout(() => {
        if (nextIdx < DUAL_WORD_PUZZLES.length) {
          celebrateStage(() => startDualWord(nextIdx));
        } else {
          celebrateStage(showHome);
        }
      }, 1200);
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
