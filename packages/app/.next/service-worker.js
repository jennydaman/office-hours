try{self["workbox:core:5.1.3"]&&_()}catch(e){}const e=(e,...t)=>{let s=e;return t.length>0&&(s+=" :: "+JSON.stringify(t)),s};class t extends Error{constructor(t,s){super(e(t,s)),this.name=t,this.details=s}}try{self["workbox:routing:5.1.3"]&&_()}catch(e){}const s=e=>e&&"object"==typeof e?e:{handle:e};class n{constructor(e,t,n="GET"){this.handler=s(t),this.match=e,this.method=n}}class a extends n{constructor(e,t,s){super(({url:t})=>{const s=e.exec(t.href);if(s&&(t.origin===location.origin||0===s.index))return s.slice(1)},t,s)}}const c=e=>new URL(String(e),location.href).href.replace(new RegExp("^"+location.origin),"");class i{constructor(){this.t=new Map}get routes(){return this.t}addFetchListener(){self.addEventListener("fetch",e=>{const{request:t}=e,s=this.handleRequest({request:t,event:e});s&&e.respondWith(s)})}addCacheListener(){self.addEventListener("message",e=>{if(e.data&&"CACHE_URLS"===e.data.type){const{payload:t}=e.data,s=Promise.all(t.urlsToCache.map(e=>{"string"==typeof e&&(e=[e]);const t=new Request(...e);return this.handleRequest({request:t})}));e.waitUntil(s),e.ports&&e.ports[0]&&s.then(()=>e.ports[0].postMessage(!0))}})}handleRequest({request:e,event:t}){const s=new URL(e.url,location.href);if(!s.protocol.startsWith("http"))return;const{params:n,route:a}=this.findMatchingRoute({url:s,request:e,event:t});let c,i=a&&a.handler;if(!i&&this.s&&(i=this.s),i){try{c=i.handle({url:s,request:e,event:t,params:n})}catch(e){c=Promise.reject(e)}return c instanceof Promise&&this.i&&(c=c.catch(n=>this.i.handle({url:s,request:e,event:t}))),c}}findMatchingRoute({url:e,request:t,event:s}){const n=this.t.get(t.method)||[];for(const a of n){let n;const c=a.match({url:e,request:t,event:s});if(c)return n=c,(Array.isArray(c)&&0===c.length||c.constructor===Object&&0===Object.keys(c).length||"boolean"==typeof c)&&(n=void 0),{route:a,params:n}}return{}}setDefaultHandler(e){this.s=s(e)}setCatchHandler(e){this.i=s(e)}registerRoute(e){this.t.has(e.method)||this.t.set(e.method,[]),this.t.get(e.method).push(e)}unregisterRoute(e){if(!this.t.has(e.method))throw new t("unregister-route-but-not-found-with-method",{method:e.method});const s=this.t.get(e.method).indexOf(e);if(!(s>-1))throw new t("unregister-route-route-not-registered");this.t.get(e.method).splice(s,1)}}let r;const o=()=>(r||(r=new i,r.addFetchListener(),r.addCacheListener()),r);const f={googleAnalytics:"googleAnalytics",precache:"precache-v2",prefix:"workbox",runtime:"runtime",suffix:"undefined"!=typeof registration?registration.scope:""},u=e=>[f.prefix,e,f.suffix].filter(e=>e&&e.length>0).join("-"),d=e=>e||u(f.precache),h=e=>e||u(f.runtime);function l(e){e.then(()=>{})}const b=new Set;class w{constructor(e,t,{onupgradeneeded:s,onversionchange:n}={}){this.o=null,this.u=e,this.h=t,this.l=s,this.p=n||(()=>this.close())}get db(){return this.o}async open(){if(!this.o)return this.o=await new Promise((e,t)=>{let s=!1;setTimeout(()=>{s=!0,t(new Error("The open request was blocked and timed out"))},this.OPEN_TIMEOUT);const n=indexedDB.open(this.u,this.h);n.onerror=()=>t(n.error),n.onupgradeneeded=e=>{s?(n.transaction.abort(),n.result.close()):"function"==typeof this.l&&this.l(e)},n.onsuccess=()=>{const t=n.result;s?t.close():(t.onversionchange=this.p.bind(this),e(t))}}),this}async getKey(e,t){return(await this.getAllKeys(e,t,1))[0]}async getAll(e,t,s){return await this.getAllMatching(e,{query:t,count:s})}async getAllKeys(e,t,s){return(await this.getAllMatching(e,{query:t,count:s,includeKeys:!0})).map(e=>e.key)}async getAllMatching(e,{index:t,query:s=null,direction:n="next",count:a,includeKeys:c=!1}={}){return await this.transaction([e],"readonly",(i,r)=>{const o=i.objectStore(e),f=t?o.index(t):o,u=[],d=f.openCursor(s,n);d.onsuccess=()=>{const e=d.result;e?(u.push(c?e:e.value),a&&u.length>=a?r(u):e.continue()):r(u)}})}async transaction(e,t,s){return await this.open(),await new Promise((n,a)=>{const c=this.o.transaction(e,t);c.onabort=()=>a(c.error),c.oncomplete=()=>n(),s(c,e=>n(e))})}async g(e,t,s,...n){return await this.transaction([t],s,(s,a)=>{const c=s.objectStore(t),i=c[e].apply(c,n);i.onsuccess=()=>a(i.result)})}close(){this.o&&(this.o.close(),this.o=null)}}w.prototype.OPEN_TIMEOUT=2e3;const p={readonly:["get","count","getKey","getAll","getAllKeys"],readwrite:["add","put","clear","delete"]};for(const[e,t]of Object.entries(p))for(const s of t)s in IDBObjectStore.prototype&&(w.prototype[s]=async function(t,...n){return await this.g(s,t,e,...n)});try{self["workbox:expiration:5.1.3"]&&_()}catch(e){}const y=e=>{const t=new URL(e,location.href);return t.hash="",t.href};class g{constructor(e){this.v=e,this.o=new w("workbox-expiration",1,{onupgradeneeded:e=>this.m(e)})}m(e){const t=e.target.result.createObjectStore("cache-entries",{keyPath:"id"});t.createIndex("cacheName","cacheName",{unique:!1}),t.createIndex("timestamp","timestamp",{unique:!1}),(async e=>{await new Promise((t,s)=>{const n=indexedDB.deleteDatabase(e);n.onerror=()=>{s(n.error)},n.onblocked=()=>{s(new Error("Delete blocked"))},n.onsuccess=()=>{t()}})})(this.v)}async setTimestamp(e,t){const s={url:e=y(e),timestamp:t,cacheName:this.v,id:this.q(e)};await this.o.put("cache-entries",s)}async getTimestamp(e){return(await this.o.get("cache-entries",this.q(e))).timestamp}async expireEntries(e,t){const s=await this.o.transaction("cache-entries","readwrite",(s,n)=>{const a=s.objectStore("cache-entries").index("timestamp").openCursor(null,"prev"),c=[];let i=0;a.onsuccess=()=>{const s=a.result;if(s){const n=s.value;n.cacheName===this.v&&(e&&n.timestamp<e||t&&i>=t?c.push(s.value):i++),s.continue()}else n(c)}}),n=[];for(const e of s)await this.o.delete("cache-entries",e.id),n.push(e.url);return n}q(e){return this.v+"|"+y(e)}}class v{constructor(e,t={}){this._=!1,this.j=!1,this.R=t.maxEntries,this.S=t.maxAgeSeconds,this.v=e,this.F=new g(e)}async expireEntries(){if(this._)return void(this.j=!0);this._=!0;const e=this.S?Date.now()-1e3*this.S:0,t=await this.F.expireEntries(e,this.R),s=await self.caches.open(this.v);for(const e of t)await s.delete(e);this._=!1,this.j&&(this.j=!1,l(this.expireEntries()))}async updateTimestamp(e){await this.F.setTimestamp(e,Date.now())}async isURLExpired(e){if(this.S){return await this.F.getTimestamp(e)<Date.now()-1e3*this.S}return!1}async delete(){this.j=!1,await this.F.expireEntries(1/0)}}const m=(e,t)=>e.filter(e=>t in e),x=async({request:e,mode:t,plugins:s=[]})=>{const n=m(s,"cacheKeyWillBeUsed");let a=e;for(const e of n)a=await e.cacheKeyWillBeUsed.call(e,{mode:t,request:a}),"string"==typeof a&&(a=new Request(a));return a},q=async({cacheName:e,request:t,event:s,matchOptions:n,plugins:a=[]})=>{const c=await self.caches.open(e),i=await x({plugins:a,request:t,mode:"read"});let r=await c.match(i,n);for(const t of a)if("cachedResponseWillBeUsed"in t){const a=t.cachedResponseWillBeUsed;r=await a.call(t,{cacheName:e,event:s,matchOptions:n,cachedResponse:r,request:i})}return r},j=async({cacheName:e,request:s,response:n,event:a,plugins:i=[],matchOptions:r})=>{const o=await x({plugins:i,request:s,mode:"write"});if(!n)throw new t("cache-put-with-no-response",{url:c(o.url)});const f=await(async({request:e,response:t,event:s,plugins:n=[]})=>{let a=t,c=!1;for(const t of n)if("cacheWillUpdate"in t){c=!0;const n=t.cacheWillUpdate;if(a=await n.call(t,{request:e,response:a,event:s}),!a)break}return c||(a=a&&200===a.status?a:void 0),a||null})({event:a,plugins:i,response:n,request:o});if(!f)return;const u=await self.caches.open(e),d=m(i,"cacheDidUpdate"),h=d.length>0?await q({cacheName:e,matchOptions:r,request:o}):null;try{await u.put(o,f)}catch(e){throw"QuotaExceededError"===e.name&&await async function(){for(const e of b)await e()}(),e}for(const t of d)await t.cacheDidUpdate.call(t,{cacheName:e,event:a,oldResponse:h,newResponse:f,request:o})},R=q,S=async({request:e,fetchOptions:s,event:n,plugins:a=[]})=>{if("string"==typeof e&&(e=new Request(e)),n instanceof FetchEvent&&n.preloadResponse){const e=await n.preloadResponse;if(e)return e}const c=m(a,"fetchDidFail"),i=c.length>0?e.clone():null;try{for(const t of a)if("requestWillFetch"in t){const s=t.requestWillFetch,a=e.clone();e=await s.call(t,{request:a,event:n})}}catch(e){throw new t("plugin-error-request-will-fetch",{thrownError:e})}const r=e.clone();try{let t;t="navigate"===e.mode?await fetch(e):await fetch(e,s);for(const e of a)"fetchDidSucceed"in e&&(t=await e.fetchDidSucceed.call(e,{event:n,request:r,response:t}));return t}catch(e){for(const t of c)await t.fetchDidFail.call(t,{error:e,event:n,originalRequest:i.clone(),request:r.clone()});throw e}};try{self["workbox:strategies:5.1.3"]&&_()}catch(e){}const F={cacheWillUpdate:async({response:e})=>200===e.status||0===e.status?e:null};let k;async function U(e,t){const s=e.clone(),n={headers:new Headers(s.headers),status:s.status,statusText:s.statusText},a=t?t(n):n,c=function(){if(void 0===k){const e=new Response("");if("body"in e)try{new Response(e.body),k=!0}catch(e){k=!1}k=!1}return k}()?s.body:await s.blob();return new Response(c,a)}try{self["workbox:precaching:5.1.3"]&&_()}catch(e){}function T(e){if(!e)throw new t("add-to-cache-list-unexpected-type",{entry:e});if("string"==typeof e){const t=new URL(e,location.href);return{cacheKey:t.href,url:t.href}}const{revision:s,url:n}=e;if(!n)throw new t("add-to-cache-list-unexpected-type",{entry:e});if(!s){const e=new URL(n,location.href);return{cacheKey:e.href,url:e.href}}const a=new URL(n,location.href),c=new URL(n,location.href);return a.searchParams.set("__WB_REVISION__",s),{cacheKey:a.href,url:c.href}}class L{constructor(e){this.v=d(e),this.k=new Map,this.U=new Map,this.T=new Map}addToCacheList(e){const s=[];for(const n of e){"string"==typeof n?s.push(n):n&&void 0===n.revision&&s.push(n.url);const{cacheKey:e,url:a}=T(n),c="string"!=typeof n&&n.revision?"reload":"default";if(this.k.has(a)&&this.k.get(a)!==e)throw new t("add-to-cache-list-conflicting-entries",{firstEntry:this.k.get(a),secondEntry:e});if("string"!=typeof n&&n.integrity){if(this.T.has(e)&&this.T.get(e)!==n.integrity)throw new t("add-to-cache-list-conflicting-integrities",{url:a});this.T.set(e,n.integrity)}if(this.k.set(a,e),this.U.set(a,c),s.length>0){const e=`Workbox is precaching URLs without revision info: ${s.join(", ")}\nThis is generally NOT safe. Learn more at https://bit.ly/wb-precache`;console.warn(e)}}}async install({event:e,plugins:t}={}){const s=[],n=[],a=await self.caches.open(this.v),c=await a.keys(),i=new Set(c.map(e=>e.url));for(const[e,t]of this.k)i.has(t)?n.push(e):s.push({cacheKey:t,url:e});const r=s.map(({cacheKey:s,url:n})=>{const a=this.T.get(s),c=this.U.get(n);return this.L({cacheKey:s,cacheMode:c,event:e,integrity:a,plugins:t,url:n})});await Promise.all(r);return{updatedURLs:s.map(e=>e.url),notUpdatedURLs:n}}async activate(){const e=await self.caches.open(this.v),t=await e.keys(),s=new Set(this.k.values()),n=[];for(const a of t)s.has(a.url)||(await e.delete(a),n.push(a.url));return{deletedURLs:n}}async L({cacheKey:e,url:s,cacheMode:n,event:a,plugins:c,integrity:i}){const r=new Request(s,{integrity:i,cache:n,credentials:"same-origin"});let o,f=await S({event:a,plugins:c,request:r});for(const e of c||[])"cacheWillUpdate"in e&&(o=e);if(!(o?await o.cacheWillUpdate({event:a,request:r,response:f}):f.status<400))throw new t("bad-precaching-response",{url:s,status:f.status});f.redirected&&(f=await U(f)),await j({event:a,plugins:c,response:f,request:e===s?r:new Request(e),cacheName:this.v,matchOptions:{ignoreSearch:!0}})}getURLsToCacheKeys(){return this.k}getCachedURLs(){return[...this.k.keys()]}getCacheKeyForURL(e){const t=new URL(e,location.href);return this.k.get(t.href)}async matchPrecache(e){const t=e instanceof Request?e.url:e,s=this.getCacheKeyForURL(t);if(s){return(await self.caches.open(this.v)).match(s)}}createHandler(e=!0){return async({request:s})=>{try{const e=await this.matchPrecache(s);if(e)return e;throw new t("missing-precache-entry",{cacheName:this.v,url:s instanceof Request?s.url:s})}catch(t){if(e)return fetch(s);throw t}}}createHandlerBoundToURL(e,s=!0){if(!this.getCacheKeyForURL(e))throw new t("non-precached-url",{url:e});const n=this.createHandler(s),a=new Request(e);return()=>n({request:a})}}let O;const D=()=>(O||(O=new L),O);const N=(e,t)=>{const s=D().getURLsToCacheKeys();for(const n of function*(e,{ignoreURLParametersMatching:t,directoryIndex:s,cleanURLs:n,urlManipulation:a}={}){const c=new URL(e,location.href);c.hash="",yield c.href;const i=function(e,t=[]){for(const s of[...e.searchParams.keys()])t.some(e=>e.test(s))&&e.searchParams.delete(s);return e}(c,t);if(yield i.href,s&&i.pathname.endsWith("/")){const e=new URL(i.href);e.pathname+=s,yield e.href}if(n){const e=new URL(i.href);e.pathname+=".html",yield e.href}if(a){const e=a({url:c});for(const t of e)yield t.href}}(e,t)){const e=s.get(n);if(e)return e}};let B=!1;function E(e){B||((({ignoreURLParametersMatching:e=[/^utm_/],directoryIndex:t="index.html",cleanURLs:s=!0,urlManipulation:n}={})=>{const a=d();self.addEventListener("fetch",c=>{const i=N(c.request.url,{cleanURLs:s,directoryIndex:t,ignoreURLParametersMatching:e,urlManipulation:n});if(!i)return;let r=self.caches.open(a).then(e=>e.match(i)).then(e=>e||fetch(i));c.respondWith(r)})})(e),B=!0)}const M=[],K={get:()=>M,add(e){M.push(...e)}},P=e=>{const t=D(),s=K.get();e.waitUntil(t.install({event:e,plugins:s}).catch(e=>{throw e}))},Y=e=>{const t=D();e.waitUntil(t.activate())};var Z;self.addEventListener("message",e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()}),Z={},function(e){D().addToCacheList(e),e.length>0&&(self.addEventListener("install",P),self.addEventListener("activate",Y))}([{url:"_next/static/chunks/03cce24c0e5dc99275de037de8a9483aea08af21.a1a95beefec169d7460d.js",revision:"55ef1039132a135575f5c67bfce1d4ae"},{url:"_next/static/chunks/11ba14184b3df632771bae5f1fd867b27325e5ab.9cdb943f907196f0f593.js",revision:"605ba940a20d5d533409eb4fff35a94b"},{url:"_next/static/chunks/1ca0a9b0d1a38d9757c57d68a026d19309227c24.bd31e55c6c37fe577647.js",revision:"3477e9cac97b98af2c99087e675a5031"},{url:"_next/static/chunks/1e48c5a55c00b1d7fa23cef7ebccfbc0a316a226.475aa6618c25f93d0df1.js",revision:"4efa0f428fd1424b2ca08aa5da081898"},{url:"_next/static/chunks/20e7ee06f794c7beccc18efb14e8d70a3e8f763f.82020d1b5340219a0212.js",revision:"5898b56aaaf8d8bb97ab691cf43d79c9"},{url:"_next/static/chunks/29107295.f04e89084195de630c04.js",revision:"96241ce4d40be90abbcba0c2d0319180"},{url:"_next/static/chunks/3c5ebf0167a04b603598ebf956ea6846e57564cc.03aa1d3cbadb43ffcbe8.js",revision:"19f418a1ba7e8ae080f3fba0d186e87c"},{url:"_next/static/chunks/3edfb48546073613fc51d9f749cb5a1d97609b22.96e54de04c15d71ed2ef.js",revision:"d8430d9d4dd32de676723f99f2f9201c"},{url:"_next/static/chunks/43.27f3bc2aff30a03d3c59.js",revision:"ed5685a21267d687cbd307f362f429e4"},{url:"_next/static/chunks/4b0f6d893dc7be07656aa213bcfa6c3fee6f5f71.23d51aface78fcc42c95.js",revision:"4bf34ebc5670074bbf75a5973264be5a"},{url:"_next/static/chunks/4e486bb87bc01d574f2d3b85d23855ba8ea18847.9ddb0fb7baed3d59d6e3.js",revision:"ec20ce5459be1abfbb04ec791be422b3"},{url:"_next/static/chunks/502e551e0fee55063d9b7b14699a82b1c689e0ac.e72d8341144a4f1b646c.js",revision:"e2b724e831378b196a35bd56cd708e99"},{url:"_next/static/chunks/548e89b5a7fd408289a0a4d9333135909d5ca560.c43266ddd0bf3153790b.js",revision:"45d0678bb539bc78fa1ebec0b7e9c14d"},{url:"_next/static/chunks/734791d48f9cbb531f94adb4bbeae2aa1e93e9f0.9708f84493aff45b242d.js",revision:"213fa23c4aae5dc08af11bf51a829866"},{url:"_next/static/chunks/73dc2780b2b4dfd65dd609df4bceee0ded0d3361.2af696ca5ad6db29a8ce.js",revision:"2f054cbb2f4a9bc89431708fd511fc1b"},{url:"_next/static/chunks/80f6620c640666d7b53a15e27d8cf5d925ef37c0.19d88a916c2ee9f60c9f.js",revision:"1732992c639aa7e856a12dd22b68c679"},{url:"_next/static/chunks/9d5eeb7b0d3c8df6087f1fa304e331d2893625e2.b866732210734c5fced8.js",revision:"c617f871bfa09af981e70ff3429753c9"},{url:"_next/static/chunks/a16f28ddb1441c2a79efaf946991d101ba2562c3.d4b52e1765bfafe724cd.js",revision:"9f17eac0c1832f919d249ac40af9dcc9"},{url:"_next/static/chunks/a29ae703.0a12156631b79073b1ae.js",revision:"ecacaa763d428e9e519cb65fbedd43e2"},{url:"_next/static/chunks/a953902e8e8a64a7e8804181d05293111b979f2c.14d6add48235ffcdb7fa.js",revision:"a272b33a11c4114614dda5a246306a0d"},{url:"_next/static/chunks/b8dccc64532be602e43d150cbc10ca33e1ab67a2.70a127893052814f2fe3.js",revision:"a793a8e490c11ef632f5880745ff79b5"},{url:"_next/static/chunks/c96b4d7e.b720d53f6f3a486c2eeb.js",revision:"f922772383c85d7ea812d2108c70beb7"},{url:"_next/static/chunks/commons.285ea2abcc99bc243d76.js",revision:"5f5a956775357376541a87e600edc665"},{url:"_next/static/chunks/e7b3cebbb1f9234132e2256a5eea45cc5d875ce0.2ca2b9f7e27bb333e674.js",revision:"1f34f609ee991d31f8e3e3e511369114"},{url:"_next/static/chunks/f5334d0c6f0dc45736522f2e2837e0ee6d0f38a0.b6a5dedb291557e7bf98.js",revision:"a21146142ec9b6408d2ef78455dcef75"},{url:"_next/static/chunks/fc8d00fd.fa9fcfd4da2f820ee427.js",revision:"dbb7edca6b05b0fadd49ddd9320b555d"},{url:"_next/static/chunks/framework.c06ceb3f90185a0b4876.js",revision:"768f6e3921275b08d5e9b59c13c72111"},{url:"_next/static/css/0b10e9f32b7d87c5b5ed.css",revision:"9b6bf2b0849057358aaaeb0dd19e37db"},{url:"_next/static/css/20de8917c44a516a459d.css",revision:"9a8cd95b5f951cd1c4dfc2843aaa0909"},{url:"_next/static/jyYg9BqST4FDnFOZrxSrl/_buildManifest.js",revision:"543f7725ddb8b8203e76bce09cdf3bff"},{url:"_next/static/jyYg9BqST4FDnFOZrxSrl/_ssgManifest.js",revision:"abee47769bf307639ace4945f9cfd4ff"},{url:"_next/static/jyYg9BqST4FDnFOZrxSrl/pages/_app.js",revision:"1c26919295b7ba2ccc59041165e30497"},{url:"_next/static/jyYg9BqST4FDnFOZrxSrl/pages/_error.js",revision:"deaaf37cf1654301b5eb7c1daa4700bd"},{url:"_next/static/jyYg9BqST4FDnFOZrxSrl/pages/about.js",revision:"db486147b8e7f53c7a5871842e53ee56"},{url:"_next/static/jyYg9BqST4FDnFOZrxSrl/pages/apply.js",revision:"6a387dfa184a2020d945dee1a32a8c65"},{url:"_next/static/jyYg9BqST4FDnFOZrxSrl/pages/course/[cid]/course_admin_panel.js",revision:"05eb219966e0ebbb0492ce5b73629586"},{url:"_next/static/jyYg9BqST4FDnFOZrxSrl/pages/course/[cid]/insights.js",revision:"c0f539a000226136aa547b46147fc37d"},{url:"_next/static/jyYg9BqST4FDnFOZrxSrl/pages/course/[cid]/queue/[qid].js",revision:"b4c9bde76466d17414042226f84d2615"},{url:"_next/static/jyYg9BqST4FDnFOZrxSrl/pages/course/[cid]/schedule.js",revision:"3ee66f3e0675aa79a5a4812f158cb5c0"},{url:"_next/static/jyYg9BqST4FDnFOZrxSrl/pages/course/[cid]/today.js",revision:"0d66ecd898fab7842605a4fa583c8b47"},{url:"_next/static/jyYg9BqST4FDnFOZrxSrl/pages/dev.js",revision:"eb74cadef1931f47aa597275ca2a12ab"},{url:"_next/static/jyYg9BqST4FDnFOZrxSrl/pages/index.js",revision:"f2d9e7dc8f66c39bd6c97bdf6d410fcb"},{url:"_next/static/jyYg9BqST4FDnFOZrxSrl/pages/login.js",revision:"0af039dac28c5a03bd9ab2eace271336"},{url:"_next/static/jyYg9BqST4FDnFOZrxSrl/pages/nocourses.js",revision:"799cd2a5c07d6ad9ce0ce46bbe26b2fb"},{url:"_next/static/jyYg9BqST4FDnFOZrxSrl/pages/settings.js",revision:"bbd8b13761ae4bf56127328790d4eccd"},{url:"_next/static/runtime/main-b1b4712e33b9ff7044eb.js",revision:"093d7fd2cf995224675c4fa4c23bf1e3"},{url:"_next/static/runtime/polyfills-bf92a078ca839563e521.js",revision:"7e419fe263cbbf4b98792e68b2116ae6"},{url:"_next/static/runtime/webpack-e55fc2d365506f448fa9.js",revision:"4745b21fbb5809efe46937e00a968b47"}]),E(Z),function(e,s,c){let i;if("string"==typeof e){const t=new URL(e,location.href);i=new n(({url:e})=>e.href===t.href,s,c)}else if(e instanceof RegExp)i=new a(e,s,c);else if("function"==typeof e)i=new n(e,s,c);else{if(!(e instanceof n))throw new t("unsupported-route-type",{moduleName:"workbox-routing",funcName:"registerRoute",paramName:"capture"});i=e}o().registerRoute(i)}(/^https?.*/,new class{constructor(e={}){if(this.v=h(e.cacheName),e.plugins){const t=e.plugins.some(e=>!!e.cacheWillUpdate);this.O=t?e.plugins:[F,...e.plugins]}else this.O=[F];this.D=e.networkTimeoutSeconds||0,this.N=e.fetchOptions,this.B=e.matchOptions}async handle({event:e,request:s}){const n=[];"string"==typeof s&&(s=new Request(s));const a=[];let c;if(this.D){const{id:t,promise:i}=this.M({request:s,event:e,logs:n});c=t,a.push(i)}const i=this.K({timeoutId:c,request:s,event:e,logs:n});a.push(i);let r=await Promise.race(a);if(r||(r=await i),!r)throw new t("no-response",{url:s.url});return r}M({request:e,logs:t,event:s}){let n;return{promise:new Promise(t=>{n=setTimeout(async()=>{t(await this.P({request:e,event:s}))},1e3*this.D)}),id:n}}async K({timeoutId:e,request:t,logs:s,event:n}){let a,c;try{c=await S({request:t,event:n,fetchOptions:this.N,plugins:this.O})}catch(e){a=e}if(e&&clearTimeout(e),a||!c)c=await this.P({request:t,event:n});else{const e=c.clone(),s=j({cacheName:this.v,request:t,response:e,event:n,plugins:this.O});if(n)try{n.waitUntil(s)}catch(e){}}return c}P({event:e,request:t}){return R({cacheName:this.v,request:t,event:e,matchOptions:this.B,plugins:this.O})}}({cacheName:"offlineCache",plugins:[new class{constructor(e={}){var t;this.cachedResponseWillBeUsed=async({event:e,request:t,cacheName:s,cachedResponse:n})=>{if(!n)return null;const a=this.Y(n),c=this.Z(s);l(c.expireEntries());const i=c.updateTimestamp(t.url);if(e)try{e.waitUntil(i)}catch(e){}return a?n:null},this.cacheDidUpdate=async({cacheName:e,request:t})=>{const s=this.Z(e);await s.updateTimestamp(t.url),await s.expireEntries()},this.C=e,this.S=e.maxAgeSeconds,this.I=new Map,e.purgeOnQuotaError&&(t=()=>this.deleteCacheAndMetadata(),b.add(t))}Z(e){if(e===h())throw new t("expire-custom-caches-only");let s=this.I.get(e);return s||(s=new v(e,this.C),this.I.set(e,s)),s}Y(e){if(!this.S)return!0;const t=this.A(e);if(null===t)return!0;return t>=Date.now()-1e3*this.S}A(e){if(!e.headers.has("date"))return null;const t=e.headers.get("date"),s=new Date(t).getTime();return isNaN(s)?null:s}async deleteCacheAndMetadata(){for(const[e,t]of this.I)await self.caches.delete(e),await t.delete();this.I=new Map}}({maxEntries:200,purgeOnQuotaError:!0})]}),"GET");
//# sourceMappingURL=service-worker.js.map
