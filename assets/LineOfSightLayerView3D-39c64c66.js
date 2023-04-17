import{a3 as w,cT as d,r as e,W as o,a6 as V,a1 as _,a2 as c,v as p,eU as u,ai as A,ac as t,ad as l,af as f}from"./index-607cb647.js";import{n as v}from"./LayerView3D-2d3ccbd2.js";import{u as T}from"./LayerView-4dad4e85.js";const h="analysis-view-handles";let a=class extends v(T){constructor(s){super(s),this.type="line-of-sight-3d",this._analysisModule=null}initialize(){this.handles.add(w(()=>this.layer.analysis,s=>{this._destroyAnalysisView(),e(s)&&this._createAnalysisView(s)},d),h)}destroy(){this.handles.remove(h),this._destroyAnalysisView()}async whenAnalysisView(){if(e(this.analysisView))return this.analysisView;if(e(this._createAnalysisViewTask))return this._createAnalysisViewTask.promise;throw new o("layerview:no-analysisview-for-analysis","The analysis has not been set on the LineOfSightLayer of this layer view")}isUpdating(){return e(this._createAnalysisViewTask)||e(this.analysisView)&&this.analysisView.updating}_createAnalysisView(s){const n=V(async i=>(this.analysisView=await this._createAnalysisViewPromise(s,i),this._createAnalysisViewTask===n&&(this._createAnalysisViewTask=null),this.analysisView));this._createAnalysisViewTask=n}_destroyAnalysisView(){this.analysisView=_(this.analysisView),this._createAnalysisViewTask=c(this._createAnalysisViewTask)}async _createAnalysisViewPromise(s,n){let i=this._analysisModule;if(p(i)){const y=await this._loadAnalysisModule();this._analysisModule=y,i=y}const r=new i.default({analysis:s,view:this.view,parent:this});if(await r.when(),u(n))throw r.destroy(),new o("layerview:no-analysisview-for-analysis","The analysis has not been added to the LineOfSightLayer of this layer view",{analysis:s});return r}_loadAnalysisModule(){return A(()=>import("./LineOfSightAnalysisView3D-167eef56.js"),["assets/LineOfSightAnalysisView3D-167eef56.js","assets/index-607cb647.js","assets/index-ec7d25bd.css","assets/AnalysisView3D-36c9b446.js","assets/LineOfSightAnalysisTarget-124e820d.js","assets/persistable-4b43c5ea.js","assets/multiOriginJSONSupportUtils-c978f4c3.js","assets/resourceExtension-5b673d11.js","assets/LineVisualElement-c19a43df.js","assets/manipulatorUtils-8660face.js","assets/ImageMaterial-1084ca4a.js","assets/manipulatorUtils-864247aa.js","assets/PointVisualElement-996c1f4e.js","assets/VisualElementResources-085891b6.js","assets/analysisViewUtils-37213986.js","assets/InteractiveToolBase-78564be4.js","assets/drawUtils-99010c4a.js"])}};t([l()],a.prototype,"type",void 0),t([l()],a.prototype,"layer",void 0),t([l()],a.prototype,"analysisView",void 0),t([l()],a.prototype,"_createAnalysisViewTask",void 0),a=t([f("esri.views.3d.layers.LineOfSightLayerView3D")],a);const g=a;export{g as default};
