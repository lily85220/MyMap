import{e as b,ft as p,a8 as g,ap as m,W as w}from"./index-607cb647.js";import{i as R,C as U,b as M}from"./Rasterizer-bfb1f353.js";import{c as D}from"./imageutils-2e20c195.js";async function _(a,r){const i=R(a);if(i instanceof Error)throw i;await i.createImages(),b(r);const{frames:t,width:n,height:s}=i,h=document.createElement("canvas");h.width=n,h.height=s;const o=h.getContext("2d",{willReadFrequently:!0}),u=[],c=[];for(const e of t){c.push(p(e.delay||100));const f=e.imageElement;e.blendOp===0?o.globalCompositeOperation="copy":o.globalCompositeOperation="source-over";const d=e.disposeOp===2?o.getImageData(e.left,e.top,e.width,e.height):void 0;o.drawImage(f,e.left,e.top);const l=o.getImageData(0,0,n,s);u.push(l),e.disposeOp===0||(e.disposeOp===1?o.clearRect(e.left,e.top,e.width,e.height):e.disposeOp===2&&o.putImageData(d,e.left,e.top))}return{frameDurations:c,getFrame:e=>u[e],width:n,height:s}}const C=[137,80,78,71,13,10,26,10];function I(a){const r=new Uint8Array(a);return!C.some((i,t)=>i!==r[t])}function O(a){if(!I(a))return!1;const r=new DataView(a),i=new Uint8Array(a);let t,n=8;do{const s=r.getUint32(n);if(t=String.fromCharCode.apply(String,Array.prototype.slice.call(i.subarray(n+4,n+8))),t==="acTL")return!0;n+=12+s}while(t!=="IEND"&&n<i.length);return!1}async function T(a,r){const i=U(a),t=M(i,!0),{width:n,height:s}=i.lsd,h=document.createElement("canvas");h.width=n,h.height=s;const o=h.getContext("2d",{willReadFrequently:!0}),u=[],c=[];for(const e of t){c.push(p(e.delay||100));const f=new ImageData(e.patch,e.dims.width,e.dims.height),d=D(f),l=e.disposalType===3?o.getImageData(e.dims.left,e.dims.top,e.dims.width,e.dims.height):void 0;o.drawImage(d,e.dims.left,e.dims.top);const y=o.getImageData(0,0,n,s);u.push(y),e.disposalType===1||(e.disposalType===2?o.clearRect(e.dims.left,e.dims.top,e.dims.width,e.dims.height):e.disposalType===3&&o.putImageData(l,e.dims.left,e.dims.top))}return{frameDurations:c,getFrame:e=>u[e],width:n,height:s}}const $=[71,73,70];function v(a){const r=new Uint8Array(a);return!$.some((i,t)=>i!==r[t])}function F(a){if(!v(a))return!1;const r=new DataView(a),i=r.getUint8(10);let t=13+(128&i?3*2**(1+(7&i)):0),n=0,s=!1;for(;!s;){switch(r.getUint8(t++)){case 33:if(!h())return!1;break;case 44:o();break;case 59:s=!0;break;default:return!1}if(n>1)return!0}function h(){switch(r.getUint8(t++)){case 249:u();break;case 1:c();break;case 254:e();break;case 255:f();break;default:return!1}return!0}function o(){n++,t+=8;const l=r.getUint8(t++);t+=128&l?3*2**(1+(7&l)):0,t++,d()}function u(){t++,t+=4,d()}function c(){n++,t++,t+=12,d()}function e(){d()}function f(){t++,t+=8,t+=3,d()}function d(){let l;for(;l=r.getUint8(t++);)t+=l}return!1}class B{constructor(){this._resourceMap=new Map,this._inFlightResourceMap=new Map,this.geometryEngine=null,this.geometryEnginePromise=null}destroy(){this._inFlightResourceMap.clear(),this._resourceMap.clear()}getResource(r){return this._resourceMap.get(r)??null}async fetchResource(r,i){const t=this._resourceMap.get(r);if(t)return{width:t.width,height:t.height};let n=this._inFlightResourceMap.get(r);return n?n.then(s=>({width:s.width,height:s.height})):(n=E(r,i),this._inFlightResourceMap.set(r,n),n.then(s=>(this._inFlightResourceMap.delete(r),this._resourceMap.set(r,s),{width:s.width,height:s.height}),()=>({width:0,height:0})))}deleteResource(r){this._inFlightResourceMap.delete(r),this._resourceMap.delete(r)}}async function k(a,r){const i=window.URL.createObjectURL(a);try{const{data:t}=await g(i,{...r,responseType:"image"});return t}catch(t){throw m(t)?t:new w("mapview-invalid-resource",`Could not fetch requested resource at ${i}`)}finally{window.URL.revokeObjectURL(i)}}async function E(a,r){const{arrayBuffer:i,mediaType:t}=await A(a,r),n=t==="image/png";return t==="image/gif"&&F(i)?T(i):n&&O(i)?_(i,r):k(new Blob([i],{type:t}),r)}async function A(a,r){let i;const t=";base64,";if(a.includes(t)){const n=a.indexOf(t),s=a.indexOf(t)+t.length,h=a.substring(s),o=atob(h),u=new Uint8Array(o.length);for(let c=0;c<o.length;c++)u[c]=o.charCodeAt(c);i={arrayBuffer:u.buffer,mediaType:a.substring(0,n).replace("data:","")}}else try{const n=await g(a,{responseType:"array-buffer",...r});i={arrayBuffer:n.data,mediaType:n.getHeader("Content-Type")}}catch(n){if(!m(n))throw new w("mapview-invalid-resource",`Could not fetch requested resource at ${a}`)}return i}export{B as o};
