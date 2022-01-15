'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "version.json": "f4cca3947aca2f3719664385542a35b1",
"index.html": "312ab5b4f47853b3abcd68a03da3f7f0",
"/": "312ab5b4f47853b3abcd68a03da3f7f0",
"main.dart.js": "de19981d284c1102728d967be4203263",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "f06ac2b932cb357269216832b0dd448d",
"assets/AssetManifest.json": "0385fc4f60e2f534c7b44986f7f07e65",
"assets/NOTICES": "9d3ab2b304da35d6a101c091324d5018",
"assets/FontManifest.json": "3c6f2aec284ba6e927fd5e00fb6c4257",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/packages/iconsax/lib/assets/fonts/iconsax.ttf": "071d77779414a409552e0584dcbfd03d",
"assets/fonts/MaterialIcons-Regular.otf": "4e6447691c9509f7acdbf8a931a85ca1",
"assets/assets/thumbnail/thumbnail.jpeg": "20c48801002c852db0b48e059c62c448",
"assets/assets/video/teaser.mp4": "33f3c42eb756a3f32454340af7dc2037",
"assets/assets/images/web/top/dont_look_up.jpeg": "9b61d642a17226b96270a35f72300bae",
"assets/assets/images/web/top/mother_android.jpeg": "94b9a00756a0f20bad11dad2b2af1155",
"assets/assets/images/web/top/go_with_it.jpeg": "823174c49d11da84ac85348f92e471bb",
"assets/assets/images/web/top/journey_2.jpeg": "a2c09125857242fec4f0464fa72f7252",
"assets/assets/images/web/top/seal_team.jpeg": "9d2af8fca6853d395207d39fcd19e841",
"assets/assets/images/web/top/unforgivable.jpeg": "3b1acbf895f5754211dcbb38e792a85f",
"assets/assets/images/web/top/lost_daughter.jpeg": "2e6579a4449cfc6a9ae6f05de776f72c",
"assets/assets/images/web/top/red_notice.jpeg": "cca7ad3f05c1d8fc397f06dd89cc843d",
"assets/assets/images/web/top/longest_yard.jpeg": "66028c2d6f1965d8b1d44de9c11df497",
"assets/assets/images/web/top/back_outback.jpeg": "0ca8e76dec2e084a79d804a116039457",
"assets/assets/images/web/thirteen_reasons_why.jpeg": "4967e63bcce68d5549f0d5cb0566d555",
"assets/assets/images/web/stranger_things.jpeg": "6298c61a399f8dee058ef29889792f25",
"assets/assets/images/web/naruto.jpg": "333e55af00e26659e770c1abd4997830",
"assets/assets/images/web/daredevil.jpeg": "f21e6042200e8725307296ace08985de",
"assets/assets/images/web/spiderman_2.jpg": "ad81fb447a8c427761526ff15815b1a6",
"assets/assets/images/web/umbrella_academy.jpeg": "9bc8826c6d53b40ef17f2ba7b510c2c4",
"assets/assets/images/web/preview/breaking_bad_poster.jpeg": "9244cbfac50d0be5aabce2c05c825f63",
"assets/assets/images/web/preview/breaking_bad_title.png": "e67423f201dde6305d7d0d92e266b40e",
"assets/assets/images/web/witcher.jpeg": "1f5e40f2e7704a2e301246b6040869eb",
"assets/assets/images/web/suits.jpg": "c91e7337143ec4bedff8b7b2d2393b3b",
"assets/assets/images/web/teotfw.jpeg": "3d522653ad511cf6af7eb38371507c36",
"assets/assets/images/web/breaking_bad.jpg": "d4708a0a1670892020c72b72bc462d8f",
"assets/assets/images/mobile/top/dont_look_up.jpeg": "d6395267d363c1e9bb6345aeeab9176e",
"assets/assets/images/mobile/top/mother_android.jpeg": "1e352fe00955fd96a715e8c7a2e2bc12",
"assets/assets/images/mobile/top/go_with_it.jpeg": "c502afbeb2dd8c82ff868106d358de11",
"assets/assets/images/mobile/top/journey_2.jpeg": "03b4d05cbfd290184db6f0a0b20eb686",
"assets/assets/images/mobile/top/seal_team.jpeg": "ce098423557e5d4a84afccf852d9adc3",
"assets/assets/images/mobile/top/unforgivable.jpeg": "b7a594bfad2fe3c62d16061870a1c51f",
"assets/assets/images/mobile/top/lost_daughter.jpeg": "bc1488b3192bae71916ba5a83a906136",
"assets/assets/images/mobile/top/red_notice.jpeg": "c7b48c403fac5a8b3e760248bb975237",
"assets/assets/images/mobile/top/longest_yard.jpeg": "703d4c25917087eb2d1d707195db46b7",
"assets/assets/images/mobile/top/back_outback.jpeg": "4ccf50837d9d55418f3b8b3d4a6e751e",
"assets/assets/images/mobile/breaking_bad.jpeg": "7821e297df27197cdda67e13e82188b8",
"assets/assets/images/mobile/teotfw.jpg": "b1ad8119028caab99a82ae253eb2a8e5",
"assets/assets/images/mobile/daredevil.jpeg": "7f9a5064cccb9a83ff9b9076e147e46b",
"assets/assets/images/mobile/spiderman_2.jpeg": "f53ae4e62af34d07142bf4a45a55fbf6",
"assets/assets/images/mobile/witcher.jpg": "36d8eee67f80feedbf05534e642247ae",
"assets/assets/images/mobile/naruto.jpeg": "88c1881e6e04327a47fd3e6106e717b4",
"assets/assets/images/mobile/suits.jpeg": "4ba41b1ad88d96eae8c6f043b01f9a58",
"assets/assets/images/mobile/thirteen_reasons_why.jpg": "f3c6ba25dc548121333e15a5401b5bd2",
"assets/assets/images/mobile/umbrella_academy.jpg": "694538108dad1b7bbf145065d438f0d3",
"assets/assets/images/mobile/stranger_things.jpg": "45da3c11ae3d50a599d5a91663664d82",
"assets/assets/images/netflix_logo1.png": "451f1d563a05a249b69772cfbcc456e7",
"assets/assets/images/netflix_logo0.png": "90753a23d851213f214e1faccc4947cb",
"assets/assets/icons/8.png": "1ee7ed5ef9f76a420c11d584445f4686",
"assets/assets/icons/9.png": "ef57cd6a4c5fdc775cf477c6ff9b5124",
"assets/assets/icons/10.png": "d97177ee633766b0647801fdb01b4c04",
"assets/assets/icons/4.png": "4c8be34d40daee8e276fad28364bfaef",
"assets/assets/icons/5.png": "8b30568f8d7101c3f84f2ec9f9258c03",
"assets/assets/icons/7.png": "562adcc2aaf8bc3d5ae227171f7aabeb",
"assets/assets/icons/6.png": "2aefa942ddeba2c1f6326b4894e85ec3",
"assets/assets/icons/2.png": "81e956927e19ac3eb265c032d65a5e47",
"assets/assets/icons/3.png": "a0bf181dd796ec368b6ab165c9dd2c9d",
"assets/assets/icons/1.png": "1b59813ff4a9fda47ebb355b50b3a97d",
"canvaskit/canvaskit.js": "43fa9e17039a625450b6aba93baf521e",
"canvaskit/profiling/canvaskit.js": "f3bfccc993a1e0bfdd3440af60d99df4",
"canvaskit/profiling/canvaskit.wasm": "a9610cf39260f60fbe7524a785c66101",
"canvaskit/canvaskit.wasm": "04ed3c745ff1dee16504be01f9623498"
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
