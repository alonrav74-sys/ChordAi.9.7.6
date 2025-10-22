const CACHE_NAME = "chordfinder-v1";
const FILES_TO_CACHE = [
  "./",
  "./index.html",
  "./manifest.json",
  "./icons/icon516.png",
  "./icons/icon192.png"
];

self.addEventListener("install", e => {
  e.waitUntil(caches.open(CACHE_NAME).then(c => c.addAll(FILES_TO_CACHE)));
});

self.addEventListener("fetch", e => {
  e.respondWith(caches.match(e.request).then(resp => resp || fetch(e.request)));
});
