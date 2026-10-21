import http.server, os

class NoCacheHandler(http.server.SimpleHTTPRequestHandler):
    def end_headers(self):
        self.send_header('Cache-Control', 'no-store, no-cache, must-revalidate')
        self.send_header('Pragma', 'no-cache')
        super().end_headers()

os.chdir(os.path.dirname(os.path.abspath(__file__)))
# Threading: the single-threaded HTTPServer hung when a browser kept a connection open.
http.server.ThreadingHTTPServer(('', 8181), NoCacheHandler).serve_forever()
