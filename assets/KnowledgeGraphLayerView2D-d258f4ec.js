import{b6 as i,mq as n,ac as s,ad as r,mW as l,af as o}from"./index-607cb647.js";import{f as h}from"./LayerView2D-7de436d6.js";import{u as d}from"./LayerView-4dad4e85.js";import"./Container-ce8af6b1.js";import"./definitions-19bfb61c.js";let t=class extends h(d){constructor(e){super(e),this.layerViews=new i}set layerViews(e){this._set("layerViews",n(e,this._get("layerViews")))}get updatingProgress(){return this.layerViews.length===0?1:this.layerViews.reduce((e,a)=>e+a.updatingProgress,0)/this.layerViews.length}attach(){this._updateStageChildren(),this.addAttachHandles(this.layerViews.on("after-changes",()=>this._updateStageChildren()))}detach(){this.container.removeAllChildren()}update(e){}moveStart(){}viewChange(){}moveEnd(){}_updateStageChildren(){this.container.removeAllChildren(),this.layerViews.forEach((e,a)=>this.container.addChildAt(e.container,a))}};s([r({cast:l})],t.prototype,"layerViews",null),s([r({readOnly:!0})],t.prototype,"updatingProgress",null),t=s([o("esri.views.2d.layers.KnowledgeGraphLayerView2D")],t);const w=t;export{w as default};