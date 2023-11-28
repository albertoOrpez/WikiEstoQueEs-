/*! For license information please see 60345.bundle.js.LICENSE.txt */
"use strict";(self.webpackChunkexb_client=self.webpackChunkexb_client||[]).push([[60345],{53320:(t,e,n)=>{n.d(e,{F:()=>r});var i=n(77210);const o={width:12,height:6,strokeWidth:1},r=({floatingLayout:t,key:e,ref:n})=>{const{width:r,height:a,strokeWidth:s}=o,l=r/2,c="vertical"===t,f=`M0,0 H${r} L${r-l},${a} Q${l},${a} ${l},${a} Z`;return(0,i.h)("svg",{"aria-hidden":"true",class:"calcite-floating-ui-arrow",height:r,key:e,ref:n,viewBox:`0 0 ${r} ${r+(c?0:s)}`,width:r+(c?s:0)},s>0&&(0,i.h)("path",{class:"calcite-floating-ui-arrow__stroke",d:f,fill:"none","stroke-width":s+1}),(0,i.h)("path",{d:f,stroke:"none"}))}},52971:(t,e,n)=>{n.d(e,{S:()=>a,a:()=>y,b:()=>m,c:()=>g,d:()=>P,f:()=>i,i:()=>b,r:()=>r});var i="object"==typeof global&&global&&global.Object===Object&&global,o="object"==typeof self&&self&&self.Object===Object&&self,r=i||o||Function("return this")(),a=r.Symbol,s=Object.prototype,l=s.hasOwnProperty,c=s.toString,f=a?a.toStringTag:void 0,u=Object.prototype.toString,d="[object Null]",p="[object Undefined]",h=a?a.toStringTag:void 0;function m(t){return null==t?void 0===t?p:d:h&&h in Object(t)?function(t){var e=l.call(t,f),n=t[f];try{t[f]=void 0;var i=!0}catch(t){}var o=c.call(t);return i&&(e?t[f]=n:delete t[f]),o}(t):function(t){return u.call(t)}(t)}function g(t){return null!=t&&"object"==typeof t}var v="[object Symbol]";function y(t){return"symbol"==typeof t||g(t)&&m(t)==v}var w=/\s/,x=/^\s+/;function b(t){var e=typeof t;return null!=t&&("object"==e||"function"==e)}var E=NaN,T=/^[-+]0x[0-9a-f]+$/i,k=/^0b[01]+$/i,R=/^0o[0-7]+$/i,L=parseInt;function H(t){if("number"==typeof t)return t;if(y(t))return E;if(b(t)){var e="function"==typeof t.valueOf?t.valueOf():t;t=b(e)?e+"":e}if("string"!=typeof t)return 0===t?t:+t;var n;t=(n=t)?n.slice(0,function(t){for(var e=t.length;e--&&w.test(t.charAt(e)););return e}(n)+1).replace(x,""):n;var i=k.test(t);return i||R.test(t)?L(t.slice(2),i?2:8):T.test(t)?E:+t}var C=function(){return r.Date.now()},O="Expected a function",S=Math.max,D=Math.min;function P(t,e,n){var i,o,r,a,s,l,c=0,f=!1,u=!1,d=!0;if("function"!=typeof t)throw new TypeError(O);function p(e){var n=i,r=o;return i=o=void 0,c=e,a=t.apply(r,n)}function h(t){var n=t-l;return void 0===l||n>=e||n<0||u&&t-c>=r}function m(){var t=C();if(h(t))return g(t);s=setTimeout(m,function(t){var n=e-(t-l);return u?D(n,r-(t-c)):n}(t))}function g(t){return s=void 0,d&&i?p(t):(i=o=void 0,a)}function v(){var t=C(),n=h(t);if(i=arguments,o=this,l=t,n){if(void 0===s)return function(t){return c=t,s=setTimeout(m,e),f?p(t):a}(l);if(u)return clearTimeout(s),s=setTimeout(m,e),p(l)}return void 0===s&&(s=setTimeout(m,e)),a}return e=H(e)||0,b(n)&&(f=!!n.leading,r=(u="maxWait"in n)?S(H(n.maxWait)||0,e):r,d="trailing"in n?!!n.trailing:d),v.cancel=function(){void 0!==s&&clearTimeout(s),c=0,i=l=o=s=void 0},v.flush=function(){return void 0===s?a:g(C())},v}},14285:(t,e,n)=>{n.d(e,{F:()=>yt,a:()=>Ct,b:()=>Ot,c:()=>Ht,f:()=>xt,r:()=>Et});var i=n(77210),o=n(79145),r=n(52971);function a(t){return t.split("-")[1]}function s(t){return"y"===t?"height":"width"}function l(t){return t.split("-")[0]}function c(t){return["top","bottom"].includes(l(t))?"x":"y"}function f(t,e,n){let{reference:i,floating:o}=t;const r=i.x+i.width/2-o.width/2,f=i.y+i.height/2-o.height/2,u=c(e),d=s(u),p=i[d]/2-o[d]/2,h="x"===u;let m;switch(l(e)){case"top":m={x:r,y:i.y-o.height};break;case"bottom":m={x:r,y:i.y+i.height};break;case"right":m={x:i.x+i.width,y:f};break;case"left":m={x:i.x-o.width,y:f};break;default:m={x:i.x,y:i.y}}switch(a(e)){case"start":m[u]-=p*(n&&h?-1:1);break;case"end":m[u]+=p*(n&&h?-1:1)}return m}function u(t){return"number"!=typeof t?function(t){return{top:0,right:0,bottom:0,left:0,...t}}(t):{top:t,right:t,bottom:t,left:t}}function d(t){return{...t,top:t.y,left:t.x,right:t.x+t.width,bottom:t.y+t.height}}async function p(t,e){var n;void 0===e&&(e={});const{x:i,y:o,platform:r,rects:a,elements:s,strategy:l}=t,{boundary:c="clippingAncestors",rootBoundary:f="viewport",elementContext:p="floating",altBoundary:h=!1,padding:m=0}=e,g=u(m),v=s[h?"floating"===p?"reference":"floating":p],y=d(await r.getClippingRect({element:null==(n=await(null==r.isElement?void 0:r.isElement(v)))||n?v:v.contextElement||await(null==r.getDocumentElement?void 0:r.getDocumentElement(s.floating)),boundary:c,rootBoundary:f,strategy:l})),w="floating"===p?{...a.floating,x:i,y:o}:a.reference,x=await(null==r.getOffsetParent?void 0:r.getOffsetParent(s.floating)),b=await(null==r.isElement?void 0:r.isElement(x))&&await(null==r.getScale?void 0:r.getScale(x))||{x:1,y:1},E=d(r.convertOffsetParentRelativeRectToViewportRelativeRect?await r.convertOffsetParentRelativeRectToViewportRelativeRect({rect:w,offsetParent:x,strategy:l}):w);return{top:(y.top-E.top+g.top)/b.y,bottom:(E.bottom-y.bottom+g.bottom)/b.y,left:(y.left-E.left+g.left)/b.x,right:(E.right-y.right+g.right)/b.x}}const h=Math.min,m=Math.max;function g(t,e,n){return m(t,h(e,n))}const v=t=>({name:"arrow",options:t,async fn(e){const{element:n,padding:i=0}=t||{},{x:o,y:r,placement:l,rects:f,platform:d,elements:p}=e;if(null==n)return{};const h=u(i),m={x:o,y:r},v=c(l),y=s(v),w=await d.getDimensions(n),x="y"===v,b=x?"top":"left",E=x?"bottom":"right",T=x?"clientHeight":"clientWidth",k=f.reference[y]+f.reference[v]-m[v]-f.floating[y],R=m[v]-f.reference[v],L=await(null==d.getOffsetParent?void 0:d.getOffsetParent(n));let H=L?L[T]:0;H&&await(null==d.isElement?void 0:d.isElement(L))||(H=p.floating[T]||f.floating[y]);const C=k/2-R/2,O=h[b],S=H-w[y]-h[E],D=H/2-w[y]/2+C,P=g(O,D,S),A=null!=a(l)&&D!=P&&f.reference[y]/2-(D<O?h[b]:h[E])-w[y]/2<0;return{[v]:m[v]-(A?D<O?O-D:S-D:0),data:{[v]:P,centerOffset:D-P}}}}),y=["top","right","bottom","left"],w=y.reduce(((t,e)=>t.concat(e,e+"-start",e+"-end")),[]),x={left:"right",right:"left",bottom:"top",top:"bottom"};function b(t){return t.replace(/left|right|bottom|top/g,(t=>x[t]))}function E(t,e,n){void 0===n&&(n=!1);const i=a(t),o=c(t),r=s(o);let l="x"===o?i===(n?"end":"start")?"right":"left":"start"===i?"bottom":"top";return e.reference[r]>e.floating[r]&&(l=b(l)),{main:l,cross:b(l)}}const T={start:"end",end:"start"};function k(t){return t.replace(/start|end/g,(t=>T[t]))}const R=function(t){return void 0===t&&(t={}),{name:"autoPlacement",options:t,async fn(e){var n,i,o;const{rects:r,middlewareData:s,placement:c,platform:f,elements:u}=e,{crossAxis:d=!1,alignment:h,allowedPlacements:m=w,autoAlignment:g=!0,...v}=t,y=void 0!==h||m===w?function(t,e,n){return(t?[...n.filter((e=>a(e)===t)),...n.filter((e=>a(e)!==t))]:n.filter((t=>l(t)===t))).filter((n=>!t||a(n)===t||!!e&&k(n)!==n))}(h||null,g,m):m,x=await p(e,v),b=(null==(n=s.autoPlacement)?void 0:n.index)||0,T=y[b];if(null==T)return{};const{main:R,cross:L}=E(T,r,await(null==f.isRTL?void 0:f.isRTL(u.floating)));if(c!==T)return{reset:{placement:y[0]}};const H=[x[l(T)],x[R],x[L]],C=[...(null==(i=s.autoPlacement)?void 0:i.overflows)||[],{placement:T,overflows:H}],O=y[b+1];if(O)return{data:{index:b+1,overflows:C},reset:{placement:O}};const S=C.map((t=>{const e=a(t.placement);return[t.placement,e&&d?t.overflows.slice(0,2).reduce(((t,e)=>t+e),0):t.overflows[0],t.overflows]})).sort(((t,e)=>t[1]-e[1])),D=(null==(o=S.filter((t=>t[2].slice(0,a(t[0])?2:3).every((t=>t<=0))))[0])?void 0:o[0])||S[0][0];return D!==c?{data:{index:b+1,overflows:C},reset:{placement:D}}:{}}}},L=function(t){return void 0===t&&(t={}),{name:"flip",options:t,async fn(e){var n;const{placement:i,middlewareData:o,rects:r,initialPlacement:s,platform:c,elements:f}=e,{mainAxis:u=!0,crossAxis:d=!0,fallbackPlacements:h,fallbackStrategy:m="bestFit",fallbackAxisSideDirection:g="none",flipAlignment:v=!0,...y}=t,w=l(i),x=l(s)===s,T=await(null==c.isRTL?void 0:c.isRTL(f.floating)),R=h||(x||!v?[b(s)]:function(t){const e=b(t);return[k(t),e,k(e)]}(s));h||"none"===g||R.push(...function(t,e,n,i){const o=a(t);let r=function(t,e,n){const i=["left","right"],o=["right","left"],r=["top","bottom"],a=["bottom","top"];switch(t){case"top":case"bottom":return n?e?o:i:e?i:o;case"left":case"right":return e?r:a;default:return[]}}(l(t),"start"===n,i);return o&&(r=r.map((t=>t+"-"+o)),e&&(r=r.concat(r.map(k)))),r}(s,v,g,T));const L=[s,...R],H=await p(e,y),C=[];let O=(null==(n=o.flip)?void 0:n.overflows)||[];if(u&&C.push(H[w]),d){const{main:t,cross:e}=E(i,r,T);C.push(H[t],H[e])}if(O=[...O,{placement:i,overflows:C}],!C.every((t=>t<=0))){var S,D;const t=((null==(S=o.flip)?void 0:S.index)||0)+1,e=L[t];if(e)return{data:{index:t,overflows:O},reset:{placement:e}};let n=null==(D=O.filter((t=>t.overflows[0]<=0)).sort(((t,e)=>t.overflows[1]-e.overflows[1]))[0])?void 0:D.placement;if(!n)switch(m){case"bestFit":{var P;const t=null==(P=O.map((t=>[t.placement,t.overflows.filter((t=>t>0)).reduce(((t,e)=>t+e),0)])).sort(((t,e)=>t[1]-e[1]))[0])?void 0:P[0];t&&(n=t);break}case"initialPlacement":n=s}if(i!==n)return{reset:{placement:n}}}return{}}}};function H(t,e){return{top:t.top-e.height,right:t.right-e.width,bottom:t.bottom-e.height,left:t.left-e.width}}function C(t){return y.some((e=>t[e]>=0))}const O=function(t){return void 0===t&&(t={}),{name:"hide",options:t,async fn(e){const{strategy:n="referenceHidden",...i}=t,{rects:o}=e;switch(n){case"referenceHidden":{const t=H(await p(e,{...i,elementContext:"reference"}),o.reference);return{data:{referenceHiddenOffsets:t,referenceHidden:C(t)}}}case"escaped":{const t=H(await p(e,{...i,altBoundary:!0}),o.floating);return{data:{escapedOffsets:t,escaped:C(t)}}}default:return{}}}}},S=function(t){return void 0===t&&(t=0),{name:"offset",options:t,async fn(e){const{x:n,y:i}=e,o=await async function(t,e){const{placement:n,platform:i,elements:o}=t,r=await(null==i.isRTL?void 0:i.isRTL(o.floating)),s=l(n),f=a(n),u="x"===c(n),d=["left","top"].includes(s)?-1:1,p=r&&u?-1:1,h="function"==typeof e?e(t):e;let{mainAxis:m,crossAxis:g,alignmentAxis:v}="number"==typeof h?{mainAxis:h,crossAxis:0,alignmentAxis:null}:{mainAxis:0,crossAxis:0,alignmentAxis:null,...h};return f&&"number"==typeof v&&(g="end"===f?-1*v:v),u?{x:g*p,y:m*d}:{x:m*d,y:g*p}}(e,t);return{x:n+o.x,y:i+o.y,data:o}}}},D=function(t){return void 0===t&&(t={}),{name:"shift",options:t,async fn(e){const{x:n,y:i,placement:o}=e,{mainAxis:r=!0,crossAxis:a=!1,limiter:s={fn:t=>{let{x:e,y:n}=t;return{x:e,y:n}}},...f}=t,u={x:n,y:i},d=await p(e,f),h=c(l(o)),m="x"===h?"y":"x";let v=u[h],y=u[m];if(r){const t="y"===h?"bottom":"right";v=g(v+d["y"===h?"top":"left"],v,v-d[t])}if(a){const t="y"===m?"bottom":"right";y=g(y+d["y"===m?"top":"left"],y,y-d[t])}const w=s.fn({...e,[h]:v,[m]:y});return{...w,data:{x:w.x-n,y:w.y-i}}}}};function P(t){var e;return(null==(e=t.ownerDocument)?void 0:e.defaultView)||window}function A(t){return P(t).getComputedStyle(t)}function F(t){return t instanceof P(t).Node}function M(t){return F(t)?(t.nodeName||"").toLowerCase():""}function _(t){return t instanceof P(t).HTMLElement}function $(t){return t instanceof P(t).Element}function B(t){return"undefined"!=typeof ShadowRoot&&(t instanceof P(t).ShadowRoot||t instanceof ShadowRoot)}function j(t){const{overflow:e,overflowX:n,overflowY:i,display:o}=A(t);return/auto|scroll|overlay|hidden|clip/.test(e+i+n)&&!["inline","contents"].includes(o)}function z(t){return["table","td","th"].includes(M(t))}function W(t){const e=N(),n=A(t);return"none"!==n.transform||"none"!==n.perspective||!e&&!!n.backdropFilter&&"none"!==n.backdropFilter||!e&&!!n.filter&&"none"!==n.filter||["transform","perspective","filter"].some((t=>(n.willChange||"").includes(t)))||["paint","layout","strict","content"].some((t=>(n.contain||"").includes(t)))}function N(){return!("undefined"==typeof CSS||!CSS.supports)&&CSS.supports("-webkit-backdrop-filter","none")}function I(t){return["html","body","#document"].includes(M(t))}const V=Math.min,q=Math.max,U=Math.round;function X(t){const e=A(t);let n=parseFloat(e.width)||0,i=parseFloat(e.height)||0;const o=_(t),r=o?t.offsetWidth:n,a=o?t.offsetHeight:i,s=U(n)!==r||U(i)!==a;return s&&(n=r,i=a),{width:n,height:i,fallback:s}}function Y(t){return $(t)?t:t.contextElement}const Z={x:1,y:1};function G(t){const e=Y(t);if(!_(e))return Z;const n=e.getBoundingClientRect(),{width:i,height:o,fallback:r}=X(e);let a=(r?U(n.width):n.width)/i,s=(r?U(n.height):n.height)/o;return a&&Number.isFinite(a)||(a=1),s&&Number.isFinite(s)||(s=1),{x:a,y:s}}const Q={x:0,y:0};function J(t,e,n){var i,o;if(void 0===e&&(e=!0),!N())return Q;const r=t?P(t):window;return!n||e&&n!==r?Q:{x:(null==(i=r.visualViewport)?void 0:i.offsetLeft)||0,y:(null==(o=r.visualViewport)?void 0:o.offsetTop)||0}}function K(t,e,n,i){void 0===e&&(e=!1),void 0===n&&(n=!1);const o=t.getBoundingClientRect(),r=Y(t);let a=Z;e&&(i?$(i)&&(a=G(i)):a=G(t));const s=J(r,n,i);let l=(o.left+s.x)/a.x,c=(o.top+s.y)/a.y,f=o.width/a.x,u=o.height/a.y;if(r){const t=P(r),e=i&&$(i)?P(i):i;let n=t.frameElement;for(;n&&i&&e!==t;){const t=G(n),e=n.getBoundingClientRect(),i=getComputedStyle(n);e.x+=(n.clientLeft+parseFloat(i.paddingLeft))*t.x,e.y+=(n.clientTop+parseFloat(i.paddingTop))*t.y,l*=t.x,c*=t.y,f*=t.x,u*=t.y,l+=e.x,c+=e.y,n=P(n).frameElement}}return d({width:f,height:u,x:l,y:c})}function tt(t){return((F(t)?t.ownerDocument:t.document)||window.document).documentElement}function et(t){return $(t)?{scrollLeft:t.scrollLeft,scrollTop:t.scrollTop}:{scrollLeft:t.pageXOffset,scrollTop:t.pageYOffset}}function nt(t){return K(tt(t)).left+et(t).scrollLeft}function it(t){if("html"===M(t))return t;const e=t.assignedSlot||t.parentNode||B(t)&&t.host||tt(t);return B(e)?e.host:e}function ot(t){const e=it(t);return I(e)?e.ownerDocument.body:_(e)&&j(e)?e:ot(e)}function rt(t,e){var n;void 0===e&&(e=[]);const i=ot(t),o=i===(null==(n=t.ownerDocument)?void 0:n.body),r=P(i);return o?e.concat(r,r.visualViewport||[],j(i)?i:[]):e.concat(i,rt(i))}function at(t,e,n){let i;if("viewport"===e)i=function(t,e){const n=P(t),i=tt(t),o=n.visualViewport;let r=i.clientWidth,a=i.clientHeight,s=0,l=0;if(o){r=o.width,a=o.height;const t=N();(!t||t&&"fixed"===e)&&(s=o.offsetLeft,l=o.offsetTop)}return{width:r,height:a,x:s,y:l}}(t,n);else if("document"===e)i=function(t){const e=tt(t),n=et(t),i=t.ownerDocument.body,o=q(e.scrollWidth,e.clientWidth,i.scrollWidth,i.clientWidth),r=q(e.scrollHeight,e.clientHeight,i.scrollHeight,i.clientHeight);let a=-n.scrollLeft+nt(t);const s=-n.scrollTop;return"rtl"===A(i).direction&&(a+=q(e.clientWidth,i.clientWidth)-o),{width:o,height:r,x:a,y:s}}(tt(t));else if($(e))i=function(t,e){const n=K(t,!0,"fixed"===e),i=n.top+t.clientTop,o=n.left+t.clientLeft,r=_(t)?G(t):{x:1,y:1};return{width:t.clientWidth*r.x,height:t.clientHeight*r.y,x:o*r.x,y:i*r.y}}(e,n);else{const n=J(t);i={...e,x:e.x-n.x,y:e.y-n.y}}return d(i)}function st(t,e){const n=it(t);return!(n===e||!$(n)||I(n))&&("fixed"===A(n).position||st(n,e))}function lt(t,e){return _(t)&&"fixed"!==A(t).position?e?e(t):t.offsetParent:null}function ct(t,e){const n=P(t);if(!_(t))return n;let i=lt(t,e);for(;i&&z(i)&&"static"===A(i).position;)i=lt(i,e);return i&&("html"===M(i)||"body"===M(i)&&"static"===A(i).position&&!W(i))?n:i||function(t){let e=it(t);for(;_(e)&&!I(e);){if(W(e))return e;e=it(e)}return null}(t)||n}function ft(t,e,n){const i=_(e),o=tt(e),r="fixed"===n,a=K(t,!0,r,e);let s={scrollLeft:0,scrollTop:0};const l={x:0,y:0};if(i||!i&&!r)if(("body"!==M(e)||j(o))&&(s=et(e)),_(e)){const t=K(e,!0,r,e);l.x=t.x+e.clientLeft,l.y=t.y+e.clientTop}else o&&(l.x=nt(o));return{x:a.left+s.scrollLeft-l.x,y:a.top+s.scrollTop-l.y,width:a.width,height:a.height}}const ut={getClippingRect:function(t){let{element:e,boundary:n,rootBoundary:i,strategy:o}=t;const r=[..."clippingAncestors"===n?function(t,e){const n=e.get(t);if(n)return n;let i=rt(t).filter((t=>$(t)&&"body"!==M(t))),o=null;const r="fixed"===A(t).position;let a=r?it(t):t;for(;$(a)&&!I(a);){const e=A(a),n=W(a);n||"fixed"!==e.position||(o=null),(r?!n&&!o:!n&&"static"===e.position&&o&&["absolute","fixed"].includes(o.position)||j(a)&&!n&&st(t,a))?i=i.filter((t=>t!==a)):o=e,a=it(a)}return e.set(t,i),i}(e,this._c):[].concat(n),i],a=r[0],s=r.reduce(((t,n)=>{const i=at(e,n,o);return t.top=q(i.top,t.top),t.right=V(i.right,t.right),t.bottom=V(i.bottom,t.bottom),t.left=q(i.left,t.left),t}),at(e,a,o));return{width:s.right-s.left,height:s.bottom-s.top,x:s.left,y:s.top}},convertOffsetParentRelativeRectToViewportRelativeRect:function(t){let{rect:e,offsetParent:n,strategy:i}=t;const o=_(n),r=tt(n);if(n===r)return e;let a={scrollLeft:0,scrollTop:0},s={x:1,y:1};const l={x:0,y:0};if((o||!o&&"fixed"!==i)&&(("body"!==M(n)||j(r))&&(a=et(n)),_(n))){const t=K(n);s=G(n),l.x=t.x+n.clientLeft,l.y=t.y+n.clientTop}return{width:e.width*s.x,height:e.height*s.y,x:e.x*s.x-a.scrollLeft*s.x+l.x,y:e.y*s.y-a.scrollTop*s.y+l.y}},isElement:$,getDimensions:function(t){return X(t)},getOffsetParent:ct,getDocumentElement:tt,getScale:G,async getElementRects(t){let{reference:e,floating:n,strategy:i}=t;const o=this.getOffsetParent||ct,r=this.getDimensions;return{reference:ft(e,await o(n),i),floating:{x:0,y:0,...await r(n)}}},getClientRects:t=>Array.from(t.getClientRects()),isRTL:t=>"rtl"===A(t).direction};function dt(t,e,n,i){void 0===i&&(i={});const{ancestorScroll:o=!0,ancestorResize:r=!0,elementResize:a=!0,animationFrame:s=!1}=i,l=o||r?[...$(t)?rt(t):t.contextElement?rt(t.contextElement):[],...rt(e)]:[];l.forEach((t=>{const e=!$(t)&&t.toString().includes("V");!o||s&&!e||t.addEventListener("scroll",n,{passive:!0}),r&&t.addEventListener("resize",n)}));let c,f=null;a&&(f=new ResizeObserver((()=>{n()})),$(t)&&!s&&f.observe(t),$(t)||!t.contextElement||s||f.observe(t.contextElement),f.observe(e));let u=s?K(t):null;return s&&function e(){const i=K(t);!u||i.x===u.x&&i.y===u.y&&i.width===u.width&&i.height===u.height||n(),u=i,c=requestAnimationFrame(e)}(),n(),()=>{var t;l.forEach((t=>{o&&t.removeEventListener("scroll",n),r&&t.removeEventListener("resize",n)})),null==(t=f)||t.disconnect(),f=null,s&&cancelAnimationFrame(c)}}const pt=(t,e,n)=>{const i=new Map,o={platform:ut,...n},r={...o.platform,_c:i};return(async(t,e,n)=>{const{placement:i="bottom",strategy:o="absolute",middleware:r=[],platform:a}=n,s=r.filter(Boolean),l=await(null==a.isRTL?void 0:a.isRTL(e));let c=await a.getElementRects({reference:t,floating:e,strategy:o}),{x:u,y:d}=f(c,i,l),p=i,h={},m=0;for(let n=0;n<s.length;n++){const{name:r,fn:g}=s[n],{x:v,y,data:w,reset:x}=await g({x:u,y:d,initialPlacement:i,placement:p,strategy:o,middlewareData:h,rects:c,platform:a,elements:{reference:t,floating:e}});u=null!=v?v:u,d=null!=y?y:d,h={...h,[r]:{...h[r],...w}},x&&m<=50&&(m++,"object"==typeof x&&(x.placement&&(p=x.placement),x.rects&&(c=!0===x.rects?await a.getElementRects({reference:t,floating:e,strategy:o}):x.rects),({x:u,y:d}=f(c,p,l))),n=-1)}return{x:u,y:d,placement:p,strategy:o,middlewareData:h}})(t,e,{...o,platform:r})},ht={floatingUINonChromiumPositioningFix:!0,...globalThis.calciteComponentsConfig},mt=async function(){function t(){return navigator.userAgentData}if(i.Z5.isBrowser&&ht.floatingUINonChromiumPositioningFix&&(/firefox|safari/i.test(function(){const e=t();return e?.brands?e.brands.map((({brand:t,version:e})=>`${t}/${e}`)).join(" "):navigator.userAgent}())||function(){const e=t();return e?.brands?!!e.brands.find((({brand:t,version:e})=>("Google Chrome"===t||"Chromium"===t)&&Number(e)>=109)):!!navigator.userAgent.split(" ").find((t=>{const[e,n]=t.split("/");return"Chrome"===e&&parseInt(n)>=109}))}())){const{offsetParent:t}=await n.e(20035).then(n.bind(n,20035)),e=ut.getOffsetParent;ut.getOffsetParent=n=>e(n,t)}}(),gt="data-placement",vt=["top","bottom","right","left","top-start","top-end","bottom-start","bottom-end","right-start","right-end","left-start","left-end"],yt={animation:"calcite-floating-ui-anim",animationActive:"calcite-floating-ui-anim--active"};function wt({placement:t,flipDisabled:e,flipPlacements:n,offsetDistance:i,offsetSkidding:o,arrowEl:r,type:a}){const s=[D(),O()];if("menu"===a)return[...s,L({fallbackPlacements:n||["top-start","top","top-end","bottom-start","bottom","bottom-end"]})];if("popover"===a||"tooltip"===a){const a=[...s,S({mainAxis:"number"==typeof i?i:0,crossAxis:"number"==typeof o?o:0})];return"auto"===t||"auto-start"===t||"auto-end"===t?a.push(R({alignment:"auto-start"===t?"start":"auto-end"===t?"end":null})):e||a.push(L(n?{fallbackPlacements:n}:{})),r&&a.push(v({element:r})),a}return[]}function xt(t,e){const n=t.filter((t=>vt.includes(t)));return n.length!==t.length&&console.warn(`${e.tagName}: Invalid value found in: flipPlacements. Try any of these: ${vt.map((t=>`"${t}"`)).join(", ").trim()}`,{el:e}),n}function bt(t,e){const n=["left","right"];return"rtl"===(0,o.c)(t)&&n.reverse(),e.replace(/leading/gi,n[0]).replace(/trailing/gi,n[1])}async function Et(t,e,n=!1){if(t.open)return n?Tt(t,e):Rt(t,e)}const Tt=(0,r.d)(Rt,100,{leading:!0,maxWait:100}),kt={top:"",left:"rotate(-90deg)",bottom:"rotate(180deg)",right:"rotate(90deg)"};async function Rt(t,{referenceEl:e,floatingEl:n,overlayPositioning:i="absolute",placement:o,flipDisabled:r,flipPlacements:a,offsetDistance:s,offsetSkidding:l,arrowEl:c,type:f}){if(!e||!n)return null;await mt;const{x:u,y:d,placement:p,strategy:h,middlewareData:m}=await pt(e,n,{strategy:i,placement:"auto"===o||"auto-start"===o||"auto-end"===o?void 0:bt(n,o),middleware:wt({placement:o,flipDisabled:r,flipPlacements:a,offsetDistance:s,offsetSkidding:l,arrowEl:c,type:f})});if(c&&m.arrow){const{x:e,y:n}=m.arrow,i=p.split("-")[0],o=null!=e?"left":"top",r=kt[i],a={left:"",top:"",bottom:"",right:""};"floatingLayout"in t&&(t.floatingLayout="left"===i||"right"===i?"horizontal":"vertical"),Object.assign(c.style,{...a,[o]:`${"left"==o?e:n}px`,[i]:"100%",transform:r})}const g=m.hide?.referenceHidden,v=g?"hidden":null,y=v?"none":null;n.setAttribute(gt,p);const w=`translate(${Math.round(u)}px,${Math.round(d)}px)`;Object.assign(n.style,{visibility:v,pointerEvents:y,position:h,top:"0",left:"0",transform:w})}const Lt=new WeakMap;function Ht(t,e,n){if(!n||!e)return;Ct(t,e,n),Object.assign(n.style,{visibility:"hidden",pointerEvents:"none",position:t.overlayPositioning,top:"0",left:"0"});const o=i.Z5.isBrowser?dt:(t,e,n)=>(n(),()=>{});Lt.set(t,o(e,n,(()=>t.reposition())))}function Ct(t,e,n){if(!n||!e)return;const i=Lt.get(t);i&&i(),Lt.delete(t)}const Ot=Math.ceil(Math.hypot(4,4))},18811:(t,e,n)=>{n.d(e,{c:()=>a,d:()=>s});const i=new WeakMap;function o(t){t.propertyName===this.openTransitionProp&&t.target===this.transitionEl&&(this.open?this.onBeforeOpen():this.onBeforeClose())}function r(t){t.propertyName===this.openTransitionProp&&t.target===this.transitionEl&&(this.open?this.onOpen():this.onClose())}function a(t){if(s(t),t.transitionEl){const e=o.bind(t),n=r.bind(t);i.set(t,[t.transitionEl,e,n]),t.transitionEl.addEventListener("transitionstart",e),t.transitionEl.addEventListener("transitionend",n)}}function s(t){if(!i.has(t))return;const[e,n,o]=i.get(t);e.removeEventListener("transitionstart",n),e.removeEventListener("transitionend",o),i.delete(t)}},60345:(t,e,n)=>{n.d(e,{T:()=>d,d:()=>p});var i=n(77210),o=n(79145),r=n(14285),a=n(96472),s=n(18811),l=n(53320);const c="aria-describedby";function f(t){const{referenceElement:e}=t;return("string"==typeof e?(0,o.u)(t,{id:e}):e)||null}const u=new class{constructor(){this.registeredElements=new WeakMap,this.registeredShadowRootCounts=new WeakMap,this.hoverTimeout=null,this.hoveredTooltip=null,this.clickedTooltip=null,this.activeTooltip=null,this.registeredElementCount=0,this.queryTooltip=t=>{const{registeredElements:e}=this,n=t.find((t=>e.has(t)));return e.get(n)},this.keyDownHandler=t=>{if("Escape"===t.key&&!t.defaultPrevented){const{activeTooltip:e}=this;if(e?.open){this.clearHoverTimeout(),this.closeExistingTooltip();const n=f(e);n instanceof Element&&n.contains(t.target)&&t.preventDefault()}}},this.pointerMoveHandler=t=>{const e=t.composedPath(),{activeTooltip:n}=this;if(n?.open&&e.includes(n))return void this.clearHoverTimeout();const i=this.queryTooltip(e);this.hoveredTooltip=i,this.isClosableClickedTooltip(i)||(this.clickedTooltip=null,i?this.toggleHoveredTooltip(i,!0):n&&this.toggleHoveredTooltip(n,!1))},this.pointerDownHandler=t=>{if(!(0,o.i)(t))return;const e=this.queryTooltip(t.composedPath());this.clickedTooltip=e,e?.closeOnClick&&(this.toggleTooltip(e,!1),this.clearHoverTimeout())},this.focusInHandler=t=>{this.queryFocusedTooltip(t,!0)},this.focusOutHandler=t=>{this.queryFocusedTooltip(t,!1)},this.toggleHoveredTooltip=(t,e)=>{this.hoverTimeout=window.setTimeout((()=>{null!==this.hoverTimeout&&(this.closeExistingTooltip(),t===this.hoveredTooltip&&this.toggleTooltip(t,e))}),500)}}registerElement(t,e){this.registeredElementCount++,this.registeredElements.set(t,e);const n=this.getReferenceElShadowRootNode(t);n&&this.registerShadowRoot(n),1===this.registeredElementCount&&this.addListeners()}unregisterElement(t){const e=this.getReferenceElShadowRootNode(t);e&&this.unregisterShadowRoot(e),this.registeredElements.delete(t)&&this.registeredElementCount--,0===this.registeredElementCount&&this.removeListeners()}addShadowListeners(t){t.addEventListener("focusin",this.focusInHandler,{capture:!0}),t.addEventListener("focusout",this.focusOutHandler,{capture:!0})}removeShadowListeners(t){t.removeEventListener("focusin",this.focusInHandler,{capture:!0}),t.removeEventListener("focusout",this.focusOutHandler,{capture:!0})}addListeners(){document.addEventListener("keydown",this.keyDownHandler,{capture:!0}),document.addEventListener("pointermove",this.pointerMoveHandler,{capture:!0}),document.addEventListener("pointerdown",this.pointerDownHandler,{capture:!0}),document.addEventListener("focusin",this.focusInHandler,{capture:!0}),document.addEventListener("focusout",this.focusOutHandler,{capture:!0})}removeListeners(){document.removeEventListener("keydown",this.keyDownHandler,{capture:!0}),document.removeEventListener("pointermove",this.pointerMoveHandler,{capture:!0}),document.removeEventListener("pointerdown",this.pointerDownHandler,{capture:!0}),document.removeEventListener("focusin",this.focusInHandler,{capture:!0}),document.removeEventListener("focusout",this.focusOutHandler,{capture:!0})}clearHoverTimeout(){window.clearTimeout(this.hoverTimeout),this.hoverTimeout=null}closeExistingTooltip(){const{activeTooltip:t}=this;t?.open&&this.toggleTooltip(t,!1)}toggleFocusedTooltip(t,e){this.closeExistingTooltip(),e&&this.clearHoverTimeout(),this.toggleTooltip(t,e)}toggleTooltip(t,e){t.open=e,e&&(this.activeTooltip=t)}queryFocusedTooltip(t,e){const n=this.queryTooltip(t.composedPath());n&&!this.isClosableClickedTooltip(n)&&this.toggleFocusedTooltip(n,e)}isClosableClickedTooltip(t){return t?.closeOnClick&&t===this.clickedTooltip}registerShadowRoot(t){const{registeredShadowRootCounts:e}=this,n=(e.get(t)??0)+1;1===n&&this.addShadowListeners(t),e.set(t,n)}unregisterShadowRoot(t){const{registeredShadowRootCounts:e}=this,n=e.get(t)-1;0===n&&this.removeShadowListeners(t),e.set(t,n)}getReferenceElShadowRootNode(t){return t instanceof Element?(0,o.v)(t):null}},d=(0,i.GH)(class extends i.mv{constructor(){super(),this.__registerHost(),this.__attachShadow(),this.calciteTooltipBeforeClose=(0,i.yM)(this,"calciteTooltipBeforeClose",6),this.calciteTooltipClose=(0,i.yM)(this,"calciteTooltipClose",6),this.calciteTooltipBeforeOpen=(0,i.yM)(this,"calciteTooltipBeforeOpen",6),this.calciteTooltipOpen=(0,i.yM)(this,"calciteTooltipOpen",6),this.guid=`calcite-tooltip-${(0,a.g)()}`,this.hasLoaded=!1,this.openTransitionProp="opacity",this.setTransitionEl=t=>{this.transitionEl=t,(0,s.c)(this)},this.setUpReferenceElement=(t=!0)=>{this.removeReferences(),this.effectiveReferenceElement=f(this.el),(0,r.c)(this,this.effectiveReferenceElement,this.el);const{el:e,referenceElement:n,effectiveReferenceElement:i}=this;t&&n&&!i&&console.warn(`${e.tagName}: reference-element id "${n}" was not found.`,{el:e}),this.addReferences()},this.getId=()=>this.el.id||this.guid,this.addReferences=()=>{const{effectiveReferenceElement:t}=this;if(!t)return;const e=this.getId();"setAttribute"in t&&t.setAttribute(c,e),u.registerElement(t,this.el)},this.removeReferences=()=>{const{effectiveReferenceElement:t}=this;t&&("removeAttribute"in t&&t.removeAttribute(c),u.unregisterElement(t))},this.closeOnClick=!1,this.label=void 0,this.offsetDistance=r.b,this.offsetSkidding=0,this.open=!1,this.overlayPositioning="absolute",this.placement="auto",this.referenceElement=void 0,this.effectiveReferenceElement=void 0,this.floatingLayout="vertical"}offsetDistanceOffsetHandler(){this.reposition(!0)}offsetSkiddingHandler(){this.reposition(!0)}openHandler(t){t&&this.reposition(!0)}overlayPositioningHandler(){this.reposition(!0)}placementHandler(){this.reposition(!0)}referenceElementHandler(){this.setUpReferenceElement()}connectedCallback(){(0,s.c)(this),this.setUpReferenceElement(this.hasLoaded)}componentDidLoad(){this.referenceElement&&!this.effectiveReferenceElement&&this.setUpReferenceElement(),this.reposition(!0),this.hasLoaded=!0}disconnectedCallback(){this.removeReferences(),(0,r.a)(this,this.effectiveReferenceElement,this.el),(0,s.d)(this)}async reposition(t=!1){const{el:e,effectiveReferenceElement:n,placement:i,overlayPositioning:o,offsetDistance:a,offsetSkidding:s,arrowEl:l}=this;return(0,r.r)(this,{floatingEl:e,referenceEl:n,overlayPositioning:o,placement:i,offsetDistance:a,offsetSkidding:s,arrowEl:l,type:"tooltip"},t)}onBeforeOpen(){this.calciteTooltipBeforeOpen.emit()}onOpen(){this.calciteTooltipOpen.emit()}onBeforeClose(){this.calciteTooltipBeforeClose.emit()}onClose(){this.calciteTooltipClose.emit()}render(){const{effectiveReferenceElement:t,label:e,open:n,floatingLayout:a}=this,s=t&&n,c=!s;return(0,i.h)(i.AA,{"aria-hidden":(0,o.t)(c),"aria-label":e,"aria-live":"polite","calcite-hydrated-hidden":c,id:this.getId(),role:"tooltip"},(0,i.h)("div",{class:{[r.F.animation]:!0,[r.F.animationActive]:s},ref:this.setTransitionEl},(0,i.h)(l.F,{floatingLayout:a,ref:t=>this.arrowEl=t}),(0,i.h)("div",{class:"container"},(0,i.h)("slot",null))))}get el(){return this}static get watchers(){return{offsetDistance:["offsetDistanceOffsetHandler"],offsetSkidding:["offsetSkiddingHandler"],open:["openHandler"],overlayPositioning:["overlayPositioningHandler"],placement:["placementHandler"],referenceElement:["referenceElementHandler"]}}static get style(){return"@keyframes in{0%{opacity:0}100%{opacity:1}}@keyframes in-down{0%{opacity:0;transform:translate3D(0, -5px, 0)}100%{opacity:1;transform:translate3D(0, 0, 0)}}@keyframes in-up{0%{opacity:0;transform:translate3D(0, 5px, 0)}100%{opacity:1;transform:translate3D(0, 0, 0)}}@keyframes in-right{0%{opacity:0;transform:translate3D(-5px, 0, 0)}100%{opacity:1;transform:translate3D(0, 0, 0)}}@keyframes in-left{0%{opacity:0;transform:translate3D(5px, 0, 0)}100%{opacity:1;transform:translate3D(0, 0, 0)}}@keyframes in-scale{0%{opacity:0;transform:scale3D(0.95, 0.95, 1)}100%{opacity:1;transform:scale3D(1, 1, 1)}}:root{--calcite-animation-timing:calc(150ms * var(--calcite-internal-duration-factor));--calcite-internal-duration-factor:var(--calcite-duration-factor, 1);--calcite-internal-animation-timing-fast:calc(100ms * var(--calcite-internal-duration-factor));--calcite-internal-animation-timing-medium:calc(200ms * var(--calcite-internal-duration-factor));--calcite-internal-animation-timing-slow:calc(300ms * var(--calcite-internal-duration-factor))}.calcite-animate{opacity:0;animation-fill-mode:both;animation-duration:var(--calcite-animation-timing)}.calcite-animate__in{animation-name:in}.calcite-animate__in-down{animation-name:in-down}.calcite-animate__in-up{animation-name:in-up}.calcite-animate__in-right{animation-name:in-right}.calcite-animate__in-left{animation-name:in-left}.calcite-animate__in-scale{animation-name:in-scale}@media (prefers-reduced-motion: reduce){:root{--calcite-internal-duration-factor:0.01}}:root{--calcite-floating-ui-transition:var(--calcite-animation-timing);--calcite-floating-ui-z-index:var(--calcite-app-z-index-dropdown)}:host([hidden]){display:none}:host{--calcite-floating-ui-z-index:var(--calcite-tooltip-z-index, 901);display:block;position:absolute;z-index:var(--calcite-floating-ui-z-index)}.calcite-floating-ui-anim{position:relative;transition:var(--calcite-floating-ui-transition);transition-property:transform, visibility, opacity;opacity:0;box-shadow:0 0 16px 0 rgba(0, 0, 0, 0.16);z-index:var(--calcite-app-z-index);border-radius:0.25rem}:host([data-placement^=bottom]) .calcite-floating-ui-anim{transform:translateY(-5px)}:host([data-placement^=top]) .calcite-floating-ui-anim{transform:translateY(5px)}:host([data-placement^=left]) .calcite-floating-ui-anim{transform:translateX(5px)}:host([data-placement^=right]) .calcite-floating-ui-anim{transform:translateX(-5px)}:host([data-placement]) .calcite-floating-ui-anim--active{opacity:1;transform:translate(0)}:host([calcite-hydrated-hidden]){visibility:hidden !important;pointer-events:none}.calcite-floating-ui-arrow{pointer-events:none;position:absolute;z-index:calc(var(--calcite-app-z-index) * -1);fill:var(--calcite-ui-foreground-1)}.calcite-floating-ui-arrow__stroke{stroke:var(--calcite-ui-border-3)}.container{position:relative;overflow:hidden;border-radius:0.25rem;padding-block:0.75rem;padding-inline:1rem;font-size:var(--calcite-font-size--2);line-height:1.375;font-weight:var(--calcite-font-weight-medium);color:var(--calcite-ui-text-1);max-inline-size:20rem;max-block-size:20rem;text-align:start}.calcite-floating-ui-anim{border-radius:0.25rem;border-width:1px;border-style:solid;border-color:var(--calcite-ui-border-3);background-color:var(--calcite-ui-foreground-1)}.arrow::before{outline:1px solid var(--calcite-ui-border-3)}"}},[1,"calcite-tooltip",{closeOnClick:[516,"close-on-click"],label:[1],offsetDistance:[514,"offset-distance"],offsetSkidding:[514,"offset-skidding"],open:[516],overlayPositioning:[513,"overlay-positioning"],placement:[513],referenceElement:[1,"reference-element"],effectiveReferenceElement:[32],floatingLayout:[32],reposition:[64]}]);function p(){"undefined"!=typeof customElements&&["calcite-tooltip"].forEach((t=>{"calcite-tooltip"===t&&(customElements.get(t)||customElements.define(t,d))}))}p()}}]);