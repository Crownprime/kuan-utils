!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define("kuan-filter",[],t):"object"==typeof exports?exports["kuan-filter"]=t():e["kuan-filter"]=t()}(this,(function(){return function(e){var t={};function r(n){if(t[n])return t[n].exports;var o=t[n]={i:n,l:!1,exports:{}};return e[n].call(o.exports,o,o.exports,r),o.l=!0,o.exports}return r.m=e,r.c=t,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)r.d(n,o,function(t){return e[t]}.bind(null,o));return n},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="/kuan-utils/",r(r.s=25)}({25:function(e,t,r){"use strict";var n=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});var o=n(r(4));function u(e){return void 0===e&&(e=""),e.toString().replace(/(\d{3})\d{4}(\d{4})/,"$1****$2")}function a(e){return new Blob([e]).size}function i(e){return void 0===e&&(e=""),e.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#x27;").replace(/\//g,"&#x2f;")}function l(e){return(+e||0).toString().replace(/\B(?=(\d{3})+(?!\d))/g,",")}function f(e){var t=(new Date).getTime()-o.default.toDate(e).getTime(),r=Math.floor(t/864e5),n=Math.floor(t/36e5),u=Math.floor(t/6e4),a=Math.floor(r/30),i=Math.floor(a/12);return i?i+"年前":a?a+"月前":r?r+"天前":n?n+"小时前":u?u+"分钟前":"刚刚"}function c(e){var t=new Date,r=o.default.toDate(e).getTime()-t.getTime(),n=0,u=0,a=0,i=0;return r>=0&&(n=Math.floor(r/1e3/3600/24),u=Math.floor(r/1e3/60/60%24),a=Math.floor(r/1e3/60%60),i=Math.floor(r/1e3%60)),n+"天 "+u+"小时 "+a+"分钟 "+i+"秒"}t.hidePhone=u,t.byteSize=a,t.htmlEncode=i,t.formatCurrency=l,t.timeAgo=f,t.remainTime=c,t.default={hidePhone:u,byteSize:a,htmlEncode:i,formatCurrency:l,timeAgo:f,remainTime:c}},4:function(e,t,r){"use strict";function n(e){return e instanceof Date?e:new Date(e.replace(/-/g,"/").replace(/(\.\d+)?/g,"").replace("T"," "))}Object.defineProperty(t,"__esModule",{value:!0}),t.default={format:function(e,t){void 0===e&&(e=new Date),void 0===t&&(t="YYYY-MM-DD HH:mm:ss");var r=e instanceof Date?e:n(e),o={"Y+":r.getFullYear(),"M+":r.getMonth()+1,"D+":r.getDate(),"H+":r.getHours(),"m+":r.getMinutes(),"s+":r.getSeconds(),"q+":Math.floor((r.getMonth()+3)/3),"S+":r.getMilliseconds()};for(var u in o)if(new RegExp("("+u+")").test(t))if("Y+"==u)t=t.replace(RegExp.$1,(""+o[u]).substr(4-RegExp.$1.length));else if("S+"==u){var a=RegExp.$1.length;a=1==a?3:a,t=t.replace(RegExp.$1,("00"+o[u]).substr((""+o[u]).length-1,a))}else{var i=""+o[u];t=t.replace(RegExp.$1,1==RegExp.$1.length?i:("00"+i).substr(i.length))}return t},toDate:n}}}).default}));