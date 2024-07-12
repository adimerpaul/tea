import{Q as d}from"./QImg.2e1e479b.js";import{_ as b,Q as s,R as y,S as n,T as e,V as a,U as D,au as g,Y as v,W as C,aC as $,a4 as I,aD as w,aE as N,P as q,X as S,$ as r,a2 as i}from"./index.94ea9476.js";import{Q as A}from"./QPage.46f93795.js";import{Q as B}from"./QSpace.0a8dce97.js";import{Q as M}from"./use-fullscreen.835864a1.js";import"./QMenu.de97623f.js";import"./QEditor.6305ee7d.js";import"./QBtnDropdown.171d21ed.js";const P={name:"CardComponent",props:{title:{type:String,default:"Card Title"},icon:{type:String,default:"account_balance"},to:{type:String,default:"/"},color:{type:String,default:"green"},amount:{type:Number,default:0}}},V={class:"row"},T={class:"col-12 row items-center"},z={class:"col-12 flex flex-center"},E={class:"text-h3 text-white text-bold"};function R(t,c,o,x,Q,k){return s(),y(w,{class:I("bg-"+o.color+" q-ma-xs cursor-pointer card-hover"),onClick:c[0]||(c[0]=l=>t.$router.push(o.to))},{default:n(()=>[e($,{class:"q-pa-md"},{default:n(()=>[a("div",V,[a("div",T,[e(D,{flat:"",dense:"",label:o.title,color:"white",icon:o.icon,to:o.to,"no-caps":"",class:"text-bold"},null,8,["label","icon","to"]),e(B),e(g,{name:"keyboard_arrow_right",color:"white",size:"30px"})]),a("div",z,[a("div",E,[v(C(o.amount)+" ",1),e(g,{name:o.icon,color:"white",class:"icon-hover"},null,8,["name"])])])])]),_:1}),e(M,null,{default:n(()=>[v(C(o.title),1)]),_:1})]),_:1},8,["class"])}var U=b(P,[["render",R],["__scopeId","data-v-de98c3ca"]]);const W=N({name:"IndexPage",components:{CardComponent:U},data(){return{users:0,students:0,appointments:0,data:[]}},mounted(){this.getDashboard()},methods:{getDashboard(){this.$axios.get("dashboard").then(t=>{this.data=t.data,this.users=t.data.users,this.students=t.data.students,this.appointments=t.data.appointments})}}}),X={class:"row"},Y={class:"col-12"},j=a("div",{class:"text-h6 q-pl-md text-bold"},"Bienvenido a la plataforma",-1),F={key:0,class:"col-12 col-md-4"},G={key:1,class:"col-12 col-md-4"},H={key:2,class:"col-12 col-md-4"},J={key:3,class:"col-12 col-md-4"},K={key:4,class:"col-12 col-md-4"},L={key:5,class:"col-12 col-md-4"},O={class:"col-12 q-mt-lg"};function Z(t,c,o,x,Q,k){const l=q("CardComponent");return s(),y(A,{class:"q-pa-md bg-grey-3"},{default:n(()=>{var m,u,_,p,h,f;return[a("div",X,[a("div",Y,[e(w,null,{default:n(()=>[e($,{class:"bg-primary text-white row items-center"},{default:n(()=>[e(S,{size:"50px"},{default:n(()=>[e(d,{src:"logo2.png",class:"q-mb-md",width:"50px"})]),_:1}),j]),_:1})]),_:1})]),((m=t.$store.user)==null?void 0:m.role)==="ADMIN"?(s(),r("div",F,[e(l,{title:"Usuarios",icon:"o_people",to:"/users",color:"indigo",amount:t.users},null,8,["amount"])])):i("",!0),((u=t.$store.user)==null?void 0:u.role)==="ADMIN"?(s(),r("div",G,[e(l,{title:"Estudiantes",icon:"o_face",to:"/students",color:"green",amount:t.students},null,8,["amount"])])):i("",!0),((_=t.$store.user)==null?void 0:_.role)==="ADMIN"?(s(),r("div",H,[e(l,{title:"Reuniones",icon:"o_event",to:"/appointments",color:"orange",amount:t.appointments},null,8,["amount"])])):i("",!0),((p=t.$store.user)==null?void 0:p.role)==="ADMIN"?(s(),r("div",J,[e(l,{title:"Diagn\xF3sticos",icon:"o_medical_services",color:"red",amount:t.data.diagnoses},null,8,["amount"])])):i("",!0),((h=t.$store.user)==null?void 0:h.role)==="ADMIN"?(s(),r("div",K,[e(l,{title:"Protocolos",icon:"o_description",to:"/protocolos",color:"purple",amount:5})])):i("",!0),((f=t.$store.user)==null?void 0:f.role)==="ADMIN"?(s(),r("div",L)):i("",!0),a("div",O,[e(d,{src:"logo3.png",class:"q-mb-md",width:"100px"}),e(d,{src:"logo2.png",class:"q-mb-md",width:"100px"})])])]}),_:1})}var it=b(W,[["render",Z]]);export{it as default};
