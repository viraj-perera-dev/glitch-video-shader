"use strict";Object.defineProperty(exports,Symbol.toStringTag,{value:"Module"});const i=require("react"),ne=require("three"),K=require("@react-three/fiber"),ae=require("@react-three/drei");function se(n){const m=Object.create(null,{[Symbol.toStringTag]:{value:"Module"}});if(n){for(const l in n)if(l!=="default"){const d=Object.getOwnPropertyDescriptor(n,l);Object.defineProperty(m,l,d.get?d:{enumerable:!0,get:()=>n[l]})}}return m.default=n,Object.freeze(m)}const k=se(ne);var F={exports:{}},M={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var X;function ue(){if(X)return M;X=1;var n=Symbol.for("react.transitional.element"),m=Symbol.for("react.fragment");function l(d,o,f){var R=null;if(f!==void 0&&(R=""+f),o.key!==void 0&&(R=""+o.key),"key"in o){f={};for(var E in o)E!=="key"&&(f[E]=o[E])}else f=o;return o=f.ref,{$$typeof:n,type:d,key:R,ref:o!==void 0?o:null,props:f}}return M.Fragment=m,M.jsx=l,M.jsxs=l,M}var N={};/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Z;function ce(){return Z||(Z=1,process.env.NODE_ENV!=="production"&&function(){function n(e){if(e==null)return null;if(typeof e=="function")return e.$$typeof===re?null:e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case P:return"Fragment";case Y:return"Profiler";case b:return"StrictMode";case p:return"Suspense";case j:return"SuspenseList";case ee:return"Activity"}if(typeof e=="object")switch(typeof e.tag=="number"&&console.error("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."),e.$$typeof){case _:return"Portal";case c:return(e.displayName||"Context")+".Provider";case u:return(e._context.displayName||"Context")+".Consumer";case S:var r=e.render;return e=e.displayName,e||(e=r.displayName||r.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case A:return r=e.displayName||null,r!==null?r:n(e.type)||"Memo";case C:r=e._payload,e=e._init;try{return n(e(r))}catch{}}return null}function m(e){return""+e}function l(e){try{m(e);var r=!1}catch{r=!0}if(r){r=console;var t=r.error,a=typeof Symbol=="function"&&Symbol.toStringTag&&e[Symbol.toStringTag]||e.constructor.name||"Object";return t.call(r,"The provided key is an unsupported type %s. This value must be coerced to a string before using it here.",a),m(e)}}function d(e){if(e===P)return"<>";if(typeof e=="object"&&e!==null&&e.$$typeof===C)return"<...>";try{var r=n(e);return r?"<"+r+">":"<...>"}catch{return"<...>"}}function o(){var e=U.A;return e===null?null:e.getOwner()}function f(){return Error("react-stack-top-frame")}function R(e){if(H.call(e,"key")){var r=Object.getOwnPropertyDescriptor(e,"key").get;if(r&&r.isReactWarning)return!1}return e.key!==void 0}function E(e,r){function t(){q||(q=!0,console.error("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://react.dev/link/special-props)",r))}t.isReactWarning=!0,Object.defineProperty(e,"key",{get:t,configurable:!0})}function O(){var e=n(this.type);return W[e]||(W[e]=!0,console.error("Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release.")),e=this.props.ref,e!==void 0?e:null}function w(e,r,t,a,h,v,V,L){return t=v.ref,e={$$typeof:y,type:e,key:r,props:v,_owner:h},(t!==void 0?t:null)!==null?Object.defineProperty(e,"ref",{enumerable:!1,get:O}):Object.defineProperty(e,"ref",{enumerable:!1,value:null}),e._store={},Object.defineProperty(e._store,"validated",{configurable:!1,enumerable:!1,writable:!0,value:0}),Object.defineProperty(e,"_debugInfo",{configurable:!1,enumerable:!1,writable:!0,value:null}),Object.defineProperty(e,"_debugStack",{configurable:!1,enumerable:!1,writable:!0,value:V}),Object.defineProperty(e,"_debugTask",{configurable:!1,enumerable:!1,writable:!0,value:L}),Object.freeze&&(Object.freeze(e.props),Object.freeze(e)),e}function D(e,r,t,a,h,v,V,L){var s=r.children;if(s!==void 0)if(a)if(te(s)){for(a=0;a<s.length;a++)T(s[a]);Object.freeze&&Object.freeze(s)}else console.error("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");else T(s);if(H.call(r,"key")){s=n(e);var x=Object.keys(r).filter(function(oe){return oe!=="key"});a=0<x.length?"{key: someKey, "+x.join(": ..., ")+": ...}":"{key: someKey}",B[s+a]||(x=0<x.length?"{"+x.join(": ..., ")+": ...}":"{}",console.error(`A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`,a,s,x,s),B[s+a]=!0)}if(s=null,t!==void 0&&(l(t),s=""+t),R(r)&&(l(r.key),s=""+r.key),"key"in r){t={};for(var $ in r)$!=="key"&&(t[$]=r[$])}else t=r;return s&&E(t,typeof e=="function"?e.displayName||e.name||"Unknown":e),w(e,s,v,h,o(),t,V,L)}function T(e){typeof e=="object"&&e!==null&&e.$$typeof===y&&e._store&&(e._store.validated=1)}var g=i,y=Symbol.for("react.transitional.element"),_=Symbol.for("react.portal"),P=Symbol.for("react.fragment"),b=Symbol.for("react.strict_mode"),Y=Symbol.for("react.profiler"),u=Symbol.for("react.consumer"),c=Symbol.for("react.context"),S=Symbol.for("react.forward_ref"),p=Symbol.for("react.suspense"),j=Symbol.for("react.suspense_list"),A=Symbol.for("react.memo"),C=Symbol.for("react.lazy"),ee=Symbol.for("react.activity"),re=Symbol.for("react.client.reference"),U=g.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,H=Object.prototype.hasOwnProperty,te=Array.isArray,I=console.createTask?console.createTask:function(){return null};g={"react-stack-bottom-frame":function(e){return e()}};var q,W={},z=g["react-stack-bottom-frame"].bind(g,f)(),J=I(d(f)),B={};N.Fragment=P,N.jsx=function(e,r,t,a,h){var v=1e4>U.recentlyCreatedOwnerStacks++;return D(e,r,t,!1,a,h,v?Error("react-stack-top-frame"):z,v?I(d(e)):J)},N.jsxs=function(e,r,t,a,h){var v=1e4>U.recentlyCreatedOwnerStacks++;return D(e,r,t,!0,a,h,v?Error("react-stack-top-frame"):z,v?I(d(e)):J)}}()),N}var Q;function ie(){return Q||(Q=1,process.env.NODE_ENV==="production"?F.exports=ue():F.exports=ce()),F.exports}var G=ie();const le=`
  uniform vec2 uMousePos;
  uniform float uHoverProgress;

  varying vec2 vUv;

  void main() {
    vUv = uv;

    vec3 pos = position;

    float dist = distance(uv, uMousePos);
    float radius = 0.3;
    float height = 0.4;
    float falloff = smoothstep(radius, 0.0, dist);

    pos.z += falloff * height * uHoverProgress;

    gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.0);
  }
`,fe=`
// Fragment Shader: glitch color shifts with mask near mouse
uniform sampler2D tMap;
uniform sampler2D tMouseComputation;
uniform float uHoverProgress;
uniform float uDisplacement;
uniform float uShift;
uniform vec2 uMousePos; // Mouse position in UV coords
varying vec2 vUv;

float circle(vec2 uv, vec2 center, float radius, float edge) {
  float dist = distance(uv, center);
  return smoothstep(radius, radius - edge, dist);
}

void main() {
  vec2 uv = vUv;
  vec4 displacement = texture2D(tMouseComputation, uv);

  // Mask to limit glitch effect near mouse
  float mask = circle(uv, uMousePos, 0.3, 0.1);

  // Displacement vector scaled by hover progress and mask
  vec2 disp = displacement.rg * uHoverProgress * mask * 0.03 * uDisplacement;

  // Sample red, green, blue channels with slight shifts for glitch
  vec4 colorR = texture2D(tMap, uv - disp - vec2(displacement.g * 0.01 * uShift, 0.0));
  vec4 colorG = texture2D(tMap, uv - disp);
  vec4 colorB = texture2D(tMap, uv - disp - vec2(displacement.r * 0.01 * uShift, 0.0));

  gl_FragColor = vec4(colorR.r, colorG.g, colorB.b, 1.0);
}
`,me=ae.shaderMaterial({tMap:null,tMouseComputation:null,uHoverProgress:0,uDisplacement:1,uShift:1,uMousePos:new k.Vector2(.5,.5)},le,fe);K.extend({GlitchMaterial:me});function de({videoSrc:n="/video3.mp4",noiseTextureSrc:m="/noise5.jpg",height:l=4,width:d=4}){const o=i.useRef(),f=i.useRef(),R=i.useRef(null),E=i.useRef(),[O,w]=i.useState(!1),[D,T]=i.useState(!1),g=i.useRef(0),y=i.useRef(Date.now()),_=i.useRef(null),P=i.useRef([.5,.5]),b=i.useRef([.5,.5]);i.useEffect(()=>{const u=document.createElement("video");u.src=n,u.crossOrigin="anonymous",u.loop=!0,u.muted=!0,u.playsInline=!0,u.autoplay=!0,u.play(),f.current=u;const c=new k.VideoTexture(u);c.minFilter=k.LinearFilter,c.magFilter=k.LinearFilter,c.format=k.RGBFormat,o.current&&(o.current.tMap=c),new k.TextureLoader().load(m,p=>{R.current=p,o.current&&(o.current.tMouseComputation=R.current)})},[n]);const Y=u=>{const c=E.current.geometry,S=c.parameters.width,p=c.parameters.height,j=(u.point.x+S/2)/S,A=(u.point.y+p/2)/p;P.current=[j,A];const C=Date.now();!O&&!D&&(T(!0),_.current=setTimeout(()=>{w(!0),T(!1)},200)),y.current=C};return K.useFrame((u,c)=>{if(!o.current)return;const S=Date.now();O&&S-y.current>300&&(w(!1),T(!1),_.current&&clearTimeout(_.current));const p=2;b.current[0]+=(P.current[0]-b.current[0])*c*p,b.current[1]+=(P.current[1]-b.current[1])*c*p,o.current.uMousePos=new k.Vector2(b.current[0],b.current[1]);const j=O?1:0,A=3;g.current+=(j-g.current)*c*A,o.current.uHoverProgress=g.current}),G.jsxs("mesh",{ref:E,onPointerEnter:()=>w(!0),onPointerLeave:()=>{w(!1),T(!1),_.current&&clearTimeout(_.current)},onPointerMove:Y,children:[G.jsx("planeGeometry",{args:[d,l]}),G.jsx("glitchMaterial",{ref:o,uDisplacement:1,uShift:1})]})}exports.GlitchVideo=de;
