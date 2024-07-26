import{Q as d}from"./QImg.6b8082ca.js";import{_ as C,Q as n,R as b,S as l,T as t,V as s,U as k,au as f,Y as g,W as v,aC as y,a4 as I,aD as x,aE as N,P as D,X as q,$ as r,a2 as i}from"./index.fbcb0bef.js";import{Q as S}from"./QPage.a340da07.js";import{Q as A}from"./QSpace.aca94124.js";import{Q as B}from"./use-fullscreen.b9acf7ca.js";import"./QMenu.a031c73e.js";import"./QEditor.bd87ab98.js";import"./QBtnDropdown.ff418d69.js";const M={name:"CardComponent",props:{title:{type:String,default:"Card Title"},icon:{type:String,default:"account_balance"},to:{type:String,default:"/"},color:{type:String,default:"green"},amount:{type:Number,default:0}}},P={class:"row"},V={class:"col-12 row items-center"},T={class:"col-12 flex flex-center"},z={class:"text-h3 text-white text-bold"};function E(o,c,e,$,w,Q){return n(),b(x,{class:I("bg-"+e.color+" q-ma-xs cursor-pointer card-hover"),onClick:c[0]||(c[0]=a=>o.$router.push(e.to))},{default:l(()=>[t(y,{class:"q-pa-md"},{default:l(()=>[s("div",P,[s("div",V,[t(k,{flat:"",dense:"",label:e.title,color:"white",icon:e.icon,to:e.to,"no-caps":"",class:"text-bold"},null,8,["label","icon","to"]),t(A),t(f,{name:"keyboard_arrow_right",color:"white",size:"30px"})]),s("div",T,[s("div",z,[g(v(e.amount)+" ",1),t(f,{name:e.icon,color:"white",class:"icon-hover"},null,8,["name"])])])])]),_:1}),t(B,null,{default:l(()=>[g(v(e.title),1)]),_:1})]),_:1},8,["class"])}var R=C(M,[["render",E],["__scopeId","data-v-de98c3ca"]]);const U=N({name:"IndexPage",components:{CardComponent:R},data(){return{users:0,students:0,appointments:0,data:[]}},mounted(){this.getDashboard()},methods:{getDashboard(){this.$axios.get("dashboard").then(o=>{this.data=o.data,this.users=o.data.users,this.students=o.data.students,this.appointments=o.data.appointments})}}}),W={class:"row"},X={class:"col-12"},Y=s("div",{class:"text-h6 q-pl-md text-bold"},"Bienvenido a la plataforma",-1),j={key:0,class:"col-12 col-md-4"},F={key:1,class:"col-12 col-md-4"},G={key:2,class:"col-12 col-md-4"},H={key:3,class:"col-12 col-md-4"},J={key:4,class:"col-12 col-md-4"},K={class:"col-12 col-md-4"},L={class:"col-12 q-mt-lg"};function O(o,c,e,$,w,Q){const a=D("CardComponent");return n(),b(S,{class:"q-pa-md bg-grey-3"},{default:l(()=>{var u,m,_,p,h;return[s("div",W,[s("div",X,[t(x,null,{default:l(()=>[t(y,{class:"bg-primary text-white row items-center"},{default:l(()=>[t(q,{size:"50px"},{default:l(()=>[t(d,{src:"logo2.png",class:"q-mb-md",width:"50px"})]),_:1}),Y]),_:1})]),_:1})]),((u=o.$store.user)==null?void 0:u.role)==="ADMIN"?(n(),r("div",j,[t(a,{title:"Usuarios",icon:"o_people",to:"/users",color:"indigo",amount:o.users},null,8,["amount"])])):i("",!0),((m=o.$store.user)==null?void 0:m.role)==="ADMIN"?(n(),r("div",F,[t(a,{title:"Estudiantes",icon:"o_face",to:"/students",color:"green",amount:o.students},null,8,["amount"])])):i("",!0),((_=o.$store.user)==null?void 0:_.role)==="ADMIN"?(n(),r("div",G,[t(a,{title:"Reuniones",icon:"o_event",to:"/appointments",color:"orange",amount:o.appointments},null,8,["amount"])])):i("",!0),((p=o.$store.user)==null?void 0:p.role)==="ADMIN"?(n(),r("div",H,[t(a,{title:"reportes",icon:"o_assignment",color:"red",amount:5})])):i("",!0),((h=o.$store.user)==null?void 0:h.role)==="ADMIN"?(n(),r("div",J,[t(a,{title:"Protocolos",icon:"o_description",to:"/protocolos",color:"purple",amount:5})])):i("",!0),s("div",K,[t(a,{title:"Ayuda",icon:"o_help",color:"blue",amount:o.data.histories,to:"/ayuda"},null,8,["amount"])]),s("div",L,[t(d,{src:"logo3.png",class:"q-mb-md",width:"100px"}),t(d,{src:"logo2.png",class:"q-mb-md",width:"100px"})])])]}),_:1})}var rt=C(U,[["render",O]]);export{rt as default};
