module.exports=function(n){var r={};function o(e){if(r[e])return r[e].exports;var t=r[e]={i:e,l:!1,exports:{}};return n[e].call(t.exports,t,t.exports,o),t.l=!0,t.exports}return o.m=n,o.c=r,o.d=function(e,t,n){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},o.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)o.d(n,r,function(e){return t[e]}.bind(null,r));return n},o.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="",o(o.s=9)}([,function(e,t){e.exports=require("babel-runtime/helpers/typeof")},function(e,t){e.exports=require("babel-runtime/core-js/promise")},function(e,t){e.exports=require("babel-runtime/helpers/slicedToArray")},function(e,t){e.exports=require("babel-runtime/core-js/object/entries")},function(e,t){e.exports=require("axios")},function(e,t){e.exports=require("babel-runtime/core-js/json/stringify")},,,function(e,t,n){"use strict";n.r(t);var r={};n.r(r),n.d(r,"get",function(){return R}),n.d(r,"parse",function(){return N}),n.d(r,"stringify",function(){return P});var o={};n.r(o),n.d(o,"getCookie",function(){return U}),n.d(o,"setCookie",function(){return k}),n.d(o,"removeCookie",function(){return T});var i={};n.r(i),n.d(i,"timeAgo",function(){return q}),n.d(i,"remainTime",function(){return _});var u={};n.r(u),n.d(u,"add",function(){return $}),n.d(u,"sub",function(){return z}),n.d(u,"mul",function(){return B}),n.d(u,"div",function(){return L});var a={};n.r(a),n.d(a,"isiOS",function(){return X}),n.d(a,"isWx",function(){return G}),n.d(a,"isAliPay",function(){return K}),n.d(a,"isPc",function(){return Q}),n.d(a,"isPhone",function(){return V}),n.d(a,"isNum",function(){return Y}),n.d(a,"isEmail",function(){return ee}),n.d(a,"isIdCard",function(){return te}),n.d(a,"isUrl",function(){return ne}),n.d(a,"isImage",function(){return re});var c=n(1),d=n.n(c),l=new Date;function f(e){var t=1<arguments.length&&void 0!==arguments[1]?arguments[1]:300;if("function"!=typeof e)throw new Error("必须传入一个函数作为参数");var n=new Date;t<n-l&&(l=n,e())}var s=void 0;function p(e){var t=1<arguments.length&&void 0!==arguments[1]?arguments[1]:300;if("function"!=typeof e)throw new Error("必须传入一个函数作为参数");s&&clearTimeout(s),s=setTimeout(function(){e()},t)}function v(e){var t=void 0;if(null===e||"object"!==(void 0===e?"undefined":d()(e)))return e;if(e instanceof Date)return(t=new Date).setTime(e.getTime()),t;if(e instanceof Array){t=[];for(var n=0,r=e.length;n<r;n++)t[n]=v(e[n]);return t}if(e instanceof Object){for(var o in t={},e)e.hasOwnProperty(o)&&(t[o]=v(e[o]));return t}throw new Error("deep clone isn't supported.")}function g(){return"#"+("00000"+(16777216*Math.random()<<0).toString(16)).slice(-6)}var m=n(2),h=n.n(m),b=n(3),w=n.n(b),y=n(4),S=n.n(y),x=n(5),M=n.n(x);function A(e){var t=e.error,n=e.Alert,r=e.handleError,o=void 0===r?function(){}:r,i=t.response||{},u=i.status,a=void 0===u?"":u,c=i.config,d=void 0===c?{}:c,l=i.data,f=a?(void 0===l?{}:l).info||({400:"请求有错误",401:"没有权限",403:"用户得到授权，但是访问是被禁止的。",404:"接口地址地址不存在",406:"请求的格式不可得。",410:"请求的资源被永久删除",422:"当创建一个对象时，发生一个验证错误。",500:"服务器发生错误",502:"网关错误",503:"服务不可用",504:"网络超时"}[a]||"请求失败"):"网络超时";f&&n(a+" "+(d.url||"")+"：\n "+f),o(a,f,t)}var C=function(e){var t=e.options,n=void 0===t?{}:t,r=e.getHeaders,i=void 0===r?function(){}:r,o=e.handleError,u=void 0===o?function(){}:o,a=e.Alert,c=void 0===a?alert:a,d=M.a.create(n);return d.interceptors.request.use(function(o){var e=i()||{};return S()(e).forEach(function(e){var t=w()(e,2),n=t[0],r=t[1];r&&("token"===n?o.headers.Authorization="Bearer "+r:o.headers[n]=r)}),o}),d.interceptors.response.use(function(e){var t=e.data,n=void 0===t?{}:t;if(n.success||n.iRet)return e.data;var r=n.info||n.error||"",o=new Error(r);throw o.response=e,A({error:o,handleError:u,Alert:c,message:r}),o},function(e){return A({error:e,handleError:u,Alert:c}),h.a.reject(e)}),d},O=n(6),j=n.n(O);function I(e,t){var n={value:t,maxAge:6e4*(2<arguments.length&&void 0!==arguments[2]?arguments[2]:2592e6),timestamp:Date.now()};localStorage.setItem(e,j()(n))}function D(t){try{var e=localStorage.getItem(t);if(!e)return null;var n=JSON.parse(e),r=n.value,o=n.maxAge+n.timestamp>Date.now()?r:null;return o||localStorage.removeItem(t),o}catch(e){return localStorage.removeItem(t),null}}var E={get:D,set:I,create:function(t){var n=1<arguments.length&&void 0!==arguments[1]?arguments[1]:1440;return{get:function(){return D(t)},set:function(e){I(t,e,n)}}}};function R(e,t){var n=new RegExp("(^|&)"+e+"=([^&]*)(&|$)"),r=(t||window.location.search.substr(1)).match(n);return null!=r?decodeURIComponent(r[2]):null}function N(e){var t=(e=null==e?window.location.href:e).substring(e.lastIndexOf("?")+1);return t?JSON.parse('{"'+decodeURIComponent(t).replace(/"/g,'\\"').replace(/&/g,'","').replace(/=/g,'":"')+'"}'):{}}function P(e){if(!e)return"";var t=[];for(var n in e){var r=e[n];if(r instanceof Array)for(var o=0;o<r.length;++o)t.push(encodeURIComponent(n+"["+o+"]")+"="+encodeURIComponent(r[o]));else t.push(encodeURIComponent(n)+"="+encodeURIComponent(e[n]))}return t.join("&")}function U(e){for(var t=document.cookie.replace(/\s/g,"").split(";"),n=0;n<t.length;n++){var r=t[n].split("=");if(r[0]===e)return decodeURIComponent(r[1])}return""}function k(e,t){var n=2<arguments.length&&void 0!==arguments[2]?arguments[2]:1,r=new Date;r.setDate(r.getDate()+n),document.cookie=e+"="+t+";expires="+r}function T(e){k(e,"",-1)}function q(e){var t=Date.now()-e,n=Math.floor(t/864e5),r=Math.floor(t/36e5),o=Math.floor(t/6e4),i=Math.floor(n/30),u=Math.floor(i/12);return u?u+"年前":i?i+"个月前":n?n+"天前":r?r+"小时前":o?o+"分钟前":"刚刚"}function _(e){var t=new Date,n=new Date(e).getTime()-t.getTime(),r=0,o=0,i=0,u=0;return 0<=n&&(r=Math.floor(n/1e3/3600/24),o=Math.floor(n/1e3/60/60%24),i=Math.floor(n/1e3/60%60),u=Math.floor(n/1e3%60)),r+"天 "+o+"小时 "+i+"分钟 "+u+"秒"}function $(e,t){var n=void 0,r=void 0;try{n=e.toString().split(".")[1].length}catch(e){n=0}try{r=t.toString().split(".")[1].length}catch(e){r=0}var o=Math.abs(n-r),i=Math.pow(10,Math.max(n,r));if(0<o){var u=Math.pow(10,o);t=r<n?(e=Number(e.toString().replace(".","")),Number(t.toString().replace(".",""))*u):(e=Number(e.toString().replace(".",""))*u,Number(t.toString().replace(".","")))}else e=Number(e.toString().replace(".","")),t=Number(t.toString().replace(".",""));return(e+t)/i}function z(e,t){var n=void 0,r=void 0;try{n=e.toString().split(".")[1].length}catch(e){n=0}try{r=t.toString().split(".")[1].length}catch(e){r=0}var o=Math.pow(10,Math.max(n,r));return((e*o-t*o)/o).toFixed(r<=n?n:r)}function B(e,t){var n=0,r=e.toString(),o=t.toString();try{n+=r.split(".")[1].length}catch(e){}try{n+=o.split(".")[1].length}catch(e){}return Number(r.replace(".",""))*Number(o.replace(".",""))/Math.pow(10,n)}function L(e,t){var n=0,r=0;try{n=e.toString().split(".")[1].length}catch(e){}try{r=t.toString().split(".")[1].length}catch(e){}return Number(e.toString().replace(".",""))/Number(t.toString().replace(".",""))*Math.pow(10,r-n)}var J=function(e){var t=document.createElement("textarea");t.value=e,t.setAttribute("readonly",""),t.style.contain="strict",t.style.position="absolute",t.style.left="-9999px",t.style.fontSize="12pt";var n=document.getSelection(),r=!1;0<n.rangeCount&&(r=n.getRangeAt(0)),document.body.appendChild(t),t.select(),t.selectionStart=0,t.selectionEnd=e.length;var o=!1;try{o=document.execCommand("copy")}catch(e){}return document.body.removeChild(t),r&&(n.removeAllRanges(),n.addRange(r)),o};function Z(e){var t=1<arguments.length&&void 0!==arguments[1]?arguments[1]:Date.now()+".txt",n=document.createElement("a");n.download=t,n.style.display="none",n.href=e,document.body.appendChild(n),n.click(),document.body.removeChild(n)}function F(e,t){Z(URL.createObjectURL(e),t)}var H={download:Z,downloadBlob:F,downloadStr:function(e,t){F(new Blob([e]),t)},downloadImage:function(e){var t=1<arguments.length&&void 0!==arguments[1]?arguments[1]:Date.now()+".png",n=new Image;n.setAttribute("crossOrigin","anonymous"),n.src=e,n.onload=function(){var e=document.createElement("canvas");e.width=n.width,e.height=n.height,e.getContext("2d").drawImage(n,0,0,n.width,n.height),Z(e.toDataURL("image/png"),t)}}},W="";"undefined"!=typeof navigator&&(W=navigator.userAgent.toLowerCase());var X=0<=W.indexOf("applewebkit"),G=-1<W.indexOf("micromessenger"),K=0<=W.indexOf("alipayclient"),Q=!/Android|webOS|iPhone|iPod|BlackBerry/i.test(W);function V(e){return/^(0|86|17951)?(13[0-9]|15[012356789]|17[678]|18[0-9]|14[57])[0-9]{8}$/.test(e)}function Y(e){return/^[0-9]+([.]{1}[0-9]+){0,1}$/.test(e)}function ee(e){return/\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*/.test(e)}function te(e){return/^(^[1-9]\d{7}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])\d{3}$)|(^[1-9]\d{5}[1-9]\d{3}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])((\d{4})|\d{3}[Xx])$)$/.test(e)}function ne(e){return/[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/i.test(e)}function re(e){if(!e)return!1;var t=e.lastIndexOf(".");if(-1===t)return!1;var n=e.substr(t+1),r=n.substr(0,n.indexOf("?"));return/png|gif|svg|jpg|icon|jpeg]/i.test(r)}n.d(t,"localData",function(){return E}),n.d(t,"cookie",function(){return o}),n.d(t,"validate",function(){return a}),n.d(t,"qs",function(){return r}),n.d(t,"throttle",function(){return f}),n.d(t,"debounce",function(){return p}),n.d(t,"deepClone",function(){return v}),n.d(t,"randomColor",function(){return g}),n.d(t,"createApi",function(){return C}),n.d(t,"time",function(){return i}),n.d(t,"math",function(){return u}),n.d(t,"copy",function(){return J}),n.d(t,"download",function(){return H})}]);