'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "version.json": "fed2c0f3c45002d4290181eefb1810aa",
"index.html": "ddb6cd18b4f1b5082182e3442cadd254",
"/": "ddb6cd18b4f1b5082182e3442cadd254",
"main.dart.js": "0d8403aaa82436b8263290b341722d6c",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "b3c2b1e3f2d075cf88ff80605a8e68c4",
".git/config": "bbd0f0fc3faeab2050f0c92ac3df829f",
".git/objects/59/60d62548c802afb166ca6470057f9aef38551d": "3b20ac4abd27492e1c0e8079c029591d",
".git/objects/0c/7ff74d8e6c980d1ce4cf600cd3520431187a53": "df3e6dc8a72b77b539c3b1bfab1948ae",
".git/objects/3e/11dce0a88e64ce4adabade9895c712c7d5b79c": "52b9ffccecbb1786f62439cdab916b46",
".git/objects/51/15e1c76c410fe0a9d4b945039587d4438d54ed": "6e9cbaf8bbefedf0b5325089924a8409",
".git/objects/67/9b36c9e2295c635b5f67d0e60f10667baf77e0": "9525f15084561079f7073fee30d0d480",
".git/objects/05/b08d48aa59f24b775b56e1636aa8a95bddfbae": "8e7a513990699e60b5905a13ab654e3e",
".git/objects/d9/a2d3ae41b42640313515b4233ecab62b4e1e48": "a91cbb4be575ea409dfe4201ca1bbf7a",
".git/objects/d7/64c03ae31f087afe63a4250f81e0072e71f4d3": "adcd280e8ae740e41c81af0d99aa7651",
".git/objects/d0/4cee783fd5221ebc2ee355932d7c45c00d1da1": "209ac84d62ab106fb298f1652a51ecc9",
".git/objects/a5/ae5896ce8fbf80d5f6ff6bfe520b0970dc5689": "a6108f75470a66e8e2e8c2218b1cea29",
".git/objects/d1/ab72e8a53c5e654610501633935aeeee6efa9a": "32a52908290401f0e0855d2ea343137a",
".git/objects/d1/f5f25c519a754e0f11077f1dab9ba6b04e0dd8": "961e267fe74c0c24b72aac71f61491cf",
".git/objects/d1/ffb573f3b01b626e97267dccff30126f3d720a": "73ca00d182f30b4c326ae64e7c5336c8",
".git/objects/ab/0e98497a51ead7821d1da35a24968ff314e50f": "557c35fe3928eb2af403d1b3926bb9ba",
".git/objects/e5/951dfb943474a56e611d9923405cd06c2dd28d": "c6fa51103d8db5478e1a43a661f6c68d",
".git/objects/f2/5787c93ad00665f0f797a43ab397f0628a273e": "59e425d1456034072d902c75d18ec75f",
".git/objects/20/5bb5db271c6d8de8399864c7bb9b917f638893": "c993b22f115d7f3ae6d5b7b212806539",
".git/objects/18/a1b3870f8727d2f6d809d20095ae37451fdffc": "ed0482b2a5eb25a9e3191f5627c61dc9",
".git/objects/4b/45a3ab9e106b226f4c51d478b2dae5c85a3ec6": "9a3885931bb714254f72f3cff50d9db1",
".git/objects/4b/825dc642cb6eb9a060e54bf8d69288fbee4904": "75589287973d2772c2fc69d664e10822",
".git/objects/1f/f4fc2c2bebeda02ae362063418cc1179559921": "aa5e81ce6178adcd7c886258dff934c3",
".git/objects/87/b4bde9d85dcba47eb4550175ce124989917b18": "7e6a9bfed30b3c2c319b2ab90344f48c",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/7e/82fd61e8f275a7ca6f82884840f1a7335c86c3": "3aa710c6e1b1aaaa2e7f9ad5f14565b2",
".git/objects/19/1317293e2e981f3f257280b3180c776cb4cfea": "817422268994764ae990b13323800d82",
".git/objects/44/55ec37b383c4685cda0a1b83f318c5376f160a": "8e0746cffd127f17f06923e62399de3f",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/31/b9b3b8f20349317923fbbb190bd9d06496a390": "6cd7ceac45171f4e5375a0dfc7a3bb6d",
".git/objects/62/177a68c16d47d142ae4bf785568135f5e86f09": "e142545dbd0243eb841dafcc6b0caef3",
".git/objects/30/2179a46e082bd49282ec6fae38faefc8fe5192": "95e85961ad8ce9d750dd0dda53153764",
".git/objects/d4/564b5007b841614f43503bc5e0a83c1c3e81c9": "2e959264262803bcf89541d2573da86e",
".git/objects/a7/a83010cceda32806c1a0fabcfeb5123b44bb06": "fe2eddcdecac18fa7d81fba5c24b2671",
".git/objects/dd/863d4e0aeac44a0878bcf325a787774dcffe20": "bd007ad04f43bbb1891496fd1aa2f0ab",
".git/objects/af/3ef273842f0c8285b7b6073bd9f688e44199ad": "cd86e9cb7c8353dddfffdd7bd697287b",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/a8/3a17d54b6dc2156c855c6580301cefc9c8d017": "6525101be8d70b808a809af9c83fa4ad",
".git/objects/a1/3837a12450aceaa5c8e807c32e781831d67a8f": "bfe4910ea01eb3d69e9520c3b42a0adf",
".git/objects/ef/91838bf50eb730756ff16fb8745d1d25669e36": "76f843868dc2006090f6a03ce1893fcc",
".git/objects/f9/1465fb966b657d919f23ab30b00afbae9dc49b": "ac14f0766b9003786ad3f854a9139ecb",
".git/objects/e8/35068012679012e04395a9d9fa33c81e33bf1c": "fcb157b71fc2f10888267a91f2198273",
".git/objects/c2/1095c3d06f85892783da0387a037c048797ad7": "85b375a79d5259ef0c8e81bf6ab4b02a",
".git/objects/e9/0e4ad7471b38f6ad1d9368e9acfaacbfef6ce3": "a58a8977fdf00246914b28f722b1fb02",
".git/objects/cb/2ea6945e37a1a98b37b7b581c3739776b1493c": "a35deb3344e3349ca3947894dccf0cd8",
".git/objects/e0/dff7c1c1493087e21c712f0e2e094907e9e9f9": "2de8dbbeb926d24dcb23da58c8add5fa",
".git/objects/46/8b46bf652022f7d6f3d8cd2173e0d249931952": "c27b0be8115bea839d07497e01ba01ef",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/79/ba7ea0836b93b3f178067bcd0a0945dbc26b3f": "f3e31aec622d6cf63f619aa3a6023103",
".git/objects/2d/665c52d6ace47dd25512ab844229794c660da1": "c0fc14a172070c9f4cf38a04f5bf0e46",
".git/objects/40/7d6243550dc84638c3484d382592cbd99f9bc4": "69ca26e4de598a333efab386472f3c58",
".git/objects/2e/412a90cba07848dd2f94c5b37d97bc218703e7": "a9e72450d847552eb9431114b73dbb7b",
".git/objects/7f/237dc14639bf712f56d30c299694c1a1bc922d": "f03c76d14d953ac3c90556873ead3dcd",
".git/objects/7f/38e4d72db76ff227637eacc00ac067f99d8f07": "f50b92ab49bde29da29b51eb27a10ea9",
".git/HEAD": "4cf2d64e44205fe628ddd534e1151b58",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "2c44293d2192a754a1477c9ae509487a",
".git/logs/refs/heads/master": "2c44293d2192a754a1477c9ae509487a",
".git/logs/refs/remotes/origin/master": "02abec38e60d7d1102b91d379fb91ade",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/fsmonitor-watchman.sample": "ea587b0fae70333bce92257152996e70",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/refs/heads/master": "37f84cd588fe4811e5646e6398cb8c01",
".git/refs/remotes/origin/master": "37f84cd588fe4811e5646e6398cb8c01",
".git/index": "ecfcf91a0b14bf0e1d1f5018627a5758",
".git/COMMIT_EDITMSG": "a8297d555dd34879e8e48e1cf12acefa",
"assets/AssetManifest.json": "1e20a2eee62210db15e96e082fa0e809",
"assets/NOTICES": "df3dfcdeebd5321989c9ca698de3d9ee",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/lib/assets/pngs/developers_responsibilities.png": "f7e0beeebad7364b62ee5e8a3f593ee7",
"assets/lib/assets/pngs/work1bg_stars.jpg": "25268e777de6e39f5011f88e83252fed",
"assets/lib/assets/pngs/seo.png": "74425d3077c7db54cffa0a8963bbaae8",
"assets/lib/assets/pngs/skillset.png": "be1d57796e7e75b1cf760f5b9eff08b0",
"assets/lib/assets/pngs/web.png": "57723faf4e938fbb5d0fa379e51fea5f",
"assets/lib/assets/pngs/computer.png": "ef3be15d28a5752d477d900fee8e1906",
"assets/lib/assets/pngs/developer_softskills.png": "526bc4a9a2bd6b7f009b2fcd7a292aff",
"assets/lib/assets/pngs/socialMedia_pngs/spotify.png": "d9c5cea17095f83aacc662fefe6c062e",
"assets/lib/assets/pngs/socialMedia_pngs/linkedinIcon.png": "1faec980de2dc3f2693fe5d9d0aef8b3",
"assets/lib/assets/pngs/socialMedia_pngs/phoneIcon.png": "e3c7e865b81197c822bf03a6cb428c85",
"assets/lib/assets/pngs/socialMedia_pngs/instagramIcon.png": "cd8f75af30dae1deb48eb24f4230e3d2",
"assets/lib/assets/pngs/socialMedia_pngs/instagram.png": "08ba344d58a1ac46821556c7d93f655b",
"assets/lib/assets/pngs/socialMedia_pngs/behanceIcon.png": "43b24faf9d719c70111dfda3e536805b",
"assets/lib/assets/pngs/socialMedia_pngs/github.png": "5cb79cd43638a5e4b22caf2a8be07642",
"assets/lib/assets/pngs/socialMedia_pngs/telegramIcon.png": "ae828cc6fce77e6d92c6f5ea71f6b210",
"assets/lib/assets/pngs/socialMedia_pngs/behance.png": "7c83476f56512a1d2aa451cc6b7e9264",
"assets/lib/assets/pngs/socialMedia_pngs/twitterIcon.png": "1f7a880050f426a5e157bfa626b1f590",
"assets/lib/assets/pngs/socialMedia_pngs/twitter.png": "813617e9766ecb741f8b1f9246c936c9",
"assets/lib/assets/pngs/socialMedia_pngs/linkedin.png": "ba52b5b4ba09f4c0f398cbe2a5499b24",
"assets/lib/assets/pngs/socialMedia_pngs/dribbble.png": "b248a29404c2594713d412aeeadf1948",
"assets/lib/assets/pngs/socialMedia_pngs/youtube.png": "93786507543a81e03ec21bdf04fadbd8",
"assets/lib/assets/pngs/socialMedia_pngs/githubIcon.png": "4a1213483700446d82272fcc1bae15a4",
"assets/lib/assets/pngs/socialMedia_pngs/whatsapp.png": "d3703e6391ff3a44abcdf1470f9e89e9",
"assets/lib/assets/pngs/socialMedia_pngs/facebook.png": "7373c9691352b5c1ba5da3ed51b72e8c",
"assets/lib/assets/pngs/socialMedia_pngs/emailIcon.png": "e07919a49267ce25fff7ea7152255eac",
"assets/lib/assets/pngs/socialMedia_pngs/youtubeIcon.png": "2d3770705827c586822899c65163d19d",
"assets/lib/assets/pngs/coding.png": "013663a91e315505b72835c8c5ec3bab",
"assets/lib/assets/animations/18123-developer.json": "b6a331a54f98cd1745bd6a91a2541a48",
"assets/fonts/MaterialIcons-Regular.otf": "4e6447691c9509f7acdbf8a931a85ca1",
"assets/assets/images/myPortraits/portraitDistortion.png": "5614af9159377d815696876ca65c9a3f"
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
