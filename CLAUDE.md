# לומדים לקרוא עברית (hebrew_spelling) — notes for future sessions

Hebrew reading app for first graders. Capacitor 8: the whole app is `www/` (index.html, app.js,
style.css, audio/) inside an Android WebView. The owner writes in Hebrew; reply in Hebrew.
Build / signing / Play upload details: see the memory file `project_hebrew_spelling.md`.

## Working rules
- Every change: edit → check locally (screenshot) → show the owner → build an APK only when asked.
  Never build/upload the release AAB without an explicit OK.
- Never invent Hebrew words, niqqud or syllable splits. Words for new content come from words that
  already have audio, or the owner approves them first. Owner vetoes so far: "מכה" (emoji unclear),
  "חומוס" (not in memory games), "בלקון/בלונים/בלרינה", made-up plurals ("חרוזות").
- Crosswords (stages 16-17 together): a word appears at most twice, and two puzzles share at most
  one word. Re-pick with `tools/crossword-search.js --json` when adding puzzles.
- Bump `app.js?v=N` in index.html after editing app.js (cache busting on the web build).

## Code map (www/app.js)
The header comment in app.js has the stage table (stage number → screen → COMPLETED_KEY entry).
- Stages 1-7: `LEVELS` (build the word from syllables). 8-9: `SYLLABLE_MATCH_SETS`. 10: `DUAL_WORD_PUZZLES`.
- 11-12 `CAMEL_STAGES`, 13 `SENTENCES`, 14-15 `MEM_STAGES`, 16-17 `CROSSWORD_STAGES`: each later game
  is one config array + `start<Game>(cfg)`. Card on the home screen: `buildStageCards()` → `makeStageCard()`;
  sections: `STAGE_GROUPS` (by shown number).
- **Saved progress**: COMPLETED_KEY entries are `LEVELS.length + completedOffset`. Never change a
  completedOffset; change `stageOffset` to renumber what the child sees. Adding a level to LEVELS shifts
  every key — needs a migration.
- Screens: one `<div>` per screen directly under `#app`; switch with `showScreen(el)`.
- Shared helpers: `speakAudio(text)` (audio/<text>.mp3, TTS fallback), `speakWord({name})`,
  `speakLetter(syllable, isFinal)` (tile audio), `sparkle(el)`, `showConfetti()`, `playSuccess/playError`.
- Drag & drop (26.11.2026): every game goes through ONE helper, `startDrag(e, el, {mode, dragClass, ghost, ghostCenter,
  onDragStart, onMove, onEnd})` in app.js. Modes: 'lift' (the tile itself follows the finger - stages 1-10, 21-22),
  'translate' (puzzle), 'ghost' (a copy follows - crossword, doll). One drag at a time (`activeDrag`), listeners on window,
  pointercancel puts the tile back. Helpers next to it: `dropTarget`, `mostCovered`, `markDragOver`. Each game keeps only
  its own drop rules (`tileDropped`, `smTileDropped`, `dw10TileDropped`, `puzzlePieceDropped`, `puzzleSylDropped`,
  `dollItemDropped`, the crossword's onEnd). Regression test for all of them: scratch drag-test (mouse + CDP touch).

## Paid unlock (added 28.10.2026, ships in iOS 1.2 / Android versionCode ≥ 50)
- Stages 1-6 free; one non-consumable `unlock_all_stages` (7.90 ₪) opens 7-17. Code: the "Paid unlock"
  section at the end of app.js; locked cards get `.locked` and open `#unlockDialog`; Buy goes through
  `parentGate()` (the same multiplication gate as "rate us"). Plugin `@capgo/native-purchases` (pinned).
- State: localStorage `hebrewSpellingUnlocked` = 'paid' | 'legacy'. No server; on startup the store's
  purchase list re-unlocks after a reinstall. Refunds are not taken back.
- Legacy (owner's choice: existing users keep everything): progress saved at the first launch of a
  paid build, or on iOS an original download below build 12 (AppTransaction, Production env only —
  in Sandbox/TestFlight/App Review originalAppVersion is always "1.0").
- Test tools set `hebrewSpellingUnlocked` so every stage opens (store screenshots keep the home locked).
- Purchases only work in a store-installed build (Play internal track + license testers / TestFlight).
- Store products are created by API scripts (Play `monetization.onetimeproducts`, ASC `/v2/inAppPurchases`).
  The first iOS in-app purchase must be submitted together with an app version.

## Audio
- Word files: `www/audio/<name>.mp3`; the name may carry niqqud (SM words, camel, sentences) or not
  (LEVELS words). Syllable files: `tile_NNN.mp3` listed in `audio/tiles.js` (key `syllable_0|1`,
  1 = last syllable — final "חַ" is read "ach", so the same text can sound different by position).
- Generators (each skips existing files; delete a file to regenerate it):
  `generate_audio.py` (stages 1-10 + tiles), `generate_camel_audio.py`, `generate_sentence_audio.py`,
  `generate_crossword_audio.py`. All use gTTS (`lang='iw'`).
- gTTS ignores niqqud for stress: "אוֹכֵל" came out as "אֹכֶל". Fix used: send "אוֹכֵאל" (silent aleph
  pulls stress to the end) via `PRONOUNCE_AS` in generate_sentence_audio.py. Nobody can listen here —
  always tell the owner which new recordings to check by ear.

## Tools
- `python serve.py` → http://localhost:8181 (no cache, threaded).
- `node tools/smoke-test.js` → opens every stage; diff its output before/after a refactor.
- `node tools/crossword-search.js 4` → all valid 4-word crossword layouts from words with audio
  (add candidate words to EXTRA there). Layout rules are explained at the top of the file.
- Playwright: `require('playwright')` from this folder (installed in node_modules).
- Debug APK: see memory file; copy to `app-debug.apk` and send it to the owner's phone with SendUserFile.

## App name (owner, 27.11.2026): "לימוד קריאה בעברית" in EVERY store language (Hebrew title even on English/Spanish phones)
- Play: all 5 listing titles set by `set-play-title.mjs` (descriptions untouched); `check-listings.mjs` reads them.
- iOS 1.4 = the 1.3 code (commit bbbf9d2) + only the new name (Info.plist CFBundleDisplayName, capacitor appName) and
  MARKETING_VERSION 1.4: branch `ios-1.4-name` (commit 35bf4e4), Codemagic build 21, ASC name set in all 6 locales,
  submitted to App Review 27.11.2026 (WAITING_FOR_REVIEW). Merge that branch's name change into the main work before the next release.
- Android 1.0.57 (versionCode 57) = the 1.0.56 code + the new launcher name only: branch `android-1.0.57-name` (commit 2584489,
  on top of ios-1.4-name), built locally (bundleRelease, keystore.properties), uploaded to production 27.11.2026 with
  `upload-production.mjs` ("שם חדש לאפליקציה: לימוד קריאה בעברית."). Next versionCode > 57 (get-next-version-code.mjs).
- Main working copy (27.11.2026): strings.xml app_name + title_activity_main, capacitor appName and iOS Info.plist all say
  "לימוד קריאה בעברית" (only debug APK 111 so far; the Android store build is the next release). Next iOS version must be 1.5 or higher.

## App web page / AI discovery (owner OK, published 27.11.2026)
- Main page: giladct.github.io/hebrew-spelling/ (repo giladct.github.io, branch master; push = publish). MobileApplication +
  FAQPage JSON-LD, "20 stages" (update the stage count/text, dateModified and "עודכן לאחרונה" when stages 21-22 ship).
  No ads mention, and no "we collect no data" claim (AdMob collects device data).
- Same repo root: robots.txt (allows OAI-SearchBot, GPTBot, ChatGPT-User, Claude*, Perplexity*, Google*, Bingbot, Applebot),
  sitemap.xml, llms.txt (English summary of the app). Support/privacy pages use the new name.
- The old docs/index.html (giladct.github.io/hebrew-spelling-app/, served from `main`/docs) is stale ("coming soon", "no ads"):
  fix or redirect it to the new page the next time something is pushed to main anyway (a push to main starts a Play draft build).

## Kids' home screen (owner's request 28.11.2026, not shipped yet; sketch in sketches/kids-home)
- Children can't read, so each stage card shows a PICTURE of the stage (www/img/stage-thumbs/NN.webp, 22 files, ~230 KB) with the
  number badge, a written name below (the stage's own label), a star when done, and a green frame + play button on the next stage
  to play (`now`: first stage that is not done and not locked). Stages are grouped by kind of game (`STAGE_GROUPS` in app.js: icon, title for parents,
  colour); the group titles have no niqqud, as in the approved sketch. (A big green "continue" button with the picture of the saved stage was in the first version and was removed the same day at the owner's request; the saved word position is still stored but nothing resumes it any more.) Locked stages (iOS paid unlock) keep the 🔒 (top-left of the picture) and open the unlock dialog.
- **The pictures are screenshots of the real stages: rerun `node tools/stage-thumbs.js http://localhost:8765` (app served) after a stage
  looks different or a stage is added**, then add the new stage to a `STAGE_GROUPS` entry (a stage not listed there does not appear on the home).
- Classes `stageCard` / `stageNum` / `stageLabel` / `h2.stageGroupTitle` are used by tools/smoke-test.js and tools/store-screenshots.js (DOM order must stay 1..N).

## Spoken stage instructions (owner's request 28.11.2026, not shipped yet)
- Children can't read yet, so there is NO written instruction on any screen (the `<p>` instruction elements and the
  doll hint are hidden / empty; style.css, app.js `dollFeedbackEl`). Instead: entering a stage says what to do
  (after the ad closes, or at once when no ad shows), and every game screen has a round yellow "?" button at the end
  of its header (`.helpBtn`, added by JS to every `#app > div > header`) that says it again.
  www/audio/instr_NN.mp3, map `INSTRUCTION_AUDIO` (app.js "Spoken stage instructions"); `queueStageInstruction(num)`
  on entry, `playStageInstruction()` for the button. Any other sound stops it; going home stops it; the stage's own
  start sound (word in stages 1-7/21-22, camel word) waits for it (`afterInstruction`).
  (I first misread "remove the explanation" as removing the audio auto-play; the owner meant the WRITTEN text.)
  Tapping the picture says the word in stages 1-10 (stages 1-7: `pictureBox` click handler; 8-10 already had it).
  The palette title "בחרו צבע" (stages 19-20) is still written. style.css is linked with `?v=3`: bump when CSS changes.
- Texts approved by the owner ("תִּגְרְרוּ", short wording) in generate_instruction_audio.py. Voice: Gemini TTS
  "Leda" (owner's pick after gTTS and Microsoft Avri; Avri ignores niqqud and got the stress of תגררו wrong).
  Key: GEMINI_API_KEY user env var (never in files). Free tier = 10 TTS requests/day per model.
- Gemini sometimes speaks the English style text before the sentence: files must be ~3-5 s.
  tools/trim_instruction_prefix.py cut it from 07/08/09/11/13/16/21 (owner to re-check by ear).
  tools/polish_instruction_audio.py (x1.15 speed, cut end noise) was run on 01/07/08/09/11/13/16/18/21; run it once on each
  newly recorded file too (never twice on the same file).
  14 re-recorded + trimmed; 10 recorded with GEMINI_TTS_MODEL=models/gemini-3.1-flash-tts-preview (the free daily quota is per model,
  so switch model when one runs out; same voice Leda, may sound slightly different).
  All 13 files are now Gemini Leda (10, 19, 22 from models/gemini-3.1-flash-tts-preview, which speaks slower: polished with
  POLISH_TEMPO=1.6 instead of 1.15). Old Avri takes of 19/22 are kept only in the session scratchpad. Owner approved the pace 28.11.2026.

## Crossword pictures (stages 16-17)
- Clue pictures are sized per clue by `xwFitClues()` (app.js): as big as the cell allows (glyph ~1.4 x font-size, minus the
  arrow's padding), shrunk for clues with two emoji (🐎🐎). Owner asked 28.11.2026 to make them bigger (were a fixed 30/24 px,
  now ~43 px on 3-4 column puzzles, ~29-34 px on 5, ~24-27 on 6; the cells themselves did not change).

## Ads (Android since 1.0.53, 17.11.2026; iOS from 1.2, added 22.11.2026)
- AdMob interstitial every time the child enters a stage (owner's choice 25.11.2026; was: after finishing a stage, max once per 3 min), except stages 1-3 (`NO_AD_UP_TO_STAGE`, first-time users). `showStageAd(stageNum)` is called from the stage-card click; no time gap. (The orange "לשלב N" home button, nextLevelBtn, was removed 28.11.2026 at the owner's request.) Android 1.0.56 / iOS 1.3 ship stages 19-20 and this rule. Code: "Ads" section at the end of app.js.
- Per-stage ad units (owner OK 28.11.2026, to learn which stages children like): 19 interstitial units per app,
  named "Stage 04".."Stage 22", ids in `ADMOB.stageUnitId` (app.js). Each stage entry (4+) makes one request on
  that stage's unit (`prepareStageAd(stageNum)`); the app-launch preload uses the general unit (Interstitial1 /
  Between stages iOS). Read it in AdMob: report with Ad unit + Country, metric Requests; drop "Unknown Region" rows
  (Play pre-launch/review test devices). Entries fall with stage order, so a stage with MORE entries than the one
  before it is being replayed = liked. Not shipped yet (goes out with the next release, together with stages 21-22).
- AdMob app "Learn to Read Hebrew": app id in AndroidManifest.xml, ad units in `ADMOB` (app.js). For test ads use
  Google's test unit + `isTesting: true`; the owner must never tap real ads.
- Kids settings: child-directed + under-age-of-consent tags, rating G, `npa`; AD_ID and ACCESS_ADSERVICES_* permissions
  removed in the manifest (`tools:node="remove"`).
- iOS (owner decision 22.11.2026: iOS free like Android, ads only): AdMob app "לימוד קריאה לכיתה א" (iOS) id
  `~4950039263` in Info.plist `GADApplicationIdentifier` (+ SKAdNetworkItems cstr6suwn9), ad unit "Between stages iOS"
  `/3197973896` in `ADMOB.interstitialId.ios`. No ATT prompt / NSUserTrackingUsageDescription (kids app, no IDFA).
  Plugin listed in `ios.includePlugins`; Codemagic runs `cap sync ios`, which rewrites CapApp-SPM/Package.swift.
  ASC 1.2 (not submitted yet): description + What's New say "all stages free" (owner: don't mention ads in store texts; the "no ads" lines were
  removed), age rating advertising = true.
  App Privacy labels published 22.11.2026 (7 types: coarse location, device ID, product interaction, advertising data,
  crash/performance/other diagnostics; purposes third-party advertising + analytics + app functionality; not linked, no tracking).
  Pushed to branch stages-11-17 (commit e59d6f7). Codemagic build 16 of that branch -> TestFlight; iOS 1.2 (build 16)
  submitted to App Review 22.11.2026 (not tested on a phone first). Android 1.0.53 / ASC texts must not mention ads.
  The IAP `unlock_all_stages` on ASC is left unsubmitted (not used on iOS any more).
- app-ads.txt lives in the giladct.github.io repo (root of the Play developer website domain).
- Play Console declarations updated 17.11.2026: Ads = yes, target age 6-8 (+ Teacher Approved), Data safety = AdMob
  data (approx. location, app interactions, diagnostics, device IDs; collected+shared; ads/analytics/fraud), Ad ID = no.
- Privacy policy for Play: docs/privacy-policy.html (served from `main`/docs). The iOS policy is giladct.github.io/hebrew-spelling-privacy.html
  (ads section added locally 22.11.2026 in the giladct.github.io repo; push = publish, owner's OK first).
- Pushing to `main` (even a docs-only change) triggers the GitHub Action that uploads a draft build of main to Play
  (that is how alpha draft 52 appeared) - use the next versionCode from `get-next-version-code.mjs` and check drafts too.

## Android and iOS apps are free (decided Nov 2026) - only the plain browser build keeps the lock
- `isFreeOnThisPlatform()` (app.js, Paid unlock section): on Android and iOS nothing is locked and no store calls are made.
  The browser keeps the lock. To bring the lock back on Android return false there, re-activate the Play product
  `unlock_all_stages` (monetization.onetimeproducts purchaseOptions.batchUpdateStates ACTIVATE) and restore the Play listing sentences.
- Stage 19 = dress the doll (added 25.11.2026, iOS 1.3 (build 20) approved and live 26.11.2026, Android 1.0.56 in review; `DOLL_STAGES`, section "Stage 19" in app.js; stageOffset 12, completedOffset 11).
  One clothing word per round (hat, glasses, scarf, shirt, pants, shoes in random order): the child picks the right piece from the closet
  (drag or tap = chooses; after a wrong pick touching a piece says its name), then paints it any of 10 colours; fits one phone screen (`#dollStage` takes the free height). Wrong pick: "read again",
  the word is never shown in the hint. Art is inline SVG in the doll's coordinates (design prototype artifact "בובה מתלבשת").
  Audio: `generate_doll_audio.py` (gTTS) made חולצה/מכנסיים/נעליים/משקפיים/צעיף - owner must check them by ear. The niqqud on the words
  (חֻלְצָה, מִכְנָסַיִם, נַעֲלַיִם, מִשְׁקָפַיִם, צָעִיף) and on "הַלְבִּישׁוּ"/"קִרְאוּ שׁוּב"/"בַּחֲרוּ צֶבַע" was written by Claude - needs the owner's OK.
- Stage 20 = second doll, a teenage fashion girl (added 25.11.2026, iOS 1.3 (build 20) approved and live 26.11.2026, Android 1.0.56 in review; same engine as stage 19, `DOLL_KITS.fashion`; stageOffset 13,
  completedOffset 12). 8 pieces: גופייה, חצאית, נעלי עקב, תיק, שרשרת, עגילים, משקפי שמש, כובע (4-column closet). The doll engine takes a kit
  (`items`, `svg`, `cols`, `neutral`) from `DOLL_KITS`; add a new doll = new kit + a `DOLL_STAGES` entry (+ stage group number). Audio words
  (generate_doll_audio.py) and niqqud (גּוּפִיָּה, חֲצָאִית, נַעֲלֵי עָקֵב, תִּיק, שַׁרְשֶׁרֶת, עֲגִילִים, מִשְׁקְפֵי שֶׁמֶשׁ, title בֻּבָּה מִתְגַּנְדֶּרֶת) are Claude's, owner must approve / listen.
  The owner wrote "סמלה" (taken as שמלה): the doll wears גופייה + חצאית instead of a dress, to avoid layer clashes.
- Stage 21 = road signs (added 26.11.2026, test APK only, not released; `SIGN_STAGES`/`SIGNS`, section "Stage 21" in app.js; stageOffset 14, completedOffset 13).
  9 official Israeli signs as SVG in `www/img/signs/<number>.svg` (Wikimedia Commons, Israeli Ministry of Transport, public domain; 122 derives from an Italian
  public-domain sign): 302 עצור, 306 מעבר חצייה, 122 רמזור לפניך, 136 הולכי רגל, 227 שביל אופניים, 402 אין כניסה, 901 עובדים בכביש, 626 חניה, 303 מעגל תנועה.
  Since 26.11.2026 (second version, asked by the owner) stage 21 is a syllable-building stage like stages 1-7: the sign is shown and the child builds its name from
  tiles on the stage 1-7 screen. `SIGN_WORDS` + `SIGN_SYLLABLE_STAGES`, `startSignWords`; the engine got an optional `customSet` (own word list, own stage number and
  completed key; `saveProgress` is skipped for it; `word.img` replaces the emoji in `#pictureBox`). Two-word names use `groupSizes`. The syllable splits are Claude's
  proposal, NOT yet approved by the owner. Tile audio: `generate_sign_tiles.py` adds the sign tiles to `audio/tiles.js` (tile_123-150) - `generate_audio.py` rewrites tiles.js
  and would drop them, so run the sign script again after it. (The first version of stage 21, a choice game "read the name / find the sign", was removed when stage 22 became a syllable stage too.)
  Audio: `generate_sign_audio.py` (gTTS); the owner approved the word recordings and the niqqud on screen 26.11.2026.
  No sign for "children" exists in Israel (639 "אזור מוסדות חינוך" is CC BY-SA, left out); the bus-stop sign was not found on Commons. Not published: no Play/iOS build yet.
- Stage 22 = flags (added 26.11.2026, test APK only, not released; `FLAG_WORDS`, second entry of `SIGN_SYLLABLE_STAGES` with `imgClass: 'flag'`; stageOffset 15,
  completedOffset 14). Same syllable-building screen as stage 21: the flag is shown, the child builds the country name from tiles. 10 flag SVGs in
  `www/img/flags/<country>.svg` (Wikimedia Commons, all tagged public domain): ישראל, ארצות הברית, בריטניה, צרפת, גרמניה, איטליה, ספרד (the Spain file is ~150 KB), קנדה, יפן,
  ברזיל (the owner swapped Russia for Canada). Audio: words `generate_flag_audio.py`, tiles `generate_sign_tiles.py` (tile_151-172). The niqqud on the names,
  the syllable splits and the recordings are Claude's proposal and still need the owner's approval/listening (not approved yet). The earlier "pick the name / find the flag"
  choice engine was removed (never committed) when both stages became syllable stages.
- Stage 23 = hard picture puzzle (28.11.2026, owner: "12 pieces, 3 by 4" read as 3 columns x 4 rows; flip `cols`/`rows` in `PUZZLE_STAGES[1]` for 4 x 3).
  Same engine as stage 18 (`startPuzzle`), `stageOffset` 16 (shown 23), `completedOffset` 15 (COMPLETED_KEY 22). Words (existing LEVELS words, approved splits + audio):
  מתנה, ענבים, סוכריה, ציפור, מגדל, תפוז - **owner to confirm this word choice**. `matchBoard: true` draws the picture in the board's shape (stage 18 stays stretched as before);
  `#puzzleMain[data-rows="4"]` makes the pieces smaller (88 px) so board + tray fit a 640 px phone. Spoken instruction = `instr_18`; no AdMob unit of its own (falls back to the general
  unit, create "Stage 23" units if per-stage counts matter). Home: in the puzzle group after stage 18, so the DOM order is 1-18, 23, 19-22 (tools/store-screenshots.js only uses nth <= 18).

- Stage 21-22 tile audio fixes (26.11.2026, after the owner listened): בריטניה = 3 tiles בְּרִי-טַנְ-יָה (owner's split). gTTS ignores niqqud and the rafe, so
  `generate_sign_tiles.py` has `TILE_PRONOUNCE_AS` (בַר→וַר, בִיל→וִיל, בְ→וְ, בִישׁ→וִישׁ, פָ→ףָ, פַ→ףַא, פַת→ףַת, כֵי→חֵי, שְׁ→שֶׁ, מַעְ→מַא) and
  `closed_syllable_speech` (a closed syllable with a silent sheva, e.g. מַנְ, is spoken without the sheva and with a sofit letter: מַן - otherwise gTTS says "mane").
  `HAND_MADE` = tiles never regenerated: בִיל (tile_136) is edge-tts he-IL-HilaNeural 'וִיל', picked by the owner from 5 options (no gTTS spelling gave "vil").
  Speech-to-text check: `faster-whisper` (small) + `edge-tts` are installed in the global Python; Whisper is only a rough hint on single syllables.
- Stage 18 = picture puzzle (`PUZZLE_STAGES`, 6 words from LEVELS with a scene background; drag the pieces, then drag the syllables; skip button).
