// Basic service worker for offline caching
const CACHE_NAME = 'ps-portfolio-v71';
const CORE_ASSETS = [
  './index.html',
  './styles.css',
  './tw.generated.css',
  './scripts.js',
  './manifest.webmanifest',
  './resume.pdf', // ensure resume is available offline and updates
  './dsa.pdf', // precache DSA certificate for preview
  './images/profile.png' // precache hero image
];

self.addEventListener('install', e => {
  e.waitUntil(
    caches.open(CACHE_NAME).then(cache => cache.addAll(CORE_ASSETS)).then(()=>self.skipWaiting())
  );
});

self.addEventListener('activate', e => {
  e.waitUntil(
    caches.keys().then(keys => Promise.all(keys.filter(k=>k!==CACHE_NAME).map(k=>caches.delete(k)))).then(()=>self.clients.claim())
  );
});

self.addEventListener('fetch', e => {
  const { request } = e;
  if (request.method !== 'GET') return;

  // Network-first for navigations/HTML so updates to index.html show up promptly
  const acceptsHTML = (request.headers.get('accept') || '').includes('text/html');
  if (request.mode === 'navigate' || acceptsHTML) {
    e.respondWith(
      fetch(request)
        .then(resp => {
          const copy = resp.clone();
          caches.open(CACHE_NAME).then(c => c.put(request, copy));
          return resp;
        })
        .catch(() => caches.match(request))
    );
    return;
  }

  // Cache-first for other GET requests (CSS/JS/images/docs)
  e.respondWith(
    caches.match(request).then(cached =>
      cached || fetch(request)
        .then(resp => {
          const copy = resp.clone();
          caches.open(CACHE_NAME).then(c => c.put(request, copy));
          return resp;
        })
        .catch(() => cached)
    )
  );
});
