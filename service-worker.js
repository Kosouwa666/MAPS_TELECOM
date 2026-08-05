self.addEventListener('install', function(event) {
    console.log('Service worker installé');
});

self.addEventListener('fetch', function(event) {
    // Laisse passer toutes les requêtes
});
