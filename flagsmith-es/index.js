function t(t,e){return e=e||{},new Promise((function(n,r){var i=new XMLHttpRequest,o=[],a=[],s={},u=function(){return{ok:2==(i.status/100|0),statusText:i.statusText,status:i.status,url:i.responseURL,text:function(){return Promise.resolve(i.responseText)},json:function(){return Promise.resolve(i.responseText).then(JSON.parse)},blob:function(){return Promise.resolve(new Blob([i.response]))},clone:u,headers:{keys:function(){return o},entries:function(){return a},get:function(t){return s[t.toLowerCase()]},has:function(t){return t.toLowerCase()in s}}}};for(var l in i.open(e.method||"get",t,!0),i.onload=function(){i.getAllResponseHeaders().replace(/^(.*?):[^\S\n]*([\s\S]*?)$/gm,(function(t,e,n){o.push(e=e.toLowerCase()),a.push([e,n]),s[e]=s[e]?s[e]+","+n:n})),n(u())},i.onerror=r,i.withCredentials="include"==e.credentials,e.headers)i.setRequestHeader(l,e.headers[l]);i.send(e.body||null)}))}var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{},n={},r={exports:{}};!function(t,n){var r="__lodash_hash_undefined__",i=9007199254740991,o="[object Arguments]",a="[object Function]",s="[object Object]",u=/^\[object .+?Constructor\]$/,l=/^(?:0|[1-9]\d*)$/,c={};c["[object Float32Array]"]=c["[object Float64Array]"]=c["[object Int8Array]"]=c["[object Int16Array]"]=c["[object Int32Array]"]=c["[object Uint8Array]"]=c["[object Uint8ClampedArray]"]=c["[object Uint16Array]"]=c["[object Uint32Array]"]=!0,c[o]=c["[object Array]"]=c["[object ArrayBuffer]"]=c["[object Boolean]"]=c["[object DataView]"]=c["[object Date]"]=c["[object Error]"]=c[a]=c["[object Map]"]=c["[object Number]"]=c[s]=c["[object RegExp]"]=c["[object Set]"]=c["[object String]"]=c["[object WeakMap]"]=!1;var f="object"==typeof e&&e&&e.Object===Object&&e,h="object"==typeof self&&self&&self.Object===Object&&self,g=f||h||Function("return this")(),v=n&&!n.nodeType&&n,p=v&&t&&!t.nodeType&&t,y=p&&p.exports===v,d=y&&f.process,_=function(){try{var t=p&&p.require&&p.require("util").types;return t||d&&d.binding&&d.binding("util")}catch(t){}}(),b=_&&_.isTypedArray;function m(t,e,n){switch(n.length){case 0:return t.call(e);case 1:return t.call(e,n[0]);case 2:return t.call(e,n[0],n[1]);case 3:return t.call(e,n[0],n[1],n[2])}return t.apply(e,n)}var S,w,O,j=Array.prototype,I=Function.prototype,E=Object.prototype,A=g["__core-js_shared__"],F=I.toString,T=E.hasOwnProperty,N=(S=/[^.]+$/.exec(A&&A.keys&&A.keys.IE_PROTO||""))?"Symbol(src)_1."+S:"",P=E.toString,L=F.call(Object),C=RegExp("^"+F.call(T).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$"),x=y?g.Buffer:void 0,J=g.Symbol,k=g.Uint8Array,z=x?x.allocUnsafe:void 0,R=(w=Object.getPrototypeOf,O=Object,function(t){return w(O(t))}),D=Object.create,U=E.propertyIsEnumerable,B=j.splice,M=J?J.toStringTag:void 0,G=function(){try{var t=pt(Object,"defineProperty");return t({},"",{}),t}catch(t){}}(),$=x?x.isBuffer:void 0,q=Math.max,V=Date.now,H=pt(g,"Map"),K=pt(Object,"create"),W=function(){function t(){}return function(e){if(!At(e))return{};if(D)return D(e);t.prototype=e;var n=new t;return t.prototype=void 0,n}}();function X(t){var e=-1,n=null==t?0:t.length;for(this.clear();++e<n;){var r=t[e];this.set(r[0],r[1])}}function Q(t){var e=-1,n=null==t?0:t.length;for(this.clear();++e<n;){var r=t[e];this.set(r[0],r[1])}}function Y(t){var e=-1,n=null==t?0:t.length;for(this.clear();++e<n;){var r=t[e];this.set(r[0],r[1])}}function Z(t){var e=this.__data__=new Q(t);this.size=e.size}function tt(t,e){var n=wt(t),r=!n&&St(t),i=!n&&!r&&jt(t),o=!n&&!r&&!i&&Tt(t),a=n||r||i||o,s=a?function(t,e){for(var n=-1,r=Array(t);++n<t;)r[n]=e(n);return r}(t.length,String):[],u=s.length;for(var l in t)!e&&!T.call(t,l)||a&&("length"==l||i&&("offset"==l||"parent"==l)||o&&("buffer"==l||"byteLength"==l||"byteOffset"==l)||yt(l,u))||s.push(l);return s}function et(t,e,n){(void 0!==n&&!mt(t[e],n)||void 0===n&&!(e in t))&&it(t,e,n)}function nt(t,e,n){var r=t[e];T.call(t,e)&&mt(r,n)&&(void 0!==n||e in t)||it(t,e,n)}function rt(t,e){for(var n=t.length;n--;)if(mt(t[n][0],e))return n;return-1}function it(t,e,n){"__proto__"==e&&G?G(t,e,{configurable:!0,enumerable:!0,value:n,writable:!0}):t[e]=n}X.prototype.clear=function(){this.__data__=K?K(null):{},this.size=0},X.prototype.delete=function(t){var e=this.has(t)&&delete this.__data__[t];return this.size-=e?1:0,e},X.prototype.get=function(t){var e=this.__data__;if(K){var n=e[t];return n===r?void 0:n}return T.call(e,t)?e[t]:void 0},X.prototype.has=function(t){var e=this.__data__;return K?void 0!==e[t]:T.call(e,t)},X.prototype.set=function(t,e){var n=this.__data__;return this.size+=this.has(t)?0:1,n[t]=K&&void 0===e?r:e,this},Q.prototype.clear=function(){this.__data__=[],this.size=0},Q.prototype.delete=function(t){var e=this.__data__,n=rt(e,t);return!(n<0)&&(n==e.length-1?e.pop():B.call(e,n,1),--this.size,!0)},Q.prototype.get=function(t){var e=this.__data__,n=rt(e,t);return n<0?void 0:e[n][1]},Q.prototype.has=function(t){return rt(this.__data__,t)>-1},Q.prototype.set=function(t,e){var n=this.__data__,r=rt(n,t);return r<0?(++this.size,n.push([t,e])):n[r][1]=e,this},Y.prototype.clear=function(){this.size=0,this.__data__={hash:new X,map:new(H||Q),string:new X}},Y.prototype.delete=function(t){var e=vt(this,t).delete(t);return this.size-=e?1:0,e},Y.prototype.get=function(t){return vt(this,t).get(t)},Y.prototype.has=function(t){return vt(this,t).has(t)},Y.prototype.set=function(t,e){var n=vt(this,t),r=n.size;return n.set(t,e),this.size+=n.size==r?0:1,this},Z.prototype.clear=function(){this.__data__=new Q,this.size=0},Z.prototype.delete=function(t){var e=this.__data__,n=e.delete(t);return this.size=e.size,n},Z.prototype.get=function(t){return this.__data__.get(t)},Z.prototype.has=function(t){return this.__data__.has(t)},Z.prototype.set=function(t,e){var n=this.__data__;if(n instanceof Q){var r=n.__data__;if(!H||r.length<199)return r.push([t,e]),this.size=++n.size,this;n=this.__data__=new Y(r)}return n.set(t,e),this.size=n.size,this};var ot,at=function(t,e,n){for(var r=-1,i=Object(t),o=n(t),a=o.length;a--;){var s=o[ot?a:++r];if(!1===e(i[s],s,i))break}return t};function st(t){return null==t?void 0===t?"[object Undefined]":"[object Null]":M&&M in Object(t)?function(t){var e=T.call(t,M),n=t[M];try{t[M]=void 0;var r=!0}catch(t){}var i=P.call(t);r&&(e?t[M]=n:delete t[M]);return i}(t):function(t){return P.call(t)}(t)}function ut(t){return Ft(t)&&st(t)==o}function lt(t){return!(!At(t)||function(t){return!!N&&N in t}(t))&&(It(t)?C:u).test(function(t){if(null!=t){try{return F.call(t)}catch(t){}try{return t+""}catch(t){}}return""}(t))}function ct(t){if(!At(t))return function(t){var e=[];if(null!=t)for(var n in Object(t))e.push(n);return e}(t);var e=dt(t),n=[];for(var r in t)("constructor"!=r||!e&&T.call(t,r))&&n.push(r);return n}function ft(t,e,n,r,i){t!==e&&at(e,(function(o,a){if(i||(i=new Z),At(o))!function(t,e,n,r,i,o,a){var u=_t(t,n),l=_t(e,n),c=a.get(l);if(c)return void et(t,n,c);var f=o?o(u,l,n+"",t,e,a):void 0,h=void 0===f;if(h){var g=wt(l),v=!g&&jt(l),p=!g&&!v&&Tt(l);f=l,g||v||p?wt(u)?f=u:Ft(m=u)&&Ot(m)?f=function(t,e){var n=-1,r=t.length;e||(e=Array(r));for(;++n<r;)e[n]=t[n];return e}(u):v?(h=!1,f=function(t,e){if(e)return t.slice();var n=t.length,r=z?z(n):new t.constructor(n);return t.copy(r),r}(l,!0)):p?(h=!1,y=l,d=!0?(_=y.buffer,b=new _.constructor(_.byteLength),new k(b).set(new k(_)),b):y.buffer,f=new y.constructor(d,y.byteOffset,y.length)):f=[]:function(t){if(!Ft(t)||st(t)!=s)return!1;var e=R(t);if(null===e)return!0;var n=T.call(e,"constructor")&&e.constructor;return"function"==typeof n&&n instanceof n&&F.call(n)==L}(l)||St(l)?(f=u,St(u)?f=function(t){return function(t,e,n,r){var i=!n;n||(n={});var o=-1,a=e.length;for(;++o<a;){var s=e[o],u=r?r(n[s],t[s],s,n,t):void 0;void 0===u&&(u=t[s]),i?it(n,s,u):nt(n,s,u)}return n}(t,Nt(t))}(u):At(u)&&!It(u)||(f=function(t){return"function"!=typeof t.constructor||dt(t)?{}:W(R(t))}(l))):h=!1}var y,d,_,b;var m;h&&(a.set(l,f),i(f,l,r,o,a),a.delete(l));et(t,n,f)}(t,e,a,n,ft,r,i);else{var u=r?r(_t(t,a),o,a+"",t,e,i):void 0;void 0===u&&(u=o),et(t,a,u)}}),Nt)}function ht(t,e){return bt(function(t,e,n){return e=q(void 0===e?t.length-1:e,0),function(){for(var r=arguments,i=-1,o=q(r.length-e,0),a=Array(o);++i<o;)a[i]=r[e+i];i=-1;for(var s=Array(e+1);++i<e;)s[i]=r[i];return s[e]=n(a),m(t,this,s)}}(t,e,Ct),t+"")}var gt=G?function(t,e){return G(t,"toString",{configurable:!0,enumerable:!1,value:(n=e,function(){return n}),writable:!0});var n}:Ct;function vt(t,e){var n,r,i=t.__data__;return("string"==(r=typeof(n=e))||"number"==r||"symbol"==r||"boolean"==r?"__proto__"!==n:null===n)?i["string"==typeof e?"string":"hash"]:i.map}function pt(t,e){var n=function(t,e){return null==t?void 0:t[e]}(t,e);return lt(n)?n:void 0}function yt(t,e){var n=typeof t;return!!(e=null==e?i:e)&&("number"==n||"symbol"!=n&&l.test(t))&&t>-1&&t%1==0&&t<e}function dt(t){var e=t&&t.constructor;return t===("function"==typeof e&&e.prototype||E)}function _t(t,e){if(("constructor"!==e||"function"!=typeof t[e])&&"__proto__"!=e)return t[e]}var bt=function(t){var e=0,n=0;return function(){var r=V(),i=16-(r-n);if(n=r,i>0){if(++e>=800)return arguments[0]}else e=0;return t.apply(void 0,arguments)}}(gt);function mt(t,e){return t===e||t!=t&&e!=e}var St=ut(function(){return arguments}())?ut:function(t){return Ft(t)&&T.call(t,"callee")&&!U.call(t,"callee")},wt=Array.isArray;function Ot(t){return null!=t&&Et(t.length)&&!It(t)}var jt=$||function(){return!1};function It(t){if(!At(t))return!1;var e=st(t);return e==a||"[object GeneratorFunction]"==e||"[object AsyncFunction]"==e||"[object Proxy]"==e}function Et(t){return"number"==typeof t&&t>-1&&t%1==0&&t<=i}function At(t){var e=typeof t;return null!=t&&("object"==e||"function"==e)}function Ft(t){return null!=t&&"object"==typeof t}var Tt=b?function(t){return function(e){return t(e)}}(b):function(t){return Ft(t)&&Et(t.length)&&!!c[st(t)]};function Nt(t){return Ot(t)?tt(t,!0):ct(t)}var Pt,Lt=(Pt=function(t,e,n){ft(t,e,n)},ht((function(t,e){var n=-1,r=e.length,i=r>1?e[r-1]:void 0,o=r>2?e[2]:void 0;for(i=Pt.length>3&&"function"==typeof i?(r--,i):void 0,o&&function(t,e,n){if(!At(n))return!1;var r=typeof e;return!!("number"==r?Ot(n)&&yt(e,n.length):"string"==r&&e in n)&&mt(n[e],t)}(e[0],e[1],o)&&(i=r<3?void 0:i,r=1),t=Object(t);++n<r;){var a=e[n];a&&Pt(t,a,n,i)}return t})));function Ct(t){return t}t.exports=Lt}(r,r.exports),Object.defineProperty(n,"__esModule",{value:!0});var i,o=function(t,e){if(Array.isArray(t))return t;if(Symbol.iterator in Object(t))return function(t,e){var n=[],r=!0,i=!1,o=void 0;try{for(var a,s=t[Symbol.iterator]();!(r=(a=s.next()).done)&&(n.push(a.value),!e||n.length!==e);r=!0);}catch(t){i=!0,o=t}finally{try{!r&&s.return&&s.return()}finally{if(i)throw o}}return n}(t,e);throw new TypeError("Invalid attempt to destructure non-iterable instance")},a=(i=r.exports)&&i.__esModule?i:{default:i};var s={getItem:function(t,e){return s.multiGet([t]).then((function(t){return t[0][1]})).then((function(t){return e&&e(null,t),t})).catch((function(t){return e&&e(t,null),t}))},setItem:function(t,e,n){return s.multiSet([[t,e]]).then((function(t){return n&&n(null,t),t})).catch((function(t){return n&&n(t,null),t}))},getAllKeys:function(t){return Promise.resolve(Object.keys(localStorage)).then((function(e){return t&&t(null,e),e})).catch((function(e){return t&&t(e,null),e}))},removeItem:function(t,e){return s.multiRemove([t]).then((function(){e&&e(null)})).catch((function(t){e&&e(t,null)}))},clear:function(){return new Promise((function(t){window.localStorage.clear(),t()}))},mergeItem:function(t,e){return s.multiMerge([[t,e]])},multiGet:function(t){return new Promise((function(e){e(t.reduce((function(t,e){return t.concat([[e,localStorage.getItem(e)]])}),[]))}))},multiSet:function(t){return new Promise((function(e,n){var r=[];return t.forEach((function(t){var e=o(t,2),n=e[0],i=e[1];try{localStorage.setItem(n,i)}catch(t){r.push(t)}})),r.length>0?n(r):e()}))},multiMerge:function(t){return new Promise((function(e,n){var r=[];return t.forEach((function(t){var e=o(t,2),n=e[0],i=e[1],s=localStorage.getItem(n);if(s)try{localStorage.setItem(n,JSON.stringify((0,a.default)(JSON.parse(s),JSON.parse(i))))}catch(t){r.push(t)}})),r.length>0?n(r):e()}))},multiRemove:function(t){return new Promise((function(e){t.forEach((function(t){return window.localStorage.removeItem(t)})),e()}))},flushGetRequests:function(){console.warn("AsyncStorage.flushGetRequests: Not supported on `web`")}},u=n.default=s,l=function(){return l=Object.assign||function(t){for(var e,n=1,r=arguments.length;n<r;n++)for(var i in e=arguments[n])Object.prototype.hasOwnProperty.call(e,i)&&(t[i]=e[i]);return t},l.apply(this,arguments)};function c(t,e,n){if(n||2===arguments.length)for(var r,i=0,o=e.length;i<o;i++)!r&&i in e||(r||(r=Array.prototype.slice.call(e,0,i)),r[i]=e[i]);return t.concat(r||Array.prototype.slice.call(e))}var f,h,g=function t(e,n){if(e===n)return!0;if(e&&n&&"object"==typeof e&&"object"==typeof n){if(e.constructor!==n.constructor)return!1;var r,i,o;if(Array.isArray(e)){if((r=e.length)!=n.length)return!1;for(i=r;0!=i--;)if(!t(e[i],n[i]))return!1;return!0}if(e.constructor===RegExp)return e.source===n.source&&e.flags===n.flags;if(e.valueOf!==Object.prototype.valueOf)return e.valueOf()===n.valueOf();if(e.toString!==Object.prototype.toString)return e.toString()===n.toString();if((r=(o=Object.keys(e)).length)!==Object.keys(n).length)return!1;for(i=r;0!=i--;)if(!Object.prototype.hasOwnProperty.call(n,o[i]))return!1;for(i=r;0!=i--;){var a=o[i];if(!t(e[a],n[a]))return!1}return!0}return e!=e&&n!=n},v=void 0!==v?v:"undefined"!=typeof window?window:{},p="https://api.flagsmith.com/api/v1/",y=function(t){return"Attempted to "+t+" a user before calling flagsmith.init. Call flagsmith.init first, if you wish to prevent it sending a request for flags, call init with preventFetch:true."},d=function(){function t(t){var e=this;this.getJSON=function(t,n,r){var i=e,o=i.environmentID,a=i.headers,s={method:n||"GET",body:r,headers:{"x-environment-key":o}};return n&&"GET"!==n&&(s.headers["Content-Type"]="application/json; charset=utf-8"),a&&Object.assign(s.headers,a),f(t,s).then((function(t){return t.text().then((function(e){var n=e;try{n=JSON.parse(e)}catch(t){}return t.ok?n:Promise.reject(n)}))}))},this.getFlags=function(t,n){var r=e,i=r.onChange,o=r.onError,a=r.identity,s=r.api,u=!1,c=function(t,n){var r=t.flags,o=t.traits;e.withTraits=!1;var a={},s={};if(o=o||[],(r=r||[]).forEach((function(t){a[t.feature.name.toLowerCase().replace(/ /g,"_")]={id:t.feature.id,enabled:t.enabled,value:t.feature_state_value}})),o.forEach((function(t){s[t.trait_key.toLowerCase().replace(/ /g,"_")]=t.trait_value})),e.oldFlags=l({},e.flags),n){var u={};n.map((function(t){u[t.name]=t})),e.segments=u}var c=g(e.flags,a),f=g(e.traits,s);e.flags=a,e.traits=s,e.updateStorage(),e.trigger&&e.trigger(),i&&i(e.oldFlags,{isFromServer:!0,flagsChanged:!c,traitsChanged:!f})};return a?Promise.all([e.withTraits?e.getJSON(s+"identities/","POST",JSON.stringify({identifier:a,traits:Object.keys(e.withTraits).map((function(t){return{trait_key:t,trait_value:e.withTraits[t]}}))})):e.getJSON(s+"identities/?identifier="+encodeURIComponent(a))]).then((function(e){c(e[0],e[1]),t&&!u&&(u=!0,t())})).catch((function(t){var e=t.message;o&&o({message:e})})):Promise.all([e.getJSON(s+"flags/")]).then((function(e){c({flags:e[0]},null),t&&!u&&(u=!0,t())})).catch((function(t){n&&!u&&(u=!0,n(t)),o&&o(t)}))},this.analyticsFlags=function(){var t=e.api;if(0!==Object.getOwnPropertyNames(e.evaluationEvent).length)return e.getJSON(t+"analytics/flags/","POST",JSON.stringify(e.evaluationEvent)).then((function(t){var n=e.getState();e.setState(l(l({},n),{evaluationEvent:{}})),e.updateEventStorage()})).catch((function(t){e.log("Exception fetching evaluationEvent",t)}))},this.analyticsInterval=null,this.api=null,this.cacheFlags=null,this.enableAnalytics=null,this.enableLogs=null,this.environmentID=null,this.evaluationEvent=null,this.flags=null,this.getFlagInterval=null,this.headers=null,this.initialised=null,this.oldFlags=null,this.onChange=null,this.onError=null,this.trigger=null,this.identity=null,this.segments=null,this.ticks=null,this.timer=null,this.traits=null,this.withTraits=null,this.evaluateFlag=function(t){if(e.enableAnalytics){if(!e.evaluationEvent)return;void 0===e.evaluationEvent[t]&&(e.evaluationEvent[t]=0),e.evaluationEvent[t]+=1}e.updateEventStorage()},this.getValue=function(t){var n=e.flags&&e.flags[t.toLowerCase().replace(/ /g,"_")],r=null;return n&&(r=n.value),e.evaluateFlag(t),r},this.getTrait=function(t){return e.traits&&e.traits[t.toLowerCase().replace(/ /g,"_")]},this.setTrait=function(t,n){var r=e,i=r.getJSON,o=r.identity,a=r.api;if(a){var s={identity:{identifier:o},trait_key:t,trait_value:n};return i("".concat(a,"traits/"),"POST",JSON.stringify(s)).then((function(){e.initialised&&e.getFlags()}))}console.error(y("setTrait"))},this.setTraits=function(t){var n=e,r=n.getJSON,i=n.identity,o=n.api;if(o){t&&"object"==typeof t||console.error("Expected object for flagsmith.setTraits");var a=Object.keys(t).map((function(e){return{identity:{identifier:i},trait_key:e,trait_value:t[e]}}));return r("".concat(o,"traits/bulk/"),"PUT",JSON.stringify(a)).then((function(){e.initialised&&e.getFlags()}))}console.error(y("setTraits"))},this.incrementTrait=function(t,n){var r=e,i=r.getJSON,o=r.identity,a=r.api;return i("".concat(a,"traits/increment-value/"),"POST",JSON.stringify({trait_key:t,increment_by:n,identifier:o})).then(e.getFlags)},this.hasFeature=function(t){var n=e.flags&&e.flags[t.toLowerCase().replace(/ /g,"_")],r=!1;return n&&n.enabled&&(r=!0),e.evaluateFlag(t),r},f=t.fetch?t.fetch:"undefined"!=typeof fetch?fetch:v.fetch,h=t.AsyncStorage}return t.prototype.init=function(t){var e=this,n=t.environmentID,r=t.api,i=void 0===r?p:r,o=t.headers,a=t.onChange,s=t.cacheFlags,u=t.onError,c=t.defaultFlags,f=t.preventFetch,g=t.enableLogs,v=t.enableAnalytics,y=t.AsyncStorage,d=t.identity,_=t.traits,b=t._trigger,m=t.state;return new Promise((function(t,r){if(e.environmentID=n,e.api=i,e.headers=o,e.getFlagInterval=null,e.analyticsInterval=null,e.onChange=a,e.trigger=b,e.onError=u,e.identity=d,e.withTraits=_,e.enableLogs=g,e.enableAnalytics=v||!1,e.flags=Object.assign({},c)||{},e.initialised=!0,e.ticks=1e4,e.timer=e.enableLogs?(new Date).valueOf():null,y&&(h=y),e.cacheFlags=void 0!==h&&s,e.setState(m),!n)throw r("Please specify a environment id"),"Please specify a environment id";h.getItem("BULLET_TRAIN_EVENT").then((function(t){if(t)try{e.evaluationEvent=JSON.parse(t)}catch(t){e.evaluationEvent={}}else e.evaluationEvent={};e.analyticsInterval=setInterval(e.analyticsFlags,e.ticks)})),e.enableAnalytics&&(e.analyticsInterval&&clearInterval(e.analyticsInterval),h.getItem("BULLET_TRAIN_EVENT",(function(t,n){if(n){var r=JSON.parse(n);r&&(m=e.getState(),e.log("Retrieved events from cache",n),e.setState(l(l({},m),{evaluationEvent:r})))}}))),s?h.getItem("BULLET_TRAIN_DB",(function(n,i){if(i)try{var o=JSON.parse(i);o&&o.api===e.api&&o.environmentID===e.environmentID&&(e.setState(o),e.log("Retrieved flags from cache",o)),e.flags?(e.trigger&&e.trigger(),e.onChange&&e.onChange(null,{isFromServer:!1}),e.oldFlags=e.flags,t(!0),f||e.getFlags()):f?t(!0):e.getFlags(t,r)}catch(t){e.log("Exception fetching cached logs",t)}else f?(c&&(e.trigger&&e.trigger(),e.onChange&&e.onChange(null,{isFromServer:!1})),t(!0)):e.getFlags(t,r)})):f?(c&&(e.trigger&&e.trigger(),e.onChange&&e.onChange(null,{isFromServer:!1})),t(!0)):e.getFlags(t,r)})).catch((function(t){return u&&u(t)}))},t.prototype.getAllFlags=function(){return this.flags},t.prototype.identify=function(t,e){return this.identity=t,e&&(this.withTraits=e),this.initialised?this.getFlags():Promise.resolve()},t.prototype.getState=function(){return{api:this.api,environmentID:this.environmentID,flags:this.flags,identity:this.identity,segments:this.segments,traits:this.traits,evaluationEvent:this.evaluationEvent}},t.prototype.setState=function(t){t&&(this.initialised=!0,this.api=t.api||this.api||p,this.environmentID=t.environmentID||this.environmentID,this.flags=t.flags||this.flags,this.identity=t.identity||this.identity,this.segments=t.segments||this.segments,this.traits=t.traits||this.traits,this.evaluationEvent=t.evaluationEvent||this.evaluationEvent)},t.prototype.log=function(){for(var t=[],e=0;e<arguments.length;e++)t[e]=arguments[e];this.enableLogs&&console.log.apply(this,c(["FLAGSMITH:",(new Date).valueOf()-this.timer,"ms"],t,!0))},t.prototype.updateStorage=function(){if(this.cacheFlags){var t=JSON.stringify(this.getState());this.log("Setting storage",t),h.setItem("BULLET_TRAIN_DB",t)}},t.prototype.updateEventStorage=function(){if(this.enableAnalytics){var t=JSON.stringify(this.getState().evaluationEvent);this.log("Setting event storage",t),h.setItem("BULLET_TRAIN_EVENT",t)}},t.prototype.logout=function(){return this.identity=null,this.segments=null,this.traits=null,this.initialised?this.getFlags():Promise.resolve()},t.prototype.startListening=function(t){void 0===t&&(t=1e3),this.getFlagInterval&&clearInterval(this.getFlagInterval),this.getFlagInterval=setInterval(this.getFlags,t)},t.prototype.stopListening=function(){clearInterval(this.getFlagInterval),this.getFlagInterval=null},t.prototype.getSegments=function(){},t}();function _(t){var e=t.fetch,n=t.AsyncStorage;return new d({fetch:e,AsyncStorage:n})}var b=_({AsyncStorage:u,fetch:t});"undefined"!=typeof window&&(window.flagsmith=b);var m=function(){return _({AsyncStorage:u,fetch:t})};export{m as createFlagsmithInstance,b as default};
//# sourceMappingURL=index.js.map