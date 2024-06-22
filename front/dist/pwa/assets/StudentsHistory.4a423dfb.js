import{p as Ft,d as $t,h as f,x as Ut,b1 as _t,v as pt,U as z,ar as S,c as Mt,C as Ht,F as Bt,be as Qt,r as G,a as k,w as dt,J as Gt,o as Jt,g as Yt,A as Zt,K as Kt,an as Vt,_ as gt,Q as h,R as w,S as p,T as r,V as l,$ as M,a0 as tt,a1 as et,aB as E,aC as q,W as u,Z as it,aF as ut,aG as at,L as N,Y as D,P as Wt,bf as J,aE as Xt}from"./index.ee746644.js";import{Q as H}from"./QSpace.450eae37.js";import{a as b,Q as j,b as V}from"./position-engine.55085593.js";import{Q as nt}from"./QBtnDropdown.2dd75cc2.js";import{u as te,a as ee,b as ie,Q as ft,C as R,c as ae}from"./ClosePopup.90980408.js";import{a as ne,Q as ht}from"./QForm.b4ab3427.js";import{Q as oe}from"./QPage.15f170a3.js";import{Q as se}from"./QTooltip.eab66e4d.js";import{h as ct}from"./moment.40bc58bf.js";import"./format.0c83cb50.js";function bt(e,t){if(t&&e===t)return null;const i=e.nodeName.toLowerCase();if(["div","li","ul","ol","blockquote"].includes(i)===!0)return e;const n=window.getComputedStyle?window.getComputedStyle(e):e.currentStyle,a=n.display;return a==="block"||a==="table"?e:bt(e.parentNode)}function W(e,t,i){return!e||e===document.body?!1:i===!0&&e===t||(t===document?document.body:t).contains(e.parentNode)}function yt(e,t,i){if(i||(i=document.createRange(),i.selectNode(e),i.setStart(e,0)),t.count===0)i.setEnd(e,t.count);else if(t.count>0)if(e.nodeType===Node.TEXT_NODE)e.textContent.length<t.count?t.count-=e.textContent.length:(i.setEnd(e,t.count),t.count=0);else for(let n=0;t.count!==0&&n<e.childNodes.length;n++)i=yt(e.childNodes[n],t,i);return i}const re=/^https?:\/\//;class le{constructor(t,i){this.el=t,this.eVm=i,this._range=null}get selection(){if(this.el){const t=document.getSelection();if(W(t.anchorNode,this.el,!0)&&W(t.focusNode,this.el,!0))return t}return null}get hasSelection(){return this.selection!==null?this.selection.toString().length!==0:!1}get range(){const t=this.selection;return t!==null&&t.rangeCount?t.getRangeAt(0):this._range}get parent(){const t=this.range;if(t!==null){const i=t.startContainer;return i.nodeType===document.ELEMENT_NODE?i:i.parentNode}return null}get blockParent(){const t=this.parent;return t!==null?bt(t,this.el):null}save(t=this.range){t!==null&&(this._range=t)}restore(t=this._range){const i=document.createRange(),n=document.getSelection();t!==null?(i.setStart(t.startContainer,t.startOffset),i.setEnd(t.endContainer,t.endOffset),n.removeAllRanges(),n.addRange(i)):(n.selectAllChildren(this.el),n.collapseToEnd())}savePosition(){let t=-1,i;const n=document.getSelection(),a=this.el.parentNode;if(n.focusNode&&W(n.focusNode,a))for(i=n.focusNode,t=n.focusOffset;i&&i!==a;)i!==this.el&&i.previousSibling?(i=i.previousSibling,t+=i.textContent.length):i=i.parentNode;this.savedPos=t}restorePosition(t=0){if(this.savedPos>0&&this.savedPos<t){const i=window.getSelection(),n=yt(this.el,{count:this.savedPos});n&&(n.collapse(!1),i.removeAllRanges(),i.addRange(n))}}hasParent(t,i){const n=i?this.parent:this.blockParent;return n!==null?n.nodeName.toLowerCase()===t.toLowerCase():!1}hasParents(t,i,n=this.parent){return n===null?!1:t.includes(n.nodeName.toLowerCase())===!0?!0:i===!0?this.hasParents(t,i,n.parentNode):!1}is(t,i){if(this.selection===null)return!1;switch(t){case"formatBlock":return i==="DIV"&&this.parent===this.el||this.hasParent(i,i==="PRE");case"link":return this.hasParent("A",!0);case"fontSize":return document.queryCommandValue(t)===i;case"fontName":const n=document.queryCommandValue(t);return n===`"${i}"`||n===i;case"fullscreen":return this.eVm.inFullscreen.value;case"viewsource":return this.eVm.isViewingSource.value;case void 0:return!1;default:const a=document.queryCommandState(t);return i!==void 0?a===i:a}}getParentAttribute(t){return this.parent!==null?this.parent.getAttribute(t):null}can(t){if(t==="outdent")return this.hasParents(["blockquote","li"],!0);if(t==="indent")return this.hasParents(["li"],!0);if(t==="link")return this.selection!==null||this.is("link")}apply(t,i,n=Ft){if(t==="formatBlock")["BLOCKQUOTE","H1","H2","H3","H4","H5","H6"].includes(i)&&this.is(t,i)&&(t="outdent",i=null),i==="PRE"&&this.is(t,"PRE")&&(i="P");else if(t==="print"){n();const a=window.open();a.document.write(`
        <!doctype html>
        <html>
          <head>
            <title>Print - ${document.title}</title>
          </head>
          <body>
            <div>${this.el.innerHTML}</div>
          </body>
        </html>
      `),a.print(),a.close();return}else if(t==="link"){const a=this.getParentAttribute("href");if(a===null){const m=this.selectWord(this.selection),d=m?m.toString():"";if(!d.length&&(!this.range||!this.range.cloneContents().querySelector("img")))return;this.eVm.editLinkUrl.value=re.test(d)?d:"https://",document.execCommand("createLink",!1,this.eVm.editLinkUrl.value),this.save(m.getRangeAt(0))}else this.eVm.editLinkUrl.value=a,this.range.selectNodeContents(this.parent),this.save();return}else if(t==="fullscreen"){this.eVm.toggleFullscreen(),n();return}else if(t==="viewsource"){this.eVm.isViewingSource.value=this.eVm.isViewingSource.value===!1,this.eVm.setContent(this.eVm.props.modelValue),n();return}document.execCommand(t,!1,i),n()}selectWord(t){if(t===null||t.isCollapsed!==!0||t.modify===void 0)return t;const i=document.createRange();i.setStart(t.anchorNode,t.anchorOffset),i.setEnd(t.focusNode,t.focusOffset);const n=i.collapsed?["backward","forward"]:["forward","backward"];i.detach();const a=t.focusNode,m=t.focusOffset;return t.collapse(t.anchorNode,t.anchorOffset),t.modify("move",n[0],"character"),t.modify("move",n[1],"word"),t.extend(a,m),t.modify("extend",n[1],"character"),t.modify("extend",n[0],"word"),t}}function vt(e,t,i){t.handler?t.handler(e,i,i.caret):i.runCmd(t.cmd,t.param)}function ot(e){return f("div",{class:"q-editor__toolbar-group"},e)}function Ct(e,t,i,n=!1){const a=n||(t.type==="toggle"?t.toggled?t.toggled(e):t.cmd&&e.caret.is(t.cmd,t.param):!1),m=[];if(t.tip&&e.$q.platform.is.desktop){const d=t.key?f("div",[f("small",`(CTRL + ${String.fromCharCode(t.key)})`)]):null;m.push(f(se,{delay:1e3},()=>[f("div",{innerHTML:t.tip}),d]))}return f(z,{...e.buttonProps.value,icon:t.icon!==null?t.icon:void 0,color:a?t.toggleColor||e.props.toolbarToggleColor:t.color||e.props.toolbarColor,textColor:a&&!e.props.toolbarPush?null:t.textColor||e.props.toolbarTextColor,label:t.label,disable:t.disable?typeof t.disable=="function"?t.disable(e):!0:!1,size:"sm",onClick(d){i&&i(),vt(d,t,e)}},()=>m)}function pe(e,t){const i=t.list==="only-icons";let n=t.label,a=t.icon!==null?t.icon:void 0,m,d;function c(){L.component.proxy.hide()}if(i)d=t.options.map(_=>{const A=_.type===void 0?e.caret.is(_.cmd,_.param):!1;return A&&(n=_.tip,a=_.icon!==null?_.icon:void 0),Ct(e,_,c,A)}),m=e.toolbarBackgroundClass.value,d=[ot(d)];else{const _=e.props.toolbarToggleColor!==void 0?`text-${e.props.toolbarToggleColor}`:null,A=e.props.toolbarTextColor!==void 0?`text-${e.props.toolbarTextColor}`:null,T=t.list==="no-icons";d=t.options.map(y=>{const B=y.disable?y.disable(e):!1,O=y.type===void 0?e.caret.is(y.cmd,y.param):!1;O&&(n=y.tip,a=y.icon!==null?y.icon:void 0);const $=y.htmlTip;return f(j,{active:O,activeClass:_,clickable:!0,disable:B,dense:!0,onClick(U){c(),e.contentRef.value!==null&&e.contentRef.value.focus(),e.caret.restore(),vt(U,y,e)}},()=>[T===!0?null:f(b,{class:O?_:A,side:!0},()=>f(S,{name:y.icon!==null?y.icon:void 0})),f(b,$?()=>f("div",{class:"text-no-wrap",innerHTML:y.htmlTip}):y.tip?()=>f("div",{class:"text-no-wrap"},y.tip):void 0)])}),m=[e.toolbarBackgroundClass.value,A]}const v=t.highlight&&n!==t.label,L=f(nt,{...e.buttonProps.value,noCaps:!0,noWrap:!0,color:v?e.props.toolbarToggleColor:e.props.toolbarColor,textColor:v&&!e.props.toolbarPush?null:e.props.toolbarTextColor,label:t.fixedLabel?t.label:n,icon:t.fixedIcon?t.icon!==null?t.icon:void 0:a,contentClass:m,onShow:_=>e.emit("dropdownShow",_),onHide:_=>e.emit("dropdownHide",_),onBeforeShow:_=>e.emit("dropdownBeforeShow",_),onBeforeHide:_=>e.emit("dropdownBeforeHide",_)},()=>d);return L}function de(e){if(e.caret)return e.buttons.value.filter(t=>!e.isViewingSource.value||t.find(i=>i.cmd==="viewsource")).map(t=>ot(t.map(i=>e.isViewingSource.value&&i.cmd!=="viewsource"?!1:i.type==="slot"?$t(e.slots[i.slot]):i.type==="dropdown"?pe(e,i):Ct(e,i))))}function ce(e,t,i,n={}){const a=Object.keys(n);if(a.length===0)return{};const m={default_font:{cmd:"fontName",param:e,icon:i,tip:t}};return a.forEach(d=>{const c=n[d];m[d]={cmd:"fontName",param:c,icon:i,tip:c,htmlTip:`<font face="${c}">${c}</font>`}}),m}function me(e){if(e.caret){const t=e.props.toolbarColor||e.props.toolbarTextColor;let i=e.editLinkUrl.value;const n=()=>{e.caret.restore(),i!==e.editLinkUrl.value&&document.execCommand("createLink",!1,i===""?" ":i),e.editLinkUrl.value=null};return[f("div",{class:`q-mx-xs text-${t}`},`${e.$q.lang.editor.url}: `),f("input",{key:"qedt_btm_input",class:"col q-editor__link-input",value:i,onInput:a=>{Ut(a),i=a.target.value},onKeydown:a=>{if(_t(a)!==!0)switch(a.keyCode){case 13:return pt(a),n();case 27:pt(a),e.caret.restore(),(!e.editLinkUrl.value||e.editLinkUrl.value==="https://")&&document.execCommand("unlink"),e.editLinkUrl.value=null;break}}}),ot([f(z,{key:"qedt_btm_rem",tabindex:-1,...e.buttonProps.value,label:e.$q.lang.label.remove,noCaps:!0,onClick:()=>{e.caret.restore(),document.execCommand("unlink"),e.editLinkUrl.value=null}}),f(z,{key:"qedt_btm_upd",...e.buttonProps.value,label:e.$q.lang.label.update,noCaps:!0,onClick:n})])]}}const _e=Object.prototype.toString,X=Object.prototype.hasOwnProperty,ge=new Set(["Boolean","Number","String","Function","Array","Date","RegExp"].map(e=>"[object "+e+"]"));function mt(e){if(e!==Object(e)||ge.has(_e.call(e))===!0||e.constructor&&X.call(e,"constructor")===!1&&X.call(e.constructor.prototype,"isPrototypeOf")===!1)return!1;let t;for(t in e);return t===void 0||X.call(e,t)}function zt(){let e,t,i,n,a,m,d=arguments[0]||{},c=1,v=!1;const L=arguments.length;for(typeof d=="boolean"&&(v=d,d=arguments[1]||{},c=2),Object(d)!==d&&typeof d!="function"&&(d={}),L===c&&(d=this,c--);c<L;c++)if((e=arguments[c])!==null)for(t in e)i=d[t],n=e[t],d!==n&&(v===!0&&n&&((a=Array.isArray(n))||mt(n)===!0)?(a===!0?m=Array.isArray(i)===!0?i:[]:m=mt(i)===!0?i:{},d[t]=zt(v,m,n)):n!==void 0&&(d[t]=n));return d}var ue=Mt({name:"QEditor",props:{...Ht,...te,modelValue:{type:String,required:!0},readonly:Boolean,disable:Boolean,minHeight:{type:String,default:"10rem"},maxHeight:String,height:String,definitions:Object,fonts:Object,placeholder:String,toolbar:{type:Array,validator:e=>e.length===0||e.every(t=>t.length),default:()=>[["left","center","right","justify"],["bold","italic","underline","strike"],["undo","redo"]]},toolbarColor:String,toolbarBg:String,toolbarTextColor:String,toolbarToggleColor:{type:String,default:"primary"},toolbarOutline:Boolean,toolbarPush:Boolean,toolbarRounded:Boolean,paragraphTag:{type:String,validator:e=>["div","p"].includes(e),default:"div"},contentStyle:Object,contentClass:[Object,Array,String],square:Boolean,flat:Boolean,dense:Boolean},emits:[...ee,"update:modelValue","keydown","click","focus","blur","dropdownShow","dropdownHide","dropdownBeforeShow","dropdownBeforeHide","linkShow","linkHide"],setup(e,{slots:t,emit:i}){const{proxy:n}=Yt(),{$q:a}=n,m=Bt(e,a),{inFullscreen:d,toggleFullscreen:c}=ie(),v=Qt(),L=G(null),_=G(null),A=G(null),T=G(!1),y=k(()=>!e.readonly&&!e.disable);let B,O,$=e.modelValue;document.execCommand("defaultParagraphSeparator",!1,e.paragraphTag),B=window.getComputedStyle(document.body).fontFamily;const U=k(()=>e.toolbarBg?` bg-${e.toolbarBg}`:""),wt=k(()=>{const o=e.toolbarOutline!==!0&&e.toolbarPush!==!0;return{type:"a",flat:o,noWrap:!0,outline:e.toolbarOutline,push:e.toolbarPush,rounded:e.toolbarRounded,dense:!0,color:e.toolbarColor,disable:!y.value,size:"sm"}}),Q=k(()=>{const o=a.lang.editor,s=a.iconSet.editor;return{bold:{cmd:"bold",icon:s.bold,tip:o.bold,key:66},italic:{cmd:"italic",icon:s.italic,tip:o.italic,key:73},strike:{cmd:"strikeThrough",icon:s.strikethrough,tip:o.strikethrough,key:83},underline:{cmd:"underline",icon:s.underline,tip:o.underline,key:85},unordered:{cmd:"insertUnorderedList",icon:s.unorderedList,tip:o.unorderedList},ordered:{cmd:"insertOrderedList",icon:s.orderedList,tip:o.orderedList},subscript:{cmd:"subscript",icon:s.subscript,tip:o.subscript,htmlTip:"x<subscript>2</subscript>"},superscript:{cmd:"superscript",icon:s.superscript,tip:o.superscript,htmlTip:"x<superscript>2</superscript>"},link:{cmd:"link",disable:g=>g.caret&&!g.caret.can("link"),icon:s.hyperlink,tip:o.hyperlink,key:76},fullscreen:{cmd:"fullscreen",icon:s.toggleFullscreen,tip:o.toggleFullscreen,key:70},viewsource:{cmd:"viewsource",icon:s.viewSource,tip:o.viewSource},quote:{cmd:"formatBlock",param:"BLOCKQUOTE",icon:s.quote,tip:o.quote,key:81},left:{cmd:"justifyLeft",icon:s.left,tip:o.left},center:{cmd:"justifyCenter",icon:s.center,tip:o.center},right:{cmd:"justifyRight",icon:s.right,tip:o.right},justify:{cmd:"justifyFull",icon:s.justify,tip:o.justify},print:{type:"no-state",cmd:"print",icon:s.print,tip:o.print,key:80},outdent:{type:"no-state",disable:g=>g.caret&&!g.caret.can("outdent"),cmd:"outdent",icon:s.outdent,tip:o.outdent},indent:{type:"no-state",disable:g=>g.caret&&!g.caret.can("indent"),cmd:"indent",icon:s.indent,tip:o.indent},removeFormat:{type:"no-state",cmd:"removeFormat",icon:s.removeFormat,tip:o.removeFormat},hr:{type:"no-state",cmd:"insertHorizontalRule",icon:s.hr,tip:o.hr},undo:{type:"no-state",cmd:"undo",icon:s.undo,tip:o.undo,key:90},redo:{type:"no-state",cmd:"redo",icon:s.redo,tip:o.redo,key:89},h1:{cmd:"formatBlock",param:"H1",icon:s.heading1||s.heading,tip:o.heading1,htmlTip:`<h1 class="q-ma-none">${o.heading1}</h1>`},h2:{cmd:"formatBlock",param:"H2",icon:s.heading2||s.heading,tip:o.heading2,htmlTip:`<h2 class="q-ma-none">${o.heading2}</h2>`},h3:{cmd:"formatBlock",param:"H3",icon:s.heading3||s.heading,tip:o.heading3,htmlTip:`<h3 class="q-ma-none">${o.heading3}</h3>`},h4:{cmd:"formatBlock",param:"H4",icon:s.heading4||s.heading,tip:o.heading4,htmlTip:`<h4 class="q-ma-none">${o.heading4}</h4>`},h5:{cmd:"formatBlock",param:"H5",icon:s.heading5||s.heading,tip:o.heading5,htmlTip:`<h5 class="q-ma-none">${o.heading5}</h5>`},h6:{cmd:"formatBlock",param:"H6",icon:s.heading6||s.heading,tip:o.heading6,htmlTip:`<h6 class="q-ma-none">${o.heading6}</h6>`},p:{cmd:"formatBlock",param:e.paragraphTag,icon:s.heading,tip:o.paragraph},code:{cmd:"formatBlock",param:"PRE",icon:s.code,htmlTip:`<code>${o.code}</code>`},"size-1":{cmd:"fontSize",param:"1",icon:s.size1||s.size,tip:o.size1,htmlTip:`<font size="1">${o.size1}</font>`},"size-2":{cmd:"fontSize",param:"2",icon:s.size2||s.size,tip:o.size2,htmlTip:`<font size="2">${o.size2}</font>`},"size-3":{cmd:"fontSize",param:"3",icon:s.size3||s.size,tip:o.size3,htmlTip:`<font size="3">${o.size3}</font>`},"size-4":{cmd:"fontSize",param:"4",icon:s.size4||s.size,tip:o.size4,htmlTip:`<font size="4">${o.size4}</font>`},"size-5":{cmd:"fontSize",param:"5",icon:s.size5||s.size,tip:o.size5,htmlTip:`<font size="5">${o.size5}</font>`},"size-6":{cmd:"fontSize",param:"6",icon:s.size6||s.size,tip:o.size6,htmlTip:`<font size="6">${o.size6}</font>`},"size-7":{cmd:"fontSize",param:"7",icon:s.size7||s.size,tip:o.size7,htmlTip:`<font size="7">${o.size7}</font>`}}}),st=k(()=>{const o=e.definitions||{},s=e.definitions||e.fonts?zt(!0,{},Q.value,o,ce(B,a.lang.editor.defaultFont,a.iconSet.editor.font,e.fonts)):Q.value;return e.toolbar.map(g=>g.map(C=>{if(C.options)return{type:"dropdown",icon:C.icon,label:C.label,size:"sm",dense:!0,fixedLabel:C.fixedLabel,fixedIcon:C.fixedIcon,highlight:C.highlight,list:C.list,options:C.options.map(Rt=>s[Rt])};const I=s[C];return I?I.type==="no-state"||o[C]&&(I.cmd===void 0||Q.value[I.cmd]&&Q.value[I.cmd].type==="no-state")?I:Object.assign({type:"toggle"},I):{type:"slot",slot:C}}))}),x={$q:a,props:e,slots:t,emit:i,inFullscreen:d,toggleFullscreen:c,runCmd:Z,isViewingSource:T,editLinkUrl:A,toolbarBackgroundClass:U,buttonProps:wt,contentRef:_,buttons:st,setContent:Y};dt(()=>e.modelValue,o=>{$!==o&&($=o,Y(o,!0))}),dt(A,o=>{i(`link${o?"Show":"Hide"}`)});const xt=k(()=>e.toolbar&&e.toolbar.length!==0),Lt=k(()=>{const o={},s=g=>{g.key&&(o[g.key]={cmd:g.cmd,param:g.param})};return st.value.forEach(g=>{g.forEach(C=>{C.options?C.options.forEach(s):s(C)})}),o}),Et=k(()=>d.value?e.contentStyle:[{minHeight:e.minHeight,height:e.height,maxHeight:e.maxHeight},e.contentStyle]),kt=k(()=>`q-editor q-editor--${T.value===!0?"source":"default"}`+(e.disable===!0?" disabled":"")+(d.value===!0?" fullscreen column":"")+(e.square===!0?" q-editor--square no-border-radius":"")+(e.flat===!0?" q-editor--flat":"")+(e.dense===!0?" q-editor--dense":"")+(m.value===!0?" q-editor--dark q-dark":"")),At=k(()=>[e.contentClass,"q-editor__content",{col:d.value,"overflow-auto":d.value||e.maxHeight}]),Dt=k(()=>e.disable===!0?{"aria-disabled":"true"}:{});function jt(){if(_.value!==null){const o=`inner${T.value===!0?"Text":"HTML"}`,s=_.value[o];s!==e.modelValue&&($=s,i("update:modelValue",s))}}function It(o){if(i("keydown",o),o.ctrlKey!==!0||_t(o)===!0){P();return}const s=o.keyCode,g=Lt.value[s];if(g!==void 0){const{cmd:C,param:I}=g;Zt(o),Z(C,I,!1)}}function qt(o){P(),i("click",o)}function St(o){if(_.value!==null){const{scrollTop:s,scrollHeight:g}=_.value;O=g-s}x.caret.save(),i("blur",o)}function Ot(o){Kt(()=>{_.value!==null&&O!==void 0&&(_.value.scrollTop=_.value.scrollHeight-O)}),i("focus",o)}function Pt(o){const s=L.value;if(s!==null&&s.contains(o.target)===!0&&(o.relatedTarget===null||s.contains(o.relatedTarget)!==!0)){const g=`inner${T.value===!0?"Text":"HTML"}`;x.caret.restorePosition(_.value[g].length),P()}}function Tt(o){const s=L.value;s!==null&&s.contains(o.target)===!0&&(o.relatedTarget===null||s.contains(o.relatedTarget)!==!0)&&(x.caret.savePosition(),P())}function rt(){O=void 0}function lt(o){x.caret.save()}function Y(o,s){if(_.value!==null){s===!0&&x.caret.savePosition();const g=`inner${T.value===!0?"Text":"HTML"}`;_.value[g]=o,s===!0&&(x.caret.restorePosition(_.value[g].length),P())}}function Z(o,s,g=!0){K(),x.caret.restore(),x.caret.apply(o,s,()=>{K(),x.caret.save(),g&&P()})}function P(){setTimeout(()=>{A.value=null,n.$forceUpdate()},1)}function K(){Vt(()=>{_.value!==null&&_.value.focus({preventScroll:!0})})}function Nt(){return _.value}return Gt(()=>{x.caret=n.caret=new le(_.value,x),Y(e.modelValue),P(),document.addEventListener("selectionchange",lt)}),Jt(()=>{document.removeEventListener("selectionchange",lt)}),Object.assign(n,{runCmd:Z,refreshToolbar:P,focus:K,getContentEl:Nt}),()=>{let o;if(xt.value){const s=[f("div",{key:"qedt_top",class:"q-editor__toolbar row no-wrap scroll-x"+U.value},de(x))];A.value!==null&&s.push(f("div",{key:"qedt_btm",class:"q-editor__toolbar row no-wrap items-center scroll-x"+U.value},me(x))),o=f("div",{key:"toolbar_ctainer",class:"q-editor__toolbars-container"},s)}return f("div",{ref:L,class:kt.value,style:{height:d.value===!0?"100%":null},...Dt.value,onFocusin:Pt,onFocusout:Tt},[o,f("div",{ref:_,style:Et.value,class:At.value,contenteditable:y.value,placeholder:e.placeholder,...v.listeners.value,onInput:jt,onKeydown:It,onClick:qt,onBlur:St,onFocus:Ot,onMousedown:rt,onTouchstartPassive:rt})])}}});class F{static fichaSeguimiento(t,i){return`<p style='margin-top:0cm;margin-right:0cm;margin-bottom:8.0pt;margin-left:0cm;font-size:11.0pt;font-family:"Calibri",sans-serif;text-align:center;line-height:150%;'><span style='font-size:19px;line-height:150%;font-family:"Calibri Light",sans-serif;'>FICHA DE SEGUIMIENTO INDIVIDUALIZADA</span></p>
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
<p style='margin-top:0cm;margin-right:0cm;margin-bottom:8.0pt;margin-left:0cm;font-size:11.0pt;font-family:"Calibri",sans-serif;line-height:150%;'><span style='font-size:19px;line-height:150%;font-family:"Calibri Light",sans-serif;color:red;'>La comunicaci&oacute;n constante con los padres o tutores del estudiante es fundamental para el &eacute;xito del plan de acci&oacute;n</span></p>`}static planAcompanamiento(t,i,n,a,m,d,c){return`<style>
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
                <p>&nbsp; ${n}</p>
            </td>
        </tr>
        <tr>
            <td width="38.435374149659864%" valign="top">
                <p><strong>Curso</strong></p>
            </td>
            <td width="61.564625850340136%" valign="top">
                <p>&nbsp; ${a}</p>
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
                <p>&nbsp; ${d}</p>
            </td>
        </tr>
        <tr>
            <td width="38.435374149659864%" valign="top">
                <p><strong>Contacto apoderado/a</strong></p>
            </td>
            <td width="61.564625850340136%" valign="top">
                <p>&nbsp; ${c}</p>
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
`}static fichaPai(t,i,n,a){return`<p><strong>Ficha del Plan de Apoyo Individualizado (PAI) para Estudiantes con TEA </strong></p>
<p><strong>Informaci&oacute;n del Estudiante: </strong></p>
<ul>
<li>Nombre: ${t}</li>
<li>Curso: ${i}</li>
<li>Fecha de Nacimiento: ${n}</li>
<li>Diagn&oacute;stico de TEA:</li>
<li>Fecha de Diagn&oacute;stico: ${a}</li>
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
<p>Esta ficha del PAI proporciona un marco estructurado para planificar, implementar y evaluar el apoyo individualizado para estudiantes con TEA que presentan desregulaci&oacute;n emocional y conductual en el entorno escolar.</p>`}static contratoContigencia(t,i,n,a){return`<p style='margin-top:0cm;margin-right:0cm;margin-bottom:0cm;margin-left:0cm;font-size:11.0pt;font-family:"Calibri",sans-serif;text-align:center;'><strong><span style='font-family:"Calibri Light",sans-serif;'>CONTRATO DE CONTINGENCIAS</span></strong></p>
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
                <p style='margin-top:0cm;margin-right:0cm;margin-bottom:8.0pt;margin-left:0cm;font-size:11.0pt;font-family:"Calibri",sans-serif;text-align:justify;'><span style='font-family:"Calibri Light",sans-serif;'>&nbsp;${n}</span></p>
            </td>
        </tr>
        <tr>
            <td style="width: 212.4pt;border-right: 1pt solid black;border-bottom: 1pt solid black;border-left: 1pt solid black;border-image: initial;border-top: none;padding: 0cm 5.4pt;vertical-align: top;">
                <p style='margin-top:0cm;margin-right:0cm;margin-bottom:8.0pt;margin-left:0cm;font-size:11.0pt;font-family:"Calibri",sans-serif;text-align:justify;'><strong><span style='font-family:"Calibri Light",sans-serif;'>Fecha&nbsp;</span></strong></p>
            </td>
            <td style="width: 229pt;border-top: none;border-left: none;border-bottom: 1pt solid black;border-right: 1pt solid black;padding: 0cm 5.4pt;vertical-align: top;">
                <p style='margin-top:0cm;margin-right:0cm;margin-bottom:8.0pt;margin-left:0cm;font-size:11.0pt;font-family:"Calibri",sans-serif;text-align:justify;'><span style='font-family:"Calibri Light",sans-serif;'>&nbsp;${a}</span></p>
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
</table>`}static certificadoEmpleador(t,i,n,a){return`<p style='margin-top:0cm;margin-right:0cm;margin-bottom:0cm;margin-left:0cm;font-size:11.0pt;font-family:"Calibri",sans-serif;text-align:center;'><strong><span style='font-family:"Calibri Light",sans-serif;'>CERTIFICADO</span></strong></p>
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
                <p style='margin-top:0cm;margin-right:0cm;margin-bottom:0cm;margin-left:0cm;font-size:11.0pt;font-family:"Calibri",sans-serif;text-align:justify;line-height:  normal;'><span style='font-family:"Calibri Light",sans-serif;'>&nbsp;${n}</span></p>
            </td>
        </tr>
        <tr>
            <td style="width: 148.6pt;border-right: 1pt solid rgb(142, 170, 219);border-bottom: 1pt solid rgb(142, 170, 219);border-left: 1pt solid rgb(142, 170, 219);border-image: initial;border-top: none;padding: 0cm 5.4pt;vertical-align: top;">
                <p style='margin-top:0cm;margin-right:0cm;margin-bottom:0cm;margin-left:0cm;font-size:11.0pt;font-family:"Calibri",sans-serif;text-align:justify;line-height:  normal;'><span style='font-family:"Calibri Light",sans-serif;'>RUT APODERADO/A</span></p>
            </td>
            <td style="width: 292.8pt;border-top: none;border-left: none;border-bottom: 1pt solid rgb(142, 170, 219);border-right: 1pt solid rgb(142, 170, 219);padding: 0cm 5.4pt;vertical-align: top;">
                <p style='margin-top:0cm;margin-right:0cm;margin-bottom:0cm;margin-left:0cm;font-size:11.0pt;font-family:"Calibri",sans-serif;text-align:justify;line-height:  normal;'><span style='font-family:"Calibri Light",sans-serif;'>&nbsp;${a}</span></p>
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
</table>`}static autorizacionAbordajeDec(t,i,n,a){return`<p style='margin-top:0cm;margin-right:0cm;margin-bottom:8.0pt;margin-left:0cm;font-size:11.0pt;font-family:"Calibri",sans-serif;text-align:center;'><strong><span style='font-size:19px;line-height:107%;font-family:"Calibri Light",sans-serif;'>AUTORIZACI&Oacute;N</span></strong></p>
<p style='margin-top:0cm;margin-right:0cm;margin-bottom:8.0pt;margin-left:0cm;font-size:11.0pt;font-family:"Calibri",sans-serif;text-align:center;'><strong><span style='font-size:19px;line-height:107%;font-family:"Calibri Light",sans-serif;'>Aplicaci&oacute;n del protocolo integral para la gesti&oacute;n de la desregulaci&oacute;n emocional y/o conductual</span></strong></p>
<p style='margin-top:0cm;margin-right:0cm;margin-bottom:8.0pt;margin-left:0cm;font-size:11.0pt;font-family:"Calibri",sans-serif;text-align:center;'><strong><span style='font-size:19px;line-height:107%;font-family:"Calibri Light",sans-serif;'>&nbsp;</span></strong></p>
<p style='margin-top:0cm;margin-right:0cm;margin-bottom:8.0pt;margin-left:0cm;font-size:11.0pt;font-family:"Calibri",sans-serif;text-align:justify;'><span style='font-size:19px;line-height:107%;font-family:"Calibri Light",sans-serif;'>Yo ${t}, RUT:&nbsp; ${i}</span></p>
<p style='margin-top:0cm;margin-right:0cm;margin-bottom:8.0pt;margin-left:0cm;font-size:11.0pt;font-family:"Calibri",sans-serif;text-align:justify;'><span style='font-size:19px;line-height:107%;font-family:"Calibri Light",sans-serif;'>apoderado/a de ${n} estudiante del curso ${a}. Estoy en conocimiento del protocolo integral para la gesti&oacute;n de la desregulaci&oacute;n emocional y/o conductual de estudiantes, por lo cual, autorizo al personal especializado o SOS del establecimiento para que brinde la contenci&oacute;n emocional y f&iacute;sica presente en el protocolo, en caso que mi pupilo presente una desregulaci&oacute;n emocional y/o conductual en el establecimiento.</span></p>
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
</table>`}}const fe={name:"StudentsDocuments",props:{student_id:{type:Number,required:!0},student:{type:Object,required:!0}},data(){return{loading:!1,qeditor:"",fonts:{arial:"Arial",arial_black:"Arial Black",comic_sans:"Comic Sans MS",courier_new:"Courier New",impact:"Impact",lucida_grande:"Lucida Grande",times_new_roman:"Times New Roman",verdana:"Verdana"},toolbar:[[{label:this.$q.lang.editor.align,icon:this.$q.iconSet.editor.align,fixedLabel:!0,list:"only-icons",options:["left","center","right","justify"]},{label:this.$q.lang.editor.align,icon:this.$q.iconSet.editor.align,fixedLabel:!0,options:["left","center","right","justify"]}],["bold","italic","strike","underline","subscript","superscript"],["token","hr","link","custom_btn"],["print","fullscreen"],[{label:this.$q.lang.editor.formatting,icon:this.$q.iconSet.editor.formatting,list:"no-icons",options:["p","h1","h2","h3","h4","h5","h6","code"]},{label:this.$q.lang.editor.fontSize,icon:this.$q.iconSet.editor.fontSize,fixedLabel:!0,fixedIcon:!0,list:"no-icons",options:["size-1","size-2","size-3","size-4","size-5","size-6","size-7"]},{label:this.$q.lang.editor.defaultFont,icon:this.$q.iconSet.editor.font,fixedIcon:!0,list:"no-icons",options:["default_font","arial","arial_black","comic_sans","courier_new","impact","lucida_grande","times_new_roman","verdana"]},"removeFormat"],["quote","unordered","ordered","outdent","indent"],["undo","redo"],["viewsource"]],documentsSelect:["AUTORIZACI\xD3N PARA EL ABORDAJE DEC.","CERTIFICADO PARA EL EMPLEADOR","CONTRATO DE CONTIGENCIAS","FICHA DEL PLAN DE APOYO INDIVIDUALIZADO (PAI) PARA ESTUDIANTES CON TEA","PLAN DE ACOMPA\xD1AMIENTO EMOCIONAL Y CONDUCTUAL","FICHA DE SEGUIMIENTO INDIVIDUALIZADA PARA DESREGULACI\xD3N EMOCIONAL"],documentDialog:!1,documentDialogPdf:!1,iframe:!1,document:{},documents:[]}},mounted(){this.documentsGet()},methods:{restoreHtml(){const e=ct().format("DD/MM/YYYY HH:mm:ss");if(this.document.name==="AUTORIZACI\xD3N PARA EL ABORDAJE DEC."&&(this.document.html=F.autorizacionAbordajeDec(this.student.tutorName,this.student.tutorRut,this.student.name,this.student.course)),this.document.name==="CERTIFICADO PARA EL EMPLEADOR"&&(this.document.html=F.certificadoEmpleador(this.student.name,this.student.tutorName,this.student.course,this.student.tutorRut)),this.document.name==="CONTRATO DE CONTIGENCIAS"&&(this.document.html=F.contratoContigencia(this.student.name,this.student.tutorName,"",e)),this.document.name==="FICHA DEL PLAN DE APOYO INDIVIDUALIZADO (PAI) PARA ESTUDIANTES CON TEA"&&(this.document.html=F.fichaPai(this.student.name,this.student.course,this.student.birthdate,e)),this.document.name==="PLAN DE ACOMPA\xD1AMIENTO EMOCIONAL Y CONDUCTUAL"){let t=0;this.student.birthdate&&(t=ct().diff(this.student.birthdate,"years")),this.document.html=F.planAcompanamiento(this.student.name,this.student.rut,t,this.student.course,this.student.tutorName,this.student.phone)}this.document.name==="FICHA DE SEGUIMIENTO INDIVIDUALIZADA PARA DESREGULACI\xD3N EMOCIONAL"&&(this.document.html=F.fichaSeguimiento(this.student.name,e))},documentShowMobile(e){window.open(this.$url+"documents/"+e.codigo+"/show","_blank")},documentShow(e){this.loading=!0,this.$axios.get(`documents/${e.id}/download64`).then(t=>{this.document=t.data,this.documentDialogPdf=!0,this.iframe=`data:application/pdf;base64,${this.document.pdf}`}).catch(t=>{this.$alert.error(t.response.data.message)}).finally(()=>{this.loading=!1})},documentClickEdit(e){this.document=e,this.documentDialog=!0},documentDelete(e){this.$alert.confirm("\xBFEst\xE1 seguro de eliminar este document?").onOk(()=>{this.loading=!0,this.$axios.delete(`documents/${e.id}`).then(t=>{this.$alert.success("Documento eliminado"),this.documentsGet()}).catch(t=>{this.$alert.error(t.response.data.message)}).finally(()=>{this.loading=!1})})},documentOpen(e){this.loading=!0,this.$axios.get(`documents/${e.id}/download`,{responseType:"blob"}).then(t=>{const i=window.URL.createObjectURL(new Blob([t.data],{type:"application/pdf"})),n=window.document.createElement("a");n.href=i,n.setAttribute("download",`${e.description}.pdf`),window.document.body.appendChild(n),n.click(),n.remove(),window.URL.revokeObjectURL(i)}).catch(t=>{this.$alert.error(t.response.data.message)}).finally(()=>{this.loading=!1})},documentsGet(){this.loading=!0,this.$axios.get("documents",{params:{student_id:this.student_id}}).then(e=>{this.documents=e.data}).catch(e=>{this.$alert.error(e.response.data.message)}).finally(()=>{this.loading=!1})},documentCreate(){this.loading=!0,this.$axios.post("documents",{student_id:this.student_id,document:this.document}).then(e=>{this.$alert.success("Documento agregado"),this.documentDialog=!1,this.documentsGet()}).catch(e=>{this.$alert.error(e.response.data.message)}).finally(()=>{this.loading=!1})},documentUpdate(){this.loading=!0,this.$axios.put(`documents/${this.document.id}`,this.document).then(e=>{this.$alert.success("Documento actualizado"),this.documentDialog=!1,this.documentsGet()}).catch(e=>{this.$alert.error(e.response.data.message)}).finally(()=>{this.loading=!1})},documentForm(){this.document.id?this.documentUpdate():this.documentCreate()},addDocument(){this.documentDialog=!0,this.document={html:""}}}},he={class:"row items-center"},be=l("div",{class:"text-h6 text-bold"},"Documentos",-1),ye=l("thead",null,[l("tr",null,[l("th",null,"Opciones"),l("th",null,"Fecha"),l("th",null,"Documento"),l("th",null,"Usuario")])],-1),ve={class:"text-h6 text-bold"},Ce={class:"row"},ze={class:"col-12"},we=l("div",{class:"text-h6 text-bold"},"Documento",-1),xe={class:"row"},Le={class:"col-12"},Ee=["src"];function ke(e,t,i,n,a,m){return h(),w(q,null,{default:p(()=>[r(E,null,{default:p(()=>[l("div",he,[be,r(H),r(z,{icon:"add_circle_outline",onClick:m.addDocument,label:"Agregar","no-caps":"",color:"indigo",dense:"",size:"10px",loading:a.loading},null,8,["onClick","loading"])]),r(ft,{dense:"","wrap-cells":""},{default:p(()=>[ye,l("tbody",null,[(h(!0),M(et,null,tt(a.documents,d=>{var c;return h(),M("tr",{key:d.id},[l("td",null,[r(nt,{size:"10px",color:"primary",loading:a.loading,"auto-close":"",class:"q-mr-sm",label:"Opciones","no-caps":""},{default:p(()=>[N((h(),w(j,{clickable:"",onClick:v=>m.documentOpen(d)},{default:p(()=>[r(b,{avatar:""},{default:p(()=>[r(S,{name:"fa-solid fa-file-arrow-down"})]),_:1}),r(b,null,{default:p(()=>[D("Descargar")]),_:1})]),_:2},1032,["onClick"])),[[R]]),N((h(),w(j,{clickable:"",onClick:v=>m.documentShow(d)},{default:p(()=>[r(b,{avatar:""},{default:p(()=>[r(S,{name:"fa-solid fa-eye"})]),_:1}),r(b,null,{default:p(()=>[D("Ver")]),_:1})]),_:2},1032,["onClick"])),[[R]]),N((h(),w(j,{clickable:"",onClick:v=>m.documentDelete(d)},{default:p(()=>[r(b,{avatar:""},{default:p(()=>[r(S,{name:"delete"})]),_:1}),r(b,null,{default:p(()=>[D("Eliminar")]),_:1})]),_:2},1032,["onClick"])),[[R]]),N((h(),w(j,{clickable:"",onClick:v=>m.documentClickEdit(d)},{default:p(()=>[r(b,{avatar:""},{default:p(()=>[r(S,{name:"edit"})]),_:1}),r(b,null,{default:p(()=>[D("Editar")]),_:1})]),_:2},1032,["onClick"])),[[R]])]),_:2},1032,["loading"])]),l("td",null,u(e.$filters.formatdMYHMS(d.date)),1),l("td",null,u(d.description),1),l("td",null,u((c=d.user)==null?void 0:c.name),1)])}),128))])]),_:1})]),_:1}),r(at,{modelValue:a.documentDialog,"onUpdate:modelValue":t[4]||(t[4]=d=>a.documentDialog=d),persistent:""},{default:p(()=>[r(q,{style:{width:"750px","max-width":"90vw",height:"90vh","max-height":"90vh"}},{default:p(()=>[r(E,{class:"row items-center q-pb-none"},{default:p(()=>[l("div",ve,u(a.document.id?"Editar":"Agregar")+" Documento ",1),r(H),r(z,{icon:"close",flat:"",round:"",dense:"",onClick:t[0]||(t[0]=d=>a.documentDialog=!1)})]),_:1}),r(E,null,{default:p(()=>[r(ne,{modelValue:a.document.name,"onUpdate:modelValue":[t[1]||(t[1]=d=>a.document.name=d),m.restoreHtml],options:a.documentsSelect,label:"Seleccionar Documento",outlined:"",dense:""},null,8,["modelValue","options","onUpdate:modelValue"]),r(ht,{onSubmit:m.documentForm},{default:p(()=>[l("div",Ce,[l("div",ze,[a.document.html!==""?(h(),w(ue,{key:0,modelValue:a.document.html,"onUpdate:modelValue":t[2]||(t[2]=d=>a.document.html=d),dense:e.$q.screen.lt.md,toolbar:a.toolbar,fonts:a.fonts},null,8,["modelValue","dense","toolbar","fonts"])):it("",!0)])]),r(ut,{align:"right"},{default:p(()=>[r(z,{label:"Cancelar",color:"negative",onClick:t[3]||(t[3]=d=>a.documentDialog=!1),loading:a.loading,icon:"close","no-caps":""},null,8,["loading"]),a.document.html!==""?(h(),w(z,{key:0,label:a.document.id?"Editar":"Agregar",color:a.document.id?"orange":"green",type:"submit",loading:a.loading,icon:a.document.id?"edit":"save","no-caps":""},null,8,["label","color","loading","icon"])):it("",!0)]),_:1})]),_:1},8,["onSubmit"])]),_:1})]),_:1})]),_:1},8,["modelValue"]),r(at,{modelValue:a.documentDialogPdf,"onUpdate:modelValue":t[6]||(t[6]=d=>a.documentDialogPdf=d)},{default:p(()=>[r(q,{style:{width:"750px","max-width":"90vw"}},{default:p(()=>[r(E,{class:"row items-center q-pb-none"},{default:p(()=>[we,r(H),r(z,{icon:"close",flat:"",round:"",dense:"",onClick:t[5]||(t[5]=d=>a.documentDialogPdf=!1)})]),_:1}),r(E,null,{default:p(()=>[l("div",xe,[l("div",Le,[l("iframe",{src:a.iframe,width:"100%",height:"500px"},null,8,Ee)])])]),_:1})]),_:1})]),_:1},8,["modelValue"])]),_:1})}var Ae=gt(fe,[["render",ke]]);const De={name:"StudentsHistory",components:{StudentsDocuments:Ae},data(){return{student_id:this.$route.params.id,student:{},process:0,textProcess:"",loading:!1,historyDialog:!1,history:{description:""}}},mounted(){this.student_id=this.$route.params.id,this.studentGet()},methods:{deleteHistory(e){this.$alert.confirm("\xBFEst\xE1 seguro de eliminar este historial?").onOk(()=>{this.loading=!0,this.$axios.delete(`history/${e}`).then(t=>{const i=this.student.histories.findIndex(n=>n.id===e);this.student.histories.splice(i,1)}).catch(t=>{this.$alert.error(t.response.data.message)}).finally(()=>{this.loading=!1})})},sendWhatsapp(e){window.open(`https://api.whatsapp.com/send?phone=+56${this.student.phone}&text=${e.description}`)},historyClick(e){this.history={...e},this.historyDialog=!0},historyForm(){this.loading=!0,this.history.student_id=this.student_id,this.history.id?this.$axios.put(`history/${this.history.id}`,this.history).then(e=>{const t=this.student.histories.findIndex(i=>i.id===this.history.id);this.student.histories.splice(t,1,e.data),this.historyDialog=!1}).catch(e=>{this.$alert.error(e.response.data.message)}).finally(()=>{this.loading=!1}):this.$axios.post("history",this.history).then(e=>{this.student.histories.unshift(e.data),this.historyDialog=!1}).catch(e=>{this.$alert.error(e.response.data.message)}).finally(()=>{this.loading=!1})},addHistory(){this.historyDialog=!0,this.history.id=void 0,this.history.description=""},handleDrop(e){e.preventDefault();const t=e.dataTransfer.files;this.processFiles(t)},processFiles(e){this.fileUpload(e)},uploadFile(){this.$refs.fileInput.click()},fileUpload(){const e=new FormData;e.append("file",this.$refs.fileInput.files[0]),e.append("student_id",this.student_id);const t={onUploadProgress:i=>{const n=Math.round(i.loaded*100/i.total);this.textProcess=n+"% completado",this.process=n/100}};this.$axios.post(`students/${this.student_id}/diagnoses`,e,t).then(i=>{this.student.diagnoses.unshift(i.data)}).catch(i=>{this.$alert.error(i.response.data.message)}).finally(()=>{this.$refs.fileInput.value="",this.textProcess=""})},studentGet(){this.$axios.get(`students/${this.student_id}`).then(e=>{this.student=e.data}).catch(e=>{this.$alert.error(e.response.data.message)})},downloadFile(e){this.loading=!0,this.$axios.get(`diagnoses/${e.id}/download`,{responseType:"blob"}).then(t=>{const i=window.URL.createObjectURL(new Blob([t.data],{type:t.headers["content-type"]})),n=document.createElement("a");n.href=i,n.setAttribute("download",e.name),document.body.appendChild(n),n.click(),n.remove(),window.URL.revokeObjectURL(i)}).catch(t=>{this.$alert.error(t.response.data.message)}).finally(()=>{this.loading=!1})},deleteDiagnosis(e){this.$alert.confirm("\xBFEst\xE1 seguro de eliminar este diagn\xF3stico?").onOk(()=>{this.loading=!0,this.$axios.delete(`diagnoses/${e}`).then(t=>{const i=this.student.diagnoses.findIndex(n=>n.id===e);this.student.diagnoses.splice(i,1)}).catch(t=>{this.$alert.error(t.response.data.message)}).finally(()=>{this.loading=!1})})}}},je={class:"row"},Ie={class:"col-12 col-md-3"},qe=l("label",{class:"text-bold"},"Rut",-1),Se={class:"col-12 col-md-9"},Oe=l("label",{class:"text-bold"},"Nombre Completo",-1),Pe={class:"col-6 col-md-3"},Te=l("label",{class:"text-bold"},"Rut Tutor",-1),Ne={class:"col-6 col-md-9"},Re=l("label",{class:"text-bold"},"Nombre Tutor",-1),Fe={class:"col-6 col-md-3"},$e=l("label",{class:"text-bold"},"Fecha de Nacimiento",-1),Ue={class:"col-6 col-md-3"},Me=l("label",{class:"text-bold"},"A\xF1o ingreso PIE",-1),He={class:"col-6 col-md-3"},Be=l("label",{class:"text-bold"},"Curso",-1),Qe={class:"col-6 col-md-3"},Ge=l("label",{class:"text-bold"},"A\xF1o",-1),Je={class:"col-12"},Ye=l("label",{class:"text-bold"},"Direcci\xF3n",-1),Ze={class:"col-6 col-md-6"},Ke=l("label",{class:"text-bold"},"Celular",-1),Ve={class:"col-6 col-md-6"},We=l("label",{class:"text-bold"},"Sexo",-1),Xe={class:"row"},ti={class:"col-12 col-md-8"},ei={class:"row"},ii={class:"col-12"},ai={class:"row items-center"},ni=l("div",{class:"text-h6 text-bold"},"Antecedentes",-1),oi=l("thead",null,[l("tr",null,[l("th",null,"Opciones"),l("th",null,"Fecha"),l("th",null,"Descripci\xF3n"),l("th",null,"Usuario")])],-1),si={class:"col-12"},ri={class:"col-12 col-md-4"},li=l("div",{class:"text-h6"},"Diagn\xF3sticos",-1),pi=l("div",null,"Ac\xE1 suba sus archivos",-1),di={class:"q-mt-md"},ci={class:"text-h6 text-bold"};function mi(e,t,i,n,a,m){const d=Wt("StudentsDocuments");return h(),w(oe,{class:"bg-grey-3 q-pa-md"},{default:p(()=>[r(q,{class:"q-mb-md"},{default:p(()=>[r(E,null,{default:p(()=>[l("div",je,[l("div",Ie,[qe,l("div",null,u(a.student.rut),1)]),l("div",Se,[Oe,l("div",null,u(a.student.name),1)]),l("div",Pe,[Te,l("div",null,u(a.student.tutorRut),1)]),l("div",Ne,[Re,l("div",null,u(a.student.tutorName),1)]),l("div",Fe,[$e,l("div",null,u(a.student.birthdate),1)]),l("div",Ue,[Me,l("div",null,u(a.student.year_PIE),1)]),l("div",He,[Be,l("div",null,u(a.student.course),1)]),l("div",Qe,[Ge,l("div",null,u(a.student.year),1)]),l("div",Je,[Ye,l("div",null,u(a.student.address),1)]),l("div",Ze,[Ke,l("div",null,u(a.student.phone),1)]),l("div",Ve,[We,l("div",null,u(a.student.sex==="M"?"Masculino":"Femenino"),1)])])]),_:1})]),_:1}),l("div",Xe,[l("div",ti,[l("div",ei,[l("div",ii,[r(q,null,{default:p(()=>[r(E,null,{default:p(()=>[l("div",ai,[ni,r(H),r(z,{icon:"add_circle_outline",onClick:m.addHistory,label:"Agregar registro","no-caps":"",color:"green",dense:"",size:"10px"},null,8,["onClick"])]),r(ft,{dense:"","wrap-cells":""},{default:p(()=>[oi,l("tbody",null,[(h(!0),M(et,null,tt(a.student.histories,c=>{var v;return h(),M("tr",{key:c.id},[l("td",null,[r(nt,{size:"10px",color:"positive",loading:a.loading,"auto-close":"",class:"q-mr-sm",label:"Opciones","no-caps":""},{default:p(()=>[N((h(),w(j,{clickable:"",onClick:L=>m.deleteHistory(c)},{default:p(()=>[r(b,{avatar:""},{default:p(()=>[r(S,{name:"delete"})]),_:1}),r(b,null,{default:p(()=>[D("Eliminar")]),_:1})]),_:2},1032,["onClick"])),[[R]]),N((h(),w(j,{clickable:"",onClick:L=>m.historyClick(c)},{default:p(()=>[r(b,{avatar:""},{default:p(()=>[r(S,{name:"edit"})]),_:1}),r(b,null,{default:p(()=>[D("Editar")]),_:1})]),_:2},1032,["onClick"])),[[R]]),N((h(),w(j,{clickable:"",onClick:L=>m.sendWhatsapp(c)},{default:p(()=>[r(b,{avatar:""},{default:p(()=>[r(S,{name:"send"})]),_:1}),r(b,null,{default:p(()=>[D("Enviar por Whatsapp")]),_:1})]),_:2},1032,["onClick"])),[[R]])]),_:2},1032,["loading"])]),l("td",null,u(e.$filters.formatdMY(c.date)),1),l("td",null,u(c.description),1),l("td",null,u((v=c.user)==null?void 0:v.name),1)])}),128))])]),_:1})]),_:1})]),_:1})]),l("div",si,[r(d,{student_id:parseInt(a.student_id),student:a.student},null,8,["student_id","student"])])])]),l("div",ri,[r(q,null,{default:p(()=>[r(E,null,{default:p(()=>[li,l("div",{class:"text-center border-dashed cursor-pointer",onClick:t[0]||(t[0]=(...c)=>m.uploadFile&&m.uploadFile(...c)),onDragenter:t[1]||(t[1]=J(()=>{},["prevent"])),onDragover:t[2]||(t[2]=J(()=>{},["prevent"])),onDragleave:t[3]||(t[3]=J(()=>{},["prevent"])),onDrop:t[4]||(t[4]=J((...c)=>m.handleDrop&&m.handleDrop(...c),["prevent"]))},[r(S,{name:"cloud_upload",size:"70px"}),pi],32),l("input",{type:"file",class:"hidden",ref:"fileInput",onChange:t[5]||(t[5]=(...c)=>m.fileUpload&&m.fileUpload(...c)),accept:".pdf"},null,544),l("div",di,[r(q,null,{default:p(()=>[r(E,{class:"q-pa-none"},{default:p(()=>[a.textProcess!==""?(h(),w(j,{key:0},{default:p(()=>[r(b,null,{default:p(()=>[r(V,null,{default:p(()=>[D(u(a.textProcess),1)]),_:1}),r(ae,{value:a.process,color:a.process===100?"green":"primary"},null,8,["value","color"])]),_:1}),r(b,{side:""},{default:p(()=>[r(z,{flat:"",icon:"picture_as_pdf"})]),_:1})]),_:1})):it("",!0)]),_:1})]),_:1}),(h(!0),M(et,null,tt(a.student.diagnoses,c=>(h(),w(q,{key:c.id,flat:"",bordered:"",class:"q-ma-sm"},{default:p(()=>[r(E,{class:"q-pa-none bg-grey-3"},{default:p(()=>[r(j,null,{default:p(()=>[r(b,{clickable:""},{default:p(()=>[r(V,{class:"text-bold"},{default:p(()=>[D(u(e.$filters.formatdMY(c.created_at))+" ",1),r(z,{flat:"",icon:"fa-regular fa-file-pdf",dense:"",class:"q-pa-none",color:"red",size:"10px",onClick:v=>m.downloadFile(c),loading:a.loading},null,8,["onClick","loading"])]),_:2},1024),r(V,{class:"text-capitalize text-caption"},{default:p(()=>[D(u(c.name),1)]),_:2},1024)]),_:2},1024),r(b,{side:""},{default:p(()=>[r(z,{flat:"",icon:"delete",onClick:v=>m.deleteDiagnosis(c.id),color:"red",loading:a.loading},null,8,["onClick","loading"])]),_:2},1024)]),_:2},1024)]),_:2},1024)]),_:2},1024))),128))])]),_:1})]),_:1})])]),r(at,{modelValue:a.historyDialog,"onUpdate:modelValue":t[9]||(t[9]=c=>a.historyDialog=c)},{default:p(()=>[r(q,{style:{width:"400px","max-width":"90vw"}},{default:p(()=>[r(E,{class:"row items-center q-pb-none"},{default:p(()=>[l("div",ci,u(a.history.id?"Editar":"Agregar")+" Antecedentes ",1),r(H),r(z,{flat:"",icon:"close",onClick:t[6]||(t[6]=c=>a.historyDialog=!1)})]),_:1}),r(E,null,{default:p(()=>[r(ht,{class:"q-gutter-md",onSubmit:m.historyForm},{default:p(()=>[r(Xt,{type:"textarea",modelValue:a.history.description,"onUpdate:modelValue":t[7]||(t[7]=c=>a.history.description=c),label:"Descripci\xF3n",outlined:"",rules:[c=>!!c||"Campo requerido"]},null,8,["modelValue","rules"]),r(ut,{align:"right"},{default:p(()=>[r(z,{label:"Cancelar",color:"red",onClick:t[8]||(t[8]=c=>a.historyDialog=!1),"no-caps":"",icon:"close",loading:a.loading},null,8,["loading"]),a.history.id===void 0?(h(),w(z,{key:0,label:"Guardar",color:"green",type:"submit","no-caps":"",icon:"save",loading:a.loading},null,8,["loading"])):(h(),w(z,{key:1,label:"Modificar",color:"orange",type:"submit","no-caps":"",icon:"save",loading:a.loading},null,8,["loading"]))]),_:1})]),_:1},8,["onSubmit"])]),_:1})]),_:1})]),_:1},8,["modelValue"])]),_:1})}var wi=gt(De,[["render",mi]]);export{wi as default};
