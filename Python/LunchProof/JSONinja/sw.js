self.addEventListener("install", function (event) {
    event.waitUntil(
        caches.open("v1").then(function (cache) {
            return cache.addAll([
                "/",
                "index.html",
                "style.css",
                "ninja.js",
                "key.env",
                "manifest.webmanifest"
            ]);
        })
    );
});

self.addEventListener("fetch", function (event) {
    event.respondWith(
        caches.match(event.request).then(function (response) {
            // caches.match() always resolves
            // but in case of success response will have value
            if (response !== undefined) {
                return response;
            } else {
                return fetch(event.request)
                    .then(function (response) {
                        // response may be used only once
                        // we need to save clone to put one copy in cache
                        // and serve second one
                        let responseClone = response.clone();

                        caches.open("v1").then(function (cache) {
                            cache.put(event.request, responseClone);
                        });
                        return response;
                    })
                    .catch(function () {
                        return caches.match("/sw-test/gallery/myLittleVader.jpg");
                    });
            }
        })
    );
});
//deleting old files - needs updated
self.addEventListener('activate', function (event) {

    var cacheWhitelist = ['page-1', 'page-2'];

    event.waitUntil(
        // Retrieving all the keys from the cache.
        caches.keys().then(function (cacheNames) {
            return Promise.all(
                // Looping through all the cached files.
                cacheNames.map(function (cacheName) {
                    // If the file in the cache is not in the whitelist
                    // it should be deleted.
                    if (cacheWhitelist.indexOf(cacheName) === -1) {
                        return caches.delete(cacheName);
                    }
                })
            );
        })
    );
});

//TODO add key here for fetching API calls.