import{bW as $,aN as C,im as q,io as z,e as j,v as I,me as F,mf as G,cd as O,mg as E,r as P,iI as W}from"./index-607cb647.js";async function B(t,d,p,f,r){const{elevationProvider:h,renderCoordsHelper:c,spatialReference:b}=t,{elevationInfo:y}=d,m=q(y,!0),w=await z(m,b,r);j(r);const i=[],u=new Set,l=new Set;for(const{objectId:e,points:a}of f){const n=p(e);if(I(n)){for(const o of a)i.push(o[2]);u.add(e);continue}n.isDraped&&l.add(e);const s=n.graphic.geometry;v.setFromElevationInfo(F(s,y)),v.updateFeatureExpressionInfoContext(w,n.graphic,d),g.spatialReference=t.spatialReference;for(const{x:o,y:x,z:D}of a)g.x=o,g.y=x,g.z=D??0,G(g,h,v,c,S),i.push(S.z)}return{elevations:i,drapedObjectIds:l,failedObjectIds:u}}const v=new O,g=$(0,0,0,C.WGS84),S=new E;async function H(t,d,p){if(I(t)||d.candidates.length===0)return R;const f=t.graphics3DGraphicsByObjectID??t.graphics3DGraphics,r=[],h=[],{renderer:c}=t,b=P(c)&&"arcadeRequired"in c&&c.arcadeRequired?W():null,y=async(e,{graphic:a,graphics3DSymbol:n})=>{const s=await b,o=await t.getRenderingInfoAsync(a,c,s,{signal:p});return I(o)?[]:n.queryForSnapping(e,w,o,p)},{candidates:m,spatialReference:w}=d;for(let e=0;e<m.length;++e){const a=m[e],{objectId:n}=a,s=typeof n=="number"?f==null?void 0:f.get(n):void 0;if(I(s))continue;const{graphics3DSymbol:o}=s;o.symbologySnappingSupported&&(r.push(y(a,s)),h.push(e))}if(r.length===0)return R;const i=await Promise.all(r);j(p);const u=[],l=[];for(let e=0;e<i.length;++e){const a=i[e],n=h[e];for(const s of a)u.push(s),l.push(n)}return{candidates:u,sourceCandidateIndices:l}}const R={candidates:[],sourceCandidateIndices:[]};export{H as a,B as m};