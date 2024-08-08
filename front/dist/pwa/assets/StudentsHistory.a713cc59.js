import{Q as M}from"./QImg.3f87172d.js";import{_ as P,Q as p,R as g,S as l,T as o,V as i,U as h,a2 as b,$ as I,a0 as N,a1 as V,aC as y,aD as z,W as m,aN as u,be as C,aO as S,aP as q,L,Y as v,au as w,P as F,bf as k}from"./index.b847a530.js";import{Q as D}from"./QSpace.81cddaec.js";import{a as x,b as f,d as O}from"./QMenu.ba997b2a.js";import{Q as R}from"./QBtnDropdown.fb527a6a.js";import{Q as U,C as E,a as G}from"./ClosePopup.a8a4d60c.js";import{a as H,Q as T}from"./QForm.fc50a752.js";import{Q}from"./QPage.15c01238.js";import{Q as B}from"./QEditor.6c99a8c5.js";import{h as j}from"./moment.40bc58bf.js";import"./format.3c2a3dd1.js";import"./use-fullscreen.88e3e4e0.js";class A{static fichaSeguimiento(e,r,n){return`<p style='margin-top:0cm;margin-right:0cm;margin-bottom:8.0pt;margin-left:0cm;font-size:11.0pt;font-family:"Calibri",sans-serif;text-align:center;line-height:150%;'><span style='font-size:19px;line-height:150%;font-family:"Calibri Light",sans-serif;'>FICHA DE SEGUIMIENTO INDIVIDUALIZADA</span></p>
<p style='margin-top:0cm;margin-right:0cm;margin-bottom:8.0pt;margin-left:0cm;font-size:11.0pt;font-family:"Calibri",sans-serif;text-align:center;line-height:150%;'><span style='font-size:19px;line-height:150%;font-family:"Calibri Light",sans-serif;'>&nbsp;PARA DESREGULACI&Oacute;N EMOCIONAL</span></p>
<p style='margin-top:0cm;margin-right:0cm;margin-bottom:8.0pt;margin-left:0cm;font-size:11.0pt;font-family:"Calibri",sans-serif;line-height:150%;'><span style='font-size:19px;line-height:150%;font-family:"Calibri Light",sans-serif;'>&nbsp;</span></p>
<p style='margin-top:0cm;margin-right:0cm;margin-bottom:8.0pt;margin-left:0cm;font-size:11.0pt;font-family:"Calibri",sans-serif;line-height:150%;'><span style='font-size:19px;line-height:150%;font-family:"Calibri Light",sans-serif;'>Estudiante: ${e} </span></p>
<p style='margin-top:0cm;margin-right:0cm;margin-bottom:8.0pt;margin-left:0cm;font-size:11.0pt;font-family:"Calibri",sans-serif;line-height:150%;'><span style='font-size:19px;line-height:150%;font-family:"Calibri Light",sans-serif;'>Fecha: ${r}</span></p>
<p style='margin-top:0cm;margin-right:0cm;margin-bottom:8.0pt;margin-left:0cm;font-size:11.0pt;font-family:"Calibri",sans-serif;line-height:150%;'><span style='font-size:19px;line-height:150%;font-family:"Calibri Light",sans-serif;'>Evaluador: ${n.evaluador}.</span></p>
<p style='margin-top:0cm;margin-right:0cm;margin-bottom:8.0pt;margin-left:0cm;font-size:11.0pt;font-family:"Calibri",sans-serif;line-height:150%;'><span style='font-size:19px;line-height:150%;font-family:"Calibri Light",sans-serif;'>Contexto: ${n.contexto}</span></span></p>
<p style='margin-top:0cm;margin-right:0cm;margin-bottom:8.0pt;margin-left:0cm;font-size:11.0pt;font-family:"Calibri",sans-serif;line-height:150%;'><span style='font-size:19px;line-height:150%;font-family:"Calibri Light",sans-serif;'>&nbsp;</span></p>
<p style='margin-top:0cm;margin-right:0cm;margin-bottom:8.0pt;margin-left:0cm;font-size:11.0pt;font-family:"Calibri",sans-serif;line-height:150%;'><strong><span style='font-size:19px;line-height:150%;font-family:"Calibri Light",sans-serif;'>DESCRIPCI&Oacute;N DETALLADA DE LA DESREGULACI&Oacute;N:</span></strong></p>
<p style='margin-top:0cm;margin-right:0cm;margin-bottom:8.0pt;margin-left:0cm;font-size:11.0pt;font-family:"Calibri",sans-serif;line-height:150%;'><strong><span style='font-size:19px;line-height:150%;font-family:"Calibri Light",sans-serif;'>1. Emoci&oacute;n predominante:</span></strong></p>
<p style='margin-top:0cm;margin-right:0cm;margin-bottom:8.0pt;margin-left:0cm;font-size:11.0pt;font-family:"Calibri",sans-serif;line-height:150%;'><span style='font-size:19px;line-height:150%;font-family:"Calibri Light",sans-serif;'>Seleccionar la emoci&oacute;n principal que el estudiante experiment&oacute; durante la desregulaci&oacute;n:</span></p>
<ol start="1" style="list-style-type: upper-alpha;">
    <li><span style='line-height:150%;font-family:"Calibri Light",sans-serif;text-decoration: ${n.emocion_predominante=="Tristeza"?"underline":"none"};'>Tristeza</span></li>
    <li><span style='line-height:150%;font-family:"Calibri Light",sans-serif;text-decoration: ${n.emocion_predominante=="Ira"?"underline":"none"};'>Ira</span></li>
    <li><span style='line-height:150%;font-family:"Calibri Light",sans-serif;text-decoration: ${n.emocion_predominante=="Frustracion"?"underline":"none"};'>Frustracion</span></li>
    <li><span style='line-height:150%;font-family:"Calibri Light",sans-serif;text-decoration: ${n.emocion_predominante=="Ansiedad"?"underline":"none"};'>Ansiedad</span></li>
    <li><span style='line-height:150%;font-family:"Calibri Light",sans-serif;text-decoration: ${n.emocion_predominante=="Miedo"?"underline":"none"};'>Miedo</span></li>
    <li><span style='line-height:150%;font-family:"Calibri Light",sans-serif;'>Otra: ${n.emocion_predominante_otros}</span></li>
</ol>
<p style='margin-top:0cm;margin-right:0cm;margin-bottom:8.0pt;margin-left:0cm;font-size:11.0pt;font-family:"Calibri",sans-serif;line-height:150%;'><span style='font-size:19px;line-height:150%;font-family:"Calibri Light",sans-serif;'>Describir la intensidad de la emoci&oacute;n en una escala de 1 a 10 (1 siendo la intensidad m&aacute;s baja y 10 la m&aacute;s alta): [<span style="color:red;">Especificar]</span></span></p>
<p style='margin-top:0cm;margin-right:0cm;margin-bottom:8.0pt;margin-left:0cm;font-size:11.0pt;font-family:"Calibri",sans-serif;line-height:150%;'><span style='font-size:19px;line-height:150%;font-family:"Calibri Light",sans-serif;'>&nbsp;</span></p>
<p style='margin-top:0cm;margin-right:0cm;margin-bottom:8.0pt;margin-left:0cm;font-size:11.0pt;font-family:"Calibri",sans-serif;line-height:150%;'><span style='font-size:19px;line-height:150%;font-family:"Calibri Light",sans-serif;'>&nbsp;</span></p>
<p style='margin-top:0cm;margin-right:0cm;margin-bottom:8.0pt;margin-left:0cm;font-size:11.0pt;font-family:"Calibri",sans-serif;line-height:150%;'><span style='font-size:19px;line-height:150%;font-family:"Calibri Light",sans-serif;'>&nbsp;</span></p>
<p style='margin-top:0cm;margin-right:0cm;margin-bottom:8.0pt;margin-left:0cm;font-size:11.0pt;font-family:"Calibri",sans-serif;line-height:150%;'><strong><span style='font-size:19px;line-height:150%;font-family:"Calibri Light",sans-serif;'>2. Manifestaciones f&iacute;sicas:</span></strong></p>
<p style='margin-top:0cm;margin-right:0cm;margin-bottom:8.0pt;margin-left:0cm;font-size:11.0pt;font-family:"Calibri",sans-serif;line-height:150%;'><span style='font-size:19px;line-height:150%;font-family:"Calibri Light",sans-serif;'>Describir en detalle las manifestaciones f&iacute;sicas que el estudiante present&oacute; durante la desregulaci&oacute;n, incluyendo:</span></p>
<ol start="1" style="list-style-type: upper-alpha;">
    <li><span style='line-height:150%;font-family:"Calibri Light",sans-serif;text-decoration:${n.manifestaciones_fisicas=="LLanto"?"underline":"none"};'>Llanto</span></li>
    <li><span style='line-height:150%;font-family:"Calibri Light",sans-serif;text-decoration:${n.manifestaciones_fisicas=="Temblor"?"underline":"none"};'>Temblor</span></li>
    <li><span style='line-height:150%;font-family:"Calibri Light",sans-serif;text-decoration:${n.manifestaciones_fisicas=="Sudoraci\xF3n"?"underline":"none"};'>Sudoraci&oacute;n</span></li>
    <li><span style='line-height:150%;font-family:"Calibri Light",sans-serif;text-decoration:${n.manifestaciones_fisicas=="Aumento de la frecuencia cardiaca"?"underline":"none"};'>Aumento de la frecuencia cardiaca</span></li>
    <li><span style='line-height:150%;font-family:"Calibri Light",sans-serif;text-decoration:${n.manifestaciones_fisicas=="Tensi\xF3n muscular"?"underline":"none"};'>Tensi&oacute;n muscular</span></li>
    <li><span style='line-height:150%;font-family:"Calibri Light",sans-serif;text-decoration:${n.manifestaciones_fisicas=="Rubor facial"?"underline":"none"};'>Rubor facial</span></li>
    <li><span style='line-height:150%;font-family:"Calibri Light",sans-serif;text-decoration:${n.manifestaciones_fisicas=="Dificultad para respirar"?"underline":"none"};'>Dificultad para respirar</span></li>
    <li><span style='line-height:150%;font-family:"Calibri Light",sans-serif;text-decoration:${n.manifestaciones_fisicas=="N\xE1useas"?"underline":"none"};'>N&aacute;useas</span></li>
    <li><span style='line-height:150%;font-family:"Calibri Light",sans-serif;text-decoration:${n.manifestaciones_fisicas=="Dolor de cabeza"?"underline":"none"};'>Dolor de cabeza</span></li>
    <li><span style='line-height:150%;font-family:"Calibri Light",sans-serif;'>Otros: ${n.manifestaciones_fisicas_otros}</span></li>
</ol>
<p style='margin-top:0cm;margin-right:0cm;margin-bottom:8.0pt;margin-left:0cm;font-size:11.0pt;font-family:"Calibri",sans-serif;line-height:150%;'><span style='font-size:19px;line-height:150%;font-family:"Calibri Light",sans-serif;'>3. Manifestaciones conductuales:</span></p>
<p style='margin-top:0cm;margin-right:0cm;margin-bottom:8.0pt;margin-left:0cm;font-size:11.0pt;font-family:"Calibri",sans-serif;line-height:150%;'><span style='font-size:19px;line-height:150%;font-family:"Calibri Light",sans-serif;'>Describir en detalle las manifestaciones conductuales que el estudiante present&oacute; durante la desregulaci&oacute;n, incluyendo:</span></p>
<ol start="1" style="list-style-type: upper-alpha;">
    <li><span style='line-height:150%;font-family:"Calibri Light",sans-serif;text-decoration:${n.manifestaciones_conductuales.includes("Agresi\xF3n verbal (insultos, gritos)")?"underline":"none"};'>Agresi&oacute;n verbal (insultos, gritos)</span></li>
    <li><span style='line-height:150%;font-family:"Calibri Light",sans-serif;text-decoration:${n.manifestaciones_conductuales.includes("Agresi\xF3n f\xEDsica (golpes, patadas)")?"underline":"none"};'>Agresi&oacute;n f&iacute;sica (golpes, patadas)</span></li>
    <li><span style='line-height:150%;font-family:"Calibri Light",sans-serif;text-decoration:${n.manifestaciones_conductuales.includes("Autolesiones")?"underline":"none"};'>Autolesiones</span></li>
    <li><span style='line-height:150%;font-family:"Calibri Light",sans-serif;text-decoration:${n.manifestaciones_conductuales.includes("Aislamiento")?"underline":"none"};'>Aislamiento</span></li>
    <li><span style='line-height:150%;font-family:"Calibri Light",sans-serif;text-decoration:${n.manifestaciones_conductuales.includes("Llanto inconsolable")?"underline":"none"};'>Llanto inconsolable</span></li>
    <li><span style='line-height:150%;font-family:"Calibri Light",sans-serif;text-decoration:${n.manifestaciones_conductuales.includes("Negativa a cooperar")?"underline":"none"};'>Negativa a cooperar</span></li>
    <li><span style='line-height:150%;font-family:"Calibri Light",sans-serif;text-decoration:${n.manifestaciones_conductuales.includes("Desobediencia")?"underline":"none"};'>Desobediencia</span></li>
    <li><span style='line-height:150%;font-family:"Calibri Light",sans-serif;text-decoration:${n.manifestaciones_conductuales.includes("Comportamiento impulsivo")?"underline":"none"};'>Comportamiento impulsivo</span></li>
    <li><span style='line-height:150%;font-family:"Calibri Light",sans-serif;'>Otros: ${n.manifestaciones_conductuales_otros}</span></li>
</ol>
<p style='margin-top:0cm;margin-right:0cm;margin-bottom:8.0pt;margin-left:36.0pt;font-size:11.0pt;font-family:"Calibri",sans-serif;line-height:150%;'><strong><span style='font-size:19px;line-height:150%;font-family:"Calibri Light",sans-serif;'>&nbsp;</span></strong></p>
<p style='margin-top:0cm;margin-right:0cm;margin-bottom:8.0pt;margin-left:0cm;font-size:11.0pt;font-family:"Calibri",sans-serif;line-height:150%;'><strong><span style='font-size:19px;line-height:150%;font-family:"Calibri Light",sans-serif;'>4. Duraci&oacute;n:</span></strong></p>
<p style='margin-top:0cm;margin-right:0cm;margin-bottom:8.0pt;margin-left:0cm;font-size:11.0pt;font-family:"Calibri",sans-serif;line-height:150%;'><span style='font-size:19px;line-height:150%;font-family:"Calibri Light",sans-serif;'>Indicar la duraci&oacute;n total de la desregulaci&oacute;n en minutos: (Especificar)</span></p>
<p style='margin-top:0cm;margin-right:0cm;margin-bottom:8.0pt;margin-left:0cm;font-size:11.0pt;font-family:"Calibri",sans-serif;line-height:150%;'><span style='font-size:19px;line-height:150%;font-family:"Calibri Light",sans-serif;'>${n.duracion}</span></p>
<p style='margin-top:0cm;margin-right:0cm;margin-bottom:8.0pt;margin-left:0cm;font-size:11.0pt;font-family:"Calibri",sans-serif;line-height:150%;'><span style='font-size:19px;line-height:150%;font-family:"Calibri Light",sans-serif;'>Intervenci&oacute;n realizada:</span></p>
<p style='margin-top:0cm;margin-right:0cm;margin-bottom:8.0pt;margin-left:0cm;font-size:11.0pt;font-family:"Calibri",sans-serif;line-height:150%;'><span style='font-size:19px;line-height:150%;font-family:"Calibri Light",sans-serif;'>1. Estrategias utilizadas para calmar al estudiante:</span></p>
<p style='margin-top:0cm;margin-right:0cm;margin-bottom:8.0pt;margin-left:0cm;font-size:11.0pt;font-family:"Calibri",sans-serif;line-height:150%;'><span style='font-size:19px;line-height:150%;font-family:"Calibri Light",sans-serif;'>Describir las estrategias espec&iacute;ficas que se utilizaron para calmar al estudiante durante la desregulaci&oacute;n, incluyendo:</span></p>
<ol start="1" style="list-style-type: upper-alpha;">
    <li><span style='line-height:150%;font-family:"Calibri Light",sans-serif;text-decoration:${n.intervencion_realizada.includes("Respiraci\xF3n profunda")?"underline":"none"};'>Respiraci&oacute;n profunda</span></li>
    <li><span style='line-height:150%;font-family:"Calibri Light",sans-serif;text-decoration:${n.intervencion_realizada.includes("T\xE9cnicas de relajaci\xF3n muscular")?"underline":"none"};'>T&eacute;cnicas de relajaci&oacute;n muscular</span></li>
    <li><span style='line-height:150%;font-family:"Calibri Light",sans-serif;text-decoration:${n.intervencion_realizada.includes("Visualizaci\xF3n")?"underline":"none"};'>Visualizaci&oacute;n</span></li>
    <li><span style='line-height:150%;font-family:"Calibri Light",sans-serif;text-decoration:${n.intervencion_realizada.includes("Hablar con el estudiante en un tono calmado y tranquilizador")?"underline":"none"};'>Hablar con el estudiante en un tono calmado y tranquilizador</span></li>
    <li><span style='line-height:150%;font-family:"Calibri Light",sans-serif;text-decoration:${n.intervencion_realizada.includes("Ofrecer apoyo emocional")?"underline":"none"};'>Ofrecer apoyo emocional</span></li>
    <li><span style='line-height:150%;font-family:"Calibri Light",sans-serif;text-decoration:${n.intervencion_realizada.includes("Brindar un espacio seguro y tranquilo")?"underline":"none"};'>Brindar un espacio seguro y tranquilo</span></li>
    <li><span style='line-height:150%;font-family:"Calibri Light",sans-serif;text-decoration:${n.intervencion_realizada.includes("Retirar al estudiante del contexto")?"underline":"none"};'>Retirar al estudiante del contexto</span></li>
    <li><span style='line-height:150%;font-family:"Calibri Light",sans-serif;'>Otros: ${n.intervencion_realizada_otros}</span></li>
</ol>
<p style='margin-top:0cm;margin-right:0cm;margin-bottom:8.0pt;margin-left:0cm;font-size:11.0pt;font-family:"Calibri",sans-serif;line-height:150%;'><span style='font-size:19px;line-height:150%;font-family:"Calibri Light",sans-serif;'>2. Efectividad de las estrategias:</span></p>
<p style='margin-top:0cm;margin-right:0cm;margin-bottom:8.0pt;margin-left:0cm;font-size:11.0pt;font-family:"Calibri",sans-serif;line-height:150%;'><span style='font-size:19px;line-height:150%;font-family:"Calibri Light",sans-serif;'>Evaluar la eficacia de las estrategias utilizadas para calmar al estudiante, indicando si fueron:</span></p>
<ol start="1" style="list-style-type: upper-alpha;">
    <li><span style='line-height:150%;font-family:"Calibri Light",sans-serif;text-decoration:${n.efectividad_estrategia=="Muy efectiva"?"underline":"none"};'>Muy efectivas</span></li>
    <li><span style='line-height:150%;font-family:"Calibri Light",sans-serif;text-decoration:${n.efectividad_estrategia=="Efectiva"?"underline":"none"};'>Efectivas</span></li>
    <li><span style='line-height:150%;font-family:"Calibri Light",sans-serif;text-decoration:${n.efectividad_estrategia=="Poco efectiva"?"underline":"none"};'>Poco efectivas</span></li>
    <li><span style='line-height:150%;font-family:"Calibri Light",sans-serif;text-decoration:${n.efectividad_estrategia=="Inefectiva"?"underline":"none"};'>Inefectivas</span></li>
</ol>
<p style='margin-top:0cm;margin-right:0cm;margin-bottom:8.0pt;margin-left:0cm;font-size:11.0pt;font-family:"Calibri",sans-serif;line-height:150%;'><span style='font-size:19px;line-height:150%;font-family:"Calibri Light",sans-serif;'>&nbsp;</span></p>
<p style='margin-top:0cm;margin-right:0cm;margin-bottom:8.0pt;margin-left:0cm;font-size:11.0pt;font-family:"Calibri",sans-serif;line-height:150%;'><span style='font-size:19px;line-height:150%;font-family:"Calibri Light",sans-serif;'>&nbsp;</span></p>
<p style='margin-top:0cm;margin-right:0cm;margin-bottom:8.0pt;margin-left:0cm;font-size:11.0pt;font-family:"Calibri",sans-serif;line-height:150%;'><span style='font-size:19px;line-height:150%;font-family:"Calibri Light",sans-serif;'>3. Necesidad de ayuda externa:</span></p>
<p style='margin-top:0cm;margin-right:0cm;margin-bottom:8.0pt;margin-left:0cm;font-size:11.0pt;font-family:"Calibri",sans-serif;line-height:150%;'><span style='font-size:19px;line-height:150%;font-family:"Calibri Light",sans-serif;'>Indicar si se requiri&oacute; ayuda externa para controlar la desregulaci&oacute;n del estudiante:</span></p>
<ol start="1" style="list-style-type: upper-alpha;">
    <li><span style='line-height:150%;font-family:"Calibri Light",sans-serif;text-decoration:${n.necesidad_ayuda_externa=="S\xED"?"underline":"none"};'>S&iacute;</span></li>
    <li><span style='line-height:150%;font-family:"Calibri Light",sans-serif;text-decoration:${n.necesidad_ayuda_externa=="No"?"underline":"none"};'>No</span></li>
</ol>
<p style='margin-top:0cm;margin-right:0cm;margin-bottom:8.0pt;margin-left:0cm;font-size:11.0pt;font-family:"Calibri",sans-serif;line-height:150%;'><span style='font-size:19px;line-height:150%;font-family:"Calibri Light",sans-serif;'>4. Si se requiri&oacute; ayuda externa, &iquest;de qu&eacute; tipo?:</span></p>
<p style='margin-top:0cm;margin-right:0cm;margin-bottom:8.0pt;margin-left:0cm;font-size:11.0pt;font-family:"Calibri",sans-serif;line-height:150%;'><span style='font-size:19px;line-height:150%;font-family:"Calibri Light",sans-serif;'>Describir el tipo de ayuda externa que se requiri&oacute;, incluyendo:</span></p>
<ol start="1" style="list-style-type: upper-alpha;">
    <li><span style='line-height:150%;font-family:"Calibri Light",sans-serif;text-decoration:${n.ayuda_externa.includes("Contacto con los padres o tutores")?"underline":"none"};'>Contacto con los padres o tutores</span></li>
    <li><span style='line-height:150%;font-family:"Calibri Light",sans-serif;text-decoration:${n.ayuda_externa.includes("Intervenci\xF3n del psic\xF3logo o pedagogo")?"underline":"none"};'>Intervenci&oacute;n del psic&oacute;logo o pedagogo</span></li>
    <li><span style='line-height:150%;font-family:"Calibri Light",sans-serif;text-decoration:${n.ayuda_externa.includes("Intervenci\xF3n del equipo directivo")?"underline":"none"};'>Intervenci&oacute;n del equipo directivo</span></li>
    <li><span style='line-height:150%;font-family:"Calibri Light",sans-serif;text-decoration:${n.ayuda_externa.includes("Asistencia m\xE9dica")?"underline":"none"};'>Asistencia m&eacute;dica</span></li>
    <li><span style='line-height:150%;font-family:"Calibri Light",sans-serif;'>Otros: ${n.ayuda_externa_otros}</span></li>
</ol>
<p style='margin-top:0cm;margin-right:0cm;margin-bottom:8.0pt;margin-left:0cm;font-size:11.0pt;font-family:"Calibri",sans-serif;line-height:150%;'><span style='font-size:19px;line-height:150%;font-family:"Calibri Light",sans-serif;'>Plan de acci&oacute;n individualizado:</span></p>
<p style='margin-top:0cm;margin-right:0cm;margin-bottom:8.0pt;margin-left:0cm;font-size:11.0pt;font-family:"Calibri",sans-serif;line-height:150%;'><span style='font-size:19px;line-height:150%;font-family:"Calibri Light",sans-serif;'>1. Medidas a corto plazo:</span></p>
<p style='margin-top:0cm;margin-right:0cm;margin-bottom:8.0pt;margin-left:0cm;font-size:11.0pt;font-family:"Calibri",sans-serif;line-height:150%;'><span style='font-size:19px;line-height:150%;font-family:"Calibri Light",sans-serif;'>Detallar las medidas espec&iacute;ficas que se implementar&aacute;n a corto plazo para prevenir futuras desregulaciones emocionales en el estudiante, incluyendo:</span></p>
<ol start="1" style="list-style-type: upper-alpha;">
    <li><span style='line-height:150%;font-family:"Calibri Light",sans-serif;text-decoration: ${n.medidas_corto_plazo.includes("Implementaci\xF3n de estrategias de autorregulaci\xF3n emocional")?"underline":"none"};'>Implementaci&oacute;n de estrategias de autorregulaci&oacute;n emocional</span></li>
    <li><span style='line-height:150%;font-family:"Calibri Light",sans-serif;text-decoration: ${n.medidas_corto_plazo.includes("Adaptaciones en el aula")?"underline":"none"};'>Adaptaciones en el aula</span></li>
    <li><span style='line-height:150%;font-family:"Calibri Light",sans-serif;text-decoration: ${n.medidas_corto_plazo.includes("Apoyo acad\xE9mico individualizado")?"underline":"none"};'>Apoyo acad&eacute;mico individualizado</span></li>
    <li><span style='line-height:150%;font-family:"Calibri Light",sans-serif;text-decoration: ${n.medidas_corto_plazo.includes("Refuerzo positivo")?"underline":"none"};'>Refuerzo positivo</span></li>
    <li><span style='line-height:150%;font-family:"Calibri Light",sans-serif;text-decoration: ${n.medidas_corto_plazo.includes("Seguimiento individualizado por parte del profesorado u otro profesional")?"underline":"none"};'>Seguimiento individualizado por parte del profesorado u otro profesional</span></li>
    <li><span style='line-height:150%;font-family:"Calibri Light",sans-serif;text-decoration: ${n.medidas_corto_plazo.includes("Intervenci\xF3n con la familia")?"underline":"none"};'>Intervenci&oacute;n con la familia</span></li>
    <li><span style='line-height:150%;font-family:"Calibri Light",sans-serif;'>Otros: ${n.medidas_corto_plazo_otros}</span></li>
</ol>
<p style='margin-top:0cm;margin-right:0cm;margin-bottom:8.0pt;margin-left:0cm;font-size:11.0pt;font-family:"Calibri",sans-serif;line-height:150%;'><span style='font-size:19px;line-height:150%;font-family:"Calibri Light",sans-serif;'>2. Medidas a largo plazo:</span></p>
<p style='margin-top:0cm;margin-right:0cm;margin-bottom:8.0pt;margin-left:0cm;font-size:11.0pt;font-family:"Calibri",sans-serif;line-height:150%;'><span style='font-size:19px;line-height:150%;font-family:"Calibri Light",sans-serif;'>Detallar las medidas espec&iacute;ficas que se implementar&aacute;n a largo plazo para abordar las causas de la desregulaci&oacute;n emocional en el estudiante, incluyendo:</span></p>
<ol start="1" style="list-style-type: upper-alpha;">

    <li><span style='line-height:150%;font-family:"Calibri Light",sans-serif;text-decoration: ${n.medidas_largo_plazo.includes("Terapia individual o grupal")?"underline":"none"};'>Terapia individual o grupal</span></li>
    <li><span style='line-height:150%;font-family:"Calibri Light",sans-serif;text-decoration: ${n.medidas_largo_plazo.includes("Evaluaci\xF3n por un profesional de la salud mental")?"underline":"none"};'>Evaluaci&oacute;n por un profesional de la salud mental</span></li>
    <li><span style='line-height:150%;font-family:"Calibri Light",sans-serif;text-decoration: ${n.medidas_largo_plazo.includes("Intervenci\xF3n psicopedag\xF3gica")?"underline":"none"};'>Intervenci&oacute;n psicopedag&oacute;gica</span></li>
    <li><span style='line-height:150%;font-family:"Calibri Light",sans-serif;text-decoration: ${n.medidas_largo_plazo.includes("Capacitaci\xF3n a los padres o tutores en manejo de emociones")?"underline":"none"};'>Capacitaci&oacute;n a los padres o tutores en manejo de emociones</span></li>
    <li><span style='line-height:150%;font-family:"Calibri Light",sans-serif;text-decoration: ${n.medidas_largo_plazo.includes("Adaptaciones curriculares")?"underline":"none"};'>Adaptaciones curriculares</span></li>
    <li><span style='line-height:150%;font-family:"Calibri Light",sans-serif;'>Otros: ${n.medidas_largo_plazo_otros}</span></li>
</ol>
<p style='margin-top:0cm;margin-right:0cm;margin-bottom:8.0pt;margin-left:0cm;font-size:11.0pt;font-family:"Calibri",sans-serif;line-height:150%;'><span style='font-size:19px;line-height:150%;font-family:"Calibri Light",sans-serif;'>Seguimiento:</span></p>
<p style='margin-top:0cm;margin-right:0cm;margin-bottom:8.0pt;margin-left:0cm;font-size:11.0pt;font-family:"Calibri",sans-serif;line-height:150%;'><span style='font-size:19px;line-height:150%;font-family:"Calibri Light",sans-serif;'>1. Fecha de la pr&oacute;xima evaluaci&oacute;n (Indicar la fecha en la que se realizar&aacute; la pr&oacute;xima evaluaci&oacute;n del estudiante):</span></p>
<p style='margin-top:0cm;margin-right:0cm;margin-bottom:8.0pt;margin-left:0cm;font-size:11.0pt;font-family:"Calibri",sans-serif;line-height:150%;'><span style='font-size:19px;line-height:150%;font-family:"Calibri Light",sans-serif;'>
${n.seguimiento_fecha}
</span></p>
<p style='margin-top:0cm;margin-right:0cm;margin-bottom:8.0pt;margin-left:0cm;font-size:11.0pt;font-family:"Calibri",sans-serif;line-height:150%;'><span style='font-size:19px;line-height:150%;font-family:"Calibri Light",sans-serif;'>2. Persona responsable del seguimiento (Indicar el nombre y cargo de la persona responsable del seguimiento del plan de acci&oacute;n).</span></p>
<p style='margin-top:0cm;margin-right:0cm;margin-bottom:8.0pt;margin-left:0cm;font-size:11.0pt;font-family:"Calibri",sans-serif;line-height:150%;'><span style='font-size:19px;line-height:150%;font-family:"Calibri Light",sans-serif;'>
${n.seguimiento_responsable}
</span></p>
<p style='margin-top:0cm;margin-right:0cm;margin-bottom:8.0pt;margin-left:0cm;font-size:11.0pt;font-family:"Calibri",sans-serif;line-height:150%;'><span style='font-size:19px;line-height:150%;font-family:"Calibri Light",sans-serif;'>&nbsp;</span></p>
<p style='margin-top:0cm;margin-right:0cm;margin-bottom:8.0pt;margin-left:0cm;font-size:11.0pt;font-family:"Calibri",sans-serif;line-height:150%;'><span style='font-size:19px;line-height:150%;font-family:"Calibri Light",sans-serif;'>3. Frecuencia del seguimiento:</span></p>
<p style='margin-top:0cm;margin-right:0cm;margin-bottom:8.0pt;margin-left:0cm;font-size:11.0pt;font-family:"Calibri",sans-serif;line-height:150%;'><span style='font-size:19px;line-height:150%;font-family:"Calibri Light",sans-serif;'>Indicar la frecuencia con la que se realizar&aacute; el seguimiento del plan de acci&oacute;n:</span></p>
<ol start="1" style="list-style-type: upper-alpha;">
    <li><span style='line-height:150%;font-family:"Calibri Light",sans-serif;text-decoration:${n.frecuencia_seguimiento=="Diaria"?"underline":"none"};'>Diaria</span></li>
    <li><span style='line-height:150%;font-family:"Calibri Light",sans-serif;text-decoration:${n.frecuencia_seguimiento=="Semanal"?"underline":"none"};'>Semanal</span></li>
    <li><span style='line-height:150%;font-family:"Calibri Light",sans-serif;text-decoration:${n.frecuencia_seguimiento=="Quincenal"?"underline":"none"};'>Quincenal</span></li>
    <li><span style='line-height:150%;font-family:"Calibri Light",sans-serif;text-decoration:${n.frecuencia_seguimiento=="Mensual"?"underline":"none"};'>Mensual</span></li>
    <li><span style='line-height:150%;font-family:"Calibri Light",sans-serif;'>Otro: ${n.frecuencia_seguimiento_otro}</span></li>
</ol>
<p style='margin-top:0cm;margin-right:0cm;margin-bottom:8.0pt;margin-left:0cm;font-size:11.0pt;font-family:"Calibri",sans-serif;line-height:150%;'><span style='font-size:19px;line-height:150%;font-family:"Calibri Light",sans-serif;'>4. Instrumentos de evaluaci&oacute;n:</span></p>
<p style='margin-top:0cm;margin-right:0cm;margin-bottom:8.0pt;margin-left:0cm;font-size:11.0pt;font-family:"Calibri",sans-serif;line-height:150%;'><span style='font-size:19px;line-height:150%;font-family:"Calibri Light",sans-serif;'>(Especificar los instrumentos que se utilizar&aacute;n para evaluar el progreso del estudiante, incluyendo):</span></p>
<ol start="1" style="list-style-type: upper-alpha;">
    <li><span style='line-height:150%;font-family:"Calibri Light",sans-serif;text-decoration: ${n.instrumento_evaluacion.includes("Observaci\xF3n directa")?"underline":"none"};'>Observaci\xF3n directa</span></li>
    <li><span style='line-height:150%;font-family:"Calibri Light",sans-serif;text-decoration: ${n.instrumento_evaluacion.includes("Registros de comportamiento")?"underline":"none"};'>Registros de comportamiento</span></li>
    <li><span style='line-height:150%;font-family:"Calibri Light",sans-serif;text-decoration: ${n.instrumento_evaluacion.includes("Escalas de evaluaci\xF3n de emociones")?"underline":"none"};'>Escalas de evaluaci&oacute;n de emociones</span></li>
    <li><span style='line-height:150%;font-family:"Calibri Light",sans-serif;text-decoration: ${n.instrumento_evaluacion.includes("Entrevistas al estudiante")?"underline":"none"};'>Entrevistas al estudiante</span></li>
    <li><span style='line-height:150%;font-family:"Calibri Light",sans-serif;text-decoration: ${n.instrumento_evaluacion.includes("Entrevistas a los padres o tutores")?"underline":"none"};'>Entrevistas a los padres o tutores</span></li>
    <li><span style='line-height:150%;font-family:"Calibri Light",sans-serif;text-decoration: ${n.instrumento_evaluacion.includes("Informes de los profesores")?"underline":"none"};'>Informes de los profesores</span></li>
    <li><span style='line-height:150%;font-family:"Calibri Light",sans-serif;'>Otros: ${n.instrumento_evaluacion_otros}</span></li>
</ol>
<p style='margin-top:0cm;margin-right:0cm;margin-bottom:8.0pt;margin-left:0cm;font-size:11.0pt;font-family:"Calibri",sans-serif;line-height:150%;'><span style='font-size:19px;line-height:150%;font-family:"Calibri Light",sans-serif;'>Observaciones adicionales:</span></p>
<p style='margin-top:0cm;margin-right:0cm;margin-bottom:8.0pt;margin-left:0cm;font-size:11.0pt;font-family:"Calibri",sans-serif;line-height:150%;'><span style='font-size:19px;line-height:150%;font-family:"Calibri Light",sans-serif;'>Incluir cualquier otra informaci&oacute;n relevante que no se haya incluido en los apartados anteriores, como:</span></p>
<p style='margin-top:0cm;margin-right:0cm;margin-bottom:8.0pt;margin-left:0cm;font-size:11.0pt;font-family:"Calibri",sans-serif;line-height:150%;'><span style='font-size:19px;line-height:150%;font-family:"Calibri Light",sans-serif;'>Historial de desregulaciones emocionales del estudiante:</span></p>
<p style='margin-top:0cm;margin-right:0cm;margin-bottom:8.0pt;margin-left:0cm;font-size:11.0pt;font-family:"Calibri",sans-serif;line-height:150%;'><span style='font-size:19px;line-height:150%;font-family:"Calibri Light",sans-serif;'>
${n.historial_desregulaciones}
</span></p>
<p style='margin-top:0cm;margin-right:0cm;margin-bottom:8.0pt;margin-left:0cm;font-size:11.0pt;font-family:"Calibri",sans-serif;line-height:150%;'><span style='font-size:19px;line-height:150%;font-family:"Calibri Light",sans-serif;'>Factores de riesgo asociados a la desregulaci&oacute;n:</span></p>
<p style='margin-top:0cm;margin-right:0cm;margin-bottom:8.0pt;margin-left:0cm;font-size:11.0pt;font-family:"Calibri",sans-serif;line-height:150%;'><span style='font-size:19px;line-height:150%;font-family:"Calibri Light",sans-serif;'>
${n.factores_riesgo}
</span></p>
<p style='margin-top:0cm;margin-right:0cm;margin-bottom:8.0pt;margin-left:0cm;font-size:11.0pt;font-family:"Calibri",sans-serif;line-height:150%;'><span style='font-size:19px;line-height:150%;font-family:"Calibri Light",sans-serif;'>Necesidades espec&iacute;ficas del estudiante:</span></p>
<p style='margin-top:0cm;margin-right:0cm;margin-bottom:8.0pt;margin-left:0cm;font-size:11.0pt;font-family:"Calibri",sans-serif;line-height:150%;'><span style='font-size:19px;line-height:150%;font-family:"Calibri Light",sans-serif;'>
${n.necesidades_especificas}
</span></p>
<p style='margin-top:0cm;margin-right:0cm;margin-bottom:8.0pt;margin-left:0cm;font-size:11.0pt;font-family:"Calibri",sans-serif;line-height:150%;'><span style='font-size:19px;line-height:150%;font-family:"Calibri Light",sans-serif;'>&nbsp;</span></p>
<p style='margin-top:0cm;margin-right:0cm;margin-bottom:8.0pt;margin-left:0cm;font-size:11.0pt;font-family:"Calibri",sans-serif;line-height:150%;'><span style='font-size:19px;line-height:150%;font-family:"Calibri Light",sans-serif;'>Recursos disponibles en la instituci&oacute;n educativa:</span></p>
<p style='margin-top:0cm;margin-right:0cm;margin-bottom:8.0pt;margin-left:0cm;font-size:11.0pt;font-family:"Calibri",sans-serif;line-height:150%;'><span style='font-size:19px;line-height:150%;font-family:"Calibri Light",sans-serif;'>
${n.recursos_disponibles}
</span></p>
<p style='margin-top:0cm;margin-right:0cm;margin-bottom:8.0pt;margin-left:0cm;font-size:11.0pt;font-family:"Calibri",sans-serif;line-height:150%;'><span style='font-size:19px;line-height:150%;font-family:"Calibri Light",sans-serif;'>&nbsp;</span></p>
<p style='margin-top:0cm;margin-right:0cm;margin-bottom:8.0pt;margin-left:0cm;font-size:11.0pt;font-family:"Calibri",sans-serif;line-height:150%;'><span style='font-size:19px;line-height:150%;font-family:"Calibri Light",sans-serif;'>&nbsp;</span></p>
<p style='margin-top:0cm;margin-right:0cm;margin-bottom:8.0pt;margin-left:0cm;font-size:11.0pt;font-family:"Calibri",sans-serif;line-height:150%;'><span style='font-size:19px;line-height:150%;font-family:"Calibri Light",sans-serif;'>Coordinaci&oacute;n con otros profesionales:</span></p>
<p style='margin-top:0cm;margin-right:0cm;margin-bottom:8.0pt;margin-left:0cm;font-size:11.0pt;font-family:"Calibri",sans-serif;line-height:150%;'><span style='font-size:19px;line-height:150%;font-family:"Calibri Light",sans-serif;'>
${n.coordinacion_profesionales}
</span></p>
<p style='margin-top:0cm;margin-right:0cm;margin-bottom:8.0pt;margin-left:0cm;font-size:11.0pt;font-family:"Calibri",sans-serif;line-height:150%;'><span style='font-size:19px;line-height:150%;font-family:"Calibri Light",sans-serif;'>&nbsp;</span></p>
<p style='margin-top:0cm;margin-right:0cm;margin-bottom:8.0pt;margin-left:0cm;font-size:11.0pt;font-family:"Calibri",sans-serif;line-height:150%;'><span style='font-size:19px;line-height:150%;font-family:"Calibri Light",sans-serif;'>Firma del evaluador:</span></p>
<p style='margin-top:0cm;margin-right:0cm;margin-bottom:8.0pt;margin-left:0cm;font-size:11.0pt;font-family:"Calibri",sans-serif;line-height:150%;'><span style='font-size:19px;line-height:150%;font-family:"Calibri Light",sans-serif;'>Firma del responsable del seguimiento:</span></p>
<p style='margin-top:0cm;margin-right:0cm;margin-bottom:8.0pt;margin-left:0cm;font-size:11.0pt;font-family:"Calibri",sans-serif;line-height:150%;'><span style='font-size:19px;line-height:150%;font-family:"Calibri Light",sans-serif;'>Fecha:</span></p>
<p style='margin-top:0cm;margin-right:0cm;margin-bottom:8.0pt;margin-left:0cm;font-size:11.0pt;font-family:"Calibri",sans-serif;line-height:150%;'><span style='font-size:19px;line-height:150%;font-family:"Calibri Light",sans-serif;'>&nbsp;</span></p>
<p style='margin-top:0cm;margin-right:0cm;margin-bottom:8.0pt;margin-left:0cm;font-size:11.0pt;font-family:"Calibri",sans-serif;line-height:150%;'><span style='font-size:19px;line-height:150%;font-family:"Calibri Light",sans-serif;color:red;'>Notas:</span></p>
<p style='margin-top:0cm;margin-right:0cm;margin-bottom:8.0pt;margin-left:0cm;font-size:11.0pt;font-family:"Calibri",sans-serif;line-height:150%;'><span style='font-size:19px;line-height:150%;font-family:"Calibri Light",sans-serif;color:red;'>Esta ficha de seguimiento individualizada puede ser utilizada como gu&iacute;a para evaluar y abordar la desregulaci&oacute;n emocional en estudiantes.</span></p>
<p style='margin-top:0cm;margin-right:0cm;margin-bottom:8.0pt;margin-left:0cm;font-size:11.0pt;font-family:"Calibri",sans-serif;line-height:150%;'><span style='font-size:19px;line-height:150%;font-family:"Calibri Light",sans-serif;color:red;'>Es importante adaptar la ficha a las necesidades espec&iacute;ficas de cada estudiante y contexto educativo.</span></p>
<p style='margin-top:0cm;margin-right:0cm;margin-bottom:8.0pt;margin-left:0cm;font-size:11.0pt;font-family:"Calibri",sans-serif;line-height:150%;'><span style='font-size:19px;line-height:150%;font-family:"Calibri Light",sans-serif;color:red;'>Se recomienda la participaci&oacute;n de un equipo multidisciplinario en la evaluaci&oacute;n y seguimiento del estudiante.</span></p>
<p style='margin-top:0cm;margin-right:0cm;margin-bottom:8.0pt;margin-left:0cm;font-size:11.0pt;font-family:"Calibri",sans-serif;line-height:150%;'><span style='font-size:19px;line-height:150%;font-family:"Calibri Light",sans-serif;color:red;'>La comunicaci&oacute;n constante con los padres o tutores del estudiante es fundamental para el &eacute;xito del plan de acci&oacute;n</span></p>`}static planAcompanamiento(e,r,n,t,c,a,d){return`<style>
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
                <p>&nbsp; ${e}</p>
            </td>
        </tr>
        <tr>
            <td width="38.435374149659864%" valign="top">
                <p><strong>RUT</strong></p>
            </td>
            <td width="61.564625850340136%" valign="top">
                <p>&nbsp; ${r}</p>
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
                <p>&nbsp; ${t}</p>
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
                <p>&nbsp; ${a}</p>
            </td>
        </tr>
        <tr>
            <td width="38.435374149659864%" valign="top">
                <p><strong>Contacto apoderado/a</strong></p>
            </td>
            <td width="61.564625850340136%" valign="top">
                <p>&nbsp; ${d}</p>
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
`}static fichaPai(e,r,n,t){return`<p><strong>Ficha del Plan de Apoyo Individualizado (PAI) para Estudiantes con TEA </strong></p>
<p><strong>Informaci&oacute;n del Estudiante: </strong></p>
<ul>
<li>Nombre: ${e}</li>
<li>Curso: ${r}</li>
<li>Fecha de Nacimiento: ${n}</li>
<li>Diagn&oacute;stico de TEA:</li>
<li>Fecha de Diagn&oacute;stico: ${t}</li>
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
<p>Esta ficha del PAI proporciona un marco estructurado para planificar, implementar y evaluar el apoyo individualizado para estudiantes con TEA que presentan desregulaci&oacute;n emocional y conductual en el entorno escolar.</p>`}static contratoContigencia(e,r,n,t){return`<p style='margin-top:0cm;margin-right:0cm;margin-bottom:0cm;margin-left:0cm;font-size:11.0pt;font-family:"Calibri",sans-serif;text-align:center;'><strong><span style='font-family:"Calibri Light",sans-serif;'>CONTRATO DE CONTINGENCIAS</span></strong></p>
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
                <p style='margin-top:0cm;margin-right:0cm;margin-bottom:8.0pt;margin-left:0cm;font-size:11.0pt;font-family:"Calibri",sans-serif;text-align:justify;'><span style='font-family:"Calibri Light",sans-serif;'>&nbsp;${e}</span></p>
            </td>
        </tr>
        <tr>
            <td style="width: 212.4pt;border-right: 1pt solid black;border-bottom: 1pt solid black;border-left: 1pt solid black;border-image: initial;border-top: none;padding: 0cm 5.4pt;vertical-align: top;">
                <p style='margin-top:0cm;margin-right:0cm;margin-bottom:8.0pt;margin-left:0cm;font-size:11.0pt;font-family:"Calibri",sans-serif;text-align:justify;'><strong><span style='font-family:"Calibri Light",sans-serif;'>Nombre del apoderado/a</span></strong></p>
            </td>
            <td style="width: 229pt;border-top: none;border-left: none;border-bottom: 1pt solid black;border-right: 1pt solid black;padding: 0cm 5.4pt;vertical-align: top;">
                <p style='margin-top:0cm;margin-right:0cm;margin-bottom:8.0pt;margin-left:0cm;font-size:11.0pt;font-family:"Calibri",sans-serif;text-align:justify;'><span style='font-family:"Calibri Light",sans-serif;'>&nbsp;${r}</span></p>
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
                <p style='margin-top:0cm;margin-right:0cm;margin-bottom:8.0pt;margin-left:0cm;font-size:11.0pt;font-family:"Calibri",sans-serif;text-align:justify;'><span style='font-family:"Calibri Light",sans-serif;'>&nbsp;${t}</span></p>
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
</table>`}static certificadoEmpleador(e,r,n,t){return`<p style='margin-top:0cm;margin-right:0cm;margin-bottom:0cm;margin-left:0cm;font-size:11.0pt;font-family:"Calibri",sans-serif;text-align:center;'><strong><span style='font-family:"Calibri Light",sans-serif;'>CERTIFICADO</span></strong></p>
<p style='margin-top:0cm;margin-right:0cm;margin-bottom:8.0pt;margin-left:0cm;font-size:11.0pt;font-family:"Calibri",sans-serif;text-align:center;'><strong><span style='font-family:"Calibri Light",sans-serif;'>Aplicaci&oacute;n del protocolo integral para la gesti&oacute;n de la desregulaci&oacute;n emocional y/o conductual</span></strong></p>
<table style="width: 4.4e+2pt;border-collapse:collapse;border:none;">
    <tbody>
        <tr>
            <td style="width: 148.6pt;border: 1pt solid rgb(142, 170, 219);background: rgb(217, 226, 243);padding: 0cm 5.4pt;vertical-align: top;">
                <p style='margin-top:0cm;margin-right:0cm;margin-bottom:0cm;margin-left:0cm;font-size:11.0pt;font-family:"Calibri",sans-serif;text-align:justify;line-height:  normal;'><span style='font-family:"Calibri Light",sans-serif;color:black;'>NOMBRE DEL ESTUDIANTE</span></p>
            </td>
            <td style="width: 292.8pt;border-top: 1pt solid rgb(142, 170, 219);border-right: 1pt solid rgb(142, 170, 219);border-bottom: 1pt solid rgb(142, 170, 219);border-image: initial;border-left: none;background: rgb(217, 226, 243);padding: 0cm 5.4pt;vertical-align: top;">
                <p style='margin-top:0cm;margin-right:0cm;margin-bottom:0cm;margin-left:0cm;font-size:11.0pt;font-family:"Calibri",sans-serif;text-align:justify;line-height:  normal;'><span style='font-family:"Calibri Light",sans-serif;'>&nbsp;${e}</span></p>
            </td>
        </tr>
        <tr>
            <td style="width: 148.6pt;border-right: 1pt solid rgb(142, 170, 219);border-bottom: 1pt solid rgb(142, 170, 219);border-left: 1pt solid rgb(142, 170, 219);border-image: initial;border-top: none;padding: 0cm 5.4pt;vertical-align: top;">
                <p style='margin-top:0cm;margin-right:0cm;margin-bottom:0cm;margin-left:0cm;font-size:11.0pt;font-family:"Calibri",sans-serif;text-align:justify;line-height:  normal;'><span style='font-family:"Calibri Light",sans-serif;'>CURSO&nbsp;</span></p>
            </td>
            <td style="width: 292.8pt;border-top: none;border-left: none;border-bottom: 1pt solid rgb(142, 170, 219);border-right: 1pt solid rgb(142, 170, 219);padding: 0cm 5.4pt;vertical-align: top;">
                <p style='margin-top:0cm;margin-right:0cm;margin-bottom:0cm;margin-left:0cm;font-size:11.0pt;font-family:"Calibri",sans-serif;text-align:justify;line-height:  normal;'><span style='font-family:"Calibri Light",sans-serif;'>&nbsp;${r}</span></p>
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
                <p style='margin-top:0cm;margin-right:0cm;margin-bottom:0cm;margin-left:0cm;font-size:11.0pt;font-family:"Calibri",sans-serif;text-align:justify;line-height:  normal;'><span style='font-family:"Calibri Light",sans-serif;'>&nbsp;${t}</span></p>
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
</table>`}static autorizacionAbordajeDec(e,r,n,t){return`<p style='margin-top:0cm;margin-right:0cm;margin-bottom:8.0pt;margin-left:0cm;font-size:11.0pt;font-family:"Calibri",sans-serif;text-align:center;'><strong><span style='font-size:19px;line-height:107%;font-family:"Calibri Light",sans-serif;'>AUTORIZACI&Oacute;N</span></strong></p>
<p style='margin-top:0cm;margin-right:0cm;margin-bottom:8.0pt;margin-left:0cm;font-size:11.0pt;font-family:"Calibri",sans-serif;text-align:center;'><strong><span style='font-size:19px;line-height:107%;font-family:"Calibri Light",sans-serif;'>Aplicaci&oacute;n del protocolo integral para la gesti&oacute;n de la desregulaci&oacute;n emocional y/o conductual</span></strong></p>
<p style='margin-top:0cm;margin-right:0cm;margin-bottom:8.0pt;margin-left:0cm;font-size:11.0pt;font-family:"Calibri",sans-serif;text-align:center;'><strong><span style='font-size:19px;line-height:107%;font-family:"Calibri Light",sans-serif;'>&nbsp;</span></strong></p>
<p style='margin-top:0cm;margin-right:0cm;margin-bottom:8.0pt;margin-left:0cm;font-size:11.0pt;font-family:"Calibri",sans-serif;text-align:justify;'><span style='font-size:19px;line-height:107%;font-family:"Calibri Light",sans-serif;'>Yo ${e}, RUT:&nbsp; ${r}</span></p>
<p style='margin-top:0cm;margin-right:0cm;margin-bottom:8.0pt;margin-left:0cm;font-size:11.0pt;font-family:"Calibri",sans-serif;text-align:justify;'><span style='font-size:19px;line-height:107%;font-family:"Calibri Light",sans-serif;'>apoderado/a de ${n} estudiante del curso ${t}. Estoy en conocimiento del protocolo integral para la gesti&oacute;n de la desregulaci&oacute;n emocional y/o conductual de estudiantes, por lo cual, autorizo al personal especializado o SOS del establecimiento para que brinde la contenci&oacute;n emocional y f&iacute;sica presente en el protocolo, en caso que mi pupilo presente una desregulaci&oacute;n emocional y/o conductual en el establecimiento.</span></p>
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
</table>`}}const J={name:"StudentsDocuments",props:{student_id:{type:Number,required:!0},student:{type:Object,required:!0}},data(){return{formulario:{evaluador:"",contexto:"",emocion_predominante:"",manifestaciones_fisicas:"",manifestaciones_conductuales:"",duracion:"",intervencion_realizada:"",efectividad_estrategia:"",necesidad_ayuda_externa:"",ayuda_externa:"",medidas_corto_plazo:"",medidas_largo_plazo:"",seguimiento_fecha:"",seguimiento_responsable:"",frecuencia_seguimiento:"",instrumento_evaluacion:"",historial_desregulaciones:"",factores_riesgo:"",necesidades_especificas:"",recursos_disponibles:"",coordinacion_profesionales:""},loading:!1,qeditor:"",fonts:{arial:"Arial",arial_black:"Arial Black",comic_sans:"Comic Sans MS",courier_new:"Courier New",impact:"Impact",lucida_grande:"Lucida Grande",times_new_roman:"Times New Roman",verdana:"Verdana"},toolbar:[[{label:this.$q.lang.editor.align,icon:this.$q.iconSet.editor.align,fixedLabel:!0,list:"only-icons",options:["left","center","right","justify"]},{label:this.$q.lang.editor.align,icon:this.$q.iconSet.editor.align,fixedLabel:!0,options:["left","center","right","justify"]}],["bold","italic","strike","underline","subscript","superscript"],["token","hr","link","custom_btn"],["print","fullscreen"],[{label:this.$q.lang.editor.formatting,icon:this.$q.iconSet.editor.formatting,list:"no-icons",options:["p","h1","h2","h3","h4","h5","h6","code"]},{label:this.$q.lang.editor.fontSize,icon:this.$q.iconSet.editor.fontSize,fixedLabel:!0,fixedIcon:!0,list:"no-icons",options:["size-1","size-2","size-3","size-4","size-5","size-6","size-7"]},{label:this.$q.lang.editor.defaultFont,icon:this.$q.iconSet.editor.font,fixedIcon:!0,list:"no-icons",options:["default_font","arial","arial_black","comic_sans","courier_new","impact","lucida_grande","times_new_roman","verdana"]},"removeFormat"],["quote","unordered","ordered","outdent","indent"],["undo","redo"],["viewsource"]],documentsSelect:["AUTORIZACI\xD3N PARA EL ABORDAJE DEC.","CERTIFICADO PARA EL EMPLEADOR","CONTRATO DE CONTINGENCIAS","FICHA DEL PLAN DE APOYO INDIVIDUALIZADO (PAI) PARA ESTUDIANTES CON TEA","PLAN DE ACOMPA\xD1AMIENTO EMOCIONAL Y CONDUCTUAL","FICHA DE SEGUIMIENTO INDIVIDUALIZADA PARA DESREGULACI\xD3N EMOCIONAL"],documentDialog:!1,documentDialogPdf:!1,iframe:!1,document:{},documents:[],showFomulario:!1,file:null}},mounted(){this.documentsGet()},methods:{onFileChange(s){this.file=s.target.files[0];const e=new FormData;e.append("file",this.file),e.append("document_id",this.document.id),this.$axios.post("documentsUpload",e,{headers:{"Content-Type":"multipart/form-data"}}).then(r=>{this.documentsGet()}).catch(r=>{this.$alert.error(r.response.data.message)})},cargarFirma(s){this.document=s,document.querySelector("#archivo").click()},restoreHtml(){this.showFomulario=!1;const s=j().format("DD/MM/YYYY HH:mm:ss");if(this.document.name==="AUTORIZACI\xD3N PARA EL ABORDAJE DEC."&&(this.document.html=A.autorizacionAbordajeDec(this.student.tutorName,this.student.tutorRut,this.student.name,this.student.course)),this.document.name==="CERTIFICADO PARA EL EMPLEADOR"&&(this.document.html=A.certificadoEmpleador(this.student.name,this.student.tutorName,this.student.course,this.student.tutorRut)),this.document.name==="CONTRATO DE CONTINGENCIAS"&&(this.document.html=A.contratoContigencia(this.student.name,this.student.tutorName,"",s)),this.document.name==="FICHA DEL PLAN DE APOYO INDIVIDUALIZADO (PAI) PARA ESTUDIANTES CON TEA"&&(this.document.html=A.fichaPai(this.student.name,this.student.course,this.student.birthdate,s)),this.document.name==="PLAN DE ACOMPA\xD1AMIENTO EMOCIONAL Y CONDUCTUAL"){let e=0;this.student.birthdate&&(e=j().diff(this.student.birthdate,"years")),this.document.html=A.planAcompanamiento(this.student.name,this.student.rut,e,this.student.course,this.student.tutorName,this.student.phone)}this.document.name==="FICHA DE SEGUIMIENTO INDIVIDUALIZADA PARA DESREGULACI\xD3N EMOCIONAL"&&(this.document.html="",this.formulario={evaluador:"",contexto:"",emocion_predominante:"",manifestaciones_fisicas:"",manifestaciones_conductuales:"",duracion:"",intervencion_realizada:"",efectividad_estrategia:"",necesidad_ayuda_externa:"",ayuda_externa:"",medidas_corto_plazo:"",medidas_largo_plazo:"",seguimiento_fecha:"",seguimiento_responsable:"",frecuencia_seguimiento:"",instrumento_evaluacion:"",historial_desregulaciones:"",factores_riesgo:"",necesidades_especificas:"",recursos_disponibles:"",coordinacion_profesionales:""},this.showFomulario=!0)},documentShowMobile(s){window.open(this.$url+"documents/"+s.codigo+"/show","_blank")},documentShow(s){this.loading=!0,this.$axios.get(`documents/${s.id}/download64`).then(e=>{this.document=e.data,this.documentDialogPdf=!0,this.iframe=`data:application/pdf;base64,${this.document.pdf}`}).catch(e=>{this.$alert.error(e.response.data.message)}).finally(()=>{this.loading=!1})},documentClickEdit(s){this.document=s,this.documentDialog=!0},documentDelete(s){this.$alert.confirm("\xBFEst\xE1 seguro de eliminar este document?").onOk(()=>{this.loading=!0,this.$axios.delete(`documents/${s.id}`).then(e=>{this.$alert.success("Documento eliminado"),this.documentsGet()}).catch(e=>{this.$alert.error(e.response.data.message)}).finally(()=>{this.loading=!1})})},documentOpen(s){this.loading=!0,this.$axios.get(`documents/${s.id}/download`,{responseType:"blob"}).then(e=>{const r=window.URL.createObjectURL(new Blob([e.data],{type:"application/pdf"})),n=window.document.createElement("a");n.href=r,n.setAttribute("download",`${s.description}.pdf`),window.document.body.appendChild(n),n.click(),n.remove(),window.URL.revokeObjectURL(r)}).catch(e=>{this.$alert.error(e.response.data.message)}).finally(()=>{this.loading=!1})},documentFirma(s){const e=s.firma.split("/")[1];this.loading=!0,this.$axios.get(`documents/${s.id}/firma`,{responseType:"blob"}).then(r=>{const n=window.URL.createObjectURL(new Blob([r.data])),t=window.document.createElement("a");t.href=n,t.setAttribute("download",`${e}`),window.document.body.appendChild(t),t.click(),t.remove(),window.URL.revokeObjectURL(n)}).catch(r=>{this.$alert.error(r.response.data.message)}).finally(()=>{this.loading=!1})},documentsGet(){this.loading=!0,this.$axios.get("documents",{params:{student_id:this.student_id}}).then(s=>{this.documents=s.data}).catch(s=>{this.$alert.error(s.response.data.message)}).finally(()=>{this.loading=!1})},documentCreate(){if(this.loading=!0,this.showFomulario){const s=j().format("DD/MM/YYYY HH:mm:ss");this.document.html=A.fichaSeguimiento(this.student.name,s,this.formulario)}this.$axios.post("documents",{student_id:this.student_id,document:this.document}).then(s=>{this.$alert.success("Documento agregado"),this.documentDialog=!1,this.documentsGet()}).catch(s=>{this.$alert.error(s.response.data.message)}).finally(()=>{this.loading=!1})},documentUpdate(){this.loading=!0,this.$axios.put(`documents/${this.document.id}`,this.document).then(s=>{this.$alert.success("Documento actualizado"),this.documentDialog=!1,this.documentsGet()}).catch(s=>{this.$alert.error(s.response.data.message)}).finally(()=>{this.loading=!1})},documentForm(){this.document.id?this.documentUpdate():this.documentCreate()},addDocument(){this.showFomulario=!1,this.documentDialog=!0,this.document={html:""}}}},Y={class:"row items-center"},Z=i("div",{class:"text-h6 text-bold"},"Documentos",-1),W=i("thead",null,[i("tr",null,[i("th",null,"Opciones"),i("th",null,"Fecha"),i("th",null,"Documento"),i("th",null,"Usuario"),i("th",null,"Firma")])],-1),K={class:"text-h6 text-bold"},X={class:"row"},ee={class:"col-12"},te={class:"row"},ie={class:"col-12 col-md-6"},ae=i("label",{class:"text-bold"},"Nombre del Estudiante",-1),ne={class:"col-12 col-md-6"},oe=i("label",{class:"text-bold"},"Contexto",-1),se={class:"col-12 col-md-4"},le=i("label",{class:"text-bold"},"Emoci\xF3n predominante",-1),re={class:"col-12 col-md-4"},de=i("label",{class:"text-bold"},"Manifestaciones fisicas",-1),pe={class:"col-12 col-md-4"},ce=i("label",{class:"text-bold"},"Manifestaciones conductuales",-1),me={class:"col-12 col-md-4"},ge=i("label",{class:"text-bold"},"Indicar duraci\xF3n",-1),ue={class:"col-12 col-md-4"},fe=i("label",{class:"text-bold"},"Estrategia de intervenci\xF3n realizada",-1),be={class:"col-12 col-md-4"},he=i("label",{class:"text-bold"},"Efectividad de la estrategia",-1),ye={class:"col-12 col-md-4"},ve=i("label",{class:"text-bold"},"Necesidad de ayuda externa",-1),Ce={class:"col-12 col-md-4"},_e=i("label",{class:"text-bold"},"Ayuda externa",-1),ze={class:"col-12 col-md-4"},xe=i("label",{class:"text-bold"},"Medidas a corto plazo",-1),we={class:"col-12 col-md-4"},Le=i("label",{class:"text-bold"},"Medidas a largo plazo",-1),Ee={class:"col-12 col-md-4"},Ae=i("label",{class:"text-bold"},"Fecha de seguimiento",-1),Ie={class:"col-12 col-md-4"},De=i("label",{class:"text-bold"},"Responsable del seguimiento",-1),ke={class:"col-12 col-md-4"},Oe=i("label",{class:"text-bold"},"Frecuencia de seguimiento",-1),je={class:"col-12 col-md-4"},Ne=i("label",{class:"text-bold"},"Instrumento de evaluaci\xF3n",-1),Ve={class:"col-12 col-md-4"},qe=i("label",{class:"text-bold"},"Historial de desregulaciones",-1),$e={class:"col-12 col-md-4"},Pe=i("label",{class:"text-bold"},"Factores de riesgo",-1),Se={class:"col-12 col-md-4"},Re=i("label",{class:"text-bold"},"Necesidades espec\xEDficas",-1),Ue={class:"col-12 col-md-4"},Te=i("label",{class:"text-bold"},"Recursos disponibles",-1),Me={class:"col-12 col-md-4"},Fe=i("label",{class:"text-bold"},"Coordinaci\xF3n con otros profesionales",-1),Ge=i("div",{class:"text-h6 text-bold"},"Documento",-1),He={class:"row"},Qe={class:"col-12"},Be=["src"];function Je(s,e,r,n,t,c){return p(),g(z,null,{default:l(()=>[o(y,null,{default:l(()=>[i("div",Y,[Z,o(D),s.$store.user.role=="ADMIN"||s.$store.user.role=="ENCARGADO PIE"||s.$store.user.role=="ADMIN COLEGIO"||s.$store.user.role=="ASISTENTE EDUCATIVO"?(p(),g(h,{key:0,icon:"add_circle_outline",onClick:c.addDocument,label:"Agregar","no-caps":"",color:"indigo",dense:"",size:"10px",loading:t.loading},null,8,["onClick","loading"])):b("",!0)]),o(U,{dense:"","wrap-cells":""},{default:l(()=>[W,i("tbody",null,[(p(!0),I(V,null,N(t.documents,a=>{var d;return p(),I("tr",{key:a.id},[i("td",null,[s.$store.user.role=="ADMIN"||s.$store.user.role=="ENCARGADO PIE"||s.$store.user.role=="ADMIN COLEGIO"?(p(),g(R,{key:0,size:"10px",color:"primary",loading:t.loading,"auto-close":"",class:"q-mr-sm",label:"Opciones","no-caps":""},{default:l(()=>[s.$store.user.role=="ADMIN"||s.$store.user.role=="ENCARGADO PIE"||s.$store.user.role=="ADMIN COLEGIO"?L((p(),g(x,{key:0,clickable:"",onClick:_=>c.documentOpen(a)},{default:l(()=>[v(" > "),o(f,{avatar:""},{default:l(()=>[o(w,{name:"fa-solid fa-file-arrow-down"})]),_:1}),o(f,null,{default:l(()=>[v("Descargar")]),_:1})]),_:2},1032,["onClick"])),[[E]]):b("",!0),L((p(),g(x,{clickable:"",onClick:_=>c.documentShow(a)},{default:l(()=>[o(f,{avatar:""},{default:l(()=>[o(w,{name:"fa-solid fa-eye"})]),_:1}),o(f,null,{default:l(()=>[v("Ver")]),_:1})]),_:2},1032,["onClick"])),[[E]]),L((p(),g(x,{clickable:"",onClick:_=>c.documentDelete(a)},{default:l(()=>[o(f,{avatar:""},{default:l(()=>[o(w,{name:"delete"})]),_:1}),o(f,null,{default:l(()=>[v("Eliminar")]),_:1})]),_:2},1032,["onClick"])),[[E]]),L((p(),g(x,{clickable:"",onClick:_=>c.documentClickEdit(a)},{default:l(()=>[o(f,{avatar:""},{default:l(()=>[o(w,{name:"edit"})]),_:1}),o(f,null,{default:l(()=>[v("Editar")]),_:1})]),_:2},1032,["onClick"])),[[E]]),L((p(),g(x,{clickable:"",onClick:_=>c.cargarFirma(a)},{default:l(()=>[o(f,{avatar:""},{default:l(()=>[o(w,{name:"fa-solid fa-camera-retro"})]),_:1}),o(f,null,{default:l(()=>[v("Subir foto")]),_:1})]),_:2},1032,["onClick"])),[[E]])]),_:2},1032,["loading"])):b("",!0)]),i("td",null,m(s.$filters.formatdMYHMS(a.date)),1),i("td",null,m(a.description),1),i("td",null,m((d=a.user)==null?void 0:d.name),1),i("td",null,[a.firma?(p(),g(h,{key:0,flat:"",dense:"",onClick:_=>c.documentFirma(a),icon:"fa-solid fa-camera-retro",size:"10px",color:"purple",loading:t.loading},null,8,["onClick","loading"])):b("",!0)])])}),128))])]),_:1})]),_:1}),o(q,{modelValue:t.documentDialog,"onUpdate:modelValue":e[56]||(e[56]=a=>t.documentDialog=a),persistent:""},{default:l(()=>[o(z,{style:{width:"750px","max-width":"90vw",height:"90vh","max-height":"90vh"}},{default:l(()=>[o(y,{class:"row items-center q-pb-none"},{default:l(()=>[i("div",K,m(t.document.id?"Editar":"Agregar")+" Documento ",1),o(D),o(h,{icon:"close",flat:"",round:"",dense:"",onClick:e[0]||(e[0]=a=>t.documentDialog=!1)})]),_:1}),o(y,null,{default:l(()=>[o(H,{modelValue:t.document.name,"onUpdate:modelValue":[e[1]||(e[1]=a=>t.document.name=a),c.restoreHtml],options:t.documentsSelect,label:"Seleccionar Documento",outlined:"",dense:""},null,8,["modelValue","options","onUpdate:modelValue"]),o(T,{onSubmit:c.documentForm},{default:l(()=>[i("div",X,[i("div",ee,[t.document.html!==""?(p(),g(B,{key:0,modelValue:t.document.html,"onUpdate:modelValue":e[2]||(e[2]=a=>t.document.html=a),dense:s.$q.screen.lt.md,toolbar:t.toolbar,fonts:t.fonts},null,8,["modelValue","dense","toolbar","fonts"])):b("",!0),t.showFomulario?(p(),g(z,{key:1,flat:"",bordered:""},{default:l(()=>[o(y,{class:"q-pa-xs"},{default:l(()=>[i("div",te,[i("div",ie,[ae,o(u,{modelValue:t.formulario.evaluador,"onUpdate:modelValue":e[3]||(e[3]=a=>t.formulario.evaluador=a),label:"Evaluador",outlined:"",dense:""},null,8,["modelValue"])]),i("div",ne,[oe,o(u,{modelValue:t.formulario.contexto,"onUpdate:modelValue":e[4]||(e[4]=a=>t.formulario.contexto=a),label:"Contexto",outlined:"",dense:""},null,8,["modelValue"])]),i("div",se,[le,o(C,{dense:"",modelValue:t.formulario.emocion_predominante,"onUpdate:modelValue":[e[5]||(e[5]=a=>t.formulario.emocion_predominante=a),e[6]||(e[6]=a=>t.formulario.emocion_predominante_otros="")],options:[{label:"Tristeza",value:"Tristeza"},{label:"Ira",value:"Ira"},{label:"Frustracion",value:"Frustracion"},{label:"Ansiedad",value:"Ansiedad"},{label:"Miedo",value:"Miedo"}],color:"primary"},null,8,["modelValue"]),o(u,{modelValue:t.formulario.emocion_predominante_otros,"onUpdate:modelValue":[e[7]||(e[7]=a=>t.formulario.emocion_predominante_otros=a),e[8]||(e[8]=a=>t.formulario.emocion_predominante="")],placeholder:"Otra",outlined:"",dense:""},null,8,["modelValue"])]),i("div",re,[de,o(C,{dense:"",modelValue:t.formulario.manifestaciones_fisicas,"onUpdate:modelValue":[e[9]||(e[9]=a=>t.formulario.manifestaciones_fisicas=a),e[10]||(e[10]=a=>t.formulario.manifestaciones_fisicas_otros="")],options:[{label:"LLanto",value:"LLanto"},{label:"Temblor",value:"Temblor"},{label:"Sudoraci\xF3n",value:"Sudoraci\xF3n"},{label:"Aumento de la frecuencia cardiaca",value:"Aumento de la frecuencia cardiaca"},{label:"Tensi\xF3n muscular",value:"Tensi\xF3n muscular"},{label:"Rubor facial",value:"Rubor facial"},{label:"Dificultad para respirar",value:"Dificultad para respirar"},{label:"N\xE1useas",value:"N\xE1useas"},{label:"Dolor de cabeza",value:"Dolor de cabeza"}],color:"primary"},null,8,["modelValue"]),o(u,{modelValue:t.formulario.manifestaciones_fisicas_otros,"onUpdate:modelValue":[e[11]||(e[11]=a=>t.formulario.manifestaciones_fisicas_otros=a),e[12]||(e[12]=a=>t.formulario.manifestaciones_fisicas="")],placeholder:"Otra",outlined:"",dense:""},null,8,["modelValue"])]),i("div",pe,[ce,o(C,{dense:"",modelValue:t.formulario.manifestaciones_conductuales,"onUpdate:modelValue":[e[13]||(e[13]=a=>t.formulario.manifestaciones_conductuales=a),e[14]||(e[14]=a=>t.formulario.manifestaciones_conductuales_otros="")],options:[{label:"Agresi\xF3n verbal (insultos, gritos)",value:"Agresi\xF3n verbal (insultos, gritos)"},{label:"Agresi\xF3n f\xEDsica (golpes, patadas)",value:"Agresi\xF3n f\xEDsica (golpes, patadas)"},{label:"Autolesiones",value:"Autolesiones"},{label:"Aislamiento",value:"Aislamiento"},{label:"Llanto inconsolable",value:"Llanto inconsolable"},{label:"Negativa a cooperar",value:"Negativa a cooperar"},{label:"Desobediencia",value:"Desobediencia"},{label:"Comportamiento impulsivo",value:"Comportamiento impulsivo"}],color:"primary"},null,8,["modelValue"]),o(u,{modelValue:t.formulario.manifestaciones_conductuales_otros,"onUpdate:modelValue":[e[15]||(e[15]=a=>t.formulario.manifestaciones_conductuales_otros=a),e[16]||(e[16]=a=>t.formulario.manifestaciones_conductuales="")],placeholder:"Otra",outlined:"",dense:""},null,8,["modelValue"])]),i("div",me,[ge,o(u,{modelValue:t.formulario.duracion,"onUpdate:modelValue":e[17]||(e[17]=a=>t.formulario.duracion=a),label:"Duraci\xF3n",outlined:"",dense:""},null,8,["modelValue"])]),i("div",ue,[fe,o(C,{dense:"",modelValue:t.formulario.intervencion_realizada,"onUpdate:modelValue":[e[18]||(e[18]=a=>t.formulario.intervencion_realizada=a),e[19]||(e[19]=a=>t.formulario.intervencion_realizada_otros="")],options:[{label:"Respiraci\xF3n profunda",value:"Respiraci\xF3n profunda"},{label:"T\xE9cnicas de relajaci\xF3n muscular",value:"T\xE9cnicas de relajaci\xF3n muscular"},{label:"Visualizaci\xF3n",value:"Visualizaci\xF3n"},{label:"Hablar con el estudiante en un tono calmado y tranquilizador",value:"Hablar con el estudiante en un tono calmado y tranquilizador"},{label:"Ofrecer apoyo emocional",value:"Ofrecer apoyo emocional"},{label:"Brindar un espacio seguro y tranquilo",value:"Brindar un espacio seguro y tranquilo"},{label:"Retirar al estudiante del contexto",value:"Retirar al estudiante del contexto"}],color:"primary"},null,8,["modelValue"]),o(u,{modelValue:t.formulario.intervencion_realizada_otros,"onUpdate:modelValue":[e[20]||(e[20]=a=>t.formulario.intervencion_realizada_otros=a),e[21]||(e[21]=a=>t.formulario.intervencion_realizada="")],placeholder:"Otra",outlined:"",dense:""},null,8,["modelValue"])]),i("div",be,[he,o(C,{dense:"",modelValue:t.formulario.efectividad_estrategia,"onUpdate:modelValue":[e[22]||(e[22]=a=>t.formulario.efectividad_estrategia=a),e[23]||(e[23]=a=>t.formulario.efectividad_estrategia_otros="")],options:[{label:"Muy efectiva",value:"Muy efectiva"},{label:"Efectiva",value:"Efectiva"},{label:"Poco efectiva",value:"Poco efectiva"},{label:"Inefectiva",value:"Inefectiva"}],color:"primary"},null,8,["modelValue"]),o(u,{modelValue:t.formulario.efectividad_estrategia_otros,"onUpdate:modelValue":[e[24]||(e[24]=a=>t.formulario.efectividad_estrategia_otros=a),e[25]||(e[25]=a=>t.formulario.efectividad_estrategia="")],placeholder:"Otra",outlined:"",dense:""},null,8,["modelValue"])]),i("div",ye,[ve,o(C,{dense:"",modelValue:t.formulario.necesidad_ayuda_externa,"onUpdate:modelValue":[e[26]||(e[26]=a=>t.formulario.necesidad_ayuda_externa=a),e[27]||(e[27]=a=>t.formulario.ayuda_externa="")],options:[{label:"S\xED",value:"S\xED"},{label:"No",value:"No"}],color:"primary"},null,8,["modelValue"])]),i("div",Ce,[_e,o(C,{dense:"",modelValue:t.formulario.ayuda_externa,"onUpdate:modelValue":[e[28]||(e[28]=a=>t.formulario.ayuda_externa=a),e[29]||(e[29]=a=>t.formulario.ayuda_externa_otros="")],options:[{label:"Contacto con los padres o tutores",value:"Contacto con los padres o tutores"},{label:"Intervenci\xF3n del psic\xF3logo o pedagogo",value:"Intervenci\xF3n del psic\xF3logo o pedagogo"},{label:"Intervenci\xF3n del equipo directivo",value:"Intervenci\xF3n del equipo directivo"},{label:"Asistencia m\xE9dica",value:"Asistencia m\xE9dica"}],color:"primary"},null,8,["modelValue"]),o(u,{modelValue:t.formulario.ayuda_externa_otros,"onUpdate:modelValue":[e[30]||(e[30]=a=>t.formulario.ayuda_externa_otros=a),e[31]||(e[31]=a=>t.formulario.ayuda_externa="")],placeholder:"Otra",outlined:"",dense:""},null,8,["modelValue"])]),i("div",ze,[xe,o(C,{dense:"",modelValue:t.formulario.medidas_corto_plazo,"onUpdate:modelValue":[e[32]||(e[32]=a=>t.formulario.medidas_corto_plazo=a),e[33]||(e[33]=a=>t.formulario.medidas_corto_plazo_otros="")],options:[{label:"Implementaci\xF3n de estrategias de autorregulaci\xF3n emocional",value:"Implementaci\xF3n de estrategias de autorregulaci\xF3n emocional"},{label:"Adaptaciones en el aula",value:"Adaptaciones en el aula"},{label:"Apoyo acad\xE9mico individualizado",value:"Apoyo acad\xE9mico individualizado"},{label:"Refuerzo positivo",value:"Refuerzo positivo"},{label:"Seguimiento individualizado por parte del profesorado u otro profesional",value:"Seguimiento individualizado por parte del profesorado u otro profesional"},{label:"Intervenci\xF3n con la familia",value:"Intervenci\xF3n con la familia"}],color:"primary"},null,8,["modelValue"]),o(u,{modelValue:t.formulario.medidas_corto_plazo_otros,"onUpdate:modelValue":[e[34]||(e[34]=a=>t.formulario.medidas_corto_plazo_otros=a),e[35]||(e[35]=a=>t.formulario.medidas_corto_plazo="")],placeholder:"Otra",outlined:"",dense:""},null,8,["modelValue"])]),i("div",we,[Le,o(C,{dense:"",modelValue:t.formulario.medidas_largo_plazo,"onUpdate:modelValue":[e[36]||(e[36]=a=>t.formulario.medidas_largo_plazo=a),e[37]||(e[37]=a=>t.formulario.medidas_largo_plazo_otros="")],options:[{label:"Terapia individual o grupal",value:"Terapia individual o grupal"},{label:"Evaluaci\xF3n por un profesional de la salud mental",value:"Evaluaci\xF3n por un profesional de la salud mental"},{label:"Intervenci\xF3n psicopedag\xF3gica",value:"Intervenci\xF3n psicopedag\xF3gica"},{label:"Capacitaci\xF3n a los padres o tutores en manejo de emociones",value:"Capacitaci\xF3n a los padres o tutores en manejo de emociones"},{label:"Adaptaciones curriculares",value:"Adaptaciones curriculares"}],color:"primary"},null,8,["modelValue"]),o(u,{modelValue:t.formulario.medidas_largo_plazo_otros,"onUpdate:modelValue":[e[38]||(e[38]=a=>t.formulario.medidas_largo_plazo_otros=a),e[39]||(e[39]=a=>t.formulario.medidas_largo_plazo="")],placeholder:"Otra",outlined:"",dense:""},null,8,["modelValue"])]),i("div",Ee,[Ae,o(u,{modelValue:t.formulario.seguimiento_fecha,"onUpdate:modelValue":e[40]||(e[40]=a=>t.formulario.seguimiento_fecha=a),label:"Fecha de seguimiento",outlined:"",dense:""},null,8,["modelValue"])]),i("div",Ie,[De,o(u,{modelValue:t.formulario.seguimiento_responsable,"onUpdate:modelValue":e[41]||(e[41]=a=>t.formulario.seguimiento_responsable=a),label:"Responsable del seguimiento",outlined:"",dense:""},null,8,["modelValue"])]),i("div",ke,[Oe,o(C,{dense:"",modelValue:t.formulario.frecuencia_seguimiento,"onUpdate:modelValue":[e[42]||(e[42]=a=>t.formulario.frecuencia_seguimiento=a),e[43]||(e[43]=a=>t.formulario.frecuencia_seguimiento_otros="")],options:[{label:"Diaria",value:"Diaria"},{label:"Semanal",value:"Semanal"},{label:"Quincenal",value:"Quincenal"},{label:"Mensual",value:"Mensual"}],color:"primary"},null,8,["modelValue"]),o(u,{modelValue:t.formulario.frecuencia_seguimiento_otros,"onUpdate:modelValue":[e[44]||(e[44]=a=>t.formulario.frecuencia_seguimiento_otros=a),e[45]||(e[45]=a=>t.formulario.frecuencia_seguimiento="")],placeholder:"Otra",outlined:"",dense:""},null,8,["modelValue"])]),i("div",je,[Ne,o(C,{dense:"",modelValue:t.formulario.instrumento_evaluacion,"onUpdate:modelValue":[e[46]||(e[46]=a=>t.formulario.instrumento_evaluacion=a),e[47]||(e[47]=a=>t.formulario.instrumento_evaluacion_otros="")],options:[{label:"Observaci\xF3n directa",value:"Observaci\xF3n directa"},{label:"Registros de comportamiento",value:"Registros de comportamiento"},{label:"Escalas de evaluaci\xF3n de emociones",value:"Escalas de evaluaci\xF3n de emociones"},{label:"Entrevistas al estudiante",value:"Entrevistas al estudiante"},{label:"Entrevistas a los padres o tutores",value:"Entrevistas a los padres o tutores"},{label:"Informes de los profesores",value:"Informes de los profesores"}],color:"primary"},null,8,["modelValue"]),o(u,{modelValue:t.formulario.instrumento_evaluacion_otros,"onUpdate:modelValue":[e[48]||(e[48]=a=>t.formulario.instrumento_evaluacion_otros=a),e[49]||(e[49]=a=>t.formulario.instrumento_evaluacion="")],placeholder:"Otra",outlined:"",dense:""},null,8,["modelValue"])]),i("div",Ve,[qe,o(u,{modelValue:t.formulario.historial_desregulaciones,"onUpdate:modelValue":e[50]||(e[50]=a=>t.formulario.historial_desregulaciones=a),label:"Historial de desregulaciones",outlined:"",dense:""},null,8,["modelValue"])]),i("div",$e,[Pe,o(u,{modelValue:t.formulario.factores_riesgo,"onUpdate:modelValue":e[51]||(e[51]=a=>t.formulario.factores_riesgo=a),label:"Factores de riesgo",outlined:"",dense:""},null,8,["modelValue"])]),i("div",Se,[Re,o(u,{modelValue:t.formulario.necesidades_especificas,"onUpdate:modelValue":e[52]||(e[52]=a=>t.formulario.necesidades_especificas=a),label:"Necesidades espec\xEDficas",outlined:"",dense:""},null,8,["modelValue"])]),i("div",Ue,[Te,o(u,{modelValue:t.formulario.recursos_disponibles,"onUpdate:modelValue":e[53]||(e[53]=a=>t.formulario.recursos_disponibles=a),label:"Recursos disponibles",outlined:"",dense:""},null,8,["modelValue"])]),i("div",Me,[Fe,o(u,{modelValue:t.formulario.coordinacion_profesionales,"onUpdate:modelValue":e[54]||(e[54]=a=>t.formulario.coordinacion_profesionales=a),label:"Coordinaci\xF3n con otros profesionales",outlined:"",dense:""},null,8,["modelValue"])])])]),_:1})]),_:1})):b("",!0)])]),o(S,{align:"right"},{default:l(()=>[o(h,{label:"Cancelar",color:"negative",onClick:e[55]||(e[55]=a=>t.documentDialog=!1),loading:t.loading,icon:"close","no-caps":""},null,8,["loading"]),t.document.html!==""||t.showFomulario?(p(),g(h,{key:0,label:t.document.id?"Editar":"Agregar",color:t.document.id?"orange":"green",type:"submit",loading:t.loading,icon:t.document.id?"edit":"save","no-caps":""},null,8,["label","color","loading","icon"])):b("",!0)]),_:1})]),_:1},8,["onSubmit"])]),_:1})]),_:1})]),_:1},8,["modelValue"]),o(q,{modelValue:t.documentDialogPdf,"onUpdate:modelValue":e[58]||(e[58]=a=>t.documentDialogPdf=a)},{default:l(()=>[o(z,{style:{width:"750px","max-width":"90vw"}},{default:l(()=>[o(y,{class:"row items-center q-pb-none"},{default:l(()=>[Ge,o(D),o(h,{icon:"close",flat:"",round:"",dense:"",onClick:e[57]||(e[57]=a=>t.documentDialogPdf=!1)})]),_:1}),o(y,null,{default:l(()=>[i("div",He,[i("div",Qe,[i("iframe",{src:t.iframe,width:"100%",height:"500px"},null,8,Be)])])]),_:1})]),_:1})]),_:1},8,["modelValue"]),i("input",{type:"file",id:"archivo",class:"file",onChange:e[59]||(e[59]=(...a)=>c.onFileChange&&c.onFileChange(...a)),style:{display:"none"}},null,32)]),_:1})}var Ye=P(J,[["render",Je]]);const Ze={name:"StudentsHistory",components:{StudentsDocuments:Ye},data(){return{student_id:this.$route.params.id,student:{},process:0,textProcess:"",loading:!1,historyDialog:!1,history:{description:""}}},mounted(){this.student_id=this.$route.params.id,this.studentGet()},methods:{deleteHistory(s){this.$alert.confirm("\xBFEst\xE1 seguro de eliminar este historial?").onOk(()=>{this.loading=!0,this.$axios.delete(`history/${s}`).then(e=>{const r=this.student.histories.findIndex(n=>n.id===s);this.student.histories.splice(r,1)}).catch(e=>{this.$alert.error(e.response.data.message)}).finally(()=>{this.loading=!1})})},sendWhatsapp(s){window.open(`https://api.whatsapp.com/send?phone=+56${this.student.phone}&text=${s.description}`)},historyClick(s){this.history={...s},this.historyDialog=!0},historyForm(){this.loading=!0,this.history.student_id=this.student_id,this.history.id?this.$axios.put(`history/${this.history.id}`,this.history).then(s=>{const e=this.student.histories.findIndex(r=>r.id===this.history.id);this.student.histories.splice(e,1,s.data),this.historyDialog=!1}).catch(s=>{this.$alert.error(s.response.data.message)}).finally(()=>{this.loading=!1}):this.$axios.post("history",this.history).then(s=>{this.student.histories.unshift(s.data),this.historyDialog=!1}).catch(s=>{this.$alert.error(s.response.data.message)}).finally(()=>{this.loading=!1})},addHistory(){this.historyDialog=!0,this.history.id=void 0,this.history.description=""},handleDrop(s){s.preventDefault();const e=s.dataTransfer.files;this.processFiles(e)},processFiles(s){this.fileUpload(s)},uploadFile(){this.$refs.fileInput.click()},fileUpload(){const s=new FormData;s.append("file",this.$refs.fileInput.files[0]),s.append("student_id",this.student_id);const e={onUploadProgress:r=>{const n=Math.round(r.loaded*100/r.total);this.textProcess=n+"% completado",this.process=n/100}};this.$axios.post(`students/${this.student_id}/diagnoses`,s,e).then(r=>{this.student.diagnoses.unshift(r.data)}).catch(r=>{this.$alert.error(r.response.data.message)}).finally(()=>{this.$refs.fileInput.value="",this.textProcess=""})},studentGet(){this.$axios.get(`students/${this.student_id}`).then(s=>{this.student=s.data}).catch(s=>{this.$alert.error(s.response.data.message)})},downloadFile(s){this.$q.dialog({title:"Ingrese rut del estudiante",message:"Ingrese el rut del estudiante para subir el diagn\xF3stico",prompt:{model:"",type:"text",required:!0,rules:[e=>!!e||"Campo requerido"]},cancel:!0,persistent:!0}).onOk(e=>{if(e!==this.student.rut.slice(0,4))return this.$alert.error("El rut ingresado no coincide con el del estudiante"),!1;this.loading=!0,this.$axios.get(`diagnoses/${s.id}/download`,{responseType:"blob"}).then(r=>{const n=window.URL.createObjectURL(new Blob([r.data],{type:r.headers["content-type"]})),t=document.createElement("a");t.href=n,t.setAttribute("download",s.name),document.body.appendChild(t),t.click(),t.remove(),window.URL.revokeObjectURL(n)}).catch(r=>{this.$alert.error(r.response.data.message)}).finally(()=>{this.loading=!1})})},deleteDiagnosis(s){this.$alert.confirm("\xBFEst\xE1 seguro de eliminar este diagn\xF3stico?").onOk(()=>{this.loading=!0,this.$axios.delete(`diagnoses/${s}`).then(e=>{const r=this.student.diagnoses.findIndex(n=>n.id===s);this.student.diagnoses.splice(r,1)}).catch(e=>{this.$alert.error(e.response.data.message)}).finally(()=>{this.loading=!1})})}}},We={class:"row"},Ke={class:"col-12"},Xe={class:"row"},et={class:"col-12 col-md-8"},tt={class:"row"},it={class:"col-6 col-md-4"},at=i("label",{class:"text-bold"},"Rut",-1),nt={class:"col-6 col-md-8"},ot=i("label",{class:"text-bold"},"Nombre Completo",-1),st={class:"col-6 col-md-4"},lt=i("label",{class:"text-bold"},"Rut Tutor",-1),rt={class:"col-6 col-md-8"},dt=i("label",{class:"text-bold"},"Nombre Tutor",-1),pt={class:"col-12 col-md-4"},ct=i("div",{class:"text-bold text-center"},"Fotografia",-1),mt={class:"flex flex-center"},gt={class:"col-6 col-md-3"},ut=i("label",{class:"text-bold"},"Fecha de Nacimiento",-1),ft={class:"col-6 col-md-3"},bt=i("label",{class:"text-bold"},"A\xF1o ingreso PIE",-1),ht={class:"col-6 col-md-3"},yt=i("label",{class:"text-bold"},"Curso",-1),vt={class:"col-6 col-md-3"},Ct=i("label",{class:"text-bold"},"A\xF1o",-1),_t={class:"col-12"},zt=i("label",{class:"text-bold"},"Direcci\xF3n",-1),xt={class:"col-6 col-md-3"},wt=i("label",{class:"text-bold"},"Celular",-1),Lt={class:"col-6 col-md-3"},Et=i("label",{class:"text-bold"},"email",-1),At={class:"col-6 col-md-3"},It=i("label",{class:"text-bold"},"Sexo",-1),Dt={class:"row"},kt={class:"col-12 col-md-8"},Ot={class:"row"},jt={class:"col-12"},Nt={class:"row items-center"},Vt=i("div",{class:"text-h6 text-bold"},"Antecedentes",-1),qt=i("thead",null,[i("tr",null,[i("th",null,"Opciones"),i("th",null,"Fecha"),i("th",null,"Descripci\xF3n"),i("th",null,"Usuario")])],-1),$t={class:"col-12"},Pt={class:"col-12 col-md-4"},St=i("div",{class:"text-h6"},"Diagn\xF3sticos",-1),Rt=i("div",null,"Ac\xE1 suba sus archivos",-1),Ut={class:"q-mt-md"},Tt={class:"text-h6 text-bold"};function Mt(s,e,r,n,t,c){const a=F("StudentsDocuments");return p(),g(Q,{class:"bg-grey-3 q-pa-md"},{default:l(()=>[o(z,{class:"q-mb-md"},{default:l(()=>[o(y,null,{default:l(()=>[i("div",We,[i("div",Ke,[i("div",Xe,[i("div",et,[i("div",tt,[i("div",it,[at,i("div",null,m(t.student.rut),1)]),i("div",nt,[ot,i("div",null,m(t.student.name),1)]),i("div",st,[lt,i("div",null,m(t.student.tutorRut),1)]),i("div",rt,[dt,i("div",null,m(t.student.tutorName),1)])])]),i("div",pt,[ct,i("div",mt,[o(M,{src:s.$url+"../students/"+t.student.foto,style:{width:"100px",height:"100px"}},null,8,["src"])])])])]),i("div",gt,[ut,i("div",null,m(t.student.birthdate),1)]),i("div",ft,[bt,i("div",null,m(t.student.year_PIE),1)]),i("div",ht,[yt,i("div",null,m(t.student.course),1)]),i("div",vt,[Ct,i("div",null,m(t.student.year),1)]),i("div",_t,[zt,i("div",null,m(t.student.address),1)]),i("div",xt,[wt,i("div",null,m(t.student.phone),1)]),i("div",Lt,[Et,i("div",null,m(t.student.email),1)]),i("div",At,[It,i("div",null,m(t.student.sex==="M"?"Masculino":"Femenino"),1)])])]),_:1})]),_:1}),i("div",Dt,[i("div",kt,[i("div",Ot,[i("div",jt,[o(z,null,{default:l(()=>[o(y,null,{default:l(()=>[i("div",Nt,[Vt,o(D),s.$store.user.role=="ADMIN COLEGIO"||s.$store.user.role=="ADMIN"||s.$store.user.role=="ASISTENTE EDUCATIVO"||s.$store.user.role=="ENCARGADO PIE"?(p(),g(h,{key:0,icon:"add_circle_outline",onClick:c.addHistory,label:"Agregar registro","no-caps":"",color:"green",dense:"",size:"10px"},null,8,["onClick"])):b("",!0)]),o(U,{dense:"","wrap-cells":""},{default:l(()=>[qt,i("tbody",null,[(p(!0),I(V,null,N(t.student.histories,d=>{var _;return p(),I("tr",{key:d.id},[i("td",null,[s.$store.user.role=="ADMIN"||s.$store.user.role=="ADMIN COLEGIO"||s.$store.user.role=="ENCARGADO PIE"?(p(),g(R,{key:0,size:"10px",color:"positive",loading:t.loading,"auto-close":"",class:"q-mr-sm",label:"Opciones","no-caps":""},{default:l(()=>[s.$store.user.role=="ADMIN"||s.$store.user.role=="ADMIN COLEGIO"?L((p(),g(x,{key:0,clickable:"",onClick:$=>c.deleteHistory(d)},{default:l(()=>[o(f,{avatar:""},{default:l(()=>[o(w,{name:"delete"})]),_:1}),o(f,null,{default:l(()=>[v("Eliminar")]),_:1})]),_:2},1032,["onClick"])),[[E]]):b("",!0),s.$store.user.role=="ADMIN"||s.$store.user.role=="ADMIN COLEGIO"?L((p(),g(x,{key:1,clickable:"",onClick:$=>c.historyClick(d)},{default:l(()=>[o(f,{avatar:""},{default:l(()=>[o(w,{name:"edit"})]),_:1}),o(f,null,{default:l(()=>[v("Editar")]),_:1})]),_:2},1032,["onClick"])),[[E]]):b("",!0),s.$store.user.role=="ADMIN"||s.$store.user.role=="ADMIN COLEGIO"?L((p(),g(x,{key:2,clickable:"",onClick:$=>c.sendWhatsapp(d)},{default:l(()=>[o(f,{avatar:""},{default:l(()=>[o(w,{name:"send"})]),_:1}),o(f,null,{default:l(()=>[v("Enviar por Whatsapp")]),_:1})]),_:2},1032,["onClick"])),[[E]]):b("",!0)]),_:2},1032,["loading"])):b("",!0)]),i("td",null,m(s.$filters.formatdMYHMS(d.created_at)),1),i("td",null,m(d.description),1),i("td",null,m((_=d.user)==null?void 0:_.name),1)])}),128))])]),_:1})]),_:1})]),_:1})]),i("div",$t,[o(a,{student_id:parseInt(t.student_id),student:t.student},null,8,["student_id","student"])])])]),i("div",Pt,[o(z,null,{default:l(()=>[o(y,null,{default:l(()=>[St,s.$store.user.role=="ADMIN"||s.$store.user.role=="ENCARGADO PIE"||s.$store.user.role=="ADMIN COLEGIO"?(p(),I("div",{key:0,class:"text-center border-dashed cursor-pointer",onClick:e[0]||(e[0]=(...d)=>c.uploadFile&&c.uploadFile(...d)),onDragenter:e[1]||(e[1]=k(()=>{},["prevent"])),onDragover:e[2]||(e[2]=k(()=>{},["prevent"])),onDragleave:e[3]||(e[3]=k(()=>{},["prevent"])),onDrop:e[4]||(e[4]=k((...d)=>c.handleDrop&&c.handleDrop(...d),["prevent"]))},[o(w,{name:"cloud_upload",size:"70px"}),Rt],32)):b("",!0),i("input",{type:"file",class:"hidden",ref:"fileInput",onChange:e[5]||(e[5]=(...d)=>c.fileUpload&&c.fileUpload(...d)),accept:".pdf"},null,544),i("div",Ut,[o(z,null,{default:l(()=>[o(y,{class:"q-pa-none"},{default:l(()=>[t.textProcess!==""?(p(),g(x,{key:0},{default:l(()=>[o(f,null,{default:l(()=>[o(O,null,{default:l(()=>[v(m(t.textProcess),1)]),_:1}),o(G,{value:t.process,color:t.process===100?"green":"primary"},null,8,["value","color"])]),_:1}),o(f,{side:""},{default:l(()=>[o(h,{flat:"",icon:"picture_as_pdf"})]),_:1})]),_:1})):b("",!0)]),_:1})]),_:1}),(p(!0),I(V,null,N(t.student.diagnoses,d=>(p(),g(z,{key:d.id,flat:"",bordered:"",class:"q-ma-sm"},{default:l(()=>[o(y,{class:"q-pa-none bg-grey-3"},{default:l(()=>[o(x,null,{default:l(()=>[o(f,{clickable:""},{default:l(()=>[o(O,{class:"text-bold"},{default:l(()=>[v(m(s.$filters.formatdMY(d.created_at))+" ",1),o(h,{flat:"",icon:"fa-regular fa-file-pdf",dense:"",class:"q-pa-none",color:"red",size:"10px",onClick:_=>c.downloadFile(d),loading:t.loading},null,8,["onClick","loading"])]),_:2},1024),o(O,{class:"text-capitalize text-caption"},{default:l(()=>[v(m(d.name),1)]),_:2},1024)]),_:2},1024),o(f,{side:""},{default:l(()=>[s.$store.user.role=="ADMIN"||s.$store.user.role=="ADMIN COLEGIO"?(p(),g(h,{key:0,flat:"",icon:"delete",onClick:_=>c.deleteDiagnosis(d.id),color:"red",loading:t.loading},null,8,["onClick","loading"])):b("",!0)]),_:2},1024)]),_:2},1024)]),_:2},1024)]),_:2},1024))),128))])]),_:1})]),_:1})])]),o(q,{modelValue:t.historyDialog,"onUpdate:modelValue":e[9]||(e[9]=d=>t.historyDialog=d)},{default:l(()=>[o(z,{style:{width:"400px","max-width":"90vw"}},{default:l(()=>[o(y,{class:"row items-center q-pb-none"},{default:l(()=>[i("div",Tt,m(t.history.id?"Editar":"Agregar")+" Registro Anecd\xF3tico ",1),o(D),o(h,{flat:"",icon:"close",onClick:e[6]||(e[6]=d=>t.historyDialog=!1)})]),_:1}),o(y,null,{default:l(()=>[o(T,{class:"q-gutter-md",onSubmit:c.historyForm},{default:l(()=>[o(u,{type:"textarea",modelValue:t.history.description,"onUpdate:modelValue":e[7]||(e[7]=d=>t.history.description=d),label:"Descripci\xF3n",outlined:"",rules:[d=>!!d||"Campo requerido"]},null,8,["modelValue","rules"]),o(S,{align:"right"},{default:l(()=>[o(h,{label:"Cancelar",color:"red",onClick:e[8]||(e[8]=d=>t.historyDialog=!1),"no-caps":"",icon:"close",loading:t.loading},null,8,["loading"]),t.history.id===void 0?(p(),g(h,{key:0,label:"Guardar",color:"green",type:"submit","no-caps":"",icon:"save",loading:t.loading},null,8,["loading"])):(p(),g(h,{key:1,label:"Modificar",color:"orange",type:"submit","no-caps":"",icon:"save",loading:t.loading},null,8,["loading"]))]),_:1})]),_:1},8,["onSubmit"])]),_:1})]),_:1})]),_:1},8,["modelValue"])]),_:1})}var ti=P(Ze,[["render",Mt]]);export{ti as default};
