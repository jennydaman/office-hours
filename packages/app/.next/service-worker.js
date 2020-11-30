try{self["workbox:core:5.1.3"]&&_()}catch(e){}const e=(e,...t)=>{let s=e;return t.length>0&&(s+=" :: "+JSON.stringify(t)),s};class t extends Error{constructor(t,s){super(e(t,s)),this.name=t,this.details=s}}try{self["workbox:routing:5.1.3"]&&_()}catch(e){}const s=e=>e&&"object"==typeof e?e:{handle:e};class n{constructor(e,t,n="GET"){this.handler=s(t),this.match=e,this.method=n}}class i extends n{constructor(e,t,s){super(({url:t})=>{const s=e.exec(t.href);if(s&&(t.origin===location.origin||0===s.index))return s.slice(1)},t,s)}}const c=e=>new URL(String(e),location.href).href.replace(new RegExp("^"+location.origin),"");class a{constructor(){this.t=new Map}get routes(){return this.t}addFetchListener(){self.addEventListener("fetch",e=>{const{request:t}=e,s=this.handleRequest({request:t,event:e});s&&e.respondWith(s)})}addCacheListener(){self.addEventListener("message",e=>{if(e.data&&"CACHE_URLS"===e.data.type){const{payload:t}=e.data,s=Promise.all(t.urlsToCache.map(e=>{"string"==typeof e&&(e=[e]);const t=new Request(...e);return this.handleRequest({request:t})}));e.waitUntil(s),e.ports&&e.ports[0]&&s.then(()=>e.ports[0].postMessage(!0))}})}handleRequest({request:e,event:t}){const s=new URL(e.url,location.href);if(!s.protocol.startsWith("http"))return;const{params:n,route:i}=this.findMatchingRoute({url:s,request:e,event:t});let c,a=i&&i.handler;if(!a&&this.s&&(a=this.s),a){try{c=a.handle({url:s,request:e,event:t,params:n})}catch(e){c=Promise.reject(e)}return c instanceof Promise&&this.i&&(c=c.catch(n=>this.i.handle({url:s,request:e,event:t}))),c}}findMatchingRoute({url:e,request:t,event:s}){const n=this.t.get(t.method)||[];for(const i of n){let n;const c=i.match({url:e,request:t,event:s});if(c)return n=c,(Array.isArray(c)&&0===c.length||c.constructor===Object&&0===Object.keys(c).length||"boolean"==typeof c)&&(n=void 0),{route:i,params:n}}return{}}setDefaultHandler(e){this.s=s(e)}setCatchHandler(e){this.i=s(e)}registerRoute(e){this.t.has(e.method)||this.t.set(e.method,[]),this.t.get(e.method).push(e)}unregisterRoute(e){if(!this.t.has(e.method))throw new t("unregister-route-but-not-found-with-method",{method:e.method});const s=this.t.get(e.method).indexOf(e);if(!(s>-1))throw new t("unregister-route-route-not-registered");this.t.get(e.method).splice(s,1)}}let r;const o=()=>(r||(r=new a,r.addFetchListener(),r.addCacheListener()),r);const u={googleAnalytics:"googleAnalytics",precache:"precache-v2",prefix:"workbox",runtime:"runtime",suffix:"undefined"!=typeof registration?registration.scope:""},f=e=>[u.prefix,e,u.suffix].filter(e=>e&&e.length>0).join("-"),h=e=>e||f(u.precache),l=e=>e||f(u.runtime);function d(e){e.then(()=>{})}const b=new Set;class w{constructor(e,t,{onupgradeneeded:s,onversionchange:n}={}){this.o=null,this.u=e,this.h=t,this.l=s,this.p=n||(()=>this.close())}get db(){return this.o}async open(){if(!this.o)return this.o=await new Promise((e,t)=>{let s=!1;setTimeout(()=>{s=!0,t(new Error("The open request was blocked and timed out"))},this.OPEN_TIMEOUT);const n=indexedDB.open(this.u,this.h);n.onerror=()=>t(n.error),n.onupgradeneeded=e=>{s?(n.transaction.abort(),n.result.close()):"function"==typeof this.l&&this.l(e)},n.onsuccess=()=>{const t=n.result;s?t.close():(t.onversionchange=this.p.bind(this),e(t))}}),this}async getKey(e,t){return(await this.getAllKeys(e,t,1))[0]}async getAll(e,t,s){return await this.getAllMatching(e,{query:t,count:s})}async getAllKeys(e,t,s){return(await this.getAllMatching(e,{query:t,count:s,includeKeys:!0})).map(e=>e.key)}async getAllMatching(e,{index:t,query:s=null,direction:n="next",count:i,includeKeys:c=!1}={}){return await this.transaction([e],"readonly",(a,r)=>{const o=a.objectStore(e),u=t?o.index(t):o,f=[],h=u.openCursor(s,n);h.onsuccess=()=>{const e=h.result;e?(f.push(c?e:e.value),i&&f.length>=i?r(f):e.continue()):r(f)}})}async transaction(e,t,s){return await this.open(),await new Promise((n,i)=>{const c=this.o.transaction(e,t);c.onabort=()=>i(c.error),c.oncomplete=()=>n(),s(c,e=>n(e))})}async g(e,t,s,...n){return await this.transaction([t],s,(s,i)=>{const c=s.objectStore(t),a=c[e].apply(c,n);a.onsuccess=()=>i(a.result)})}close(){this.o&&(this.o.close(),this.o=null)}}w.prototype.OPEN_TIMEOUT=2e3;const p={readonly:["get","count","getKey","getAll","getAllKeys"],readwrite:["add","put","clear","delete"]};for(const[e,t]of Object.entries(p))for(const s of t)s in IDBObjectStore.prototype&&(w.prototype[s]=async function(t,...n){return await this.g(s,t,e,...n)});try{self["workbox:expiration:5.1.3"]&&_()}catch(e){}const y=e=>{const t=new URL(e,location.href);return t.hash="",t.href};class g{constructor(e){this.m=e,this.o=new w("workbox-expiration",1,{onupgradeneeded:e=>this.v(e)})}v(e){const t=e.target.result.createObjectStore("cache-entries",{keyPath:"id"});t.createIndex("cacheName","cacheName",{unique:!1}),t.createIndex("timestamp","timestamp",{unique:!1}),(async e=>{await new Promise((t,s)=>{const n=indexedDB.deleteDatabase(e);n.onerror=()=>{s(n.error)},n.onblocked=()=>{s(new Error("Delete blocked"))},n.onsuccess=()=>{t()}})})(this.m)}async setTimestamp(e,t){const s={url:e=y(e),timestamp:t,cacheName:this.m,id:this.q(e)};await this.o.put("cache-entries",s)}async getTimestamp(e){return(await this.o.get("cache-entries",this.q(e))).timestamp}async expireEntries(e,t){const s=await this.o.transaction("cache-entries","readwrite",(s,n)=>{const i=s.objectStore("cache-entries").index("timestamp").openCursor(null,"prev"),c=[];let a=0;i.onsuccess=()=>{const s=i.result;if(s){const n=s.value;n.cacheName===this.m&&(e&&n.timestamp<e||t&&a>=t?c.push(s.value):a++),s.continue()}else n(c)}}),n=[];for(const e of s)await this.o.delete("cache-entries",e.id),n.push(e.url);return n}q(e){return this.m+"|"+y(e)}}class m{constructor(e,t={}){this._=!1,this.R=!1,this.L=t.maxEntries,this.j=t.maxAgeSeconds,this.m=e,this.U=new g(e)}async expireEntries(){if(this._)return void(this.R=!0);this._=!0;const e=this.j?Date.now()-1e3*this.j:0,t=await this.U.expireEntries(e,this.L),s=await self.caches.open(this.m);for(const e of t)await s.delete(e);this._=!1,this.R&&(this.R=!1,d(this.expireEntries()))}async updateTimestamp(e){await this.U.setTimestamp(e,Date.now())}async isURLExpired(e){if(this.j){return await this.U.getTimestamp(e)<Date.now()-1e3*this.j}return!1}async delete(){this.R=!1,await this.U.expireEntries(1/0)}}const v=(e,t)=>e.filter(e=>t in e),x=async({request:e,mode:t,plugins:s=[]})=>{const n=v(s,"cacheKeyWillBeUsed");let i=e;for(const e of n)i=await e.cacheKeyWillBeUsed.call(e,{mode:t,request:i}),"string"==typeof i&&(i=new Request(i));return i},q=async({cacheName:e,request:t,event:s,matchOptions:n,plugins:i=[]})=>{const c=await self.caches.open(e),a=await x({plugins:i,request:t,mode:"read"});let r=await c.match(a,n);for(const t of i)if("cachedResponseWillBeUsed"in t){const i=t.cachedResponseWillBeUsed;r=await i.call(t,{cacheName:e,event:s,matchOptions:n,cachedResponse:r,request:a})}return r},R=async({cacheName:e,request:s,response:n,event:i,plugins:a=[],matchOptions:r})=>{const o=await x({plugins:a,request:s,mode:"write"});if(!n)throw new t("cache-put-with-no-response",{url:c(o.url)});const u=await(async({request:e,response:t,event:s,plugins:n=[]})=>{let i=t,c=!1;for(const t of n)if("cacheWillUpdate"in t){c=!0;const n=t.cacheWillUpdate;if(i=await n.call(t,{request:e,response:i,event:s}),!i)break}return c||(i=i&&200===i.status?i:void 0),i||null})({event:i,plugins:a,response:n,request:o});if(!u)return;const f=await self.caches.open(e),h=v(a,"cacheDidUpdate"),l=h.length>0?await q({cacheName:e,matchOptions:r,request:o}):null;try{await f.put(o,u)}catch(e){throw"QuotaExceededError"===e.name&&await async function(){for(const e of b)await e()}(),e}for(const t of h)await t.cacheDidUpdate.call(t,{cacheName:e,event:i,oldResponse:l,newResponse:u,request:o})},L=q,j=async({request:e,fetchOptions:s,event:n,plugins:i=[]})=>{if("string"==typeof e&&(e=new Request(e)),n instanceof FetchEvent&&n.preloadResponse){const e=await n.preloadResponse;if(e)return e}const c=v(i,"fetchDidFail"),a=c.length>0?e.clone():null;try{for(const t of i)if("requestWillFetch"in t){const s=t.requestWillFetch,i=e.clone();e=await s.call(t,{request:i,event:n})}}catch(e){throw new t("plugin-error-request-will-fetch",{thrownError:e})}const r=e.clone();try{let t;t="navigate"===e.mode?await fetch(e):await fetch(e,s);for(const e of i)"fetchDidSucceed"in e&&(t=await e.fetchDidSucceed.call(e,{event:n,request:r,response:t}));return t}catch(e){for(const t of c)await t.fetchDidFail.call(t,{error:e,event:n,originalRequest:a.clone(),request:r.clone()});throw e}};try{self["workbox:strategies:5.1.3"]&&_()}catch(e){}const U={cacheWillUpdate:async({response:e})=>200===e.status||0===e.status?e:null};let k;async function P(e,t){const s=e.clone(),n={headers:new Headers(s.headers),status:s.status,statusText:s.statusText},i=t?t(n):n,c=function(){if(void 0===k){const e=new Response("");if("body"in e)try{new Response(e.body),k=!0}catch(e){k=!1}k=!1}return k}()?s.body:await s.blob();return new Response(c,i)}try{self["workbox:precaching:5.1.3"]&&_()}catch(e){}function O(e){if(!e)throw new t("add-to-cache-list-unexpected-type",{entry:e});if("string"==typeof e){const t=new URL(e,location.href);return{cacheKey:t.href,url:t.href}}const{revision:s,url:n}=e;if(!n)throw new t("add-to-cache-list-unexpected-type",{entry:e});if(!s){const e=new URL(n,location.href);return{cacheKey:e.href,url:e.href}}const i=new URL(n,location.href),c=new URL(n,location.href);return i.searchParams.set("__WB_REVISION__",s),{cacheKey:i.href,url:c.href}}class N{constructor(e){this.m=h(e),this.k=new Map,this.P=new Map,this.O=new Map}addToCacheList(e){const s=[];for(const n of e){"string"==typeof n?s.push(n):n&&void 0===n.revision&&s.push(n.url);const{cacheKey:e,url:i}=O(n),c="string"!=typeof n&&n.revision?"reload":"default";if(this.k.has(i)&&this.k.get(i)!==e)throw new t("add-to-cache-list-conflicting-entries",{firstEntry:this.k.get(i),secondEntry:e});if("string"!=typeof n&&n.integrity){if(this.O.has(e)&&this.O.get(e)!==n.integrity)throw new t("add-to-cache-list-conflicting-integrities",{url:i});this.O.set(e,n.integrity)}if(this.k.set(i,e),this.P.set(i,c),s.length>0){const e=`Workbox is precaching URLs without revision info: ${s.join(", ")}\nThis is generally NOT safe. Learn more at https://bit.ly/wb-precache`;console.warn(e)}}}async install({event:e,plugins:t}={}){const s=[],n=[],i=await self.caches.open(this.m),c=await i.keys(),a=new Set(c.map(e=>e.url));for(const[e,t]of this.k)a.has(t)?n.push(e):s.push({cacheKey:t,url:e});const r=s.map(({cacheKey:s,url:n})=>{const i=this.O.get(s),c=this.P.get(n);return this.N({cacheKey:s,cacheMode:c,event:e,integrity:i,plugins:t,url:n})});await Promise.all(r);return{updatedURLs:s.map(e=>e.url),notUpdatedURLs:n}}async activate(){const e=await self.caches.open(this.m),t=await e.keys(),s=new Set(this.k.values()),n=[];for(const i of t)s.has(i.url)||(await e.delete(i),n.push(i.url));return{deletedURLs:n}}async N({cacheKey:e,url:s,cacheMode:n,event:i,plugins:c,integrity:a}){const r=new Request(s,{integrity:a,cache:n,credentials:"same-origin"});let o,u=await j({event:i,plugins:c,request:r});for(const e of c||[])"cacheWillUpdate"in e&&(o=e);if(!(o?await o.cacheWillUpdate({event:i,request:r,response:u}):u.status<400))throw new t("bad-precaching-response",{url:s,status:u.status});u.redirected&&(u=await P(u)),await R({event:i,plugins:c,response:u,request:e===s?r:new Request(e),cacheName:this.m,matchOptions:{ignoreSearch:!0}})}getURLsToCacheKeys(){return this.k}getCachedURLs(){return[...this.k.keys()]}getCacheKeyForURL(e){const t=new URL(e,location.href);return this.k.get(t.href)}async matchPrecache(e){const t=e instanceof Request?e.url:e,s=this.getCacheKeyForURL(t);if(s){return(await self.caches.open(this.m)).match(s)}}createHandler(e=!0){return async({request:s})=>{try{const e=await this.matchPrecache(s);if(e)return e;throw new t("missing-precache-entry",{cacheName:this.m,url:s instanceof Request?s.url:s})}catch(t){if(e)return fetch(s);throw t}}}createHandlerBoundToURL(e,s=!0){if(!this.getCacheKeyForURL(e))throw new t("non-precached-url",{url:e});const n=this.createHandler(s),i=new Request(e);return()=>n({request:i})}}let I;const S=()=>(I||(I=new N),I);const E=(e,t)=>{const s=S().getURLsToCacheKeys();for(const n of function*(e,{ignoreURLParametersMatching:t,directoryIndex:s,cleanURLs:n,urlManipulation:i}={}){const c=new URL(e,location.href);c.hash="",yield c.href;const a=function(e,t=[]){for(const s of[...e.searchParams.keys()])t.some(e=>e.test(s))&&e.searchParams.delete(s);return e}(c,t);if(yield a.href,s&&a.pathname.endsWith("/")){const e=new URL(a.href);e.pathname+=s,yield e.href}if(n){const e=new URL(a.href);e.pathname+=".html",yield e.href}if(i){const e=i({url:c});for(const t of e)yield t.href}}(e,t)){const e=s.get(n);if(e)return e}};let F=!1;function M(e){F||((({ignoreURLParametersMatching:e=[/^utm_/],directoryIndex:t="index.html",cleanURLs:s=!0,urlManipulation:n}={})=>{const i=h();self.addEventListener("fetch",c=>{const a=E(c.request.url,{cleanURLs:s,directoryIndex:t,ignoreURLParametersMatching:e,urlManipulation:n});if(!a)return;let r=self.caches.open(i).then(e=>e.match(a)).then(e=>e||fetch(a));c.respondWith(r)})})(e),F=!0)}const T=[],K={get:()=>T,add(e){T.push(...e)}},D=e=>{const t=S(),s=K.get();e.waitUntil(t.install({event:e,plugins:s}).catch(e=>{throw e}))},G=e=>{const t=S();e.waitUntil(t.activate())};var C;self.addEventListener("message",e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()}),C={},function(e){S().addToCacheList(e),e.length>0&&(self.addEventListener("install",D),self.addEventListener("activate",G))}([{url:"_next/static/chunks/09d2a2e778bfa7bb62e236a6f2175a3a1fe5477f.475aa6618c25f93d0df1.js",revision:"2f968d6e0f2ee3fed9156d5fe58a3379"},{url:"_next/static/chunks/0fadeb5f6ed2b417a203f640f92f252187e0bb53.d3685a3dadb3b9f7d917.js",revision:"1ccdb8cec39df2185d43f6bfe53025bd"},{url:"_next/static/chunks/2edb282b.ace2fc975cef5af76c8c.js",revision:"2d9aa03e3627237b52650bfbb08fad2a"},{url:"_next/static/chunks/57f16864a2ca626932ab1ee9c6115e4a309e4b84.c12bd4c058d808ecce7b.js",revision:"0bca7b92aa6314ebfeb1afb2d71a5b18"},{url:"_next/static/chunks/62e92f530f440aa28f772b8ec5b76d546d1c032e.b830ad549fd7879f40e8.js",revision:"d6871b873afd10cdc8b465411fbd4539"},{url:"_next/static/chunks/69514242d0d082013eceac2c88f7cfa032f1cb99.04e52eae15f25a31aa27.js",revision:"7cb59b1131eadb2fef7474fa890c6582"},{url:"_next/static/chunks/6e0ea195c8e807f318b82ca601c300ef539b200c.27dfcf84c049b14def4d.js",revision:"5410ed44b829bf9984bf35952276749b"},{url:"_next/static/chunks/862fb6e09208c4710e221bd45d5cf52bf163c67a.772f35a82498f7b19b0c.js",revision:"df11bbe0a48f5a5825a3a3dbbf776442"},{url:"_next/static/chunks/91a446f7b04752ce4cee6a6ea4677d17515ac498.12bbec4d2bb58a6e6f5b.js",revision:"bebd8fa5e7a773725dbadf74e11274c8"},{url:"_next/static/chunks/a29ae703.e46ddb4ba441d9ff26ee.js",revision:"7f317ac5f099cb613d85015f402535cc"},{url:"_next/static/chunks/adc71121665483b386247484958b99199a1ef73e.67cd6e3185989a6ca077.js",revision:"71bb4b3bced53d84f4e765e2eda50e6c"},{url:"_next/static/chunks/be9e150adc42d5c6af1fb9f5fcf6f59e3700fe4c.9708f84493aff45b242d.js",revision:"f98dd7474425078823604b020d5991b8"},{url:"_next/static/chunks/bfc301cb9872d40993c5beca31c311ae13a831e9.61a34146b0f31be98a9b.js",revision:"77995a8660978ad7b3db44c41a0580c3"},{url:"_next/static/chunks/c96b4d7e.27fa719770faefd04467.js",revision:"dde108a23977804cd02adb08e870f0a9"},{url:"_next/static/chunks/commons.d207e9baa9df58f53439.js",revision:"eae6bdefc4b4c1bad3f734dc3193e3b1"},{url:"_next/static/chunks/f53180a283686c2a4761061e9f1acefbb73baecd.a19e18f911bef145edcd.js",revision:"ce5550c94018e6afb2959fb64ed0f043"},{url:"_next/static/chunks/fc8d00fd.1ebc5eecefc51e9ee7d3.js",revision:"60a801e8e30c47d30d0e5ae8ee77c820"},{url:"_next/static/chunks/framework.ecbd939e3f22c21530d6.js",revision:"f1f44d4b846ef72b49ca7ba18b1f46ed"},{url:"_next/static/css/0b10e9f32b7d87c5b5ed.css",revision:"9b6bf2b0849057358aaaeb0dd19e37db"},{url:"_next/static/css/82cdff9d095f5d7a12bb.css",revision:"6b687fd5afb07213a49206ef2e8317af"},{url:"_next/static/mOly3GPL8iSbvXFlZI2uu/_buildManifest.js",revision:"4c5c91fbd82bee866285d8581d6ddb47"},{url:"_next/static/mOly3GPL8iSbvXFlZI2uu/_ssgManifest.js",revision:"abee47769bf307639ace4945f9cfd4ff"},{url:"_next/static/mOly3GPL8iSbvXFlZI2uu/pages/_app.js",revision:"7f52976caff9d92bdce4b89fccd51817"},{url:"_next/static/mOly3GPL8iSbvXFlZI2uu/pages/_error.js",revision:"d09a132cc0c5e8361c7327bf62c78083"},{url:"_next/static/mOly3GPL8iSbvXFlZI2uu/pages/course/[cid]/queue/[qid].js",revision:"12f21d15544f384e708465c574b43586"},{url:"_next/static/mOly3GPL8iSbvXFlZI2uu/pages/course/[cid]/schedule.js",revision:"701f08296084ff40357f1d2add9981ed"},{url:"_next/static/mOly3GPL8iSbvXFlZI2uu/pages/course/[cid]/today.js",revision:"b475891032e1ae7772e17026b17a4653"},{url:"_next/static/mOly3GPL8iSbvXFlZI2uu/pages/dev.js",revision:"3e5c46fabcd4a56053d225070dcc4c64"},{url:"_next/static/mOly3GPL8iSbvXFlZI2uu/pages/index.js",revision:"4dedb0df52d4fdd96f9fde5995b64761"},{url:"_next/static/mOly3GPL8iSbvXFlZI2uu/pages/login.js",revision:"488be11b8cc07b5dc65aa253a24e3ef9"},{url:"_next/static/mOly3GPL8iSbvXFlZI2uu/pages/nocourses.js",revision:"4e3a4f04c674697aec07349896c884b1"},{url:"_next/static/mOly3GPL8iSbvXFlZI2uu/pages/settings.js",revision:"c8d1d3a9c40e226d11d8f14890cb90ab"},{url:"_next/static/runtime/main-3e9bbe6042957de1e7f5.js",revision:"f5be2c7da3f39f0f0b59defaca1779f0"},{url:"_next/static/runtime/polyfills-b36c3412836f7ac1b6d8.js",revision:"09b9e4a41d08b83cb927019b61d3dcd2"},{url:"_next/static/runtime/webpack-c212667a5f965e81e004.js",revision:"cd00a63b218fd15ffccf530cd57d5a5e"}]),M(C),function(e,s,c){let a;if("string"==typeof e){const t=new URL(e,location.href);a=new n(({url:e})=>e.href===t.href,s,c)}else if(e instanceof RegExp)a=new i(e,s,c);else if("function"==typeof e)a=new n(e,s,c);else{if(!(e instanceof n))throw new t("unsupported-route-type",{moduleName:"workbox-routing",funcName:"registerRoute",paramName:"capture"});a=e}o().registerRoute(a)}(/^https?.*/,new class{constructor(e={}){if(this.m=l(e.cacheName),e.plugins){const t=e.plugins.some(e=>!!e.cacheWillUpdate);this.I=t?e.plugins:[U,...e.plugins]}else this.I=[U];this.S=e.networkTimeoutSeconds||0,this.F=e.fetchOptions,this.M=e.matchOptions}async handle({event:e,request:s}){const n=[];"string"==typeof s&&(s=new Request(s));const i=[];let c;if(this.S){const{id:t,promise:a}=this.T({request:s,event:e,logs:n});c=t,i.push(a)}const a=this.K({timeoutId:c,request:s,event:e,logs:n});i.push(a);let r=await Promise.race(i);if(r||(r=await a),!r)throw new t("no-response",{url:s.url});return r}T({request:e,logs:t,event:s}){let n;return{promise:new Promise(t=>{n=setTimeout(async()=>{t(await this.D({request:e,event:s}))},1e3*this.S)}),id:n}}async K({timeoutId:e,request:t,logs:s,event:n}){let i,c;try{c=await j({request:t,event:n,fetchOptions:this.F,plugins:this.I})}catch(e){i=e}if(e&&clearTimeout(e),i||!c)c=await this.D({request:t,event:n});else{const e=c.clone(),s=R({cacheName:this.m,request:t,response:e,event:n,plugins:this.I});if(n)try{n.waitUntil(s)}catch(e){}}return c}D({event:e,request:t}){return L({cacheName:this.m,request:t,event:e,matchOptions:this.M,plugins:this.I})}}({cacheName:"offlineCache",plugins:[new class{constructor(e={}){var t;this.cachedResponseWillBeUsed=async({event:e,request:t,cacheName:s,cachedResponse:n})=>{if(!n)return null;const i=this.G(n),c=this.C(s);d(c.expireEntries());const a=c.updateTimestamp(t.url);if(e)try{e.waitUntil(a)}catch(e){}return i?n:null},this.cacheDidUpdate=async({cacheName:e,request:t})=>{const s=this.C(e);await s.updateTimestamp(t.url),await s.expireEntries()},this.X=e,this.j=e.maxAgeSeconds,this.Z=new Map,e.purgeOnQuotaError&&(t=()=>this.deleteCacheAndMetadata(),b.add(t))}C(e){if(e===l())throw new t("expire-custom-caches-only");let s=this.Z.get(e);return s||(s=new m(e,this.X),this.Z.set(e,s)),s}G(e){if(!this.j)return!0;const t=this.A(e);if(null===t)return!0;return t>=Date.now()-1e3*this.j}A(e){if(!e.headers.has("date"))return null;const t=e.headers.get("date"),s=new Date(t).getTime();return isNaN(s)?null:s}async deleteCacheAndMetadata(){for(const[e,t]of this.Z)await self.caches.delete(e),await t.delete();this.Z=new Map}}({maxEntries:200,purgeOnQuotaError:!0})]}),"GET");
//# sourceMappingURL=service-worker.js.map
