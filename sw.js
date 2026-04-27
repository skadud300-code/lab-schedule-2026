self.__SW_VERSION = '2026.04.28-shiftcards1';

self.addEventListener('install', (event) => {
  self.skipWaiting();
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys()
      .then((keys) => Promise.all(keys.map((key) => caches.delete(key))))
      .then(() => self.clients.claim())
  );
});

// 개발 중 업데이트 꼬임을 줄이기 위해 fetch 캐시는 공격적으로 쓰지 않음
self.addEventListener('fetch', () => {});
