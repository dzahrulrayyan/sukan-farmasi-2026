JavaScript
const CACHE_NAME = 'sukan-farmasi-v1';

self.addEventListener('install', (event) => {
  self.skipWaiting();
});

self.addEventListener('activate', (event) => {
  event.waitUntil(clients.claim());
});

self.addEventListener('fetch', (event) => {
  // Biarkan data API sentiasa diambil secara langsung dari rangkaian (Network First)
  event.respondWith(
    fetch(event.request).catch(() => caches.match(event.request))
  );
});
