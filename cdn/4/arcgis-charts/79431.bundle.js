"use strict";(self.webpackChunkexb_client=self.webpackChunkexb_client||[]).push([[79431],{61394:(e,t,i)=>{i.d(t,{T:()=>v});var s=i(78668),r=i(58713),a=i(53791),n=i(70179),o=i(95550),h=i(17321),l=i(6923),d=i(64429),u=i(21402),c=i(91350),p=i(35119);function _(e,t){const i=t.length;if(e<t[0].value||1===i)return t[0].size;for(let s=1;s<i;s++)if(e<t[s].value){const i=(e-t[s-1].value)/(t[s].value-t[s-1].value);return t[s-1].size+i*(t[s].size-t[s-1].size)}return t[i-1].size}class g{constructor(){this.symbolLevels=[],this.vvColorValues=new Float32Array(8),this.vvColors=new Float32Array(32),this.vvOpacityValues=new Float32Array(8),this.vvOpacities=new Float32Array(8),this.vvSizeMinMaxValue=new Float32Array(4),this.outsideLabelsVisible=!1,this._vvMaterialParameters={vvSizeEnabled:!1,vvColorEnabled:!1,vvRotationEnabled:!1,vvRotationType:"geographic",vvOpacityEnabled:!1},this._technique=u.v}getSizeVVFieldStops(e){const t=this._vvSizeFieldStops;if(t)switch(t.type){case"static":return t;case"level-dependent":return t.levels[e]??(()=>{let i=1/0,s=0;for(const r in t.levels){const t=parseFloat(r),a=Math.abs(e-t);a<i&&(i=a,s=t)}if(i===1/0)return{sizes:new Float32Array([0,0,0,0,0,0]),values:new Float32Array([0,0,0,0,0,0])};const r=2**((e-s)/2),a=t.levels[s],n=new Float32Array(a.values);return n[2]*=r,n[3]*=r,{sizes:a.sizes,values:n}})();default:return}}get vvMaterialParameters(){return this._vvMaterialParameters}update(e){null!=this._vvInfo&&this._updateVisualVariables(this._vvInfo.vvRanges,e)}setInfo(e,t,i){this._updateEffects(i),this._vvInfo=t,this._technique=(0,c.EJ)(e),this.rendererSchema=this._technique.createOrUpdateRendererSchema(this.rendererSchema,e)}getVariation(){return{...this._technique.getVariation(this.rendererSchema),outsideLabelsVisible:this.outsideLabelsVisible,supportsTextureFloat:(0,p.hc)("2d").supportsTextureFloat}}getVariationHash(){return this._technique.getVariationHash(this.rendererSchema)<<1|(this.outsideLabelsVisible?1:0)}_updateEffects(e){this.outsideLabelsVisible=null!=e&&e.excludedLabelsVisible}_updateVisualVariables(e,t){const i=this._vvMaterialParameters;if(i.vvOpacityEnabled=!1,i.vvSizeEnabled=!1,i.vvColorEnabled=!1,i.vvRotationEnabled=!1,!e)return;const s=e.size;if(s){if(i.vvSizeEnabled=!0,s.minMaxValue){const e=s.minMaxValue;let i,r;if((0,d.$K)(e.minSize)&&(0,d.$K)(e.maxSize))if((0,d.hj)(e.minSize)&&(0,d.hj)(e.maxSize))i=(0,o.F2)(e.minSize),r=(0,o.F2)(e.maxSize);else{const s=t.scale;i=(0,o.F2)(_(s,e.minSize.stops)),r=(0,o.F2)(_(s,e.maxSize.stops))}this.vvSizeMinMaxValue.set([e.minDataValue,e.maxDataValue,i,r])}if(s.scaleStops&&(this.vvSizeScaleStopsValue=(0,o.F2)(_(t.scale,s.scaleStops.stops))),s.unitValue){const e=(0,h.c9)(t.spatialReference)/l.a[s.unitValue.unit];this.vvSizeUnitValueToPixelsRatio=e/t.resolution}s.fieldStops&&(this._vvSizeFieldStops=s.fieldStops)}const r=e.color;r&&(i.vvColorEnabled=!0,this.vvColorValues.set(r.values),this.vvColors.set(r.colors));const a=e.opacity;a&&(i.vvOpacityEnabled=!0,this.vvOpacityValues.set(a.values),this.vvOpacities.set(a.opacities));const n=e.rotation;n&&(i.vvRotationEnabled=!0,i.vvRotationType=n.type)}}class v extends n.Z{constructor(e){super(e),this._rendererInfo=new g,this._materialItemsRequestQueue=new r.Z,this.attributeView=new a.H((()=>this.onAttributeStoreUpdate()))}destroy(){this.children.forEach((e=>e.destroy())),this.removeAllChildren(),this.attributeView.destroy(),this._materialItemsRequestQueue.clear()}setRendererInfo(e,t,i){this._rendererInfo.setInfo(e,t,i),this.requestRender()}async getMaterialItems(e,t){if(!e||0===e.length)return[];const i=(0,s.hh)();return this._materialItemsRequestQueue.push({items:e,abortOptions:t,resolver:i}),this.requestRender(),i.promise}doRender(e){if(e.context.capabilities.enable("textureFloat"),e.context.capabilities.enable("vao"),this._materialItemsRequestQueue.length>0){let t=this._materialItemsRequestQueue.pop();for(;t;)this._processMaterialItemRequest(e,t),t=this._materialItemsRequestQueue.pop()}super.doRender(e)}renderChildren(e){for(const t of this.children)t.commit(e);this._rendererInfo.update(e.state),super.renderChildren(e)}updateTransforms(e){if(this.children.some((e=>e.hasData)))for(const t of this.children)t.setTransform(e)}createRenderParams(e){const t=super.createRenderParams(e);return t.rendererInfo=this._rendererInfo,t.attributeView=this.attributeView,t}onAttributeStoreUpdate(){}_processMaterialItemRequest(e,{items:t,abortOptions:i,resolver:s}){const{painter:r,pixelRatio:a}=e,n=t.map((e=>r.textureManager.rasterizeItem(e.symbol,a,e.glyphIds,i)));Promise.all(n).then((e=>{if(!this.stage)return void s.reject();const i=e.map(((e,i)=>({id:t[i].id,mosaicItem:e})));s.resolve(i)}),s.reject)}}},70179:(e,t,i)=>{i.d(t,{Z:()=>l});var s=i(39994),r=i(38716),a=i(10994),n=i(61531),o=i(22598);const h=(e,t)=>e.key.level-t.key.level!=0?e.key.level-t.key.level:e.key.row-t.key.row!=0?e.key.row-t.key.row:e.key.col-t.key.col;class l extends a.Z{constructor(e){super(),this._tileInfoView=e}get requiresDedicatedFBO(){return!1}renderChildren(e){this.sortChildren(h),this.setStencilReference(e),super.renderChildren(e)}createRenderParams(e){const{state:t}=e,i=super.createRenderParams(e);return i.requiredLevel=this._tileInfoView.getClosestInfoForScale(t.scale).level,i.displayLevel=this._tileInfoView.tileInfo.scaleToZoom(t.scale),i}prepareRenderPasses(e){const t=super.prepareRenderPasses(e);return t.push(e.registerRenderPass({name:"stencil",brushes:[o.Z],drawPhase:r.jx.DEBUG|r.jx.MAP|r.jx.HIGHLIGHT,target:()=>this.getStencilTarget()})),(0,s.Z)("esri-tiles-debug")&&t.push(e.registerRenderPass({name:"tileInfo",brushes:[n.Z],drawPhase:r.jx.DEBUG,target:()=>this.children})),t}getStencilTarget(){return this.children}setStencilReference(e){let t=1;for(const e of this.children)e.stencilRef=t++}}},79431:(e,t,i)=>{i.r(t),i.d(t,{default:()=>R});var s=i(36663),r=i(7753),a=i(6865),n=i(81739),o=i(76868),h=i(81977),l=(i(7283),i(39994),i(40266)),d=i(51801),u=i(45340),c=i(6199),p=i(52182),_=i(79259),g=i(92524),v=i(76045),f=i(80347),m=i(68114),y=i(40794),w=i(26216);const b=Object.freeze({remove(){},pause(){},resume(){}}),V=["route-info","direction-line","direction-point","polygon-barrier","polyline-barrier","point-barrier","stop"],I={graphic:null,property:null,oldValue:null,newValue:null};function x(e){return e instanceof d.Z||e instanceof u.Z||e instanceof c.Z||e instanceof p.Z||e instanceof _.Z||e instanceof g.Z||e instanceof v.Z}let M=class extends((0,f.y)(w.Z)){constructor(){super(...arguments),this._graphics=new a.Z,this._highlightIds=new Map,this._networkFeatureMap=new Map,this._networkGraphicMap=new Map}get _routeItems(){return new n.Z({getCollections:()=>null==this.layer||this.destroyed?[]:[null!=this.layer.routeInfo?new a.Z([this.layer.routeInfo]):null,this.layer.directionLines,this.layer.directionPoints,this.layer.polygonBarriers,this.layer.polylineBarriers,this.layer.pointBarriers,this.layer.stops]})}initialize(){this.updatingHandles.addOnCollectionChange((()=>this._routeItems),(e=>this._routeItemsChanged(e)),o.nn)}destroy(){this._networkFeatureMap.clear(),this._networkGraphicMap.clear(),this._graphics.removeAll(),this._get("_routeItems")?.destroy()}attach(){this._createGraphicsView()}detach(){this._destroyGraphicsView()}async fetchPopupFeatures(e){return this._graphicsView.hitTest(e).filter((e=>!!e.popupTemplate))}highlight(e){let t;t=x(e)?[this._getNetworkFeatureUid(e)]:function(e){return Array.isArray(e)&&e.length>0&&x(e[0])}(e)?e.map((e=>this._getNetworkFeatureUid(e))):function(e){return a.Z.isCollection(e)&&e.length&&x(e.at(0))}(e)?e.map((e=>this._getNetworkFeatureUid(e))).toArray():[e.uid];const i=t.filter(r.pC);return i.length?(this._addHighlight(i),{remove:()=>this._removeHighlight(i)}):b}async hitTest(e,t){if(this.suspended)return null;const i=this._graphicsView.hitTest(e).filter(r.pC).map((e=>this._networkGraphicMap.get(e)));if(!i.length)return null;const{layer:s}=this;return i.reverse().map((t=>({type:"route",layer:s,mapPoint:e,networkFeature:t})))}isUpdating(){return this._graphicsView.updating}moveStart(){}moveEnd(){}update(e){this._graphicsView.processUpdate(e)}viewChange(){this._graphicsView.viewChange()}_addHighlight(e){for(const t of e)if(this._highlightIds.has(t)){const e=this._highlightIds.get(t);this._highlightIds.set(t,e+1)}else this._highlightIds.set(t,1);this._updateHighlight()}_createGraphic(e){const t=e.toGraphic();return t.layer=this.layer,t.sourceLayer=this.layer,t}_createGraphicsView(){const e=this.view,t=new m.Z(e.featuresTilingScheme);this._graphicsView=new y.Z({container:t,graphics:this._graphics,requestUpdateCallback:()=>this.requestUpdate(),view:e}),this.container.addChild(t),this._updateHighlight()}_destroyGraphicsView(){this.container.removeChild(this._graphicsView.container),this._graphicsView.destroy()}_getDrawOrder(e){const t=this._networkGraphicMap.get(e);return V.indexOf(t.type)}_getNetworkFeatureUid(e){return this._networkFeatureMap.has(e)?this._networkFeatureMap.get(e).uid:null}_removeHighlight(e){for(const t of e)if(this._highlightIds.has(t)){const e=this._highlightIds.get(t)-1;0===e?this._highlightIds.delete(t):this._highlightIds.set(t,e)}this._updateHighlight()}_routeItemsChanged(e){if(e.removed.length){this._graphics.removeMany(e.removed.map((e=>{const t=this._networkFeatureMap.get(e);return this._networkFeatureMap.delete(e),this._networkGraphicMap.delete(t),t})));for(const t of e.removed)this.removeHandles(t)}if(e.added.length){this._graphics.addMany(e.added.map((e=>{const t=this._createGraphic(e);return null==t.symbol?null:(this._networkFeatureMap.set(e,t),this._networkGraphicMap.set(t,e),t)})).filter(r.pC));for(const t of e.added)this.addHandles([(0,o.YP)((()=>t.geometry),((e,i)=>{this._updateGraphic(t,"geometry",e,i)})),(0,o.YP)((()=>t.symbol),((e,i)=>{this._updateGraphic(t,"symbol",e,i)}))],t);this._graphics.sort(((e,t)=>this._getDrawOrder(e)-this._getDrawOrder(t)))}}_updateGraphic(e,t,i,s){if(!this._networkFeatureMap.has(e)){const t=this._createGraphic(e);return this._networkFeatureMap.set(e,t),this._networkGraphicMap.set(t,e),void this._graphics.add(t)}const r=this._networkFeatureMap.get(e);r[t]=i,I.graphic=r,I.property=t,I.oldValue=s,I.newValue=i,this._graphicsView.graphicUpdateHandler(I)}_updateHighlight(){const e=Array.from(this._highlightIds.keys());this._graphicsView.setHighlight(e)}};(0,s._)([(0,h.Cb)()],M.prototype,"_graphics",void 0),(0,s._)([(0,h.Cb)()],M.prototype,"_routeItems",null),M=(0,s._)([(0,l.j)("esri.views.2d.layers.RouteLayerView2D")],M);const R=M},26204:(e,t,i)=>{i.d(t,{Z:()=>m});var s=i(61681),r=i(61394),a=i(1662),n=i(19710),o=i(55542),h=i(79912),l=i(29927),d=i(51118),u=i(64429),c=i(78951),p=i(91907),_=i(29620);const g=Math.PI/180;class v extends d.s{constructor(e){super(),this._program=null,this._vao=null,this._vertexBuffer=null,this._indexBuffer=null,this._dvsMat3=(0,n.c)(),this._localOrigin={x:0,y:0},this._getBounds=e}destroy(){this._vao&&(this._vao.dispose(),this._vao=null,this._vertexBuffer=null,this._indexBuffer=null),this._program=(0,s.M2)(this._program)}doRender(e){const{context:t}=e,i=this._getBounds();if(i.length<1)return;this._createShaderProgram(t),this._updateMatricesAndLocalOrigin(e),this._updateBufferData(t,i),t.setBlendingEnabled(!0),t.setDepthTestEnabled(!1),t.setStencilWriteMask(0),t.setStencilTestEnabled(!1),t.setBlendFunction(p.zi.ONE,p.zi.ONE_MINUS_SRC_ALPHA),t.setColorMask(!0,!0,!0,!0);const s=this._program;t.bindVAO(this._vao),t.useProgram(s),s.setUniformMatrix3fv("u_dvsMat3",this._dvsMat3),t.gl.lineWidth(1),t.drawElements(p.MX.LINES,8*i.length,p.g.UNSIGNED_INT,0),t.bindVAO()}_createTransforms(){return{dvs:(0,n.c)()}}_createShaderProgram(e){this._program||(this._program=e.programCache.acquire("precision highp float;\n        uniform mat3 u_dvsMat3;\n\n        attribute vec2 a_position;\n\n        void main() {\n          mediump vec3 pos = u_dvsMat3 * vec3(a_position, 1.0);\n          gl_Position = vec4(pos.xy, 0.0, 1.0);\n        }","precision mediump float;\n      void main() {\n        gl_FragColor = vec4(0.75, 0.0, 0.0, 0.75);\n      }",f().attributes))}_updateMatricesAndLocalOrigin(e){const{state:t}=e,{displayMat3:i,size:s,resolution:r,pixelRatio:n,rotation:d,viewpoint:u}=t,c=g*d,{x:p,y:_}=u.targetGeometry,v=(0,l.or)(p,t.spatialReference);this._localOrigin.x=v,this._localOrigin.y=_;const f=n*s[0],m=n*s[1],y=r*f,w=r*m,b=(0,a.g)(this._dvsMat3);(0,a.m)(b,b,i),(0,a.h)(b,b,(0,o.f)(f/2,m/2)),(0,a.d)(b,b,(0,h.f)(s[0]/y,-m/w,1)),(0,a.r)(b,b,-c)}_updateBufferData(e,t){const{x:i,y:s}=this._localOrigin,r=8*t.length,a=new Float32Array(r),n=new Uint32Array(8*t.length);let o=0,h=0;for(const e of t)e&&(a[2*o]=e[0]-i,a[2*o+1]=e[1]-s,a[2*o+2]=e[0]-i,a[2*o+3]=e[3]-s,a[2*o+4]=e[2]-i,a[2*o+5]=e[3]-s,a[2*o+6]=e[2]-i,a[2*o+7]=e[1]-s,n[h]=o+0,n[h+1]=o+3,n[h+2]=o+3,n[h+3]=o+2,n[h+4]=o+2,n[h+5]=o+1,n[h+6]=o+1,n[h+7]=o+0,o+=4,h+=8);if(this._vertexBuffer?this._vertexBuffer.setData(a.buffer):this._vertexBuffer=c.f.createVertex(e,p.l1.DYNAMIC_DRAW,a.buffer),this._indexBuffer?this._indexBuffer.setData(n):this._indexBuffer=c.f.createIndex(e,p.l1.DYNAMIC_DRAW,n),!this._vao){const t=f();this._vao=new _.U(e,t.attributes,t.bufferLayouts,{geometry:this._vertexBuffer},this._indexBuffer)}}}const f=()=>(0,u.cM)("bounds",{geometry:[{location:0,name:"a_position",count:2,type:p.g.FLOAT}]});let m=class extends r.T{constructor(e){super(e),this.hasHighlight=()=>!0}destroy(){super.destroy(),this._boundsRenderer=(0,s.SC)(this._boundsRenderer)}enableRenderingBounds(e){this._boundsRenderer=new v(e),this.requestRender()}get hasLabels(){return!1}onTileData(e,t){e.patch(t),this.contains(e)||this.addChild(e),this.requestRender()}onTileError(e){e.clear(),this.contains(e)||this.addChild(e)}_renderChildren(e,t){for(const i of this.children)i.isReady&&i.hasData&&(i.commit(e),e.context.setStencilFunction(p.wb.EQUAL,i.stencilRef,255),i.getDisplayList().replay(e,i,t))}}},68114:(e,t,i)=>{i.d(t,{Z:()=>a});var s=i(38716),r=i(26204);class a extends r.Z{renderChildren(e){this.attributeView.update(),this.children.some((e=>e.hasData))&&(this.attributeView.bindTextures(e.context,!1),super.renderChildren(e),e.drawPhase===s.jx.MAP&&this._renderChildren(e),this.hasHighlight()&&e.drawPhase===s.jx.HIGHLIGHT&&this._renderHighlight(e),this._boundsRenderer&&this._boundsRenderer.doRender(e))}_renderHighlight(e){const{painter:t}=e,i=t.effects.highlight;i.bind(e),this._renderChildren(e,i.defines),i.draw(e),i.unbind()}}}}]);