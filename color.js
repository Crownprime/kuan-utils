!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define("kuan-color",[],t):"object"==typeof exports?exports["kuan-color"]=t():e["kuan-color"]=t()}(this,(function(){return function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}return n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="/kuan-utils/",n(n.s=18)}({18:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={random:function(){return"#"+("00000"+(16777216*Math.random()<<0).toString(16)).slice(-6)},rgb2hex:function(e,t,n){return"#"+(16777216+(n|t<<8|e<<16)).toString(16).slice(1)},hex2rgb:function(e){if(!/^#?([0-9a-fA-F]{3}|[#-9a-fA-F]{6})$/.test(e))return"";var t=e.replace("#","");3===t.length&&(t=t.split("").map((function(e){return e+e})).join(""));var n=parseInt(t,16);return(n>>16&255)+","+(n>>8&255)+","+(255&n)}}}}).default}));