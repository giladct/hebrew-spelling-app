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

## Ads (Android since 1.0.53, 17.11.2026; iOS from 1.2, added 22.11.2026)
- AdMob interstitial every time the child enters a stage (owner's choice 25.11.2026; was: after finishing a stage, max once per 3 min). `showStageAd()` is called from the stage-card click, continueBtn and nextLevelBtn; no time gap. Android 1.0.54 (versionCode 54) uploaded to production 25.11.2026; iOS not yet. Code: "Ads" section at the end of app.js.
- AdMob app "Learn to Read Hebrew": app id in AndroidManifest.xml, ad unit in `ADMOB` (app.js). For test ads use
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
- Stage 18 = picture puzzle (`PUZZLE_STAGES`, 6 words from LEVELS with a scene background; drag the pieces, then drag the syllables; skip button).
