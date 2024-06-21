import{Q as f}from"./QPage.87739120.js";import{_ as r,Q as u,R as m,S as n,T as o,V as e,U as v,am as l,Y as c,W as d,aA as g,a3 as C,aB as b,aC as x,P as Q}from"./index.12ede94a.js";import{Q as y}from"./QSpace.f3ca35a8.js";import{Q as w}from"./QTooltip.43ed8085.js";import"./position-engine.b922c68f.js";const $={name:"CardComponent",props:{title:{type:String,default:"Card Title"},icon:{type:String,default:"account_balance"},to:{type:String,default:"/"},color:{type:String,default:"green"},amount:{type:Number,default:0}}},S={class:"row"},B={class:"col-12 row items-center"},D={class:"col-12 flex flex-center"},k={class:"text-h3 text-white text-bold"};function I(t,i,a,_,p,h){return u(),m(b,{class:C("bg-"+a.color+" q-ma-xs cursor-pointer card-hover"),onClick:i[0]||(i[0]=s=>t.$router.push(a.to))},{default:n(()=>[o(g,{class:"q-pa-md"},{default:n(()=>[e("div",S,[e("div",B,[o(v,{flat:"",dense:"",label:a.title,color:"white",icon:a.icon,to:a.to,"no-caps":"",class:"text-bold"},null,8,["label","icon","to"]),o(y),o(l,{name:"keyboard_arrow_right",color:"white",size:"30px"})]),e("div",D,[e("div",k,[c(d(a.amount)+" ",1),o(l,{name:a.icon,color:"white",class:"icon-hover"},null,8,["name"])])])])]),_:1}),o(w,null,{default:n(()=>[c(d(a.title),1)]),_:1})]),_:1},8,["class"])}var N=r($,[["render",I],["__scopeId","data-v-de98c3ca"]]);const P=x({name:"IndexPage",components:{CardComponent:N},data(){return{users:0,students:0,appointments:0,data:[]}},mounted(){this.getDashboard()},methods:{getDashboard(){this.$axios.get("dashboard").then(t=>{this.data=t.data,this.users=t.data.users,this.students=t.data.students,this.appointments=t.data.appointments})}}}),T={class:"row"},V={class:"col-12 col-md-4"},q={class:"col-12 col-md-4"},z={class:"col-12 col-md-4"},U={class:"col-12 col-md-4"},A={class:"col-12 col-md-4"},E={class:"col-12 col-md-4"};function H(t,i,a,_,p,h){const s=Q("CardComponent");return u(),m(f,{class:"q-pa-md"},{default:n(()=>[e("div",T,[e("div",V,[o(s,{title:"Usuarios",icon:"o_people",to:"/users",color:"indigo",amount:t.users},null,8,["amount"])]),e("div",q,[o(s,{title:"Estudiantes",icon:"o_face",to:"/students",color:"green",amount:t.students},null,8,["amount"])]),e("div",z,[o(s,{title:"Citas",icon:"o_event",to:"/appointments",color:"orange",amount:t.appointments},null,8,["amount"])]),e("div",U,[o(s,{title:"Diagn\xF3sticos",icon:"o_medical_services",to:"/diagnoses",color:"red",amount:t.data.diagnoses},null,8,["amount"])]),e("div",A,[o(s,{title:"Documentos",icon:"o_description",to:"/documents",color:"purple",amount:t.data.documents},null,8,["amount"])]),e("div",E,[o(s,{title:"Historias",icon:"o_history",to:"/histories",color:"blue",amount:t.data.histories},null,8,["amount"])])])]),_:1})}var G=r(P,[["render",H]]);export{G as default};
