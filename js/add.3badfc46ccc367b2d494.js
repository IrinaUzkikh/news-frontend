!function(t){var e={};function n(r){if(e[r])return e[r].exports;var o=e[r]={i:r,l:!1,exports:{}};return t[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=t,n.c=e,n.d=function(t,e,r){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)n.d(r,o,function(e){return t[e]}.bind(null,o));return r},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=101)}([function(t,e,n){"use strict";n.d(e,"t",(function(){return C})),n.d(e,"u",(function(){return T})),n.d(e,"v",(function(){return O})),n.d(e,"g",(function(){return I})),n.d(e,"p",(function(){return M})),n.d(e,"r",(function(){return A})),n.d(e,"n",(function(){return P})),n.d(e,"k",(function(){return R})),n.d(e,"a",(function(){return r})),n.d(e,"z",(function(){return o})),n.d(e,"y",(function(){return c})),n.d(e,"A",(function(){return i})),n.d(e,"h",(function(){return u})),n.d(e,"i",(function(){return a})),n.d(e,"C",(function(){return s})),n.d(e,"s",(function(){return l})),n.d(e,"w",(function(){return f})),n.d(e,"K",(function(){return d})),n.d(e,"J",(function(){return p})),n.d(e,"I",(function(){return v})),n.d(e,"j",(function(){return h})),n.d(e,"B",(function(){return y})),n.d(e,"x",(function(){return m})),n.d(e,"E",(function(){return g})),n.d(e,"F",(function(){return x})),n.d(e,"H",(function(){return S})),n.d(e,"G",(function(){return b})),n.d(e,"f",(function(){return _})),n.d(e,"o",(function(){return w})),n.d(e,"b",(function(){return q})),n.d(e,"l",(function(){return k})),n.d(e,"m",(function(){return E})),n.d(e,"q",(function(){return j})),n.d(e,"e",(function(){return L})),n.d(e,"c",(function(){return D})),n.d(e,"D",(function(){return W})),n.d(e,"d",(function(){return U}));const r=document.querySelector("#button-authorization"),o=document.querySelector("#registration-close"),c=document.querySelector("#login-close"),i=document.querySelector("#result-close"),u=document.querySelector("#login"),a=document.querySelector("#login-registration"),s=document.querySelector("#register"),l=document.querySelector("#nameUser"),f=document.querySelector("#nameUserMobil"),d=document.querySelector("#vector-main"),p=document.querySelector("#vector-articles"),v=document.querySelector("#saved-articles"),h=document.querySelector("#logout"),y=document.querySelector("#processPreloader"),m=document.querySelector("#nothingFound"),g=document.querySelector("#requestApiError"),x=document.querySelector(".results"),S=document.querySelector(".results__container"),b=document.querySelector(".results__button"),_=document.querySelector("#headerMenuMobil"),w=document.querySelector("#menuMobil"),q=document.querySelector("#buttonAuthorizationMobil"),k=document.querySelector("#menuArticles"),E=document.querySelector("#menuLogout"),j=document.querySelector("#menuMobilClose"),L=document.querySelector("#error-registration"),C=document.querySelector("#nameUserAdd"),T=document.querySelector("#nameUserAddMobil"),O=document.querySelector("#nameUserContent"),I=document.querySelector("#headerMenuMobilAdd"),M=document.querySelector("#menuMobilAdd"),A=document.querySelector("#menuMobilCloseAdd"),P=document.querySelector("#menuLogoutAdd"),R=document.querySelector("#logoutAdd"),D=document.querySelector("#enterButton"),W=document.querySelector("#registerButton"),U=document.querySelector("#errorNamePassword")},function(t,e,n){(function(e){var n=function(t){return t&&t.Math==Math&&t};t.exports=n("object"==typeof globalThis&&globalThis)||n("object"==typeof window&&window)||n("object"==typeof self&&self)||n("object"==typeof e&&e)||Function("return this")()}).call(this,n(50))},function(t,e,n){var r=n(1),o=n(12),c=n(34),i=n(63),u=r.Symbol,a=o("wks");t.exports=function(t){return a[t]||(a[t]=i&&u[t]||(i?u:c)("Symbol."+t))}},function(t,e){t.exports=function(t){try{return!!t()}catch(t){return!0}}},function(t,e){t.exports=function(t){return"object"==typeof t?null!==t:"function"==typeof t}},function(t,e){var n={}.toString;t.exports=function(t){return n.call(t).slice(8,-1)}},function(t,e,n){var r=n(4);t.exports=function(t){if(!r(t))throw TypeError(String(t)+" is not an object");return t}},function(t,e){var n={}.hasOwnProperty;t.exports=function(t,e){return n.call(t,e)}},function(t,e,n){"use strict";n.d(e,"b",(function(){return o})),n.d(e,"g",(function(){return c})),n.d(e,"f",(function(){return i})),n.d(e,"a",(function(){return u})),n.d(e,"d",(function(){return s})),n.d(e,"c",(function(){return l})),n.d(e,"e",(function(){return a}));var r=n(11);const o="ce2d4e553e614a3fa2ef645ac1fac3ed",c=7,i="https://praktikum.tk/news/v2/everything",u="https://api.newsnine.ga",a="https://irinauzkikh.github.io/news-frontend/",s=Object(r.b)(new Date),l=Object(r.b)(new Date(new Date-6048e5))},function(t,e,n){var r=n(10),o=n(15),c=n(26);t.exports=r?function(t,e,n){return o.f(t,e,c(1,n))}:function(t,e,n){return t[e]=n,t}},function(t,e,n){var r=n(3);t.exports=!r((function(){return 7!=Object.defineProperty({},"a",{get:function(){return 7}}).a}))},function(t,e,n){"use strict";n.d(e,"b",(function(){return o})),n.d(e,"c",(function(){return c})),n.d(e,"a",(function(){return i}));n(88);const r=["января","февраля","марта","апреля","мая","июня","июля","августа","сентября","октября","ноября","декабря"];function o(t){return t.toISOString().substr(0,10)}function c(t){return`${parseInt(t.substr(8,2),10)} ${r[parseInt(t.substr(5,2),10)-1]}, ${t.substr(0,4)}`}function i(t){const e=t.split(" "),n=r.indexOf(e[1].slice(0,-1))+1;let o=0;o=n<10?"0"+n:n;let c=0;if(e[0]<10)c="0"+e[0];else{c=e[0]}return`${e[2]}-${o}-${c}`}},function(t,e,n){var r=n(31),o=n(52);(t.exports=function(t,e){return o[t]||(o[t]=void 0!==e?e:{})})("versions",[]).push({version:"3.4.1",mode:r?"pure":"global",copyright:"© 2019 Denis Pushkarev (zloirock.ru)"})},function(t,e,n){var r=n(56),o=n(1),c=function(t){return"function"==typeof t?t:void 0};t.exports=function(t,e){return arguments.length<2?c(r[t])||c(o[t]):r[t]&&r[t][e]||o[t]&&o[t][e]}},function(t,e){t.exports=function(t){if(null==t)throw TypeError("Can't call method on "+t);return t}},function(t,e,n){var r=n(10),o=n(29),c=n(6),i=n(28),u=Object.defineProperty;e.f=r?u:function(t,e,n){if(c(t),e=i(e,!0),c(n),o)try{return u(t,e,n)}catch(t){}if("get"in n||"set"in n)throw TypeError("Accessors not supported");return"value"in n&&(t[e]=n.value),t}},function(t,e,n){var r=n(1),o=n(12),c=n(9),i=n(7),u=n(21),a=n(32),s=n(33),l=s.get,f=s.enforce,d=String(a).split("toString");o("inspectSource",(function(t){return a.call(t)})),(t.exports=function(t,e,n,o){var a=!!o&&!!o.unsafe,s=!!o&&!!o.enumerable,l=!!o&&!!o.noTargetGet;"function"==typeof n&&("string"!=typeof e||i(n,"name")||c(n,"name",e),f(n).source=d.join("string"==typeof e?e:"")),t!==r?(a?!l&&t[e]&&(s=!0):delete t[e],s?t[e]=n:c(t,e,n)):s?t[e]=n:u(e,n)})(Function.prototype,"toString",(function(){return"function"==typeof this&&l(this).source||a.call(this)}))},function(t,e,n){var r=n(22),o=Math.min;t.exports=function(t){return t>0?o(r(t),9007199254740991):0}},function(t,e){t.exports=function(t){if("function"!=typeof t)throw TypeError(String(t)+" is not a function");return t}},function(t,e,n){var r=n(10),o=n(51),c=n(26),i=n(20),u=n(28),a=n(7),s=n(29),l=Object.getOwnPropertyDescriptor;e.f=r?l:function(t,e){if(t=i(t),e=u(e,!0),s)try{return l(t,e)}catch(t){}if(a(t,e))return c(!o.f.call(t,e),t[e])}},function(t,e,n){var r=n(27),o=n(14);t.exports=function(t){return r(o(t))}},function(t,e,n){var r=n(1),o=n(9);t.exports=function(t,e){try{o(r,t,e)}catch(n){r[t]=e}return e}},function(t,e){var n=Math.ceil,r=Math.floor;t.exports=function(t){return isNaN(t=+t)?0:(t>0?r:n)(t)}},function(t,e,n){var r=n(18);t.exports=function(t,e,n){if(r(t),void 0===e)return t;switch(n){case 0:return function(){return t.call(e)};case 1:return function(n){return t.call(e,n)};case 2:return function(n,r){return t.call(e,n,r)};case 3:return function(n,r,o){return t.call(e,n,r,o)}}return function(){return t.apply(e,arguments)}}},function(t,e,n){"use strict";var r,o,c=n(90),i=RegExp.prototype.exec,u=String.prototype.replace,a=i,s=(r=/a/,o=/b*/g,i.call(r,"a"),i.call(o,"a"),0!==r.lastIndex||0!==o.lastIndex),l=void 0!==/()??/.exec("")[1];(s||l)&&(a=function(t){var e,n,r,o,a=this;return l&&(n=new RegExp("^"+a.source+"$(?!\\s)",c.call(a))),s&&(e=a.lastIndex),r=i.call(a,t),s&&r&&(a.lastIndex=a.global?r.index+r[0].length:e),l&&r&&r.length>1&&u.call(r[0],n,(function(){for(o=1;o<arguments.length-2;o++)void 0===arguments[o]&&(r[o]=void 0)})),r}),t.exports=a},function(t,e,n){var r=n(1),o=n(19).f,c=n(9),i=n(16),u=n(21),a=n(48),s=n(36);t.exports=function(t,e){var n,l,f,d,p,v=t.target,h=t.global,y=t.stat;if(n=h?r:y?r[v]||u(v,{}):(r[v]||{}).prototype)for(l in e){if(d=e[l],f=t.noTargetGet?(p=o(n,l))&&p.value:n[l],!s(h?l:v+(y?".":"#")+l,t.forced)&&void 0!==f){if(typeof d==typeof f)continue;a(d,f)}(t.sham||f&&f.sham)&&c(d,"sham",!0),i(n,l,d,t)}}},function(t,e){t.exports=function(t,e){return{enumerable:!(1&t),configurable:!(2&t),writable:!(4&t),value:e}}},function(t,e,n){var r=n(3),o=n(5),c="".split;t.exports=r((function(){return!Object("z").propertyIsEnumerable(0)}))?function(t){return"String"==o(t)?c.call(t,""):Object(t)}:Object},function(t,e,n){var r=n(4);t.exports=function(t,e){if(!r(t))return t;var n,o;if(e&&"function"==typeof(n=t.toString)&&!r(o=n.call(t)))return o;if("function"==typeof(n=t.valueOf)&&!r(o=n.call(t)))return o;if(!e&&"function"==typeof(n=t.toString)&&!r(o=n.call(t)))return o;throw TypeError("Can't convert object to primitive value")}},function(t,e,n){var r=n(10),o=n(3),c=n(30);t.exports=!r&&!o((function(){return 7!=Object.defineProperty(c("div"),"a",{get:function(){return 7}}).a}))},function(t,e,n){var r=n(1),o=n(4),c=r.document,i=o(c)&&o(c.createElement);t.exports=function(t){return i?c.createElement(t):{}}},function(t,e){t.exports=!1},function(t,e,n){var r=n(12);t.exports=r("native-function-to-string",Function.toString)},function(t,e,n){var r,o,c,i=n(53),u=n(1),a=n(4),s=n(9),l=n(7),f=n(54),d=n(35),p=u.WeakMap;if(i){var v=new p,h=v.get,y=v.has,m=v.set;r=function(t,e){return m.call(v,t,e),e},o=function(t){return h.call(v,t)||{}},c=function(t){return y.call(v,t)}}else{var g=f("state");d[g]=!0,r=function(t,e){return s(t,g,e),e},o=function(t){return l(t,g)?t[g]:{}},c=function(t){return l(t,g)}}t.exports={set:r,get:o,has:c,enforce:function(t){return c(t)?o(t):r(t,{})},getterFor:function(t){return function(e){var n;if(!a(e)||(n=o(e)).type!==t)throw TypeError("Incompatible receiver, "+t+" required");return n}}}},function(t,e){var n=0,r=Math.random();t.exports=function(t){return"Symbol("+String(void 0===t?"":t)+")_"+(++n+r).toString(36)}},function(t,e){t.exports={}},function(t,e,n){var r=n(3),o=/#|\.prototype\./,c=function(t,e){var n=u[i(t)];return n==s||n!=a&&("function"==typeof e?r(e):!!e)},i=c.normalize=function(t){return String(t).replace(o,".").toLowerCase()},u=c.data={},a=c.NATIVE="N",s=c.POLYFILL="P";t.exports=c},function(t,e,n){var r=n(1),o=n(64),c=n(65),i=n(9);for(var u in o){var a=r[u],s=a&&a.prototype;if(s&&s.forEach!==c)try{i(s,"forEach",c)}catch(t){s.forEach=c}}},function(t,e,n){"use strict";var r,o,c,i,u=n(25),a=n(31),s=n(1),l=n(13),f=n(71),d=n(16),p=n(72),v=n(12),h=n(73),y=n(74),m=n(4),g=n(18),x=n(75),S=n(5),b=n(76),_=n(81),w=n(40),q=n(41).set,k=n(83),E=n(84),j=n(85),L=n(44),C=n(86),T=n(33),O=n(36),I=n(2),M=n(87),A=I("species"),P="Promise",R=T.get,D=T.set,W=T.getterFor(P),U=f,N=s.TypeError,F=s.document,$=s.process,z=v("inspectSource"),G=l("fetch"),V=L.f,B=V,H="process"==S($),K=!!(F&&F.createEvent&&s.dispatchEvent),J=O(P,(function(){var t=z(U)!==String(U);if(66===M)return!0;if(!t&&!H&&"function"!=typeof PromiseRejectionEvent)return!0;if(a&&!U.prototype.finally)return!0;if(M>=51&&/native code/.test(U))return!1;var e=U.resolve(1),n=function(t){t((function(){}),(function(){}))};return(e.constructor={})[A]=n,!(e.then((function(){}))instanceof n)})),Y=J||!_((function(t){U.all(t).catch((function(){}))})),Q=function(t){var e;return!(!m(t)||"function"!=typeof(e=t.then))&&e},X=function(t,e,n){if(!e.notified){e.notified=!0;var r=e.reactions;k((function(){for(var o=e.value,c=1==e.state,i=0;r.length>i;){var u,a,s,l=r[i++],f=c?l.ok:l.fail,d=l.resolve,p=l.reject,v=l.domain;try{f?(c||(2===e.rejection&&nt(t,e),e.rejection=1),!0===f?u=o:(v&&v.enter(),u=f(o),v&&(v.exit(),s=!0)),u===l.promise?p(N("Promise-chain cycle")):(a=Q(u))?a.call(u,d,p):d(u)):p(o)}catch(t){v&&!s&&v.exit(),p(t)}}e.reactions=[],e.notified=!1,n&&!e.rejection&&tt(t,e)}))}},Z=function(t,e,n){var r,o;K?((r=F.createEvent("Event")).promise=e,r.reason=n,r.initEvent(t,!1,!0),s.dispatchEvent(r)):r={promise:e,reason:n},(o=s["on"+t])?o(r):"unhandledrejection"===t&&j("Unhandled promise rejection",n)},tt=function(t,e){q.call(s,(function(){var n,r=e.value;if(et(e)&&(n=C((function(){H?$.emit("unhandledRejection",r,t):Z("unhandledrejection",t,r)})),e.rejection=H||et(e)?2:1,n.error))throw n.value}))},et=function(t){return 1!==t.rejection&&!t.parent},nt=function(t,e){q.call(s,(function(){H?$.emit("rejectionHandled",t):Z("rejectionhandled",t,e.value)}))},rt=function(t,e,n,r){return function(o){t(e,n,o,r)}},ot=function(t,e,n,r){e.done||(e.done=!0,r&&(e=r),e.value=n,e.state=2,X(t,e,!0))},ct=function(t,e,n,r){if(!e.done){e.done=!0,r&&(e=r);try{if(t===n)throw N("Promise can't be resolved itself");var o=Q(n);o?k((function(){var r={done:!1};try{o.call(n,rt(ct,t,r,e),rt(ot,t,r,e))}catch(n){ot(t,r,n,e)}})):(e.value=n,e.state=1,X(t,e,!1))}catch(n){ot(t,{done:!1},n,e)}}};J&&(U=function(t){x(this,U,P),g(t),r.call(this);var e=R(this);try{t(rt(ct,this,e),rt(ot,this,e))}catch(t){ot(this,e,t)}},(r=function(t){D(this,{type:P,done:!1,notified:!1,parent:!1,reactions:[],rejection:!1,state:0,value:void 0})}).prototype=p(U.prototype,{then:function(t,e){var n=W(this),r=V(w(this,U));return r.ok="function"!=typeof t||t,r.fail="function"==typeof e&&e,r.domain=H?$.domain:void 0,n.parent=!0,n.reactions.push(r),0!=n.state&&X(this,n,!1),r.promise},catch:function(t){return this.then(void 0,t)}}),o=function(){var t=new r,e=R(t);this.promise=t,this.resolve=rt(ct,t,e),this.reject=rt(ot,t,e)},L.f=V=function(t){return t===U||t===c?new o(t):B(t)},a||"function"!=typeof f||(i=f.prototype.then,d(f.prototype,"then",(function(t,e){var n=this;return new U((function(t,e){i.call(n,t,e)})).then(t,e)}),{unsafe:!0}),"function"==typeof G&&u({global:!0,enumerable:!0,forced:!0},{fetch:function(t){return E(U,G.apply(s,arguments))}}))),u({global:!0,wrap:!0,forced:J},{Promise:U}),h(U,P,!1,!0),y(P),c=l(P),u({target:P,stat:!0,forced:J},{reject:function(t){var e=V(this);return e.reject.call(void 0,t),e.promise}}),u({target:P,stat:!0,forced:a||J},{resolve:function(t){return E(a&&this===c?U:this,t)}}),u({target:P,stat:!0,forced:Y},{all:function(t){var e=this,n=V(e),r=n.resolve,o=n.reject,c=C((function(){var n=g(e.resolve),c=[],i=0,u=1;b(t,(function(t){var a=i++,s=!1;c.push(void 0),u++,n.call(e,t).then((function(t){s||(s=!0,c[a]=t,--u||r(c))}),o)})),--u||r(c)}));return c.error&&o(c.value),n.promise},race:function(t){var e=this,n=V(e),r=n.reject,o=C((function(){var o=g(e.resolve);b(t,(function(t){o.call(e,t).then(n.resolve,r)}))}));return o.error&&r(o.value),n.promise}})},function(t,e){t.exports={}},function(t,e,n){var r=n(6),o=n(18),c=n(2)("species");t.exports=function(t,e){var n,i=r(t).constructor;return void 0===i||null==(n=r(i)[c])?e:o(n)}},function(t,e,n){var r,o,c,i=n(1),u=n(3),a=n(5),s=n(23),l=n(82),f=n(30),d=n(42),p=i.location,v=i.setImmediate,h=i.clearImmediate,y=i.process,m=i.MessageChannel,g=i.Dispatch,x=0,S={},b=function(t){if(S.hasOwnProperty(t)){var e=S[t];delete S[t],e()}},_=function(t){return function(){b(t)}},w=function(t){b(t.data)},q=function(t){i.postMessage(t+"",p.protocol+"//"+p.host)};v&&h||(v=function(t){for(var e=[],n=1;arguments.length>n;)e.push(arguments[n++]);return S[++x]=function(){("function"==typeof t?t:Function(t)).apply(void 0,e)},r(x),x},h=function(t){delete S[t]},"process"==a(y)?r=function(t){y.nextTick(_(t))}:g&&g.now?r=function(t){g.now(_(t))}:m&&!d?(c=(o=new m).port2,o.port1.onmessage=w,r=s(c.postMessage,c,1)):!i.addEventListener||"function"!=typeof postMessage||i.importScripts||u(q)?r="onreadystatechange"in f("script")?function(t){l.appendChild(f("script")).onreadystatechange=function(){l.removeChild(this),b(t)}}:function(t){setTimeout(_(t),0)}:(r=q,i.addEventListener("message",w,!1))),t.exports={set:v,clear:h}},function(t,e,n){var r=n(43);t.exports=/(iphone|ipod|ipad).*applewebkit/i.test(r)},function(t,e,n){var r=n(13);t.exports=r("navigator","userAgent")||""},function(t,e,n){"use strict";var r=n(18),o=function(t){var e,n;this.promise=new t((function(t,r){if(void 0!==e||void 0!==n)throw TypeError("Bad Promise constructor");e=t,n=r})),this.resolve=r(e),this.reject=r(n)};t.exports.f=function(t){return new o(t)}},function(t,e,n){"use strict";n.d(e,"a",(function(){return r}));class r{create(t){const e=document.createElement("div");return e.classList.add("card"),e.insertAdjacentHTML("beforeend",'\n    <button class="card__bookmark"></button>\n    <a class="card__link" target="_blank">\n      <div class="card__image">\n       <p class="card__keyword"></p>\n       <button class="card__button"></button>\n      </div>\n      <h3 class="card__date"></h3>\n      <h2 class="card__title"></h2>\n      <p class="card__text"></p>\n      <p class="card__id" display></p>\n      <p class="card__source"></p>\n    </a>\n    </div>'),e.querySelector(".card__link").href=""+t.link,e.querySelector(".card__image").style.backgroundImage=`url(${t.image})`,e.querySelector(".card__keyword").textContent=t.keyword,e.querySelector(".card__date").textContent=t.date,e.querySelector(".card__title").textContent=t.title,e.querySelector(".card__text").textContent=t.text,e.querySelector(".card__source").textContent=t.source,e.querySelector(".card__id").textContent=t.cardId,e.querySelector(".card__bookmark").style.backgroundImage=t.bookmark,"articles"===t.page?(e.querySelector(".card__keyword").classList.add("card__keyword_is-opened"),e.querySelector(".card__button").textContent="Убрать из сохраненных"):(e.querySelector(".card__button").textContent="Войдите, чтобы сохранять статьи",e.querySelector(".card__keyword").style.display="no"),e}remove(t){t.target.closest(".card").remove()}}},function(t,e,n){"use strict";n.d(e,"a",(function(){return r}));n(37);class r{constructor(t,e){this.container=t,this.cardInstance=e}addCard(t){const e=this.cardInstance.create(t);this.container.appendChild(e)}render(t){t.forEach(t=>{this.addCard(t)})}}},function(t,e,n){"use strict";n.d(e,"a",(function(){return r}));n(38);class r{constructor(t){this.baseUrl=t.baseUrl,this.authorization=t.headers.authorization,this.contentType=t.headers["Content-Type"]}requestToServer(t,e,n){return fetch(t,{method:e,headers:{authorization:"Bearer "+localStorage.getItem("token"),"Content-Type":this.contentType},body:JSON.stringify(n)}).then(t=>t.ok?t.json():Promise.reject(new Error("Ошибка: "+t.status))).catch(t=>{throw console.log(t),t})}getUserData(){return this.requestToServer(this.baseUrl+"/users/me","GET")}getArticles(){return this.requestToServer(this.baseUrl+"/articles","GET")}createArticle(t,e,n,r,o,c,i){return this.requestToServer(this.baseUrl+"/articles","POST",{keyword:t,title:e,text:n,date:r,source:o,link:c,image:i})}removeArticle(t,e){return this.requestToServer(`${this.baseUrl}/articles/${e}`,"DELETE")}}},function(t,e,n){var r=n(7),o=n(55),c=n(19),i=n(15);t.exports=function(t,e){for(var n=o(e),u=i.f,a=c.f,s=0;s<n.length;s++){var l=n[s];r(t,l)||u(t,l,a(e,l))}}},function(t,e,n){var r=n(4),o=n(5),c=n(2)("match");t.exports=function(t){var e;return r(t)&&(void 0!==(e=t[c])?!!e:"RegExp"==o(t))}},function(t,e){var n;n=function(){return this}();try{n=n||new Function("return this")()}catch(t){"object"==typeof window&&(n=window)}t.exports=n},function(t,e,n){"use strict";var r={}.propertyIsEnumerable,o=Object.getOwnPropertyDescriptor,c=o&&!r.call({1:2},1);e.f=c?function(t){var e=o(this,t);return!!e&&e.enumerable}:r},function(t,e,n){var r=n(1),o=n(21),c=r["__core-js_shared__"]||o("__core-js_shared__",{});t.exports=c},function(t,e,n){var r=n(1),o=n(32),c=r.WeakMap;t.exports="function"==typeof c&&/native code/.test(o.call(c))},function(t,e,n){var r=n(12),o=n(34),c=r("keys");t.exports=function(t){return c[t]||(c[t]=o(t))}},function(t,e,n){var r=n(13),o=n(57),c=n(62),i=n(6);t.exports=r("Reflect","ownKeys")||function(t){var e=o.f(i(t)),n=c.f;return n?e.concat(n(t)):e}},function(t,e,n){t.exports=n(1)},function(t,e,n){var r=n(58),o=n(61).concat("length","prototype");e.f=Object.getOwnPropertyNames||function(t){return r(t,o)}},function(t,e,n){var r=n(7),o=n(20),c=n(59).indexOf,i=n(35);t.exports=function(t,e){var n,u=o(t),a=0,s=[];for(n in u)!r(i,n)&&r(u,n)&&s.push(n);for(;e.length>a;)r(u,n=e[a++])&&(~c(s,n)||s.push(n));return s}},function(t,e,n){var r=n(20),o=n(17),c=n(60),i=function(t){return function(e,n,i){var u,a=r(e),s=o(a.length),l=c(i,s);if(t&&n!=n){for(;s>l;)if((u=a[l++])!=u)return!0}else for(;s>l;l++)if((t||l in a)&&a[l]===n)return t||l||0;return!t&&-1}};t.exports={includes:i(!0),indexOf:i(!1)}},function(t,e,n){var r=n(22),o=Math.max,c=Math.min;t.exports=function(t,e){var n=r(t);return n<0?o(n+e,0):c(n,e)}},function(t,e){t.exports=["constructor","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","toLocaleString","toString","valueOf"]},function(t,e){e.f=Object.getOwnPropertySymbols},function(t,e,n){var r=n(3);t.exports=!!Object.getOwnPropertySymbols&&!r((function(){return!String(Symbol())}))},function(t,e){t.exports={CSSRuleList:0,CSSStyleDeclaration:0,CSSValueList:0,ClientRectList:0,DOMRectList:0,DOMStringList:0,DOMTokenList:1,DataTransferItemList:0,FileList:0,HTMLAllCollection:0,HTMLCollection:0,HTMLFormElement:0,HTMLSelectElement:0,MediaList:0,MimeTypeArray:0,NamedNodeMap:0,NodeList:1,PaintRequestList:0,Plugin:0,PluginArray:0,SVGLengthList:0,SVGNumberList:0,SVGPathSegList:0,SVGPointList:0,SVGStringList:0,SVGTransformList:0,SourceBufferList:0,StyleSheetList:0,TextTrackCueList:0,TextTrackList:0,TouchList:0}},function(t,e,n){"use strict";var r=n(66).forEach,o=n(70);t.exports=o("forEach")?function(t){return r(this,t,arguments.length>1?arguments[1]:void 0)}:[].forEach},function(t,e,n){var r=n(23),o=n(27),c=n(67),i=n(17),u=n(68),a=[].push,s=function(t){var e=1==t,n=2==t,s=3==t,l=4==t,f=6==t,d=5==t||f;return function(p,v,h,y){for(var m,g,x=c(p),S=o(x),b=r(v,h,3),_=i(S.length),w=0,q=y||u,k=e?q(p,_):n?q(p,0):void 0;_>w;w++)if((d||w in S)&&(g=b(m=S[w],w,x),t))if(e)k[w]=g;else if(g)switch(t){case 3:return!0;case 5:return m;case 6:return w;case 2:a.call(k,m)}else if(l)return!1;return f?-1:s||l?l:k}};t.exports={forEach:s(0),map:s(1),filter:s(2),some:s(3),every:s(4),find:s(5),findIndex:s(6)}},function(t,e,n){var r=n(14);t.exports=function(t){return Object(r(t))}},function(t,e,n){var r=n(4),o=n(69),c=n(2)("species");t.exports=function(t,e){var n;return o(t)&&("function"!=typeof(n=t.constructor)||n!==Array&&!o(n.prototype)?r(n)&&null===(n=n[c])&&(n=void 0):n=void 0),new(void 0===n?Array:n)(0===e?0:e)}},function(t,e,n){var r=n(5);t.exports=Array.isArray||function(t){return"Array"==r(t)}},function(t,e,n){"use strict";var r=n(3);t.exports=function(t,e){var n=[][t];return!n||!r((function(){n.call(null,e||function(){throw 1},1)}))}},function(t,e,n){var r=n(1);t.exports=r.Promise},function(t,e,n){var r=n(16);t.exports=function(t,e,n){for(var o in e)r(t,o,e[o],n);return t}},function(t,e,n){var r=n(15).f,o=n(7),c=n(2)("toStringTag");t.exports=function(t,e,n){t&&!o(t=n?t:t.prototype,c)&&r(t,c,{configurable:!0,value:e})}},function(t,e,n){"use strict";var r=n(13),o=n(15),c=n(2),i=n(10),u=c("species");t.exports=function(t){var e=r(t),n=o.f;i&&e&&!e[u]&&n(e,u,{configurable:!0,get:function(){return this}})}},function(t,e){t.exports=function(t,e,n){if(!(t instanceof e))throw TypeError("Incorrect "+(n?n+" ":"")+"invocation");return t}},function(t,e,n){var r=n(6),o=n(77),c=n(17),i=n(23),u=n(78),a=n(80),s=function(t,e){this.stopped=t,this.result=e};(t.exports=function(t,e,n,l,f){var d,p,v,h,y,m,g,x=i(e,n,l?2:1);if(f)d=t;else{if("function"!=typeof(p=u(t)))throw TypeError("Target is not iterable");if(o(p)){for(v=0,h=c(t.length);h>v;v++)if((y=l?x(r(g=t[v])[0],g[1]):x(t[v]))&&y instanceof s)return y;return new s(!1)}d=p.call(t)}for(m=d.next;!(g=m.call(d)).done;)if("object"==typeof(y=a(d,x,g.value,l))&&y&&y instanceof s)return y;return new s(!1)}).stop=function(t){return new s(!0,t)}},function(t,e,n){var r=n(2),o=n(39),c=r("iterator"),i=Array.prototype;t.exports=function(t){return void 0!==t&&(o.Array===t||i[c]===t)}},function(t,e,n){var r=n(79),o=n(39),c=n(2)("iterator");t.exports=function(t){if(null!=t)return t[c]||t["@@iterator"]||o[r(t)]}},function(t,e,n){var r=n(5),o=n(2)("toStringTag"),c="Arguments"==r(function(){return arguments}());t.exports=function(t){var e,n,i;return void 0===t?"Undefined":null===t?"Null":"string"==typeof(n=function(t,e){try{return t[e]}catch(t){}}(e=Object(t),o))?n:c?r(e):"Object"==(i=r(e))&&"function"==typeof e.callee?"Arguments":i}},function(t,e,n){var r=n(6);t.exports=function(t,e,n,o){try{return o?e(r(n)[0],n[1]):e(n)}catch(e){var c=t.return;throw void 0!==c&&r(c.call(t)),e}}},function(t,e,n){var r=n(2)("iterator"),o=!1;try{var c=0,i={next:function(){return{done:!!c++}},return:function(){o=!0}};i[r]=function(){return this},Array.from(i,(function(){throw 2}))}catch(t){}t.exports=function(t,e){if(!e&&!o)return!1;var n=!1;try{var c={};c[r]=function(){return{next:function(){return{done:n=!0}}}},t(c)}catch(t){}return n}},function(t,e,n){var r=n(13);t.exports=r("document","documentElement")},function(t,e,n){var r,o,c,i,u,a,s,l,f=n(1),d=n(19).f,p=n(5),v=n(41).set,h=n(42),y=f.MutationObserver||f.WebKitMutationObserver,m=f.process,g=f.Promise,x="process"==p(m),S=d(f,"queueMicrotask"),b=S&&S.value;b||(r=function(){var t,e;for(x&&(t=m.domain)&&t.exit();o;){e=o.fn,o=o.next;try{e()}catch(t){throw o?i():c=void 0,t}}c=void 0,t&&t.enter()},x?i=function(){m.nextTick(r)}:y&&!h?(u=!0,a=document.createTextNode(""),new y(r).observe(a,{characterData:!0}),i=function(){a.data=u=!u}):g&&g.resolve?(s=g.resolve(void 0),l=s.then,i=function(){l.call(s,r)}):i=function(){v.call(f,r)}),t.exports=b||function(t){var e={fn:t,next:void 0};c&&(c.next=e),o||(o=e,i()),c=e}},function(t,e,n){var r=n(6),o=n(4),c=n(44);t.exports=function(t,e){if(r(t),o(e)&&e.constructor===t)return e;var n=c.f(t);return(0,n.resolve)(e),n.promise}},function(t,e,n){var r=n(1);t.exports=function(t,e){var n=r.console;n&&n.error&&(1===arguments.length?n.error(t):n.error(t,e))}},function(t,e){t.exports=function(t){try{return{error:!1,value:t()}}catch(t){return{error:!0,value:t}}}},function(t,e,n){var r,o,c=n(1),i=n(43),u=c.process,a=u&&u.versions,s=a&&a.v8;s?o=(r=s.split("."))[0]+r[1]:i&&(!(r=i.match(/Edge\/(\d+)/))||r[1]>=74)&&(r=i.match(/Chrome\/(\d+)/))&&(o=r[1]),t.exports=o&&+o},function(t,e,n){"use strict";var r=n(89),o=n(49),c=n(6),i=n(14),u=n(40),a=n(91),s=n(17),l=n(93),f=n(24),d=n(3),p=[].push,v=Math.min,h=!d((function(){return!RegExp(4294967295,"y")}));r("split",2,(function(t,e,n){var r;return r="c"=="abbc".split(/(b)*/)[1]||4!="test".split(/(?:)/,-1).length||2!="ab".split(/(?:ab)*/).length||4!=".".split(/(.?)(.?)/).length||".".split(/()()/).length>1||"".split(/.?/).length?function(t,n){var r=String(i(this)),c=void 0===n?4294967295:n>>>0;if(0===c)return[];if(void 0===t)return[r];if(!o(t))return e.call(r,t,c);for(var u,a,s,l=[],d=(t.ignoreCase?"i":"")+(t.multiline?"m":"")+(t.unicode?"u":"")+(t.sticky?"y":""),v=0,h=new RegExp(t.source,d+"g");(u=f.call(h,r))&&!((a=h.lastIndex)>v&&(l.push(r.slice(v,u.index)),u.length>1&&u.index<r.length&&p.apply(l,u.slice(1)),s=u[0].length,v=a,l.length>=c));)h.lastIndex===u.index&&h.lastIndex++;return v===r.length?!s&&h.test("")||l.push(""):l.push(r.slice(v)),l.length>c?l.slice(0,c):l}:"0".split(void 0,0).length?function(t,n){return void 0===t&&0===n?[]:e.call(this,t,n)}:e,[function(e,n){var o=i(this),c=null==e?void 0:e[t];return void 0!==c?c.call(e,o,n):r.call(String(o),e,n)},function(t,o){var i=n(r,t,this,o,r!==e);if(i.done)return i.value;var f=c(t),d=String(this),p=u(f,RegExp),y=f.unicode,m=(f.ignoreCase?"i":"")+(f.multiline?"m":"")+(f.unicode?"u":"")+(h?"y":"g"),g=new p(h?f:"^(?:"+f.source+")",m),x=void 0===o?4294967295:o>>>0;if(0===x)return[];if(0===d.length)return null===l(g,d)?[d]:[];for(var S=0,b=0,_=[];b<d.length;){g.lastIndex=h?b:0;var w,q=l(g,h?d:d.slice(b));if(null===q||(w=v(s(g.lastIndex+(h?0:b)),d.length))===S)b=a(d,b,y);else{if(_.push(d.slice(S,b)),_.length===x)return _;for(var k=1;k<=q.length-1;k++)if(_.push(q[k]),_.length===x)return _;b=S=w}}return _.push(d.slice(S)),_}]}),!h)},function(t,e,n){"use strict";var r=n(9),o=n(16),c=n(3),i=n(2),u=n(24),a=i("species"),s=!c((function(){var t=/./;return t.exec=function(){var t=[];return t.groups={a:"7"},t},"7"!=="".replace(t,"$<a>")})),l=!c((function(){var t=/(?:)/,e=t.exec;t.exec=function(){return e.apply(this,arguments)};var n="ab".split(t);return 2!==n.length||"a"!==n[0]||"b"!==n[1]}));t.exports=function(t,e,n,f){var d=i(t),p=!c((function(){var e={};return e[d]=function(){return 7},7!=""[t](e)})),v=p&&!c((function(){var e=!1,n=/a/;return"split"===t&&((n={}).constructor={},n.constructor[a]=function(){return n},n.flags="",n[d]=/./[d]),n.exec=function(){return e=!0,null},n[d](""),!e}));if(!p||!v||"replace"===t&&!s||"split"===t&&!l){var h=/./[d],y=n(d,""[t],(function(t,e,n,r,o){return e.exec===u?p&&!o?{done:!0,value:h.call(e,n,r)}:{done:!0,value:t.call(n,e,r)}:{done:!1}})),m=y[0],g=y[1];o(String.prototype,t,m),o(RegExp.prototype,d,2==e?function(t,e){return g.call(t,this,e)}:function(t){return g.call(t,this)}),f&&r(RegExp.prototype[d],"sham",!0)}}},function(t,e,n){"use strict";var r=n(6);t.exports=function(){var t=r(this),e="";return t.global&&(e+="g"),t.ignoreCase&&(e+="i"),t.multiline&&(e+="m"),t.dotAll&&(e+="s"),t.unicode&&(e+="u"),t.sticky&&(e+="y"),e}},function(t,e,n){"use strict";var r=n(92).charAt;t.exports=function(t,e,n){return e+(n?r(t,e).length:1)}},function(t,e,n){var r=n(22),o=n(14),c=function(t){return function(e,n){var c,i,u=String(o(e)),a=r(n),s=u.length;return a<0||a>=s?t?"":void 0:(c=u.charCodeAt(a))<55296||c>56319||a+1===s||(i=u.charCodeAt(a+1))<56320||i>57343?t?u.charAt(a):c:t?u.slice(a,a+2):i-56320+(c-55296<<10)+65536}};t.exports={codeAt:c(!1),charAt:c(!0)}},function(t,e,n){var r=n(5),o=n(24);t.exports=function(t,e){var n=t.exec;if("function"==typeof n){var c=n.call(t,e);if("object"!=typeof c)throw TypeError("RegExp exec method returned something other than an Object or null");return c}if("RegExp"!==r(t))throw TypeError("RegExp#exec called on incompatible receiver");return o.call(t,e)}},,,,,,function(t,e,n){},,function(t,e,n){"use strict";n.r(e);n(99);var r=n(45),o=n(46),c=n(47),i=n(11);function u(t){const e=t.length,n=document.querySelector("#quantityArticlesElement"),r=document.querySelector("#quantityArticlesText");switch(n.textContent=e,e){case 1:r.textContent="сохраненная статья";break;case 2:case 3:case 4:r.textContent="сохраненные статьи";break;default:r.textContent="сохраненных статей"}if(e>0){const e=t.map(t=>t.keyword).reduce((t,e)=>(t[e]?t[e]+=1:t[e]=1,t),{}),n=Object.entries(e).sort((t,e)=>e[1]-t[1]),r=n.length;switch(r){case 1:document.querySelector("#firstWord").textContent=""+n[0][0],document.querySelector("#secondWord").textContent="",document.querySelector("#thirdWord").textContent="";break;case 2:document.querySelector("#firstWord").textContent=""+n[0][0],document.querySelector("#secondWord").textContent=" и "+n[1][0],document.querySelector("#thirdWord").textContent="";break;case 3:document.querySelector("#firstWord").textContent=""+n[0][0],document.querySelector("#secondWord").textContent=", "+n[1][0],document.querySelector("#thirdWord").textContent=" и "+n[2][0];break;default:document.querySelector("#firstWord").textContent=""+n[0][0],document.querySelector("#secondWord").textContent=", "+n[1][0],document.querySelector("#thirdWord").textContent=`и ${r-2} другим`}}else document.querySelector("#firstWord").textContent=""}var a=n(8),s=n(0);const l=new c.a({baseUrl:a.a,headers:{authorization:"Bearer "+localStorage.getItem("token"),"Content-Type":"application/json"}}),f=new r.a,d=new o.a(document.querySelector(".results__container"),f);s.t.textContent=localStorage.getItem("name"),s.u.textContent=localStorage.getItem("name"),s.v.textContent=localStorage.getItem("name"),s.k.addEventListener("click",()=>{window.confirm("Вы действительно хотите выйти?")&&(localStorage.removeItem("token"),localStorage.removeItem("name"),localStorage.removeItem("isLoggedIn"),document.location.href=a.e)}),s.g.addEventListener("click",()=>{s.p.classList.add("menu_is-opened")}),s.r.addEventListener("click",()=>{s.p.classList.remove("menu_is-opened")}),s.n.addEventListener("click",()=>{window.confirm("Вы действительно хотите выйти?")&&(s.p.classList.remove("menu_is-opened"),localStorage.removeItem("token"),localStorage.removeItem("name"),localStorage.removeItem("isLoggedIn"),document.location.href=a.e)}),document.querySelector(".results__container").addEventListener("mouseover",t=>{if(t.target.classList.contains("card__bookmark")){const e=t.target;e.closest(".card").querySelector(".card__button").classList.add("card__button_is-opened"),e.style.backgroundImage="url(./images/trash_black.png)"}}),document.querySelector(".results__container").addEventListener("mouseout",t=>{if(t.target.classList.contains("card__bookmark")){const e=t.target;e.closest(".card").querySelector(".card__button").classList.remove("card__button_is-opened"),e.style.backgroundImage="url(./images/trash.png)"}}),document.querySelector(".results__container").addEventListener("click",t=>{if(t.target.classList.contains("card__bookmark")){const e=""+t.target.closest(".card").querySelector(".card__id").textContent;l.removeArticle.bind(l)(t,e).then(()=>{f.remove.bind(d)(t)}).catch(t=>{console.log("Ошибка. Запрос не выполнен: ",t)}),l.getArticles.bind(l)().then(t=>{u(t.data.map(t=>{const{keyword:e}=t;return{keyword:e}}))}).catch(t=>{console.log("Ошибка. Запрос не выполнен: ",t)})}}),window.addEventListener("load",()=>{localStorage.getItem("isLoggedIn")?l.getArticles.bind(l)().then(t=>{const e=t.data.map(t=>{const{date:e,image:n,keyword:r,link:o,source:c,text:u,title:a,_id:s}=t;return{keyword:r,title:a,text:u,date:Object(i.c)(e),source:c,link:o,image:n,cardId:s,bookmark:"url(./images/trash.png)",page:"articles"}});u(e),d.render.bind(d)(e)}).catch(t=>{console.log("Ошибка. Запрос не выполнен: ",t)}):document.location.href=a.e})}]);