// L'appli a déménagé sur https://boussole-2027.github.io/ .
// Ce service worker remplace l'ancien : il efface les copies de la Boussole gardées hors connexion,
// se désinscrit, puis recharge la page pour afficher le renvoi. Il ne touche pas aux autres applis du site.
self.addEventListener('install', () => self.skipWaiting());
self.addEventListener('activate', (e) => {
  e.waitUntil((async () => {
    for (const k of await caches.keys()) if (k.startsWith('boussole')) await caches.delete(k);
    await self.registration.unregister();
    for (const c of await self.clients.matchAll({ type: 'window' })) c.navigate(c.url);
  })());
});
