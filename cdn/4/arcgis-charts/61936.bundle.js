"use strict";(self.webpackChunkexb_client=self.webpackChunkexb_client||[]).push([[61936],{68577:(e,t,r)=>{r.d(t,{dp:()=>a,yZ:()=>i});var n=r(17321);const s=96;function i(e,t){const r=t||e.extent,i=e.width,a=(0,n.c9)(r&&r.spatialReference);return r&&i?r.width/i*a*n.hd*s:0}function a(e,t){return e/((0,n.c9)(t)*n.hd*s)}},61936:(e,t,r)=>{r.r(t),r.d(t,{default:()=>we});var n,s=r(36663),i=r(51366),a=r(80085),o=r(80020),l=r(66341),u=r(6865),p=r(81739),c=r(25709),d=r(67134),m=r(15842),y=r(78668),h=r(76868),f=r(3466),b=r(81977),g=r(7283),x=r(34248),w=r(40266),v=r(39835),_=r(86561),S=r(91772),C=r(14685),N=r(68577),E=r(35925),I=r(38481),F=r(27668),O=r(43330),R=r(18241),P=r(12478),A=r(95874),L=r(2030),M=r(73616),U=r(20692),j=r(51599),T=r(49999),Z=r(4452),q=r(86618),$=r(69236),B=r(7753);r(39994);let W=0,V=n=class extends((0,q.IG)(m.w)){constructor(e){super(e),this.description=null,this.dimensions=null,this.fullExtent=null,this.fullExtents=null,this.legendUrl=null,this.legendEnabled=!0,this.layer=null,this.maxScale=0,this.minScale=0,this.name=null,this.parent=null,this.popupEnabled=!1,this.queryable=!1,this.sublayers=null,this.spatialReferences=null,this.title=null,this.addHandles([(0,h.on)((()=>this.sublayers),"after-add",(({item:e})=>{e.parent=this,e.layer=this.layer}),h.Z_),(0,h.on)((()=>this.sublayers),"after-remove",(({item:e})=>{e.layer=e.parent=null}),h.Z_),(0,h.YP)((()=>this.sublayers),((e,t)=>{if(t)for(const e of t)e.layer=e.parent=null;if(e)for(const t of e)t.parent=this,t.layer=this.layer}),h.Z_),(0,h.YP)((()=>this.layer),(e=>{if(this.sublayers)for(const t of this.sublayers)t.layer=e}),h.Z_)])}get id(){return this._get("id")??W++}set id(e){this._set("id",e)}readLegendUrl(e,t){return t.legendUrl??t.legendURL??null}get effectiveScaleRange(){const{minScale:e,maxScale:t}=this;return{minScale:e,maxScale:t}}castSublayers(e){return(0,g.se)(u.Z.ofType(n),e)}set visible(e){this._setAndNotifyLayer("visible",e)}clone(){const e=new n;return this.hasOwnProperty("description")&&(e.description=this.description),this.hasOwnProperty("fullExtent")&&(e.fullExtent=this.fullExtent.clone()),this.hasOwnProperty("fullExtents")&&(e.fullExtents=this.fullExtents?.map((e=>e.clone()))??null),this.hasOwnProperty("legendUrl")&&(e.legendUrl=this.legendUrl),this.hasOwnProperty("legendEnabled")&&(e.legendEnabled=this.legendEnabled),this.hasOwnProperty("layer")&&(e.layer=this.layer),this.hasOwnProperty("name")&&(e.name=this.name),this.hasOwnProperty("parent")&&(e.parent=this.parent),this.hasOwnProperty("queryable")&&(e.queryable=this.queryable),this.hasOwnProperty("sublayers")&&(e.sublayers=this.sublayers&&this.sublayers.map((e=>e.clone()))),this.hasOwnProperty("spatialReferences")&&(e.spatialReferences=this.spatialReferences?.map((e=>e))),this.hasOwnProperty("visible")&&(e.visible=this.visible),this.hasOwnProperty("title")&&(e.title=this.title),e}_setAndNotifyLayer(e,t){const r=this.layer;this._get(e)!==t&&(this._set(e,t),r&&r.emit("wms-sublayer-update",{propertyName:e,id:this.id}))}};(0,s._)([(0,b.Cb)()],V.prototype,"description",void 0),(0,s._)([(0,b.Cb)({readOnly:!0})],V.prototype,"dimensions",void 0),(0,s._)([(0,b.Cb)({type:S.Z,json:{name:"extent"}})],V.prototype,"fullExtent",void 0),(0,s._)([(0,b.Cb)()],V.prototype,"fullExtents",void 0),(0,s._)([(0,b.Cb)({type:Number,json:{write:{enabled:!1,overridePolicy:()=>({ignoreOrigin:!0,enabled:!0})}}})],V.prototype,"id",null),(0,s._)([(0,b.Cb)({type:String,json:{name:"legendUrl",write:{ignoreOrigin:!0}}})],V.prototype,"legendUrl",void 0),(0,s._)([(0,x.r)("legendUrl",["legendUrl","legendURL"])],V.prototype,"readLegendUrl",null),(0,s._)([(0,b.Cb)({type:Boolean,json:{name:"showLegend",origins:{"web-map":{read:!1,write:!1},"web-scene":{read:!1,write:!1}}}})],V.prototype,"legendEnabled",void 0),(0,s._)([(0,b.Cb)()],V.prototype,"layer",void 0),(0,s._)([(0,b.Cb)()],V.prototype,"maxScale",void 0),(0,s._)([(0,b.Cb)()],V.prototype,"minScale",void 0),(0,s._)([(0,b.Cb)({readOnly:!0})],V.prototype,"effectiveScaleRange",null),(0,s._)([(0,b.Cb)({type:String,json:{write:{ignoreOrigin:!0}}})],V.prototype,"name",void 0),(0,s._)([(0,b.Cb)()],V.prototype,"parent",void 0),(0,s._)([(0,b.Cb)({type:Boolean,json:{read:{source:"showPopup"},write:{ignoreOrigin:!0,target:"showPopup"}}})],V.prototype,"popupEnabled",void 0),(0,s._)([(0,b.Cb)({type:Boolean,json:{write:{ignoreOrigin:!0}}})],V.prototype,"queryable",void 0),(0,s._)([(0,b.Cb)()],V.prototype,"sublayers",void 0),(0,s._)([(0,$.p)("sublayers")],V.prototype,"castSublayers",null),(0,s._)([(0,b.Cb)({type:[Number],json:{read:{source:"spatialReferences"}}})],V.prototype,"spatialReferences",void 0),(0,s._)([(0,b.Cb)({type:String,json:{write:{ignoreOrigin:!0}}})],V.prototype,"title",void 0),(0,s._)([(0,b.Cb)({type:Boolean,value:!0,json:{read:{source:"defaultVisibility"}}})],V.prototype,"visible",null),V=n=(0,s._)([(0,w.j)("esri.layers.support.WMSSublayer")],V);const k=V;var D=r(70375);const G={84:4326,83:4269,27:4267};function H(e){if(!e)return null;const t={idCounter:-1};"string"==typeof e&&(e=(new DOMParser).parseFromString(e,"text/xml"));const r=e.documentElement;if("ServiceExceptionReport"===r.nodeName){const e=Array.prototype.slice.call(r.childNodes).map((e=>e.textContent)).join("\r\n");throw new D.Z("wmslayer:wms-capabilities-xml-is-not-valid","The server returned errors when the WMS capabilities were requested.",e)}const n=Y("Capability",r),s=Y("Service",r),i=n&&Y("Request",n);if(!n||!s||!i)return null;const a=Y("Layer",n);if(!a)return null;const o="WMS_Capabilities"===r.nodeName||"WMT_MS_Capabilities"===r.nodeName?r.getAttribute("version"):"1.3.0",l=K("Title",s,"")||K("Name",s,""),u=K("AccessConstraints",s,""),p=/^none$/i.test(u)?"":u,c=K("Abstract",s,""),d=parseInt(K("MaxWidth",s,"5000"),10),m=parseInt(K("MaxHeight",s,"5000"),10),y=re(i,"GetMap"),h=te(i,"GetMap"),f=se(a,o,t);if(!f)return null;let b,g=0;const x=Array.prototype.slice.call(n.childNodes),w=f.sublayers??[],v=e=>{null!=e&&w.push(e)};x.forEach((e=>{"Layer"===e.nodeName&&(0===g?b=e:1===g?(f.name&&(f.name="",v(se(b,o,t))),v(se(e,o,t))):v(se(e,o,t)),g++)}));let _=f.sublayers,C=f.extent;const N=f.fullExtents??[];if(_||(_=[]),0===_.length&&_.push(f),!C){const e=new S.Z(_[0].extent);f.extent=e.toJSON(),C=f.extent}const E=f.spatialReferences.length>0?f.spatialReferences:X(f),I=te(i,"GetFeatureInfo"),F=I?re(i,"GetFeatureInfo"):null,O=J(_),R=f.minScale||0,P=f.maxScale||0,A=f.dimensions??[],L=O.reduce(((e,t)=>e.concat(t.dimensions??[])),[]),M=A.concat(L).filter(ae);let U=null;if(M.length){const e=M.map((e=>{const{extent:t}=e;return function(e){return Array.isArray(e)&&e.length>0&&e[0]instanceof Date}(t)?t.map((e=>e.getTime())):t?.map((e=>[e.min.getTime(),e.max.getTime()]))})).flat(2).filter(B.pC);U={startTimeField:null,endTimeField:null,trackIdField:void 0,timeExtent:[Math.min(...e),Math.max(...e)]}}return{copyright:p,description:c,dimensions:A,extent:C,fullExtents:N,featureInfoFormats:F,featureInfoUrl:I,mapUrl:h,maxWidth:d,maxHeight:m,maxScale:P,minScale:R,layers:O,spatialReferences:E,supportedImageFormatTypes:y,timeInfo:U,title:l,version:o}}function X(e){if(e.spatialReferences.length>0)return e.spatialReferences;if(e.sublayers)for(const t of e.sublayers){const e=X(t);if(e.length>0)return e}return[]}function J(e){let t=[];for(const r of e)t.push(r),r.sublayers?.length&&(t=t.concat(J(r.sublayers)),delete r.sublayers);return t}function Q(e,t,r){return t.getAttribute(e)??r}function Y(e,t){for(let r=0;r<t.childNodes.length;r++){const n=t.childNodes[r];if(ie(n)&&n.nodeName===e)return n}return null}function z(e,t){if(null==t)return[];const r=[];for(let n=0;n<t.childNodes.length;n++){const s=t.childNodes[n];ie(s)&&s.nodeName===e&&r.push(s)}return r}function K(e,t,r){return Y(e,t)?.textContent??r}function ee(e,t,r){if(!e)return null;const n=parseFloat(e.getAttribute("minx")),s=parseFloat(e.getAttribute("miny")),i=parseFloat(e.getAttribute("maxx")),a=parseFloat(e.getAttribute("maxy"));let o,l,u,p;r?(o=isNaN(s)?-Number.MAX_VALUE:s,l=isNaN(n)?-Number.MAX_VALUE:n,u=isNaN(a)?Number.MAX_VALUE:a,p=isNaN(i)?Number.MAX_VALUE:i):(o=isNaN(n)?-Number.MAX_VALUE:n,l=isNaN(s)?-Number.MAX_VALUE:s,u=isNaN(i)?Number.MAX_VALUE:i,p=isNaN(a)?Number.MAX_VALUE:a);const c=new C.Z({wkid:t});return new S.Z({xmin:o,ymin:l,xmax:u,ymax:p,spatialReference:c})}function te(e,t){const r=Y(t,e);if(r){const e=Y("DCPType",r);if(e){const t=Y("HTTP",e);if(t){const e=Y("Get",t);if(e){let t=function(e,t,r,n){const s=Y("OnlineResource",r);return s?Q("xlink:href",s,null):null}(0,0,e);if(t)return t.indexOf("&")===t.length-1&&(t=t.substring(0,t.length-1)),function(e,t){const r=[],n=(0,f.mN)(e);for(const e in n.query)n.query.hasOwnProperty(e)&&(t.includes(e.toLowerCase())||r.push(e+"="+n.query[e]));return n.path+(r.length?"?"+r.join("&"):"")}(t,["service","request"])}}}}return null}function re(e,t){const r=z("Operation",e);if(!r.length)return z("Format",Y(t,e)).map((({textContent:e})=>e)).filter(B.pC);const n=[];for(const e of r)if(e.getAttribute("name")===t){const t=z("Format",e);for(const{textContent:e}of t)null!=e&&n.push(e)}return n}function ne(e,t,r){const n=Y(t,e);if(!n)return r;const{textContent:s}=n;if(null==s||""===s)return r;const i=Number(s);return isNaN(i)?r:i}function se(e,t,r){if(!e)return null;const n={id:r.idCounter++,fullExtents:[],parentLayerId:null,queryable:"1"===e.getAttribute("queryable"),spatialReferences:[],sublayers:null},s=Y("LatLonBoundingBox",e),i=Y("EX_GeographicBoundingBox",e);let a=null;s&&(a=ee(s,4326)),i&&(a=new S.Z(0,0,0,0,new C.Z({wkid:4326})),a.xmin=parseFloat(K("westBoundLongitude",i,"0")),a.ymin=parseFloat(K("southBoundLatitude",i,"0")),a.xmax=parseFloat(K("eastBoundLongitude",i,"0")),a.ymax=parseFloat(K("northBoundLatitude",i,"0"))),s||i||(a=new S.Z(-180,-90,180,90,new C.Z({wkid:4326}))),n.minScale=ne(e,"MaxScaleDenominator",0),n.maxScale=ne(e,"MinScaleDenominator",0);const o=["1.0.0","1.1.0","1.1.1"].includes(t)?"SRS":"CRS";return Array.prototype.slice.call(e.childNodes).forEach((e=>{if("Name"===e.nodeName)n.name=e.textContent||"";else if("Title"===e.nodeName)n.title=e.textContent||"";else if("Abstract"===e.nodeName)n.description=e.textContent||"";else if("BoundingBox"===e.nodeName){const r=e.getAttribute(o);if(r&&0===r.indexOf("EPSG:")){const n=parseInt(r.substring(5),10);0===n||isNaN(n)||a||(a="1.3.0"===t?ee(e,n,(0,M.A)(n)):ee(e,n))}const s=r&&r.indexOf(":");if(s&&s>-1){let i=parseInt(r.substring(s+1,r.length),10);0===i||isNaN(i)||(i=G[i]??i);const a="1.3.0"===t?ee(e,i,(0,M.A)(i)):ee(e,i);a&&n.fullExtents&&n.fullExtents.push(a)}}else if(e.nodeName===o)(e.textContent?.split(" ")??[]).forEach((e=>{const t=e.includes(":")?parseInt(e.split(":")[1],10):parseInt(e,10);if(0!==t&&!isNaN(t)){const e=G[t]??t;n.spatialReferences.includes(e)||n.spatialReferences.push(e)}}));else if("Style"!==e.nodeName||n.legendUrl){if("Layer"===e.nodeName){const s=se(e,t,r);s&&(s.parentLayerId=n.id,n.sublayers||(n.sublayers=[]),n.sublayers.push(s))}}else{const t=Y("LegendURL",e);if(t){const e=Y("OnlineResource",t);e&&(n.legendUrl=e.getAttribute("xlink:href"))}}})),n.extent=a?.toJSON(),n.dimensions=z("Dimension",e).filter((e=>e.getAttribute("name")&&e.getAttribute("units")&&e.textContent)).map((e=>{const t=e.getAttribute("name"),r=e.getAttribute("units"),n=e.textContent,s=e.getAttribute("unitSymbol")??void 0,i=e.getAttribute("default")??void 0,a="0"!==Q("default",e,"0"),o="0"!==Q("nearestValue",e,"0"),l="0"!==Q("current",e,"0");return ae({name:t,units:r})?{name:"time",units:"ISO8601",extent:ue(n),default:ue(i),multipleValues:a,nearestValue:o,current:l}:function(e){return/^elevation$/i.test(e.name)&&/^(epsg|crs):\d+$/i.test(e.units)}({name:t,units:r})?{name:"elevation",units:r,extent:oe(n),unitSymbol:s,default:oe(i),multipleValues:a,nearestValue:o}:{name:t,units:r,extent:le(n),unitSymbol:s,default:le(i),multipleValues:a,nearestValue:o}})),n}function ie(e){return e.nodeType===Node.ELEMENT_NODE}function ae(e){return/^time$/i.test(e.name)&&/^iso8601$/i.test(e.units)}function oe(e){if(!e)return;const t=e.includes("/"),r=e.split(",");return t?r.map((e=>{const t=e.split("/");return t.length<2?null:{min:parseFloat(t[0]),max:parseFloat(t[1]),resolution:t.length>=3&&"0"!==t[2]?parseFloat(t[2]):void 0}})).filter(B.pC):r.map((e=>parseFloat(e)))}function le(e){if(!e)return;const t=e.includes("/"),r=e.split(",");return t?r.map((e=>{const t=e.split("/");return t.length<2?null:{min:t[0],max:t[1],resolution:t.length>=3&&"0"!==t[2]?t[2]:void 0}})).filter(B.pC):r}function ue(e){if(!e)return;const t=e.includes("/"),r=e.split(",");return t?r.map((e=>{const t=e.split("/");return t.length<2?null:{min:new Date(t[0]),max:new Date(t[1]),resolution:t.length>=3&&"0"!==t[2]?pe(t[2]):void 0}})).filter(B.pC):r.map((e=>new Date(e)))}function pe(e){const t=e.match(/(?:p(\d+y|\d+(?:.|,)\d+y)?(\d+m|\d+(?:.|,)\d+m)?(\d+d|\d+(?:.|,)\d+d)?)?(?:t(\d+h|\d+(?:.|,)\d+h)?(\d+m|\d+(?:.|,)\d+m)?(\d+s|\d+(?:.|,)\d+s)?)?/i);return t?{years:ce(t[1]),months:ce(t[2]),days:ce(t[3]),hours:ce(t[4]),minutes:ce(t[5]),seconds:ce(t[6])}:null}function ce(e){if(!e)return 0;const t=e.match(/(?:\d+(?:.|,)\d+|\d+)/);if(!t)return 0;const r=t[0].replace(",",".");return Number(r)}function de(e){return e.toISOString().replace(/\.[0-9]{3}/,"")}const me=new Set([102100,3857,102113,900913]),ye=new Set([3395,54004]),he=new c.X({bmp:"image/bmp",gif:"image/gif",jpg:"image/jpeg",png:"image/png",svg:"image/svg+xml"},{ignoreUnknown:!1});function fe(e){return"text/html"===e}function be(e){return"text/plain"===e}let ge=class extends((0,F.h)((0,L.n)((0,P.Q)((0,A.M)((0,O.q)((0,R.I)((0,m.R)(I.Z)))))))){constructor(...e){super(...e),this.allSublayers=new p.Z({getCollections:()=>[this.sublayers],getChildrenFunction:e=>e.sublayers}),this.customParameters=null,this.customLayerParameters=null,this.copyright=null,this.description=null,this.dimensions=null,this.fullExtent=null,this.fullExtents=null,this.featureInfoFormats=null,this.featureInfoUrl=null,this.fetchFeatureInfoFunction=null,this.imageFormat=null,this.imageMaxHeight=2048,this.imageMaxWidth=2048,this.imageTransparency=!0,this.legendEnabled=!0,this.mapUrl=null,this.isReference=null,this.operationalLayerType="WMS",this.spatialReference=null,this.spatialReferences=null,this.sublayers=null,this.type="wms",this.version=null,this.addHandles([(0,h.on)((()=>this.sublayers),"after-add",(({item:e})=>{e.parent=e.layer=this}),h.Z_),(0,h.on)((()=>this.sublayers),"after-remove",(({item:e})=>{e.layer=e.parent=null}),h.Z_),(0,h.YP)((()=>this.sublayers),((e,t)=>{if(t)for(const e of t)e.layer=e.parent=null;if(e)for(const t of e)t.parent=t.layer=this}),h.Z_)])}normalizeCtorArgs(e,t){return"string"==typeof e?{url:e,...t}:e}destroy(){this.allSublayers.destroy()}load(e){const t=null!=e?e.signal:null;return this.addResolvingPromise(this.loadFromPortal({supportedTypes:["WMS"]},e).catch(y.r9).then((()=>this._fetchService(t)))),Promise.resolve(this)}readFullExtentFromItemOrMap(e,t){const r=t.extent;return r?new S.Z({xmin:r[0][0],ymin:r[0][1],xmax:r[1][0],ymax:r[1][1]}):null}writeFullExtent(e,t){t.extent=[[e.xmin,e.ymin],[e.xmax,e.ymax]]}get featureInfoFormat(){return null==this.featureInfoFormats?null:this.featureInfoFormats.find(fe)??this.featureInfoFormats.find(be)??null}set featureInfoFormat(e){null==e?(this.revert("featureInfoFormat","service"),this._clearOverride("featureInfoFormat")):(fe(e)||be(e))&&this._override("featureInfoFormat",e)}readImageFormat(e,t){const r=t.supportedImageFormatTypes;return r&&r.includes("image/png")?"image/png":r&&r[0]}readSpatialReferenceFromItemOrDocument(e,t){return new C.Z(t.spatialReferences[0])}writeSpatialReferences(e,t){const r=this.spatialReference?.wkid;e&&r?(t.spatialReferences=e.filter((e=>e!==r)),t.spatialReferences.unshift(r)):t.spatialReferences=e}readSublayersFromItemOrMap(e,t,r){return xe(t.layers,r,t.visibleLayers)}readSublayers(e,t,r){return xe(t.layers,r)}writeSublayers(e,t,r,n){t.layers=[];const s=new Map,i=e.flatten((({sublayers:e})=>e??[]));for(const e of i)if("number"==typeof e.parent?.id){const t=s.get(e.parent.id);null!=t?t.push(e.id):s.set(e.parent.id,[e.id])}for(const e of i){const r={sublayer:e,...n},i=e.write({parentLayerId:"number"==typeof e.parent?.id?e.parent.id:-1},r);if(s.has(e.id)&&(i.sublayerIds=s.get(e.id)),!e.sublayers&&e.name){const n=e.write({},r);delete n.id,t.layers.push(n)}}t.visibleLayers=i.filter((({visible:e,sublayers:t})=>e&&!t)).map((({name:e})=>e)).toArray()}set url(e){if(!e)return void this._set("url",e);const{path:t,query:r}=(0,f.mN)(e);for(const e in r)/^(request|service)$/i.test(e)&&delete r[e];const n=(0,f.fl)(t,r??{});this._set("url",n)}createExportImageParameters(e,t,r,n){const s=n?.pixelRatio??1,i=(0,N.yZ)({extent:e,width:t})*s,a=new T.j({layer:this,scale:i}),{xmin:o,ymin:l,xmax:u,ymax:p,spatialReference:c}=e,d=function(e,t){let r=e.wkid;return null==t?r:(null!=r&&t.includes(r)||!e.latestWkid||(r=e.latestWkid),null!=r&&me.has(r)?t.find((e=>me.has(e)))||t.find((e=>ye.has(e)))||102100:r)}(c,this.spatialReferences),m="1.3.0"===this.version&&(0,M.A)(d)?`${l},${o},${p},${u}`:`${o},${l},${u},${p}`,y=a.toJSON();return{bbox:m,["1.3.0"===this.version?"crs":"srs"]:null==d||isNaN(d)?void 0:"EPSG:"+d,...y}}async fetchImage(e,t,r,n){const s=this.mapUrl,i=this.createExportImageParameters(e,t,r,n);if(!i.layers){const e=document.createElement("canvas");return e.width=t,e.height=r,e}const a=n?.timeExtent?.start,o=n?.timeExtent?.end,u=null!=a&&null!=o?a.getTime()===o.getTime()?de(a):`${de(a)}/${de(o)}`:void 0,p={responseType:"image",query:this._mixCustomParameters({width:t,height:r,...i,time:u,...this.refreshParameters}),signal:n?.signal};return(0,l.default)(s??"",p).then((e=>e.data))}async fetchImageBitmap(e,t,r,n){const s=this.mapUrl??"",i=this.createExportImageParameters(e,t,r,n);if(!i.layers){const e=document.createElement("canvas");return e.width=t,e.height=r,e}const a=n?.timeExtent?.start,o=n?.timeExtent?.end,u=null!=a&&null!=o?a.getTime()===o.getTime()?de(a):`${de(a)}/${de(o)}`:void 0,p={responseType:"blob",query:this._mixCustomParameters({width:t,height:r,...i,time:u,...this.refreshParameters}),signal:n?.signal},{data:c}=await(0,l.default)(s,p);return(0,Z.g)(c,s,n?.signal)}fetchFeatureInfo(e,t,r,n,s){const i=(0,N.yZ)({extent:e,width:t}),a=function(e){const t=e.filter((e=>e.popupEnabled&&e.name&&e.queryable));return t.length?t.map((({name:e})=>e)).join():null}(new T.j({layer:this,scale:i}).visibleSublayers);if(null==this.featureInfoUrl||null==a)return Promise.resolve([]);if(null==this.fetchFeatureInfoFunction&&null==this.featureInfoFormat)return Promise.resolve([]);const o="1.3.0"===this.version?{I:n,J:s}:{x:n,y:s},l={query_layers:a,request:"GetFeatureInfo",info_format:this.featureInfoFormat,feature_count:25,width:t,height:r,...o},u={...this.createExportImageParameters(e,t,r),...l},p=this._mixCustomParameters(u);return null!=this.fetchFeatureInfoFunction?this.fetchFeatureInfoFunction(p):this._defaultFetchFeatureInfoFunction((0,f.fl)(this.featureInfoUrl,p))}findSublayerById(e){return this.allSublayers.find((t=>t.id===e))}findSublayerByName(e){return this.allSublayers.find((t=>t.name===e))}serviceSupportsSpatialReference(e){return(0,U.G)(this.url)||null!=this.spatialReferences&&this.spatialReferences.some((t=>{const r=900913===t?C.Z.WebMercator:new C.Z({wkid:t});return(0,E.fS)(r,e)}))}_defaultFetchFeatureInfoFunction(e){const t=document.createElement("iframe");t.src=(0,f.qg)(e),t.style.border="none",t.style.margin="0",t.style.width="100%",t.setAttribute("sandbox","");const r=new o.Z({title:this.title,content:t}),n=new a.Z({sourceLayer:this,popupTemplate:r});return Promise.resolve([n])}async _fetchService(e){if(!this.resourceInfo&&this.parsedUrl?.path){const{path:t,query:r}=this.parsedUrl,{data:n}=await(0,l.default)(t,{query:{SERVICE:"WMS",REQUEST:"GetCapabilities",...r,...this.customParameters},responseType:"xml",signal:e});this.resourceInfo=H(n)}if(this.parsedUrl){const e=new f.R9(this.parsedUrl.path),{httpsDomains:t}=i.Z.request;"https"!==e.scheme||e.port&&"443"!==e.port||!e.host||t.includes(e.host)||t.push(e.host)}this.read(this.resourceInfo,{origin:"service"})}_mixCustomParameters(e){if(!this.customLayerParameters&&!this.customParameters)return e;const t={...this.customParameters,...this.customLayerParameters};for(const r in t)e[r.toLowerCase()]=t[r];return e}};function xe(e,t,r){e=e??[];const n=new Map;e.every((e=>null==e.id))&&(e=(0,d.d9)(e)).forEach(((e,t)=>e.id=t));for(const s of e){const e=new k;e.read(s,t),r&&!r.includes(e.name)&&(e.visible=!1),n.set(e.id,e)}const s=[];for(const t of e){const e=null!=t.id?n.get(t.id):null;if(e)if(null!=t.parentLayerId&&t.parentLayerId>=0){const r=n.get(t.parentLayerId);if(!r)continue;r.sublayers||(r.sublayers=new u.Z),r.sublayers.push(e)}else s.push(e)}return s}(0,s._)([(0,b.Cb)({readOnly:!0})],ge.prototype,"allSublayers",void 0),(0,s._)([(0,b.Cb)({json:{type:Object,write:!0}})],ge.prototype,"customParameters",void 0),(0,s._)([(0,b.Cb)({json:{type:Object,write:!0}})],ge.prototype,"customLayerParameters",void 0),(0,s._)([(0,b.Cb)({type:String,json:{write:!0}})],ge.prototype,"copyright",void 0),(0,s._)([(0,b.Cb)()],ge.prototype,"description",void 0),(0,s._)([(0,b.Cb)({readOnly:!0})],ge.prototype,"dimensions",void 0),(0,s._)([(0,b.Cb)({json:{type:[[Number]],read:{source:"extent"},write:{target:"extent"},origins:{"web-document":{write:{ignoreOrigin:!0}},"portal-item":{write:{ignoreOrigin:!0}}}}})],ge.prototype,"fullExtent",void 0),(0,s._)([(0,x.r)(["web-document","portal-item"],"fullExtent",["extent"])],ge.prototype,"readFullExtentFromItemOrMap",null),(0,s._)([(0,v.c)(["web-document","portal-item"],"fullExtent",{extent:{type:[[Number]]}})],ge.prototype,"writeFullExtent",null),(0,s._)([(0,b.Cb)()],ge.prototype,"fullExtents",void 0),(0,s._)([(0,b.Cb)({type:String,json:{write:{ignoreOrigin:!0}}})],ge.prototype,"featureInfoFormat",null),(0,s._)([(0,b.Cb)({type:[String],readOnly:!0})],ge.prototype,"featureInfoFormats",void 0),(0,s._)([(0,b.Cb)({type:String,json:{write:{ignoreOrigin:!0}}})],ge.prototype,"featureInfoUrl",void 0),(0,s._)([(0,b.Cb)()],ge.prototype,"fetchFeatureInfoFunction",void 0),(0,s._)([(0,b.Cb)({type:String,json:{origins:{"web-document":{default:"image/png",type:he.jsonValues,read:{reader:he.read,source:"format"},write:{writer:he.write,target:"format"}}}}})],ge.prototype,"imageFormat",void 0),(0,s._)([(0,x.r)("imageFormat",["supportedImageFormatTypes"])],ge.prototype,"readImageFormat",null),(0,s._)([(0,b.Cb)({type:Number,json:{read:{source:"maxHeight"},write:{target:"maxHeight"}}})],ge.prototype,"imageMaxHeight",void 0),(0,s._)([(0,b.Cb)({type:Number,json:{read:{source:"maxWidth"},write:{target:"maxWidth"}}})],ge.prototype,"imageMaxWidth",void 0),(0,s._)([(0,b.Cb)()],ge.prototype,"imageTransparency",void 0),(0,s._)([(0,b.Cb)(j.rn)],ge.prototype,"legendEnabled",void 0),(0,s._)([(0,b.Cb)({type:["show","hide","hide-children"]})],ge.prototype,"listMode",void 0),(0,s._)([(0,b.Cb)({type:String,json:{write:{ignoreOrigin:!0}}})],ge.prototype,"mapUrl",void 0),(0,s._)([(0,b.Cb)({type:Boolean,json:{read:!1,write:{enabled:!0,overridePolicy:()=>({enabled:!1})}}})],ge.prototype,"isReference",void 0),(0,s._)([(0,b.Cb)({type:["WMS"]})],ge.prototype,"operationalLayerType",void 0),(0,s._)([(0,b.Cb)()],ge.prototype,"resourceInfo",void 0),(0,s._)([(0,b.Cb)({type:C.Z,json:{origins:{service:{read:{source:"extent.spatialReference"}}},write:!1}})],ge.prototype,"spatialReference",void 0),(0,s._)([(0,x.r)(["web-document","portal-item"],"spatialReference",["spatialReferences"])],ge.prototype,"readSpatialReferenceFromItemOrDocument",null),(0,s._)([(0,b.Cb)({type:[g.z8],json:{read:!1,origins:{service:{read:!0},"web-document":{read:!1,write:{ignoreOrigin:!0}},"portal-item":{read:!1,write:{ignoreOrigin:!0}}}}})],ge.prototype,"spatialReferences",void 0),(0,s._)([(0,v.c)(["web-document","portal-item"],"spatialReferences")],ge.prototype,"writeSpatialReferences",null),(0,s._)([(0,b.Cb)({type:u.Z.ofType(k),json:{write:{target:"layers",overridePolicy(e,t,r){if(function(e,t){return e.some((e=>{for(const r in e)if((0,_.d)(e,r,null,t))return!0;return!1}))}(this.allSublayers,r))return{ignoreOrigin:!0}}}}})],ge.prototype,"sublayers",void 0),(0,s._)([(0,x.r)(["web-document","portal-item"],"sublayers",["layers","visibleLayers"])],ge.prototype,"readSublayersFromItemOrMap",null),(0,s._)([(0,x.r)("service","sublayers",["layers"])],ge.prototype,"readSublayers",null),(0,s._)([(0,v.c)("sublayers",{layers:{type:[k]},visibleLayers:{type:[String]}})],ge.prototype,"writeSublayers",null),(0,s._)([(0,b.Cb)({json:{read:!1},readOnly:!0,value:"wms"})],ge.prototype,"type",void 0),(0,s._)([(0,b.Cb)(j.HQ)],ge.prototype,"url",null),(0,s._)([(0,b.Cb)({type:String,json:{write:{ignoreOrigin:!0}}})],ge.prototype,"version",void 0),ge=(0,s._)([(0,w.j)("esri.layers.WMSLayer")],ge);const we=ge},73616:(e,t,r)=>{r.d(t,{A:()=>s});const n=[[3819,3819],[3821,3824],[3889,3889],[3906,3906],[4001,4025],[4027,4036],[4039,4047],[4052,4055],[4074,4075],[4080,4081],[4120,4176],[4178,4185],[4188,4216],[4218,4289],[4291,4304],[4306,4319],[4322,4326],[4463,4463],[4470,4470],[4475,4475],[4483,4483],[4490,4490],[4555,4558],[4600,4646],[4657,4765],[4801,4811],[4813,4821],[4823,4824],[4901,4904],[5013,5013],[5132,5132],[5228,5229],[5233,5233],[5246,5246],[5252,5252],[5264,5264],[5324,5340],[5354,5354],[5360,5360],[5365,5365],[5370,5373],[5381,5381],[5393,5393],[5451,5451],[5464,5464],[5467,5467],[5489,5489],[5524,5524],[5527,5527],[5546,5546],[2044,2045],[2081,2083],[2085,2086],[2093,2093],[2096,2098],[2105,2132],[2169,2170],[2176,2180],[2193,2193],[2200,2200],[2206,2212],[2319,2319],[2320,2462],[2523,2549],[2551,2735],[2738,2758],[2935,2941],[2953,2953],[3006,3030],[3034,3035],[3038,3051],[3058,3059],[3068,3068],[3114,3118],[3126,3138],[3150,3151],[3300,3301],[3328,3335],[3346,3346],[3350,3352],[3366,3366],[3389,3390],[3416,3417],[3833,3841],[3844,3850],[3854,3854],[3873,3885],[3907,3910],[4026,4026],[4037,4038],[4417,4417],[4434,4434],[4491,4554],[4839,4839],[5048,5048],[5105,5130],[5253,5259],[5269,5275],[5343,5349],[5479,5482],[5518,5519],[5520,5520],[20004,20032],[20064,20092],[21413,21423],[21473,21483],[21896,21899],[22171,22177],[22181,22187],[22191,22197],[25884,25884],[27205,27232],[27391,27398],[27492,27492],[28402,28432],[28462,28492],[30161,30179],[30800,30800],[31251,31259],[31275,31279],[31281,31290],[31466,31700]];function s(e){return null!=e&&n.some((([t,r])=>e>=t&&e<=r))}},49999:(e,t,r)=>{r.d(t,{j:()=>u});var n=r(36663),s=r(74396),i=r(53280),a=r(81977),o=(r(7283),r(7753),r(39994),r(40266));const l={visible:"visibleSublayers"};let u=class extends((0,i.p)(s.Z)){constructor(e){super(e),this.scale=0}set layer(e){this._get("layer")!==e&&(this._set("layer",e),this.handles.remove("layer"),e&&this.handles.add([e.sublayers.on("change",(()=>this.notifyChange("visibleSublayers"))),e.on("wms-sublayer-update",(e=>this.notifyChange(l[e.propertyName])))],"layer"))}get layers(){return this.visibleSublayers.filter((({name:e})=>e)).map((({name:e})=>e)).join()}get version(){this.commitProperty("layers");const e=this.layer;return e&&e.commitProperty("imageTransparency"),(this._get("version")||0)+1}get visibleSublayers(){const{layer:e,scale:t}=this,r=e?.sublayers,n=[],s=e=>{const{minScale:r,maxScale:i,sublayers:a,visible:o}=e;o&&(0===t||(0===r||t<=r)&&(0===i||t>=i))&&(a?a.forEach(s):n.push(e))};return r?.forEach(s),n}toJSON(){const{layer:e,layers:t}=this,{imageFormat:r,imageTransparency:n,version:s}=e;return{format:r,request:"GetMap",service:"WMS",styles:"",transparent:n?"TRUE":"FALSE",version:s,layers:t}}};(0,n._)([(0,a.Cb)()],u.prototype,"layer",null),(0,n._)([(0,a.Cb)({readOnly:!0})],u.prototype,"layers",null),(0,n._)([(0,a.Cb)({type:Number})],u.prototype,"scale",void 0),(0,n._)([(0,a.Cb)({readOnly:!0})],u.prototype,"version",null),(0,n._)([(0,a.Cb)({readOnly:!0})],u.prototype,"visibleSublayers",null),u=(0,n._)([(0,o.j)("esri.layers.support.ExportWMSImageParameters")],u)},4452:(e,t,r)=>{r.d(t,{V:()=>a,g:()=>i});var n=r(70375),s=r(78668);async function i(e,t,r){let i;try{i=await createImageBitmap(e)}catch(e){throw new n.Z("request:server",`Unable to load ${t}`,{url:t,error:e})}return(0,s.k_)(r),i}async function a(e,t,r,i,a){let o;try{o=await createImageBitmap(e)}catch(e){throw new n.Z("request:server",`Unable to load tile ${t}/${r}/${i}`,{error:e,level:t,row:r,col:i})}return(0,s.k_)(a),o}}}]);