(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{142:function(n,t,e){n.exports=e.p+"static/image-1-81eaf25963c7132a4215522416b4b1e9.jpg"},143:function(n,t,e){n.exports=e.p+"static/image-2-87b886e8dd218f9d731b1fe48d393bd3.jpg"},144:function(n,t,e){n.exports=e.p+"static/image-3-b5ccc44e1c5cd8d43bc49fbfef7693a4.jpg"},145:function(n,t,e){n.exports=e.p+"static/image-4-092afe3104f0491a58f331156e20cfb8.jpg"},146:function(n,t,e){n.exports=e.p+"static/image-5-a81aee5143703919c113b9c84881d3c8.jpg"},52:function(n,t,e){"use strict";e.r(t);var r=e(0),o=e.n(r),i=e(3),u=e.n(i);var a=function(n,t,e){return t=(t=+t)==t?t:0,e=(e=+e)==e?e:0,(n=+n)==n&&(n=(n=n<=e?n:e)>=t?n:t),n};function c(n){for(var t=1;t<arguments.length;t++){var e=null!=arguments[t]?arguments[t]:{},r=Object.keys(e);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(e).filter(function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.forEach(function(t){f(n,t,e[t])})}return n}function f(n,t,e){return t in n?Object.defineProperty(n,t,{value:e,enumerable:!0,configurable:!0,writable:!0}):n[t]=e,n}function l(n,t,e){return 0!==n||e?(n-1+t)%t:a(n,0,t-1)}var s=function(n,t){switch(t.type){case"NEXT":return c({},n,{currentIndex:(e=n.currentIndex,r=n.viewCount,o=n.rewind,e!==r-1||o?(e+1)%r:a(e,0,r-1)),prevIndex:n.currentIndex});case"PREV":return c({},n,{currentIndex:l(n.currentIndex,n.viewCount,n.rewind),prevIndex:n.currentIndex});case"GOTO":return c({},n,{currentIndex:a(t.index,0,n.viewCount-1),prevIndex:n.currentIndex});case"SET_PAUSE":return c({},n,{pause:t.pause});case"SET_RESTED_INDEX":return c({},n,{restedIndex:n.currentIndex});case"SET_MOUSEOVER":return c({},n,{mouseOver:t.mouseOver});case"SET_VIEWCOUNT":return c({},n,{viewCount:t.count});case"SET_FOCUS":return c({},n,{hasFocus:t.focus});case"SET_DIMENSIONS":return c({},n,{width:t.width,height:t.height});case"SET_DRAGGING":return c({},n,{dragging:t.dragging});case"SET_DRAG_DISTANCE":return c({},n,{dragDistance:t.dragDistance});case"SET_AUTOPLAY":return c({},n,{autoPlayInterval:t.autoPlayInterval});case"SET_CONFIG":return c({},n,{config:t.config});case"SET_REWIND":return c({},n,{rewind:t.rewind});case"SET_STOPONINTERACTION":return c({},n,{stopOnInteraction:t.stopOnInteraction});default:return n}var e,r,o},y=Object(r.createContext)(),d=function(n){var t=n.reducer,e=n.initialState,i=n.children;return o.a.createElement(y.Provider,{value:Object(r.useReducer)(t,e)},i)},p=function(){return Object(r.useContext)(y)},v=e(74),b=e(103),h=e(134);function m(n,t){return function(n){if(Array.isArray(n))return n}(n)||function(n,t){var e=[],r=!0,o=!1,i=void 0;try{for(var u,a=n[Symbol.iterator]();!(r=(u=a.next()).done)&&(e.push(u.value),!t||e.length!==t);r=!0);}catch(c){o=!0,i=c}finally{try{r||null==a.return||a.return()}finally{if(o)throw i}}return e}(n,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}function g(n,t){return function(n){if(Array.isArray(n))return n}(n)||function(n,t){var e=[],r=!0,o=!1,i=void 0;try{for(var u,a=n[Symbol.iterator]();!(r=(u=a.next()).done)&&(e.push(u.value),!t||e.length!==t);r=!0);}catch(c){o=!0,i=c}finally{try{r||null==a.return||a.return()}finally{if(o)throw i}}return e}(n,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}var w=function(n){var t=g(p(),2)[1];Object(r.useEffect)(function(){function e(){t({type:"SET_FOCUS",focus:!0})}function r(){t({type:"SET_FOCUS",focus:!1})}return n.current.addEventListener("focus",e),n.current.addEventListener("blur",r),function(){n.current.removeEventListener("focus",e),n.current.removeEventListener("blur",r)}},[])};function E(n,t){return function(n){if(Array.isArray(n))return n}(n)||function(n,t){var e=[],r=!0,o=!1,i=void 0;try{for(var u,a=n[Symbol.iterator]();!(r=(u=a.next()).done)&&(e.push(u.value),!t||e.length!==t);r=!0);}catch(c){o=!0,i=c}finally{try{r||null==a.return||a.return()}finally{if(o)throw i}}return e}(n,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}var O=function(n){var t=E(p(),1)[0].viewCount,e=E(Object(r.useState)(),2),o=e[0],i=e[1];return Object(r.useEffect)(function(){i(1e3-n)},[t]),o};function S(){return(S=Object.assign||function(n){for(var t=1;t<arguments.length;t++){var e=arguments[t];for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&(n[r]=e[r])}return n}).apply(this,arguments)}var x=function(n){var t=n.values,e=t.x,i=t.cursor,u=n.index,a=n.bind,c=n.children,f=Object(r.useRef)();w(f);var l=O(u);return o.a.createElement(b.a.div,S({},a(),{className:"sled-view",ref:f,style:{position:"absolute",zIndex:l,top:0,transform:e.interpolate(function(n){return"translate3d(".concat(n,"px,0,0)")}),width:"100%",height:"100%",willChange:"transform",overflow:"hidden",cursor:i}}),c)};function j(n,t){return function(n){if(Array.isArray(n))return n}(n)||function(n,t){var e=[],r=!0,o=!1,i=void 0;try{for(var u,a=n[Symbol.iterator]();!(r=(u=a.next()).done)&&(e.push(u.value),!t||e.length!==t);r=!0);}catch(c){o=!0,i=c}finally{try{r||null==a.return||a.return()}finally{if(o)throw i}}return e}(n,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}var I=function(n){var t=n.children,e=j(p(),2),i=e[0],u=i.currentIndex,a=i.prevIndex,c=i.width,f=i.height,l=i.dragging,s=i.config,y=e[1];function d(n){w(function(t){return{x:(t-u)*c,immediate:n}})}Object(r.useEffect)(function(){d(!0)},[c,f]),Object(r.useEffect)(function(){w(function(){return{cursor:l?"grab":"auto"}})},[l]),Object(r.useEffect)(function(){d(void 0===a)},[u]),Object(r.useEffect)(function(){w(function(n){return{config:s}})},[s]);var v=j(Object(b.c)(t.length,function(n){return{x:n*c,sc:1,immediate:!0,config:s,cursor:"auto",onStart:function(e,r,o){n===t.length-1&&y({type:"SET_PAUSE",pause:!0})},onRest:function(e,r,o){n===t.length-1&&(y({type:"SET_PAUSE",pause:!1}),y({type:"SET_RESTED_INDEX"}))}}}),2),g=v[0],w=v[1],E=function(n){var t=m(p(),2),e=t[0],o=e.dragging,i=e.dragDistance,u=e.width,a=(e.pauseOnInteraction,e.currentIndex),c=t[1],f=Object(r.useRef)(),l=Object(r.useRef)(),s=Object(r.useRef)(),y=Object(r.useRef)();return Object(r.useEffect)(function(){f.current=a,l.current=o,s.current=u,y.current=i},[a,o,i,u]),Object(h.a)(function(t){var e=t.down,r=m(t.delta,1)[0],o=m(t.direction,1)[0],i=t.distance,u=t.cancel;l.current&&(e&&i>y.current&&(c({type:o>0?"PREV":"NEXT",pause:!0}),u()),n(function(n){return{x:(n-f.current)*s.current+(e?r:0),immediate:!1,cursor:e?"grabbing":"grab"}}),c({type:"SET_PAUSE",pause:!0}))})}(w);return g.map(function(n,e){return o.a.createElement(x,{key:e,values:n,bind:E,index:e},t[e])})};function T(n,t){return function(n){if(Array.isArray(n))return n}(n)||function(n,t){var e=[],r=!0,o=!1,i=void 0;try{for(var u,a=n[Symbol.iterator]();!(r=(u=a.next()).done)&&(e.push(u.value),!t||e.length!==t);r=!0);}catch(c){o=!0,i=c}finally{try{r||null==a.return||a.return()}finally{if(o)throw i}}return e}(n,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}function A(n){return"\n  :after {\n    content: '';\n    display: block;\n    width: 100%;\n    height: 0;\n    padding-top: ".concat(n,"%;\n  }\n")}function P(n){if("string"==typeof n){if(/^\d+(\.\d+)?(px|r?em|%|vw|vh|vmin|vmax)$/.test(n))return"height: ".concat(n,";");if(/^\d+(\.\d+)?ow$/.test(n))return A(+n.replace("ow",""))}return A(50)}function k(n,t){return function(n){if(Array.isArray(n))return n}(n)||function(n,t){var e=[],r=!0,o=!1,i=void 0;try{for(var u,a=n[Symbol.iterator]();!(r=(u=a.next()).done)&&(e.push(u.value),!t||e.length!==t);r=!0);}catch(c){o=!0,i=c}finally{try{r||null==a.return||a.return()}finally{if(o)throw i}}return e}(n,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}function N(n,t){var e=n.current;t({type:"SET_DIMENSIONS",width:e.offsetWidth,height:e.offsetHeight})}var _=function(n,t,e,o){var i=k(p(),2)[1];Object(r.useEffect)(function(){N(n,i)},[t,e,o]),Object(r.useEffect)(function(){var t,e,r,o,u=(t=function(){N(n,i)},e=150,function(){var n=this,i=arguments,u=r&&!o;clearTimeout(o),o=setTimeout(function(){o=null,r||t.apply(n,i)},e),u&&t.apply(n,i)});return window.addEventListener("resize",u),function(){return window.removeEventListener("resize",u)}},[])};function R(n,t){return function(n){if(Array.isArray(n))return n}(n)||function(n,t){var e=[],r=!0,o=!1,i=void 0;try{for(var u,a=n[Symbol.iterator]();!(r=(u=a.next()).done)&&(e.push(u.value),!t||e.length!==t);r=!0);}catch(c){o=!0,i=c}finally{try{r||null==a.return||a.return()}finally{if(o)throw i}}return e}(n,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}var C=function(n){var t=R(p(),2),e=t[0].hasFocus,o=t[1],i=Object(r.useRef)();Object(r.useEffect)(function(){i.current=e},[e]),Object(r.useEffect)(function(){function t(n){if(i.current)switch(n.keyCode){case 37:o({type:"PREV",pause:!0});break;case 39:o({type:"NEXT",pause:!0})}}if(n)return document.addEventListener("keyup",t),function(){return document.removeEventListener("keyup",t)}},[n])};function D(n,t){return function(n){if(Array.isArray(n))return n}(n)||function(n,t){var e=[],r=!0,o=!1,i=void 0;try{for(var u,a=n[Symbol.iterator]();!(r=(u=a.next()).done)&&(e.push(u.value),!t||e.length!==t);r=!0);}catch(c){o=!0,i=c}finally{try{r||null==a.return||a.return()}finally{if(o)throw i}}return e}(n,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}function L(n){return(L="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(n){return typeof n}:function(n){return n&&"function"==typeof Symbol&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n})(n)}var U=function(n,t){var e=D(p(),2),o=e[0].width,i=e[1];Object(r.useEffect)(function(){var n=function(n,t){switch(L(n)){case"number":return n;case"string":return n.indexOf("ow")>=0?t/100*+n.replace("ow",""):40;default:return 40}}(t,o);i({type:"SET_DRAG_DISTANCE",dragDistance:n})},[t,o]),Object(r.useEffect)(function(){i({type:"SET_DRAGGING",dragging:n})},[n])};function z(n,t){return function(n){if(Array.isArray(n))return n}(n)||function(n,t){var e=[],r=!0,o=!1,i=void 0;try{for(var u,a=n[Symbol.iterator]();!(r=(u=a.next()).done)&&(e.push(u.value),!t||e.length!==t);r=!0);}catch(c){o=!0,i=c}finally{try{r||null==a.return||a.return()}finally{if(o)throw i}}return e}(n,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}function G(n,t){return function(n){if(Array.isArray(n))return n}(n)||function(n,t){var e=[],r=!0,o=!1,i=void 0;try{for(var u,a=n[Symbol.iterator]();!(r=(u=a.next()).done)&&(e.push(u.value),!t||e.length!==t);r=!0);}catch(c){o=!0,i=c}finally{try{r||null==a.return||a.return()}finally{if(o)throw i}}return e}(n,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}var M=function(n){var t=G(p(),2)[1];Object(r.useEffect)(function(){if(n){var e=parseInt(n,10);isNaN(e)||t({type:"GOTO",index:e})}},[n])};function V(n,t){return function(n){if(Array.isArray(n))return n}(n)||function(n,t){var e=[],r=!0,o=!1,i=void 0;try{for(var u,a=n[Symbol.iterator]();!(r=(u=a.next()).done)&&(e.push(u.value),!t||e.length!==t);r=!0);}catch(c){o=!0,i=c}finally{try{r||null==a.return||a.return()}finally{if(o)throw i}}return e}(n,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}function F(n,t){return function(n){if(Array.isArray(n))return n}(n)||function(n,t){var e=[],r=!0,o=!1,i=void 0;try{for(var u,a=n[Symbol.iterator]();!(r=(u=a.next()).done)&&(e.push(u.value),!t||e.length!==t);r=!0);}catch(c){o=!0,i=c}finally{try{r||null==a.return||a.return()}finally{if(o)throw i}}return e}(n,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}var X=function(n){var t,e,o,i=F(p(),2),u=i[0],a=u.pause,c=u.autoPlayInterval,f=i[1];Object(r.useEffect)(function(){var t=parseInt(n,10);isNaN(t)?f({type:"SET_AUTOPLAY",autoPlayInterval:void 0}):f({type:"SET_AUTOPLAY",autoPlayInterval:t})},[n]),t=function(){f({type:"NEXT"})},e=!a&&c,o=Object(r.useRef)(),Object(r.useEffect)(function(){o.current=t}),Object(r.useEffect)(function(){if("number"==typeof e){var n=setInterval(function(){o.current()},e);return function(){return clearInterval(n)}}},[e])};function W(n,t){return function(n){if(Array.isArray(n))return n}(n)||function(n,t){var e=[],r=!0,o=!1,i=void 0;try{for(var u,a=n[Symbol.iterator]();!(r=(u=a.next()).done)&&(e.push(u.value),!t||e.length!==t);r=!0);}catch(c){o=!0,i=c}finally{try{r||null==a.return||a.return()}finally{if(o)throw i}}return e}(n,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}function H(n,t){return function(n){if(Array.isArray(n))return n}(n)||function(n,t){var e=[],r=!0,o=!1,i=void 0;try{for(var u,a=n[Symbol.iterator]();!(r=(u=a.next()).done)&&(e.push(u.value),!t||e.length!==t);r=!0);}catch(c){o=!0,i=c}finally{try{r||null==a.return||a.return()}finally{if(o)throw i}}return e}(n,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}function Y(n,t){return function(n){if(Array.isArray(n))return n}(n)||function(n,t){var e=[],r=!0,o=!1,i=void 0;try{for(var u,a=n[Symbol.iterator]();!(r=(u=a.next()).done)&&(e.push(u.value),!t||e.length!==t);r=!0);}catch(c){o=!0,i=c}finally{try{r||null==a.return||a.return()}finally{if(o)throw i}}return e}(n,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}function J(n,t){return function(n){if(Array.isArray(n))return n}(n)||function(n,t){var e=[],r=!0,o=!1,i=void 0;try{for(var u,a=n[Symbol.iterator]();!(r=(u=a.next()).done)&&(e.push(u.value),!t||e.length!==t);r=!0);}catch(c){o=!0,i=c}finally{try{r||null==a.return||a.return()}finally{if(o)throw i}}return e}(n,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}var $=function(n){var t=J(p(),2)[1];Object(r.useEffect)(function(){t({type:"SET_STOPONINTERACTION",stopOnInteraction:n})},[n])};function B(n,t){return function(n){if(Array.isArray(n))return n}(n)||function(n,t){var e=[],r=!0,o=!1,i=void 0;try{for(var u,a=n[Symbol.iterator]();!(r=(u=a.next()).done)&&(e.push(u.value),!t||e.length!==t);r=!0);}catch(c){o=!0,i=c}finally{try{r||null==a.return||a.return()}finally{if(o)throw i}}return e}(n,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}function q(){var n=function(n,t){t||(t=n.slice(0));return Object.freeze(Object.defineProperties(n,{raw:{value:Object.freeze(t)}}))}(["\n  position: relative;\n  overflow: hidden;\n  width: ",";\n  ","\n  ","\n  user-select: none;\n\n  :focus,\n  .sled-view:focus {\n    outline: none;\n  }\n"]);return q=function(){return n},n}var K=v.a.div(q(),function(n){return n.cssWidth||"100%"},function(n){return n.cssHeight},function(n){return n.styles}),Q=function(n){var t=n.width,e=n.height,i=n.dragging,u=n.dragDistance,a=n.keyboard,c=n.goto,f=n.children,l=n.style,s=n.autoPlay,y=n.pause,d=n.pauseOnMouseOver,v=n.stopOnInteraction,b=n.config,h=n.rewind,m=n.onSledEnd,g=Object(r.useRef)(),E=function(n){var t=T(Object(r.useState)(P(n)),2),e=t[0],o=t[1];return Object(r.useEffect)(function(){var t=P(n);o(t)},[n]),e}(e);return _(g,t,e,E),w(g),function(n){var t=V(p(),2)[1];Object(r.useEffect)(function(){t({type:"SET_VIEWCOUNT",count:o.a.Children.toArray(n).length})},[n.length])}(f),function(n){var t=H(p(),2)[1];Object(r.useEffect)(function(){t({type:"SET_REWIND",rewind:n})},[n])}(h),function(n){var t=Y(p(),2)[1];Object(r.useEffect)(function(){t({type:"SET_PAUSE",pause:n})},[n])}(y),function(n){var t=B(p(),1)[0],e=t.viewCount,o=t.restedIndex,i=t.currentIndex,u=t.autoPlayInterval;Object(r.useEffect)(function(){var t;if("function"==typeof n)return e&&o+1===e&&(u?t=window.setTimeout(function(){n(),t=void 0},u):n()),function(){t&&(clearTimeout(t),0===i&&n())}},[o,i])}(m),$(v),function(n,t){var e=z(p(),2),o=e[0].autoPlayInterval,i=e[1];Object(r.useEffect)(function(){function e(){i({type:"SET_MOUSEOVER",mouseOver:!0}),i({type:"SET_PAUSE",pause:!0})}function r(){i({type:"SET_MOUSEOVER",mouseOver:!1}),i({type:"SET_PAUSE",pause:!1})}if(i({type:"SET_PAUSE",pause:!1}),n&&o)return t.current.addEventListener("mouseenter",e),t.current.addEventListener("mouseover",e),t.current.addEventListener("mouseout",r),function(){i({type:"SET_MOUSEOVER",mouseover:!1}),t.current.removeEventListener("mouseenter",e),t.current.removeEventListener("mouseover",e),t.current.removeEventListener("mouseout",r)}},[n,o])}(d,g),M(c),C(a),U(i,u),X(s),function(n){var t=W(p(),2)[1];Object(r.useEffect)(function(){t({type:"SET_CONFIG",config:n})},[n])}(b),o.a.createElement(K,{className:"sled",ref:g,styles:l,cssWidth:t,cssHeight:E,tabIndex:0},o.a.createElement(I,null,f))};Q.propTypes={children:u.a.node,style:u.a.string,width:u.a.string,height:u.a.string,goto:u.a.oneOfType([u.a.number,u.a.string]),keyboard:u.a.bool,dragging:u.a.bool,dragDistance:u.a.oneOfType([u.a.number,u.a.string]),autoPlay:u.a.oneOfType([u.a.number,u.a.string]),pauseOnMouseOver:u.a.bool,rewind:u.a.bool,config:u.a.object,stopOnInteraction:u.a.bool,pause:u.a.bool,onSledEnd:u.a.func},Q.defaultProps={children:null,style:"",width:"100%",height:"50ow",goto:void 0,keyboard:!0,dragging:!0,dragDistance:"25ow",autoPlay:void 0,config:{mass:1,tension:210,friction:20,clamp:!0},pauseOnMouseOver:!0,stopOnInteraction:!1,rewind:!1,pause:!1,onSledEnd:null};var Z=Q;function nn(n){return(nn="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(n){return typeof n}:function(n){return n&&"function"==typeof Symbol&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n})(n)}function tn(n,t){return function(n){if(Array.isArray(n))return n}(n)||function(n,t){var e=[],r=!0,o=!1,i=void 0;try{for(var u,a=n[Symbol.iterator]();!(r=(u=a.next()).done)&&(e.push(u.value),!t||e.length!==t);r=!0);}catch(c){o=!0,i=c}finally{try{r||null==a.return||a.return()}finally{if(o)throw i}}return e}(n,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}var en=function(n){var t,e,o,i,u,a,c,f,l=(t=n,e=tn(p(),1)[0],o=e.rewind,i=e.currentIndex,u=e.viewCount,a=tn(Object(r.useState)(),2),c=a[0],f=a[1],Object(r.useEffect)(function(){f(!o&&("next"===t&&i===u-1||"prev"===t&&0===i))},[i,o]),c),s=function(n){var t=tn(p(),1)[0].currentIndex,e=tn(Object(r.useState)(),2),o=e[0],i=e[1];return Object(r.useEffect)(function(){i(n===t)},[t]),o}(n);switch(nn(n)){case"number":return s;case"string":default:return l}},rn="\n  cursor: pointer;\n  width: 40px;\n  height: 40px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  background: none;\n  box-shadow: none;\n  border: none;\n  transition: opacity 0.5s, transform 0.5s;\n  opacity: 0.5;\n\n  :focus {\n    box-shadow: none;\n    outline: none;\n  }\n\n  :before {\n    content: '';\n    display: block;\n    flex-shrink: 0;\n    width: 15px;\n    height: 15px;\n    border-top: 3px solid black;\n  }\n\n  :focus {\n    opacity: 1;\n  }\n\n  :hover, \n  :active {\n    opacity: 1;\n    transform: scale(1.2);\n  }\n\n\n  :disabled {\n    opacity: 0.4;\n  }\n",on={dot:"\n  cursor: pointer;\n  width: 40px;\n  height: 40px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  background: none;\n  box-shadow: none;\n  border: none;\n  transition: opacity 0.5s, transform 0.5s;\n  opacity: 0.4;\n\n  :focus {\n    box-shadow: none;\n    outline: none;\n  }\n\n  :before {\n    content: '';\n    display: block;\n    flex-shrink: 0;\n    width: 10px;\n    height: 10px;\n    background: grey;\n    border-radius: 50%;\n  }\n\n  :hover, \n  :focus {\n    transform: scale(1.2);\n  }\n\n  :hover, \n  :focus, \n  :active {\n    opacity: 0.6;\n  }\n\n  :disabled {\n    opacity: 1;\n  }\n",arrowLeft:"\n  ".concat(rn,"\n  transform-origin: right center;\n\n  :before {\n    border-left: 3px solid black;\n    transform: rotate(-45deg);\n  }\n"),arrowRight:"\n  ".concat(rn,"\n  transform-origin: left center;\n\n  :before {\n    border-right: 3px solid black;\n    transform: rotate(45deg);\n  }\n")};function un(n,t){return function(n){if(Array.isArray(n))return n}(n)||function(n,t){var e=[],r=!0,o=!1,i=void 0;try{for(var u,a=n[Symbol.iterator]();!(r=(u=a.next()).done)&&(e.push(u.value),!t||e.length!==t);r=!0);}catch(c){o=!0,i=c}finally{try{r||null==a.return||a.return()}finally{if(o)throw i}}return e}(n,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}function an(n){return(an="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(n){return typeof n}:function(n){return n&&"function"==typeof Symbol&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n})(n)}function cn(n){return(cn="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(n){return typeof n}:function(n){return n&&"function"==typeof Symbol&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n})(n)}function fn(n){return(fn="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(n){return typeof n}:function(n){return n&&"function"==typeof Symbol&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n})(n)}function ln(n,t){return function(n){if(Array.isArray(n))return n}(n)||function(n,t){var e=[],r=!0,o=!1,i=void 0;try{for(var u,a=n[Symbol.iterator]();!(r=(u=a.next()).done)&&(e.push(u.value),!t||e.length!==t);r=!0);}catch(c){o=!0,i=c}finally{try{r||null==a.return||a.return()}finally{if(o)throw i}}return e}(n,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}function sn(){var n=function(n,t){t||(t=n.slice(0));return Object.freeze(Object.defineProperties(n,{raw:{value:Object.freeze(t)}}))}(["\n  ","\n  ","\n"]);return sn=function(){return n},n}var yn=v.a.button(sn(),function(n){return n.disabled&&"pointer-events: none;"},function(n){return n.styles}),dn=function(n){var t=n.children,e=n.goto,i=n.style,u=n.preset,a=Object(r.useRef)();w(a);var c=function(n){var t=un(Object(r.useState)(on[n]||""),2),e=t[0],o=t[1];return Object(r.useEffect)(function(){n&&(on[n]?o(on[n]):console.log('react-sled: Control preset "'.concat(on[n],'" does not exist.')))},[n]),e}(u),f=function(n){switch(an(n)){case"number":return on.dot;case"string":default:return"next"===n?on.arrowRight:on.arrowLeft}}(e),l=en(e),s=function(n,t){switch(cn(n)){case"number":return"sled-control sled-control-dot";case"string":default:return"sled-control sled-control-arrow sled-control-arrow-".concat(n)}}(e),y=function(n){switch(fn(n)){case"number":return"Slide to view with index ".concat(n,".");case"string":default:return"Slide to ".concat("next"===n?"next":"previous"," view.")}}(e),d=function(n){var t=ln(p(),2),e=t[0].stopOnInteraction,r=t[1];return function(){e&&r({type:"SET_AUTOPLAY",autoPlayInterval:void 0}),r("number"==typeof n?{type:"GOTO",index:n}:{type:"next"===n?"NEXT":"PREV"})}}(e);return o.a.createElement(yn,{className:s,disabled:l,ref:a,styles:c+i||f,ariaLabel:y,tabIndex:0,onClick:d},t)};dn.propTypes={goto:u.a.oneOfType([u.a.string,u.a.number]),style:u.a.string,preset:u.a.string},dn.defaultProps={goto:"next",style:"",preset:""};var pn=dn;function vn(n){return function(n){if(Array.isArray(n)){for(var t=0,e=new Array(n.length);t<n.length;t++)e[t]=n[t];return e}}(n)||function(n){if(Symbol.iterator in Object(n)||"[object Arguments]"===Object.prototype.toString.call(n))return Array.from(n)}(n)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}function bn(n,t){return function(n){if(Array.isArray(n))return n}(n)||function(n,t){var e=[],r=!0,o=!1,i=void 0;try{for(var u,a=n[Symbol.iterator]();!(r=(u=a.next()).done)&&(e.push(u.value),!t||e.length!==t);r=!0);}catch(c){o=!0,i=c}finally{try{r||null==a.return||a.return()}finally{if(o)throw i}}return e}(n,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}function hn(){var n=function(n,t){t||(t=n.slice(0));return Object.freeze(Object.defineProperties(n,{raw:{value:Object.freeze(t)}}))}(["\n  position: absolute;\n  zIndex: 200;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  display: flex;\n  justify-content: space-between;\n  pointer-events: none;\n\n  // Mimic \"justify-content: space-evenly;\"\n  :before,\n  :after {\n    content: '';\n    display: block;\n    height: 100%;\n  }\n  ","\n"]);return hn=function(){return n},n}var mn=v.a.div(hn(),function(n){return n.styles}),gn=function(n){n.style;var t=bn(p(),1)[0].viewCount;return o.a.createElement(mn,{className:"sled-progress-separators"},vn(Array(t?t-1:1)).map(function(n,t){return o.a.createElement("div",{key:t,className:"sled-progress-separator",style:{position:"relative",height:"100%"}})}))};function wn(){var n=function(n,t){t||(t=n.slice(0));return Object.freeze(Object.defineProperties(n,{raw:{value:Object.freeze(t)}}))}(["\n  position: absolute;\n  left: 0;\n  width: 100%;\n  pointer-events: none;\n"]);return wn=function(){return n},n}var En=v.a.div(wn()),On=function(n){n.style;return o.a.createElement(En,{className:"sled-progress-rail"})};function Sn(n,t){return function(n){if(Array.isArray(n))return n}(n)||function(n,t){var e=[],r=!0,o=!1,i=void 0;try{for(var u,a=n[Symbol.iterator]();!(r=(u=a.next()).done)&&(e.push(u.value),!t||e.length!==t);r=!0);}catch(c){o=!0,i=c}finally{try{r||null==a.return||a.return()}finally{if(o)throw i}}return e}(n,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}function xn(n,t){return 100-100/n*(t+(arguments.length>2&&void 0!==arguments[2]?arguments[2]:0))}var jn=function(){var n=Sn(p(),1)[0],t=n.currentIndex,e=n.prevIndex,i=n.viewCount,u=n.autoPlayInterval,a=n.pause,c=n.mouseOver,f=n.config,l=Sn(Object(b.b)(function(){return{from:{x:100}}}),2),s=l[0],y=l[1];return Object(r.useEffect)(function(){c&&y({config:f,x:xn(i,t),reset:!1})},[c]),Object(r.useEffect)(function(){if(i){var n=xn(i,t,!u&&1);y(0===t?{config:f,from:{x:100},x:n,reset:!(i>2)||1!==e}:{config:f,x:n,reset:!1})}},[i,t,u]),Object(r.useEffect)(function(){u&&y({config:u&&!a?{duration:u}:f,x:xn(i,t,!a&&1),reset:!1})},[a]),o.a.createElement(b.a.div,{className:"sled-progress-track",style:{position:"absolute",left:0,width:"100%",pointerEvents:"none",transform:s.x.interpolate(function(n){return"translateX(-".concat(n,"%)")})}})};function In(n){return function(n){if(Array.isArray(n)){for(var t=0,e=new Array(n.length);t<n.length;t++)e[t]=n[t];return e}}(n)||function(n){if(Symbol.iterator in Object(n)||"[object Arguments]"===Object.prototype.toString.call(n))return Array.from(n)}(n)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}function Tn(n,t){return function(n){if(Array.isArray(n))return n}(n)||function(n,t){var e=[],r=!0,o=!1,i=void 0;try{for(var u,a=n[Symbol.iterator]();!(r=(u=a.next()).done)&&(e.push(u.value),!t||e.length!==t);r=!0);}catch(c){o=!0,i=c}finally{try{r||null==a.return||a.return()}finally{if(o)throw i}}return e}(n,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}function An(){var n=function(n,t){t||(t=n.slice(0));return Object.freeze(Object.defineProperties(n,{raw:{value:Object.freeze(t)}}))}(["\n  position: absolute;\n  z-index: 100;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  display: flex;\n  ","\n"]);return An=function(){return n},n}var Pn=v.a.div(An(),function(n){return n.styles}),kn=function(n){n.style;var t=Tn(p(),1)[0].viewCount;return o.a.createElement(Pn,{className:"sled-progress-controls"},In(Array(t||1)).map(function(n,t){return o.a.createElement(pn,{key:t,goto:t,style:"\n            flex-grow: 1;\n            height: 100%;\n            cursor: pointer; \n            background: none;\n            border: none;\n            outline: none;\n          "})}))};function Nn(){var n=function(n,t){t||(t=n.slice(0));return Object.freeze(Object.defineProperties(n,{raw:{value:Object.freeze(t)}}))}(["\n  position: relative;\n  width: 100%;\n  display: flex;\n  align-items: center;\n  overflow: hidden;\n  height: 20px;\n\n  .sled-progress-rail {\n    background: black;\n    height: 4px;\n  }\n  .sled-progress-track {\n    background: red;\n    height: 4px;\n  }\n  .sled-progress-separator {\n    width: 4px;\n    background: white;\n  }\n  .sled-control {\n    :focus {\n      background: hsla(0, 0%, 100%, 0.5)\n    }\n  }\n  ","\n"]);return Nn=function(){return n},n}var _n=v.a.div(Nn(),function(n){return n.styles}),Rn=function(n){var t=n.style;return o.a.createElement(_n,{className:"sled-progress",styles:t,role:"progressBar"},o.a.createElement(On,null),o.a.createElement(jn,null),o.a.createElement(gn,null),o.a.createElement(kn,null))};Rn.propTypes={style:u.a.string},Rn.defaultProps={style:""};var Cn=Rn;function Dn(n){for(var t=1;t<arguments.length;t++){var e=null!=arguments[t]?arguments[t]:{},r=Object.keys(e);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(e).filter(function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.forEach(function(t){Ln(n,t,e[t])})}return n}function Ln(n,t,e){return t in n?Object.defineProperty(n,t,{value:e,enumerable:!0,configurable:!0,writable:!0}):n[t]=e,n}function Un(n,t){if(null==n)return{};var e,r,o=function(n,t){if(null==n)return{};var e,r,o={},i=Object.keys(n);for(r=0;r<i.length;r++)e=i[r],t.indexOf(e)>=0||(o[e]=n[e]);return o}(n,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(n);for(r=0;r<i.length;r++)e=i[r],t.indexOf(e)>=0||Object.prototype.propertyIsEnumerable.call(n,e)&&(o[e]=n[e])}return o}var zn=function(n){var t=n.children,e=Un(n,["children"]);return o.a.createElement(d,{reducer:s,initialState:Dn({currentIndex:0,prevIndex:void 0,pause:!1,viewCount:0,hasFocus:!1,width:0,height:0},e)},t)};zn.propTypes={children:u.a.node},zn.defaultProps={children:null};var Gn=e(142),Mn=e.n(Gn),Vn=e(143),Fn=e.n(Vn),Xn=e(144),Wn=e.n(Xn),Hn=e(145),Yn=e.n(Hn),Jn=e(146),$n=e.n(Jn),Bn=[Mn.a,Fn.a,Wn.a,Yn.a,$n.a];t.default=function(n){var t=n.width,e=n.height,r=n.goto,i=n.autoPlay,u=n.rewind,a=n.pauseOnMouseOver,c=n.stopOnInteraction,f=n.keyboard,l=n.dragging,s=n.dragDistance,y=n.mass,d=n.tension,p=n.friction,v=n.clamp;return o.a.createElement("div",{className:"sled-wrapper"},o.a.createElement(zn,null,o.a.createElement(Z,{onSledEnd:function(){console.log("THIS IS THE END")},width:t,height:e,goto:r,autoPlay:i,rewind:u,pauseOnMouseOver:a,stopOnInteraction:c,keyboard:f,dragging:l,dragDistance:s,config:{mass:y,tension:d,friction:p,clamp:v},style:"\n    // transition: all 1s;\n  "},Bn.map(function(n){return o.a.createElement("div",{key:n,style:{position:"absolute",background:"#fff",top:0,bottom:0,left:0,right:0,backgroundImage:"url(".concat(n,")"),backgroundSize:"cover",backgroundPosition:"center"}})})),o.a.createElement(Cn,null),o.a.createElement("div",{className:"controls"},o.a.createElement(pn,{goto:"prev"}),o.a.createElement(pn,{goto:"next"})),o.a.createElement("div",{className:"controls"},Bn.map(function(n,t){return o.a.createElement(pn,{key:n,goto:t})}))))}}}]);
//# sourceMappingURL=component---src-pages-sled-component-js-403d6dd5444cb462caa7.js.map