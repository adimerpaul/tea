import{r as S,j as I,J as $,c as R,o as D,p as G,K as W,h as d,g as _,ao as F,a as f,G as V,ag as te,d as J,ap as ie,w as N,aq as k,ae as ne,ar as oe,as as le,at as j,au as E,av as X,aw as re,k as ae,l as Y,i as se,e as B,ax as ue}from"./index.6cfafacc.js";function ce(){const e=S(!I.value);return e.value===!1&&$(()=>{e.value=!0}),{isHydrated:e}}const Z=typeof ResizeObserver!="undefined",A=Z===!0?{}:{style:"display:block;position:absolute;top:0;left:0;right:0;bottom:0;height:100%;width:100%;overflow:hidden;pointer-events:none;z-index:-1;",url:"about:blank"};var K=R({name:"QResizeObserver",props:{debounce:{type:[String,Number],default:100}},emits:["resize"],setup(e,{emit:h}){let i=null,t,s={width:-1,height:-1};function a(r){r===!0||e.debounce===0||e.debounce==="0"?g():i===null&&(i=setTimeout(g,e.debounce))}function g(){if(i!==null&&(clearTimeout(i),i=null),t){const{offsetWidth:r,offsetHeight:o}=t;(r!==s.width||o!==s.height)&&(s={width:r,height:o},h("resize",s))}}const{proxy:y}=_();if(y.trigger=a,Z===!0){let r;const o=m=>{t=y.$el.parentNode,t?(r=new ResizeObserver(a),r.observe(t),g()):m!==!0&&W(()=>{o(!0)})};return $(()=>{o()}),D(()=>{i!==null&&clearTimeout(i),r!==void 0&&(r.disconnect!==void 0?r.disconnect():t&&r.unobserve(t))}),G}else{let m=function(){i!==null&&(clearTimeout(i),i=null),o!==void 0&&(o.removeEventListener!==void 0&&o.removeEventListener("resize",a,F.passive),o=void 0)},b=function(){m(),t&&t.contentDocument&&(o=t.contentDocument.defaultView,o.addEventListener("resize",a,F.passive),g())};const{isHydrated:r}=ce();let o;return $(()=>{W(()=>{t=y.$el,t&&b()})}),D(m),()=>{if(r.value===!0)return d("object",{class:"q--avoid-card-border",style:A.style,tabindex:-1,type:"text/html",data:A.url,"aria-hidden":"true",onLoad:b})}}}});const de={ratio:[String,Number]};function fe(e,h){return f(()=>{const i=Number(e.ratio||(h!==void 0?h.value:void 0));return isNaN(i)!==!0&&i>0?{paddingBottom:`${100/i}%`}:null})}const ge=1.7778;var ye=R({name:"QImg",props:{...de,src:String,srcset:String,sizes:String,alt:String,crossorigin:String,decoding:String,referrerpolicy:String,draggable:Boolean,loading:{type:String,default:"lazy"},loadingShowDelay:{type:[Number,String],default:0},fetchpriority:{type:String,default:"auto"},width:String,height:String,initialRatio:{type:[Number,String],default:ge},placeholderSrc:String,errorSrc:String,fit:{type:String,default:"cover"},position:{type:String,default:"50% 50%"},imgClass:String,imgStyle:Object,noSpinner:Boolean,noNativeMenu:Boolean,noTransition:Boolean,spinnerColor:String,spinnerSize:String},emits:["load","error"],setup(e,{slots:h,emit:i}){const t=S(e.initialRatio),s=fe(e,t),a=_(),{registerTimeout:g,removeTimeout:y}=V(),{registerTimeout:r,removeTimeout:o}=V(),m=f(()=>e.placeholderSrc!==void 0?{src:e.placeholderSrc}:null),b=f(()=>e.errorSrc!==void 0?{src:e.errorSrc,__qerror:!0}:null),v=[S(null),S(m.value)],u=S(0),w=S(!1),q=S(!1),O=f(()=>`q-img q-img--${e.noNativeMenu===!0?"no-":""}menu`),P=f(()=>({width:e.width,height:e.height})),C=f(()=>`q-img__image ${e.imgClass!==void 0?e.imgClass+" ":""}q-img__image--with${e.noTransition===!0?"out":""}-transition q-img__image--`),p=f(()=>({...e.imgStyle,objectFit:e.fit,objectPosition:e.position}));function n(){if(o(),e.loadingShowDelay===0){w.value=!0;return}r(()=>{w.value=!0},e.loadingShowDelay)}function c(){o(),w.value=!1}function z({target:l}){k(a)===!1&&(y(),t.value=l.naturalHeight===0?.5:l.naturalWidth/l.naturalHeight,T(l,1))}function T(l,L){L===1e3||k(a)===!0||(l.complete===!0?x(l):g(()=>{T(l,L+1)},50))}function x(l){k(a)!==!0&&(u.value=u.value^1,v[u.value].value=null,c(),l.getAttribute("__qerror")!=="true"&&(q.value=!1),i("load",l.currentSrc||l.src))}function H(l){y(),c(),q.value=!0,v[u.value].value=b.value,v[u.value^1].value=m.value,i("error",l)}function M(l){const L=v[l].value,Q={key:"img_"+l,class:C.value,style:p.value,alt:e.alt,crossorigin:e.crossorigin,decoding:e.decoding,referrerpolicy:e.referrerpolicy,height:e.height,width:e.width,loading:e.loading,fetchpriority:e.fetchpriority,"aria-hidden":"true",draggable:e.draggable,...L};return u.value===l?Object.assign(Q,{class:Q.class+"current",onLoad:z,onError:H}):Q.class+="loaded",d("div",{class:"q-img__container absolute-full",key:"img"+l},d("img",Q))}function ee(){return w.value===!1?d("div",{key:"content",class:"q-img__content absolute-full q-anchor--skip"},J(h[q.value===!0?"error":"default"])):d("div",{key:"loading",class:"q-img__loading absolute-full flex flex-center"},h.loading!==void 0?h.loading():e.noSpinner===!0?void 0:[d(ie,{color:e.spinnerColor,size:e.spinnerSize})])}{let l=function(){N(()=>e.src||e.srcset||e.sizes?{src:e.src,srcset:e.srcset,sizes:e.sizes}:null,L=>{y(),q.value=!1,L===null?(c(),v[u.value^1].value=m.value):n(),v[u.value].value=L},{immediate:!0})};I.value===!0?$(l):l()}return()=>{const l=[];return s.value!==null&&l.push(d("div",{key:"filler",style:s.value})),v[0].value!==null&&l.push(M(0)),v[1].value!==null&&l.push(M(1)),l.push(d(te,{name:"q-transition--fade"},ee)),d("div",{key:"main",class:O.value,style:P.value,role:"img","aria-label":e.alt},l)}}});const{passive:U}=F,ve=["both","horizontal","vertical"];var he=R({name:"QScrollObserver",props:{axis:{type:String,validator:e=>ve.includes(e),default:"vertical"},debounce:[String,Number],scrollTarget:{default:void 0}},emits:["scroll"],setup(e,{emit:h}){const i={position:{top:0,left:0},direction:"down",directionChanged:!1,delta:{top:0,left:0},inflectionPoint:{top:0,left:0}};let t=null,s,a;N(()=>e.scrollTarget,()=>{r(),y()});function g(){t!==null&&t();const b=Math.max(0,oe(s)),v=le(s),u={top:b-i.position.top,left:v-i.position.left};if(e.axis==="vertical"&&u.top===0||e.axis==="horizontal"&&u.left===0)return;const w=Math.abs(u.top)>=Math.abs(u.left)?u.top<0?"up":"down":u.left<0?"left":"right";i.position={top:b,left:v},i.directionChanged=i.direction!==w,i.delta=u,i.directionChanged===!0&&(i.direction=w,i.inflectionPoint=i.position),h("scroll",{...i})}function y(){s=ne(a,e.scrollTarget),s.addEventListener("scroll",o,U),o(!0)}function r(){s!==void 0&&(s.removeEventListener("scroll",o,U),s=void 0)}function o(b){if(b===!0||e.debounce===0||e.debounce==="0")g();else if(t===null){const[v,u]=e.debounce?[setTimeout(g,e.debounce),clearTimeout]:[requestAnimationFrame(g),cancelAnimationFrame];t=()=>{u(v),t=null}}}const{proxy:m}=_();return N(()=>m.$q.lang.rtl,g),$(()=>{a=m.$el.parentNode,y()}),D(()=>{t!==null&&t(),r()}),Object.assign(m,{trigger:o,getPosition:()=>i}),G}}),Se=R({name:"QLayout",props:{container:Boolean,view:{type:String,default:"hhh lpr fff",validator:e=>/^(h|l)h(h|r) lpr (f|l)f(f|r)$/.test(e.toLowerCase())},onScroll:Function,onScrollHeight:Function,onResize:Function},setup(e,{slots:h,emit:i}){const{proxy:{$q:t}}=_(),s=S(null),a=S(t.screen.height),g=S(e.container===!0?0:t.screen.width),y=S({position:0,direction:"down",inflectionPoint:0}),r=S(0),o=S(I.value===!0?0:j()),m=f(()=>"q-layout q-layout--"+(e.container===!0?"containerized":"standard")),b=f(()=>e.container===!1?{minHeight:t.screen.height+"px"}:null),v=f(()=>o.value!==0?{[t.lang.rtl===!0?"left":"right"]:`${o.value}px`}:null),u=f(()=>o.value!==0?{[t.lang.rtl===!0?"right":"left"]:0,[t.lang.rtl===!0?"left":"right"]:`-${o.value}px`,width:`calc(100% + ${o.value}px)`}:null);function w(n){if(e.container===!0||document.qScrollPrevented!==!0){const c={position:n.position.top,direction:n.direction,directionChanged:n.directionChanged,inflectionPoint:n.inflectionPoint.top,delta:n.delta.top};y.value=c,e.onScroll!==void 0&&i("scroll",c)}}function q(n){const{height:c,width:z}=n;let T=!1;a.value!==c&&(T=!0,a.value=c,e.onScrollHeight!==void 0&&i("scrollHeight",c),P()),g.value!==z&&(T=!0,g.value=z),T===!0&&e.onResize!==void 0&&i("resize",n)}function O({height:n}){r.value!==n&&(r.value=n,P())}function P(){if(e.container===!0){const n=a.value>r.value?j():0;o.value!==n&&(o.value=n)}}let C=null;const p={instances:{},view:f(()=>e.view),isContainer:f(()=>e.container),rootRef:s,height:a,containerHeight:r,scrollbarWidth:o,totalWidth:f(()=>g.value+o.value),rows:f(()=>{const n=e.view.toLowerCase().split(" ");return{top:n[0].split(""),middle:n[1].split(""),bottom:n[2].split("")}}),header:E({size:0,offset:0,space:!1}),right:E({size:300,offset:0,space:!1}),footer:E({size:0,offset:0,space:!1}),left:E({size:300,offset:0,space:!1}),scroll:y,animate(){C!==null?clearTimeout(C):document.body.classList.add("q-body--layout-animate"),C=setTimeout(()=>{C=null,document.body.classList.remove("q-body--layout-animate")},155)},update(n,c,z){p[n][c]=z}};if(X(Y,p),j()>0){let z=function(){n=null,c.classList.remove("hide-scrollbar")},T=function(){if(n===null){if(c.scrollHeight>t.screen.height)return;c.classList.add("hide-scrollbar")}else clearTimeout(n);n=setTimeout(z,300)},x=function(H){n!==null&&H==="remove"&&(clearTimeout(n),z()),window[`${H}EventListener`]("resize",T)},n=null;const c=document.body;N(()=>e.container!==!0?"add":"remove",x),e.container!==!0&&x("add"),re(()=>{x("remove")})}return()=>{const n=ae(h.default,[d(he,{onScroll:w}),d(K,{onResize:q})]),c=d("div",{class:m.value,style:b.value,ref:e.container===!0?void 0:s,tabindex:-1},n);return e.container===!0?d("div",{class:"q-layout-container overflow-hidden",ref:s},[d(K,{onResize:O}),d("div",{class:"absolute-full",style:v.value},[d("div",{class:"scroll",style:u.value},[c])])]):c}}}),be=R({name:"QPageContainer",setup(e,{slots:h}){const{proxy:{$q:i}}=_(),t=se(Y,B);if(t===B)return console.error("QPageContainer needs to be child of QLayout"),B;X(ue,!0);const s=f(()=>{const a={};return t.header.space===!0&&(a.paddingTop=`${t.header.size}px`),t.right.space===!0&&(a[`padding${i.lang.rtl===!0?"Left":"Right"}`]=`${t.right.size}px`),t.footer.space===!0&&(a.paddingBottom=`${t.footer.size}px`),t.left.space===!0&&(a[`padding${i.lang.rtl===!0?"Right":"Left"}`]=`${t.left.size}px`),a});return()=>d("div",{class:"q-page-container",style:s.value},J(h.default))}});export{K as Q,Se as a,ye as b,be as c};