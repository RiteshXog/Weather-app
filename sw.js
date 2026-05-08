const CACHE = "weather-v1";
const FILES = [
  "index.html",
  "search.png",
  "rain.png",
  "clouds.png",
  "clear.png",
  "drizzle.png",
  "mist.png",
  "snow.png",
  "wind.png",
  "humidity.png",
  "manifest.json"
];

self.addEventListener("install", e => {
  e.waitUntil(
    caches.open(CACHE).then(c => c.addAll(FILES))
  );
});

self.addEventListener("fetch", e => {
  e.respondWith(
    caches.match(e.request).then(r => r || fetch(e.request))
  );
});