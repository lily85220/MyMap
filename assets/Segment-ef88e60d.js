import{ac as p,ad as u,af as H,ah as J,a0 as K,bf as Y,r as N,bR as y,bu as M,bP as C,q$ as P,bv as G,r0 as Q,r1 as tt,a3 as et,bD as T,by as st,n as _,r2 as L,cZ as j,bT as B,bE as D,bt as w,bC as $,ct as it,bB as ot,df as z,cm as S,bn as rt,jL as at,et as nt,r3 as ht,r4 as ct}from"./index-607cb647.js";import{t as lt}from"./LineVisualElement-c19a43df.js";import{t as I,x as dt}from"./TextOverlayItem-6aa16a85.js";let d=class extends J{get startPosition(){return[this.startX,this.startY]}set startPosition(i){this._set("startX",i[0]),this._set("startY",i[1])}get endPosition(){return[this.endX,this.endY]}set endPosition(i){this._set("endX",i[0]),this._set("endY",i[1])}constructor(i){super(i),this.startX=0,this.startY=0,this.endX=0,this.endY=0,this.width=1,this.color=[0,0,0,.5],this.visible=!0}get _strokeStyle(){const i=this.color;return`rgba(${i[0]}, ${i[1]}, ${i[2]}, ${i[3]})`}get _lineCap(){return"round"}render(){const{height:i,left:t,top:e,width:s,x1:a,x2:r,y1:m,y2:c}=this._calculateCoordinates(F),h=`stroke: ${this._strokeStyle}; stroke-width: ${this.width}; stroke-linecap: ${this._lineCap};`;return I("div",{classes:{"esri-line-overlay-item":!0},styles:{left:t+"px",top:e+"px",width:s+"px",height:i+"px",visibility:this.visible?"visible":"hidden"}},[I("svg",{width:s,height:i},[I("line",{x1:a,y1:m,x2:r,y2:c,style:h})])])}renderCanvas(i){if(!this.visible)return;i.strokeStyle=this._strokeStyle,i.lineWidth=this.width,i.lineCap=this._lineCap;const t=this._calculateCoordinates(F);i.beginPath(),i.moveTo(t.left+t.x1,t.top+t.y1),i.lineTo(t.left+t.x2,t.top+t.y2),i.stroke()}_calculateCoordinates(i){const t=Math.min(this.startX,this.endX),e=Math.max(this.startX,this.endX),s=Math.min(this.startY,this.endY),a=Math.max(this.startY,this.endY),r=this.width;return i.left=t-r,i.top=s-r,i.width=e-t+2*r,i.height=Math.max(20,a-s+2*r),i.x1=this.startX-t+r,i.y1=this.startY-s+r,i.x2=this.endX-t+r,i.y2=this.endY-s+r,i}};p([u()],d.prototype,"startX",void 0),p([u()],d.prototype,"startY",void 0),p([u()],d.prototype,"endX",void 0),p([u()],d.prototype,"endY",void 0),p([u()],d.prototype,"startPosition",null),p([u()],d.prototype,"endPosition",null),p([u()],d.prototype,"width",void 0),p([u()],d.prototype,"color",void 0),p([u()],d.prototype,"visible",void 0),p([u({readOnly:!0})],d.prototype,"_strokeStyle",null),d=p([H("esri.views.overlay.LineOverlayItem")],d);const F={left:0,top:0,width:0,height:0,x1:0,y1:0,x2:0,y2:0},pt=d;class ft extends lt{constructor(t){super(t.view),this._handles=new K,this._textItem=null,this._calloutItem=null,this._showCallout=!0,this._showText=!0,this._geometry=null,this._text="-",this._fontSize=14,this._backgroundColor=new Y([0,0,0,.6]),this._textColor=new Y([255,255,255]),this._distance=25,this._anchor="right",this.updatePositionOnCameraMove=!0,this.applyProps(t)}get geometry(){return this._geometry}set geometry(t){this._geometry=t,this.updateLabelPosition()}get textItem(){return this._textItem}get text(){return this._text}set text(t){this._text=t,this.attached&&(this._textItem.text=this._text)}get fontSize(){return this._fontSize}set fontSize(t){this._fontSize=t,this.attached&&(this._textItem.fontSize=this._fontSize)}get backgroundColor(){return this._backgroundColor}set backgroundColor(t){this._backgroundColor=t,this.attached&&(this._textItem.backgroundColor=this._backgroundColor)}get textColor(){return this._textColor}set textColor(t){this._textColor=t,this.attached&&(this._textItem.textColor=this._textColor)}get distance(){return this._distance}set distance(t){this._distance!==t&&(this._distance=t,this.updateLabelPosition())}get anchor(){return this._anchor}set anchor(t){this._anchor!==t&&(this._anchor=t,this.updateLabelPosition())}overlaps(t){var e;return!!this.attached&&this.textItem.visible&&t.textItem.visible&&!!((e=this.view.overlay)!=null&&e.overlaps(this._textItem,t.textItem))}updateLabelPosition(){if(!this.attached)return;this._showText=!1,this._showCallout=!1;const{geometry:t,view:e,visible:s}=this;if(N(t)&&e._stage)switch(t.type){case"point":if(!this._computeLabelPositionFromPoint(t.point,x))break;if(t.callout){const a=e.state.camera,r=t.callout.distance;y(n,n,[0,t.callout.offset]),a.renderToScreen(n,x),M(o,0,1),C(o,o,r*a.pixelRatio),y(o,o,n),a.renderToScreen(o,v),this._showCallout=this._updatePosition(x,v)}else this._textItem.position=[x[0],x[1]],this._textItem.anchor="center";this._showText=!0;break;case"corner":if(!this._computeLabelPositionFromCorner(t,this._distance,x,v))break;this._showCallout=this._updatePosition(x,v),this._showText=!0;break;case"segment":{if(!this._computeLabelPositionFromSegment(t,this._distance,this._anchor,x,v))break;this._showText=!0;const a=this._updatePosition(x,v);this._showCallout=t.callout!==!1&&a,this._showCallout||(this._textItem.anchor="center")}}this.updateVisibility(s)}_computeLabelPositionFromPoint(t,e){const s=this.view.state.camera;return s.projectToRenderScreen(t,n),!(n[2]<0||n[2]>1)&&(s.renderToScreen(n,e),!0)}_computeLabelPositionFromCorner(t,e,s,a){if(!t)return!1;const r=this.view.state.camera;return A(t.left,1,r,b),P(b,b),A(t.right,0,r,U),y(o,b,U),P(o,o),G(o,o),r.projectToRenderScreen(t.left.endRenderSpace,n),!(n[2]<0||n[2]>1)&&(r.renderToScreen(n,s),C(o,o,e*r.pixelRatio),y(o,o,n),r.renderToScreen(o,a),!0)}_computeLabelPositionFromSegment(t,e,s,a,r){if(!t)return!1;const m=t.segment,c=this.view.state.camera;Q(m.startRenderSpace,m.endRenderSpace,c,b),M(o,-b[1],b[0]);let h=!1;switch(s){case"top":h=o[1]<0;break;case"bottom":h=o[1]>0;break;case"left":h=o[0]>0;break;case"right":h=o[0]<0}if(h&&P(o,o),tt(o)===0)switch(s){case"top":o[1]=1;break;case"bottom":o[1]=-1;break;case"left":o[0]=-1;break;case"right":o[0]=1}return m.eval(mt[t.sampleLocation],q),c.projectToRenderScreen(q,n),!(n[2]<0||n[2]>1)&&(c.renderToScreen(n,a),C(o,o,e*c.pixelRatio),y(o,o,n),c.renderToScreen(o,r),!0)}_updatePosition(t,e){if(e){const s=e[0]-t[0],a=e[1]-t[1];return this._textItem.position=[e[0],e[1]],this._textItem.anchor=Math.abs(s)>Math.abs(a)?s>0?"left":"right":a>0?"top":"bottom",this._calloutItem.startPosition=[t[0],t[1]],this._calloutItem.endPosition=[e[0],e[1]],!0}return this._textItem.position=[t[0],t[1]],this._textItem.anchor="center",!1}createResources(){var t;this._textItem=new dt({visible:!0,text:this._text,fontSize:this._fontSize,backgroundColor:this._backgroundColor,textColor:this._textColor}),this._calloutItem=new pt({visible:!0,width:2}),this.updateLabelPosition(),(t=this.view.overlay)==null||t.items.addMany([this._textItem,this._calloutItem]),this.updatePositionOnCameraMove&&this._handles.add(et(()=>this.view.state.camera,()=>this.updateLabelPosition()))}destroyResources(){this.view.overlay&&!this.view.overlay.destroyed&&this.view.overlay.items.removeMany([this._textItem,this._calloutItem]),this._handles.removeAll()}updateVisibility(t){this._textItem.visible=this._showText&&t,this._calloutItem.visible=this._showCallout&&t}}function A(i,t,e,s){i.eval(t,R,V),T(O,R,V),e.projectToRenderScreen(R,E),e.projectToRenderScreen(O,W),st(s,ut,_t),G(s,s)}function yt(i){switch(i){case"top":return"bottom";case"right":return"left";case"bottom":return"top";case"left":return"right"}}const R=_(),O=_(),V=_(),b=L(),U=L(),o=L(),q=_(),n=j(),x=B(),v=B(),E=j(),_t=E,W=j(),ut=W,mt={start:0,center:.5,end:1};class Z{constructor(t=_(),e=_()){this.startRenderSpace=t,this.endRenderSpace=e,this.type="euclidean"}eval(t,e,s){return D(e,this.startRenderSpace,this.endRenderSpace,t),s&&(w(s,this.endRenderSpace,this.startRenderSpace),$(s,s)),e}createRenderGeometry(t,e){const s=[],a=[],r=(c,h)=>{const l=k;w(l,c,t),s.push([l[0],l[1],l[2]]),a.push([h[0],h[1],h[2]])},m=e.worldUpAtPosition(this.eval(.5,f),it.get());return r(this.startRenderSpace,m),r(this.endRenderSpace,m),{points:s,normals:a}}static fromPositionAndVector(t,e,s=1){return ot(f,e,s),T(f,t,f),new Z(z(t),z(f))}}class gt{_projectIn(t,e){this._project?S(t,this.renderSpatialReference,e,this._pcpf):rt(e,t)}constructor(t,e,s){this.startRenderSpace=t,this.endRenderSpace=e,this.renderSpatialReference=s,this.type="geodesic",this._start=_(),this._end=_(),this._pcpf=at(s),this._project=nt(s,this._pcpf),this._projectIn(t,this._start),this._projectIn(e,this._end)}eval(t,e,s){if(this._project)if(s){const a=k;ht(this._start,this._end,t,e,a),T(g,e,a),S(e,this._pcpf,e,this.renderSpatialReference),S(g,this._pcpf,g,this.renderSpatialReference),w(s,g,e),$(s,s)}else ct(this._start,this._end,t,e),S(e,this._pcpf,e,this.renderSpatialReference);else D(e,this._start,this._end,t),s&&(w(s,this._end,this._start),$(s,s));return e}createRenderGeometry(t,e){const s=[],a=[],r=(c,h)=>{const l=g;w(l,c,t),s.push([l[0],l[1],l[2]]),a.push([h[0],h[1],h[2]])};for(let c=0;c<128;++c){const h=c/127,l=f,X=k;this.eval(h,l),e.worldUpAtPosition(l,X),r(l,X)}return{points:s,normals:a}}}const f=_(),k=_(),g=_();export{yt as I,Z as f,ft as g,gt as m};