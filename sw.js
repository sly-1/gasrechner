const CACHE_NAME = 'gaszaehler-v1';
const ASSETS = [
  './',
  './index.html',
  './chart.js',
  './manifest.json',
  './icon.png'
];

// Dateien beim Installieren in den Cache laden
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => cache.addAll(ASSETS))
  );
});

// Bei Netzanfragen zuerst im Cache suchen
self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => {
      return response || fetch(event.request);
    })
  );
});
