!function(e){var n={};function t(r){if(n[r])return n[r].exports;var i=n[r]={i:r,l:!1,exports:{}};return e[r].call(i.exports,i,i.exports,t),i.l=!0,i.exports}t.m=e,t.c=n,t.d=function(e,n,r){t.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:r})},t.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},t.t=function(e,n){if(1&n&&(e=t(e)),8&n)return e;if(4&n&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(t.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var i in e)t.d(r,i,function(n){return e[n]}.bind(null,i));return r},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},t.p="/kuan-utils/",t(t.s=3)}({3:function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var r=window;n.requestAnimationFrame=r.requestAnimationFrame=r.requestAnimationFrame||r.webkitRequestAnimationFrame||r.mozRequestAnimationFrame||r.msRequestAnimationFrame||function(e){return window.setTimeout(e,1e3/60)},n.cancelAnimationFrame=r.cancelAnimationFrame=r.cancelAnimationFrame||r.webkitCancelAnimationFrame||r.mozCancelAnimationFrame||r.msCancelAnimationFrame||r.oCancelAnimationFrame||function(e){return clearTimeout(e)},n.default={requestAnimationFrame:n.requestAnimationFrame,cancelAnimationFrame:n.cancelAnimationFrame}}});