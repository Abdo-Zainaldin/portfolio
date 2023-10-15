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
"assets/assets/json/data.json": "54214a7cee756b7ea3528290adb0a82e",
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
"index.html": "31c47389e3b426d5ab5143150cabf9f6",
"/": "e9bf6c611e9a9dd6eb4b74d2f55eb9db",
"main.dart.js": "2cc049acede5a9dfd44afeb5cab740c4",
"manifest.json": "d6ca57350173b3ccd7074f958253fbee",
"portfolio/.git/COMMIT_EDITMSG": "03bf5b6c333764c6b9bb4b5711d96a3c",
"portfolio/.git/config": "86709cdbad9d3c386b06c1ceaf1b8dac",
"portfolio/.git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
"portfolio/.git/FETCH_HEAD": "92b9443c83d09fef9da8bb8afff14399",
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
"portfolio/.git/index": "448f513cd413f5f20a5e931ea63c8afb",
"portfolio/.git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
"portfolio/.git/logs/HEAD": "62a06ea05c6521cb95e410367046e2b8",
"portfolio/.git/logs/refs/heads/main": "62a06ea05c6521cb95e410367046e2b8",
"portfolio/.git/logs/refs/remotes/origin/HEAD": "682fa178d00cb129aeb2058776becac2",
"portfolio/.git/logs/refs/remotes/origin/main": "cc6bfa15b89c0cbb09cf824df3246a1f",
"portfolio/.git/objects/03/c531a7a4eadfbb97e5434401927ee31890cf33": "fe6b24f60048b7f218835d95c2c650ae",
"portfolio/.git/objects/04/622d2b3382607fc86ca0facfca4708d91ca29b": "cd05816d672d27c9ff39599057767d3a",
"portfolio/.git/objects/07/67ca7fa7aa9a29f19e0d3445ebc2a9d06fd5fa": "2655c86bcb7a87525de4e8db29962a6a",
"portfolio/.git/objects/08/fd80bc6e9ad73017c6a58da2dcbdf9ec19daf4": "349d8dce5e4a2666d0701e7242d83464",
"portfolio/.git/objects/09/b4e003c4a8b970428df303dc8441ece35e433c": "0dd7fec1969bed065e6d332a5283d194",
"portfolio/.git/objects/0b/85bcdb86bf9e9f9fda81b13cec9c9349d47d77": "77cbf4b6cc88e2471afd14a98ef2e0ed",
"portfolio/.git/objects/0c/6fdc52d762a6c55e7ca266dc9b7d01b7235fd8": "3f5970954296b27bfe22710b017ec427",
"portfolio/.git/objects/12/afcdf72468ad0f2be28c57c76758a69ff6e99c": "5212f90319b2ad343c2c3e531430c4f9",
"portfolio/.git/objects/12/ff8751ef01566caef5dc4f9b45224e6edbc70b": "13c132c20197e8f8f8d613012d69bcaa",
"portfolio/.git/objects/13/c8c8399bb1f5f9fe949b47f58c1ba491589b08": "84a10091af8aaa01457dc8b134a34244",
"portfolio/.git/objects/1d/384f3748038966a5c7316223edf120dd5894dd": "a8d542276aa823dfefb8d26439e1077a",
"portfolio/.git/objects/1e/bf993c04c08e17a0122730f8d7ce6e139c8bad": "eeb4f0d71f24758335fe1753273ad6c2",
"portfolio/.git/objects/1f/686edd1465272558af328ca43cb7189a0059e6": "5e83820f6d3e5392693d45bc239b2b61",
"portfolio/.git/objects/22/f1e65fd2fac0d3f3c0b99e2ed4ff002b03ca35": "847d9683d1604aaa5cd3ed6e69c3ad67",
"portfolio/.git/objects/32/1d9808cdf103de0d463ac24e394271f67db2b9": "ab7980587b237008e4d65dfced2d3266",
"portfolio/.git/objects/35/91af41948adc8001f3586d76b91181311953fc": "c91d33b29071dcff3b2b3385383761cb",
"portfolio/.git/objects/37/7580cbf691d03aea79c63a3a251b1b48ac01f1": "c196d282a50e3c372b4445c6b8868297",
"portfolio/.git/objects/3f/03df5a60ab6515d64fe32fbd0694b5b12543a2": "a9765610fd309b297c4c10375c36e6cf",
"portfolio/.git/objects/40/73f61110487c4239b8beee8ab6dded093a6b0c": "250cf8efa293e2d0817c65f2a5fef95e",
"portfolio/.git/objects/47/384f55af054fa750099f56305333b2928cf510": "d10d9fa0ed54c198bfd9b5f0496bea53",
"portfolio/.git/objects/4f/c15591056965c35f2f6fdf7cc84bf4171100b7": "9b22c2f5a4da63408ef556da00508e5e",
"portfolio/.git/objects/51/34e6402246228fb7f58ce8fe76727a61d99a62": "6b5e5b48febe40daec7062aecdc3b39f",
"portfolio/.git/objects/52/60823c6515e3fe30df4d1cdd1c3c8f2c5845b9": "cd0ca91a9b7d663798fad2696ab6ffb2",
"portfolio/.git/objects/54/bfd35696e9557eac50b0d454a934ef597e834d": "c96d8f319b2897770bb6bbfcae03e70d",
"portfolio/.git/objects/57/d7005b7f29db69111ace898c2593646235bc1f": "3cb3488444d0033474a39469c8c89646",
"portfolio/.git/objects/5a/25f2f61d5f5ddf02272928c5f8178a33c2f333": "47d8ba3fe443b16736ae56537c8b7647",
"portfolio/.git/objects/62/a01d6826913d9efa140d2e9f4bc0f13918e607": "44ba2af6a4f05cb190463143170ae010",
"portfolio/.git/objects/6a/64dc77c78e7a6808aa68180b4fdee52f0d5a35": "bdddeed19125153bac55a86253b70e18",
"portfolio/.git/objects/70/010cc4761157d9d7cc2d082cf342e63fe1190a": "baf21d1dacab382149ee93266543ff40",
"portfolio/.git/objects/72/d25e3fc2b32a339e9c90a51708fdcd454622e8": "a85c400419c189c6261591954c935c8a",
"portfolio/.git/objects/75/14a35f493841d0938bb1ad1cc76fc782cc8918": "522dfff3b97a79f508713af703e12a24",
"portfolio/.git/objects/78/baf5f87459b09ae387579766ae598a8b3f4056": "c7ba9d0e1fea8709b178e74170189bdf",
"portfolio/.git/objects/84/16b1e5227d8994b082a1d2330cc455d7cbffc3": "5fa6ccaf4ec18f57682dfb873f1ae2fd",
"portfolio/.git/objects/8e/7f4b338840099949781ab85496d7a67fae46f1": "7f2803c236e9e7d95ef6ed16a3a2bd13",
"portfolio/.git/objects/92/6a8cbe6fec2167202bacab2543bf28e63318a4": "1b7ae5e8f3241e8a0b00bda6ef889af5",
"portfolio/.git/objects/93/875a25deba9ee5e1bfad95e22d5de79004eeac": "a9f2c41e672407f27cdd33254abff8a1",
"portfolio/.git/objects/9e/6b9b747aa442f80c2fecc49c4f24f1965b048c": "eb7389b627dc49d0b08f833219ddd421",
"portfolio/.git/objects/ae/37803d1933c3979fd1b939ff61cc667b0b70dc": "f5c08c98e82ebd9034dbd78b64a292fa",
"portfolio/.git/objects/ae/6748dd387be984b9eaf391e10e05a33d6c8ea5": "4f409b79985f46341001f76e5ad3639a",
"portfolio/.git/objects/b0/c2cf774c648a56b7e8b19b68b7275352b58b9d": "6a6e05897402cd11990f7327bf9ad3fc",
"portfolio/.git/objects/b2/2fdb2d1fa6a3bced274617d58f6ab432bb0d8b": "1b405e4dfab487f51d41422d52600614",
"portfolio/.git/objects/b2/844833d0655ba8b7bbee32e6d1ddd303435fd2": "f0229b06bbc04a393640621a776ef35b",
"portfolio/.git/objects/b9/4c533b5cc8912ecccf1595ad319cea759391b4": "81ce82afc30431cdd61032e5ea6a1d2b",
"portfolio/.git/objects/bb/ac29f5ef7a40bf14c0901bc1457724156bc0de": "1393f20f0610cabefe2d4f45865b0f54",
"portfolio/.git/objects/bb/d921f7f74ae0e5517c115f77c1fe165fb39e63": "a53f162053ea6b65ba175e27b90f1070",
"portfolio/.git/objects/bd/158a96263b4191c275108053f038ee36c4f5d8": "1ae8528e2e6e26a7e88c6e833445d814",
"portfolio/.git/objects/c2/85631e56a517e63bb06614ab5f296d50643d0d": "89a91a43fa4c16ed4844cdb8a2b5cc86",
"portfolio/.git/objects/ca/73b35213e149924667a9f4cb2a232b32555983": "ade64b95ef847f63a1ba0545a3e7c071",
"portfolio/.git/objects/d3/efa7fd80d9d345a1ad0aaa2e690c38f65f4d4e": "610858a6464fa97567f7cce3b11d9508",
"portfolio/.git/objects/d4/1e24e05499501b01c566ae04f5de3889e1699c": "e0e4c509da5110f651a5b4c3daf8fdb1",
"portfolio/.git/objects/d8/f5cccfdb1e462945a05f17481374458f1e11a8": "26b44c4d2fd0e7bfd13b42505cb83ea8",
"portfolio/.git/objects/e2/5429688cb0b4e2cfb2c2637c10d84b58354053": "daee7a9a0ec94a5091ab3c66333bb0c3",
"portfolio/.git/objects/e7/5e920f175da53dd6f04d858636baa25dc702f4": "0fd694d0b7477cee41611e70d0cd6732",
"portfolio/.git/objects/e7/f310bc384e82b12dd81ae9d5d8115c79aaed0e": "798c5e7f6d3d49d43f31576023fb7d8a",
"portfolio/.git/objects/ee/b4a0d317630c55d674124342c50cf1dca92d15": "b02d511b13b193239ce452ad54ff5f10",
"portfolio/.git/objects/f7/d766df2e7f944f493d14f1e403d39b19c325dc": "271bed4e53481a1a56193efe1e98a304",
"portfolio/.git/objects/f9/42b9f3e493f3316aeef0dee22703b2fe77f9fb": "0f5bb1bc8d261cdd3f2d459f76793c2f",
"portfolio/.git/objects/fa/b53d82e0bc9e59d8e35f625a332b187da4d9f7": "28f2e4caa272bab3b75fc9c00e5528af",
"portfolio/.git/objects/pack/pack-75814cde9eef68217f94d5db7f4514242e493025.idx": "2e32802287257f2b09b94bf4c0264cd0",
"portfolio/.git/objects/pack/pack-75814cde9eef68217f94d5db7f4514242e493025.pack": "98090e3c1625bdae3e250af04d712789",
"portfolio/.git/objects/pack/pack-75814cde9eef68217f94d5db7f4514242e493025.rev": "21102e1c2f4918aa54dc3ef13044ca7e",
"portfolio/.git/ORIG_HEAD": "8cd5fb9a4f6d812ed2e2386e3a44bb95",
"portfolio/.git/packed-refs": "f3eb1fc41894004b8bfebf9976ac3329",
"portfolio/.git/refs/heads/main": "61b0bc067cbc4b91c9051178b5547f61",
"portfolio/.git/refs/remotes/origin/HEAD": "98b16e0b650190870f1b40bc8f4aec4e",
"portfolio/.git/refs/remotes/origin/main": "61b0bc067cbc4b91c9051178b5547f61",
"portfolio/assets/AssetManifest.bin": "f14a07ff75d49712fe7736bb9ea387e2",
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
"portfolio/assets/assets/json/data.json": "54214a7cee756b7ea3528290adb0a82e",
"portfolio/assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"portfolio/assets/fonts/MaterialIcons-Regular.otf": "32542e60c2e32f769e8ab514d4fbcf30",
"portfolio/assets/NOTICES": "7ac463cead396e3e3123ec8c1db824d2",
"portfolio/assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "57d849d738900cfd590e9adc7e208250",
"portfolio/assets/shaders/ink_sparkle.frag": "f8b80e740d33eb157090be4e995febdf",
"portfolio/canvaskit/canvaskit.js": "76f7d822f42397160c5dfc69cbc9b2de",
"portfolio/canvaskit/canvaskit.wasm": "f48eaf57cada79163ec6dec7929486ea",
"portfolio/canvaskit/chromium/canvaskit.js": "8c8392ce4a4364cbb240aa09b5652e05",
"portfolio/canvaskit/chromium/canvaskit.wasm": "fc18c3010856029414b70cae1afc5cd9",
"portfolio/canvaskit/skwasm.js": "1df4d741f441fa1a4d10530ced463ef8",
"portfolio/canvaskit/skwasm.wasm": "6711032e17bf49924b2b001cef0d3ea3",
"portfolio/canvaskit/skwasm.worker.js": "19659053a277272607529ef87acf9d8a",
"portfolio/favicon.ico": "033a17281d135626fda7c7f585248fe5",
"portfolio/flutter.js": "6b515e434cea20006b3ef1726d2c8894",
"portfolio/icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"portfolio/icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"portfolio/icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"portfolio/icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"portfolio/index.html": "e9bf6c611e9a9dd6eb4b74d2f55eb9db",
"portfolio/main.dart.js": "2cc049acede5a9dfd44afeb5cab740c4",
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
