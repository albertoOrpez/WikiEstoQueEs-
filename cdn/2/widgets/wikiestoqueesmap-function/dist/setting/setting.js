System.register(["jimu-core","jimu-ui","jimu-ui/advanced/setting-components"],(function(e,t){var a={},i={},l={};return{setters:[function(e){a.React=e.React},function(e){i.Checkbox=e.Checkbox,i.NumericInput=e.NumericInput,i.TextInput=e.TextInput},function(e){l.MapWidgetSelector=e.MapWidgetSelector,l.SettingRow=e.SettingRow,l.SettingSection=e.SettingSection}],execute:function(){e((()=>{var e={891:e=>{"use strict";e.exports=a},726:e=>{"use strict";e.exports=i},756:e=>{"use strict";e.exports=l}},t={};function n(a){var i=t[a];if(void 0!==i)return i.exports;var l=t[a]={exports:{}};return e[a](l,l.exports,n),l.exports}n.d=(e,t)=>{for(var a in t)n.o(t,a)&&!n.o(e,a)&&Object.defineProperty(e,a,{enumerable:!0,get:t[a]})},n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),n.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.p="";var r={};return n.p=window.jimuConfig.baseUrl,(()=>{"use strict";n.r(r),n.d(r,{__set_webpack_public_path__:()=>c,default:()=>l});var e=n(891),t=n(726),a=n(756);const i={selectMapWidget:"Select Map Widget",configureStreamLayer:"Configure Stream Layer",streamLayerTitle:"Stream Layer Title",idField:"Id Field",timeField:"Time Field",scaleChangeLabel:"Scale Change Label",multiLabel:"Multilabel"};function l(l){const n=()=>{console.log("***** onIdFieldAcceptValue")},r=e=>{console.log("***** onFieldChange"),e&&e.currentTarget&&l.onSettingChange({id:l.id,config:l.config.set(e.currentTarget.id,e.currentTarget.value)})};return e.React.createElement("div",{className:"use-feature-layer-setting p-2"},e.React.createElement(a.SettingSection,{className:"map-selector-section",title:l.intl.formatMessage({id:"selectMapWidget",defaultMessage:i.selectMapWidget})},e.React.createElement(a.SettingRow,null,e.React.createElement(a.MapWidgetSelector,{onSelect:e=>{l.onSettingChange({id:l.id,useMapWidgetIds:e})},useMapWidgetIds:l.useMapWidgetIds}))),e.React.createElement(a.SettingSection,{title:l.intl.formatMessage({id:"configureStreamLayer",defaultMessage:i.configureStreamLayer})},e.React.createElement(a.SettingRow,{label:l.intl.formatMessage({id:"streamLayerTitle",defaultMessage:i.streamLayerTitle}),flow:"wrap"},e.React.createElement(t.TextInput,{id:"streamLayerTitle",type:"text","aria-label":l.intl.formatMessage({id:"streamLayerTitle",defaultMessage:i.streamLayerTitle}),value:l.config.streamLayerTitle,onAcceptValue:n,onChange:r})),e.React.createElement(a.SettingRow,{label:l.intl.formatMessage({id:"idField",defaultMessage:i.idField}),flow:"wrap"},e.React.createElement(t.TextInput,{id:"idField",type:"text","aria-label":l.intl.formatMessage({id:"idField",defaultMessage:i.idField}),value:l.config.idField,onAcceptValue:n,onChange:r})),e.React.createElement(a.SettingRow,{label:l.intl.formatMessage({id:"timeField",defaultMessage:i.timeField}),flow:"wrap"},e.React.createElement(t.TextInput,{id:"timeField",type:"text","aria-label":l.intl.formatMessage({id:"timeField",defaultMessage:i.timeField}),value:l.config.timeField,onAcceptValue:n,onChange:r})),e.React.createElement(a.SettingRow,{label:l.intl.formatMessage({id:"scaleChangeLabel",defaultMessage:i.scaleChangeLabel}),flow:"wrap"},e.React.createElement(t.NumericInput,{id:"scaleChangeLabel","aria-label":l.intl.formatMessage({id:"scaleChangeLabel",defaultMessage:i.scaleChangeLabel}),showHandlers:!1,precision:0,value:l.config.scaleChangeLabel,onAcceptValue:n,onChange:r})),e.React.createElement(a.SettingRow,{label:l.intl.formatMessage({id:"multiLabel",defaultMessage:i.multiLabel}),flow:"wrap"},e.React.createElement(t.Checkbox,{id:"multiLabel","aria-label":l.intl.formatMessage({id:"multiLabel",defaultMessage:i.multiLabel}),checked:l.config.multiLabel,onChange:e=>{console.log("***** onBooleanFieldChange"),e&&e.currentTarget&&l.onSettingChange({id:l.id,config:l.config.set(e.currentTarget.id,e.currentTarget.checked)})}}))))}function c(e){n.p=e}})(),r})())}}}));