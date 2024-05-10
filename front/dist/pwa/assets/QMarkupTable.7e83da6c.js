import{c as h,C as q,aE as B,F as m,aF as w,a as t,M as R,g as f,h as l,av as s,aG as z,a1 as Q,A as D,d as I}from"./index.81674d45.js";const V={xs:8,sm:10,md:14,lg:20,xl:24};var M=h({name:"QChip",props:{...q,...B,dense:Boolean,icon:String,iconRight:String,iconRemove:String,iconSelected:String,label:[String,Number],color:String,textColor:String,modelValue:{type:Boolean,default:!0},selected:{type:Boolean,default:null},square:Boolean,outline:Boolean,clickable:Boolean,removable:Boolean,removeAriaLabel:String,tabindex:[String,Number],disable:Boolean,ripple:{type:[Boolean,Object],default:!0}},emits:["update:modelValue","update:selected","remove","click"],setup(e,{slots:o,emit:n}){const{proxy:{$q:i}}=f(),c=m(e,i),k=w(e,V),g=t(()=>e.selected===!0||e.icon!==void 0),S=t(()=>e.selected===!0?e.iconSelected||i.iconSet.chip.selected:e.icon),_=t(()=>e.iconRemove||i.iconSet.chip.remove),r=t(()=>e.disable===!1&&(e.clickable===!0||e.selected!==null)),C=t(()=>{const a=e.outline===!0&&e.color||e.textColor;return"q-chip row inline no-wrap items-center"+(e.outline===!1&&e.color!==void 0?` bg-${e.color}`:"")+(a?` text-${a} q-chip--colored`:"")+(e.disable===!0?" disabled":"")+(e.dense===!0?" q-chip--dense":"")+(e.outline===!0?" q-chip--outline":"")+(e.selected===!0?" q-chip--selected":"")+(r.value===!0?" q-chip--clickable cursor-pointer non-selectable q-hoverable":"")+(e.square===!0?" q-chip--square":"")+(c.value===!0?" q-chip--dark q-dark":"")}),d=t(()=>{const a=e.disable===!0?{tabindex:-1,"aria-disabled":"true"}:{tabindex:e.tabindex||0},u={...a,role:"button","aria-hidden":"false","aria-label":e.removeAriaLabel||i.lang.label.remove};return{chip:a,remove:u}});function x(a){a.keyCode===13&&b(a)}function b(a){e.disable||(n("update:selected",!e.selected),n("click",a))}function v(a){(a.keyCode===void 0||a.keyCode===13)&&(D(a),e.disable===!1&&(n("update:modelValue",!1),n("remove")))}function y(){const a=[];r.value===!0&&a.push(l("div",{class:"q-focus-helper"})),g.value===!0&&a.push(l(s,{class:"q-chip__icon q-chip__icon--left",name:S.value}));const u=e.label!==void 0?[l("div",{class:"ellipsis"},[e.label])]:void 0;return a.push(l("div",{class:"q-chip__content col row no-wrap items-center q-anchor--skip"},z(o.default,u))),e.iconRight&&a.push(l(s,{class:"q-chip__icon q-chip__icon--right",name:e.iconRight})),e.removable===!0&&a.push(l(s,{class:"q-chip__icon q-chip__icon--remove cursor-pointer",name:_.value,...d.value.remove,onClick:v,onKeyup:v})),a}return()=>{if(e.modelValue===!1)return;const a={class:C.value,style:k.value};return r.value===!0&&Object.assign(a,d.value.chip,{onClick:b,onKeyup:x}),R("div",a,y(),"ripple",e.ripple!==!1&&e.disable!==!0,()=>[[Q,e.ripple]])}}});const $=["horizontal","vertical","cell","none"];var L=h({name:"QMarkupTable",props:{...q,dense:Boolean,flat:Boolean,bordered:Boolean,square:Boolean,wrapCells:Boolean,separator:{type:String,default:"horizontal",validator:e=>$.includes(e)}},setup(e,{slots:o}){const n=f(),i=m(e,n.proxy.$q),c=t(()=>`q-markup-table q-table__container q-table__card q-table--${e.separator}-separator`+(i.value===!0?" q-table--dark q-table__card--dark q-dark":"")+(e.dense===!0?" q-table--dense":"")+(e.flat===!0?" q-table--flat":"")+(e.bordered===!0?" q-table--bordered":"")+(e.square===!0?" q-table--square":"")+(e.wrapCells===!1?" q-table--no-wrap":""));return()=>l("div",{class:c.value},[l("table",{class:"q-table"},I(o.default))])}});export{L as Q,M as a};
