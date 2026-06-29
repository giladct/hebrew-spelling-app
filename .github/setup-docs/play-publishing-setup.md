# Automated Play Store publishing - one-time setup

This is a one-time setup you do yourself in Google Cloud Console + Play
Console (it needs your Google account - it can't be scripted from here).
Once done, every push to `main` will automatically upload the signed AAB to
a Play Console testing track, with a version code that's guaranteed to
never collide with a previous upload.

## 1. Create a Google Cloud service account

1. Go to https://console.cloud.google.com/ and create a new project (or
   reuse one) - e.g. "hebrew-spelling-publishing".
2. In that project, enable the **Google Play Android Developer API**
   (APIs & Services -> Enable APIs and Services -> search for it).
3. Go to **IAM & Admin -> Service Accounts -> Create Service Account**.
   Name it something like `play-publisher`. You don't need to grant it any
   project-level role - just create it.
4. Open the new service account -> **Keys** tab -> **Add Key -> Create new
   key -> JSON**. This downloads a `.json` file - keep it private, it's a
   credential.

## 2. Grant that service account access in Play Console

1. In Play Console, go to **Setup -> API access**.
2. It should detect the Cloud project from step 1 and let you link it.
3. Under the linked service account, click **Manage Play Console
   permissions** (or invite it under **Users and permissions -> Invite new
   users**, using the service account's email address, which looks like
   `play-publisher@<project-id>.iam.gserviceaccount.com`).
4. Grant it at minimum: **View app information**, and **Release to testing
   tracks** for this specific app (full release/production permissions
   aren't needed unless you want CI publishing straight to production,
   which is not recommended).

## 3. Register the credential with GitHub

Take the JSON file from step 1 and run (from the repo root):

```
gh secret set PLAY_SERVICE_ACCOUNT_JSON --repo giladct/hebrew-spelling-app < path/to/the-key.json
gh variable set HAS_PLAY_PUBLISHING --repo giladct/hebrew-spelling-app --body true
```

Optionally, to publish to a track other than `internal` (e.g. `alpha` for
Closed Testing):

```
gh variable set PLAY_TRACK --repo giladct/hebrew-spelling-app --body alpha
```

## 4. Done

The next push to `main` will build, sign, and upload automatically. Check
the "release" job's "Publish to Play Console" step in GitHub Actions to
confirm it went through.

If a release ever lands in Play Console with a status you don't want
auto-promoted (e.g. you want to review before testers see it), set
`status: completed` to `status: draft` in
`.github/workflows/android-build.yml` instead - that uploads the bundle
without starting the rollout, so you press the button yourself.
