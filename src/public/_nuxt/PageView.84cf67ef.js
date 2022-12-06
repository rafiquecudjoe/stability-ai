import{i as X,l as D,D as F,E as Z,F as j,w as K,u as b,G as ee,m as E,r as te,z as re,H as ne,I as se,b as ae,p as oe,o as ie,e as ce,f as T,t as N,B as ue}from"./entry.30c1e34e.js";const le=()=>null;function fe(...t){var y,x,v,O,w,_,h;const s=typeof t[t.length-1]=="string"?t.pop():void 0;typeof t[0]!="string"&&t.unshift(s);let[n,e,r={}]=t;if(typeof n!="string")throw new TypeError("[nuxt] [asyncData] key must be a string.");if(typeof e!="function")throw new TypeError("[nuxt] [asyncData] handler must be a function.");r.server=(y=r.server)!=null?y:!0,r.default=(x=r.default)!=null?x:le,r.lazy=(v=r.lazy)!=null?v:!1,r.immediate=(O=r.immediate)!=null?O:!0;const a=X(),i=()=>a.isHydrating?a.payload.data[n]:a.static.data[n],u=()=>i()!==void 0;a._asyncData[n]||(a._asyncData[n]={data:D((h=(_=i())!=null?_:(w=r.default)==null?void 0:w.call(r))!=null?h:null),pending:D(!u()),error:D(a.payload._errors[n]?F(a.payload._errors[n]):null)});const o={...a._asyncData[n]};o.refresh=o.execute=(f={})=>{if(a._asyncDataPromises[n]){if(f.dedupe===!1)return a._asyncDataPromises[n];a._asyncDataPromises[n].cancelled=!0}if(f._initial&&u())return i();o.pending.value=!0;const l=new Promise((c,g)=>{try{c(e(a))}catch(P){g(P)}}).then(c=>{if(l.cancelled)return a._asyncDataPromises[n];r.transform&&(c=r.transform(c)),r.pick&&(c=de(c,r.pick)),o.data.value=c,o.error.value=null}).catch(c=>{var g,P;if(l.cancelled)return a._asyncDataPromises[n];o.error.value=c,o.data.value=b((P=(g=r.default)==null?void 0:g.call(r))!=null?P:null)}).finally(()=>{l.cancelled||(o.pending.value=!1,a.payload.data[n]=o.data.value,o.error.value&&(a.payload._errors[n]=F(o.error.value)),delete a._asyncDataPromises[n])});return a._asyncDataPromises[n]=l,a._asyncDataPromises[n]};const d=()=>o.refresh({_initial:!0}),p=r.server!==!1&&a.payload.serverRendered;{const f=ee();if(f&&!f._nuxtOnBeforeMountCbs){f._nuxtOnBeforeMountCbs=[];const c=f._nuxtOnBeforeMountCbs;f&&(Z(()=>{c.forEach(g=>{g()}),c.splice(0,c.length)}),j(()=>c.splice(0,c.length)))}p&&a.isHydrating&&u()?o.pending.value=!1:f&&(a.payload.serverRendered&&a.isHydrating||r.lazy)&&r.immediate?f._nuxtOnBeforeMountCbs.push(d):r.immediate&&d(),r.watch&&K(r.watch,()=>o.refresh());const l=a.hook("app:data:refresh",c=>{if(!c||c.includes(n))return o.refresh()});f&&j(l)}const m=Promise.resolve(a._asyncDataPromises[n]).then(()=>o);return Object.assign(m,o),m}function de(t,s){const n={};for(const e of s)n[e]=t[e];return n}const pe={ignoreUnknown:!1,respectType:!1,respectFunctionNames:!1,respectFunctionProperties:!1,unorderedObjects:!0,unorderedArrays:!1,unorderedSets:!1};function he(t,s={}){s={...pe,...s};const n=G(s);return n.dispatch(t),n.toString()}function G(t){const s=[];let n=[];const e=r=>{s.push(r)};return{toString(){return s.join("")},getContext(){return n},dispatch(r){return t.replacer&&(r=t.replacer(r)),this["_"+(r===null?"null":typeof r)](r)},_object(r){const a=/\[object (.*)]/i,i=Object.prototype.toString.call(r),u=a.exec(i),o=u?u[1].toLowerCase():"unknown:["+i.toLowerCase()+"]";let d=null;if((d=n.indexOf(r))>=0)return this.dispatch("[CIRCULAR:"+d+"]");if(n.push(r),typeof Buffer<"u"&&Buffer.isBuffer&&Buffer.isBuffer(r))return e("buffer:"),e(r.toString("utf8"));if(o!=="object"&&o!=="function"&&o!=="asyncfunction")if(this["_"+o])this["_"+o](r);else{if(t.ignoreUnknown)return e("["+o+"]");throw new Error('Unknown object type "'+o+'"')}else{let p=Object.keys(r);t.unorderedObjects&&(p=p.sort()),t.respectType!==!1&&!z(r)&&p.splice(0,0,"prototype","__proto__","letructor"),t.excludeKeys&&(p=p.filter(function(m){return!t.excludeKeys(m)})),e("object:"+p.length+":");for(const m of p)this.dispatch(m),e(":"),t.excludeValues||this.dispatch(r[m]),e(",")}},_array(r,a){if(a=typeof a<"u"?a:t.unorderedArrays!==!1,e("array:"+r.length+":"),!a||r.length<=1){for(const o of r)this.dispatch(o);return}const i=[],u=r.map(o=>{const d=G(t);return d.dispatch(o),i.push(d.getContext()),d.toString()});return n=[...n,...i],u.sort(),this._array(u,!1)},_date(r){return e("date:"+r.toJSON())},_symbol(r){return e("symbol:"+r.toString())},_error(r){return e("error:"+r.toString())},_boolean(r){return e("bool:"+r.toString())},_string(r){e("string:"+r.length+":"),e(r.toString())},_function(r){e("fn:"),z(r)?this.dispatch("[native]"):this.dispatch(r.toString()),t.respectFunctionNames!==!1&&this.dispatch("function-name:"+String(r.name)),t.respectFunctionProperties&&this._object(r)},_number(r){return e("number:"+r.toString())},_xml(r){return e("xml:"+r.toString())},_null(){return e("Null")},_undefined(){return e("Undefined")},_regexp(r){return e("regex:"+r.toString())},_uint8array(r){return e("uint8array:"),this.dispatch(Array.prototype.slice.call(r))},_uint8clampedarray(r){return e("uint8clampedarray:"),this.dispatch(Array.prototype.slice.call(r))},_int8array(r){return e("int8array:"),this.dispatch(Array.prototype.slice.call(r))},_uint16array(r){return e("uint16array:"),this.dispatch(Array.prototype.slice.call(r))},_int16array(r){return e("int16array:"),this.dispatch(Array.prototype.slice.call(r))},_uint32array(r){return e("uint32array:"),this.dispatch(Array.prototype.slice.call(r))},_int32array(r){return e("int32array:"),this.dispatch(Array.prototype.slice.call(r))},_float32array(r){return e("float32array:"),this.dispatch(Array.prototype.slice.call(r))},_float64array(r){return e("float64array:"),this.dispatch(Array.prototype.slice.call(r))},_arraybuffer(r){return e("arraybuffer:"),this.dispatch(new Uint8Array(r))},_url(r){return e("url:"+r.toString())},_map(r){e("map:");const a=[...r];return this._array(a,t.unorderedSets!==!1)},_set(r){e("set:");const a=[...r];return this._array(a,t.unorderedSets!==!1)},_file(r){return e("file:"),this.dispatch([r.name,r.size,r.type,r.lastModfied])},_blob(){if(t.ignoreUnknown)return e("[blob]");throw new Error(`Hashing Blob objects is currently not supported
Use "options.replacer" or "options.ignoreUnknown"
`)},_domwindow(){return e("domwindow")},_bigint(r){return e("bigint:"+r.toString())},_process(){return e("process")},_timer(){return e("timer")},_pipe(){return e("pipe")},_tcp(){return e("tcp")},_udp(){return e("udp")},_tty(){return e("tty")},_statwatcher(){return e("statwatcher")},_securecontext(){return e("securecontext")},_connection(){return e("connection")},_zlib(){return e("zlib")},_context(){return e("context")},_nodescript(){return e("nodescript")},_httpparser(){return e("httpparser")},_dataview(){return e("dataview")},_signal(){return e("signal")},_fsevent(){return e("fsevent")},_tlswrap(){return e("tlswrap")}}}function z(t){return typeof t!="function"?!1:/^function\s+\w*\s*\(\s*\)\s*{\s+\[native code]\s+}$/i.exec(Function.prototype.toString.call(t))!=null}class I{constructor(s,n){s=this.words=s||[],this.sigBytes=n!==void 0?n:s.length*4}toString(s){return(s||ye).stringify(this)}concat(s){if(this.clamp(),this.sigBytes%4)for(let n=0;n<s.sigBytes;n++){const e=s.words[n>>>2]>>>24-n%4*8&255;this.words[this.sigBytes+n>>>2]|=e<<24-(this.sigBytes+n)%4*8}else for(let n=0;n<s.sigBytes;n+=4)this.words[this.sigBytes+n>>>2]=s.words[n>>>2];return this.sigBytes+=s.sigBytes,this}clamp(){this.words[this.sigBytes>>>2]&=4294967295<<32-this.sigBytes%4*8,this.words.length=Math.ceil(this.sigBytes/4)}clone(){return new I([...this.words])}}const ye={stringify(t){const s=[];for(let n=0;n<t.sigBytes;n++){const e=t.words[n>>>2]>>>24-n%4*8&255;s.push((e>>>4).toString(16),(e&15).toString(16))}return s.join("")}},_e={stringify(t){const s="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=[];for(let e=0;e<t.sigBytes;e+=3){const r=t.words[e>>>2]>>>24-e%4*8&255,a=t.words[e+1>>>2]>>>24-(e+1)%4*8&255,i=t.words[e+2>>>2]>>>24-(e+2)%4*8&255,u=r<<16|a<<8|i;for(let o=0;o<4&&e*8+o*6<t.sigBytes*8;o++)n.push(s.charAt(u>>>6*(3-o)&63))}return n.join("")}},me={parse(t){const s=t.length,n=[];for(let e=0;e<s;e++)n[e>>>2]|=(t.charCodeAt(e)&255)<<24-e%4*8;return new I(n,s)}},ge={parse(t){return me.parse(unescape(encodeURIComponent(t)))}};class we{constructor(){this._minBufferSize=0,this.blockSize=512/32,this.reset()}reset(){this._data=new I,this._nDataBytes=0}_append(s){typeof s=="string"&&(s=ge.parse(s)),this._data.concat(s),this._nDataBytes+=s.sigBytes}_doProcessBlock(s,n){}_process(s){let n,e=this._data.sigBytes/(this.blockSize*4);s?e=Math.ceil(e):e=Math.max((e|0)-this._minBufferSize,0);const r=e*this.blockSize,a=Math.min(r*4,this._data.sigBytes);if(r){for(let i=0;i<r;i+=this.blockSize)this._doProcessBlock(this._data.words,i);n=this._data.words.splice(0,r),this._data.sigBytes-=a}return new I(n,a)}}class ve extends we{update(s){return this._append(s),this._process(),this}finalize(s){s&&this._append(s)}}const be=[1779033703,-1150833019,1013904242,-1521486534,1359893119,-1694144372,528734635,1541459225],xe=[1116352408,1899447441,-1245643825,-373957723,961987163,1508970993,-1841331548,-1424204075,-670586216,310598401,607225278,1426881987,1925078388,-2132889090,-1680079193,-1046744716,-459576895,-272742522,264347078,604807628,770255983,1249150122,1555081692,1996064986,-1740746414,-1473132947,-1341970488,-1084653625,-958395405,-710438585,113926993,338241895,666307205,773529912,1294757372,1396182291,1695183700,1986661051,-2117940946,-1838011259,-1564481375,-1474664885,-1035236496,-949202525,-778901479,-694614492,-200395387,275423344,430227734,506948616,659060556,883997877,958139571,1322822218,1537002063,1747873779,1955562222,2024104815,-2067236844,-1933114872,-1866530822,-1538233109,-1090935817,-965641998],B=[];class Oe extends ve{constructor(){super(),this.reset()}reset(){super.reset(),this._hash=new I([...be])}_doProcessBlock(s,n){const e=this._hash.words;let r=e[0],a=e[1],i=e[2],u=e[3],o=e[4],d=e[5],p=e[6],m=e[7];for(let y=0;y<64;y++){if(y<16)B[y]=s[n+y]|0;else{const f=B[y-15],l=(f<<25|f>>>7)^(f<<14|f>>>18)^f>>>3,c=B[y-2],g=(c<<15|c>>>17)^(c<<13|c>>>19)^c>>>10;B[y]=l+B[y-7]+g+B[y-16]}const x=o&d^~o&p,v=r&a^r&i^a&i,O=(r<<30|r>>>2)^(r<<19|r>>>13)^(r<<10|r>>>22),w=(o<<26|o>>>6)^(o<<21|o>>>11)^(o<<7|o>>>25),_=m+w+x+xe[y]+B[y],h=O+v;m=p,p=d,d=o,o=u+_|0,u=i,i=a,a=r,r=_+h|0}e[0]=e[0]+r|0,e[1]=e[1]+a|0,e[2]=e[2]+i|0,e[3]=e[3]+u|0,e[4]=e[4]+o|0,e[5]=e[5]+d|0,e[6]=e[6]+p|0,e[7]=e[7]+m|0}finalize(s){super.finalize(s);const n=this._nDataBytes*8,e=this._data.sigBytes*8;return this._data.words[e>>>5]|=128<<24-e%32,this._data.words[(e+64>>>9<<4)+14]=Math.floor(n/4294967296),this._data.words[(e+64>>>9<<4)+15]=n,this._data.sigBytes=this._data.words.length*4,this._process(),this._hash}}function Be(t){return new Oe().finalize(t).toString(_e)}function Se(t,s={}){const n=typeof t=="string"?t:he(t,s);return Be(n).slice(0,10)}function Pe(t,s,n){const[e={},r]=typeof s=="string"?[{},s]:[s,n],a=e.key||Se([r,b(e.baseURL),typeof t=="string"?t:"",b(e.params)]);if(!a||typeof a!="string")throw new TypeError("[nuxt] [useFetch] key must be a string: "+a);if(!t)throw new Error("[nuxt] [useFetch] request is missing.");const i=a===r?"$f"+a:a,u=E(()=>{let l=t;return typeof l=="function"&&(l=l()),b(l)}),{server:o,lazy:d,default:p,transform:m,pick:y,watch:x,immediate:v,...O}=e,w=te({...O,cache:typeof e.cache=="boolean"?void 0:e.cache}),_={server:o,lazy:d,default:p,transform:m,pick:y,immediate:v,watch:[w,u,...x||[]]};let h;return fe(i,()=>{var l;return(l=h==null?void 0:h.abort)==null||l.call(h),h=typeof AbortController<"u"?new AbortController:{},$fetch(u.value,{signal:h.signal,...w})},_)}var U;const S=typeof window<"u";S&&((U=window==null?void 0:window.navigator)==null?void 0:U.userAgent)&&/iP(ad|hone|od)/.test(window.navigator.userAgent);function q(t){return typeof t=="function"?t():b(t)}function De(t){return t}function C(t){return ne()?(se(t),!0):!1}function Ie(t,s=1e3,n={}){const{immediate:e=!0,immediateCallback:r=!1}=n;let a=null;const i=D(!1);function u(){a&&(clearInterval(a),a=null)}function o(){i.value=!1,u()}function d(){b(s)<=0||(i.value=!0,r&&t(),u(),a=setInterval(t,q(s)))}if(e&&S&&d(),re(s)){const p=K(s,()=>{i.value&&S&&d()});C(p)}return C(o),{isActive:i,pause:o,resume:d}}const ke=S?window:void 0;S&&window.document;S&&window.navigator;S&&window.location;const $=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},A="__vueuse_ssr_handlers__";$[A]=$[A]||{};$[A];function Ce(t,s={}){const{immediate:n=!0,window:e=ke}=s,r=D(!1);let a=null;function i(){!r.value||!e||(t(),a=e.requestAnimationFrame(i))}function u(){!r.value&&e&&(r.value=!0,i())}function o(){r.value=!1,a!=null&&e&&(e.cancelAnimationFrame(a),a=null)}return n&&u(),C(o),{isActive:r,pause:o,resume:u}}var $e=Object.defineProperty,M=Object.getOwnPropertySymbols,Ae=Object.prototype.hasOwnProperty,Ee=Object.prototype.propertyIsEnumerable,R=(t,s,n)=>s in t?$e(t,s,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[s]=n,Fe=(t,s)=>{for(var n in s||(s={}))Ae.call(s,n)&&R(t,n,s[n]);if(M)for(var n of M(s))Ee.call(s,n)&&R(t,n,s[n]);return t};function je(t={}){const{controls:s=!1,interval:n="requestAnimationFrame"}=t,e=D(new Date),r=()=>e.value=new Date,a=n==="requestAnimationFrame"?Ce(r,{immediate:!0}):Ie(r,n,{immediate:!0});return s?Fe({now:e},a):e}var H;(function(t){t.UP="UP",t.RIGHT="RIGHT",t.DOWN="DOWN",t.LEFT="LEFT",t.NONE="NONE"})(H||(H={}));var Te=Object.defineProperty,k=Object.getOwnPropertySymbols,J=Object.prototype.hasOwnProperty,Y=Object.prototype.propertyIsEnumerable,L=(t,s,n)=>s in t?Te(t,s,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[s]=n,Ne=(t,s)=>{for(var n in s||(s={}))J.call(s,n)&&L(t,n,s[n]);if(k)for(var n of k(s))Y.call(s,n)&&L(t,n,s[n]);return t},ze=(t,s)=>{var n={};for(var e in t)J.call(t,e)&&s.indexOf(e)<0&&(n[e]=t[e]);if(t!=null&&k)for(var e of k(t))s.indexOf(e)<0&&Y.call(t,e)&&(n[e]=t[e]);return n};const Q=[{max:6e4,value:1e3,name:"second"},{max:276e4,value:6e4,name:"minute"},{max:72e6,value:36e5,name:"hour"},{max:5184e5,value:864e5,name:"day"},{max:24192e5,value:6048e5,name:"week"},{max:28512e6,value:2592e6,name:"month"},{max:1/0,value:31536e6,name:"year"}],Ue={justNow:"just now",past:t=>t.match(/\d/)?`${t} ago`:t,future:t=>t.match(/\d/)?`in ${t}`:t,month:(t,s)=>t===1?s?"last month":"next month":`${t} month${t>1?"s":""}`,year:(t,s)=>t===1?s?"last year":"next year":`${t} year${t>1?"s":""}`,day:(t,s)=>t===1?s?"yesterday":"tomorrow":`${t} day${t>1?"s":""}`,week:(t,s)=>t===1?s?"last week":"next week":`${t} week${t>1?"s":""}`,hour:t=>`${t} hour${t>1?"s":""}`,minute:t=>`${t} minute${t>1?"s":""}`,second:t=>`${t} second${t>1?"s":""}`},Me=t=>t.toISOString().slice(0,10);function Re(t,s={}){const{controls:n=!1,max:e,updateInterval:r=3e4,messages:a=Ue,fullDateFormatter:i=Me,showSecond:u=!1}=s,{abs:o,round:d}=Math,p=je({interval:r,controls:!0}),{now:m}=p,y=ze(p,["now"]);function x(_,h){var f;const l=+h-+_,c=o(l);if(c<6e4&&!u)return a.justNow;if(typeof e=="number"&&c>e)return i(new Date(_));if(typeof e=="string"){const g=(f=Q.find(P=>P.name===e))==null?void 0:f.max;if(g&&c>g)return i(new Date(_))}for(const g of Q)if(c<g.max)return O(l,g)}function v(_,h,f){const l=a[_];return typeof l=="function"?l(h,f):l.replace("{0}",h.toString())}function O(_,h){const f=d(o(_)/h.value),l=_>0,c=v(h.name,f,l);return v(l?"past":"future",c,l)}const w=E(()=>x(new Date(q(t)),b(m.value)));return n?Ne({timeAgo:w},y):w}var He=Object.defineProperty,V=Object.getOwnPropertySymbols,Le=Object.prototype.hasOwnProperty,Qe=Object.prototype.propertyIsEnumerable,W=(t,s,n)=>s in t?He(t,s,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[s]=n,Ve=(t,s)=>{for(var n in s||(s={}))Le.call(s,n)&&W(t,n,s[n]);if(V)for(var n of V(s))Qe.call(s,n)&&W(t,n,s[n]);return t};const We={easeInSine:[.12,0,.39,0],easeOutSine:[.61,1,.88,1],easeInOutSine:[.37,0,.63,1],easeInQuad:[.11,0,.5,0],easeOutQuad:[.5,1,.89,1],easeInOutQuad:[.45,0,.55,1],easeInCubic:[.32,0,.67,0],easeOutCubic:[.33,1,.68,1],easeInOutCubic:[.65,0,.35,1],easeInQuart:[.5,0,.75,0],easeOutQuart:[.25,1,.5,1],easeInOutQuart:[.76,0,.24,1],easeInQuint:[.64,0,.78,0],easeOutQuint:[.22,1,.36,1],easeInOutQuint:[.83,0,.17,1],easeInExpo:[.7,0,.84,0],easeOutExpo:[.16,1,.3,1],easeInOutExpo:[.87,0,.13,1],easeInCirc:[.55,0,1,.45],easeOutCirc:[0,.55,.45,1],easeInOutCirc:[.85,0,.15,1],easeInBack:[.36,0,.66,-.56],easeOutBack:[.34,1.56,.64,1],easeInOutBack:[.68,-.6,.32,1.6]};Ve({linear:De},We);const Ke={class:"text-gray-400"},Ge={class:"font-medium text-gray-500"},qe={class:"text-gray-500"},Ye=ae({__name:"PageView",async setup(t){let s,n;const{data:e}=([s,n]=oe(()=>Pe("/api/pageview","$GYaFMVMIJ4")),s=await s,n(),s),r=Re(E(()=>e.value?e.value.startAt:""));return(a,i)=>{var u;return ie(),ce("div",Ke,[T("span",Ge,N((u=b(e))==null?void 0:u.pageview),1),ue(" page views since "),T("span",qe,N(b(r)),1)])}}});export{Ye as default};
