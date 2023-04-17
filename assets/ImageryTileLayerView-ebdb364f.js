import{ac as r,ad as n,mJ as j,af as F,N as v,W as w,v as P,r as I,aA as V}from"./index-607cb647.js";import{v as T,J as $}from"./rasterProjectionHelper-25585be0.js";import{s as L}from"./popupUtils-d115b8fc.js";const O=b=>{let t=class extends b{constructor(){super(...arguments),this._rasterFieldPrefix="Raster.",this.layer=null,this.view=null,this.tileInfo=null}get fullExtent(){return this._getfullExtent()}_getfullExtent(){return this.projectFullExtent(this.view.spatialReference)}get hasTilingEffects(){return this.layer.renderer&&"dynamicRangeAdjustment"in this.layer.renderer&&this.layer.renderer.dynamicRangeAdjustment}get datumTransformation(){return T(v(this.layer.fullExtent),this.view.spatialReference,!0)}supportsSpatialReference(a){return!!this.projectFullExtent(a)}projectFullExtent(a){const u=v(this.layer.fullExtent),e=T(u,a,!1);return $(u,a,e)}async fetchPopupFeatures(a,u){const{layer:e}=this;if(!a)throw new w("imageryTileLayerView:fetchPopupFeatures","Nothing to fetch without area",{layer:e});const{popupEnabled:d}=e,m=L(e,u);if(!d||P(m))throw new w("imageryTileLayerView:fetchPopupFeatures","Missing required popupTemplate or popupEnabled",{popupEnabled:d,popupTemplate:m});const h=[],{value:l,magdirValue:s}=await e.identify(a,{timeExtent:this.timeExtent});let c="";if(l&&l.length){c=e.type==="imagery-tile"&&e.hasStandardTime()&&l[0]!=null?l.map(y=>e.getStandardTimeValue(y)).join(", "):l.join(", ");const o={ObjectId:0};o["Raster.ServicePixelValue"]=c;const g=e.rasterInfo.attributeTable;if(I(g)){const{fields:y,features:R}=g,E=y.find(({name:i})=>i.toLowerCase()==="value"),f=E?R.find(i=>String(i.attributes[E.name])===c):null;if(f)for(const i in f.attributes)f.attributes.hasOwnProperty(i)&&(o[this._rasterFieldPrefix+i]=f.attributes[i])}const x=e.rasterInfo.dataType;x!=="vector-magdir"&&x!=="vector-uv"||(o["Raster.Magnitude"]=s==null?void 0:s[0],o["Raster.Direction"]=s==null?void 0:s[1]);const p=new V(this.fullExtent.clone(),null,o);p.layer=e,p.sourceLayer=p.layer,h.push(p)}return h}};return r([n()],t.prototype,"layer",void 0),r([n(j)],t.prototype,"timeExtent",void 0),r([n()],t.prototype,"view",void 0),r([n()],t.prototype,"fullExtent",null),r([n()],t.prototype,"tileInfo",void 0),r([n({readOnly:!0})],t.prototype,"hasTilingEffects",null),r([n()],t.prototype,"datumTransformation",null),t=r([F("esri.views.layers.ImageryTileLayerView")],t),t};export{O as f};
