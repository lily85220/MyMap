import{bs as b,ax as g,bD as m,lD as w,t4 as _,ac as v,af as V,t5 as f,jP as j,n as h,e as L,v as C,bb as P,sc as S,pM as E,jS as $,t6 as I,t7 as x,df as u}from"./index-607cb647.js";const T=1e3;function D(t,s,e){const n=w(),o=_(n);return b(o,o,t,.5),b(o,o,s,.5),n[3]=g(o,t),m(o,o,e),n}let l=class{constructor(){this._idToComponent=new Map,this._components=new f(t=>t.bounds),this._edges=new f(t=>t.bounds),this._tmpLineSegment=j(),this._tmpP1=h(),this._tmpP2=h(),this._tmpP3=h(),this.remoteClient=null}async fetchCandidates(t,s){await Promise.resolve(),L(s),await this._ensureEdgeLocations(t,s);const e=[];return this._edges.forEachNeighbor(n=>(this._addCandidates(t,n,e),e.length<T),t.bounds),{result:{candidates:e}}}async _ensureEdgeLocations(t,s){const e=[];if(this._components.forEachNeighbor(i=>{if(C(i.info)){const{id:c,uid:d}=i;e.push({id:c,uid:d})}return!0},t.bounds),!e.length)return;const n={components:e},o=await this.remoteClient.invoke("fetchAllEdgeLocations",n,P(s,{}));for(const i of o.components)this._setFetchEdgeLocations(i)}async add(t){const s=new p(t.id,t.bounds);return this._idToComponent.set(s.id,s),this._components.add([s]),{result:{}}}async remove(t){const s=this._idToComponent.get(t.id);if(s){const e=[];this._edges.forEachNeighbor(n=>(n.component===s&&e.push(n),!0),s.bounds),this._edges.remove(e),this._components.remove([s]),this._idToComponent.delete(s.id)}return{result:{}}}_setFetchEdgeLocations(t){const s=this._idToComponent.get(t.id);if(C(s)||t.uid!==s.uid)return;const e=S.createView(t.locations),n=new Array(e.count),o=h(),i=h();for(let a=0;a<e.count;a++){e.position0.getVec(a,o),e.position1.getVec(a,i);const r=D(o,i,t.origin),y=new N(s,a,r);n[a]=y}this._edges.add(n);const{objectIds:c,origin:d}=t;s.info={locations:e,objectIds:c,origin:d}}_addCandidates(t,s,e){const{info:n}=s.component,{origin:o,objectIds:i}=n,c=n.locations,d=c.position0.getVec(s.index,this._tmpP1),a=c.position1.getVec(s.index,this._tmpP2);m(d,d,o),m(a,a,o);const r=i[c.componentIndex.get(s.index)];this._addEdgeCandidate(t,r,d,a,e),this._addVertexCandidate(t,r,d,e),this._addVertexCandidate(t,r,a,e)}_addEdgeCandidate(t,s,e,n,o){if(!(t.types&E.EDGE))return;const i=_(t.bounds),c=$(e,n,this._tmpLineSegment),d=I(c,i,this._tmpP3);x(t.bounds,d)&&o.push({type:"edge",objectId:s,target:u(d),distance:g(i,d),start:u(e),end:u(n)})}_addVertexCandidate(t,s,e,n){if(!(t.types&E.VERTEX))return;const o=_(t.bounds);x(t.bounds,e)&&n.push({type:"vertex",objectId:s,target:u(e),distance:g(o,e)})}};l=v([V("esri.views.interactive.snapping.featureSources.sceneLayerSource.SceneLayerSnappingSourceWorker")],l);const A=l;class p{constructor(s,e){this.id=s,this.bounds=e,this.info=null,this.uid=++p.uid}}p.uid=0;class N{constructor(s,e,n){this.component=s,this.index=e,this.bounds=n}}export{A as default};