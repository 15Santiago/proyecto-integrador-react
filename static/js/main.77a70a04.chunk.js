(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{18:function(e,t,a){e.exports=a(49)},27:function(e,t,a){},29:function(e,t,a){},31:function(e,t,a){},33:function(e,t,a){},35:function(e,t,a){},37:function(e,t,a){},39:function(e,t,a){},41:function(e,t,a){},43:function(e,t,a){},45:function(e,t,a){},47:function(e,t,a){},49:function(e,t,a){"use strict";a.r(t);var n=a(1),r=a.n(n),o=a(17),i=a.n(o),c=a(3),l=a(15),u=a(0);a(27);function s(e){var t=e.title;return r.a.createElement("header",{className:"header-section"},r.a.createElement("h1",{className:"title"},t))}a(29);function m(e){var t=e.text,a=e.imageUrl,n=e.altAtribute,o=e.action;return r.a.createElement("div",{className:"button ".concat(n),onClick:function(){o()}},r.a.createElement("img",{src:a,alt:n,className:"image-button"}),r.a.createElement("h3",{className:"button-title"},t))}a(31),a(33);function f(){return r.a.createElement("footer",{className:"footer-container"},r.a.createElement("img",{src:"https://www.usbbog.edu.co/wp-content/uploads/2021/06/logoUSBBOG.png",alt:"logo-universidad-de-san-buenventura",className:"footer-image"}),r.a.createElement("section",{className:"names-container"},r.a.createElement("p",{className:"footer-text first-name"},"Santiago Rodriguez"),r.a.createElement("p",{className:"footer-text second-name"},"Edwin Agudelo"),r.a.createElement("p",{className:"footer-text third-name"},"Cristian Albornoz")))}function p(){var e=Object(u.n)();return r.a.createElement(r.a.Fragment,null,r.a.createElement(s,{title:"Datos"}),r.a.createElement("main",null,r.a.createElement("section",{className:"text-container"},r.a.createElement("p",null,"Escoge uno de los siguientes contienentes para ver sus paises.")),r.a.createElement("section",{className:"buttons-container"},r.a.createElement(m,{text:"America",imageUrl:"../images/earth-america-o-svgrepo-com.svg",altAtribute:"america-button",action:function(){e("/Americas")}}),r.a.createElement(m,{text:"Europa",imageUrl:"../images/globe-showing-europe-svgrepo-com.svg",altAtribute:"europe-button",action:function(){e("/Europe")}}),r.a.createElement(m,{text:"Asia",imageUrl:"../images/earth-asia-oceania-svgrepo-com.svg",altAtribute:"asia-button",action:function(){e("/Asia")}}),r.a.createElement(m,{text:"Oceania",imageUrl:"../images/australian-continent-svgrepo-com.svg",altAtribute:"oceania-button",action:function(){e("/Oceania")}}),r.a.createElement(m,{text:"Africa",imageUrl:"../images/africa-continent-svgrepo-com.svg",altAtribute:"africa-button",action:function(){e("/Africa")}}))),r.a.createElement(f,null))}var h=r.a.createContext(null),g=a(4);function v(){v=function(){return e};var e={},t=Object.prototype,a=t.hasOwnProperty,n=Object.defineProperty||function(e,t,a){e[t]=a.value},r="function"==typeof Symbol?Symbol:{},o=r.iterator||"@@iterator",i=r.asyncIterator||"@@asyncIterator",c=r.toStringTag||"@@toStringTag";function l(e,t,a){return Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}),e[t]}try{l({},"")}catch(_){l=function(e,t,a){return e[t]=a}}function u(e,t,a,r){var o=t&&t.prototype instanceof f?t:f,i=Object.create(o.prototype),c=new O(r||[]);return n(i,"_invoke",{value:x(e,a,c)}),i}function s(e,t,a){try{return{type:"normal",arg:e.call(t,a)}}catch(_){return{type:"throw",arg:_}}}e.wrap=u;var m={};function f(){}function p(){}function h(){}var g={};l(g,o,function(){return this});var d=Object.getPrototypeOf,E=d&&d(d(A([])));E&&E!==t&&a.call(E,o)&&(g=E);var y=h.prototype=f.prototype=Object.create(g);function b(e){["next","throw","return"].forEach(function(t){l(e,t,function(e){return this._invoke(t,e)})})}function w(e,t){var r;n(this,"_invoke",{value:function(n,o){function i(){return new t(function(r,i){!function n(r,o,i,c){var l=s(e[r],e,o);if("throw"!==l.type){var u=l.arg,m=u.value;return m&&"object"==typeof m&&a.call(m,"__await")?t.resolve(m.__await).then(function(e){n("next",e,i,c)},function(e){n("throw",e,i,c)}):t.resolve(m).then(function(e){u.value=e,i(u)},function(e){return n("throw",e,i,c)})}c(l.arg)}(n,o,r,i)})}return r=r?r.then(i,i):i()}})}function x(e,t,a){var n="suspendedStart";return function(r,o){if("executing"===n)throw new Error("Generator is already running");if("completed"===n){if("throw"===r)throw o;return j()}for(a.method=r,a.arg=o;;){var i=a.delegate;if(i){var c=N(i,a);if(c){if(c===m)continue;return c}}if("next"===a.method)a.sent=a._sent=a.arg;else if("throw"===a.method){if("suspendedStart"===n)throw n="completed",a.arg;a.dispatchException(a.arg)}else"return"===a.method&&a.abrupt("return",a.arg);n="executing";var l=s(e,t,a);if("normal"===l.type){if(n=a.done?"completed":"suspendedYield",l.arg===m)continue;return{value:l.arg,done:a.done}}"throw"===l.type&&(n="completed",a.method="throw",a.arg=l.arg)}}}function N(e,t){var a=t.method,n=e.iterator[a];if(void 0===n)return t.delegate=null,"throw"===a&&e.iterator.return&&(t.method="return",t.arg=void 0,N(e,t),"throw"===t.method)||"return"!==a&&(t.method="throw",t.arg=new TypeError("The iterator does not provide a '"+a+"' method")),m;var r=s(n,e.iterator,t.arg);if("throw"===r.type)return t.method="throw",t.arg=r.arg,t.delegate=null,m;var o=r.arg;return o?o.done?(t[e.resultName]=o.value,t.next=e.nextLoc,"return"!==t.method&&(t.method="next",t.arg=void 0),t.delegate=null,m):o:(t.method="throw",t.arg=new TypeError("iterator result is not an object"),t.delegate=null,m)}function L(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function k(e){var t=e.completion||{};t.type="normal",delete t.arg,e.completion=t}function O(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(L,this),this.reset(!0)}function A(e){if(e){var t=e[o];if(t)return t.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var n=-1,r=function t(){for(;++n<e.length;)if(a.call(e,n))return t.value=e[n],t.done=!1,t;return t.value=void 0,t.done=!0,t};return r.next=r}}return{next:j}}function j(){return{value:void 0,done:!0}}return p.prototype=h,n(y,"constructor",{value:h,configurable:!0}),n(h,"constructor",{value:p,configurable:!0}),p.displayName=l(h,c,"GeneratorFunction"),e.isGeneratorFunction=function(e){var t="function"==typeof e&&e.constructor;return!!t&&(t===p||"GeneratorFunction"===(t.displayName||t.name))},e.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,h):(e.__proto__=h,l(e,c,"GeneratorFunction")),e.prototype=Object.create(y),e},e.awrap=function(e){return{__await:e}},b(w.prototype),l(w.prototype,i,function(){return this}),e.AsyncIterator=w,e.async=function(t,a,n,r,o){void 0===o&&(o=Promise);var i=new w(u(t,a,n,r),o);return e.isGeneratorFunction(a)?i:i.next().then(function(e){return e.done?e.value:i.next()})},b(y),l(y,c,"Generator"),l(y,o,function(){return this}),l(y,"toString",function(){return"[object Generator]"}),e.keys=function(e){var t=Object(e),a=[];for(var n in t)a.push(n);return a.reverse(),function e(){for(;a.length;){var n=a.pop();if(n in t)return e.value=n,e.done=!1,e}return e.done=!0,e}},e.values=A,O.prototype={constructor:O,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(k),!e)for(var t in this)"t"===t.charAt(0)&&a.call(this,t)&&!isNaN(+t.slice(1))&&(this[t]=void 0)},stop:function(){this.done=!0;var e=this.tryEntries[0].completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var t=this;function n(a,n){return i.type="throw",i.arg=e,t.next=a,n&&(t.method="next",t.arg=void 0),!!n}for(var r=this.tryEntries.length-1;r>=0;--r){var o=this.tryEntries[r],i=o.completion;if("root"===o.tryLoc)return n("end");if(o.tryLoc<=this.prev){var c=a.call(o,"catchLoc"),l=a.call(o,"finallyLoc");if(c&&l){if(this.prev<o.catchLoc)return n(o.catchLoc,!0);if(this.prev<o.finallyLoc)return n(o.finallyLoc)}else if(c){if(this.prev<o.catchLoc)return n(o.catchLoc,!0)}else{if(!l)throw new Error("try statement without catch or finally");if(this.prev<o.finallyLoc)return n(o.finallyLoc)}}}},abrupt:function(e,t){for(var n=this.tryEntries.length-1;n>=0;--n){var r=this.tryEntries[n];if(r.tryLoc<=this.prev&&a.call(r,"finallyLoc")&&this.prev<r.finallyLoc){var o=r;break}}o&&("break"===e||"continue"===e)&&o.tryLoc<=t&&t<=o.finallyLoc&&(o=null);var i=o?o.completion:{};return i.type=e,i.arg=t,o?(this.method="next",this.next=o.finallyLoc,m):this.complete(i)},complete:function(e,t){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&t&&(this.next=t),m},finish:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var a=this.tryEntries[t];if(a.finallyLoc===e)return this.complete(a.completion,a.afterLoc),k(a),m}},catch:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var a=this.tryEntries[t];if(a.tryLoc===e){var n=a.completion;if("throw"===n.type){var r=n.arg;k(a)}return r}}throw new Error("illegal catch attempt")},delegateYield:function(e,t,a){return this.delegate={iterator:A(e),resultName:t,nextLoc:a},"next"===this.method&&(this.arg=void 0),m}},e}a(35);function d(e){var t=e.name,a=e.flag,n=e.capital,o=e.area,i=e.poblation;return r.a.createElement("div",{className:"card-container"},r.a.createElement("img",{src:a,alt:"".concat(t,"-flag"),className:"country-flag"}),r.a.createElement("section",{className:"principal-info-container"},r.a.createElement("h2",{className:"name-country"},t),r.a.createElement("h4",{className:"name-capital"},"Capital: ",n)),r.a.createElement("section",{className:"secondary-info-container"},r.a.createElement("p",null,"\xc1rea: ",o," km2."),r.a.createElement("p",null,"Poblaci\xf3n: ",i," habitantes.")))}a(37);function E(){var e=r.a.useContext(h).countries,t=e.filter(function(e){return"Americas"===e.region}).map(function(e){return{key:e.name.common,name:e.translations.spa.common,capital:e.capital,population:e.population,flag:e.flags.svg,area:e.area}});return r.a.createElement(r.a.Fragment,null,r.a.createElement(s,{title:"America"}),r.a.createElement("section",{className:"text-container"},r.a.createElement("p",null,"El continente de la divesidad cultural y geogr\xe1fica.")),r.a.createElement("main",{className:"main-container--card"},t.map(function(e){return r.a.createElement(d,{key:e.key,name:e.name,flag:e.flag,capital:e.capital,area:e.area,poblation:e.population})})),r.a.createElement(f,null))}a(39);function y(){var e=r.a.useContext(h).countries,t=e.filter(function(e){return"Europe"===e.region}).map(function(e){return{key:e.name.common,name:e.translations.spa.common,capital:e.capital,population:e.population,flag:e.flags.svg,area:e.area}});return r.a.createElement(r.a.Fragment,null,r.a.createElement(s,{title:"Europa"}),r.a.createElement("section",{className:"text-container"},r.a.createElement("p",null,"El continente de la modernidad y la innovaci\xf3n.")),r.a.createElement("main",{className:"main-container--card"},t.map(function(e){return r.a.createElement(d,{key:e.key,name:e.name,flag:e.flag,capital:e.capital,area:e.area,poblation:e.population})})),r.a.createElement(f,null))}a(41);function b(){var e=r.a.useContext(h).countries,t=e.filter(function(e){return"Asia"===e.region}).map(function(e){return{key:e.name.common,name:e.translations.spa.common,capital:e.capital,population:e.population,flag:e.flags.svg,area:e.area}});return r.a.createElement(r.a.Fragment,null,r.a.createElement(s,{title:"Asia"}),r.a.createElement("section",{className:"text-container"},r.a.createElement("p",null,"La tierra de las religiones y filosofias milenarias.")),r.a.createElement("main",{className:"main-container--card"},t.map(function(e){return r.a.createElement(d,{key:e.key,name:e.name,flag:e.flag,capital:e.capital,area:e.area,poblation:e.population})})),r.a.createElement(f,null))}a(43);function w(){var e=r.a.useContext(h).countries,t=e.filter(function(e){return"Oceania"===e.region}).map(function(e){return{key:e.name.common,name:e.translations.spa.common,capital:e.capital,population:e.population,flag:e.flags.svg}});return r.a.createElement(r.a.Fragment,null,r.a.createElement(s,{title:"Oceania"}),r.a.createElement("section",{className:"text-container"},r.a.createElement("p",null,"El continente de la aventura y la exploraci\xf3n.")),r.a.createElement("main",{className:"main-container--card"},t.map(function(e){return r.a.createElement(d,{key:e.key,name:e.name,flag:e.flag,capital:e.capital})})),r.a.createElement(f,null))}a(45);function x(){var e=r.a.useContext(h).countries,t=e.filter(function(e){return"Africa"===e.region}).map(function(e){return{key:e.name.common,name:e.translations.spa.common,capital:e.capital,population:e.population,flag:e.flags.svg,area:e.area}});return r.a.createElement(r.a.Fragment,null,r.a.createElement(s,{title:"Africa"}),r.a.createElement("section",{className:"text-container"},r.a.createElement("p",null,"La cuna de la humanidad y la diversidad cultural.")),r.a.createElement("main",{className:"main-container--card"},t.map(function(e){return r.a.createElement(d,{key:e.key,name:e.name,flag:e.flag,capital:e.capital,area:e.area,poblation:e.population})})),r.a.createElement(f,null))}function N(){var e=function(e){var t=Object(n.useState)([]),a=Object(c.a)(t,2),r=a[0],o=a[1];return Object(n.useEffect)(function(){function t(){return(t=Object(g.a)(v().mark(function t(){var a,n;return v().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,fetch(e);case 3:return a=t.sent,t.next=6,a.json();case 6:n=t.sent,o(n),t.next=13;break;case 10:t.prev=10,t.t0=t.catch(0),console.log(t.t0);case 13:case"end":return t.stop()}},t,null,[[0,10]])}))).apply(this,arguments)}!function(){t.apply(this,arguments)}()},[e]),[r,o]}("https://restcountries.com/v3.1/all"),t=Object(c.a)(e,2),a=t[0],o=t[1];return r.a.createElement(r.a.Fragment,null,r.a.createElement(l.a,null,r.a.createElement(h.Provider,{value:{countries:a,setCountries:o}},r.a.createElement(u.c,null,r.a.createElement(u.a,{path:"/",element:r.a.createElement(p,null)}),r.a.createElement(u.a,{path:"/Americas",element:r.a.createElement(E,null)}),r.a.createElement(u.a,{path:"/Europe",element:r.a.createElement(y,null)}),r.a.createElement(u.a,{path:"/Asia",element:r.a.createElement(b,null)}),r.a.createElement(u.a,{path:"/Oceania",element:r.a.createElement(w,null)}),r.a.createElement(u.a,{path:"/Africa",element:r.a.createElement(x,null)})))))}a(47);i.a.createRoot(document.getElementById("root")).render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(N,null)))}},[[18,2,1]]]);
//# sourceMappingURL=main.77a70a04.chunk.js.map