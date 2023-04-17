import{rL as C,br as S,bc as R,N as B,fR as O,iI as j,aN as A,rM as M,rN as Y,B as q,rO as G,rP as U,rQ as _,rR as k,rS as L,rT as Q,rU as W,rV as X,rW as Z,rX as H,rY as J}from"./index-607cb647.js";let y=null;function K(e,a,o){return e.x<0?e.x+=a:e.x>o&&(e.x-=a),e}function aa(e,a,o,l){const n=C(o)?S(o):null,s=n?Math.round((n.valid[1]-n.valid[0])/a.scale[0]):null;return e.map(t=>{const i=new R(B(t.geometry));return O(a,i,i,i.hasZ,i.hasM),t.geometry=n?K(i,s,l[0]):i,t})}function ea(e,a=18,o,l,n,s){const t=new Float64Array(n*s);a=Math.round(q(a));let i=Number.POSITIVE_INFINITY,r=Number.NEGATIVE_INFINITY,u=0,f=0,d=0,c=0;const I=G(l,o);for(const{geometry:T,attributes:v}of e){const{x:p,y:m}=T,x=Math.max(0,p-a),V=Math.max(0,m-a),D=Math.min(s,m+a),P=Math.min(n,p+a),b=+I(v);for(let $=V;$<D;$++)for(let w=x;w<P;w++){const E=$*n+w,g=U(w-p,$-m,a),N=t[E];u=t[E]+=g*b;const F=u-N;f+=F,d+=F*F,u<i&&(i=u),u>r&&(r=u),c++}}if(!c)return{mean:0,stddev:0,min:0,max:0,mid:0,count:0};const z=(r-i)/2;return{mean:f/c,stdDev:Math.sqrt((d-f*f/c)/c),min:i,max:r,mid:z,count:c}}async function h(e,a){if(!a)return[];const{field:o,field2:l,field3:n,fieldDelimiter:s}=e,t=e.valueExpression,i=e.normalizationType,r=e.normalizationField,u=e.normalizationTotal,f=[],d=e.viewInfoParams;let c=null,I=null;if(t){if(!y){const{arcadeUtils:v}=await j();y=v}c=y.createFunction(t),I=d&&y.getViewInfo({viewingMode:d.viewingMode,scale:d.scale,spatialReference:new A(d.spatialReference)})}const z=e.fieldInfos,T=!(a[0]&&"declaredClass"in a[0]&&a[0].declaredClass==="esri.Graphic")&&z?{fields:z}:null;return a.forEach(v=>{const p=v.attributes;let m;if(t){const x=T?{...v,layer:T}:v,V=y.createExecContext(x,I);m=y.executeFunction(c,V)}else p&&(m=p[o],l&&(m=`${M(m)}${s}${M(p[l])}`,n&&(m=`${m}${s}${M(p[n])}`)));if(i&&typeof m=="number"&&isFinite(m)){const x=p&&parseFloat(p[r]);m=Y(m,i,x,u)}f.push(m)}),f}async function na(e){const{attribute:a,features:o}=e,{normalizationType:l,normalizationField:n,minValue:s,maxValue:t,fieldType:i}=a,r=await h({field:a.field,valueExpression:a.valueExpression,normalizationType:l,normalizationField:n,normalizationTotal:a.normalizationTotal,viewInfoParams:a.viewInfoParams,fieldInfos:a.fieldInfos},o),u=_({normalizationType:l,normalizationField:n,minValue:s,maxValue:t}),f={value:.5,fieldType:i},d=i==="esriFieldTypeString"?k({values:r,supportsNullCount:u,percentileParams:f}):L({values:r,minValue:s,maxValue:t,useSampleStdDev:!l,supportsNullCount:u,percentileParams:f});return Q(d,i==="esriFieldTypeDate")}async function ta(e){const{attribute:a,features:o}=e,l=await h({field:a.field,field2:a.field2,field3:a.field3,fieldDelimiter:a.fieldDelimiter,valueExpression:a.valueExpression,viewInfoParams:a.viewInfoParams,fieldInfos:a.fieldInfos},o),n=W(l);return X(n,a.domains,a.returnAllCodedValues,a.fieldDelimiter)}async function la(e){const{attribute:a,features:o}=e,{field:l,normalizationType:n,normalizationField:s,normalizationTotal:t,classificationMethod:i}=a,r=await h({field:l,valueExpression:a.valueExpression,normalizationType:n,normalizationField:s,normalizationTotal:t,viewInfoParams:a.viewInfoParams,fieldInfos:a.fieldInfos},o),u=Z(r,{field:l,normalizationType:n,normalizationField:s,normalizationTotal:t,classificationMethod:i,standardDeviationInterval:a.standardDeviationInterval,numClasses:a.numClasses,minValue:a.minValue,maxValue:a.maxValue});return H(u,i)}async function oa(e){const{attribute:a,features:o}=e,{field:l,normalizationType:n,normalizationField:s,normalizationTotal:t,classificationMethod:i}=a,r=await h({field:l,valueExpression:a.valueExpression,normalizationType:n,normalizationField:s,normalizationTotal:t,viewInfoParams:a.viewInfoParams,fieldInfos:a.fieldInfos},o);return J(r,{field:l,normalizationType:n,normalizationField:s,normalizationTotal:t,classificationMethod:i,standardDeviationInterval:a.standardDeviationInterval,numBins:a.numBins,minValue:a.minValue,maxValue:a.maxValue})}async function sa(e){const{attribute:a,features:o}=e,{field:l,radius:n,fieldOffset:s,transform:t,spatialReference:i,size:r}=a,u=aa(o,t,i,r),{count:f,min:d,max:c,mean:I,stdDev:z}=ea(u,n,s,l,r[0],r[1]);return{count:f,min:d,max:c,avg:I,stddev:z}}export{la as classBreaks,sa as heatmapStatistics,oa as histogram,na as summaryStatistics,ta as uniqueValues};
