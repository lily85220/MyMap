import{v5 as v,v6 as p,rC as b,rD as u,vp as c,vq as f,rE as _,nu as m,vr as g,a3 as d,vs as L,r as O,vb as w,vt as M,ac as t,ad as r,nx as $,dc as h,af as C,hJ as V}from"./index-607cb647.js";import{a as x}from"./lazyLayerLoader-75abf5fa.js";let s=class extends v(p(b(u(c(f(_(V))))))){constructor(i){super(i),this._visibilityHandles={},this.allLayers=new m({getCollections:()=>[this.layers],getChildrenFunction:e=>"layers"in e?e.layers:null}),this.allTables=g(this),this.fullExtent=void 0,this.operationalLayerType="GroupLayer",this.spatialReference=void 0,this.type="group"}initialize(){this._enforceVisibility(this.visibilityMode,this.visible),this.addHandles(d(()=>this.visible,this._onVisibilityChange.bind(this),h))}_writeLayers(i,e,o,l){const a=[];if(!i)return a;i.forEach(y=>{const n=L(y,l.webmap?l.webmap.getLayerJSONFromResourceInfo(y):null,l);O(n)&&n.layerType&&a.push(n)}),e.layers=a}set portalItem(i){this._set("portalItem",i)}set visibilityMode(i){const e=this._get("visibilityMode")!==i;this._set("visibilityMode",i),e&&this._enforceVisibility(i,this.visible)}load(i){return this.addResolvingPromise(this.loadFromPortal({supportedTypes:["Feature Service","Feature Collection","Scene Service"],layerModuleTypeMap:x},i)),Promise.resolve(this)}async loadAll(){return w(this,i=>{i(this.layers,this.tables)})}layerAdded(i){i.visible&&this.visibilityMode==="exclusive"?this._turnOffOtherLayers(i):this.visibilityMode==="inherited"&&(i.visible=this.visible),this._visibilityHandles[i.uid]=d(()=>i.visible,e=>this._onChildVisibilityChange(i,e),h)}layerRemoved(i){const e=this._visibilityHandles[i.uid];e&&(e.remove(),delete this._visibilityHandles[i.uid]),this._enforceVisibility(this.visibilityMode,this.visible)}_turnOffOtherLayers(i){this.layers.forEach(e=>{e!==i&&(e.visible=!1)})}_enforceVisibility(i,e){if(!M(this).initialized)return;const o=this.layers;let l=o.find(a=>a.visible);switch(i){case"exclusive":o.length&&!l&&(l=o.getItemAt(0),l.visible=!0),this._turnOffOtherLayers(l);break;case"inherited":o.forEach(a=>{a.visible=e})}}_onVisibilityChange(i){this.visibilityMode==="inherited"&&this.layers.forEach(e=>{e.visible=i})}_onChildVisibilityChange(i,e){switch(this.visibilityMode){case"exclusive":e?this._turnOffOtherLayers(i):this._isAnyLayerVisible()||(i.visible=!0);break;case"inherited":i.visible=this.visible}}_isAnyLayerVisible(){return this.layers.some(i=>i.visible)}};t([r({readOnly:!0,dependsOn:[]})],s.prototype,"allLayers",void 0),t([r({readOnly:!0})],s.prototype,"allTables",void 0),t([r()],s.prototype,"fullExtent",void 0),t([r({json:{read:!0,write:!0}})],s.prototype,"blendMode",void 0),t([r({json:{read:!1,write:{ignoreOrigin:!0}}})],s.prototype,"layers",void 0),t([$("layers")],s.prototype,"_writeLayers",null),t([r({type:["GroupLayer"]})],s.prototype,"operationalLayerType",void 0),t([r({json:{origins:{"web-document":{read:!1,write:!1}}}})],s.prototype,"portalItem",null),t([r()],s.prototype,"spatialReference",void 0),t([r({json:{read:!1},readOnly:!0,value:"group"})],s.prototype,"type",void 0),t([r({type:["independent","inherited","exclusive"],value:"independent",json:{write:!0,origins:{"web-map":{read:!1,write:!1}}}})],s.prototype,"visibilityMode",null),s=t([C("esri.layers.GroupLayer")],s);const j=s;export{j as default};
