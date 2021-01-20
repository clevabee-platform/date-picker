var __extends=this&&this.__extends||function(){var e=function(t,n){e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)if(Object.prototype.hasOwnProperty.call(t,n))e[n]=t[n]};return e(t,n)};return function(t,n){e(t,n);function r(){this.constructor=t}t.prototype=n===null?Object.create(n):(r.prototype=n.prototype,new r)}}();var __awaiter=this&&this.__awaiter||function(e,t,n,r){function a(e){return e instanceof n?e:new n((function(t){t(e)}))}return new(n||(n=Promise))((function(n,i){function s(e){try{l(r.next(e))}catch(e){i(e)}}function o(e){try{l(r["throw"](e))}catch(e){i(e)}}function l(e){e.done?n(e.value):a(e.value).then(s,o)}l((r=r.apply(e,t||[])).next())}))};var __generator=this&&this.__generator||function(e,t){var n={label:0,sent:function(){if(i[0]&1)throw i[1];return i[1]},trys:[],ops:[]},r,a,i,s;return s={next:o(0),throw:o(1),return:o(2)},typeof Symbol==="function"&&(s[Symbol.iterator]=function(){return this}),s;function o(e){return function(t){return l([e,t])}}function l(s){if(r)throw new TypeError("Generator is already executing.");while(n)try{if(r=1,a&&(i=s[0]&2?a["return"]:s[0]?a["throw"]||((i=a["return"])&&i.call(a),0):a.next)&&!(i=i.call(a,s[1])).done)return i;if(a=0,i)s=[s[0]&2,i.value];switch(s[0]){case 0:case 1:i=s;break;case 4:n.label++;return{value:s[1],done:false};case 5:n.label++;a=s[1];s=[0];continue;case 7:s=n.ops.pop();n.trys.pop();continue;default:if(!(i=n.trys,i=i.length>0&&i[i.length-1])&&(s[0]===6||s[0]===2)){n=0;continue}if(s[0]===3&&(!i||s[1]>i[0]&&s[1]<i[3])){n.label=s[1];break}if(s[0]===6&&n.label<i[1]){n.label=i[1];i=s;break}if(i&&n.label<i[2]){n.label=i[2];n.ops.push(s);break}if(i[2])n.ops.pop();n.trys.pop();continue}s=t.call(e,n)}catch(e){s=[6,e];a=0}finally{r=i=0}if(s[0]&5)throw s[1];return{value:s[0]?s[1]:void 0,done:true}}};var __spreadArrays=this&&this.__spreadArrays||function(){for(var e=0,t=0,n=arguments.length;t<n;t++)e+=arguments[t].length;for(var r=Array(e),a=0,t=0;t<n;t++)for(var i=arguments[t],s=0,o=i.length;s<o;s++,a++)r[a]=i[s];return r};var NAMESPACE="duet";var isSvgMode=false;var win=typeof window!=="undefined"?window:{};var CSS=win.CSS;var doc=win.document||{head:{}};var plt={$flags$:0,$resourcesUrl$:"",jmp:function(e){return e()},raf:function(e){return requestAnimationFrame(e)},ael:function(e,t,n,r){return e.addEventListener(t,n,r)},rel:function(e,t,n,r){return e.removeEventListener(t,n,r)},ce:function(e,t){return new CustomEvent(e,t)}};var supportsShadow=true;var promiseResolve=function(e){return Promise.resolve(e)};var supportsConstructibleStylesheets=function(){try{new CSSStyleSheet;return true}catch(e){}return false}();var addHostEventListeners=function(e,t,n,r){if(n){n.map((function(n){var r=n[0],a=n[1],i=n[2];var s=getHostListenerTarget(e,r);var o=hostListenerProxy(t,i);var l=hostListenerOpts(r);plt.ael(s,a,o,l);(t.$rmListeners$=t.$rmListeners$||[]).push((function(){return plt.rel(s,a,o,l)}))}))}};var hostListenerProxy=function(e,t){return function(n){try{{if(e.$flags$&256){e.$lazyInstance$[t](n)}else{(e.$queuedListeners$=e.$queuedListeners$||[]).push([t,n])}}}catch(e){consoleError(e)}}};var getHostListenerTarget=function(e,t){if(t&4)return doc;return e};var hostListenerOpts=function(e){return(e&2)!==0};var ORG_LOCATION_ID="o";var SLOT_NODE_ID="s";var TEXT_NODE_ID="t";var HYDRATE_ID="s-id";var HYDRATED_STYLE_ID="sty-id";var HYDRATE_CHILD_ID="c-id";var HYDRATED_CSS="{visibility:hidden}.hydrated{visibility:inherit}";var createTime=function(e,t){if(t===void 0){t=""}{return function(){return}}};var uniqueTime=function(e,t){{return function(){return}}};var rootAppliedStyles=new WeakMap;var registerStyle=function(e,t,n){var r=styles.get(e);if(supportsConstructibleStylesheets&&n){r=r||new CSSStyleSheet;r.replace(t)}else{r=t}styles.set(e,r)};var addStyle=function(e,t,n,r){var a=getScopeId(t);var i=styles.get(a);e=e.nodeType===11?e:doc;if(i){if(typeof i==="string"){e=e.head||e;var s=rootAppliedStyles.get(e);var o=void 0;if(!s){rootAppliedStyles.set(e,s=new Set)}if(!s.has(a)){if(e.host&&(o=e.querySelector("["+HYDRATED_STYLE_ID+'="'+a+'"]'))){o.innerHTML=i}else{if(plt.$cssShim$){o=plt.$cssShim$.createHostStyle(r,a,i,!!(t.$flags$&10));var l=o["s-sc"];if(l){a=l;s=null}}else{o=doc.createElement("style");o.innerHTML=i}e.insertBefore(o,e.querySelector("link"))}if(s){s.add(a)}}}else if(!e.adoptedStyleSheets.includes(i)){e.adoptedStyleSheets=__spreadArrays(e.adoptedStyleSheets,[i])}}return a};var attachStyles=function(e){var t=e.$cmpMeta$;var n=e.$hostElement$;var r=createTime("attachStyles",t.$tagName$);var a=addStyle(n.getRootNode(),t,e.$modeName$,n);r()};var getScopeId=function(e,t){return"sc-"+e.$tagName$};var EMPTY_OBJ={};var SVG_NS="http://www.w3.org/2000/svg";var HTML_NS="http://www.w3.org/1999/xhtml";var isComplexType=function(e){e=typeof e;return e==="object"||e==="function"};var h=function(e,t){var n=[];for(var r=2;r<arguments.length;r++){n[r-2]=arguments[r]}var a=null;var i=null;var s=false;var o=false;var l=[];var $=function(t){for(var n=0;n<t.length;n++){a=t[n];if(Array.isArray(a)){$(a)}else if(a!=null&&typeof a!=="boolean"){if(s=typeof e!=="function"&&!isComplexType(a)){a=String(a)}if(s&&o){l[l.length-1].$text$+=a}else{l.push(s?newVNode(null,a):a)}o=s}}};$(n);if(t){if(t.key){i=t.key}{var c=t.className||t.class;if(c){t.class=typeof c!=="object"?c:Object.keys(c).filter((function(e){return c[e]})).join(" ")}}}if(typeof e==="function"){return e(t===null?{}:t,l,vdomFnUtils)}var u=newVNode(e,null);u.$attrs$=t;if(l.length>0){u.$children$=l}{u.$key$=i}return u};var newVNode=function(e,t){var n={$flags$:0,$tag$:e,$text$:t,$elm$:null,$children$:null};{n.$attrs$=null}{n.$key$=null}return n};var Host={};var isHost=function(e){return e&&e.$tag$===Host};var vdomFnUtils={forEach:function(e,t){return e.map(convertToPublic).forEach(t)},map:function(e,t){return e.map(convertToPublic).map(t).map(convertToPrivate)}};var convertToPublic=function(e){return{vattrs:e.$attrs$,vchildren:e.$children$,vkey:e.$key$,vname:e.$name$,vtag:e.$tag$,vtext:e.$text$}};var convertToPrivate=function(e){if(typeof e.vtag==="function"){var t=Object.assign({},e.vattrs);if(e.vkey){t.key=e.vkey}if(e.vname){t.name=e.vname}return h.apply(void 0,__spreadArrays([e.vtag,t],e.vchildren||[]))}var n=newVNode(e.vtag,e.vtext);n.$attrs$=e.vattrs;n.$children$=e.vchildren;n.$key$=e.vkey;n.$name$=e.vname;return n};var setAccessor=function(e,t,n,r,a,i){if(n!==r){var s=isMemberInElement(e,t);var o=t.toLowerCase();if(t==="class"){var l=e.classList;var $=parseClassList(n);var c=parseClassList(r);l.remove.apply(l,$.filter((function(e){return e&&!c.includes(e)})));l.add.apply(l,c.filter((function(e){return e&&!$.includes(e)})))}else if(t==="key");else if(t==="ref"){if(r){r(e)}}else if(!s&&t[0]==="o"&&t[1]==="n"){if(t[2]==="-"){t=t.slice(3)}else if(isMemberInElement(win,o)){t=o.slice(2)}else{t=o[2]+t.slice(3)}if(n){plt.rel(e,t,n,false)}if(r){plt.ael(e,t,r,false)}}else{var u=isComplexType(r);if((s||u&&r!==null)&&!a){try{if(!e.tagName.includes("-")){var f=r==null?"":r;if(t==="list"){s=false}else if(n==null||e[t]!=f){e[t]=f}}else{e[t]=r}}catch(e){}}if(r==null||r===false){if(r!==false||e.getAttribute(t)===""){{e.removeAttribute(t)}}}else if((!s||i&4||a)&&!u){r=r===true?"":r;{e.setAttribute(t,r)}}}}};var parseClassListRegex=/\s/;var parseClassList=function(e){return!e?[]:e.split(parseClassListRegex)};var updateElement=function(e,t,n,r){var a=t.$elm$.nodeType===11&&t.$elm$.host?t.$elm$.host:t.$elm$;var i=e&&e.$attrs$||EMPTY_OBJ;var s=t.$attrs$||EMPTY_OBJ;{for(r in i){if(!(r in s)){setAccessor(a,r,i[r],undefined,n,t.$flags$)}}}for(r in s){setAccessor(a,r,i[r],s[r],n,t.$flags$)}};var createElm=function(e,t,n,r){var a=t.$children$[n];var i=0;var s;var o;if(a.$text$!==null){s=a.$elm$=doc.createTextNode(a.$text$)}else{if(!isSvgMode){isSvgMode=a.$tag$==="svg"}s=a.$elm$=doc.createElementNS(isSvgMode?SVG_NS:HTML_NS,a.$tag$);if(isSvgMode&&a.$tag$==="foreignObject"){isSvgMode=false}{updateElement(null,a,isSvgMode)}if(a.$children$){for(i=0;i<a.$children$.length;++i){o=createElm(e,a,i);if(o){s.appendChild(o)}}}{if(a.$tag$==="svg"){isSvgMode=false}else if(s.tagName==="foreignObject"){isSvgMode=true}}}return s};var addVnodes=function(e,t,n,r,a,i){var s=e;var o;for(;a<=i;++a){if(r[a]){o=createElm(null,n,a);if(o){r[a].$elm$=o;s.insertBefore(o,t)}}}};var removeVnodes=function(e,t,n,r,a){for(;t<=n;++t){if(r=e[t]){a=r.$elm$;callNodeRefs(r);a.remove()}}};var updateChildren=function(e,t,n,r){var a=0;var i=0;var s=0;var o=0;var l=t.length-1;var $=t[0];var c=t[l];var u=r.length-1;var f=r[0];var d=r[u];var v;var p;while(a<=l&&i<=u){if($==null){$=t[++a]}else if(c==null){c=t[--l]}else if(f==null){f=r[++i]}else if(d==null){d=r[--u]}else if(isSameVnode($,f)){patch($,f);$=t[++a];f=r[++i]}else if(isSameVnode(c,d)){patch(c,d);c=t[--l];d=r[--u]}else if(isSameVnode($,d)){patch($,d);e.insertBefore($.$elm$,c.$elm$.nextSibling);$=t[++a];d=r[--u]}else if(isSameVnode(c,f)){patch(c,f);e.insertBefore(c.$elm$,$.$elm$);c=t[--l];f=r[++i]}else{s=-1;{for(o=a;o<=l;++o){if(t[o]&&t[o].$key$!==null&&t[o].$key$===f.$key$){s=o;break}}}if(s>=0){p=t[s];if(p.$tag$!==f.$tag$){v=createElm(t&&t[i],n,s)}else{patch(p,f);t[s]=undefined;v=p.$elm$}f=r[++i]}else{v=createElm(t&&t[i],n,i);f=r[++i]}if(v){{$.$elm$.parentNode.insertBefore(v,$.$elm$)}}}}if(a>l){addVnodes(e,r[u+1]==null?null:r[u+1].$elm$,n,r,i,u)}else if(i>u){removeVnodes(t,a,l)}};var isSameVnode=function(e,t){if(e.$tag$===t.$tag$){{return e.$key$===t.$key$}}return false};var patch=function(e,t){var n=t.$elm$=e.$elm$;var r=e.$children$;var a=t.$children$;var i=t.$tag$;var s=t.$text$;if(s===null){{isSvgMode=i==="svg"?true:i==="foreignObject"?false:isSvgMode}{{updateElement(e,t,isSvgMode)}}if(r!==null&&a!==null){updateChildren(n,r,t,a)}else if(a!==null){if(e.$text$!==null){n.textContent=""}addVnodes(n,null,t,a,0,a.length-1)}else if(r!==null){removeVnodes(r,0,r.length-1)}if(isSvgMode&&i==="svg"){isSvgMode=false}}else if(e.$text$!==s){n.data=s}};var callNodeRefs=function(e){{e.$attrs$&&e.$attrs$.ref&&e.$attrs$.ref(null);e.$children$&&e.$children$.map(callNodeRefs)}};var renderVdom=function(e,t){var n=e.$hostElement$;var r=e.$cmpMeta$;var a=e.$vnode$||newVNode(null,null);var i=isHost(t)?t:h(null,null,t);if(r.$attrsToReflect$){i.$attrs$=i.$attrs$||{};r.$attrsToReflect$.map((function(e){var t=e[0],r=e[1];return i.$attrs$[r]=n[t]}))}i.$tag$=null;i.$flags$|=4;e.$vnode$=i;i.$elm$=a.$elm$=n;patch(a,i)};var getElement=function(e){return getHostRef(e).$hostElement$};var createEvent=function(e,t,n){var r=getElement(e);return{emit:function(e){return emitEvent(r,t,{bubbles:!!(n&4),composed:!!(n&2),cancelable:!!(n&1),detail:e})}}};var emitEvent=function(e,t,n){var r=plt.ce(t,n);e.dispatchEvent(r);return r};var attachToAncestor=function(e,t){if(t&&!e.$onRenderResolve$&&t["s-p"]){t["s-p"].push(new Promise((function(t){return e.$onRenderResolve$=t})))}};var scheduleUpdate=function(e,t){if(e.$flags$&4){e.$flags$|=512;return}attachToAncestor(e,e.$ancestorComponent$);var n=function(){return dispatchHooks(e,t)};return n()};var dispatchHooks=function(e,t){var n=createTime("scheduleUpdate",e.$cmpMeta$.$tagName$);var r=e.$lazyInstance$;var a;if(t){{e.$flags$|=256;if(e.$queuedListeners$){e.$queuedListeners$.map((function(e){var t=e[0],n=e[1];return safeCall(r,t,n)}));e.$queuedListeners$=null}}{a=safeCall(r,"componentWillLoad")}}n();return then(a,(function(){return updateComponent(e,r,t)}))};var updateComponent=function(e,t,n){return __awaiter(void 0,void 0,void 0,(function(){var r,a,i,s,o,l;return __generator(this,(function($){r=e.$hostElement$;a=createTime("update",e.$cmpMeta$.$tagName$);i=r["s-rc"];if(n){attachStyles(e)}s=createTime("render",e.$cmpMeta$.$tagName$);{{{renderVdom(e,callRender(e,t))}}}if(plt.$cssShim$){plt.$cssShim$.updateHost(r)}if(i){i.map((function(e){return e()}));r["s-rc"]=undefined}s();a();{o=r["s-p"];l=function(){return postUpdateComponent(e)};if(o.length===0){l()}else{Promise.all(o).then(l);e.$flags$|=4;o.length=0}}return[2]}))}))};var callRender=function(e,t){try{t=t.render();{e.$flags$|=2}}catch(t){consoleError(t,e.$hostElement$)}return t};var postUpdateComponent=function(e){var t=e.$cmpMeta$.$tagName$;var n=e.$hostElement$;var r=createTime("postUpdate",t);var a=e.$ancestorComponent$;if(!(e.$flags$&64)){e.$flags$|=64;{addHydratedFlag(n)}r();{e.$onReadyResolve$(n);if(!a){appDidLoad()}}}else{r()}{e.$onInstanceResolve$(n)}{if(e.$onRenderResolve$){e.$onRenderResolve$();e.$onRenderResolve$=undefined}if(e.$flags$&512){nextTick((function(){return scheduleUpdate(e,false)}))}e.$flags$&=~(4|512)}};var appDidLoad=function(e){{addHydratedFlag(doc.documentElement)}nextTick((function(){return emitEvent(win,"appload",{detail:{namespace:NAMESPACE}})}))};var safeCall=function(e,t,n){if(e&&e[t]){try{return e[t](n)}catch(e){consoleError(e)}}return undefined};var then=function(e,t){return e&&e.then?e.then(t):t()};var addHydratedFlag=function(e){return e.classList.add("hydrated")};var initializeClientHydrate=function(e,t,n,r){var a=createTime("hydrateClient",t);var i=e.shadowRoot;var s=[];var o=[];var l=null;var $=r.$vnode$=newVNode(t,null);if(!plt.$orgLocNodes$){initializeDocumentHydrate(doc.body,plt.$orgLocNodes$=new Map)}e[HYDRATE_ID]=n;e.removeAttribute(HYDRATE_ID);clientHydrate($,s,o,l,e,e,n);s.map((function(e){var n=e.$hostId$+"."+e.$nodeId$;var r=plt.$orgLocNodes$.get(n);var a=e.$elm$;if(r&&supportsShadow&&r["s-en"]===""){r.parentNode.insertBefore(a,r.nextSibling)}if(!i){a["s-hn"]=t;if(r){a["s-ol"]=r;a["s-ol"]["s-nr"]=a}}plt.$orgLocNodes$.delete(n)}));a()};var clientHydrate=function(e,t,n,r,a,i,s){var o;var l;var $;var c;if(i.nodeType===1){o=i.getAttribute(HYDRATE_CHILD_ID);if(o){l=o.split(".");if(l[0]===s||l[0]==="0"){$={$flags$:0,$hostId$:l[0],$nodeId$:l[1],$depth$:l[2],$index$:l[3],$tag$:i.tagName.toLowerCase(),$elm$:i,$attrs$:null,$children$:null,$key$:null,$name$:null,$text$:null};t.push($);i.removeAttribute(HYDRATE_CHILD_ID);if(!e.$children$){e.$children$=[]}e.$children$[$.$index$]=$;e=$;if(r&&$.$depth$==="0"){r[$.$index$]=$.$elm$}}}for(c=i.childNodes.length-1;c>=0;c--){clientHydrate(e,t,n,r,a,i.childNodes[c],s)}if(i.shadowRoot){for(c=i.shadowRoot.childNodes.length-1;c>=0;c--){clientHydrate(e,t,n,r,a,i.shadowRoot.childNodes[c],s)}}}else if(i.nodeType===8){l=i.nodeValue.split(".");if(l[1]===s||l[1]==="0"){o=l[0];$={$flags$:0,$hostId$:l[1],$nodeId$:l[2],$depth$:l[3],$index$:l[4],$elm$:i,$attrs$:null,$children$:null,$key$:null,$name$:null,$tag$:null,$text$:null};if(o===TEXT_NODE_ID){$.$elm$=i.nextSibling;if($.$elm$&&$.$elm$.nodeType===3){$.$text$=$.$elm$.textContent;t.push($);i.remove();if(!e.$children$){e.$children$=[]}e.$children$[$.$index$]=$;if(r&&$.$depth$==="0"){r[$.$index$]=$.$elm$}}}else if($.$hostId$===s){if(o===SLOT_NODE_ID){$.$tag$="slot";if(l[5]){i["s-sn"]=$.$name$=l[5]}else{i["s-sn"]=""}i["s-sr"]=true;n.push($);if(!e.$children$){e.$children$=[]}e.$children$[$.$index$]=$}}}}else if(e&&e.$tag$==="style"){var u=newVNode(null,i.textContent);u.$elm$=i;u.$index$="0";e.$children$=[u]}};var initializeDocumentHydrate=function(e,t){if(e.nodeType===1){var n=0;for(;n<e.childNodes.length;n++){initializeDocumentHydrate(e.childNodes[n],t)}if(e.shadowRoot){for(n=0;n<e.shadowRoot.childNodes.length;n++){initializeDocumentHydrate(e.shadowRoot.childNodes[n],t)}}}else if(e.nodeType===8){var r=e.nodeValue.split(".");if(r[0]===ORG_LOCATION_ID){t.set(r[1]+"."+r[2],e);e.nodeValue="";e["s-en"]=r[3]}}};var parsePropertyValue=function(e,t){if(e!=null&&!isComplexType(e)){if(t&4){return e==="false"?false:e===""||!!e}if(t&2){return parseFloat(e)}if(t&1){return String(e)}return e}return e};var getValue=function(e,t){return getHostRef(e).$instanceValues$.get(t)};var setValue=function(e,t,n,r){var a=getHostRef(e);var i=a.$hostElement$;var s=a.$instanceValues$.get(t);var o=a.$flags$;var l=a.$lazyInstance$;n=parsePropertyValue(n,r.$members$[t][0]);if((!(o&8)||s===undefined)&&n!==s){a.$instanceValues$.set(t,n);if(l){if(r.$watchers$&&o&128){var $=r.$watchers$[t];if($){$.map((function(e){try{l[e](n,s,t)}catch(e){consoleError(e,i)}}))}}if((o&(2|16))===2){scheduleUpdate(a,false)}}}};var proxyComponent=function(e,t,n){if(t.$members$){if(e.watchers){t.$watchers$=e.watchers}var r=Object.entries(t.$members$);var a=e.prototype;r.map((function(e){var r=e[0],i=e[1][0];if(i&31||n&2&&i&32){Object.defineProperty(a,r,{get:function(){return getValue(this,r)},set:function(e){setValue(this,r,e,t)},configurable:true,enumerable:true})}else if(n&1&&i&64){Object.defineProperty(a,r,{value:function(){var e=[];for(var t=0;t<arguments.length;t++){e[t]=arguments[t]}var n=getHostRef(this);return n.$onInstancePromise$.then((function(){var t;return(t=n.$lazyInstance$)[r].apply(t,e)}))}})}}));if(n&1){var i=new Map;a.attributeChangedCallback=function(e,t,n){var r=this;plt.jmp((function(){var t=i.get(e);r[t]=n===null&&typeof r[t]==="boolean"?false:n}))};e.observedAttributes=r.filter((function(e){var t=e[0],n=e[1];return n[0]&15})).map((function(e){var n=e[0],r=e[1];var a=r[1]||n;i.set(a,n);if(r[0]&512){t.$attrsToReflect$.push([n,a])}return a}))}}return e};var initializeComponent=function(e,t,n,r,a){return __awaiter(void 0,void 0,void 0,(function(){var e,r,i,s,o,l,$;return __generator(this,(function(c){switch(c.label){case 0:if(!((t.$flags$&32)===0))return[3,3];t.$flags$|=32;a=loadModule(n);if(!a.then)return[3,2];e=uniqueTime();return[4,a];case 1:a=c.sent();e();c.label=2;case 2:if(!a.isProxied){{n.$watchers$=a.watchers}proxyComponent(a,n,2);a.isProxied=true}r=createTime("createInstance",n.$tagName$);{t.$flags$|=8}try{new a(t)}catch(e){consoleError(e)}{t.$flags$&=~8}{t.$flags$|=128}r();if(a.style){i=a.style;s=getScopeId(n);if(!styles.has(s)){o=createTime("registerStyles",n.$tagName$);registerStyle(s,i,!!(n.$flags$&1));o()}}c.label=3;case 3:l=t.$ancestorComponent$;$=function(){return scheduleUpdate(t,true)};if(l&&l["s-rc"]){l["s-rc"].push($)}else{$()}return[2]}}))}))};var connectedCallback=function(e){if((plt.$flags$&1)===0){var t=getHostRef(e);var n=t.$cmpMeta$;var r=createTime("connectedCallback",n.$tagName$);if(!(t.$flags$&1)){t.$flags$|=1;var a=void 0;{a=e.getAttribute(HYDRATE_ID);if(a){initializeClientHydrate(e,n.$tagName$,a,t)}}{var i=e;while(i=i.parentNode||i.host){if(i.nodeType===1&&i.hasAttribute("s-id")&&i["s-p"]||i["s-p"]){attachToAncestor(t,t.$ancestorComponent$=i);break}}}if(n.$members$){Object.entries(n.$members$).map((function(t){var n=t[0],r=t[1][0];if(r&31&&e.hasOwnProperty(n)){var a=e[n];delete e[n];e[n]=a}}))}{nextTick((function(){return initializeComponent(e,t,n)}))}}else{addHostEventListeners(e,t,n.$listeners$)}r()}};var disconnectedCallback=function(e){if((plt.$flags$&1)===0){var t=getHostRef(e);{if(t.$rmListeners$){t.$rmListeners$.map((function(e){return e()}));t.$rmListeners$=undefined}}if(plt.$cssShim$){plt.$cssShim$.removeHost(e)}}};var bootstrapLazy=function(e,t){if(t===void 0){t={}}var n=createTime();var r=[];var a=t.exclude||[];var i=win.customElements;var s=doc.head;var o=s.querySelector("meta[charset]");var l=doc.createElement("style");var $=[];var c;var u=true;Object.assign(plt,t);plt.$resourcesUrl$=new URL(t.resourcesUrl||"./",doc.baseURI).href;{plt.$flags$|=2}e.map((function(e){return e[1].map((function(t){var n={$flags$:t[0],$tagName$:t[1],$members$:t[2],$listeners$:t[3]};{n.$members$=t[2]}{n.$listeners$=t[3]}{n.$attrsToReflect$=[]}{n.$watchers$={}}var s=n.$tagName$;var o=function(e){__extends(t,e);function t(t){var r=e.call(this,t)||this;t=r;registerHost(t,n);return r}t.prototype.connectedCallback=function(){var e=this;if(c){clearTimeout(c);c=null}if(u){$.push(this)}else{plt.jmp((function(){return connectedCallback(e)}))}};t.prototype.disconnectedCallback=function(){var e=this;plt.jmp((function(){return disconnectedCallback(e)}))};t.prototype.componentOnReady=function(){return getHostRef(this).$onReadyPromise$};return t}(HTMLElement);n.$lazyBundleId$=e[0];if(!a.includes(s)&&!i.get(s)){r.push(s);i.define(s,proxyComponent(o,n,1))}}))}));{l.innerHTML=r+HYDRATED_CSS;l.setAttribute("data-styles","");s.insertBefore(l,o?o.nextSibling:s.firstChild)}u=false;if($.length){$.map((function(e){return e.connectedCallback()}))}else{{plt.jmp((function(){return c=setTimeout(appDidLoad,30)}))}}n()};var hostRefs=new WeakMap;var getHostRef=function(e){return hostRefs.get(e)};var registerInstance=function(e,t){return hostRefs.set(t.$lazyInstance$=e,t)};var registerHost=function(e,t){var n={$flags$:0,$hostElement$:e,$cmpMeta$:t,$instanceValues$:new Map};{n.$onInstancePromise$=new Promise((function(e){return n.$onInstanceResolve$=e}))}{n.$onReadyPromise$=new Promise((function(e){return n.$onReadyResolve$=e}));e["s-p"]=[];e["s-rc"]=[]}addHostEventListeners(e,n,t.$listeners$);return hostRefs.set(e,n)};var isMemberInElement=function(e,t){return t in e};var consoleError=function(e,t){return(0,console.error)(e,t)};var cmpModules=new Map;var loadModule=function(e,t,n){var r=e.$tagName$.replace(/-/g,"_");var a=e.$lazyBundleId$;var i=cmpModules.get(a);if(i){return i[r]}return import("./"+a+".entry.js"+"").then((function(e){{cmpModules.set(a,e)}return e[r]}),consoleError)};var styles=new Map;var nextTick=function(e){return promiseResolve().then(e)};export{CSS as C,Host as H,NAMESPACE as N,promiseResolve as a,bootstrapLazy as b,createEvent as c,doc as d,getElement as g,h,plt as p,registerInstance as r,win as w};