"use strict";(self.webpackChunkexb_client=self.webpackChunkexb_client||[]).push([[91780],{10663:(e,t,r)=>{r.d(t,{c:()=>h,g:()=>y,j:()=>_,k:()=>d,m:()=>a,s:()=>c});var n=r(34344),s=r(61044),f=r(8909),i=r(93011),u=r(6766),o=r(88589);function c(e,t,r){r*=.5;const n=Math.sin(r);return e[0]=n*t[0],e[1]=n*t[1],e[2]=n*t[2],e[3]=Math.cos(r),e}function y(e,t){const r=2*Math.acos(t[3]),n=Math.sin(r/2);return n>(0,i.g)()?(e[0]=t[0]/n,e[1]=t[1]/n,e[2]=t[2]/n):(e[0]=1,e[1]=0,e[2]=0),r}function a(e,t,r){const n=t[0],s=t[1],f=t[2],i=t[3],u=r[0],o=r[1],c=r[2],y=r[3];return e[0]=n*y+i*u+s*c-f*o,e[1]=s*y+i*o+f*u-n*c,e[2]=f*y+i*c+n*o-s*u,e[3]=i*y-n*u-s*o-f*c,e}function l(e,t,r,n){const s=t[0],f=t[1],u=t[2],o=t[3];let c,y,a,l,h,p=r[0],d=r[1],T=r[2],b=r[3];return y=s*p+f*d+u*T+o*b,y<0&&(y=-y,p=-p,d=-d,T=-T,b=-b),1-y>(0,i.g)()?(c=Math.acos(y),a=Math.sin(c),l=Math.sin((1-n)*c)/a,h=Math.sin(n*c)/a):(l=1-n,h=n),e[0]=l*s+h*p,e[1]=l*f+h*d,e[2]=l*u+h*T,e[3]=l*o+h*b,e}function h(e,t){return e[0]=-t[0],e[1]=-t[1],e[2]=-t[2],e[3]=t[3],e}function p(e,t){const r=t[0]+t[4]+t[8];let n;if(r>0)n=Math.sqrt(r+1),e[3]=.5*n,n=.5/n,e[0]=(t[5]-t[7])*n,e[1]=(t[6]-t[2])*n,e[2]=(t[1]-t[3])*n;else{let r=0;t[4]>t[0]&&(r=1),t[8]>t[3*r+r]&&(r=2);const s=(r+1)%3,f=(r+2)%3;n=Math.sqrt(t[3*r+r]-t[3*s+s]-t[3*f+f]+1),e[r]=.5*n,n=.5/n,e[3]=(t[3*s+f]-t[3*f+s])*n,e[s]=(t[3*s+r]+t[3*r+s])*n,e[f]=(t[3*f+r]+t[3*r+f])*n}return e}function d(e,t,r,n){const s=.5*Math.PI/180;t*=s,r*=s,n*=s;const f=Math.sin(t),i=Math.cos(t),u=Math.sin(r),o=Math.cos(r),c=Math.sin(n),y=Math.cos(n);return e[0]=f*o*y-i*u*c,e[1]=i*u*y+f*o*c,e[2]=i*o*c-f*u*y,e[3]=i*o*y+f*u*c,e}const T=o.c,b=o.s,B=o.a,m=a,g=o.b,E=o.d,A=o.l,O=o.e,M=O,S=o.f,w=S,P=o.n,_=o.g,L=o.h,x=(0,f.c)(),C=(0,f.f)(1,0,0),F=(0,f.f)(0,1,0),R=(0,s.a)(),v=(0,s.a)(),N=(0,n.c)();Object.freeze(Object.defineProperty({__proto__:null,add:B,calculateW:function(e,t){const r=t[0],n=t[1],s=t[2];return e[0]=r,e[1]=n,e[2]=s,e[3]=Math.sqrt(Math.abs(1-r*r-n*n-s*s)),e},conjugate:h,copy:T,dot:E,equals:L,exactEquals:_,fromEuler:d,fromMat3:p,getAxisAngle:y,identity:function(e){return e[0]=0,e[1]=0,e[2]=0,e[3]=1,e},invert:function(e,t){const r=t[0],n=t[1],s=t[2],f=t[3],i=r*r+n*n+s*s+f*f,u=i?1/i:0;return e[0]=-r*u,e[1]=-n*u,e[2]=-s*u,e[3]=f*u,e},len:M,length:O,lerp:A,mul:m,multiply:a,normalize:P,random:function(e){const t=i.R,r=t(),n=t(),s=t(),f=Math.sqrt(1-r),u=Math.sqrt(r);return e[0]=f*Math.sin(2*Math.PI*n),e[1]=f*Math.cos(2*Math.PI*n),e[2]=u*Math.sin(2*Math.PI*s),e[3]=u*Math.cos(2*Math.PI*s),e},rotateX:function(e,t,r){r*=.5;const n=t[0],s=t[1],f=t[2],i=t[3],u=Math.sin(r),o=Math.cos(r);return e[0]=n*o+i*u,e[1]=s*o+f*u,e[2]=f*o-s*u,e[3]=i*o-n*u,e},rotateY:function(e,t,r){r*=.5;const n=t[0],s=t[1],f=t[2],i=t[3],u=Math.sin(r),o=Math.cos(r);return e[0]=n*o-f*u,e[1]=s*o+i*u,e[2]=f*o+n*u,e[3]=i*o-s*u,e},rotateZ:function(e,t,r){r*=.5;const n=t[0],s=t[1],f=t[2],i=t[3],u=Math.sin(r),o=Math.cos(r);return e[0]=n*o+s*u,e[1]=s*o-n*u,e[2]=f*o+i*u,e[3]=i*o-f*u,e},rotationTo:function(e,t,r){const n=(0,u.e)(t,r);return n<-.999999?((0,u.f)(x,C,t),(0,u.u)(x)<1e-6&&(0,u.f)(x,F,t),(0,u.n)(x,x),c(e,x,Math.PI),e):n>.999999?(e[0]=0,e[1]=0,e[2]=0,e[3]=1,e):((0,u.f)(x,t,r),e[0]=x[0],e[1]=x[1],e[2]=x[2],e[3]=1+n,P(e,e))},scale:g,set:b,setAxes:function(e,t,r,n){const s=N;return s[0]=r[0],s[3]=r[1],s[6]=r[2],s[1]=n[0],s[4]=n[1],s[7]=n[2],s[2]=-t[0],s[5]=-t[1],s[8]=-t[2],P(e,p(e,s))},setAxisAngle:c,slerp:l,sqlerp:function(e,t,r,n,s,f){return l(R,t,s,f),l(v,r,n,f),l(e,R,v,2*f*(1-f)),e},sqrLen:w,squaredLength:S,str:function(e){return"quat("+e[0]+", "+e[1]+", "+e[2]+", "+e[3]+")"}},Symbol.toStringTag,{value:"Module"}))},61170:(e,t,r)=>{r.d(t,{rS:()=>c});var n=r(69442),s=r(14685),f=r(35925);const i=new s.Z(n.kU),u=new s.Z(n.JL),o=new s.Z(n.mM);function c(e){return e&&((0,f.BZ)(e)||(0,f.fS)(e,u))?u:e&&((0,f.V2)(e)||(0,f.fS)(e,o))?o:i}new s.Z(n.pn)},68403:(e,t,r)=>{r.d(t,{Z:()=>b});var n,s=r(36663),f=r(82064),i=r(81977),u=(r(7283),r(7753),r(39994),r(40266)),o=r(24455),c=r(39100),y=r(10663),a=r(61044),l=r(6766),h=r(8909),p=r(34218);let d=n=class extends f.wq{constructor(e){super(e),this.translation=(0,h.c)(),this.rotationAxis=(0,h.g)(p.UP),this.rotationAngle=0,this.scale=(0,h.f)(1,1,1)}get rotation(){return(0,p.uT)(this.rotationAxis,this.rotationAngle)}set rotation(e){this.rotationAxis=(0,h.a)((0,p.ZZ)(e)),this.rotationAngle=(0,p.EU)(e)}get localMatrix(){const e=(0,c.c)();return(0,y.s)(T,(0,p.ZZ)(this.rotation),(0,p.WH)(this.rotation)),(0,o.g)(e,T,this.translation,this.scale),e}get localMatrixInverse(){return(0,o.a)((0,c.c)(),this.localMatrix)}applyLocal(e,t){return(0,l.m)(t,e,this.localMatrix)}applyLocalInverse(e,t){return(0,l.m)(t,e,this.localMatrixInverse)}equals(e){return this===e||null!=e&&(0,o.h)(this.localMatrix,e.localMatrix)}clone(){const e={translation:(0,h.a)(this.translation),rotationAxis:(0,h.a)(this.rotationAxis),rotationAngle:this.rotationAngle,scale:(0,h.a)(this.scale)};return new n(e)}};(0,s._)([(0,i.Cb)({type:[Number],nonNullable:!0,json:{write:!0}})],d.prototype,"translation",void 0),(0,s._)([(0,i.Cb)({type:[Number],nonNullable:!0,json:{write:!0}})],d.prototype,"rotationAxis",void 0),(0,s._)([(0,i.Cb)({type:Number,nonNullable:!0,json:{write:!0}})],d.prototype,"rotationAngle",void 0),(0,s._)([(0,i.Cb)({type:[Number],nonNullable:!0,json:{write:!0}})],d.prototype,"scale",void 0),(0,s._)([(0,i.Cb)()],d.prototype,"rotation",null),(0,s._)([(0,i.Cb)()],d.prototype,"localMatrix",null),(0,s._)([(0,i.Cb)()],d.prototype,"localMatrixInverse",null),d=n=(0,s._)([(0,u.j)("esri.geometry.support.MeshTransform")],d);const T=(0,a.a)(),b=d},34218:(e,t,r)=>{r.d(t,{EU:()=>h,UP:()=>d,Ue:()=>o,WH:()=>p,ZZ:()=>l,qC:()=>y,qw:()=>a,uT:()=>c});var n=r(19431),s=r(10663),f=r(61044),i=r(6766),u=r(8909);function o(e=d){return[e[0],e[1],e[2],e[3]]}function c(e,t,r=o()){return(0,i.c)(r,e),r[3]=t,r}function y(e,t,r=o()){return(0,s.s)(T,e,p(e)),(0,s.s)(b,t,p(t)),(0,s.m)(T,b,T),function(e,t){return e[3]=t,e}(r,(0,n.BV)((0,s.g)(r,T)))}function a(e,t,r,n=o()){return c(u.d,e,B),c(u.e,t,m),c(u.U,r,g),y(B,m,B),y(B,g,n),n}function l(e){return e}function h(e){return e[3]}function p(e){return(0,n.Vl)(e[3])}const d=[0,0,1,0],T=(0,f.a)(),b=(0,f.a)(),B=(o(),o()),m=o(),g=o()},81936:(e,t,r)=>{r.d(t,{ly:()=>l,oS:()=>g,o7:()=>U,Jj:()=>z,Hz:()=>I,gK:()=>T,ey:()=>b,bj:()=>B,O1:()=>m,av:()=>_,Nu:()=>F,D_:()=>M,Eu:()=>h,q6:()=>E,or:()=>j,wA:()=>W,Vs:()=>Y,TS:()=>L,qt:()=>R,xA:()=>S,ct:()=>p,fP:()=>A,n1:()=>q,PP:()=>G,P_:()=>Z,mw:()=>x,G5:()=>v,ne:()=>w,ek:()=>d,Cd:()=>O,zO:()=>k,TN:()=>H,ir:()=>V,v6:()=>C,hu:()=>N,mc:()=>P});class n{constructor(e,t,r=0,n,s){this.TypedArrayConstructor=e,this.elementCount=9;const f=this.TypedArrayConstructor;void 0===n&&(n=9*f.BYTES_PER_ELEMENT);const i=0===t.byteLength?0:r;this.typedBuffer=null==s?new f(t,i):new f(t,i,(s-r)/f.BYTES_PER_ELEMENT),this.typedBufferStride=n/f.BYTES_PER_ELEMENT,this.count=Math.ceil(this.typedBuffer.length/this.typedBufferStride),this.stride=this.typedBufferStride*this.TypedArrayConstructor.BYTES_PER_ELEMENT}sliceBuffer(e,t,r=this.count-t){const n=this.typedBuffer.byteOffset+t*this.stride;return new e(this.buffer,n,this.stride,n+r*this.stride)}getMat(e,t){let r=e*this.typedBufferStride;for(let e=0;e<9;e++)t[e]=this.typedBuffer[r++];return t}setMat(e,t){let r=e*this.typedBufferStride;for(let e=0;e<9;e++)this.typedBuffer[r++]=t[e]}get(e,t){return this.typedBuffer[e*this.typedBufferStride+t]}set(e,t,r){this.typedBuffer[e*this.typedBufferStride+t]=r}copyFrom(e,t,r){const n=this.typedBuffer,s=t.typedBuffer;let f=e*this.typedBufferStride,i=r*t.typedBufferStride;for(let e=0;e<9;++e)n[f++]=s[i++]}get buffer(){return this.typedBuffer.buffer}}n.ElementCount=9;class s{constructor(e,t,r=0,n,s){this.TypedArrayConstructor=e,this.elementCount=16;const f=this.TypedArrayConstructor;void 0===n&&(n=16*f.BYTES_PER_ELEMENT);const i=0===t.byteLength?0:r;this.typedBuffer=null==s?new f(t,i):new f(t,i,(s-r)/f.BYTES_PER_ELEMENT),this.typedBufferStride=n/f.BYTES_PER_ELEMENT,this.count=Math.ceil(this.typedBuffer.length/this.typedBufferStride),this.stride=this.typedBufferStride*this.TypedArrayConstructor.BYTES_PER_ELEMENT}sliceBuffer(e,t,r=this.count-t){const n=this.typedBuffer.byteOffset+t*this.stride;return new e(this.buffer,n,this.stride,n+r*this.stride)}getMat(e,t){let r=e*this.typedBufferStride;for(let e=0;e<16;e++)t[e]=this.typedBuffer[r++];return t}setMat(e,t){let r=e*this.typedBufferStride;for(let e=0;e<16;e++)this.typedBuffer[r++]=t[e]}get(e,t){return this.typedBuffer[e*this.typedBufferStride+t]}set(e,t,r){this.typedBuffer[e*this.typedBufferStride+t]=r}copyFrom(e,t,r){const n=this.typedBuffer,s=t.typedBuffer;let f=e*this.typedBufferStride,i=r*t.typedBufferStride;for(let e=0;e<16;++e)n[f++]=s[i++]}get buffer(){return this.typedBuffer.buffer}}s.ElementCount=16;class f{constructor(e,t,r=0,n,s){this.TypedArrayConstructor=e,this.elementCount=1;const f=this.TypedArrayConstructor;void 0===n&&(n=f.BYTES_PER_ELEMENT);const i=0===t.byteLength?0:r;this.typedBuffer=null==s?new f(t,i):new f(t,i,(s-r)/f.BYTES_PER_ELEMENT),this.stride=n,this.typedBufferStride=n/f.BYTES_PER_ELEMENT,this.count=Math.ceil(this.typedBuffer.length/this.typedBufferStride)}sliceBuffer(e,t,r=this.count-t){const n=this.typedBuffer.byteOffset+t*this.stride;return new e(this.buffer,n,this.stride,n+r*this.stride)}get(e){return this.typedBuffer[e*this.typedBufferStride]}set(e,t){this.typedBuffer[e*this.typedBufferStride]=t}get buffer(){return this.typedBuffer.buffer}}f.ElementCount=1;var i=r(55709);class u{constructor(e,t,r=0,n,s){this.TypedArrayConstructor=e,this.elementCount=2;const f=this.TypedArrayConstructor;void 0===n&&(n=2*f.BYTES_PER_ELEMENT);const i=0===t.byteLength?0:r;this.typedBuffer=null==s?new f(t,i):new f(t,i,(s-r)/f.BYTES_PER_ELEMENT),this.typedBufferStride=n/f.BYTES_PER_ELEMENT,this.count=Math.ceil(this.typedBuffer.length/this.typedBufferStride),this.stride=this.typedBufferStride*this.TypedArrayConstructor.BYTES_PER_ELEMENT}sliceBuffer(e,t,r=this.count-t){const n=this.typedBuffer.byteOffset+t*this.stride;return new e(this.buffer,n,this.stride,n+r*this.stride)}getVec(e,t){return e*=this.typedBufferStride,(0,i.s)(t,this.typedBuffer[e],this.typedBuffer[e+1])}setVec(e,t){e*=this.typedBufferStride,this.typedBuffer[e++]=t[0],this.typedBuffer[e]=t[1]}get(e,t){return this.typedBuffer[e*this.typedBufferStride+t]}set(e,t,r){this.typedBuffer[e*this.typedBufferStride+t]=r}setValues(e,t,r){e*=this.typedBufferStride,this.typedBuffer[e++]=t,this.typedBuffer[e]=r}copyFrom(e,t,r){const n=this.typedBuffer,s=t.typedBuffer;let f=e*this.typedBufferStride,i=r*t.typedBufferStride;n[f++]=s[i++],n[f]=s[i]}get buffer(){return this.typedBuffer.buffer}}u.ElementCount=2;var o=r(6766);class c{constructor(e,t,r=0,n,s){this.TypedArrayConstructor=e,this.elementCount=3;const f=this.TypedArrayConstructor;void 0===n&&(n=3*f.BYTES_PER_ELEMENT);const i=0===t.byteLength?0:r;this.typedBuffer=null==s?new f(t,i):new f(t,i,(s-r)/f.BYTES_PER_ELEMENT),this.typedBufferStride=n/f.BYTES_PER_ELEMENT,this.count=Math.ceil(this.typedBuffer.length/this.typedBufferStride),this.stride=this.typedBufferStride*this.TypedArrayConstructor.BYTES_PER_ELEMENT}sliceBuffer(e,t,r=this.count-t){const n=this.typedBuffer.byteOffset+t*this.stride;return new e(this.buffer,n,this.stride,n+r*this.stride)}getVec(e,t){return e*=this.typedBufferStride,(0,o.s)(t,this.typedBuffer[e],this.typedBuffer[e+1],this.typedBuffer[e+2])}setVec(e,t){e*=this.typedBufferStride,this.typedBuffer[e++]=t[0],this.typedBuffer[e++]=t[1],this.typedBuffer[e]=t[2]}get(e,t){return this.typedBuffer[e*this.typedBufferStride+t]}set(e,t,r){this.typedBuffer[e*this.typedBufferStride+t]=r}setValues(e,t,r,n){e*=this.typedBufferStride,this.typedBuffer[e++]=t,this.typedBuffer[e++]=r,this.typedBuffer[e]=n}copyFrom(e,t,r){const n=this.typedBuffer,s=t.typedBuffer;let f=e*this.typedBufferStride,i=r*t.typedBufferStride;n[f++]=s[i++],n[f++]=s[i++],n[f]=s[i]}get buffer(){return this.typedBuffer.buffer}}c.ElementCount=3;var y=r(88589);class a{constructor(e,t,r=0,n,s){this.TypedArrayConstructor=e,this.start=r,this.elementCount=4;const f=this.TypedArrayConstructor;void 0===n&&(n=4*f.BYTES_PER_ELEMENT);const i=0===t.byteLength?0:r;this.typedBuffer=null==s?new f(t,i):new f(t,i,(s-r)/f.BYTES_PER_ELEMENT),this.typedBufferStride=n/f.BYTES_PER_ELEMENT,this.count=Math.ceil(this.typedBuffer.length/this.typedBufferStride),this.stride=this.typedBufferStride*this.TypedArrayConstructor.BYTES_PER_ELEMENT}sliceBuffer(e,t,r=this.count-t){const n=this.typedBuffer.byteOffset+t*this.stride;return new e(this.buffer,n,this.stride,n+r*this.stride)}getVec(e,t){return e*=this.typedBufferStride,(0,y.s)(t,this.typedBuffer[e++],this.typedBuffer[e++],this.typedBuffer[e++],this.typedBuffer[e])}setVec(e,t){e*=this.typedBufferStride,this.typedBuffer[e++]=t[0],this.typedBuffer[e++]=t[1],this.typedBuffer[e++]=t[2],this.typedBuffer[e]=t[3]}get(e,t){return this.typedBuffer[e*this.typedBufferStride+t]}set(e,t,r){this.typedBuffer[e*this.typedBufferStride+t]=r}setValues(e,t,r,n,s){e*=this.typedBufferStride,this.typedBuffer[e++]=t,this.typedBuffer[e++]=r,this.typedBuffer[e++]=n,this.typedBuffer[e]=s}copyFrom(e,t,r){const n=this.typedBuffer,s=t.typedBuffer;let f=e*this.typedBufferStride,i=r*t.typedBufferStride;n[f++]=s[i++],n[f++]=s[i++],n[f++]=s[i++],n[f]=s[i]}get buffer(){return this.typedBuffer.buffer}}a.ElementCount=4;class l extends f{constructor(e,t=0,r,n){super(Float32Array,e,t,r,n),this.elementType="f32"}static fromTypedArray(e,t){return new l(e.buffer,e.byteOffset,t,e.byteOffset+e.byteLength)}}l.ElementType="f32";class h extends u{constructor(e,t=0,r,n){super(Float32Array,e,t,r,n),this.elementType="f32"}slice(e,t){return this.sliceBuffer(h,e,t)}static fromTypedArray(e,t){return new h(e.buffer,e.byteOffset,t,e.byteOffset+e.byteLength)}}h.ElementType="f32";class p extends c{constructor(e,t=0,r,n){super(Float32Array,e,t,r,n),this.elementType="f32"}slice(e,t){return this.sliceBuffer(p,e,t)}static fromTypedArray(e,t){return new p(e.buffer,e.byteOffset,t,e.byteOffset+e.byteLength)}}p.ElementType="f32";class d extends a{constructor(e,t=0,r,n){super(Float32Array,e,t,r,n),this.elementType="f32"}slice(e,t){return this.sliceBuffer(d,e,t)}static fromTypedArray(e,t){return new d(e.buffer,e.byteOffset,t,e.byteOffset+e.byteLength)}}d.ElementType="f32";class T extends n{constructor(e,t=0,r,n){super(Float32Array,e,t,r,n),this.elementType="f32"}slice(e,t){return this.sliceBuffer(T,e,t)}static fromTypedArray(e,t){return new T(e.buffer,e.byteOffset,t,e.byteOffset+e.byteLength)}}T.ElementType="f32";class b extends n{constructor(e,t=0,r,n){super(Float64Array,e,t,r,n),this.elementType="f64"}slice(e,t){return this.sliceBuffer(b,e,t)}static fromTypedArray(e,t){return new b(e.buffer,e.byteOffset,t,e.byteOffset+e.byteLength)}}b.ElementType="f64";class B extends s{constructor(e,t=0,r,n){super(Float32Array,e,t,r,n),this.elementType="f32"}slice(e,t){return this.sliceBuffer(B,e,t)}static fromTypedArray(e,t){return new B(e.buffer,e.byteOffset,t,e.byteOffset+e.byteLength)}}B.ElementType="f32";class m extends s{constructor(e,t=0,r,n){super(Float64Array,e,t,r,n),this.elementType="f64"}slice(e,t){return this.sliceBuffer(m,e,t)}static fromTypedArray(e,t){return new m(e.buffer,e.byteOffset,t,e.byteOffset+e.byteLength)}}m.ElementType="f64";class g extends f{constructor(e,t=0,r,n){super(Float64Array,e,t,r,n),this.elementType="f64"}slice(e,t){return this.sliceBuffer(g,e,t)}static fromTypedArray(e,t){return new g(e.buffer,e.byteOffset,t,e.byteOffset+e.byteLength)}}g.ElementType="f64";class E extends u{constructor(e,t=0,r,n){super(Float64Array,e,t,r,n),this.elementType="f64"}slice(e,t){return this.sliceBuffer(E,e,t)}static fromTypedArray(e,t){return new E(e.buffer,e.byteOffset,t,e.byteOffset+e.byteLength)}}E.ElementType="f64";class A extends c{constructor(e,t=0,r,n){super(Float64Array,e,t,r,n),this.elementType="f64"}slice(e,t){return this.sliceBuffer(A,e,t)}static fromTypedArray(e,t){return new A(e.buffer,e.byteOffset,t,e.byteOffset+e.byteLength)}}A.ElementType="f64";class O extends a{constructor(e,t=0,r,n){super(Float64Array,e,t,r,n),this.elementType="f64"}slice(e,t){return this.sliceBuffer(O,e,t)}static fromTypedArray(e,t){return new O(e.buffer,e.byteOffset,t,e.byteOffset+e.byteLength)}}O.ElementType="f64";class M extends f{constructor(e,t=0,r,n){super(Uint8Array,e,t,r,n),this.elementType="u8"}slice(e,t){return this.sliceBuffer(M,e,t)}static fromTypedArray(e,t){return new M(e.buffer,e.byteOffset,t,e.byteOffset+e.byteLength)}}M.ElementType="u8";class S extends u{constructor(e,t=0,r,n){super(Uint8Array,e,t,r,n),this.elementType="u8"}slice(e,t){return this.sliceBuffer(S,e,t)}static fromTypedArray(e,t){return new S(e.buffer,e.byteOffset,t,e.byteOffset+e.byteLength)}}S.ElementType="u8";class w extends c{constructor(e,t=0,r,n){super(Uint8Array,e,t,r,n),this.elementType="u8"}slice(e,t){return this.sliceBuffer(w,e,t)}static fromTypedArray(e,t){return new w(e.buffer,e.byteOffset,t,e.byteOffset+e.byteLength)}}w.ElementType="u8";class P extends a{constructor(e,t=0,r,n){super(Uint8Array,e,t,r,n),this.elementType="u8"}slice(e,t){return this.sliceBuffer(P,e,t)}static fromTypedArray(e,t){return new P(e.buffer,e.byteOffset,t,e.byteOffset+e.byteLength)}}P.ElementType="u8";class _ extends f{constructor(e,t=0,r,n){super(Uint16Array,e,t,r,n),this.elementType="u16"}slice(e,t){return this.sliceBuffer(_,e,t)}static fromTypedArray(e,t){return new _(e.buffer,e.byteOffset,t,e.byteOffset+e.byteLength)}}_.ElementType="u16";class L extends u{constructor(e,t=0,r,n){super(Uint16Array,e,t,r,n),this.elementType="u16"}slice(e,t){return this.sliceBuffer(L,e,t)}static fromTypedArray(e,t){return new L(e.buffer,e.byteOffset,t,e.byteOffset+e.byteLength)}}L.ElementType="u16";class x extends c{constructor(e,t=0,r,n){super(Uint16Array,e,t,r,n),this.elementType="u16"}slice(e,t){return this.sliceBuffer(x,e,t)}static fromTypedArray(e,t){return new x(e.buffer,e.byteOffset,t,e.byteOffset+e.byteLength)}}x.ElementType="u16";class C extends a{constructor(e,t=0,r,n){super(Uint16Array,e,t,r,n),this.elementType="u16"}slice(e,t){return this.sliceBuffer(C,e,t)}static fromTypedArray(e,t){return new C(e.buffer,e.byteOffset,t,e.byteOffset+e.byteLength)}}C.ElementType="u16";class F extends f{constructor(e,t=0,r,n){super(Uint32Array,e,t,r,n),this.elementType="u32"}slice(e,t){return this.sliceBuffer(F,e,t)}static fromTypedArray(e,t){return new F(e.buffer,e.byteOffset,t,e.byteOffset+e.byteLength)}}F.ElementType="u32";class R extends u{constructor(e,t=0,r,n){super(Uint32Array,e,t,r,n),this.elementType="u32"}slice(e,t){return this.sliceBuffer(R,e,t)}static fromTypedArray(e,t){return new R(e.buffer,e.byteOffset,t,e.byteOffset+e.byteLength)}}R.ElementType="u32";class v extends c{constructor(e,t=0,r,n){super(Uint32Array,e,t,r,n),this.elementType="u32"}slice(e,t){return this.sliceBuffer(v,e,t)}static fromTypedArray(e,t){return new v(e.buffer,e.byteOffset,t,e.byteOffset+e.byteLength)}}v.ElementType="u32";class N extends a{constructor(e,t=0,r,n){super(Uint32Array,e,t,r,n),this.elementType="u32"}slice(e,t){return this.sliceBuffer(N,e,t)}static fromTypedArray(e,t){return new N(e.buffer,e.byteOffset,t,e.byteOffset+e.byteLength)}}N.ElementType="u32";class I extends f{constructor(e,t=0,r,n){super(Int8Array,e,t,r,n),this.elementType="i8"}slice(e,t){return this.sliceBuffer(I,e,t)}static fromTypedArray(e,t){return new I(e.buffer,e.byteOffset,t,e.byteOffset+e.byteLength)}}I.ElementType="i8";class Y extends u{constructor(e,t=0,r,n){super(Int8Array,e,t,r,n),this.elementType="i8"}slice(e,t){return this.sliceBuffer(Y,e,t)}static fromTypedArray(e,t){return new Y(e.buffer,e.byteOffset,t,e.byteOffset+e.byteLength)}}Y.ElementType="i8";class Z extends c{constructor(e,t=0,r,n){super(Int8Array,e,t,r,n),this.elementType="i8"}slice(e,t){return this.sliceBuffer(Z,e,t)}static fromTypedArray(e,t){return new Z(e.buffer,e.byteOffset,t,e.byteOffset+e.byteLength)}}Z.ElementType="i8";class V extends a{constructor(e,t=0,r,n){super(Int8Array,e,t,r,n),this.elementType="i8"}slice(e,t){return this.sliceBuffer(V,e,t)}static fromTypedArray(e,t){return new V(e.buffer,e.byteOffset,t,e.byteOffset+e.byteLength)}}V.ElementType="i8";class U extends f{constructor(e,t=0,r,n){super(Int16Array,e,t,r,n),this.elementType="i16"}slice(e,t){return this.sliceBuffer(U,e,t)}static fromTypedArray(e,t){return new U(e.buffer,e.byteOffset,t,e.byteOffset+e.byteLength)}}U.ElementType="i16";class j extends u{constructor(e,t=0,r,n){super(Int16Array,e,t,r,n),this.elementType="i16"}slice(e,t){return this.sliceBuffer(j,e,t)}static fromTypedArray(e,t){return new j(e.buffer,e.byteOffset,t,e.byteOffset+e.byteLength)}}j.ElementType="i16";class q extends c{constructor(e,t=0,r,n){super(Int16Array,e,t,r,n),this.elementType="i16"}slice(e,t){return this.sliceBuffer(q,e,t)}static fromTypedArray(e,t){return new q(e.buffer,e.byteOffset,t,e.byteOffset+e.byteLength)}}q.ElementType="i16";class k extends a{constructor(e,t=0,r,n){super(Int16Array,e,t,r,n),this.elementType="i16"}slice(e,t){return this.sliceBuffer(k,e,t)}static fromTypedArray(e,t){return new k(e.buffer,e.byteOffset,t,e.byteOffset+e.byteLength)}}k.ElementType="i16";class z extends f{constructor(e,t=0,r,n){super(Int32Array,e,t,r,n),this.elementType="i32"}slice(e,t){return this.sliceBuffer(z,e,t)}static fromTypedArray(e,t){return new z(e.buffer,e.byteOffset,t,e.byteOffset+e.byteLength)}}z.ElementType="i32";class W extends u{constructor(e,t=0,r,n){super(Int32Array,e,t,r,n),this.elementType="i32"}slice(e,t){return this.sliceBuffer(W,e,t)}static fromTypedArray(e,t){return new W(e.buffer,e.byteOffset,t,e.byteOffset+e.byteLength)}}W.ElementType="i32";class G extends c{constructor(e,t=0,r,n){super(Int32Array,e,t,r,n),this.elementType="i32"}slice(e,t){return this.sliceBuffer(G,e,t)}static fromTypedArray(e,t){return new G(e.buffer,e.byteOffset,t,e.byteOffset+e.byteLength)}}G.ElementType="i32";class H extends a{constructor(e,t=0,r,n){super(Int32Array,e,t,r,n),this.elementType="i32"}slice(e,t){return this.sliceBuffer(H,e,t)}static fromTypedArray(e,t){return new H(e.buffer,e.byteOffset,t,e.byteOffset+e.byteLength)}}H.ElementType="i32"},67341:(e,t,r)=>{r.d(t,{A:()=>f,h:()=>s});var n=r(13802);function s(e,t){return e.isGeographic||e.isWebMercator&&(t?.geographic??!0)}function f(e,t,r){const s=!e.isGeoreferenced;null!=r?.geographic&&r.geographic!==s&&n.Z.getLogger(t).warnOnce(`Specifying the 'geographic' parameter (${r.geographic}) for a Mesh vertex space of type "${e.type}" is not supported. This parameter will be ignored.`)}},91780:(e,t,r)=>{r.r(t),r.d(t,{georeference:()=>g,georeferenceApplyTransform:()=>E,georeferenceByTransform:()=>A,project:()=>S,ungeoreference:()=>O,ungeoreferenceByTransform:()=>M});var n=r(17321),s=r(34344),f=r(24455),i=r(39100),u=r(6766),o=r(8909),c=r(1662),y=r(92376),a=r(61170),l=r(92570),h=r(2718),p=r(58626),d=r(51619),T=r(68403),b=r(86717),B=r(67341),m=r(49921);function g(e,t,r){return(0,B.h)(t.spatialReference,r)?function(e,t,r){const n=t.spatialReference,s=L(t,r,R),f=new Float64Array(e.position.length),i=function(e,t,r,n){(0,b.t)(n,e,t);const s=new Float64Array(e.length);return(0,m.To)(n,s,r)}(e.position,s,n,f),u=(0,c.b)(N,s);return{position:i,normal:w(i,f,e.normal,u,n),tangent:P(i,f,e.tangent,u,n)}}(e,t,r):function(e,t,r){const n=new Float64Array(e.position.length),s=e.position,f=t.x,i=t.y,u=t.z??0,o=F(r?r.unit:null,t.spatialReference);for(let e=0;e<s.length;e+=3)n[e]=s[e]*o+f,n[e+1]=s[e+1]*o+i,n[e+2]=s[e+2]*o+u;return{position:n,normal:e.normal,tangent:e.tangent}}(e,t,r)}function E(e,t,r,n){const{position:s,normal:f,tangent:u}=e;if(!t.isRelative)return{position:s,normal:f,tangent:u};const o=r?.localMatrix??i.I;return g({position:(0,b.t)(new Float64Array(s.length),s,o),normal:null!=f?(0,m.w9)(f,new Float32Array(f.length),o):null,tangent:null!=u?(0,m.VS)(u,new Float32Array(u.length),o):null},t.getOriginPoint(n),{geographic:!t.isGeoreferenced})}function A(e,t,r){if(r?.useTransform){const{position:n,normal:s,tangent:f}=e,{x:i,y:u,z:c}=t,y=(0,o.f)(i,u,c??0);return{vertexAttributes:{position:n,normal:s,tangent:f},vertexSpace:r.geographic??1?new d.Z({origin:y}):new h.Z({origin:y}),transform:new T.Z}}return{vertexAttributes:g(e,t,r),vertexSpace:new p.Z,transform:null}}function O(e,t,r){return(0,B.h)(t.spatialReference,r)?function(e,t,r){const n=t.spatialReference;L(t,r,R);const s=(0,f.a)(v,R),i=new Float64Array(e.position.length),u=function(e,t,r,n){const s=(0,m.XO)(e,t,n),f=new Float64Array(s.length);return(0,b.t)(f,s,r),f}(e.position,n,s,i),o=(0,c.b)(N,s);return{position:u,normal:x(e.normal,e.position,i,n,o),tangent:C(e.tangent,e.position,i,n,o)}}(e,t,r):_(e,t,r)}function M(e,t,r,n,s){if(!t.isRelative)return O(e,n,s);const{spatialReference:f}=n,i=E(e,t,r,f);return n.equals(t.getOriginPoint(f))?_(i,n,s):O(i,n,s)}function S({positions:e,transform:t,vertexSpace:r,inSpatialReference:n,outSpatialReference:s,outPositions:c,local:h}){const p=r.isRelative?r.origin:o.Z,d=r.isRelative?t?.localMatrix??i.I:i.I;if(r.isGeoreferenced){const t=c??(0,l.bg)(e.length);if((0,f.j)(d,i.I)?(0,l.JK)(t,e):(0,b.t)(t,e,d),!(0,u.k)(p,o.Z)){const[e,r,n]=p;for(let s=0;s<t.length;s+=3)t[s]+=e,t[s+1]+=r,t[s+2]+=n}return(0,y.projectBuffer)(t,n,0,t,s,0,t.length/3),t}const T=(0,a.rS)(n),B=!h&&(0,y.canProjectWithoutEngine)(n,T)?T:n;(0,y.computeTranslationToOriginAndRotation)(n,p,R,B),(0,f.m)(R,R,d);const m=c??(0,l.bg)(e.length);return(0,b.t)(m,e,R),(0,y.projectBuffer)(m,B,0,m,s,0,m.length/3),m}function w(e,t,r,n,s){if(null==r)return null;const f=new Float32Array(r.length);return(0,b.a)(f,r,n),(0,m.Yk)(f,e,t,s,f),f}function P(e,t,r,n,s){if(null==r)return null;const f=new Float32Array(r.length);(0,b.a)(f,r,n,4);for(let e=3;e<f.length;e+=4)f[e]=r[e];return(0,m.M2)(f,e,t,s,f),f}function _(e,t,r){const n=new Float64Array(e.position.length),s=e.position,f=t.x,i=t.y,u=t.z??0,o=F(r?r.unit:null,t.spatialReference);for(let e=0;e<s.length;e+=3)n[e]=(s[e]-f)/o,n[e+1]=(s[e+1]-i)/o,n[e+2]=(s[e+2]-u)/o;return{position:n,normal:e.normal,tangent:e.tangent}}function L(e,t,r){(0,y.computeTranslationToOriginAndRotation)(e.spatialReference,[e.x,e.y,e.z??0],r,(0,a.rS)(e.spatialReference));const n=F(t?t.unit:null,e.spatialReference);return(0,f.k)(r,r,[n,n,n]),r}function x(e,t,r,n,s){if(null==e)return null;const f=(0,m.Iz)(e,t,r,n,new Float32Array(e.length));return(0,b.a)(f,f,s),f}function C(e,t,r,n,s){if(null==e)return null;const f=(0,m.wi)(e,t,r,n,new Float32Array(e.length));return(0,b.a)(f,f,s,4),f}function F(e,t){if(null==e)return 1;const r=(0,n.r6)(t);return 1/(0,n.En)(r,"meters",e)}const R=(0,i.c)(),v=(0,i.c)(),N=(0,s.c)()},49921:(e,t,r)=>{r.d(t,{Iz:()=>T,M2:()=>O,To:()=>m,VS:()=>E,XO:()=>B,Yk:()=>b,w9:()=>g,wi:()=>A});var n=r(13802),s=r(1662),f=r(34344),i=r(39100),u=r(6766),o=r(8909),c=r(92376),y=r(61170),a=r(35925),l=r(39536),h=r(81936),p=r(86717);const d=n.Z.getLogger("esri.geometry.support.meshUtils.normalProjection");function T(e,t,r,n,s){return S(n)?(M(P.TO_PCPF,h.ct.fromTypedArray(e),h.fP.fromTypedArray(t),h.fP.fromTypedArray(r),n,h.ct.fromTypedArray(s)),s):(d.error("Cannot convert spatial reference to PCPF"),s)}function b(e,t,r,n,s){return S(n)?(M(P.FROM_PCPF,h.ct.fromTypedArray(e),h.fP.fromTypedArray(t),h.fP.fromTypedArray(r),n,h.ct.fromTypedArray(s)),s):(d.error("Cannot convert to spatial reference from PCPF"),s)}function B(e,t,r){return(0,c.projectBuffer)(e,t,0,r,(0,y.rS)(t),0,e.length/3),r}function m(e,t,r){return(0,c.projectBuffer)(e,(0,y.rS)(r),0,t,r,0,e.length/3),t}function g(e,t,r){return(0,s.b)(F,r),(0,p.a)(t,e,F),(0,s.i)(F)||(0,p.n)(t,t),t}function E(e,t,r){if((0,s.b)(F,r),(0,p.a)(t,e,F,4),(0,s.i)(F)||(0,p.n)(t,t,4),e!==t)for(let r=3;r<e.length;r+=4)t[r]=e[r];return t}function A(e,t,r,n,s){if(!S(n))return d.error("Cannot convert spatial reference to PCPF"),s;M(P.TO_PCPF,h.ct.fromTypedArray(e,4*Float32Array.BYTES_PER_ELEMENT),h.fP.fromTypedArray(t),h.fP.fromTypedArray(r),n,h.ct.fromTypedArray(s,4*Float32Array.BYTES_PER_ELEMENT));for(let t=3;t<e.length;t+=4)s[t]=e[t];return s}function O(e,t,r,n,s){if(!S(n))return d.error("Cannot convert to spatial reference from PCPF"),s;M(P.FROM_PCPF,h.ct.fromTypedArray(e,16),h.fP.fromTypedArray(t),h.fP.fromTypedArray(r),n,h.ct.fromTypedArray(s,16));for(let t=3;t<e.length;t+=4)s[t]=e[t];return s}function M(e,t,r,n,f,i){if(!t)return;const o=r.count,a=(0,y.rS)(f);if(w(f))for(let r=0;r<o;r++)n.getVec(r,L),t.getVec(r,x),(0,c.computeTranslationToOriginAndRotation)(a,L,C,a),(0,s.f)(F,C),e===P.FROM_PCPF&&(0,s.t)(F,F),(0,u.t)(x,x,F),i.setVec(r,x);else for(let f=0;f<o;f++){n.getVec(f,L),t.getVec(f,x),(0,c.computeTranslationToOriginAndRotation)(a,L,C,a),(0,s.f)(F,C);const o=(0,l.mZ)(r.get(f,1));let y=Math.cos(o);e===P.TO_PCPF&&(y=1/y),F[0]*=y,F[1]*=y,F[2]*=y,F[3]*=y,F[4]*=y,F[5]*=y,e===P.FROM_PCPF&&(0,s.t)(F,F),(0,u.t)(x,x,F),(0,u.n)(x,x),i.setVec(f,x)}return i}function S(e){return w(e)||function(e){return e.isWebMercator}(e)}function w(e){return e.isWGS84||(0,a.yW)(e)||(0,a.BZ)(e)||(0,a.V2)(e)}var P,_;(_=P||(P={}))[_.TO_PCPF=0]="TO_PCPF",_[_.FROM_PCPF=1]="FROM_PCPF";const L=(0,o.c)(),x=(0,o.c)(),C=(0,i.c)(),F=(0,f.c)()}}]);