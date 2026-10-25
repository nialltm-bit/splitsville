// Offline support: keeps the app and its text reader on the phone after first use.
const CACHE = "splitsville-v4";
const SHELL = ["./", "index.html", "manifest.webmanifest", "icons/icon-192.png", "icons/apple-touch-icon.png"];
self.addEventListener("install", (e) => {
  e.waitUntil(caches.open(CACHE).then((c) => c.addAll(SHELL)).then(() => self.skipWaiting()));
});
self.addEventListener("activate", (e) => {
  e.waitUntil(caches.keys().then((ks) => Promise.all(ks.filter((k) => k !== CACHE).map((k) => caches.delete(k)))).then(() => self.clients.claim()));
});
self.addEventListener("fetch", (e) => {
  const req = e.request;
  if (req.method !== "GET") return;
  const url = new URL(req.url);
  const isPage = req.mode === "navigate";
  // Pages: network first so updates arrive; everything else: cache first.
  if (isPage) {
    e.respondWith(fetch(req).then((r) => { const c = r.clone(); caches.open(CACHE).then((x) => x.put("index.html", c)); return r; })
      .catch(() => caches.match("index.html")));
    return;
  }
  e.respondWith(caches.match(req).then((hit) => hit || fetch(req).then((r) => {
    if (r.ok && (url.origin === location.origin || url.hostname === "fonts.gstatic.com" || url.hostname === "fonts.googleapis.com")) {
      const c = r.clone(); caches.open(CACHE).then((x) => x.put(req, c));
    }
    return r;
  })));
});
