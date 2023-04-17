import{xf as _,xg as k,r as u,ti as D,a8 as P,ms as L,xh as T,xi as z,xc as j,bf as R,xb as q,N as h,bS as b,th as U,si as V,sm as M,ko as B,so as X,xj as S,xk as K,xl as Q,xm as Y,xn as Z,xo as A,xp as H,xq as J,xr as N,xs as W,xt as G,xu as ee,xv as te,xw as ne,xx as F,kX as O,xy as re,sk as oe,xz as se,xA as ae,d as E,xB as ie,xC as ue,xD as ce,A as C,j5 as le,cz as fe,v as xe,sh as me,xE as pe,xF as $e,xG as de}from"./index-607cb647.js";import{_ as ge}from"./georeference-5ef1ffd2.js";async function Ie(e,t,o){const s=new _(Te(o)),n=(await k(s,t,o,!0)).model,x=n.lods.shift(),c=new Map,l=new Map;n.textures.forEach((g,y)=>c.set(y,ve(g))),n.materials.forEach((g,y)=>l.set(y,we(g,c)));const i=be(x);for(const g of i.parts)ye(i,g,l);const{position:p,normal:f,tangent:r,color:a,texCoord0:m}=i.vertexAttributes,d={position:p.typedBuffer,normal:u(f)?f.typedBuffer:null,tangent:u(r)?r.typedBuffer:null,uv:u(m)?m.typedBuffer:null,color:u(a)?a.typedBuffer:null},w=ge(d,e,o);return{transform:w.transform,components:i.components,spatialReference:e.spatialReference,vertexAttributes:new D({position:w.vertexAttributes.position,normal:w.vertexAttributes.normal,tangent:w.vertexAttributes.tangent,color:d.color,uv:d.uv})}}function Te(e){const t=e==null?void 0:e.resolveFile;return t?{busy:!1,request:async(o,s,n)=>{const x=t(o);return(await P(x,{responseType:s==="image"?"image":s==="binary"?"array-buffer":"json",signal:u(n)?n.signal:null})).data}}:null}function v(e,t){if(xe(e))return"-";const o=e.typedBuffer;return`${L(t,o.buffer,()=>t.size)}/${o.byteOffset}/${o.byteLength}`}function he(e){return u(e)?e.toString():"-"}function be(e){let t=0;const o={color:!1,tangent:!1,normal:!1,texCoord0:!1},s=new Map,n=new Map,x=[];for(const c of e.parts){const{attributes:{position:l,normal:i,color:p,tangent:f,texCoord0:r}}=c,a=`
      ${v(l,s)}/
      ${v(i,s)}/
      ${v(p,s)}/
      ${v(f,s)}/
      ${v(r,s)}/
      ${he(c.transform)}
    `;let m=!1;const d=L(n,a,()=>(m=!0,{start:t,length:l.count}));m&&(t+=l.count),i&&(o.normal=!0),p&&(o.color=!0),f&&(o.tangent=!0),r&&(o.texCoord0=!0),x.push({gltf:c,writeVertices:m,region:d})}return{vertexAttributes:{position:T(me,t),normal:o.normal?T(O,t):null,tangent:o.tangent?T(N,t):null,color:o.color?T(G,t):null,texCoord0:o.texCoord0?T(pe,t):null},parts:x,components:[]}}function ve(e){return new z({data:(j(e.data),e.data),wrap:Re(e.parameters.wrap)})}function we(e,t){const o=new R(Me(e.color,e.opacity)),s=e.emissiveFactor?new R(Be(e.emissiveFactor)):null;return new q({color:o,colorTexture:h(b(e.textureColor,n=>t.get(n))),normalTexture:h(b(e.textureNormal,n=>t.get(n))),emissiveColor:s,emissiveTexture:h(b(e.textureEmissive,n=>t.get(n))),occlusionTexture:h(b(e.textureOcclusion,n=>t.get(n))),alphaMode:Ce(e.alphaMode),alphaCutoff:e.alphaCutoff,doubleSided:e.doubleSided,metallic:e.metallicFactor,roughness:e.roughnessFactor,metallicRoughnessTexture:h(b(e.textureMetallicRoughness,n=>t.get(n))),colorTextureTransform:e.colorTextureTransform,normalTextureTransform:e.normalTextureTransform,occlusionTextureTransform:e.occlusionTextureTransform,emissiveTextureTransform:e.emissiveTextureTransform,metallicRoughnessTextureTransform:e.metallicRoughnessTextureTransform})}function ye(e,t,o){t.writeVertices&&Ae(e,t);const s=t.gltf,n=Ee(s.indices||s.attributes.position.count,s.primitiveType),x=t.region.start;if(x)for(let c=0;c<n.length;c++)n[c]+=x;e.components.push(new U({faces:n,material:o.get(s.material),trustSourceNormals:!0}))}function Ae(e,t){const{position:o,normal:s,tangent:n,color:x,texCoord0:c}=e.vertexAttributes,l=t.region.start,{attributes:i,transform:p}=t.gltf,f=i.position.count;if(V(o.slice(l,f),i.position,p),u(i.normal)&&u(s)){const r=M(B(),p),a=s.slice(l,f);X(a,i.normal,r),S(r)&&K(a,a)}else u(s)&&Q(s,0,0,1,{dstIndex:l,count:f});if(u(i.tangent)&&u(n)){const r=M(B(),p),a=n.slice(l,f);Y(a,i.tangent,r),S(r)&&Z(a,a)}else u(n)&&A(n,0,0,1,1,{dstIndex:l,count:f});if(u(i.texCoord0)&&u(c)?H(c.slice(l,f),i.texCoord0):u(c)&&J(c,0,0,{dstIndex:l,count:f}),u(i.color)&&u(x)){const r=i.color,a=x.slice(l,f);if(r.elementCount===4)r instanceof N?W(a,r,255):r instanceof G?ee(a,r):r instanceof te&&ne(a,r,8);else{A(a,255,255,255,255);const m=F.fromTypedArray(a.typedBuffer,a.typedBufferStride);r instanceof O?re(m,r,255):r instanceof F?oe(m,r):r instanceof se&&ae(m,r,8)}}else u(x)&&A(x.slice(l,f),255,255,255,255)}function Ee(e,t){switch(t){case E.TRIANGLES:return ce(e,$e);case E.TRIANGLE_STRIP:return ue(e);case E.TRIANGLE_FAN:return ie(e)}}function Ce(e){switch(e){case"OPAQUE":return"opaque";case"MASK":return"mask";case"BLEND":return"blend"}}function Re(e){return{horizontal:I(e.s),vertical:I(e.t)}}function I(e){switch(e){case C.CLAMP_TO_EDGE:return"clamp";case C.MIRRORED_REPEAT:return"mirror";case C.REPEAT:return"repeat"}}function $(e){return e**(1/de)*255}function Me(e,t){return le($(e[0]),$(e[1]),$(e[2]),t)}function Be(e){return fe($(e[0]),$(e[1]),$(e[2]))}export{Ie as loadGLTFMesh};