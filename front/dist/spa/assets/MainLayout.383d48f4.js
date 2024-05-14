import{c as K,a as v,h as z,d as pe,i as we,e as Q,r as D,w,o as _e,f as rt,g as Ce,l as qe,j as lt,k as ot,m as ut,n as X,p as nt,q as it,s as ee,t as fe,v as Le,x as ve,y as ge,z as he,A as st,B as dt,C as ct,E as ft,F as vt,G as ht,H as mt,I as yt,J as bt,K as Se,L as R,M as ze,O as gt,_ as pt,P as wt,Q as $,R as V,S as d,T as s,U as $e,V as De,W as me,X as Y,Y as I,Z as te,$ as _t,a0 as Ct,a1 as qt,a2 as j,a3 as Ve}from"./index.8d94b7cb.js";import{b as ae,Q as xt,a as Me,c as N,d as S,e as P,f as re}from"./format.aae4923e.js";import{Q as He,a as Qe,b as kt,c as Bt}from"./QPageContainer.10c66e15.js";import{c as Ot}from"./position-engine.ad0ac3ed.js";var Tt=K({name:"QToolbarTitle",props:{shrink:Boolean},setup(t,{slots:l}){const n=v(()=>"q-toolbar__title ellipsis"+(t.shrink===!0?" col-shrink":""));return()=>z("div",{class:n.value},pe(l.default))}}),Lt=K({name:"QToolbar",props:{inset:Boolean},setup(t,{slots:l}){const n=v(()=>"q-toolbar row no-wrap items-center"+(t.inset===!0?" q-toolbar--inset":""));return()=>z("div",{class:n.value,role:"toolbar"},pe(l.default))}}),Ae=K({name:"QHeader",props:{modelValue:{type:Boolean,default:!0},reveal:Boolean,revealOffset:{type:Number,default:250},bordered:Boolean,elevated:Boolean,heightHint:{type:[String,Number],default:50}},emits:["reveal","focusin"],setup(t,{slots:l,emit:n}){const{proxy:{$q:_}}=Ce(),e=we(qe,Q);if(e===Q)return console.error("QHeader needs to be child of QLayout"),Q;const a=D(parseInt(t.heightHint,10)),u=D(!0),i=v(()=>t.reveal===!0||e.view.value.indexOf("H")!==-1||_.platform.is.ios&&e.isContainer.value===!0),y=v(()=>{if(t.modelValue!==!0)return 0;if(i.value===!0)return u.value===!0?a.value:0;const f=a.value-e.scroll.value.position;return f>0?f:0}),c=v(()=>t.modelValue!==!0||i.value===!0&&u.value!==!0),o=v(()=>t.modelValue===!0&&c.value===!0&&t.reveal===!0),B=v(()=>"q-header q-layout__section--marginal "+(i.value===!0?"fixed":"absolute")+"-top"+(t.bordered===!0?" q-header--bordered":"")+(c.value===!0?" q-header--hidden":"")+(t.modelValue!==!0?" q-layout--prevent-focus":"")),x=v(()=>{const f=e.rows.value.top,T={};return f[0]==="l"&&e.left.space===!0&&(T[_.lang.rtl===!0?"right":"left"]=`${e.left.size}px`),f[2]==="r"&&e.right.space===!0&&(T[_.lang.rtl===!0?"left":"right"]=`${e.right.size}px`),T});function g(f,T){e.update("header",f,T)}function b(f,T){f.value!==T&&(f.value=T)}function q({height:f}){b(a,f),g("size",f)}function C(f){o.value===!0&&b(u,!0),n("focusin",f)}w(()=>t.modelValue,f=>{g("space",f),b(u,!0),e.animate()}),w(y,f=>{g("offset",f)}),w(()=>t.reveal,f=>{f===!1&&b(u,t.modelValue)}),w(u,f=>{e.animate(),n("reveal",f)}),w(e.scroll,f=>{t.reveal===!0&&b(u,f.direction==="up"||f.position<=t.revealOffset||f.position-f.inflectionPoint<100)});const p={};return e.instances.header=p,t.modelValue===!0&&g("size",a.value),g("space",t.modelValue),g("offset",y.value),_e(()=>{e.instances.header===p&&(e.instances.header=void 0,g("size",0),g("offset",0),g("space",!1))}),()=>{const f=rt(l.default,[]);return t.elevated===!0&&f.push(z("div",{class:"q-layout__shadow absolute-full overflow-hidden no-pointer-events"})),f.push(z(He,{debounce:0,onResize:q})),z("header",{class:B.value,style:x.value,onFocusin:C},f)}}}),St=K({name:"QFooter",props:{modelValue:{type:Boolean,default:!0},reveal:Boolean,bordered:Boolean,elevated:Boolean,heightHint:{type:[String,Number],default:50}},emits:["reveal","focusin"],setup(t,{slots:l,emit:n}){const{proxy:{$q:_}}=Ce(),e=we(qe,Q);if(e===Q)return console.error("QFooter needs to be child of QLayout"),Q;const a=D(parseInt(t.heightHint,10)),u=D(!0),i=D(lt.value===!0||e.isContainer.value===!0?0:window.innerHeight),y=v(()=>t.reveal===!0||e.view.value.indexOf("F")!==-1||_.platform.is.ios&&e.isContainer.value===!0),c=v(()=>e.isContainer.value===!0?e.containerHeight.value:i.value),o=v(()=>{if(t.modelValue!==!0)return 0;if(y.value===!0)return u.value===!0?a.value:0;const h=e.scroll.value.position+c.value+a.value-e.height.value;return h>0?h:0}),B=v(()=>t.modelValue!==!0||y.value===!0&&u.value!==!0),x=v(()=>t.modelValue===!0&&B.value===!0&&t.reveal===!0),g=v(()=>"q-footer q-layout__section--marginal "+(y.value===!0?"fixed":"absolute")+"-bottom"+(t.bordered===!0?" q-footer--bordered":"")+(B.value===!0?" q-footer--hidden":"")+(t.modelValue!==!0?" q-layout--prevent-focus"+(y.value!==!0?" hidden":""):"")),b=v(()=>{const h=e.rows.value.bottom,k={};return h[0]==="l"&&e.left.space===!0&&(k[_.lang.rtl===!0?"right":"left"]=`${e.left.size}px`),h[2]==="r"&&e.right.space===!0&&(k[_.lang.rtl===!0?"left":"right"]=`${e.right.size}px`),k});function q(h,k){e.update("footer",h,k)}function C(h,k){h.value!==k&&(h.value=k)}function p({height:h}){C(a,h),q("size",h)}function f(){if(t.reveal!==!0)return;const{direction:h,position:k,inflectionPoint:le}=e.scroll.value;C(u,h==="up"||k-le<100||e.height.value-c.value-k-a.value<300)}function T(h){x.value===!0&&C(u,!0),n("focusin",h)}w(()=>t.modelValue,h=>{q("space",h),C(u,!0),e.animate()}),w(o,h=>{q("offset",h)}),w(()=>t.reveal,h=>{h===!1&&C(u,t.modelValue)}),w(u,h=>{e.animate(),n("reveal",h)}),w([a,e.scroll,e.height],f),w(()=>_.screen.height,h=>{e.isContainer.value!==!0&&C(i,h)});const W={};return e.instances.footer=W,t.modelValue===!0&&q("size",a.value),q("space",t.modelValue),q("offset",o.value),_e(()=>{e.instances.footer===W&&(e.instances.footer=void 0,q("size",0),q("offset",0),q("space",!1))}),()=>{const h=ot(l.default,[z(He,{debounce:0,onResize:p})]);return t.elevated===!0&&h.push(z("div",{class:"q-layout__shadow absolute-full overflow-hidden no-pointer-events"})),z("footer",{class:g.value,style:b.value,onFocusin:T},h)}}});const xe={left:!0,right:!0,up:!0,down:!0,horizontal:!0,vertical:!0},zt=Object.keys(xe);xe.all=!0;function Ee(t){const l={};for(const n of zt)t[n]===!0&&(l[n]=!0);return Object.keys(l).length===0?xe:(l.horizontal===!0?l.left=l.right=!0:l.left===!0&&l.right===!0&&(l.horizontal=!0),l.vertical===!0?l.up=l.down=!0:l.up===!0&&l.down===!0&&(l.vertical=!0),l.horizontal===!0&&l.vertical===!0&&(l.all=!0),l)}const $t=["INPUT","TEXTAREA"];function Pe(t,l){return l.event===void 0&&t.target!==void 0&&t.target.draggable!==!0&&typeof l.handler=="function"&&$t.includes(t.target.nodeName.toUpperCase())===!1&&(t.qClonedBy===void 0||t.qClonedBy.indexOf(l.uid)===-1)}function ye(t,l,n){const _=ge(t);let e,a=_.left-l.event.x,u=_.top-l.event.y,i=Math.abs(a),y=Math.abs(u);const c=l.direction;c.horizontal===!0&&c.vertical!==!0?e=a<0?"left":"right":c.horizontal!==!0&&c.vertical===!0?e=u<0?"up":"down":c.up===!0&&u<0?(e="up",i>y&&(c.left===!0&&a<0?e="left":c.right===!0&&a>0&&(e="right"))):c.down===!0&&u>0?(e="down",i>y&&(c.left===!0&&a<0?e="left":c.right===!0&&a>0&&(e="right"))):c.left===!0&&a<0?(e="left",i<y&&(c.up===!0&&u<0?e="up":c.down===!0&&u>0&&(e="down"))):c.right===!0&&a>0&&(e="right",i<y&&(c.up===!0&&u<0?e="up":c.down===!0&&u>0&&(e="down")));let o=!1;if(e===void 0&&n===!1){if(l.event.isFirst===!0||l.event.lastDir===void 0)return{};e=l.event.lastDir,o=!0,e==="left"||e==="right"?(_.left-=a,i=0,a=0):(_.top-=u,y=0,u=0)}return{synthetic:o,payload:{evt:t,touch:l.event.mouse!==!0,mouse:l.event.mouse===!0,position:_,direction:e,isFirst:l.event.isFirst,isFinal:n===!0,duration:Date.now()-l.event.time,distance:{x:i,y},offset:{x:a,y:u},delta:{x:_.left-l.event.lastX,y:_.top-l.event.lastY}}}}let Dt=0;var be=ut({name:"touch-pan",beforeMount(t,{value:l,modifiers:n}){if(n.mouse!==!0&&X.has.touch!==!0)return;function _(a,u){n.mouse===!0&&u===!0?st(a):(n.stop===!0&&ve(a),n.prevent===!0&&Le(a))}const e={uid:"qvtp_"+Dt++,handler:l,modifiers:n,direction:Ee(n),noop:nt,mouseStart(a){Pe(a,e)&&it(a)&&(ee(e,"temp",[[document,"mousemove","move","notPassiveCapture"],[document,"mouseup","end","passiveCapture"]]),e.start(a,!0))},touchStart(a){if(Pe(a,e)){const u=a.target;ee(e,"temp",[[u,"touchmove","move","notPassiveCapture"],[u,"touchcancel","end","passiveCapture"],[u,"touchend","end","passiveCapture"]]),e.start(a)}},start(a,u){if(X.is.firefox===!0&&fe(t,!0),e.lastEvt=a,u===!0||n.stop===!0){if(e.direction.all!==!0&&(u!==!0||e.modifiers.mouseAllDir!==!0&&e.modifiers.mousealldir!==!0)){const c=a.type.indexOf("mouse")!==-1?new MouseEvent(a.type,a):new TouchEvent(a.type,a);a.defaultPrevented===!0&&Le(c),a.cancelBubble===!0&&ve(c),Object.assign(c,{qKeyEvent:a.qKeyEvent,qClickOutside:a.qClickOutside,qAnchorHandled:a.qAnchorHandled,qClonedBy:a.qClonedBy===void 0?[e.uid]:a.qClonedBy.concat(e.uid)}),e.initialEvent={target:a.target,event:c}}ve(a)}const{left:i,top:y}=ge(a);e.event={x:i,y,time:Date.now(),mouse:u===!0,detected:!1,isFirst:!0,isFinal:!1,lastX:i,lastY:y}},move(a){if(e.event===void 0)return;const u=ge(a),i=u.left-e.event.x,y=u.top-e.event.y;if(i===0&&y===0)return;e.lastEvt=a;const c=e.event.mouse===!0,o=()=>{_(a,c);let g;n.preserveCursor!==!0&&n.preservecursor!==!0&&(g=document.documentElement.style.cursor||"",document.documentElement.style.cursor="grabbing"),c===!0&&document.body.classList.add("no-pointer-events--children"),document.body.classList.add("non-selectable"),Ot(),e.styleCleanup=b=>{if(e.styleCleanup=void 0,g!==void 0&&(document.documentElement.style.cursor=g),document.body.classList.remove("non-selectable"),c===!0){const q=()=>{document.body.classList.remove("no-pointer-events--children")};b!==void 0?setTimeout(()=>{q(),b()},50):q()}else b!==void 0&&b()}};if(e.event.detected===!0){e.event.isFirst!==!0&&_(a,e.event.mouse);const{payload:g,synthetic:b}=ye(a,e,!1);g!==void 0&&(e.handler(g)===!1?e.end(a):(e.styleCleanup===void 0&&e.event.isFirst===!0&&o(),e.event.lastX=g.position.left,e.event.lastY=g.position.top,e.event.lastDir=b===!0?void 0:g.direction,e.event.isFirst=!1));return}if(e.direction.all===!0||c===!0&&(e.modifiers.mouseAllDir===!0||e.modifiers.mousealldir===!0)){o(),e.event.detected=!0,e.move(a);return}const B=Math.abs(i),x=Math.abs(y);B!==x&&(e.direction.horizontal===!0&&B>x||e.direction.vertical===!0&&B<x||e.direction.up===!0&&B<x&&y<0||e.direction.down===!0&&B<x&&y>0||e.direction.left===!0&&B>x&&i<0||e.direction.right===!0&&B>x&&i>0?(e.event.detected=!0,e.move(a)):e.end(a,!0))},end(a,u){if(e.event!==void 0){if(he(e,"temp"),X.is.firefox===!0&&fe(t,!1),u===!0)e.styleCleanup!==void 0&&e.styleCleanup(),e.event.detected!==!0&&e.initialEvent!==void 0&&e.initialEvent.target.dispatchEvent(e.initialEvent.event);else if(e.event.detected===!0){e.event.isFirst===!0&&e.handler(ye(a===void 0?e.lastEvt:a,e).payload);const{payload:i}=ye(a===void 0?e.lastEvt:a,e,!0),y=()=>{e.handler(i)};e.styleCleanup!==void 0?e.styleCleanup(y):y()}e.event=void 0,e.initialEvent=void 0,e.lastEvt=void 0}}};if(t.__qtouchpan=e,n.mouse===!0){const a=n.mouseCapture===!0||n.mousecapture===!0?"Capture":"";ee(e,"main",[[t,"mousedown","mouseStart",`passive${a}`]])}X.has.touch===!0&&ee(e,"main",[[t,"touchstart","touchStart",`passive${n.capture===!0?"Capture":""}`],[t,"touchmove","noop","notPassiveCapture"]])},updated(t,l){const n=t.__qtouchpan;n!==void 0&&(l.oldValue!==l.value&&(typeof value!="function"&&n.end(),n.handler=l.value),n.direction=Ee(l.modifiers))},beforeUnmount(t){const l=t.__qtouchpan;l!==void 0&&(l.event!==void 0&&l.end(),he(l,"main"),he(l,"temp"),X.is.firefox===!0&&fe(t,!1),l.styleCleanup!==void 0&&l.styleCleanup(),delete t.__qtouchpan)}});const Fe=150;var Vt=K({name:"QDrawer",inheritAttrs:!1,props:{...dt,...ct,side:{type:String,default:"left",validator:t=>["left","right"].includes(t)},width:{type:Number,default:300},mini:Boolean,miniToOverlay:Boolean,miniWidth:{type:Number,default:57},noMiniAnimation:Boolean,breakpoint:{type:Number,default:1023},showIfAbove:Boolean,behavior:{type:String,validator:t=>["default","desktop","mobile"].includes(t),default:"default"},bordered:Boolean,elevated:Boolean,overlay:Boolean,persistent:Boolean,noSwipeOpen:Boolean,noSwipeClose:Boolean,noSwipeBackdrop:Boolean},emits:[...ft,"onLayout","miniState"],setup(t,{slots:l,emit:n,attrs:_}){const e=Ce(),{proxy:{$q:a}}=e,u=vt(t,a),{preventBodyScroll:i}=gt(),{registerTimeout:y,removeTimeout:c}=ht(),o=we(qe,Q);if(o===Q)return console.error("QDrawer needs to be child of QLayout"),Q;let B,x=null,g;const b=D(t.behavior==="mobile"||t.behavior!=="desktop"&&o.totalWidth.value<=t.breakpoint),q=v(()=>t.mini===!0&&b.value!==!0),C=v(()=>q.value===!0?t.miniWidth:t.width),p=D(t.showIfAbove===!0&&b.value===!1?!0:t.modelValue===!0),f=v(()=>t.persistent!==!0&&(b.value===!0||Ne.value===!0));function T(r,m){if(le(),r!==!1&&o.animate(),L(0),b.value===!0){const O=o.instances[J.value];O!==void 0&&O.belowBreakpoint===!0&&O.hide(!1),A(1),o.isContainer.value!==!0&&i(!0)}else A(0),r!==!1&&se(!1);y(()=>{r!==!1&&se(!0),m!==!0&&n("show",r)},Fe)}function W(r,m){Ie(),r!==!1&&o.animate(),A(0),L(F.value*C.value),de(),m!==!0?y(()=>{n("hide",r)},Fe):c()}const{show:h,hide:k}=mt({showing:p,hideOnRouteChange:f,handleShow:T,handleHide:W}),{addToHistory:le,removeFromHistory:Ie}=yt(p,k,f),G={belowBreakpoint:b,hide:k},M=v(()=>t.side==="right"),F=v(()=>(a.lang.rtl===!0?-1:1)*(M.value===!0?1:-1)),ke=D(0),H=D(!1),oe=D(!1),Be=D(C.value*F.value),J=v(()=>M.value===!0?"left":"right"),ue=v(()=>p.value===!0&&b.value===!1&&t.overlay===!1?t.miniToOverlay===!0?t.miniWidth:C.value:0),ne=v(()=>t.overlay===!0||t.miniToOverlay===!0||o.view.value.indexOf(M.value?"R":"L")!==-1||a.platform.is.ios===!0&&o.isContainer.value===!0),U=v(()=>t.overlay===!1&&p.value===!0&&b.value===!1),Ne=v(()=>t.overlay===!0&&p.value===!0&&b.value===!1),Re=v(()=>"fullscreen q-drawer__backdrop"+(p.value===!1&&H.value===!1?" hidden":"")),We=v(()=>({backgroundColor:`rgba(0,0,0,${ke.value*.4})`})),Oe=v(()=>M.value===!0?o.rows.value.top[2]==="r":o.rows.value.top[0]==="l"),Ue=v(()=>M.value===!0?o.rows.value.bottom[2]==="r":o.rows.value.bottom[0]==="l"),Xe=v(()=>{const r={};return o.header.space===!0&&Oe.value===!1&&(ne.value===!0?r.top=`${o.header.offset}px`:o.header.space===!0&&(r.top=`${o.header.size}px`)),o.footer.space===!0&&Ue.value===!1&&(ne.value===!0?r.bottom=`${o.footer.offset}px`:o.footer.space===!0&&(r.bottom=`${o.footer.size}px`)),r}),Ye=v(()=>{const r={width:`${C.value}px`,transform:`translateX(${Be.value}px)`};return b.value===!0?r:Object.assign(r,Xe.value)}),je=v(()=>"q-drawer__content fit "+(o.isContainer.value!==!0?"scroll":"overflow-auto")),Ke=v(()=>`q-drawer q-drawer--${t.side}`+(oe.value===!0?" q-drawer--mini-animate":"")+(t.bordered===!0?" q-drawer--bordered":"")+(u.value===!0?" q-drawer--dark q-dark":"")+(H.value===!0?" no-transition":p.value===!0?"":" q-layout--prevent-focus")+(b.value===!0?" fixed q-drawer--on-top q-drawer--mobile q-drawer--top-padding":` q-drawer--${q.value===!0?"mini":"standard"}`+(ne.value===!0||U.value!==!0?" fixed":"")+(t.overlay===!0||t.miniToOverlay===!0?" q-drawer--on-top":"")+(Oe.value===!0?" q-drawer--top-padding":""))),Ge=v(()=>{const r=a.lang.rtl===!0?t.side:J.value;return[[be,tt,void 0,{[r]:!0,mouse:!0}]]}),Je=v(()=>{const r=a.lang.rtl===!0?J.value:t.side;return[[be,Te,void 0,{[r]:!0,mouse:!0}]]}),Ze=v(()=>{const r=a.lang.rtl===!0?J.value:t.side;return[[be,Te,void 0,{[r]:!0,mouse:!0,mouseAllDir:!0}]]});function ie(){at(b,t.behavior==="mobile"||t.behavior!=="desktop"&&o.totalWidth.value<=t.breakpoint)}w(b,r=>{r===!0?(B=p.value,p.value===!0&&k(!1)):t.overlay===!1&&t.behavior!=="mobile"&&B!==!1&&(p.value===!0?(L(0),A(0),de()):h(!1))}),w(()=>t.side,(r,m)=>{o.instances[m]===G&&(o.instances[m]=void 0,o[m].space=!1,o[m].offset=0),o.instances[r]=G,o[r].size=C.value,o[r].space=U.value,o[r].offset=ue.value}),w(o.totalWidth,()=>{(o.isContainer.value===!0||document.qScrollPrevented!==!0)&&ie()}),w(()=>t.behavior+t.breakpoint,ie),w(o.isContainer,r=>{p.value===!0&&i(r!==!0),r===!0&&ie()}),w(o.scrollbarWidth,()=>{L(p.value===!0?0:void 0)}),w(ue,r=>{E("offset",r)}),w(U,r=>{n("onLayout",r),E("space",r)}),w(M,()=>{L()}),w(C,r=>{L(),ce(t.miniToOverlay,r)}),w(()=>t.miniToOverlay,r=>{ce(r,C.value)}),w(()=>a.lang.rtl,()=>{L()}),w(()=>t.mini,()=>{t.noMiniAnimation||t.modelValue===!0&&(et(),o.animate())}),w(q,r=>{n("miniState",r)});function L(r){r===void 0?Se(()=>{r=p.value===!0?0:C.value,L(F.value*r)}):(o.isContainer.value===!0&&M.value===!0&&(b.value===!0||Math.abs(r)===C.value)&&(r+=F.value*o.scrollbarWidth.value),Be.value=r)}function A(r){ke.value=r}function se(r){const m=r===!0?"remove":o.isContainer.value!==!0?"add":"";m!==""&&document.body.classList[m]("q-body--drawer-toggle")}function et(){x!==null&&clearTimeout(x),e.proxy&&e.proxy.$el&&e.proxy.$el.classList.add("q-drawer--mini-animate"),oe.value=!0,x=setTimeout(()=>{x=null,oe.value=!1,e&&e.proxy&&e.proxy.$el&&e.proxy.$el.classList.remove("q-drawer--mini-animate")},150)}function tt(r){if(p.value!==!1)return;const m=C.value,O=ae(r.distance.x,0,m);if(r.isFinal===!0){O>=Math.min(75,m)===!0?h():(o.animate(),A(0),L(F.value*m)),H.value=!1;return}L((a.lang.rtl===!0?M.value!==!0:M.value)?Math.max(m-O,0):Math.min(0,O-m)),A(ae(O/m,0,1)),r.isFirst===!0&&(H.value=!0)}function Te(r){if(p.value!==!0)return;const m=C.value,O=r.direction===t.side,Z=(a.lang.rtl===!0?O!==!0:O)?ae(r.distance.x,0,m):0;if(r.isFinal===!0){Math.abs(Z)<Math.min(75,m)===!0?(o.animate(),A(1),L(0)):k(),H.value=!1;return}L(F.value*Z),A(ae(1-Z/m,0,1)),r.isFirst===!0&&(H.value=!0)}function de(){i(!1),se(!0)}function E(r,m){o.update(t.side,r,m)}function at(r,m){r.value!==m&&(r.value=m)}function ce(r,m){E("size",r===!0?t.miniWidth:m)}return o.instances[t.side]=G,ce(t.miniToOverlay,C.value),E("space",U.value),E("offset",ue.value),t.showIfAbove===!0&&t.modelValue!==!0&&p.value===!0&&t["onUpdate:modelValue"]!==void 0&&n("update:modelValue",!0),bt(()=>{n("onLayout",U.value),n("miniState",q.value),B=t.showIfAbove===!0;const r=()=>{(p.value===!0?T:W)(!1,!0)};if(o.totalWidth.value!==0){Se(r);return}g=w(o.totalWidth,()=>{g(),g=void 0,p.value===!1&&t.showIfAbove===!0&&b.value===!1?h(!1):r()})}),_e(()=>{g!==void 0&&g(),x!==null&&(clearTimeout(x),x=null),p.value===!0&&de(),o.instances[t.side]===G&&(o.instances[t.side]=void 0,E("size",0),E("offset",0),E("space",!1))}),()=>{const r=[];b.value===!0&&(t.noSwipeOpen===!1&&r.push(R(z("div",{key:"open",class:`q-drawer__opener fixed-${t.side}`,"aria-hidden":"true"}),Ge.value)),r.push(ze("div",{ref:"backdrop",class:Re.value,style:We.value,"aria-hidden":"true",onClick:k},void 0,"backdrop",t.noSwipeBackdrop!==!0&&p.value===!0,()=>Ze.value)));const m=q.value===!0&&l.mini!==void 0,O=[z("div",{..._,key:""+m,class:[je.value,_.class]},m===!0?l.mini():pe(l.default))];return t.elevated===!0&&p.value===!0&&O.push(z("div",{class:"q-layout__shadow absolute-full overflow-hidden no-pointer-events"})),r.push(ze("aside",{ref:"content",class:Ke.value,style:Ye.value},O,"contentclose",t.noSwipeClose!==!0&&b.value===!0,()=>Je.value)),z("div",{class:"q-drawer-container"},r)}}});const Mt={data(){return{leftDrawerOpen:!1,essentialLinks:[{title:"Inicio",icon:"home",to:"/"},{title:"Usuarios",icon:"people",to:"/users"},{title:"Historiales",icon:"history",to:"/history"},{title:"Estudiantes",icon:"school",to:"/students"},{title:"Reportes",icon:"description",to:"/reports"}]}},methods:{textCapitalize(t){if(!t)return"";const l=t.toLowerCase();return t.charAt(0).toUpperCase()+l.slice(1)},toggleLeftDrawer(){this.leftDrawerOpen=!this.leftDrawerOpen},logout(){this.$alert.dialog("\xBFEst\xE1 seguro que desea cerrar sesi\xF3n?").onOk(()=>{this.$axios.post("/logout").then(()=>{this.$store.isLogeed=!1,this.$store.user={},localStorage.removeItem("tokenPrestamos"),this.$router.push("/login")})})}},computed:{rutaActual(){return this.$route.path},title(){const t=this.$route.path;return t==="/"?"Inicio":t==="/prestamos"?"Prestamos":t==="/clients"?"Clientes":t==="/debtors"?"Deudores":t==="/payments"?"Pagos":t==="/finished-loans"?"Prestamos Finalizados":"Inicio"}}},Qt={class:"text-primary text-bold"};function At(t,l,n,_,e,a){const u=wt("router-view");return $(),V(Qe,{view:"lHh Lpr lFf"},{default:d(()=>[s(Ae,{class:"bg-white text-black",bordered:""},{default:d(()=>[s(Lt,null,{default:d(()=>[s($e,{flat:"",dense:"",round:"",icon:"menu","aria-label":"Menu",onClick:a.toggleLeftDrawer},null,8,["onClick"]),s(Tt,null,{default:d(()=>[De("div",Qt,me(a.title),1)]),_:1}),De("div",null,[s($e,{flat:"",dense:"",round:"",icon:"o_account_circle","aria-label":"Menu"},{default:d(()=>[s(xt,null,{default:d(()=>[s(Me,null,{default:d(()=>[R(($(),V(N,{clickable:""},{default:d(()=>[s(S,{avatar:""},{default:d(()=>[s(Y,{icon:"account_circle"})]),_:1}),s(S,null,{default:d(()=>[s(P,null,{default:d(()=>[I("Perfil")]),_:1})]),_:1})]),_:1})),[[j]]),R(($(),V(N,{clickable:""},{default:d(()=>[s(S,{avatar:""},{default:d(()=>[s(Y,{icon:"settings"})]),_:1}),s(S,null,{default:d(()=>[s(P,null,{default:d(()=>[I("Configuraci\xF3n")]),_:1})]),_:1})]),_:1})),[[j]]),R(($(),V(N,{clickable:"",onClick:a.logout},{default:d(()=>[s(S,{avatar:""},{default:d(()=>[s(Y,{icon:"logout"})]),_:1}),s(S,null,{default:d(()=>[s(P,null,{default:d(()=>[I("Cerrar Sesi\xF3n")]),_:1})]),_:1})]),_:1},8,["onClick"])),[[j]])]),_:1})]),_:1})]),_:1})])]),_:1})]),_:1}),s(Vt,{modelValue:e.leftDrawerOpen,"onUpdate:modelValue":l[0]||(l[0]=i=>e.leftDrawerOpen=i),"show-if-above":"",width:220,class:"bg-primary text-white"},{default:d(()=>[s(Qe,null,{default:d(()=>[s(Ae,null,{default:d(()=>[s(Me,null,{default:d(()=>[s(P,{class:"q-pa-xs"},{default:d(()=>[s(N,{dense:""},{default:d(()=>[s(S,{avatar:""},{default:d(()=>[s(kt,{src:"/logo.png"})]),_:1}),s(S,null,{default:d(()=>[s(P,{class:"text-white text-bold"},{default:d(()=>{var i,y,c,o;return[((i=t.$store.user)==null?void 0:i.role)==="ADMIN"?($(),V(re,{key:0,label:"Admin",color:"primary","text-color":"white",icon:"account_circle"})):te("",!0),((y=t.$store.user)==null?void 0:y.role)==="ATTORNEY"?($(),V(re,{key:1,label:"Tutor",color:"indigo","text-color":"white",icon:"account_circle"})):te("",!0),((c=t.$store.user)==null?void 0:c.role)==="TEACHER"?($(),V(re,{key:2,label:"Profesor",color:"green","text-color":"white",icon:"account_circle"})):te("",!0),((o=t.$store.user)==null?void 0:o.role)==="DOCTOR"?($(),V(re,{key:3,label:"Doctor",color:"red","text-color":"white",icon:"account_circle"})):te("",!0)]}),_:1}),s(P,{caption:"",class:"text-white"},{default:d(()=>[I(me(t.$store.user.name),1)]),_:1})]),_:1})]),_:1})]),_:1}),($(!0),_t(qt,null,Ct(e.essentialLinks,i=>R(($(),V(N,{clickable:"",dense:"",key:i.title,to:i.to,exact:"",class:Ve(`text-white ${a.rutaActual==i.to?"bg-secondary":""}`)},{default:d(()=>[s(S,{avatar:""},{default:d(()=>[s(Y,{"text-color":"white",icon:`${a.rutaActual==i.to?i.icon:"o_"+i.icon}`,size:`${a.rutaActual==i.to?"45px":"38px"}`},null,8,["icon","size"])]),_:2},1024),s(S,null,{default:d(()=>[s(P,{class:Ve(`text-white ${a.rutaActual==i.to?"text-bold":""}`)},{default:d(()=>[I(me(i.title),1)]),_:2},1032,["class"])]),_:2},1024)]),_:2},1032,["to","class"])),[[j]])),128))]),_:1})]),_:1}),s(St,null,{default:d(()=>[R(($(),V(N,{clickable:"",dense:"",onClick:a.logout},{default:d(()=>[s(S,{avatar:""},{default:d(()=>[s(Y,{"text-color":"red",icon:"logout",size:"38px"})]),_:1}),s(S,null,{default:d(()=>[s(P,{class:"text-red text-bold"},{default:d(()=>[I("Cerrar Sesi\xF3n")]),_:1})]),_:1})]),_:1},8,["onClick"])),[[j]])]),_:1})]),_:1})]),_:1},8,["modelValue"]),s(Bt,null,{default:d(()=>[s(u)]),_:1})]),_:1})}var Nt=pt(Mt,[["render",At]]);export{Nt as default};
