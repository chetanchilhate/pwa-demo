
const cacheName = 'cache-v1';
const resourceToPrecache = [
    '/',
    'index.html',
    'css/main.css',
    'css/normalize.css',
    'img/logo/pwa 192x192.png',
    'img/logo/pwa 512x512.png'
];

self.addEventListener('install', event => {
    console.log('Install event!', event);

    event.waitUntil(
        caches.open(cacheName)
            .then(cache => {
                return cache.addAll(resourceToPrecache);
            })
    );
});

self.addEventListener('activate', event => {
    console.log('Activate event!', event);
});

self.addEventListener('fetch', event => {
    console.log('Fetch event!', event);

    event.respondWith(caches.match(event.request)
        .then(cachedResponse => {
            return cachedResponse || fetch(event.request);
        })
    );
});
