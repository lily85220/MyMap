import{ap as b,ak as M,a3 as R,a1 as q,aH as U,ac as h,ad as x,af as H}from"./index-607cb647.js";import{a as w}from"./BitmapContainer-ef6e22aa.js";import{f as I}from"./LayerView2D-7de436d6.js";import{v as E}from"./ExportStrategy-2f36f1c4.js";import{u as W}from"./LayerView-4dad4e85.js";import{i as A}from"./RefreshableLayerView-43a7cacf.js";import{i as F}from"./WMSLayerView-b5998539.js";import"./WGLContainer-250ba04d.js";import"./definitions-19bfb61c.js";import"./WGLBrushVTLSymbol-0e3d41a7.js";import"./enums-b1d611e3.js";import"./number-b10bd8f5.js";import"./StyleDefinition-7d58136b.js";import"./enums-4b2a86a0.js";import"./GeometryUtils-dd03fc25.js";import"./color-201e7fc6.js";import"./ShaderCompiler-77d0dcb6.js";import"./ProgramTemplate-c9a4930f.js";import"./MaterialKey-78993dcc.js";import"./alignmentUtils-ae955d28.js";import"./utils-0eaf42ad.js";import"./heatmapTextureUtils-9f08bd2e.js";import"./Container-ce8af6b1.js";import"./Bitmap-568f400f.js";let s=class extends F(A(I(W))){constructor(){super(...arguments),this.bitmapContainer=new w}supportsSpatialReference(t){return this.layer.serviceSupportsSpatialReference(t)}update(t){this.strategy.update(t).catch(e=>{b(e)||M.getLogger(this.declaredClass).error(e)})}attach(){const{layer:t}=this,{imageMaxHeight:e,imageMaxWidth:a}=t;this.bitmapContainer=new w,this.container.addChild(this.bitmapContainer),this.strategy=new E({container:this.bitmapContainer,fetchSource:this.fetchImage.bind(this),requestUpdate:this.requestUpdate.bind(this),imageMaxHeight:e,imageMaxWidth:a,imageRotationSupported:!1,imageNormalizationSupported:!1,hidpi:!1}),this.addAttachHandles(R(()=>this.exportImageVersion,()=>this.requestUpdate()))}detach(){this.strategy=q(this.strategy),this.container.removeAllChildren()}moveStart(){}viewChange(){}moveEnd(){this.requestUpdate()}createFetchPopupFeaturesQuery(t){const{view:e,bitmapContainer:a}=this,{x:r,y:o}=t,{spatialReference:v}=e;let i,p=0,d=0;if(a.children.some(S=>{const{width:c,height:g,resolution:l,x:n,y:m}=S,y=n+l*c,f=m-l*g;return r>=n&&r<=y&&o<=m&&o>=f&&(i=new U({xmin:n,ymin:f,xmax:y,ymax:m,spatialReference:v}),p=c,d=g,!0)}),!i)return null;const u=i.width/p,C=Math.round((r-i.xmin)/u),$=Math.round((i.ymax-o)/u);return{extent:i,width:p,height:d,x:C,y:$}}async doRefresh(){this.requestUpdate()}isUpdating(){return this.strategy.updating||this.updateRequested}fetchImage(t,e,a,r){return this.layer.fetchImageBitmap(t,e,a,{timeExtent:this.timeExtent,...r})}};h([x()],s.prototype,"strategy",void 0),h([x()],s.prototype,"updating",void 0),s=h([H("esri.views.2d.layers.WMSLayerView2D")],s);const st=s;export{st as default};