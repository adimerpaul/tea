import{c as z,a as x,h as W,d as N,C as U,a4 as X,F as Y,a5 as J,r as C,g as D,a6 as F,A as G,f as Z,a7 as O,v as R,K as ee,s as I,w as L,J as te,o as V,z as le,a8 as A,a9 as P,n as ne,aa as ie}from"./index.3e132a6d.js";var fe=z({name:"QItemSection",props:{avatar:Boolean,thumbnail:Boolean,side:Boolean,top:Boolean,noWrap:Boolean},setup(e,{slots:t}){const n=x(()=>`q-item__section column q-item__section--${e.avatar===!0||e.side===!0||e.thumbnail===!0?"side":"main"}`+(e.top===!0?" q-item__section--top justify-start":" justify-center")+(e.avatar===!0?" q-item__section--avatar":"")+(e.thumbnail===!0?" q-item__section--thumbnail":"")+(e.noWrap===!0?" q-item__section--nowrap":""));return()=>W("div",{class:n.value},N(t.default))}}),me=z({name:"QItemLabel",props:{overline:Boolean,caption:Boolean,header:Boolean,lines:[Number,String]},setup(e,{slots:t}){const n=x(()=>parseInt(e.lines,10)),l=x(()=>"q-item__label"+(e.overline===!0?" q-item__label--overline text-overline":"")+(e.caption===!0?" q-item__label--caption text-caption":"")+(e.header===!0?" q-item__label--header":"")+(n.value===1?" ellipsis":"")),a=x(()=>e.lines!==void 0&&n.value>1?{overflow:"hidden",display:"-webkit-box","-webkit-box-orient":"vertical","-webkit-line-clamp":n.value}:null);return()=>W("div",{style:a.value,class:l.value},N(t.default))}}),ve=z({name:"QItem",props:{...U,...X,tag:{type:String,default:"div"},active:{type:Boolean,default:null},clickable:Boolean,dense:Boolean,insetLevel:Number,tabindex:[String,Number],focused:Boolean,manualFocus:Boolean},emits:["click","keyup"],setup(e,{slots:t,emit:n}){const{proxy:{$q:l}}=D(),a=Y(e,l),{hasLink:c,linkAttrs:o,linkClass:d,linkTag:m,navigateOnClick:s}=J(),f=C(null),h=C(null),g=x(()=>e.clickable===!0||c.value===!0||e.tag==="label"),i=x(()=>e.disable!==!0&&g.value===!0),r=x(()=>"q-item q-item-type row no-wrap"+(e.dense===!0?" q-item--dense":"")+(a.value===!0?" q-item--dark":"")+(c.value===!0&&e.active===null?d.value:e.active===!0?` q-item--active${e.activeClass!==void 0?` ${e.activeClass}`:""}`:"")+(e.disable===!0?" disabled":"")+(i.value===!0?" q-item--clickable q-link cursor-pointer "+(e.manualFocus===!0?"q-manual-focusable":"q-focusable q-hoverable")+(e.focused===!0?" q-manual-focusable--focused":""):"")),E=x(()=>{if(e.insetLevel===void 0)return null;const u=l.lang.rtl===!0?"Right":"Left";return{["padding"+u]:16+e.insetLevel*56+"px"}});function w(u){i.value===!0&&(h.value!==null&&(u.qKeyEvent!==!0&&document.activeElement===f.value?h.value.focus():document.activeElement===h.value&&f.value.focus()),s(u))}function T(u){if(i.value===!0&&F(u,[13,32])===!0){G(u),u.qKeyEvent=!0;const b=new MouseEvent("click",u);b.qKeyEvent=!0,f.value.dispatchEvent(b)}n("keyup",u)}function B(){const u=Z(t.default,[]);return i.value===!0&&u.unshift(W("div",{class:"q-focus-helper",tabindex:-1,ref:h})),u}return()=>{const u={ref:f,class:r.value,style:E.value,role:"listitem",onClick:w,onKeyup:T};return i.value===!0?(u.tabindex=e.tabindex||"0",Object.assign(u,o.value)):g.value===!0&&(u["aria-disabled"]="true"),W(m.value,u,B())}}});function ae(){if(window.getSelection!==void 0){const e=window.getSelection();e.empty!==void 0?e.empty():e.removeAllRanges!==void 0&&(e.removeAllRanges(),O.is.mobile!==!0&&e.addRange(document.createRange()))}else document.selection!==void 0&&document.selection.empty()}const oe={target:{type:[Boolean,String,Element],default:!0},noParentEvent:Boolean},he={...oe,contextMenu:Boolean};function ge({showing:e,avoidEmit:t,configureAnchorEl:n}){const{props:l,proxy:a,emit:c}=D(),o=C(null);let d=null;function m(i){return o.value===null?!1:i===void 0||i.touches===void 0||i.touches.length<=1}const s={};n===void 0&&(Object.assign(s,{hide(i){a.hide(i)},toggle(i){a.toggle(i),i.qAnchorHandled=!0},toggleKey(i){F(i,13)===!0&&s.toggle(i)},contextClick(i){a.hide(i),R(i),ee(()=>{a.show(i),i.qAnchorHandled=!0})},prevent:R,mobileTouch(i){if(s.mobileCleanup(i),m(i)!==!0)return;a.hide(i),o.value.classList.add("non-selectable");const r=i.target;I(s,"anchor",[[r,"touchmove","mobileCleanup","passive"],[r,"touchend","mobileCleanup","passive"],[r,"touchcancel","mobileCleanup","passive"],[o.value,"contextmenu","prevent","notPassive"]]),d=setTimeout(()=>{d=null,a.show(i),i.qAnchorHandled=!0},300)},mobileCleanup(i){o.value.classList.remove("non-selectable"),d!==null&&(clearTimeout(d),d=null),e.value===!0&&i!==void 0&&ae()}}),n=function(i=l.contextMenu){if(l.noParentEvent===!0||o.value===null)return;let r;i===!0?a.$q.platform.is.mobile===!0?r=[[o.value,"touchstart","mobileTouch","passive"]]:r=[[o.value,"mousedown","hide","passive"],[o.value,"contextmenu","contextClick","notPassive"]]:r=[[o.value,"click","toggle","passive"],[o.value,"keyup","toggleKey","passive"]],I(s,"anchor",r)});function f(){le(s,"anchor")}function h(i){for(o.value=i;o.value.classList.contains("q-anchor--skip");)o.value=o.value.parentNode;n()}function g(){if(l.target===!1||l.target===""||a.$el.parentNode===null)o.value=null;else if(l.target===!0)h(a.$el.parentNode);else{let i=l.target;if(typeof l.target=="string")try{i=document.querySelector(l.target)}catch{i=void 0}i!=null?(o.value=i.$el||i,n()):(o.value=null,console.error(`Anchor: target "${l.target}" not found`))}}return L(()=>l.contextMenu,i=>{o.value!==null&&(f(),n(i))}),L(()=>l.target,()=>{o.value!==null&&f(),g()}),L(()=>l.noParentEvent,i=>{o.value!==null&&(i===!0?f():n())}),te(()=>{g(),t!==!0&&l.modelValue===!0&&o.value===null&&c("update:modelValue",!1)}),V(()=>{d!==null&&clearTimeout(d),f()}),{anchorEl:o,canShow:m,anchorEvents:s}}function be(e,t){const n=C(null);let l;function a(d,m){const s=`${m!==void 0?"add":"remove"}EventListener`,f=m!==void 0?m:l;d!==window&&d[s]("scroll",f,A.passive),window[s]("scroll",f,A.passive),l=m}function c(){n.value!==null&&(a(n.value),n.value=null)}const o=L(()=>e.noParentEvent,()=>{n.value!==null&&(c(),t())});return V(o),{localScrollTarget:n,unconfigureScrollTarget:c,changeScrollEvent:a}}const{notPassiveCapture:S}=A,y=[];function M(e){const t=e.target;if(t===void 0||t.nodeType===8||t.classList.contains("no-pointer-events")===!0)return;let n=P.length-1;for(;n>=0;){const l=P[n].$;if(l.type.name==="QTooltip"){n--;continue}if(l.type.name!=="QDialog")break;if(l.props.seamless!==!0)return;n--}for(let l=y.length-1;l>=0;l--){const a=y[l];if((a.anchorEl.value===null||a.anchorEl.value.contains(t)===!1)&&(t===document.body||a.innerRef.value!==null&&a.innerRef.value.contains(t)===!1))e.qClickOutside=!0,a.onClickOutside(e);else return}}function xe(e){y.push(e),y.length===1&&(document.addEventListener("mousedown",M,S),document.addEventListener("touchstart",M,S))}function pe(e){const t=y.findIndex(n=>n===e);t!==-1&&(y.splice(t,1),y.length===0&&(document.removeEventListener("mousedown",M,S),document.removeEventListener("touchstart",M,S)))}let Q,K;function ye(e){const t=e.split(" ");return t.length!==2?!1:["top","center","bottom"].includes(t[0])!==!0?(console.error("Anchor/Self position must start with one of top/center/bottom"),!1):["left","middle","right","start","end"].includes(t[1])!==!0?(console.error("Anchor/Self position must end with one of left/middle/right/start/end"),!1):!0}function we(e){return e?!(e.length!==2||typeof e[0]!="number"||typeof e[1]!="number"):!0}const $={"start#ltr":"left","start#rtl":"right","end#ltr":"right","end#rtl":"left"};["left","middle","right"].forEach(e=>{$[`${e}#ltr`]=e,$[`${e}#rtl`]=e});function ke(e,t){const n=e.split(" ");return{vertical:n[0],horizontal:$[`${n[1]}#${t===!0?"rtl":"ltr"}`]}}function ue(e,t){let{top:n,left:l,right:a,bottom:c,width:o,height:d}=e.getBoundingClientRect();return t!==void 0&&(n-=t[1],l-=t[0],c+=t[1],a+=t[0],o+=t[0],d+=t[1]),{top:n,bottom:c,height:d,left:l,right:a,width:o,middle:l+(a-l)/2,center:n+(c-n)/2}}function re(e,t,n){let{top:l,left:a}=e.getBoundingClientRect();return l+=t.top,a+=t.left,n!==void 0&&(l+=n[1],a+=n[0]),{top:l,bottom:l+1,height:1,left:a,right:a+1,width:1,middle:a,center:l}}function se(e,t){return{top:0,center:t/2,bottom:t,left:0,middle:e/2,right:e}}function j(e,t,n,l){return{top:e[n.vertical]-t[l.vertical],left:e[n.horizontal]-t[l.horizontal]}}function ce(e,t=0){if(e.targetEl===null||e.anchorEl===null||t>5)return;if(e.targetEl.offsetHeight===0||e.targetEl.offsetWidth===0){setTimeout(()=>{ce(e,t+1)},10);return}const{targetEl:n,offset:l,anchorEl:a,anchorOrigin:c,selfOrigin:o,absoluteOffset:d,fit:m,cover:s,maxHeight:f,maxWidth:h}=e;if(ne.is.ios===!0&&window.visualViewport!==void 0){const H=document.body.style,{offsetLeft:k,offsetTop:p}=window.visualViewport;k!==Q&&(H.setProperty("--q-pe-left",k+"px"),Q=k),p!==K&&(H.setProperty("--q-pe-top",p+"px"),K=p)}const{scrollLeft:g,scrollTop:i}=n,r=d===void 0?ue(a,s===!0?[0,0]:l):re(a,d,l);Object.assign(n.style,{top:0,left:0,minWidth:null,minHeight:null,maxWidth:h||"100vw",maxHeight:f||"100vh",visibility:"visible"});const{offsetWidth:E,offsetHeight:w}=n,{elWidth:T,elHeight:B}=m===!0||s===!0?{elWidth:Math.max(r.width,E),elHeight:s===!0?Math.max(r.height,w):w}:{elWidth:E,elHeight:w};let u={maxWidth:h,maxHeight:f};(m===!0||s===!0)&&(u.minWidth=r.width+"px",s===!0&&(u.minHeight=r.height+"px")),Object.assign(n.style,u);const b=se(T,B);let v=j(r,b,c,o);if(d===void 0||l===void 0)_(v,r,b,c,o);else{const{top:H,left:k}=v;_(v,r,b,c,o);let p=!1;if(v.top!==H){p=!0;const q=2*l[1];r.center=r.top-=q,r.bottom-=q+2}if(v.left!==k){p=!0;const q=2*l[0];r.middle=r.left-=q,r.right-=q+2}p===!0&&(v=j(r,b,c,o),_(v,r,b,c,o))}u={top:v.top+"px",left:v.left+"px"},v.maxHeight!==void 0&&(u.maxHeight=v.maxHeight+"px",r.height>v.maxHeight&&(u.minHeight=u.maxHeight)),v.maxWidth!==void 0&&(u.maxWidth=v.maxWidth+"px",r.width>v.maxWidth&&(u.minWidth=u.maxWidth)),Object.assign(n.style,u),n.scrollTop!==i&&(n.scrollTop=i),n.scrollLeft!==g&&(n.scrollLeft=g)}function _(e,t,n,l,a){const c=n.bottom,o=n.right,d=ie(),m=window.innerHeight-d,s=document.body.clientWidth;if(e.top<0||e.top+c>m)if(a.vertical==="center")e.top=t[l.vertical]>m/2?Math.max(0,m-c):0,e.maxHeight=Math.min(c,m);else if(t[l.vertical]>m/2){const f=Math.min(m,l.vertical==="center"?t.center:l.vertical===a.vertical?t.bottom:t.top);e.maxHeight=Math.min(c,f),e.top=Math.max(0,f-c)}else e.top=Math.max(0,l.vertical==="center"?t.center:l.vertical===a.vertical?t.top:t.bottom),e.maxHeight=Math.min(c,m-e.top);if(e.left<0||e.left+o>s)if(e.maxWidth=Math.min(o,s),a.horizontal==="middle")e.left=t[l.horizontal]>s/2?Math.max(0,s-o):0;else if(t[l.horizontal]>s/2){const f=Math.min(s,l.horizontal==="middle"?t.middle:l.horizontal===a.horizontal?t.right:t.left);e.maxWidth=Math.min(o,f),e.left=Math.max(0,f-e.maxWidth)}else e.left=Math.max(0,l.horizontal==="middle"?t.middle:l.horizontal===a.horizontal?t.left:t.right),e.maxWidth=Math.min(o,s-e.left)}export{ve as Q,fe as a,me as b,ae as c,we as d,be as e,ge as f,xe as g,oe as h,ke as p,pe as r,ce as s,he as u,ye as v};
