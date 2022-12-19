'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  ".git/COMMIT_EDITMSG": "c9a8368580cc491feb902529b56511e4",
".git/config": "b2618cea48951b3a87f069a2ec7a5c60",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "ea587b0fae70333bce92257152996e70",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "3cb74f2ac6f9621ba5385a374a4041ac",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "391ebf1c7ffcee963cdc8098726866fe",
".git/logs/refs/heads/main": "1a38df5cad478b18cb616619ca805f62",
".git/logs/refs/remotes/origin/main": "2f50fee2bf752eb9326a214d892f29da",
".git/objects/15/4b4473e473e56697662d3401e4bfa303098de4": "ee63e6793d06a95757d1860b7ff59c25",
".git/objects/17/4994fb16543f1da4c4a65274588b9597655b63": "987933491c9a876ea7ca2e3596c19d23",
".git/objects/1a/b847b818dec389fb43fb9da80637c02e27d3d3": "8af286f2a069534106d53e8c037b0a4a",
".git/objects/1b/676f041ecd2c91086c9d3172868a00613ed07c": "c412375696b2c81317caf7b6f99a60d5",
".git/objects/1b/e8f41fb9e29555b95010162cbdfafc31edfd82": "f03826ab5b77c760eec2ade945e4dbb2",
".git/objects/1c/409b8f9e90b3ce61ae199a8090d87dd3d614cf": "c341e49062598dbe98c900d1f8e9d78d",
".git/objects/1f/8f7eb658ad3653009610141ba4615ea984f07a": "82ee15c139405090b78c5a37021d7e1c",
".git/objects/28/d3bace2a2f8f0eadd9c2e94a654f70be420501": "ac198910feeac314955253fc18854841",
".git/objects/2b/2c3a562b375d8b8666585df340e8f3868f38a8": "92a5ead6e841d0afb413c30b02850499",
".git/objects/31/0277f56f5a4c0161314c96fc7eea70598b5ed5": "0a222cc9fc0ef25f606242f5c2e06986",
".git/objects/34/6d281793ef40c0482f0f6c4b1bdd853fa0389e": "e965e99257b73988f57630b02195e7cc",
".git/objects/38/1de940663a1307bbedcb4d9d6f2cc712ab4a26": "5aa47177456736f0a51fe11c7965cb0f",
".git/objects/3f/7682a6e830e34f27e98a37d386fa63b2985df4": "1acac7a08041d4c873c649de6751474c",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/5e/aad7dac58f4db671f40865a37950bc865b03ef": "8c5f132aca6a72efa640535f94624284",
".git/objects/5f/0083dbc0270eccb879249d2c5455eddbf469ec": "da834a1262e8b75ecda03fef539d2d15",
".git/objects/62/c6ef2374946425757ca78e603762d10598d731": "c3e3be2bd3da82009cb5dff4b57be660",
".git/objects/66/34eed7a140e3814a5f5d64d34726a03f462dac": "f1c115ca96974c2b4221a325b7ad682b",
".git/objects/67/5190832f2d529eee3472e064435d310e3998f6": "bc22b2f97da9914bf092a95678a06c86",
".git/objects/6d/580f13f5bfdd5dfef1920317768a605a5351d5": "6dc2fbd9dd0a4cdbd23cbec06d8726ca",
".git/objects/78/1548686db4f8d650dee5d97da045ac169c1535": "0960ba0a6ae52edc334e11c8d25f9fe3",
".git/objects/79/ba7ea0836b93b3f178067bcd0a0945dbc26b3f": "f3e31aec622d6cf63f619aa3a6023103",
".git/objects/7c/fb6f962bdb8c4b610bb1bb25b6c4361f9d20e8": "20235224869b650fc9ceb371e56bb5c9",
".git/objects/84/b82038500bbc13470c702ba1faa9ef22cb353f": "91692b81377056ab7df1e52729a929d3",
".git/objects/85/bd452472ebe16af22eabe5027fb3f40745e8f2": "b30a11cfba7fdba3566f1c9d57dfa0de",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/94/b6096769081a5f23a981feb32461a6afbcc953": "fc9a3878b6e89b83cb7025379ba55f35",
".git/objects/97/8746b5424d1212460133977131fc5ef0971abb": "3cc094294d4d3275ff02b12eff5e10c3",
".git/objects/a1/3837a12450aceaa5c8e807c32e781831d67a8f": "bfe4910ea01eb3d69e9520c3b42a0adf",
".git/objects/a4/403e36dc6262baec323dee19ccc8a69a2af1b7": "7dccf860a036599a72110c52a552ba49",
".git/objects/ab/0e98497a51ead7821d1da35a24968ff314e50f": "557c35fe3928eb2af403d1b3926bb9ba",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/c3/acc958c35b9f346480b47129bb6f872867248d": "233f8704a771e0369dcfaba933ca8da5",
".git/objects/cc/5725b315760d100f6386e6bbf09af8fe57a9f1": "29c19352d2bee0821600856656c95791",
".git/objects/cd/22076013ce8b84475eae9bb4cd6c60b5460fbe": "81c620e2d6cbe5638d6c90ee25886389",
".git/objects/d4/fc9b2c1672acaef647f0bc385d65b500248a3d": "f2425928284a66563af814374ac703f3",
".git/objects/d6/01928b40faf8a57ddac6cc853a5dc1592c84d1": "99a8e00762104b6ccd0770650ca6018c",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/de/28db843d7df6ed23b8a7526f6b6b4a83425fe7": "797e4f7b3d8dced098c51679ff33e848",
".git/objects/e0/2012ca0a73da86edd7614aebdc24f350669305": "4cb516f7f367eb8387729d8cfc7cf9b2",
".git/objects/e4/b6424cd6d44a22f5a6a1c704f0e75478495bc6": "b41bd88302aa7821fcc837ef0b3fe36e",
".git/objects/e5/951dfb943474a56e611d9923405cd06c2dd28d": "c6fa51103d8db5478e1a43a661f6c68d",
".git/objects/e6/db5e742b9b3191a94c70d6bda87976213cd35e": "b853600dc03afb42ba784f5416d1a21a",
".git/objects/ea/2fc6ea12aec8ba9efdd909321d2d3211e24173": "a0f45856674e3b5763c00e4439964986",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/ee/003d1fc040a9e245184179f5a6d711e1d6ee82": "f302d00ad9403f1d50c11ebe1e28d061",
".git/objects/f3/fe8132ade168dc702eb6833f63bb44be6d2fe0": "0591aef4d66305036928d17fe40e0c51",
".git/objects/f6/90298025022276d137a450c48a3a7198436674": "7a4b5ca23267cf4e95d3ca696abc9903",
".git/refs/heads/main": "9aa6734f1bfd2f26ca27db1f9492428d",
".git/refs/remotes/origin/main": "9aa6734f1bfd2f26ca27db1f9492428d",
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
"assets/assets/json/data.json": "6cc8acb759e4557c5b4e1d7d8d23c5ef",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "95db9098c58fd6db106f1116bae85a0b",
"assets/NOTICES": "ba709a0044b1327907e9cebcc526e472",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/shaders/ink_sparkle.frag": "9554e9bb0748dcb747f69c797ed3588c",
"canvaskit/canvaskit.js": "2bc454a691c631b07a9307ac4ca47797",
"canvaskit/canvaskit.wasm": "bf50631470eb967688cca13ee181af62",
"canvaskit/profiling/canvaskit.js": "38164e5a72bdad0faa4ce740c9b8e564",
"canvaskit/profiling/canvaskit.wasm": "95a45378b69e77af5ed2bc72b2209b94",
"favicon.ico": "033a17281d135626fda7c7f585248fe5",
"flutter.js": "f85e6fb278b0fd20c349186fb46ae36d",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "eb880d40e409ad34bb5696294f55fed7",
"/": "eb880d40e409ad34bb5696294f55fed7",
"main.dart.js": "ffb632659d4679b1f4c76d29accf3fe7",
"manifest.json": "d6ca57350173b3ccd7074f958253fbee",
"version.json": "c8f979d408e51acd1ee06f6af9b9722c"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "main.dart.js",
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
