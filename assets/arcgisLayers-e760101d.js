import{ai as O,aY as L,v as S,W as P,rx as T,r as m,ry as g,eS as C,mn as v}from"./index-607cb647.js";import{t as d,r as F}from"./fetchService-20c4b88c.js";import{a as N}from"./lazyLayerLoader-75abf5fa.js";const x={FeatureLayer:!0,SceneLayer:!0};async function z(r){var t;const l=(t=r.properties)==null?void 0:t.customParameters,e=await U(r.url,l),a={...r.properties,url:r.url};if(!e.sublayerIds)return e.layerOrTableId!=null&&(a.layerId=e.layerOrTableId,a.sourceJSON=e.sourceJSON),new e.Constructor(a);const s=new(await O(()=>import("./GroupLayer-0c466920.js"),["assets/GroupLayer-0c466920.js","assets/index-607cb647.js","assets/index-ec7d25bd.css","assets/lazyLayerLoader-75abf5fa.js"])).default({title:e.parsedUrl.title});return J(s,e,a),s}function w(r,l){return r?r.find(e=>e.id===l):null}function J(r,l,e){function a(s,t){const u={...e,layerId:s,sublayerTitleMode:"service-name"};return m(t)&&(u.sourceJSON=t),new l.Constructor(u)}l.sublayerIds.forEach(s=>{const t=a(s,w(l.sublayerInfos,s));r.add(t)}),l.tableIds.forEach(s=>{const t=a(s,w(l.tableInfos,s));r.tables.add(t)})}async function U(r,l){var f,p,I,b;let e=L(r);if(S(e)&&(e=await V(r,l)),S(e))throw new P("arcgis-layers:url-mismatch","The url '${url}' is not a valid arcgis resource",{url:r});const{serverType:a,sublayer:s}=e;let t;const u={FeatureServer:"FeatureLayer",StreamServer:"StreamLayer",VectorTileServer:"VectorTileLayer"};switch(a){case"MapServer":s!=null?t="FeatureLayer":t=await M(r,l)?"TileLayer":"MapImageLayer";break;case"ImageServer":{const n=await d(r,{customParameters:l}),{tileInfo:c,cacheType:y}=n;t=c?((f=c==null?void 0:c.format)==null?void 0:f.toUpperCase())!=="LERC"||y&&y.toLowerCase()!=="elevation"?"ImageryTileLayer":"ElevationLayer":"ImageryLayer";break}case"SceneServer":{const n=await d(e.url.path,{customParameters:l});if(t="SceneLayer",n){const c=n==null?void 0:n.layers;if((n==null?void 0:n.layerType)==="Voxel")t="VoxelLayer";else if(c!=null&&c.length){const y=(p=c[0])==null?void 0:p.layerType;y!=null&&v[y]!=null&&(t=v[y])}}break}default:t=u[a]}const o=a==="FeatureServer",i={parsedUrl:e,Constructor:null,layerOrTableId:o?s:void 0,sublayerIds:null,tableIds:null};if(x[t]&&s==null){const n=await _(r,a,l);o&&(i.sublayerInfos=n.layerInfos,i.tableInfos=n.tableInfos),n.layerIds.length+n.tableIds.length!==1?(i.sublayerIds=n.layerIds,i.tableIds=n.tableIds):o&&(i.layerOrTableId=n.layerIds[0]??n.tableIds[0],i.sourceJSON=((I=n.layerInfos)==null?void 0:I[0])??((b=n.tableInfos)==null?void 0:b[0]))}return i.Constructor=await E(t),i}async function V(r,l){var o;const e=await d(r,{customParameters:l});let a=null,s=null;const t=e.type;if(t==="Feature Layer"||t==="Table"?(a="FeatureServer",s=e.id??null):t==="indexedVector"?a="VectorTileServer":e.hasOwnProperty("mapName")?a="MapServer":e.hasOwnProperty("bandCount")&&e.hasOwnProperty("pixelSizeX")?a="ImageServer":e.hasOwnProperty("maxRecordCount")&&e.hasOwnProperty("allowGeometryUpdates")?a="FeatureServer":e.hasOwnProperty("streamUrls")?a="StreamServer":h(e)?(a="SceneServer",s=e.id):e.hasOwnProperty("layers")&&h((o=e.layers)==null?void 0:o[0])&&(a="SceneServer"),!a)return null;const u=s!=null?T(r):null;return{title:m(u)&&e.name||g(r),serverType:a,sublayer:s,url:{path:m(u)?u.serviceUrl:C(r).path}}}function h(r){return r!=null&&r.hasOwnProperty("store")&&r.hasOwnProperty("id")&&typeof r.id=="number"}async function _(r,l,e){let a,s=!1;if(l==="FeatureServer"){const o=await F(r,{customParameters:e});s=!!o.layersJSON,a=o.layersJSON||o.serviceJSON}else a=await d(r,{customParameters:e});const t=a==null?void 0:a.layers,u=a==null?void 0:a.tables;return{layerIds:(t==null?void 0:t.map(o=>o.id).reverse())||[],tableIds:(u==null?void 0:u.map(o=>o.id).reverse())||[],layerInfos:s?t:[],tableInfos:s?u:[]}}async function E(r){return(0,N[r])()}async function M(r,l){return(await d(r,{customParameters:l})).tileInfo}export{z as fromUrl};
