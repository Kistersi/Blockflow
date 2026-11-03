const CACHE='blockflow-v60';
const APP_SHELL=[
 './',
 './index.html',
 './game.js',
 './manifest.webmanifest',
 './icon-192.png',
 './icon-512.png'
];

self.addEventListener('install',event=>{
 event.waitUntil(
  caches.open(CACHE)
   .then(cache=>cache.addAll(APP_SHELL))
   .then(()=>self.skipWaiting())
 );
});

self.addEventListener('activate',event=>{
 event.waitUntil(
  caches.keys()
   .then(keys=>Promise.all(keys.filter(key=>key!==CACHE).map(key=>caches.delete(key))))
   .then(()=>self.clients.claim())
 );
});

self.addEventListener('fetch',event=>{
 const request=event.request;
 if(request.method!=='GET')return;
 const url=new URL(request.url);
 if(url.origin!==self.location.origin)return;

 if(request.mode==='navigate'){
  event.respondWith(
   fetch(request)
    .then(response=>{
     if(response.ok){
      const copy=response.clone();
      caches.open(CACHE).then(cache=>cache.put('./index.html',copy));
     }
     return response;
    })
    .catch(async()=>{
     return (await caches.match(request,{ignoreSearch:true}))
       ||(await caches.match('./index.html'))
       ||Response.error();
    })
  );
  return;
 }

 event.respondWith(
  fetch(request)
   .then(response=>{
    if(response.ok){
     const copy=response.clone();
     caches.open(CACHE).then(cache=>cache.put(request,copy));
    }
    return response;
   })
   .catch(async()=>{
    return (await caches.match(request,{ignoreSearch:true}))
      ||Response.error();
   })
 );
});
