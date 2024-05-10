import{N as $,D as ie,b as Me,u as F}from"./index.81674d45.js";function we(e,t){return function(){return e.apply(t,arguments)}}const{toString:ve}=Object.prototype,{getPrototypeOf:ee}=Object,I=(e=>t=>{const r=ve.call(t);return e[r]||(e[r]=r.slice(8,-1).toLowerCase())})(Object.create(null)),g=e=>(e=e.toLowerCase(),t=>I(t)===e),q=e=>t=>typeof t===e,{isArray:C}=Array,B=q("undefined");function ze(e){return e!==null&&!B(e)&&e.constructor!==null&&!B(e.constructor)&&R(e.constructor.isBuffer)&&e.constructor.isBuffer(e)}const Ee=g("ArrayBuffer");function $e(e){let t;return typeof ArrayBuffer!="undefined"&&ArrayBuffer.isView?t=ArrayBuffer.isView(e):t=e&&e.buffer&&Ee(e.buffer),t}const Je=q("string"),R=q("function"),Se=q("number"),M=e=>e!==null&&typeof e=="object",Ve=e=>e===!0||e===!1,U=e=>{if(I(e)!=="object")return!1;const t=ee(e);return(t===null||t===Object.prototype||Object.getPrototypeOf(t)===null)&&!(Symbol.toStringTag in e)&&!(Symbol.iterator in e)},We=g("Date"),Ke=g("File"),Ge=g("Blob"),Xe=g("FileList"),Qe=e=>M(e)&&R(e.pipe),Ze=e=>{let t;return e&&(typeof FormData=="function"&&e instanceof FormData||R(e.append)&&((t=I(e))==="formdata"||t==="object"&&R(e.toString)&&e.toString()==="[object FormData]"))},Ye=g("URLSearchParams"),et=e=>e.trim?e.trim():e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,"");function L(e,t,{allOwnKeys:r=!1}={}){if(e===null||typeof e=="undefined")return;let n,s;if(typeof e!="object"&&(e=[e]),C(e))for(n=0,s=e.length;n<s;n++)t.call(null,e[n],n,e);else{const o=r?Object.getOwnPropertyNames(e):Object.keys(e),i=o.length;let c;for(n=0;n<i;n++)c=o[n],t.call(null,e[c],c,e)}}function Re(e,t){t=t.toLowerCase();const r=Object.keys(e);let n=r.length,s;for(;n-- >0;)if(s=r[n],t===s.toLowerCase())return s;return null}const Oe=(()=>typeof globalThis!="undefined"?globalThis:typeof self!="undefined"?self:typeof window!="undefined"?window:global)(),ge=e=>!B(e)&&e!==Oe;function G(){const{caseless:e}=ge(this)&&this||{},t={},r=(n,s)=>{const o=e&&Re(t,s)||s;U(t[o])&&U(n)?t[o]=G(t[o],n):U(n)?t[o]=G({},n):C(n)?t[o]=n.slice():t[o]=n};for(let n=0,s=arguments.length;n<s;n++)arguments[n]&&L(arguments[n],r);return t}const tt=(e,t,r,{allOwnKeys:n}={})=>(L(t,(s,o)=>{r&&R(s)?e[o]=we(s,r):e[o]=s},{allOwnKeys:n}),e),rt=e=>(e.charCodeAt(0)===65279&&(e=e.slice(1)),e),nt=(e,t,r,n)=>{e.prototype=Object.create(t.prototype,n),e.prototype.constructor=e,Object.defineProperty(e,"super",{value:t.prototype}),r&&Object.assign(e.prototype,r)},st=(e,t,r,n)=>{let s,o,i;const c={};if(t=t||{},e==null)return t;do{for(s=Object.getOwnPropertyNames(e),o=s.length;o-- >0;)i=s[o],(!n||n(i,e,t))&&!c[i]&&(t[i]=e[i],c[i]=!0);e=r!==!1&&ee(e)}while(e&&(!r||r(e,t))&&e!==Object.prototype);return t},ot=(e,t,r)=>{e=String(e),(r===void 0||r>e.length)&&(r=e.length),r-=t.length;const n=e.indexOf(t,r);return n!==-1&&n===r},it=e=>{if(!e)return null;if(C(e))return e;let t=e.length;if(!Se(t))return null;const r=new Array(t);for(;t-- >0;)r[t]=e[t];return r},at=(e=>t=>e&&t instanceof e)(typeof Uint8Array!="undefined"&&ee(Uint8Array)),ct=(e,t)=>{const n=(e&&e[Symbol.iterator]).call(e);let s;for(;(s=n.next())&&!s.done;){const o=s.value;t.call(e,o[0],o[1])}},lt=(e,t)=>{let r;const n=[];for(;(r=e.exec(t))!==null;)n.push(r);return n},ut=g("HTMLFormElement"),ft=e=>e.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g,function(r,n,s){return n.toUpperCase()+s}),ae=(({hasOwnProperty:e})=>(t,r)=>e.call(t,r))(Object.prototype),dt=g("RegExp"),Ae=(e,t)=>{const r=Object.getOwnPropertyDescriptors(e),n={};L(r,(s,o)=>{let i;(i=t(s,o,e))!==!1&&(n[o]=i||s)}),Object.defineProperties(e,n)},pt=e=>{Ae(e,(t,r)=>{if(R(e)&&["arguments","caller","callee"].indexOf(r)!==-1)return!1;const n=e[r];if(!!R(n)){if(t.enumerable=!1,"writable"in t){t.writable=!1;return}t.set||(t.set=()=>{throw Error("Can not rewrite read-only method '"+r+"'")})}})},ht=(e,t)=>{const r={},n=s=>{s.forEach(o=>{r[o]=!0})};return C(e)?n(e):n(String(e).split(t)),r},mt=()=>{},yt=(e,t)=>(e=+e,Number.isFinite(e)?e:t),J="abcdefghijklmnopqrstuvwxyz",ce="0123456789",Te={DIGIT:ce,ALPHA:J,ALPHA_DIGIT:J+J.toUpperCase()+ce},bt=(e=16,t=Te.ALPHA_DIGIT)=>{let r="";const{length:n}=t;for(;e--;)r+=t[Math.random()*n|0];return r};function wt(e){return!!(e&&R(e.append)&&e[Symbol.toStringTag]==="FormData"&&e[Symbol.iterator])}const Et=e=>{const t=new Array(10),r=(n,s)=>{if(M(n)){if(t.indexOf(n)>=0)return;if(!("toJSON"in n)){t[s]=n;const o=C(n)?[]:{};return L(n,(i,c)=>{const p=r(i,s+1);!B(p)&&(o[c]=p)}),t[s]=void 0,o}}return n};return r(e,0)},St=g("AsyncFunction"),Rt=e=>e&&(M(e)||R(e))&&R(e.then)&&R(e.catch);var a={isArray:C,isArrayBuffer:Ee,isBuffer:ze,isFormData:Ze,isArrayBufferView:$e,isString:Je,isNumber:Se,isBoolean:Ve,isObject:M,isPlainObject:U,isUndefined:B,isDate:We,isFile:Ke,isBlob:Ge,isRegExp:dt,isFunction:R,isStream:Qe,isURLSearchParams:Ye,isTypedArray:at,isFileList:Xe,forEach:L,merge:G,extend:tt,trim:et,stripBOM:rt,inherits:nt,toFlatObject:st,kindOf:I,kindOfTest:g,endsWith:ot,toArray:it,forEachEntry:ct,matchAll:lt,isHTMLForm:ut,hasOwnProperty:ae,hasOwnProp:ae,reduceDescriptors:Ae,freezeMethods:pt,toObjectSet:ht,toCamelCase:ft,noop:mt,toFiniteNumber:yt,findKey:Re,global:Oe,isContextDefined:ge,ALPHABET:Te,generateString:bt,isSpecCompliantForm:wt,toJSONObject:Et,isAsyncFn:St,isThenable:Rt};function m(e,t,r,n,s){Error.call(this),Error.captureStackTrace?Error.captureStackTrace(this,this.constructor):this.stack=new Error().stack,this.message=e,this.name="AxiosError",t&&(this.code=t),r&&(this.config=r),n&&(this.request=n),s&&(this.response=s)}a.inherits(m,Error,{toJSON:function(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:a.toJSONObject(this.config),code:this.code,status:this.response&&this.response.status?this.response.status:null}}});const xe=m.prototype,Pe={};["ERR_BAD_OPTION_VALUE","ERR_BAD_OPTION","ECONNABORTED","ETIMEDOUT","ERR_NETWORK","ERR_FR_TOO_MANY_REDIRECTS","ERR_DEPRECATED","ERR_BAD_RESPONSE","ERR_BAD_REQUEST","ERR_CANCELED","ERR_NOT_SUPPORT","ERR_INVALID_URL"].forEach(e=>{Pe[e]={value:e}});Object.defineProperties(m,Pe);Object.defineProperty(xe,"isAxiosError",{value:!0});m.from=(e,t,r,n,s,o)=>{const i=Object.create(xe);return a.toFlatObject(e,i,function(p){return p!==Error.prototype},c=>c!=="isAxiosError"),m.call(i,e.message,t,r,n,s),i.cause=e,i.name=e.name,o&&Object.assign(i,o),i};var Ot=null;function X(e){return a.isPlainObject(e)||a.isArray(e)}function Ne(e){return a.endsWith(e,"[]")?e.slice(0,-2):e}function le(e,t,r){return e?e.concat(t).map(function(s,o){return s=Ne(s),!r&&o?"["+s+"]":s}).join(r?".":""):t}function gt(e){return a.isArray(e)&&!e.some(X)}const At=a.toFlatObject(a,{},null,function(t){return/^is[A-Z]/.test(t)});function v(e,t,r){if(!a.isObject(e))throw new TypeError("target must be an object");t=t||new FormData,r=a.toFlatObject(r,{metaTokens:!0,dots:!1,indexes:!1},!1,function(d,w){return!a.isUndefined(w[d])});const n=r.metaTokens,s=r.visitor||u,o=r.dots,i=r.indexes,p=(r.Blob||typeof Blob!="undefined"&&Blob)&&a.isSpecCompliantForm(t);if(!a.isFunction(s))throw new TypeError("visitor must be a function");function h(f){if(f===null)return"";if(a.isDate(f))return f.toISOString();if(!p&&a.isBlob(f))throw new m("Blob is not supported. Use a Buffer instead.");return a.isArrayBuffer(f)||a.isTypedArray(f)?p&&typeof Blob=="function"?new Blob([f]):Buffer.from(f):f}function u(f,d,w){let E=f;if(f&&!w&&typeof f=="object"){if(a.endsWith(d,"{}"))d=n?d:d.slice(0,-2),f=JSON.stringify(f);else if(a.isArray(f)&&gt(f)||(a.isFileList(f)||a.endsWith(d,"[]"))&&(E=a.toArray(f)))return d=Ne(d),E.forEach(function(x,qe){!(a.isUndefined(x)||x===null)&&t.append(i===!0?le([d],qe,o):i===null?d:d+"[]",h(x))}),!1}return X(f)?!0:(t.append(le(w,d,o),h(f)),!1)}const l=[],b=Object.assign(At,{defaultVisitor:u,convertValue:h,isVisitable:X});function S(f,d){if(!a.isUndefined(f)){if(l.indexOf(f)!==-1)throw Error("Circular reference detected in "+d.join("."));l.push(f),a.forEach(f,function(E,T){(!(a.isUndefined(E)||E===null)&&s.call(t,E,a.isString(T)?T.trim():T,d,b))===!0&&S(E,d?d.concat(T):[T])}),l.pop()}}if(!a.isObject(e))throw new TypeError("data must be an object");return S(e),t}function ue(e){const t={"!":"%21","'":"%27","(":"%28",")":"%29","~":"%7E","%20":"+","%00":"\0"};return encodeURIComponent(e).replace(/[!'()~]|%20|%00/g,function(n){return t[n]})}function te(e,t){this._pairs=[],e&&v(e,this,t)}const Ce=te.prototype;Ce.append=function(t,r){this._pairs.push([t,r])};Ce.toString=function(t){const r=t?function(n){return t.call(this,n,ue)}:ue;return this._pairs.map(function(s){return r(s[0])+"="+r(s[1])},"").join("&")};function Tt(e){return encodeURIComponent(e).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}function Fe(e,t,r){if(!t)return e;const n=r&&r.encode||Tt,s=r&&r.serialize;let o;if(s?o=s(t,r):o=a.isURLSearchParams(t)?t.toString():new te(t,r).toString(n),o){const i=e.indexOf("#");i!==-1&&(e=e.slice(0,i)),e+=(e.indexOf("?")===-1?"?":"&")+o}return e}class xt{constructor(){this.handlers=[]}use(t,r,n){return this.handlers.push({fulfilled:t,rejected:r,synchronous:n?n.synchronous:!1,runWhen:n?n.runWhen:null}),this.handlers.length-1}eject(t){this.handlers[t]&&(this.handlers[t]=null)}clear(){this.handlers&&(this.handlers=[])}forEach(t){a.forEach(this.handlers,function(n){n!==null&&t(n)})}}var fe=xt,_e={silentJSONParsing:!0,forcedJSONParsing:!0,clarifyTimeoutError:!1},Pt=typeof URLSearchParams!="undefined"?URLSearchParams:te,Nt=typeof FormData!="undefined"?FormData:null,Ct=typeof Blob!="undefined"?Blob:null,Ft={isBrowser:!0,classes:{URLSearchParams:Pt,FormData:Nt,Blob:Ct},protocols:["http","https","file","blob","url","data"]};const Be=typeof window!="undefined"&&typeof document!="undefined",_t=(e=>Be&&["ReactNative","NativeScript","NS"].indexOf(e)<0)(typeof navigator!="undefined"&&navigator.product),Bt=(()=>typeof WorkerGlobalScope!="undefined"&&self instanceof WorkerGlobalScope&&typeof self.importScripts=="function")();var Lt=Object.freeze(Object.defineProperty({__proto__:null,hasBrowserEnv:Be,hasStandardBrowserWebWorkerEnv:Bt,hasStandardBrowserEnv:_t},Symbol.toStringTag,{value:"Module"})),O={...Lt,...Ft};function Dt(e,t){return v(e,new O.classes.URLSearchParams,Object.assign({visitor:function(r,n,s,o){return O.isNode&&a.isBuffer(r)?(this.append(n,r.toString("base64")),!1):o.defaultVisitor.apply(this,arguments)}},t))}function Ut(e){return a.matchAll(/\w+|\[(\w*)]/g,e).map(t=>t[0]==="[]"?"":t[1]||t[0])}function kt(e){const t={},r=Object.keys(e);let n;const s=r.length;let o;for(n=0;n<s;n++)o=r[n],t[o]=e[o];return t}function Le(e){function t(r,n,s,o){let i=r[o++];if(i==="__proto__")return!0;const c=Number.isFinite(+i),p=o>=r.length;return i=!i&&a.isArray(s)?s.length:i,p?(a.hasOwnProp(s,i)?s[i]=[s[i],n]:s[i]=n,!c):((!s[i]||!a.isObject(s[i]))&&(s[i]=[]),t(r,n,s[i],o)&&a.isArray(s[i])&&(s[i]=kt(s[i])),!c)}if(a.isFormData(e)&&a.isFunction(e.entries)){const r={};return a.forEachEntry(e,(n,s)=>{t(Ut(n),s,r,0)}),r}return null}function jt(e,t,r){if(a.isString(e))try{return(t||JSON.parse)(e),a.trim(e)}catch(n){if(n.name!=="SyntaxError")throw n}return(r||JSON.stringify)(e)}const re={transitional:_e,adapter:["xhr","http"],transformRequest:[function(t,r){const n=r.getContentType()||"",s=n.indexOf("application/json")>-1,o=a.isObject(t);if(o&&a.isHTMLForm(t)&&(t=new FormData(t)),a.isFormData(t))return s?JSON.stringify(Le(t)):t;if(a.isArrayBuffer(t)||a.isBuffer(t)||a.isStream(t)||a.isFile(t)||a.isBlob(t))return t;if(a.isArrayBufferView(t))return t.buffer;if(a.isURLSearchParams(t))return r.setContentType("application/x-www-form-urlencoded;charset=utf-8",!1),t.toString();let c;if(o){if(n.indexOf("application/x-www-form-urlencoded")>-1)return Dt(t,this.formSerializer).toString();if((c=a.isFileList(t))||n.indexOf("multipart/form-data")>-1){const p=this.env&&this.env.FormData;return v(c?{"files[]":t}:t,p&&new p,this.formSerializer)}}return o||s?(r.setContentType("application/json",!1),jt(t)):t}],transformResponse:[function(t){const r=this.transitional||re.transitional,n=r&&r.forcedJSONParsing,s=this.responseType==="json";if(t&&a.isString(t)&&(n&&!this.responseType||s)){const i=!(r&&r.silentJSONParsing)&&s;try{return JSON.parse(t)}catch(c){if(i)throw c.name==="SyntaxError"?m.from(c,m.ERR_BAD_RESPONSE,this,null,this.response):c}}return t}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,env:{FormData:O.classes.FormData,Blob:O.classes.Blob},validateStatus:function(t){return t>=200&&t<300},headers:{common:{Accept:"application/json, text/plain, */*","Content-Type":void 0}}};a.forEach(["delete","get","head","post","put","patch"],e=>{re.headers[e]={}});var ne=re;const Ht=a.toObjectSet(["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"]);var It=e=>{const t={};let r,n,s;return e&&e.split(`
`).forEach(function(i){s=i.indexOf(":"),r=i.substring(0,s).trim().toLowerCase(),n=i.substring(s+1).trim(),!(!r||t[r]&&Ht[r])&&(r==="set-cookie"?t[r]?t[r].push(n):t[r]=[n]:t[r]=t[r]?t[r]+", "+n:n)}),t};const de=Symbol("internals");function _(e){return e&&String(e).trim().toLowerCase()}function k(e){return e===!1||e==null?e:a.isArray(e)?e.map(k):String(e)}function qt(e){const t=Object.create(null),r=/([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;let n;for(;n=r.exec(e);)t[n[1]]=n[2];return t}const Mt=e=>/^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(e.trim());function V(e,t,r,n,s){if(a.isFunction(n))return n.call(this,t,r);if(s&&(t=r),!!a.isString(t)){if(a.isString(n))return t.indexOf(n)!==-1;if(a.isRegExp(n))return n.test(t)}}function vt(e){return e.trim().toLowerCase().replace(/([a-z\d])(\w*)/g,(t,r,n)=>r.toUpperCase()+n)}function zt(e,t){const r=a.toCamelCase(" "+t);["get","set","has"].forEach(n=>{Object.defineProperty(e,n+r,{value:function(s,o,i){return this[n].call(this,t,s,o,i)},configurable:!0})})}class z{constructor(t){t&&this.set(t)}set(t,r,n){const s=this;function o(c,p,h){const u=_(p);if(!u)throw new Error("header name must be a non-empty string");const l=a.findKey(s,u);(!l||s[l]===void 0||h===!0||h===void 0&&s[l]!==!1)&&(s[l||p]=k(c))}const i=(c,p)=>a.forEach(c,(h,u)=>o(h,u,p));return a.isPlainObject(t)||t instanceof this.constructor?i(t,r):a.isString(t)&&(t=t.trim())&&!Mt(t)?i(It(t),r):t!=null&&o(r,t,n),this}get(t,r){if(t=_(t),t){const n=a.findKey(this,t);if(n){const s=this[n];if(!r)return s;if(r===!0)return qt(s);if(a.isFunction(r))return r.call(this,s,n);if(a.isRegExp(r))return r.exec(s);throw new TypeError("parser must be boolean|regexp|function")}}}has(t,r){if(t=_(t),t){const n=a.findKey(this,t);return!!(n&&this[n]!==void 0&&(!r||V(this,this[n],n,r)))}return!1}delete(t,r){const n=this;let s=!1;function o(i){if(i=_(i),i){const c=a.findKey(n,i);c&&(!r||V(n,n[c],c,r))&&(delete n[c],s=!0)}}return a.isArray(t)?t.forEach(o):o(t),s}clear(t){const r=Object.keys(this);let n=r.length,s=!1;for(;n--;){const o=r[n];(!t||V(this,this[o],o,t,!0))&&(delete this[o],s=!0)}return s}normalize(t){const r=this,n={};return a.forEach(this,(s,o)=>{const i=a.findKey(n,o);if(i){r[i]=k(s),delete r[o];return}const c=t?vt(o):String(o).trim();c!==o&&delete r[o],r[c]=k(s),n[c]=!0}),this}concat(...t){return this.constructor.concat(this,...t)}toJSON(t){const r=Object.create(null);return a.forEach(this,(n,s)=>{n!=null&&n!==!1&&(r[s]=t&&a.isArray(n)?n.join(", "):n)}),r}[Symbol.iterator](){return Object.entries(this.toJSON())[Symbol.iterator]()}toString(){return Object.entries(this.toJSON()).map(([t,r])=>t+": "+r).join(`
`)}get[Symbol.toStringTag](){return"AxiosHeaders"}static from(t){return t instanceof this?t:new this(t)}static concat(t,...r){const n=new this(t);return r.forEach(s=>n.set(s)),n}static accessor(t){const n=(this[de]=this[de]={accessors:{}}).accessors,s=this.prototype;function o(i){const c=_(i);n[c]||(zt(s,i),n[c]=!0)}return a.isArray(t)?t.forEach(o):o(t),this}}z.accessor(["Content-Type","Content-Length","Accept","Accept-Encoding","User-Agent","Authorization"]);a.reduceDescriptors(z.prototype,({value:e},t)=>{let r=t[0].toUpperCase()+t.slice(1);return{get:()=>e,set(n){this[r]=n}}});a.freezeMethods(z);var A=z;function W(e,t){const r=this||ne,n=t||r,s=A.from(n.headers);let o=n.data;return a.forEach(e,function(c){o=c.call(r,o,s.normalize(),t?t.status:void 0)}),s.normalize(),o}function De(e){return!!(e&&e.__CANCEL__)}function D(e,t,r){m.call(this,e==null?"canceled":e,m.ERR_CANCELED,t,r),this.name="CanceledError"}a.inherits(D,m,{__CANCEL__:!0});function $t(e,t,r){const n=r.config.validateStatus;!r.status||!n||n(r.status)?e(r):t(new m("Request failed with status code "+r.status,[m.ERR_BAD_REQUEST,m.ERR_BAD_RESPONSE][Math.floor(r.status/100)-4],r.config,r.request,r))}var Jt=O.hasStandardBrowserEnv?{write(e,t,r,n,s,o){const i=[e+"="+encodeURIComponent(t)];a.isNumber(r)&&i.push("expires="+new Date(r).toGMTString()),a.isString(n)&&i.push("path="+n),a.isString(s)&&i.push("domain="+s),o===!0&&i.push("secure"),document.cookie=i.join("; ")},read(e){const t=document.cookie.match(new RegExp("(^|;\\s*)("+e+")=([^;]*)"));return t?decodeURIComponent(t[3]):null},remove(e){this.write(e,"",Date.now()-864e5)}}:{write(){},read(){return null},remove(){}};function Vt(e){return/^([a-z][a-z\d+\-.]*:)?\/\//i.test(e)}function Wt(e,t){return t?e.replace(/\/?\/$/,"")+"/"+t.replace(/^\/+/,""):e}function Ue(e,t){return e&&!Vt(t)?Wt(e,t):t}var Kt=O.hasStandardBrowserEnv?function(){const t=/(msie|trident)/i.test(navigator.userAgent),r=document.createElement("a");let n;function s(o){let i=o;return t&&(r.setAttribute("href",i),i=r.href),r.setAttribute("href",i),{href:r.href,protocol:r.protocol?r.protocol.replace(/:$/,""):"",host:r.host,search:r.search?r.search.replace(/^\?/,""):"",hash:r.hash?r.hash.replace(/^#/,""):"",hostname:r.hostname,port:r.port,pathname:r.pathname.charAt(0)==="/"?r.pathname:"/"+r.pathname}}return n=s(window.location.href),function(i){const c=a.isString(i)?s(i):i;return c.protocol===n.protocol&&c.host===n.host}}():function(){return function(){return!0}}();function Gt(e){const t=/^([-+\w]{1,25})(:?\/\/|:)/.exec(e);return t&&t[1]||""}function Xt(e,t){e=e||10;const r=new Array(e),n=new Array(e);let s=0,o=0,i;return t=t!==void 0?t:1e3,function(p){const h=Date.now(),u=n[o];i||(i=h),r[s]=p,n[s]=h;let l=o,b=0;for(;l!==s;)b+=r[l++],l=l%e;if(s=(s+1)%e,s===o&&(o=(o+1)%e),h-i<t)return;const S=u&&h-u;return S?Math.round(b*1e3/S):void 0}}function pe(e,t){let r=0;const n=Xt(50,250);return s=>{const o=s.loaded,i=s.lengthComputable?s.total:void 0,c=o-r,p=n(c),h=o<=i;r=o;const u={loaded:o,total:i,progress:i?o/i:void 0,bytes:c,rate:p||void 0,estimated:p&&i&&h?(i-o)/p:void 0,event:s};u[t?"download":"upload"]=!0,e(u)}}const Qt=typeof XMLHttpRequest!="undefined";var Zt=Qt&&function(e){return new Promise(function(r,n){let s=e.data;const o=A.from(e.headers).normalize();let{responseType:i,withXSRFToken:c}=e,p;function h(){e.cancelToken&&e.cancelToken.unsubscribe(p),e.signal&&e.signal.removeEventListener("abort",p)}let u;if(a.isFormData(s)){if(O.hasStandardBrowserEnv||O.hasStandardBrowserWebWorkerEnv)o.setContentType(!1);else if((u=o.getContentType())!==!1){const[d,...w]=u?u.split(";").map(E=>E.trim()).filter(Boolean):[];o.setContentType([d||"multipart/form-data",...w].join("; "))}}let l=new XMLHttpRequest;if(e.auth){const d=e.auth.username||"",w=e.auth.password?unescape(encodeURIComponent(e.auth.password)):"";o.set("Authorization","Basic "+btoa(d+":"+w))}const b=Ue(e.baseURL,e.url);l.open(e.method.toUpperCase(),Fe(b,e.params,e.paramsSerializer),!0),l.timeout=e.timeout;function S(){if(!l)return;const d=A.from("getAllResponseHeaders"in l&&l.getAllResponseHeaders()),E={data:!i||i==="text"||i==="json"?l.responseText:l.response,status:l.status,statusText:l.statusText,headers:d,config:e,request:l};$t(function(x){r(x),h()},function(x){n(x),h()},E),l=null}if("onloadend"in l?l.onloadend=S:l.onreadystatechange=function(){!l||l.readyState!==4||l.status===0&&!(l.responseURL&&l.responseURL.indexOf("file:")===0)||setTimeout(S)},l.onabort=function(){!l||(n(new m("Request aborted",m.ECONNABORTED,e,l)),l=null)},l.onerror=function(){n(new m("Network Error",m.ERR_NETWORK,e,l)),l=null},l.ontimeout=function(){let w=e.timeout?"timeout of "+e.timeout+"ms exceeded":"timeout exceeded";const E=e.transitional||_e;e.timeoutErrorMessage&&(w=e.timeoutErrorMessage),n(new m(w,E.clarifyTimeoutError?m.ETIMEDOUT:m.ECONNABORTED,e,l)),l=null},O.hasStandardBrowserEnv&&(c&&a.isFunction(c)&&(c=c(e)),c||c!==!1&&Kt(b))){const d=e.xsrfHeaderName&&e.xsrfCookieName&&Jt.read(e.xsrfCookieName);d&&o.set(e.xsrfHeaderName,d)}s===void 0&&o.setContentType(null),"setRequestHeader"in l&&a.forEach(o.toJSON(),function(w,E){l.setRequestHeader(E,w)}),a.isUndefined(e.withCredentials)||(l.withCredentials=!!e.withCredentials),i&&i!=="json"&&(l.responseType=e.responseType),typeof e.onDownloadProgress=="function"&&l.addEventListener("progress",pe(e.onDownloadProgress,!0)),typeof e.onUploadProgress=="function"&&l.upload&&l.upload.addEventListener("progress",pe(e.onUploadProgress)),(e.cancelToken||e.signal)&&(p=d=>{!l||(n(!d||d.type?new D(null,e,l):d),l.abort(),l=null)},e.cancelToken&&e.cancelToken.subscribe(p),e.signal&&(e.signal.aborted?p():e.signal.addEventListener("abort",p)));const f=Gt(b);if(f&&O.protocols.indexOf(f)===-1){n(new m("Unsupported protocol "+f+":",m.ERR_BAD_REQUEST,e));return}l.send(s||null)})};const Q={http:Ot,xhr:Zt};a.forEach(Q,(e,t)=>{if(e){try{Object.defineProperty(e,"name",{value:t})}catch{}Object.defineProperty(e,"adapterName",{value:t})}});const he=e=>`- ${e}`,Yt=e=>a.isFunction(e)||e===null||e===!1;var ke={getAdapter:e=>{e=a.isArray(e)?e:[e];const{length:t}=e;let r,n;const s={};for(let o=0;o<t;o++){r=e[o];let i;if(n=r,!Yt(r)&&(n=Q[(i=String(r)).toLowerCase()],n===void 0))throw new m(`Unknown adapter '${i}'`);if(n)break;s[i||"#"+o]=n}if(!n){const o=Object.entries(s).map(([c,p])=>`adapter ${c} `+(p===!1?"is not supported by the environment":"is not available in the build"));let i=t?o.length>1?`since :
`+o.map(he).join(`
`):" "+he(o[0]):"as no adapter specified";throw new m("There is no suitable adapter to dispatch the request "+i,"ERR_NOT_SUPPORT")}return n},adapters:Q};function K(e){if(e.cancelToken&&e.cancelToken.throwIfRequested(),e.signal&&e.signal.aborted)throw new D(null,e)}function me(e){return K(e),e.headers=A.from(e.headers),e.data=W.call(e,e.transformRequest),["post","put","patch"].indexOf(e.method)!==-1&&e.headers.setContentType("application/x-www-form-urlencoded",!1),ke.getAdapter(e.adapter||ne.adapter)(e).then(function(n){return K(e),n.data=W.call(e,e.transformResponse,n),n.headers=A.from(n.headers),n},function(n){return De(n)||(K(e),n&&n.response&&(n.response.data=W.call(e,e.transformResponse,n.response),n.response.headers=A.from(n.response.headers))),Promise.reject(n)})}const ye=e=>e instanceof A?{...e}:e;function N(e,t){t=t||{};const r={};function n(h,u,l){return a.isPlainObject(h)&&a.isPlainObject(u)?a.merge.call({caseless:l},h,u):a.isPlainObject(u)?a.merge({},u):a.isArray(u)?u.slice():u}function s(h,u,l){if(a.isUndefined(u)){if(!a.isUndefined(h))return n(void 0,h,l)}else return n(h,u,l)}function o(h,u){if(!a.isUndefined(u))return n(void 0,u)}function i(h,u){if(a.isUndefined(u)){if(!a.isUndefined(h))return n(void 0,h)}else return n(void 0,u)}function c(h,u,l){if(l in t)return n(h,u);if(l in e)return n(void 0,h)}const p={url:o,method:o,data:o,baseURL:i,transformRequest:i,transformResponse:i,paramsSerializer:i,timeout:i,timeoutMessage:i,withCredentials:i,withXSRFToken:i,adapter:i,responseType:i,xsrfCookieName:i,xsrfHeaderName:i,onUploadProgress:i,onDownloadProgress:i,decompress:i,maxContentLength:i,maxBodyLength:i,beforeRedirect:i,transport:i,httpAgent:i,httpsAgent:i,cancelToken:i,socketPath:i,responseEncoding:i,validateStatus:c,headers:(h,u)=>s(ye(h),ye(u),!0)};return a.forEach(Object.keys(Object.assign({},e,t)),function(u){const l=p[u]||s,b=l(e[u],t[u],u);a.isUndefined(b)&&l!==c||(r[u]=b)}),r}const je="1.6.8",se={};["object","boolean","number","function","string","symbol"].forEach((e,t)=>{se[e]=function(n){return typeof n===e||"a"+(t<1?"n ":" ")+e}});const be={};se.transitional=function(t,r,n){function s(o,i){return"[Axios v"+je+"] Transitional option '"+o+"'"+i+(n?". "+n:"")}return(o,i,c)=>{if(t===!1)throw new m(s(i," has been removed"+(r?" in "+r:"")),m.ERR_DEPRECATED);return r&&!be[i]&&(be[i]=!0,console.warn(s(i," has been deprecated since v"+r+" and will be removed in the near future"))),t?t(o,i,c):!0}};function er(e,t,r){if(typeof e!="object")throw new m("options must be an object",m.ERR_BAD_OPTION_VALUE);const n=Object.keys(e);let s=n.length;for(;s-- >0;){const o=n[s],i=t[o];if(i){const c=e[o],p=c===void 0||i(c,o,e);if(p!==!0)throw new m("option "+o+" must be "+p,m.ERR_BAD_OPTION_VALUE);continue}if(r!==!0)throw new m("Unknown option "+o,m.ERR_BAD_OPTION)}}var Z={assertOptions:er,validators:se};const P=Z.validators;class H{constructor(t){this.defaults=t,this.interceptors={request:new fe,response:new fe}}async request(t,r){try{return await this._request(t,r)}catch(n){if(n instanceof Error){let s;Error.captureStackTrace?Error.captureStackTrace(s={}):s=new Error;const o=s.stack?s.stack.replace(/^.+\n/,""):"";n.stack?o&&!String(n.stack).endsWith(o.replace(/^.+\n.+\n/,""))&&(n.stack+=`
`+o):n.stack=o}throw n}}_request(t,r){typeof t=="string"?(r=r||{},r.url=t):r=t||{},r=N(this.defaults,r);const{transitional:n,paramsSerializer:s,headers:o}=r;n!==void 0&&Z.assertOptions(n,{silentJSONParsing:P.transitional(P.boolean),forcedJSONParsing:P.transitional(P.boolean),clarifyTimeoutError:P.transitional(P.boolean)},!1),s!=null&&(a.isFunction(s)?r.paramsSerializer={serialize:s}:Z.assertOptions(s,{encode:P.function,serialize:P.function},!0)),r.method=(r.method||this.defaults.method||"get").toLowerCase();let i=o&&a.merge(o.common,o[r.method]);o&&a.forEach(["delete","get","head","post","put","patch","common"],f=>{delete o[f]}),r.headers=A.concat(i,o);const c=[];let p=!0;this.interceptors.request.forEach(function(d){typeof d.runWhen=="function"&&d.runWhen(r)===!1||(p=p&&d.synchronous,c.unshift(d.fulfilled,d.rejected))});const h=[];this.interceptors.response.forEach(function(d){h.push(d.fulfilled,d.rejected)});let u,l=0,b;if(!p){const f=[me.bind(this),void 0];for(f.unshift.apply(f,c),f.push.apply(f,h),b=f.length,u=Promise.resolve(r);l<b;)u=u.then(f[l++],f[l++]);return u}b=c.length;let S=r;for(l=0;l<b;){const f=c[l++],d=c[l++];try{S=f(S)}catch(w){d.call(this,w);break}}try{u=me.call(this,S)}catch(f){return Promise.reject(f)}for(l=0,b=h.length;l<b;)u=u.then(h[l++],h[l++]);return u}getUri(t){t=N(this.defaults,t);const r=Ue(t.baseURL,t.url);return Fe(r,t.params,t.paramsSerializer)}}a.forEach(["delete","get","head","options"],function(t){H.prototype[t]=function(r,n){return this.request(N(n||{},{method:t,url:r,data:(n||{}).data}))}});a.forEach(["post","put","patch"],function(t){function r(n){return function(o,i,c){return this.request(N(c||{},{method:t,headers:n?{"Content-Type":"multipart/form-data"}:{},url:o,data:i}))}}H.prototype[t]=r(),H.prototype[t+"Form"]=r(!0)});var j=H;class oe{constructor(t){if(typeof t!="function")throw new TypeError("executor must be a function.");let r;this.promise=new Promise(function(o){r=o});const n=this;this.promise.then(s=>{if(!n._listeners)return;let o=n._listeners.length;for(;o-- >0;)n._listeners[o](s);n._listeners=null}),this.promise.then=s=>{let o;const i=new Promise(c=>{n.subscribe(c),o=c}).then(s);return i.cancel=function(){n.unsubscribe(o)},i},t(function(o,i,c){n.reason||(n.reason=new D(o,i,c),r(n.reason))})}throwIfRequested(){if(this.reason)throw this.reason}subscribe(t){if(this.reason){t(this.reason);return}this._listeners?this._listeners.push(t):this._listeners=[t]}unsubscribe(t){if(!this._listeners)return;const r=this._listeners.indexOf(t);r!==-1&&this._listeners.splice(r,1)}static source(){let t;return{token:new oe(function(s){t=s}),cancel:t}}}var tr=oe;function rr(e){return function(r){return e.apply(null,r)}}function nr(e){return a.isObject(e)&&e.isAxiosError===!0}const Y={Continue:100,SwitchingProtocols:101,Processing:102,EarlyHints:103,Ok:200,Created:201,Accepted:202,NonAuthoritativeInformation:203,NoContent:204,ResetContent:205,PartialContent:206,MultiStatus:207,AlreadyReported:208,ImUsed:226,MultipleChoices:300,MovedPermanently:301,Found:302,SeeOther:303,NotModified:304,UseProxy:305,Unused:306,TemporaryRedirect:307,PermanentRedirect:308,BadRequest:400,Unauthorized:401,PaymentRequired:402,Forbidden:403,NotFound:404,MethodNotAllowed:405,NotAcceptable:406,ProxyAuthenticationRequired:407,RequestTimeout:408,Conflict:409,Gone:410,LengthRequired:411,PreconditionFailed:412,PayloadTooLarge:413,UriTooLong:414,UnsupportedMediaType:415,RangeNotSatisfiable:416,ExpectationFailed:417,ImATeapot:418,MisdirectedRequest:421,UnprocessableEntity:422,Locked:423,FailedDependency:424,TooEarly:425,UpgradeRequired:426,PreconditionRequired:428,TooManyRequests:429,RequestHeaderFieldsTooLarge:431,UnavailableForLegalReasons:451,InternalServerError:500,NotImplemented:501,BadGateway:502,ServiceUnavailable:503,GatewayTimeout:504,HttpVersionNotSupported:505,VariantAlsoNegotiates:506,InsufficientStorage:507,LoopDetected:508,NotExtended:510,NetworkAuthenticationRequired:511};Object.entries(Y).forEach(([e,t])=>{Y[t]=e});var sr=Y;function He(e){const t=new j(e),r=we(j.prototype.request,t);return a.extend(r,j.prototype,t,{allOwnKeys:!0}),a.extend(r,t,null,{allOwnKeys:!0}),r.create=function(s){return He(N(e,s))},r}const y=He(ne);y.Axios=j;y.CanceledError=D;y.CancelToken=tr;y.isCancel=De;y.VERSION=je;y.toFormData=v;y.AxiosError=m;y.Cancel=y.CanceledError;y.all=function(t){return Promise.all(t)};y.spread=rr;y.isAxiosError=nr;y.mergeConfig=N;y.AxiosHeaders=A;y.formToJSON=e=>Le(a.isHTMLForm(e)?new FormData(e):e);y.getAdapter=ke.getAdapter;y.HttpStatusCode=sr;y.default=y;var Ie=y;class or{static success(t){$.create({progress:!0,color:"positive",position:"top",message:t,timeout:1500,actions:[{icon:"close",color:"white",size:"sm"}]})}static dialog(t){return ie.create({title:"Confirmaci\xF3n",message:t,color:"positive",ok:{label:"Aceptar",color:"positive"},cancel:{label:"Cancelar",color:"negative"}})}static confirm(t){return ie.create({title:"Confirmaci\xF3n",message:t,color:"positive",ok:{label:"Aceptar",color:"positive"},cancel:{label:"Cancelar",color:"negative"}})}static error(t){$.create({progress:!0,color:"negative",position:"top",message:t,timeout:1500,actions:[{icon:"close",color:"white",size:"sm"}]})}static warning(t){$.create({progress:!0,color:"warning",position:"top",message:t,timeout:1500,actions:[{icon:"close",color:"white",size:"sm"}]})}}const ir=Ie.create({baseURL:"https://api.example.com"});var cr=Me(({app:e,router:t})=>{e.config.globalProperties.$axios=Ie.create({baseURL:"https://bprestamo.siscenter.org/api/"}),e.config.globalProperties.$url="https://bprestamo.siscenter.org/api/",e.config.globalProperties.$alert=or,e.config.globalProperties.$store=F();const r=localStorage.getItem("tokenPrestamos");r&&(e.config.globalProperties.$axios.defaults.headers.common.Authorization=`Bearer ${r}`,e.config.globalProperties.$axios.get("me").then(n=>{F().isLogged=!0,F().user=n.data}).catch(n=>{console.log(n),localStorage.removeItem("tokenPrestamos"),F().isLogged=!1,F().user={},t.push("/login")})),e.config.globalProperties.$api=ir});export{ir as api,cr as default};
