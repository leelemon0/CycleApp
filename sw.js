const cacheName = 'cycle-app-v2';
const assets = [
  '/CycleApp/',
  '/CycleApp/index.html',
  '/CycleApp/style.css',
  '/CycleApp/app.js',
  '/CycleApp/data.js',
  '/CycleApp/manifest.json',
  '/CycleApp/icon-192.png',
  '/CycleApp/icon-512.png'
];

self.addEventListener('install', e => {
  e.waitUntil(
    caches.open(cacheName).then(cache => {
      return cache.addAll(assets);
    })
  );
});

self.addEventListener('fetch', e => {
  e.respondWith(
    caches.match(e.request).then(res => {
      return res || fetch(e.request);
    })
  );
});