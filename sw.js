// 설치(홈 화면 추가)용 최소 서비스워커 — 캐시는 하지 않고 네트워크로 그대로 넘깁니다.
self.addEventListener('install', function () { self.skipWaiting(); });
self.addEventListener('activate', function (e) { e.waitUntil(self.clients.claim()); });
self.addEventListener('fetch', function () {});
