self.addEventListener("install", e => {
  e.waitUntil(
    caches.open("static").then(cache => {
        return cache.addAll(["./", "./css/login.css", "./image/facebook_profile_image.png"]);

    })
  );
});

self.addEventListener("fetch", e=> {
    e.respondWith(
        caches.match(e.request).then(response => {
            return response || fetch(e.request);
        })
    );
});