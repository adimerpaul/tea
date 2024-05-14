import{c as S,a as o,h as d,d as T,C as w,a4 as re,F as E,a5 as de,r as P,g as O,a6 as ve,A,f as fe,B as me,a7 as he,E as be,a8 as ge,G as qe,a9 as ke,H as ye,aa as Se,w as V,ab as xe,y as Be,ac as Ce,ad as U,ae as _e,af as Pe,ag as Te,o as we,ah as Ee,ai as Oe,aj as Re,ak as Le,al as Fe,M as Qe,am as M,an as Ie,a2 as Me}from"./index.8d94b7cb.js";import{u as Ae,v as G,a as Ke,b as De,d as $e,p as J,r as X,s as je,e as ze}from"./position-engine.ad0ac3ed.js";var Ve=S({name:"QItemSection",props:{avatar:Boolean,thumbnail:Boolean,side:Boolean,top:Boolean,noWrap:Boolean},setup(e,{slots:l}){const n=o(()=>`q-item__section column q-item__section--${e.avatar===!0||e.side===!0||e.thumbnail===!0?"side":"main"}`+(e.top===!0?" q-item__section--top justify-start":" justify-center")+(e.avatar===!0?" q-item__section--avatar":"")+(e.thumbnail===!0?" q-item__section--thumbnail":"")+(e.noWrap===!0?" q-item__section--nowrap":""));return()=>d("div",{class:n.value},T(l.default))}}),Ue=S({name:"QItemLabel",props:{overline:Boolean,caption:Boolean,header:Boolean,lines:[Number,String]},setup(e,{slots:l}){const n=o(()=>parseInt(e.lines,10)),s=o(()=>"q-item__label"+(e.overline===!0?" q-item__label--overline text-overline":"")+(e.caption===!0?" q-item__label--caption text-caption":"")+(e.header===!0?" q-item__label--header":"")+(n.value===1?" ellipsis":"")),i=o(()=>e.lines!==void 0&&n.value>1?{overflow:"hidden",display:"-webkit-box","-webkit-box-orient":"vertical","-webkit-line-clamp":n.value}:null);return()=>d("div",{style:i.value,class:s.value},T(l.default))}}),Ge=S({name:"QItem",props:{...w,...re,tag:{type:String,default:"div"},active:{type:Boolean,default:null},clickable:Boolean,dense:Boolean,insetLevel:Number,tabindex:[String,Number],focused:Boolean,manualFocus:Boolean},emits:["click","keyup"],setup(e,{slots:l,emit:n}){const{proxy:{$q:s}}=O(),i=E(e,s),{hasLink:m,linkAttrs:h,linkClass:q,linkTag:k,navigateOnClick:b}=de(),r=P(null),c=P(null),v=o(()=>e.clickable===!0||m.value===!0||e.tag==="label"),f=o(()=>e.disable!==!0&&v.value===!0),y=o(()=>"q-item q-item-type row no-wrap"+(e.dense===!0?" q-item--dense":"")+(i.value===!0?" q-item--dark":"")+(m.value===!0&&e.active===null?q.value:e.active===!0?` q-item--active${e.activeClass!==void 0?` ${e.activeClass}`:""}`:"")+(e.disable===!0?" disabled":"")+(f.value===!0?" q-item--clickable q-link cursor-pointer "+(e.manualFocus===!0?"q-manual-focusable":"q-focusable q-hoverable")+(e.focused===!0?" q-manual-focusable--focused":""):"")),x=o(()=>{if(e.insetLevel===void 0)return null;const u=s.lang.rtl===!0?"Right":"Left";return{["padding"+u]:16+e.insetLevel*56+"px"}});function a(u){f.value===!0&&(c.value!==null&&(u.qKeyEvent!==!0&&document.activeElement===r.value?c.value.focus():document.activeElement===c.value&&r.value.focus()),b(u))}function g(u){if(f.value===!0&&ve(u,[13,32])===!0){A(u),u.qKeyEvent=!0;const B=new MouseEvent("click",u);B.qKeyEvent=!0,r.value.dispatchEvent(B)}n("keyup",u)}function R(){const u=fe(l.default,[]);return f.value===!0&&u.unshift(d("div",{class:"q-focus-helper",tabindex:-1,ref:c})),u}return()=>{const u={ref:r,class:y.value,style:x.value,role:"listitem",onClick:a,onKeyup:g};return f.value===!0?(u.tabindex=e.tabindex||"0",Object.assign(u,h.value)):v.value===!0&&(u["aria-disabled"]="true"),d(k.value,u,R())}}}),Je=S({name:"QList",props:{...w,bordered:Boolean,dense:Boolean,separator:Boolean,padding:Boolean,tag:{type:String,default:"div"}},setup(e,{slots:l}){const n=O(),s=E(e,n.proxy.$q),i=o(()=>"q-list"+(e.bordered===!0?" q-list--bordered":"")+(e.dense===!0?" q-list--dense":"")+(e.separator===!0?" q-list--separator":"")+(s.value===!0?" q-list--dark":"")+(e.padding===!0?" q-list--padding":""));return()=>d(e.tag,{class:i.value},T(l.default))}}),Xe=S({name:"QMenu",inheritAttrs:!1,props:{...Ae,...me,...w,...he,persistent:Boolean,autoClose:Boolean,separateClosePopup:Boolean,noRouteDismiss:Boolean,noRefocus:Boolean,noFocus:Boolean,fit:Boolean,cover:Boolean,square:Boolean,anchor:{type:String,validator:G},self:{type:String,validator:G},offset:{type:Array,validator:Ke},scrollTarget:{default:void 0},touchPosition:Boolean,maxHeight:{type:String,default:null},maxWidth:{type:String,default:null}},emits:[...be,"click","escapeKey"],setup(e,{slots:l,emit:n,attrs:s}){let i=null,m,h,q;const k=O(),{proxy:b}=k,{$q:r}=b,c=P(null),v=P(!1),f=o(()=>e.persistent!==!0&&e.noRouteDismiss!==!0),y=E(e,r),{registerTick:x,removeTick:a}=ge(),{registerTimeout:g}=qe(),{transitionProps:R,transitionStyle:u}=ke(e),{localScrollTarget:B,changeScrollEvent:Y,unconfigureScrollTarget:Z}=De(e,N),{anchorEl:C,canShow:p}=$e({showing:v}),{hide:K}=ye({showing:v,canShow:p,handleShow:le,handleHide:oe,hideOnRouteChange:f,processOnMount:!0}),{showPortal:D,hidePortal:$,renderPortal:ee}=Se(k,c,ue,"menu"),L={anchorEl:C,innerRef:c,onClickOutside(t){if(e.persistent!==!0&&v.value===!0)return K(t),(t.type==="touchstart"||t.target.classList.contains("q-dialog__backdrop"))&&A(t),!0}},j=o(()=>J(e.anchor||(e.cover===!0?"center middle":"bottom start"),r.lang.rtl)),te=o(()=>e.cover===!0?j.value:J(e.self||"top start",r.lang.rtl)),ae=o(()=>(e.square===!0?" q-menu--square":"")+(y.value===!0?" q-menu--dark q-dark":"")),ne=o(()=>e.autoClose===!0?{onClick:ie}:{}),z=o(()=>v.value===!0&&e.persistent!==!0);V(z,t=>{t===!0?(Ee(Q),ze(L)):(U(Q),X(L))});function F(){Oe(()=>{let t=c.value;t&&t.contains(document.activeElement)!==!0&&(t=t.querySelector("[autofocus][tabindex], [data-autofocus][tabindex]")||t.querySelector("[autofocus] [tabindex], [data-autofocus] [tabindex]")||t.querySelector("[autofocus], [data-autofocus]")||t,t.focus({preventScroll:!0}))})}function le(t){if(i=e.noRefocus===!1?document.activeElement:null,xe(W),D(),N(),m=void 0,t!==void 0&&(e.touchPosition||e.contextMenu)){const I=Be(t);if(I.left!==void 0){const{top:se,left:ce}=C.value.getBoundingClientRect();m={left:I.left-ce,top:I.top-se}}}h===void 0&&(h=V(()=>r.screen.width+"|"+r.screen.height+"|"+e.self+"|"+e.anchor+"|"+r.lang.rtl,_)),e.noFocus!==!0&&document.activeElement.blur(),x(()=>{_(),e.noFocus!==!0&&F()}),g(()=>{r.platform.is.ios===!0&&(q=e.autoClose,c.value.click()),_(),D(!0),n("show",t)},e.transitionDuration)}function oe(t){a(),$(),H(!0),i!==null&&(t===void 0||t.qClickOutside!==!0)&&(((t&&t.type.indexOf("key")===0?i.closest('[tabindex]:not([tabindex^="-"])'):void 0)||i).focus(),i=null),g(()=>{$(!0),n("hide",t)},e.transitionDuration)}function H(t){m=void 0,h!==void 0&&(h(),h=void 0),(t===!0||v.value===!0)&&(Ce(W),Z(),X(L),U(Q)),t!==!0&&(i=null)}function N(){(C.value!==null||e.scrollTarget!==void 0)&&(B.value=_e(C.value,e.scrollTarget),Y(B.value,_))}function ie(t){q!==!0?(Pe(b,t),n("click",t)):q=!1}function W(t){z.value===!0&&e.noFocus!==!0&&Re(c.value,t.target)!==!0&&F()}function Q(t){n("escapeKey"),K(t)}function _(){je({targetEl:c.value,offset:e.offset,anchorEl:C.value,anchorOrigin:j.value,selfOrigin:te.value,absoluteOffset:m,fit:e.fit,cover:e.cover,maxHeight:e.maxHeight,maxWidth:e.maxWidth})}function ue(){return d(Te,R.value,()=>v.value===!0?d("div",{role:"menu",...s,ref:c,tabindex:-1,class:["q-menu q-position-engine scroll"+ae.value,s.class],style:[s.style,u.value],...ne.value},T(l.default)):null)}return we(H),Object.assign(b,{focus:F,updatePosition:_}),ee}});const He={xs:8,sm:10,md:14,lg:20,xl:24};var Ye=S({name:"QChip",props:{...w,...Le,dense:Boolean,icon:String,iconRight:String,iconRemove:String,iconSelected:String,label:[String,Number],color:String,textColor:String,modelValue:{type:Boolean,default:!0},selected:{type:Boolean,default:null},square:Boolean,outline:Boolean,clickable:Boolean,removable:Boolean,removeAriaLabel:String,tabindex:[String,Number],disable:Boolean,ripple:{type:[Boolean,Object],default:!0}},emits:["update:modelValue","update:selected","remove","click"],setup(e,{slots:l,emit:n}){const{proxy:{$q:s}}=O(),i=E(e,s),m=Fe(e,He),h=o(()=>e.selected===!0||e.icon!==void 0),q=o(()=>e.selected===!0?e.iconSelected||s.iconSet.chip.selected:e.icon),k=o(()=>e.iconRemove||s.iconSet.chip.remove),b=o(()=>e.disable===!1&&(e.clickable===!0||e.selected!==null)),r=o(()=>{const a=e.outline===!0&&e.color||e.textColor;return"q-chip row inline no-wrap items-center"+(e.outline===!1&&e.color!==void 0?` bg-${e.color}`:"")+(a?` text-${a} q-chip--colored`:"")+(e.disable===!0?" disabled":"")+(e.dense===!0?" q-chip--dense":"")+(e.outline===!0?" q-chip--outline":"")+(e.selected===!0?" q-chip--selected":"")+(b.value===!0?" q-chip--clickable cursor-pointer non-selectable q-hoverable":"")+(e.square===!0?" q-chip--square":"")+(i.value===!0?" q-chip--dark q-dark":"")}),c=o(()=>{const a=e.disable===!0?{tabindex:-1,"aria-disabled":"true"}:{tabindex:e.tabindex||0},g={...a,role:"button","aria-hidden":"false","aria-label":e.removeAriaLabel||s.lang.label.remove};return{chip:a,remove:g}});function v(a){a.keyCode===13&&f(a)}function f(a){e.disable||(n("update:selected",!e.selected),n("click",a))}function y(a){(a.keyCode===void 0||a.keyCode===13)&&(A(a),e.disable===!1&&(n("update:modelValue",!1),n("remove")))}function x(){const a=[];b.value===!0&&a.push(d("div",{class:"q-focus-helper"})),h.value===!0&&a.push(d(M,{class:"q-chip__icon q-chip__icon--left",name:q.value}));const g=e.label!==void 0?[d("div",{class:"ellipsis"},[e.label])]:void 0;return a.push(d("div",{class:"q-chip__content col row no-wrap items-center q-anchor--skip"},Ie(l.default,g))),e.iconRight&&a.push(d(M,{class:"q-chip__icon q-chip__icon--right",name:e.iconRight})),e.removable===!0&&a.push(d(M,{class:"q-chip__icon q-chip__icon--remove cursor-pointer",name:k.value,...c.value.remove,onClick:y,onKeyup:y})),a}return()=>{if(e.modelValue===!1)return;const a={class:r.value,style:m.value};return b.value===!0&&Object.assign(a,c.value.chip,{onClick:f,onKeyup:v}),Qe("div",a,x(),"ripple",e.ripple!==!1&&e.disable!==!0,()=>[[Me,e.ripple]])}}});function Ze(e,l,n){return n<=l?l:Math.min(n,Math.max(l,e))}function pe(e,l,n){if(n<=l)return l;const s=n-l+1;let i=l+(e-l)%s;return i<l&&(i=s+i),i===0?0:i}export{Xe as Q,Je as a,Ze as b,Ge as c,Ve as d,Ue as e,Ye as f,pe as n};
