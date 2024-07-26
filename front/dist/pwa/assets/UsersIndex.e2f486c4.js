import{Q as c}from"./use-fullscreen.b9acf7ca.js";import{_ as V,Q as g,R as C,S as i,T as s,U as d,Y as u,Z as D,W as f,aN as p,au as _,V as r,$ as A,a0 as x,a1 as I,aD as Q,aC as E,a2 as k,aO as O,L as N,aP as S}from"./index.fbcb0bef.js";import{Q as h,a as P}from"./QTable.72adb7a7.js";import{Q as v}from"./format.1728e88d.js";import{Q as U}from"./QSpace.aca94124.js";import{Q as T,a as y}from"./QForm.e40ad08a.js";import{Q as G}from"./QPage.a340da07.js";import{C as R}from"./ClosePopup.c91e28d0.js";import"./QMenu.a031c73e.js";import"./QList.e8a09203.js";const q={name:"ClientsIndex",data(){return{columns:[{name:"option",label:"Opciones",align:"left",field:l=>l.option},{name:"id",label:"ID",align:"left",field:l=>l.id},{name:"name",label:"Nombre",align:"left",field:l=>l.name},{name:"username",label:"Usuario",align:"left",field:l=>l.username},{name:"role",label:"Rol",align:"left",field:l=>l.role},{name:"estudiantes",label:"Estudiantes",align:"left",field:l=>l.estudiantes},{name:"colegio",label:"Colegio",align:"left",field:l=>{var a;return(a=l.colegio)==null?void 0:a.nombre}}],roles:[{label:"Admin",value:"ADMIN"},{label:"Admin Colegio",value:"ADMIN COLEGIO"},{label:"Apoderado",value:"APODERADO"},{label:"Encargado PIE",value:"ENCARGADO PIE"},{label:"Docente",value:"DOCENTE"},{label:"Asist educ",value:"ASISTENTE EDUCATIVO"}],loading:!1,users:[],user:{},userDialog:!1,clienDialogHistory:!1,filter:"",passwordShow:!1,colegios:[]}},mounted(){this.userGet(),this.colegioGet()},methods:{colegioGet(){this.loading=!0,this.$axios.get("colegios").then(l=>{this.colegios=l.data}).catch(l=>{this.$alert.error(l.response.data.message)}).finally(()=>{this.loading=!1})},userSave(){this.loading=!0,this.user.id?this.$axios.put(`users/${this.user.id}`,this.user).then(l=>{this.userDialog=!1;const a=this.users.findIndex(n=>n.id===this.user.id);this.users.splice(a,1,l.data)}).catch(l=>{this.$alert.error(l.response.data.message)}).finally(()=>{this.loading=!1}):this.$axios.post("users",this.user).then(l=>{this.userDialog=!1,this.users.unshift(l.data)}).catch(l=>{this.$alert.error(l.response.data.message)}).finally(()=>{this.loading=!1})},userChangePassword(l){this.$alert.promptPassword("Ingrese la nueva contrase\xF1a").onOk(a=>{this.loading=!0,this.$axios.put(`passwordUpdate/${l.id}`,{password:a}).then(n=>{this.$alert.success("Contrase\xF1a cambiada con \xE9xito")}).catch(n=>{this.$alert.error(n.response.data.message)}).finally(()=>{this.loading=!1})})},userDelete(l){this.$alert.confirm("\xBFEst\xE1 seguro de eliminar este usere?").onOk(()=>{this.loading=!0,this.$axios.delete(`users/${l.id}`).then(a=>{const n=this.users.findIndex(w=>w.id===w.id);this.users.splice(n,1)}).catch(a=>{this.$alert.error(a.response.data.message)}).finally(()=>{this.loading=!1})})},userEdit(l){this.userDialog=!0,this.user={...l}},userAdd(){this.userDialog=!0,this.user={name:"",ci:""}},userGet(){this.loading=!0,this.$axios.get("users").then(l=>{this.users=l.data}).catch(l=>{this.$alert.error(l.response.data.message)}).finally(()=>{this.loading=!1})}}},B={class:"mp-0"},M={class:"text-h6"},L={class:"row"},z={class:"col-12"},F={class:"col-12"},H={class:"col-12"},W={class:"col-12"},Y={class:"col-12"};function Z(l,a,n,w,o,m){return g(),C(G,{class:"bg-grey-3 q-pa-md"},{default:i(()=>[s(P,{rows:o.users,columns:o.columns,title:"Usuarios","rows-per-page-options":[0],"row-key":"id",dense:"",filter:o.filter,loading:o.loading},{"body-cell-option":i(e=>[s(h,{"auto-width":""},{default:i(()=>[s(d,{flat:"",dense:"",icon:"edit",onClick:t=>m.userEdit(e.row)},{default:i(()=>[s(c,null,{default:i(()=>[u("Editar")]),_:1})]),_:2},1032,["onClick"]),s(d,{flat:"",dense:"",icon:"delete",onClick:t=>m.userDelete(e.row)},{default:i(()=>[s(c,null,{default:i(()=>[u("Eliminar")]),_:1})]),_:2},1032,["onClick"]),s(d,{flat:"",dense:"",icon:"vpn_key",onClick:t=>m.userChangePassword(e.row)},{default:i(()=>[s(c,null,{default:i(()=>[u("Cambiar Contrase\xF1a")]),_:1})]),_:2},1032,["onClick"])]),_:2},1024)]),"body-cell-role":i(e=>[s(h,{props:e},{default:i(()=>[s(v,{dense:"","text-color":"white",style:D(`background-color: ${e.row.role==="ADMIN"?"red":e.row.role==="APODERADO"?"indigo":e.row.role==="ENCARGADO PIE"?"green":e.row.role==="DOCENTE"?"orange":"blue"}`)},{default:i(()=>[u(f(e.row.role==="ADMIN"?"Admin":e.row.role==="APODERADO"?"Apoderado":e.row.role==="ENCARGADO PIE"?"Encargado PIE":e.row.role==="DOCENTE"?"Docente":e.row.role==="ADMIN COLEGIO"?"Admin Colegio":"Asistente Educativo"),1)]),_:2},1032,["style"])]),_:2},1032,["props"])]),"top-right":i(()=>[s(d,{outline:"",dense:"",icon:"add_circle",onClick:m.userAdd,label:"Agregar","no-caps":"",loading:o.loading},{default:i(()=>[s(c,null,{default:i(()=>[u("Agregar")]),_:1})]),_:1},8,["onClick","loading"]),s(p,{modelValue:o.filter,"onUpdate:modelValue":a[0]||(a[0]=e=>o.filter=e),dense:"",class:"q-ml-md",debounce:"300",placeholder:"Buscar",outlined:"",clearable:""},{append:i(()=>[s(_,{name:"search"})]),_:1},8,["modelValue"])]),"body-cell-colegio":i(e=>[s(h,{"auto-width":""},{default:i(()=>{var t;return[s(v,{dense:"","text-color":"white",style:D(`background-color: #${(t=e.row.colegio)==null?void 0:t.color}`)},{default:i(()=>{var b;return[u(f((b=e.row.colegio)==null?void 0:b.nombre),1)]}),_:2},1032,["style"])]}),_:2},1024)]),"body-cell-estudiantes":i(e=>[s(h,{"auto-width":""},{default:i(()=>[r("ul",B,[(g(!0),A(I,null,x(e.row.students,t=>(g(),A("li",{class:"pm-0",key:t.id},f(l.$filters.capitalize(t.name)),1))),128))])]),_:2},1024)]),_:1},8,["rows","columns","filter","loading"]),s(S,{modelValue:o.userDialog,"onUpdate:modelValue":a[8]||(a[8]=e=>o.userDialog=e),persistent:""},{default:i(()=>[s(Q,{style:{width:"250px","max-width":"90vw"}},{default:i(()=>[s(E,{class:"row items-center q-pb-none"},{default:i(()=>[r("div",M,f(o.user.id?"Editar":"Agregar")+" Cliente",1),s(U),s(d,{flat:"",dense:"",icon:"close",onClick:a[1]||(a[1]=e=>o.userDialog=!1)})]),_:1}),s(T,{onSubmit:m.userSave},{default:i(()=>[s(E,null,{default:i(()=>[r("div",L,[r("div",z,[s(p,{modelValue:o.user.name,"onUpdate:modelValue":a[2]||(a[2]=e=>o.user.name=e),label:"Nombre",outlined:"",dense:"",rules:[e=>!!e||"Campo requerido"]},null,8,["modelValue","rules"])]),r("div",F,[s(p,{modelValue:o.user.username,"onUpdate:modelValue":a[3]||(a[3]=e=>o.user.username=e),label:"Usuario",outlined:"",dense:"",rules:[e=>!!e||"Campo requerido"]},null,8,["modelValue","rules"])]),r("div",H,[o.user.id?k("",!0):(g(),C(p,{key:0,modelValue:o.user.password,"onUpdate:modelValue":a[5]||(a[5]=e=>o.user.password=e),label:"Contrase\xF1a",outlined:"",dense:"",rules:[e=>!!e||"Campo requerido"],type:o.passwordShow?"text":"password"},{append:i(()=>[s(_,{name:o.passwordShow?"visibility":"visibility_off",onClick:a[4]||(a[4]=e=>o.passwordShow=!o.passwordShow)},null,8,["name"])]),_:1},8,["modelValue","rules","type"]))]),r("div",W,[s(y,{modelValue:o.user.role,"onUpdate:modelValue":a[6]||(a[6]=e=>o.user.role=e),label:"Rol",outlined:"",dense:"",options:o.roles,rules:[e=>!!e||"Campo requerido"],"emit-value":"","map-options":""},null,8,["modelValue","options","rules"])]),r("div",Y,[s(y,{modelValue:o.user.colegio_id,"onUpdate:modelValue":a[7]||(a[7]=e=>o.user.colegio_id=e),label:"Colegio",outlined:"",dense:"",options:o.colegios,rules:[e=>!!e||"Campo requerido"],"emit-value":"","map-options":"","option-value":"id","option-label":"nombre"},null,8,["modelValue","options","rules"])])])]),_:1}),s(O,{align:"right"},{default:i(()=>[N(s(d,{flat:"",label:"Cancelar",loading:o.loading},null,8,["loading"]),[[R]]),s(d,{color:"primary",label:"Guardar",type:"submit",loading:o.loading},null,8,["loading"])]),_:1})]),_:1},8,["onSubmit"])]),_:1})]),_:1},8,["modelValue"])]),_:1})}var ie=V(q,[["render",Z]]);export{ie as default};
