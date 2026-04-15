System.register(["jimu-core/emotion","jimu-core","jimu-ui","jimu-theme"],function(e,t){var r={},n={},a={},s={};return{setters:[function(e){r.jsx=e.jsx,r.jsxs=e.jsxs},function(e){n.DataSourceComponent=e.DataSourceComponent,n.DataSourceStatus=e.DataSourceStatus,n.React=e.React,n.ReactRedux=e.ReactRedux,n.appConfigUtils=e.appConfigUtils,n.css=e.css,n.getAppStore=e.getAppStore,n.hooks=e.hooks},function(e){a.Button=e.Button,a.Icon=e.Icon,a.Modal=e.Modal,a.ModalBody=e.ModalBody,a.ModalFooter=e.ModalFooter,a.PanelHeader=e.PanelHeader,a.Tooltip=e.Tooltip,a.defaultMessages=e.defaultMessages},function(e){s.withTheme=e.withTheme}],execute:function(){e((()=>{var e={1888:e=>{"use strict";e.exports=s},2057:(e,t,r)=>{"use strict";r.d(t,{aR:()=>a,mx:()=>n,uP:()=>s});const n=(e,t=[])=>t.includes(e)?t.filter(t=>t!==e):[...t,e];function a(e){const{intl:t,defaultMessages:r={}}=e||{};return(e,n)=>{const{messages:a,values:s}=n||{};return t.formatMessage({id:e,defaultMessage:(a||r)[e]},s)}}function s(e){var t;const r=[];return(null===(t=null==e?void 0:e.popupElements)||void 0===t?void 0:t.length)>0&&e.popupElements.forEach(e=>{var t;"fields"===e.type&&(null===(t=e.fieldInfos)||void 0===t?void 0:t.length)>0&&r.push(...e.fieldInfos)}),r}},2838:e=>{e.exports='<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 16"><path fill="#000" d="m8.745 8 6.1 6.1a.527.527 0 1 1-.745.746L8 8.746l-6.1 6.1a.527.527 0 1 1-.746-.746l6.1-6.1-6.1-6.1a.527.527 0 0 1 .746-.746l6.1 6.1 6.1-6.1a.527.527 0 0 1 .746.746z"></path></svg>'},4321:e=>{"use strict";e.exports=a},4682:e=>{e.exports='<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 16"><path fill="#000" fill-rule="evenodd" d="M8 16A8 8 0 1 1 8 0a8 8 0 0 1 0 16m0-1A7 7 0 1 0 8 1a7 7 0 0 0 0 14M8 4a.905.905 0 0 0-.9.995l.35 3.507a.552.552 0 0 0 1.1 0l.35-3.507A.905.905 0 0 0 8 4m1 7a1 1 0 1 1-2 0 1 1 0 0 1 2 0" clip-rule="evenodd"></path></svg>'},7386:e=>{"use strict";e.exports=r},7731:(e,t,r)=>{"use strict";r.d(t,{f:()=>j,z:()=>R});const n=/\{\{((?:(?!\}\}).)+)\}\}/g,a=/^"([^"]+)"$/,s=/^([/*+-])\s*(-?\d+(?:\.\d+)?)$/,i=/(?:https?:\/\/|www\.)[^\s<>"']+/gi,o=/\{\{(\s*[\w.@[\]]+\s*)\}\}/g,l=/\x00(\d+)\x00/g,c=/YYYY/g,d=/YY/g,u=/MMM/g,g=/MM/g,p=/(?<!M)M(?!M)/g,h=/DD/g,f=/(?<!D)D(?!D)/g,m=/HH/g,v=/(?<!H)H(?!H)/g,x=/hh/g,b=/(?<!h)h(?!h)/g,y=/mm/g,w=/ss/g,S=/A/g,C=/a/g,E=/Z/g;function R(e,t,r={}){return e?e.replace(n,(e,n)=>{const a=function(e){const t=[];let r="",n=!1;for(let a=0;a<e.length;a++){const s=e[a];'"'===s?(n=!n,r+=s):"|"!==s||n?r+=s:(t.push(r),r="")}return t.push(r),t}(n);if(0===a.length)return"";const s=a[0].trim(),i=t[s];let o=null!=i?String(i):"";if(1===a.length)return o;for(let e=1;e<a.length;e++){o=$(o,a[e].trim(),t,r)}return o}):""}function $(e,t,r,n){const i=t.match(a);if(i)return function(e,t){if(!e)return"";const r=Date.parse(e);if(isNaN(r))return e;const n=new Date(r),a=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],s=n.getHours(),i=s%12||12,o=s<12?"AM":"PM",R=n.getTimezoneOffset(),$=R<=0?"+":"-",I=Math.abs(R),M=String(Math.floor(I/60)).padStart(2,"0"),j=String(I%60).padStart(2,"0"),A=`${$}${M}:${j}`,D=[];function N(e){const t=D.length;return D.push(e),`\0${t}\0`}let O=t;return O=O.replace(c,()=>N(String(n.getFullYear()))),O=O.replace(d,()=>N(String(n.getFullYear()).slice(-2))),O=O.replace(u,()=>N(a[n.getMonth()])),O=O.replace(g,()=>N(String(n.getMonth()+1).padStart(2,"0"))),O=O.replace(p,()=>N(String(n.getMonth()+1))),O=O.replace(h,()=>N(String(n.getDate()).padStart(2,"0"))),O=O.replace(f,()=>N(String(n.getDate()))),O=O.replace(m,()=>N(String(s).padStart(2,"0"))),O=O.replace(v,()=>N(String(s))),O=O.replace(x,()=>N(String(i).padStart(2,"0"))),O=O.replace(b,()=>N(String(i))),O=O.replace(y,()=>N(String(n.getMinutes()).padStart(2,"0"))),O=O.replace(w,()=>N(String(n.getSeconds()).padStart(2,"0"))),O=O.replace(S,()=>N(o)),O=O.replace(C,()=>N(o.toLowerCase())),O=O.replace(E,()=>N(A)),O=O.replace(l,(e,t)=>D[Number(t)]),O}(e,i[1]);const o=t.match(s);if(o)return function(e,t,r){const n=parseFloat(e);if(isNaN(n))return e;switch(t){case"/":return 0!==r?String(n/r):e;case"*":return String(n*r);case"+":return String(n+r);case"-":return String(n-r);default:return e}}(e,o[1],parseFloat(o[2]));const R=t.indexOf(":");if(R>0){return I(e,t.substring(0,R).trim(),t.substring(R+1),r,n)}return I(e,t,void 0,r,n)}function I(e,t,r,n,a){switch(t){case"autolink":return function(e){return e?e.replace(i,e=>`<a href="${e.startsWith("www.")?`https://${e}`:e}" target="_blank" rel="noopener">${e}</a>`):""}(e);case"externalLink":return function(e,t,r){const n=j(r,t);return n?`<a href="${n}" target="_blank" rel="noopener">View \u2197</a>`:e}(e,n,a.externalLinkTemplate);case"round":case"toFixed":return M(e,r);case"prefix":return(null!=r?r:"")+e;case"suffix":return e+(null!=r?r:"");case"abs":return function(e){const t=parseFloat(e);return isNaN(t)?e:String(Math.abs(t))}(e);case"upper":return e.toUpperCase();case"lower":return e.toLowerCase();default:return e}}function M(e,t){const r=parseFloat(e);if(isNaN(r))return e;const n=void 0!==t?parseInt(t.trim(),10):0;return isNaN(n)||n<0?e:r.toFixed(n)}function j(e,t){if(e)return e.replace(o,(e,r)=>{const n=t[r.trim()];return null!=n?String(n):""})}},8474:(e,t,r)=>{"use strict";r.d(t,{I:()=>s,S:()=>a});class n{constructor(e){this.enabledFeatures=new Set,this.initialized=!1,this.widgetName=e.widgetName,this.features=e.features}initialize(){if(this.initialized)return;let e=new URLSearchParams(window.location.search),t=e.get("debug");if(null===t&&window.parent!==window)try{e=new URLSearchParams(window.parent.location.search),t=e.get("debug")}catch(e){}if("false"!==t){if("all"===t)this.features.forEach(e=>{"all"!==e&&"false"!==e&&this.enabledFeatures.add(e)}),console.log(`[${this.widgetName}-DEBUG] Enabled ALL features:`,Array.from(this.enabledFeatures));else if(null!==t){t.split(",").map(e=>e.trim().toUpperCase()).forEach(e=>{"ALL"===e.toUpperCase()?this.features.forEach(e=>{"all"!==e&&"false"!==e&&this.enabledFeatures.add(e)}):this.features.includes(e)&&this.enabledFeatures.add(e)})}this.initialized=!0}else this.initialized=!0}isEnabled(e){return this.initialize(),"BUG"===e||(!!this.enabledFeatures.has("all")||this.enabledFeatures.has(e))}log(e,t){if("BUG"===e){const e=Object.assign({feature:"BUG",bugId:t.bugId||"UNKNOWN",category:t.category||"GENERAL",timestamp:(new Date).toISOString()},t);return void console.warn(`[${this.widgetName.toUpperCase()} \u26a0\ufe0f BUG]`,JSON.stringify(e,null,2))}if(!this.isEnabled(e))return;const r=Object.assign({feature:e,timestamp:(new Date).toISOString()},t);console.log(`[${this.widgetName.toUpperCase()}-${e}]`,JSON.stringify(r,null,2))}getConfig(){this.initialize();const e=new URLSearchParams(window.location.search).get("debug");return{enabledFeatures:Array.from(this.enabledFeatures),debugValue:e}}}function a(){return new n({widgetName:"QUERYSIMPLE",features:["HASH","HASH-EXEC","HASH-FIRST-LOAD","FORM","TASK","ZOOM","MAP-EXTENT","DATA-ACTION","GROUP","SELECTION","SELECTION-STATE-AUDIT","WIDGET-STATE","RESTORE","RESULTS-MODE","EXPAND-COLLAPSE","GRAPHICS-LAYER","EVENTS","POPUP","QUERY-PATH","DIRECT-QUERY","SPATIAL","CSV","VIEW-TABLE","SUGGEST","CHUNK-1-COMPARE","CHUNK-1-MISMATCH","CHUNK-2-COMPARE","CHUNK-2-MISMATCH","CHUNK-3-COMPARE","CHUNK-3-DECISION","CHUNK-3-FALLBACK","CHUNK-4-COMPARE","CHUNK-5-COMPARE","CHUNK-6-COMPARE","CHUNK-6-MISMATCH"]})}function s(){return new n({widgetName:"HELPERSIMPLE",features:["HASH","HASH-EXEC","SELECTION","WIDGET-STATE","RESTORE"]})}},8996:e=>{e.exports='<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 16"><path fill="#000" fill-rule="evenodd" d="M8 2.125 14.334 14H1.667zm-.882-.47a1 1 0 0 1 1.765 0l6.333 11.874A1 1 0 0 1 14.334 15H1.667a1 1 0 0 1-.882-1.47zM8 4.874a.905.905 0 0 0-.9.995l.35 3.507a.552.552 0 0 0 1.1 0L8.9 5.87a.905.905 0 0 0-.9-.995m1 7a1 1 0 1 1-2 0 1 1 0 0 1 2 0" clip-rule="evenodd"></path></svg>'},9244:e=>{"use strict";e.exports=n}},t={};function i(r){var n=t[r];if(void 0!==n)return n.exports;var a=t[r]={exports:{}};return e[r](a,a.exports,i),a.exports}i.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return i.d(t,{a:t}),t},i.d=(e,t)=>{for(var r in t)i.o(t,r)&&!i.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},i.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),i.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.p="";var o={};return i.p=window.jimuConfig.baseUrl,(()=>{"use strict";i.r(o),i.d(o,{DataSourceTip:()=>x,DialogPanel:()=>d,EntityStatusType:()=>u,ErrorMessage:()=>p,StateHolder:()=>c,StatusIndicator:()=>g,TableBuilder:()=>re,applyInlineFormatting:()=>L,convertTemplateToHtml:()=>k,createGetI18nMessage:()=>h.aR,createHelperSimpleDebugLogger:()=>b.I,createQuerySimpleDebugLogger:()=>b.S,getFieldInfosInPopupContent:()=>h.uP,globalHandleManager:()=>S,highlightConfigManager:()=>w,resolveExternalLinkUrl:()=>P.f,substituteTokens:()=>P.z,toggleItemInArray:()=>h.mx,useDataSourceExists:()=>f});var e=i(7386),t=i(9244),r=i(4321),n=i(1888),a=i(4682),s=i.n(a);const{useState:l}=t.React,c=r=>{const{initState:n={},children:a}=r,s=!0,i=null,o={visible:l("visible"in n?n.visible:s),refContainer:l("refContainer"in n?n.refContainer:i),customData:l(Object.assign({},n.customData))};return(0,e.jsx)(t.React.Fragment,{children:a(o)})},d=(0,n.withTheme)(n=>{const{theme:a,panelVisible:s,setPanelVisible:i,getI18nMessage:o,isModal:l=!0,title:c=o("queryMessage"),bodyContent:d="",hasHeader:u=!0,hasFooter:g=!0}=n,p=()=>{i(!1)},h=()=>(0,e.jsxs)(t.React.Fragment,{children:[u&&(0,e.jsx)(r.PanelHeader,{className:"py-2",title:c,onClose:p}),(0,e.jsx)(r.ModalBody,{children:d}),g&&(0,e.jsx)(r.ModalFooter,{children:(0,e.jsx)(r.Button,{onClick:p,children:o("ok")})})]}),f="ui-unit-dialog-panel";return l?(0,e.jsx)(r.Modal,{className:f,isOpen:s,toggle:p,backdrop:"static",children:h()}):(0,e.jsx)("div",{className:`${f} modal-dialog ${s?"":"collapse"}`,css:t.css`
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
    `,children:(0,e.jsx)("div",{className:"modal-content",children:h()})})});var u;!function(e){e.None="",e.Init="init",e.Loading="loading",e.Loaded="loaded",e.Warning="warning",e.Error="error"}(u||(u={}));const g=(0,n.withTheme)(r=>{const{theme:n,className:a,title:s,statusType:i}=r;return i&&(0,e.jsx)("div",{className:`${null!=a?a:""} ui-unit-status-indicator ui-unit-status-indicator_status-type-${i}`,title:s,css:t.css`
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
          border: 1px solid ${null===(l=null===(o=null==n?void 0:n.ref.palette)||void 0===o?void 0:o.neutral)||void 0===l?void 0:l[500]};
          border-radius: 50%;
          border-top: 1px solid ${null===(d=null===(c=null==n?void 0:n.sys.color)||void 0===c?void 0:c.primary)||void 0===d?void 0:d.main};
          box-sizing: border-box;
          animation: loading 2s infinite linear;
          margin-right: .25rem;
        }
      }
    }
  `});var o,l,c,d}),p=n=>{const{error:a,className:o="",onDismiss:l}=n;if(!a)return null;const c=t.css`
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
  `;return(0,e.jsxs)("div",{className:`error-message ${o}`,css:c,role:"alert",children:[(0,e.jsx)(r.Icon,{icon:s(),className:"error-icon",size:"sm"}),(0,e.jsx)("span",{className:"error-text",children:a}),l&&(0,e.jsx)(r.Button,{size:"sm",type:"tertiary",icon:!0,onClick:l,className:"error-dismiss","aria-label":"Dismiss error",children:(0,e.jsx)(r.Icon,{icon:i(2838).default,size:"sm"})})]})};var h=i(2057);function f(e){const{widgetId:r,useDataSourceId:n}=e;return t.ReactRedux.useSelector(e=>{var t;let a;a=window.jimuConfig.isBuilder?e.appStateInBuilder.appConfig:e.appConfig;return(null!==(t=a.widgets[r].useDataSources)&&void 0!==t?t:[]).some(e=>e.dataSourceId===n)})}var m=i(8996),v=i.n(m);function x(n){var a,i,o;const{widgetId:l,useDataSource:c,onStatusChange:d,onDataSourceCreated:p,showMessage:h=!1}=n,m=t.hooks.useTranslation(r.defaultMessages),x=f({widgetId:l,useDataSourceId:c.dataSourceId}),[b,y]=t.React.useState(null),[w,S]=t.React.useState(null),C=t.React.useCallback(e=>{if(e){const{status:r,instanceStatus:n}=e;n===t.DataSourceStatus.NotCreated?(y("creating"),null==d||d(!1)):n===t.DataSourceStatus.CreateError||r===t.DataSourceStatus.LoadError?(y("error"),null==d||d(!1)):r===t.DataSourceStatus.NotReady?(y("warning"),null==d||d(!1)):(y(null),null==d||d(!0))}},[d]),E=t.React.useCallback(e=>{S(e),null==p||p(e)},[p]),R=t.React.useCallback(()=>{S(null),y("error"),null==d||d(!1)},[d]);let $,I,M;if("creating"===b)$=s(),I=m("loading");else if(x&&"error"!==b){if("warning"===b){let e="";const r=null===(a=null==w?void 0:w.getOriginDataSources())||void 0===a?void 0:a[0];r?e=r.getLabel()||r.getDataSourceJson().sourceLabel:w&&(e=w.getLabel()||w.getDataSourceJson().label);const n=t.appConfigUtils.getWidgetIdByOutputDataSource(c),s=null===(o=((null===(i=null===window||void 0===window?void 0:window.jimuConfig)||void 0===i?void 0:i.isBuilder)?(0,t.getAppStore)().getState().appStateInBuilder:(0,t.getAppStore)().getState()).appConfig.widgets[n])||void 0===o?void 0:o.label;M="var(--sys-color-warning-dark)",$=v(),I=m("outputDataIsNotGenerated",{outputDsLabel:null!=e?e:"",sourceWidgetName:null!=s?s:""})}}else $=s(),I=m("dataSourceCreateError"),M="var(--sys-color-error-main)";return(0,e.jsxs)(t.React.Fragment,{children:[x&&(0,e.jsx)(t.DataSourceComponent,{useDataSource:c,onDataSourceInfoChange:C,onDataSourceCreated:E,onCreateDataSourceFailed:R}),"creating"===b&&(0,e.jsx)(g,{statusType:u.Loading,title:I}),(!x||"error"===b||"warning"===b)&&(0,e.jsxs)("div",{className:"d-flex align-items-center",children:[(0,e.jsx)(r.Tooltip,{title:I,children:(0,e.jsx)(r.Button,{size:"sm",type:"tertiary",icon:!0,children:(0,e.jsx)(r.Icon,{icon:$,color:M})})}),h&&(0,e.jsx)("div",{className:"status-message",children:I})]})]})}var b=i(8474);class y{constructor(){this.configCache=new Map}static getInstance(){return y.instance||(y.instance=new y),y.instance}registerConfig(e,t){this.configCache.set(e,t)}unregisterConfig(e){this.configCache.delete(e)}getFillColor(e){const t=this.configCache.get(e),r=(null==t?void 0:t.highlightFillColor)||"#DF00FF";return this.hexToRgb(r)}getFillOpacity(e){var t;const r=this.configCache.get(e);return null!==(t=null==r?void 0:r.highlightFillOpacity)&&void 0!==t?t:.25}getOutlineColor(e){const t=this.configCache.get(e),r=(null==t?void 0:t.highlightOutlineColor)||"#DF00FF";return this.hexToRgb(r)}getOutlineOpacity(e){var t;const r=this.configCache.get(e);return null!==(t=null==r?void 0:r.highlightOutlineOpacity)&&void 0!==t?t:1}getOutlineWidth(e){var t;const r=this.configCache.get(e);return null!==(t=null==r?void 0:r.highlightOutlineWidth)&&void 0!==t?t:2}getPointSize(e){var t;const r=this.configCache.get(e);return null!==(t=null==r?void 0:r.highlightPointSize)&&void 0!==t?t:12}getPointOutlineWidth(e){var t;const r=this.configCache.get(e);return null!==(t=null==r?void 0:r.highlightPointOutlineWidth)&&void 0!==t?t:2}getPointStyle(e){const t=this.configCache.get(e);return(null==t?void 0:t.highlightPointStyle)||"circle"}getAddResultsAsMapLayer(e){const t=this.configCache.get(e);return!0===(null==t?void 0:t.addResultsAsMapLayer)}getResultsLayerTitle(e){const t=this.configCache.get(e),r=null==t?void 0:t.resultsLayerTitle;return"string"==typeof r&&""!==r.trim()?r.trim():"QuerySimple Results"}getDrawColor(e){const t=this.configCache.get(e),r=(null==t?void 0:t.drawColor)||"#32FF00";return this.hexToRgb(r)}getBufferColor(e){const t=this.configCache.get(e),r=(null==t?void 0:t.bufferColor)||"#FFA500";return this.hexToRgb(r)}getPointZoomBufferFeet(e){var t;const r=this.configCache.get(e);return null!==(t=null==r?void 0:r.pointZoomBufferFeet)&&void 0!==t?t:300}getZoomExpansionFactor(e){var t;const r=this.configCache.get(e);return null!==(t=null==r?void 0:r.zoomExpansionFactor)&&void 0!==t?t:1.2}hexToRgb(e){const t=/^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(e);return t?[parseInt(t[1],16),parseInt(t[2],16),parseInt(t[3],16)]:[223,0,255]}}const w=y.getInstance();const S=new class{constructor(){if(this.widgetHandles=new Map,this.handleIdCounter=0,this.debugEnabled=!1,"undefined"!=typeof window)try{const e=new URLSearchParams(window.location.search).get("debug");this.debugEnabled="all"===e||(null==e?void 0:e.includes("HANDLES"))||!1}catch(e){}}generateId(e,t){return`${e}-${++this.handleIdCounter}-${t||"anon"}-${Date.now()}`}log(e,t){this.debugEnabled&&console.log(`[HANDLE-MANAGER-${e}]`,JSON.stringify(Object.assign(Object.assign({},t),{timestamp:Date.now()}),null,2))}ensureWidgetContainer(e){return this.widgetHandles.has(e)||this.widgetHandles.set(e,{handles:new Map,createdAt:Date.now()}),this.widgetHandles.get(e)}track(e,t,r="other",n){const a=this.ensureWidgetContainer(e),s=this.generateId(r,n);return a.handles.set(s,{id:s,handle:t,type:r,description:n,createdAt:Date.now()}),this.log("TRACK",{widgetId:e,handleId:s,type:r,description:n,totalHandlesForWidget:a.handles.size}),s}remove(e,t){const r=this.widgetHandles.get(e);if(!r)return this.log("REMOVE-WIDGET-NOT-FOUND",{widgetId:e,handleId:t}),!1;const n=r.handles.get(t);if(!n)return this.log("REMOVE-HANDLE-NOT-FOUND",{widgetId:e,handleId:t}),!1;try{n.handle.remove()}catch(r){this.log("REMOVE-ERROR",{widgetId:e,handleId:t,error:r instanceof Error?r.message:String(r)})}return r.handles.delete(t),this.log("REMOVE-SUCCESS",{widgetId:e,handleId:t,type:n.type,description:n.description,remainingHandles:r.handles.size}),!0}removeByType(e,t){const r=this.widgetHandles.get(e);if(!r)return 0;let n=0;const a=[];return r.handles.forEach((e,r)=>{e.type===t&&a.push(r)}),a.forEach(a=>{const s=r.handles.get(a);if(s){try{s.handle.remove(),n++}catch(r){this.log("REMOVE-BY-TYPE-ERROR",{widgetId:e,handleId:a,type:t,error:r instanceof Error?r.message:String(r)})}r.handles.delete(a)}}),this.log("REMOVE-BY-TYPE",{widgetId:e,type:t,removedCount:n,remainingHandles:r.handles.size}),n}purgeAll(e){const t=this.widgetHandles.get(e);if(!t)return this.log("PURGE-WIDGET-NOT-FOUND",{widgetId:e}),{purged:0,errors:0};let r=0,n=0;const a={};return t.handles.forEach((t,s)=>{a[t.type]=(a[t.type]||0)+1;try{t.handle.remove(),r++}catch(r){n++,this.log("PURGE-HANDLE-ERROR",{widgetId:e,handleId:s,type:t.type,description:t.description,error:r instanceof Error?r.message:String(r)})}}),t.handles.clear(),this.log("PURGE-ALL",{widgetId:e,purged:r,errors:n,handleTypeBreakdown:a}),{purged:r,errors:n}}getStats(e){const t=this.widgetHandles.get(e);if(!t)return null;const r={};return t.handles.forEach(e=>{r[e.type]=(r[e.type]||0)+1}),{total:t.handles.size,byType:r}}getGlobalStats(){const e={};let t=0;return this.widgetHandles.forEach((r,n)=>{e[n]=r.handles.size,t+=r.handles.size}),{totalWidgets:this.widgetHandles.size,totalHandles:t,byWidget:e}}destroy(e){const t=this.purgeAll(e);return this.widgetHandles.delete(e),this.log("DESTROY",Object.assign({widgetId:e},t)),t}},C=/^-{3,}\s*$/,E=/^\s*[-*]\s+/,R=/^( +)/,$=/!\[([^\]]*)\]\(([^)]+)\)/g,I=/\[([^\]]+)\]\(([^)]+)\)/g,M=/\*\*(.+?)\*\*/g,j=/__(.+?)__/g,A=/\*(.+?)\*/g,D=/(?<!\{[\w]*)_(.+?)_(?![\w]*\})/g,N=/^\|(.+)\|$/,O=/^\|[\s:|-]+\|$/,T=/^<!--\s*table:(\w+)\s*-->$/,H={plain:{oddRowBg:"",evenRowBg:"",thBg:"font-weight:600;background:var(--ref-palette-neutral-200,#f0f0f0)",border:"border:1px solid var(--ref-palette-neutral-400,#d4d4d4)"},striped:{oddRowBg:"background:var(--ref-palette-neutral-200,#f0f0f0)",evenRowBg:"background:var(--ref-palette-neutral-300,#e2e2e2)",thBg:"font-weight:600;background:var(--ref-palette-neutral-400,#d4d4d4)",border:"border:1px solid var(--ref-palette-neutral-400,#d4d4d4)"},bordered:{oddRowBg:"",evenRowBg:"",thBg:"font-weight:600;background:var(--ref-palette-neutral-200,#f0f0f0)",border:"border:2px solid var(--ref-palette-neutral-500,#bbb)"}},F="striped";function k(e){var t,r;if(!e)return"";const n=e.split("\n"),a=[];let s=!1;const i=[],o=[];let l=null;function c(){0!==i.length&&(a.push(`<p>${i.join("<br/>")}</p>`),i.length=0)}function d(){0!==o.length?(a.push(function(e,t=F){if(e.length<1)return"";const r=e=>e.replace(/^\|/,"").replace(/\|$/,"").split("|").map(e=>e.trim()),n=H[t]||H[F],a="padding:4px 8px",s="border-collapse:collapse;width:100%;font-size:0.85em;line-height:1.4;";if(O.test(e[0])){const t=r(e[0]).map(e=>{const t=e.trim();return t.startsWith(":")&&t.endsWith(":")?"center":t.endsWith(":")?"right":"left"}),i=e.slice(1).map(r);if(0===i.length)return e.map(e=>`<p>${L(e)}</p>`).join("\n");const o=[];return o.push('<div style="max-width:100%;overflow-x:auto;">'),o.push(`<table style="${s}">`),o.push("<tbody>"),i.forEach((e,r)=>{const s=r%2==0?n.oddRowBg:n.evenRowBg;o.push(`<tr${s?` style="${s}"`:""}>`),e.forEach((e,r)=>{const s=t[r]||"left";o.push(`<td style="${n.border};${a};text-align:${s};">${L(e)}</td>`)}),o.push("</tr>")}),o.push("</tbody>"),o.push("</table>"),o.push("</div>"),o.join("")}if(e.length<2)return e.map(e=>`<p>${L(e)}</p>`).join("\n");if(!O.test(e[1]))return e.map(e=>`<p>${L(e)}</p>`).join("\n");const i=r(e[1]).map(e=>{const t=e.trim();return t.startsWith(":")&&t.endsWith(":")?"center":t.endsWith(":")?"right":"left"}),o=r(e[0]),l=e.slice(2).map(r),c=[];c.push('<div style="max-width:100%;overflow-x:auto;">'),c.push(`<table style="${s}">`),c.push("<thead><tr>"),o.forEach((e,t)=>{const r=i[t]||"left";c.push(`<th style="${n.border};${a};text-align:${r};${n.thBg}">${L(e)}</th>`)}),c.push("</tr></thead>"),l.length>0&&(c.push("<tbody>"),l.forEach((e,t)=>{const r=t%2==0?n.oddRowBg:n.evenRowBg;c.push(`<tr${r?` style="${r}"`:""}>`),e.forEach((e,t)=>{const r=i[t]||"left";c.push(`<td style="${n.border};${a};text-align:${r};">${L(e)}</td>`)}),c.push("</tr>")}),c.push("</tbody>"));return c.push("</table>"),c.push("</div>"),c.join("")}(o.slice(),null!=l?l:F)),o.length=0,l=null):l=null}for(let e=0;e<n.length;e++){const u=n[e];if(""===u.trim()){c(),d(),s&&(a.push("</ul>"),s=!1);continue}const g=u.trim().match(T);if(g){const e=g[1].toLowerCase();H[e]&&(l=e);continue}if(N.test(u.trim())){c(),s&&(a.push("</ul>"),s=!1),o.push(u.trim());continue}if(d(),C.test(u.trim())){c(),s&&(a.push("</ul>"),s=!1),a.push("<hr/>");continue}if(u.startsWith("#### ")){c(),s&&(a.push("</ul>"),s=!1),a.push(`<h6>${L(u.slice(5).trim())}</h6>`);continue}if(u.startsWith("### ")){c(),s&&(a.push("</ul>"),s=!1),a.push(`<h5>${L(u.slice(4).trim())}</h5>`);continue}if(u.startsWith("## ")){c(),s&&(a.push("</ul>"),s=!1),a.push(`<h4>${L(u.slice(3).trim())}</h4>`);continue}if(u.startsWith("# ")){c(),s&&(a.push("</ul>"),s=!1),a.push(`<h3>${L(u.slice(2).trim())}</h3>`);continue}if(E.test(u)){c(),s||(a.push("<ul>"),s=!0);const e=u.replace(E,"");a.push(`<li>${L(e)}</li>`);continue}s&&(a.push("</ul>"),s=!1);const p=(null===(r=null===(t=u.match(R))||void 0===t?void 0:t[1])||void 0===r?void 0:r.length)||0,h=L(u.trimStart());if(p>=2){const e=Math.floor(p/2);i.push(`<span style="display:inline-block;padding-left:${e}em">${h}</span>`)}else i.push(h)}return c(),d(),s&&a.push("</ul>"),a.join("\n")}function L(e){return e=(e=(e=(e=(e=(e=e.replace($,'<img src="$2" alt="$1" style="max-width:100%; height:auto; display:block; margin:4px 0;">')).replace(I,'<a href="$2" target="_blank" rel="noopener">$1</a>')).replace(M,"<strong>$1</strong>")).replace(j,"<strong>$1</strong>")).replace(A,"<em>$1</em>")).replace(D,"<em>$1</em>")}var P=i(7731);const B=2,U=6,z=1,W=10,G=2,Y=2,K=t.css`
  margin-top: 6px;
  padding: 10px;
  border: 1px solid var(--sys-color-divider-secondary, #e0e0e0);
  border-radius: 4px;
  background: var(--sys-color-surface-overlay, #f9f9f9);
  font-size: 12px;
`,_=t.css`
  display: flex;
  align-items: center;
  gap: 8px;
  margin-bottom: 8px;
  flex-wrap: wrap;
`,V=t.css`
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
`,J=t.css`
  display: grid;
  gap: 2px;
  margin-bottom: 8px;
`,Q=t.css`
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
`,Z=t.css`
  ${Q};
  font-weight: 600;
  background: var(--ref-palette-neutral-200, #f0f0f0);
`,X=t.css`
  display: flex;
  gap: 6px;
  justify-content: flex-end;
`,q=t.css`
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
`,ee=t.css`
  ${q};
  background: var(--sys-color-primary-main, #0079c1);
  color: #fff;
  border-color: var(--sys-color-primary-main, #0079c1);

  &:hover {
    background: var(--sys-color-primary-dark, #005e95);
  }
`,te=t.css`
  font-size: 10px;
  color: var(--sys-color-text-secondary, #666);
  text-transform: uppercase;
  letter-spacing: 0.5px;
  margin-bottom: 2px;
`;function re(r){const{onInsert:n,onCancel:a}=r,[s,i]=t.React.useState(G),[o,l]=t.React.useState(Y),[c,d]=t.React.useState(!0),[u,g]=t.React.useState("striped"),[p,h]=t.React.useState(()=>Array.from({length:G},(e,t)=>`Header ${t+1}`)),[f,m]=t.React.useState(()=>Array.from({length:Y},()=>Array.from({length:G},()=>""))),v=t.React.useCallback(e=>{const t=Math.max(B,Math.min(U,e));i(t),h(e=>Array.from({length:t},(t,r)=>{var n;return null!==(n=e[r])&&void 0!==n?n:`Header ${r+1}`})),m(e=>e.map(e=>Array.from({length:t},(t,r)=>{var n;return null!==(n=e[r])&&void 0!==n?n:""})))},[]),x=t.React.useCallback(e=>{const t=Math.max(z,Math.min(W,e));l(t),m(e=>Array.from({length:t},(t,r)=>{var n;return null!==(n=e[r])&&void 0!==n?n:Array.from({length:s},()=>"")}))},[s]),b=t.React.useCallback((e,t)=>{h(r=>{const n=[...r];return n[e]=t,n})},[]),y=t.React.useCallback((e,t,r)=>{m(n=>{const a=n.map(e=>[...e]);return a[e][t]=r,a})},[]),w=t.React.useCallback(()=>{const e=e=>` ${e||" "} `,t=`|${Array.from({length:s},()=>" --- ").join("|")}|`,r=f.map(t=>`|${t.map(e).join("|")}|`),a=[];"striped"!==u&&a.push(`\x3c!-- table:${u} --\x3e`),c&&a.push(`|${p.map(e).join("|")}|`),a.push(t),a.push(...r),n(a.join("\n"))},[p,f,s,c,u,n]);return(0,e.jsxs)("div",{css:K,children:[(0,e.jsxs)("div",{css:_,children:[(0,e.jsxs)("div",{css:V,children:[(0,e.jsx)("label",{htmlFor:"table-cols",children:"Columns:"}),(0,e.jsx)("input",{id:"table-cols",type:"number",min:B,max:U,value:s,onChange:e=>v(parseInt(e.target.value,10)||G)})]}),(0,e.jsxs)("div",{css:V,children:[(0,e.jsx)("label",{htmlFor:"table-rows",children:"Data rows:"}),(0,e.jsx)("input",{id:"table-rows",type:"number",min:z,max:W,value:o,onChange:e=>x(parseInt(e.target.value,10)||Y)})]}),(0,e.jsxs)("label",{css:t.css`
          display: flex;
          align-items: center;
          gap: 4px;
          font-size: 11px;
          color: var(--sys-color-text-secondary, inherit);
          cursor: pointer;
          user-select: none;
        `,children:[(0,e.jsx)("input",{type:"checkbox",checked:c,onChange:e=>d(e.target.checked)}),"Include header"]}),(0,e.jsxs)("div",{css:V,children:[(0,e.jsx)("label",{htmlFor:"table-style",children:"Style:"}),(0,e.jsxs)("select",{id:"table-style",value:u,onChange:e=>g(e.target.value),css:t.css`
              padding: 2px 4px;
              border: 1px solid var(--sys-color-divider-secondary, #ccc);
              border-radius: 3px;
              font-size: 12px;
              background: var(--sys-color-surface-paper, #fff);
              color: var(--sys-color-text-primary, inherit);
            `,children:[(0,e.jsx)("option",{value:"striped",children:"Striped"}),(0,e.jsx)("option",{value:"plain",children:"Plain"}),(0,e.jsx)("option",{value:"bordered",children:"Bordered"})]})]})]}),c&&(0,e.jsxs)(t.React.Fragment,{children:[(0,e.jsx)("div",{css:te,children:"Header row"}),(0,e.jsx)("div",{css:J,style:{gridTemplateColumns:`repeat(${s}, 1fr)`},children:p.map((t,r)=>(0,e.jsx)("input",{type:"text",css:Z,value:t,onChange:e=>b(r,e.target.value),placeholder:`Header ${r+1}`,"aria-label":`Header column ${r+1}`},`h-${r}`))})]}),(0,e.jsx)("div",{css:te,children:"Data rows"}),(0,e.jsx)("div",{css:J,style:{gridTemplateColumns:`repeat(${s}, 1fr)`},children:f.map((t,r)=>t.map((t,n)=>(0,e.jsx)("input",{type:"text",css:Q,value:t,onChange:e=>y(r,n,e.target.value),placeholder:`Row ${r+1}`,"aria-label":`Row ${r+1}, column ${n+1}`},`c-${r}-${n}`)))}),(0,e.jsxs)("div",{css:X,children:[(0,e.jsx)("button",{type:"button",css:q,onClick:a,children:"Cancel"}),(0,e.jsx)("button",{type:"button",css:ee,onClick:w,children:"Insert Table"})]})]})}})(),o})())}}});