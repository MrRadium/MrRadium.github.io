'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "main.dart.js": "9d18c8eb104e02fde0e9f16d6d21f143",
"index.html": "6c877589e0c959368337075e8fa9f09f",
"/": "6c877589e0c959368337075e8fa9f09f",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"version.json": "ae6ec7e100fa218a70c1a7006c2c1b64",
"assets/FontManifest.json": "edbaa2e751a914fb4867eafe01a2b0ad",
"assets/AssetManifest.json": "33dcf6ebda75539501d0dd55f17427da",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/NOTICES": "b87e7ceb9de555cb3775cbfd1db2618c",
"assets/assets/icons/GitHub%2520Icon.png": "0300ce9e2a7eea5c5d39f059434fcf16",
"assets/assets/icons/Right%2520Arrow%2520Highlighted.png": "bd8f2c58969112d3965e6d0034b7d353",
"assets/assets/icons/Upwork%2520Icon.png": "7bd0619a056fdd5754fe567dbf093715",
"assets/assets/icons/Instagram%2520Icon.png": "4d90215194e97498cb823f4ea1764168",
"assets/assets/icons/Medium%2520Icon.png": "5409b72bfa7d95717cb7c45a7c786cb6",
"assets/assets/icons/Right%2520Arrow.png": "b8a657414bd5652e65f2b74c971e3a1c",
"assets/assets/avatars/Joker%2520Avatar.png": "2c20bde4e9c3796ef91d54b652e9b665",
"assets/assets/logos/Python%2520Logo.png": "99b6f565774ddcd44c36f3b09b1d65a8",
"assets/assets/logos/Figma%2520Logo.png": "b1ea27c30a009510badb2cf39d4ad9c2",
"assets/assets/logos/Flutter%2520Logo.png": "503d67f9dfca04099dbcb8b9b73ff09a",
"assets/assets/images/background%25201366x768.jpg": "8cf7ab8e0a1c1618f04b24fee3057287",
"assets/assets/images/background%25202880x1620.jpg": "ecfa07127991608cd24b592198c07320",
"assets/assets/images/background%25201600x900.jpg": "09739ce0892a7120986b15dc8a4c073b",
"assets/assets/images/background%25203840x2160.jpg": "34b0d4c9bf3361b5fde93de435d5d62b",
"assets/assets/images/background%25201920x1080.jpg": "656f343f359817b1806f237a568737a2",
"assets/assets/images/background%25201280x720.jpg": "8a5966ee3bfdd3ffe7d8db31b5433a55",
"assets/assets/images/background%25202560x1440.jpg": "eedceeb63b8dd90776a0f12f44111c13",
"assets/assets/fonts/Nunito-Regular.ttf": "d8de52e6c5df1a987ef6b9126a70cfcc",
"assets/assets/fonts/Nunito-Bold.ttf": "c0844c990ecaaeb9f124758d38df4f3f",
"assets/assets/fonts/Montserrat-Regular.ttf": "ee6539921d713482b8ccd4d0d23961bb",
"assets/assets/doodles/Prototype%2520Line%25204.png": "544815297380e0c7df2a1c6d22e99379",
"assets/assets/doodles/Prototype%2520Line%25203.png": "b04253fc9fc68592c2a5502cf0bd1c65",
"assets/assets/doodles/Prototype%2520Line%25201.png": "83453d39c24bb2c2438b7b21df990ab5",
"assets/assets/doodles/Prototype%2520Line%25202.png": "87555199f3d80b17622355186b3812fc",
"assets/fonts/MaterialIcons-Regular.otf": "1288c9e28052e028aba623321f7826ac",
".git/logs/refs/remotes/origin/main": "01a1e5ac428a2b71f811c22f1be3256a",
".git/logs/refs/heads/main": "badaaf759f1d604242208f48ef852da6",
".git/logs/HEAD": "a1377e9770c57c77dd6fe74f223e2575",
".git/hooks/pre-commit.sample": "01b1688f97f94776baae85d77b06048b",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/update.sample": "517f14b9239689dff8bda3022ebd9004",
".git/hooks/pre-push.sample": "3c5989301dd4b949dfa1f43738a22819",
".git/hooks/fsmonitor-watchman.sample": "ecbb0cb5ffb7d773cd5b2407b210cc3b",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/COMMIT_EDITMSG": "aa1066d729fce2bb8798336cc1007bae",
".git/config": "bf0d71dc7a4c8bcc2f501deef1163c6d",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/objects/2d/2d24ed2b61a86f22d0850e9d63f9a2d588a3e9": "0d854cca5d62a659b17ccc31c454547c",
".git/objects/a8/3a17d54b6dc2156c855c6580301cefc9c8d017": "6525101be8d70b808a809af9c83fa4ad",
".git/objects/c8/b6d702561120cc3c32ca9252ff25b683d0ef53": "59095f2cd72bed17d4635d8776c7e460",
".git/objects/c8/c90b7c2c97e1f78ab3c09687d0d7f9a2a60cae": "4d51cc92b66c7944539ec97202c36527",
".git/objects/e9/b287d51513c8339080e21b1669b6023b7fa76a": "0c2fd3008184a5fd3c7fe7a5ee21ec5e",
".git/objects/9f/774418290547f591e67d9247680386e57f8919": "6caae1f6b776cea79a8c37a90aed53ea",
".git/objects/8c/1280ea7affe213ef956f5277ea2b716d748f3f": "ced86ff1c253c91766102edfecd52a7e",
".git/objects/f2/5787c93ad00665f0f797a43ab397f0628a273e": "59e425d1456034072d902c75d18ec75f",
".git/objects/79/ba7ea0836b93b3f178067bcd0a0945dbc26b3f": "f3e31aec622d6cf63f619aa3a6023103",
".git/objects/79/04e1b85bfaf6e3c0e55cb5c81718b25792ed4e": "d5d14a61b3fda0d88d0a42fff6a4e016",
".git/objects/ea/61a7faa2289deadd5d7cf7ce3ef05b95d2980b": "9a6ee4557a0a3fae7c89e2a08889bc8f",
".git/objects/70/fafe41fedcffa1bc17e84053c6ec67a87b4d87": "d1a00f1e25d22f07c18a3ec84aaf1501",
".git/objects/87/5dd9a62ac768a657268c3aa592f7504d67304c": "47315e5e4595fe602801e1a158b877de",
".git/objects/da/1c89201233d0c6227cd5215ac2f23d05d2aad3": "3a247f6c08fd7fcc8dec8272041a516e",
".git/objects/da/d58469714eef82cbfcc862f1d9616cd40dd12d": "13d0a12c45b414e097be5692fd8fd9ae",
".git/objects/b3/02c56b69818bc606f9a500d27758f0885e40f2": "ea3eb43fce3fc0d625fd060180707f74",
".git/objects/e5/951dfb943474a56e611d9923405cd06c2dd28d": "c6fa51103d8db5478e1a43a661f6c68d",
".git/objects/a0/96b6850a1d9ed43c0e5290849860db3747db5f": "5ea9c76da6a79ea94ce1269f2fb65f72",
".git/objects/f3/cce76986b19ebb90213a1a102cb749807ec213": "cd9b6fb9f96701dad265c0504dcd3df8",
".git/objects/d2/cd0387407acc970e5c4c0770529512f841b081": "2c73c3dac00a294a6d82bb1711136405",
".git/objects/33/1202735d0b578f9f41225505bb887e9f09b80d": "74769e10e122c86acea1adb8b5f1dc08",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/41/70c80006a353efa8082a85a7d4f1fa66d7c9b0": "c31a3bbfe70cd691c64523f829619522",
".git/objects/ab/ae7dafa07e96d292fa9eae02272ff4ea172724": "fedbefca22c06df8d24de95e20746e57",
".git/objects/ab/0e98497a51ead7821d1da35a24968ff314e50f": "557c35fe3928eb2af403d1b3926bb9ba",
".git/objects/c6/6b3ddd4454d2601a0e329e6e8886b7afbf47a8": "99cf2863c3328da50cf2e3e8847a6e36",
".git/objects/3b/3e3604c1aa6a0f2f6220159631f7c451f3c0d2": "9e3d10e4a22ad9f67083ba14d68c9916",
".git/objects/c4/a5b3f0aa130624c2bbf6f90e3b3084be3fbb76": "d2b8fda003bb92f0e8a4c05dd81b3ee6",
".git/objects/67/39b9269121239e518dc71e5bcd04fa2a56fbb6": "87fcd124a4e8418d4c2e7353316fc8fd",
".git/objects/3c/76a13062f88d05de2fedadb43eed61ab523cbf": "5280693ef598d495c758c8b64b8b46b6",
".git/objects/cc/5b157d4cd815527b43da176b3e519fd12a6484": "6a7a23b5ae2d74528df760995b4f8301",
".git/objects/07/96d8dca33a71e2ecc94664b86d20e5f5f43d4b": "dd51ee714c279e44f4f2410867470aa6",
".git/objects/a1/bdc1e83d3ce04ab03720c114f1c905c9f54b4e": "2cab3bde794afb2ab8c4e75ef4ce3b05",
".git/objects/a1/3837a12450aceaa5c8e807c32e781831d67a8f": "bfe4910ea01eb3d69e9520c3b42a0adf",
".git/objects/f5/bab0f445e79eb754aad76434e501ce28e5cad3": "dfc61fe21bad4f8b03a342dd18497484",
".git/objects/d9/4934d154ad997688c131b03c53748b6b2cd1a6": "4356611ab3cbfdb166274a3caad00626",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/23/cd3332132ca977ac497c70d6ee71c7db92a501": "909dcdd668600adefd8acc2479bd2f42",
".git/objects/06/9ed4bdb4e484d29b7c6c6cee00bd8b7773cc40": "a5edf4d0343d5157b315cd4d56435d5f",
".git/objects/d8/5662660bc1541716b4626db8bad66ebeb441e0": "218f6e9e73357e1999cb9fef37147aeb",
".git/objects/36/8468ce4b77fd44a05f3d43ab873215cb6ed9b1": "7ffde59841988d05b268c89ad032e584",
".git/objects/75/be2a2ca6fcf66ac6c6d64039e662ef1ff13a4e": "ed74a4517e8cd0084c385f6b7e921e46",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/59/dfff018f84c5e32739b3054a4e10f044307b12": "661fd0fd83ffc68b84cd5dc30738a770",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/4e/26ec98df911a2cba743dd2ecb6a4a639b38b54": "2d01109356d8389dfe099da2d4a43c48",
".git/objects/20/5bb5db271c6d8de8399864c7bb9b917f638893": "c993b22f115d7f3ae6d5b7b212806539",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/refs/remotes/origin/main": "b89edc35c1726307d7c3b7821382b4f8",
".git/refs/heads/main": "b89edc35c1726307d7c3b7821382b4f8",
".git/index": "fb2da6bc35b02519a8c4f54810fbac9f",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
"manifest.json": "b50a049fab4ff86d16b028e60c068853"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "/",
"main.dart.js",
"index.html",
"assets/NOTICES",
"assets/AssetManifest.json",
"assets/FontManifest.json"];
// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value + '?revision=' + RESOURCES[value], {'cache': 'reload'})));
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
        // lazily populate the cache.
        return response || fetch(event.request).then((response) => {
          cache.put(event.request, response.clone());
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
