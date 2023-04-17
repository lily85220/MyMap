import{a3 as l,a4 as h,fl as g,b6 as f,fm as w,fn as u,fo as n,ac as d,af as b}from"./index-607cb647.js";import{f as S}from"./LayerView2D-7de436d6.js";import{i as V}from"./GraphicContainer-9752dcb0.js";import{a as _}from"./GraphicsView2D-f419e88d.js";import{u as T}from"./LayerView-4dad4e85.js";import"./Container-ce8af6b1.js";import"./definitions-19bfb61c.js";import"./enums-b1d611e3.js";import"./BaseGraphicContainer-19082cb4.js";import"./FeatureContainer-e197ed56.js";import"./AttributeStoreView-82478825.js";import"./visualVariablesUtils-5dc11a7e.js";import"./color-201e7fc6.js";import"./enums-4b2a86a0.js";import"./number-b10bd8f5.js";import"./visualVariablesUtils-4e1f86eb.js";import"./TileContainer-2d453d1a.js";import"./WGLContainer-250ba04d.js";import"./WGLBrushVTLSymbol-0e3d41a7.js";import"./StyleDefinition-7d58136b.js";import"./GeometryUtils-dd03fc25.js";import"./ShaderCompiler-77d0dcb6.js";import"./ProgramTemplate-c9a4930f.js";import"./MaterialKey-78993dcc.js";import"./alignmentUtils-ae955d28.js";import"./utils-0eaf42ad.js";import"./heatmapTextureUtils-9f08bd2e.js";import"./cimAnalyzer-5aaaffea.js";import"./BidiEngine-836b7ef6.js";import"./GeometryUtils-53652037.js";import"./utils-bab516ed.js";import"./Rect-ea14f53a.js";import"./normalizeUtilsSync-ea656d2f.js";import"./Matcher-ecc8aa50.js";import"./tileUtils-c2f19f52.js";import"./TurboLine-4ab158f8.js";import"./ExpandedCIM-d24cecb3.js";import"./schemaUtils-364d2dd9.js";import"./util-2232a3b9.js";import"./ComputedAttributeStorage-dfaa822b.js";import"./arcadeTimeUtils-5c2554fb.js";import"./centroid-43324cfb.js";import"./GraphicsView-7162458c.js";let y=class extends S(T){constructor(){super(...arguments),this._graphicsViewMap={},this._popupTemplates=new Map,this.graphicsViews=[]}async hitTest(e,r){if(!this.graphicsViews.length)return null;const o=this.layer;return this.graphicsViews.reverse().map(t=>{const i=this._popupTemplates.get(t),s=t.hitTest(e);for(const p of s)p.layer=o,p.sourceLayer=o,p.popupTemplate=i;return s}).flat().map(t=>({type:"graphic",graphic:t,layer:o,mapPoint:e}))}update(e){if(this.graphicsViews)for(const r of this.graphicsViews)r.processUpdate(e)}attach(){this.addAttachHandles([l(()=>{var e;return(e=this.layer)==null?void 0:e.featureCollections},e=>{this._clear();for(const{popupInfo:r,featureSet:o,layerDefinition:t}of e){const i=g.fromJSON(o),s=new f(i.features),p=t.drawingInfo,c=r?w.fromJSON(r):null,a=u(p.renderer),m=new _({requestUpdateCallback:()=>this.requestUpdate(),view:this.view,graphics:s,renderer:a,container:new V(this.view.featuresTilingScheme)});this._graphicsViewMap[i.geometryType]=m,this._popupTemplates.set(m,c),i.geometryType!=="polygon"||this.layer.polygonSymbol?i.geometryType!=="polyline"||this.layer.lineSymbol?i.geometryType!=="point"||this.layer.pointSymbol||(this.layer.pointSymbol=a.symbol):this.layer.lineSymbol=a.symbol:this.layer.polygonSymbol=a.symbol,this.graphicsViews.push(m),this.container.addChild(m.container)}},h),l(()=>{var e;return(e=this.layer)==null?void 0:e.polygonSymbol},e=>{this._graphicsViewMap.polygon.renderer=new n({symbol:e})},h),l(()=>{var e;return(e=this.layer)==null?void 0:e.lineSymbol},e=>{this._graphicsViewMap.polyline.renderer=new n({symbol:e})},h),l(()=>{var e;return(e=this.layer)==null?void 0:e.pointSymbol},e=>{this._graphicsViewMap.point.renderer=new n({symbol:e})},h)])}detach(){this._clear()}moveStart(){}moveEnd(){}viewChange(){for(const e of this.graphicsViews)e.viewChange()}_clear(){this.container.removeAllChildren();for(const e of this.graphicsViews)e.destroy();this._graphicsViewMap={},this._popupTemplates.clear(),this.graphicsViews.length=0}};y=d([b("esri.views.2d.layers.GeoRSSLayerView2D")],y);const ce=y;export{ce as default};
