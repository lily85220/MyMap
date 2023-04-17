import{fg as g,ap as n,ak as d,a3 as l,ac as s,ad as o,af as u}from"./index-607cb647.js";import{a as c}from"./BitmapContainer-ef6e22aa.js";import{f}from"./LayerView2D-7de436d6.js";import{a as y}from"./GraphicsView2D-f419e88d.js";import{n as H}from"./HighlightGraphicContainer-20ea24e8.js";import{v as _}from"./ExportStrategy-2f36f1c4.js";import{u as w}from"./LayerView-4dad4e85.js";import{p as v}from"./MapImageLayerView-6a4664f4.js";import{i as x}from"./RefreshableLayerView-43a7cacf.js";import{S as $}from"./MapServiceLayerViewHelper-126d82a5.js";import{a as U}from"./drapedUtils-f45bd63b.js";import"./WGLContainer-250ba04d.js";import"./definitions-19bfb61c.js";import"./WGLBrushVTLSymbol-0e3d41a7.js";import"./enums-b1d611e3.js";import"./number-b10bd8f5.js";import"./StyleDefinition-7d58136b.js";import"./enums-4b2a86a0.js";import"./GeometryUtils-dd03fc25.js";import"./color-201e7fc6.js";import"./ShaderCompiler-77d0dcb6.js";import"./ProgramTemplate-c9a4930f.js";import"./MaterialKey-78993dcc.js";import"./alignmentUtils-ae955d28.js";import"./utils-0eaf42ad.js";import"./heatmapTextureUtils-9f08bd2e.js";import"./Container-ce8af6b1.js";import"./cimAnalyzer-5aaaffea.js";import"./BidiEngine-836b7ef6.js";import"./GeometryUtils-53652037.js";import"./utils-bab516ed.js";import"./Rect-ea14f53a.js";import"./normalizeUtilsSync-ea656d2f.js";import"./AttributeStoreView-82478825.js";import"./visualVariablesUtils-5dc11a7e.js";import"./visualVariablesUtils-4e1f86eb.js";import"./Matcher-ecc8aa50.js";import"./tileUtils-c2f19f52.js";import"./TurboLine-4ab158f8.js";import"./ExpandedCIM-d24cecb3.js";import"./schemaUtils-364d2dd9.js";import"./util-2232a3b9.js";import"./ComputedAttributeStorage-dfaa822b.js";import"./arcadeTimeUtils-5c2554fb.js";import"./centroid-43324cfb.js";import"./GraphicsView-7162458c.js";import"./BaseGraphicContainer-19082cb4.js";import"./FeatureContainer-e197ed56.js";import"./TileContainer-2d453d1a.js";import"./Bitmap-568f400f.js";import"./popupUtils-d115b8fc.js";let a=class extends v(x(f(w))){constructor(){super(...arguments),this._highlightGraphics=new g,this._updateHash=""}fetchPopupFeatures(t,i){return this._popupHighlightHelper.fetchPopupFeatures(t,i)}update(t){const i=`${this.exportImageVersion}/${t.state.id}/${t.pixelRatio}/${t.stationary}`;this._updateHash!==i&&(this._updateHash=i,this.strategy.update(t).catch(e=>{n(e)||d.getLogger(this.declaredClass).error(e)}),t.stationary&&this._popupHighlightHelper.updateHighlightedFeatures(t.state.resolution)),this._highlightView.processUpdate(t)}attach(){const{imageMaxWidth:t,imageMaxHeight:i,version:e}=this.layer,r=e>=10.3,m=e>=10;this._bitmapContainer=new c,this.container.addChild(this._bitmapContainer),this._highlightView=new y({view:this.view,graphics:this._highlightGraphics,requestUpdateCallback:()=>this.requestUpdate(),container:new H(this.view.featuresTilingScheme),defaultPointSymbolEnabled:!1}),this.container.addChild(this._highlightView.container),this._popupHighlightHelper=new $({createFetchPopupFeaturesQueryGeometry:(p,h)=>U(p,h,this.view),highlightGraphics:this._highlightGraphics,highlightGraphicUpdated:(p,h)=>{this._highlightView.graphicUpdateHandler({graphic:p,property:h})},layerView:this,updatingHandles:this.updatingHandles}),this.strategy=new _({container:this._bitmapContainer,fetchSource:this.fetchImageBitmap.bind(this),requestUpdate:this.requestUpdate.bind(this),imageMaxWidth:t,imageMaxHeight:i,imageRotationSupported:r,imageNormalizationSupported:m,hidpi:!0}),this.addAttachHandles(l(()=>this.exportImageVersion,()=>this.requestUpdate())),this.requestUpdate()}detach(){this.strategy.destroy(),this.container.removeAllChildren(),this._bitmapContainer.removeAllChildren(),this._highlightView.destroy(),this._popupHighlightHelper.destroy()}moveStart(){}viewChange(){}moveEnd(){this.requestUpdate()}supportsSpatialReference(t){return this.layer.serviceSupportsSpatialReference(t)}async doRefresh(){this._updateHash="",this.requestUpdate()}isUpdating(){return this.strategy.updating||this.updateRequested}fetchImage(t,i,e,r){return this.layer.fetchImage(t,i,e,{timeExtent:this.timeExtent,floors:this.floors,...r})}fetchImageBitmap(t,i,e,r){return this.layer.fetchImageBitmap(t,i,e,{timeExtent:this.timeExtent,floors:this.floors,...r})}highlight(t){return this._popupHighlightHelper.highlight(t)}};s([o()],a.prototype,"strategy",void 0),s([o()],a.prototype,"updating",void 0),a=s([u("esri.views.2d.layers.MapImageLayerView2D")],a);const xt=a;export{xt as default};