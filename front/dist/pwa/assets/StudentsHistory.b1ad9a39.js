import{p as Ga,d as Va,h as E,x as Ba,b0 as Li,v as bi,U as N,am as Me,c as Za,C as Qa,F as Ja,ba as Ka,r as tt,a as Q,w as vi,J as Xa,o as en,g as tn,A as an,K as nn,ai as sn,_ as Oi,Q as R,R as $,S as h,T as m,V as p,$ as qe,a0 as Nt,a1 as It,aA as G,aB as le,W as M,Z as Rt,aE as Mi,aF as jt,L as it,Y as Ce,P as rn,bb as at,aD as on}from"./index.6cfafacc.js";import{f as ln,g as dn,h as cn,Q as We,d as Ei,b as pn,a as Ti,C as nt,i as un}from"./ClosePopup.b7f8099f.js";import{Q as Pi,a as mn}from"./QBtnDropdown.48afd70f.js";import{c as q,a as ke,d as Ot}from"./format.0f6b8801.js";import{Q as _n}from"./QPage.1722d5fe.js";import{Q as fn}from"./QTooltip.d48ad3bf.js";import"./position-engine.9cf8183c.js";function Yi(e,t){if(t&&e===t)return null;const i=e.nodeName.toLowerCase();if(["div","li","ul","ol","blockquote"].includes(i)===!0)return e;const a=window.getComputedStyle?window.getComputedStyle(e):e.currentStyle,n=a.display;return n==="block"||n==="table"?e:Yi(e.parentNode)}function Mt(e,t,i){return!e||e===document.body?!1:i===!0&&e===t||(t===document?document.body:t).contains(e.parentNode)}function Ai(e,t,i){if(i||(i=document.createRange(),i.selectNode(e),i.setStart(e,0)),t.count===0)i.setEnd(e,t.count);else if(t.count>0)if(e.nodeType===Node.TEXT_NODE)e.textContent.length<t.count?t.count-=e.textContent.length:(i.setEnd(e,t.count),t.count=0);else for(let a=0;t.count!==0&&a<e.childNodes.length;a++)i=Ai(e.childNodes[a],t,i);return i}const gn=/^https?:\/\//;class hn{constructor(t,i){this.el=t,this.eVm=i,this._range=null}get selection(){if(this.el){const t=document.getSelection();if(Mt(t.anchorNode,this.el,!0)&&Mt(t.focusNode,this.el,!0))return t}return null}get hasSelection(){return this.selection!==null?this.selection.toString().length!==0:!1}get range(){const t=this.selection;return t!==null&&t.rangeCount?t.getRangeAt(0):this._range}get parent(){const t=this.range;if(t!==null){const i=t.startContainer;return i.nodeType===document.ELEMENT_NODE?i:i.parentNode}return null}get blockParent(){const t=this.parent;return t!==null?Yi(t,this.el):null}save(t=this.range){t!==null&&(this._range=t)}restore(t=this._range){const i=document.createRange(),a=document.getSelection();t!==null?(i.setStart(t.startContainer,t.startOffset),i.setEnd(t.endContainer,t.endOffset),a.removeAllRanges(),a.addRange(i)):(a.selectAllChildren(this.el),a.collapseToEnd())}savePosition(){let t=-1,i;const a=document.getSelection(),n=this.el.parentNode;if(a.focusNode&&Mt(a.focusNode,n))for(i=a.focusNode,t=a.focusOffset;i&&i!==n;)i!==this.el&&i.previousSibling?(i=i.previousSibling,t+=i.textContent.length):i=i.parentNode;this.savedPos=t}restorePosition(t=0){if(this.savedPos>0&&this.savedPos<t){const i=window.getSelection(),a=Ai(this.el,{count:this.savedPos});a&&(a.collapse(!1),i.removeAllRanges(),i.addRange(a))}}hasParent(t,i){const a=i?this.parent:this.blockParent;return a!==null?a.nodeName.toLowerCase()===t.toLowerCase():!1}hasParents(t,i,a=this.parent){return a===null?!1:t.includes(a.nodeName.toLowerCase())===!0?!0:i===!0?this.hasParents(t,i,a.parentNode):!1}is(t,i){if(this.selection===null)return!1;switch(t){case"formatBlock":return i==="DIV"&&this.parent===this.el||this.hasParent(i,i==="PRE");case"link":return this.hasParent("A",!0);case"fontSize":return document.queryCommandValue(t)===i;case"fontName":const a=document.queryCommandValue(t);return a===`"${i}"`||a===i;case"fullscreen":return this.eVm.inFullscreen.value;case"viewsource":return this.eVm.isViewingSource.value;case void 0:return!1;default:const n=document.queryCommandState(t);return i!==void 0?n===i:n}}getParentAttribute(t){return this.parent!==null?this.parent.getAttribute(t):null}can(t){if(t==="outdent")return this.hasParents(["blockquote","li"],!0);if(t==="indent")return this.hasParents(["li"],!0);if(t==="link")return this.selection!==null||this.is("link")}apply(t,i,a=Ga){if(t==="formatBlock")["BLOCKQUOTE","H1","H2","H3","H4","H5","H6"].includes(i)&&this.is(t,i)&&(t="outdent",i=null),i==="PRE"&&this.is(t,"PRE")&&(i="P");else if(t==="print"){a();const n=window.open();n.document.write(`
        <!doctype html>
        <html>
          <head>
            <title>Print - ${document.title}</title>
          </head>
          <body>
            <div>${this.el.innerHTML}</div>
          </body>
        </html>
      `),n.print(),n.close();return}else if(t==="link"){const n=this.getParentAttribute("href");if(n===null){const s=this.selectWord(this.selection),r=s?s.toString():"";if(!r.length&&(!this.range||!this.range.cloneContents().querySelector("img")))return;this.eVm.editLinkUrl.value=gn.test(r)?r:"https://",document.execCommand("createLink",!1,this.eVm.editLinkUrl.value),this.save(s.getRangeAt(0))}else this.eVm.editLinkUrl.value=n,this.range.selectNodeContents(this.parent),this.save();return}else if(t==="fullscreen"){this.eVm.toggleFullscreen(),a();return}else if(t==="viewsource"){this.eVm.isViewingSource.value=this.eVm.isViewingSource.value===!1,this.eVm.setContent(this.eVm.props.modelValue),a();return}document.execCommand(t,!1,i),a()}selectWord(t){if(t===null||t.isCollapsed!==!0||t.modify===void 0)return t;const i=document.createRange();i.setStart(t.anchorNode,t.anchorOffset),i.setEnd(t.focusNode,t.focusOffset);const a=i.collapsed?["backward","forward"]:["forward","backward"];i.detach();const n=t.focusNode,s=t.focusOffset;return t.collapse(t.anchorNode,t.anchorOffset),t.modify("move",a[0],"character"),t.modify("move",a[1],"word"),t.extend(n,s),t.modify("extend",a[1],"character"),t.modify("extend",a[0],"word"),t}}function Ni(e,t,i){t.handler?t.handler(e,i,i.caret):i.runCmd(t.cmd,t.param)}function Vt(e){return E("div",{class:"q-editor__toolbar-group"},e)}function Ii(e,t,i,a=!1){const n=a||(t.type==="toggle"?t.toggled?t.toggled(e):t.cmd&&e.caret.is(t.cmd,t.param):!1),s=[];if(t.tip&&e.$q.platform.is.desktop){const r=t.key?E("div",[E("small",`(CTRL + ${String.fromCharCode(t.key)})`)]):null;s.push(E(fn,{delay:1e3},()=>[E("div",{innerHTML:t.tip}),r]))}return E(N,{...e.buttonProps.value,icon:t.icon!==null?t.icon:void 0,color:n?t.toggleColor||e.props.toolbarToggleColor:t.color||e.props.toolbarColor,textColor:n&&!e.props.toolbarPush?null:t.textColor||e.props.toolbarTextColor,label:t.label,disable:t.disable?typeof t.disable=="function"?t.disable(e):!0:!1,size:"sm",onClick(r){i&&i(),Ni(r,t,e)}},()=>s)}function yn(e,t){const i=t.list==="only-icons";let a=t.label,n=t.icon!==null?t.icon:void 0,s,r;function o(){b.component.proxy.hide()}if(i)r=t.options.map(y=>{const P=y.type===void 0?e.caret.is(y.cmd,y.param):!1;return P&&(a=y.tip,n=y.icon!==null?y.icon:void 0),Ii(e,y,o,P)}),s=e.toolbarBackgroundClass.value,r=[Vt(r)];else{const y=e.props.toolbarToggleColor!==void 0?`text-${e.props.toolbarToggleColor}`:null,P=e.props.toolbarTextColor!==void 0?`text-${e.props.toolbarTextColor}`:null,j=t.list==="no-icons";r=t.options.map(A=>{const Xe=A.disable?A.disable(e):!1,ge=A.type===void 0?e.caret.is(A.cmd,A.param):!1;ge&&(a=A.tip,n=A.icon!==null?A.icon:void 0);const Re=A.htmlTip;return E(ke,{active:ge,activeClass:y,clickable:!0,disable:Xe,dense:!0,onClick(je){o(),e.contentRef.value!==null&&e.contentRef.value.focus(),e.caret.restore(),Ni(je,A,e)}},()=>[j===!0?null:E(q,{class:ge?y:P,side:!0},()=>E(Me,{name:A.icon!==null?A.icon:void 0})),E(q,Re?()=>E("div",{class:"text-no-wrap",innerHTML:A.htmlTip}):A.tip?()=>E("div",{class:"text-no-wrap"},A.tip):void 0)])}),s=[e.toolbarBackgroundClass.value,P]}const f=t.highlight&&a!==t.label,b=E(Pi,{...e.buttonProps.value,noCaps:!0,noWrap:!0,color:f?e.props.toolbarToggleColor:e.props.toolbarColor,textColor:f&&!e.props.toolbarPush?null:e.props.toolbarTextColor,label:t.fixedLabel?t.label:a,icon:t.fixedIcon?t.icon!==null?t.icon:void 0:n,contentClass:s,onShow:y=>e.emit("dropdownShow",y),onHide:y=>e.emit("dropdownHide",y),onBeforeShow:y=>e.emit("dropdownBeforeShow",y),onBeforeHide:y=>e.emit("dropdownBeforeHide",y)},()=>r);return b}function bn(e){if(e.caret)return e.buttons.value.filter(t=>!e.isViewingSource.value||t.find(i=>i.cmd==="viewsource")).map(t=>Vt(t.map(i=>e.isViewingSource.value&&i.cmd!=="viewsource"?!1:i.type==="slot"?Va(e.slots[i.slot]):i.type==="dropdown"?yn(e,i):Ii(e,i))))}function vn(e,t,i,a={}){const n=Object.keys(a);if(n.length===0)return{};const s={default_font:{cmd:"fontName",param:e,icon:i,tip:t}};return n.forEach(r=>{const o=a[r];s[r]={cmd:"fontName",param:o,icon:i,tip:o,htmlTip:`<font face="${o}">${o}</font>`}}),s}function wn(e){if(e.caret){const t=e.props.toolbarColor||e.props.toolbarTextColor;let i=e.editLinkUrl.value;const a=()=>{e.caret.restore(),i!==e.editLinkUrl.value&&document.execCommand("createLink",!1,i===""?" ":i),e.editLinkUrl.value=null};return[E("div",{class:`q-mx-xs text-${t}`},`${e.$q.lang.editor.url}: `),E("input",{key:"qedt_btm_input",class:"col q-editor__link-input",value:i,onInput:n=>{Ba(n),i=n.target.value},onKeydown:n=>{if(Li(n)!==!0)switch(n.keyCode){case 13:return bi(n),a();case 27:bi(n),e.caret.restore(),(!e.editLinkUrl.value||e.editLinkUrl.value==="https://")&&document.execCommand("unlink"),e.editLinkUrl.value=null;break}}}),Vt([E(N,{key:"qedt_btm_rem",tabindex:-1,...e.buttonProps.value,label:e.$q.lang.label.remove,noCaps:!0,onClick:()=>{e.caret.restore(),document.execCommand("unlink"),e.editLinkUrl.value=null}}),E(N,{key:"qedt_btm_upd",...e.buttonProps.value,label:e.$q.lang.label.update,noCaps:!0,onClick:a})])]}}const Cn=Object.prototype.toString,Et=Object.prototype.hasOwnProperty,kn=new Set(["Boolean","Number","String","Function","Array","Date","RegExp"].map(e=>"[object "+e+"]"));function wi(e){if(e!==Object(e)||kn.has(Cn.call(e))===!0||e.constructor&&Et.call(e,"constructor")===!1&&Et.call(e.constructor.prototype,"isPrototypeOf")===!1)return!1;let t;for(t in e);return t===void 0||Et.call(e,t)}function Ri(){let e,t,i,a,n,s,r=arguments[0]||{},o=1,f=!1;const b=arguments.length;for(typeof r=="boolean"&&(f=r,r=arguments[1]||{},o=2),Object(r)!==r&&typeof r!="function"&&(r={}),b===o&&(r=this,o--);o<b;o++)if((e=arguments[o])!==null)for(t in e)i=r[t],a=e[t],r!==a&&(f===!0&&a&&((n=Array.isArray(a))||wi(a)===!0)?(n===!0?s=Array.isArray(i)===!0?i:[]:s=wi(i)===!0?i:{},r[t]=Ri(f,s,a)):a!==void 0&&(r[t]=a));return r}var xn=Za({name:"QEditor",props:{...Qa,...ln,modelValue:{type:String,required:!0},readonly:Boolean,disable:Boolean,minHeight:{type:String,default:"10rem"},maxHeight:String,height:String,definitions:Object,fonts:Object,placeholder:String,toolbar:{type:Array,validator:e=>e.length===0||e.every(t=>t.length),default(){return[["left","center","right","justify"],["bold","italic","underline","strike"],["undo","redo"]]}},toolbarColor:String,toolbarBg:String,toolbarTextColor:String,toolbarToggleColor:{type:String,default:"primary"},toolbarOutline:Boolean,toolbarPush:Boolean,toolbarRounded:Boolean,paragraphTag:{type:String,validator:e=>["div","p"].includes(e),default:"div"},contentStyle:Object,contentClass:[Object,Array,String],square:Boolean,flat:Boolean,dense:Boolean},emits:[...dn,"update:modelValue","keydown","click","mouseup","keyup","touchend","focus","blur","dropdownShow","dropdownHide","dropdownBeforeShow","dropdownBeforeHide","linkShow","linkHide"],setup(e,{slots:t,emit:i}){const{proxy:a}=tn(),{$q:n}=a,s=Ja(e,n),{inFullscreen:r,toggleFullscreen:o}=cn(),f=Ka(),b=tt(null),y=tt(null),P=tt(null),j=tt(!1),A=Q(()=>!e.readonly&&!e.disable);let Xe,ge,Re=e.modelValue;document.execCommand("defaultParagraphSeparator",!1,e.paragraphTag),Xe=window.getComputedStyle(document.body).fontFamily;const je=Q(()=>e.toolbarBg?` bg-${e.toolbarBg}`:""),Ma=Q(()=>{const l=e.toolbarOutline!==!0&&e.toolbarPush!==!0;return{type:"a",flat:l,noWrap:!0,outline:e.toolbarOutline,push:e.toolbarPush,rounded:e.toolbarRounded,dense:!0,color:e.toolbarColor,disable:!A.value,size:"sm"}}),et=Q(()=>{const l=n.lang.editor,c=n.iconSet.editor;return{bold:{cmd:"bold",icon:c.bold,tip:l.bold,key:66},italic:{cmd:"italic",icon:c.italic,tip:l.italic,key:73},strike:{cmd:"strikeThrough",icon:c.strikethrough,tip:l.strikethrough,key:83},underline:{cmd:"underline",icon:c.underline,tip:l.underline,key:85},unordered:{cmd:"insertUnorderedList",icon:c.unorderedList,tip:l.unorderedList},ordered:{cmd:"insertOrderedList",icon:c.orderedList,tip:l.orderedList},subscript:{cmd:"subscript",icon:c.subscript,tip:l.subscript,htmlTip:"x<subscript>2</subscript>"},superscript:{cmd:"superscript",icon:c.superscript,tip:l.superscript,htmlTip:"x<superscript>2</superscript>"},link:{cmd:"link",disable:D=>D.caret&&!D.caret.can("link"),icon:c.hyperlink,tip:l.hyperlink,key:76},fullscreen:{cmd:"fullscreen",icon:c.toggleFullscreen,tip:l.toggleFullscreen,key:70},viewsource:{cmd:"viewsource",icon:c.viewSource,tip:l.viewSource},quote:{cmd:"formatBlock",param:"BLOCKQUOTE",icon:c.quote,tip:l.quote,key:81},left:{cmd:"justifyLeft",icon:c.left,tip:l.left},center:{cmd:"justifyCenter",icon:c.center,tip:l.center},right:{cmd:"justifyRight",icon:c.right,tip:l.right},justify:{cmd:"justifyFull",icon:c.justify,tip:l.justify},print:{type:"no-state",cmd:"print",icon:c.print,tip:l.print,key:80},outdent:{type:"no-state",disable:D=>D.caret&&!D.caret.can("outdent"),cmd:"outdent",icon:c.outdent,tip:l.outdent},indent:{type:"no-state",disable:D=>D.caret&&!D.caret.can("indent"),cmd:"indent",icon:c.indent,tip:l.indent},removeFormat:{type:"no-state",cmd:"removeFormat",icon:c.removeFormat,tip:l.removeFormat},hr:{type:"no-state",cmd:"insertHorizontalRule",icon:c.hr,tip:l.hr},undo:{type:"no-state",cmd:"undo",icon:c.undo,tip:l.undo,key:90},redo:{type:"no-state",cmd:"redo",icon:c.redo,tip:l.redo,key:89},h1:{cmd:"formatBlock",param:"H1",icon:c.heading1||c.heading,tip:l.heading1,htmlTip:`<h1 class="q-ma-none">${l.heading1}</h1>`},h2:{cmd:"formatBlock",param:"H2",icon:c.heading2||c.heading,tip:l.heading2,htmlTip:`<h2 class="q-ma-none">${l.heading2}</h2>`},h3:{cmd:"formatBlock",param:"H3",icon:c.heading3||c.heading,tip:l.heading3,htmlTip:`<h3 class="q-ma-none">${l.heading3}</h3>`},h4:{cmd:"formatBlock",param:"H4",icon:c.heading4||c.heading,tip:l.heading4,htmlTip:`<h4 class="q-ma-none">${l.heading4}</h4>`},h5:{cmd:"formatBlock",param:"H5",icon:c.heading5||c.heading,tip:l.heading5,htmlTip:`<h5 class="q-ma-none">${l.heading5}</h5>`},h6:{cmd:"formatBlock",param:"H6",icon:c.heading6||c.heading,tip:l.heading6,htmlTip:`<h6 class="q-ma-none">${l.heading6}</h6>`},p:{cmd:"formatBlock",param:e.paragraphTag,icon:c.heading,tip:l.paragraph},code:{cmd:"formatBlock",param:"PRE",icon:c.code,htmlTip:`<code>${l.code}</code>`},"size-1":{cmd:"fontSize",param:"1",icon:c.size1||c.size,tip:l.size1,htmlTip:`<font size="1">${l.size1}</font>`},"size-2":{cmd:"fontSize",param:"2",icon:c.size2||c.size,tip:l.size2,htmlTip:`<font size="2">${l.size2}</font>`},"size-3":{cmd:"fontSize",param:"3",icon:c.size3||c.size,tip:l.size3,htmlTip:`<font size="3">${l.size3}</font>`},"size-4":{cmd:"fontSize",param:"4",icon:c.size4||c.size,tip:l.size4,htmlTip:`<font size="4">${l.size4}</font>`},"size-5":{cmd:"fontSize",param:"5",icon:c.size5||c.size,tip:l.size5,htmlTip:`<font size="5">${l.size5}</font>`},"size-6":{cmd:"fontSize",param:"6",icon:c.size6||c.size,tip:l.size6,htmlTip:`<font size="6">${l.size6}</font>`},"size-7":{cmd:"fontSize",param:"7",icon:c.size7||c.size,tip:l.size7,htmlTip:`<font size="7">${l.size7}</font>`}}}),gi=Q(()=>{const l=e.definitions||{},c=e.definitions||e.fonts?Ri(!0,{},et.value,l,vn(Xe,n.lang.editor.defaultFont,n.iconSet.editor.font,e.fonts)):et.value;return e.toolbar.map(D=>D.map(I=>{if(I.options)return{type:"dropdown",icon:I.icon,label:I.label,size:"sm",dense:!0,fixedLabel:I.fixedLabel,fixedIcon:I.fixedIcon,highlight:I.highlight,list:I.list,options:I.options.map($a=>c[$a])};const se=c[I];return se?se.type==="no-state"||l[I]&&(se.cmd===void 0||et.value[se.cmd]&&et.value[se.cmd].type==="no-state")?se:Object.assign({type:"toggle"},se):{type:"slot",slot:I}}))}),W={$q:n,props:e,slots:t,emit:i,inFullscreen:r,toggleFullscreen:o,runCmd:zt,isViewingSource:j,editLinkUrl:P,toolbarBackgroundClass:je,buttonProps:Ma,contentRef:y,buttons:gi,setContent:St};vi(()=>e.modelValue,l=>{Re!==l&&(Re=l,St(l,!0))}),vi(P,l=>{i(`link${l?"Show":"Hide"}`)});const Ea=Q(()=>e.toolbar&&e.toolbar.length!==0),Ta=Q(()=>{const l={},c=D=>{D.key&&(l[D.key]={cmd:D.cmd,param:D.param})};return gi.value.forEach(D=>{D.forEach(I=>{I.options?I.options.forEach(c):c(I)})}),l}),Pa=Q(()=>r.value?e.contentStyle:[{minHeight:e.minHeight,height:e.height,maxHeight:e.maxHeight},e.contentStyle]),Ya=Q(()=>`q-editor q-editor--${j.value===!0?"source":"default"}`+(e.disable===!0?" disabled":"")+(r.value===!0?" fullscreen column":"")+(e.square===!0?" q-editor--square no-border-radius":"")+(e.flat===!0?" q-editor--flat":"")+(e.dense===!0?" q-editor--dense":"")+(s.value===!0?" q-editor--dark q-dark":"")),Aa=Q(()=>[e.contentClass,"q-editor__content",{col:r.value,"overflow-auto":r.value||e.maxHeight}]),Na=Q(()=>e.disable===!0?{"aria-disabled":"true"}:{});function Ia(){if(y.value!==null){const l=`inner${j.value===!0?"Text":"HTML"}`,c=y.value[l];c!==e.modelValue&&(Re=c,i("update:modelValue",c))}}function Ra(l){if(i("keydown",l),l.ctrlKey!==!0||Li(l)===!0){he();return}const c=l.keyCode,D=Ta.value[c];if(D!==void 0){const{cmd:I,param:se}=D;an(l),zt(I,se,!1)}}function ja(l){he(),i("click",l)}function Fa(l){if(y.value!==null){const{scrollTop:c,scrollHeight:D}=y.value;ge=D-c}W.caret.save(),i("blur",l)}function Ua(l){nn(()=>{y.value!==null&&ge!==void 0&&(y.value.scrollTop=y.value.scrollHeight-ge)}),i("focus",l)}function qa(l){const c=b.value;if(c!==null&&c.contains(l.target)===!0&&(l.relatedTarget===null||c.contains(l.relatedTarget)!==!0)){const D=`inner${j.value===!0?"Text":"HTML"}`;W.caret.restorePosition(y.value[D].length),he()}}function Wa(l){const c=b.value;c!==null&&c.contains(l.target)===!0&&(l.relatedTarget===null||c.contains(l.relatedTarget)!==!0)&&(W.caret.savePosition(),he())}function hi(){ge=void 0}function yi(l){W.caret.save()}function St(l,c){if(y.value!==null){c===!0&&W.caret.savePosition();const D=`inner${j.value===!0?"Text":"HTML"}`;y.value[D]=l,c===!0&&(W.caret.restorePosition(y.value[D].length),he())}}function zt(l,c,D=!0){Lt(),W.caret.restore(),W.caret.apply(l,c,()=>{Lt(),W.caret.save(),D&&he()})}function he(){setTimeout(()=>{P.value=null,a.$forceUpdate()},1)}function Lt(){sn(()=>{y.value!==null&&y.value.focus({preventScroll:!0})})}function Ha(){return y.value}return Xa(()=>{W.caret=a.caret=new hn(y.value,W),St(e.modelValue),he(),document.addEventListener("selectionchange",yi)}),en(()=>{document.removeEventListener("selectionchange",yi)}),Object.assign(a,{runCmd:zt,refreshToolbar:he,focus:Lt,getContentEl:Ha}),()=>{let l;if(Ea.value){const c=[E("div",{key:"qedt_top",class:"q-editor__toolbar row no-wrap scroll-x"+je.value},bn(W))];P.value!==null&&c.push(E("div",{key:"qedt_btm",class:"q-editor__toolbar row no-wrap items-center scroll-x"+je.value},wn(W))),l=E("div",{key:"toolbar_ctainer",class:"q-editor__toolbars-container"},c)}return E("div",{ref:b,class:Ya.value,style:{height:r.value===!0?"100%":null},...Na.value,onFocusin:qa,onFocusout:Wa},[l,E("div",{ref:y,style:Pa.value,class:Aa.value,contenteditable:A.value,placeholder:e.placeholder,...f.listeners.value,onInput:Ia,onKeydown:Ra,onClick:ja,onBlur:Fa,onFocus:Ua,onMousedown:hi,onTouchstartPassive:hi})])}}});class ze{static fichaSeguimiento(t,i){return`<p style='margin-top:0cm;margin-right:0cm;margin-bottom:8.0pt;margin-left:0cm;font-size:11.0pt;font-family:"Calibri",sans-serif;text-align:center;line-height:150%;'><span style='font-size:19px;line-height:150%;font-family:"Calibri Light",sans-serif;'>FICHA DE SEGUIMIENTO INDIVIDUALIZADA</span></p>
<p style='margin-top:0cm;margin-right:0cm;margin-bottom:8.0pt;margin-left:0cm;font-size:11.0pt;font-family:"Calibri",sans-serif;text-align:center;line-height:150%;'><span style='font-size:19px;line-height:150%;font-family:"Calibri Light",sans-serif;'>&nbsp;PARA DESREGULACI&Oacute;N EMOCIONAL</span></p>
<p style='margin-top:0cm;margin-right:0cm;margin-bottom:8.0pt;margin-left:0cm;font-size:11.0pt;font-family:"Calibri",sans-serif;line-height:150%;'><span style='font-size:19px;line-height:150%;font-family:"Calibri Light",sans-serif;'>&nbsp;</span></p>
<p style='margin-top:0cm;margin-right:0cm;margin-bottom:8.0pt;margin-left:0cm;font-size:11.0pt;font-family:"Calibri",sans-serif;line-height:150%;'><span style='font-size:19px;line-height:150%;font-family:"Calibri Light",sans-serif;'>Estudiante: ${t} </span></p>
<p style='margin-top:0cm;margin-right:0cm;margin-bottom:8.0pt;margin-left:0cm;font-size:11.0pt;font-family:"Calibri",sans-serif;line-height:150%;'><span style='font-size:19px;line-height:150%;font-family:"Calibri Light",sans-serif;'>Fecha: ${i}</span></p>
<p style='margin-top:0cm;margin-right:0cm;margin-bottom:8.0pt;margin-left:0cm;font-size:11.0pt;font-family:"Calibri",sans-serif;line-height:150%;'><span style='font-size:19px;line-height:150%;font-family:"Calibri Light",sans-serif;'>Evaluador: (<span style="color:red;">Nombre completo del evaluador, cargo y profesi&oacute;n</span>).</span></p>
<p style='margin-top:0cm;margin-right:0cm;margin-bottom:8.0pt;margin-left:0cm;font-size:11.0pt;font-family:"Calibri",sans-serif;line-height:150%;'><span style='font-size:19px;line-height:150%;font-family:"Calibri Light",sans-serif;'>Contexto: (<span style="color:red;">Descripci&oacute;n detallada del contexto en el que se observa la desregulaci&oacute;n, incluyendo la actividad que estaba realizando el estudiante, las personas que estaban presentes y cualquier otro factor relevante</span>.)</span></p>
<p style='margin-top:0cm;margin-right:0cm;margin-bottom:8.0pt;margin-left:0cm;font-size:11.0pt;font-family:"Calibri",sans-serif;line-height:150%;'><span style='font-size:19px;line-height:150%;font-family:"Calibri Light",sans-serif;'>________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________</span></p>
<p style='margin-top:0cm;margin-right:0cm;margin-bottom:8.0pt;margin-left:0cm;font-size:11.0pt;font-family:"Calibri",sans-serif;line-height:150%;'><span style='font-size:19px;line-height:150%;font-family:"Calibri Light",sans-serif;'>&nbsp;</span></p>
<p style='margin-top:0cm;margin-right:0cm;margin-bottom:8.0pt;margin-left:0cm;font-size:11.0pt;font-family:"Calibri",sans-serif;line-height:150%;'><strong><span style='font-size:19px;line-height:150%;font-family:"Calibri Light",sans-serif;'>DESCRIPCI&Oacute;N DETALLADA DE LA DESREGULACI&Oacute;N:</span></strong></p>
<p style='margin-top:0cm;margin-right:0cm;margin-bottom:8.0pt;margin-left:0cm;font-size:11.0pt;font-family:"Calibri",sans-serif;line-height:150%;'><strong><span style='font-size:19px;line-height:150%;font-family:"Calibri Light",sans-serif;'>1. Emoci&oacute;n predominante:</span></strong></p>
<p style='margin-top:0cm;margin-right:0cm;margin-bottom:8.0pt;margin-left:0cm;font-size:11.0pt;font-family:"Calibri",sans-serif;line-height:150%;'><span style='font-size:19px;line-height:150%;font-family:"Calibri Light",sans-serif;'>Seleccionar la emoci&oacute;n principal que el estudiante experiment&oacute; durante la desregulaci&oacute;n:</span></p>
<ol start="1" style="list-style-type: upper-alpha;">
    <li><span style='line-height:150%;font-family:"Calibri Light",sans-serif;'>Tristeza</span></li>
    <li><span style='line-height:150%;font-family:"Calibri Light",sans-serif;'>Ira</span></li>
    <li><span style='line-height:150%;font-family:"Calibri Light",sans-serif;'>Frustraci&oacute;n</span></li>
    <li><span style='line-height:150%;font-family:"Calibri Light",sans-serif;'>Ansiedad</span></li>
    <li><span style='line-height:150%;font-family:"Calibri Light",sans-serif;'>Miedo</span></li>
    <li><span style='line-height:150%;font-family:"Calibri Light",sans-serif;'>Otra: ________________________________________________</span></li>
</ol>
<p style='margin-top:0cm;margin-right:0cm;margin-bottom:8.0pt;margin-left:0cm;font-size:11.0pt;font-family:"Calibri",sans-serif;line-height:150%;'><span style='font-size:19px;line-height:150%;font-family:"Calibri Light",sans-serif;'>Describir la intensidad de la emoci&oacute;n en una escala de 1 a 10 (1 siendo la intensidad m&aacute;s baja y 10 la m&aacute;s alta): [<span style="color:red;">Especificar]</span></span></p>
<p style='margin-top:0cm;margin-right:0cm;margin-bottom:8.0pt;margin-left:0cm;font-size:11.0pt;font-family:"Calibri",sans-serif;line-height:150%;'><span style='font-size:19px;line-height:150%;font-family:"Calibri Light",sans-serif;'>&nbsp;</span></p>
<p style='margin-top:0cm;margin-right:0cm;margin-bottom:8.0pt;margin-left:0cm;font-size:11.0pt;font-family:"Calibri",sans-serif;line-height:150%;'><span style='font-size:19px;line-height:150%;font-family:"Calibri Light",sans-serif;'>&nbsp;</span></p>
<p style='margin-top:0cm;margin-right:0cm;margin-bottom:8.0pt;margin-left:0cm;font-size:11.0pt;font-family:"Calibri",sans-serif;line-height:150%;'><span style='font-size:19px;line-height:150%;font-family:"Calibri Light",sans-serif;'>&nbsp;</span></p>
<p style='margin-top:0cm;margin-right:0cm;margin-bottom:8.0pt;margin-left:0cm;font-size:11.0pt;font-family:"Calibri",sans-serif;line-height:150%;'><strong><span style='font-size:19px;line-height:150%;font-family:"Calibri Light",sans-serif;'>2. Manifestaciones f&iacute;sicas:</span></strong></p>
<p style='margin-top:0cm;margin-right:0cm;margin-bottom:8.0pt;margin-left:0cm;font-size:11.0pt;font-family:"Calibri",sans-serif;line-height:150%;'><span style='font-size:19px;line-height:150%;font-family:"Calibri Light",sans-serif;'>Describir en detalle las manifestaciones f&iacute;sicas que el estudiante present&oacute; durante la desregulaci&oacute;n, incluyendo:</span></p>
<ol start="1" style="list-style-type: upper-alpha;">
    <li><span style='line-height:150%;font-family:"Calibri Light",sans-serif;'>Llanto</span></li>
    <li><span style='line-height:150%;font-family:"Calibri Light",sans-serif;'>Temblor</span></li>
    <li><span style='line-height:150%;font-family:"Calibri Light",sans-serif;'>Sudoraci&oacute;n</span></li>
    <li><span style='line-height:150%;font-family:"Calibri Light",sans-serif;'>Aumento de la frecuencia card&iacute;aca</span></li>
    <li><span style='line-height:150%;font-family:"Calibri Light",sans-serif;'>Tensi&oacute;n muscular</span></li>
    <li><span style='line-height:150%;font-family:"Calibri Light",sans-serif;'>Rubor facial</span></li>
    <li><span style='line-height:150%;font-family:"Calibri Light",sans-serif;'>Dificultad para respirar</span></li>
    <li><span style='line-height:150%;font-family:"Calibri Light",sans-serif;'>N&aacute;useas</span></li>
    <li><span style='line-height:150%;font-family:"Calibri Light",sans-serif;'>Dolor de cabeza</span></li>
    <li><span style='line-height:150%;font-family:"Calibri Light",sans-serif;'>Otros: [Especificar]</span></li>
</ol>
<p style='margin-top:0cm;margin-right:0cm;margin-bottom:8.0pt;margin-left:0cm;font-size:11.0pt;font-family:"Calibri",sans-serif;line-height:150%;'><span style='font-size:19px;line-height:150%;font-family:"Calibri Light",sans-serif;'>3. Manifestaciones conductuales:</span></p>
<p style='margin-top:0cm;margin-right:0cm;margin-bottom:8.0pt;margin-left:0cm;font-size:11.0pt;font-family:"Calibri",sans-serif;line-height:150%;'><span style='font-size:19px;line-height:150%;font-family:"Calibri Light",sans-serif;'>Describir en detalle las manifestaciones conductuales que el estudiante present&oacute; durante la desregulaci&oacute;n, incluyendo:</span></p>
<ol start="1" style="list-style-type: upper-alpha;">
    <li><span style='line-height:150%;font-family:"Calibri Light",sans-serif;'>Agresi&oacute;n verbal (insultos, gritos)</span></li>
    <li><span style='line-height:150%;font-family:"Calibri Light",sans-serif;'>Agresi&oacute;n f&iacute;sica (golpes, patadas)</span></li>
    <li><span style='line-height:150%;font-family:"Calibri Light",sans-serif;'>Autolesiones</span></li>
    <li><span style='line-height:150%;font-family:"Calibri Light",sans-serif;'>Aislamiento</span></li>
    <li><span style='line-height:150%;font-family:"Calibri Light",sans-serif;'>Llanto inconsolable</span></li>
    <li><span style='line-height:150%;font-family:"Calibri Light",sans-serif;'>Negativa a cooperar</span></li>
    <li><span style='line-height:150%;font-family:"Calibri Light",sans-serif;'>Desobediencia</span></li>
    <li><span style='line-height:150%;font-family:"Calibri Light",sans-serif;'>Comportamiento impulsivo</span></li>
    <li><span style='line-height:150%;font-family:"Calibri Light",sans-serif;'>Otros: ________________________________________________________________</span></li>
</ol>
<p style='margin-top:0cm;margin-right:0cm;margin-bottom:8.0pt;margin-left:36.0pt;font-size:11.0pt;font-family:"Calibri",sans-serif;line-height:150%;'><strong><span style='font-size:19px;line-height:150%;font-family:"Calibri Light",sans-serif;'>&nbsp;</span></strong></p>
<p style='margin-top:0cm;margin-right:0cm;margin-bottom:8.0pt;margin-left:0cm;font-size:11.0pt;font-family:"Calibri",sans-serif;line-height:150%;'><strong><span style='font-size:19px;line-height:150%;font-family:"Calibri Light",sans-serif;'>4. Duraci&oacute;n:</span></strong></p>
<p style='margin-top:0cm;margin-right:0cm;margin-bottom:8.0pt;margin-left:0cm;font-size:11.0pt;font-family:"Calibri",sans-serif;line-height:150%;'><span style='font-size:19px;line-height:150%;font-family:"Calibri Light",sans-serif;'>Indicar la duraci&oacute;n total de la desregulaci&oacute;n en minutos: (Especificar)</span></p>
<p style='margin-top:0cm;margin-right:0cm;margin-bottom:8.0pt;margin-left:0cm;font-size:11.0pt;font-family:"Calibri",sans-serif;line-height:150%;'><span style='font-size:19px;line-height:150%;font-family:"Calibri Light",sans-serif;'>________________________________________________________________________________________________________________________________________________________________</span></p>
<p style='margin-top:0cm;margin-right:0cm;margin-bottom:8.0pt;margin-left:0cm;font-size:11.0pt;font-family:"Calibri",sans-serif;line-height:150%;'><span style='font-size:19px;line-height:150%;font-family:"Calibri Light",sans-serif;'>Intervenci&oacute;n realizada:</span></p>
<p style='margin-top:0cm;margin-right:0cm;margin-bottom:8.0pt;margin-left:0cm;font-size:11.0pt;font-family:"Calibri",sans-serif;line-height:150%;'><span style='font-size:19px;line-height:150%;font-family:"Calibri Light",sans-serif;'>1. Estrategias utilizadas para calmar al estudiante:</span></p>
<p style='margin-top:0cm;margin-right:0cm;margin-bottom:8.0pt;margin-left:0cm;font-size:11.0pt;font-family:"Calibri",sans-serif;line-height:150%;'><span style='font-size:19px;line-height:150%;font-family:"Calibri Light",sans-serif;'>Describir las estrategias espec&iacute;ficas que se utilizaron para calmar al estudiante durante la desregulaci&oacute;n, incluyendo:</span></p>
<ol start="1" style="list-style-type: upper-alpha;">
    <li><span style='line-height:150%;font-family:"Calibri Light",sans-serif;'>Respiraci&oacute;n profunda</span></li>
    <li><span style='line-height:150%;font-family:"Calibri Light",sans-serif;'>T&eacute;cnicas de relajaci&oacute;n muscular</span></li>
    <li><span style='line-height:150%;font-family:"Calibri Light",sans-serif;'>Visualizaci&oacute;n</span></li>
    <li><span style='line-height:150%;font-family:"Calibri Light",sans-serif;'>Hablar con el estudiante en un tono calmado y tranquilizador</span></li>
    <li><span style='line-height:150%;font-family:"Calibri Light",sans-serif;'>Ofrecer apoyo emocional</span></li>
    <li><span style='line-height:150%;font-family:"Calibri Light",sans-serif;'>Brindar un espacio seguro y tranquilo</span></li>
    <li><span style='line-height:150%;font-family:"Calibri Light",sans-serif;'>Retirar al estudiante del contexto</span></li>
    <li><span style='line-height:150%;font-family:"Calibri Light",sans-serif;'>Otros: ___________________________________________________________________</span></li>
</ol>
<p style='margin-top:0cm;margin-right:0cm;margin-bottom:8.0pt;margin-left:0cm;font-size:11.0pt;font-family:"Calibri",sans-serif;line-height:150%;'><span style='font-size:19px;line-height:150%;font-family:"Calibri Light",sans-serif;'>2. Efectividad de las estrategias:</span></p>
<p style='margin-top:0cm;margin-right:0cm;margin-bottom:8.0pt;margin-left:0cm;font-size:11.0pt;font-family:"Calibri",sans-serif;line-height:150%;'><span style='font-size:19px;line-height:150%;font-family:"Calibri Light",sans-serif;'>Evaluar la eficacia de las estrategias utilizadas para calmar al estudiante, indicando si fueron:</span></p>
<ol start="1" style="list-style-type: upper-alpha;">
    <li><span style='line-height:150%;font-family:"Calibri Light",sans-serif;'>Muy efectivas</span></li>
    <li><span style='line-height:150%;font-family:"Calibri Light",sans-serif;'>Efectivas</span></li>
    <li><span style='line-height:150%;font-family:"Calibri Light",sans-serif;'>Poco efectivas</span></li>
    <li><span style='line-height:150%;font-family:"Calibri Light",sans-serif;'>Inefectivas</span></li>
</ol>
<p style='margin-top:0cm;margin-right:0cm;margin-bottom:8.0pt;margin-left:0cm;font-size:11.0pt;font-family:"Calibri",sans-serif;line-height:150%;'><span style='font-size:19px;line-height:150%;font-family:"Calibri Light",sans-serif;'>&nbsp;</span></p>
<p style='margin-top:0cm;margin-right:0cm;margin-bottom:8.0pt;margin-left:0cm;font-size:11.0pt;font-family:"Calibri",sans-serif;line-height:150%;'><span style='font-size:19px;line-height:150%;font-family:"Calibri Light",sans-serif;'>&nbsp;</span></p>
<p style='margin-top:0cm;margin-right:0cm;margin-bottom:8.0pt;margin-left:0cm;font-size:11.0pt;font-family:"Calibri",sans-serif;line-height:150%;'><span style='font-size:19px;line-height:150%;font-family:"Calibri Light",sans-serif;'>3. Necesidad de ayuda externa:</span></p>
<p style='margin-top:0cm;margin-right:0cm;margin-bottom:8.0pt;margin-left:0cm;font-size:11.0pt;font-family:"Calibri",sans-serif;line-height:150%;'><span style='font-size:19px;line-height:150%;font-family:"Calibri Light",sans-serif;'>Indicar si se requiri&oacute; ayuda externa para controlar la desregulaci&oacute;n del estudiante:</span></p>
<ol start="1" style="list-style-type: upper-alpha;">
    <li><span style='line-height:150%;font-family:"Calibri Light",sans-serif;'>S&iacute;</span></li>
    <li><span style='line-height:150%;font-family:"Calibri Light",sans-serif;'>No</span></li>
</ol>
<p style='margin-top:0cm;margin-right:0cm;margin-bottom:8.0pt;margin-left:0cm;font-size:11.0pt;font-family:"Calibri",sans-serif;line-height:150%;'><span style='font-size:19px;line-height:150%;font-family:"Calibri Light",sans-serif;'>4. Si se requiri&oacute; ayuda externa, &iquest;de qu&eacute; tipo?:</span></p>
<p style='margin-top:0cm;margin-right:0cm;margin-bottom:8.0pt;margin-left:0cm;font-size:11.0pt;font-family:"Calibri",sans-serif;line-height:150%;'><span style='font-size:19px;line-height:150%;font-family:"Calibri Light",sans-serif;'>Describir el tipo de ayuda externa que se requiri&oacute;, incluyendo:</span></p>
<ol start="1" style="list-style-type: upper-alpha;">
    <li><span style='line-height:150%;font-family:"Calibri Light",sans-serif;'>Contacto con los padres o tutores</span></li>
    <li><span style='line-height:150%;font-family:"Calibri Light",sans-serif;'>Intervenci&oacute;n del psic&oacute;logo o pedagogo</span></li>
    <li><span style='line-height:150%;font-family:"Calibri Light",sans-serif;'>Intervenci&oacute;n del equipo directivo</span></li>
    <li><span style='line-height:150%;font-family:"Calibri Light",sans-serif;'>Asistencia m&eacute;dica</span></li>
    <li><span style='line-height:150%;font-family:"Calibri Light",sans-serif;'>Otros: ______________________________________________________</span></li>
</ol>
<p style='margin-top:0cm;margin-right:0cm;margin-bottom:8.0pt;margin-left:0cm;font-size:11.0pt;font-family:"Calibri",sans-serif;line-height:150%;'><span style='font-size:19px;line-height:150%;font-family:"Calibri Light",sans-serif;'>Plan de acci&oacute;n individualizado:</span></p>
<p style='margin-top:0cm;margin-right:0cm;margin-bottom:8.0pt;margin-left:0cm;font-size:11.0pt;font-family:"Calibri",sans-serif;line-height:150%;'><span style='font-size:19px;line-height:150%;font-family:"Calibri Light",sans-serif;'>1. Medidas a corto plazo:</span></p>
<p style='margin-top:0cm;margin-right:0cm;margin-bottom:8.0pt;margin-left:0cm;font-size:11.0pt;font-family:"Calibri",sans-serif;line-height:150%;'><span style='font-size:19px;line-height:150%;font-family:"Calibri Light",sans-serif;'>Detallar las medidas espec&iacute;ficas que se implementar&aacute;n a corto plazo para prevenir futuras desregulaciones emocionales en el estudiante, incluyendo:</span></p>
<ol start="1" style="list-style-type: upper-alpha;">
    <li><span style='line-height:150%;font-family:"Calibri Light",sans-serif;'>Implementaci&oacute;n de estrategias de autorregulaci&oacute;n emocional</span></li>
    <li><span style='line-height:150%;font-family:"Calibri Light",sans-serif;'>Adaptaciones en el aula</span></li>
    <li><span style='line-height:150%;font-family:"Calibri Light",sans-serif;'>Apoyo acad&eacute;mico individualizado</span></li>
    <li><span style='line-height:150%;font-family:"Calibri Light",sans-serif;'>Refuerzo positivo</span></li>
    <li><span style='line-height:150%;font-family:"Calibri Light",sans-serif;'>Seguimiento individualizado por parte del profesorado u otro profesional</span></li>
    <li><span style='line-height:150%;font-family:"Calibri Light",sans-serif;'>Intervenci&oacute;n con la familia</span></li>
    <li><span style='line-height:150%;font-family:"Calibri Light",sans-serif;'>Otros: __________________________________</span></li>
</ol>
<p style='margin-top:0cm;margin-right:0cm;margin-bottom:8.0pt;margin-left:0cm;font-size:11.0pt;font-family:"Calibri",sans-serif;line-height:150%;'><span style='font-size:19px;line-height:150%;font-family:"Calibri Light",sans-serif;'>2. Medidas a largo plazo:</span></p>
<p style='margin-top:0cm;margin-right:0cm;margin-bottom:8.0pt;margin-left:0cm;font-size:11.0pt;font-family:"Calibri",sans-serif;line-height:150%;'><span style='font-size:19px;line-height:150%;font-family:"Calibri Light",sans-serif;'>Detallar las medidas espec&iacute;ficas que se implementar&aacute;n a largo plazo para abordar las causas de la desregulaci&oacute;n emocional en el estudiante, incluyendo:</span></p>
<ol start="1" style="list-style-type: upper-alpha;">
    <li><span style='line-height:150%;font-family:"Calibri Light",sans-serif;'>Terapia individual o grupal</span></li>
    <li><span style='line-height:150%;font-family:"Calibri Light",sans-serif;'>Evaluaci&oacute;n por un profesional de la salud mental</span></li>
    <li><span style='line-height:150%;font-family:"Calibri Light",sans-serif;'>Intervenci&oacute;n psicopedag&oacute;gica</span></li>
    <li><span style='line-height:150%;font-family:"Calibri Light",sans-serif;'>Capacitaci&oacute;n a los padres o tutores en manejo de emociones</span></li>
    <li><span style='line-height:150%;font-family:"Calibri Light",sans-serif;'>Adaptaciones curriculares</span></li>
    <li><span style='line-height:150%;font-family:"Calibri Light",sans-serif;'>Otros: __________________________________________________________________</span></li>
</ol>
<p style='margin-top:0cm;margin-right:0cm;margin-bottom:8.0pt;margin-left:0cm;font-size:11.0pt;font-family:"Calibri",sans-serif;line-height:150%;'><span style='font-size:19px;line-height:150%;font-family:"Calibri Light",sans-serif;'>Seguimiento:</span></p>
<p style='margin-top:0cm;margin-right:0cm;margin-bottom:8.0pt;margin-left:0cm;font-size:11.0pt;font-family:"Calibri",sans-serif;line-height:150%;'><span style='font-size:19px;line-height:150%;font-family:"Calibri Light",sans-serif;'>1. Fecha de la pr&oacute;xima evaluaci&oacute;n (Indicar la fecha en la que se realizar&aacute; la pr&oacute;xima evaluaci&oacute;n del estudiante):</span></p>
<p style='margin-top:0cm;margin-right:0cm;margin-bottom:8.0pt;margin-left:0cm;font-size:11.0pt;font-family:"Calibri",sans-serif;line-height:150%;'><span style='font-size:19px;line-height:150%;font-family:"Calibri Light",sans-serif;'>____________________________________________________________________________</span></p>
<p style='margin-top:0cm;margin-right:0cm;margin-bottom:8.0pt;margin-left:0cm;font-size:11.0pt;font-family:"Calibri",sans-serif;line-height:150%;'><span style='font-size:19px;line-height:150%;font-family:"Calibri Light",sans-serif;'>2. Persona responsable del seguimiento (Indicar el nombre y cargo de la persona responsable del seguimiento del plan de acci&oacute;n).</span></p>
<p style='margin-top:0cm;margin-right:0cm;margin-bottom:8.0pt;margin-left:0cm;font-size:11.0pt;font-family:"Calibri",sans-serif;line-height:150%;'><span style='font-size:19px;line-height:150%;font-family:"Calibri Light",sans-serif;'>________________________________________________________________________________</span></p>
<p style='margin-top:0cm;margin-right:0cm;margin-bottom:8.0pt;margin-left:0cm;font-size:11.0pt;font-family:"Calibri",sans-serif;line-height:150%;'><span style='font-size:19px;line-height:150%;font-family:"Calibri Light",sans-serif;'>&nbsp;</span></p>
<p style='margin-top:0cm;margin-right:0cm;margin-bottom:8.0pt;margin-left:0cm;font-size:11.0pt;font-family:"Calibri",sans-serif;line-height:150%;'><span style='font-size:19px;line-height:150%;font-family:"Calibri Light",sans-serif;'>3. Frecuencia del seguimiento:</span></p>
<p style='margin-top:0cm;margin-right:0cm;margin-bottom:8.0pt;margin-left:0cm;font-size:11.0pt;font-family:"Calibri",sans-serif;line-height:150%;'><span style='font-size:19px;line-height:150%;font-family:"Calibri Light",sans-serif;'>Indicar la frecuencia con la que se realizar&aacute; el seguimiento del plan de acci&oacute;n:</span></p>
<ol start="1" style="list-style-type: upper-alpha;">
    <li><span style='line-height:150%;font-family:"Calibri Light",sans-serif;'>Diario</span></li>
    <li><span style='line-height:150%;font-family:"Calibri Light",sans-serif;'>Semanal</span></li>
    <li><span style='line-height:150%;font-family:"Calibri Light",sans-serif;'>Quincenal</span></li>
    <li><span style='line-height:150%;font-family:"Calibri Light",sans-serif;'>Mensual</span></li>
    <li><span style='line-height:150%;font-family:"Calibri Light",sans-serif;'>Otro: ____________________________________________________</span></li>
</ol>
<p style='margin-top:0cm;margin-right:0cm;margin-bottom:8.0pt;margin-left:0cm;font-size:11.0pt;font-family:"Calibri",sans-serif;line-height:150%;'><span style='font-size:19px;line-height:150%;font-family:"Calibri Light",sans-serif;'>4. Instrumentos de evaluaci&oacute;n:</span></p>
<p style='margin-top:0cm;margin-right:0cm;margin-bottom:8.0pt;margin-left:0cm;font-size:11.0pt;font-family:"Calibri",sans-serif;line-height:150%;'><span style='font-size:19px;line-height:150%;font-family:"Calibri Light",sans-serif;'>(Especificar los instrumentos que se utilizar&aacute;n para evaluar el progreso del estudiante, incluyendo):</span></p>
<ol start="1" style="list-style-type: upper-alpha;">
    <li><span style='line-height:150%;font-family:"Calibri Light",sans-serif;'>Observaci&oacute;n directa</span></li>
    <li><span style='line-height:150%;font-family:"Calibri Light",sans-serif;'>Registros de comportamiento</span></li>
    <li><span style='line-height:150%;font-family:"Calibri Light",sans-serif;'>Escalas de evaluaci&oacute;n de emociones</span></li>
    <li><span style='line-height:150%;font-family:"Calibri Light",sans-serif;'>Entrevistas al estudiante</span></li>
    <li><span style='line-height:150%;font-family:"Calibri Light",sans-serif;'>Entrevistas a los padres o tutores</span></li>
    <li><span style='line-height:150%;font-family:"Calibri Light",sans-serif;'>Informes de los profesores</span></li>
    <li><span style='line-height:150%;font-family:"Calibri Light",sans-serif;'>Otros: _____________________________________________________</span></li>
</ol>
<p style='margin-top:0cm;margin-right:0cm;margin-bottom:8.0pt;margin-left:0cm;font-size:11.0pt;font-family:"Calibri",sans-serif;line-height:150%;'><span style='font-size:19px;line-height:150%;font-family:"Calibri Light",sans-serif;'>Observaciones adicionales:</span></p>
<p style='margin-top:0cm;margin-right:0cm;margin-bottom:8.0pt;margin-left:0cm;font-size:11.0pt;font-family:"Calibri",sans-serif;line-height:150%;'><span style='font-size:19px;line-height:150%;font-family:"Calibri Light",sans-serif;'>Incluir cualquier otra informaci&oacute;n relevante que no se haya incluido en los apartados anteriores, como:</span></p>
<p style='margin-top:0cm;margin-right:0cm;margin-bottom:8.0pt;margin-left:0cm;font-size:11.0pt;font-family:"Calibri",sans-serif;line-height:150%;'><span style='font-size:19px;line-height:150%;font-family:"Calibri Light",sans-serif;'>Historial de desregulaciones emocionales del estudiante:</span></p>
<p style='margin-top:0cm;margin-right:0cm;margin-bottom:8.0pt;margin-left:0cm;font-size:11.0pt;font-family:"Calibri",sans-serif;line-height:150%;'><span style='font-size:19px;line-height:150%;font-family:"Calibri Light",sans-serif;'>________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________</span></p>
<p style='margin-top:0cm;margin-right:0cm;margin-bottom:8.0pt;margin-left:0cm;font-size:11.0pt;font-family:"Calibri",sans-serif;line-height:150%;'><span style='font-size:19px;line-height:150%;font-family:"Calibri Light",sans-serif;'>Factores de riesgo asociados a la desregulaci&oacute;n:</span></p>
<p style='margin-top:0cm;margin-right:0cm;margin-bottom:8.0pt;margin-left:0cm;font-size:11.0pt;font-family:"Calibri",sans-serif;line-height:150%;'><span style='font-size:19px;line-height:150%;font-family:"Calibri Light",sans-serif;'>________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________</span></p>
<p style='margin-top:0cm;margin-right:0cm;margin-bottom:8.0pt;margin-left:0cm;font-size:11.0pt;font-family:"Calibri",sans-serif;line-height:150%;'><span style='font-size:19px;line-height:150%;font-family:"Calibri Light",sans-serif;'>Necesidades espec&iacute;ficas del estudiante:</span></p>
<p style='margin-top:0cm;margin-right:0cm;margin-bottom:8.0pt;margin-left:0cm;font-size:11.0pt;font-family:"Calibri",sans-serif;line-height:150%;'><span style='font-size:19px;line-height:150%;font-family:"Calibri Light",sans-serif;'>________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________</span></p>
<p style='margin-top:0cm;margin-right:0cm;margin-bottom:8.0pt;margin-left:0cm;font-size:11.0pt;font-family:"Calibri",sans-serif;line-height:150%;'><span style='font-size:19px;line-height:150%;font-family:"Calibri Light",sans-serif;'>&nbsp;</span></p>
<p style='margin-top:0cm;margin-right:0cm;margin-bottom:8.0pt;margin-left:0cm;font-size:11.0pt;font-family:"Calibri",sans-serif;line-height:150%;'><span style='font-size:19px;line-height:150%;font-family:"Calibri Light",sans-serif;'>Recursos disponibles en la instituci&oacute;n educativa:</span></p>
<p style='margin-top:0cm;margin-right:0cm;margin-bottom:8.0pt;margin-left:0cm;font-size:11.0pt;font-family:"Calibri",sans-serif;line-height:150%;'><span style='font-size:19px;line-height:150%;font-family:"Calibri Light",sans-serif;'>________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________</span></p>
<p style='margin-top:0cm;margin-right:0cm;margin-bottom:8.0pt;margin-left:0cm;font-size:11.0pt;font-family:"Calibri",sans-serif;line-height:150%;'><span style='font-size:19px;line-height:150%;font-family:"Calibri Light",sans-serif;'>&nbsp;</span></p>
<p style='margin-top:0cm;margin-right:0cm;margin-bottom:8.0pt;margin-left:0cm;font-size:11.0pt;font-family:"Calibri",sans-serif;line-height:150%;'><span style='font-size:19px;line-height:150%;font-family:"Calibri Light",sans-serif;'>&nbsp;</span></p>
<p style='margin-top:0cm;margin-right:0cm;margin-bottom:8.0pt;margin-left:0cm;font-size:11.0pt;font-family:"Calibri",sans-serif;line-height:150%;'><span style='font-size:19px;line-height:150%;font-family:"Calibri Light",sans-serif;'>Coordinaci&oacute;n con otros profesionales:</span></p>
<p style='margin-top:0cm;margin-right:0cm;margin-bottom:8.0pt;margin-left:0cm;font-size:11.0pt;font-family:"Calibri",sans-serif;line-height:150%;'><span style='font-size:19px;line-height:150%;font-family:"Calibri Light",sans-serif;'>________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________</span></p>
<p style='margin-top:0cm;margin-right:0cm;margin-bottom:8.0pt;margin-left:0cm;font-size:11.0pt;font-family:"Calibri",sans-serif;line-height:150%;'><span style='font-size:19px;line-height:150%;font-family:"Calibri Light",sans-serif;'>&nbsp;</span></p>
<p style='margin-top:0cm;margin-right:0cm;margin-bottom:8.0pt;margin-left:0cm;font-size:11.0pt;font-family:"Calibri",sans-serif;line-height:150%;'><span style='font-size:19px;line-height:150%;font-family:"Calibri Light",sans-serif;'>Firma del evaluador:</span></p>
<p style='margin-top:0cm;margin-right:0cm;margin-bottom:8.0pt;margin-left:0cm;font-size:11.0pt;font-family:"Calibri",sans-serif;line-height:150%;'><span style='font-size:19px;line-height:150%;font-family:"Calibri Light",sans-serif;'>Firma del responsable del seguimiento:</span></p>
<p style='margin-top:0cm;margin-right:0cm;margin-bottom:8.0pt;margin-left:0cm;font-size:11.0pt;font-family:"Calibri",sans-serif;line-height:150%;'><span style='font-size:19px;line-height:150%;font-family:"Calibri Light",sans-serif;'>Fecha:</span></p>
<p style='margin-top:0cm;margin-right:0cm;margin-bottom:8.0pt;margin-left:0cm;font-size:11.0pt;font-family:"Calibri",sans-serif;line-height:150%;'><span style='font-size:19px;line-height:150%;font-family:"Calibri Light",sans-serif;'>&nbsp;</span></p>
<p style='margin-top:0cm;margin-right:0cm;margin-bottom:8.0pt;margin-left:0cm;font-size:11.0pt;font-family:"Calibri",sans-serif;line-height:150%;'><span style='font-size:19px;line-height:150%;font-family:"Calibri Light",sans-serif;color:red;'>Notas:</span></p>
<p style='margin-top:0cm;margin-right:0cm;margin-bottom:8.0pt;margin-left:0cm;font-size:11.0pt;font-family:"Calibri",sans-serif;line-height:150%;'><span style='font-size:19px;line-height:150%;font-family:"Calibri Light",sans-serif;color:red;'>Esta ficha de seguimiento individualizada puede ser utilizada como gu&iacute;a para evaluar y abordar la desregulaci&oacute;n emocional en estudiantes.</span></p>
<p style='margin-top:0cm;margin-right:0cm;margin-bottom:8.0pt;margin-left:0cm;font-size:11.0pt;font-family:"Calibri",sans-serif;line-height:150%;'><span style='font-size:19px;line-height:150%;font-family:"Calibri Light",sans-serif;color:red;'>Es importante adaptar la ficha a las necesidades espec&iacute;ficas de cada estudiante y contexto educativo.</span></p>
<p style='margin-top:0cm;margin-right:0cm;margin-bottom:8.0pt;margin-left:0cm;font-size:11.0pt;font-family:"Calibri",sans-serif;line-height:150%;'><span style='font-size:19px;line-height:150%;font-family:"Calibri Light",sans-serif;color:red;'>Se recomienda la participaci&oacute;n de un equipo multidisciplinario en la evaluaci&oacute;n y seguimiento del estudiante.</span></p>
<p style='margin-top:0cm;margin-right:0cm;margin-bottom:8.0pt;margin-left:0cm;font-size:11.0pt;font-family:"Calibri",sans-serif;line-height:150%;'><span style='font-size:19px;line-height:150%;font-family:"Calibri Light",sans-serif;color:red;'>La comunicaci&oacute;n constante con los padres o tutores del estudiante es fundamental para el &eacute;xito del plan de acci&oacute;n</span></p>`}static planAcompanamiento(t,i,a,n,s,r,o){return`<style>
        table {
            width: 100%;
            border-collapse: collapse;
            margin-bottom: 20px;
        }
        table, th, td {
            border: 1px solid black;
        }
        th, td {
            padding: 8px;
            text-align: left;
        }
        th {
            background-color: #f2f2f2;
        }
</style>
<p><strong><u>PLAN DE ACOMPA&Ntilde;AMIENTO EMOCIONAL Y/O CONDUCTUAL.</u></strong></p>
<ol>
    <li><u>Antecedentes del o  estudiante:</u></li>
</ol>
<table border="1" cellspacing="0" cellpadding="0" width="589">
    <tbody>
        <tr>
            <td width="38.435374149659864%" valign="top">
                <p><strong>Nombre del o la estudiante</strong></p>
            </td>
            <td width="61.564625850340136%" valign="top">
                <p>&nbsp; ${t}</p>
            </td>
        </tr>
        <tr>
            <td width="38.435374149659864%" valign="top">
                <p><strong>RUT</strong></p>
            </td>
            <td width="61.564625850340136%" valign="top">
                <p>&nbsp; ${i}</p>
            </td>
        </tr>
        <tr>
            <td width="38.435374149659864%" valign="top">
                <p><strong>Edad</strong></p>
            </td>
            <td width="61.564625850340136%" valign="top">
                <p>&nbsp; ${a}</p>
            </td>
        </tr>
        <tr>
            <td width="38.435374149659864%" valign="top">
                <p><strong>Curso</strong></p>
            </td>
            <td width="61.564625850340136%" valign="top">
                <p>&nbsp; ${n}</p>
            </td>
        </tr>
        <tr>
            <td width="38.435374149659864%" valign="top">
                <p><strong>Nacionalidad</strong></p>
            </td>
            <td width="61.564625850340136%" valign="top">
                <p>&nbsp;</p>
            </td>
        </tr>
        <tr>
            <td width="38.435374149659864%" valign="top">
                <p><strong> apoderado/a</strong></p>
            </td>
            <td width="61.564625850340136%" valign="top">
                <p>&nbsp; ${r}</p>
            </td>
        </tr>
        <tr>
            <td width="38.435374149659864%" valign="top">
                <p><strong>Contacto apoderado/a</strong></p>
            </td>
            <td width="61.564625850340136%" valign="top">
                <p>&nbsp; ${o}</p>
            </td>
        </tr>
    </tbody>
</table>
<p>&nbsp;</p>
<ol>
    <li><u>Caracterizaci&oacute;n del o la estudiante:</u></li>
</ol>
<table border="1" cellspacing="0" cellpadding="0" width="589">
    <tbody>
        <tr>
            <td width="38.435374149659864%" valign="top">
                <p><strong>Diagn&oacute;stico primario&nbsp;</strong></p>
            </td>
            <td width="61.564625850340136%" valign="top">
                <p>&nbsp;</p>
            </td>
        </tr>
        <tr>
            <td width="38.435374149659864%" valign="top">
                <p><strong>Diagn&oacute; secundario</strong></p>
            </td>
            <td width="61.564625850340136%" valign="top">
                <p>&nbsp;</p>
            </td>
        </tr>
        <tr>
            <td width="38.435374149659864%" valign="top">
                <p><strong> especializado o SOS</strong></p>
            </td>
            <td width="61.564625850340136%" valign="top">
                <p>&nbsp;</p>
            </td>
        </tr>
        <tr>
            <td width="38.435374149659864%" valign="top">
                <p><strong>Profesional  o  remplazante</strong></p>
            </td>
            <td width="61.564625850340136%" valign="top">
                <p>&nbsp;</p>
            </td>
        </tr>
        <tr>
            <td width="38.435374149659864%" valign="top">
                <p><strong>Profesor/a Jefe</strong></p>
            </td>
            <td width="61.564625850340136%" valign="top">
                <p>&nbsp;</p>
            </td>
        </tr>
    </tbody>
</table>
<p>&nbsp;</p>
<ol>
    <li><u>Particularidades del o la estudiante:</u></li>
</ol>
<table border="1" cellspacing="0" cellpadding="0" width="589">
    <tbody>
        <tr>
            <td width="38.435374149659864%" valign="top">
                <p><strong>Indicar las particularidades  o  estudiante, por ejemplo: &nbsp;</strong>situaciones  y/o   lo o la desregulan, si  o no el contacto f&iacute;sico, caracter&iacute;sticas sensoriales,  presenta conductas de evitaci&oacute;n, si sus desregulaciones son con llantos, autolesiones o golpes,  otras.</p>
            </td>
            <td width="61.564625850340136%" valign="top">
                <p>&nbsp;</p>
                <p>&nbsp;</p>
                <p>&nbsp;</p>
                <p>&nbsp;</p>
                <p>&nbsp;</p>
                <p>&nbsp;</p>
                <p>&nbsp;</p>
                <p>&nbsp;</p>
                <p>&nbsp;</p>
                <p>&nbsp;</p>
                <p>&nbsp;</p>
            </td>
        </tr>
        <tr>
            <td width="38.435374149659864%" valign="top">
                <p><strong>Indicar  estrategias  puedan facilitar su regulaci&oacute;n emocional y/o conductual, por ejemplo</strong>:  existe     agrade realizar, si  alg&uacute;n modulador sensorial, si existe alg&uacute;n lugar  donde se sienta comodo/a.</p>
            </td>
            <td width="61.564625850340136%" valign="top">
                <p>&nbsp;</p>
            </td>
        </tr>
        <tr>
            <td width="38.435374149659864%" valign="top">
                <p><strong>Manejo del ambiente,  por ejemplo:&nbsp;</strong> si  algo del ambiente donde  se  que genere  hiper o hipo reactividad.</p>
            </td>
            <td width="61.564625850340136%" valign="top">
                <p>&nbsp;</p>
            </td>
        </tr>
    </tbody>
</table>
<p>&nbsp;</p>
<ol>
    <li><u>%  del o la estudiante:</u></li>
</ol>
<table border="1" cellspacing="0" cellpadding="0" width="588">
    <tbody>
        <tr>
            <td width="10%" valign="top">
                <p><strong>Mar</strong></p>
            </td>
            <td width="10%" valign="top">
                <p><strong>Abr</strong></p>
            </td>
            <td width="10%" valign="top">
                <p><strong>May</strong></p>
            </td>
            <td width="10%" valign="top">
                <p><strong>Jun</strong></p>
            </td>
            <td width="10%" valign="top">
                <p><strong>Jul</strong></p>
            </td>
            <td width="10%" valign="top">
                <p><strong>Ago</strong></p>
            </td>
            <td width="10%" valign="top">
                <p><strong>Sep</strong></p>
            </td>
            <td width="10%" valign="top">
                <p><strong>Oct</strong></p>
            </td>
            <td width="10%" valign="top">
                <p><strong>Nov</strong></p>
            </td>
            <td width="10%" valign="top">
                <p><strong>Dic</strong></p>
            </td>
        </tr>
        <tr>
            <td width="10%" valign="top">
                <p>&nbsp;</p>
            </td>
            <td width="10%" valign="top">
                <p>&nbsp;</p>
            </td>
            <td width="10%" valign="top">
                <p>&nbsp;</p>
            </td>
            <td width="10%" valign="top">
                <p>&nbsp;</p>
            </td>
            <td width="10%" valign="top">
                <p>&nbsp;</p>
            </td>
            <td width="10%" valign="top">
                <p>&nbsp;</p>
            </td>
            <td width="10%" valign="top">
                <p>&nbsp;</p>
            </td>
            <td width="10%" valign="top">
                <p>&nbsp;</p>
            </td>
            <td width="10%" valign="top">
                <p>&nbsp;</p>
            </td>
            <td width="10%" valign="top">
                <p>&nbsp;</p>
            </td>
        </tr>
    </tbody>
</table>
<p>&nbsp;</p>
<ol>
    <li><u>Intervenciones realizadas durante el a&ntilde;o:</u></li>
</ol>
<table border="1" cellspacing="0" cellpadding="0" width="589">
    <tbody>
        <tr>
            <td width="15.619694397283531%" valign="top">
                <p><strong>Mes</strong></p>
            </td>
            <td width="24.787775891341255%" valign="top">
                <p><strong> o profesional que interviene</strong></p>
            </td>
            <td width="15.959252971137522%" valign="top">
                <p><strong>Cantidad de sesiones o entrevistas</strong></p>
            </td>
            <td width="43.63327674023769%" valign="top">
                <p><strong>Indicar brevemente  de entrevista o   (Entendi&eacute;ndose   departamento debe dejar  propio registro).</strong></p>
            </td>
        </tr>
        <tr>
            <td width="15.619694397283531%" rowspan="5" valign="top">
                <p><strong>Marzo</strong></p>
            </td>
            <td width="24.787775891341255%" valign="top">
                <p>PIE</p>
            </td>
            <td width="15.959252971137522%" valign="top">
                <p>&nbsp;</p>
            </td>
            <td width="43.63327674023769%" rowspan="5" valign="top">
                <p>&nbsp;</p>
            </td>
        </tr>
        <tr>
            <td width="60.833333333333336%" valign="top">
                <p>Conv. Escolar</p>
            </td>
            <td width="39.166666666666664%" valign="top">
                <p>&nbsp;</p>
            </td>
        </tr>
        <tr>
            <td width="60.833333333333336%" valign="top">
                <p>Inspector&iacute;a General</p>
            </td>
            <td width="39.166666666666664%" valign="top">
                <p>&nbsp;</p>
            </td>
        </tr>
        <tr>
            <td width="60.833333333333336%" valign="top">
                <p>Profesor/a Jefe</p>
            </td>
            <td width="39.166666666666664%" valign="top">
                <p>&nbsp;</p>
            </td>
        </tr>
        <tr>
            <td width="60.833333333333336%" valign="top">
                <p>Orientador/a</p>
            </td>
            <td width="39.166666666666664%" valign="top">
                <p>&nbsp;</p>
            </td>
        </tr>
        <tr>
            <td width="15.619694397283531%" rowspan="5" valign="top">
                <p><strong>Abril</strong></p>
            </td>
            <td width="24.787775891341255%" valign="top">
                <p>PIE</p>
            </td>
            <td width="15.959252971137522%" valign="top">
                <p>&nbsp;</p>
            </td>
            <td width="43.63327674023769%" rowspan="5" valign="top">
                <p>&nbsp;</p>
            </td>
        </tr>
        <tr>
            <td width="60.833333333333336%" valign="top">
                <p>Conv. Escolar</p>
            </td>
            <td width="39.166666666666664%" valign="top">
                <p>&nbsp;</p>
            </td>
        </tr>
        <tr>
            <td width="60.833333333333336%" valign="top">
                <p>Inspector&iacute;a General</p>
            </td>
            <td width="39.166666666666664%" valign="top">
                <p>&nbsp;</p>
            </td>
        </tr>
        <tr>
            <td width="60.833333333333336%" valign="top">
                <p>Profesor/a Jefe</p>
            </td>
            <td width="39.166666666666664%" valign="top">
                <p>&nbsp;</p>
            </td>
        </tr>
        <tr>
            <td width="60.833333333333336%" valign="top">
                <p>Orientador/a</p>
            </td>
            <td width="39.166666666666664%" valign="top">
                <p>&nbsp;</p>
            </td>
        </tr>
        <tr>
            <td width="15.619694397283531%" rowspan="5" valign="top">
                <p><strong>Mayo</strong></p>
            </td>
            <td width="24.787775891341255%" valign="top">
                <p>PIE</p>
            </td>
            <td width="15.959252971137522%" valign="top">
                <p>&nbsp;</p>
            </td>
            <td width="43.63327674023769%" rowspan="5" valign="top">
                <p>&nbsp;</p>
            </td>
        </tr>
        <tr>
            <td width="60.833333333333336%" valign="top">
                <p>Conv. Escolar</p>
            </td>
            <td width="39.166666666666664%" valign="top">
                <p>&nbsp;</p>
            </td>
        </tr>
        <tr>
            <td width="60.833333333333336%" valign="top">
                <p>Inspector&iacute;a General</p>
            </td>
            <td width="39.166666666666664%" valign="top">
                <p>&nbsp;</p>
            </td>
        </tr>
        <tr>
            <td width="60.833333333333336%" valign="top">
                <p>Profesor/a Jefe</p>
            </td>
            <td width="39.166666666666664%" valign="top">
                <p>&nbsp;</p>
            </td>
        </tr>
        <tr>
            <td width="60.833333333333336%" valign="top">
                <p>Orientador/a</p>
            </td>
            <td width="39.166666666666664%" valign="top">
                <p>&nbsp;</p>
            </td>
        </tr>
        <tr>
            <td width="15.619694397283531%" rowspan="5" valign="top">
                <p><strong>Junio</strong></p>
            </td>
            <td width="24.787775891341255%" valign="top">
                <p>PIE</p>
            </td>
            <td width="15.959252971137522%" valign="top">
                <p>&nbsp;</p>
            </td>
            <td width="43.63327674023769%" rowspan="5" valign="top">
                <p>&nbsp;</p>
            </td>
        </tr>
        <tr>
            <td width="60.833333333333336%" valign="top">
                <p>Conv. Escolar</p>
            </td>
            <td width="39.166666666666664%" valign="top">
                <p>&nbsp;</p>
            </td>
        </tr>
        <tr>
            <td width="60.833333333333336%" valign="top">
                <p>Inspector&iacute;a General</p>
            </td>
            <td width="39.166666666666664%" valign="top">
                <p>&nbsp;</p>
            </td>
        </tr>
        <tr>
            <td width="60.833333333333336%" valign="top">
                <p>Profesor/a Jefe</p>
            </td>
            <td width="39.166666666666664%" valign="top">
                <p>&nbsp;</p>
            </td>
        </tr>
        <tr>
            <td width="60.833333333333336%" valign="top">
                <p>Orientador/a</p>
            </td>
            <td width="39.166666666666664%" valign="top">
                <p>&nbsp;</p>
            </td>
        </tr>
        <tr>
            <td width="15.619694397283531%" rowspan="5" valign="top">
                <p><strong>Julio</strong></p>
            </td>
            <td width="24.787775891341255%" valign="top">
                <p>PIE</p>
            </td>
            <td width="15.959252971137522%" valign="top">
                <p>&nbsp;</p>
            </td>
            <td width="43.63327674023769%" rowspan="5" valign="top">
                <p>&nbsp;</p>
            </td>
        </tr>
        <tr>
            <td width="60.833333333333336%" valign="top">
                <p>Conv. Escolar</p>
            </td>
            <td width="39.166666666666664%" valign="top">
                <p>&nbsp;</p>
            </td>
        </tr>
        <tr>
            <td width="60.833333333333336%" valign="top">
                <p>Inspector&iacute;a General</p>
            </td>
            <td width="39.166666666666664%" valign="top">
                <p>&nbsp;</p>
            </td>
        </tr>
        <tr>
            <td width="60.833333333333336%" valign="top">
                <p>Profesor/a Jefe</p>
            </td>
            <td width="39.166666666666664%" valign="top">
                <p>&nbsp;</p>
            </td>
        </tr>
        <tr>
            <td width="60.833333333333336%" valign="top">
                <p>Orientador/a</p>
            </td>
            <td width="39.166666666666664%" valign="top">
                <p>&nbsp;</p>
            </td>
        </tr>
        <tr>
            <td width="15.619694397283531%" rowspan="5" valign="top">
                <p><strong>Agosto&nbsp;</strong></p>
            </td>
            <td width="24.787775891341255%" valign="top">
                <p>PIE</p>
            </td>
            <td width="15.959252971137522%" valign="top">
                <p>&nbsp;</p>
            </td>
            <td width="43.63327674023769%" rowspan="5" valign="top">
                <p>&nbsp;</p>
            </td>
        </tr>
        <tr>
            <td width="60.833333333333336%" valign="top">
                <p>Conv. Escolar</p>
            </td>
            <td width="39.166666666666664%" valign="top">
                <p>&nbsp;</p>
            </td>
        </tr>
        <tr>
            <td width="60.833333333333336%" valign="top">
                <p>Inspector&iacute;a General</p>
            </td>
            <td width="39.166666666666664%" valign="top">
                <p>&nbsp;</p>
            </td>
        </tr>
        <tr>
            <td width="60.833333333333336%" valign="top">
                <p>Profesor/a Jefe</p>
            </td>
            <td width="39.166666666666664%" valign="top">
                <p>&nbsp;</p>
            </td>
        </tr>
        <tr>
            <td width="60.833333333333336%" valign="top">
                <p>Orientador/a</p>
            </td>
            <td width="39.166666666666664%" valign="top">
                <p>&nbsp;</p>
            </td>
        </tr>
        <tr>
            <td width="15.619694397283531%" rowspan="5" valign="top">
                <p><strong>Septiembre&nbsp;</strong></p>
            </td>
            <td width="24.787775891341255%" valign="top">
                <p>PIE</p>
            </td>
            <td width="15.959252971137522%" valign="top">
                <p>&nbsp;</p>
            </td>
            <td width="43.63327674023769%" rowspan="5" valign="top">
                <p>&nbsp;</p>
            </td>
        </tr>
        <tr>
            <td width="60.833333333333336%" valign="top">
                <p>Conv. Escolar</p>
            </td>
            <td width="39.166666666666664%" valign="top">
                <p>&nbsp;</p>
            </td>
        </tr>
        <tr>
            <td width="60.833333333333336%" valign="top">
                <p>Inspector&iacute;a General</p>
            </td>
            <td width="39.166666666666664%" valign="top">
                <p>&nbsp;</p>
            </td>
        </tr>
        <tr>
            <td width="60.833333333333336%" valign="top">
                <p>Profesor/a Jefe</p>
            </td>
            <td width="39.166666666666664%" valign="top">
                <p>&nbsp;</p>
            </td>
        </tr>
        <tr>
            <td width="60.833333333333336%" valign="top">
                <p>Orientador/a</p>
            </td>
            <td width="39.166666666666664%" valign="top">
                <p>&nbsp;</p>
            </td>
        </tr>
        <tr>
            <td width="15.619694397283531%" rowspan="5" valign="top">
                <p><strong>Octubre&nbsp;</strong></p>
            </td>
            <td width="24.787775891341255%" valign="top">
                <p>PIE</p>
            </td>
            <td width="15.959252971137522%" valign="top">
                <p>&nbsp;</p>
            </td>
            <td width="43.63327674023769%" rowspan="5" valign="top">
                <p>&nbsp;</p>
            </td>
        </tr>
        <tr>
            <td width="60.833333333333336%" valign="top">
                <p>Conv. Escolar</p>
            </td>
            <td width="39.166666666666664%" valign="top">
                <p>&nbsp;</p>
            </td>
        </tr>
        <tr>
            <td width="60.833333333333336%" valign="top">
                <p>Inspector&iacute;a General</p>
            </td>
            <td width="39.166666666666664%" valign="top">
                <p>&nbsp;</p>
            </td>
        </tr>
        <tr>
            <td width="60.833333333333336%" valign="top">
                <p>Profesor/a Jefe</p>
            </td>
            <td width="39.166666666666664%" valign="top">
                <p>&nbsp;</p>
            </td>
        </tr>
        <tr>
            <td width="60.833333333333336%" valign="top">
                <p>Orientador/a</p>
            </td>
            <td width="39.166666666666664%" valign="top">
                <p>&nbsp;</p>
            </td>
        </tr>
        <tr>
            <td width="15.619694397283531%" rowspan="5" valign="top">
                <p><strong>Noviembre</strong></p>
            </td>
            <td width="24.787775891341255%" valign="top">
                <p>PIE</p>
            </td>
            <td width="15.959252971137522%" valign="top">
                <p>&nbsp;</p>
            </td>
            <td width="43.63327674023769%" rowspan="5" valign="top">
                <p>&nbsp;</p>
            </td>
        </tr>
        <tr>
            <td width="60.833333333333336%" valign="top">
                <p>Conv. Escolar</p>
            </td>
            <td width="39.166666666666664%" valign="top">
                <p>&nbsp;</p>
            </td>
        </tr>
        <tr>
            <td width="60.833333333333336%" valign="top">
                <p>Inspector&iacute;a General</p>
            </td>
            <td width="39.166666666666664%" valign="top">
                <p>&nbsp;</p>
            </td>
        </tr>
        <tr>
            <td width="60.833333333333336%" valign="top">
                <p>Profesor/a Jefe</p>
            </td>
            <td width="39.166666666666664%" valign="top">
                <p>&nbsp;</p>
            </td>
        </tr>
        <tr>
            <td width="60.833333333333336%" valign="top">
                <p>Orientador/a</p>
            </td>
            <td width="39.166666666666664%" valign="top">
                <p>&nbsp;</p>
            </td>
        </tr>
        <tr>
            <td width="15.619694397283531%" rowspan="5" valign="top">
                <p><strong>Diciembre</strong></p>
            </td>
            <td width="24.787775891341255%" valign="top">
                <p>PIE</p>
            </td>
            <td width="15.959252971137522%" valign="top">
                <p>&nbsp;</p>
            </td>
            <td width="43.63327674023769%" rowspan="5" valign="top">
                <p>&nbsp;</p>
            </td>
        </tr>
        <tr>
            <td width="60.833333333333336%" valign="top">
                <p>Conv. Escolar</p>
            </td>
            <td width="39.166666666666664%" valign="top">
                <p>&nbsp;</p>
            </td>
        </tr>
        <tr>
            <td width="60.833333333333336%" valign="top">
                <p>Inspector&iacute;a General</p>
            </td>
            <td width="39.166666666666664%" valign="top">
                <p>&nbsp;</p>
            </td>
        </tr>
        <tr>
            <td width="60.833333333333336%" valign="top">
                <p>Profesor/a Jefe</p>
            </td>
            <td width="39.166666666666664%" valign="top">
                <p>&nbsp;</p>
            </td>
        </tr>
        <tr>
            <td width="60.833333333333336%" valign="top">
                <p>Orientador/a</p>
            </td>
            <td width="39.166666666666664%" valign="top">
                <p>&nbsp;</p>
            </td>
        </tr>
    </tbody>
</table>
<p>&nbsp;</p>
<p>&nbsp;</p>
<table  cellspacing="0" cellpadding="0" width="589" style="border: 0px solid black;text-align: center">
    <tbody>
        <tr>
            <td width="33.333333333333336%" valign="top" style="border: 0px solid black;text-align: center">
                <p>PROFESIONAL  1</p>
            </td>
            <td width="33.333333333333336%" valign="top" style="border: 0px solid black;text-align: center">
                <p>&nbsp;</p>
            </td>
            <td width="33.333333333333336%" valign="top" style="border: 0px solid black;text-align: center">
                <p> INVOLUCRADO 2</p>
            </td>
        </tr>
    </tbody>
</table>
<p>&nbsp;</p>
<table  cellspacing="0" cellpadding="0" width="589" style="border: 0px solid black;text-align: center">
    <tbody>
        <tr>
            <td width="33.333333333333336%" valign="top" style="border: 0px solid black;text-align: center">
                <p> INVOLUCRADO 3</p>
            </td>
            <td width="33.333333333333336%" valign="top" style="border: 0px solid black;text-align: center">
                <p>&nbsp;</p>
            </td>
            <td width="33.333333333333336%" valign="top" style="border: 0px solid black;text-align: center">
                <p> INVOLUCRADO 4</p>
            </td>
        </tr>
    </tbody>
</table>
<p>&nbsp;</p>
<table  cellspacing="0" cellpadding="0" width="589" style="border: 0px solid black;text-align: center">
    <tbody>
        <tr>
            <td width="33.333333333333336%" valign="top" style="border: 0px solid black;text-align: center">
                <p>&nbsp;</p>
            </td>
            <td width="33.333333333333336%" valign="top" style="border: 0px solid black;text-align: center">
                <p>RESPONSABLE</p>
            </td>
            <td width="33.333333333333336%" valign="top" style="border: 0px solid black;text-align: center">
                <p>&nbsp;</p>
            </td>
        </tr>
    </tbody>
</table>
`}static fichaPai(t,i,a,n){return`<p><strong>Ficha del Plan de Apoyo Individualizado (PAI) para Estudiantes con TEA </strong></p>
<p><strong>Informaci&oacute;n del Estudiante: </strong></p>
<ul>
<li>Nombre: ${t}</li>
<li>Curso: ${i}</li>
<li>Fecha de Nacimiento: ${a}</li>
<li>Diagn&oacute;stico de TEA:</li>
<li>Fecha de Diagn&oacute;stico: ${n}</li>
</ul>
<p><strong>Equipo Interdisciplinario: </strong></p>
<ul>
<li>Psic&oacute;logo/a:</li>
<li>Educador/a Diferencial:</li>
<li>Orientador/a:</li>
<li>Otros/as (especificar):</li>
</ul>
<p><strong>Necesidades y Desaf&iacute;os: </strong></p>
<p>Descripci&oacute;n de las desregulaciones emocionales y conductuales observadas: Factores desencadenantes identificados:</p>
<p><strong>Objetivos del PAI: </strong></p>
<p>Objetivo 1: (Ejemplo: Mejorar la autorregulaci&oacute;n emocional del estudiante en el aula.)</p>
<p><strong>Ejemplos Metas espec&iacute;ficas: </strong></p>
<ol>
<li><em> Mejorar la autorregulaci&oacute;n emocional del estudiante en el aula </em><em>2. El estudiante identificar&aacute; al menos tres estrategias de autorregulaci&oacute;n</em><em> emocional que pueda utilizar durante situaciones de conflicto en el aula. 3. El estudiante demostrar&aacute; la aplicaci&oacute;n efectiva de al menos una estrategia de autorregulaci&oacute;n emocional en al menos el 80% de las situaciones de desaf&iacute;o emocional en el aula durante el mes. </em></li>
<li><em>El estudiante ser&aacute; capaz de solicitar ayuda de un adulto o compa&ntilde;ero de clase de manera verbal o no verbal cuando experimente dificultades emocionales, al menos dos veces por semana.</em></li>
</ol>
<p>&nbsp;</p>
<p>Objetivo 2: (Ejemplo: Fomentar la participaci&oacute;n activa del estudiante en las actividades escolares).</p>
<p><strong>Ejemplos Metas espec&iacute;ficas: </strong></p>
<ol>
<li><em> El estudiante participar&aacute; en al menos tres actividades grupales durante la</em><em> semana escolar, manteniendo una actitud positiva y cooperativa. 2. El estudiante iniciar&aacute; al menos una interacci&oacute;n social con un compa&ntilde;ero de clase cada d&iacute;a escolar. </em></li>
<li><em> El estudiante mostrar&aacute; un aumento del 20% en el tiempo de participaci&oacute;n</em><em> activa en las actividades escolares dentro de un per&iacute;odo de tres meses, seg&uacute;n lo registrado por el docente. </em></li>
</ol>
<p><strong>Estrategias y Adaptaciones: </strong></p>
<p>Estrategias para regular emociones y comportamientos:</p>
<p>(Ejemplo: Implementaci&oacute;n de horarios visuales y sistemas de</p>
<p>recompensas).</p>
<ol>
<li><strong><em>Visualizaci&oacute;n de emociones: </em></strong><em>Proporcionar im&aacute;genes o tarjetas con representaciones visuales de diferentes emociones (alegr&iacute;a, tristeza, enojo, etc.) y ense&ntilde;ar al estudiante a identificarlas tanto en ellos mismos como en los dem&aacute;s. Esto puede ayudarles a comprender y expresar sus propias emociones de manera m&aacute;s efectiva. </em></li>
<li><strong><em>Tiempo de calma</em></strong><em>: Establecer un rinc&oacute;n tranquilo en el aula o en otro lugar designado donde el estudiante pueda retirarse cuando se sienta abrumado o emocionalmente desregulado. Este espacio debe estar equipado con materiales sensoriales o actividades calmantes, como almohadas, mantas pesadas, libros o rompecabezas, que ayuden al estudiante a relajarse. </em></li>
<li><strong><em>T&eacute;cnicas de respiraci&oacute;n: </em></strong><em>Ense&ntilde;ar al estudiante t&eacute;cnicas de respiraci&oacute;n profunda y consciente para ayudarles a calmarse en momentos de ansiedad o estr&eacute;s. Pueden practicar la respiraci&oacute;n abdominal, inhalar y exhalar profundamente contando hasta cinco en cada fase. </em></li>
<li><strong><em>Planificaci&oacute;n visual del d&iacute;a: </em></strong><em>Utilizar un horario visual o un calendario para ayudar al estudiante a comprender y anticipar las actividades y cambios en la rutina diaria. Esto puede reducir la ansiedad asociada con las transiciones y proporcionar una sensaci&oacute;n de seguridad y previsibilidad. </em></li>
<li><strong><em>Apoyo social: </em></strong><em>Facilitar oportunidades para que el estudiante interact&uacute;e con sus compa&ntilde;eros en situaciones estructuradas y de apoyo. Por ejemplo, asignar un compa&ntilde;ero de juego durante el recreo o emparejar al estudiante con un mentor para actividades espec&iacute;ficas.</em></li>
<li><strong><em>Caja de herramientas de autorregulaci&oacute;n: </em></strong><em>Crear una "caja de herramientas" con estrategias de autorregulaci&oacute;n que el estudiante pueda utilizar cuando se sienta abrumado. Esto puede incluir tarjetas de visualizaci&oacute;n con pasos para calmarse, objetos sensoriales para manipular, una lista de personas de apoyo a las que pueden recurrir, entre otros recursos. </em></li>
<li><strong><em>Reforzar positivamente los comportamientos deseables: </em></strong><em>Reconocer y elogiar al estudiante cuando demuestre comportamientos positivos de regulaci&oacute;n emocional y conductual. Utilizar refuerzos tangibles o sociales, como el elogio verbal, las pegatinas o puntos de recompensa, para motivar al estudiante a utilizar las estrategias aprendidas. </em></li>
</ol>
<p>Estas estrategias deben adaptarse seg&uacute;n las necesidades individuales del estudiante y pueden ser implementadas tanto en el hogar como en el entorno escolar para apoyar su desarrollo emocional y conductual.</p>
<p><strong>Adaptaciones curriculares: </strong></p>
<ul>
<li>(Ejemplo: Reducci&oacute;n de est&iacute;mulos en el entorno de aprendizaje).</li>
</ul>
<p>Descripci&oacute;n: Algunos estudiantes con TEA pueden beneficiarse enormemente del uso de materiales visuales para comprender y procesar la informaci&oacute;n. Esta adaptaci&oacute;n implica proporcionar al estudiante materiales visuales como apoyo durante las actividades de aprendizaje.</p>
<p><strong>Ejemplo de aplicaci&oacute;n: </strong></p>
<ul>
<li><em> <strong>Materiales visuales para instrucciones: </strong>En lugar de dar instrucciones</em><em> verbales &uacute;nicamente, se pueden acompa&ntilde;ar con tarjetas o im&aacute;genes que representen las acciones o tareas a realizar. Por ejemplo, para una actividad de matem&aacute;ticas, se podr&iacute;a proporcionar una serie de im&aacute;genes que representen cada paso del proceso. </em></li>
<li><em> <strong>Horarios visuales: </strong>Se puede utilizar un horario visual o un calendario con</em><em> im&aacute;genes para mostrar la secuencia de actividades y eventos durante el d&iacute;a escolar. Esto ayuda al estudiante a anticipar los cambios y reduce la ansiedad asociada con las transiciones. </em></li>
<li><em> <strong>Apoyo visual para la comunicaci&oacute;n: </strong>Para los estudiantes que tienen</em><em> dificultades con el lenguaje oral, se pueden utilizar sistemas de comunicaci&oacute;n aumentativa y alternativa (CAA) que incluyan im&aacute;genes, pictogramas o tableros de comunicaci&oacute;n para facilitar la expresi&oacute;n de sus necesidades y deseos.</em></li>
<li><em> <strong>Organizaci&oacute;n visual del espacio: </strong>Utilizar etiquetas, se&ntilde;alizaciones o</em><em> im&aacute;genes para organizar el entorno de aprendizaje y ayudar al estudiante a comprender las expectativas y las rutinas. Por ejemplo, etiquetar los estantes con im&aacute;genes de los tipos de materiales que contienen o colocar se&ntilde;ales visuales que indiquen d&oacute;nde sentarse durante las actividades grupales. </em></li>
</ul>
<p>Beneficios: Esta adaptaci&oacute;n proporciona un medio de acceso m&aacute;s efectivo a la informaci&oacute;n para los estudiantes con TEA, ya que aprovecha sus fortalezas visuales y les ayuda a comprender mejor las instrucciones, procesar la informaci&oacute;n y participar de manera m&aacute;s activa en las actividades escolares. Adem&aacute;s, puede reducir la ansiedad al proporcionar una estructura clara y predecible en el entorno de aprendizaje.</p>
<p><strong>Recursos y Apoyos: </strong></p>
<p><strong>Apoyo individual durante episodios de desregulaci&oacute;n: </strong>(Ejemplo: Designaci&oacute;n de un/a profesional para intervenir cuando sea necesario).</p>
<p>Descripci&oacute;n: Designaci&oacute;n de un/a profesional para intervenir cuando sea necesario durante episodios de desregulaci&oacute;n emocional o conductual en estudiantes con TEA.</p>
<p><strong>Ejemplos de aplicaci&oacute;n: </strong></p>
<ol>
<li><em> <strong>Creaci&oacute;n de un plan de intervenci&oacute;n individualizado: </strong>Desarrollar un plan</em><em> de intervenci&oacute;n espec&iacute;fico para cada estudiante con TEA que incluya estrategias para manejar los episodios de desregulaci&oacute;n emocional. Este plan puede ser elaborado en colaboraci&oacute;n con profesionales especializados en TEA, padres, maestros y el estudiante, si es apropiado. </em></li>
<li><em> <strong>Designaci&oacute;n de un/a profesional de apoyo: </strong>Asignar un/a profesional de</em><em> apoyo, como un/a psic&oacute;logo/a escolar, consejero/a escolar o educador/a especializado/a en TEA, para intervenir cuando el estudiante experimente episodios de desregulaci&oacute;n emocional o conductual. Este profesional puede proporcionar apoyo individualizado al estudiante, utilizando estrategias espec&iacute;ficas para ayudarlo a regular sus emociones y comportamientos. </em></li>
<li><em> <strong>Establecimiento de se&ntilde;ales de alerta: </strong>Implementar un sistema de se&ntilde;ales</em><em> de alerta para identificar los signos tempranos de desregulaci&oacute;n emocional en el estudiante. Por ejemplo, el/la docente o el/a profesional de apoyo puede tener una se&ntilde;al convenida con el estudiante para indicar que es hora de tomarse un descanso o utilizar una estrategia de autorregulaci&oacute;n. </em></li>
<li><em> <strong>Entrenamiento en t&eacute;cnicas de autorregulaci&oacute;n: </strong>Ense&ntilde;ar al estudiante</em><em> t&eacute;cnicas de autorregulaci&oacute;n, como la respiraci&oacute;n profunda, la visualizaci&oacute;n o el uso de palabras clave, para ayudarlo a calmarse durante los episodios de desregulaci&oacute;n emocional. Estas t&eacute;cnicas pueden ser practicadas regularmente durante momentos de calma para que el estudiante pueda utilizarlas de manera efectiva cuando sea necesario. </em></li>
<li><strong><em>Comunicaci&oacute;n con los padres/tutores: </em></strong><em>Mantener una comunicaci&oacute;n abierta</em><em> y regular con los padres o tutores del estudiante para compartir informaci&oacute;n sobre los episodios de desregulaci&oacute;n emocional y colaborar en el desarrollo de estrategias de apoyo consistentes entre el hogar y la escuela</em>.</li>
</ol>
<p>Estos ejemplos de apoyo individual durante episodios de desregulaci&oacute;n pueden adaptarse seg&uacute;n las necesidades espec&iacute;ficas de cada estudiante con TEA y deben ser implementados de manera colaborativa con el equipo educativo y los padres/tutores del estudiante.</p>
<p><strong>Herramientas y materiales de apoyo: </strong>(Ejemplo: Uso de fichas de comunicaci&oacute;n visual).</p>
<p>Descripci&oacute;n: Utilizaci&oacute;n de recursos espec&iacute;ficos dise&ntilde;ados para apoyar las necesidades de comunicaci&oacute;n, organizaci&oacute;n y autorregulaci&oacute;n de los estudiantes con TEA.</p>
<p><strong>Ejemplos de aplicaci&oacute;n:</strong></p>
<ol>
<li><em> <strong>Fichas de comunicaci&oacute;n visual: </strong>Emplear fichas de comunicaci&oacute;n visual que</em><em> contengan im&aacute;genes o s&iacute;mbolos representativos de diferentes actividades, emociones o necesidades del estudiante. Estas fichas pueden ayudar al estudiante a expresarse de manera m&aacute;s efectiva y a comprender mejor las instrucciones y expectativas del entorno escolar. </em></li>
<li><em> <strong>Tableros de comunicaci&oacute;n: </strong>Crear tableros de comunicaci&oacute;n con s&iacute;mbolos o</em><em> im&aacute;genes que representen palabras o frases comunes utilizadas en el entorno escolar, como "quiero", "necesito", "me siento" o "termin&eacute;". Estos tableros pueden facilitar la comunicaci&oacute;n receptiva y expresiva del estudiante y promover su participaci&oacute;n en actividades escolares. </em></li>
<li><em> <strong>Planificadores visuales: </strong>Implementar planificadores visuales que ayuden al</em><em> estudiante a organizar su d&iacute;a escolar, las tareas asignadas y las expectativas de comportamiento. Estos planificadores pueden incluir im&aacute;genes o s&iacute;mbolos que representen las diferentes actividades y proporcionar una estructura visual clara para el estudiante. </em></li>
<li><em> <strong>Tarjetas de apoyo emocional: </strong>Proporcionar tarjetas de apoyo emocional</em><em> que contengan estrategias de autorregulaci&oacute;n, como "respirar profundamente", "contar hasta diez" o "pedir ayuda", que el estudiante pueda utilizar durante los momentos de desregulaci&oacute;n emocional. </em></li>
<li><em> <strong>Zonas de calma: </strong>Establecer zonas de calma en el aula o en otros espacios</em><em> escolares donde el estudiante pueda retirarse temporalmente para calmarse durante los episodios de desregulaci&oacute;n emocional. Estas zonas pueden estar equipadas con materiales de relajaci&oacute;n, como almohadas, mantas ponderadas o juguetes sensoriales. </em></li>
<li><em> <strong>Aplicaciones tecnol&oacute;gicas: </strong>Utilizar aplicaciones tecnol&oacute;gicas dise&ntilde;adas</em><em> espec&iacute;ficamente para apoyar las necesidades de los estudiantes con TEA, como aplicaciones de comunicaci&oacute;n aumentativa y alternativa (CAA) o aplicaciones de organizaci&oacute;n y planificaci&oacute;n. </em></li>
</ol>
<p>Estas herramientas y materiales de apoyo pueden ser adaptados seg&uacute;n las necesidades individuales de cada estudiante con TEA y deben ser utilizados de manera consistente y colaborativa por todo el equipo educativo para maximizar su efectividad.</p>
<p><strong>Procedimientos de Intervenci&oacute;n: </strong></p>
<p>Procedimiento para intervenir durante episodios de desregulaci&oacute;n: (Ejemplo: Implementaci&oacute;n de t&eacute;cnicas de desescalada y apoyo emocional).</p>
<p><strong>Procedimiento para intervenir durante episodios de desregulaci&oacute;n: </strong></p>
<p>Objetivo: Proporcionar apoyo efectivo y seguro a estudiantes con TEA durante episodios de desregulaci&oacute;n emocional o conductual.</p>
<p>Responsable: Personal designado para la intervenci&oacute;n durante episodios de desregulaci&oacute;n, como psic&oacute;logos escolares, consejeros, educadores especializados en TEA o profesionales capacitados.</p>
<p><strong>Pasos a seguir: </strong></p>
<ol>
<li><strong>Identificaci&oacute;n de signos de desregulaci&oacute;n: </strong>El personal educativo y los compa&ntilde;eros de clase deben estar capacitados para identificar los signos tempranos de desregulaci&oacute;n emocional en el estudiante, como aumento de la agitaci&oacute;n, cambios en el tono de voz o comportamientos repetitivos.</li>
<li><strong>Activaci&oacute;n del plan de intervenci&oacute;n individualizado: </strong>Si el estudiante tiene un plan de intervenci&oacute;n individualizado para episodios de desregulaci&oacute;n, el personal responsable debe activarlo de inmediato.</li>
<li><strong>Aproximaci&oacute;n calma y respetuosa: </strong>El profesional designado debe aproximarse al estudiante de manera calmada y respetuosa, manteniendo un tono de voz tranquilo y lenguaje corporal relajado para evitar aumentar su agitaci&oacute;n.</li>
<li><strong>Establecimiento de l&iacute;mites claros y seguros: </strong>Se deben establecer l&iacute;mites claros y seguros para proteger la seguridad del estudiante y de quienes lo rodean, evitando el uso de t&aacute;cticas coercitivas o punitivas que puedan aumentar su ansiedad.</li>
<li><strong>Implementaci&oacute;n de t&eacute;cnicas de desescalada: </strong>Utilizar t&eacute;cnicas de desescalada, como la respiraci&oacute;n profunda, la reducci&oacute;n de est&iacute;mulos sensoriales o la distracci&oacute;n con actividades calmantes, para ayudar al estudiante a recuperar la calma.</li>
<li><strong>Ofrecimiento de apoyo emocional: </strong>Proporcionar apoyo emocional al estudiante, mostr&aacute;ndole comprensi&oacute;n, empat&iacute;a y aceptaci&oacute;n incondicional durante el episodio de desregulaci&oacute;n.</li>
<li><strong>Fomento de la autorregulaci&oacute;n: </strong>Ense&ntilde;ar al estudiante estrategias de autorregulaci&oacute;n, como identificar sus emociones, expresar sus necesidades de manera adecuada o utilizar palabras clave para solicitar ayuda durante momentos de desregulaci&oacute;n.</li>
<li><strong>Comunicaci&oacute;n con el equipo de apoyo: </strong>Mantener una comunicaci&oacute;n abierta y colaborativa con otros miembros del equipo de apoyo del estudiante, incluidos padres, terapeutas y profesionales de la salud mental, para coordinar estrategias de intervenci&oacute;n consistentes.</li>
<li><strong>Seguimiento y evaluaci&oacute;n: </strong>Realizar un seguimiento posterior al episodio de desregulaci&oacute;n para evaluar la efectividad de las estrategias de intervenci&oacute;n y ajustar el plan de apoyo seg&uacute;n sea necesario para futuras situaciones similares.</li>
</ol>
<p>Este procedimiento debe ser practicado y revisado regularmente por el personal educativo y de apoyo para garantizar una respuesta efectiva y segura durante episodios de desregulaci&oacute;n en estudiantes con TEA.</p>
<p><strong>&nbsp;</strong></p>
<p><strong>Procedimiento para comunicar el progreso a las familias: </strong>(Ejemplo: Reuniones regulares con los padres para revisar el avance del estudiante).</p>
<p><strong>Procedimiento para comunicar el progreso a las familias: </strong></p>
<p><strong>Objetivo: </strong>Mantener a las familias informadas sobre el progreso acad&eacute;mico, social y emocional de los estudiantes con TEA de manera regular y efectiva.</p>
<p><strong>Responsable: </strong>Personal designado del establecimiento educativo, como docentes, psic&oacute;logos escolares, coordinadores de apoyo o directores.</p>
<p><strong>Pasos a seguir: </strong></p>
<ol>
<li><strong>Programaci&oacute;n de reuniones regulares: </strong>Establecer un calendario de reuniones regulares con las familias de los estudiantes con TEA para revisar su progreso. Estas reuniones pueden ser mensuales, trimestrales o seg&uacute;n lo acordado entre las partes involucradas.</li>
<li><strong>Invitaci&oacute;n a las familias: </strong>Enviar invitaciones formales a las familias con anticipaci&oacute;n para programar las reuniones, proporcionando opciones de horarios flexibles para garantizar la asistencia de todos los miembros de la familia que deseen participar.</li>
<li><strong>Preparaci&oacute;n de material informativo: </strong>Preparar material informativo relevante, como informes de progreso acad&eacute;mico, registros de comportamiento, muestras de trabajo y observaciones del personal educativo y de apoyo, para compartir con las familias durante las reuniones.</li>
<li><strong>Facilitaci&oacute;n de la reuni&oacute;n: </strong>Durante la reuni&oacute;n, facilitar un ambiente acogedor y colaborativo donde las familias se sientan c&oacute;modas para expresar sus inquietudes, hacer preguntas y contribuir con sus observaciones sobre el progreso de su hijo/a.</li>
<li><strong>Revisi&oacute;n del progreso del estudiante: </strong>Compartir informaci&oacute;n detallada sobre el progreso acad&eacute;mico, social y emocional del estudiante, destacando sus fortalezas, &aacute;reas de mejora y metas espec&iacute;ficas establecidas en su plan individualizado.</li>
<li><strong>Discusi&oacute;n de estrategias de apoyo: </strong>Colaborar con las familias para identificar y discutir estrategias efectivas de apoyo que puedan implementarse tanto en el hogar como en el entorno escolar para promover el &eacute;xito del estudiante.</li>
<li><strong>Establecimiento de metas futuras: </strong>Trabajar en conjunto para establecer metas realistas y alcanzables para el estudiante, asegur&aacute;ndose de que est&eacute;n alineadas con sus necesidades individuales y sus aspiraciones acad&eacute;micas y personales.</li>
<li><strong>Documentaci&oacute;n de la reuni&oacute;n: </strong>Registrar las discusiones, decisiones y acuerdos alcanzados durante la reuni&oacute;n en un documento formal, que puede incluir un resumen de los puntos principales y los pasos a seguir acordados.</li>
<li><strong>Seguimiento y retroalimentaci&oacute;n continua: </strong>Mantener una comunicaci&oacute;n abierta y continua con las familias entre las reuniones programadas, proporcionando actualizaciones peri&oacute;dicas sobre el progreso del estudiante y solicitando retroalimentaci&oacute;n sobre la efectividad de las estrategias implementadas.</li>
</ol>
<p>Este procedimiento garantiza una comunicaci&oacute;n clara, transparente y colaborativa entre el personal educativo y las familias de los estudiantes con TEA, promoviendo una asociaci&oacute;n efectiva para apoyar el &eacute;xito acad&eacute;mico y personal del estudiante.</p>
<p>&nbsp;</p>
<p>Seguimiento y Evaluaci&oacute;n:</p>
<p><strong>Frecuencia de seguimiento:</strong>(Ejemplo: Evaluaci&oacute;n mensual del progreso del estudiante).</p>
<p><strong>Descripci&oacute;n: </strong></p>
<ol>
<li><strong>Definici&oacute;n de la frecuencia: </strong>Se establece que la evaluaci&oacute;n del progreso del estudiante se llevar&aacute; a cabo cada dos semanas (quincenalmente) para garantizar un seguimiento cercano y oportuno de su rendimiento acad&eacute;mico, social y emocional.</li>
<li><strong>Justificaci&oacute;n: </strong>La evaluaci&oacute;n quincenal permite identificar r&aacute;pidamente cualquier cambio significativo en el progreso del estudiante, lo que permite una intervenci&oacute;n temprana y la ajuste de estrategias de apoyo si es necesario. Adem&aacute;s, esta frecuencia proporciona una oportunidad regular para revisar el impacto de las adaptaciones y estrategias implementadas.</li>
<li><strong>Proceso de evaluaci&oacute;n: </strong>Durante las semanas intermedias entre las evaluaciones quincenales, se llevan a cabo observaciones diarias por parte del personal educativo y de apoyo, as&iacute; como la recopilaci&oacute;n continua de datos relevantes sobre el comportamiento y el desempe&ntilde;o acad&eacute;mico del estudiante.</li>
<li><strong>Reuniones de seguimiento: </strong>Despu&eacute;s de cada evaluaci&oacute;n quincenal, se programan reuniones de seguimiento con el equipo de apoyo del estudiante, que incluye a los docentes, especialistas en educaci&oacute;n especial, psic&oacute;logos escolares y otros profesionales involucrados, para revisar los resultados y discutir los pr&oacute;ximos pasos.</li>
<li><strong>Comunicaci&oacute;n con las familias: </strong>Se informa a las familias sobre el progreso del estudiante durante las evaluaciones quincenales, proporcion&aacute;ndoles actualizaciones detalladas y oportunas sobre su rendimiento acad&eacute;mico y emocional, as&iacute; como recomendaciones para apoyar su aprendizaje en casa.</li>
</ol>
<p>Esta frecuencia de seguimiento quincenal asegura una supervisi&oacute;n regular y sistem&aacute;tica del progreso del estudiante con TEA, facilitando una respuesta proactiva a sus necesidades cambiantes y promoviendo su &eacute;xito acad&eacute;mico y personal.</p>
<p><strong>Indicadores de &eacute;xito: </strong>(Ejemplo: Reducci&oacute;n en la frecuencia y duraci&oacute;n de los episodios de desregulaci&oacute;n).</p>
<p>Aqu&iacute; tienes un ejemplo de indicadores de &eacute;xito relacionados con la reducci&oacute;n en la frecuencia y duraci&oacute;n de los episodios de desregulaci&oacute;n:</p>
<p>Indicadores de &eacute;xito:</p>
<p><strong>Reducci&oacute;n en la frecuencia de los episodios de desregulaci&oacute;n: </strong></p>
<ol>
<li>Definici&oacute;n: Se establece como indicador de &eacute;xito el n&uacute;mero total de episodios de desregulaci&oacute;n experimentados por el estudiante en un per&iacute;odo determinado, comparado con el per&iacute;odo anterior.</li>
<li>M&eacute;todo de medici&oacute;n: Se lleva un registro detallado de cada episodio de desregulaci&oacute;n, incluyendo la fecha, hora, duraci&oacute;n y descripci&oacute;n de las circunstancias que lo desencadenaron.</li>
<li>Meta: Se establece una meta espec&iacute;fica de reducci&oacute;n en el n&uacute;mero de episodios de desregulaci&oacute;n, por ejemplo, una disminuci&oacute;n del 20% en comparaci&oacute;n con el per&iacute;odo anterior.</li>
<li>Periodicidad de evaluaci&oacute;n: Los episodios de desregulaci&oacute;n se monitorean y registran diariamente por el personal educativo y de apoyo, y se analizan peri&oacute;dicamente para evaluar el progreso hacia la meta establecida.</li>
</ol>
<p><strong>Reducci&oacute;n en la duraci&oacute;n de los episodios de desregulaci&oacute;n: </strong></p>
<ol>
<li>Definici&oacute;n: Se define como la disminuci&oacute;n en el tiempo total que dura cada episodio de desregulaci&oacute;n, medido en minutos u horas.</li>
<li>M&eacute;todo de medici&oacute;n: Se registra la duraci&oacute;n de cada episodio de desregulaci&oacute;n, desde su inicio hasta su finalizaci&oacute;n, utilizando un sistema de cronometraje preciso.</li>
<li>Meta: Se establece una meta espec&iacute;fica de reducci&oacute;n en la duraci&oacute;n promedio de los episodios de desregulaci&oacute;n, por ejemplo, una disminuci&oacute;n del 30% en comparaci&oacute;n con el per&iacute;odo anterior.</li>
<li>Periodicidad de evaluaci&oacute;n: La duraci&oacute;n de los episodios de desregulaci&oacute;n se registra y analiza junto con la frecuencia de los episodios, evaluando el progreso hacia la meta en cada evaluaci&oacute;n quincenal.</li>
</ol>
<p>Estos indicadores de &eacute;xito proporcionan una medida objetiva y cuantificable del progreso del estudiante en el manejo de sus emociones y comportamientos, permitiendo una evaluaci&oacute;n continua de la eficacia de las estrategias de intervenci&oacute;n implementadas.</p>
<p>Fecha de Elaboraci&oacute;n del PAI:</p>
<p>Fecha de Revisi&oacute;n del PAI:</p>
<p>Firma del Equipo Interdisciplinario:</p>
<p>Esta ficha del PAI proporciona un marco estructurado para planificar, implementar y evaluar el apoyo individualizado para estudiantes con TEA que presentan desregulaci&oacute;n emocional y conductual en el entorno escolar.</p>`}static contratoContigencia(t,i,a,n){return`<p style='margin-top:0cm;margin-right:0cm;margin-bottom:0cm;margin-left:0cm;font-size:11.0pt;font-family:"Calibri",sans-serif;text-align:center;'><strong><span style='font-family:"Calibri Light",sans-serif;'>CONTRATO DE CONTINGENCIAS</span></strong></p>
<p style='margin-top:0cm;margin-right:0cm;margin-bottom:8.0pt;margin-left:0cm;font-size:11.0pt;font-family:"Calibri",sans-serif;text-align:center;'><strong><span style='font-family:"Calibri Light",sans-serif;'>Aplicaci&oacute;n del protocolo integral para la gesti&oacute;n de la desregulaci&oacute;n emocional y/o conductual</span></strong></p>
<p style='margin-top:0cm;margin-right:0cm;margin-bottom:8.0pt;margin-left:0cm;font-size:11.0pt;font-family:"Calibri",sans-serif;text-align:justify;'><strong><span style='font-family:"Calibri Light",sans-serif;'>Objetivo general:</span></strong><span style='font-family:"Calibri Light",sans-serif;'>&nbsp;Establecer de manera transparente medidas acordadas entre el apoderado/a y el establecimiento escolar en caso que el estudiante presente una desregulaci&oacute;n emocional y/o conductual en el contexto escolar, propiciando un abordaje preventivo y siempre resguardando la integridad del mismo y del resto de integrantes de la comunidad educativa.</span></p>
<p style='margin-top:0cm;margin-right:0cm;margin-bottom:8.0pt;margin-left:0cm;font-size:11.0pt;font-family:"Calibri",sans-serif;text-align:justify;'><strong><span style='font-family:"Calibri Light",sans-serif;'>Antecedentes:</span></strong></p>
<table style="width: 4.4e+2pt;border-collapse:collapse;border:none;">
    <tbody>
        <tr>
            <td style="width: 212.4pt;border: 1pt solid black;padding: 0cm 5.4pt;vertical-align: top;">
                <p style='margin-top:0cm;margin-right:0cm;margin-bottom:8.0pt;margin-left:0cm;font-size:11.0pt;font-family:"Calibri",sans-serif;text-align:justify;'><strong><span style='font-family:"Calibri Light",sans-serif;'>Nombre del estudiante&nbsp;</span></strong></p>
            </td>
            <td style="width: 229pt;border-top: 1pt solid black;border-right: 1pt solid black;border-bottom: 1pt solid black;border-image: initial;border-left: none;padding: 0cm 5.4pt;vertical-align: top;">
                <p style='margin-top:0cm;margin-right:0cm;margin-bottom:8.0pt;margin-left:0cm;font-size:11.0pt;font-family:"Calibri",sans-serif;text-align:justify;'><span style='font-family:"Calibri Light",sans-serif;'>&nbsp;${t}</span></p>
            </td>
        </tr>
        <tr>
            <td style="width: 212.4pt;border-right: 1pt solid black;border-bottom: 1pt solid black;border-left: 1pt solid black;border-image: initial;border-top: none;padding: 0cm 5.4pt;vertical-align: top;">
                <p style='margin-top:0cm;margin-right:0cm;margin-bottom:8.0pt;margin-left:0cm;font-size:11.0pt;font-family:"Calibri",sans-serif;text-align:justify;'><strong><span style='font-family:"Calibri Light",sans-serif;'>Nombre del apoderado/a</span></strong></p>
            </td>
            <td style="width: 229pt;border-top: none;border-left: none;border-bottom: 1pt solid black;border-right: 1pt solid black;padding: 0cm 5.4pt;vertical-align: top;">
                <p style='margin-top:0cm;margin-right:0cm;margin-bottom:8.0pt;margin-left:0cm;font-size:11.0pt;font-family:"Calibri",sans-serif;text-align:justify;'><span style='font-family:"Calibri Light",sans-serif;'>&nbsp;${i}</span></p>
            </td>
        </tr>
        <tr>
            <td style="width: 212.4pt;border-right: 1pt solid black;border-bottom: 1pt solid black;border-left: 1pt solid black;border-image: initial;border-top: none;padding: 0cm 5.4pt;vertical-align: top;">
                <p style='margin-top:0cm;margin-right:0cm;margin-bottom:8.0pt;margin-left:0cm;font-size:11.0pt;font-family:"Calibri",sans-serif;text-align:justify;'><strong><span style='font-family:"Calibri Light",sans-serif;'>Nombre representante establecimiento</span></strong></p>
            </td>
            <td style="width: 229pt;border-top: none;border-left: none;border-bottom: 1pt solid black;border-right: 1pt solid black;padding: 0cm 5.4pt;vertical-align: top;">
                <p style='margin-top:0cm;margin-right:0cm;margin-bottom:8.0pt;margin-left:0cm;font-size:11.0pt;font-family:"Calibri",sans-serif;text-align:justify;'><span style='font-family:"Calibri Light",sans-serif;'>&nbsp;${a}</span></p>
            </td>
        </tr>
        <tr>
            <td style="width: 212.4pt;border-right: 1pt solid black;border-bottom: 1pt solid black;border-left: 1pt solid black;border-image: initial;border-top: none;padding: 0cm 5.4pt;vertical-align: top;">
                <p style='margin-top:0cm;margin-right:0cm;margin-bottom:8.0pt;margin-left:0cm;font-size:11.0pt;font-family:"Calibri",sans-serif;text-align:justify;'><strong><span style='font-family:"Calibri Light",sans-serif;'>Fecha&nbsp;</span></strong></p>
            </td>
            <td style="width: 229pt;border-top: none;border-left: none;border-bottom: 1pt solid black;border-right: 1pt solid black;padding: 0cm 5.4pt;vertical-align: top;">
                <p style='margin-top:0cm;margin-right:0cm;margin-bottom:8.0pt;margin-left:0cm;font-size:11.0pt;font-family:"Calibri",sans-serif;text-align:justify;'><span style='font-family:"Calibri Light",sans-serif;'>&nbsp;${n}</span></p>
            </td>
        </tr>
    </tbody>
</table>
<p style='margin-top:0cm;margin-right:0cm;margin-bottom:0cm;margin-left:36.0pt;font-size:11.0pt;font-family:"Calibri",sans-serif;text-align:justify;border:none;'><span style='font-family:"Calibri Light",sans-serif;color:black;'>&nbsp;</span></p>
<ol style="margin-bottom:0cm;margin-top:0cm;" start="1" type="1">
    <li style='margin-top:0cm;margin-right:0cm;margin-bottom:0cm;margin-left:0cm;font-size:11.0pt;font-family:"Calibri",sans-serif;color:black;text-align:justify;border:none;'><span style='font-family:"Calibri Light",sans-serif;'>El apoderado declara estar en conocimiento de los procedimientos descritos en el protocolo integral para la gesti&oacute;n de la desregulaci&oacute;n emocional y/o conductual de estudiantes.</span></li>
    <li style='margin-top:0cm;margin-right:0cm;margin-bottom:0cm;margin-left:0cm;font-size:11.0pt;font-family:"Calibri",sans-serif;color:red;text-align:justify;border:none;'><span style='font-family:"Calibri Light",sans-serif;'>El apoderado/a asistir&aacute; inmediatamente en caso que su pupilo presente una desregulaci&oacute;n emocional y/o conductual, el establecimiento escolar se compromete a brindar los primeros auxilios y la contenci&oacute;n durante el tiempo de trayecto del apoderado/a al establecimiento.</span></li>
    <li style='margin-top:0cm;margin-right:0cm;margin-bottom:0cm;margin-left:0cm;font-size:11.0pt;font-family:"Calibri",sans-serif;color:black;text-align:justify;border:none;'><span style='font-family:"Calibri Light",sans-serif;'>El establecimiento emitir&aacute; un certificado donde informar&aacute; hora de inicio de la DEC, hora de llamado al apoderado/a, hora de llegada del apoderado/a y hora de t&eacute;rmino de la DEC, el certificado ser&aacute; entregado al apoderado para ser presentado a su empleador.</span></li>
    <li style='margin-top:0cm;margin-right:0cm;margin-bottom:0cm;margin-left:0cm;font-size:11.0pt;font-family:"Calibri",sans-serif;color:black;text-align:justify;border:none;'><span style='font-family:"Calibri Light",sans-serif;'>El personal especializado o SOS que entregar&aacute; los primeros auxilios y contenci&oacute;n ser&aacute;__________________________________________ en caso de no encontrarse en el establecimiento ser&aacute; remplazado en dicha labor por el siguiente profesional___________________________________________.</span></li>
    <li style='margin-top:0cm;margin-right:0cm;margin-bottom:8.0pt;margin-left:0cm;font-size:11.0pt;font-family:"Calibri",sans-serif;color:black;text-align:justify;border:none;'><span style='font-family:"Calibri Light",sans-serif;'>Se acuerda flexibilizaci&oacute;n horaria del estudiante S&iacute;_____ No_____ en caso que la respuesta es s&iacute; llenar el siguiente cuadro:</span></li>
</ol>
<table style="width: 4.1e+2pt;border-collapse:collapse;border:none;">
    <tbody>
        <tr>
            <td style="width: 67.5pt;border: 1pt solid rgb(142, 170, 219);background: rgb(217, 226, 243);padding: 0cm 5.4pt;vertical-align: top;">
                <p style='margin-top:0cm;margin-right:0cm;margin-bottom:8.0pt;margin-left:0cm;font-size:11.0pt;font-family:"Calibri",sans-serif;text-align:justify;line-height:  107%;border:none;'><span style='font-family:"Calibri Light",sans-serif;color:black;'>D&iacute;a&nbsp;</span></p>
            </td>
            <td style="width: 67.55pt;border-top: 1pt solid rgb(142, 170, 219);border-right: 1pt solid rgb(142, 170, 219);border-bottom: 1pt solid rgb(142, 170, 219);border-image: initial;border-left: none;background: rgb(217, 226, 243);padding: 0cm 5.4pt;vertical-align: top;">
                <p style='margin-top:0cm;margin-right:0cm;margin-bottom:8.0pt;margin-left:0cm;font-size:11.0pt;font-family:"Calibri",sans-serif;text-align:center;line-height:107%;border:none;'><span style='font-family:  "Calibri Light",sans-serif;color:black;'>Lunes</span></p>
            </td>
            <td style="width: 67.55pt;border-top: 1pt solid rgb(142, 170, 219);border-right: 1pt solid rgb(142, 170, 219);border-bottom: 1pt solid rgb(142, 170, 219);border-image: initial;border-left: none;background: rgb(217, 226, 243);padding: 0cm 5.4pt;vertical-align: top;">
                <p style='margin-top:0cm;margin-right:0cm;margin-bottom:8.0pt;margin-left:0cm;font-size:11.0pt;font-family:"Calibri",sans-serif;text-align:center;line-height:107%;border:none;'><span style='font-family:  "Calibri Light",sans-serif;color:black;'>Martes</span></p>
            </td>
            <td style="width: 67.6pt;border-top: 1pt solid rgb(142, 170, 219);border-right: 1pt solid rgb(142, 170, 219);border-bottom: 1pt solid rgb(142, 170, 219);border-image: initial;border-left: none;background: rgb(217, 226, 243);padding: 0cm 5.4pt;vertical-align: top;">
                <p style='margin-top:0cm;margin-right:0cm;margin-bottom:8.0pt;margin-left:0cm;font-size:11.0pt;font-family:"Calibri",sans-serif;text-align:center;line-height:107%;border:none;'><span style='font-family:  "Calibri Light",sans-serif;color:black;'>Mi&eacute;rcoles</span></p>
            </td>
            <td style="width: 67.6pt;border-top: 1pt solid rgb(142, 170, 219);border-right: 1pt solid rgb(142, 170, 219);border-bottom: 1pt solid rgb(142, 170, 219);border-image: initial;border-left: none;background: rgb(217, 226, 243);padding: 0cm 5.4pt;vertical-align: top;">
                <p style='margin-top:0cm;margin-right:0cm;margin-bottom:8.0pt;margin-left:0cm;font-size:11.0pt;font-family:"Calibri",sans-serif;text-align:center;line-height:107%;border:none;'><span style='font-family:  "Calibri Light",sans-serif;color:black;'>Jueves</span></p>
            </td>
            <td style="width: 67.6pt;border-top: 1pt solid rgb(142, 170, 219);border-right: 1pt solid rgb(142, 170, 219);border-bottom: 1pt solid rgb(142, 170, 219);border-image: initial;border-left: none;background: rgb(217, 226, 243);padding: 0cm 5.4pt;vertical-align: top;">
                <p style='margin-top:0cm;margin-right:0cm;margin-bottom:8.0pt;margin-left:0cm;font-size:11.0pt;font-family:"Calibri",sans-serif;text-align:center;line-height:107%;border:none;'><span style='font-family:  "Calibri Light",sans-serif;color:black;'>Viernes</span></p>
            </td>
        </tr>
        <tr>
            <td style="width: 67.5pt;border-right: 1pt solid rgb(142, 170, 219);border-bottom: 1pt solid rgb(142, 170, 219);border-left: 1pt solid rgb(142, 170, 219);border-image: initial;border-top: none;padding: 0cm 5.4pt;vertical-align: top;">
                <p style='margin-top:0cm;margin-right:0cm;margin-bottom:8.0pt;margin-left:0cm;font-size:11.0pt;font-family:"Calibri",sans-serif;text-align:justify;line-height:  107%;border:none;'><span style='font-family:"Calibri Light",sans-serif;color:black;'>Ingreso&nbsp;</span></p>
            </td>
            <td style="width: 67.55pt;border-top: none;border-left: none;border-bottom: 1pt solid rgb(142, 170, 219);border-right: 1pt solid rgb(142, 170, 219);padding: 0cm 5.4pt;vertical-align: top;">
                <p style='margin-top:0cm;margin-right:0cm;margin-bottom:8.0pt;margin-left:0cm;font-size:11.0pt;font-family:"Calibri",sans-serif;text-align:justify;line-height:  107%;border:none;'><span style='font-family:"Calibri Light",sans-serif;color:black;'>&nbsp;</span></p>
            </td>
            <td style="width: 67.55pt;border-top: none;border-left: none;border-bottom: 1pt solid rgb(142, 170, 219);border-right: 1pt solid rgb(142, 170, 219);padding: 0cm 5.4pt;vertical-align: top;">
                <p style='margin-top:0cm;margin-right:0cm;margin-bottom:8.0pt;margin-left:0cm;font-size:11.0pt;font-family:"Calibri",sans-serif;text-align:justify;line-height:  107%;border:none;'><span style='font-family:"Calibri Light",sans-serif;color:black;'>&nbsp;</span></p>
            </td>
            <td style="width: 67.6pt;border-top: none;border-left: none;border-bottom: 1pt solid rgb(142, 170, 219);border-right: 1pt solid rgb(142, 170, 219);padding: 0cm 5.4pt;vertical-align: top;">
                <p style='margin-top:0cm;margin-right:0cm;margin-bottom:8.0pt;margin-left:0cm;font-size:11.0pt;font-family:"Calibri",sans-serif;text-align:justify;line-height:  107%;border:none;'><span style='font-family:"Calibri Light",sans-serif;color:black;'>&nbsp;</span></p>
            </td>
            <td style="width: 67.6pt;border-top: none;border-left: none;border-bottom: 1pt solid rgb(142, 170, 219);border-right: 1pt solid rgb(142, 170, 219);padding: 0cm 5.4pt;vertical-align: top;">
                <p style='margin-top:0cm;margin-right:0cm;margin-bottom:8.0pt;margin-left:0cm;font-size:11.0pt;font-family:"Calibri",sans-serif;text-align:justify;line-height:  107%;border:none;'><span style='font-family:"Calibri Light",sans-serif;color:black;'>&nbsp;</span></p>
            </td>
            <td style="width: 67.6pt;border-top: none;border-left: none;border-bottom: 1pt solid rgb(142, 170, 219);border-right: 1pt solid rgb(142, 170, 219);padding: 0cm 5.4pt;vertical-align: top;">
                <p style='margin-top:0cm;margin-right:0cm;margin-bottom:8.0pt;margin-left:0cm;font-size:11.0pt;font-family:"Calibri",sans-serif;text-align:justify;line-height:  107%;border:none;'><span style='font-family:"Calibri Light",sans-serif;color:black;'>&nbsp;</span></p>
            </td>
        </tr>
        <tr>
            <td style="width: 67.5pt;border-right: 1pt solid rgb(142, 170, 219);border-bottom: 1pt solid rgb(142, 170, 219);border-left: 1pt solid rgb(142, 170, 219);border-image: initial;border-top: none;background: rgb(217, 226, 243);padding: 0cm 5.4pt;vertical-align: top;">
                <p style='margin-top:0cm;margin-right:0cm;margin-bottom:8.0pt;margin-left:0cm;font-size:11.0pt;font-family:"Calibri",sans-serif;text-align:justify;line-height:  107%;border:none;'><span style='font-family:"Calibri Light",sans-serif;color:black;'>Salida</span></p>
            </td>
            <td style="width: 67.55pt;border-top: none;border-left: none;border-bottom: 1pt solid rgb(142, 170, 219);border-right: 1pt solid rgb(142, 170, 219);background: rgb(217, 226, 243);padding: 0cm 5.4pt;vertical-align: top;">
                <p style='margin-top:0cm;margin-right:0cm;margin-bottom:8.0pt;margin-left:0cm;font-size:11.0pt;font-family:"Calibri",sans-serif;text-align:justify;line-height:  107%;border:none;'><span style='font-family:"Calibri Light",sans-serif;color:black;'>&nbsp;</span></p>
            </td>
            <td style="width: 67.55pt;border-top: none;border-left: none;border-bottom: 1pt solid rgb(142, 170, 219);border-right: 1pt solid rgb(142, 170, 219);background: rgb(217, 226, 243);padding: 0cm 5.4pt;vertical-align: top;">
                <p style='margin-top:0cm;margin-right:0cm;margin-bottom:8.0pt;margin-left:0cm;font-size:11.0pt;font-family:"Calibri",sans-serif;text-align:justify;line-height:  107%;border:none;'><span style='font-family:"Calibri Light",sans-serif;color:black;'>&nbsp;</span></p>
            </td>
            <td style="width: 67.6pt;border-top: none;border-left: none;border-bottom: 1pt solid rgb(142, 170, 219);border-right: 1pt solid rgb(142, 170, 219);background: rgb(217, 226, 243);padding: 0cm 5.4pt;vertical-align: top;">
                <p style='margin-top:0cm;margin-right:0cm;margin-bottom:8.0pt;margin-left:0cm;font-size:11.0pt;font-family:"Calibri",sans-serif;text-align:justify;line-height:  107%;border:none;'><span style='font-family:"Calibri Light",sans-serif;color:black;'>&nbsp;</span></p>
            </td>
            <td style="width: 67.6pt;border-top: none;border-left: none;border-bottom: 1pt solid rgb(142, 170, 219);border-right: 1pt solid rgb(142, 170, 219);background: rgb(217, 226, 243);padding: 0cm 5.4pt;vertical-align: top;">
                <p style='margin-top:0cm;margin-right:0cm;margin-bottom:8.0pt;margin-left:0cm;font-size:11.0pt;font-family:"Calibri",sans-serif;text-align:justify;line-height:  107%;border:none;'><span style='font-family:"Calibri Light",sans-serif;color:black;'>&nbsp;</span></p>
            </td>
            <td style="width: 67.6pt;border-top: none;border-left: none;border-bottom: 1pt solid rgb(142, 170, 219);border-right: 1pt solid rgb(142, 170, 219);background: rgb(217, 226, 243);padding: 0cm 5.4pt;vertical-align: top;">
                <p style='margin-top:0cm;margin-right:0cm;margin-bottom:8.0pt;margin-left:0cm;font-size:11.0pt;font-family:"Calibri",sans-serif;text-align:justify;line-height:  107%;border:none;'><span style='font-family:"Calibri Light",sans-serif;color:black;'>&nbsp;</span></p>
            </td>
        </tr>
    </tbody>
</table>
<p style='margin-top:0cm;margin-right:0cm;margin-bottom:8.0pt;margin-left:0cm;font-size:11.0pt;font-family:"Calibri",sans-serif;text-align:justify;'><span style='font-family:"Calibri Light",sans-serif;'>&nbsp;</span></p>
<p style='margin-top:0cm;margin-right:0cm;margin-bottom:8.0pt;margin-left:0cm;font-size:11.0pt;font-family:"Calibri",sans-serif;text-align:justify;'><span style='font-family:"Calibri Light",sans-serif;'>&nbsp;</span></p>
<p style='margin-top:0cm;margin-right:0cm;margin-bottom:8.0pt;margin-left:0cm;font-size:11.0pt;font-family:"Calibri",sans-serif;text-align:justify;'><span style='font-family:"Calibri Light",sans-serif;'>&nbsp;</span></p>
<p style='margin-top:0cm;margin-right:0cm;margin-bottom:8.0pt;margin-left:0cm;font-size:11.0pt;font-family:"Calibri",sans-serif;text-align:justify;'><span style='font-family:"Calibri Light",sans-serif;'>&nbsp;</span></p>
<table style="width: 4.4e+2pt;border-collapse:collapse;border:none;">
    <tbody>
        <tr>
            <td style="width: 147.1pt;border-right: none;border-bottom: none;border-left: none;border-image: initial;border-top: 1pt solid black;padding: 0cm 5.4pt;vertical-align: top;">
                <p style='margin-top:0cm;margin-right:0cm;margin-bottom:8.0pt;margin-left:0cm;font-size:11.0pt;font-family:"Calibri",sans-serif;text-align:center;'><strong><span style='font-family:"Calibri Light",sans-serif;'>Firma apoderado/a</span></strong></p>
            </td>
            <td style="width: 147.15pt;border: none;padding: 0cm 5.4pt;vertical-align: top;">
                <p style='margin-top:0cm;margin-right:0cm;margin-bottom:8.0pt;margin-left:0cm;font-size:11.0pt;font-family:"Calibri",sans-serif;text-align:center;'><strong><span style='font-family:"Calibri Light",sans-serif;'>&nbsp;</span></strong></p>
            </td>
            <td style="width: 147.15pt;border-right: none;border-bottom: none;border-left: none;border-image: initial;border-top: 1pt solid black;padding: 0cm 5.4pt;vertical-align: top;">
                <p style='margin-top:0cm;margin-right:0cm;margin-bottom:8.0pt;margin-left:0cm;font-size:11.0pt;font-family:"Calibri",sans-serif;text-align:center;'><strong><span style='font-family:"Calibri Light",sans-serif;'>Firma y timbre representante establecimiento</span></strong></p>
            </td>
        </tr>
    </tbody>
</table>`}static certificadoEmpleador(t,i,a,n){return`<p style='margin-top:0cm;margin-right:0cm;margin-bottom:0cm;margin-left:0cm;font-size:11.0pt;font-family:"Calibri",sans-serif;text-align:center;'><strong><span style='font-family:"Calibri Light",sans-serif;'>CERTIFICADO</span></strong></p>
<p style='margin-top:0cm;margin-right:0cm;margin-bottom:8.0pt;margin-left:0cm;font-size:11.0pt;font-family:"Calibri",sans-serif;text-align:center;'><strong><span style='font-family:"Calibri Light",sans-serif;'>Aplicaci&oacute;n del protocolo integral para la gesti&oacute;n de la desregulaci&oacute;n emocional y/o conductual</span></strong></p>
<table style="width: 4.4e+2pt;border-collapse:collapse;border:none;">
    <tbody>
        <tr>
            <td style="width: 148.6pt;border: 1pt solid rgb(142, 170, 219);background: rgb(217, 226, 243);padding: 0cm 5.4pt;vertical-align: top;">
                <p style='margin-top:0cm;margin-right:0cm;margin-bottom:0cm;margin-left:0cm;font-size:11.0pt;font-family:"Calibri",sans-serif;text-align:justify;line-height:  normal;'><span style='font-family:"Calibri Light",sans-serif;color:black;'>NOMBRE DEL ESTUDIANTE</span></p>
            </td>
            <td style="width: 292.8pt;border-top: 1pt solid rgb(142, 170, 219);border-right: 1pt solid rgb(142, 170, 219);border-bottom: 1pt solid rgb(142, 170, 219);border-image: initial;border-left: none;background: rgb(217, 226, 243);padding: 0cm 5.4pt;vertical-align: top;">
                <p style='margin-top:0cm;margin-right:0cm;margin-bottom:0cm;margin-left:0cm;font-size:11.0pt;font-family:"Calibri",sans-serif;text-align:justify;line-height:  normal;'><span style='font-family:"Calibri Light",sans-serif;'>&nbsp;${t}</span></p>
            </td>
        </tr>
        <tr>
            <td style="width: 148.6pt;border-right: 1pt solid rgb(142, 170, 219);border-bottom: 1pt solid rgb(142, 170, 219);border-left: 1pt solid rgb(142, 170, 219);border-image: initial;border-top: none;padding: 0cm 5.4pt;vertical-align: top;">
                <p style='margin-top:0cm;margin-right:0cm;margin-bottom:0cm;margin-left:0cm;font-size:11.0pt;font-family:"Calibri",sans-serif;text-align:justify;line-height:  normal;'><span style='font-family:"Calibri Light",sans-serif;'>CURSO&nbsp;</span></p>
            </td>
            <td style="width: 292.8pt;border-top: none;border-left: none;border-bottom: 1pt solid rgb(142, 170, 219);border-right: 1pt solid rgb(142, 170, 219);padding: 0cm 5.4pt;vertical-align: top;">
                <p style='margin-top:0cm;margin-right:0cm;margin-bottom:0cm;margin-left:0cm;font-size:11.0pt;font-family:"Calibri",sans-serif;text-align:justify;line-height:  normal;'><span style='font-family:"Calibri Light",sans-serif;'>&nbsp;${i}</span></p>
            </td>
        </tr>
    </tbody>
</table>
<p style='margin-top:0cm;margin-right:0cm;margin-bottom:0cm;margin-left:0cm;font-size:11.0pt;font-family:"Calibri",sans-serif;text-align:justify;'><span style='font-family:"Calibri Light",sans-serif;'>&nbsp;</span></p>
<table style="width: 4.4e+2pt;border-collapse:collapse;border:none;">
    <tbody>
        <tr>
            <td style="width: 148.6pt;border: 1pt solid rgb(142, 170, 219);background: rgb(217, 226, 243);padding: 0cm 5.4pt;vertical-align: top;">
                <p style='margin-top:0cm;margin-right:0cm;margin-bottom:0cm;margin-left:0cm;font-size:11.0pt;font-family:"Calibri",sans-serif;text-align:justify;line-height:  normal;'><span style='font-family:"Calibri Light",sans-serif;color:black;'>NOMBRE APODERADO/A</span></p>
            </td>
            <td style="width: 292.8pt;border-top: 1pt solid rgb(142, 170, 219);border-right: 1pt solid rgb(142, 170, 219);border-bottom: 1pt solid rgb(142, 170, 219);border-image: initial;border-left: none;background: rgb(217, 226, 243);padding: 0cm 5.4pt;vertical-align: top;">
                <p style='margin-top:0cm;margin-right:0cm;margin-bottom:0cm;margin-left:0cm;font-size:11.0pt;font-family:"Calibri",sans-serif;text-align:justify;line-height:  normal;'><span style='font-family:"Calibri Light",sans-serif;'>&nbsp;${a}</span></p>
            </td>
        </tr>
        <tr>
            <td style="width: 148.6pt;border-right: 1pt solid rgb(142, 170, 219);border-bottom: 1pt solid rgb(142, 170, 219);border-left: 1pt solid rgb(142, 170, 219);border-image: initial;border-top: none;padding: 0cm 5.4pt;vertical-align: top;">
                <p style='margin-top:0cm;margin-right:0cm;margin-bottom:0cm;margin-left:0cm;font-size:11.0pt;font-family:"Calibri",sans-serif;text-align:justify;line-height:  normal;'><span style='font-family:"Calibri Light",sans-serif;'>RUT APODERADO/A</span></p>
            </td>
            <td style="width: 292.8pt;border-top: none;border-left: none;border-bottom: 1pt solid rgb(142, 170, 219);border-right: 1pt solid rgb(142, 170, 219);padding: 0cm 5.4pt;vertical-align: top;">
                <p style='margin-top:0cm;margin-right:0cm;margin-bottom:0cm;margin-left:0cm;font-size:11.0pt;font-family:"Calibri",sans-serif;text-align:justify;line-height:  normal;'><span style='font-family:"Calibri Light",sans-serif;'>&nbsp;${n}</span></p>
            </td>
        </tr>
    </tbody>
</table>
<p style='margin-top:0cm;margin-right:0cm;margin-bottom:0cm;margin-left:0cm;font-size:11.0pt;font-family:"Calibri",sans-serif;text-align:justify;'><span style='font-family:"Calibri Light",sans-serif;'>&nbsp;</span></p>
<table style="width: 4.4e+2pt;border-collapse:collapse;border:none;">
    <tbody>
        <tr>
            <td style="width: 441.4pt;border: 1pt solid rgb(142, 170, 219);background: rgb(217, 226, 243);padding: 0cm 5.4pt;vertical-align: top;">
                <p style='margin-top:0cm;margin-right:0cm;margin-bottom:0cm;margin-left:0cm;font-size:11.0pt;font-family:"Calibri",sans-serif;text-align:center;line-height:normal;'><span style='font-family:  "Calibri Light",sans-serif;color:black;'>DESCRIPICI&Oacute;N DE LA DEC (antecedentes relevantes, lugar, duraci&oacute;n, entre otros)</span></p>
            </td>
        </tr>
        <tr>
            <td style="width: 441.4pt;border-right: 1pt solid rgb(142, 170, 219);border-bottom: 1pt solid rgb(142, 170, 219);border-left: 1pt solid rgb(142, 170, 219);border-image: initial;border-top: none;padding: 0cm 5.4pt;vertical-align: top;">
                <p style='margin-top:0cm;margin-right:0cm;margin-bottom:0cm;margin-left:0cm;font-size:11.0pt;font-family:"Calibri",sans-serif;text-align:justify;line-height:  normal;'><span style='font-family:"Calibri Light",sans-serif;'>&nbsp;</span></p>
                <p style='margin-top:0cm;margin-right:0cm;margin-bottom:0cm;margin-left:0cm;font-size:11.0pt;font-family:"Calibri",sans-serif;text-align:justify;line-height:  normal;'><span style='font-family:"Calibri Light",sans-serif;'>&nbsp;</span></p>
                <p style='margin-top:0cm;margin-right:0cm;margin-bottom:0cm;margin-left:0cm;font-size:11.0pt;font-family:"Calibri",sans-serif;text-align:justify;line-height:  normal;'><span style='font-family:"Calibri Light",sans-serif;'>&nbsp;</span></p>
                <p style='margin-top:0cm;margin-right:0cm;margin-bottom:0cm;margin-left:0cm;font-size:11.0pt;font-family:"Calibri",sans-serif;text-align:justify;line-height:  normal;'><span style='font-family:"Calibri Light",sans-serif;'>&nbsp;</span></p>
                <p style='margin-top:0cm;margin-right:0cm;margin-bottom:0cm;margin-left:0cm;font-size:11.0pt;font-family:"Calibri",sans-serif;text-align:justify;line-height:  normal;'><span style='font-family:"Calibri Light",sans-serif;'>&nbsp;</span></p>
                <p style='margin-top:0cm;margin-right:0cm;margin-bottom:0cm;margin-left:0cm;font-size:11.0pt;font-family:"Calibri",sans-serif;text-align:justify;line-height:  normal;'><span style='font-family:"Calibri Light",sans-serif;'>&nbsp;</span></p>
            </td>
        </tr>
    </tbody>
</table>
<p style='margin-top:0cm;margin-right:0cm;margin-bottom:0cm;margin-left:0cm;font-size:11.0pt;font-family:"Calibri",sans-serif;text-align:justify;'><span style='font-family:"Calibri Light",sans-serif;'>&nbsp;</span></p>
<table style="width: 4.4e+2pt;border-collapse:collapse;border:none;">
    <tbody>
        <tr>
            <td colspan="3" style="width: 441.4pt;border: 1pt solid rgb(142, 170, 219);background: rgb(217, 226, 243);padding: 0cm 5.4pt;vertical-align: top;">
                <p style='margin-top:0cm;margin-right:0cm;margin-bottom:0cm;margin-left:0cm;font-size:11.0pt;font-family:"Calibri",sans-serif;text-align:center;line-height:normal;'><span style='font-family:  "Calibri Light",sans-serif;color:black;'>PERSONAL QUE INTERVIENE EN LA DEC</span></p>
            </td>
        </tr>
        <tr>
            <td style="width: 147.1pt;border-right: 1pt solid rgb(142, 170, 219);border-bottom: 1pt solid rgb(142, 170, 219);border-left: 1pt solid rgb(142, 170, 219);border-image: initial;border-top: none;padding: 0cm 5.4pt;vertical-align: top;">
                <p style='margin-top:0cm;margin-right:0cm;margin-bottom:0cm;margin-left:0cm;font-size:11.0pt;font-family:"Calibri",sans-serif;text-align:center;line-height:normal;'><span style='font-family:"Calibri Light",sans-serif;'>Etapa inicial</span></p>
            </td>
            <td style="width: 147.15pt;border-top: none;border-left: none;border-bottom: 1pt solid rgb(142, 170, 219);border-right: 1pt solid rgb(142, 170, 219);padding: 0cm 5.4pt;vertical-align: top;">
                <p style='margin-top:0cm;margin-right:0cm;margin-bottom:0cm;margin-left:0cm;font-size:11.0pt;font-family:"Calibri",sans-serif;text-align:center;line-height:normal;'><span style='font-family:"Calibri Light",sans-serif;'>Etapa de aumento de la desregulaci&oacute;n emocional y conductual, con riesgo para s&iacute; mismo/a o terceros</span></p>
            </td>
            <td style="width: 147.15pt;border-top: none;border-left: none;border-bottom: 1pt solid rgb(142, 170, 219);border-right: 1pt solid rgb(142, 170, 219);padding: 0cm 5.4pt;vertical-align: top;">
                <p style='margin-top:0cm;margin-right:0cm;margin-bottom:0cm;margin-left:0cm;font-size:11.0pt;font-family:"Calibri",sans-serif;text-align:center;line-height:normal;'><span style='font-family:"Calibri Light",sans-serif;'>Etapa de crisis declarada, cuando el descontrol y los riesgos para s&iacute; o terceros implican la necesidad de contener f&iacute;sicamente al estudiante</span></p>
            </td>
        </tr>
        <tr>
            <td style="width: 147.1pt;border-right: 1pt solid rgb(142, 170, 219);border-bottom: 1pt solid rgb(142, 170, 219);border-left: 1pt solid rgb(142, 170, 219);border-image: initial;border-top: none;background: rgb(217, 226, 243);padding: 0cm 5.4pt;vertical-align: top;">
                <p style='margin-top:0cm;margin-right:0cm;margin-bottom:0cm;margin-left:0cm;font-size:11.0pt;font-family:"Calibri",sans-serif;text-align:justify;line-height:  normal;'><span style='font-family:"Calibri Light",sans-serif;'>&nbsp;</span></p>
            </td>
            <td style="width: 147.15pt;border-top: none;border-left: none;border-bottom: 1pt solid rgb(142, 170, 219);border-right: 1pt solid rgb(142, 170, 219);background: rgb(217, 226, 243);padding: 0cm 5.4pt;vertical-align: top;">
                <p style='margin-top:0cm;margin-right:0cm;margin-bottom:0cm;margin-left:0cm;font-size:11.0pt;font-family:"Calibri",sans-serif;text-align:justify;line-height:  normal;'><span style='font-family:"Calibri Light",sans-serif;'>&nbsp;</span></p>
                <p style='margin-top:0cm;margin-right:0cm;margin-bottom:0cm;margin-left:0cm;font-size:11.0pt;font-family:"Calibri",sans-serif;text-align:justify;line-height:  normal;'><span style='font-family:"Calibri Light",sans-serif;'>&nbsp;</span></p>
                <p style='margin-top:0cm;margin-right:0cm;margin-bottom:0cm;margin-left:0cm;font-size:11.0pt;font-family:"Calibri",sans-serif;text-align:justify;line-height:  normal;'><span style='font-family:"Calibri Light",sans-serif;'>&nbsp;</span></p>
                <p style='margin-top:0cm;margin-right:0cm;margin-bottom:0cm;margin-left:0cm;font-size:11.0pt;font-family:"Calibri",sans-serif;text-align:justify;line-height:  normal;'><span style='font-family:"Calibri Light",sans-serif;'>&nbsp;</span></p>
            </td>
            <td style="width: 147.15pt;border-top: none;border-left: none;border-bottom: 1pt solid rgb(142, 170, 219);border-right: 1pt solid rgb(142, 170, 219);background: rgb(217, 226, 243);padding: 0cm 5.4pt;vertical-align: top;">
                <p style='margin-top:0cm;margin-right:0cm;margin-bottom:0cm;margin-left:0cm;font-size:11.0pt;font-family:"Calibri",sans-serif;text-align:justify;line-height:  normal;'><span style='font-family:"Calibri Light",sans-serif;'>&nbsp;</span></p>
            </td>
        </tr>
    </tbody>
</table>
<p style='margin-top:0cm;margin-right:0cm;margin-bottom:0cm;margin-left:0cm;font-size:11.0pt;font-family:"Calibri",sans-serif;text-align:justify;'><span style='font-family:"Calibri Light",sans-serif;'>&nbsp;</span></p>
<table style="width: 4.4e+2pt;border-collapse:collapse;border:none;">
    <tbody>
        <tr>
            <td style="width: 110.35pt;border: 1pt solid rgb(142, 170, 219);background: rgb(217, 226, 243);padding: 0cm 5.4pt;vertical-align: top;">
                <p style='margin-top:0cm;margin-right:0cm;margin-bottom:0cm;margin-left:0cm;font-size:11.0pt;font-family:"Calibri",sans-serif;text-align:center;line-height:normal;'><span style='font-family:  "Calibri Light",sans-serif;color:black;'>Hora de inicio</span></p>
            </td>
            <td style="width: 110.35pt;border-top: 1pt solid rgb(142, 170, 219);border-right: 1pt solid rgb(142, 170, 219);border-bottom: 1pt solid rgb(142, 170, 219);border-image: initial;border-left: none;background: rgb(217, 226, 243);padding: 0cm 5.4pt;vertical-align: top;">
                <p style='margin-top:0cm;margin-right:0cm;margin-bottom:0cm;margin-left:0cm;font-size:11.0pt;font-family:"Calibri",sans-serif;text-align:center;line-height:normal;'><span style='font-family:  "Calibri Light",sans-serif;color:black;'>Hora de llamada apoderado/a</span></p>
            </td>
            <td style="width: 110.35pt;border-top: 1pt solid rgb(142, 170, 219);border-right: 1pt solid rgb(142, 170, 219);border-bottom: 1pt solid rgb(142, 170, 219);border-image: initial;border-left: none;background: rgb(217, 226, 243);padding: 0cm 5.4pt;vertical-align: top;">
                <p style='margin-top:0cm;margin-right:0cm;margin-bottom:0cm;margin-left:0cm;font-size:11.0pt;font-family:"Calibri",sans-serif;text-align:center;line-height:normal;'><span style='font-family:  "Calibri Light",sans-serif;color:black;'>Hora de llegada apoderado/a</span></p>
            </td>
            <td style="width: 110.35pt;border-top: 1pt solid rgb(142, 170, 219);border-right: 1pt solid rgb(142, 170, 219);border-bottom: 1pt solid rgb(142, 170, 219);border-image: initial;border-left: none;background: rgb(217, 226, 243);padding: 0cm 5.4pt;vertical-align: top;">
                <p style='margin-top:0cm;margin-right:0cm;margin-bottom:0cm;margin-left:0cm;font-size:11.0pt;font-family:"Calibri",sans-serif;text-align:center;line-height:normal;'><span style='font-family:  "Calibri Light",sans-serif;color:black;'>Hora de termino</span></p>
            </td>
        </tr>
        <tr>
            <td style="width: 110.35pt;border-right: 1pt solid rgb(142, 170, 219);border-bottom: 1pt solid rgb(142, 170, 219);border-left: 1pt solid rgb(142, 170, 219);border-image: initial;border-top: none;padding: 0cm 5.4pt;vertical-align: top;">
                <p style='margin-top:0cm;margin-right:0cm;margin-bottom:0cm;margin-left:0cm;font-size:11.0pt;font-family:"Calibri",sans-serif;text-align:justify;line-height:  normal;'><span style='font-family:"Calibri Light",sans-serif;'>&nbsp;</span></p>
            </td>
            <td style="width: 110.35pt;border-top: none;border-left: none;border-bottom: 1pt solid rgb(142, 170, 219);border-right: 1pt solid rgb(142, 170, 219);padding: 0cm 5.4pt;vertical-align: top;">
                <p style='margin-top:0cm;margin-right:0cm;margin-bottom:0cm;margin-left:0cm;font-size:11.0pt;font-family:"Calibri",sans-serif;text-align:justify;line-height:  normal;'><span style='font-family:"Calibri Light",sans-serif;'>&nbsp;</span></p>
            </td>
            <td style="width: 110.35pt;border-top: none;border-left: none;border-bottom: 1pt solid rgb(142, 170, 219);border-right: 1pt solid rgb(142, 170, 219);padding: 0cm 5.4pt;vertical-align: top;">
                <p style='margin-top:0cm;margin-right:0cm;margin-bottom:0cm;margin-left:0cm;font-size:11.0pt;font-family:"Calibri",sans-serif;text-align:justify;line-height:  normal;'><span style='font-family:"Calibri Light",sans-serif;'>&nbsp;</span></p>
            </td>
            <td style="width: 110.35pt;border-top: none;border-left: none;border-bottom: 1pt solid rgb(142, 170, 219);border-right: 1pt solid rgb(142, 170, 219);padding: 0cm 5.4pt;vertical-align: top;">
                <p style='margin-top:0cm;margin-right:0cm;margin-bottom:0cm;margin-left:0cm;font-size:11.0pt;font-family:"Calibri",sans-serif;text-align:justify;line-height:  normal;'><span style='font-family:"Calibri Light",sans-serif;'>&nbsp;</span></p>
            </td>
        </tr>
    </tbody>
</table>
<p style='margin-top:0cm;margin-right:0cm;margin-bottom:8.0pt;margin-left:0cm;font-size:11.0pt;font-family:"Calibri",sans-serif;text-align:justify;'><span style='font-family:"Calibri Light",sans-serif;'>&nbsp;</span></p>
<p style='margin-top:0cm;margin-right:0cm;margin-bottom:8.0pt;margin-left:0cm;font-size:11.0pt;font-family:"Calibri",sans-serif;text-align:justify;'><span style='font-family:"Calibri Light",sans-serif;'>Se emite el presente certificado para ser presentado al empleador del apoderado/a por atender a la desregulaci&oacute;n emocional y/o conductual de su pupilo.</span></p>
<p style='margin-top:0cm;margin-right:0cm;margin-bottom:8.0pt;margin-left:0cm;font-size:11.0pt;font-family:"Calibri",sans-serif;text-align:justify;'><span style='font-family:"Calibri Light",sans-serif;'>&nbsp;</span></p>
<p style='margin-top:0cm;margin-right:0cm;margin-bottom:8.0pt;margin-left:0cm;font-size:11.0pt;font-family:"Calibri",sans-serif;text-align:justify;'><span style='font-family:"Calibri Light",sans-serif;'>&nbsp;</span></p>
<p style='margin-top:0cm;margin-right:0cm;margin-bottom:8.0pt;margin-left:0cm;font-size:11.0pt;font-family:"Calibri",sans-serif;text-align:justify;'><span style='font-family:"Calibri Light",sans-serif;'>&nbsp;</span></p>
<table style="width: 4.4e+2pt;border-collapse:collapse;border:none;">
    <tbody>
        <tr>
            <td style="width: 147.1pt;border-right: none;border-bottom: none;border-left: none;border-image: initial;border-top: 1pt solid black;padding: 0cm 5.4pt;vertical-align: top;">
                <p style='margin-top:0cm;margin-right:0cm;margin-bottom:8.0pt;margin-left:0cm;font-size:11.0pt;font-family:"Calibri",sans-serif;text-align:center;'><strong><span style='font-family:"Calibri Light",sans-serif;'>Firma apoderado/a</span></strong></p>
            </td>
            <td style="width: 147.15pt;border: none;padding: 0cm 5.4pt;vertical-align: top;">
                <p style='margin-top:0cm;margin-right:0cm;margin-bottom:8.0pt;margin-left:0cm;font-size:11.0pt;font-family:"Calibri",sans-serif;text-align:center;'><strong><span style='font-family:"Calibri Light",sans-serif;'>&nbsp;</span></strong></p>
            </td>
            <td style="width: 147.15pt;border-right: none;border-bottom: none;border-left: none;border-image: initial;border-top: 1pt solid black;padding: 0cm 5.4pt;vertical-align: top;">
                <p style='margin-top:0cm;margin-right:0cm;margin-bottom:8.0pt;margin-left:0cm;font-size:11.0pt;font-family:"Calibri",sans-serif;text-align:center;'><strong><span style='font-family:"Calibri Light",sans-serif;'>Firma y timbre del &nbsp; &nbsp; representante establecimiento</span></strong></p>
            </td>
        </tr>
    </tbody>
</table>`}static autorizacionAbordajeDec(t,i,a,n){return`<p style='margin-top:0cm;margin-right:0cm;margin-bottom:8.0pt;margin-left:0cm;font-size:11.0pt;font-family:"Calibri",sans-serif;text-align:center;'><strong><span style='font-size:19px;line-height:107%;font-family:"Calibri Light",sans-serif;'>AUTORIZACI&Oacute;N</span></strong></p>
<p style='margin-top:0cm;margin-right:0cm;margin-bottom:8.0pt;margin-left:0cm;font-size:11.0pt;font-family:"Calibri",sans-serif;text-align:center;'><strong><span style='font-size:19px;line-height:107%;font-family:"Calibri Light",sans-serif;'>Aplicaci&oacute;n del protocolo integral para la gesti&oacute;n de la desregulaci&oacute;n emocional y/o conductual</span></strong></p>
<p style='margin-top:0cm;margin-right:0cm;margin-bottom:8.0pt;margin-left:0cm;font-size:11.0pt;font-family:"Calibri",sans-serif;text-align:center;'><strong><span style='font-size:19px;line-height:107%;font-family:"Calibri Light",sans-serif;'>&nbsp;</span></strong></p>
<p style='margin-top:0cm;margin-right:0cm;margin-bottom:8.0pt;margin-left:0cm;font-size:11.0pt;font-family:"Calibri",sans-serif;text-align:justify;'><span style='font-size:19px;line-height:107%;font-family:"Calibri Light",sans-serif;'>Yo ${t}, RUT:&nbsp; ${i}</span></p>
<p style='margin-top:0cm;margin-right:0cm;margin-bottom:8.0pt;margin-left:0cm;font-size:11.0pt;font-family:"Calibri",sans-serif;text-align:justify;'><span style='font-size:19px;line-height:107%;font-family:"Calibri Light",sans-serif;'>apoderado/a de ${a} estudiante del curso ${n}. Estoy en conocimiento del protocolo integral para la gesti&oacute;n de la desregulaci&oacute;n emocional y/o conductual de estudiantes, por lo cual, autorizo al personal especializado o SOS del establecimiento para que brinde la contenci&oacute;n emocional y f&iacute;sica presente en el protocolo, en caso que mi pupilo presente una desregulaci&oacute;n emocional y/o conductual en el establecimiento.</span></p>
<p style='margin-top:0cm;margin-right:0cm;margin-bottom:8.0pt;margin-left:0cm;font-size:11.0pt;font-family:"Calibri",sans-serif;text-align:justify;'><span style='font-size:19px;line-height:107%;font-family:"Calibri Light",sans-serif;'>Adem&aacute;s, para facilitar su manejo, informo las siguientes estrategias para su contenci&oacute;n:</span></p>
<table style="border-collapse:collapse;border:none;">
    <tbody>
        <tr>
            <td style="width: 441.4pt;border: 1pt solid windowtext;padding: 0cm 5.4pt;height: 211.25pt;vertical-align: top;">
                <p style='margin-top:0cm;margin-right:0cm;margin-bottom:0cm;margin-left:0cm;font-size:11.0pt;font-family:"Calibri",sans-serif;text-align:justify;line-height:  normal;'><span style='font-size:19px;font-family:"Calibri Light",sans-serif;'>&nbsp;</span></p>
            </td>
        </tr>
    </tbody>
</table>
<p style='margin-top:0cm;margin-right:0cm;margin-bottom:8.0pt;margin-left:0cm;font-size:11.0pt;font-family:"Calibri",sans-serif;text-align:justify;'><span style='font-size:19px;line-height:107%;font-family:"Calibri Light",sans-serif;'>&nbsp;</span></p>
<p style='margin-top:0cm;margin-right:0cm;margin-bottom:8.0pt;margin-left:0cm;font-size:11.0pt;font-family:"Calibri",sans-serif;text-align:justify;'><span style='font-size:19px;line-height:107%;font-family:"Calibri Light",sans-serif;'>&nbsp;</span></p>
<p style='margin-top:0cm;margin-right:0cm;margin-bottom:8.0pt;margin-left:0cm;font-size:11.0pt;font-family:"Calibri",sans-serif;text-align:justify;'><span style='font-size:19px;line-height:107%;font-family:"Calibri Light",sans-serif;'>&nbsp;</span></p>
<table style="width: 4.4e+2pt;border-collapse:collapse;border:none;">
    <tbody>
        <tr>
            <td style="width: 147.1pt;border-right: none;border-bottom: none;border-left: none;border-image: initial;border-top: 1pt solid black;padding: 0cm 5.4pt;vertical-align: top;">
                <p style='margin-top:0cm;margin-right:0cm;margin-bottom:8.0pt;margin-left:0cm;font-size:11.0pt;font-family:"Calibri",sans-serif;text-align:center;'><strong><span style='font-size:19px;line-height:107%;font-family:"Calibri Light",sans-serif;'>Firma apoderado/a</span></strong></p>
            </td>
            <td style="width: 147.15pt;border: none;padding: 0cm 5.4pt;vertical-align: top;">
                <p style='margin-top:0cm;margin-right:0cm;margin-bottom:8.0pt;margin-left:0cm;font-size:11.0pt;font-family:"Calibri",sans-serif;text-align:center;'><strong><span style='font-size:19px;line-height:107%;font-family:"Calibri Light",sans-serif;'>&nbsp;</span></strong></p>
            </td>
            <td style="width: 147.15pt;border-right: none;border-bottom: none;border-left: none;border-image: initial;border-top: 1pt solid black;padding: 0cm 5.4pt;vertical-align: top;">
                <p style='margin-top:0cm;margin-right:0cm;margin-bottom:8.0pt;margin-left:0cm;font-size:11.0pt;font-family:"Calibri",sans-serif;text-align:center;'><strong><span style='font-size:19px;line-height:107%;font-family:"Calibri Light",sans-serif;'>Firma y timbre representante establecimiento.</span></strong></p>
            </td>
        </tr>
    </tbody>
</table>`}}//! moment.js
//! version : 2.30.1
//! authors : Tim Wood, Iskren Chernev, Moment.js contributors
//! license : MIT
//! momentjs.com
var ji;function u(){return ji.apply(null,arguments)}function Dn(e){ji=e}function K(e){return e instanceof Array||Object.prototype.toString.call(e)==="[object Array]"}function De(e){return e!=null&&Object.prototype.toString.call(e)==="[object Object]"}function k(e,t){return Object.prototype.hasOwnProperty.call(e,t)}function Bt(e){if(Object.getOwnPropertyNames)return Object.getOwnPropertyNames(e).length===0;var t;for(t in e)if(k(e,t))return!1;return!0}function U(e){return e===void 0}function me(e){return typeof e=="number"||Object.prototype.toString.call(e)==="[object Number]"}function Ze(e){return e instanceof Date||Object.prototype.toString.call(e)==="[object Date]"}function Fi(e,t){var i=[],a,n=e.length;for(a=0;a<n;++a)i.push(t(e[a],a));return i}function ye(e,t){for(var i in t)k(t,i)&&(e[i]=t[i]);return k(t,"toString")&&(e.toString=t.toString),k(t,"valueOf")&&(e.valueOf=t.valueOf),e}function ae(e,t,i,a){return da(e,t,i,a,!0).utc()}function Sn(){return{empty:!1,unusedTokens:[],unusedInput:[],overflow:-2,charsLeftOver:0,nullInput:!1,invalidEra:null,invalidMonth:null,invalidFormat:!1,userInvalidated:!1,iso:!1,parsedDateParts:[],era:null,meridiem:null,rfc2822:!1,weekdayMismatch:!1}}function v(e){return e._pf==null&&(e._pf=Sn()),e._pf}var Ft;Array.prototype.some?Ft=Array.prototype.some:Ft=function(e){var t=Object(this),i=t.length>>>0,a;for(a=0;a<i;a++)if(a in t&&e.call(this,t[a],a,t))return!0;return!1};function Zt(e){var t=null,i=!1,a=e._d&&!isNaN(e._d.getTime());if(a&&(t=v(e),i=Ft.call(t.parsedDateParts,function(n){return n!=null}),a=t.overflow<0&&!t.empty&&!t.invalidEra&&!t.invalidMonth&&!t.invalidWeekday&&!t.weekdayMismatch&&!t.nullInput&&!t.invalidFormat&&!t.userInvalidated&&(!t.meridiem||t.meridiem&&i),e._strict&&(a=a&&t.charsLeftOver===0&&t.unusedTokens.length===0&&t.bigHour===void 0)),Object.isFrozen==null||!Object.isFrozen(e))e._isValid=a;else return a;return e._isValid}function ft(e){var t=ae(NaN);return e!=null?ye(v(t),e):v(t).userInvalidated=!0,t}var Ci=u.momentProperties=[],Tt=!1;function Qt(e,t){var i,a,n,s=Ci.length;if(U(t._isAMomentObject)||(e._isAMomentObject=t._isAMomentObject),U(t._i)||(e._i=t._i),U(t._f)||(e._f=t._f),U(t._l)||(e._l=t._l),U(t._strict)||(e._strict=t._strict),U(t._tzm)||(e._tzm=t._tzm),U(t._isUTC)||(e._isUTC=t._isUTC),U(t._offset)||(e._offset=t._offset),U(t._pf)||(e._pf=v(t)),U(t._locale)||(e._locale=t._locale),s>0)for(i=0;i<s;i++)a=Ci[i],n=t[a],U(n)||(e[a]=n);return e}function Qe(e){Qt(this,e),this._d=new Date(e._d!=null?e._d.getTime():NaN),this.isValid()||(this._d=new Date(NaN)),Tt===!1&&(Tt=!0,u.updateOffset(this),Tt=!1)}function X(e){return e instanceof Qe||e!=null&&e._isAMomentObject!=null}function Ui(e){u.suppressDeprecationWarnings===!1&&typeof console!="undefined"&&console.warn&&console.warn("Deprecation warning: "+e)}function B(e,t){var i=!0;return ye(function(){if(u.deprecationHandler!=null&&u.deprecationHandler(null,e),i){var a=[],n,s,r,o=arguments.length;for(s=0;s<o;s++){if(n="",typeof arguments[s]=="object"){n+=`
[`+s+"] ";for(r in arguments[0])k(arguments[0],r)&&(n+=r+": "+arguments[0][r]+", ");n=n.slice(0,-2)}else n=arguments[s];a.push(n)}Ui(e+`
Arguments: `+Array.prototype.slice.call(a).join("")+`
`+new Error().stack),i=!1}return t.apply(this,arguments)},t)}var ki={};function qi(e,t){u.deprecationHandler!=null&&u.deprecationHandler(e,t),ki[e]||(Ui(t),ki[e]=!0)}u.suppressDeprecationWarnings=!1;u.deprecationHandler=null;function ne(e){return typeof Function!="undefined"&&e instanceof Function||Object.prototype.toString.call(e)==="[object Function]"}function zn(e){var t,i;for(i in e)k(e,i)&&(t=e[i],ne(t)?this[i]=t:this["_"+i]=t);this._config=e,this._dayOfMonthOrdinalParseLenient=new RegExp((this._dayOfMonthOrdinalParse.source||this._ordinalParse.source)+"|"+/\d{1,2}/.source)}function Ut(e,t){var i=ye({},e),a;for(a in t)k(t,a)&&(De(e[a])&&De(t[a])?(i[a]={},ye(i[a],e[a]),ye(i[a],t[a])):t[a]!=null?i[a]=t[a]:delete i[a]);for(a in e)k(e,a)&&!k(t,a)&&De(e[a])&&(i[a]=ye({},i[a]));return i}function Jt(e){e!=null&&this.set(e)}var qt;Object.keys?qt=Object.keys:qt=function(e){var t,i=[];for(t in e)k(e,t)&&i.push(t);return i};var Ln={sameDay:"[Today at] LT",nextDay:"[Tomorrow at] LT",nextWeek:"dddd [at] LT",lastDay:"[Yesterday at] LT",lastWeek:"[Last] dddd [at] LT",sameElse:"L"};function On(e,t,i){var a=this._calendar[e]||this._calendar.sameElse;return ne(a)?a.call(t,i):a}function ie(e,t,i){var a=""+Math.abs(e),n=t-a.length,s=e>=0;return(s?i?"+":"":"-")+Math.pow(10,Math.max(0,n)).toString().substr(1)+a}var Kt=/(\[[^\[]*\])|(\\)?([Hh]mm(ss)?|Mo|MM?M?M?|Do|DDDo|DD?D?D?|ddd?d?|do?|w[o|w]?|W[o|W]?|Qo?|N{1,5}|YYYYYY|YYYYY|YYYY|YY|y{2,4}|yo?|gg(ggg?)?|GG(GGG?)?|e|E|a|A|hh?|HH?|kk?|mm?|ss?|S{1,9}|x|X|zz?|ZZ?|.)/g,st=/(\[[^\[]*\])|(\\)?(LTS|LT|LL?L?L?|l{1,4})/g,Pt={},Te={};function g(e,t,i,a){var n=a;typeof a=="string"&&(n=function(){return this[a]()}),e&&(Te[e]=n),t&&(Te[t[0]]=function(){return ie(n.apply(this,arguments),t[1],t[2])}),i&&(Te[i]=function(){return this.localeData().ordinal(n.apply(this,arguments),e)})}function Mn(e){return e.match(/\[[\s\S]/)?e.replace(/^\[|\]$/g,""):e.replace(/\\/g,"")}function En(e){var t=e.match(Kt),i,a;for(i=0,a=t.length;i<a;i++)Te[t[i]]?t[i]=Te[t[i]]:t[i]=Mn(t[i]);return function(n){var s="",r;for(r=0;r<a;r++)s+=ne(t[r])?t[r].call(n,e):t[r];return s}}function ot(e,t){return e.isValid()?(t=Wi(t,e.localeData()),Pt[t]=Pt[t]||En(t),Pt[t](e)):e.localeData().invalidDate()}function Wi(e,t){var i=5;function a(n){return t.longDateFormat(n)||n}for(st.lastIndex=0;i>=0&&st.test(e);)e=e.replace(st,a),st.lastIndex=0,i-=1;return e}var Tn={LTS:"h:mm:ss A",LT:"h:mm A",L:"MM/DD/YYYY",LL:"MMMM D, YYYY",LLL:"MMMM D, YYYY h:mm A",LLLL:"dddd, MMMM D, YYYY h:mm A"};function Pn(e){var t=this._longDateFormat[e],i=this._longDateFormat[e.toUpperCase()];return t||!i?t:(this._longDateFormat[e]=i.match(Kt).map(function(a){return a==="MMMM"||a==="MM"||a==="DD"||a==="dddd"?a.slice(1):a}).join(""),this._longDateFormat[e])}var Yn="Invalid date";function An(){return this._invalidDate}var Nn="%d",In=/\d{1,2}/;function Rn(e){return this._ordinal.replace("%d",e)}var jn={future:"in %s",past:"%s ago",s:"a few seconds",ss:"%d seconds",m:"a minute",mm:"%d minutes",h:"an hour",hh:"%d hours",d:"a day",dd:"%d days",w:"a week",ww:"%d weeks",M:"a month",MM:"%d months",y:"a year",yy:"%d years"};function Fn(e,t,i,a){var n=this._relativeTime[i];return ne(n)?n(e,t,i,a):n.replace(/%d/i,e)}function Un(e,t){var i=this._relativeTime[e>0?"future":"past"];return ne(i)?i(t):i.replace(/%s/i,t)}var xi={D:"date",dates:"date",date:"date",d:"day",days:"day",day:"day",e:"weekday",weekdays:"weekday",weekday:"weekday",E:"isoWeekday",isoweekdays:"isoWeekday",isoweekday:"isoWeekday",DDD:"dayOfYear",dayofyears:"dayOfYear",dayofyear:"dayOfYear",h:"hour",hours:"hour",hour:"hour",ms:"millisecond",milliseconds:"millisecond",millisecond:"millisecond",m:"minute",minutes:"minute",minute:"minute",M:"month",months:"month",month:"month",Q:"quarter",quarters:"quarter",quarter:"quarter",s:"second",seconds:"second",second:"second",gg:"weekYear",weekyears:"weekYear",weekyear:"weekYear",GG:"isoWeekYear",isoweekyears:"isoWeekYear",isoweekyear:"isoWeekYear",w:"week",weeks:"week",week:"week",W:"isoWeek",isoweeks:"isoWeek",isoweek:"isoWeek",y:"year",years:"year",year:"year"};function Z(e){return typeof e=="string"?xi[e]||xi[e.toLowerCase()]:void 0}function Xt(e){var t={},i,a;for(a in e)k(e,a)&&(i=Z(a),i&&(t[i]=e[a]));return t}var qn={date:9,day:11,weekday:11,isoWeekday:11,dayOfYear:4,hour:13,millisecond:16,minute:14,month:8,quarter:7,second:15,weekYear:1,isoWeekYear:1,week:5,isoWeek:5,year:1};function Wn(e){var t=[],i;for(i in e)k(e,i)&&t.push({unit:i,priority:qn[i]});return t.sort(function(a,n){return a.priority-n.priority}),t}var Hi=/\d/,H=/\d\d/,$i=/\d{3}/,ei=/\d{4}/,gt=/[+-]?\d{6}/,L=/\d\d?/,Gi=/\d\d\d\d?/,Vi=/\d\d\d\d\d\d?/,ht=/\d{1,3}/,ti=/\d{1,4}/,yt=/[+-]?\d{1,6}/,Ae=/\d+/,bt=/[+-]?\d+/,Hn=/Z|[+-]\d\d:?\d\d/gi,vt=/Z|[+-]\d\d(?::?\d\d)?/gi,$n=/[+-]?\d+(\.\d{1,3})?/,Je=/[0-9]{0,256}['a-z\u00A0-\u05FF\u0700-\uD7FF\uF900-\uFDCF\uFDF0-\uFF07\uFF10-\uFFEF]{1,256}|[\u0600-\u06FF\/]{1,256}(\s*?[\u0600-\u06FF]{1,256}){1,2}/i,Ne=/^[1-9]\d?/,ii=/^([1-9]\d|\d)/,ct;ct={};function _(e,t,i){ct[e]=ne(t)?t:function(a,n){return a&&i?i:t}}function Gn(e,t){return k(ct,e)?ct[e](t._strict,t._locale):new RegExp(Vn(e))}function Vn(e){return pe(e.replace("\\","").replace(/\\(\[)|\\(\])|\[([^\]\[]*)\]|\\(.)/g,function(t,i,a,n,s){return i||a||n||s}))}function pe(e){return e.replace(/[-\/\\^$*+?.()|[\]{}]/g,"\\$&")}function V(e){return e<0?Math.ceil(e)||0:Math.floor(e)}function w(e){var t=+e,i=0;return t!==0&&isFinite(t)&&(i=V(t)),i}var Wt={};function S(e,t){var i,a=t,n;for(typeof e=="string"&&(e=[e]),me(t)&&(a=function(s,r){r[t]=w(s)}),n=e.length,i=0;i<n;i++)Wt[e[i]]=a}function Ke(e,t){S(e,function(i,a,n,s){n._w=n._w||{},t(i,n._w,n,s)})}function Bn(e,t,i){t!=null&&k(Wt,e)&&Wt[e](t,i._a,i,e)}function wt(e){return e%4===0&&e%100!==0||e%400===0}var F=0,de=1,te=2,Y=3,J=4,ce=5,xe=6,Zn=7,Qn=8;g("Y",0,0,function(){var e=this.year();return e<=9999?ie(e,4):"+"+e});g(0,["YY",2],0,function(){return this.year()%100});g(0,["YYYY",4],0,"year");g(0,["YYYYY",5],0,"year");g(0,["YYYYYY",6,!0],0,"year");_("Y",bt);_("YY",L,H);_("YYYY",ti,ei);_("YYYYY",yt,gt);_("YYYYYY",yt,gt);S(["YYYYY","YYYYYY"],F);S("YYYY",function(e,t){t[F]=e.length===2?u.parseTwoDigitYear(e):w(e)});S("YY",function(e,t){t[F]=u.parseTwoDigitYear(e)});S("Y",function(e,t){t[F]=parseInt(e,10)});function He(e){return wt(e)?366:365}u.parseTwoDigitYear=function(e){return w(e)+(w(e)>68?1900:2e3)};var Bi=Ie("FullYear",!0);function Jn(){return wt(this.year())}function Ie(e,t){return function(i){return i!=null?(Zi(this,e,i),u.updateOffset(this,t),this):$e(this,e)}}function $e(e,t){if(!e.isValid())return NaN;var i=e._d,a=e._isUTC;switch(t){case"Milliseconds":return a?i.getUTCMilliseconds():i.getMilliseconds();case"Seconds":return a?i.getUTCSeconds():i.getSeconds();case"Minutes":return a?i.getUTCMinutes():i.getMinutes();case"Hours":return a?i.getUTCHours():i.getHours();case"Date":return a?i.getUTCDate():i.getDate();case"Day":return a?i.getUTCDay():i.getDay();case"Month":return a?i.getUTCMonth():i.getMonth();case"FullYear":return a?i.getUTCFullYear():i.getFullYear();default:return NaN}}function Zi(e,t,i){var a,n,s,r,o;if(!(!e.isValid()||isNaN(i))){switch(a=e._d,n=e._isUTC,t){case"Milliseconds":return void(n?a.setUTCMilliseconds(i):a.setMilliseconds(i));case"Seconds":return void(n?a.setUTCSeconds(i):a.setSeconds(i));case"Minutes":return void(n?a.setUTCMinutes(i):a.setMinutes(i));case"Hours":return void(n?a.setUTCHours(i):a.setHours(i));case"Date":return void(n?a.setUTCDate(i):a.setDate(i));case"FullYear":break;default:return}s=i,r=e.month(),o=e.date(),o=o===29&&r===1&&!wt(s)?28:o,n?a.setUTCFullYear(s,r,o):a.setFullYear(s,r,o)}}function Kn(e){return e=Z(e),ne(this[e])?this[e]():this}function Xn(e,t){if(typeof e=="object"){e=Xt(e);var i=Wn(e),a,n=i.length;for(a=0;a<n;a++)this[i[a].unit](e[i[a].unit])}else if(e=Z(e),ne(this[e]))return this[e](t);return this}function es(e,t){return(e%t+t)%t}var T;Array.prototype.indexOf?T=Array.prototype.indexOf:T=function(e){var t;for(t=0;t<this.length;++t)if(this[t]===e)return t;return-1};function ai(e,t){if(isNaN(e)||isNaN(t))return NaN;var i=es(t,12);return e+=(t-i)/12,i===1?wt(e)?29:28:31-i%7%2}g("M",["MM",2],"Mo",function(){return this.month()+1});g("MMM",0,0,function(e){return this.localeData().monthsShort(this,e)});g("MMMM",0,0,function(e){return this.localeData().months(this,e)});_("M",L,Ne);_("MM",L,H);_("MMM",function(e,t){return t.monthsShortRegex(e)});_("MMMM",function(e,t){return t.monthsRegex(e)});S(["M","MM"],function(e,t){t[de]=w(e)-1});S(["MMM","MMMM"],function(e,t,i,a){var n=i._locale.monthsParse(e,a,i._strict);n!=null?t[de]=n:v(i).invalidMonth=e});var ts="January_February_March_April_May_June_July_August_September_October_November_December".split("_"),Qi="Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"),Ji=/D[oD]?(\[[^\[\]]*\]|\s)+MMMM?/,is=Je,as=Je;function ns(e,t){return e?K(this._months)?this._months[e.month()]:this._months[(this._months.isFormat||Ji).test(t)?"format":"standalone"][e.month()]:K(this._months)?this._months:this._months.standalone}function ss(e,t){return e?K(this._monthsShort)?this._monthsShort[e.month()]:this._monthsShort[Ji.test(t)?"format":"standalone"][e.month()]:K(this._monthsShort)?this._monthsShort:this._monthsShort.standalone}function rs(e,t,i){var a,n,s,r=e.toLocaleLowerCase();if(!this._monthsParse)for(this._monthsParse=[],this._longMonthsParse=[],this._shortMonthsParse=[],a=0;a<12;++a)s=ae([2e3,a]),this._shortMonthsParse[a]=this.monthsShort(s,"").toLocaleLowerCase(),this._longMonthsParse[a]=this.months(s,"").toLocaleLowerCase();return i?t==="MMM"?(n=T.call(this._shortMonthsParse,r),n!==-1?n:null):(n=T.call(this._longMonthsParse,r),n!==-1?n:null):t==="MMM"?(n=T.call(this._shortMonthsParse,r),n!==-1?n:(n=T.call(this._longMonthsParse,r),n!==-1?n:null)):(n=T.call(this._longMonthsParse,r),n!==-1?n:(n=T.call(this._shortMonthsParse,r),n!==-1?n:null))}function os(e,t,i){var a,n,s;if(this._monthsParseExact)return rs.call(this,e,t,i);for(this._monthsParse||(this._monthsParse=[],this._longMonthsParse=[],this._shortMonthsParse=[]),a=0;a<12;a++){if(n=ae([2e3,a]),i&&!this._longMonthsParse[a]&&(this._longMonthsParse[a]=new RegExp("^"+this.months(n,"").replace(".","")+"$","i"),this._shortMonthsParse[a]=new RegExp("^"+this.monthsShort(n,"").replace(".","")+"$","i")),!i&&!this._monthsParse[a]&&(s="^"+this.months(n,"")+"|^"+this.monthsShort(n,""),this._monthsParse[a]=new RegExp(s.replace(".",""),"i")),i&&t==="MMMM"&&this._longMonthsParse[a].test(e))return a;if(i&&t==="MMM"&&this._shortMonthsParse[a].test(e))return a;if(!i&&this._monthsParse[a].test(e))return a}}function Ki(e,t){if(!e.isValid())return e;if(typeof t=="string"){if(/^\d+$/.test(t))t=w(t);else if(t=e.localeData().monthsParse(t),!me(t))return e}var i=t,a=e.date();return a=a<29?a:Math.min(a,ai(e.year(),i)),e._isUTC?e._d.setUTCMonth(i,a):e._d.setMonth(i,a),e}function Xi(e){return e!=null?(Ki(this,e),u.updateOffset(this,!0),this):$e(this,"Month")}function ls(){return ai(this.year(),this.month())}function ds(e){return this._monthsParseExact?(k(this,"_monthsRegex")||ea.call(this),e?this._monthsShortStrictRegex:this._monthsShortRegex):(k(this,"_monthsShortRegex")||(this._monthsShortRegex=is),this._monthsShortStrictRegex&&e?this._monthsShortStrictRegex:this._monthsShortRegex)}function cs(e){return this._monthsParseExact?(k(this,"_monthsRegex")||ea.call(this),e?this._monthsStrictRegex:this._monthsRegex):(k(this,"_monthsRegex")||(this._monthsRegex=as),this._monthsStrictRegex&&e?this._monthsStrictRegex:this._monthsRegex)}function ea(){function e(f,b){return b.length-f.length}var t=[],i=[],a=[],n,s,r,o;for(n=0;n<12;n++)s=ae([2e3,n]),r=pe(this.monthsShort(s,"")),o=pe(this.months(s,"")),t.push(r),i.push(o),a.push(o),a.push(r);t.sort(e),i.sort(e),a.sort(e),this._monthsRegex=new RegExp("^("+a.join("|")+")","i"),this._monthsShortRegex=this._monthsRegex,this._monthsStrictRegex=new RegExp("^("+i.join("|")+")","i"),this._monthsShortStrictRegex=new RegExp("^("+t.join("|")+")","i")}function ps(e,t,i,a,n,s,r){var o;return e<100&&e>=0?(o=new Date(e+400,t,i,a,n,s,r),isFinite(o.getFullYear())&&o.setFullYear(e)):o=new Date(e,t,i,a,n,s,r),o}function Ge(e){var t,i;return e<100&&e>=0?(i=Array.prototype.slice.call(arguments),i[0]=e+400,t=new Date(Date.UTC.apply(null,i)),isFinite(t.getUTCFullYear())&&t.setUTCFullYear(e)):t=new Date(Date.UTC.apply(null,arguments)),t}function pt(e,t,i){var a=7+t-i,n=(7+Ge(e,0,a).getUTCDay()-t)%7;return-n+a-1}function ta(e,t,i,a,n){var s=(7+i-a)%7,r=pt(e,a,n),o=1+7*(t-1)+s+r,f,b;return o<=0?(f=e-1,b=He(f)+o):o>He(e)?(f=e+1,b=o-He(e)):(f=e,b=o),{year:f,dayOfYear:b}}function Ve(e,t,i){var a=pt(e.year(),t,i),n=Math.floor((e.dayOfYear()-a-1)/7)+1,s,r;return n<1?(r=e.year()-1,s=n+ue(r,t,i)):n>ue(e.year(),t,i)?(s=n-ue(e.year(),t,i),r=e.year()+1):(r=e.year(),s=n),{week:s,year:r}}function ue(e,t,i){var a=pt(e,t,i),n=pt(e+1,t,i);return(He(e)-a+n)/7}g("w",["ww",2],"wo","week");g("W",["WW",2],"Wo","isoWeek");_("w",L,Ne);_("ww",L,H);_("W",L,Ne);_("WW",L,H);Ke(["w","ww","W","WW"],function(e,t,i,a){t[a.substr(0,1)]=w(e)});function us(e){return Ve(e,this._week.dow,this._week.doy).week}var ms={dow:0,doy:6};function _s(){return this._week.dow}function fs(){return this._week.doy}function gs(e){var t=this.localeData().week(this);return e==null?t:this.add((e-t)*7,"d")}function hs(e){var t=Ve(this,1,4).week;return e==null?t:this.add((e-t)*7,"d")}g("d",0,"do","day");g("dd",0,0,function(e){return this.localeData().weekdaysMin(this,e)});g("ddd",0,0,function(e){return this.localeData().weekdaysShort(this,e)});g("dddd",0,0,function(e){return this.localeData().weekdays(this,e)});g("e",0,0,"weekday");g("E",0,0,"isoWeekday");_("d",L);_("e",L);_("E",L);_("dd",function(e,t){return t.weekdaysMinRegex(e)});_("ddd",function(e,t){return t.weekdaysShortRegex(e)});_("dddd",function(e,t){return t.weekdaysRegex(e)});Ke(["dd","ddd","dddd"],function(e,t,i,a){var n=i._locale.weekdaysParse(e,a,i._strict);n!=null?t.d=n:v(i).invalidWeekday=e});Ke(["d","e","E"],function(e,t,i,a){t[a]=w(e)});function ys(e,t){return typeof e!="string"?e:isNaN(e)?(e=t.weekdaysParse(e),typeof e=="number"?e:null):parseInt(e,10)}function bs(e,t){return typeof e=="string"?t.weekdaysParse(e)%7||7:isNaN(e)?null:e}function ni(e,t){return e.slice(t,7).concat(e.slice(0,t))}var vs="Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),ia="Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"),ws="Su_Mo_Tu_We_Th_Fr_Sa".split("_"),Cs=Je,ks=Je,xs=Je;function Ds(e,t){var i=K(this._weekdays)?this._weekdays:this._weekdays[e&&e!==!0&&this._weekdays.isFormat.test(t)?"format":"standalone"];return e===!0?ni(i,this._week.dow):e?i[e.day()]:i}function Ss(e){return e===!0?ni(this._weekdaysShort,this._week.dow):e?this._weekdaysShort[e.day()]:this._weekdaysShort}function zs(e){return e===!0?ni(this._weekdaysMin,this._week.dow):e?this._weekdaysMin[e.day()]:this._weekdaysMin}function Ls(e,t,i){var a,n,s,r=e.toLocaleLowerCase();if(!this._weekdaysParse)for(this._weekdaysParse=[],this._shortWeekdaysParse=[],this._minWeekdaysParse=[],a=0;a<7;++a)s=ae([2e3,1]).day(a),this._minWeekdaysParse[a]=this.weekdaysMin(s,"").toLocaleLowerCase(),this._shortWeekdaysParse[a]=this.weekdaysShort(s,"").toLocaleLowerCase(),this._weekdaysParse[a]=this.weekdays(s,"").toLocaleLowerCase();return i?t==="dddd"?(n=T.call(this._weekdaysParse,r),n!==-1?n:null):t==="ddd"?(n=T.call(this._shortWeekdaysParse,r),n!==-1?n:null):(n=T.call(this._minWeekdaysParse,r),n!==-1?n:null):t==="dddd"?(n=T.call(this._weekdaysParse,r),n!==-1||(n=T.call(this._shortWeekdaysParse,r),n!==-1)?n:(n=T.call(this._minWeekdaysParse,r),n!==-1?n:null)):t==="ddd"?(n=T.call(this._shortWeekdaysParse,r),n!==-1||(n=T.call(this._weekdaysParse,r),n!==-1)?n:(n=T.call(this._minWeekdaysParse,r),n!==-1?n:null)):(n=T.call(this._minWeekdaysParse,r),n!==-1||(n=T.call(this._weekdaysParse,r),n!==-1)?n:(n=T.call(this._shortWeekdaysParse,r),n!==-1?n:null))}function Os(e,t,i){var a,n,s;if(this._weekdaysParseExact)return Ls.call(this,e,t,i);for(this._weekdaysParse||(this._weekdaysParse=[],this._minWeekdaysParse=[],this._shortWeekdaysParse=[],this._fullWeekdaysParse=[]),a=0;a<7;a++){if(n=ae([2e3,1]).day(a),i&&!this._fullWeekdaysParse[a]&&(this._fullWeekdaysParse[a]=new RegExp("^"+this.weekdays(n,"").replace(".","\\.?")+"$","i"),this._shortWeekdaysParse[a]=new RegExp("^"+this.weekdaysShort(n,"").replace(".","\\.?")+"$","i"),this._minWeekdaysParse[a]=new RegExp("^"+this.weekdaysMin(n,"").replace(".","\\.?")+"$","i")),this._weekdaysParse[a]||(s="^"+this.weekdays(n,"")+"|^"+this.weekdaysShort(n,"")+"|^"+this.weekdaysMin(n,""),this._weekdaysParse[a]=new RegExp(s.replace(".",""),"i")),i&&t==="dddd"&&this._fullWeekdaysParse[a].test(e))return a;if(i&&t==="ddd"&&this._shortWeekdaysParse[a].test(e))return a;if(i&&t==="dd"&&this._minWeekdaysParse[a].test(e))return a;if(!i&&this._weekdaysParse[a].test(e))return a}}function Ms(e){if(!this.isValid())return e!=null?this:NaN;var t=$e(this,"Day");return e!=null?(e=ys(e,this.localeData()),this.add(e-t,"d")):t}function Es(e){if(!this.isValid())return e!=null?this:NaN;var t=(this.day()+7-this.localeData()._week.dow)%7;return e==null?t:this.add(e-t,"d")}function Ts(e){if(!this.isValid())return e!=null?this:NaN;if(e!=null){var t=bs(e,this.localeData());return this.day(this.day()%7?t:t-7)}else return this.day()||7}function Ps(e){return this._weekdaysParseExact?(k(this,"_weekdaysRegex")||si.call(this),e?this._weekdaysStrictRegex:this._weekdaysRegex):(k(this,"_weekdaysRegex")||(this._weekdaysRegex=Cs),this._weekdaysStrictRegex&&e?this._weekdaysStrictRegex:this._weekdaysRegex)}function Ys(e){return this._weekdaysParseExact?(k(this,"_weekdaysRegex")||si.call(this),e?this._weekdaysShortStrictRegex:this._weekdaysShortRegex):(k(this,"_weekdaysShortRegex")||(this._weekdaysShortRegex=ks),this._weekdaysShortStrictRegex&&e?this._weekdaysShortStrictRegex:this._weekdaysShortRegex)}function As(e){return this._weekdaysParseExact?(k(this,"_weekdaysRegex")||si.call(this),e?this._weekdaysMinStrictRegex:this._weekdaysMinRegex):(k(this,"_weekdaysMinRegex")||(this._weekdaysMinRegex=xs),this._weekdaysMinStrictRegex&&e?this._weekdaysMinStrictRegex:this._weekdaysMinRegex)}function si(){function e(y,P){return P.length-y.length}var t=[],i=[],a=[],n=[],s,r,o,f,b;for(s=0;s<7;s++)r=ae([2e3,1]).day(s),o=pe(this.weekdaysMin(r,"")),f=pe(this.weekdaysShort(r,"")),b=pe(this.weekdays(r,"")),t.push(o),i.push(f),a.push(b),n.push(o),n.push(f),n.push(b);t.sort(e),i.sort(e),a.sort(e),n.sort(e),this._weekdaysRegex=new RegExp("^("+n.join("|")+")","i"),this._weekdaysShortRegex=this._weekdaysRegex,this._weekdaysMinRegex=this._weekdaysRegex,this._weekdaysStrictRegex=new RegExp("^("+a.join("|")+")","i"),this._weekdaysShortStrictRegex=new RegExp("^("+i.join("|")+")","i"),this._weekdaysMinStrictRegex=new RegExp("^("+t.join("|")+")","i")}function ri(){return this.hours()%12||12}function Ns(){return this.hours()||24}g("H",["HH",2],0,"hour");g("h",["hh",2],0,ri);g("k",["kk",2],0,Ns);g("hmm",0,0,function(){return""+ri.apply(this)+ie(this.minutes(),2)});g("hmmss",0,0,function(){return""+ri.apply(this)+ie(this.minutes(),2)+ie(this.seconds(),2)});g("Hmm",0,0,function(){return""+this.hours()+ie(this.minutes(),2)});g("Hmmss",0,0,function(){return""+this.hours()+ie(this.minutes(),2)+ie(this.seconds(),2)});function aa(e,t){g(e,0,0,function(){return this.localeData().meridiem(this.hours(),this.minutes(),t)})}aa("a",!0);aa("A",!1);function na(e,t){return t._meridiemParse}_("a",na);_("A",na);_("H",L,ii);_("h",L,Ne);_("k",L,Ne);_("HH",L,H);_("hh",L,H);_("kk",L,H);_("hmm",Gi);_("hmmss",Vi);_("Hmm",Gi);_("Hmmss",Vi);S(["H","HH"],Y);S(["k","kk"],function(e,t,i){var a=w(e);t[Y]=a===24?0:a});S(["a","A"],function(e,t,i){i._isPm=i._locale.isPM(e),i._meridiem=e});S(["h","hh"],function(e,t,i){t[Y]=w(e),v(i).bigHour=!0});S("hmm",function(e,t,i){var a=e.length-2;t[Y]=w(e.substr(0,a)),t[J]=w(e.substr(a)),v(i).bigHour=!0});S("hmmss",function(e,t,i){var a=e.length-4,n=e.length-2;t[Y]=w(e.substr(0,a)),t[J]=w(e.substr(a,2)),t[ce]=w(e.substr(n)),v(i).bigHour=!0});S("Hmm",function(e,t,i){var a=e.length-2;t[Y]=w(e.substr(0,a)),t[J]=w(e.substr(a))});S("Hmmss",function(e,t,i){var a=e.length-4,n=e.length-2;t[Y]=w(e.substr(0,a)),t[J]=w(e.substr(a,2)),t[ce]=w(e.substr(n))});function Is(e){return(e+"").toLowerCase().charAt(0)==="p"}var Rs=/[ap]\.?m?\.?/i,js=Ie("Hours",!0);function Fs(e,t,i){return e>11?i?"pm":"PM":i?"am":"AM"}var sa={calendar:Ln,longDateFormat:Tn,invalidDate:Yn,ordinal:Nn,dayOfMonthOrdinalParse:In,relativeTime:jn,months:ts,monthsShort:Qi,week:ms,weekdays:vs,weekdaysMin:ws,weekdaysShort:ia,meridiemParse:Rs},O={},Fe={},Be;function Us(e,t){var i,a=Math.min(e.length,t.length);for(i=0;i<a;i+=1)if(e[i]!==t[i])return i;return a}function Di(e){return e&&e.toLowerCase().replace("_","-")}function qs(e){for(var t=0,i,a,n,s;t<e.length;){for(s=Di(e[t]).split("-"),i=s.length,a=Di(e[t+1]),a=a?a.split("-"):null;i>0;){if(n=Ct(s.slice(0,i).join("-")),n)return n;if(a&&a.length>=i&&Us(s,a)>=i-1)break;i--}t++}return Be}function Ws(e){return!!(e&&e.match("^[^/\\\\]*$"))}function Ct(e){var t=null,i;if(O[e]===void 0&&typeof module!="undefined"&&module&&module.exports&&Ws(e))try{t=Be._abbr,i=require,i("./locale/"+e),ve(t)}catch{O[e]=null}return O[e]}function ve(e,t){var i;return e&&(U(t)?i=_e(e):i=oi(e,t),i?Be=i:typeof console!="undefined"&&console.warn&&console.warn("Locale "+e+" not found. Did you forget to load it?")),Be._abbr}function oi(e,t){if(t!==null){var i,a=sa;if(t.abbr=e,O[e]!=null)qi("defineLocaleOverride","use moment.updateLocale(localeName, config) to change an existing locale. moment.defineLocale(localeName, config) should only be used for creating a new locale See http://momentjs.com/guides/#/warnings/define-locale/ for more info."),a=O[e]._config;else if(t.parentLocale!=null)if(O[t.parentLocale]!=null)a=O[t.parentLocale]._config;else if(i=Ct(t.parentLocale),i!=null)a=i._config;else return Fe[t.parentLocale]||(Fe[t.parentLocale]=[]),Fe[t.parentLocale].push({name:e,config:t}),null;return O[e]=new Jt(Ut(a,t)),Fe[e]&&Fe[e].forEach(function(n){oi(n.name,n.config)}),ve(e),O[e]}else return delete O[e],null}function Hs(e,t){if(t!=null){var i,a,n=sa;O[e]!=null&&O[e].parentLocale!=null?O[e].set(Ut(O[e]._config,t)):(a=Ct(e),a!=null&&(n=a._config),t=Ut(n,t),a==null&&(t.abbr=e),i=new Jt(t),i.parentLocale=O[e],O[e]=i),ve(e)}else O[e]!=null&&(O[e].parentLocale!=null?(O[e]=O[e].parentLocale,e===ve()&&ve(e)):O[e]!=null&&delete O[e]);return O[e]}function _e(e){var t;if(e&&e._locale&&e._locale._abbr&&(e=e._locale._abbr),!e)return Be;if(!K(e)){if(t=Ct(e),t)return t;e=[e]}return qs(e)}function $s(){return qt(O)}function li(e){var t,i=e._a;return i&&v(e).overflow===-2&&(t=i[de]<0||i[de]>11?de:i[te]<1||i[te]>ai(i[F],i[de])?te:i[Y]<0||i[Y]>24||i[Y]===24&&(i[J]!==0||i[ce]!==0||i[xe]!==0)?Y:i[J]<0||i[J]>59?J:i[ce]<0||i[ce]>59?ce:i[xe]<0||i[xe]>999?xe:-1,v(e)._overflowDayOfYear&&(t<F||t>te)&&(t=te),v(e)._overflowWeeks&&t===-1&&(t=Zn),v(e)._overflowWeekday&&t===-1&&(t=Qn),v(e).overflow=t),e}var Gs=/^\s*((?:[+-]\d{6}|\d{4})-(?:\d\d-\d\d|W\d\d-\d|W\d\d|\d\d\d|\d\d))(?:(T| )(\d\d(?::\d\d(?::\d\d(?:[.,]\d+)?)?)?)([+-]\d\d(?::?\d\d)?|\s*Z)?)?$/,Vs=/^\s*((?:[+-]\d{6}|\d{4})(?:\d\d\d\d|W\d\d\d|W\d\d|\d\d\d|\d\d|))(?:(T| )(\d\d(?:\d\d(?:\d\d(?:[.,]\d+)?)?)?)([+-]\d\d(?::?\d\d)?|\s*Z)?)?$/,Bs=/Z|[+-]\d\d(?::?\d\d)?/,rt=[["YYYYYY-MM-DD",/[+-]\d{6}-\d\d-\d\d/],["YYYY-MM-DD",/\d{4}-\d\d-\d\d/],["GGGG-[W]WW-E",/\d{4}-W\d\d-\d/],["GGGG-[W]WW",/\d{4}-W\d\d/,!1],["YYYY-DDD",/\d{4}-\d{3}/],["YYYY-MM",/\d{4}-\d\d/,!1],["YYYYYYMMDD",/[+-]\d{10}/],["YYYYMMDD",/\d{8}/],["GGGG[W]WWE",/\d{4}W\d{3}/],["GGGG[W]WW",/\d{4}W\d{2}/,!1],["YYYYDDD",/\d{7}/],["YYYYMM",/\d{6}/,!1],["YYYY",/\d{4}/,!1]],Yt=[["HH:mm:ss.SSSS",/\d\d:\d\d:\d\d\.\d+/],["HH:mm:ss,SSSS",/\d\d:\d\d:\d\d,\d+/],["HH:mm:ss",/\d\d:\d\d:\d\d/],["HH:mm",/\d\d:\d\d/],["HHmmss.SSSS",/\d\d\d\d\d\d\.\d+/],["HHmmss,SSSS",/\d\d\d\d\d\d,\d+/],["HHmmss",/\d\d\d\d\d\d/],["HHmm",/\d\d\d\d/],["HH",/\d\d/]],Zs=/^\/?Date\((-?\d+)/i,Qs=/^(?:(Mon|Tue|Wed|Thu|Fri|Sat|Sun),?\s)?(\d{1,2})\s(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)\s(\d{2,4})\s(\d\d):(\d\d)(?::(\d\d))?\s(?:(UT|GMT|[ECMP][SD]T)|([Zz])|([+-]\d{4}))$/,Js={UT:0,GMT:0,EDT:-4*60,EST:-5*60,CDT:-5*60,CST:-6*60,MDT:-6*60,MST:-7*60,PDT:-7*60,PST:-8*60};function ra(e){var t,i,a=e._i,n=Gs.exec(a)||Vs.exec(a),s,r,o,f,b=rt.length,y=Yt.length;if(n){for(v(e).iso=!0,t=0,i=b;t<i;t++)if(rt[t][1].exec(n[1])){r=rt[t][0],s=rt[t][2]!==!1;break}if(r==null){e._isValid=!1;return}if(n[3]){for(t=0,i=y;t<i;t++)if(Yt[t][1].exec(n[3])){o=(n[2]||" ")+Yt[t][0];break}if(o==null){e._isValid=!1;return}}if(!s&&o!=null){e._isValid=!1;return}if(n[4])if(Bs.exec(n[4]))f="Z";else{e._isValid=!1;return}e._f=r+(o||"")+(f||""),ci(e)}else e._isValid=!1}function Ks(e,t,i,a,n,s){var r=[Xs(e),Qi.indexOf(t),parseInt(i,10),parseInt(a,10),parseInt(n,10)];return s&&r.push(parseInt(s,10)),r}function Xs(e){var t=parseInt(e,10);return t<=49?2e3+t:t<=999?1900+t:t}function er(e){return e.replace(/\([^()]*\)|[\n\t]/g," ").replace(/(\s\s+)/g," ").replace(/^\s\s*/,"").replace(/\s\s*$/,"")}function tr(e,t,i){if(e){var a=ia.indexOf(e),n=new Date(t[0],t[1],t[2]).getDay();if(a!==n)return v(i).weekdayMismatch=!0,i._isValid=!1,!1}return!0}function ir(e,t,i){if(e)return Js[e];if(t)return 0;var a=parseInt(i,10),n=a%100,s=(a-n)/100;return s*60+n}function oa(e){var t=Qs.exec(er(e._i)),i;if(t){if(i=Ks(t[4],t[3],t[2],t[5],t[6],t[7]),!tr(t[1],i,e))return;e._a=i,e._tzm=ir(t[8],t[9],t[10]),e._d=Ge.apply(null,e._a),e._d.setUTCMinutes(e._d.getUTCMinutes()-e._tzm),v(e).rfc2822=!0}else e._isValid=!1}function ar(e){var t=Zs.exec(e._i);if(t!==null){e._d=new Date(+t[1]);return}if(ra(e),e._isValid===!1)delete e._isValid;else return;if(oa(e),e._isValid===!1)delete e._isValid;else return;e._strict?e._isValid=!1:u.createFromInputFallback(e)}u.createFromInputFallback=B("value provided is not in a recognized RFC2822 or ISO format. moment construction falls back to js Date(), which is not reliable across all browsers and versions. Non RFC2822/ISO date formats are discouraged. Please refer to http://momentjs.com/guides/#/warnings/js-date/ for more info.",function(e){e._d=new Date(e._i+(e._useUTC?" UTC":""))});function Oe(e,t,i){return e!=null?e:t!=null?t:i}function nr(e){var t=new Date(u.now());return e._useUTC?[t.getUTCFullYear(),t.getUTCMonth(),t.getUTCDate()]:[t.getFullYear(),t.getMonth(),t.getDate()]}function di(e){var t,i,a=[],n,s,r;if(!e._d){for(n=nr(e),e._w&&e._a[te]==null&&e._a[de]==null&&sr(e),e._dayOfYear!=null&&(r=Oe(e._a[F],n[F]),(e._dayOfYear>He(r)||e._dayOfYear===0)&&(v(e)._overflowDayOfYear=!0),i=Ge(r,0,e._dayOfYear),e._a[de]=i.getUTCMonth(),e._a[te]=i.getUTCDate()),t=0;t<3&&e._a[t]==null;++t)e._a[t]=a[t]=n[t];for(;t<7;t++)e._a[t]=a[t]=e._a[t]==null?t===2?1:0:e._a[t];e._a[Y]===24&&e._a[J]===0&&e._a[ce]===0&&e._a[xe]===0&&(e._nextDay=!0,e._a[Y]=0),e._d=(e._useUTC?Ge:ps).apply(null,a),s=e._useUTC?e._d.getUTCDay():e._d.getDay(),e._tzm!=null&&e._d.setUTCMinutes(e._d.getUTCMinutes()-e._tzm),e._nextDay&&(e._a[Y]=24),e._w&&typeof e._w.d!="undefined"&&e._w.d!==s&&(v(e).weekdayMismatch=!0)}}function sr(e){var t,i,a,n,s,r,o,f,b;t=e._w,t.GG!=null||t.W!=null||t.E!=null?(s=1,r=4,i=Oe(t.GG,e._a[F],Ve(z(),1,4).year),a=Oe(t.W,1),n=Oe(t.E,1),(n<1||n>7)&&(f=!0)):(s=e._locale._week.dow,r=e._locale._week.doy,b=Ve(z(),s,r),i=Oe(t.gg,e._a[F],b.year),a=Oe(t.w,b.week),t.d!=null?(n=t.d,(n<0||n>6)&&(f=!0)):t.e!=null?(n=t.e+s,(t.e<0||t.e>6)&&(f=!0)):n=s),a<1||a>ue(i,s,r)?v(e)._overflowWeeks=!0:f!=null?v(e)._overflowWeekday=!0:(o=ta(i,a,n,s,r),e._a[F]=o.year,e._dayOfYear=o.dayOfYear)}u.ISO_8601=function(){};u.RFC_2822=function(){};function ci(e){if(e._f===u.ISO_8601){ra(e);return}if(e._f===u.RFC_2822){oa(e);return}e._a=[],v(e).empty=!0;var t=""+e._i,i,a,n,s,r,o=t.length,f=0,b,y;for(n=Wi(e._f,e._locale).match(Kt)||[],y=n.length,i=0;i<y;i++)s=n[i],a=(t.match(Gn(s,e))||[])[0],a&&(r=t.substr(0,t.indexOf(a)),r.length>0&&v(e).unusedInput.push(r),t=t.slice(t.indexOf(a)+a.length),f+=a.length),Te[s]?(a?v(e).empty=!1:v(e).unusedTokens.push(s),Bn(s,a,e)):e._strict&&!a&&v(e).unusedTokens.push(s);v(e).charsLeftOver=o-f,t.length>0&&v(e).unusedInput.push(t),e._a[Y]<=12&&v(e).bigHour===!0&&e._a[Y]>0&&(v(e).bigHour=void 0),v(e).parsedDateParts=e._a.slice(0),v(e).meridiem=e._meridiem,e._a[Y]=rr(e._locale,e._a[Y],e._meridiem),b=v(e).era,b!==null&&(e._a[F]=e._locale.erasConvertYear(b,e._a[F])),di(e),li(e)}function rr(e,t,i){var a;return i==null?t:e.meridiemHour!=null?e.meridiemHour(t,i):(e.isPM!=null&&(a=e.isPM(i),a&&t<12&&(t+=12),!a&&t===12&&(t=0)),t)}function or(e){var t,i,a,n,s,r,o=!1,f=e._f.length;if(f===0){v(e).invalidFormat=!0,e._d=new Date(NaN);return}for(n=0;n<f;n++)s=0,r=!1,t=Qt({},e),e._useUTC!=null&&(t._useUTC=e._useUTC),t._f=e._f[n],ci(t),Zt(t)&&(r=!0),s+=v(t).charsLeftOver,s+=v(t).unusedTokens.length*10,v(t).score=s,o?s<a&&(a=s,i=t):(a==null||s<a||r)&&(a=s,i=t,r&&(o=!0));ye(e,i||t)}function lr(e){if(!e._d){var t=Xt(e._i),i=t.day===void 0?t.date:t.day;e._a=Fi([t.year,t.month,i,t.hour,t.minute,t.second,t.millisecond],function(a){return a&&parseInt(a,10)}),di(e)}}function dr(e){var t=new Qe(li(la(e)));return t._nextDay&&(t.add(1,"d"),t._nextDay=void 0),t}function la(e){var t=e._i,i=e._f;return e._locale=e._locale||_e(e._l),t===null||i===void 0&&t===""?ft({nullInput:!0}):(typeof t=="string"&&(e._i=t=e._locale.preparse(t)),X(t)?new Qe(li(t)):(Ze(t)?e._d=t:K(i)?or(e):i?ci(e):cr(e),Zt(e)||(e._d=null),e))}function cr(e){var t=e._i;U(t)?e._d=new Date(u.now()):Ze(t)?e._d=new Date(t.valueOf()):typeof t=="string"?ar(e):K(t)?(e._a=Fi(t.slice(0),function(i){return parseInt(i,10)}),di(e)):De(t)?lr(e):me(t)?e._d=new Date(t):u.createFromInputFallback(e)}function da(e,t,i,a,n){var s={};return(t===!0||t===!1)&&(a=t,t=void 0),(i===!0||i===!1)&&(a=i,i=void 0),(De(e)&&Bt(e)||K(e)&&e.length===0)&&(e=void 0),s._isAMomentObject=!0,s._useUTC=s._isUTC=n,s._l=i,s._i=e,s._f=t,s._strict=a,dr(s)}function z(e,t,i,a){return da(e,t,i,a,!1)}var pr=B("moment().min is deprecated, use moment.max instead. http://momentjs.com/guides/#/warnings/min-max/",function(){var e=z.apply(null,arguments);return this.isValid()&&e.isValid()?e<this?this:e:ft()}),ur=B("moment().max is deprecated, use moment.min instead. http://momentjs.com/guides/#/warnings/min-max/",function(){var e=z.apply(null,arguments);return this.isValid()&&e.isValid()?e>this?this:e:ft()});function ca(e,t){var i,a;if(t.length===1&&K(t[0])&&(t=t[0]),!t.length)return z();for(i=t[0],a=1;a<t.length;++a)(!t[a].isValid()||t[a][e](i))&&(i=t[a]);return i}function mr(){var e=[].slice.call(arguments,0);return ca("isBefore",e)}function _r(){var e=[].slice.call(arguments,0);return ca("isAfter",e)}var fr=function(){return Date.now?Date.now():+new Date},Ue=["year","quarter","month","week","day","hour","minute","second","millisecond"];function gr(e){var t,i=!1,a,n=Ue.length;for(t in e)if(k(e,t)&&!(T.call(Ue,t)!==-1&&(e[t]==null||!isNaN(e[t]))))return!1;for(a=0;a<n;++a)if(e[Ue[a]]){if(i)return!1;parseFloat(e[Ue[a]])!==w(e[Ue[a]])&&(i=!0)}return!0}function hr(){return this._isValid}function yr(){return ee(NaN)}function kt(e){var t=Xt(e),i=t.year||0,a=t.quarter||0,n=t.month||0,s=t.week||t.isoWeek||0,r=t.day||0,o=t.hour||0,f=t.minute||0,b=t.second||0,y=t.millisecond||0;this._isValid=gr(t),this._milliseconds=+y+b*1e3+f*6e4+o*1e3*60*60,this._days=+r+s*7,this._months=+n+a*3+i*12,this._data={},this._locale=_e(),this._bubble()}function lt(e){return e instanceof kt}function Ht(e){return e<0?Math.round(-1*e)*-1:Math.round(e)}function br(e,t,i){var a=Math.min(e.length,t.length),n=Math.abs(e.length-t.length),s=0,r;for(r=0;r<a;r++)(i&&e[r]!==t[r]||!i&&w(e[r])!==w(t[r]))&&s++;return s+n}function pa(e,t){g(e,0,0,function(){var i=this.utcOffset(),a="+";return i<0&&(i=-i,a="-"),a+ie(~~(i/60),2)+t+ie(~~i%60,2)})}pa("Z",":");pa("ZZ","");_("Z",vt);_("ZZ",vt);S(["Z","ZZ"],function(e,t,i){i._useUTC=!0,i._tzm=pi(vt,e)});var vr=/([\+\-]|\d\d)/gi;function pi(e,t){var i=(t||"").match(e),a,n,s;return i===null?null:(a=i[i.length-1]||[],n=(a+"").match(vr)||["-",0,0],s=+(n[1]*60)+w(n[2]),s===0?0:n[0]==="+"?s:-s)}function ui(e,t){var i,a;return t._isUTC?(i=t.clone(),a=(X(e)||Ze(e)?e.valueOf():z(e).valueOf())-i.valueOf(),i._d.setTime(i._d.valueOf()+a),u.updateOffset(i,!1),i):z(e).local()}function $t(e){return-Math.round(e._d.getTimezoneOffset())}u.updateOffset=function(){};function wr(e,t,i){var a=this._offset||0,n;if(!this.isValid())return e!=null?this:NaN;if(e!=null){if(typeof e=="string"){if(e=pi(vt,e),e===null)return this}else Math.abs(e)<16&&!i&&(e=e*60);return!this._isUTC&&t&&(n=$t(this)),this._offset=e,this._isUTC=!0,n!=null&&this.add(n,"m"),a!==e&&(!t||this._changeInProgress?_a(this,ee(e-a,"m"),1,!1):this._changeInProgress||(this._changeInProgress=!0,u.updateOffset(this,!0),this._changeInProgress=null)),this}else return this._isUTC?a:$t(this)}function Cr(e,t){return e!=null?(typeof e!="string"&&(e=-e),this.utcOffset(e,t),this):-this.utcOffset()}function kr(e){return this.utcOffset(0,e)}function xr(e){return this._isUTC&&(this.utcOffset(0,e),this._isUTC=!1,e&&this.subtract($t(this),"m")),this}function Dr(){if(this._tzm!=null)this.utcOffset(this._tzm,!1,!0);else if(typeof this._i=="string"){var e=pi(Hn,this._i);e!=null?this.utcOffset(e):this.utcOffset(0,!0)}return this}function Sr(e){return this.isValid()?(e=e?z(e).utcOffset():0,(this.utcOffset()-e)%60===0):!1}function zr(){return this.utcOffset()>this.clone().month(0).utcOffset()||this.utcOffset()>this.clone().month(5).utcOffset()}function Lr(){if(!U(this._isDSTShifted))return this._isDSTShifted;var e={},t;return Qt(e,this),e=la(e),e._a?(t=e._isUTC?ae(e._a):z(e._a),this._isDSTShifted=this.isValid()&&br(e._a,t.toArray())>0):this._isDSTShifted=!1,this._isDSTShifted}function Or(){return this.isValid()?!this._isUTC:!1}function Mr(){return this.isValid()?this._isUTC:!1}function ua(){return this.isValid()?this._isUTC&&this._offset===0:!1}var Er=/^(-|\+)?(?:(\d*)[. ])?(\d+):(\d+)(?::(\d+)(\.\d*)?)?$/,Tr=/^(-|\+)?P(?:([-+]?[0-9,.]*)Y)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)W)?(?:([-+]?[0-9,.]*)D)?(?:T(?:([-+]?[0-9,.]*)H)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)S)?)?$/;function ee(e,t){var i=e,a=null,n,s,r;return lt(e)?i={ms:e._milliseconds,d:e._days,M:e._months}:me(e)||!isNaN(+e)?(i={},t?i[t]=+e:i.milliseconds=+e):(a=Er.exec(e))?(n=a[1]==="-"?-1:1,i={y:0,d:w(a[te])*n,h:w(a[Y])*n,m:w(a[J])*n,s:w(a[ce])*n,ms:w(Ht(a[xe]*1e3))*n}):(a=Tr.exec(e))?(n=a[1]==="-"?-1:1,i={y:we(a[2],n),M:we(a[3],n),w:we(a[4],n),d:we(a[5],n),h:we(a[6],n),m:we(a[7],n),s:we(a[8],n)}):i==null?i={}:typeof i=="object"&&("from"in i||"to"in i)&&(r=Pr(z(i.from),z(i.to)),i={},i.ms=r.milliseconds,i.M=r.months),s=new kt(i),lt(e)&&k(e,"_locale")&&(s._locale=e._locale),lt(e)&&k(e,"_isValid")&&(s._isValid=e._isValid),s}ee.fn=kt.prototype;ee.invalid=yr;function we(e,t){var i=e&&parseFloat(e.replace(",","."));return(isNaN(i)?0:i)*t}function Si(e,t){var i={};return i.months=t.month()-e.month()+(t.year()-e.year())*12,e.clone().add(i.months,"M").isAfter(t)&&--i.months,i.milliseconds=+t-+e.clone().add(i.months,"M"),i}function Pr(e,t){var i;return e.isValid()&&t.isValid()?(t=ui(t,e),e.isBefore(t)?i=Si(e,t):(i=Si(t,e),i.milliseconds=-i.milliseconds,i.months=-i.months),i):{milliseconds:0,months:0}}function ma(e,t){return function(i,a){var n,s;return a!==null&&!isNaN(+a)&&(qi(t,"moment()."+t+"(period, number) is deprecated. Please use moment()."+t+"(number, period). See http://momentjs.com/guides/#/warnings/add-inverted-param/ for more info."),s=i,i=a,a=s),n=ee(i,a),_a(this,n,e),this}}function _a(e,t,i,a){var n=t._milliseconds,s=Ht(t._days),r=Ht(t._months);!e.isValid()||(a=a==null?!0:a,r&&Ki(e,$e(e,"Month")+r*i),s&&Zi(e,"Date",$e(e,"Date")+s*i),n&&e._d.setTime(e._d.valueOf()+n*i),a&&u.updateOffset(e,s||r))}var Yr=ma(1,"add"),Ar=ma(-1,"subtract");function fa(e){return typeof e=="string"||e instanceof String}function Nr(e){return X(e)||Ze(e)||fa(e)||me(e)||Rr(e)||Ir(e)||e===null||e===void 0}function Ir(e){var t=De(e)&&!Bt(e),i=!1,a=["years","year","y","months","month","M","days","day","d","dates","date","D","hours","hour","h","minutes","minute","m","seconds","second","s","milliseconds","millisecond","ms"],n,s,r=a.length;for(n=0;n<r;n+=1)s=a[n],i=i||k(e,s);return t&&i}function Rr(e){var t=K(e),i=!1;return t&&(i=e.filter(function(a){return!me(a)&&fa(e)}).length===0),t&&i}function jr(e){var t=De(e)&&!Bt(e),i=!1,a=["sameDay","nextDay","lastDay","nextWeek","lastWeek","sameElse"],n,s;for(n=0;n<a.length;n+=1)s=a[n],i=i||k(e,s);return t&&i}function Fr(e,t){var i=e.diff(t,"days",!0);return i<-6?"sameElse":i<-1?"lastWeek":i<0?"lastDay":i<1?"sameDay":i<2?"nextDay":i<7?"nextWeek":"sameElse"}function Ur(e,t){arguments.length===1&&(arguments[0]?Nr(arguments[0])?(e=arguments[0],t=void 0):jr(arguments[0])&&(t=arguments[0],e=void 0):(e=void 0,t=void 0));var i=e||z(),a=ui(i,this).startOf("day"),n=u.calendarFormat(this,a)||"sameElse",s=t&&(ne(t[n])?t[n].call(this,i):t[n]);return this.format(s||this.localeData().calendar(n,this,z(i)))}function qr(){return new Qe(this)}function Wr(e,t){var i=X(e)?e:z(e);return this.isValid()&&i.isValid()?(t=Z(t)||"millisecond",t==="millisecond"?this.valueOf()>i.valueOf():i.valueOf()<this.clone().startOf(t).valueOf()):!1}function Hr(e,t){var i=X(e)?e:z(e);return this.isValid()&&i.isValid()?(t=Z(t)||"millisecond",t==="millisecond"?this.valueOf()<i.valueOf():this.clone().endOf(t).valueOf()<i.valueOf()):!1}function $r(e,t,i,a){var n=X(e)?e:z(e),s=X(t)?t:z(t);return this.isValid()&&n.isValid()&&s.isValid()?(a=a||"()",(a[0]==="("?this.isAfter(n,i):!this.isBefore(n,i))&&(a[1]===")"?this.isBefore(s,i):!this.isAfter(s,i))):!1}function Gr(e,t){var i=X(e)?e:z(e),a;return this.isValid()&&i.isValid()?(t=Z(t)||"millisecond",t==="millisecond"?this.valueOf()===i.valueOf():(a=i.valueOf(),this.clone().startOf(t).valueOf()<=a&&a<=this.clone().endOf(t).valueOf())):!1}function Vr(e,t){return this.isSame(e,t)||this.isAfter(e,t)}function Br(e,t){return this.isSame(e,t)||this.isBefore(e,t)}function Zr(e,t,i){var a,n,s;if(!this.isValid())return NaN;if(a=ui(e,this),!a.isValid())return NaN;switch(n=(a.utcOffset()-this.utcOffset())*6e4,t=Z(t),t){case"year":s=dt(this,a)/12;break;case"month":s=dt(this,a);break;case"quarter":s=dt(this,a)/3;break;case"second":s=(this-a)/1e3;break;case"minute":s=(this-a)/6e4;break;case"hour":s=(this-a)/36e5;break;case"day":s=(this-a-n)/864e5;break;case"week":s=(this-a-n)/6048e5;break;default:s=this-a}return i?s:V(s)}function dt(e,t){if(e.date()<t.date())return-dt(t,e);var i=(t.year()-e.year())*12+(t.month()-e.month()),a=e.clone().add(i,"months"),n,s;return t-a<0?(n=e.clone().add(i-1,"months"),s=(t-a)/(a-n)):(n=e.clone().add(i+1,"months"),s=(t-a)/(n-a)),-(i+s)||0}u.defaultFormat="YYYY-MM-DDTHH:mm:ssZ";u.defaultFormatUtc="YYYY-MM-DDTHH:mm:ss[Z]";function Qr(){return this.clone().locale("en").format("ddd MMM DD YYYY HH:mm:ss [GMT]ZZ")}function Jr(e){if(!this.isValid())return null;var t=e!==!0,i=t?this.clone().utc():this;return i.year()<0||i.year()>9999?ot(i,t?"YYYYYY-MM-DD[T]HH:mm:ss.SSS[Z]":"YYYYYY-MM-DD[T]HH:mm:ss.SSSZ"):ne(Date.prototype.toISOString)?t?this.toDate().toISOString():new Date(this.valueOf()+this.utcOffset()*60*1e3).toISOString().replace("Z",ot(i,"Z")):ot(i,t?"YYYY-MM-DD[T]HH:mm:ss.SSS[Z]":"YYYY-MM-DD[T]HH:mm:ss.SSSZ")}function Kr(){if(!this.isValid())return"moment.invalid(/* "+this._i+" */)";var e="moment",t="",i,a,n,s;return this.isLocal()||(e=this.utcOffset()===0?"moment.utc":"moment.parseZone",t="Z"),i="["+e+'("]',a=0<=this.year()&&this.year()<=9999?"YYYY":"YYYYYY",n="-MM-DD[T]HH:mm:ss.SSS",s=t+'[")]',this.format(i+a+n+s)}function Xr(e){e||(e=this.isUtc()?u.defaultFormatUtc:u.defaultFormat);var t=ot(this,e);return this.localeData().postformat(t)}function eo(e,t){return this.isValid()&&(X(e)&&e.isValid()||z(e).isValid())?ee({to:this,from:e}).locale(this.locale()).humanize(!t):this.localeData().invalidDate()}function to(e){return this.from(z(),e)}function io(e,t){return this.isValid()&&(X(e)&&e.isValid()||z(e).isValid())?ee({from:this,to:e}).locale(this.locale()).humanize(!t):this.localeData().invalidDate()}function ao(e){return this.to(z(),e)}function ga(e){var t;return e===void 0?this._locale._abbr:(t=_e(e),t!=null&&(this._locale=t),this)}var ha=B("moment().lang() is deprecated. Instead, use moment().localeData() to get the language configuration. Use moment().locale() to change languages.",function(e){return e===void 0?this.localeData():this.locale(e)});function ya(){return this._locale}var ut=1e3,Pe=60*ut,mt=60*Pe,ba=(365*400+97)*24*mt;function Ye(e,t){return(e%t+t)%t}function va(e,t,i){return e<100&&e>=0?new Date(e+400,t,i)-ba:new Date(e,t,i).valueOf()}function wa(e,t,i){return e<100&&e>=0?Date.UTC(e+400,t,i)-ba:Date.UTC(e,t,i)}function no(e){var t,i;if(e=Z(e),e===void 0||e==="millisecond"||!this.isValid())return this;switch(i=this._isUTC?wa:va,e){case"year":t=i(this.year(),0,1);break;case"quarter":t=i(this.year(),this.month()-this.month()%3,1);break;case"month":t=i(this.year(),this.month(),1);break;case"week":t=i(this.year(),this.month(),this.date()-this.weekday());break;case"isoWeek":t=i(this.year(),this.month(),this.date()-(this.isoWeekday()-1));break;case"day":case"date":t=i(this.year(),this.month(),this.date());break;case"hour":t=this._d.valueOf(),t-=Ye(t+(this._isUTC?0:this.utcOffset()*Pe),mt);break;case"minute":t=this._d.valueOf(),t-=Ye(t,Pe);break;case"second":t=this._d.valueOf(),t-=Ye(t,ut);break}return this._d.setTime(t),u.updateOffset(this,!0),this}function so(e){var t,i;if(e=Z(e),e===void 0||e==="millisecond"||!this.isValid())return this;switch(i=this._isUTC?wa:va,e){case"year":t=i(this.year()+1,0,1)-1;break;case"quarter":t=i(this.year(),this.month()-this.month()%3+3,1)-1;break;case"month":t=i(this.year(),this.month()+1,1)-1;break;case"week":t=i(this.year(),this.month(),this.date()-this.weekday()+7)-1;break;case"isoWeek":t=i(this.year(),this.month(),this.date()-(this.isoWeekday()-1)+7)-1;break;case"day":case"date":t=i(this.year(),this.month(),this.date()+1)-1;break;case"hour":t=this._d.valueOf(),t+=mt-Ye(t+(this._isUTC?0:this.utcOffset()*Pe),mt)-1;break;case"minute":t=this._d.valueOf(),t+=Pe-Ye(t,Pe)-1;break;case"second":t=this._d.valueOf(),t+=ut-Ye(t,ut)-1;break}return this._d.setTime(t),u.updateOffset(this,!0),this}function ro(){return this._d.valueOf()-(this._offset||0)*6e4}function oo(){return Math.floor(this.valueOf()/1e3)}function lo(){return new Date(this.valueOf())}function co(){var e=this;return[e.year(),e.month(),e.date(),e.hour(),e.minute(),e.second(),e.millisecond()]}function po(){var e=this;return{years:e.year(),months:e.month(),date:e.date(),hours:e.hours(),minutes:e.minutes(),seconds:e.seconds(),milliseconds:e.milliseconds()}}function uo(){return this.isValid()?this.toISOString():null}function mo(){return Zt(this)}function _o(){return ye({},v(this))}function fo(){return v(this).overflow}function go(){return{input:this._i,format:this._f,locale:this._locale,isUTC:this._isUTC,strict:this._strict}}g("N",0,0,"eraAbbr");g("NN",0,0,"eraAbbr");g("NNN",0,0,"eraAbbr");g("NNNN",0,0,"eraName");g("NNNNN",0,0,"eraNarrow");g("y",["y",1],"yo","eraYear");g("y",["yy",2],0,"eraYear");g("y",["yyy",3],0,"eraYear");g("y",["yyyy",4],0,"eraYear");_("N",mi);_("NN",mi);_("NNN",mi);_("NNNN",zo);_("NNNNN",Lo);S(["N","NN","NNN","NNNN","NNNNN"],function(e,t,i,a){var n=i._locale.erasParse(e,a,i._strict);n?v(i).era=n:v(i).invalidEra=e});_("y",Ae);_("yy",Ae);_("yyy",Ae);_("yyyy",Ae);_("yo",Oo);S(["y","yy","yyy","yyyy"],F);S(["yo"],function(e,t,i,a){var n;i._locale._eraYearOrdinalRegex&&(n=e.match(i._locale._eraYearOrdinalRegex)),i._locale.eraYearOrdinalParse?t[F]=i._locale.eraYearOrdinalParse(e,n):t[F]=parseInt(e,10)});function ho(e,t){var i,a,n,s=this._eras||_e("en")._eras;for(i=0,a=s.length;i<a;++i){switch(typeof s[i].since){case"string":n=u(s[i].since).startOf("day"),s[i].since=n.valueOf();break}switch(typeof s[i].until){case"undefined":s[i].until=1/0;break;case"string":n=u(s[i].until).startOf("day").valueOf(),s[i].until=n.valueOf();break}}return s}function yo(e,t,i){var a,n,s=this.eras(),r,o,f;for(e=e.toUpperCase(),a=0,n=s.length;a<n;++a)if(r=s[a].name.toUpperCase(),o=s[a].abbr.toUpperCase(),f=s[a].narrow.toUpperCase(),i)switch(t){case"N":case"NN":case"NNN":if(o===e)return s[a];break;case"NNNN":if(r===e)return s[a];break;case"NNNNN":if(f===e)return s[a];break}else if([r,o,f].indexOf(e)>=0)return s[a]}function bo(e,t){var i=e.since<=e.until?1:-1;return t===void 0?u(e.since).year():u(e.since).year()+(t-e.offset)*i}function vo(){var e,t,i,a=this.localeData().eras();for(e=0,t=a.length;e<t;++e)if(i=this.clone().startOf("day").valueOf(),a[e].since<=i&&i<=a[e].until||a[e].until<=i&&i<=a[e].since)return a[e].name;return""}function wo(){var e,t,i,a=this.localeData().eras();for(e=0,t=a.length;e<t;++e)if(i=this.clone().startOf("day").valueOf(),a[e].since<=i&&i<=a[e].until||a[e].until<=i&&i<=a[e].since)return a[e].narrow;return""}function Co(){var e,t,i,a=this.localeData().eras();for(e=0,t=a.length;e<t;++e)if(i=this.clone().startOf("day").valueOf(),a[e].since<=i&&i<=a[e].until||a[e].until<=i&&i<=a[e].since)return a[e].abbr;return""}function ko(){var e,t,i,a,n=this.localeData().eras();for(e=0,t=n.length;e<t;++e)if(i=n[e].since<=n[e].until?1:-1,a=this.clone().startOf("day").valueOf(),n[e].since<=a&&a<=n[e].until||n[e].until<=a&&a<=n[e].since)return(this.year()-u(n[e].since).year())*i+n[e].offset;return this.year()}function xo(e){return k(this,"_erasNameRegex")||_i.call(this),e?this._erasNameRegex:this._erasRegex}function Do(e){return k(this,"_erasAbbrRegex")||_i.call(this),e?this._erasAbbrRegex:this._erasRegex}function So(e){return k(this,"_erasNarrowRegex")||_i.call(this),e?this._erasNarrowRegex:this._erasRegex}function mi(e,t){return t.erasAbbrRegex(e)}function zo(e,t){return t.erasNameRegex(e)}function Lo(e,t){return t.erasNarrowRegex(e)}function Oo(e,t){return t._eraYearOrdinalRegex||Ae}function _i(){var e=[],t=[],i=[],a=[],n,s,r,o,f,b=this.eras();for(n=0,s=b.length;n<s;++n)r=pe(b[n].name),o=pe(b[n].abbr),f=pe(b[n].narrow),t.push(r),e.push(o),i.push(f),a.push(r),a.push(o),a.push(f);this._erasRegex=new RegExp("^("+a.join("|")+")","i"),this._erasNameRegex=new RegExp("^("+t.join("|")+")","i"),this._erasAbbrRegex=new RegExp("^("+e.join("|")+")","i"),this._erasNarrowRegex=new RegExp("^("+i.join("|")+")","i")}g(0,["gg",2],0,function(){return this.weekYear()%100});g(0,["GG",2],0,function(){return this.isoWeekYear()%100});function xt(e,t){g(0,[e,e.length],0,t)}xt("gggg","weekYear");xt("ggggg","weekYear");xt("GGGG","isoWeekYear");xt("GGGGG","isoWeekYear");_("G",bt);_("g",bt);_("GG",L,H);_("gg",L,H);_("GGGG",ti,ei);_("gggg",ti,ei);_("GGGGG",yt,gt);_("ggggg",yt,gt);Ke(["gggg","ggggg","GGGG","GGGGG"],function(e,t,i,a){t[a.substr(0,2)]=w(e)});Ke(["gg","GG"],function(e,t,i,a){t[a]=u.parseTwoDigitYear(e)});function Mo(e){return Ca.call(this,e,this.week(),this.weekday()+this.localeData()._week.dow,this.localeData()._week.dow,this.localeData()._week.doy)}function Eo(e){return Ca.call(this,e,this.isoWeek(),this.isoWeekday(),1,4)}function To(){return ue(this.year(),1,4)}function Po(){return ue(this.isoWeekYear(),1,4)}function Yo(){var e=this.localeData()._week;return ue(this.year(),e.dow,e.doy)}function Ao(){var e=this.localeData()._week;return ue(this.weekYear(),e.dow,e.doy)}function Ca(e,t,i,a,n){var s;return e==null?Ve(this,a,n).year:(s=ue(e,a,n),t>s&&(t=s),No.call(this,e,t,i,a,n))}function No(e,t,i,a,n){var s=ta(e,t,i,a,n),r=Ge(s.year,0,s.dayOfYear);return this.year(r.getUTCFullYear()),this.month(r.getUTCMonth()),this.date(r.getUTCDate()),this}g("Q",0,"Qo","quarter");_("Q",Hi);S("Q",function(e,t){t[de]=(w(e)-1)*3});function Io(e){return e==null?Math.ceil((this.month()+1)/3):this.month((e-1)*3+this.month()%3)}g("D",["DD",2],"Do","date");_("D",L,Ne);_("DD",L,H);_("Do",function(e,t){return e?t._dayOfMonthOrdinalParse||t._ordinalParse:t._dayOfMonthOrdinalParseLenient});S(["D","DD"],te);S("Do",function(e,t){t[te]=w(e.match(L)[0])});var ka=Ie("Date",!0);g("DDD",["DDDD",3],"DDDo","dayOfYear");_("DDD",ht);_("DDDD",$i);S(["DDD","DDDD"],function(e,t,i){i._dayOfYear=w(e)});function Ro(e){var t=Math.round((this.clone().startOf("day")-this.clone().startOf("year"))/864e5)+1;return e==null?t:this.add(e-t,"d")}g("m",["mm",2],0,"minute");_("m",L,ii);_("mm",L,H);S(["m","mm"],J);var jo=Ie("Minutes",!1);g("s",["ss",2],0,"second");_("s",L,ii);_("ss",L,H);S(["s","ss"],ce);var Fo=Ie("Seconds",!1);g("S",0,0,function(){return~~(this.millisecond()/100)});g(0,["SS",2],0,function(){return~~(this.millisecond()/10)});g(0,["SSS",3],0,"millisecond");g(0,["SSSS",4],0,function(){return this.millisecond()*10});g(0,["SSSSS",5],0,function(){return this.millisecond()*100});g(0,["SSSSSS",6],0,function(){return this.millisecond()*1e3});g(0,["SSSSSSS",7],0,function(){return this.millisecond()*1e4});g(0,["SSSSSSSS",8],0,function(){return this.millisecond()*1e5});g(0,["SSSSSSSSS",9],0,function(){return this.millisecond()*1e6});_("S",ht,Hi);_("SS",ht,H);_("SSS",ht,$i);var be,xa;for(be="SSSS";be.length<=9;be+="S")_(be,Ae);function Uo(e,t){t[xe]=w(("0."+e)*1e3)}for(be="S";be.length<=9;be+="S")S(be,Uo);xa=Ie("Milliseconds",!1);g("z",0,0,"zoneAbbr");g("zz",0,0,"zoneName");function qo(){return this._isUTC?"UTC":""}function Wo(){return this._isUTC?"Coordinated Universal Time":""}var d=Qe.prototype;d.add=Yr;d.calendar=Ur;d.clone=qr;d.diff=Zr;d.endOf=so;d.format=Xr;d.from=eo;d.fromNow=to;d.to=io;d.toNow=ao;d.get=Kn;d.invalidAt=fo;d.isAfter=Wr;d.isBefore=Hr;d.isBetween=$r;d.isSame=Gr;d.isSameOrAfter=Vr;d.isSameOrBefore=Br;d.isValid=mo;d.lang=ha;d.locale=ga;d.localeData=ya;d.max=ur;d.min=pr;d.parsingFlags=_o;d.set=Xn;d.startOf=no;d.subtract=Ar;d.toArray=co;d.toObject=po;d.toDate=lo;d.toISOString=Jr;d.inspect=Kr;typeof Symbol!="undefined"&&Symbol.for!=null&&(d[Symbol.for("nodejs.util.inspect.custom")]=function(){return"Moment<"+this.format()+">"});d.toJSON=uo;d.toString=Qr;d.unix=oo;d.valueOf=ro;d.creationData=go;d.eraName=vo;d.eraNarrow=wo;d.eraAbbr=Co;d.eraYear=ko;d.year=Bi;d.isLeapYear=Jn;d.weekYear=Mo;d.isoWeekYear=Eo;d.quarter=d.quarters=Io;d.month=Xi;d.daysInMonth=ls;d.week=d.weeks=gs;d.isoWeek=d.isoWeeks=hs;d.weeksInYear=Yo;d.weeksInWeekYear=Ao;d.isoWeeksInYear=To;d.isoWeeksInISOWeekYear=Po;d.date=ka;d.day=d.days=Ms;d.weekday=Es;d.isoWeekday=Ts;d.dayOfYear=Ro;d.hour=d.hours=js;d.minute=d.minutes=jo;d.second=d.seconds=Fo;d.millisecond=d.milliseconds=xa;d.utcOffset=wr;d.utc=kr;d.local=xr;d.parseZone=Dr;d.hasAlignedHourOffset=Sr;d.isDST=zr;d.isLocal=Or;d.isUtcOffset=Mr;d.isUtc=ua;d.isUTC=ua;d.zoneAbbr=qo;d.zoneName=Wo;d.dates=B("dates accessor is deprecated. Use date instead.",ka);d.months=B("months accessor is deprecated. Use month instead",Xi);d.years=B("years accessor is deprecated. Use year instead",Bi);d.zone=B("moment().zone is deprecated, use moment().utcOffset instead. http://momentjs.com/guides/#/warnings/zone/",Cr);d.isDSTShifted=B("isDSTShifted is deprecated. See http://momentjs.com/guides/#/warnings/dst-shifted/ for more information",Lr);function Ho(e){return z(e*1e3)}function $o(){return z.apply(null,arguments).parseZone()}function Da(e){return e}var x=Jt.prototype;x.calendar=On;x.longDateFormat=Pn;x.invalidDate=An;x.ordinal=Rn;x.preparse=Da;x.postformat=Da;x.relativeTime=Fn;x.pastFuture=Un;x.set=zn;x.eras=ho;x.erasParse=yo;x.erasConvertYear=bo;x.erasAbbrRegex=Do;x.erasNameRegex=xo;x.erasNarrowRegex=So;x.months=ns;x.monthsShort=ss;x.monthsParse=os;x.monthsRegex=cs;x.monthsShortRegex=ds;x.week=us;x.firstDayOfYear=fs;x.firstDayOfWeek=_s;x.weekdays=Ds;x.weekdaysMin=zs;x.weekdaysShort=Ss;x.weekdaysParse=Os;x.weekdaysRegex=Ps;x.weekdaysShortRegex=Ys;x.weekdaysMinRegex=As;x.isPM=Is;x.meridiem=Fs;function _t(e,t,i,a){var n=_e(),s=ae().set(a,t);return n[i](s,e)}function Sa(e,t,i){if(me(e)&&(t=e,e=void 0),e=e||"",t!=null)return _t(e,t,i,"month");var a,n=[];for(a=0;a<12;a++)n[a]=_t(e,a,i,"month");return n}function fi(e,t,i,a){typeof e=="boolean"?(me(t)&&(i=t,t=void 0),t=t||""):(t=e,i=t,e=!1,me(t)&&(i=t,t=void 0),t=t||"");var n=_e(),s=e?n._week.dow:0,r,o=[];if(i!=null)return _t(t,(i+s)%7,a,"day");for(r=0;r<7;r++)o[r]=_t(t,(r+s)%7,a,"day");return o}function Go(e,t){return Sa(e,t,"months")}function Vo(e,t){return Sa(e,t,"monthsShort")}function Bo(e,t,i){return fi(e,t,i,"weekdays")}function Zo(e,t,i){return fi(e,t,i,"weekdaysShort")}function Qo(e,t,i){return fi(e,t,i,"weekdaysMin")}ve("en",{eras:[{since:"0001-01-01",until:1/0,offset:1,name:"Anno Domini",narrow:"AD",abbr:"AD"},{since:"0000-12-31",until:-1/0,offset:1,name:"Before Christ",narrow:"BC",abbr:"BC"}],dayOfMonthOrdinalParse:/\d{1,2}(th|st|nd|rd)/,ordinal:function(e){var t=e%10,i=w(e%100/10)===1?"th":t===1?"st":t===2?"nd":t===3?"rd":"th";return e+i}});u.lang=B("moment.lang is deprecated. Use moment.locale instead.",ve);u.langData=B("moment.langData is deprecated. Use moment.localeData instead.",_e);var re=Math.abs;function Jo(){var e=this._data;return this._milliseconds=re(this._milliseconds),this._days=re(this._days),this._months=re(this._months),e.milliseconds=re(e.milliseconds),e.seconds=re(e.seconds),e.minutes=re(e.minutes),e.hours=re(e.hours),e.months=re(e.months),e.years=re(e.years),this}function za(e,t,i,a){var n=ee(t,i);return e._milliseconds+=a*n._milliseconds,e._days+=a*n._days,e._months+=a*n._months,e._bubble()}function Ko(e,t){return za(this,e,t,1)}function Xo(e,t){return za(this,e,t,-1)}function zi(e){return e<0?Math.floor(e):Math.ceil(e)}function el(){var e=this._milliseconds,t=this._days,i=this._months,a=this._data,n,s,r,o,f;return e>=0&&t>=0&&i>=0||e<=0&&t<=0&&i<=0||(e+=zi(Gt(i)+t)*864e5,t=0,i=0),a.milliseconds=e%1e3,n=V(e/1e3),a.seconds=n%60,s=V(n/60),a.minutes=s%60,r=V(s/60),a.hours=r%24,t+=V(r/24),f=V(La(t)),i+=f,t-=zi(Gt(f)),o=V(i/12),i%=12,a.days=t,a.months=i,a.years=o,this}function La(e){return e*4800/146097}function Gt(e){return e*146097/4800}function tl(e){if(!this.isValid())return NaN;var t,i,a=this._milliseconds;if(e=Z(e),e==="month"||e==="quarter"||e==="year")switch(t=this._days+a/864e5,i=this._months+La(t),e){case"month":return i;case"quarter":return i/3;case"year":return i/12}else switch(t=this._days+Math.round(Gt(this._months)),e){case"week":return t/7+a/6048e5;case"day":return t+a/864e5;case"hour":return t*24+a/36e5;case"minute":return t*1440+a/6e4;case"second":return t*86400+a/1e3;case"millisecond":return Math.floor(t*864e5)+a;default:throw new Error("Unknown unit "+e)}}function fe(e){return function(){return this.as(e)}}var Oa=fe("ms"),il=fe("s"),al=fe("m"),nl=fe("h"),sl=fe("d"),rl=fe("w"),ol=fe("M"),ll=fe("Q"),dl=fe("y"),cl=Oa;function pl(){return ee(this)}function ul(e){return e=Z(e),this.isValid()?this[e+"s"]():NaN}function Se(e){return function(){return this.isValid()?this._data[e]:NaN}}var ml=Se("milliseconds"),_l=Se("seconds"),fl=Se("minutes"),gl=Se("hours"),hl=Se("days"),yl=Se("months"),bl=Se("years");function vl(){return V(this.days()/7)}var oe=Math.round,Ee={ss:44,s:45,m:45,h:22,d:26,w:null,M:11};function wl(e,t,i,a,n){return n.relativeTime(t||1,!!i,e,a)}function Cl(e,t,i,a){var n=ee(e).abs(),s=oe(n.as("s")),r=oe(n.as("m")),o=oe(n.as("h")),f=oe(n.as("d")),b=oe(n.as("M")),y=oe(n.as("w")),P=oe(n.as("y")),j=s<=i.ss&&["s",s]||s<i.s&&["ss",s]||r<=1&&["m"]||r<i.m&&["mm",r]||o<=1&&["h"]||o<i.h&&["hh",o]||f<=1&&["d"]||f<i.d&&["dd",f];return i.w!=null&&(j=j||y<=1&&["w"]||y<i.w&&["ww",y]),j=j||b<=1&&["M"]||b<i.M&&["MM",b]||P<=1&&["y"]||["yy",P],j[2]=t,j[3]=+e>0,j[4]=a,wl.apply(null,j)}function kl(e){return e===void 0?oe:typeof e=="function"?(oe=e,!0):!1}function xl(e,t){return Ee[e]===void 0?!1:t===void 0?Ee[e]:(Ee[e]=t,e==="s"&&(Ee.ss=t-1),!0)}function Dl(e,t){if(!this.isValid())return this.localeData().invalidDate();var i=!1,a=Ee,n,s;return typeof e=="object"&&(t=e,e=!1),typeof e=="boolean"&&(i=e),typeof t=="object"&&(a=Object.assign({},Ee,t),t.s!=null&&t.ss==null&&(a.ss=t.s-1)),n=this.localeData(),s=Cl(this,!i,a,n),i&&(s=n.pastFuture(+this,s)),n.postformat(s)}var At=Math.abs;function Le(e){return(e>0)-(e<0)||+e}function Dt(){if(!this.isValid())return this.localeData().invalidDate();var e=At(this._milliseconds)/1e3,t=At(this._days),i=At(this._months),a,n,s,r,o=this.asSeconds(),f,b,y,P;return o?(a=V(e/60),n=V(a/60),e%=60,a%=60,s=V(i/12),i%=12,r=e?e.toFixed(3).replace(/\.?0+$/,""):"",f=o<0?"-":"",b=Le(this._months)!==Le(o)?"-":"",y=Le(this._days)!==Le(o)?"-":"",P=Le(this._milliseconds)!==Le(o)?"-":"",f+"P"+(s?b+s+"Y":"")+(i?b+i+"M":"")+(t?y+t+"D":"")+(n||a||e?"T":"")+(n?P+n+"H":"")+(a?P+a+"M":"")+(e?P+r+"S":"")):"P0D"}var C=kt.prototype;C.isValid=hr;C.abs=Jo;C.add=Ko;C.subtract=Xo;C.as=tl;C.asMilliseconds=Oa;C.asSeconds=il;C.asMinutes=al;C.asHours=nl;C.asDays=sl;C.asWeeks=rl;C.asMonths=ol;C.asQuarters=ll;C.asYears=dl;C.valueOf=cl;C._bubble=el;C.clone=pl;C.get=ul;C.milliseconds=ml;C.seconds=_l;C.minutes=fl;C.hours=gl;C.days=hl;C.weeks=vl;C.months=yl;C.years=bl;C.humanize=Dl;C.toISOString=Dt;C.toString=Dt;C.toJSON=Dt;C.locale=ga;C.localeData=ya;C.toIsoString=B("toIsoString() is deprecated. Please use toISOString() instead (notice the capitals)",Dt);C.lang=ha;g("X",0,0,"unix");g("x",0,0,"valueOf");_("x",bt);_("X",$n);S("X",function(e,t,i){i._d=new Date(parseFloat(e)*1e3)});S("x",function(e,t,i){i._d=new Date(w(e))});//! moment.js
u.version="2.30.1";Dn(z);u.fn=d;u.min=mr;u.max=_r;u.now=fr;u.utc=ae;u.unix=Ho;u.months=Go;u.isDate=Ze;u.locale=ve;u.invalid=ft;u.duration=ee;u.isMoment=X;u.weekdays=Bo;u.parseZone=$o;u.localeData=_e;u.isDuration=lt;u.monthsShort=Vo;u.weekdaysMin=Qo;u.defineLocale=oi;u.updateLocale=Hs;u.locales=$s;u.weekdaysShort=Zo;u.normalizeUnits=Z;u.relativeTimeRounding=kl;u.relativeTimeThreshold=xl;u.calendarFormat=Fr;u.prototype=d;u.HTML5_FMT={DATETIME_LOCAL:"YYYY-MM-DDTHH:mm",DATETIME_LOCAL_SECONDS:"YYYY-MM-DDTHH:mm:ss",DATETIME_LOCAL_MS:"YYYY-MM-DDTHH:mm:ss.SSS",DATE:"YYYY-MM-DD",TIME:"HH:mm",TIME_SECONDS:"HH:mm:ss",TIME_MS:"HH:mm:ss.SSS",WEEK:"GGGG-[W]WW",MONTH:"YYYY-MM"};const Sl={name:"StudentsDocuments",props:{student_id:{type:Number,required:!0},student:{type:Object,required:!0}},data(){return{loading:!1,qeditor:"",fonts:{arial:"Arial",arial_black:"Arial Black",comic_sans:"Comic Sans MS",courier_new:"Courier New",impact:"Impact",lucida_grande:"Lucida Grande",times_new_roman:"Times New Roman",verdana:"Verdana"},toolbar:[[{label:this.$q.lang.editor.align,icon:this.$q.iconSet.editor.align,fixedLabel:!0,list:"only-icons",options:["left","center","right","justify"]},{label:this.$q.lang.editor.align,icon:this.$q.iconSet.editor.align,fixedLabel:!0,options:["left","center","right","justify"]}],["bold","italic","strike","underline","subscript","superscript"],["token","hr","link","custom_btn"],["print","fullscreen"],[{label:this.$q.lang.editor.formatting,icon:this.$q.iconSet.editor.formatting,list:"no-icons",options:["p","h1","h2","h3","h4","h5","h6","code"]},{label:this.$q.lang.editor.fontSize,icon:this.$q.iconSet.editor.fontSize,fixedLabel:!0,fixedIcon:!0,list:"no-icons",options:["size-1","size-2","size-3","size-4","size-5","size-6","size-7"]},{label:this.$q.lang.editor.defaultFont,icon:this.$q.iconSet.editor.font,fixedIcon:!0,list:"no-icons",options:["default_font","arial","arial_black","comic_sans","courier_new","impact","lucida_grande","times_new_roman","verdana"]},"removeFormat"],["quote","unordered","ordered","outdent","indent"],["undo","redo"],["viewsource"]],documentsSelect:["AUTORIZACI\xD3N PARA EL ABORDAJE DEC.","CERTIFICADO PARA EL EMPLEADOR","CONTRATO DE CONTIGENCIAS","FICHA DEL PLAN DE APOYO INDIVIDUALIZADO (PAI) PARA ESTUDIANTES CON TEA","PLAN DE ACOMPA\xD1AMIENTO EMOCIONAL Y CONDUCTUAL","FICHA DE SEGUIMIENTO INDIVIDUALIZADA PARA DESREGULACI\xD3N EMOCIONAL"],documentDialog:!1,documentDialogPdf:!1,iframe:!1,document:{},documents:[]}},mounted(){this.documentsGet()},methods:{restoreHtml(){const e=u().format("DD/MM/YYYY HH:mm:ss");if(this.document.name==="AUTORIZACI\xD3N PARA EL ABORDAJE DEC."&&(this.document.html=ze.autorizacionAbordajeDec(this.student.tutorName,this.student.tutorRut,this.student.name,this.student.course)),this.document.name==="CERTIFICADO PARA EL EMPLEADOR"&&(this.document.html=ze.certificadoEmpleador(this.student.name,this.student.tutorName,this.student.course,this.student.tutorRut)),this.document.name==="CONTRATO DE CONTIGENCIAS"&&(this.document.html=ze.contratoContigencia(this.student.name,this.student.tutorName,"",e)),this.document.name==="FICHA DEL PLAN DE APOYO INDIVIDUALIZADO (PAI) PARA ESTUDIANTES CON TEA"&&(this.document.html=ze.fichaPai(this.student.name,this.student.course,this.student.birthdate,e)),this.document.name==="PLAN DE ACOMPA\xD1AMIENTO EMOCIONAL Y CONDUCTUAL"){let t=0;this.student.birthdate&&(t=u().diff(this.student.birthdate,"years")),this.document.html=ze.planAcompanamiento(this.student.name,this.student.rut,t,this.student.course,this.student.tutorName,this.student.phone)}this.document.name==="FICHA DE SEGUIMIENTO INDIVIDUALIZADA PARA DESREGULACI\xD3N EMOCIONAL"&&(this.document.html=ze.fichaSeguimiento(this.student.name,e))},documentShowMobile(e){window.open(this.$url+"documents/"+e.codigo+"/show","_blank")},documentShow(e){this.loading=!0,this.$axios.get(`documents/${e.id}/download64`).then(t=>{this.document=t.data,this.documentDialogPdf=!0,this.iframe=`data:application/pdf;base64,${this.document.pdf}`}).catch(t=>{this.$alert.error(t.response.data.message)}).finally(()=>{this.loading=!1})},documentClickEdit(e){this.document=e,this.documentDialog=!0},documentDelete(e){this.$alert.confirm("\xBFEst\xE1 seguro de eliminar este document?").onOk(()=>{this.loading=!0,this.$axios.delete(`documents/${e.id}`).then(t=>{this.$alert.success("Documento eliminado"),this.documentsGet()}).catch(t=>{this.$alert.error(t.response.data.message)}).finally(()=>{this.loading=!1})})},documentOpen(e){this.loading=!0,this.$axios.get(`documents/${e.id}/download`,{responseType:"blob"}).then(t=>{const i=window.URL.createObjectURL(new Blob([t.data],{type:"application/pdf"})),a=window.document.createElement("a");a.href=i,a.setAttribute("download",`${e.description}.pdf`),window.document.body.appendChild(a),a.click(),a.remove(),window.URL.revokeObjectURL(i)}).catch(t=>{this.$alert.error(t.response.data.message)}).finally(()=>{this.loading=!1})},documentsGet(){this.loading=!0,this.$axios.get("documents",{params:{student_id:this.student_id}}).then(e=>{this.documents=e.data}).catch(e=>{this.$alert.error(e.response.data.message)}).finally(()=>{this.loading=!1})},documentCreate(){this.loading=!0,this.$axios.post("documents",{student_id:this.student_id,document:this.document}).then(e=>{this.$alert.success("Documento agregado"),this.documentDialog=!1,this.documentsGet()}).catch(e=>{this.$alert.error(e.response.data.message)}).finally(()=>{this.loading=!1})},documentUpdate(){this.loading=!0,this.$axios.put(`documents/${this.document.id}`,this.document).then(e=>{this.$alert.success("Documento actualizado"),this.documentDialog=!1,this.documentsGet()}).catch(e=>{this.$alert.error(e.response.data.message)}).finally(()=>{this.loading=!1})},documentForm(){this.document.id?this.documentUpdate():this.documentCreate()},addDocument(){this.documentDialog=!0,this.document={html:""}}}},zl={class:"row items-center"},Ll=p("div",{class:"text-h6 text-bold"},"Documentos",-1),Ol=p("thead",null,[p("tr",null,[p("th",null,"Opciones"),p("th",null,"Fecha"),p("th",null,"Documento"),p("th",null,"Usuario")])],-1),Ml={class:"text-h6 text-bold"},El={class:"row"},Tl={class:"col-12"},Pl=p("div",{class:"text-h6 text-bold"},"Documento",-1),Yl={class:"row"},Al={class:"col-12"},Nl=["src"];function Il(e,t,i,a,n,s){return R(),$(le,null,{default:h(()=>[m(G,null,{default:h(()=>[p("div",zl,[Ll,m(We),m(N,{icon:"add_circle_outline",onClick:s.addDocument,label:"Agregar","no-caps":"",color:"indigo",dense:"",size:"10px",loading:n.loading},null,8,["onClick","loading"])]),m(Ei,{dense:"","wrap-cells":""},{default:h(()=>[Ol,p("tbody",null,[(R(!0),qe(It,null,Nt(n.documents,r=>{var o;return R(),qe("tr",{key:r.id},[p("td",null,[m(Pi,{size:"10px",color:"primary",loading:n.loading,"auto-close":"",class:"q-mr-sm",label:"Opciones","no-caps":""},{default:h(()=>[it((R(),$(ke,{clickable:"",onClick:f=>s.documentOpen(r)},{default:h(()=>[m(q,{avatar:""},{default:h(()=>[m(Me,{name:"fa-solid fa-file-arrow-down"})]),_:1}),m(q,null,{default:h(()=>[Ce("Descargar")]),_:1})]),_:2},1032,["onClick"])),[[nt]]),it((R(),$(ke,{clickable:"",onClick:f=>s.documentShow(r)},{default:h(()=>[m(q,{avatar:""},{default:h(()=>[m(Me,{name:"fa-solid fa-eye"})]),_:1}),m(q,null,{default:h(()=>[Ce("Ver")]),_:1})]),_:2},1032,["onClick"])),[[nt]]),it((R(),$(ke,{clickable:"",onClick:f=>s.documentDelete(r)},{default:h(()=>[m(q,{avatar:""},{default:h(()=>[m(Me,{name:"delete"})]),_:1}),m(q,null,{default:h(()=>[Ce("Eliminar")]),_:1})]),_:2},1032,["onClick"])),[[nt]]),it((R(),$(ke,{clickable:"",onClick:f=>s.documentClickEdit(r)},{default:h(()=>[m(q,{avatar:""},{default:h(()=>[m(Me,{name:"edit"})]),_:1}),m(q,null,{default:h(()=>[Ce("Editar")]),_:1})]),_:2},1032,["onClick"])),[[nt]])]),_:2},1032,["loading"])]),p("td",null,M(e.$filters.formatdMYHMS(r.date)),1),p("td",null,M(r.description),1),p("td",null,M((o=r.user)==null?void 0:o.name),1)])}),128))])]),_:1})]),_:1}),m(jt,{modelValue:n.documentDialog,"onUpdate:modelValue":t[4]||(t[4]=r=>n.documentDialog=r),persistent:""},{default:h(()=>[m(le,{style:{width:"750px","max-width":"90vw",height:"90vh","max-height":"90vh"}},{default:h(()=>[m(G,{class:"row items-center q-pb-none"},{default:h(()=>[p("div",Ml,M(n.document.id?"Editar":"Agregar")+" Documento ",1),m(We),m(N,{icon:"close",flat:"",round:"",dense:"",onClick:t[0]||(t[0]=r=>n.documentDialog=!1)})]),_:1}),m(G,null,{default:h(()=>[m(pn,{modelValue:n.document.name,"onUpdate:modelValue":[t[1]||(t[1]=r=>n.document.name=r),s.restoreHtml],options:n.documentsSelect,label:"Seleccionar Documento",outlined:"",dense:""},null,8,["modelValue","options","onUpdate:modelValue"]),m(Ti,{onSubmit:s.documentForm},{default:h(()=>[p("div",El,[p("div",Tl,[n.document.html!==""?(R(),$(xn,{key:0,modelValue:n.document.html,"onUpdate:modelValue":t[2]||(t[2]=r=>n.document.html=r),dense:e.$q.screen.lt.md,toolbar:n.toolbar,fonts:n.fonts},null,8,["modelValue","dense","toolbar","fonts"])):Rt("",!0)])]),m(Mi,{align:"right"},{default:h(()=>[m(N,{label:"Cancelar",color:"negative",onClick:t[3]||(t[3]=r=>n.documentDialog=!1),loading:n.loading,icon:"close","no-caps":""},null,8,["loading"]),n.document.html!==""?(R(),$(N,{key:0,label:n.document.id?"Editar":"Agregar",color:n.document.id?"orange":"green",type:"submit",loading:n.loading,icon:n.document.id?"edit":"save","no-caps":""},null,8,["label","color","loading","icon"])):Rt("",!0)]),_:1})]),_:1},8,["onSubmit"])]),_:1})]),_:1})]),_:1},8,["modelValue"]),m(jt,{modelValue:n.documentDialogPdf,"onUpdate:modelValue":t[6]||(t[6]=r=>n.documentDialogPdf=r)},{default:h(()=>[m(le,{style:{width:"750px","max-width":"90vw"}},{default:h(()=>[m(G,{class:"row items-center q-pb-none"},{default:h(()=>[Pl,m(We),m(N,{icon:"close",flat:"",round:"",dense:"",onClick:t[5]||(t[5]=r=>n.documentDialogPdf=!1)})]),_:1}),m(G,null,{default:h(()=>[p("div",Yl,[p("div",Al,[p("iframe",{src:n.iframe,width:"100%",height:"500px"},null,8,Nl)])])]),_:1})]),_:1})]),_:1},8,["modelValue"])]),_:1})}var Rl=Oi(Sl,[["render",Il]]);const jl={name:"StudentsHistory",components:{StudentsDocuments:Rl},data(){return{student_id:this.$route.params.id,student:{},process:0,textProcess:"",loading:!1,historyDialog:!1,history:{description:""}}},mounted(){this.student_id=this.$route.params.id,this.studentGet()},methods:{deleteHistory(e){this.$alert.confirm("\xBFEst\xE1 seguro de eliminar este historial?").onOk(()=>{this.loading=!0,this.$axios.delete(`history/${e}`).then(t=>{const i=this.student.histories.findIndex(a=>a.id===e);this.student.histories.splice(i,1)}).catch(t=>{this.$alert.error(t.response.data.message)}).finally(()=>{this.loading=!1})})},historyClick(e){this.history={...e},this.historyDialog=!0},historyForm(){this.loading=!0,this.history.student_id=this.student_id,this.history.id?this.$axios.put(`history/${this.history.id}`,this.history).then(e=>{const t=this.student.histories.findIndex(i=>i.id===this.history.id);this.student.histories.splice(t,1,e.data),this.historyDialog=!1}).catch(e=>{this.$alert.error(e.response.data.message)}).finally(()=>{this.loading=!1}):this.$axios.post("history",this.history).then(e=>{this.student.histories.unshift(e.data),this.historyDialog=!1}).catch(e=>{this.$alert.error(e.response.data.message)}).finally(()=>{this.loading=!1})},addHistory(){this.historyDialog=!0,this.history.id=void 0,this.history.description=""},handleDrop(e){e.preventDefault();const t=e.dataTransfer.files;this.processFiles(t)},processFiles(e){this.fileUpload(e)},uploadFile(){this.$refs.fileInput.click()},fileUpload(){const e=new FormData;e.append("file",this.$refs.fileInput.files[0]),e.append("student_id",this.student_id);const t={onUploadProgress:i=>{const a=Math.round(i.loaded*100/i.total);this.textProcess=a+"% completado",this.process=a/100}};this.$axios.post(`students/${this.student_id}/diagnoses`,e,t).then(i=>{this.student.diagnoses.unshift(i.data)}).catch(i=>{this.$alert.error(i.response.data.message)}).finally(()=>{this.$refs.fileInput.value="",this.textProcess=""})},studentGet(){this.$axios.get(`students/${this.student_id}`).then(e=>{this.student=e.data}).catch(e=>{this.$alert.error(e.response.data.message)})},downloadFile(e){this.loading=!0,this.$axios.get(`diagnoses/${e.id}/download`,{responseType:"blob"}).then(t=>{const i=window.URL.createObjectURL(new Blob([t.data],{type:t.headers["content-type"]})),a=document.createElement("a");a.href=i,a.setAttribute("download",e.name),document.body.appendChild(a),a.click(),a.remove(),window.URL.revokeObjectURL(i)}).catch(t=>{this.$alert.error(t.response.data.message)}).finally(()=>{this.loading=!1})},deleteDiagnosis(e){this.$alert.confirm("\xBFEst\xE1 seguro de eliminar este diagn\xF3stico?").onOk(()=>{this.loading=!0,this.$axios.delete(`diagnoses/${e}`).then(t=>{const i=this.student.diagnoses.findIndex(a=>a.id===e);this.student.diagnoses.splice(i,1)}).catch(t=>{this.$alert.error(t.response.data.message)}).finally(()=>{this.loading=!1})})}}},Fl={class:"row"},Ul={class:"col-12 col-md-3"},ql=p("label",{class:"text-bold"},"Rut",-1),Wl={class:"col-12 col-md-9"},Hl=p("label",{class:"text-bold"},"Nombre Completo",-1),$l={class:"col-6 col-md-3"},Gl=p("label",{class:"text-bold"},"Rut Tutor",-1),Vl={class:"col-6 col-md-9"},Bl=p("label",{class:"text-bold"},"Nombre Tutor",-1),Zl={class:"col-6 col-md-3"},Ql=p("label",{class:"text-bold"},"Fecha de Nacimiento",-1),Jl={class:"col-6 col-md-3"},Kl=p("label",{class:"text-bold"},"A\xF1o ingreso PIE",-1),Xl={class:"col-6 col-md-3"},ed=p("label",{class:"text-bold"},"Curso",-1),td={class:"col-6 col-md-3"},id=p("label",{class:"text-bold"},"A\xF1o",-1),ad={class:"col-12"},nd=p("label",{class:"text-bold"},"Direcci\xF3n",-1),sd={class:"col-6 col-md-6"},rd=p("label",{class:"text-bold"},"Celular",-1),od={class:"col-6 col-md-6"},ld=p("label",{class:"text-bold"},"Sexo",-1),dd={class:"row"},cd={class:"col-12 col-md-8"},pd={class:"row"},ud={class:"col-12"},md={class:"row items-center"},_d=p("div",{class:"text-h6 text-bold"},"Antecedentes",-1),fd=p("thead",null,[p("tr",null,[p("th",null,"Opciones"),p("th",null,"Fecha"),p("th",null,"Descripci\xF3n"),p("th",null,"Usuario")])],-1),gd={class:"col-12"},hd={class:"col-12 col-md-4"},yd=p("div",{class:"text-h6"},"Diagn\xF3sticos",-1),bd=p("div",null,"Ac\xE1 suba sus archivos",-1),vd={class:"q-mt-md"},wd={class:"text-h6 text-bold"};function Cd(e,t,i,a,n,s){const r=rn("StudentsDocuments");return R(),$(_n,{class:"bg-grey-3 q-pa-md"},{default:h(()=>[m(le,{class:"q-mb-md"},{default:h(()=>[m(G,null,{default:h(()=>[p("div",Fl,[p("div",Ul,[ql,p("div",null,M(n.student.rut),1)]),p("div",Wl,[Hl,p("div",null,M(n.student.name),1)]),p("div",$l,[Gl,p("div",null,M(n.student.tutorRut),1)]),p("div",Vl,[Bl,p("div",null,M(n.student.tutorName),1)]),p("div",Zl,[Ql,p("div",null,M(n.student.birthdate),1)]),p("div",Jl,[Kl,p("div",null,M(n.student.year_PIE),1)]),p("div",Xl,[ed,p("div",null,M(n.student.course),1)]),p("div",td,[id,p("div",null,M(n.student.year),1)]),p("div",ad,[nd,p("div",null,M(n.student.address),1)]),p("div",sd,[rd,p("div",null,M(n.student.phone),1)]),p("div",od,[ld,p("div",null,M(n.student.sex==="M"?"Masculino":"Femenino"),1)])])]),_:1})]),_:1}),p("div",dd,[p("div",cd,[p("div",pd,[p("div",ud,[m(le,null,{default:h(()=>[m(G,null,{default:h(()=>[p("div",md,[_d,m(We),m(N,{icon:"add_circle_outline",onClick:s.addHistory,label:"Agregar","no-caps":"",color:"green",dense:"",size:"10px"},null,8,["onClick"])]),m(Ei,{dense:"","wrap-cells":""},{default:h(()=>[fd,p("tbody",null,[(R(!0),qe(It,null,Nt(n.student.histories,o=>{var f;return R(),qe("tr",{key:o.id},[p("td",null,[m(mn,null,{default:h(()=>[m(N,{flat:"",icon:"edit",class:"q-pa-xs",size:"10px",onClick:b=>s.historyClick(o)},null,8,["onClick"]),m(N,{flat:"",icon:"delete",class:"q-pa-xs",size:"10px",onClick:b=>s.deleteHistory(o.id)},null,8,["onClick"])]),_:2},1024)]),p("td",null,M(e.$filters.formatdMY(o.date)),1),p("td",null,M(o.description),1),p("td",null,M((f=o.user)==null?void 0:f.name),1)])}),128))])]),_:1})]),_:1})]),_:1})]),p("div",gd,[m(r,{student_id:parseInt(n.student_id),student:n.student},null,8,["student_id","student"])])])]),p("div",hd,[m(le,null,{default:h(()=>[m(G,null,{default:h(()=>[yd,p("div",{class:"text-center border-dashed cursor-pointer",onClick:t[0]||(t[0]=(...o)=>s.uploadFile&&s.uploadFile(...o)),onDragenter:t[1]||(t[1]=at(()=>{},["prevent"])),onDragover:t[2]||(t[2]=at(()=>{},["prevent"])),onDragleave:t[3]||(t[3]=at(()=>{},["prevent"])),onDrop:t[4]||(t[4]=at((...o)=>s.handleDrop&&s.handleDrop(...o),["prevent"]))},[m(Me,{name:"cloud_upload",size:"70px"}),bd],32),p("input",{type:"file",class:"hidden",ref:"fileInput",onChange:t[5]||(t[5]=(...o)=>s.fileUpload&&s.fileUpload(...o)),accept:".pdf"},null,544),p("div",vd,[m(le,null,{default:h(()=>[m(G,{class:"q-pa-none"},{default:h(()=>[n.textProcess!==""?(R(),$(ke,{key:0},{default:h(()=>[m(q,null,{default:h(()=>[m(Ot,null,{default:h(()=>[Ce(M(n.textProcess),1)]),_:1}),m(un,{value:n.process,color:n.process===100?"green":"primary"},null,8,["value","color"])]),_:1}),m(q,{side:""},{default:h(()=>[m(N,{flat:"",icon:"picture_as_pdf"})]),_:1})]),_:1})):Rt("",!0)]),_:1})]),_:1}),(R(!0),qe(It,null,Nt(n.student.diagnoses,o=>(R(),$(le,{key:o.id,flat:"",bordered:"",class:"q-ma-sm"},{default:h(()=>[m(G,{class:"q-pa-none bg-grey-3"},{default:h(()=>[m(ke,null,{default:h(()=>[m(q,{clickable:""},{default:h(()=>[m(Ot,{class:"text-bold"},{default:h(()=>[Ce(M(e.$filters.formatdMY(o.created_at))+" ",1),m(N,{flat:"",icon:"fa-regular fa-file-pdf",dense:"",class:"q-pa-none",color:"red",size:"10px",onClick:f=>s.downloadFile(o),loading:n.loading},null,8,["onClick","loading"])]),_:2},1024),m(Ot,{class:"text-capitalize text-caption"},{default:h(()=>[Ce(M(o.name),1)]),_:2},1024)]),_:2},1024),m(q,{side:""},{default:h(()=>[m(N,{flat:"",icon:"delete",onClick:f=>s.deleteDiagnosis(o.id),color:"red",loading:n.loading},null,8,["onClick","loading"])]),_:2},1024)]),_:2},1024)]),_:2},1024)]),_:2},1024))),128))])]),_:1})]),_:1})])]),m(jt,{modelValue:n.historyDialog,"onUpdate:modelValue":t[9]||(t[9]=o=>n.historyDialog=o)},{default:h(()=>[m(le,{style:{width:"400px","max-width":"90vw"}},{default:h(()=>[m(G,{class:"row items-center q-pb-none"},{default:h(()=>[p("div",wd,M(n.history.id?"Editar":"Agregar")+" Antecedentes ",1),m(We),m(N,{flat:"",icon:"close",onClick:t[6]||(t[6]=o=>n.historyDialog=!1)})]),_:1}),m(G,null,{default:h(()=>[m(Ti,{class:"q-gutter-md",onSubmit:s.historyForm},{default:h(()=>[m(on,{type:"textarea",modelValue:n.history.description,"onUpdate:modelValue":t[7]||(t[7]=o=>n.history.description=o),label:"Descripci\xF3n",outlined:"",rules:[o=>!!o||"Campo requerido"]},null,8,["modelValue","rules"]),m(Mi,{align:"right"},{default:h(()=>[m(N,{label:"Cancelar",color:"red",onClick:t[8]||(t[8]=o=>n.historyDialog=!1),"no-caps":"",icon:"close",loading:n.loading},null,8,["loading"]),n.history.id===void 0?(R(),$(N,{key:0,label:"Guardar",color:"green",type:"submit","no-caps":"",icon:"save",loading:n.loading},null,8,["loading"])):(R(),$(N,{key:1,label:"Modificar",color:"orange",type:"submit","no-caps":"",icon:"save",loading:n.loading},null,8,["loading"]))]),_:1})]),_:1},8,["onSubmit"])]),_:1})]),_:1})]),_:1},8,["modelValue"])]),_:1})}var Md=Oi(jl,[["render",Cd]]);export{Md as default};
