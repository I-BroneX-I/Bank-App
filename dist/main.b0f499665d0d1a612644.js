!function(){"use strict";var e={205:function(){function e(e,r){var n="undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(!n){if(Array.isArray(e)||(n=function(e,r){if(e){if("string"==typeof e)return t(e,r);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?t(e,r):void 0}}(e))||r&&e&&"number"==typeof e.length){n&&(e=n);var o=0,a=function(){};return{s:a,n:function(){return o>=e.length?{done:!0}:{done:!1,value:e[o++]}},e:function(e){throw e},f:a}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var i,c=!0,s=!1;return{s:function(){n=n.call(e)},n:function(){var e=n.next();return c=e.done,e},e:function(e){s=!0,i=e},f:function(){try{c||null==n.return||n.return()}finally{if(s)throw i}}}}function t(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}var r=document.querySelector("#topNav"),n=document.querySelector("#navContainer"),o=document.querySelector("#login"),a=document.querySelector("#burger"),i=document.querySelectorAll("#hrBurger");window.addEventListener("resize",(function(){console.log(window.innerWidth),window.innerWidth>769&&(r.classList.remove("activeTopNav"),n.classList.remove("activeNavContainer"),o.classList.remove("activeLogin"),r.classList.remove("closeTopNav")),r.classList.remove("activeTopNav"),n.classList.remove("activeNavContainer"),o.classList.remove("activeLogin");var t,a=e(i);try{for(a.s();!(t=a.n()).done;)t.value.classList.remove("activeHr")}catch(e){a.e(e)}finally{a.f()}})),a.addEventListener("click",(function(){r.classList.toggle("activeTopNav"),n.classList.toggle("activeNavContainer"),o.classList.toggle("activeLogin"),r.classList.contains("activeTopNav")?r.classList.remove("closeTopNav"):r.classList.add("closeTopNav");var t,a=e(i);try{for(a.s();!(t=a.n()).done;)t.value.classList.toggle("activeHr")}catch(e){a.e(e)}finally{a.f()}}))}},t={};function r(n){var o=t[n];if(void 0!==o)return o.exports;var a=t[n]={exports:{}};return e[n](a,a.exports,r),a.exports}r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,{a:t}),t},r.d=function(e,t){for(var n in t)r.o(t,n)&&!r.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r(205)}();
//# sourceMappingURL=main.b0f499665d0d1a612644.js.map