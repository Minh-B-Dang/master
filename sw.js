/** Install Service Worker */

self.addEventListener('install', function(event) {
 event.waitUntil(
   caches.open('mws-restaurant-stage-1').then(function(cache) {
     return cache.addAll([
       '/',
       '/index.html',
       '/restaurant.html',
       '/main.js',
       '/data/db.helper.js',
       '/js//restaurant_info.js',
       '/js/restaurants.json',
       '/css/styles.css',
       '/img/'
     ]);
   }).catch(function() {
      return caches.match('/index.html');
   })
 );
});