import{b1 as $,b2 as E,b3 as S,W as o,b4 as R,r as h,b5 as F,b6 as m,aP as O,b7 as T,aA as L,v as A,b8 as U}from"./index-607cb647.js";import{E as G}from"./assetEditingSupport-2cebf928.js";var y;(function(e){e.GLTF_BINARY="3D_glb",e.GLTF_JSON="3D_gltf"})(y||(y={}));function k(e){return e&&e.applyEdits!=null}async function j(e,t,r,n={}){var i;let s,u;const d={edits:r,result:new Promise((a,c)=>{s=a,u=c})};e.emit("apply-edits",d);try{const{results:a,edits:c}=await B(e,t,r,n),l=v=>v.filter(I=>!I.error).map($),p={edits:c,addedFeatures:l(a.addFeatureResults),updatedFeatures:l(a.updateFeatureResults),deletedFeatures:l(a.deleteFeatureResults),addedAttachments:l(a.addAttachmentResults),updatedAttachments:l(a.updateAttachmentResults),deletedAttachments:l(a.deleteAttachmentResults),exceededTransferLimit:!1};return(i=a.editedFeatureResults)!=null&&i.length&&(p.editedFeatures=a.editedFeatureResults),(p.addedFeatures.length||p.updatedFeatures.length||p.deletedFeatures.length||p.addedAttachments.length||p.updatedAttachments.length||p.deletedAttachments.length)&&(e.emit("edits",p),E(e)&&S.emit("edits",{layer:e,event:p})),s(p),a}catch(a){throw u(a),a}}async function B(e,t,r,n){var d,i,a,c,l,p;if(await e.load(),!k(t))throw new o(`${e.type}-layer:no-editing-support`,"Layer source does not support applyEdits capability",{layer:e});if(!R(e))throw new o(`${e.type}-layer:editing-disabled`,"Editing is disabled for layer",{layer:e});const{edits:s,options:u}=await x(e,r,n);return(d=s.addFeatures)!=null&&d.length||(i=s.updateFeatures)!=null&&i.length||(a=s.deleteFeatures)!=null&&a.length||(c=s.addAttachments)!=null&&c.length||(l=s.updateAttachments)!=null&&l.length||(p=s.deleteAttachments)!=null&&p.length?{edits:s,results:await t.applyEdits(s,u)}:{edits:s,results:{addFeatureResults:[],updateFeatureResults:[],deleteFeatureResults:[],addAttachmentResults:[],updateAttachmentResults:[],deleteAttachmentResults:[]}}}async function x(e,t,r){const n=t&&(t.addFeatures||t.updateFeatures||t.deleteFeatures),s=t&&(t.addAttachments||t.updateAttachments||t.deleteAttachments),u=h(e.infoFor3D);if(!t||!n&&!s)throw new o(`${e.type}-layer:missing-parameters`,"'addFeatures', 'updateFeatures', 'deleteFeatures', 'addAttachments', 'updateAttachments' or 'deleteAttachments' parameter is required");const d=F(e);if(!d.data.isVersioned&&(r!=null&&r.gdbVersion))throw new o(`${e.type}-layer:invalid-parameter`,"'gdbVersion' is applicable only if the layer supports versioned data. See: 'capabilities.data.isVersioned'");if(!d.editing.supportsRollbackOnFailure&&(r!=null&&r.rollbackOnFailureEnabled))throw new o(`${e.type}-layer:invalid-parameter`,"This layer does not support 'rollbackOnFailureEnabled' parameter. See: 'capabilities.editing.supportsRollbackOnFailure'");if(!d.editing.supportsGlobalId&&(r!=null&&r.globalIdUsed))throw new o(`${e.type}-layer:invalid-parameter`,"This layer does not support 'globalIdUsed' parameter. See: 'capabilities.editing.supportsGlobalId'");if(!d.editing.supportsGlobalId&&s)throw new o(`${e.type}-layer:invalid-parameter`,"'addAttachments', 'updateAttachments' and 'deleteAttachments' are applicable only if the layer supports global ids. See: 'capabilities.editing.supportsGlobalId'");if(!(r!=null&&r.globalIdUsed)&&s)throw new o(`${e.type}-layer:invalid-parameter`,"When 'addAttachments', 'updateAttachments' or 'deleteAttachments' is specified, globalIdUsed should be set to true");const i={...r};if(i.rollbackOnFailureEnabled!=null||d.editing.supportsRollbackOnFailure||(i.rollbackOnFailureEnabled=!0),i.rollbackOnFailureEnabled===!1&&i.returnServiceEditsOption==="original-and-current-features")throw new o(`${e.type}-layer:invalid-parameter`,"'original-and-current-features' is valid for 'returnServiceEditsOption' only when 'rollBackOnFailure' is true.");if(!d.editing.supportsReturnServiceEditsInSourceSpatialReference&&i.returnServiceEditsInSourceSR)throw new o(`${e.type}-layer:invalid-parameter`,"This layer does not support 'returnServiceEditsInSourceSR' parameter. See: 'capabilities.editing.supportsReturnServiceEditsInSourceSpatialReference'");if(i.returnServiceEditsInSourceSR&&i.returnServiceEditsOption!=="original-and-current-features")throw new o(`${e.type}-layer:invalid-parameter`,"'returnServiceEditsInSourceSR' is valid only when 'returnServiceEditsOption' is set to 'original-and-current-features'");const a={...t};if(a.addFeatures=t&&m.isCollection(t.addFeatures)?t.addFeatures.toArray():a.addFeatures||[],a.updateFeatures=t&&m.isCollection(t.updateFeatures)?t.updateFeatures.toArray():a.updateFeatures||[],a.deleteFeatures=t&&m.isCollection(t.deleteFeatures)?t.deleteFeatures.toArray():a.deleteFeatures||[],a.addFeatures.length&&!d.operations.supportsAdd)throw new o(`${e.type}-layer:unsupported-operation`,"Layer does not support adding features.");if(a.updateFeatures.length&&!d.operations.supportsUpdate)throw new o(`${e.type}-layer:unsupported-operation`,"Layer does not support updating features.");if(a.deleteFeatures.length&&!d.operations.supportsDelete)throw new o(`${e.type}-layer:unsupported-operation`,"Layer does not support deleting features.");a.addAttachments=a.addAttachments||[],a.updateAttachments=a.updateAttachments||[],a.deleteAttachments=a.deleteAttachments||[],a.addFeatures=a.addFeatures.map(b),a.updateFeatures=a.updateFeatures.map(b),a.addAssets=[];const c=(r==null?void 0:r.globalIdUsed)||u;return a.addFeatures.forEach(l=>D(l,e,c)),a.updateFeatures.forEach(l=>C(l,e,c)),a.deleteFeatures.forEach(l=>_(l,e,c)),a.addAttachments.forEach(l=>g(l,e)),a.updateAttachments.forEach(l=>g(l,e)),u&&await V(a,e),{edits:await N(a),options:i}}function f(e,t,r){var n,s;if(r){if("attributes"in e&&!e.attributes[t.globalIdField])throw new o(`${t.type}-layer:invalid-parameter`,"Feature should have 'globalId' when 'globalIdUsed' is true");if(!("attributes"in e)&&!e.globalId)throw new o(`${t.type}-layer:invalid-parameter`,"'globalId' of the feature should be passed when 'globalIdUsed' is true")}if("geometry"in e&&h(e.geometry)){if(e.geometry.hasZ&&((n=t.capabilities)==null?void 0:n.data.supportsZ)===!1)throw new o(`${t.type}-layer:z-unsupported`,"Layer does not support z values while feature has z values.");if(e.geometry.hasM&&((s=t.capabilities)==null?void 0:s.data.supportsM)===!1)throw new o(`${t.type}-layer:m-unsupported`,"Layer does not support m values while feature has m values.")}}function D(e,t,r){f(e,t,r)}function _(e,t,r){f(e,t,r)}function C(e,t,r){f(e,t,r);const n=F(t);if("geometry"in e&&h(e.geometry)&&!(n!=null&&n.editing.supportsGeometryUpdate))throw new o(`${t.type}-layer:unsupported-operation`,"Layer does not support geometry updates.")}function g(e,t){var s;const{feature:r,attachment:n}=e;if(!r||"attributes"in r&&!r.attributes[t.globalIdField])throw new o(`${t.type}-layer:invalid-parameter`,"Attachment should have reference to a feature with 'globalId'");if(!("attributes"in r)&&!r.globalId)throw new o(`${t.type}-layer:invalid-parameter`,"Attachment should have reference to 'globalId' of the parent feature");if(!n.globalId)throw new o(`${t.type}-layer:invalid-parameter`,"Attachment should have 'globalId'");if(!n.data&&!n.uploadId)throw new o(`${t.type}-layer:invalid-parameter`,"Attachment should have 'data' or 'uploadId'");if(!(n.data instanceof File&&n.data.name)&&!n.name)throw new o(`${t.type}-layer:invalid-parameter`,"'name' is required when attachment is specified as Base64 encoded string using 'data'");if(!((s=t.capabilities)!=null&&s.editing.supportsUploadWithItemId)&&n.uploadId)throw new o(`${t.type}-layer:invalid-parameter`,"This layer does not support 'uploadId' parameter. See: 'capabilities.editing.supportsUploadWithItemId'");if(typeof n.data=="string"){const u=O(n.data);if(u&&!u.isBase64)throw new o(`${t.type}-layer:invalid-parameter`,"Attachment 'data' should be a Blob, File or Base64 encoded string")}}async function N(e){const t=e.addFeatures??[],r=e.updateFeatures??[],n=t.concat(r).map(i=>i.geometry),s=await T(n),u=t.length,d=r.length;return s.slice(0,u).forEach((i,a)=>t[a].geometry=i),s.slice(u,u+d).forEach((i,a)=>r[a].geometry=i),e}function b(e){const t=new L;return e.attributes||(e.attributes={}),t.geometry=e.geometry,t.attributes=e.attributes,t}async function V(e,t){if(A(t.infoFor3D))return;const{infoFor3D:r}=t;let n=!1;for(const d of r.editFormats)if(d===y.GLTF_BINARY){n=!0;break}const s=[];for(const d of e.addFeatures??[])s.push(w(d,e,t,n));for(const d of e.updateFeatures??[])s.push(w(d,e,t,n));const u=await Promise.allSettled(s);for(const d of u)if(d.status==="rejected")throw d.reason}async function w(e,t,r,n){var l;if(A(e.geometry)||e.geometry.type!=="mesh")return;const s=e.geometry,u=r.globalIdField;if(h(r.parsedUrl)&&h(s.external)&&Array.isArray(s.external.source)&&s.external.source.length===1&&"source"in s.external.source[0]&&typeof s.external.source[0].source=="string"&&s.external.source[0].source.startsWith(r.parsedUrl.path))return;if(!n)throw new o(`${r.type}-layer:binary-gltf-asset-not-supported`,"3DObjectFeatureLayer requires binary glTF (.glb) support for updating mesh geometry.");const d=await s.toBinaryGLTF({ignoreLocalTransform:!0}),i=await d.buffer(),a=`{${U()}}`,c=`${a}.glb`;(l=t.addAssets)==null||l.push({featureGlobalId:e.getAttribute(u),assetMapGlobalId:a,assetName:c,flags:h(s.transform)&&s.transform.geographic?G.PROJECT_VERTICES:0,data:i.data,mimeType:i.type,assetType:y.GLTF_BINARY,feature:e})}export{j as applyEdits};
