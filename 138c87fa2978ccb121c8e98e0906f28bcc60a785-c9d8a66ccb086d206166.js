(self.webpackChunkpersonalwebsite=self.webpackChunkpersonalwebsite||[]).push([[610],{3646:function(t,e,n){var r=n(7228);t.exports=function(t){if(Array.isArray(t))return r(t)},t.exports.__esModule=!0,t.exports.default=t.exports},9100:function(t,e,n){var r=n(9489),o=n(7067);function i(e,n,u){return o()?(t.exports=i=Reflect.construct.bind(),t.exports.__esModule=!0,t.exports.default=t.exports):(t.exports=i=function(t,e,n){var o=[null];o.push.apply(o,e);var i=new(Function.bind.apply(t,o));return n&&r(i,n.prototype),i},t.exports.__esModule=!0,t.exports.default=t.exports),i.apply(null,arguments)}t.exports=i,t.exports.__esModule=!0,t.exports.default=t.exports},9713:function(t){t.exports=function(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t},t.exports.__esModule=!0,t.exports.default=t.exports},7067:function(t){t.exports=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}},t.exports.__esModule=!0,t.exports.default=t.exports},6860:function(t){t.exports=function(t){if("undefined"!=typeof Symbol&&null!=t[Symbol.iterator]||null!=t["@@iterator"])return Array.from(t)},t.exports.__esModule=!0,t.exports.default=t.exports},8206:function(t){t.exports=function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")},t.exports.__esModule=!0,t.exports.default=t.exports},319:function(t,e,n){var r=n(3646),o=n(6860),i=n(379),u=n(8206);t.exports=function(t){return r(t)||o(t)||i(t)||u()},t.exports.__esModule=!0,t.exports.default=t.exports},2102:function(t,e,n){var r=n(2632);t.exports={MDXRenderer:r}},2632:function(t,e,n){var r=n(9100),o=n(319),i=n(9713),u=n(7316),c=["scope","children"];function a(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function f(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?a(Object(n),!0).forEach((function(e){i(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}var s=n(7294),l=n(4983).mdx,p=n(6948).useMDXScope;t.exports=function(t){var e=t.scope,n=t.children,i=u(t,c),a=p(e),d=s.useMemo((function(){if(!n)return null;var t=f({React:s,mdx:l},a),e=Object.keys(t),i=e.map((function(e){return t[e]}));return r(Function,["_fn"].concat(o(e),[""+n])).apply(void 0,[{}].concat(o(i)))}),[n,e]);return s.createElement(d,f({},i))}},5863:function(t,e,n){"use strict";var r=n(7294),o=n(2309),i=function(t){var e=t.className;return r.createElement("div",{className:"opacity-20 hover:opacity-80 transition-opacity duration-150 ease-in-out z-50 "+e},r.createElement("button",{className:"ghost text-4xl",onClick:function(){window.scrollTo({top:0,behavior:"smooth"})}},r.createElement(o.gcy,null)))};e.Z=(0,r.memo)(i)},4241:function(t,e,n){"use strict";var r=n(7294),o=n(3493),i=n.n(o);e.Z=function(t){var e=t.className,n=void 0===e?"":e,o=t.children,u=t.hidden,c=void 0===u||u,a=t.visiblePageYOffset,f=void 0===a?500:a,s=(0,r.useState)(c),l=s[0],p=s[1],d=i()((function(){p(window.pageYOffset<=f)}),150);return(0,r.useLayoutEffect)((function(){return window.addEventListener("scroll",d),function(){window.removeEventListener("scroll",d)}}),[]),r.createElement("div",{className:(l?"hidden":"")+" "+n},o)}},2705:function(t,e,n){var r=n(5639).Symbol;t.exports=r},4239:function(t,e,n){var r=n(2705),o=n(9607),i=n(2333),u=r?r.toStringTag:void 0;t.exports=function(t){return null==t?void 0===t?"[object Undefined]":"[object Null]":u&&u in Object(t)?o(t):i(t)}},7561:function(t,e,n){var r=n(7990),o=/^\s+/;t.exports=function(t){return t?t.slice(0,r(t)+1).replace(o,""):t}},1957:function(t,e,n){var r="object"==typeof n.g&&n.g&&n.g.Object===Object&&n.g;t.exports=r},9607:function(t,e,n){var r=n(2705),o=Object.prototype,i=o.hasOwnProperty,u=o.toString,c=r?r.toStringTag:void 0;t.exports=function(t){var e=i.call(t,c),n=t[c];try{t[c]=void 0;var r=!0}catch(a){}var o=u.call(t);return r&&(e?t[c]=n:delete t[c]),o}},2333:function(t){var e=Object.prototype.toString;t.exports=function(t){return e.call(t)}},5639:function(t,e,n){var r=n(1957),o="object"==typeof self&&self&&self.Object===Object&&self,i=r||o||Function("return this")();t.exports=i},7990:function(t){var e=/\s/;t.exports=function(t){for(var n=t.length;n--&&e.test(t.charAt(n)););return n}},3279:function(t,e,n){var r=n(3218),o=n(7771),i=n(4841),u=Math.max,c=Math.min;t.exports=function(t,e,n){var a,f,s,l,p,d,v=0,x=!1,y=!1,b=!0;if("function"!=typeof t)throw new TypeError("Expected a function");function m(e){var n=a,r=f;return a=f=void 0,v=e,l=t.apply(r,n)}function g(t){return v=t,p=setTimeout(O,e),x?m(t):l}function h(t){var n=t-d;return void 0===d||n>=e||n<0||y&&t-v>=s}function O(){var t=o();if(h(t))return j(t);p=setTimeout(O,function(t){var n=e-(t-d);return y?c(n,s-(t-v)):n}(t))}function j(t){return p=void 0,b&&a?m(t):(a=f=void 0,l)}function w(){var t=o(),n=h(t);if(a=arguments,f=this,d=t,n){if(void 0===p)return g(d);if(y)return clearTimeout(p),p=setTimeout(O,e),m(d)}return void 0===p&&(p=setTimeout(O,e)),l}return e=i(e)||0,r(n)&&(x=!!n.leading,s=(y="maxWait"in n)?u(i(n.maxWait)||0,e):s,b="trailing"in n?!!n.trailing:b),w.cancel=function(){void 0!==p&&clearTimeout(p),v=0,a=d=f=p=void 0},w.flush=function(){return void 0===p?l:j(o())},w}},3218:function(t){t.exports=function(t){var e=typeof t;return null!=t&&("object"==e||"function"==e)}},7005:function(t){t.exports=function(t){return null!=t&&"object"==typeof t}},3448:function(t,e,n){var r=n(4239),o=n(7005);t.exports=function(t){return"symbol"==typeof t||o(t)&&"[object Symbol]"==r(t)}},7771:function(t,e,n){var r=n(5639);t.exports=function(){return r.Date.now()}},3493:function(t,e,n){var r=n(3279),o=n(3218);t.exports=function(t,e,n){var i=!0,u=!0;if("function"!=typeof t)throw new TypeError("Expected a function");return o(n)&&(i="leading"in n?!!n.leading:i,u="trailing"in n?!!n.trailing:u),r(t,e,{leading:i,maxWait:e,trailing:u})}},4841:function(t,e,n){var r=n(7561),o=n(3218),i=n(3448),u=/^[-+]0x[0-9a-f]+$/i,c=/^0b[01]+$/i,a=/^0o[0-7]+$/i,f=parseInt;t.exports=function(t){if("number"==typeof t)return t;if(i(t))return NaN;if(o(t)){var e="function"==typeof t.valueOf?t.valueOf():t;t=o(e)?e+"":e}if("string"!=typeof t)return 0===t?t:+t;t=r(t);var n=c.test(t);return n||a.test(t)?f(t.slice(2),n?2:8):u.test(t)?NaN:+t}}}]);
//# sourceMappingURL=138c87fa2978ccb121c8e98e0906f28bcc60a785-c9d8a66ccb086d206166.js.map