'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "f14a07ff75d49712fe7736bb9ea387e2",
"assets/AssetManifest.json": "b2daa66547925b07e5a0dbf2dafe47b7",
"assets/assets/images/me_portrait.jpg": "270c0f32a4e4927ad0f02c6b8779ebd4",
"assets/assets/images/me_square.jpg": "bcdd45b9daf1319687ab1ef36b8b0b76",
"assets/assets/images/placeholder.png": "bade74c991011096287010458f7b77d2",
"assets/assets/images/portfolio/cookbook_app/1.png": "5764c646cbbf27ee7c7fa6bba7cd172e",
"assets/assets/images/portfolio/cookbook_app/2.png": "7868a4f2a0a35f3217c6375a54d87358",
"assets/assets/images/portfolio/cookbook_app/background_1x1.png": "d245a5d4e1a06dd7c90467d394110a39",
"assets/assets/images/portfolio/efn/1.png": "dce6536deaba401632005bd6f75812d8",
"assets/assets/images/portfolio/efn/2.png": "5f036435e1e8aab572b699ff4ebe66df",
"assets/assets/images/portfolio/efn/background_1x1.png": "26ca7ce953f37e806ecccc0c578c5e7e",
"assets/assets/json/data.json": "2991fa68da485e500ca46a719a333c69",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "32542e60c2e32f769e8ab514d4fbcf30",
"assets/NOTICES": "7ac463cead396e3e3123ec8c1db824d2",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "57d849d738900cfd590e9adc7e208250",
"assets/shaders/ink_sparkle.frag": "f8b80e740d33eb157090be4e995febdf",
"canvaskit/canvaskit.js": "76f7d822f42397160c5dfc69cbc9b2de",
"canvaskit/canvaskit.wasm": "f48eaf57cada79163ec6dec7929486ea",
"canvaskit/chromium/canvaskit.js": "8c8392ce4a4364cbb240aa09b5652e05",
"canvaskit/chromium/canvaskit.wasm": "fc18c3010856029414b70cae1afc5cd9",
"canvaskit/skwasm.js": "1df4d741f441fa1a4d10530ced463ef8",
"canvaskit/skwasm.wasm": "6711032e17bf49924b2b001cef0d3ea3",
"canvaskit/skwasm.worker.js": "19659053a277272607529ef87acf9d8a",
"favicon.ico": "033a17281d135626fda7c7f585248fe5",
"flutter.js": "6b515e434cea20006b3ef1726d2c8894",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "46f6ed9cfb5b6a03a30298243a5bcef0",
"/": "129d2ea40d3670b5c299dc186ae16d06",
"main.dart.js": "31f2f33a6c8e2e75bcf08da87bb6588e",
"manifest.json": "d6ca57350173b3ccd7074f958253fbee",
"portfolio/.git/config": "86709cdbad9d3c386b06c1ceaf1b8dac",
"portfolio/.git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
"portfolio/.git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
"portfolio/.git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
"portfolio/.git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
"portfolio/.git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
"portfolio/.git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
"portfolio/.git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
"portfolio/.git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
"portfolio/.git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
"portfolio/.git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
"portfolio/.git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
"portfolio/.git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
"portfolio/.git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
"portfolio/.git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
"portfolio/.git/hooks/sendemail-validate.sample": "4d67df3a8d5c98cb8565c07e42be0b04",
"portfolio/.git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
"portfolio/.git/index": "28b79eac606f68c7dd085dacccbfc2e3",
"portfolio/.git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
"portfolio/.git/logs/HEAD": "682fa178d00cb129aeb2058776becac2",
"portfolio/.git/logs/refs/heads/main": "682fa178d00cb129aeb2058776becac2",
"portfolio/.git/logs/refs/remotes/origin/HEAD": "682fa178d00cb129aeb2058776becac2",
"portfolio/.git/objects/pack/pack-75814cde9eef68217f94d5db7f4514242e493025.idx": "2e32802287257f2b09b94bf4c0264cd0",
"portfolio/.git/objects/pack/pack-75814cde9eef68217f94d5db7f4514242e493025.pack": "98090e3c1625bdae3e250af04d712789",
"portfolio/.git/objects/pack/pack-75814cde9eef68217f94d5db7f4514242e493025.rev": "21102e1c2f4918aa54dc3ef13044ca7e",
"portfolio/.git/packed-refs": "f3eb1fc41894004b8bfebf9976ac3329",
"portfolio/.git/refs/heads/main": "e94336b18a1c481ff160d25945f75960",
"portfolio/.git/refs/remotes/origin/HEAD": "98b16e0b650190870f1b40bc8f4aec4e",
"portfolio/assets/AssetManifest.json": "b2daa66547925b07e5a0dbf2dafe47b7",
"portfolio/assets/assets/images/me_portrait.jpg": "270c0f32a4e4927ad0f02c6b8779ebd4",
"portfolio/assets/assets/images/me_square.jpg": "bcdd45b9daf1319687ab1ef36b8b0b76",
"portfolio/assets/assets/images/placeholder.png": "bade74c991011096287010458f7b77d2",
"portfolio/assets/assets/images/portfolio/cookbook_app/1.png": "5764c646cbbf27ee7c7fa6bba7cd172e",
"portfolio/assets/assets/images/portfolio/cookbook_app/2.png": "7868a4f2a0a35f3217c6375a54d87358",
"portfolio/assets/assets/images/portfolio/cookbook_app/background_1x1.png": "d245a5d4e1a06dd7c90467d394110a39",
"portfolio/assets/assets/images/portfolio/efn/1.png": "dce6536deaba401632005bd6f75812d8",
"portfolio/assets/assets/images/portfolio/efn/2.png": "5f036435e1e8aab572b699ff4ebe66df",
"portfolio/assets/assets/images/portfolio/efn/background_1x1.png": "26ca7ce953f37e806ecccc0c578c5e7e",
"portfolio/assets/assets/json/data.json": "d3b878ddd9ec28b3788c0dc018971f38",
"portfolio/assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"portfolio/assets/fonts/MaterialIcons-Regular.otf": "95db9098c58fd6db106f1116bae85a0b",
"portfolio/assets/NOTICES": "db95e3974111a8ea9aff8bc8589f54bf",
"portfolio/assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"portfolio/assets/shaders/ink_sparkle.frag": "9554e9bb0748dcb747f69c797ed3588c",
"portfolio/canvaskit/canvaskit.js": "cf51f0145ed508c7203981a6297dfb6c",
"portfolio/canvaskit/canvaskit.wasm": "bf50631470eb967688cca13ee181af62",
"portfolio/canvaskit/profiling/canvaskit.js": "e069e181424052299c5bffb1b300bb13",
"portfolio/canvaskit/profiling/canvaskit.wasm": "95a45378b69e77af5ed2bc72b2209b94",
"portfolio/favicon.ico": "033a17281d135626fda7c7f585248fe5",
"portfolio/flutter.js": "db931120412af26cc1511fa058afaf0a",
"portfolio/icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"portfolio/icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"portfolio/icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"portfolio/icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"portfolio/index.html": "129d2ea40d3670b5c299dc186ae16d06",
"portfolio/main.dart.js": "a8ebb95773da855df835e38c40c18115",
"portfolio/manifest.json": "d6ca57350173b3ccd7074f958253fbee",
"portfolio/version.json": "c8f979d408e51acd1ee06f6af9b9722c",
"version.json": "c8f979d408e51acd1ee06f6af9b9722c"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"assets/AssetManifest.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
