const cacheName = 'cycle-app-v1';
const assets = [
  '/CycleApp/',
  '/CycleApp/index.html',
  '/CycleApp/style.css',
  '/CycleApp/app.js',
  '/CycleApp/data.js',
  '/CycleApp/manifest.json'
];

self.addEventListener('install', e => {
  e.waitUntil(caches.open(cacheName).then(cache => cache.addAll(assets)));
});

self.addEventListener('fetch', e => {
  e.respondWith(caches.match(e.request).then(res => res || fetch(e.request)));
});