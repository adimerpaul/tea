import{Q as c}from"./QImg.7d0d3469.js";import{_ as M,Q as a,R as k,S as l,T as o,V as r,U as L,au as w,Y as Q,W as G,aC as P,a4 as V,aD as q,aE as T,P as z,X as U,$ as n,a2 as i}from"./index.5ee4276e.js";import{Q as x}from"./QPage.ed827786.js";import{Q as H}from"./QSpace.7851d5c0.js";import{Q as W}from"./use-fullscreen.bd35b221.js";import"./QMenu.0024118e.js";import"./QEditor.37cdead6.js";import"./QBtnDropdown.edacb57a.js";const X={name:"CardComponent",props:{title:{type:String,default:"Card Title"},icon:{type:String,default:"account_balance"},to:{type:String,default:"/"},color:{type:String,default:"green"},amount:{type:Number,default:0}}},Y={class:"row"},j={class:"col-12 row items-center"},F={class:"col-12 flex flex-center"},J={class:"text-h3 text-white text-bold"};function K(e,d,t,R,S,B){return a(),k(q,{class:V("bg-"+t.color+" q-ma-xs cursor-pointer card-hover"),onClick:d[0]||(d[0]=s=>e.$router.push(t.to))},{default:l(()=>[o(P,{class:"q-pa-md"},{default:l(()=>[r("div",Y,[r("div",j,[o(L,{flat:"",dense:"",label:t.title,color:"white",icon:t.icon,to:t.to,"no-caps":"",class:"text-bold"},null,8,["label","icon","to"]),o(H),o(w,{name:"keyboard_arrow_right",color:"white",size:"30px"})]),r("div",F,[r("div",J,[Q(G(t.amount)+" ",1),o(w,{name:t.icon,color:"white",class:"icon-hover"},null,8,["name"])])])])]),_:1}),o(W,null,{default:l(()=>[Q(G(t.title),1)]),_:1})]),_:1},8,["class"])}var Z=M(X,[["render",K],["__scopeId","data-v-de98c3ca"]]);const ee=T({name:"IndexPage",components:{CardComponent:Z},data(){return{users:0,students:0,appointments:0,data:[]}},mounted(){this.getDashboard()},methods:{getDashboard(){this.$axios.get("dashboard").then(e=>{this.data=e.data,this.users=e.data.users,this.students=e.data.students,this.appointments=e.data.appointments})}}}),oe={class:"row"},te={class:"col-12"},se=r("div",{class:"text-h6 q-pl-md text-bold"},"Bienvenido a la plataforma",-1),ae={key:0,class:"col-12 col-md-4"},re={key:1,class:"col-12 col-md-4"},le={key:2,class:"col-12 col-md-4"},ne={key:3,class:"col-12 col-md-4"},ie={key:4,class:"col-12 col-md-4"},de={key:5,class:"col-12 col-md-4"},ce={class:"col-12 q-mt-lg"};function ue(e,d,t,R,S,B){const s=z("CardComponent");return a(),k(x,{class:"q-pa-md bg-grey-3"},{default:l(()=>{var u,m,p,_,h,C,f,g,I,$,v,A,N,D,E,y,b,O;return[r("div",oe,[r("div",te,[o(q,null,{default:l(()=>[o(P,{class:"bg-primary text-white row items-center"},{default:l(()=>[o(U,{size:"50px"},{default:l(()=>[o(c,{src:"logo2.png",class:"q-mb-md",width:"50px"})]),_:1}),se]),_:1})]),_:1})]),((u=e.$store.user)==null?void 0:u.role)==="ADMIN"||((m=e.$store.user)==null?void 0:m.role)==="ENCARGADO PIE"||((p=e.$store.user)==null?void 0:p.role)==="ADMIN COLEGIO"?(a(),n("div",ae,[o(s,{title:"Usuarios",icon:"o_people",to:"/users",color:"indigo",amount:e.users},null,8,["amount"])])):i("",!0),((_=e.$store.user)==null?void 0:_.role)==="ADMIN"||((h=e.$store.user)==null?void 0:h.role)==="ENCARGADO PIE"||((C=e.$store.user)==null?void 0:C.role)==="ADMIN COLEGIO"?(a(),n("div",re,[o(s,{title:"Estudiantes",icon:"o_face",to:"/students",color:"green",amount:e.students},null,8,["amount"])])):i("",!0),((f=e.$store.user)==null?void 0:f.role)==="ADMIN"||((g=e.$store.user)==null?void 0:g.role)==="ENCARGADO PIE"||((I=e.$store.user)==null?void 0:I.role)==="ADMIN COLEGIO"?(a(),n("div",le,[o(s,{title:"Reuniones",icon:"o_event",to:"/appointments",color:"orange",amount:e.appointments},null,8,["amount"])])):i("",!0),(($=e.$store.user)==null?void 0:$.role)==="ADMIN"||((v=e.$store.user)==null?void 0:v.role)==="ENCARGADO PIE"||((A=e.$store.user)==null?void 0:A.role)==="ADMIN COLEGIO"?(a(),n("div",ne,[o(s,{title:"reportes",icon:"o_assignment",color:"red",amount:5})])):i("",!0),((N=e.$store.user)==null?void 0:N.role)==="ADMIN"||((D=e.$store.user)==null?void 0:D.role)==="ENCARGADO PIE"||((E=e.$store.user)==null?void 0:E.role)==="ADMIN COLEGIO"?(a(),n("div",ie,[o(s,{title:"Protocolos",icon:"o_description",to:"/protocolos",color:"purple",amount:5})])):i("",!0),((y=e.$store.user)==null?void 0:y.role)==="ADMIN"||((b=e.$store.user)==null?void 0:b.role)==="ENCARGADO PIE"||((O=e.$store.user)==null?void 0:O.role)==="ADMIN COLEGIO"?(a(),n("div",de,[o(s,{title:"Historiales",icon:"o_history",to:"/students",color:"blue",amount:e.data.histories},null,8,["amount"]),o(s,{title:"Ayuda",icon:"o_help",color:"blue",amount:e.data.histories,to:"/ayuda"},null,8,["amount"])])):i("",!0),r("div",ce,[o(c,{src:"logo3.png",class:"q-mb-md",width:"100px"}),o(c,{src:"logo2.png",class:"q-mb-md",width:"100px"})])])]}),_:1})}var $e=M(ee,[["render",ue]]);export{$e as default};
