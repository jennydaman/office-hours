(window.webpackJsonp=window.webpackJsonp||[]).push([[24],{IUmI:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/course/[cid]/today",function(){return n("x5Ku")}])},n5u1:function(e,t,n){(function(t){var n=function(e){var t=/\blang(?:uage)?-([\w-]+)\b/i,n=0,a={manual:e.Prism&&e.Prism.manual,disableWorkerMessageHandler:e.Prism&&e.Prism.disableWorkerMessageHandler,util:{encode:function e(t){return t instanceof r?new r(t.type,e(t.content),t.alias):Array.isArray(t)?t.map(e):t.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/\u00a0/g," ")},type:function(e){return Object.prototype.toString.call(e).slice(8,-1)},objId:function(e){return e.__id||Object.defineProperty(e,"__id",{value:++n}),e.__id},clone:function e(t,n){var r,i;switch(n=n||{},a.util.type(t)){case"Object":if(i=a.util.objId(t),n[i])return n[i];for(var o in r={},n[i]=r,t)t.hasOwnProperty(o)&&(r[o]=e(t[o],n));return(r);case"Array":return i=a.util.objId(t),n[i]?n[i]:(r=[],n[i]=r,t.forEach((function(t,a){r[a]=e(t,n)})),r);default:return t}},getLanguage:function(e){for(;e&&!t.test(e.className);)e=e.parentElement;return e?(e.className.match(t)||[,"none"])[1].toLowerCase():"none"},currentScript:function(){if("undefined"===typeof document)return null;if("currentScript"in document)return document.currentScript;try{throw new Error}catch(a){var e=(/at [^(\r\n]*\((.*):.+:.+\)$/i.exec(a.stack)||[])[1];if(e){var t=document.getElementsByTagName("script");for(var n in t)if(t[n].src==e)return t[n]}return null}},isActive:function(e,t,n){for(var a="no-"+t;e;){var r=e.classList;if(r.contains(t))return!0;if(r.contains(a))return!1;e=e.parentElement}return!!n}},languages:{extend:function(e,t){var n=a.util.clone(a.languages[e]);for(var r in t)n[r]=t[r];return n},insertBefore:function(e,t,n,r){var i=(r=r||a.languages)[e],o={};for(var l in i)if(i.hasOwnProperty(l)){if(l==t)for(var s in n)n.hasOwnProperty(s)&&(o[s]=n[s]);n.hasOwnProperty(l)||(o[l]=i[l])}var c=r[e];return r[e]=o,a.languages.DFS(a.languages,(function(t,n){n===c&&t!=e&&(this[t]=o)})),o},DFS:function e(t,n,r,i){i=i||{};var o=a.util.objId;for(var l in t)if(t.hasOwnProperty(l)){n.call(t,l,t[l],r||l);var s=t[l],c=a.util.type(s);"Object"!==c||i[o(s)]?"Array"!==c||i[o(s)]||(i[o(s)]=!0,e(s,n,l,i)):(i[o(s)]=!0,e(s,n,null,i))}}},plugins:{},highlightAll:function(e,t){a.highlightAllUnder(document,e,t)},highlightAllUnder:function(e,t,n){var r={callback:n,container:e,selector:'code[class*="language-"], [class*="language-"] code, code[class*="lang-"], [class*="lang-"] code'};a.hooks.run("before-highlightall",r),r.elements=Array.prototype.slice.apply(r.container.querySelectorAll(r.selector)),a.hooks.run("before-all-elements-highlight",r);for(var i,o=0;i=r.elements[o++];)a.highlightElement(i,!0===t,r.callback)},highlightElement:function(n,r,i){var o=a.util.getLanguage(n),l=a.languages[o];n.className=n.className.replace(t,"").replace(/\s+/g," ")+" language-"+o;var s=n.parentElement;s&&"pre"===s.nodeName.toLowerCase()&&(s.className=s.className.replace(t,"").replace(/\s+/g," ")+" language-"+o);var c={element:n,language:o,grammar:l,code:n.textContent};function u(e){c.highlightedCode=e,a.hooks.run("before-insert",c),c.element.innerHTML=c.highlightedCode,a.hooks.run("after-highlight",c),a.hooks.run("complete",c),i&&i.call(c.element)}if(a.hooks.run("before-sanity-check",c),!c.code)return a.hooks.run("complete",c),void(i&&i.call(c.element));if(a.hooks.run("before-highlight",c),c.grammar)if(r&&e.Worker){var d=new Worker(a.filename);d.onmessage=function(e){u(e.data)},d.postMessage(JSON.stringify({language:c.language,code:c.code,immediateClose:!0}))}else u(a.highlight(c.code,c.grammar,c.language));else u(a.util.encode(c.code))},highlight:function(e,t,n){var i={code:e,grammar:t,language:n};return a.hooks.run("before-tokenize",i),i.tokens=a.tokenize(i.code,i.grammar),a.hooks.run("after-tokenize",i),r.stringify(a.util.encode(i.tokens),i.language)},tokenize:function(e,t){var n=t.rest;if(n){for(var s in n)t[s]=n[s];delete t.rest}var c=new i;return o(c,c.head,e),function e(t,n,i,s,c,u){for(var d in i)if(i.hasOwnProperty(d)&&i[d]){var p=i[d];p=Array.isArray(p)?p:[p];for(var g=0;g<p.length;++g){if(u&&u.cause==d+","+g)return;var m=p[g],f=m.inside,v=!!m.lookbehind,b=!!m.greedy,h=0,y=m.alias;if(b&&!m.pattern.global){var w=m.pattern.toString().match(/[imsuy]*$/)[0];m.pattern=RegExp(m.pattern.source,w+"g")}for(var j=m.pattern||m,k=s.next,O=c;k!==n.tail&&!(u&&O>=u.reach);O+=k.value.length,k=k.next){var x=k.value;if(n.length>t.length)return;if(!(x instanceof r)){var E=1;if(b&&k!=n.tail.prev){if(j.lastIndex=O,!(C=j.exec(t)))break;var N=C.index+(v&&C[1]?C[1].length:0),_=C.index+C[0].length,F=O;for(F+=k.value.length;N>=F;)k=k.next,F+=k.value.length;if(F-=k.value.length,O=F,k.value instanceof r)continue;for(var A=k;A!==n.tail&&(F<_||"string"===typeof A.value);A=A.next)E++,F+=A.value.length;E--,x=t.slice(O,F),C.index-=O}else{j.lastIndex=0;var C=j.exec(x)}if(C){v&&(h=C[1]?C[1].length:0);N=C.index+h;var I=C[0].slice(h),S=(_=N+I.length,x.slice(0,N)),P=x.slice(_),$=O+x.length;u&&$>u.reach&&(u.reach=$);var z=k.prev;S&&(z=o(n,z,S),O+=S.length),l(n,z,E);var T=new r(d,f?a.tokenize(I,f):I,y,I);k=o(n,z,T),P&&o(n,k,P),E>1&&e(t,n,i,k.prev,O,{cause:d+","+g,reach:$})}}}}}}(e,c,t,c.head,0),function(e){var t=[],n=e.head.next;for(;n!==e.tail;)t.push(n.value),n=n.next;return t}(c)},hooks:{all:{},add:function(e,t){var n=a.hooks.all;n[e]=n[e]||[],n[e].push(t)},run:function(e,t){var n=a.hooks.all[e];if(n&&n.length)for(var r,i=0;r=n[i++];)r(t)}},Token:r};function r(e,t,n,a){this.type=e,this.content=t,this.alias=n,this.length=0|(a||"").length}function i(){var e={value:null,prev:null,next:null},t={value:null,prev:e,next:null};e.next=t,this.head=e,this.tail=t,this.length=0}function o(e,t,n){var a=t.next,r={value:n,prev:t,next:a};return t.next=r,a.prev=r,e.length++,r}function l(e,t,n){for(var a=t.next,r=0;r<n&&a!==e.tail;r++)a=a.next;t.next=a,a.prev=t,e.length-=r}if(e.Prism=a,r.stringify=function e(t,n){if("string"==typeof t)return t;if(Array.isArray(t)){var r="";return t.forEach((function(t){r+=e(t,n)})),r}var i={type:t.type,content:e(t.content,n),tag:"span",classes:["token",t.type],attributes:{},language:n},o=t.alias;o&&(Array.isArray(o)?Array.prototype.push.apply(i.classes,o):i.classes.push(o)),a.hooks.run("wrap",i);var l="";for(var s in i.attributes)l+=" "+s+'="'+(i.attributes[s]||"").replace(/"/g,"&quot;")+'"';return"<"+i.tag+' class="'+i.classes.join(" ")+'"'+l+">"+i.content+"</"+i.tag+">"},!e.document)return e.addEventListener?(a.disableWorkerMessageHandler||e.addEventListener("message",(function(t){var n=JSON.parse(t.data),r=n.language,i=n.code,o=n.immediateClose;e.postMessage(a.highlight(i,a.languages[r],r)),o&&e.close()}),!1),a):a;var s=a.util.currentScript();function c(){a.manual||a.highlightAll()}if(s&&(a.filename=s.src,s.hasAttribute("data-manual")&&(a.manual=!0)),!a.manual){var u=document.readyState;"loading"===u||"interactive"===u&&s&&s.defer?document.addEventListener("DOMContentLoaded",c):window.requestAnimationFrame?window.requestAnimationFrame(c):window.setTimeout(c,16)}return a}("undefined"!==typeof window?window:"undefined"!==typeof WorkerGlobalScope&&self instanceof WorkerGlobalScope?self:{});e.exports&&(e.exports=n),"undefined"!==typeof t&&(t.Prism=n),n.languages.markup={comment:/<!--[\s\S]*?-->/,prolog:/<\?[\s\S]+?\?>/,doctype:{pattern:/<!DOCTYPE(?:[^>"'[\]]|"[^"]*"|'[^']*')+(?:\[(?:[^<"'\]]|"[^"]*"|'[^']*'|<(?!!--)|<!--(?:[^-]|-(?!->))*-->)*\]\s*)?>/i,greedy:!0,inside:{"internal-subset":{pattern:/(\[)[\s\S]+(?=\]>$)/,lookbehind:!0,greedy:!0,inside:null},string:{pattern:/"[^"]*"|'[^']*'/,greedy:!0},punctuation:/^<!|>$|[[\]]/,"doctype-tag":/^DOCTYPE/,name:/[^\s<>'"]+/}},cdata:/<!\[CDATA\[[\s\S]*?]]>/i,tag:{pattern:/<\/?(?!\d)[^\s>\/=$<%]+(?:\s(?:\s*[^\s>\/=]+(?:\s*=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+(?=[\s>]))|(?=[\s/>])))+)?\s*\/?>/,greedy:!0,inside:{tag:{pattern:/^<\/?[^\s>\/]+/,inside:{punctuation:/^<\/?/,namespace:/^[^\s>\/:]+:/}},"attr-value":{pattern:/=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+)/,inside:{punctuation:[{pattern:/^=/,alias:"attr-equals"},/"|'/]}},punctuation:/\/?>/,"attr-name":{pattern:/[^\s>\/]+/,inside:{namespace:/^[^\s>\/:]+:/}}}},entity:[{pattern:/&[\da-z]{1,8};/i,alias:"named-entity"},/&#x?[\da-f]{1,8};/i]},n.languages.markup.tag.inside["attr-value"].inside.entity=n.languages.markup.entity,n.languages.markup.doctype.inside["internal-subset"].inside=n.languages.markup,n.hooks.add("wrap",(function(e){"entity"===e.type&&(e.attributes.title=e.content.replace(/&amp;/,"&"))})),Object.defineProperty(n.languages.markup.tag,"addInlined",{value:function(e,t){var a={};a["language-"+t]={pattern:/(^<!\[CDATA\[)[\s\S]+?(?=\]\]>$)/i,lookbehind:!0,inside:n.languages[t]},a.cdata=/^<!\[CDATA\[|\]\]>$/i;var r={"included-cdata":{pattern:/<!\[CDATA\[[\s\S]*?\]\]>/i,inside:a}};r["language-"+t]={pattern:/[\s\S]+/,inside:n.languages[t]};var i={};i[e]={pattern:RegExp(/(<__[\s\S]*?>)(?:<!\[CDATA\[(?:[^\]]|\](?!\]>))*\]\]>|(?!<!\[CDATA\[)[\s\S])*?(?=<\/__>)/.source.replace(/__/g,(function(){return e})),"i"),lookbehind:!0,greedy:!0,inside:r},n.languages.insertBefore("markup","cdata",i)}}),n.languages.html=n.languages.markup,n.languages.mathml=n.languages.markup,n.languages.svg=n.languages.markup,n.languages.xml=n.languages.extend("markup",{}),n.languages.ssml=n.languages.xml,n.languages.atom=n.languages.xml,n.languages.rss=n.languages.xml,function(e){var t=/("|')(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/;e.languages.css={comment:/\/\*[\s\S]*?\*\//,atrule:{pattern:/@[\w-]+[\s\S]*?(?:;|(?=\s*\{))/,inside:{rule:/^@[\w-]+/,"selector-function-argument":{pattern:/(\bselector\s*\((?!\s*\))\s*)(?:[^()]|\((?:[^()]|\([^()]*\))*\))+?(?=\s*\))/,lookbehind:!0,alias:"selector"},keyword:{pattern:/(^|[^\w-])(?:and|not|only|or)(?![\w-])/,lookbehind:!0}}},url:{pattern:RegExp("\\burl\\((?:"+t.source+"|"+/(?:[^\\\r\n()"']|\\[\s\S])*/.source+")\\)","i"),greedy:!0,inside:{function:/^url/i,punctuation:/^\(|\)$/,string:{pattern:RegExp("^"+t.source+"$"),alias:"url"}}},selector:RegExp("[^{}\\s](?:[^{};\"']|"+t.source+")*?(?=\\s*\\{)"),string:{pattern:t,greedy:!0},property:/[-_a-z\xA0-\uFFFF][-\w\xA0-\uFFFF]*(?=\s*:)/i,important:/!important\b/i,function:/[-a-z0-9]+(?=\()/i,punctuation:/[(){};:,]/},e.languages.css.atrule.inside.rest=e.languages.css;var n=e.languages.markup;n&&(n.tag.addInlined("style","css"),e.languages.insertBefore("inside","attr-value",{"style-attr":{pattern:/\s*style=("|')(?:\\[\s\S]|(?!\1)[^\\])*\1/i,inside:{"attr-name":{pattern:/^\s*style/i,inside:n.tag.inside},punctuation:/^\s*=\s*['"]|['"]\s*$/,"attr-value":{pattern:/.+/i,inside:e.languages.css}},alias:"language-css"}},n.tag))}(n),n.languages.clike={comment:[{pattern:/(^|[^\\])\/\*[\s\S]*?(?:\*\/|$)/,lookbehind:!0},{pattern:/(^|[^\\:])\/\/.*/,lookbehind:!0,greedy:!0}],string:{pattern:/(["'])(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/,greedy:!0},"class-name":{pattern:/(\b(?:class|interface|extends|implements|trait|instanceof|new)\s+|\bcatch\s+\()[\w.\\]+/i,lookbehind:!0,inside:{punctuation:/[.\\]/}},keyword:/\b(?:if|else|while|do|for|return|in|instanceof|function|new|try|throw|catch|finally|null|break|continue)\b/,boolean:/\b(?:true|false)\b/,function:/\w+(?=\()/,number:/\b0x[\da-f]+\b|(?:\b\d+\.?\d*|\B\.\d+)(?:e[+-]?\d+)?/i,operator:/[<>]=?|[!=]=?=?|--?|\+\+?|&&?|\|\|?|[?*/~^%]/,punctuation:/[{}[\];(),.:]/},n.languages.javascript=n.languages.extend("clike",{"class-name":[n.languages.clike["class-name"],{pattern:/(^|[^$\w\xA0-\uFFFF])[_$A-Z\xA0-\uFFFF][$\w\xA0-\uFFFF]*(?=\.(?:prototype|constructor))/,lookbehind:!0}],keyword:[{pattern:/((?:^|})\s*)(?:catch|finally)\b/,lookbehind:!0},{pattern:/(^|[^.]|\.\.\.\s*)\b(?:as|async(?=\s*(?:function\b|\(|[$\w\xA0-\uFFFF]|$))|await|break|case|class|const|continue|debugger|default|delete|do|else|enum|export|extends|for|from|function|(?:get|set)(?=\s*[\[$\w\xA0-\uFFFF])|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)\b/,lookbehind:!0}],number:/\b(?:(?:0[xX](?:[\dA-Fa-f](?:_[\dA-Fa-f])?)+|0[bB](?:[01](?:_[01])?)+|0[oO](?:[0-7](?:_[0-7])?)+)n?|(?:\d(?:_\d)?)+n|NaN|Infinity)\b|(?:\b(?:\d(?:_\d)?)+\.?(?:\d(?:_\d)?)*|\B\.(?:\d(?:_\d)?)+)(?:[Ee][+-]?(?:\d(?:_\d)?)+)?/,function:/#?[_$a-zA-Z\xA0-\uFFFF][$\w\xA0-\uFFFF]*(?=\s*(?:\.\s*(?:apply|bind|call)\s*)?\()/,operator:/--|\+\+|\*\*=?|=>|&&=?|\|\|=?|[!=]==|<<=?|>>>?=?|[-+*/%&|^!=<>]=?|\.{3}|\?\?=?|\?\.?|[~:]/}),n.languages.javascript["class-name"][0].pattern=/(\b(?:class|interface|extends|implements|instanceof|new)\s+)[\w.\\]+/,n.languages.insertBefore("javascript","keyword",{regex:{pattern:/((?:^|[^$\w\xA0-\uFFFF."'\])\s]|\b(?:return|yield))\s*)\/(?:\[(?:[^\]\\\r\n]|\\.)*]|\\.|[^/\\\[\r\n])+\/[gimyus]{0,6}(?=(?:\s|\/\*(?:[^*]|\*(?!\/))*\*\/)*(?:$|[\r\n,.;:})\]]|\/\/))/,lookbehind:!0,greedy:!0},"function-variable":{pattern:/#?[_$a-zA-Z\xA0-\uFFFF][$\w\xA0-\uFFFF]*(?=\s*[=:]\s*(?:async\s*)?(?:\bfunction\b|(?:\((?:[^()]|\([^()]*\))*\)|[_$a-zA-Z\xA0-\uFFFF][$\w\xA0-\uFFFF]*)\s*=>))/,alias:"function"},parameter:[{pattern:/(function(?:\s+[_$A-Za-z\xA0-\uFFFF][$\w\xA0-\uFFFF]*)?\s*\(\s*)(?!\s)(?:[^()]|\([^()]*\))+?(?=\s*\))/,lookbehind:!0,inside:n.languages.javascript},{pattern:/[_$a-z\xA0-\uFFFF][$\w\xA0-\uFFFF]*(?=\s*=>)/i,inside:n.languages.javascript},{pattern:/(\(\s*)(?!\s)(?:[^()]|\([^()]*\))+?(?=\s*\)\s*=>)/,lookbehind:!0,inside:n.languages.javascript},{pattern:/((?:\b|\s|^)(?!(?:as|async|await|break|case|catch|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally|for|from|function|get|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|set|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)(?![$\w\xA0-\uFFFF]))(?:[_$A-Za-z\xA0-\uFFFF][$\w\xA0-\uFFFF]*\s*)\(\s*|\]\s*\(\s*)(?!\s)(?:[^()]|\([^()]*\))+?(?=\s*\)\s*\{)/,lookbehind:!0,inside:n.languages.javascript}],constant:/\b[A-Z](?:[A-Z_]|\dx?)*\b/}),n.languages.insertBefore("javascript","string",{"template-string":{pattern:/`(?:\\[\s\S]|\${(?:[^{}]|{(?:[^{}]|{[^}]*})*})+}|(?!\${)[^\\`])*`/,greedy:!0,inside:{"template-punctuation":{pattern:/^`|`$/,alias:"string"},interpolation:{pattern:/((?:^|[^\\])(?:\\{2})*)\${(?:[^{}]|{(?:[^{}]|{[^}]*})*})+}/,lookbehind:!0,inside:{"interpolation-punctuation":{pattern:/^\${|}$/,alias:"punctuation"},rest:n.languages.javascript}},string:/[\s\S]+/}}}),n.languages.markup&&n.languages.markup.tag.addInlined("script","javascript"),n.languages.js=n.languages.javascript,function(){if("undefined"!==typeof self&&self.Prism&&self.document){var e=window.Prism,t={js:"javascript",py:"python",rb:"ruby",ps1:"powershell",psm1:"powershell",sh:"bash",bat:"batch",h:"c",tex:"latex"},n='pre[data-src]:not([data-src-status="loaded"]):not([data-src-status="loading"])',a=/\blang(?:uage)?-([\w-]+)\b/i;e.hooks.add("before-highlightall",(function(e){e.selector+=", "+n})),e.hooks.add("before-sanity-check",(function(a){var r=a.element;if(r.matches(n)){a.code="",r.setAttribute("data-src-status","loading");var o=r.appendChild(document.createElement("CODE"));o.textContent="Loading\u2026";var l=r.getAttribute("data-src"),s=a.language;if("none"===s){var c=(/\.(\w+)$/.exec(l)||[,"none"])[1];s=t[c]||c}i(o,s),i(r,s);var u=e.plugins.autoloader;u&&u.loadLanguages(s);var d=new XMLHttpRequest;d.open("GET",l,!0),d.onreadystatechange=function(){var t,n;4==d.readyState&&(d.status<400&&d.responseText?(r.setAttribute("data-src-status","loaded"),o.textContent=d.responseText,e.highlightElement(o)):(r.setAttribute("data-src-status","failed"),d.status>=400?o.textContent=(t=d.status,n=d.statusText,"\u2716 Error "+t+" while fetching file: "+n):o.textContent="\u2716 Error: File does not exist or is empty"))},d.send(null)}})),e.plugins.fileHighlight={highlight:function(t){for(var a,r=(t||document).querySelectorAll(n),i=0;a=r[i++];)e.highlightElement(a)}};var r=!1;e.fileHighlight=function(){r||(console.warn("Prism.fileHighlight is deprecated. Use `Prism.plugins.fileHighlight.highlight` instead."),r=!0),e.plugins.fileHighlight.highlight.apply(this,arguments)}}function i(e,t){var n=e.className;n=n.replace(a," ")+" language-"+t,e.className=n.replace(/\s+/g," ").trim()}}()}).call(this,n("fRV1"))},pjuZ:function(e,t){!function(e){var t=e.util.clone(e.languages.javascript);e.languages.jsx=e.languages.extend("markup",t),e.languages.jsx.tag.pattern=/<\/?(?:[\w.:-]+\s*(?:\s+(?:[\w.:$-]+(?:=(?:("|')(?:\\[\s\S]|(?!\1)[^\\])*\1|[^\s{'">=]+|\{(?:\{(?:\{[^{}]*\}|[^{}])*\}|[^{}])+\}))?|\{\s*\.{3}\s*[a-z_$][\w$]*(?:\.[a-z_$][\w$]*)*\s*\}))*\s*\/?)?>/i,e.languages.jsx.tag.inside.tag.pattern=/^<\/?[^\s>\/]*/i,e.languages.jsx.tag.inside["attr-value"].pattern=/=(?!\{)(?:("|')(?:\\[\s\S]|(?!\1)[^\\])*\1|[^\s'">]+)/i,e.languages.jsx.tag.inside.tag.inside["class-name"]=/^[A-Z]\w*(?:\.[A-Z]\w*)*$/,e.languages.insertBefore("inside","attr-name",{spread:{pattern:/\{\s*\.{3}\s*[a-z_$][\w$]*(?:\.[a-z_$][\w$]*)*\s*\}/,inside:{punctuation:/\.{3}|[{}.]/,"attr-value":/\w+/}}},e.languages.jsx.tag),e.languages.insertBefore("inside","attr-value",{script:{pattern:/=(?:\{(?:\{(?:\{[^{}]*\}|[^{}])*\}|[^{}])+\})/i,inside:{"script-punctuation":{pattern:/^=(?={)/,alias:"punctuation"},rest:e.languages.jsx},alias:"language-javascript"}},e.languages.jsx.tag);var n=function(e){return e?"string"===typeof e?e:"string"===typeof e.content?e.content:e.content.map(n).join(""):""},a=function(t){for(var r=[],i=0;i<t.length;i++){var o=t[i],l=!1;if("string"!==typeof o&&("tag"===o.type&&o.content[0]&&"tag"===o.content[0].type?"</"===o.content[0].content[0].content?r.length>0&&r[r.length-1].tagName===n(o.content[0].content[1])&&r.pop():"/>"===o.content[o.content.length-1].content||r.push({tagName:n(o.content[0].content[1]),openedBraces:0}):r.length>0&&"punctuation"===o.type&&"{"===o.content?r[r.length-1].openedBraces++:r.length>0&&r[r.length-1].openedBraces>0&&"punctuation"===o.type&&"}"===o.content?r[r.length-1].openedBraces--:l=!0),(l||"string"===typeof o)&&r.length>0&&0===r[r.length-1].openedBraces){var s=n(o);i<t.length-1&&("string"===typeof t[i+1]||"plain-text"===t[i+1].type)&&(s+=n(t[i+1]),t.splice(i+1,1)),i>0&&("string"===typeof t[i-1]||"plain-text"===t[i-1].type)&&(s=n(t[i-1])+s,t.splice(i-1,1),i--),t[i]=new e.Token("plain-text",s,null,s)}o.content&&"string"!==typeof o.content&&a(o.content)}};e.hooks.add("after-tokenize",(function(e){"jsx"!==e.language&&"tsx"!==e.language||a(e.tokens)}))}(Prism)},x5Ku:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return Oe}));var a=n("VtSi"),r=n.n(a),i=n("zjfJ"),o=n("QsI/"),l=n("zTld"),s=n("wPNs"),c=n("S7b9"),u=n("VKn7"),d=n("ysqo"),p=n.n(d),g=n("7xIC"),m=n("ERkP"),f=n.n(m),v=n("j/s1"),b=n("s9Vj"),h=n("+KfW"),y=n("PJfV"),w=n("jMRu"),j=n("SCaQ"),k=n("BmDy"),O=n("9xBf"),x=n("xq5O"),E=n("jvFD"),N=n.n(E),_=n("jPdq"),F=n("89bP"),A=f.a.createElement,C=Object(v.a)(w.a).withConfig({displayName:"OpenQueueCard__PaddedCard",componentId:"pissyg-0"})(["margin-top:32px;margin-bottom:25px;border-radius:6px;box-shadow:0px 2px 8px rgba(0,0,0,0.15);"]),I=v.a.div.withConfig({displayName:"OpenQueueCard__HeaderDiv",componentId:"pissyg-1"})(["font-size:24px;font-weight:500;color:#212934;"]),S=v.a.div.withConfig({displayName:"OpenQueueCard__QueueInfoRow",componentId:"pissyg-2"})(["display:flex;flex-direction:row;justify-content:space-between;"]),P=v.a.div.withConfig({displayName:"OpenQueueCard__RightQueueInfoRow",componentId:"pissyg-3"})(["display:flex;flex-direction:row;align-items:center;"]),$=v.a.span.withConfig({displayName:"OpenQueueCard__QuestionNumberSpan",componentId:"pissyg-4"})(["font-size:24px;"]),z=v.a.div.withConfig({displayName:"OpenQueueCard__QueueSizeColorDiv",componentId:"pissyg-5"})(["color:#212934;font-size:16px;"]),T=v.a.div.withConfig({displayName:"OpenQueueCard__HeaderText",componentId:"pissyg-6"})(["font-size:14px;line-height:22px;font-weight:600;color:#bfbfbf;font-variant:small-caps;margin-bottom:8px;"]),q=Object(v.a)(F.a).withConfig({displayName:"OpenQueueCard__AvatarWithMargin",componentId:"pissyg-7"})(["margin-right:25px;"]),U=Object(v.a)(j.a).withConfig({displayName:"OpenQueueCard__OpenQueueButton",componentId:"pissyg-8"})(["background-color:#3684c6;border-radius:6px;color:white;font-weight:500;font-size:14px;margin-left:16px;"]),Q=Object(v.a)(j.a).withConfig({displayName:"OpenQueueCard__EditNotesButton",componentId:"pissyg-9"})(["border-radius:6px;font-size:14px;font-weight:500;"]),B=Object(v.a)(j.a).withConfig({displayName:"OpenQueueCard__SaveButton",componentId:"pissyg-10"})(["background:#2a9187;border-radius:6px;color:white;font-weight:500;font-size:14px;"]),D=(v.a.div.withConfig({displayName:"OpenQueueCard__ExtraText",componentId:"pissyg-11"})(["color:#8895a6;font-size:14px;font-weight:normal;"]),Object(v.a)(k.a).withConfig({displayName:"OpenQueueCard__NotesInput",componentId:"pissyg-12"})(["border-radius:6px;border:1px solid #b8c4ce;"])),L=function(e){var t=e.queue,n=e.isTA,a=e.updateQueueNotes,r=Object(m.useState)(!1),i=r[0],o=r[1],l=Object(m.useState)(t.notes),s=l[0],u=l[1],d=Object(g.useRouter)().query.cid,p=t.staffList,v=function(){o(!1),a(t,s)};return A(C,{headStyle:{background:"#F3F5F7"},className:"open-queue-card",title:p.map((function(e){return e.name})).join(", ")||"No Staff Checked In!",extra:t.startTime&&t.endTime&&Object(_.a)(t)},A(S,null,A(I,null,t.room),A(P,null,!t.allowQuestions&&A(O.a,{title:"This queue is no longer accepting questions"},A(y.a,{style:{color:"red",fontSize:"24px",marginRight:"8px"}})),A(z,null,A($,null,t.queueSize)," in queue"))),A("br",null),i?A("div",null,A(T,null,"staff notes"),A(D,{defaultValue:t.notes,onPressEnter:v,value:s,onChange:function(e){return u(e.target.value)}})):t.notes&&A(f.a.Fragment,null,A(T,{style:{marginBottom:0}},"staff notes"),A("div",null,t.notes)),A("br",null),p.length>1&&A(T,null,"checked-in staff"),A(c.a,{justify:"space-between",align:"bottom"},A("div",null,p.map((function(e){return A(O.a,{key:e.id,title:e.name},A(q,{size:96,fontSize:40,name:e.name}))}))),i&&A(B,{onClick:v,size:"large"},"Save Changes"),!i&&A(c.a,null,n&&A(Q,{size:"large",onClick:function(){o(!0)}},"Edit Notes"),A(N.a,{href:"/course/[cid]/queue/[qid]",as:"/course/".concat(d,"/queue/").concat(t.id)},A(U,{type:"primary",size:"large","data-cy":"open-queue-button"},"Open Queue")))))};function R(){return A(C,null,A(x.a,{paragraph:{rows:2}}),A(c.a,{justify:"space-between",align:"bottom"},A(x.a.Avatar,{size:96}),A(x.a.Button,{size:"large"})))}var H=n("Sccn"),M=n("zygG"),W=n("JbCn"),Z=n("Mob5"),J=n("/zI6"),V=n("Xccw"),K=n("n5u1");n("pjuZ");var X=["video","image","embed","figma"],G=function(e){var t=e.block,n=e.mapImageUrl,a=t.value,r=t.value.type;if(!X.includes(r))return null;var i=a.format,o=null!==i&&void 0!==i?i:{},l=o.display_source,s=void 0===l?void 0:l,c=o.block_aspect_ratio,u=void 0===c?void 0:c,d=o.block_height,p=void 0===d?1:d,g=o.block_width,f=u||p/(void 0===g?1:g);if("embed"===r||"video"===r||"figma"===r)return Object(m.createElement)("div",{style:{paddingBottom:100*f+"%",position:"relative"}},Object(m.createElement)("iframe",{className:"notion-image-inset",src:"figma"===r?a.properties.source[0][0]:s}));if("image"===t.value.type){var v,b=n(a.properties.source[0][0],t),h=null===(v=a.properties.caption)||void 0===v?void 0:v[0][0];return u?Object(m.createElement)("div",{style:{paddingBottom:100*f+"%",position:"relative"}},Object(m.createElement)("img",{className:"notion-image-inset",alt:h||"notion image",src:b})):Object(m.createElement)("img",{alt:h,src:b})}return null},Y=function(e){var t=e.code,n=e.language,a=void 0===n?"javascript":n,r=a.toLowerCase(),i=K.languages[r]||K.languages.javascript,o="language-"+a.toLowerCase();return Object(m.createElement)("pre",{className:"notion-code "+o},Object(m.createElement)("code",{className:o,dangerouslySetInnerHTML:{__html:Object(K.highlight)(t,i,a)}}))},ee=function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return t.filter((function(e){return!!e})).join(" ")},te=function(e){return e.reduce((function(e,t){return e+t[0]}),"")},ne=function(e,t){var n=function(e){var t=[],n=void 0,a=-1;return Object.keys(e).forEach((function(r){var i;null===(i=e[r].value.content)||void 0===i||i.forEach((function(r){var i,o,l=null===(i=e[r])||void 0===i?void 0:null===(o=i.value)||void 0===o?void 0:o.type;l&&l!==n&&(a++,n=l,t[a]=[]),t[a].push(r)})),n=void 0})),t}(t).find((function(t){return t.includes(e)}));if(n)return n.indexOf(e)+1},ae=function(e,t){void 0===e&&(e="");var n=new URL("https://www.notion.so"+(e.startsWith("/image")?e:"/image/"+encodeURIComponent(e)));if(t){var a="space"===t.value.parent_table?"block":t.value.parent_table;n.searchParams.set("table",a),n.searchParams.set("id",t.value.id),n.searchParams.set("cache","v2")}return n.toString()},re=function(e){return void 0===e&&(e=""),"/"+(e=e.replace(/-/g,""))},ie=function(e){var t,n,a,r=e.block,i=e.className,o=e.big,l=e.mapImageUrl;if("page"!==(a=r.value).type&&"callout"!==a.type)return null;var s=null===(t=r.value.format)||void 0===t?void 0:t.page_icon,c=null===(n=r.value.properties)||void 0===n?void 0:n.title;if(null===s||void 0===s?void 0:s.includes("http")){var u=l(s);return Object(m.createElement)("img",{className:ee(i,o?"notion-page-icon-cover":"notion-page-icon"),src:u,alt:c?te(c):"Icon"})}return Object(m.createElement)("span",{className:ee(i,o?"notion-page-icon-cover":"notion-page-icon"),role:"img","aria-label":s},s)},oe=function(e){var t=e.blockMap,n=e.mapPageUrl,a=e.mapImageUrl,r=Object.keys(t)[0];if(!r)return null;for(var i=[],o=r;;){var l,s,c=t[o];if(!c||!c.value)break;var u=null===(l=c.value.properties)||void 0===l?void 0:l.title[0][0],d=null===(s=c.value.format)||void 0===s?void 0:s.page_icon;if(!u&&!d)break;i.push({block:c,active:o===r,pageId:o,title:u,icon:d});var p=c.value.parent_id;if(!p)break;o=p}return i.reverse(),Object(m.createElement)("header",{className:"notion-page-header"},Object(m.createElement)("div",{className:"notion-nav-header"},Object(m.createElement)("div",{className:"notion-nav-breadcrumbs"},i.map((function(e,t){return Object(m.createElement)(m.Fragment,{key:e.pageId},Object(m.createElement)("a",{className:"notion-nav-breadcrumb "+(e.active?"notion-nav-breadcrumb-active":""),href:e.active?void 0:n(e.pageId)},e.icon&&Object(m.createElement)(ie,{className:"notion-nav-icon",block:e.block,mapImageUrl:a}),e.title&&Object(m.createElement)("span",{className:"notion-nav-title"},e.title)),t<i.length-1&&Object(m.createElement)("span",{className:"notion-nav-spacer"},"/"))})))))},le=function(e){return null===e||void 0===e?void 0:e.map((function(e,t){var n=e[0],a=e[1];return a?a.reduceRight((function(e,n){switch(n[0]){case"h":return Object(m.createElement)("span",{key:t,className:"notion-"+n[1]},e);case"c":return Object(m.createElement)("code",{key:t,className:"notion-inline-code"},e);case"b":return Object(m.createElement)("b",{key:t},e);case"i":return Object(m.createElement)("em",{key:t},e);case"s":return Object(m.createElement)("s",{key:t},e);case"a":return Object(m.createElement)("a",{className:"notion-link",href:n[1],key:t},e);default:return Object(m.createElement)(m.Fragment,{key:t},e)}}),Object(m.createElement)(m.Fragment,null,n)):Object(m.createElement)(m.Fragment,{key:t},n)}))},se=function(e){var t,n,a,r,i,o,l,s,c,u,d,p=e.block,g=e.children,f=e.level,v=e.fullPage,b=e.hideHeader,h=e.blockMap,y=e.mapPageUrl,w=e.mapImageUrl,j=null===p||void 0===p?void 0:p.value;switch(null===j||void 0===j?void 0:j.type){case"page":if(0===f){if(v){if(!j.properties)return null;var k=j.format||{},O=k.page_icon,x=k.page_cover,E=k.page_cover_position,N=k.page_full_width,_=k.page_small_text,F=100*(1-(E||.5));return Object(m.createElement)("div",{className:"notion notion-app"},Object(m.createElement)("div",{className:"notion-cursor-listener"},Object(m.createElement)("div",{className:"notion-frame"},!b&&Object(m.createElement)(oe,{blockMap:h,mapPageUrl:y,mapImageUrl:w}),Object(m.createElement)("div",{className:"notion-scroller"},x&&Object(m.createElement)("img",{src:w(x),alt:te(j.properties.title),className:"notion-page-cover",style:{objectPosition:"center "+F+"%"}}),Object(m.createElement)("main",{className:ee("notion-page",!x&&"notion-page-offset",N&&"notion-full-width",_&&"notion-small-text")},O&&Object(m.createElement)(ie,{className:x?"notion-page-icon-offset":void 0,block:p,big:!0,mapImageUrl:w}),Object(m.createElement)("div",{className:"notion-title"},le(j.properties.title)),g)))))}return Object(m.createElement)("main",{className:"notion"},g)}return j.properties?Object(m.createElement)("a",{className:"notion-page-link",href:y(j.id)},j.format&&Object(m.createElement)("div",{className:"notion-page-icon"},Object(m.createElement)(ie,{block:p,mapImageUrl:w})),Object(m.createElement)("div",{className:"notion-page-text"},le(j.properties.title))):null;case"header":return j.properties?Object(m.createElement)("h1",{className:"notion-h1"},le(j.properties.title)):null;case"sub_header":return j.properties?Object(m.createElement)("h2",{className:"notion-h2"},le(j.properties.title)):null;case"sub_sub_header":return j.properties?Object(m.createElement)("h3",{className:"notion-h3"},le(j.properties.title)):null;case"divider":return Object(m.createElement)("hr",{className:"notion-hr"});case"text":if(!j.properties)return Object(m.createElement)("div",{className:"notion-blank"},"\xa0");var A=null===(t=j.format)||void 0===t?void 0:t.block_color;return Object(m.createElement)("p",{className:ee("notion-text",A&&"notion-"+A)},le(j.properties.title));case"bulleted_list":case"numbered_list":var C=function(e,t){return"bulleted_list"===j.type?Object(m.createElement)("ul",{className:"notion-list notion-list-disc"},e):Object(m.createElement)("ol",{start:t,className:"notion-list notion-list-numbered"},e)},I=null;I=j.content?Object(m.createElement)(m.Fragment,null,j.properties&&Object(m.createElement)("li",null,le(j.properties.title)),C(g)):j.properties?Object(m.createElement)("li",null,le(j.properties.title)):null;var S=p.value.type!==h[p.value.parent_id].value.type,P=ne(j.id,h);return S?C(I,P):I;case"image":case"embed":case"figma":case"video":var $=p.value;return Object(m.createElement)("figure",{className:"notion-asset-wrapper",style:void 0!==$.format?{width:$.format.block_width}:void 0},Object(m.createElement)(G,{block:p,mapImageUrl:w}),$.properties.caption&&Object(m.createElement)("figcaption",{className:"notion-image-caption"},le($.properties.caption)));case"code":if(j.properties.title){var z=j.properties.title[0][0],T=j.properties.language[0][0];return Object(m.createElement)(Y,{key:j.id,language:T||"",code:z})}break;case"column_list":return Object(m.createElement)("div",{className:"notion-row"},g);case"column":var q=j.format.column_ratio,U="calc((100% - "+46*(Number((1/q).toFixed(0))-1)+"px) * "+q+")";return Object(m.createElement)(m.Fragment,null,Object(m.createElement)("div",{className:"notion-column",style:{width:U}},g),Object(m.createElement)("div",{className:"notion-spacer",style:{width:46}}));case"quote":return j.properties?Object(m.createElement)("blockquote",{className:"notion-quote"},le(j.properties.title)):null;case"collection_view":if(!p)return null;var Q=null===p||void 0===p?void 0:null===(n=p.collection)||void 0===n?void 0:n.types[0];return Object(m.createElement)("div",null,Object(m.createElement)("h3",{className:"notion-h3"},le(null===(a=p.collection)||void 0===a?void 0:a.title)),"table"===(null===Q||void 0===Q?void 0:Q.type)&&Object(m.createElement)("div",{style:{maxWidth:"100%",marginTop:5}},Object(m.createElement)("table",{className:"notion-table"},Object(m.createElement)("thead",null,Object(m.createElement)("tr",{className:"notion-tr"},null===(r=Q.format)||void 0===r?void 0:null===(i=r.table_properties)||void 0===i?void 0:i.filter((function(e){return e.visible})).map((function(e,t){var n,a;return Object(m.createElement)("th",{className:"notion-th",key:t,style:{minWidth:e.width}},null===(n=p.collection)||void 0===n?void 0:null===(a=n.schema[e.property])||void 0===a?void 0:a.name)})))),Object(m.createElement)("tbody",null,null===p||void 0===p?void 0:null===(o=p.collection)||void 0===o?void 0:o.data.map((function(e,t){var n,a;return Object(m.createElement)("tr",{className:"notion-tr",key:t},null===(n=Q.format)||void 0===n?void 0:null===(a=n.table_properties)||void 0===a?void 0:a.filter((function(e){return e.visible})).map((function(t,n){var a,r;return Object(m.createElement)("td",{key:n,className:"notion-td "+("title"===t.property?"notion-bold":"")},le(e[null===(a=p.collection)||void 0===a?void 0:null===(r=a.schema[t.property])||void 0===r?void 0:r.name]))})))}))))),"gallery"===(null===Q||void 0===Q?void 0:Q.type)&&Object(m.createElement)("div",{className:"notion-gallery"},null===(l=p.collection)||void 0===l?void 0:l.data.map((function(e,t){var n,a;return Object(m.createElement)("div",{key:"col-"+t,className:"notion-gallery-card"},Object(m.createElement)("div",{className:"notion-gallery-content"},null===(n=Q.format)||void 0===n?void 0:null===(a=n.gallery_properties)||void 0===a?void 0:a.filter((function(e){return e.visible})).map((function(t,n){var a;return Object(m.createElement)("p",{key:n+"item",className:"notion-gallery-data "+(0===n?"is-first":"")},te(e[null===(a=p.collection)||void 0===a?void 0:a.schema[t.property].name]))}))))}))));case"callout":return Object(m.createElement)("div",{className:ee("notion-callout",j.format.block_color&&"notion-"+j.format.block_color+"_co")},Object(m.createElement)("div",null,Object(m.createElement)(ie,{block:p,mapImageUrl:w})),Object(m.createElement)("div",{className:"notion-callout-text"},le(j.properties.title)));case"bookmark":var B=j.properties.link,D=null!==(s=j.properties.title)&&void 0!==s?s:B,L=j.properties.description,R=null===(c=j.format)||void 0===c?void 0:c.block_color,H=null===(u=j.format)||void 0===u?void 0:u.bookmark_icon,M=null===(d=j.format)||void 0===d?void 0:d.bookmark_cover;return Object(m.createElement)("div",{className:"notion-row"},Object(m.createElement)("a",{target:"_blank",rel:"noopener noreferrer",className:ee("notion-bookmark",R&&"notion-"+R),href:B[0][0]},Object(m.createElement)("div",null,Object(m.createElement)("div",{className:"notion-bookmark-title"},le(D)),L&&Object(m.createElement)("div",{className:"notion-bookmark-description"},le(L)),Object(m.createElement)("div",{className:"notion-bookmark-link"},H&&Object(m.createElement)("img",{src:H,alt:te(D)}),Object(m.createElement)("div",null,le(B)))),M&&Object(m.createElement)("div",{className:"notion-bookmark-image"},Object(m.createElement)("img",{src:M,alt:te(D)}))));case"toggle":return Object(m.createElement)("details",{className:"notion-toggle"},Object(m.createElement)("summary",null,le(j.properties.title)),Object(m.createElement)("div",null,g));default:return Object(m.createElement)("div",null)}return null},ce=function e(t){var n,a,r=t.level,i=void 0===r?0:r,o=t.currentId,l=t.mapPageUrl,s=void 0===l?re:l,c=t.mapImageUrl,u=void 0===c?ae:c,d=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(t,["level","currentId","mapPageUrl","mapImageUrl"]),p=d.blockMap,g=o||Object.keys(p)[0],m=p[g];return m?f.a.createElement(se,Object.assign({key:g,level:i,block:m,mapPageUrl:s,mapImageUrl:u},d),null===m||void 0===m?void 0:null===(n=m.value)||void 0===n?void 0:null===(a=n.content)||void 0===a?void 0:a.map((function(t){return f.a.createElement(e,Object.assign({key:t,currentId:t,level:i+1,mapPageUrl:s,mapImageUrl:u},d))}))):null},ue=f.a.createElement;function de(){var e=Object(V.a)("releaseNotesLastSeen",null),t=Object(M.a)(e,2),n=t[0],a=t[1],i=Object(m.useState)(!1),s=i[0],c=i[1],u=Object(W.a)("api/v1/release_notes",Object(o.a)(r.a.mark((function e(){return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",l.a.releaseNotes.get());case 1:case"end":return e.stop()}}),e)})))).data;(!n&&(null===u||void 0===u?void 0:u.lastUpdatedUnixTime)||new Date(n)<new Date(null===u||void 0===u?void 0:u.lastUpdatedUnixTime))&&(Z.a.open({message:"We've got new features/bug fixes",type:"info",duration:0,description:"Click to see what's new!",className:"clickable-notification hide-in-percy",style:{cursor:"pointer"},onClick:function(){c(!0),Z.a.destroy()}}),a(new Date));return ue("div",{onClick:function(e){"notion-link"===e.target.className&&(e.preventDefault(),window.open(e.target.href))}},(null===u||void 0===u?void 0:u.releaseNotes)?ue(J.a,{title:"Release Notes",visible:s,bodyStyle:{padding:"0px 24px"},footer:ue(f.a.Fragment,null,ue("b",null,"Want to see more? "),ue("a",{href:"https://www.notion.so/Release-Notes-Archive-9a1a0eab073a463096fc3699bf48219c",target:"_blank",rel:"noreferrer"}," ","Click here to view the archive")),width:625,onCancel:function(){return c(!1)}},ue(ce,{blockMap:u.releaseNotes})):null)}var pe=f.a.createElement;function ge(){var e=Object(V.a)("firstTime",!0),t=Object(M.a)(e,2),n=t[0],a=t[1];return pe(J.a,{visible:n,footer:null,onCancel:function(){return a(!1)},width:625},pe("div",null,pe("h1",null," Welcome to the Khoury Office Hours app! \ud83c\udf89"),"This project was started by students in"," ",pe("a",{href:"https://www.sandboxnu.com/"},"Sandbox")," at the beginning of the summer and is still in development.",pe("br",null),pe("br",null),'We appreciate your patience with any "rough edges." \ud83d\ude05'))}var me=n("dppZ"),fe=n("Ogf2"),ve=n("nXdl"),be=n("NabS"),he=f.a.createElement;function ye(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function we(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?ye(Object(n),!0).forEach((function(t){Object(i.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):ye(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var je=v.a.div.withConfig({displayName:"today__Container",componentId:"guxhv1-0"})(["margin-top:32px;"]),ke=v.a.div.withConfig({displayName:"today__Title",componentId:"guxhv1-1"})(["font-weight:500;font-size:30px;color:#212934;"]);function Oe(){var e,t,n=Object(g.useRouter)().query.cid,a=Object(fe.a)(),i=Object(ve.a)(Number(n)),d=Object(me.a)(Number(n)),m=d.course,f=d.mutateCourse,v=function(){var e=Object(o.a)(r.a.mark((function e(t,n){var a;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=m&&m.queues.map((function(e){return e.id===t.id?we(we({},e),{},{notes:n}):e})),f(we(we({},m),{},{queues:a}),!1),e.next=4,l.a.queues.update(t.id,{notes:n,allowQuestions:t.allowQuestions});case 4:f();case 5:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),y=null===m||void 0===m?void 0:m.queues.find((function(e){return e.staffList.find((function(e){return e.id===a.id}))}));return he(be.a,null,he(p.a,null,he("title",null,null===m||void 0===m?void 0:m.name," | Khoury Office Hours")),he(de,null),he(ge,null),he(b.a,{courseId:Number(n)}),he(je,null,he(c.a,{gutter:64},he(u.a,{md:12,xs:24},he(c.a,{justify:"space-between"},he(ke,null,"Current Office Hours"),i===s.n.TA&&he(H.a,{courseId:Number(n),room:"Online",state:y?"CheckedIn":"CheckedOut"})),0===(null===m||void 0===m?void 0:null===(e=m.queues)||void 0===e?void 0:e.length)?he("h1",{style:{paddingTop:"100px"}},"There are currently no scheduled office hours"):null===m||void 0===m?void 0:null===(t=m.queues)||void 0===t?void 0:t.map((function(e){return he(L,{key:e.id,queue:e,isTA:i===s.n.TA,updateQueueNotes:v})})),!m&&he(R,null)),he(u.a,{md:12,sm:24},he(h.a,{courseId:Number(n),defaultView:"day"})))))}}},[["IUmI",0,2,11,18,1,3,5,4,6,7,8,9,10,12,15,16]]]);
//# sourceMappingURL=today.js.map