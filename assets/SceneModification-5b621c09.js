import{ac as r,ad as n,ae as c,nx as y,af as m,eQ as f,et as u,n$ as d,pg as g,b1 as R}from"./index-607cb647.js";import{g as l}from"./persistable-4b43c5ea.js";var p;let t=p=class extends f{constructor(a){super(a),this.geometry=null,this.type="clip"}writeGeometry(a,i,o,e){if(e.layer&&e.layer.spatialReference&&!e.layer.spatialReference.equals(this.geometry.spatialReference)){if(!u(a.spatialReference,e.layer.spatialReference))return void(e&&e.messages&&e.messages.push(new d("scenemodification:unsupported","Scene modifications with incompatible spatial references are not supported",{modification:this,spatialReference:e.layer.spatialReference,context:e})));const s=new c;g(a,s,e.layer.spatialReference),i[o]=s.toJSON(e)}else i[o]=a.toJSON(e);delete i[o].spatialReference}clone(){return new p({geometry:R(this.geometry),type:this.type})}};r([n({type:c}),l()],t.prototype,"geometry",void 0),r([y(["web-scene","portal-item"],"geometry")],t.prototype,"writeGeometry",null),r([n({type:["clip","mask","replace"],nonNullable:!0}),l()],t.prototype,"type",void 0),t=p=r([m("esri.layers.support.SceneModification")],t);const v=t;export{v as f};