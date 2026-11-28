#!/usr/bin/env python3
"""Records one Hebrew sentence with Gemini TTS (Gemini API, key in the GEMINI_API_KEY environment variable;
never put the key in a file). Picks the newest "flash ... tts" model the key can use.
Usage (from hebrew_spelling):  python tools/gemini_tts_test.py <out.mp3> <voice> "<text with niqqud>" ["<style>"]
Prints the model used. Converts the 24 kHz PCM answer to mp3 with ffmpeg.
"""
import base64
import json
import os
import subprocess
import sys
import tempfile
import urllib.request

sys.stdout.reconfigure(encoding='utf-8', errors='replace')
KEY = os.environ.get('GEMINI_API_KEY')
if not KEY:
    sys.exit('GEMINI_API_KEY is not set')
BASE = 'https://generativelanguage.googleapis.com/v1beta'


def call(url, body=None):
    req = urllib.request.Request(url, data=json.dumps(body).encode() if body else None,
                                 headers={'Content-Type': 'application/json', 'x-goog-api-key': KEY})
    with urllib.request.urlopen(req, timeout=120) as r:
        return json.load(r)


models = [m['name'] for m in call(BASE + '/models?pageSize=200')['models'] if 'tts' in m['name']]
flash = sorted([m for m in models if 'flash' in m], reverse=True) or sorted(models, reverse=True)
model = flash[0]
out, voice, text = sys.argv[1], sys.argv[2], sys.argv[3]
style = sys.argv[4] if len(sys.argv) > 4 else ''
prompt = (style + ':\n' + text) if style else text
resp = call(f'{BASE}/{model}:generateContent', {
    'contents': [{'parts': [{'text': prompt}]}],
    'generationConfig': {'responseModalities': ['AUDIO'],
                         'speechConfig': {'voiceConfig': {'prebuiltVoiceConfig': {'voiceName': voice}}}},
})
pcm = base64.b64decode(resp['candidates'][0]['content']['parts'][0]['inlineData']['data'])
raw = os.path.join(tempfile.mkdtemp(), 'a.pcm')
open(raw, 'wb').write(pcm)
subprocess.run(['ffmpeg', '-v', 'error', '-y', '-f', 's16le', '-ar', '24000', '-ac', '1', '-i', raw, '-b:a', '64k', out], check=True)
print('model', model, '| available tts models:', ', '.join(models))
