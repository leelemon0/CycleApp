self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open('v1').then((cache) => {
      return cache.addAll([
        '/CycleApp/',
        '/CycleApp/index.html',
        '/CycleApp/style.css',
        '/CycleApp/app.js',
        '/CycleApp/data.js',
        '/CycleApp/manifest.json',
        '/CycleApp/icon-192.png',
        '/CycleApp/icon-512.png'
      ]);
    })
  );
});

// THIS PART IS CRITICAL FOR THE INSTALL BUTTON
self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => {
      return response || fetch(event.request);
    })
  );
});