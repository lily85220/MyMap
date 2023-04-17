import{x5 as a,ac as m,af as l,hr as h}from"./index-607cb647.js";import{n as p}from"./BitmapTileContainer-f3f96e42.js";import{o as c}from"./BaseTileRenderer-8b7ad91a.js";import"./Bitmap-568f400f.js";import"./WGLContainer-250ba04d.js";import"./definitions-19bfb61c.js";import"./WGLBrushVTLSymbol-0e3d41a7.js";import"./enums-b1d611e3.js";import"./number-b10bd8f5.js";import"./StyleDefinition-7d58136b.js";import"./enums-4b2a86a0.js";import"./GeometryUtils-dd03fc25.js";import"./color-201e7fc6.js";import"./ShaderCompiler-77d0dcb6.js";import"./ProgramTemplate-c9a4930f.js";import"./MaterialKey-78993dcc.js";import"./alignmentUtils-ae955d28.js";import"./utils-0eaf42ad.js";import"./heatmapTextureUtils-9f08bd2e.js";import"./Container-ce8af6b1.js";import"./TileContainer-2d453d1a.js";class d{constructor(){this.gradient=null,this.height=512,this.intensities=null,this.width=512}render(i){a(i,512,this.intensities,this.gradient,this.minDensity,this.maxDensity)}}let o=class extends c{constructor(t){super(t),this._intensityInfo={minDensity:0,maxDensity:0},this.type="heatmap",this.featuresView={attributeView:{initialize:()=>{},requestUpdate:()=>{}},requestRender:()=>{}},this._container=new p(t.tileInfoView)}createTile(t){const i=this._container.createTile(t);return this.tileInfoView.getTileCoords(i.bitmap,t),i.bitmap.resolution=this.tileInfoView.getTileResolution(t),i}onConfigUpdate(){const t=this.layer.renderer;if(t.type==="heatmap"){const{minDensity:i,maxDensity:s,colorStops:n}=t;this._intensityInfo.minDensity=i,this._intensityInfo.maxDensity=s,this._gradient=h(n),this.tiles.forEach(r=>{const e=r.bitmap.source;e&&(e.minDensity=i,e.maxDensity=s,e.gradient=this._gradient,r.bitmap.invalidateTexture())})}}hitTest(){return Promise.resolve([])}install(t){t.addChild(this._container)}uninstall(t){this._container.removeAllChildren(),t.removeChild(this._container)}disposeTile(t){this._container.removeChild(t),t.destroy()}supportsRenderer(t){return t&&t.type==="heatmap"}onTileData(t){const i=this.tiles.get(t.tileKey);if(!i)return;const s=t.intensityInfo,{minDensity:n,maxDensity:r}=this._intensityInfo,e=i.bitmap.source||new d;e.intensities=s&&s.matrix||null,e.minDensity=n,e.maxDensity=r,e.gradient=this._gradient,i.bitmap.source=e,this._container.addChild(i),this._container.requestRender(),this.requestUpdate()}onTileError(t){console.error(t)}lockGPUUploads(){}unlockGPUUploads(){}fetchResource(t,i){return console.error(t),Promise.reject()}};o=m([l("esri.views.2d.layers.features.tileRenderers.HeatmapTileRenderer")],o);const G=o;export{G as default};
