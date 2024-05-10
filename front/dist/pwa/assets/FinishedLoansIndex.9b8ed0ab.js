import{_ as C,P as F,Q as s,R as d,S as c,T as n,aw as V,V as e,aC as r,U as y,Z as f,$ as D,a0 as I,ax as k,W as i,aD as u}from"./index.81674d45.js";import{Q as v,a as m}from"./QMarkupTable.7e83da6c.js";import{Q as w}from"./QPage.89e49c72.js";import{m as _}from"./moment.19647928.js";import{C as Q}from"./CardShowComponent.aaeac08f.js";import"./QTooltip.9f714056.js";import"./position-engine.1911a128.js";import"./QItem.a3c85d71.js";const Y={name:"FinishedLoandsIndex",components:{CardShowComponent:Q},data(){return{loading:!1,fechaInit:_().startOf("month").format("YYYY-MM-DD"),fechaFin:_().endOf("month").format("YYYY-MM-DD"),filter:"",debtors:[]}},mounted(){this.debtorsGet()},methods:{debtorsGet(){this.loading=!0,this.$axios.get("FinishedLoan",{params:{fechaInit:this.fechaInit,fechaFin:this.fechaFin,filter:this.filter}}).then(a=>{this.debtors=a.data}).catch(a=>{console.log(a)}).finally(()=>{this.loading=!1})}},computed:{total(){let a=0;return this.debtors.forEach(t=>{a+=parseFloat(t.amount)}),a}}},B={class:"row"},N={class:"col-6 col-md-2"},E={class:"col-6 col-md-2"},P={class:"col-6 col-md-3"},S={class:"col-6 col-md-3 flex flex-center"},A=e("div",{class:"col-6 col-md-2"},null,-1),L={class:"col-4"},M={class:"col-12"},U=e("thead",null,[e("tr",null,[e("th",null,"#"),e("th",null,"Nombre"),e("th",null,"Deuda"),e("th",null,"Fecha"),e("th",null,"Estado"),e("th",null,"Id")])],-1);function q(a,t,G,O,o,h){const g=F("CardShowComponent");return s(),d(w,{class:"bg-grey-3 q-pa-xs"},{default:c(()=>[n(k,null,{default:c(()=>[n(V,null,{default:c(()=>[e("div",B,[e("div",N,[n(r,{modelValue:o.fechaInit,"onUpdate:modelValue":t[0]||(t[0]=l=>o.fechaInit=l),label:"Fecha Inicio",dense:"",outlined:"",type:"date"},null,8,["modelValue"])]),e("div",E,[n(r,{modelValue:o.fechaFin,"onUpdate:modelValue":t[1]||(t[1]=l=>o.fechaFin=l),label:"Fecha Fin",dense:"",outlined:"",type:"date"},null,8,["modelValue"])]),e("div",P,[n(r,{modelValue:o.filter,"onUpdate:modelValue":t[2]||(t[2]=l=>o.filter=l),label:"Buscar",dense:"",outlined:""},null,8,["modelValue"])]),e("div",S,[n(y,{color:"primary",label:"Buscar",onClick:h.debtorsGet,"no-caps":"",icon:"search",loading:o.loading},null,8,["onClick","loading"])]),A,e("div",L,[n(g,{monto:h.total,color:"green",title:"Deuda Total",icono:"o_trending_up"},null,8,["monto"])]),e("div",M,[n(v,{dense:"",separator:"cell","wrap-cells":""},{default:c(()=>[U,e("tbody",null,[(s(!0),f(I,null,D(o.debtors,(l,x)=>{var p;return s(),f("tr",{key:l.id},[e("td",null,i(x+1),1),e("td",null,i((p=l==null?void 0:l.client)==null?void 0:p.name),1),e("td",null,i(l.amount),1),e("td",null,i(l.date),1),e("td",null,[l.status=="PENDIENTE"?(s(),d(m,{key:0,class:"q-ma-none",size:"10px",label:"Pendiente","text-color":"white",dense:"",color:"orange"})):u("",!0),l.status=="PAGADO"?(s(),d(m,{key:1,class:"q-ma-none",size:"10px",label:"Pagado","text-color":"white",dense:"",color:"green"})):u("",!0),l.status=="ANULADO"?(s(),d(m,{key:2,class:"q-ma-none",size:"10px",label:"Anulado","text-color":"white",dense:"",color:"red"})):u("",!0)]),e("td",null,i(l==null?void 0:l.id),1)])}),128))])]),_:1})])])]),_:1})]),_:1})]),_:1})}var J=C(Y,[["render",q]]);export{J as default};
