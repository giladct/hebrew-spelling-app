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
- Drag & drop exists four times (stages 1-7, 8-9, 10, crossword) — each with its own pointer handlers.

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
- `python www/serve.py` → http://localhost:8181 (no cache, threaded).
- `node tools/smoke-test.js` → opens every stage; diff its output before/after a refactor.
- `node tools/crossword-search.js 4` → all valid 4-word crossword layouts from words with audio
  (add candidate words to EXTRA there). Layout rules are explained at the top of the file.
- Playwright: `require('playwright')` from this folder (installed in node_modules).
- Debug APK: see memory file; copy to `app-debug.apk` and send it to the owner's phone with SendUserFile.
