import{ac as i,af as o}from"./index-607cb647.js";import{r as a}from"./GroupContainer-c8562f37.js";import{f as m}from"./LayerView2D-7de436d6.js";import p from"./GroupLayerView-976c053f.js";import"./WGLContainer-250ba04d.js";import"./definitions-19bfb61c.js";import"./WGLBrushVTLSymbol-0e3d41a7.js";import"./enums-b1d611e3.js";import"./number-b10bd8f5.js";import"./StyleDefinition-7d58136b.js";import"./enums-4b2a86a0.js";import"./GeometryUtils-dd03fc25.js";import"./color-201e7fc6.js";import"./ShaderCompiler-77d0dcb6.js";import"./ProgramTemplate-c9a4930f.js";import"./MaterialKey-78993dcc.js";import"./alignmentUtils-ae955d28.js";import"./utils-0eaf42ad.js";import"./heatmapTextureUtils-9f08bd2e.js";import"./Container-ce8af6b1.js";import"./LayerView-4dad4e85.js";let t=class extends m(p){constructor(){super(...arguments),this.container=new a}attach(){this._updateStageChildren(),this.addAttachHandles(this.layerViews.on("after-changes",()=>this._updateStageChildren()))}detach(){this.container.removeAllChildren()}update(r){}moveStart(){}viewChange(){}moveEnd(){}_updateStageChildren(){this.container.removeAllChildren(),this.layerViews.forEach((r,e)=>this.container.addChildAt(r.container,e))}};t=i([o("esri.views.2d.layers.GroupLayerView2D")],t);const G=t;export{G as default};
