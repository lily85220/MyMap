import{o1 as ee,iV as te,cD as G,n as z,dY as K,o2 as pe,o3 as de,o4 as ye,aV as me,a8 as be,o5 as ge,o6 as Se,Q as we,o7 as Me,r as M,v as C,W as g,o8 as Te,hM as Ee,aN as ne,et as ve,bS as P,jL as I,o9 as j,cb as x,k as E,oa as ae,bn as $,ob as Ie,oc as re,od as oe,oe as xe,of as se,og as Re,dD as ie,bB as B,bD as Ce,oh as Ne,nW as V,nV as qe,l2 as ke,ko as De,k$ as We,ib as Q,cm as Z,kd as v,gB as A,f$ as ze}from"./index-607cb647.js";import{I as $e}from"./I3SBinaryReader-5477221d.js";function Ue(e,t,n,a){const r=Oe(e,t,n),o=G();return ee(n,r,o,a),o}const ce=1,H=5-ce;function Oe(e,t,n){const a=z(),r=e[3],o=2**(Math.ceil(Math.log(r)*Math.LOG2E/H)*H+ce);if(n.isGeographic){const c=o/te(n).radius*180/Math.PI,u=Math.round(e[1]/c),p=Math.max(-90,Math.min(90,u*c)),h=c/Math.cos((Math.abs(p)-c/2)/180*Math.PI),y=Math.round(e[0]/h)*h;a[0]=y,a[1]=p}else{const c=Math.round(e[0]/o),u=Math.round(e[1]/o);a[0]=c*o,a[1]=u*o}const s=e[2]+t,i=Math.round(s/o);return a[2]=i*o,a}function le(e){return e?parseInt(e.substring(e.lastIndexOf("/")+1,e.length),10):void 0}function ft(e){var t;if(we("disable-feature:i3s-draco")||!e)return!1;for(const n of e)for(const a of n.geometryBuffers)if(((t=a.compressedAttributes)==null?void 0:t.encoding)==="draco")return!0;return!1}function ht(e,t,n,a){n.traverse(t,r=>{const o=r.mbs;return(o!=null&&Ae(e,o))!==T.OUTSIDE&&(a(r),!0)})}function pt(e,t,n){let a=0,r=0;for(let o=0;o<t.length&&a<e.length;o++)e[a]===t[o]&&(n(o)&&(e[r]=e[a],r++),a++);e.length=r}function dt(e,t,n){let a=0,r=0;for(;a<n.length;)Me(e,n[a])>=0===t&&(n[r]=n[a],r++),a++;n.length=r}const R=K();function yt(e,t){if(t.rotationScale[1]===0&&t.rotationScale[2]===0&&t.rotationScale[3]===0&&t.rotationScale[5]===0&&t.rotationScale[6]===0&&t.rotationScale[7]===0)return R[0]=(e[0]-t.position[0])/t.rotationScale[0],R[1]=(e[1]-t.position[1])/t.rotationScale[4],R[2]=(e[2]-t.position[0])/t.rotationScale[0],R[3]=(e[3]-t.position[1])/t.rotationScale[4],R}var T;function Ae(e,t){const n=t[0],a=t[1],r=t[3],o=e[0]-n,s=n-e[2],i=e[1]-a,c=a-e[3],u=Math.max(o,s,0),p=Math.max(i,c,0),h=u*u+p*p;return h>r*r?T.OUTSIDE:h>0?T.INTERSECTS_CENTER_OUTSIDE:-Math.max(o,s,i,c)>r?T.INSIDE:T.INTERSECTS_CENTER_INSIDE}function Fe(e,t,n){const a=[],r=n&&n.missingFields,o=n&&n.originalFields;for(const s of e){const i=s.toLowerCase();let c=!1;for(const u of t)if(i===u.name.toLowerCase()){a.push(u.name),c=!0,o&&o.push(s);break}!c&&r&&r.push(s)}return a}async function mt(e,t,n,a,r){if(t.length===0)return[];const o=e.attributeStorageInfo;if(M(e.associatedLayer))try{return await _e(e.associatedLayer,t,n,a)}catch(s){if(e.associatedLayer.loaded)throw s}if(o){const s=Le(t,n,r);if(C(s))throw new g("scenelayer:features-not-loaded","Tried to query attributes for unloaded features");const i=e.parsedUrl.path;return(await Promise.all(s.map(c=>Ge(i,o,c.node,c.indices,a).then(u=>{for(let p=0;p<c.graphics.length;p++){const h=c.graphics[p],y=u[p];if(h.attributes)for(const f in h.attributes)f in y||(y[f]=h.attributes[f]);h.attributes=y}return c.graphics})))).flat()}throw new g("scenelayer:no-attribute-source","This scene layer does not have a source for attributes available")}function Le(e,t,n){const a=new Map,r=[],o=n();for(const s of e){const i=s.attributes[t];for(let c=0;c<o.length;c++){const u=o[c],p=u.featureIds.indexOf(i);if(p>=0){let h=a.get(u.node);h||(h={node:u.node,indices:[],graphics:[]},r.push(h),a.set(u.node,h)),h.indices.push(p),h.graphics.push(s);for(let y=c;y>0;y--)o[y]=o[y-1];o[0]=u;break}}}return r}async function _e(e,t,n,a){t.sort((c,u)=>c.attributes[n]-u.attributes[n]);const r=t.map(c=>c.attributes[n]),o=[],s=Fe(a,e.fields,{originalFields:o}),i=await ue(e,r,s);for(let c=0;c<t.length;c++){const u=t[c],p=i[c],h={};if(u.attributes)for(const y in u.attributes)h[y]=u.attributes[y];for(let y=0;y<o.length;y++)h[o[y]]=p[s[y]];u.attributes=h}return t}function ue(e,t,n){const a=e.capabilities.query.maxRecordCount;if(a!=null&&t.length>a){const o=Te(t,a);return Promise.all(o.map(s=>ue(e,s,n))).then(s=>s.flat())}const r=new Ee({objectIds:t,outFields:n,orderByFields:[e.objectIdField]});return e.queryFeatures(r).then(o=>{if(o&&o.features&&o.features.length===t.length)return o.features.map(s=>s.attributes);throw new g("scenelayer:feature-not-in-associated-layer","Feature not found in associated feature layer")})}function Ge(e,t,n,a,r){return Ke(e,t,n.resources.attributes,a,r)}function Ke(e,t,n,a,r){const o=[];for(const s of t)if(s&&r.includes(s.name)){const i=`${e}/nodes/${n}/attributes/${s.key}/0`;o.push({url:i,storageInfo:s})}return me(o.map(s=>be(s.url,{responseType:"array-buffer"}).then(i=>$e(s.storageInfo,i.data)))).then(s=>{const i=[];for(const c of a){const u={};for(let p=0;p<s.length;p++){const h=s[p].value;h!=null&&(u[o[p].storageInfo.name]=Be(h,c))}i.push(u)}return i})}(function(e){e[e.OUTSIDE=0]="OUTSIDE",e[e.INTERSECTS_CENTER_OUTSIDE=1]="INTERSECTS_CENTER_OUTSIDE",e[e.INTERSECTS_CENTER_INSIDE=2]="INTERSECTS_CENTER_INSIDE",e[e.INSIDE=3]="INSIDE"})(T||(T={}));const Pe=-32768,je=-(2**31);function Be(e,t){if(!e)return null;const n=e[t];return ge(e)?n===Pe?null:n:Se(e)?n===je?null:n:n!=n?null:n}function Ve(e){const t=e.store,n=t.indexCRS||t.geographicCRS,a=n===void 0?t.indexWKT:void 0;if(a){if(!e.spatialReference)throw new g("layerview:no-store-spatial-reference-wkt-index-and-no-layer-spatial-reference","Found indeWKT in the scene layer store but no layer spatial reference",{});if(a!==e.spatialReference.wkt)throw new g("layerview:store-spatial-reference-wkt-index-incompatible","The indeWKT of the scene layer store does not match the WKT of the layer spatial reference",{})}const r=n?new ne(le(n)):e.spatialReference;return r.equals(e.spatialReference)?e.spatialReference:r}function Qe(e){const t=e.store,n=t.vertexCRS||t.projectedCRS,a=n===void 0?t.vertexWKT:void 0;if(a){if(!e.spatialReference)throw new g("layerview:no-store-spatial-reference-wkt-vertex-and-no-layer-spatial-reference","Found vertexWKT in the scene layer store but no layer spatial reference",{});if(a!==e.spatialReference.wkt)throw new g("layerview:store-spatial-reference-wkt-vertex-incompatible","The vertexWKT of the scene layer store does not match the WKT of the layer spatial reference",{})}const r=n?new ne(le(n)):e.spatialReference;return r.equals(e.spatialReference)?e.spatialReference:r}function bt(e,t){return C(t)?"@null":t===I(t)?"@ECEF":e.equals(t)?"":t.wkid!=null?"@"+t.wkid:null}function L(e,t,n){if(!ve(e,t))throw new g("layerview:spatial-reference-incompatible","The spatial reference of this scene layer is incompatible with the spatial reference of the view",{});if(n==="local"&&!Ze(e,t))throw new g("layerview:spatial-reference-incompatible","The spatial reference of this scene layer is incompatible with the spatial reference of the view",{})}function gt(e,t,n){var a,r;if(((a=e.serviceUpdateTimeStamp)==null?void 0:a.lastUpdate)!==((r=t.serviceUpdateTimeStamp)==null?void 0:r.lastUpdate)||!n.isEmpty||P(e.associatedLayer,o=>o.url)!==P(t.associatedLayer,o=>o.url))throw new g("layerview:recycle-failed")}function Ze(e,t){return e.equals(t)||e.isWGS84&&t.isWebMercator||e.isWebMercator&&t.isWGS84}function He(e,t,n){const a=Ve(e),r=Qe(e);L(a,t,n),L(r,t,n)}function Je(e){return(e.geometryType==null||e.geometryType==="triangles")&&(e.topology==null||e.topology==="PerAttributeArray")&&e.vertexAttributes!=null&&e.vertexAttributes.position!=null}function St(e){if(e.store==null||e.store.defaultGeometrySchema==null||!Je(e.store.defaultGeometrySchema))throw new g("scenelayer:unsupported-geometry-schema","The geometry schema of this scene layer is not supported.",{url:e.parsedUrl.path})}function wt(e,t){He(e,t.spatialReference,t.viewingMode)}function Ye(e){return e.geometryType!=null&&e.geometryType==="points"&&(e.topology==null||e.topology==="PerAttributeArray")&&(e.encoding==null||e.encoding===""||e.encoding==="lepcc-xyz")&&e.vertexAttributes!=null&&e.vertexAttributes.position!=null}function Mt(e){if(e.store==null||e.store.defaultGeometrySchema==null||!Ye(e.store.defaultGeometrySchema))throw new g("pointcloud:unsupported-geometry-schema","The geometry schema of this point cloud scene layer is not supported.",{})}function Tt(e,t){L(e.spatialReference,t.spatialReference,t.viewingMode)}function Xe(e){return e.type==="simple"||e.type==="class-breaks"||e.type==="unique-value"}function et(e){return e.type==="mesh-3d"}function Et(e){if(e==null||!Xe(e)||(e.type==="unique-value"||e.type==="class-breaks")&&e.defaultSymbol==null)return!0;const t=e.getSymbols();if(t.length===0)return!0;for(const n of t){if(!et(n)||n.symbolLayers.length===0)return!0;for(const a of n.symbolLayers.items)if(a.type!=="fill"||C(a.material)||C(a.material.color)||a.material.colorMixMode!=="replace")return!0}return!1}const vt=pe({color:[0,0,0,0],opacity:0});class tt{constructor(){this.edgeMaterial=null,this.material=null,this.castShadows=!0}}function It(e){const t=new tt;let n=!1,a=!1;for(const r of e.symbolLayers.items)if(r.type==="fill"&&r.enabled){const o=r.material,s=r.edges;if(M(o)&&!n){const i=o.color,c=Ne(o.colorMixMode);M(i)?t.material={color:[i.r/255,i.g/255,i.b/255],alpha:i.a,colorMixMode:c}:t.material={color:[1,1,1],alpha:1,colorMixMode:V.Multiply},t.castShadows=r.castShadows,n=!0}M(s)&&!a&&(t.edgeMaterial=qe(s,{}),a=!0)}return t.material||(t.material={color:[1,1,1],alpha:1,colorMixMode:V.Multiply}),t}function xt(e,t){return(0|e)+(0|t)|0}function nt(e,t,n,a,r=0){a===I(a)?t.isGeographic?ct(e,n,t,r):it(e,n,t,r):t.isWGS84&&(a.isWebMercator||j(a))?at(t,e,a,n,r):t.isWebMercator&&j(a)?st(t,e,a,n,r):e===n?(n.center[2]+=r,x(n.center,t,0,n.center,a,0,1)):(E(n.center,e.center[0],e.center[1],e.center[2]+r),x(n.center,t,0,n.center,a,0,1),ae(n.quaternion,e.quaternion),$(n.halfSize,e.halfSize))}function at(e,t,n,a,r){$(w,t.center),w[2]+=r;const o=I(n);x(w,e,0,w,o,0,1),fe(o,t,w,n,a)}const W=new Array(24),rt=new ke(W,3,!0),J=z(),w=z(),ot=De();function st(e,t,n,a,r){$(w,t.center),w[2]+=r,fe(e,t,w,n,a)}function fe(e,t,n,a,r){const o=Ie(ot,t.quaternion);for(let s=0;s<8;++s){for(let i=0;i<3;++i)J[i]=t.halfSize[i]*(s&1<<i?-1:1);for(let i=0;i<3;++i){let c=n[i];for(let u=0;u<3;++u)c+=J[u]*o[3*u+i];W[3*s+i]=c}}x(W,e,0,W,a,0,8),re(rt,r)}function it(e,t,n,a){oe(e,_),E(t.center,e.center[0],e.center[1],e.center[2]+a),ee(n,t.center,b,I(n)),E(t.center,b[12],b[13],b[14]);const r=2*Math.sqrt(1+b[0]+b[5]+b[10]);S[0]=(b[6]-b[9])/r,S[1]=(b[8]-b[2])/r,S[2]=(b[1]-b[4])/r,S[3]=.25*r,xe(t.quaternion,S,e.quaternion),se(S,t.quaternion);let o=0,s=0,i=0;for(const c of _)c[2]+=a,x(c,n,0,c,I(n),0,1),Re(l,c,t.center),ie(l,l,S),o=Math.max(o,Math.abs(l[0])),s=Math.max(s,Math.abs(l[1])),i=Math.max(i,Math.abs(l[2]));E(t.halfSize,o,s,i)}function ct(e,t,n,a){const r=te(n),o=1+Math.max(0,a)/(r.radius+e.center[2]);E(t.center,e.center[0],e.center[1],e.center[2]+a),x(t.center,n,0,t.center,I(n),0,1),ae(t.quaternion,e.quaternion),se(S,e.quaternion),E(l,0,0,1),ie(l,l,S),E(l,e.halfSize[0]*Math.abs(l[0]),e.halfSize[1]*Math.abs(l[1]),e.halfSize[2]*Math.abs(l[2])),B(l,l,r.inverseFlattening),Ce(t.halfSize,e.halfSize,l),B(t.halfSize,t.halfSize,o)}function Rt(e,t,n,a,r,o){if(!o||o.length===0||C(t)||!e.mbs)return null;const s=Ue(e.mbs,r,n,t);We(D,s);let i=null;const c=()=>{if(!i)if(i=_,Q(k),M(e.serviceObb)){nt(e.serviceObb,n,Y,t,r),oe(Y,i);for(const f of i)v(f,f,D),A(k,f)}else{const f=e.mbs;if(!f)return;const d=f[3];Z(f,n,l,t),v(l,l,D),l[2]+=r;for(let m=0;m<8;++m){const N=1&m?d:-d,U=2&m?d:-d,O=4&m?d:-d,q=i[m];$(q,[l[0]+N,l[1]+U,l[2]+O]),A(k,q)}}};let u=1/0,p=-1/0;const h=f=>{if(f.type!=="replace")return;const d=f.geometry;if(!(d!=null&&d.hasZ))return;Q(F);const m=d.spatialReference||a,N=d.rings.reduce((U,O)=>O.reduce((q,he)=>(Z(he,m,l,t),v(l,l,D),A(F,l),Math.min(l[2],q)),U),1/0);c(),ze(k,F)&&(u=Math.min(u,N),p=Math.max(p,N))};if(o.forEach(f=>h(f)),u===1/0)return null;const y=(f,d,m)=>{v(l,m,s),f[d+0]=l[0],f[d+1]=l[1],f[d+2]=l[2],d+=24,m[2]=u,v(l,m,s),f[d+0]=l[0],f[d+1]=l[1],f[d+2]=l[2],d+=24,m[2]=p,v(l,m,s),f[d+0]=l[0],f[d+1]=l[1],f[d+2]=l[2]};for(let f=0;f<8;++f)y(X.data,3*f,i[f]);return re(X)}function Ct(e){return M(e)&&e.halfSize[0]>=0}function Nt(e){return e[3]>=0}function qt(e){M(e)&&(e.halfSize[0]=-1)}function kt(e){M(e)&&(e[3]=-1)}const b=G(),S=de(),_=[[0,0,0],[0,0,0],[0,0,0],[0,0,0],[0,0,0],[0,0,0],[0,0,0],[0,0,0]],F=K(),k=K(),Y=ye(),l=z(),X={data:new Array(72),size:3,exclusive:!0,stride:3},D=G();export{Ct as $,It as C,St as E,kt as H,Mt as I,ft as J,xt as N,Rt as P,Nt as Q,Tt as R,vt as U,ht as V,pt as X,dt as Y,qt as Z,mt as a,L as b,Oe as c,Ae as d,Qe as e,gt as g,Ve as h,Be as m,Ue as n,Fe as o,Et as q,T as r,yt as t,Ke as u,wt as v,He as w,bt as y,nt as z};