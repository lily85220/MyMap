import{W as h,aH as m,ac as d,af as c}from"./index-607cb647.js";import{q as l}from"./DynamicLayerView3D-3af0c1cf.js";import{i as u}from"./WMSLayerView-b5998539.js";import"./LayerView3D-2d3ccbd2.js";import"./projectExtentUtils-e9ba58b3.js";import"./ImageMaterial-1084ca4a.js";import"./LayerView-4dad4e85.js";import"./RefreshableLayerView-43a7cacf.js";let r=class extends u(l){constructor(){super(...arguments),this.type="wms-3d"}initialize(){this.layer.serviceSupportsSpatialReference(this.view.spatialReference)||this.addResolvingPromise(Promise.reject(new h("layerview:spatial-reference-incompatible","The spatial references supported by this WMS layer are incompatible with the spatial reference of the view"))),this.updatingHandles.add(()=>{var e;return(e=this.exportImageParameters)==null?void 0:e.version},()=>{this.updatingHandles.addPromise(this.refreshDebounced())})}createFetchPopupFeaturesQuery(e){const a=this.findExtentInfoAt(e),t=a.extent,i=new m(t[0],t[1],t[2],t[3],this._spatialReference),s=a.imageSize,n=s.width,p=s.height,o=i.width/n;return{extent:i,width:n,height:p,x:Math.round((e.x-i.xmin)/o),y:Math.round((i.ymax-e.y)/o)}}getFetchOptions(){return{timeExtent:this.timeExtent}}};r=d([c("esri.views.3d.layers.WMSLayerView3D")],r);const b=r;export{b as default};