var cacheName = "weatherPWA-Step-6-1";
var filestoCache = [];

self.addEventListener('install', function(e){
console.log('[ServiceWorker] Install');
e.waitUntil(
    caches.open(cacheName).then(function(cache) {
        console.log('[ServiceWorker] Cacheing app shell');
        return cache.addAll(filestoCache);
    })
);
});