const CACHE_NAME = 'quadtech-cache-v1';
const urlsToCache = [
  '/',
  '/index.html',
  '/static/js/main.524cd091.js',
  '/static/css/main.e56aa1ab.css',
  '/static/js/453.d2ead362.chunk.js',
  '/icon.jpeg',
  '/logo.png',
  '/manifest.json',
  // Add other critical assets like fonts, images, etc.
];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then((cache) => {
        console.log('Opened cache');
        return cache.addAll(urlsToCache);
      })
  );
});

self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request)
      .then((response) => {
        // Cache hit - return response
        if (response) {
          return response;
        }
        return fetch(event.request);
      })
  );
});

self.addEventListener('activate', (event) => {
  const cacheWhitelist = [CACHE_NAME];
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cacheName) => {
          if (cacheWhitelist.indexOf(cacheName) === -1) {
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
});