const CACHE='blockflow-v28';
const FILES=['./','./index.html','./game.js','./manifest.webmanifest','./icon-192.png','./icon-512.png'];
self.addEventListener('install',e=>e.waitUntil(caches.open(CACHE).then(c=>c.addAll(FILES))));
self.addEventListener('activate',e=>e.waitUntil(caches.keys().then(keys=>Promise.all(keys.filter(k=>k!==CACHE).map(k=>caches.delete(k))))));
self.addEventListener('fetch',e=>{
 if(e.request.method!=='GET')return;
 const url=new URL(e.request.url);
 const fresh=url.pathname.endsWith('/index.html')||url.pathname.endsWith('/game.js')||e.request.mode==='navigate';
 if(fresh){
  e.respondWith(fetch(e.request,{cache:'no-store'}).then(res=>{
   if(res.ok){const copy=res.clone();caches.open(CACHE).then(c=>c.put(e.request,copy))}
   return res;
  }).catch(()=>caches.match(e.request).then(hit=>hit||caches.match('./index.html'))));
  return;
 }
 e.respondWith(caches.match(e.request).then(hit=>hit||fetch(e.request).then(res=>{
  const copy=res.clone();caches.open(CACHE).then(c=>c.put(e.request,copy));return res;
 }).catch(()=>caches.match('./index.html'))));
});