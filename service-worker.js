const cacheFiles = []
const cacheName = "v4.0.1"
self.addEventListener("install", event => {
    caches.open(cacheName).then(cache => cache.addAll(cacheFiles))
})
self.addEventListener("activate", event => {
    event.waitUntil(
        caches.keys().then(keys => {
            return Promise.all(
                keys.filter(key => {
                    return !cacheName.includes(key)
                }).map(key => {
                    return caches.delete(key)
                })
            )
        })
    )
})
self.addEventListener("fetch", event => {
    event.respondWith(
        caches.match(event.request).then(function(resp) {
            return resp || fetch(event.request).then(function(response) {
            let responseClone = response.clone()
            caches.open(cacheName).then(function(cache) {
                cache.put(event.request, responseClone)
            })
        return response
    })
}).catch(function() {
    return caches.match("src/share.jpg")
}))
})