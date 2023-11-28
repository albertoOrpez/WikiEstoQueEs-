/*! For license information please see 4200.bundle.js.LICENSE.txt */
"use strict";(self.webpackChunkexb_client=self.webpackChunkexb_client||[]).push([[4200],{1033:(e,t,i)=>{i.d(t,{H:()=>c,c:()=>n});var a=i(861);function n(e){return Math.min(Math.max(Math.ceil(e),1),6)}const c=(e,t)=>{const i=e.level?`h${e.level}`:"div";return delete e.level,(0,a.h)(i,{...e},t)}},4200:(e,t,i)=>{i.r(t),i.d(t,{calcite_tip:()=>m,calcite_tip_group:()=>h,calcite_tip_manager:()=>g});var a=i(861),n=i(2875),c=i(6077),r=i(3862),o=i(7572),s=i(1033),l=i(1338);i(5603);const d="thumbnail",m=class{constructor(e){(0,a.r)(this,e),this.calciteTipDismiss=(0,a.c)(this,"calciteTipDismiss",6),this.hideTip=()=>{this.closed=!0,this.calciteTipDismiss.emit()},this.closed=!1,this.closeDisabled=!1,this.heading=void 0,this.headingLevel=void 0,this.selected=!1,this.messages=void 0,this.messageOverrides=void 0,this.defaultMessages=void 0,this.effectiveLocale=""}onMessagesChange(){}effectiveLocaleChange(){(0,o.u)(this,this.effectiveLocale)}connectedCallback(){(0,n.c)(this),(0,r.c)(this),(0,o.c)(this)}async componentWillLoad(){await(0,o.s)(this)}disconnectedCallback(){(0,n.d)(this),(0,r.d)(this),(0,o.d)(this)}renderHeader(){const{heading:e,headingLevel:t,el:i}=this,n=i.closest("calcite-tip-manager")?.headingLevel,c=n?(0,s.c)(n+1):null,r=t||c;return e?(0,a.h)("header",{class:"header"},(0,a.h)(s.H,{class:"heading",level:r},e)):null}renderDismissButton(){const{closeDisabled:e,hideTip:t}=this;return e?null:(0,a.h)("calcite-action",{class:"close",icon:"x",onClick:t,scale:"l",text:this.messages.close})}renderImageFrame(){const{el:e}=this;return(0,c.g)(e,d)?(0,a.h)("div",{class:"image-frame",key:"thumbnail"},(0,a.h)("slot",{name:d})):null}renderInfoNode(){return(0,a.h)("div",{class:"info"},(0,a.h)("slot",null))}renderContent(){return(0,a.h)("div",{class:"content"},this.renderImageFrame(),this.renderInfoNode())}render(){return(0,a.h)(a.F,null,(0,a.h)("article",{class:"container"},this.renderHeader(),this.renderContent()),this.renderDismissButton())}static get assetsDirs(){return["assets"]}get el(){return(0,a.a)(this)}static get watchers(){return{messageOverrides:["onMessagesChange"],effectiveLocale:["effectiveLocaleChange"]}}};m.style="@keyframes in{0%{opacity:0}100%{opacity:1}}@keyframes in-down{0%{opacity:0;transform:translate3D(0, -5px, 0)}100%{opacity:1;transform:translate3D(0, 0, 0)}}@keyframes in-up{0%{opacity:0;transform:translate3D(0, 5px, 0)}100%{opacity:1;transform:translate3D(0, 0, 0)}}@keyframes in-right{0%{opacity:0;transform:translate3D(-5px, 0, 0)}100%{opacity:1;transform:translate3D(0, 0, 0)}}@keyframes in-left{0%{opacity:0;transform:translate3D(5px, 0, 0)}100%{opacity:1;transform:translate3D(0, 0, 0)}}@keyframes in-scale{0%{opacity:0;transform:scale3D(0.95, 0.95, 1)}100%{opacity:1;transform:scale3D(1, 1, 1)}}:root{--calcite-animation-timing:calc(150ms * var(--calcite-internal-duration-factor));--calcite-internal-duration-factor:var(--calcite-duration-factor, 1);--calcite-internal-animation-timing-fast:calc(100ms * var(--calcite-internal-duration-factor));--calcite-internal-animation-timing-medium:calc(200ms * var(--calcite-internal-duration-factor));--calcite-internal-animation-timing-slow:calc(300ms * var(--calcite-internal-duration-factor))}.calcite-animate{opacity:0;animation-fill-mode:both;animation-duration:var(--calcite-animation-timing)}.calcite-animate__in{animation-name:in}.calcite-animate__in-down{animation-name:in-down}.calcite-animate__in-up{animation-name:in-up}.calcite-animate__in-right{animation-name:in-right}.calcite-animate__in-left{animation-name:in-left}.calcite-animate__in-scale{animation-name:in-scale}@media (prefers-reduced-motion: reduce){:root{--calcite-internal-duration-factor:0.01}}:root{--calcite-floating-ui-transition:var(--calcite-animation-timing);--calcite-floating-ui-z-index:var(--calcite-app-z-index-dropdown)}:host([hidden]){display:none}:host{position:relative;margin:1rem;box-sizing:border-box;display:flex;flex-direction:row;border-width:1px;border-style:solid;border-color:var(--calcite-ui-border-2);background-color:var(--calcite-ui-foreground-1);font-size:var(--calcite-font-size--1);line-height:1rem;color:var(--calcite-ui-text-2)}:host *{box-sizing:border-box}.container{inline-size:100%;padding:1rem}:host([closed]),:host([closed]) .container{display:none}:host([selected]) .container{margin:0px;border-style:none;padding:0px}.header{margin:0px;display:flex;align-content:space-between;align-items:center;fill:var(--calcite-ui-text-2);color:var(--calcite-ui-text-2)}.heading{margin:0px;padding:0px;font-weight:var(--calcite-font-weight-medium)}.header .heading{flex:1 1 auto;padding:0.5rem}.header{margin-block-end:0.5rem}.header .heading{padding:0px;font-size:var(--calcite-font-size-0);line-height:1.25rem;color:var(--calcite-ui-text-1)}.container[hidden]{display:none}.content{display:flex}.info{padding-block:0px;padding-inline:1rem;inline-size:70%}.info:only-child{inline-size:100%;padding-inline:0px}::slotted(p){margin-block-start:0px}::slotted(a){outline-color:transparent;color:var(--calcite-ui-brand)}::slotted(a:focus){outline:2px solid var(--calcite-ui-focus-color, var(--calcite-ui-brand));outline-offset:calc(\n            2px *\n            calc(\n              1 -\n              2 * clamp(\n                0,\n                var(--calcite-ui-focus-offset-invert),\n                1\n              )\n            )\n          )}.image-frame{inline-size:25%}.image-frame img{max-inline-size:100%}::slotted(img){max-inline-size:100%}";const h=class{constructor(e){(0,a.r)(this,e),this.groupTitle=void 0}render(){return(0,a.h)("slot",null)}};h.style="@keyframes in{0%{opacity:0}100%{opacity:1}}@keyframes in-down{0%{opacity:0;transform:translate3D(0, -5px, 0)}100%{opacity:1;transform:translate3D(0, 0, 0)}}@keyframes in-up{0%{opacity:0;transform:translate3D(0, 5px, 0)}100%{opacity:1;transform:translate3D(0, 0, 0)}}@keyframes in-right{0%{opacity:0;transform:translate3D(-5px, 0, 0)}100%{opacity:1;transform:translate3D(0, 0, 0)}}@keyframes in-left{0%{opacity:0;transform:translate3D(5px, 0, 0)}100%{opacity:1;transform:translate3D(0, 0, 0)}}@keyframes in-scale{0%{opacity:0;transform:scale3D(0.95, 0.95, 1)}100%{opacity:1;transform:scale3D(1, 1, 1)}}:root{--calcite-animation-timing:calc(150ms * var(--calcite-internal-duration-factor));--calcite-internal-duration-factor:var(--calcite-duration-factor, 1);--calcite-internal-animation-timing-fast:calc(100ms * var(--calcite-internal-duration-factor));--calcite-internal-animation-timing-medium:calc(200ms * var(--calcite-internal-duration-factor));--calcite-internal-animation-timing-slow:calc(300ms * var(--calcite-internal-duration-factor))}.calcite-animate{opacity:0;animation-fill-mode:both;animation-duration:var(--calcite-animation-timing)}.calcite-animate__in{animation-name:in}.calcite-animate__in-down{animation-name:in-down}.calcite-animate__in-up{animation-name:in-up}.calcite-animate__in-right{animation-name:in-right}.calcite-animate__in-left{animation-name:in-left}.calcite-animate__in-scale{animation-name:in-scale}@media (prefers-reduced-motion: reduce){:root{--calcite-internal-duration-factor:0.01}}:root{--calcite-floating-ui-transition:var(--calcite-animation-timing);--calcite-floating-ui-z-index:var(--calcite-app-z-index-dropdown)}:host([hidden]){display:none}:host{box-sizing:border-box;display:block;background-color:var(--calcite-ui-foreground-1);font-size:var(--calcite-font-size--1);line-height:1rem;color:var(--calcite-ui-text-2)}::slotted(calcite-tip){margin:0px;border-style:none;max-inline-size:var(--calcite-tip-max-width)}";const p="chevron-left",f="chevron-right",g=class{constructor(e){(0,a.r)(this,e),this.calciteTipManagerClose=(0,a.c)(this,"calciteTipManagerClose",6),this.mutationObserver=(0,l.c)("mutation",(()=>this.setUpTips())),this.hideTipManager=()=>{this.closed=!0,this.calciteTipManagerClose.emit()},this.previousClicked=()=>{this.previousTip()},this.nextClicked=()=>{this.nextTip()},this.tipManagerKeyDownHandler=e=>{if(e.target===this.container)switch(e.key){case"ArrowRight":e.preventDefault(),this.nextTip();break;case"ArrowLeft":e.preventDefault(),this.previousTip();break;case"Home":e.preventDefault(),this.selectedIndex=0;break;case"End":e.preventDefault(),this.selectedIndex=this.total-1}},this.storeContainerRef=e=>{this.container=e},this.closed=!1,this.headingLevel=void 0,this.messages=void 0,this.messageOverrides=void 0,this.selectedIndex=void 0,this.tips=void 0,this.total=void 0,this.direction=void 0,this.groupTitle=void 0,this.defaultMessages=void 0,this.effectiveLocale=""}closedChangeHandler(){this.direction=null}onMessagesChange(){}selectedChangeHandler(){this.showSelectedTip(),this.updateGroupTitle()}async effectiveLocaleChange(){await(0,o.u)(this,this.effectiveLocale),this.updateGroupTitle()}connectedCallback(){(0,r.c)(this),(0,o.c)(this),this.setUpTips(),this.mutationObserver?.observe(this.el,{childList:!0,subtree:!0})}async componentWillLoad(){await(0,o.s)(this),this.updateGroupTitle()}disconnectedCallback(){this.mutationObserver?.disconnect(),(0,r.d)(this),(0,o.d)(this)}async nextTip(){this.direction="advancing";const e=this.selectedIndex+1;this.selectedIndex=(e+this.total)%this.total}async previousTip(){this.direction="retreating";const e=this.selectedIndex-1;this.selectedIndex=(e+this.total)%this.total}setUpTips(){const e=Array.from(this.el.querySelectorAll("calcite-tip"));if(this.total=e.length,0===this.total)return;const t=this.el.querySelector("calcite-tip[selected]");this.tips=e,this.selectedIndex=t?e.indexOf(t):0,e.forEach((e=>{e.closeDisabled=!0})),this.showSelectedTip()}showSelectedTip(){this.tips.forEach(((e,t)=>{const i=this.selectedIndex===t;e.selected=i,e.hidden=!i}))}updateGroupTitle(){if(this.tips){const e=this.tips[this.selectedIndex].closest("calcite-tip-group");this.groupTitle=e?.groupTitle||this.messages?.defaultGroupTitle}}renderPagination(){const e=(0,c.b)(this.el),{selectedIndex:t,tips:i,total:n,messages:r}=this,o=r.next,s=r.previous,l=r.defaultPaginationLabel;return i.length>1?(0,a.h)("footer",{class:"pagination"},(0,a.h)("calcite-action",{class:"page-previous",icon:"ltr"===e?p:f,onClick:this.previousClicked,scale:"m",text:s}),(0,a.h)("span",{class:"page-position"},`${l} ${t+1}/${n}`),(0,a.h)("calcite-action",{class:"page-next",icon:"ltr"===e?f:p,onClick:this.nextClicked,scale:"m",text:o})):null}render(){const{closed:e,direction:t,headingLevel:i,groupTitle:n,selectedIndex:r,messages:o,total:l}=this,d=o.close;return 0===l?null:(0,a.h)("section",{"aria-hidden":(0,c.t)(e),class:"container",hidden:e,onKeyDown:this.tipManagerKeyDownHandler,tabIndex:0,ref:this.storeContainerRef},(0,a.h)("header",{class:"header"},(0,a.h)(s.H,{class:"heading",level:i},n),(0,a.h)("calcite-action",{class:"close",onClick:this.hideTipManager,scale:"m",text:d},(0,a.h)("calcite-icon",{icon:"x",scale:"m"}))),(0,a.h)("div",{class:{"tip-container":!0,"tip-container--advancing":!e&&"advancing"===t,"tip-container--retreating":!e&&"retreating"===t},key:r,tabIndex:0},(0,a.h)("slot",null)),this.renderPagination())}static get assetsDirs(){return["assets"]}get el(){return(0,a.a)(this)}static get watchers(){return{closed:["closedChangeHandler"],messageOverrides:["onMessagesChange"],selectedIndex:["selectedChangeHandler"],effectiveLocale:["effectiveLocaleChange"]}}};g.style="@keyframes in{0%{opacity:0}100%{opacity:1}}@keyframes in-down{0%{opacity:0;transform:translate3D(0, -5px, 0)}100%{opacity:1;transform:translate3D(0, 0, 0)}}@keyframes in-up{0%{opacity:0;transform:translate3D(0, 5px, 0)}100%{opacity:1;transform:translate3D(0, 0, 0)}}@keyframes in-right{0%{opacity:0;transform:translate3D(-5px, 0, 0)}100%{opacity:1;transform:translate3D(0, 0, 0)}}@keyframes in-left{0%{opacity:0;transform:translate3D(5px, 0, 0)}100%{opacity:1;transform:translate3D(0, 0, 0)}}@keyframes in-scale{0%{opacity:0;transform:scale3D(0.95, 0.95, 1)}100%{opacity:1;transform:scale3D(1, 1, 1)}}:root{--calcite-animation-timing:calc(150ms * var(--calcite-internal-duration-factor));--calcite-internal-duration-factor:var(--calcite-duration-factor, 1);--calcite-internal-animation-timing-fast:calc(100ms * var(--calcite-internal-duration-factor));--calcite-internal-animation-timing-medium:calc(200ms * var(--calcite-internal-duration-factor));--calcite-internal-animation-timing-slow:calc(300ms * var(--calcite-internal-duration-factor))}.calcite-animate{opacity:0;animation-fill-mode:both;animation-duration:var(--calcite-animation-timing)}.calcite-animate__in{animation-name:in}.calcite-animate__in-down{animation-name:in-down}.calcite-animate__in-up{animation-name:in-up}.calcite-animate__in-right{animation-name:in-right}.calcite-animate__in-left{animation-name:in-left}.calcite-animate__in-scale{animation-name:in-scale}@media (prefers-reduced-motion: reduce){:root{--calcite-internal-duration-factor:0.01}}:root{--calcite-floating-ui-transition:var(--calcite-animation-timing);--calcite-floating-ui-z-index:var(--calcite-app-z-index-dropdown)}:host([hidden]){display:none}:host{box-sizing:border-box;display:block;background-color:var(--calcite-ui-foreground-1);font-size:var(--calcite-font-size--1);line-height:1rem;color:var(--calcite-ui-text-2);--calcite-tip-manager-height:19vh}:host *{box-sizing:border-box}:host([closed]){display:none}.header{margin:0px;display:flex;align-content:space-between;align-items:center;fill:var(--calcite-ui-text-2);color:var(--calcite-ui-text-2)}.heading{margin:0px;padding:0px;font-weight:var(--calcite-font-weight-medium)}.header .heading{flex:1 1 auto;padding:0.5rem}.header{border-width:0px;border-block-end-width:1px;border-style:solid;border-color:var(--calcite-ui-border-3);padding-block:0px;padding-inline-end:0px;padding-inline-start:1rem}.header .heading{padding:0px;font-size:var(--calcite-font-size-1);line-height:1.5rem;font-weight:var(--calcite-font-weight-bold);color:var(--calcite-ui-text-1)}.container{position:relative;overflow:hidden;outline-color:transparent;min-block-size:150px}.container:focus{outline:2px solid var(--calcite-ui-focus-color, var(--calcite-ui-brand));outline-offset:calc(\n            2px *\n            calc(\n              1 -\n              2 * clamp(\n                0,\n                var(--calcite-ui-focus-offset-invert),\n                1\n              )\n            )\n          )}.tip-container{margin-block-start:1px;display:flex;align-items:flex-start;justify-content:center;overflow:auto;padding:1rem;outline-color:transparent;animation-name:none;animation-duration:var(--calcite-animation-timing);block-size:var(--calcite-tip-manager-height)}.tip-container:focus{outline:2px solid var(--calcite-ui-focus-color, var(--calcite-ui-brand));outline-offset:calc(\n            2px *\n            calc(\n              1 -\n              2 * clamp(\n                0,\n                var(--calcite-ui-focus-offset-invert),\n                1\n              )\n            )\n          )}::slotted(calcite-tip){margin:0px;border-style:none;max-inline-size:var(--calcite-tip-max-width)}.tip-container--advancing{animation-name:tip-advance}.tip-container--retreating{animation-name:tip-retreat}.pagination{display:flex;align-items:center;justify-content:center;padding-inline:0px;padding-block:0.75rem 0.5rem}.page-position{margin-block:0px;margin-inline:0.5rem;font-size:var(--calcite-font-size--2);line-height:1rem}@keyframes tip-advance{0%{opacity:0;transform:translate3d(50px, 0, 0) scale(0.99)}100%{opacity:1;transform:translate3d(0, 0, 0) scale(1)}}@keyframes tip-retreat{0%{opacity:0;transform:translate3d(-50px, 0, 0) scale(0.99)}100%{opacity:1;transform:translate3d(0, 0, 0) scale(1)}}"},2875:(e,t,i)=>{i.d(t,{c:()=>s,d:()=>l});var a=i(861),n=i(1338);const c=new Set;let r;const o={childList:!0};function s(e){r||(r=(0,n.c)("mutation",d)),r.observe(e.el,o)}function l(e){c.delete(e.el),d(r.takeRecords()),r.disconnect();for(const[e]of c.entries())r.observe(e,o)}function d(e){e.forEach((({target:e})=>{(0,a.f)(e)}))}}}]);