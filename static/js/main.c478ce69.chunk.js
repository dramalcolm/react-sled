(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{105:function(e,t,n){},106:function(e,t,n){},167:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),o=n(6),c=n.n(o),i=n(10),s=n(27),u=n.n(s),l=n(37),f=n.n(l),p=(n(105),n(106),n(21)),d=n(30),m=n(75);function b(e){return(b="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function g(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function y(){return(y=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function v(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"===typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter(function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),r.forEach(function(t){g(e,t,n[t])})}return e}function h(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}function E(e,t){return t||(t=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}}))}function O(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=[],r=!0,a=!1,o=void 0;try{for(var c,i=e[Symbol.iterator]();!(r=(c=i.next()).done)&&(n.push(c.value),!t||n.length!==t);r=!0);}catch(s){a=!0,o=s}finally{try{r||null==i.return||i.return()}finally{if(a)throw o}}return n}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}function w(e){return function(e){if(Array.isArray(e)){for(var t=0,n=new Array(e.length);t<e.length;t++)n[t]=e[t];return n}}(e)||function(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}function j(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}function x(e,t){return e(t={exports:{}},t.exports),t.exports}var _=x(function(e,t){Object.defineProperty(t,"__esModule",{value:!0});var n="function"===typeof Symbol&&Symbol.for,r=n?Symbol.for("react.element"):60103,a=n?Symbol.for("react.portal"):60106,o=n?Symbol.for("react.fragment"):60107,c=n?Symbol.for("react.strict_mode"):60108,i=n?Symbol.for("react.profiler"):60114,s=n?Symbol.for("react.provider"):60109,u=n?Symbol.for("react.context"):60110,l=n?Symbol.for("react.async_mode"):60111,f=n?Symbol.for("react.concurrent_mode"):60111,p=n?Symbol.for("react.forward_ref"):60112,d=n?Symbol.for("react.suspense"):60113,m=n?Symbol.for("react.memo"):60115,b=n?Symbol.for("react.lazy"):60116;function g(e){if("object"===typeof e&&null!==e){var t=e.$$typeof;switch(t){case r:switch(e=e.type){case l:case f:case o:case i:case c:case d:return e;default:switch(e=e&&e.$$typeof){case u:case p:case s:return e;default:return t}}case b:case m:case a:return t}}}function y(e){return g(e)===f}t.typeOf=g,t.AsyncMode=l,t.ConcurrentMode=f,t.ContextConsumer=u,t.ContextProvider=s,t.Element=r,t.ForwardRef=p,t.Fragment=o,t.Lazy=b,t.Memo=m,t.Portal=a,t.Profiler=i,t.StrictMode=c,t.Suspense=d,t.isValidElementType=function(e){return"string"===typeof e||"function"===typeof e||e===o||e===f||e===i||e===c||e===d||"object"===typeof e&&null!==e&&(e.$$typeof===b||e.$$typeof===m||e.$$typeof===s||e.$$typeof===u||e.$$typeof===p)},t.isAsyncMode=function(e){return y(e)||g(e)===l},t.isConcurrentMode=y,t.isContextConsumer=function(e){return g(e)===u},t.isContextProvider=function(e){return g(e)===s},t.isElement=function(e){return"object"===typeof e&&null!==e&&e.$$typeof===r},t.isForwardRef=function(e){return g(e)===p},t.isFragment=function(e){return g(e)===o},t.isLazy=function(e){return g(e)===b},t.isMemo=function(e){return g(e)===m},t.isPortal=function(e){return g(e)===a},t.isProfiler=function(e){return g(e)===i},t.isStrictMode=function(e){return g(e)===c},t.isSuspense=function(e){return g(e)===d}});j(_);_.typeOf,_.AsyncMode,_.ConcurrentMode,_.ContextConsumer,_.ContextProvider,_.Element,_.ForwardRef,_.Fragment,_.Lazy,_.Memo,_.Portal,_.Profiler,_.StrictMode,_.Suspense,_.isValidElementType,_.isAsyncMode,_.isConcurrentMode,_.isContextConsumer,_.isContextProvider,_.isElement,_.isForwardRef,_.isFragment,_.isLazy,_.isMemo,_.isPortal,_.isProfiler,_.isStrictMode,_.isSuspense;var S=x(function(e,t){0});j(S);S.typeOf,S.AsyncMode,S.ConcurrentMode,S.ContextConsumer,S.ContextProvider,S.Element,S.ForwardRef,S.Fragment,S.Lazy,S.Memo,S.Portal,S.Profiler,S.StrictMode,S.Suspense,S.isValidElementType,S.isAsyncMode,S.isConcurrentMode,S.isContextConsumer,S.isContextProvider,S.isElement,S.isForwardRef,S.isFragment,S.isLazy,S.isMemo,S.isPortal,S.isProfiler,S.isStrictMode,S.isSuspense,x(function(e){e.exports=_});var N=Object.getOwnPropertySymbols,C=Object.prototype.hasOwnProperty,P=Object.prototype.propertyIsEnumerable;(function(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de","5"===Object.getOwnPropertyNames(e)[0])return!1;for(var t={},n=0;n<10;n++)t["_"+String.fromCharCode(n)]=n;if("0123456789"!==Object.getOwnPropertyNames(t).map(function(e){return t[e]}).join(""))return!1;var r={};return"abcdefghijklmnopqrst".split("").forEach(function(e){r[e]=e}),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},r)).join("")}catch(a){return!1}})()&&Object.assign;var T="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";function k(e,t,n,r,a){}k.resetWarningCache=function(){0};Function.call.bind(Object.prototype.hasOwnProperty);function I(){}function R(){}R.resetWarningCache=I;var M=x(function(e){e.exports=function(){function e(e,t,n,r,a,o){if(o!==T){var c=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw c.name="Invariant Violation",c}}function t(){return e}e.isRequired=e;var n={array:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,elementType:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t,checkPropTypes:R,resetWarningCache:I};return n.PropTypes=n,n}()});function A(e,t,n){return t=(t=+t)===t?t:0,n=(n=+n)===n?n:0,(e=+e)===e&&(e=(e=e<=n?e:n)>=t?e:t),e}function L(e,t,n){return 0!==e||n?(e-1+t)%t:A(e,0,t-1)}var D=function(e,t){switch(t.type){case"NEXT":return v({},e,{currentIndex:(n=e.currentIndex,r=e.viewCount,a=e.rewind,n!==r-1||a?(n+1)%r:A(n,0,r-1)),prevIndex:e.currentIndex,pause:t.pause||e.pause});case"PREV":return v({},e,{currentIndex:L(e.currentIndex,e.viewCount,e.rewind),prevIndex:e.currentIndex,pause:t.pause||e.pause});case"GOTO":return v({},e,{currentIndex:A(t.index,0,e.viewCount-1),prevIndex:e.currentIndex,pause:t.pause||e.pause});case"SET_PAUSE":return v({},e,{pause:t.pause});case"SET_VIEWCOUNT":return v({},e,{viewCount:t.count});case"SET_FOCUS":return v({},e,{hasFocus:t.focus});case"SET_MOUSEOVER":return v({},e,{mouseover:t.mouseover});case"SET_DIMENSIONS":return v({},e,{width:t.width,height:t.height});case"SET_DRAGGING":return v({},e,{dragging:t.dragging});case"SET_DRAG_DISTANCE":return v({},e,{dragDistance:t.dragDistance});case"SET_AUTOPLAY":return v({},e,{autoPlayInterval:t.autoPlayInterval});case"SET_CONFIG":return v({},e,{config:t.config});case"SET_REWIND":return v({},e,{rewind:t.rewind});default:return e}var n,r,a},F=Object(r.createContext)(),z=function(e){var t=e.reducer,n=e.initialState,o=e.children;return a.a.createElement(F.Provider,{value:Object(r.useReducer)(t,n)},o)},V=function(){return Object(r.useContext)(F)},$=function(e){var t=O(V(),2)[1];Object(r.useEffect)(function(){function n(){t({type:"SET_FOCUS",focus:!0})}function r(){t({type:"SET_FOCUS",focus:!1})}return e.current.addEventListener("focus",n),e.current.addEventListener("blur",r),function(){e.current.removeEventListener("focus",n),e.current.removeEventListener("blur",r)}},[])},U=function(e){var t=e.values,n=t.x,o=t.cursor,c=e.index,i=e.bind,s=e.children,u=Object(r.useRef)();$(u);var l=function(e){var t=O(V(),1)[0].viewCount,n=O(Object(r.useState)(),2),a=n[0],o=n[1];return Object(r.useEffect)(function(){o(1e3-e)},[t]),a}(c);return a.a.createElement(d.a.div,y({},i(),{ref:u,style:{position:"absolute",zIndex:l,top:0,transform:n.interpolate(function(e){return"translate3d(".concat(e,"px,0,0)")}),width:"100%",height:"100%",willChange:"transform",overflow:"hidden",cursor:o}}),s)},G=function(e){var t=e.children,n=O(V(),1)[0],o=n.currentIndex,c=n.prevIndex,i=n.width,s=n.height,u=n.dragging,l=n.config;function f(e){g(function(t){return{x:(t-o)*i,immediate:e}})}Object(r.useEffect)(function(){f(!0)},[i,s]),Object(r.useEffect)(function(){g(function(){return{cursor:u?"grab":"auto"}})},[u]),Object(r.useEffect)(function(){f(void 0===c)},[o]),Object(r.useEffect)(function(){g(function(e){return{config:l}})},[l]);var p=O(Object(d.c)(t.length,function(e){return{x:e*i,sc:1,immediate:!0,config:l,cursor:"auto"}}),2),b=p[0],g=p[1],y=function(e){var t=O(V(),2),n=t[0],a=n.dragging,o=n.dragDistance,c=n.width,i=n.currentIndex,s=t[1],u=Object(r.useRef)(),l=Object(r.useRef)(),f=Object(r.useRef)(),p=Object(r.useRef)();return Object(r.useEffect)(function(){u.current=i,l.current=a,f.current=c,p.current=o},[i,a,o,c]),Object(m.a)(function(t){var n=t.down,r=O(t.delta,1)[0],a=O(t.direction,1)[0],o=t.distance,c=t.cancel;l.current&&(n&&o>p.current&&(s({type:a>0?"PREV":"NEXT",pause:!0}),c()),e(function(e){return{x:(e-u.current)*f.current+(n?r:0),immediate:!1,cursor:n?"grabbing":"grab"}}),s({type:"SET_PAUSE",pause:!0}))})}(g);return b.map(function(e,n){return a.a.createElement(U,{key:n,values:e,bind:y,index:n},t[n])})};function W(e){return"\n  :after {\n    content: '';\n    display: block;\n    width: 100%;\n    height: 0;\n    padding-top: ".concat(e,"%;\n  }\n")}function X(e){if("string"===typeof e){if(/^\d+(\.\d+)?(px|r?em|%|vw|vh|vmin|vmax)$/.test(e))return"height: ".concat(e,";");if(/^\d+(\.\d+)?ow$/.test(e))return W(+e.replace("ow",""))}return W(50)}function B(e,t){var n=e.current;t({type:"SET_DIMENSIONS",width:n.offsetWidth,height:n.offsetHeight})}var H=function(e,t,n,a){var o=O(V(),2)[1];Object(r.useEffect)(function(){B(e,o)},[t,n,a]),Object(r.useEffect)(function(){var t=function(e,t,n){var r;return function(){var a=this,o=arguments,c=n&&!r;clearTimeout(r),r=setTimeout(function(){r=null,n||e.apply(a,o)},t),c&&e.apply(a,o)}}(function(){B(e,o)},150);return window.addEventListener("resize",t),function(){return window.removeEventListener("resize",t)}},[])};var Y=function(e,t){var n=O(V(),2),a=n[0].width,o=n[1];Object(r.useEffect)(function(){var e=function(e,t){switch(b(e)){case"number":return e;case"string":return e.indexOf("ow")>=0?t/100*+e.replace("ow",""):40;default:return 40}}(t,a);o({type:"SET_DRAG_DISTANCE",dragDistance:e})},[t,a]),Object(r.useEffect)(function(){o({type:"SET_DRAGGING",dragging:e})},[e])};var q=function(e){var t=O(V(),2),n=t[0],a=n.mouseover,o=n.pause,c=n.autoPlayInterval,i=t[1];Object(r.useEffect)(function(){var t=parseInt(e,10);isNaN(t)?i({type:"SET_AUTOPLAY",autoPlayInterval:void 0}):(i({type:"SET_AUTOPLAY",autoPlayInterval:t}),i({type:"SET_PAUSE",pause:!1}))},[e]),function(e,t){var n=Object(r.useRef)();Object(r.useEffect)(function(){n.current=e}),Object(r.useEffect)(function(){if("number"===typeof t){var e=setInterval(function(){n.current()},t);return function(){return clearInterval(e)}}},[t])}(function(){i({type:"NEXT"})},o||a?null:c)};function J(){var e=E(["\n  position: relative;\n  overflow: hidden;\n  width: ",";\n  ","\n  ","\n"]);return J=function(){return e},e}var K=p.a.div(J(),function(e){return e.cssWidth||"100%"},function(e){return e.cssHeight},function(e){return e.styles}),Q=function(e){var t=e.width,n=e.height,o=e.dragging,c=e.dragDistance,i=e.keyboard,s=e.goto,u=e.children,l=e.style,f=e.autoPlay,p=e.pauseOnMouseOver,d=e.config,m=e.rewind,b=Object(r.useRef)(),g=function(e){var t=O(Object(r.useState)(X(e)),2),n=t[0],a=t[1];return Object(r.useEffect)(function(){var t=X(e);a(t)},[e]),n}(n);return H(b,t,n,g),$(b),function(e){var t=O(V(),2)[1];Object(r.useEffect)(function(){t({type:"SET_VIEWCOUNT",count:a.a.Children.toArray(e).length})},[e.length])}(u),function(e){var t=O(V(),2)[1];Object(r.useEffect)(function(){t({type:"SET_REWIND",rewind:e})},[e])}(m),function(e,t){var n=O(V(),2)[1];Object(r.useEffect)(function(){function r(){n({type:"SET_MOUSEOVER",mouseover:!0})}function a(){n({type:"SET_MOUSEOVER",mouseover:!1})}if(e)return t.current.addEventListener("mouseenter",r),t.current.addEventListener("mouseover",r),t.current.addEventListener("mouseout",a),function(){n({type:"SET_MOUSEOVER",mouseover:!1}),t.current.removeEventListener("mouseenter",r),t.current.removeEventListener("mouseover",r),t.current.removeEventListener("mouseout",a)}},[e])}(p,b),function(e){var t=O(V(),2)[1];Object(r.useEffect)(function(){if(e){var n=parseInt(e,10);isNaN(n)||t({type:"GOTO",index:n,pause:!0})}},[e])}(s),function(e){var t=O(V(),2),n=t[0].hasFocus,a=t[1],o=Object(r.useRef)();Object(r.useEffect)(function(){o.current=n},[n]),Object(r.useEffect)(function(){function t(e){if(o.current)switch(e.keyCode){case 37:a({type:"PREV",pause:!0});break;case 39:a({type:"NEXT",pause:!0})}}if(e)return document.addEventListener("keyup",t),function(){return document.removeEventListener("keyup",t)}},[e])}(i),Y(o,c),q(f),function(e){var t=O(V(),2)[1];Object(r.useEffect)(function(){t({type:"SET_CONFIG",config:e})},[e])}(d),a.a.createElement(K,{className:"sled",ref:b,styles:l,cssWidth:t,cssHeight:g,tabIndex:0},a.a.createElement(G,null,u))};Q.propTypes={children:M.node,style:M.string,width:M.string,height:M.string,goto:M.oneOfType([M.number,M.string]),keyboard:M.bool,dragging:M.bool,dragDistance:M.oneOfType([M.number,M.string]),autoPlay:M.oneOfType([M.number,M.string]),pauseOnMouseOver:M.bool,rewind:M.bool,config:M.object},Q.defaultProps={children:null,style:"",width:"100%",height:"50ow",goto:void 0,keyboard:!0,dragging:!0,dragDistance:"25ow",autoPlay:void 0,config:{mass:1,tension:210,friction:20,clamp:!0},pauseOnMouseOver:!0,rewind:!1};var Z=function(e){var t=function(e){var t=O(V(),1)[0],n=t.rewind,a=t.currentIndex,o=t.viewCount,c=O(Object(r.useState)(),2),i=c[0],s=c[1];return Object(r.useEffect)(function(){s(!n&&("next"===e&&a===o-1||"prev"===e&&0===a))},[a,n]),i}(e),n=function(e){var t=O(V(),1)[0].currentIndex,n=O(Object(r.useState)(),2),a=n[0],o=n[1];return Object(r.useEffect)(function(){o(e===t)},[t]),a}(e);switch(b(e)){case"number":return n;case"string":default:return t}},ee="\n  cursor: pointer;\n  width: 40px;\n  height: 40px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  background: none;\n  box-shadow: none;\n  border: none;\n  transition: opacity 0.5s, transform 0.5s;\n  opacity: 0.5;\n\n  :focus {\n    box-shadow: none;\n    outline: none;\n  }\n\n  :before {\n    content: '';\n    display: block;\n    flex-shrink: 0;\n    width: 15px;\n    height: 15px;\n    border-top: 3px solid black;\n  }\n\n  :focus {\n    opacity: 1;\n  }\n\n  :hover, \n  :active {\n    opacity: 1;\n    transform: scale(1.2);\n  }\n\n\n  :disabled {\n    opacity: 0.4;\n  }\n",te={dot:"\n  cursor: pointer;\n  width: 40px;\n  height: 40px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  background: none;\n  box-shadow: none;\n  border: none;\n  transition: opacity 0.5s, transform 0.5s;\n  opacity: 0.4;\n\n  :focus {\n    box-shadow: none;\n    outline: none;\n  }\n\n  :before {\n    content: '';\n    display: block;\n    flex-shrink: 0;\n    width: 10px;\n    height: 10px;\n    background: grey;\n    border-radius: 50%;\n  }\n\n  :hover, \n  :focus {\n    transform: scale(1.2);\n  }\n\n  :hover, \n  :focus, \n  :active {\n    opacity: 0.6;\n  }\n\n  :disabled {\n    opacity: 1;\n  }\n",arrowLeft:"\n  ".concat(ee,"\n  transform-origin: right center;\n\n  :before {\n    border-left: 3px solid black;\n    transform: rotate(-45deg);\n  }\n"),arrowRight:"\n  ".concat(ee,"\n  transform-origin: left center;\n\n  :before {\n    border-right: 3px solid black;\n    transform: rotate(45deg);\n  }\n")};function ne(){var e=E(["\n  ","\n  ","\n"]);return ne=function(){return e},e}var re=p.a.button(ne(),function(e){return e.disabled&&"pointer-events: none;"},function(e){return e.styles}),ae=function(e){var t=e.children,n=e.goto,o=e.style,c=e.preset,i=Object(r.useRef)();$(i);var s=function(e){var t=O(Object(r.useState)(te[e]||""),2),n=t[0],a=t[1];return Object(r.useEffect)(function(){e&&(te[e]?a(te[e]):console.log('react-sled: Control preset "'.concat(te[e],'" does not exist.')))},[e]),n}(c),u=function(e){switch(b(e)){case"number":return te.dot;case"string":default:return"next"===e?te.arrowRight:te.arrowLeft}}(n),l=Z(n),f=function(e,t){switch(b(e)){case"number":return"sled-control sled-control-dot";case"string":default:return"sled-control sled-control-arrow sled-control-arrow-".concat(e)}}(n),p=function(e){switch(b(e)){case"number":return"Slide to view with index ".concat(e,".");case"string":default:return"Slide to ".concat("next"===e?"next":"previous"," view.")}}(n),d=function(e){var t=O(V(),2)[1];switch(b(e)){case"number":return function(){return t({type:"GOTO",index:e,pause:!0})};case"string":default:return function(){return t({type:"next"===e?"NEXT":"PREV",pause:!0})}}}(n);return a.a.createElement(re,{className:f,disabled:l,ref:i,styles:s+o||u,ariaLabel:p,tabIndex:0,onClick:d},t)};function oe(){var e=E(["\n  position: absolute;\n  zIndex: 200;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  display: flex;\n  justify-content: space-between;\n  pointer-events: none;\n\n  // Mimic \"justify-content: space-evenly;\"\n  :before,\n  :after {\n    content: '';\n    display: block;\n    height: 100%;\n  }\n  ","\n"]);return oe=function(){return e},e}ae.propTypes={goto:M.oneOfType([M.string,M.number]),style:M.string,preset:M.string},ae.defaultProps={goto:"next",style:"",preset:""};var ce=p.a.div(oe(),function(e){return e.styles}),ie=function(e){e.style;var t=O(V(),1)[0].viewCount;return a.a.createElement(ce,{className:"sled-progress-separators"},w(Array(t?t-1:1)).map(function(e,t){return a.a.createElement("div",{key:t,className:"sled-progress-separator",style:{position:"relative",height:"100%"}})}))};function se(){var e=E(["\n  position: absolute;\n  left: 0;\n  width: 100%;\n  pointer-events: none;\n"]);return se=function(){return e},e}var ue=p.a.div(se()),le=function(e){e.style;return a.a.createElement(ue,{className:"sled-progress-rail"})},fe={mass:1,tension:210,friction:20,clamp:!0};function pe(e,t){return 100-100/e*(t+(arguments.length>2&&void 0!==arguments[2]?arguments[2]:0))}var de=function(){var e=O(V(),1)[0],t=e.currentIndex,n=e.prevIndex,o=e.viewCount,c=e.mouseover,i=e.autoPlayInterval,s=e.pause,u=O(Object(d.b)(function(){return{from:{x:100}}}),2),l=u[0],f=u[1];return Object(r.useEffect)(function(){i&&!s&&f({config:{duration:i},from:pe(o,t),x:pe(o,t,1),reset:!1})},[i]),Object(r.useEffect)(function(){i&&!s&&f(c?{config:fe,from:{},x:pe(o,t),reset:!1}:{config:{duration:i},from:pe(o,t),x:pe(o,t,1),reset:!1})},[c]),Object(r.useEffect)(function(){var e=!i||s||c?fe:{duration:i},r=pe(o,t,1);f(0===t?{config:e,from:{x:100},x:r,reset:1!==n}:{config:e,x:r,reset:!1})},[o,t,n,s]),a.a.createElement(d.a.div,{className:"sled-progress-track",style:{position:"absolute",left:0,width:"100%",pointerEvents:"none",transform:l.x.interpolate(function(e){return"translateX(-".concat(e,"%)")})}})};function me(){var e=E(["\n  position: absolute;\n  z-index: 100;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  display: flex;\n  ","\n"]);return me=function(){return e},e}var be=p.a.div(me(),function(e){return e.styles}),ge=function(e){e.style;var t=O(V(),1)[0].viewCount;return a.a.createElement(be,{className:"sled-progress-controls"},w(Array(t||1)).map(function(e,t){return a.a.createElement(ae,{key:t,goto:t,style:"\n            flex-grow: 1;\n            height: 100%;\n            cursor: pointer; \n            background: none;\n            border: none;\n            outline: none;\n          "})}))};function ye(){var e=E(["\n  position: relative;\n  width: 100%;\n  display: flex;\n  align-items: center;\n  overflow: hidden;\n  height: 20px;\n\n  .sled-progress-rail {\n    background: black;\n    height: 4px;\n  }\n  .sled-progress-track {\n    background: red;\n    height: 4px;\n  }\n  .sled-progress-separator {\n    width: 4px;\n    background: white;\n  }\n  .sled-control {\n    :focus {\n      background: hsla(0, 0%, 100%, 0.5)\n    }\n  }\n}\n  ","\n"]);return ye=function(){return e},e}var ve=p.a.div(ye(),function(e){return e.styles}),he=function(e){var t=e.style;return a.a.createElement(ve,{className:"sled-progress",styles:t,role:"progressBar"},a.a.createElement(le,null),a.a.createElement(de,null),a.a.createElement(ie,null),a.a.createElement(ge,null))};he.propTypes={style:M.string},he.defaultProps={style:""};var Ee=function(e){var t=e.children,n=h(e,["children"]);return a.a.createElement(z,{reducer:D,initialState:v({currentIndex:0,prevIndex:void 0,pause:!1,viewCount:0,hasFocus:!1,mouseover:!1,width:0,height:0},n)},t)};Ee.propTypes={children:M.node},Ee.defaultProps={children:null};var Oe=n(78),we=n.n(Oe),je=n(79),xe=n.n(je),_e=n(80),Se=n.n(_e),Ne=n(81),Ce=n.n(Ne),Pe=n(82),Te=n.n(Pe),ke=[we.a,xe.a,Se.a,Ce.a,Te.a],Ie=function(e){var t=e.width,n=e.height,r=e.goto,o=e.autoPlay,c=e.rewind,i=e.pauseOnMouseOver,s=e.keyboard,u=e.dragging,l=e.dragDistance,f=e.mass,p=e.tension,d=e.friction,m=e.clamp;return a.a.createElement("div",{className:"sled-wrapper"},a.a.createElement(Ee,null,a.a.createElement(Q,{width:t,height:n,goto:r,autoPlay:o,rewind:c,pauseOnMouseOver:i,keyboard:s,dragging:u,dragDistance:l,config:{mass:f,tension:p,friction:d,clamp:m},style:"\n    // transition: all 1s;\n  "},ke.map(function(e){return a.a.createElement("div",{key:e,style:{position:"absolute",background:"#fff",top:0,bottom:0,left:0,right:0,backgroundImage:"url(".concat(e,")"),backgroundSize:"cover",backgroundPosition:"center"}})})),a.a.createElement(he,null),a.a.createElement("div",{className:"controls"},a.a.createElement(ae,{goto:"prev"}),a.a.createElement(ae,{goto:"next"})),a.a.createElement("div",{className:"controls"},ke.map(function(e,t){return a.a.createElement(ae,{key:e,goto:t})}))))},Re=n(39),Me=(n(166),function(){return a.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 50 50",enableBackground:"new 0 0 50 50"},a.a.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",fill:"#181616",d:"M25 10c-8.3 0-15 6.7-15 15 0 6.6 4.3 12.2 10.3 14.2.8.1 1-.3 1-.7v-2.6c-4.2.9-5.1-2-5.1-2-.7-1.7-1.7-2.2-1.7-2.2-1.4-.9.1-.9.1-.9 1.5.1 2.3 1.5 2.3 1.5 1.3 2.3 3.5 1.6 4.4 1.2.1-1 .5-1.6 1-2-3.3-.4-6.8-1.7-6.8-7.4 0-1.6.6-3 1.5-4-.2-.4-.7-1.9.1-4 0 0 1.3-.4 4.1 1.5 1.2-.3 2.5-.5 3.8-.5 1.3 0 2.6.2 3.8.5 2.9-1.9 4.1-1.5 4.1-1.5.8 2.1.3 3.6.1 4 1 1 1.5 2.4 1.5 4 0 5.8-3.5 7-6.8 7.4.5.5 1 1.4 1 2.8v4.1c0 .4.3.9 1 .7 6-2 10.2-7.6 10.2-14.2C40 16.7 33.3 10 25 10z"}))}),Ae=function(){var e=Object(r.useState)(0),t=Object(i.a)(e,2),n=t[0],o=t[1],c=Object(r.useState)(!0),s=Object(i.a)(c,2),l=s[0],p=s[1],d=Object(r.useState)(!0),m=Object(i.a)(d,2),b=m[0],g=m[1],y=Object(r.useState)(!0),v=Object(i.a)(y,2),h=v[0],E=v[1],O=Object(r.useState)(!0),w=Object(i.a)(O,2),j=w[0],x=w[1],_=Object(r.useState)(3e3),S=Object(i.a)(_,2),N=S[0],C=S[1],P=Object(r.useState)("25ow"),T=Object(i.a)(P,2),k=T[0],I=T[1],R=Object(r.useRef)(function(e){e.persist(),f()(function(){return C(e.target.value)},150)()}),M=Object(r.useState)("100%"),A=Object(i.a)(M,2),L=A[0],D=A[1],F=Object(r.useRef)(function(e){e.persist(),f()(function(){return D(e.target.value)},150)()}),z=Object(r.useState)("50ow"),V=Object(i.a)(z,2),$=V[0],U=V[1],G=Object(r.useRef)(function(e){e.persist(),f()(function(){return U(e.target.value)},150)()}),W=Object(r.useState)(!0),X=Object(i.a)(W,2),B=X[0],H=X[1],Y=Object(r.useState)(1),q=Object(i.a)(Y,2),J=q[0],K=q[1],Q=Object(r.useState)(170),Z=Object(i.a)(Q,2),ee=Z[0],te=Z[1],ne=Object(r.useState)(26),re=Object(i.a)(ne,2),ae=re[0],oe=re[1];return a.a.createElement("div",{className:"wrapper"},a.a.createElement("header",{className:"header"},a.a.createElement("h1",null,a.a.createElement("span",{role:"img","aria-label":"sled-emoji"},"\ud83d\udef7")," ","react-sled"),a.a.createElement("a",{href:"https://github.com/AndreasFaust/react-sled",className:"github"},a.a.createElement(Me,null))),a.a.createElement("div",{className:"content"},a.a.createElement(Ie,{width:L,height:$,goto:n,rewind:l,pauseOnMouseOver:b,keyboard:h,dragging:j,autoPlay:N,dragDistance:k,clamp:B,mass:J,tension:ee,friction:ae}),a.a.createElement("div",{className:"props"},a.a.createElement("div",{className:"column"},a.a.createElement("label",{className:"props__label"},a.a.createElement("input",{type:"text",size:7,className:"props__input",defaultValue:L,onChange:function(e){return F.current(e)}}),a.a.createElement("h2",{className:"props__h2"},"width")),a.a.createElement("label",{className:"props__label"},a.a.createElement("input",{type:"text",size:7,className:"props__input",defaultValue:$,onChange:function(e){return G.current(e)}}),a.a.createElement("h2",{className:"props__h2"},"height")),a.a.createElement("label",{className:"props__label"},a.a.createElement("input",{type:"text",size:7,className:"props__input",value:n,onChange:function(e){return o(e.target.value)}}),a.a.createElement("h2",{className:"props__h2"},"goto")),a.a.createElement("label",{className:"props__label"},a.a.createElement("input",{type:"text",size:7,className:"props__input",defaultValue:N,onChange:function(e){return R.current(e)}}),a.a.createElement("h2",{className:"props__h2"},"autoPlay")),a.a.createElement("label",{className:"props__label"},a.a.createElement("input",{type:"text",size:7,className:"props__input",defaultValue:k,onChange:function(e){return I(e.target.value)}}),a.a.createElement("h2",{className:"props__h2"},"dragDistance"))),a.a.createElement("div",{className:"column"},a.a.createElement("label",{className:"props__label"},a.a.createElement(u.a,{defaultChecked:l,icons:!1,onChange:function(){return p(function(e){return!e})}}),a.a.createElement("h2",{className:"props__h2"},"rewind")),a.a.createElement("label",{className:"props__label"},a.a.createElement(u.a,{defaultChecked:b,icons:!1,onChange:function(){return g(function(e){return!e})}}),a.a.createElement("h2",{className:"props__h2"},"pauseOnMouseOver")),a.a.createElement("label",{className:"props__label"},a.a.createElement(u.a,{defaultChecked:h,icons:!1,onChange:function(){return E(function(e){return!e})}}),a.a.createElement("h2",{className:"props__h2"},"keyboard")),a.a.createElement("label",{className:"props__label"},a.a.createElement(u.a,{defaultChecked:j,icons:!1,onChange:function(){return x(function(e){return!e})}}),a.a.createElement("h2",{className:"props__h2"},"dragging"))),a.a.createElement("div",{className:"column column--2"},a.a.createElement("label",{className:"props__label"},a.a.createElement("h2",{className:"props__h2"},"config")),a.a.createElement("label",{className:"props__label props__label--config"},a.a.createElement("h3",{className:"props__h3"},"mass: ",J),a.a.createElement(Re.a,{min:1,max:500,defaultValue:1,onChange:function(e){return K(e)}})),a.a.createElement("label",{className:"props__label props__label--config"},a.a.createElement("h3",{className:"props__h3"},"tension: ",ee),a.a.createElement(Re.a,{min:1,max:500,defaultValue:210,onChange:function(e){return te(e)}})),a.a.createElement("label",{className:"props__label props__label--config"},a.a.createElement("h3",{className:"props__h3"},"friction: ",ae),a.a.createElement(Re.a,{min:1,max:500,defaultValue:20,onChange:function(e){return oe(e)}})),a.a.createElement("label",{className:"props__label props__label--config"},a.a.createElement("h3",{className:"props__h3"},"clamp"),a.a.createElement(u.a,{defaultChecked:B,icons:!1,onChange:function(){return H(function(e){return!e})}}))))))};c.a.render(a.a.createElement(Ae,null),document.getElementById("root"))},78:function(e,t,n){e.exports=n.p+"static/media/image-1.81eaf259.jpg"},79:function(e,t,n){e.exports=n.p+"static/media/image-2.87b886e8.jpg"},80:function(e,t,n){e.exports=n.p+"static/media/image-3.b5ccc44e.jpg"},81:function(e,t,n){e.exports=n.p+"static/media/image-4.092afe31.jpg"},82:function(e,t,n){e.exports=n.p+"static/media/image-5.a81aee51.jpg"},87:function(e,t,n){e.exports=n(167)}},[[87,1,2]]]);
//# sourceMappingURL=main.c478ce69.chunk.js.map