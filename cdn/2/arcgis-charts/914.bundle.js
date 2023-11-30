"use strict";(self.webpackChunkexb_client=self.webpackChunkexb_client||[]).push([[914],{88464:(t,e,i)=>{i.d(e,{AM:()=>p});var s=i(36663),r=i(74396),n=i(39994),o=i(67134),h=i(13802),l=i(81977),a=(i(7283),i(40266)),d=i(13045),c=i(60278);const u=-1;let p=class extends r.Z{constructor(t){super(t),this._from=null,this._to=null,this._final=null,this._current=[],this._time=0,this.duration=(0,n.Z)("mapview-transitions-duration"),this.effects=[]}set effect(t){if(this._get("effect")!==(t=t||"")){this._set("effect",t);try{this._transitionTo(f(t))}catch(e){this._transitionTo([]),h.Z.getLogger(this).warn("Invalid Effect",{effect:t,error:e})}}}get hasEffects(){return this.transitioning||!!this.effects.length}set scale(t){this._updateForScale(t)}get transitioning(){return null!==this._to}canTransitionTo(t){try{return this.scale>0&&_(this._current,f(t),this.scale)}catch{return!1}}transitionStep(t,e){this._applyTimeTransition(t),this._updateForScale(e)}endTransitions(){this._applyTimeTransition(this.duration)}_transitionTo(t){this.scale>0&&_(this._current,t,this.scale)?(this._final=t,this._to=(0,o.d9)(t),function(t,e,i){const s=t.length>e.length?t:e,r=t.length>e.length?e:t,n=r[r.length-1],o=n?.scale??i,h=n?.effects??[];for(let t=r.length;t<s.length;t++)r.push({scale:o,effects:[...h]});for(let t=0;t<s.length;t++)r[t].scale=r[t].scale===u?i:r[t].scale,s[t].scale=s[t].scale===u?i:s[t].scale,(0,c.uF)(r[t].effects,s[t].effects)}(this._current,this._to,this.scale),this._from=(0,o.d9)(this._current),this._time=0):(this._from=this._to=this._final=null,this._current=t),this._set("effects",this._current[0]?(0,o.d9)(this._current[0].effects):[])}_applyTimeTransition(t){if(!(this._to&&this._from&&this._current&&this._final))return;this._time+=t;const e=Math.min(1,this._time/this.duration);for(let t=0;t<this._current.length;t++){const i=this._current[t],s=this._from[t],r=this._to[t];i.scale=g(s.scale,r.scale,e);for(let t=0;t<i.effects.length;t++){const n=i.effects[t],o=s.effects[t],h=r.effects[t];n.interpolate(o,h,e)}}1===e&&(this._current=this._final,this._set("effects",this._current[0]?(0,o.d9)(this._current[0].effects):[]),this._from=this._to=this._final=null)}_updateForScale(t){if(this._set("scale",t),0===this._current.length)return;const e=this._current,i=this._current.length-1;let s,r,n=1;if(1===e.length||t>=e[0].scale)r=s=e[0].effects;else if(t<=e[i].scale)r=s=e[i].effects;else for(let o=0;o<i;o++){const i=e[o],h=e[o+1];if(i.scale>=t&&h.scale<=t){n=(t-i.scale)/(h.scale-i.scale),s=i.effects,r=h.effects;break}}for(let t=0;t<this.effects.length;t++)this.effects[t].interpolate(s[t],r[t],n)}};function f(t){const e=(0,d.Q)(t)||[];return function(t){const e=t[0];return!!e&&"type"in e}(e)?[{scale:u,effects:e}]:e}function _(t,e,i){return!t[0]?.effects||!e[0]?.effects||!((t[0]?.scale===u||e[0]?.scale===u)&&(t.length>1||e.length>1)&&i<=0)&&(0,c.AS)(t[0].effects,e[0].effects)}function g(t,e,i){return t+(e-t)*i}(0,s._)([(0,l.Cb)()],p.prototype,"_to",void 0),(0,s._)([(0,l.Cb)()],p.prototype,"duration",void 0),(0,s._)([(0,l.Cb)({value:""})],p.prototype,"effect",null),(0,s._)([(0,l.Cb)({readOnly:!0})],p.prototype,"effects",void 0),(0,s._)([(0,l.Cb)({readOnly:!0})],p.prototype,"hasEffects",null),(0,s._)([(0,l.Cb)({value:0})],p.prototype,"scale",null),(0,s._)([(0,l.Cb)({readOnly:!0})],p.prototype,"transitioning",null),p=(0,s._)([(0,a.j)("esri.layers.effects.EffectView")],p)},10530:(t,e,i)=>{i.d(e,{W:()=>h});var s=i(19710),r=i(88464),n=i(51118),o=i(75995);class h extends n.s{constructor(){super(...arguments),this._childrenSet=new Set,this._needsSort=!1,this.children=[],this._effectView=null,this._highlightOptions=null,this._highlightGradient=null}get blendMode(){return this._blendMode}set blendMode(t){this._blendMode=t,this.requestRender()}get clips(){return this._clips}set clips(t){this._clips=t,this.children.forEach((e=>e.clips=t))}get computedEffects(){return this._effectView?.effects??null}get effect(){return this._effectView?.effect??""}set effect(t){(this._effectView||t)&&(this._effectView||(this._effectView=new r.AM),this._effectView.effect=t,this.requestRender())}get highlightOptions(){return this._highlightOptions}set highlightOptions(t){if(!t)return this._highlightOptions=null,void(this._highlightGradient&&(this._highlightGradient.destroy(),this._highlightGradient=null,this.requestRender()));this._highlightOptions&&this._highlightOptions.equals(t)||(this._highlightOptions=t,this._highlightGradient||(this._highlightGradient=new o.Z),this._highlightGradient.setHighlightOptions(t),this.requestRender())}updateTransitionProperties(t,e){super.updateTransitionProperties(t,e),this._effectView&&(this._effectView.transitionStep(t,e),this._effectView.transitioning&&this.requestRender())}doRender(t){const e=this.createRenderParams(t);this.renderChildren(e)}addChild(t){return this.addChildAt(t,this.children.length)}addChildAt(t,e=this.children.length){if(!t)return t;if(this.contains(t))return t;this._needsSort=!0;const i=t.parent;return i&&i!==this&&i.removeChild(t),e>=this.children.length?this.children.push(t):this.children.splice(e,0,t),this._childrenSet.add(t),t.parent=this,t.stage=this.stage,this!==this.stage&&(t.clips=this.clips),this.requestRender(),t}contains(t){return this._childrenSet.has(t)}endTransitions(){super.endTransitions(),this._effectView&&(this._effectView.endTransitions(),this.requestRender())}removeAllChildren(){this._childrenSet.clear(),this._needsSort=!0;for(const t of this.children)this!==this.stage&&(t.clips=null),t.stage=null,t.parent=null;this.children.length=0}removeChild(t){return this.contains(t)?this.removeChildAt(this.children.indexOf(t)):t}removeChildAt(t){if(t<0||t>=this.children.length)return null;this._needsSort=!0;const e=this.children.splice(t,1)[0];return this._childrenSet.delete(e),this!==this.stage&&(e.clips=null),e.stage=null,e.parent=null,e}sortChildren(t){this._needsSort&&(this.children.sort(t),this._needsSort=!1)}beforeRender(t){super.beforeRender(t);for(const e of this.children)e.beforeRender(t)}afterRender(t){super.afterRender(t);for(const e of this.children)e.afterRender(t)}_createTransforms(){return{dvs:(0,s.c)()}}onAttach(){super.onAttach();const t=this.stage;for(const e of this.children)e.stage=t}onDetach(){super.onDetach();for(const t of this.children)t.stage=null}renderChildren(t){for(const e of this.children)e.processRender(t)}createRenderParams(t){return{...t,blendMode:this.blendMode,effects:this.computedEffects,globalOpacity:t.globalOpacity*this.computedOpacity,inFadeTransition:this.inFadeTransition,highlightGradient:this._highlightGradient||t.highlightGradient}}}},51118:(t,e,i)=>{i.d(e,{s:()=>h});var s=i(31355),r=i(39994),n=i(78668);const o=1/(0,r.Z)("mapview-transitions-duration");class h extends s.Z{constructor(){super(...arguments),this._fadeOutResolver=null,this._fadeInResolver=null,this._clips=null,this.computedVisible=!0,this.computedOpacity=1,this.fadeTransitionEnabled=!1,this.inFadeTransition=!1,this._isReady=!1,this._opacity=1,this.parent=null,this._stage=null,this._visible=!0}get clips(){return this._clips}set clips(t){this._clips=t,this.requestRender()}get isReady(){return this._isReady}get opacity(){return this._opacity}set opacity(t){this._opacity!==t&&(this._opacity=Math.min(1,Math.max(t,0)),this.requestRender())}get stage(){return this._stage}set stage(t){if(this._stage===t)return;const e=this._stage;this._stage=t,t?this._stage?.untrashDisplayObject(this)||(this.onAttach(),this.emit("attach")):e?.trashDisplayObject(this)}get transforms(){return this._getTransforms()}_getTransforms(){return null==this._transforms&&(this._transforms=this._createTransforms()),this._transforms}get visible(){return this._visible}set visible(t){this._visible!==t&&(this._visible=t,this.requestRender())}fadeIn(){return this._fadeInResolver||(this._fadeOutResolver&&(this._fadeOutResolver(),this._fadeOutResolver=null),this.opacity=1,this.computedOpacity=0,this.fadeTransitionEnabled=!0,this._fadeInResolver=(0,n.hh)(),this.requestRender()),this._fadeInResolver.promise}fadeOut(){return this._fadeOutResolver||(this.opacity=0,this._fadeInResolver&&(this._fadeInResolver(),this._fadeInResolver=null),this.fadeTransitionEnabled=!0,this._fadeOutResolver=(0,n.hh)(),this.requestRender()),this._fadeOutResolver.promise}endTransitions(){this._fadeInResolver?.(),this._fadeInResolver=null,this._fadeOutResolver?.(),this._fadeOutResolver=null,this.computedOpacity=this.visible?this.opacity:0,this.requestRender()}beforeRender(t){this.updateTransitionProperties(t.deltaTime,t.state.scale)}afterRender(t){this._fadeInResolver&&this.computedOpacity===this.opacity?(this._fadeInResolver(),this._fadeInResolver=null):this._fadeOutResolver&&0===this.computedOpacity&&(this._fadeOutResolver(),this._fadeOutResolver=null)}remove(){this.parent?.removeChild(this)}setTransform(t){}processRender(t){this.stage&&this.computedVisible&&this.doRender(t)}requestRender(){this.stage&&this.stage.requestRender()}processDetach(){this._fadeInResolver&&(this._fadeInResolver(),this._fadeInResolver=null),this._fadeOutResolver&&(this._fadeOutResolver(),this._fadeOutResolver=null),this.onDetach(),this.emit("detach")}updateTransitionProperties(t,e){if(this.fadeTransitionEnabled){const e=this._fadeOutResolver||!this.visible?0:this.opacity,i=this.computedOpacity;if(i===e)this.computedVisible=this.visible;else{const s=t*o;this.computedOpacity=i>e?Math.max(e,i-s):Math.min(e,i+s),this.computedVisible=this.computedOpacity>0;const r=e===this.computedOpacity;this.inFadeTransition=!r,r||this.requestRender()}}else this.computedOpacity=this.opacity,this.computedVisible=this.visible}onAttach(){}onDetach(){}doRender(t){}ready(){this._isReady||(this._isReady=!0,this.emit("isReady"),this.requestRender())}}},75995:(t,e,i)=>{i.d(e,{Z:()=>c});var s=i(13802),r=i(14266),n=i(28434),o=i(91907),h=i(71449),l=i(80479);const a=s.Z.getLogger("esri.views.2d.engine.webgl.painter.highlight.HighlightGradient"),d=[0,0,0,0];class c{constructor(){this._convertedHighlightOptions={fillColor:[.2*.75,.6*.75,.675,.75],outlineColor:[.2*.9,.54,.81,.9],outlinePosition:n.OQ.outlinePosition,outlineWidth:n.OQ.outlineWidth,innerHaloWidth:n.OQ.innerHaloWidth,outerHaloWidth:n.OQ.outerHaloWidth},this._shadeTexChanged=!0,this._texelData=new Uint8Array(4*n.Ft),this._minMaxDistance=[0,0]}setHighlightOptions(t){const e=this._convertedHighlightOptions;!function(t,e){e.fillColor[0]=t.color.r/255,e.fillColor[1]=t.color.g/255,e.fillColor[2]=t.color.b/255,e.fillColor[3]=t.color.a,t.haloColor?(e.outlineColor[0]=t.haloColor.r/255,e.outlineColor[1]=t.haloColor.g/255,e.outlineColor[2]=t.haloColor.b/255,e.outlineColor[3]=t.haloColor.a):(e.outlineColor[0]=e.fillColor[0],e.outlineColor[1]=e.fillColor[1],e.outlineColor[2]=e.fillColor[2],e.outlineColor[3]=e.fillColor[3]),e.fillColor[3]*=t.fillOpacity,e.outlineColor[3]*=t.haloOpacity,e.fillColor[0]*=e.fillColor[3],e.fillColor[1]*=e.fillColor[3],e.fillColor[2]*=e.fillColor[3],e.outlineColor[0]*=e.outlineColor[3],e.outlineColor[1]*=e.outlineColor[3],e.outlineColor[2]*=e.outlineColor[3],e.outlineWidth=n.OQ.outlineWidth,e.outerHaloWidth=n.OQ.outerHaloWidth,e.innerHaloWidth=n.OQ.innerHaloWidth,e.outlinePosition=n.OQ.outlinePosition}(t,e);const i=e.outlinePosition-e.outlineWidth/2-e.outerHaloWidth,s=e.outlinePosition-e.outlineWidth/2,r=e.outlinePosition+e.outlineWidth/2,o=e.outlinePosition+e.outlineWidth/2+e.innerHaloWidth,h=Math.sqrt(Math.PI/2)*n.tM,l=Math.abs(i)>h?Math.round(10*(Math.abs(i)-h))/10:0,c=Math.abs(o)>h?Math.round(10*(Math.abs(o)-h))/10:0;let u;l&&!c?a.error("The outer rim of the highlight is "+l+"px away from the edge of the feature; consider reducing some width values or shifting the outline position towards positive values (inwards)."):!l&&c?a.error("The inner rim of the highlight is "+c+"px away from the edge of the feature; consider reducing some width values or shifting the outline position towards negative values (outwards)."):l&&c&&a.error("The highlight is "+Math.max(l,c)+"px away from the edge of the feature; consider reducing some width values.");const p=[void 0,void 0,void 0,void 0];function f(t,e,i){p[0]=(1-i)*t[0]+i*e[0],p[1]=(1-i)*t[1]+i*e[1],p[2]=(1-i)*t[2]+i*e[2],p[3]=(1-i)*t[3]+i*e[3]}const{_texelData:_}=this;for(let t=0;t<n.Ft;++t)u=i+t/(n.Ft-1)*(o-i),u<i?(p[4*t]=0,p[4*t+1]=0,p[4*t+2]=0,p[4*t+3]=0):u<s?f(d,e.outlineColor,(u-i)/(s-i)):u<r?[p[0],p[1],p[2],p[3]]=e.outlineColor:u<o?f(e.outlineColor,e.fillColor,(u-r)/(o-r)):[p[4*t],p[4*t+1],p[4*t+2],p[4*t+3]]=e.fillColor,_[4*t]=255*p[0],_[4*t+1]=255*p[1],_[4*t+2]=255*p[2],_[4*t+3]=255*p[3];this._minMaxDistance[0]=i,this._minMaxDistance[1]=o,this._shadeTexChanged=!0}applyHighlightOptions(t,e){if(!this._shadeTex){const e=new l.X;e.wrapMode=o.e8.CLAMP_TO_EDGE,e.width=n.Ft,e.height=1,this._shadeTex=new h.x(t,e)}this._shadeTexChanged&&(this._shadeTex.updateData(0,0,0,n.Ft,1,this._texelData),this._shadeTexChanged=!1),t.bindTexture(this._shadeTex,r.Jw),e.setUniform2fv("u_minMaxDistance",this._minMaxDistance)}destroy(){this._shadeTex?.dispose(),this._shadeTex=null}}},28434:(t,e,i)=>{i.d(e,{Ft:()=>o,OQ:()=>h,QU:()=>n,n5:()=>r,tM:()=>s});const s=1,r=[0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1],n=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],o=256,h={outlineWidth:1.3,outerHaloWidth:.4,innerHaloWidth:.4,outlinePosition:0}},80347:(t,e,i)=>{i.d(e,{y:()=>M});var s=i(36663),r=i(6865),n=i(58811),o=i(70375),h=i(76868),l=i(81977),a=(i(7283),i(7753),i(39994),i(40266)),d=i(10530),c=i(98114),u=i(82064);let p=class extends u.wq{get version(){return this.commitVersionProperties(),(this._get("version")||0)+1}};(0,s._)([(0,l.Cb)({readOnly:!0})],p.prototype,"version",null),p=(0,s._)([(0,a.j)("esri.views.layers.support.ClipArea")],p);const f=p;var _;let g=_=class extends f{constructor(t){super(t),this.type="rect",this.left=null,this.right=null,this.top=null,this.bottom=null}clone(){return new _({left:this.left,right:this.right,top:this.top,bottom:this.bottom})}commitVersionProperties(){this.commitProperty("left"),this.commitProperty("right"),this.commitProperty("top"),this.commitProperty("bottom")}};(0,s._)([(0,l.Cb)({type:[Number,String],json:{write:!0}})],g.prototype,"left",void 0),(0,s._)([(0,l.Cb)({type:[Number,String],json:{write:!0}})],g.prototype,"right",void 0),(0,s._)([(0,l.Cb)({type:[Number,String],json:{write:!0}})],g.prototype,"top",void 0),(0,s._)([(0,l.Cb)({type:[Number,String],json:{write:!0}})],g.prototype,"bottom",void 0),g=_=(0,s._)([(0,a.j)("esri.views.layers.support.ClipRect")],g);const y=g;i(91957);var v,m=i(20031),b=i(53736),R=i(91772),C=i(89542);const w={base:m.Z,key:"type",typeMap:{extent:R.Z,polygon:C.Z}};let O=v=class extends f{constructor(t){super(t),this.type="geometry",this.geometry=null}clone(){return new v({geometry:this.geometry?.clone()??null})}commitVersionProperties(){this.commitProperty("geometry")}};(0,s._)([(0,l.Cb)({types:w,json:{read:b.im,write:!0}})],O.prototype,"geometry",void 0),O=v=(0,s._)([(0,a.j)("esri.views.layers.support.Geometry")],O);const T=O;let S=class extends f{constructor(t){super(t),this.type="path",this.path=[]}commitVersionProperties(){this.commitProperty("path")}};(0,s._)([(0,l.Cb)({type:[[[Number]]],json:{write:!0}})],S.prototype,"path",void 0),S=(0,s._)([(0,a.j)("esri.views.layers.support.Path")],S);const x=S,P=r.Z.ofType({key:"type",base:null,typeMap:{rect:y,path:x,geometry:T}}),M=t=>{let e=class extends t{constructor(){super(...arguments),this.attached=!1,this.clips=new P,this.lastUpdateId=-1,this.moving=!1,this.updateRequested=!1,this.visibleAtCurrentScale=!1,this.highlightOptions=null}initialize(){const t=this.view?.spatialReferenceLocked??!0,e=this.view?.spatialReference;e&&t&&!this.spatialReferenceSupported?this.addResolvingPromise(Promise.reject(new o.Z("layerview:spatial-reference-incompatible","The spatial reference of this layer does not meet the requirements of the view",{layer:this.layer}))):(this.container||(this.container=new d.W),this.container.fadeTransitionEnabled=!0,this.container.visible=!1,this.container.endTransitions(),this.addHandles([(0,h.YP)((()=>this.suspended),(t=>{this.container&&(this.container.visible=!t),this.view&&!t&&this.updateRequested&&this.view.requestUpdate()}),h.tX),(0,h.YP)((()=>this.layer?.opacity??1),(t=>{this.container&&(this.container.opacity=t)}),h.tX),(0,h.YP)((()=>this.layer&&"blendMode"in this.layer?this.layer.blendMode:"normal"),(t=>{this.container&&(this.container.blendMode=t)}),h.tX),(0,h.YP)((()=>this.layer&&"effect"in this.layer?this.layer.effect:null),(t=>{this.container&&(this.container.effect=t)}),h.tX),(0,h.YP)((()=>this.highlightOptions),(t=>this.container.highlightOptions=t),h.tX),(0,h.on)((()=>this.clips),"change",(()=>{this.container&&(this.container.clips=this.clips)}),h.tX),(0,h.YP)((()=>({scale:this.view?.scale,scaleRange:this.layer&&"effectiveScaleRange"in this.layer?this.layer.effectiveScaleRange:null})),(({scale:t})=>{const e=null!=t&&this.isVisibleAtScale(t);e!==this.visibleAtCurrentScale&&this._set("visibleAtCurrentScale",e)}),h.tX)],"constructor"),this.view?.whenLayerView?this.view.whenLayerView(this.layer).then((t=>{t===this&&this.processAttach()}),(()=>{})):this.when().then((()=>{this.processAttach()}),(()=>{})))}destroy(){this.processDetach(),this.updateRequested=!1}get spatialReferenceSupported(){const t=this.view?.spatialReference;return null==t||this.supportsSpatialReference(t)}get updating(){return this.spatialReferenceSupported&&(!this.attached||!this.suspended&&(this.updateRequested||this.isUpdating())||!!this.updatingHandles?.updating)}processAttach(){this.isResolved()&&!this.attached&&!this.destroyed&&this.spatialReferenceSupported&&(this.attach(),this.attached=!0,this.requestUpdate())}processDetach(){this.attached&&(this.attached=!1,this.removeHandles("attach"),this.detach(),this.updateRequested=!1)}isVisibleAtScale(t){const e=this.layer&&"effectiveScaleRange"in this.layer?this.layer.effectiveScaleRange:null;if(!e)return!0;const{minScale:i,maxScale:s}=e;return(0===i||t<=i)&&(0===s||t>=s)}requestUpdate(){this.destroyed||this.updateRequested||(this.updateRequested=!0,this.suspended||this.view.requestUpdate())}processUpdate(t){!this.isFulfilled()||this.isResolved()?(this._set("updateParameters",t),this.updateRequested&&!this.suspended&&(this.updateRequested=!1,this.update(t))):this.updateRequested=!1}hitTest(t,e){return Promise.resolve(null)}supportsSpatialReference(t){return!0}canResume(){return!!this.spatialReferenceSupported&&!!super.canResume()&&this.visibleAtCurrentScale}getSuspendInfo(){const t=super.getSuspendInfo(),e=!this.spatialReferenceSupported,i=this.visibleAtCurrentScale;return e&&(t.spatialReferenceNotSupported=e),i&&(t.outsideScaleRange=i),t}addAttachHandles(t){this.addHandles(t,"attach")}};return(0,s._)([(0,l.Cb)()],e.prototype,"attached",void 0),(0,s._)([(0,l.Cb)({type:P,set(t){const e=(0,n.Z)(t,this._get("clips"),P);this._set("clips",e)}})],e.prototype,"clips",void 0),(0,s._)([(0,l.Cb)()],e.prototype,"container",void 0),(0,s._)([(0,l.Cb)()],e.prototype,"moving",void 0),(0,s._)([(0,l.Cb)({readOnly:!0})],e.prototype,"spatialReferenceSupported",null),(0,s._)([(0,l.Cb)({readOnly:!0})],e.prototype,"updateParameters",void 0),(0,s._)([(0,l.Cb)()],e.prototype,"updateRequested",void 0),(0,s._)([(0,l.Cb)()],e.prototype,"updating",null),(0,s._)([(0,l.Cb)()],e.prototype,"view",void 0),(0,s._)([(0,l.Cb)({readOnly:!0})],e.prototype,"visibleAtCurrentScale",void 0),(0,s._)([(0,l.Cb)({type:c.Z})],e.prototype,"highlightOptions",void 0),e=(0,s._)([(0,a.j)("esri.views.2d.layers.LayerView2D")],e),e}},26216:(t,e,i)=>{i.d(e,{Z:()=>p});var s=i(36663),r=i(74396),n=i(31355),o=i(53280),h=i(86618),l=i(13802),a=i(64189),d=i(81977),c=(i(7283),i(7753),i(39994),i(40266));let u=class extends((0,o.p)((0,h.IG)((0,a.v)(n.Z.EventedMixin(r.Z))))){constructor(t){super(t),this.layer=null,this.parent=null}initialize(){this.when().catch((t=>{if("layerview:create-error"!==t.name){const e=this.layer&&this.layer.id||"no id",i=this.layer&&this.layer.title||"no title";l.Z.getLogger(this).error("#resolve()",`Failed to resolve layer view (layer title: '${i}', id: '${e}')`,t)}}))}get fullOpacity(){return(this.layer?.opacity??1)*(this.parent?.fullOpacity??1)}get suspended(){return!this.canResume()}get suspendInfo(){return this.getSuspendInfo()}get legendEnabled(){return!this.suspended&&!0===this.layer?.legendEnabled}get updating(){return!(!this.updatingHandles?.updating&&!this.isUpdating())}get updatingProgress(){return this.updating?0:1}get visible(){return!0===this.layer?.visible}set visible(t){this._overrideIfSome("visible",t)}canResume(){return this.visible&&this.layer?.loaded&&!this.parent?.suspended&&this.view?.ready||!1}getSuspendInfo(){const t=this.parent&&this.parent.suspended?this.parent.suspendInfo:{};return this.view&&this.view.ready||(t.viewNotReady=!0),this.layer&&this.layer.loaded||(t.layerNotLoaded=!0),this.visible||(t.layerInvisible=!0),t}isUpdating(){return!1}};(0,s._)([(0,d.Cb)()],u.prototype,"fullOpacity",null),(0,s._)([(0,d.Cb)()],u.prototype,"layer",void 0),(0,s._)([(0,d.Cb)()],u.prototype,"parent",void 0),(0,s._)([(0,d.Cb)({readOnly:!0})],u.prototype,"suspended",null),(0,s._)([(0,d.Cb)({readOnly:!0})],u.prototype,"suspendInfo",null),(0,s._)([(0,d.Cb)({readOnly:!0})],u.prototype,"legendEnabled",null),(0,s._)([(0,d.Cb)({type:Boolean,readOnly:!0})],u.prototype,"updating",null),(0,s._)([(0,d.Cb)({readOnly:!0})],u.prototype,"updatingProgress",null),(0,s._)([(0,d.Cb)()],u.prototype,"visible",null),(0,s._)([(0,d.Cb)()],u.prototype,"view",void 0),u=(0,s._)([(0,c.j)("esri.views.layers.LayerView")],u);const p=u}}]);