import{t$ as h,W as i,r as c,a8 as d,u0 as b,u1 as w,gh as v,ai as z,bV as g,u2 as j}from"./index-607cb647.js";let s=y();function y(){return new h(50)}function I(){s=y()}function P(e,r){if(e.type==="icon")return l(e,r);if(e.type==="object")return f(e,r);throw new i("symbol3d:unsupported-symbol-layer","computeLayerSize only works with symbol layers of type Icon and Object")}async function $(e,r){if(e.type==="icon")return L(e,r);if(e.type==="object")return _(e,r);throw new i("symbol3d:unsupported-symbol-layer","computeLayerSize only works with symbol layers of type Icon and Object")}async function l(e,r){var t,n;if((t=e.resource)!=null&&t.href)return S(e.resource.href).then(o=>[o.width,o.height]);if((n=e.resource)!=null&&n.primitive)return c(r)?[r,r]:[256,256];throw new i("symbol3d:invalid-symbol-layer","symbol layers of type Icon must have either an href or a primitive resource")}function L(e,r){return l(e,r).then(t=>{if(e.size==null)return t;const n=t[0]/t[1];return n>1?[e.size,e.size/n]:[e.size*n,e.size]})}function S(e){return d(e,{responseType:"image"}).then(r=>r.data)}function f(e,r){return x(e,r).then(t=>b(t))}async function _(e,r){const t=await f(e,r);return w(t,e)}async function x(e,r){var n;if(!e.isPrimitive){const o=v((n=e.resource)==null?void 0:n.href),u=s.get(o);if(u!==void 0)return u;const m=await z(()=>import("./index-607cb647.js").then(p=>p.xS),["assets/index-607cb647.js","assets/index-ec7d25bd.css"]),a=await m.fetch(o,{disableTextures:!0});return s.put(o,a.referenceBoundingBox),a.referenceBoundingBox}let t=null;if(e.resource&&e.resource.primitive&&(t=g(j(e.resource.primitive)),c(r)))for(let o=0;o<t.length;o++)t[o]*=r;return t?Promise.resolve(t):Promise.reject(new i("symbol:invalid-resource","The symbol does not have a valid resource"))}export{I as clearBoundingBoxCache,l as computeIconLayerResourceSize,P as computeLayerResourceSize,$ as computeLayerSize,f as computeObjectLayerResourceSize};