(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{142:function(n,e,t){n.exports=t.p+"static/image-1-81eaf25963c7132a4215522416b4b1e9.jpg"},143:function(n,e,t){n.exports=t.p+"static/image-2-87b886e8dd218f9d731b1fe48d393bd3.jpg"},144:function(n,e,t){n.exports=t.p+"static/image-3-b5ccc44e1c5cd8d43bc49fbfef7693a4.jpg"},145:function(n,e,t){n.exports=t.p+"static/image-4-092afe3104f0491a58f331156e20cfb8.jpg"},146:function(n,e,t){n.exports=t.p+"static/image-5-a81aee5143703919c113b9c84881d3c8.jpg"},52:function(n,e,t){"use strict";t.r(e);var r=t(0),o=t.n(r),i=t(3),u=t.n(i);var a=function(n,e,t){return e=(e=+e)==e?e:0,t=(t=+t)==t?t:0,(n=+n)==n&&(n=(n=n<=t?n:t)>=e?n:e),n};function c(n){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{},r=Object.keys(t);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(t).filter(function(n){return Object.getOwnPropertyDescriptor(t,n).enumerable}))),r.forEach(function(e){f(n,e,t[e])})}return n}function f(n,e,t){return e in n?Object.defineProperty(n,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[e]=t,n}function l(n,e,t){return 0!==n||t?(n-1+e)%e:a(n,0,e-1)}var s=function(n,e){switch(e.type){case"NEXT":return c({},n,{currentIndex:(t=n.currentIndex,r=n.viewCount,o=n.rewind,t!==r-1||o?(t+1)%r:a(t,0,r-1)),prevIndex:n.currentIndex,pause:e.pause||n.pause});case"PREV":return c({},n,{currentIndex:l(n.currentIndex,n.viewCount,n.rewind),prevIndex:n.currentIndex,pause:e.pause||n.pause});case"GOTO":return c({},n,{currentIndex:a(e.index,0,n.viewCount-1),prevIndex:n.currentIndex,pause:e.pause||n.pause});case"SET_PAUSE":return c({},n,{pause:e.pause});case"SET_VIEWCOUNT":return c({},n,{viewCount:e.count});case"SET_FOCUS":return c({},n,{hasFocus:e.focus});case"SET_MOUSEOVER":return c({},n,{mouseover:e.mouseover});case"SET_DIMENSIONS":return c({},n,{width:e.width,height:e.height});case"SET_DRAGGING":return c({},n,{dragging:e.dragging});case"SET_DRAG_DISTANCE":return c({},n,{dragDistance:e.dragDistance});case"SET_AUTOPLAY":return c({},n,{autoPlayInterval:e.autoPlayInterval});case"SET_CONFIG":return c({},n,{config:e.config});case"SET_REWIND":return c({},n,{rewind:e.rewind});default:return n}var t,r,o},y=Object(r.createContext)(),d=function(n){var e=n.reducer,t=n.initialState,i=n.children;return o.a.createElement(y.Provider,{value:Object(r.useReducer)(e,t)},i)},p=function(){return Object(r.useContext)(y)},v=t(74),b=t(103),h=t(134);function m(n,e){return function(n){if(Array.isArray(n))return n}(n)||function(n,e){var t=[],r=!0,o=!1,i=void 0;try{for(var u,a=n[Symbol.iterator]();!(r=(u=a.next()).done)&&(t.push(u.value),!e||t.length!==e);r=!0);}catch(c){o=!0,i=c}finally{try{r||null==a.return||a.return()}finally{if(o)throw i}}return t}(n,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}function g(n,e){return function(n){if(Array.isArray(n))return n}(n)||function(n,e){var t=[],r=!0,o=!1,i=void 0;try{for(var u,a=n[Symbol.iterator]();!(r=(u=a.next()).done)&&(t.push(u.value),!e||t.length!==e);r=!0);}catch(c){o=!0,i=c}finally{try{r||null==a.return||a.return()}finally{if(o)throw i}}return t}(n,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}var w=function(n){var e=g(p(),2)[1];Object(r.useEffect)(function(){function t(){e({type:"SET_FOCUS",focus:!0})}function r(){e({type:"SET_FOCUS",focus:!1})}return n.current.addEventListener("focus",t),n.current.addEventListener("blur",r),function(){n.current.removeEventListener("focus",t),n.current.removeEventListener("blur",r)}},[])};function E(n,e){return function(n){if(Array.isArray(n))return n}(n)||function(n,e){var t=[],r=!0,o=!1,i=void 0;try{for(var u,a=n[Symbol.iterator]();!(r=(u=a.next()).done)&&(t.push(u.value),!e||t.length!==e);r=!0);}catch(c){o=!0,i=c}finally{try{r||null==a.return||a.return()}finally{if(o)throw i}}return t}(n,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}var O=function(n){var e=E(p(),1)[0].viewCount,t=E(Object(r.useState)(),2),o=t[0],i=t[1];return Object(r.useEffect)(function(){i(1e3-n)},[e]),o};function x(){return(x=Object.assign||function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(n[r]=t[r])}return n}).apply(this,arguments)}var S=function(n){var e=n.values,t=e.x,i=e.cursor,u=n.index,a=n.bind,c=n.children,f=Object(r.useRef)();w(f);var l=O(u);return o.a.createElement(b.a.div,x({},a(),{className:"sled-view",ref:f,style:{position:"absolute",zIndex:l,top:0,transform:t.interpolate(function(n){return"translate3d(".concat(n,"px,0,0)")}),width:"100%",height:"100%",willChange:"transform",overflow:"hidden",cursor:i}}),c)};function j(n,e){return function(n){if(Array.isArray(n))return n}(n)||function(n,e){var t=[],r=!0,o=!1,i=void 0;try{for(var u,a=n[Symbol.iterator]();!(r=(u=a.next()).done)&&(t.push(u.value),!e||t.length!==e);r=!0);}catch(c){o=!0,i=c}finally{try{r||null==a.return||a.return()}finally{if(o)throw i}}return t}(n,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}var I=function(n){var e=n.children,t=j(p(),1)[0],i=t.currentIndex,u=t.prevIndex,a=t.width,c=t.height,f=t.dragging,l=t.config;function s(n){v(function(e){return{x:(e-i)*a,immediate:n}})}Object(r.useEffect)(function(){s(!0)},[a,c]),Object(r.useEffect)(function(){v(function(){return{cursor:f?"grab":"auto"}})},[f]),Object(r.useEffect)(function(){s(void 0===u)},[i]),Object(r.useEffect)(function(){v(function(n){return{config:l}})},[l]);var y=j(Object(b.c)(e.length,function(n){return{x:n*a,sc:1,immediate:!0,config:l,cursor:"auto"}}),2),d=y[0],v=y[1],g=function(n){var e=m(p(),2),t=e[0],o=t.dragging,i=t.dragDistance,u=t.width,a=t.currentIndex,c=e[1],f=Object(r.useRef)(),l=Object(r.useRef)(),s=Object(r.useRef)(),y=Object(r.useRef)();return Object(r.useEffect)(function(){f.current=a,l.current=o,s.current=u,y.current=i},[a,o,i,u]),Object(h.a)(function(e){var t=e.down,r=m(e.delta,1)[0],o=m(e.direction,1)[0],i=e.distance,u=e.cancel;l.current&&(t&&i>y.current&&(c({type:o>0?"PREV":"NEXT",pause:!0}),u()),n(function(n){return{x:(n-f.current)*s.current+(t?r:0),immediate:!1,cursor:t?"grabbing":"grab"}}),c({type:"SET_PAUSE",pause:!0}))})}(v);return d.map(function(n,t){return o.a.createElement(S,{key:t,values:n,bind:g,index:t},e[t])})};function T(n,e){return function(n){if(Array.isArray(n))return n}(n)||function(n,e){var t=[],r=!0,o=!1,i=void 0;try{for(var u,a=n[Symbol.iterator]();!(r=(u=a.next()).done)&&(t.push(u.value),!e||t.length!==e);r=!0);}catch(c){o=!0,i=c}finally{try{r||null==a.return||a.return()}finally{if(o)throw i}}return t}(n,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}function A(n){return"\n  :after {\n    content: '';\n    display: block;\n    width: 100%;\n    height: 0;\n    padding-top: ".concat(n,"%;\n  }\n")}function k(n){if("string"==typeof n){if(/^\d+(\.\d+)?(px|r?em|%|vw|vh|vmin|vmax)$/.test(n))return"height: ".concat(n,";");if(/^\d+(\.\d+)?ow$/.test(n))return A(+n.replace("ow",""))}return A(50)}function P(n,e){return function(n){if(Array.isArray(n))return n}(n)||function(n,e){var t=[],r=!0,o=!1,i=void 0;try{for(var u,a=n[Symbol.iterator]();!(r=(u=a.next()).done)&&(t.push(u.value),!e||t.length!==e);r=!0);}catch(c){o=!0,i=c}finally{try{r||null==a.return||a.return()}finally{if(o)throw i}}return t}(n,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}function N(n,e){var t=n.current;e({type:"SET_DIMENSIONS",width:t.offsetWidth,height:t.offsetHeight})}var _=function(n,e,t,o){var i=P(p(),2)[1];Object(r.useEffect)(function(){N(n,i)},[e,t,o]),Object(r.useEffect)(function(){var e,t,r,o,u=(e=function(){N(n,i)},t=150,function(){var n=this,i=arguments,u=r&&!o;clearTimeout(o),o=setTimeout(function(){o=null,r||e.apply(n,i)},t),u&&e.apply(n,i)});return window.addEventListener("resize",u),function(){return window.removeEventListener("resize",u)}},[])};function C(n,e){return function(n){if(Array.isArray(n))return n}(n)||function(n,e){var t=[],r=!0,o=!1,i=void 0;try{for(var u,a=n[Symbol.iterator]();!(r=(u=a.next()).done)&&(t.push(u.value),!e||t.length!==e);r=!0);}catch(c){o=!0,i=c}finally{try{r||null==a.return||a.return()}finally{if(o)throw i}}return t}(n,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}var R=function(n){var e=C(p(),2),t=e[0].hasFocus,o=e[1],i=Object(r.useRef)();Object(r.useEffect)(function(){i.current=t},[t]),Object(r.useEffect)(function(){function e(n){if(i.current)switch(n.keyCode){case 37:o({type:"PREV",pause:!0});break;case 39:o({type:"NEXT",pause:!0})}}if(n)return document.addEventListener("keyup",e),function(){return document.removeEventListener("keyup",e)}},[n])};function D(n,e){return function(n){if(Array.isArray(n))return n}(n)||function(n,e){var t=[],r=!0,o=!1,i=void 0;try{for(var u,a=n[Symbol.iterator]();!(r=(u=a.next()).done)&&(t.push(u.value),!e||t.length!==e);r=!0);}catch(c){o=!0,i=c}finally{try{r||null==a.return||a.return()}finally{if(o)throw i}}return t}(n,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}function L(n){return(L="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(n){return typeof n}:function(n){return n&&"function"==typeof Symbol&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n})(n)}var z=function(n,e){var t=D(p(),2),o=t[0].width,i=t[1];Object(r.useEffect)(function(){var n=function(n,e){switch(L(n)){case"number":return n;case"string":return n.indexOf("ow")>=0?e/100*+n.replace("ow",""):40;default:return 40}}(e,o);i({type:"SET_DRAG_DISTANCE",dragDistance:n})},[e,o]),Object(r.useEffect)(function(){i({type:"SET_DRAGGING",dragging:n})},[n])};function U(n,e){return function(n){if(Array.isArray(n))return n}(n)||function(n,e){var t=[],r=!0,o=!1,i=void 0;try{for(var u,a=n[Symbol.iterator]();!(r=(u=a.next()).done)&&(t.push(u.value),!e||t.length!==e);r=!0);}catch(c){o=!0,i=c}finally{try{r||null==a.return||a.return()}finally{if(o)throw i}}return t}(n,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}function G(n,e){return function(n){if(Array.isArray(n))return n}(n)||function(n,e){var t=[],r=!0,o=!1,i=void 0;try{for(var u,a=n[Symbol.iterator]();!(r=(u=a.next()).done)&&(t.push(u.value),!e||t.length!==e);r=!0);}catch(c){o=!0,i=c}finally{try{r||null==a.return||a.return()}finally{if(o)throw i}}return t}(n,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}var M=function(n){var e=G(p(),2)[1];Object(r.useEffect)(function(){if(n){var t=parseInt(n,10);isNaN(t)||e({type:"GOTO",index:t,pause:!0})}},[n])};function V(n,e){return function(n){if(Array.isArray(n))return n}(n)||function(n,e){var t=[],r=!0,o=!1,i=void 0;try{for(var u,a=n[Symbol.iterator]();!(r=(u=a.next()).done)&&(t.push(u.value),!e||t.length!==e);r=!0);}catch(c){o=!0,i=c}finally{try{r||null==a.return||a.return()}finally{if(o)throw i}}return t}(n,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}function F(n,e){return function(n){if(Array.isArray(n))return n}(n)||function(n,e){var t=[],r=!0,o=!1,i=void 0;try{for(var u,a=n[Symbol.iterator]();!(r=(u=a.next()).done)&&(t.push(u.value),!e||t.length!==e);r=!0);}catch(c){o=!0,i=c}finally{try{r||null==a.return||a.return()}finally{if(o)throw i}}return t}(n,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}var W=function(n){var e,t,o,i=F(p(),2),u=i[0],a=u.mouseover,c=u.pause,f=u.autoPlayInterval,l=i[1];Object(r.useEffect)(function(){var e=parseInt(n,10);isNaN(e)?l({type:"SET_AUTOPLAY",autoPlayInterval:void 0}):(l({type:"SET_AUTOPLAY",autoPlayInterval:e}),l({type:"SET_PAUSE",pause:!1}))},[n]),e=function(){l({type:"NEXT"})},t=c||a?null:f,o=Object(r.useRef)(),Object(r.useEffect)(function(){o.current=e}),Object(r.useEffect)(function(){if("number"==typeof t){var n=setInterval(function(){o.current()},t);return function(){return clearInterval(n)}}},[t])};function X(n,e){return function(n){if(Array.isArray(n))return n}(n)||function(n,e){var t=[],r=!0,o=!1,i=void 0;try{for(var u,a=n[Symbol.iterator]();!(r=(u=a.next()).done)&&(t.push(u.value),!e||t.length!==e);r=!0);}catch(c){o=!0,i=c}finally{try{r||null==a.return||a.return()}finally{if(o)throw i}}return t}(n,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}function H(n,e){return function(n){if(Array.isArray(n))return n}(n)||function(n,e){var t=[],r=!0,o=!1,i=void 0;try{for(var u,a=n[Symbol.iterator]();!(r=(u=a.next()).done)&&(t.push(u.value),!e||t.length!==e);r=!0);}catch(c){o=!0,i=c}finally{try{r||null==a.return||a.return()}finally{if(o)throw i}}return t}(n,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}function Y(){var n=function(n,e){e||(e=n.slice(0));return Object.freeze(Object.defineProperties(n,{raw:{value:Object.freeze(e)}}))}(["\n  position: relative;\n  overflow: hidden;\n  width: ",";\n  ","\n  ","\n  \n  :focus,\n  .sled-view:focus {\n    outline: none;\n  }\n"]);return Y=function(){return n},n}var J=v.a.div(Y(),function(n){return n.cssWidth||"100%"},function(n){return n.cssHeight},function(n){return n.styles}),$=function(n){var e=n.width,t=n.height,i=n.dragging,u=n.dragDistance,a=n.keyboard,c=n.goto,f=n.children,l=n.style,s=n.autoPlay,y=n.pauseOnMouseOver,d=n.config,v=n.rewind,b=Object(r.useRef)(),h=function(n){var e=T(Object(r.useState)(k(n)),2),t=e[0],o=e[1];return Object(r.useEffect)(function(){var e=k(n);o(e)},[n]),t}(t);return _(b,e,t,h),w(b),function(n){var e=V(p(),2)[1];Object(r.useEffect)(function(){e({type:"SET_VIEWCOUNT",count:o.a.Children.toArray(n).length})},[n.length])}(f),function(n){var e=H(p(),2)[1];Object(r.useEffect)(function(){e({type:"SET_REWIND",rewind:n})},[n])}(v),function(n,e){var t=U(p(),2)[1];Object(r.useEffect)(function(){function r(){t({type:"SET_MOUSEOVER",mouseover:!0})}function o(){t({type:"SET_MOUSEOVER",mouseover:!1})}if(n)return e.current.addEventListener("mouseenter",r),e.current.addEventListener("mouseover",r),e.current.addEventListener("mouseout",o),function(){t({type:"SET_MOUSEOVER",mouseover:!1}),e.current.removeEventListener("mouseenter",r),e.current.removeEventListener("mouseover",r),e.current.removeEventListener("mouseout",o)}},[n])}(y,b),M(c),R(a),z(i,u),W(s),function(n){var e=X(p(),2)[1];Object(r.useEffect)(function(){e({type:"SET_CONFIG",config:n})},[n])}(d),o.a.createElement(J,{className:"sled",ref:b,styles:l,cssWidth:e,cssHeight:h,tabIndex:0},o.a.createElement(I,null,f))};$.propTypes={children:u.a.node,style:u.a.string,width:u.a.string,height:u.a.string,goto:u.a.oneOfType([u.a.number,u.a.string]),keyboard:u.a.bool,dragging:u.a.bool,dragDistance:u.a.oneOfType([u.a.number,u.a.string]),autoPlay:u.a.oneOfType([u.a.number,u.a.string]),pauseOnMouseOver:u.a.bool,rewind:u.a.bool,config:u.a.object},$.defaultProps={children:null,style:"",width:"100%",height:"50ow",goto:void 0,keyboard:!0,dragging:!0,dragDistance:"25ow",autoPlay:void 0,config:{mass:1,tension:210,friction:20,clamp:!0},pauseOnMouseOver:!0,rewind:!1};var B=$;function q(n){return(q="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(n){return typeof n}:function(n){return n&&"function"==typeof Symbol&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n})(n)}function K(n,e){return function(n){if(Array.isArray(n))return n}(n)||function(n,e){var t=[],r=!0,o=!1,i=void 0;try{for(var u,a=n[Symbol.iterator]();!(r=(u=a.next()).done)&&(t.push(u.value),!e||t.length!==e);r=!0);}catch(c){o=!0,i=c}finally{try{r||null==a.return||a.return()}finally{if(o)throw i}}return t}(n,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}var Q=function(n){var e,t,o,i,u,a,c,f,l=(e=n,t=K(p(),1)[0],o=t.rewind,i=t.currentIndex,u=t.viewCount,a=K(Object(r.useState)(),2),c=a[0],f=a[1],Object(r.useEffect)(function(){f(!o&&("next"===e&&i===u-1||"prev"===e&&0===i))},[i,o]),c),s=function(n){var e=K(p(),1)[0].currentIndex,t=K(Object(r.useState)(),2),o=t[0],i=t[1];return Object(r.useEffect)(function(){i(n===e)},[e]),o}(n);switch(q(n)){case"number":return s;case"string":default:return l}},Z="\n  cursor: pointer;\n  width: 40px;\n  height: 40px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  background: none;\n  box-shadow: none;\n  border: none;\n  transition: opacity 0.5s, transform 0.5s;\n  opacity: 0.5;\n\n  :focus {\n    box-shadow: none;\n    outline: none;\n  }\n\n  :before {\n    content: '';\n    display: block;\n    flex-shrink: 0;\n    width: 15px;\n    height: 15px;\n    border-top: 3px solid black;\n  }\n\n  :focus {\n    opacity: 1;\n  }\n\n  :hover, \n  :active {\n    opacity: 1;\n    transform: scale(1.2);\n  }\n\n\n  :disabled {\n    opacity: 0.4;\n  }\n",nn={dot:"\n  cursor: pointer;\n  width: 40px;\n  height: 40px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  background: none;\n  box-shadow: none;\n  border: none;\n  transition: opacity 0.5s, transform 0.5s;\n  opacity: 0.4;\n\n  :focus {\n    box-shadow: none;\n    outline: none;\n  }\n\n  :before {\n    content: '';\n    display: block;\n    flex-shrink: 0;\n    width: 10px;\n    height: 10px;\n    background: grey;\n    border-radius: 50%;\n  }\n\n  :hover, \n  :focus {\n    transform: scale(1.2);\n  }\n\n  :hover, \n  :focus, \n  :active {\n    opacity: 0.6;\n  }\n\n  :disabled {\n    opacity: 1;\n  }\n",arrowLeft:"\n  ".concat(Z,"\n  transform-origin: right center;\n\n  :before {\n    border-left: 3px solid black;\n    transform: rotate(-45deg);\n  }\n"),arrowRight:"\n  ".concat(Z,"\n  transform-origin: left center;\n\n  :before {\n    border-right: 3px solid black;\n    transform: rotate(45deg);\n  }\n")};function en(n,e){return function(n){if(Array.isArray(n))return n}(n)||function(n,e){var t=[],r=!0,o=!1,i=void 0;try{for(var u,a=n[Symbol.iterator]();!(r=(u=a.next()).done)&&(t.push(u.value),!e||t.length!==e);r=!0);}catch(c){o=!0,i=c}finally{try{r||null==a.return||a.return()}finally{if(o)throw i}}return t}(n,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}function tn(n){return(tn="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(n){return typeof n}:function(n){return n&&"function"==typeof Symbol&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n})(n)}function rn(n){return(rn="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(n){return typeof n}:function(n){return n&&"function"==typeof Symbol&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n})(n)}function on(n){return(on="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(n){return typeof n}:function(n){return n&&"function"==typeof Symbol&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n})(n)}function un(n){return(un="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(n){return typeof n}:function(n){return n&&"function"==typeof Symbol&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n})(n)}function an(n,e){return function(n){if(Array.isArray(n))return n}(n)||function(n,e){var t=[],r=!0,o=!1,i=void 0;try{for(var u,a=n[Symbol.iterator]();!(r=(u=a.next()).done)&&(t.push(u.value),!e||t.length!==e);r=!0);}catch(c){o=!0,i=c}finally{try{r||null==a.return||a.return()}finally{if(o)throw i}}return t}(n,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}function cn(){var n=function(n,e){e||(e=n.slice(0));return Object.freeze(Object.defineProperties(n,{raw:{value:Object.freeze(e)}}))}(["\n  ","\n  ","\n"]);return cn=function(){return n},n}var fn=v.a.button(cn(),function(n){return n.disabled&&"pointer-events: none;"},function(n){return n.styles}),ln=function(n){var e=n.children,t=n.goto,i=n.style,u=n.preset,a=Object(r.useRef)();w(a);var c=function(n){var e=en(Object(r.useState)(nn[n]||""),2),t=e[0],o=e[1];return Object(r.useEffect)(function(){n&&(nn[n]?o(nn[n]):console.log('react-sled: Control preset "'.concat(nn[n],'" does not exist.')))},[n]),t}(u),f=function(n){switch(tn(n)){case"number":return nn.dot;case"string":default:return"next"===n?nn.arrowRight:nn.arrowLeft}}(t),l=Q(t),s=function(n,e){switch(rn(n)){case"number":return"sled-control sled-control-dot";case"string":default:return"sled-control sled-control-arrow sled-control-arrow-".concat(n)}}(t),y=function(n){switch(on(n)){case"number":return"Slide to view with index ".concat(n,".");case"string":default:return"Slide to ".concat("next"===n?"next":"previous"," view.")}}(t),d=function(n){var e=an(p(),2)[1];switch(un(n)){case"number":return function(){return e({type:"GOTO",index:n,pause:!0})};case"string":default:return function(){return e({type:"next"===n?"NEXT":"PREV",pause:!0})}}}(t);return o.a.createElement(fn,{className:s,disabled:l,ref:a,styles:c+i||f,ariaLabel:y,tabIndex:0,onClick:d},e)};ln.propTypes={goto:u.a.oneOfType([u.a.string,u.a.number]),style:u.a.string,preset:u.a.string},ln.defaultProps={goto:"next",style:"",preset:""};var sn=ln;function yn(n){return function(n){if(Array.isArray(n)){for(var e=0,t=new Array(n.length);e<n.length;e++)t[e]=n[e];return t}}(n)||function(n){if(Symbol.iterator in Object(n)||"[object Arguments]"===Object.prototype.toString.call(n))return Array.from(n)}(n)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}function dn(n,e){return function(n){if(Array.isArray(n))return n}(n)||function(n,e){var t=[],r=!0,o=!1,i=void 0;try{for(var u,a=n[Symbol.iterator]();!(r=(u=a.next()).done)&&(t.push(u.value),!e||t.length!==e);r=!0);}catch(c){o=!0,i=c}finally{try{r||null==a.return||a.return()}finally{if(o)throw i}}return t}(n,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}function pn(){var n=function(n,e){e||(e=n.slice(0));return Object.freeze(Object.defineProperties(n,{raw:{value:Object.freeze(e)}}))}(["\n  position: absolute;\n  zIndex: 200;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  display: flex;\n  justify-content: space-between;\n  pointer-events: none;\n\n  // Mimic \"justify-content: space-evenly;\"\n  :before,\n  :after {\n    content: '';\n    display: block;\n    height: 100%;\n  }\n  ","\n"]);return pn=function(){return n},n}var vn=v.a.div(pn(),function(n){return n.styles}),bn=function(n){n.style;var e=dn(p(),1)[0].viewCount;return o.a.createElement(vn,{className:"sled-progress-separators"},yn(Array(e?e-1:1)).map(function(n,e){return o.a.createElement("div",{key:e,className:"sled-progress-separator",style:{position:"relative",height:"100%"}})}))};function hn(){var n=function(n,e){e||(e=n.slice(0));return Object.freeze(Object.defineProperties(n,{raw:{value:Object.freeze(e)}}))}(["\n  position: absolute;\n  left: 0;\n  width: 100%;\n  pointer-events: none;\n"]);return hn=function(){return n},n}var mn=v.a.div(hn()),gn=function(n){n.style;return o.a.createElement(mn,{className:"sled-progress-rail"})};function wn(n,e){return function(n){if(Array.isArray(n))return n}(n)||function(n,e){var t=[],r=!0,o=!1,i=void 0;try{for(var u,a=n[Symbol.iterator]();!(r=(u=a.next()).done)&&(t.push(u.value),!e||t.length!==e);r=!0);}catch(c){o=!0,i=c}finally{try{r||null==a.return||a.return()}finally{if(o)throw i}}return t}(n,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}var En={mass:1,tension:210,friction:20,clamp:!0};function On(n,e){return 100-100/n*(e+(arguments.length>2&&void 0!==arguments[2]?arguments[2]:0))}var xn=function(){var n=wn(p(),1)[0],e=n.currentIndex,t=n.prevIndex,i=n.viewCount,u=n.mouseover,a=n.autoPlayInterval,c=n.pause,f=wn(Object(b.b)(function(){return{from:{x:100}}}),2),l=f[0],s=f[1];return Object(r.useEffect)(function(){a&&!c&&s({config:{duration:a},from:On(i,e),x:On(i,e,1),reset:!1})},[a]),Object(r.useEffect)(function(){a&&!c&&s(u?{config:En,from:{},x:On(i,e),reset:!1}:{config:{duration:a},from:On(i,e),x:On(i,e,1),reset:!1})},[u]),Object(r.useEffect)(function(){var n=!a||c||u?En:{duration:a},r=On(i,e,1);s(0===e?{config:n,from:{x:100},x:r,reset:!(i>2)||1!==t}:{config:n,x:r,reset:!1})},[i,e,t,c]),o.a.createElement(b.a.div,{className:"sled-progress-track",style:{position:"absolute",left:0,width:"100%",pointerEvents:"none",transform:l.x.interpolate(function(n){return"translateX(-".concat(n,"%)")})}})};function Sn(n){return function(n){if(Array.isArray(n)){for(var e=0,t=new Array(n.length);e<n.length;e++)t[e]=n[e];return t}}(n)||function(n){if(Symbol.iterator in Object(n)||"[object Arguments]"===Object.prototype.toString.call(n))return Array.from(n)}(n)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}function jn(n,e){return function(n){if(Array.isArray(n))return n}(n)||function(n,e){var t=[],r=!0,o=!1,i=void 0;try{for(var u,a=n[Symbol.iterator]();!(r=(u=a.next()).done)&&(t.push(u.value),!e||t.length!==e);r=!0);}catch(c){o=!0,i=c}finally{try{r||null==a.return||a.return()}finally{if(o)throw i}}return t}(n,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}function In(){var n=function(n,e){e||(e=n.slice(0));return Object.freeze(Object.defineProperties(n,{raw:{value:Object.freeze(e)}}))}(["\n  position: absolute;\n  z-index: 100;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  display: flex;\n  ","\n"]);return In=function(){return n},n}var Tn=v.a.div(In(),function(n){return n.styles}),An=function(n){n.style;var e=jn(p(),1)[0].viewCount;return o.a.createElement(Tn,{className:"sled-progress-controls"},Sn(Array(e||1)).map(function(n,e){return o.a.createElement(sn,{key:e,goto:e,style:"\n            flex-grow: 1;\n            height: 100%;\n            cursor: pointer; \n            background: none;\n            border: none;\n            outline: none;\n          "})}))};function kn(){var n=function(n,e){e||(e=n.slice(0));return Object.freeze(Object.defineProperties(n,{raw:{value:Object.freeze(e)}}))}(["\n  position: relative;\n  width: 100%;\n  display: flex;\n  align-items: center;\n  overflow: hidden;\n  height: 20px;\n\n  .sled-progress-rail {\n    background: black;\n    height: 4px;\n  }\n  .sled-progress-track {\n    background: red;\n    height: 4px;\n  }\n  .sled-progress-separator {\n    width: 4px;\n    background: white;\n  }\n  .sled-control {\n    :focus {\n      background: hsla(0, 0%, 100%, 0.5)\n    }\n  }\n}\n  ","\n"]);return kn=function(){return n},n}var Pn=v.a.div(kn(),function(n){return n.styles}),Nn=function(n){var e=n.style;return o.a.createElement(Pn,{className:"sled-progress",styles:e,role:"progressBar"},o.a.createElement(gn,null),o.a.createElement(xn,null),o.a.createElement(bn,null),o.a.createElement(An,null))};Nn.propTypes={style:u.a.string},Nn.defaultProps={style:""};var _n=Nn;function Cn(n){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{},r=Object.keys(t);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(t).filter(function(n){return Object.getOwnPropertyDescriptor(t,n).enumerable}))),r.forEach(function(e){Rn(n,e,t[e])})}return n}function Rn(n,e,t){return e in n?Object.defineProperty(n,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[e]=t,n}function Dn(n,e){if(null==n)return{};var t,r,o=function(n,e){if(null==n)return{};var t,r,o={},i=Object.keys(n);for(r=0;r<i.length;r++)t=i[r],e.indexOf(t)>=0||(o[t]=n[t]);return o}(n,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(n);for(r=0;r<i.length;r++)t=i[r],e.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(n,t)&&(o[t]=n[t])}return o}var Ln=function(n){var e=n.children,t=Dn(n,["children"]);return o.a.createElement(d,{reducer:s,initialState:Cn({currentIndex:0,prevIndex:void 0,pause:!1,viewCount:0,hasFocus:!1,mouseover:!1,width:0,height:0},t)},e)};Ln.propTypes={children:u.a.node},Ln.defaultProps={children:null};var zn=t(142),Un=t.n(zn),Gn=t(143),Mn=t.n(Gn),Vn=t(144),Fn=t.n(Vn),Wn=t(145),Xn=t.n(Wn),Hn=t(146),Yn=t.n(Hn),Jn=[Un.a,Mn.a,Fn.a,Xn.a,Yn.a];e.default=function(n){var e=n.width,t=n.height,r=n.goto,i=n.autoPlay,u=n.rewind,a=n.pauseOnMouseOver,c=n.keyboard,f=n.dragging,l=n.dragDistance,s=n.mass,y=n.tension,d=n.friction,p=n.clamp;return o.a.createElement("div",{className:"sled-wrapper"},o.a.createElement(Ln,null,o.a.createElement(B,{width:e,height:t,goto:r,autoPlay:i,rewind:u,pauseOnMouseOver:a,keyboard:c,dragging:f,dragDistance:l,config:{mass:s,tension:y,friction:d,clamp:p},style:"\n    // transition: all 1s;\n  "},Jn.map(function(n){return o.a.createElement("div",{key:n,style:{position:"absolute",background:"#fff",top:0,bottom:0,left:0,right:0,backgroundImage:"url(".concat(n,")"),backgroundSize:"cover",backgroundPosition:"center"}})})),o.a.createElement(_n,null),o.a.createElement("div",{className:"controls"},o.a.createElement(sn,{goto:"prev"}),o.a.createElement(sn,{goto:"next"})),o.a.createElement("div",{className:"controls"},Jn.map(function(n,e){return o.a.createElement(sn,{key:n,goto:e})}))))}}}]);
//# sourceMappingURL=component---src-pages-sled-component-js-4c15156b78a6d5c64039.js.map