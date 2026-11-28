import http.server, os

# Local test server for the web build: python serve.py -> http://localhost:8181 (serves www/, no cache).
# Kept outside www/ so it is not copied into the Android/iOS apps.

class NoCacheHandler(http.server.SimpleHTTPRequestHandler):
    def end_headers(self):
        self.send_header('Cache-Control', 'no-store, no-cache, must-revalidate')
        self.send_header('Pragma', 'no-cache')
        super().end_headers()

os.chdir(os.path.join(os.path.dirname(os.path.abspath(__file__)), 'www'))
# Threading: the single-threaded HTTPServer hung when a browser kept a connection open.
http.server.ThreadingHTTPServer(('', 8181), NoCacheHandler).serve_forever()
