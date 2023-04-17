import{ai as z,aj as V,r as k}from"./index-607cb647.js";import{o as g}from"./I3SNode-fb0c1aa4.js";var w,v;(function(e){e[e.None=0]="None",e[e.Int16=1]="Int16",e[e.Int32=2]="Int32"})(w||(w={})),function(e){e[e.Replace=0]="Replace",e[e.Outside=1]="Outside",e[e.Inside=2]="Inside",e[e.Finished=3]="Finished"}(v||(v={}));function G(){return T||(T=new Promise(e=>z(()=>import("./i3s-608d071b.js"),[]).then(t=>t.i).then(({default:t})=>{const r=t({locateFile:q,onRuntimeInitialized:()=>e(r)});delete r.then})).catch(e=>{throw e})),T}function q(e){return V(`esri/libs/i3s/${e}`)}let T;async function W(e){await h();const t=[e.geometryBuffer];return{result:D(e,t),transferList:t}}async function J(e){var p;await h();const t=[e.geometryBuffer],{geometryBuffer:r}=e,f=r.byteLength,i=o._malloc(f),u=new Uint8Array(o.HEAPU8.buffer,i,f);u.set(new Uint8Array(r));const s=o.dracoDecompressPointCloudData(i,u.byteLength);if(o._free(i),s.error.length>0)throw new Error(`i3s.wasm: ${s.error}`);const E=((p=s.featureIds)==null?void 0:p.length)>0?s.featureIds.slice():null,b=s.positions.slice();return E&&t.push(E.buffer),t.push(b.buffer),{result:{positions:b,featureIds:E},transferList:t}}async function K(e){await h(),N(e);const t={buffer:e.buffer};return{result:t,transferList:[t.buffer]}}async function Q(e){await h(),x(e)}async function X(e){await h(),o.setLegacySchema(e.context,e.jsonSchema)}function Z(e){$(e)}let _,o;function x(e){const t=e.modifications,r=o._malloc(8*t.length),f=new Float64Array(o.HEAPU8.buffer,r,t.length);for(let i=0;i<t.length;++i)f[i]=t[i];o.setModifications(e.context,r,t.length,e.isGeodetic),o._free(r)}function D(e,t){if(!o)return null;const{context:r,localOrigin:f,globalTrafo:i,mbs:u,obb:s,elevationOffset:E,geometryBuffer:b,geometryDescriptor:p,indexToVertexProjector:C,vertexToRenderProjector:Y}=e,L=o._malloc(b.byteLength),O=33,A=o._malloc(O*Float64Array.BYTES_PER_ELEMENT),F=new Uint8Array(o.HEAPU8.buffer,L,b.byteLength);F.set(new Uint8Array(b));const a=new Float64Array(o.HEAPU8.buffer,A,O);m(a,f);let c=a.byteOffset+3*a.BYTES_PER_ELEMENT,l=new Float64Array(a.buffer,c);m(l,i),c+=16*a.BYTES_PER_ELEMENT,l=new Float64Array(a.buffer,c),m(l,u),c+=4*a.BYTES_PER_ELEMENT,k(s)&&(l=new Float64Array(a.buffer,c),m(l,s.center),c+=3*a.BYTES_PER_ELEMENT,l=new Float64Array(a.buffer,c),m(l,s.halfSize),c+=3*a.BYTES_PER_ELEMENT,l=new Float64Array(a.buffer,c),m(l,s.quaternion));const M=p,j={isDraco:!1,isLegacy:!1,color:e.layouts.some(d=>d.some(y=>y.name==="color")),normal:e.needNormals&&e.layouts.some(d=>d.some(y=>y.name==="normalCompressed")),uv0:e.layouts.some(d=>d.some(y=>y.name==="uv0")),uvRegion:e.layouts.some(d=>d.some(y=>y.name==="uvRegion")),featureIndex:M.featureIndex},n=o.process(r,!!e.obb,L,F.byteLength,M,j,A,E,C,Y,e.normalReferenceFrame);if(o._free(A),o._free(L),n.error.length>0)throw new Error(`i3s.wasm: ${n.error}`);if(n.discarded)return null;const I=n.componentOffsets.length>0?n.componentOffsets.slice():null,P=n.featureIds.length>0?n.featureIds.slice():null,S=n.interleavedVertedData.slice().buffer,R=n.indicesType===w.Int16?new Uint16Array(n.indices.buffer,n.indices.byteOffset,n.indices.byteLength/2).slice():new Uint32Array(n.indices.buffer,n.indices.byteOffset,n.indices.byteLength/4).slice(),U=n.positions.slice(),B=n.positionIndicesType===w.Int16?new Uint16Array(n.positionIndices.buffer,n.positionIndices.byteOffset,n.positionIndices.byteLength/2).slice():new Uint32Array(n.positionIndices.buffer,n.positionIndices.byteOffset,n.positionIndices.byteLength/4).slice(),H={layout:e.layouts[0],interleavedVertexData:S,indices:R,hasColors:n.hasColors,hasModifications:n.hasModifications,positionData:{data:U,indices:B}};return P&&t.push(P.buffer),I&&t.push(I.buffer),t.push(S),t.push(R.buffer),t.push(U.buffer),t.push(B.buffer),{componentOffsets:I,featureIds:P,transformedGeometry:H,obb:n.obb}}function ee(e){return e===0?g.Unmodified:e===1?g.PotentiallyModified:e===2?g.Culled:g.Unknown}function N(e){const{context:t,buffer:r}=e,f=o._malloc(r.byteLength),i=r.byteLength/Float64Array.BYTES_PER_ELEMENT,u=new Float64Array(o.HEAPU8.buffer,f,i),s=new Float64Array(r);u.set(s),o.filterOBBs(t,f,i),s.set(u),o._free(f)}function $(e){o&&o.destroy(e)}function m(e,t){for(let r=0;r<t.length;++r)e[r]=t[r]}function h(){return o?Promise.resolve():(_||(_=G().then(e=>{o=e,_=null})),_)}const te={transform:D,destroy:$},re=Object.freeze(Object.defineProperty({__proto__:null,destroyContext:Z,dracoDecompressPointCloudData:J,filterObbsForModifications:K,filterObbsForModificationsSync:N,initialize:h,interpretObbModificationResults:ee,process:W,setLegacySchema:X,setModifications:Q,setModificationsSync:x,test:te},Symbol.toStringTag,{value:"Module"}));export{re as S,N as d,v as e,ee as m,h as p,x as y};
