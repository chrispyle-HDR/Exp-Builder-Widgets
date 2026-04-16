System.register(["jimu-core","jimu-ui","jimu-theme"],(function(e,t){var r={},a={},n={};return{setters:[function(e){r.DataSourceComponent=e.DataSourceComponent,r.DataSourceStatus=e.DataSourceStatus,r.React=e.React,r.ReactRedux=e.ReactRedux,r.appConfigUtils=e.appConfigUtils,r.css=e.css,r.getAppStore=e.getAppStore,r.hooks=e.hooks,r.jsx=e.jsx},function(e){a.Button=e.Button,a.Icon=e.Icon,a.Modal=e.Modal,a.ModalBody=e.ModalBody,a.ModalFooter=e.ModalFooter,a.PanelHeader=e.PanelHeader,a.Tooltip=e.Tooltip,a.defaultMessages=e.defaultMessages},function(e){n.withTheme=e.withTheme}],execute:function(){e((()=>{var e={2838:e=>{e.exports='<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 16"><path fill="#000" d="m8.745 8 6.1 6.1a.527.527 0 1 1-.745.746L8 8.746l-6.1 6.1a.527.527 0 1 1-.746-.746l6.1-6.1-6.1-6.1a.527.527 0 0 1 .746-.746l6.1 6.1 6.1-6.1a.527.527 0 0 1 .746.746z"></path></svg>'},8996:e=>{e.exports='<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 16"><path fill="#000" fill-rule="evenodd" d="M8 2.125 14.334 14H1.667zm-.882-.47a1 1 0 0 1 1.765 0l6.333 11.874A1 1 0 0 1 14.334 15H1.667a1 1 0 0 1-.882-1.47zM8 4.874a.905.905 0 0 0-.9.995l.35 3.507a.552.552 0 0 0 1.1 0L8.9 5.87a.905.905 0 0 0-.9-.995m1 7a1 1 0 1 1-2 0 1 1 0 0 1 2 0" clip-rule="evenodd"></path></svg>'},8474:(e,t,r)=>{"use strict";r.d(t,{I:()=>s,S:()=>n});class a{constructor(e){this.enabledFeatures=new Set,this.initialized=!1,this.widgetName=e.widgetName,this.features=e.features}initialize(){if(this.initialized)return;let e=new URLSearchParams(window.location.search),t=e.get("debug");if(null===t&&window.parent!==window)try{e=new URLSearchParams(window.parent.location.search),t=e.get("debug")}catch(e){}if("false"!==t){if("all"===t)this.features.forEach((e=>{"all"!==e&&"false"!==e&&this.enabledFeatures.add(e)})),console.log(`[${this.widgetName}-DEBUG] Enabled ALL features:`,Array.from(this.enabledFeatures));else if(null!==t){t.split(",").map((e=>e.trim().toUpperCase())).forEach((e=>{"ALL"===e.toUpperCase()?this.features.forEach((e=>{"all"!==e&&"false"!==e&&this.enabledFeatures.add(e)})):this.features.includes(e)&&this.enabledFeatures.add(e)}))}this.initialized=!0}else this.initialized=!0}isEnabled(e){return this.initialize(),"BUG"===e||(!!this.enabledFeatures.has("all")||this.enabledFeatures.has(e))}log(e,t){if("BUG"===e){const e=Object.assign({feature:"BUG",bugId:t.bugId||"UNKNOWN",category:t.category||"GENERAL",timestamp:(new Date).toISOString()},t);return void console.warn(`[${this.widgetName.toUpperCase()} \u26a0\ufe0f BUG]`,JSON.stringify(e,null,2))}if(!this.isEnabled(e))return;const r=Object.assign({feature:e,timestamp:(new Date).toISOString()},t);console.log(`[${this.widgetName.toUpperCase()}-${e}]`,JSON.stringify(r,null,2))}getConfig(){this.initialize();const e=new URLSearchParams(window.location.search).get("debug");return{enabledFeatures:Array.from(this.enabledFeatures),debugValue:e}}}function n(){return new a({widgetName:"QUERYSIMPLE",features:["HASH","HASH-EXEC","HASH-FIRST-LOAD","FORM","TASK","ZOOM","MAP-EXTENT","DATA-ACTION","GROUP","SELECTION","SELECTION-STATE-AUDIT","WIDGET-STATE","RESTORE","RESULTS-MODE","EXPAND-COLLAPSE","GRAPHICS-LAYER","EVENTS","POPUP","QUERY-PATH","DIRECT-QUERY","SPATIAL","CSV","VIEW-TABLE","SUGGEST","CHUNK-1-COMPARE","CHUNK-1-MISMATCH","CHUNK-2-COMPARE","CHUNK-2-MISMATCH","CHUNK-3-COMPARE","CHUNK-3-DECISION","CHUNK-3-FALLBACK","CHUNK-4-COMPARE","CHUNK-5-COMPARE","CHUNK-6-COMPARE","CHUNK-6-MISMATCH"]})}function s(){return new a({widgetName:"HELPERSIMPLE",features:["HASH","HASH-EXEC","SELECTION","WIDGET-STATE","RESTORE"]})}},7731:(e,t,r)=>{"use strict";r.d(t,{f:()=>j,z:()=>R});const a=/\{\{((?:(?!\}\}).)+)\}\}/g,n=/^"([^"]+)"$/,s=/^([/*+-])\s*(-?\d+(?:\.\d+)?)$/,o=/(?:https?:\/\/|www\.)[^\s<>"']+/gi,i=/\{\{(\s*[\w.@[\]]+\s*)\}\}/g,l=/\x00(\d+)\x00/g,c=/YYYY/g,u=/YY/g,d=/MMM/g,g=/MM/g,p=/(?<!M)M(?!M)/g,h=/DD/g,f=/(?<!D)D(?!D)/g,m=/HH/g,v=/(?<!H)H(?!H)/g,x=/hh/g,b=/(?<!h)h(?!h)/g,y=/mm/g,S=/ss/g,w=/A/g,C=/a/g,E=/Z/g;function R(e,t,r={}){return e?e.replace(a,((e,a)=>{const n=function(e){const t=[];let r="",a=!1;for(let n=0;n<e.length;n++){const s=e[n];'"'===s?(a=!a,r+=s):"|"!==s||a?r+=s:(t.push(r),r="")}return t.push(r),t}(a);if(0===n.length)return"";const s=n[0].trim(),o=t[s];let i=null!=o?String(o):"";if(1===n.length)return i;for(let e=1;e<n.length;e++){i=$(i,n[e].trim(),t,r)}return i})):""}function $(e,t,r,a){const o=t.match(n);if(o)return function(e,t){if(!e)return"";const r=Date.parse(e);if(isNaN(r))return e;const a=new Date(r),n=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],s=a.getHours(),o=s%12||12,i=s<12?"AM":"PM",R=a.getTimezoneOffset(),$=R<=0?"+":"-",I=Math.abs(R),M=String(Math.floor(I/60)).padStart(2,"0"),j=String(I%60).padStart(2,"0"),D=`${$}${M}:${j}`,N=[];function A(e){const t=N.length;return N.push(e),`\0${t}\0`}let O=t;return O=O.replace(c,(()=>A(String(a.getFullYear())))),O=O.replace(u,(()=>A(String(a.getFullYear()).slice(-2)))),O=O.replace(d,(()=>A(n[a.getMonth()]))),O=O.replace(g,(()=>A(String(a.getMonth()+1).padStart(2,"0")))),O=O.replace(p,(()=>A(String(a.getMonth()+1)))),O=O.replace(h,(()=>A(String(a.getDate()).padStart(2,"0")))),O=O.replace(f,(()=>A(String(a.getDate())))),O=O.replace(m,(()=>A(String(s).padStart(2,"0")))),O=O.replace(v,(()=>A(String(s)))),O=O.replace(x,(()=>A(String(o).padStart(2,"0")))),O=O.replace(b,(()=>A(String(o)))),O=O.replace(y,(()=>A(String(a.getMinutes()).padStart(2,"0")))),O=O.replace(S,(()=>A(String(a.getSeconds()).padStart(2,"0")))),O=O.replace(w,(()=>A(i))),O=O.replace(C,(()=>A(i.toLowerCase()))),O=O.replace(E,(()=>A(D))),O=O.replace(l,((e,t)=>N[Number(t)])),O}(e,o[1]);const i=t.match(s);if(i)return function(e,t,r){const a=parseFloat(e);if(isNaN(a))return e;switch(t){case"/":return 0!==r?String(a/r):e;case"*":return String(a*r);case"+":return String(a+r);case"-":return String(a-r);default:return e}}(e,i[1],parseFloat(i[2]));const R=t.indexOf(":");if(R>0){return I(e,t.substring(0,R).trim(),t.substring(R+1),r,a)}return I(e,t,void 0,r,a)}function I(e,t,r,a,n){switch(t){case"autolink":return function(e){return e?e.replace(o,(e=>`<a href="${e.startsWith("www.")?`https://${e}`:e}" target="_blank" rel="noopener">${e}</a>`)):""}(e);case"externalLink":return function(e,t,r){const a=j(r,t);return a?`<a href="${a}" target="_blank" rel="noopener">View \u2197</a>`:e}(e,a,n.externalLinkTemplate);case"round":case"toFixed":return M(e,r);case"prefix":return(null!=r?r:"")+e;case"suffix":return e+(null!=r?r:"");case"abs":return function(e){const t=parseFloat(e);return isNaN(t)?e:String(Math.abs(t))}(e);case"upper":return e.toUpperCase();case"lower":return e.toLowerCase();default:return e}}function M(e,t){const r=parseFloat(e);if(isNaN(r))return e;const a=void 0!==t?parseInt(t.trim(),10):0;return isNaN(a)||a<0?e:r.toFixed(a)}function j(e,t){if(e)return e.replace(i,((e,r)=>{const a=t[r.trim()];return null!=a?String(a):""}))}},2057:(e,t,r)=>{"use strict";r.d(t,{aR:()=>n,mx:()=>a,uP:()=>s});const a=(e,t=[])=>t.includes(e)?t.filter((t=>t!==e)):[...t,e];function n(e){const{intl:t,defaultMessages:r={}}=e||{};return(e,a)=>{const{messages:n,values:s}=a||{};return t.formatMessage({id:e,defaultMessage:(n||r)[e]},s)}}function s(e){var t;const r=[];return(null===(t=null==e?void 0:e.popupElements)||void 0===t?void 0:t.length)>0&&e.popupElements.forEach((e=>{var t;"fields"===e.type&&(null===(t=e.fieldInfos)||void 0===t?void 0:t.length)>0&&r.push(...e.fieldInfos)})),r}},9244:e=>{"use strict";e.exports=r},1888:e=>{"use strict";e.exports=n},4321:e=>{"use strict";e.exports=a}},t={};function s(r){var a=t[r];if(void 0!==a)return a.exports;var n=t[r]={exports:{}};return e[r](n,n.exports,s),n.exports}s.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return s.d(t,{a:t}),t},s.d=(e,t)=>{for(var r in t)s.o(t,r)&&!s.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},s.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),s.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.p="";var o={};return s.p=window.jimuConfig.baseUrl,(()=>{"use strict";s.r(o),s.d(o,{DataSourceTip:()=>f,DialogPanel:()=>c,EntityStatusType:()=>u,ErrorMessage:()=>g,StateHolder:()=>l,StatusIndicator:()=>d,TableBuilder:()=>q,applyInlineFormatting:()=>H,convertTemplateToHtml:()=>T,createGetI18nMessage:()=>p.aR,createHelperSimpleDebugLogger:()=>m.I,createQuerySimpleDebugLogger:()=>m.S,getFieldInfosInPopupContent:()=>p.uP,globalHandleManager:()=>b,highlightConfigManager:()=>x,resolveExternalLinkUrl:()=>k.f,substituteTokens:()=>k.z,toggleItemInArray:()=>p.mx,useDataSourceExists:()=>h});var e=s(9244),t=s(4321),r=s(1888),a=s(8996),n=s.n(a);const{useState:i}=e.React,l=t=>{const{initState:r={},children:a}=t,n=!0,s=null,o={visible:i("visible"in r?r.visible:n),refContainer:i("refContainer"in r?r.refContainer:s),customData:i(Object.assign({},r.customData))};return(0,e.jsx)(e.React.Fragment,null,a(o))},c=(0,r.withTheme)((r=>{const{theme:a,panelVisible:n,setPanelVisible:s,getI18nMessage:o,isModal:i=!0,title:l=o("queryMessage"),bodyContent:c="",hasHeader:u=!0,hasFooter:d=!0}=r,g=()=>{s(!1)},p=()=>(0,e.jsx)(e.React.Fragment,null,u&&(0,e.jsx)(t.PanelHeader,{className:"py-2",title:l,onClose:g}),(0,e.jsx)(t.ModalBody,null,c),d&&(0,e.jsx)(t.ModalFooter,null,(0,e.jsx)(t.Button,{onClick:g},o("ok")))),h="ui-unit-dialog-panel";return i?(0,e.jsx)(t.Modal,{className:h,isOpen:n,toggle:g,backdrop:"static"},p()):(0,e.jsx)("div",{className:`${h} modal-dialog ${n?"":"collapse"}`,css:e.css`
      &.ui-unit-dialog-panel.modal-dialog {
        margin: 0;
        width: 100%;
        .modal-content {
          background-color: ${a.ref.palette.neutral[600]};
          color: ${a.ref.palette.black};
          font-size: .75rem;
          font-weight: 400;
          border: none;
          .panel-header {
            font-size: .8125rem;
            padding: .625rem;
          }
          .modal-body {
            padding: 0 .625rem .75rem;
            white-space: normal;
          }
        }
      }
    `},(0,e.jsx)("div",{className:"modal-content"},p()))}));var u;!function(e){e.None="",e.Init="init",e.Loading="loading",e.Loaded="loaded",e.Warning="warning",e.Error="error"}(u||(u={}));const d=(0,r.withTheme)((t=>{const{theme:r,className:a,title:n,statusType:s}=t;return s&&(0,e.jsx)("div",{className:`${null!=a?a:""} ui-unit-status-indicator ui-unit-status-indicator_status-type-${s}`,title:n,css:e.css`
    &.ui-unit-status-indicator {
      display: flex;
      &.ui-unit-status-indicator_status-type-loading {
        &:before {
          @keyframes loading {
            0% {transform: rotate(0deg); };
            100% {transform: rotate(360deg)};
          }
          content: '';
          width: 1rem;
          height: 1rem;
          display: block;
          border: 1px solid ${null===(i=null===(o=null==r?void 0:r.ref.palette)||void 0===o?void 0:o.neutral)||void 0===i?void 0:i[500]};
          border-radius: 50%;
          border-top: 1px solid ${null===(c=null===(l=null==r?void 0:r.sys.color)||void 0===l?void 0:l.primary)||void 0===c?void 0:c.main};
          box-sizing: border-box;
          animation: loading 2s infinite linear;
          margin-right: .25rem;
        }
      }
    }
  `});var o,i,l,c})),g=r=>{const{error:a,className:o="",onDismiss:i}=r;if(!a)return null;const l=e.css`
    display: flex;
    align-items: center;
    padding: 0.5rem;
    margin: 0.5rem 0;
    background-color: var(--sys-color-error-light);
    color: var(--sys-color-error-dark);
    border-radius: 4px;
    font-size: 0.875rem;
    gap: 0.5rem;
    
    .error-icon {
      flex-shrink: 0;
    }
    
    .error-text {
      flex: 1;
    }
    
    .error-dismiss {
      flex-shrink: 0;
      cursor: pointer;
      padding: 0.25rem;
      &:hover {
        opacity: 0.7;
      }
    }
  `;return(0,e.jsx)("div",{className:`error-message ${o}`,css:l,role:"alert"},(0,e.jsx)(t.Icon,{icon:n(),className:"error-icon",size:"sm"}),(0,e.jsx)("span",{className:"error-text"},a),i&&(0,e.jsx)(t.Button,{size:"sm",type:"tertiary",icon:!0,onClick:i,className:"error-dismiss","aria-label":"Dismiss error"},(0,e.jsx)(t.Icon,{icon:s(2838).default,size:"sm"})))};var p=s(2057);function h(t){const{widgetId:r,useDataSourceId:a}=t;return e.ReactRedux.useSelector((e=>{var t;let n;n=window.jimuConfig.isBuilder?e.appStateInBuilder.appConfig:e.appConfig;return(null!==(t=n.widgets[r].useDataSources)&&void 0!==t?t:[]).some((e=>e.dataSourceId===a))}))}function f(r){var a,s,o;const{widgetId:i,useDataSource:l,onStatusChange:c,onDataSourceCreated:g,showMessage:p=!1}=r,f=e.hooks.useTranslation(t.defaultMessages),m=h({widgetId:i,useDataSourceId:l.dataSourceId}),[v,x]=e.React.useState(null),[b,y]=e.React.useState(null),S=e.React.useCallback((t=>{if(t){const{status:r,instanceStatus:a}=t;a===e.DataSourceStatus.NotCreated?(x("creating"),null==c||c(!1)):a===e.DataSourceStatus.CreateError||r===e.DataSourceStatus.LoadError?(x("error"),null==c||c(!1)):r===e.DataSourceStatus.NotReady?(x("warning"),null==c||c(!1)):(x(null),null==c||c(!0))}}),[c]),w=e.React.useCallback((e=>{y(e),null==g||g(e)}),[g]),C=e.React.useCallback((()=>{y(null),x("error"),null==c||c(!1)}),[c]);let E,R,$;if("creating"===v)E=n(),R=f("loading");else if(m&&"error"!==v){if("warning"===v){let t="";const r=null===(a=null==b?void 0:b.getOriginDataSources())||void 0===a?void 0:a[0];r?t=r.getLabel()||r.getDataSourceJson().sourceLabel:b&&(t=b.getLabel()||b.getDataSourceJson().label);const i=e.appConfigUtils.getWidgetIdByOutputDataSource(l),c=null===(o=((null===(s=null===window||void 0===window?void 0:window.jimuConfig)||void 0===s?void 0:s.isBuilder)?(0,e.getAppStore)().getState().appStateInBuilder:(0,e.getAppStore)().getState()).appConfig.widgets[i])||void 0===o?void 0:o.label;$="var(--sys-color-warning-dark)",E=n(),R=f("outputDataIsNotGenerated",{outputDsLabel:null!=t?t:"",sourceWidgetName:null!=c?c:""})}}else E=n(),R=f("dataSourceCreateError"),$="var(--sys-color-error-main)";return(0,e.jsx)(e.React.Fragment,null,m&&(0,e.jsx)(e.DataSourceComponent,{useDataSource:l,onDataSourceInfoChange:S,onDataSourceCreated:w,onCreateDataSourceFailed:C}),"creating"===v&&(0,e.jsx)(d,{statusType:u.Loading,title:R}),(!m||"error"===v||"warning"===v)&&(0,e.jsx)("div",{className:"d-flex align-items-center"},(0,e.jsx)(t.Tooltip,{title:R},(0,e.jsx)(t.Button,{size:"sm",type:"tertiary",icon:!0},(0,e.jsx)(t.Icon,{icon:E,color:$}))),p&&(0,e.jsx)("div",{className:"status-message"},R)))}var m=s(8474);class v{constructor(){this.configCache=new Map}static getInstance(){return v.instance||(v.instance=new v),v.instance}registerConfig(e,t){this.configCache.set(e,t)}unregisterConfig(e){this.configCache.delete(e)}getFillColor(e){const t=this.configCache.get(e),r=(null==t?void 0:t.highlightFillColor)||"#DF00FF";return this.hexToRgb(r)}getFillOpacity(e){var t;const r=this.configCache.get(e);return null!==(t=null==r?void 0:r.highlightFillOpacity)&&void 0!==t?t:.25}getOutlineColor(e){const t=this.configCache.get(e),r=(null==t?void 0:t.highlightOutlineColor)||"#DF00FF";return this.hexToRgb(r)}getOutlineOpacity(e){var t;const r=this.configCache.get(e);return null!==(t=null==r?void 0:r.highlightOutlineOpacity)&&void 0!==t?t:1}getOutlineWidth(e){var t;const r=this.configCache.get(e);return null!==(t=null==r?void 0:r.highlightOutlineWidth)&&void 0!==t?t:2}getPointSize(e){var t;const r=this.configCache.get(e);return null!==(t=null==r?void 0:r.highlightPointSize)&&void 0!==t?t:12}getPointOutlineWidth(e){var t;const r=this.configCache.get(e);return null!==(t=null==r?void 0:r.highlightPointOutlineWidth)&&void 0!==t?t:2}getPointStyle(e){const t=this.configCache.get(e);return(null==t?void 0:t.highlightPointStyle)||"circle"}getAddResultsAsMapLayer(e){const t=this.configCache.get(e);return!0===(null==t?void 0:t.addResultsAsMapLayer)}getResultsLayerTitle(e){const t=this.configCache.get(e),r=null==t?void 0:t.resultsLayerTitle;return"string"==typeof r&&""!==r.trim()?r.trim():"QuerySimple Results"}getDrawColor(e){const t=this.configCache.get(e),r=(null==t?void 0:t.drawColor)||"#32FF00";return this.hexToRgb(r)}getBufferColor(e){const t=this.configCache.get(e),r=(null==t?void 0:t.bufferColor)||"#FFA500";return this.hexToRgb(r)}getPointZoomBufferFeet(e){var t;const r=this.configCache.get(e);return null!==(t=null==r?void 0:r.pointZoomBufferFeet)&&void 0!==t?t:300}getZoomExpansionFactor(e){var t;const r=this.configCache.get(e);return null!==(t=null==r?void 0:r.zoomExpansionFactor)&&void 0!==t?t:1.2}hexToRgb(e){const t=/^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(e);return t?[parseInt(t[1],16),parseInt(t[2],16),parseInt(t[3],16)]:[223,0,255]}}const x=v.getInstance();const b=new class{constructor(){if(this.widgetHandles=new Map,this.handleIdCounter=0,this.debugEnabled=!1,"undefined"!=typeof window)try{const e=new URLSearchParams(window.location.search).get("debug");this.debugEnabled="all"===e||(null==e?void 0:e.includes("HANDLES"))||!1}catch(e){}}generateId(e,t){return`${e}-${++this.handleIdCounter}-${t||"anon"}-${Date.now()}`}log(e,t){this.debugEnabled&&console.log(`[HANDLE-MANAGER-${e}]`,JSON.stringify(Object.assign(Object.assign({},t),{timestamp:Date.now()}),null,2))}ensureWidgetContainer(e){return this.widgetHandles.has(e)||this.widgetHandles.set(e,{handles:new Map,createdAt:Date.now()}),this.widgetHandles.get(e)}track(e,t,r="other",a){const n=this.ensureWidgetContainer(e),s=this.generateId(r,a);return n.handles.set(s,{id:s,handle:t,type:r,description:a,createdAt:Date.now()}),this.log("TRACK",{widgetId:e,handleId:s,type:r,description:a,totalHandlesForWidget:n.handles.size}),s}remove(e,t){const r=this.widgetHandles.get(e);if(!r)return this.log("REMOVE-WIDGET-NOT-FOUND",{widgetId:e,handleId:t}),!1;const a=r.handles.get(t);if(!a)return this.log("REMOVE-HANDLE-NOT-FOUND",{widgetId:e,handleId:t}),!1;try{a.handle.remove()}catch(r){this.log("REMOVE-ERROR",{widgetId:e,handleId:t,error:r instanceof Error?r.message:String(r)})}return r.handles.delete(t),this.log("REMOVE-SUCCESS",{widgetId:e,handleId:t,type:a.type,description:a.description,remainingHandles:r.handles.size}),!0}removeByType(e,t){const r=this.widgetHandles.get(e);if(!r)return 0;let a=0;const n=[];return r.handles.forEach(((e,r)=>{e.type===t&&n.push(r)})),n.forEach((n=>{const s=r.handles.get(n);if(s){try{s.handle.remove(),a++}catch(r){this.log("REMOVE-BY-TYPE-ERROR",{widgetId:e,handleId:n,type:t,error:r instanceof Error?r.message:String(r)})}r.handles.delete(n)}})),this.log("REMOVE-BY-TYPE",{widgetId:e,type:t,removedCount:a,remainingHandles:r.handles.size}),a}purgeAll(e){const t=this.widgetHandles.get(e);if(!t)return this.log("PURGE-WIDGET-NOT-FOUND",{widgetId:e}),{purged:0,errors:0};let r=0,a=0;const n={};return t.handles.forEach(((t,s)=>{n[t.type]=(n[t.type]||0)+1;try{t.handle.remove(),r++}catch(r){a++,this.log("PURGE-HANDLE-ERROR",{widgetId:e,handleId:s,type:t.type,description:t.description,error:r instanceof Error?r.message:String(r)})}})),t.handles.clear(),this.log("PURGE-ALL",{widgetId:e,purged:r,errors:a,handleTypeBreakdown:n}),{purged:r,errors:a}}getStats(e){const t=this.widgetHandles.get(e);if(!t)return null;const r={};return t.handles.forEach((e=>{r[e.type]=(r[e.type]||0)+1})),{total:t.handles.size,byType:r}}getGlobalStats(){const e={};let t=0;return this.widgetHandles.forEach(((r,a)=>{e[a]=r.handles.size,t+=r.handles.size})),{totalWidgets:this.widgetHandles.size,totalHandles:t,byWidget:e}}destroy(e){const t=this.purgeAll(e);return this.widgetHandles.delete(e),this.log("DESTROY",Object.assign({widgetId:e},t)),t}},y=/^-{3,}\s*$/,S=/^\s*[-*]\s+/,w=/^( +)/,C=/!\[([^\]]*)\]\(([^)]+)\)/g,E=/\[([^\]]+)\]\(([^)]+)\)/g,R=/\*\*(.+?)\*\*/g,$=/__(.+?)__/g,I=/\*(.+?)\*/g,M=/(?<!\{[\w]*)_(.+?)_(?![\w]*\})/g,j=/^\|(.+)\|$/,D=/^\|[\s:|-]+\|$/,N=/^<!--\s*table:(\w+)\s*-->$/,A={plain:{oddRowBg:"",evenRowBg:"",thBg:"font-weight:600;background:var(--ref-palette-neutral-200,#f0f0f0)",border:"border:1px solid var(--ref-palette-neutral-400,#d4d4d4)"},striped:{oddRowBg:"background:var(--ref-palette-neutral-200,#f0f0f0)",evenRowBg:"background:var(--ref-palette-neutral-300,#e2e2e2)",thBg:"font-weight:600;background:var(--ref-palette-neutral-400,#d4d4d4)",border:"border:1px solid var(--ref-palette-neutral-400,#d4d4d4)"},bordered:{oddRowBg:"",evenRowBg:"",thBg:"font-weight:600;background:var(--ref-palette-neutral-200,#f0f0f0)",border:"border:2px solid var(--ref-palette-neutral-500,#bbb)"}},O="striped";function T(e){var t,r;if(!e)return"";const a=e.split("\n"),n=[];let s=!1;const o=[],i=[];let l=null;function c(){0!==o.length&&(n.push(`<p>${o.join("<br/>")}</p>`),o.length=0)}function u(){0!==i.length?(n.push(function(e,t=O){if(e.length<1)return"";const r=e=>e.replace(/^\|/,"").replace(/\|$/,"").split("|").map((e=>e.trim())),a=A[t]||A[O],n="padding:4px 8px",s="border-collapse:collapse;width:100%;font-size:0.85em;line-height:1.4;";if(D.test(e[0])){const t=r(e[0]).map((e=>{const t=e.trim();return t.startsWith(":")&&t.endsWith(":")?"center":t.endsWith(":")?"right":"left"})),o=e.slice(1).map(r);if(0===o.length)return e.map((e=>`<p>${H(e)}</p>`)).join("\n");const i=[];return i.push('<div style="max-width:100%;overflow-x:auto;">'),i.push(`<table style="${s}">`),i.push("<tbody>"),o.forEach(((e,r)=>{const s=r%2==0?a.oddRowBg:a.evenRowBg;i.push(`<tr${s?` style="${s}"`:""}>`),e.forEach(((e,r)=>{const s=t[r]||"left";i.push(`<td style="${a.border};${n};text-align:${s};">${H(e)}</td>`)})),i.push("</tr>")})),i.push("</tbody>"),i.push("</table>"),i.push("</div>"),i.join("")}if(e.length<2)return e.map((e=>`<p>${H(e)}</p>`)).join("\n");if(!D.test(e[1]))return e.map((e=>`<p>${H(e)}</p>`)).join("\n");const o=r(e[1]).map((e=>{const t=e.trim();return t.startsWith(":")&&t.endsWith(":")?"center":t.endsWith(":")?"right":"left"})),i=r(e[0]),l=e.slice(2).map(r),c=[];c.push('<div style="max-width:100%;overflow-x:auto;">'),c.push(`<table style="${s}">`),c.push("<thead><tr>"),i.forEach(((e,t)=>{const r=o[t]||"left";c.push(`<th style="${a.border};${n};text-align:${r};${a.thBg}">${H(e)}</th>`)})),c.push("</tr></thead>"),l.length>0&&(c.push("<tbody>"),l.forEach(((e,t)=>{const r=t%2==0?a.oddRowBg:a.evenRowBg;c.push(`<tr${r?` style="${r}"`:""}>`),e.forEach(((e,t)=>{const r=o[t]||"left";c.push(`<td style="${a.border};${n};text-align:${r};">${H(e)}</td>`)})),c.push("</tr>")})),c.push("</tbody>"));return c.push("</table>"),c.push("</div>"),c.join("")}(i.slice(),null!=l?l:O)),i.length=0,l=null):l=null}for(let e=0;e<a.length;e++){const d=a[e];if(""===d.trim()){c(),u(),s&&(n.push("</ul>"),s=!1);continue}const g=d.trim().match(N);if(g){const e=g[1].toLowerCase();A[e]&&(l=e);continue}if(j.test(d.trim())){c(),s&&(n.push("</ul>"),s=!1),i.push(d.trim());continue}if(u(),y.test(d.trim())){c(),s&&(n.push("</ul>"),s=!1),n.push("<hr/>");continue}if(d.startsWith("#### ")){c(),s&&(n.push("</ul>"),s=!1),n.push(`<h6>${H(d.slice(5).trim())}</h6>`);continue}if(d.startsWith("### ")){c(),s&&(n.push("</ul>"),s=!1),n.push(`<h5>${H(d.slice(4).trim())}</h5>`);continue}if(d.startsWith("## ")){c(),s&&(n.push("</ul>"),s=!1),n.push(`<h4>${H(d.slice(3).trim())}</h4>`);continue}if(d.startsWith("# ")){c(),s&&(n.push("</ul>"),s=!1),n.push(`<h3>${H(d.slice(2).trim())}</h3>`);continue}if(S.test(d)){c(),s||(n.push("<ul>"),s=!0);const e=d.replace(S,"");n.push(`<li>${H(e)}</li>`);continue}s&&(n.push("</ul>"),s=!1);const p=(null===(r=null===(t=d.match(w))||void 0===t?void 0:t[1])||void 0===r?void 0:r.length)||0,h=H(d.trimStart());if(p>=2){const e=Math.floor(p/2);o.push(`<span style="display:inline-block;padding-left:${e}em">${h}</span>`)}else o.push(h)}return c(),u(),s&&n.push("</ul>"),n.join("\n")}function H(e){return e=(e=(e=(e=(e=(e=e.replace(C,'<img src="$2" alt="$1" style="max-width:100%; height:auto; display:block; margin:4px 0;">')).replace(E,'<a href="$2" target="_blank" rel="noopener">$1</a>')).replace(R,"<strong>$1</strong>")).replace($,"<strong>$1</strong>")).replace(I,"<em>$1</em>")).replace(M,"<em>$1</em>")}var k=s(7731);const F=2,L=6,P=1,U=10,B=2,z=2,W=e.css`
  margin-top: 6px;
  padding: 10px;
  border: 1px solid var(--sys-color-divider-secondary, #e0e0e0);
  border-radius: 4px;
  background: var(--sys-color-surface-overlay, #f9f9f9);
  font-size: 12px;
`,G=e.css`
  display: flex;
  align-items: center;
  gap: 8px;
  margin-bottom: 8px;
  flex-wrap: wrap;
`,Y=e.css`
  display: flex;
  align-items: center;
  gap: 4px;
  label {
    font-size: 11px;
    color: var(--sys-color-text-secondary, inherit);
  }
  input {
    width: 48px;
    padding: 2px 4px;
    border: 1px solid var(--sys-color-divider-secondary, #ccc);
    border-radius: 3px;
    text-align: center;
    font-size: 12px;
    background: var(--sys-color-surface-paper, #fff);
    color: var(--sys-color-text-primary, inherit);
  }
`,K=e.css`
  display: grid;
  gap: 2px;
  margin-bottom: 8px;
`,_=e.css`
  width: 100%;
  padding: 3px 6px;
  border: 1px solid var(--sys-color-divider-secondary, #ccc);
  border-radius: 2px;
  font-family: 'SFMono-Regular', Consolas, 'Liberation Mono', Menlo, monospace;
  font-size: 11px;
  box-sizing: border-box;
  background: var(--sys-color-surface-paper, #fff);
  color: var(--sys-color-text-primary, inherit);

  &:focus {
    outline: 2px solid var(--sys-color-primary-main, #0079c1);
    outline-offset: -1px;
  }
`,V=e.css`
  ${_};
  font-weight: 600;
  background: var(--ref-palette-neutral-200, #f0f0f0);
`,J=e.css`
  display: flex;
  gap: 6px;
  justify-content: flex-end;
`,Q=e.css`
  padding: 4px 12px;
  border-radius: 3px;
  font-size: 11px;
  cursor: pointer;
  border: 1px solid var(--sys-color-divider-secondary, #ccc);
  background: var(--ref-palette-neutral-100, #fff);
  color: var(--sys-color-text-primary, inherit);

  &:hover {
    background: var(--ref-palette-neutral-200, #f0f0f0);
  }
`,Z=e.css`
  ${Q};
  background: var(--sys-color-primary-main, #0079c1);
  color: #fff;
  border-color: var(--sys-color-primary-main, #0079c1);

  &:hover {
    background: var(--sys-color-primary-dark, #005e95);
  }
`,X=e.css`
  font-size: 10px;
  color: var(--sys-color-text-secondary, #666);
  text-transform: uppercase;
  letter-spacing: 0.5px;
  margin-bottom: 2px;
`;function q(t){const{onInsert:r,onCancel:a}=t,[n,s]=e.React.useState(B),[o,i]=e.React.useState(z),[l,c]=e.React.useState(!0),[u,d]=e.React.useState("striped"),[g,p]=e.React.useState((()=>Array.from({length:B},((e,t)=>`Header ${t+1}`)))),[h,f]=e.React.useState((()=>Array.from({length:z},(()=>Array.from({length:B},(()=>"")))))),m=e.React.useCallback((e=>{const t=Math.max(F,Math.min(L,e));s(t),p((e=>Array.from({length:t},((t,r)=>{var a;return null!==(a=e[r])&&void 0!==a?a:`Header ${r+1}`})))),f((e=>e.map((e=>Array.from({length:t},((t,r)=>{var a;return null!==(a=e[r])&&void 0!==a?a:""}))))))}),[]),v=e.React.useCallback((e=>{const t=Math.max(P,Math.min(U,e));i(t),f((e=>Array.from({length:t},((t,r)=>{var a;return null!==(a=e[r])&&void 0!==a?a:Array.from({length:n},(()=>""))}))))}),[n]),x=e.React.useCallback(((e,t)=>{p((r=>{const a=[...r];return a[e]=t,a}))}),[]),b=e.React.useCallback(((e,t,r)=>{f((a=>{const n=a.map((e=>[...e]));return n[e][t]=r,n}))}),[]),y=e.React.useCallback((()=>{const e=e=>` ${e||" "} `,t=`|${Array.from({length:n},(()=>" --- ")).join("|")}|`,a=h.map((t=>`|${t.map(e).join("|")}|`)),s=[];"striped"!==u&&s.push(`\x3c!-- table:${u} --\x3e`),l&&s.push(`|${g.map(e).join("|")}|`),s.push(t),s.push(...a),r(s.join("\n"))}),[g,h,n,l,u,r]);return(0,e.jsx)("div",{css:W},(0,e.jsx)("div",{css:G},(0,e.jsx)("div",{css:Y},(0,e.jsx)("label",{htmlFor:"table-cols"},"Columns:"),(0,e.jsx)("input",{id:"table-cols",type:"number",min:F,max:L,value:n,onChange:e=>m(parseInt(e.target.value,10)||B)})),(0,e.jsx)("div",{css:Y},(0,e.jsx)("label",{htmlFor:"table-rows"},"Data rows:"),(0,e.jsx)("input",{id:"table-rows",type:"number",min:P,max:U,value:o,onChange:e=>v(parseInt(e.target.value,10)||z)})),(0,e.jsx)("label",{css:e.css`
          display: flex;
          align-items: center;
          gap: 4px;
          font-size: 11px;
          color: var(--sys-color-text-secondary, inherit);
          cursor: pointer;
          user-select: none;
        `},(0,e.jsx)("input",{type:"checkbox",checked:l,onChange:e=>c(e.target.checked)}),"Include header"),(0,e.jsx)("div",{css:Y},(0,e.jsx)("label",{htmlFor:"table-style"},"Style:"),(0,e.jsx)("select",{id:"table-style",value:u,onChange:e=>d(e.target.value),css:e.css`
              padding: 2px 4px;
              border: 1px solid var(--sys-color-divider-secondary, #ccc);
              border-radius: 3px;
              font-size: 12px;
              background: var(--sys-color-surface-paper, #fff);
              color: var(--sys-color-text-primary, inherit);
            `},(0,e.jsx)("option",{value:"striped"},"Striped"),(0,e.jsx)("option",{value:"plain"},"Plain"),(0,e.jsx)("option",{value:"bordered"},"Bordered")))),l&&(0,e.jsx)(e.React.Fragment,null,(0,e.jsx)("div",{css:X},"Header row"),(0,e.jsx)("div",{css:K,style:{gridTemplateColumns:`repeat(${n}, 1fr)`}},g.map(((t,r)=>(0,e.jsx)("input",{key:`h-${r}`,type:"text",css:V,value:t,onChange:e=>x(r,e.target.value),placeholder:`Header ${r+1}`,"aria-label":`Header column ${r+1}`}))))),(0,e.jsx)("div",{css:X},"Data rows"),(0,e.jsx)("div",{css:K,style:{gridTemplateColumns:`repeat(${n}, 1fr)`}},h.map(((t,r)=>t.map(((t,a)=>(0,e.jsx)("input",{key:`c-${r}-${a}`,type:"text",css:_,value:t,onChange:e=>b(r,a,e.target.value),placeholder:`Row ${r+1}`,"aria-label":`Row ${r+1}, column ${a+1}`})))))),(0,e.jsx)("div",{css:J},(0,e.jsx)("button",{type:"button",css:Q,onClick:a},"Cancel"),(0,e.jsx)("button",{type:"button",css:Z,onClick:y},"Insert Table")))}})(),o})())}}}));