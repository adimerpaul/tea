import{c as L,C as W,F as _,a as s,h as P,d as $,g as j,B as ie,a6 as re,E as ce,r as D,a7 as de,G as fe,a8 as ve,H as ge,a9 as he,w as M,aa as me,y as ye,ab as ke,ac as R,ad as qe,ae as Pe,af as Te,o as Ce,ag as Se,ah as xe,ai as be,A as Be}from"./index.81674d45.js";import{u as Oe,v as H,a as Ee,b as Fe,d as we,p as K,r as Q,s as Ae,e as De}from"./position-engine.1911a128.js";var He=L({name:"QList",props:{...W,bordered:Boolean,dense:Boolean,separator:Boolean,padding:Boolean,tag:{type:String,default:"div"}},setup(e,{slots:v}){const u=j(),i=_(e,u.proxy.$q),a=s(()=>"q-list"+(e.bordered===!0?" q-list--bordered":"")+(e.dense===!0?" q-list--dense":"")+(e.separator===!0?" q-list--separator":"")+(i.value===!0?" q-list--dark":"")+(e.padding===!0?" q-list--padding":""));return()=>P(e.tag,{class:a.value},$(v.default))}}),Ke=L({name:"QMenu",inheritAttrs:!1,props:{...Oe,...ie,...W,...re,persistent:Boolean,autoClose:Boolean,separateClosePopup:Boolean,noRouteDismiss:Boolean,noRefocus:Boolean,noFocus:Boolean,fit:Boolean,cover:Boolean,square:Boolean,anchor:{type:String,validator:H},self:{type:String,validator:H},offset:{type:Array,validator:Ee},scrollTarget:{default:void 0},touchPosition:Boolean,maxHeight:{type:String,default:null},maxWidth:{type:String,default:null}},emits:[...ce,"click","escapeKey"],setup(e,{slots:v,emit:u,attrs:i}){let a=null,f,r,g;const T=j(),{proxy:h}=T,{$q:o}=h,n=D(null),l=D(!1),G=s(()=>e.persistent!==!0&&e.noRouteDismiss!==!0),I=_(e,o),{registerTick:U,removeTick:z}=de(),{registerTimeout:C}=fe(),{transitionProps:J,transitionStyle:N}=ve(e),{localScrollTarget:S,changeScrollEvent:V,unconfigureScrollTarget:X}=Fe(e,w),{anchorEl:c,canShow:Y}=we({showing:l}),{hide:x}=ge({showing:l,canShow:Y,handleShow:ae,handleHide:oe,hideOnRouteChange:G,processOnMount:!0}),{showPortal:b,hidePortal:B,renderPortal:Z}=he(T,n,se,"menu"),m={anchorEl:c,innerRef:n,onClickOutside(t){if(e.persistent!==!0&&l.value===!0)return x(t),(t.type==="touchstart"||t.target.classList.contains("q-dialog__backdrop"))&&Be(t),!0}},O=s(()=>K(e.anchor||(e.cover===!0?"center middle":"bottom start"),o.lang.rtl)),p=s(()=>e.cover===!0?O.value:K(e.self||"top start",o.lang.rtl)),ee=s(()=>(e.square===!0?" q-menu--square":"")+(I.value===!0?" q-menu--dark q-dark":"")),te=s(()=>e.autoClose===!0?{onClick:ne}:{}),E=s(()=>l.value===!0&&e.persistent!==!0);M(E,t=>{t===!0?(Se(k),De(m)):(R(k),Q(m))});function y(){xe(()=>{let t=n.value;t&&t.contains(document.activeElement)!==!0&&(t=t.querySelector("[autofocus][tabindex], [data-autofocus][tabindex]")||t.querySelector("[autofocus] [tabindex], [data-autofocus] [tabindex]")||t.querySelector("[autofocus], [data-autofocus]")||t,t.focus({preventScroll:!0}))})}function ae(t){if(a=e.noRefocus===!1?document.activeElement:null,me(A),b(),w(),f=void 0,t!==void 0&&(e.touchPosition||e.contextMenu)){const q=ye(t);if(q.left!==void 0){const{top:ue,left:le}=c.value.getBoundingClientRect();f={left:q.left-le,top:q.top-ue}}}r===void 0&&(r=M(()=>o.screen.width+"|"+o.screen.height+"|"+e.self+"|"+e.anchor+"|"+o.lang.rtl,d)),e.noFocus!==!0&&document.activeElement.blur(),U(()=>{d(),e.noFocus!==!0&&y()}),C(()=>{o.platform.is.ios===!0&&(g=e.autoClose,n.value.click()),d(),b(!0),u("show",t)},e.transitionDuration)}function oe(t){z(),B(),F(!0),a!==null&&(t===void 0||t.qClickOutside!==!0)&&(((t&&t.type.indexOf("key")===0?a.closest('[tabindex]:not([tabindex^="-"])'):void 0)||a).focus(),a=null),C(()=>{B(!0),u("hide",t)},e.transitionDuration)}function F(t){f=void 0,r!==void 0&&(r(),r=void 0),(t===!0||l.value===!0)&&(ke(A),X(),Q(m),R(k)),t!==!0&&(a=null)}function w(){(c.value!==null||e.scrollTarget!==void 0)&&(S.value=qe(c.value,e.scrollTarget),V(S.value,d))}function ne(t){g!==!0?(Pe(h,t),u("click",t)):g=!1}function A(t){E.value===!0&&e.noFocus!==!0&&be(n.value,t.target)!==!0&&y()}function k(t){u("escapeKey"),x(t)}function d(){Ae({targetEl:n.value,offset:e.offset,anchorEl:c.value,anchorOrigin:O.value,selfOrigin:p.value,absoluteOffset:f,fit:e.fit,cover:e.cover,maxHeight:e.maxHeight,maxWidth:e.maxWidth})}function se(){return P(Te,J.value,()=>l.value===!0?P("div",{role:"menu",...i,ref:n,tabindex:-1,class:["q-menu q-position-engine scroll"+ee.value,i.class],style:[i.style,N.value],...te.value},$(v.default)):null)}return Ce(F),Object.assign(h,{focus:y,updatePosition:d}),Z}});export{Ke as Q,He as a};
