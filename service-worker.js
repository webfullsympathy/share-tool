const cacheFiles = ["index.html", "script.js","style.css","src/share.jpg","src/device.js","404.png","m/index.html","m/style.css"]
const cacheName = "v1"
self.addEventListener("install", event => {
    caches.open(cacheName).then(cache => cache.addAll(cacheFiles))
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
    return caches.match("logo.svg")
}))
})