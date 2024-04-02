/*! For license information please see bundleee48d3cf51e963d50935.js.LICENSE.txt */
(()=>{"use strict";var n={993:(n,t,e)=>{e.d(t,{A:()=>c});var r=e(354),o=e.n(r),a=e(314),i=e.n(a)()(o());i.push([n.id,"/* http://meyerweb.com/eric/tools/css/reset/ \n   v2.0 | 20110126\n   License: none (public domain)\n*/\n\nhtml, body, div, span, applet, object, iframe,\nh1, h2, h3, h4, h5, h6, p, blockquote, pre,\na, abbr, acronym, address, big, cite, code,\ndel, dfn, em, img, ins, kbd, q, s, samp,\nsmall, strike, strong, sub, sup, tt, var,\nb, u, i, center,\ndl, dt, dd, ol, ul, li,\nfieldset, form, label, legend,\ntable, caption, tbody, tfoot, thead, tr, th, td,\narticle, aside, canvas, details, embed, \nfigure, figcaption, footer, header, hgroup, \nmenu, nav, output, ruby, section, summary,\ntime, mark, audio, video {\n\tmargin: 0;\n\tpadding: 0;\n\tborder: 0;\n\tfont-size: 100%;\n\tfont: inherit;\n\tvertical-align: baseline;\n}\n/* HTML5 display-role reset for older browsers */\narticle, aside, details, figcaption, figure, \nfooter, header, hgroup, menu, nav, section {\n\tdisplay: block;\n}\nbody {\n\tline-height: 1;\n}\nol, ul {\n\tlist-style: none;\n}\nblockquote, q {\n\tquotes: none;\n}\nblockquote:before, blockquote:after,\nq:before, q:after {\n\tcontent: '';\n\tcontent: none;\n}\ntable {\n\tborder-collapse: collapse;\n\tborder-spacing: 0;\n}\n*{\n    box-sizing: border-box;\n}","",{version:3,sources:["webpack://./src/styles/reset.css"],names:[],mappings:"AAAA;;;CAGC;;AAED;;;;;;;;;;;;;CAaC,SAAS;CACT,UAAU;CACV,SAAS;CACT,eAAe;CACf,aAAa;CACb,wBAAwB;AACzB;AACA,gDAAgD;AAChD;;CAEC,cAAc;AACf;AACA;CACC,cAAc;AACf;AACA;CACC,gBAAgB;AACjB;AACA;CACC,YAAY;AACb;AACA;;CAEC,WAAW;CACX,aAAa;AACd;AACA;CACC,yBAAyB;CACzB,iBAAiB;AAClB;AACA;IACI,sBAAsB;AAC1B",sourcesContent:["/* http://meyerweb.com/eric/tools/css/reset/ \n   v2.0 | 20110126\n   License: none (public domain)\n*/\n\nhtml, body, div, span, applet, object, iframe,\nh1, h2, h3, h4, h5, h6, p, blockquote, pre,\na, abbr, acronym, address, big, cite, code,\ndel, dfn, em, img, ins, kbd, q, s, samp,\nsmall, strike, strong, sub, sup, tt, var,\nb, u, i, center,\ndl, dt, dd, ol, ul, li,\nfieldset, form, label, legend,\ntable, caption, tbody, tfoot, thead, tr, th, td,\narticle, aside, canvas, details, embed, \nfigure, figcaption, footer, header, hgroup, \nmenu, nav, output, ruby, section, summary,\ntime, mark, audio, video {\n\tmargin: 0;\n\tpadding: 0;\n\tborder: 0;\n\tfont-size: 100%;\n\tfont: inherit;\n\tvertical-align: baseline;\n}\n/* HTML5 display-role reset for older browsers */\narticle, aside, details, figcaption, figure, \nfooter, header, hgroup, menu, nav, section {\n\tdisplay: block;\n}\nbody {\n\tline-height: 1;\n}\nol, ul {\n\tlist-style: none;\n}\nblockquote, q {\n\tquotes: none;\n}\nblockquote:before, blockquote:after,\nq:before, q:after {\n\tcontent: '';\n\tcontent: none;\n}\ntable {\n\tborder-collapse: collapse;\n\tborder-spacing: 0;\n}\n*{\n    box-sizing: border-box;\n}"],sourceRoot:""}]);const c=i},919:(n,t,e)=>{e.d(t,{A:()=>c});var r=e(354),o=e.n(r),a=e(314),i=e.n(a)()(o());i.push([n.id,":root {\n  --background-color: #333;\n  --text-color: #fff;\n  --button-color: #007bff;\n  --button-hover-color: #0056b3;\n  --form-background: rgba(0, 0, 0, 0.9);\n  --input-background: #555;\n}\n\nbody {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  background-color: var(--background-color);\n  color: var(--text-color);\n  padding: 40px;\n}\n\nh1 {\n  text-align: center;\n  margin-bottom: 20px;\n}\n\n#weatherForm {\n  display: grid;\n  grid-template-columns: 1fr;\n  gap: 10px; /* Adds gap between elements */\n  max-width: 500px;\n  margin: 0 auto;\n  background-color: var(--form-background);\n  padding: 20px;\n  border-radius: 10px;\n}\n\nlabel {\n  display: block;\n  margin-bottom: 10px;\n}\n\ninput[type='text'] {\n  width: 100%;\n  padding: 10px;\n  border-radius: 5px;\n  border: none;\n  background-color: var(--input-background);\n  color: var(--text-color);\n}\n\nbutton {\n  width: 100%;\n  padding: 10px;\n  border: none;\n  background-color: var(--button-color);\n  color: var(--text-color);\n  cursor: pointer;\n  border-radius: 5px;\n}\n\nbutton:hover {\n  background-color: var(--button-hover-color);\n}\n\n.main {\n  margin-top: 10px;\n  display: flex;\n  flex-direction: column;\n  gap: 10px;\n}\nh1 {\n  font-size: 4em;\n}\nlabel {\n  font-size: 2em;\n}\n.weather-icon {\n  width: 5em;\n  height: 5em;\n}\n","",{version:3,sources:["webpack://./src/styles/style.css"],names:[],mappings:"AAAA;EACE,wBAAwB;EACxB,kBAAkB;EAClB,uBAAuB;EACvB,6BAA6B;EAC7B,qCAAqC;EACrC,wBAAwB;AAC1B;;AAEA;EACE,aAAa;EACb,sBAAsB;EACtB,uBAAuB;EACvB,mBAAmB;EACnB,yCAAyC;EACzC,wBAAwB;EACxB,aAAa;AACf;;AAEA;EACE,kBAAkB;EAClB,mBAAmB;AACrB;;AAEA;EACE,aAAa;EACb,0BAA0B;EAC1B,SAAS,EAAE,8BAA8B;EACzC,gBAAgB;EAChB,cAAc;EACd,wCAAwC;EACxC,aAAa;EACb,mBAAmB;AACrB;;AAEA;EACE,cAAc;EACd,mBAAmB;AACrB;;AAEA;EACE,WAAW;EACX,aAAa;EACb,kBAAkB;EAClB,YAAY;EACZ,yCAAyC;EACzC,wBAAwB;AAC1B;;AAEA;EACE,WAAW;EACX,aAAa;EACb,YAAY;EACZ,qCAAqC;EACrC,wBAAwB;EACxB,eAAe;EACf,kBAAkB;AACpB;;AAEA;EACE,2CAA2C;AAC7C;;AAEA;EACE,gBAAgB;EAChB,aAAa;EACb,sBAAsB;EACtB,SAAS;AACX;AACA;EACE,cAAc;AAChB;AACA;EACE,cAAc;AAChB;AACA;EACE,UAAU;EACV,WAAW;AACb",sourcesContent:[":root {\n  --background-color: #333;\n  --text-color: #fff;\n  --button-color: #007bff;\n  --button-hover-color: #0056b3;\n  --form-background: rgba(0, 0, 0, 0.9);\n  --input-background: #555;\n}\n\nbody {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  background-color: var(--background-color);\n  color: var(--text-color);\n  padding: 40px;\n}\n\nh1 {\n  text-align: center;\n  margin-bottom: 20px;\n}\n\n#weatherForm {\n  display: grid;\n  grid-template-columns: 1fr;\n  gap: 10px; /* Adds gap between elements */\n  max-width: 500px;\n  margin: 0 auto;\n  background-color: var(--form-background);\n  padding: 20px;\n  border-radius: 10px;\n}\n\nlabel {\n  display: block;\n  margin-bottom: 10px;\n}\n\ninput[type='text'] {\n  width: 100%;\n  padding: 10px;\n  border-radius: 5px;\n  border: none;\n  background-color: var(--input-background);\n  color: var(--text-color);\n}\n\nbutton {\n  width: 100%;\n  padding: 10px;\n  border: none;\n  background-color: var(--button-color);\n  color: var(--text-color);\n  cursor: pointer;\n  border-radius: 5px;\n}\n\nbutton:hover {\n  background-color: var(--button-hover-color);\n}\n\n.main {\n  margin-top: 10px;\n  display: flex;\n  flex-direction: column;\n  gap: 10px;\n}\nh1 {\n  font-size: 4em;\n}\nlabel {\n  font-size: 2em;\n}\n.weather-icon {\n  width: 5em;\n  height: 5em;\n}\n"],sourceRoot:""}]);const c=i},314:n=>{n.exports=function(n){var t=[];return t.toString=function(){return this.map((function(t){var e="",r=void 0!==t[5];return t[4]&&(e+="@supports (".concat(t[4],") {")),t[2]&&(e+="@media ".concat(t[2]," {")),r&&(e+="@layer".concat(t[5].length>0?" ".concat(t[5]):""," {")),e+=n(t),r&&(e+="}"),t[2]&&(e+="}"),t[4]&&(e+="}"),e})).join("")},t.i=function(n,e,r,o,a){"string"==typeof n&&(n=[[null,n,void 0]]);var i={};if(r)for(var c=0;c<this.length;c++){var u=this[c][0];null!=u&&(i[u]=!0)}for(var s=0;s<n.length;s++){var l=[].concat(n[s]);r&&i[l[0]]||(void 0!==a&&(void 0===l[5]||(l[1]="@layer".concat(l[5].length>0?" ".concat(l[5]):""," {").concat(l[1],"}")),l[5]=a),e&&(l[2]?(l[1]="@media ".concat(l[2]," {").concat(l[1],"}"),l[2]=e):l[2]=e),o&&(l[4]?(l[1]="@supports (".concat(l[4],") {").concat(l[1],"}"),l[4]=o):l[4]="".concat(o)),t.push(l))}},t}},354:n=>{n.exports=function(n){var t=n[1],e=n[3];if(!e)return t;if("function"==typeof btoa){var r=btoa(unescape(encodeURIComponent(JSON.stringify(e)))),o="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(r),a="/*# ".concat(o," */");return[t].concat([a]).join("\n")}return[t].join("\n")}},72:n=>{var t=[];function e(n){for(var e=-1,r=0;r<t.length;r++)if(t[r].identifier===n){e=r;break}return e}function r(n,r){for(var a={},i=[],c=0;c<n.length;c++){var u=n[c],s=r.base?u[0]+r.base:u[0],l=a[s]||0,d="".concat(s," ").concat(l);a[s]=l+1;var p=e(d),A={css:u[1],media:u[2],sourceMap:u[3],supports:u[4],layer:u[5]};if(-1!==p)t[p].references++,t[p].updater(A);else{var f=o(A,r);r.byIndex=c,t.splice(c,0,{identifier:d,updater:f,references:1})}i.push(d)}return i}function o(n,t){var e=t.domAPI(t);return e.update(n),function(t){if(t){if(t.css===n.css&&t.media===n.media&&t.sourceMap===n.sourceMap&&t.supports===n.supports&&t.layer===n.layer)return;e.update(n=t)}else e.remove()}}n.exports=function(n,o){var a=r(n=n||[],o=o||{});return function(n){n=n||[];for(var i=0;i<a.length;i++){var c=e(a[i]);t[c].references--}for(var u=r(n,o),s=0;s<a.length;s++){var l=e(a[s]);0===t[l].references&&(t[l].updater(),t.splice(l,1))}a=u}}},659:n=>{var t={};n.exports=function(n,e){var r=function(n){if(void 0===t[n]){var e=document.querySelector(n);if(window.HTMLIFrameElement&&e instanceof window.HTMLIFrameElement)try{e=e.contentDocument.head}catch(n){e=null}t[n]=e}return t[n]}(n);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(e)}},540:n=>{n.exports=function(n){var t=document.createElement("style");return n.setAttributes(t,n.attributes),n.insert(t,n.options),t}},56:(n,t,e)=>{n.exports=function(n){var t=e.nc;t&&n.setAttribute("nonce",t)}},825:n=>{n.exports=function(n){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var t=n.insertStyleElement(n);return{update:function(e){!function(n,t,e){var r="";e.supports&&(r+="@supports (".concat(e.supports,") {")),e.media&&(r+="@media ".concat(e.media," {"));var o=void 0!==e.layer;o&&(r+="@layer".concat(e.layer.length>0?" ".concat(e.layer):""," {")),r+=e.css,o&&(r+="}"),e.media&&(r+="}"),e.supports&&(r+="}");var a=e.sourceMap;a&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),t.styleTagTransform(r,n,t.options)}(t,n,e)},remove:function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(t)}}}},113:n=>{n.exports=function(n,t){if(t.styleSheet)t.styleSheet.cssText=n;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(n))}}}},t={};function e(r){var o=t[r];if(void 0!==o)return o.exports;var a=t[r]={id:r,exports:{}};return n[r](a,a.exports,e),a.exports}e.n=n=>{var t=n&&n.__esModule?()=>n.default:()=>n;return e.d(t,{a:t}),t},e.d=(n,t)=>{for(var r in t)e.o(t,r)&&!e.o(n,r)&&Object.defineProperty(n,r,{enumerable:!0,get:t[r]})},e.o=(n,t)=>Object.prototype.hasOwnProperty.call(n,t),e.nc=void 0,(()=>{var n=e(72),t=e.n(n),r=e(825),o=e.n(r),a=e(659),i=e.n(a),c=e(56),u=e.n(c),s=e(540),l=e.n(s),d=e(113),p=e.n(d),A=e(993),f={};f.styleTagTransform=p(),f.setAttributes=u(),f.insert=i().bind(null,"head"),f.domAPI=o(),f.insertStyleElement=l(),t()(A.A,f),A.A&&A.A.locals&&A.A.locals;var h=e(919),m={};function v(n){return v="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(n){return typeof n}:function(n){return n&&"function"==typeof Symbol&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n},v(n)}function b(){b=function(){return t};var n,t={},e=Object.prototype,r=e.hasOwnProperty,o=Object.defineProperty||function(n,t,e){n[t]=e.value},a="function"==typeof Symbol?Symbol:{},i=a.iterator||"@@iterator",c=a.asyncIterator||"@@asyncIterator",u=a.toStringTag||"@@toStringTag";function s(n,t,e){return Object.defineProperty(n,t,{value:e,enumerable:!0,configurable:!0,writable:!0}),n[t]}try{s({},"")}catch(n){s=function(n,t,e){return n[t]=e}}function l(n,t,e,r){var a=t&&t.prototype instanceof y?t:y,i=Object.create(a.prototype),c=new O(r||[]);return o(i,"_invoke",{value:S(n,e,c)}),i}function d(n,t,e){try{return{type:"normal",arg:n.call(t,e)}}catch(n){return{type:"throw",arg:n}}}t.wrap=l;var p="suspendedStart",A="suspendedYield",f="executing",h="completed",m={};function y(){}function g(){}function C(){}var E={};s(E,i,(function(){return this}));var w=Object.getPrototypeOf,x=w&&w(w(_([])));x&&x!==e&&r.call(x,i)&&(E=x);var B=C.prototype=y.prototype=Object.create(E);function k(n){["next","throw","return"].forEach((function(t){s(n,t,(function(n){return this._invoke(t,n)}))}))}function L(n,t){function e(o,a,i,c){var u=d(n[o],n,a);if("throw"!==u.type){var s=u.arg,l=s.value;return l&&"object"==v(l)&&r.call(l,"__await")?t.resolve(l.__await).then((function(n){e("next",n,i,c)}),(function(n){e("throw",n,i,c)})):t.resolve(l).then((function(n){s.value=n,i(s)}),(function(n){return e("throw",n,i,c)}))}c(u.arg)}var a;o(this,"_invoke",{value:function(n,r){function o(){return new t((function(t,o){e(n,r,t,o)}))}return a=a?a.then(o,o):o()}})}function S(t,e,r){var o=p;return function(a,i){if(o===f)throw Error("Generator is already running");if(o===h){if("throw"===a)throw i;return{value:n,done:!0}}for(r.method=a,r.arg=i;;){var c=r.delegate;if(c){var u=j(c,r);if(u){if(u===m)continue;return u}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if(o===p)throw o=h,r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);o=f;var s=d(t,e,r);if("normal"===s.type){if(o=r.done?h:A,s.arg===m)continue;return{value:s.arg,done:r.done}}"throw"===s.type&&(o=h,r.method="throw",r.arg=s.arg)}}}function j(t,e){var r=e.method,o=t.iterator[r];if(o===n)return e.delegate=null,"throw"===r&&t.iterator.return&&(e.method="return",e.arg=n,j(t,e),"throw"===e.method)||"return"!==r&&(e.method="throw",e.arg=new TypeError("The iterator does not provide a '"+r+"' method")),m;var a=d(o,t.iterator,e.arg);if("throw"===a.type)return e.method="throw",e.arg=a.arg,e.delegate=null,m;var i=a.arg;return i?i.done?(e[t.resultName]=i.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=n),e.delegate=null,m):i:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,m)}function q(n){var t={tryLoc:n[0]};1 in n&&(t.catchLoc=n[1]),2 in n&&(t.finallyLoc=n[2],t.afterLoc=n[3]),this.tryEntries.push(t)}function T(n){var t=n.completion||{};t.type="normal",delete t.arg,n.completion=t}function O(n){this.tryEntries=[{tryLoc:"root"}],n.forEach(q,this),this.reset(!0)}function _(t){if(t||""===t){var e=t[i];if(e)return e.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var o=-1,a=function e(){for(;++o<t.length;)if(r.call(t,o))return e.value=t[o],e.done=!1,e;return e.value=n,e.done=!0,e};return a.next=a}}throw new TypeError(v(t)+" is not iterable")}return g.prototype=C,o(B,"constructor",{value:C,configurable:!0}),o(C,"constructor",{value:g,configurable:!0}),g.displayName=s(C,u,"GeneratorFunction"),t.isGeneratorFunction=function(n){var t="function"==typeof n&&n.constructor;return!!t&&(t===g||"GeneratorFunction"===(t.displayName||t.name))},t.mark=function(n){return Object.setPrototypeOf?Object.setPrototypeOf(n,C):(n.__proto__=C,s(n,u,"GeneratorFunction")),n.prototype=Object.create(B),n},t.awrap=function(n){return{__await:n}},k(L.prototype),s(L.prototype,c,(function(){return this})),t.AsyncIterator=L,t.async=function(n,e,r,o,a){void 0===a&&(a=Promise);var i=new L(l(n,e,r,o),a);return t.isGeneratorFunction(e)?i:i.next().then((function(n){return n.done?n.value:i.next()}))},k(B),s(B,u,"Generator"),s(B,i,(function(){return this})),s(B,"toString",(function(){return"[object Generator]"})),t.keys=function(n){var t=Object(n),e=[];for(var r in t)e.push(r);return e.reverse(),function n(){for(;e.length;){var r=e.pop();if(r in t)return n.value=r,n.done=!1,n}return n.done=!0,n}},t.values=_,O.prototype={constructor:O,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=n,this.done=!1,this.delegate=null,this.method="next",this.arg=n,this.tryEntries.forEach(T),!t)for(var e in this)"t"===e.charAt(0)&&r.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=n)},stop:function(){this.done=!0;var n=this.tryEntries[0].completion;if("throw"===n.type)throw n.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function o(r,o){return c.type="throw",c.arg=t,e.next=r,o&&(e.method="next",e.arg=n),!!o}for(var a=this.tryEntries.length-1;a>=0;--a){var i=this.tryEntries[a],c=i.completion;if("root"===i.tryLoc)return o("end");if(i.tryLoc<=this.prev){var u=r.call(i,"catchLoc"),s=r.call(i,"finallyLoc");if(u&&s){if(this.prev<i.catchLoc)return o(i.catchLoc,!0);if(this.prev<i.finallyLoc)return o(i.finallyLoc)}else if(u){if(this.prev<i.catchLoc)return o(i.catchLoc,!0)}else{if(!s)throw Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return o(i.finallyLoc)}}}},abrupt:function(n,t){for(var e=this.tryEntries.length-1;e>=0;--e){var o=this.tryEntries[e];if(o.tryLoc<=this.prev&&r.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var a=o;break}}a&&("break"===n||"continue"===n)&&a.tryLoc<=t&&t<=a.finallyLoc&&(a=null);var i=a?a.completion:{};return i.type=n,i.arg=t,a?(this.method="next",this.next=a.finallyLoc,m):this.complete(i)},complete:function(n,t){if("throw"===n.type)throw n.arg;return"break"===n.type||"continue"===n.type?this.next=n.arg:"return"===n.type?(this.rval=this.arg=n.arg,this.method="return",this.next="end"):"normal"===n.type&&t&&(this.next=t),m},finish:function(n){for(var t=this.tryEntries.length-1;t>=0;--t){var e=this.tryEntries[t];if(e.finallyLoc===n)return this.complete(e.completion,e.afterLoc),T(e),m}},catch:function(n){for(var t=this.tryEntries.length-1;t>=0;--t){var e=this.tryEntries[t];if(e.tryLoc===n){var r=e.completion;if("throw"===r.type){var o=r.arg;T(e)}return o}}throw Error("illegal catch attempt")},delegateYield:function(t,e,r){return this.delegate={iterator:_(t),resultName:e,nextLoc:r},"next"===this.method&&(this.arg=n),m}},t}function y(n,t,e,r,o,a,i){try{var c=n[a](i),u=c.value}catch(n){return void e(n)}c.done?t(u):Promise.resolve(u).then(r,o)}function g(n){return function(){var t=this,e=arguments;return new Promise((function(r,o){var a=n.apply(t,e);function i(n){y(a,r,o,i,c,"next",n)}function c(n){y(a,r,o,i,c,"throw",n)}i(void 0)}))}}function C(n,t){for(var e=0;e<t.length;e++){var r=t[e];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(n,E(r.key),r)}}function E(n){var t=function(n,t){if("object"!=v(n)||!n)return n;var e=n[Symbol.toPrimitive];if(void 0!==e){var r=e.call(n,"string");if("object"!=v(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(n)}(n);return"symbol"==v(t)?t:t+""}m.styleTagTransform=p(),m.setAttributes=u(),m.insert=i().bind(null,"head"),m.domAPI=o(),m.insertStyleElement=l(),t()(h.A,m),h.A&&h.A.locals&&h.A.locals;var w=document.querySelector(".main"),x=document.getElementById("weatherForm"),B=new(function(){return n=function n(t){!function(n,t){if(!(n instanceof t))throw new TypeError("Cannot call a class as a function")}(this,n),this.apiKey=t},t=[{key:"getWeatherData",value:(e=g(b().mark((function n(t){var e,r,o,a;return b().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return e="https://api.weatherapi.com/v1/current.json?key=".concat(this.apiKey,"&q=").concat(t),n.prev=1,n.next=4,fetch(e);case 4:if((r=n.sent).ok){n.next=7;break}throw new Error("Network response was not ok");case 7:return n.next=9,r.json();case 9:o=n.sent,a=this.processWeatherData(o),this.updateMainDiv(a),n.next=17;break;case 14:n.prev=14,n.t0=n.catch(1),console.error("Error fetching weather data:",n.t0.message);case 17:case"end":return n.stop()}}),n,this,[[1,14]])}))),function(n){return e.apply(this,arguments)})},{key:"processWeatherData",value:function(n){return{location:n.location.name,country:n.location.country,temperature:n.current.temp_c,condition:n.current.condition.text,humidity:n.current.humidity,wind_speed:n.current.wind_kph,conditionIcon:n.current.condition.icon}}},{key:"updateMainDiv",value:function(n){w.innerHTML="\n      <div>Location: ".concat(n.location,", ").concat(n.country,"</div>\n      <div>Temperature: ").concat(n.temperature,"°C</div>\n      <div>Condition: ").concat(n.condition,"</div>\n      <div>Humidity: ").concat(n.humidity,"%</div>\n      <div>Wind Speed: ").concat(n.wind_speed,' km/h</div>\n      <img src="').concat(n.conditionIcon,'" alt="Weather Condition Icon" class="weather-icon">\n    ')}}],t&&C(n.prototype,t),Object.defineProperty(n,"prototype",{writable:!1}),n;var n,t,e}())("77d2ed1dd01544d8ae8214819242803");x.addEventListener("submit",function(){var n=g(b().mark((function n(t){var e;return b().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:t.preventDefault(),e=document.getElementById("locationInput").value,B.getWeatherData(e);case 3:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}())})()})();
//# sourceMappingURL=bundleee48d3cf51e963d50935.js.map