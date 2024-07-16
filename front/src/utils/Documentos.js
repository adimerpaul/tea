export class Documentos {
  static fichaSeguimiento( student, date, formulario ) {
    return `<p style='margin-top:0cm;margin-right:0cm;margin-bottom:8.0pt;margin-left:0cm;font-size:11.0pt;font-family:"Calibri",sans-serif;text-align:center;line-height:150%;'><span style='font-size:19px;line-height:150%;font-family:"Calibri Light",sans-serif;'>FICHA DE SEGUIMIENTO INDIVIDUALIZADA</span></p>
<p style='margin-top:0cm;margin-right:0cm;margin-bottom:8.0pt;margin-left:0cm;font-size:11.0pt;font-family:"Calibri",sans-serif;text-align:center;line-height:150%;'><span style='font-size:19px;line-height:150%;font-family:"Calibri Light",sans-serif;'>&nbsp;PARA DESREGULACI&Oacute;N EMOCIONAL</span></p>
<p style='margin-top:0cm;margin-right:0cm;margin-bottom:8.0pt;margin-left:0cm;font-size:11.0pt;font-family:"Calibri",sans-serif;line-height:150%;'><span style='font-size:19px;line-height:150%;font-family:"Calibri Light",sans-serif;'>&nbsp;</span></p>
<p style='margin-top:0cm;margin-right:0cm;margin-bottom:8.0pt;margin-left:0cm;font-size:11.0pt;font-family:"Calibri",sans-serif;line-height:150%;'><span style='font-size:19px;line-height:150%;font-family:"Calibri Light",sans-serif;'>Estudiante: ${student} </span></p>
<p style='margin-top:0cm;margin-right:0cm;margin-bottom:8.0pt;margin-left:0cm;font-size:11.0pt;font-family:"Calibri",sans-serif;line-height:150%;'><span style='font-size:19px;line-height:150%;font-family:"Calibri Light",sans-serif;'>Fecha: ${date}</span></p>
<p style='margin-top:0cm;margin-right:0cm;margin-bottom:8.0pt;margin-left:0cm;font-size:11.0pt;font-family:"Calibri",sans-serif;line-height:150%;'><span style='font-size:19px;line-height:150%;font-family:"Calibri Light",sans-serif;'>Evaluador: ${formulario.evaluador}.</span></p>
<p style='margin-top:0cm;margin-right:0cm;margin-bottom:8.0pt;margin-left:0cm;font-size:11.0pt;font-family:"Calibri",sans-serif;line-height:150%;'><span style='font-size:19px;line-height:150%;font-family:"Calibri Light",sans-serif;'>Contexto: ${formulario.contexto}</span></span></p>
<p style='margin-top:0cm;margin-right:0cm;margin-bottom:8.0pt;margin-left:0cm;font-size:11.0pt;font-family:"Calibri",sans-serif;line-height:150%;'><span style='font-size:19px;line-height:150%;font-family:"Calibri Light",sans-serif;'>&nbsp;</span></p>
<p style='margin-top:0cm;margin-right:0cm;margin-bottom:8.0pt;margin-left:0cm;font-size:11.0pt;font-family:"Calibri",sans-serif;line-height:150%;'><strong><span style='font-size:19px;line-height:150%;font-family:"Calibri Light",sans-serif;'>DESCRIPCI&Oacute;N DETALLADA DE LA DESREGULACI&Oacute;N:</span></strong></p>
<p style='margin-top:0cm;margin-right:0cm;margin-bottom:8.0pt;margin-left:0cm;font-size:11.0pt;font-family:"Calibri",sans-serif;line-height:150%;'><strong><span style='font-size:19px;line-height:150%;font-family:"Calibri Light",sans-serif;'>1. Emoci&oacute;n predominante:</span></strong></p>
<p style='margin-top:0cm;margin-right:0cm;margin-bottom:8.0pt;margin-left:0cm;font-size:11.0pt;font-family:"Calibri",sans-serif;line-height:150%;'><span style='font-size:19px;line-height:150%;font-family:"Calibri Light",sans-serif;'>Seleccionar la emoci&oacute;n principal que el estudiante experiment&oacute; durante la desregulaci&oacute;n:</span></p>
<ol start="1" style="list-style-type: upper-alpha;">
    <li><span style='line-height:150%;font-family:"Calibri Light",sans-serif;text-decoration: ${formulario.emocion_predominante=='Tristeza'? 'underline': 'none'};'>Tristeza</span></li>
    <li><span style='line-height:150%;font-family:"Calibri Light",sans-serif;text-decoration: ${formulario.emocion_predominante=='Ira'? 'underline': 'none'};'>Ira</span></li>
    <li><span style='line-height:150%;font-family:"Calibri Light",sans-serif;text-decoration: ${formulario.emocion_predominante=='Frustracion'? 'underline': 'none'};'>Frustracion</span></li>
    <li><span style='line-height:150%;font-family:"Calibri Light",sans-serif;text-decoration: ${formulario.emocion_predominante=='Ansiedad'? 'underline': 'none'};'>Ansiedad</span></li>
    <li><span style='line-height:150%;font-family:"Calibri Light",sans-serif;text-decoration: ${formulario.emocion_predominante=='Miedo'? 'underline': 'none'};'>Miedo</span></li>
    <li><span style='line-height:150%;font-family:"Calibri Light",sans-serif;'>Otra: ${formulario.emocion_predominante_otros}</span></li>
</ol>
<p style='margin-top:0cm;margin-right:0cm;margin-bottom:8.0pt;margin-left:0cm;font-size:11.0pt;font-family:"Calibri",sans-serif;line-height:150%;'><span style='font-size:19px;line-height:150%;font-family:"Calibri Light",sans-serif;'>Describir la intensidad de la emoci&oacute;n en una escala de 1 a 10 (1 siendo la intensidad m&aacute;s baja y 10 la m&aacute;s alta): [<span style="color:red;">Especificar]</span></span></p>
<p style='margin-top:0cm;margin-right:0cm;margin-bottom:8.0pt;margin-left:0cm;font-size:11.0pt;font-family:"Calibri",sans-serif;line-height:150%;'><span style='font-size:19px;line-height:150%;font-family:"Calibri Light",sans-serif;'>&nbsp;</span></p>
<p style='margin-top:0cm;margin-right:0cm;margin-bottom:8.0pt;margin-left:0cm;font-size:11.0pt;font-family:"Calibri",sans-serif;line-height:150%;'><span style='font-size:19px;line-height:150%;font-family:"Calibri Light",sans-serif;'>&nbsp;</span></p>
<p style='margin-top:0cm;margin-right:0cm;margin-bottom:8.0pt;margin-left:0cm;font-size:11.0pt;font-family:"Calibri",sans-serif;line-height:150%;'><span style='font-size:19px;line-height:150%;font-family:"Calibri Light",sans-serif;'>&nbsp;</span></p>
<p style='margin-top:0cm;margin-right:0cm;margin-bottom:8.0pt;margin-left:0cm;font-size:11.0pt;font-family:"Calibri",sans-serif;line-height:150%;'><strong><span style='font-size:19px;line-height:150%;font-family:"Calibri Light",sans-serif;'>2. Manifestaciones f&iacute;sicas:</span></strong></p>
<p style='margin-top:0cm;margin-right:0cm;margin-bottom:8.0pt;margin-left:0cm;font-size:11.0pt;font-family:"Calibri",sans-serif;line-height:150%;'><span style='font-size:19px;line-height:150%;font-family:"Calibri Light",sans-serif;'>Describir en detalle las manifestaciones f&iacute;sicas que el estudiante present&oacute; durante la desregulaci&oacute;n, incluyendo:</span></p>
<ol start="1" style="list-style-type: upper-alpha;">
    <li><span style='line-height:150%;font-family:"Calibri Light",sans-serif;text-decoration:${formulario.manifestaciones_fisicas=='LLanto'? 'underline': 'none'};'>Llanto</span></li>
    <li><span style='line-height:150%;font-family:"Calibri Light",sans-serif;text-decoration:${formulario.manifestaciones_fisicas=='Temblor'? 'underline': 'none'};'>Temblor</span></li>
    <li><span style='line-height:150%;font-family:"Calibri Light",sans-serif;text-decoration:${formulario.manifestaciones_fisicas=='Sudoración'? 'underline': 'none'};'>Sudoraci&oacute;n</span></li>
    <li><span style='line-height:150%;font-family:"Calibri Light",sans-serif;text-decoration:${formulario.manifestaciones_fisicas=='Aumento de la frecuencia cardiaca'? 'underline': 'none'};'>Aumento de la frecuencia cardiaca</span></li>
    <li><span style='line-height:150%;font-family:"Calibri Light",sans-serif;text-decoration:${formulario.manifestaciones_fisicas=='Tensión muscular'? 'underline': 'none'};'>Tensi&oacute;n muscular</span></li>
    <li><span style='line-height:150%;font-family:"Calibri Light",sans-serif;text-decoration:${formulario.manifestaciones_fisicas=='Rubor facial'? 'underline': 'none'};'>Rubor facial</span></li>
    <li><span style='line-height:150%;font-family:"Calibri Light",sans-serif;text-decoration:${formulario.manifestaciones_fisicas=='Dificultad para respirar'? 'underline': 'none'};'>Dificultad para respirar</span></li>
    <li><span style='line-height:150%;font-family:"Calibri Light",sans-serif;text-decoration:${formulario.manifestaciones_fisicas=='Náuseas'? 'underline': 'none'};'>N&aacute;useas</span></li>
    <li><span style='line-height:150%;font-family:"Calibri Light",sans-serif;text-decoration:${formulario.manifestaciones_fisicas=='Dolor de cabeza'? 'underline': 'none'};'>Dolor de cabeza</span></li>
    <li><span style='line-height:150%;font-family:"Calibri Light",sans-serif;'>Otros: ${formulario.manifestaciones_fisicas_otros}</span></li>
</ol>
<p style='margin-top:0cm;margin-right:0cm;margin-bottom:8.0pt;margin-left:0cm;font-size:11.0pt;font-family:"Calibri",sans-serif;line-height:150%;'><span style='font-size:19px;line-height:150%;font-family:"Calibri Light",sans-serif;'>3. Manifestaciones conductuales:</span></p>
<p style='margin-top:0cm;margin-right:0cm;margin-bottom:8.0pt;margin-left:0cm;font-size:11.0pt;font-family:"Calibri",sans-serif;line-height:150%;'><span style='font-size:19px;line-height:150%;font-family:"Calibri Light",sans-serif;'>Describir en detalle las manifestaciones conductuales que el estudiante present&oacute; durante la desregulaci&oacute;n, incluyendo:</span></p>
<ol start="1" style="list-style-type: upper-alpha;">
    <li><span style='line-height:150%;font-family:"Calibri Light",sans-serif;text-decoration:${formulario.manifestaciones_conductuales.includes('Agresión verbal (insultos, gritos)')? 'underline': 'none'};'>Agresi&oacute;n verbal (insultos, gritos)</span></li>
    <li><span style='line-height:150%;font-family:"Calibri Light",sans-serif;text-decoration:${formulario.manifestaciones_conductuales.includes('Agresión física (golpes, patadas)')? 'underline': 'none'};'>Agresi&oacute;n f&iacute;sica (golpes, patadas)</span></li>
    <li><span style='line-height:150%;font-family:"Calibri Light",sans-serif;text-decoration:${formulario.manifestaciones_conductuales.includes('Autolesiones')? 'underline': 'none'};'>Autolesiones</span></li>
    <li><span style='line-height:150%;font-family:"Calibri Light",sans-serif;text-decoration:${formulario.manifestaciones_conductuales.includes('Aislamiento')? 'underline': 'none'};'>Aislamiento</span></li>
    <li><span style='line-height:150%;font-family:"Calibri Light",sans-serif;text-decoration:${formulario.manifestaciones_conductuales.includes('Llanto inconsolable')? 'underline': 'none'};'>Llanto inconsolable</span></li>
    <li><span style='line-height:150%;font-family:"Calibri Light",sans-serif;text-decoration:${formulario.manifestaciones_conductuales.includes('Negativa a cooperar')? 'underline': 'none'};'>Negativa a cooperar</span></li>
    <li><span style='line-height:150%;font-family:"Calibri Light",sans-serif;text-decoration:${formulario.manifestaciones_conductuales.includes('Desobediencia')? 'underline': 'none'};'>Desobediencia</span></li>
    <li><span style='line-height:150%;font-family:"Calibri Light",sans-serif;text-decoration:${formulario.manifestaciones_conductuales.includes('Comportamiento impulsivo')? 'underline': 'none'};'>Comportamiento impulsivo</span></li>
    <li><span style='line-height:150%;font-family:"Calibri Light",sans-serif;'>Otros: ${formulario.manifestaciones_conductuales_otros}</span></li>
</ol>
<p style='margin-top:0cm;margin-right:0cm;margin-bottom:8.0pt;margin-left:36.0pt;font-size:11.0pt;font-family:"Calibri",sans-serif;line-height:150%;'><strong><span style='font-size:19px;line-height:150%;font-family:"Calibri Light",sans-serif;'>&nbsp;</span></strong></p>
<p style='margin-top:0cm;margin-right:0cm;margin-bottom:8.0pt;margin-left:0cm;font-size:11.0pt;font-family:"Calibri",sans-serif;line-height:150%;'><strong><span style='font-size:19px;line-height:150%;font-family:"Calibri Light",sans-serif;'>4. Duraci&oacute;n:</span></strong></p>
<p style='margin-top:0cm;margin-right:0cm;margin-bottom:8.0pt;margin-left:0cm;font-size:11.0pt;font-family:"Calibri",sans-serif;line-height:150%;'><span style='font-size:19px;line-height:150%;font-family:"Calibri Light",sans-serif;'>Indicar la duraci&oacute;n total de la desregulaci&oacute;n en minutos: (Especificar)</span></p>
<p style='margin-top:0cm;margin-right:0cm;margin-bottom:8.0pt;margin-left:0cm;font-size:11.0pt;font-family:"Calibri",sans-serif;line-height:150%;'><span style='font-size:19px;line-height:150%;font-family:"Calibri Light",sans-serif;'>${formulario.duracion}</span></p>
<p style='margin-top:0cm;margin-right:0cm;margin-bottom:8.0pt;margin-left:0cm;font-size:11.0pt;font-family:"Calibri",sans-serif;line-height:150%;'><span style='font-size:19px;line-height:150%;font-family:"Calibri Light",sans-serif;'>Intervenci&oacute;n realizada:</span></p>
<p style='margin-top:0cm;margin-right:0cm;margin-bottom:8.0pt;margin-left:0cm;font-size:11.0pt;font-family:"Calibri",sans-serif;line-height:150%;'><span style='font-size:19px;line-height:150%;font-family:"Calibri Light",sans-serif;'>1. Estrategias utilizadas para calmar al estudiante:</span></p>
<p style='margin-top:0cm;margin-right:0cm;margin-bottom:8.0pt;margin-left:0cm;font-size:11.0pt;font-family:"Calibri",sans-serif;line-height:150%;'><span style='font-size:19px;line-height:150%;font-family:"Calibri Light",sans-serif;'>Describir las estrategias espec&iacute;ficas que se utilizaron para calmar al estudiante durante la desregulaci&oacute;n, incluyendo:</span></p>
<ol start="1" style="list-style-type: upper-alpha;">
    <li><span style='line-height:150%;font-family:"Calibri Light",sans-serif;text-decoration:${formulario.intervencion_realizada.includes('Respiración profunda')? 'underline': 'none'};'>Respiraci&oacute;n profunda</span></li>
    <li><span style='line-height:150%;font-family:"Calibri Light",sans-serif;text-decoration:${formulario.intervencion_realizada.includes('Técnicas de relajación muscular')? 'underline': 'none'};'>T&eacute;cnicas de relajaci&oacute;n muscular</span></li>
    <li><span style='line-height:150%;font-family:"Calibri Light",sans-serif;text-decoration:${formulario.intervencion_realizada.includes('Visualización')? 'underline': 'none'};'>Visualizaci&oacute;n</span></li>
    <li><span style='line-height:150%;font-family:"Calibri Light",sans-serif;text-decoration:${formulario.intervencion_realizada.includes('Hablar con el estudiante en un tono calmado y tranquilizador')? 'underline': 'none'};'>Hablar con el estudiante en un tono calmado y tranquilizador</span></li>
    <li><span style='line-height:150%;font-family:"Calibri Light",sans-serif;text-decoration:${formulario.intervencion_realizada.includes('Ofrecer apoyo emocional')? 'underline': 'none'};'>Ofrecer apoyo emocional</span></li>
    <li><span style='line-height:150%;font-family:"Calibri Light",sans-serif;text-decoration:${formulario.intervencion_realizada.includes('Brindar un espacio seguro y tranquilo')? 'underline': 'none'};'>Brindar un espacio seguro y tranquilo</span></li>
    <li><span style='line-height:150%;font-family:"Calibri Light",sans-serif;text-decoration:${formulario.intervencion_realizada.includes('Retirar al estudiante del contexto')? 'underline': 'none'};'>Retirar al estudiante del contexto</span></li>
    <li><span style='line-height:150%;font-family:"Calibri Light",sans-serif;'>Otros: ${formulario.intervencion_realizada_otros}</span></li>
</ol>
<p style='margin-top:0cm;margin-right:0cm;margin-bottom:8.0pt;margin-left:0cm;font-size:11.0pt;font-family:"Calibri",sans-serif;line-height:150%;'><span style='font-size:19px;line-height:150%;font-family:"Calibri Light",sans-serif;'>2. Efectividad de las estrategias:</span></p>
<p style='margin-top:0cm;margin-right:0cm;margin-bottom:8.0pt;margin-left:0cm;font-size:11.0pt;font-family:"Calibri",sans-serif;line-height:150%;'><span style='font-size:19px;line-height:150%;font-family:"Calibri Light",sans-serif;'>Evaluar la eficacia de las estrategias utilizadas para calmar al estudiante, indicando si fueron:</span></p>
<ol start="1" style="list-style-type: upper-alpha;">
    <li><span style='line-height:150%;font-family:"Calibri Light",sans-serif;text-decoration:${formulario.efectividad_estrategia=='Muy efectiva'? 'underline': 'none'};'>Muy efectivas</span></li>
    <li><span style='line-height:150%;font-family:"Calibri Light",sans-serif;text-decoration:${formulario.efectividad_estrategia=='Efectiva'? 'underline': 'none'};'>Efectivas</span></li>
    <li><span style='line-height:150%;font-family:"Calibri Light",sans-serif;text-decoration:${formulario.efectividad_estrategia=='Poco efectiva'? 'underline': 'none'};'>Poco efectivas</span></li>
    <li><span style='line-height:150%;font-family:"Calibri Light",sans-serif;text-decoration:${formulario.efectividad_estrategia=='Inefectiva'? 'underline': 'none'};'>Inefectivas</span></li>
</ol>
<p style='margin-top:0cm;margin-right:0cm;margin-bottom:8.0pt;margin-left:0cm;font-size:11.0pt;font-family:"Calibri",sans-serif;line-height:150%;'><span style='font-size:19px;line-height:150%;font-family:"Calibri Light",sans-serif;'>&nbsp;</span></p>
<p style='margin-top:0cm;margin-right:0cm;margin-bottom:8.0pt;margin-left:0cm;font-size:11.0pt;font-family:"Calibri",sans-serif;line-height:150%;'><span style='font-size:19px;line-height:150%;font-family:"Calibri Light",sans-serif;'>&nbsp;</span></p>
<p style='margin-top:0cm;margin-right:0cm;margin-bottom:8.0pt;margin-left:0cm;font-size:11.0pt;font-family:"Calibri",sans-serif;line-height:150%;'><span style='font-size:19px;line-height:150%;font-family:"Calibri Light",sans-serif;'>3. Necesidad de ayuda externa:</span></p>
<p style='margin-top:0cm;margin-right:0cm;margin-bottom:8.0pt;margin-left:0cm;font-size:11.0pt;font-family:"Calibri",sans-serif;line-height:150%;'><span style='font-size:19px;line-height:150%;font-family:"Calibri Light",sans-serif;'>Indicar si se requiri&oacute; ayuda externa para controlar la desregulaci&oacute;n del estudiante:</span></p>
<ol start="1" style="list-style-type: upper-alpha;">
    <li><span style='line-height:150%;font-family:"Calibri Light",sans-serif;text-decoration:${formulario.necesidad_ayuda_externa=='Sí'? 'underline': 'none'};'>S&iacute;</span></li>
    <li><span style='line-height:150%;font-family:"Calibri Light",sans-serif;text-decoration:${formulario.necesidad_ayuda_externa=='No'? 'underline': 'none'};'>No</span></li>
</ol>
<p style='margin-top:0cm;margin-right:0cm;margin-bottom:8.0pt;margin-left:0cm;font-size:11.0pt;font-family:"Calibri",sans-serif;line-height:150%;'><span style='font-size:19px;line-height:150%;font-family:"Calibri Light",sans-serif;'>4. Si se requiri&oacute; ayuda externa, &iquest;de qu&eacute; tipo?:</span></p>
<p style='margin-top:0cm;margin-right:0cm;margin-bottom:8.0pt;margin-left:0cm;font-size:11.0pt;font-family:"Calibri",sans-serif;line-height:150%;'><span style='font-size:19px;line-height:150%;font-family:"Calibri Light",sans-serif;'>Describir el tipo de ayuda externa que se requiri&oacute;, incluyendo:</span></p>
<ol start="1" style="list-style-type: upper-alpha;">
    <li><span style='line-height:150%;font-family:"Calibri Light",sans-serif;text-decoration:${formulario.ayuda_externa.includes('Contacto con los padres o tutores')? 'underline': 'none'};'>Contacto con los padres o tutores</span></li>
    <li><span style='line-height:150%;font-family:"Calibri Light",sans-serif;text-decoration:${formulario.ayuda_externa.includes('Intervención del psicólogo o pedagogo')? 'underline': 'none'};'>Intervenci&oacute;n del psic&oacute;logo o pedagogo</span></li>
    <li><span style='line-height:150%;font-family:"Calibri Light",sans-serif;text-decoration:${formulario.ayuda_externa.includes('Intervención del equipo directivo')? 'underline': 'none'};'>Intervenci&oacute;n del equipo directivo</span></li>
    <li><span style='line-height:150%;font-family:"Calibri Light",sans-serif;text-decoration:${formulario.ayuda_externa.includes('Asistencia médica')? 'underline': 'none'};'>Asistencia m&eacute;dica</span></li>
    <li><span style='line-height:150%;font-family:"Calibri Light",sans-serif;'>Otros: ${formulario.ayuda_externa_otros}</span></li>
</ol>
<p style='margin-top:0cm;margin-right:0cm;margin-bottom:8.0pt;margin-left:0cm;font-size:11.0pt;font-family:"Calibri",sans-serif;line-height:150%;'><span style='font-size:19px;line-height:150%;font-family:"Calibri Light",sans-serif;'>Plan de acci&oacute;n individualizado:</span></p>
<p style='margin-top:0cm;margin-right:0cm;margin-bottom:8.0pt;margin-left:0cm;font-size:11.0pt;font-family:"Calibri",sans-serif;line-height:150%;'><span style='font-size:19px;line-height:150%;font-family:"Calibri Light",sans-serif;'>1. Medidas a corto plazo:</span></p>
<p style='margin-top:0cm;margin-right:0cm;margin-bottom:8.0pt;margin-left:0cm;font-size:11.0pt;font-family:"Calibri",sans-serif;line-height:150%;'><span style='font-size:19px;line-height:150%;font-family:"Calibri Light",sans-serif;'>Detallar las medidas espec&iacute;ficas que se implementar&aacute;n a corto plazo para prevenir futuras desregulaciones emocionales en el estudiante, incluyendo:</span></p>
<ol start="1" style="list-style-type: upper-alpha;">
    <li><span style='line-height:150%;font-family:"Calibri Light",sans-serif;text-decoration: ${formulario.medidas_corto_plazo.includes('Implementación de estrategias de autorregulación emocional')? 'underline': 'none'};'>Implementaci&oacute;n de estrategias de autorregulaci&oacute;n emocional</span></li>
    <li><span style='line-height:150%;font-family:"Calibri Light",sans-serif;text-decoration: ${formulario.medidas_corto_plazo.includes('Adaptaciones en el aula')? 'underline': 'none'};'>Adaptaciones en el aula</span></li>
    <li><span style='line-height:150%;font-family:"Calibri Light",sans-serif;text-decoration: ${formulario.medidas_corto_plazo.includes('Apoyo académico individualizado')? 'underline': 'none'};'>Apoyo acad&eacute;mico individualizado</span></li>
    <li><span style='line-height:150%;font-family:"Calibri Light",sans-serif;text-decoration: ${formulario.medidas_corto_plazo.includes('Refuerzo positivo')? 'underline': 'none'};'>Refuerzo positivo</span></li>
    <li><span style='line-height:150%;font-family:"Calibri Light",sans-serif;text-decoration: ${formulario.medidas_corto_plazo.includes('Seguimiento individualizado por parte del profesorado u otro profesional')? 'underline': 'none'};'>Seguimiento individualizado por parte del profesorado u otro profesional</span></li>
    <li><span style='line-height:150%;font-family:"Calibri Light",sans-serif;text-decoration: ${formulario.medidas_corto_plazo.includes('Intervención con la familia')? 'underline': 'none'};'>Intervenci&oacute;n con la familia</span></li>
    <li><span style='line-height:150%;font-family:"Calibri Light",sans-serif;'>Otros: ${formulario.medidas_corto_plazo_otros}</span></li>
</ol>
<p style='margin-top:0cm;margin-right:0cm;margin-bottom:8.0pt;margin-left:0cm;font-size:11.0pt;font-family:"Calibri",sans-serif;line-height:150%;'><span style='font-size:19px;line-height:150%;font-family:"Calibri Light",sans-serif;'>2. Medidas a largo plazo:</span></p>
<p style='margin-top:0cm;margin-right:0cm;margin-bottom:8.0pt;margin-left:0cm;font-size:11.0pt;font-family:"Calibri",sans-serif;line-height:150%;'><span style='font-size:19px;line-height:150%;font-family:"Calibri Light",sans-serif;'>Detallar las medidas espec&iacute;ficas que se implementar&aacute;n a largo plazo para abordar las causas de la desregulaci&oacute;n emocional en el estudiante, incluyendo:</span></p>
<ol start="1" style="list-style-type: upper-alpha;">

    <li><span style='line-height:150%;font-family:"Calibri Light",sans-serif;text-decoration: ${formulario.medidas_largo_plazo.includes('Terapia individual o grupal')? 'underline': 'none'};'>Terapia individual o grupal</span></li>
    <li><span style='line-height:150%;font-family:"Calibri Light",sans-serif;text-decoration: ${formulario.medidas_largo_plazo.includes('Evaluación por un profesional de la salud mental')? 'underline': 'none'};'>Evaluaci&oacute;n por un profesional de la salud mental</span></li>
    <li><span style='line-height:150%;font-family:"Calibri Light",sans-serif;text-decoration: ${formulario.medidas_largo_plazo.includes('Intervención psicopedagógica')? 'underline': 'none'};'>Intervenci&oacute;n psicopedag&oacute;gica</span></li>
    <li><span style='line-height:150%;font-family:"Calibri Light",sans-serif;text-decoration: ${formulario.medidas_largo_plazo.includes('Capacitación a los padres o tutores en manejo de emociones')? 'underline': 'none'};'>Capacitaci&oacute;n a los padres o tutores en manejo de emociones</span></li>
    <li><span style='line-height:150%;font-family:"Calibri Light",sans-serif;text-decoration: ${formulario.medidas_largo_plazo.includes('Adaptaciones curriculares')? 'underline': 'none'};'>Adaptaciones curriculares</span></li>
    <li><span style='line-height:150%;font-family:"Calibri Light",sans-serif;'>Otros: ${formulario.medidas_largo_plazo_otros}</span></li>
</ol>
<p style='margin-top:0cm;margin-right:0cm;margin-bottom:8.0pt;margin-left:0cm;font-size:11.0pt;font-family:"Calibri",sans-serif;line-height:150%;'><span style='font-size:19px;line-height:150%;font-family:"Calibri Light",sans-serif;'>Seguimiento:</span></p>
<p style='margin-top:0cm;margin-right:0cm;margin-bottom:8.0pt;margin-left:0cm;font-size:11.0pt;font-family:"Calibri",sans-serif;line-height:150%;'><span style='font-size:19px;line-height:150%;font-family:"Calibri Light",sans-serif;'>1. Fecha de la pr&oacute;xima evaluaci&oacute;n (Indicar la fecha en la que se realizar&aacute; la pr&oacute;xima evaluaci&oacute;n del estudiante):</span></p>
<p style='margin-top:0cm;margin-right:0cm;margin-bottom:8.0pt;margin-left:0cm;font-size:11.0pt;font-family:"Calibri",sans-serif;line-height:150%;'><span style='font-size:19px;line-height:150%;font-family:"Calibri Light",sans-serif;'>
${formulario.seguimiento_fecha}
</span></p>
<p style='margin-top:0cm;margin-right:0cm;margin-bottom:8.0pt;margin-left:0cm;font-size:11.0pt;font-family:"Calibri",sans-serif;line-height:150%;'><span style='font-size:19px;line-height:150%;font-family:"Calibri Light",sans-serif;'>2. Persona responsable del seguimiento (Indicar el nombre y cargo de la persona responsable del seguimiento del plan de acci&oacute;n).</span></p>
<p style='margin-top:0cm;margin-right:0cm;margin-bottom:8.0pt;margin-left:0cm;font-size:11.0pt;font-family:"Calibri",sans-serif;line-height:150%;'><span style='font-size:19px;line-height:150%;font-family:"Calibri Light",sans-serif;'>
${formulario.seguimiento_responsable}
</span></p>
<p style='margin-top:0cm;margin-right:0cm;margin-bottom:8.0pt;margin-left:0cm;font-size:11.0pt;font-family:"Calibri",sans-serif;line-height:150%;'><span style='font-size:19px;line-height:150%;font-family:"Calibri Light",sans-serif;'>&nbsp;</span></p>
<p style='margin-top:0cm;margin-right:0cm;margin-bottom:8.0pt;margin-left:0cm;font-size:11.0pt;font-family:"Calibri",sans-serif;line-height:150%;'><span style='font-size:19px;line-height:150%;font-family:"Calibri Light",sans-serif;'>3. Frecuencia del seguimiento:</span></p>
<p style='margin-top:0cm;margin-right:0cm;margin-bottom:8.0pt;margin-left:0cm;font-size:11.0pt;font-family:"Calibri",sans-serif;line-height:150%;'><span style='font-size:19px;line-height:150%;font-family:"Calibri Light",sans-serif;'>Indicar la frecuencia con la que se realizar&aacute; el seguimiento del plan de acci&oacute;n:</span></p>
<ol start="1" style="list-style-type: upper-alpha;">
    <li><span style='line-height:150%;font-family:"Calibri Light",sans-serif;text-decoration:${formulario.frecuencia_seguimiento=='Diaria'? 'underline': 'none'};'>Diaria</span></li>
    <li><span style='line-height:150%;font-family:"Calibri Light",sans-serif;text-decoration:${formulario.frecuencia_seguimiento=='Semanal'? 'underline': 'none'};'>Semanal</span></li>
    <li><span style='line-height:150%;font-family:"Calibri Light",sans-serif;text-decoration:${formulario.frecuencia_seguimiento=='Quincenal'? 'underline': 'none'};'>Quincenal</span></li>
    <li><span style='line-height:150%;font-family:"Calibri Light",sans-serif;text-decoration:${formulario.frecuencia_seguimiento=='Mensual'? 'underline': 'none'};'>Mensual</span></li>
    <li><span style='line-height:150%;font-family:"Calibri Light",sans-serif;'>Otro: ${formulario.frecuencia_seguimiento_otro}</span></li>
</ol>
<p style='margin-top:0cm;margin-right:0cm;margin-bottom:8.0pt;margin-left:0cm;font-size:11.0pt;font-family:"Calibri",sans-serif;line-height:150%;'><span style='font-size:19px;line-height:150%;font-family:"Calibri Light",sans-serif;'>4. Instrumentos de evaluaci&oacute;n:</span></p>
<p style='margin-top:0cm;margin-right:0cm;margin-bottom:8.0pt;margin-left:0cm;font-size:11.0pt;font-family:"Calibri",sans-serif;line-height:150%;'><span style='font-size:19px;line-height:150%;font-family:"Calibri Light",sans-serif;'>(Especificar los instrumentos que se utilizar&aacute;n para evaluar el progreso del estudiante, incluyendo):</span></p>
<ol start="1" style="list-style-type: upper-alpha;">
    <li><span style='line-height:150%;font-family:"Calibri Light",sans-serif;text-decoration: ${formulario.instrumento_evaluacion.includes('Observación directa')? 'underline': 'none'};'>Observación directa</span></li>
    <li><span style='line-height:150%;font-family:"Calibri Light",sans-serif;text-decoration: ${formulario.instrumento_evaluacion.includes('Registros de comportamiento')? 'underline': 'none'};'>Registros de comportamiento</span></li>
    <li><span style='line-height:150%;font-family:"Calibri Light",sans-serif;text-decoration: ${formulario.instrumento_evaluacion.includes('Escalas de evaluación de emociones')? 'underline': 'none'};'>Escalas de evaluaci&oacute;n de emociones</span></li>
    <li><span style='line-height:150%;font-family:"Calibri Light",sans-serif;text-decoration: ${formulario.instrumento_evaluacion.includes('Entrevistas al estudiante')? 'underline': 'none'};'>Entrevistas al estudiante</span></li>
    <li><span style='line-height:150%;font-family:"Calibri Light",sans-serif;text-decoration: ${formulario.instrumento_evaluacion.includes('Entrevistas a los padres o tutores')? 'underline': 'none'};'>Entrevistas a los padres o tutores</span></li>
    <li><span style='line-height:150%;font-family:"Calibri Light",sans-serif;text-decoration: ${formulario.instrumento_evaluacion.includes('Informes de los profesores')? 'underline': 'none'};'>Informes de los profesores</span></li>
    <li><span style='line-height:150%;font-family:"Calibri Light",sans-serif;'>Otros: ${formulario.instrumento_evaluacion_otros}</span></li>
</ol>
<p style='margin-top:0cm;margin-right:0cm;margin-bottom:8.0pt;margin-left:0cm;font-size:11.0pt;font-family:"Calibri",sans-serif;line-height:150%;'><span style='font-size:19px;line-height:150%;font-family:"Calibri Light",sans-serif;'>Observaciones adicionales:</span></p>
<p style='margin-top:0cm;margin-right:0cm;margin-bottom:8.0pt;margin-left:0cm;font-size:11.0pt;font-family:"Calibri",sans-serif;line-height:150%;'><span style='font-size:19px;line-height:150%;font-family:"Calibri Light",sans-serif;'>Incluir cualquier otra informaci&oacute;n relevante que no se haya incluido en los apartados anteriores, como:</span></p>
<p style='margin-top:0cm;margin-right:0cm;margin-bottom:8.0pt;margin-left:0cm;font-size:11.0pt;font-family:"Calibri",sans-serif;line-height:150%;'><span style='font-size:19px;line-height:150%;font-family:"Calibri Light",sans-serif;'>Historial de desregulaciones emocionales del estudiante:</span></p>
<p style='margin-top:0cm;margin-right:0cm;margin-bottom:8.0pt;margin-left:0cm;font-size:11.0pt;font-family:"Calibri",sans-serif;line-height:150%;'><span style='font-size:19px;line-height:150%;font-family:"Calibri Light",sans-serif;'>
${formulario.historial_desregulaciones}
</span></p>
<p style='margin-top:0cm;margin-right:0cm;margin-bottom:8.0pt;margin-left:0cm;font-size:11.0pt;font-family:"Calibri",sans-serif;line-height:150%;'><span style='font-size:19px;line-height:150%;font-family:"Calibri Light",sans-serif;'>Factores de riesgo asociados a la desregulaci&oacute;n:</span></p>
<p style='margin-top:0cm;margin-right:0cm;margin-bottom:8.0pt;margin-left:0cm;font-size:11.0pt;font-family:"Calibri",sans-serif;line-height:150%;'><span style='font-size:19px;line-height:150%;font-family:"Calibri Light",sans-serif;'>
${formulario.factores_riesgo}
</span></p>
<p style='margin-top:0cm;margin-right:0cm;margin-bottom:8.0pt;margin-left:0cm;font-size:11.0pt;font-family:"Calibri",sans-serif;line-height:150%;'><span style='font-size:19px;line-height:150%;font-family:"Calibri Light",sans-serif;'>Necesidades espec&iacute;ficas del estudiante:</span></p>
<p style='margin-top:0cm;margin-right:0cm;margin-bottom:8.0pt;margin-left:0cm;font-size:11.0pt;font-family:"Calibri",sans-serif;line-height:150%;'><span style='font-size:19px;line-height:150%;font-family:"Calibri Light",sans-serif;'>
${formulario.necesidades_especificas}
</span></p>
<p style='margin-top:0cm;margin-right:0cm;margin-bottom:8.0pt;margin-left:0cm;font-size:11.0pt;font-family:"Calibri",sans-serif;line-height:150%;'><span style='font-size:19px;line-height:150%;font-family:"Calibri Light",sans-serif;'>&nbsp;</span></p>
<p style='margin-top:0cm;margin-right:0cm;margin-bottom:8.0pt;margin-left:0cm;font-size:11.0pt;font-family:"Calibri",sans-serif;line-height:150%;'><span style='font-size:19px;line-height:150%;font-family:"Calibri Light",sans-serif;'>Recursos disponibles en la instituci&oacute;n educativa:</span></p>
<p style='margin-top:0cm;margin-right:0cm;margin-bottom:8.0pt;margin-left:0cm;font-size:11.0pt;font-family:"Calibri",sans-serif;line-height:150%;'><span style='font-size:19px;line-height:150%;font-family:"Calibri Light",sans-serif;'>
${formulario.recursos_disponibles}
</span></p>
<p style='margin-top:0cm;margin-right:0cm;margin-bottom:8.0pt;margin-left:0cm;font-size:11.0pt;font-family:"Calibri",sans-serif;line-height:150%;'><span style='font-size:19px;line-height:150%;font-family:"Calibri Light",sans-serif;'>&nbsp;</span></p>
<p style='margin-top:0cm;margin-right:0cm;margin-bottom:8.0pt;margin-left:0cm;font-size:11.0pt;font-family:"Calibri",sans-serif;line-height:150%;'><span style='font-size:19px;line-height:150%;font-family:"Calibri Light",sans-serif;'>&nbsp;</span></p>
<p style='margin-top:0cm;margin-right:0cm;margin-bottom:8.0pt;margin-left:0cm;font-size:11.0pt;font-family:"Calibri",sans-serif;line-height:150%;'><span style='font-size:19px;line-height:150%;font-family:"Calibri Light",sans-serif;'>Coordinaci&oacute;n con otros profesionales:</span></p>
<p style='margin-top:0cm;margin-right:0cm;margin-bottom:8.0pt;margin-left:0cm;font-size:11.0pt;font-family:"Calibri",sans-serif;line-height:150%;'><span style='font-size:19px;line-height:150%;font-family:"Calibri Light",sans-serif;'>
${formulario.coordinacion_profesionales}
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
<p style='margin-top:0cm;margin-right:0cm;margin-bottom:8.0pt;margin-left:0cm;font-size:11.0pt;font-family:"Calibri",sans-serif;line-height:150%;'><span style='font-size:19px;line-height:150%;font-family:"Calibri Light",sans-serif;color:red;'>La comunicaci&oacute;n constante con los padres o tutores del estudiante es fundamental para el &eacute;xito del plan de acci&oacute;n</span></p>`
  }
  static planAcompanamiento( nombreEstudiante, rut, edad, curso, nacionalidad, nombreApoderado, contactoApoderado){
    return `<style>
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
                <p>&nbsp; ${nombreEstudiante}</p>
            </td>
        </tr>
        <tr>
            <td width="38.435374149659864%" valign="top">
                <p><strong>RUT</strong></p>
            </td>
            <td width="61.564625850340136%" valign="top">
                <p>&nbsp; ${rut}</p>
            </td>
        </tr>
        <tr>
            <td width="38.435374149659864%" valign="top">
                <p><strong>Edad</strong></p>
            </td>
            <td width="61.564625850340136%" valign="top">
                <p>&nbsp; ${edad}</p>
            </td>
        </tr>
        <tr>
            <td width="38.435374149659864%" valign="top">
                <p><strong>Curso</strong></p>
            </td>
            <td width="61.564625850340136%" valign="top">
                <p>&nbsp; ${curso}</p>
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
                <p>&nbsp; ${nombreApoderado}</p>
            </td>
        </tr>
        <tr>
            <td width="38.435374149659864%" valign="top">
                <p><strong>Contacto apoderado/a</strong></p>
            </td>
            <td width="61.564625850340136%" valign="top">
                <p>&nbsp; ${contactoApoderado}</p>
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
`
  }
  static fichaPai( nombreEstudiante, course, birthdate, date){
    return `<p><strong>Ficha del Plan de Apoyo Individualizado (PAI) para Estudiantes con TEA </strong></p>
<p><strong>Informaci&oacute;n del Estudiante: </strong></p>
<ul>
<li>Nombre: ${nombreEstudiante}</li>
<li>Curso: ${course}</li>
<li>Fecha de Nacimiento: ${birthdate}</li>
<li>Diagn&oacute;stico de TEA:</li>
<li>Fecha de Diagn&oacute;stico: ${date}</li>
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
<p>Esta ficha del PAI proporciona un marco estructurado para planificar, implementar y evaluar el apoyo individualizado para estudiantes con TEA que presentan desregulaci&oacute;n emocional y conductual en el entorno escolar.</p>`
  }
  static contratoContigencia(nombreEstudiante, nombreTutor, nombreRepresentanteEstablecimiento, fecha) {
    return `<p style='margin-top:0cm;margin-right:0cm;margin-bottom:0cm;margin-left:0cm;font-size:11.0pt;font-family:"Calibri",sans-serif;text-align:center;'><strong><span style='font-family:"Calibri Light",sans-serif;'>CONTRATO DE CONTINGENCIAS</span></strong></p>
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
                <p style='margin-top:0cm;margin-right:0cm;margin-bottom:8.0pt;margin-left:0cm;font-size:11.0pt;font-family:"Calibri",sans-serif;text-align:justify;'><span style='font-family:"Calibri Light",sans-serif;'>&nbsp;${nombreEstudiante}</span></p>
            </td>
        </tr>
        <tr>
            <td style="width: 212.4pt;border-right: 1pt solid black;border-bottom: 1pt solid black;border-left: 1pt solid black;border-image: initial;border-top: none;padding: 0cm 5.4pt;vertical-align: top;">
                <p style='margin-top:0cm;margin-right:0cm;margin-bottom:8.0pt;margin-left:0cm;font-size:11.0pt;font-family:"Calibri",sans-serif;text-align:justify;'><strong><span style='font-family:"Calibri Light",sans-serif;'>Nombre del apoderado/a</span></strong></p>
            </td>
            <td style="width: 229pt;border-top: none;border-left: none;border-bottom: 1pt solid black;border-right: 1pt solid black;padding: 0cm 5.4pt;vertical-align: top;">
                <p style='margin-top:0cm;margin-right:0cm;margin-bottom:8.0pt;margin-left:0cm;font-size:11.0pt;font-family:"Calibri",sans-serif;text-align:justify;'><span style='font-family:"Calibri Light",sans-serif;'>&nbsp;${nombreTutor}</span></p>
            </td>
        </tr>
        <tr>
            <td style="width: 212.4pt;border-right: 1pt solid black;border-bottom: 1pt solid black;border-left: 1pt solid black;border-image: initial;border-top: none;padding: 0cm 5.4pt;vertical-align: top;">
                <p style='margin-top:0cm;margin-right:0cm;margin-bottom:8.0pt;margin-left:0cm;font-size:11.0pt;font-family:"Calibri",sans-serif;text-align:justify;'><strong><span style='font-family:"Calibri Light",sans-serif;'>Nombre representante establecimiento</span></strong></p>
            </td>
            <td style="width: 229pt;border-top: none;border-left: none;border-bottom: 1pt solid black;border-right: 1pt solid black;padding: 0cm 5.4pt;vertical-align: top;">
                <p style='margin-top:0cm;margin-right:0cm;margin-bottom:8.0pt;margin-left:0cm;font-size:11.0pt;font-family:"Calibri",sans-serif;text-align:justify;'><span style='font-family:"Calibri Light",sans-serif;'>&nbsp;${nombreRepresentanteEstablecimiento}</span></p>
            </td>
        </tr>
        <tr>
            <td style="width: 212.4pt;border-right: 1pt solid black;border-bottom: 1pt solid black;border-left: 1pt solid black;border-image: initial;border-top: none;padding: 0cm 5.4pt;vertical-align: top;">
                <p style='margin-top:0cm;margin-right:0cm;margin-bottom:8.0pt;margin-left:0cm;font-size:11.0pt;font-family:"Calibri",sans-serif;text-align:justify;'><strong><span style='font-family:"Calibri Light",sans-serif;'>Fecha&nbsp;</span></strong></p>
            </td>
            <td style="width: 229pt;border-top: none;border-left: none;border-bottom: 1pt solid black;border-right: 1pt solid black;padding: 0cm 5.4pt;vertical-align: top;">
                <p style='margin-top:0cm;margin-right:0cm;margin-bottom:8.0pt;margin-left:0cm;font-size:11.0pt;font-family:"Calibri",sans-serif;text-align:justify;'><span style='font-family:"Calibri Light",sans-serif;'>&nbsp;${fecha}</span></p>
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
</table>`
  }
  static certificadoEmpleador(nombreEstudiante, course, nombreTutor,rut) {
    return `<p style='margin-top:0cm;margin-right:0cm;margin-bottom:0cm;margin-left:0cm;font-size:11.0pt;font-family:"Calibri",sans-serif;text-align:center;'><strong><span style='font-family:"Calibri Light",sans-serif;'>CERTIFICADO</span></strong></p>
<p style='margin-top:0cm;margin-right:0cm;margin-bottom:8.0pt;margin-left:0cm;font-size:11.0pt;font-family:"Calibri",sans-serif;text-align:center;'><strong><span style='font-family:"Calibri Light",sans-serif;'>Aplicaci&oacute;n del protocolo integral para la gesti&oacute;n de la desregulaci&oacute;n emocional y/o conductual</span></strong></p>
<table style="width: 4.4e+2pt;border-collapse:collapse;border:none;">
    <tbody>
        <tr>
            <td style="width: 148.6pt;border: 1pt solid rgb(142, 170, 219);background: rgb(217, 226, 243);padding: 0cm 5.4pt;vertical-align: top;">
                <p style='margin-top:0cm;margin-right:0cm;margin-bottom:0cm;margin-left:0cm;font-size:11.0pt;font-family:"Calibri",sans-serif;text-align:justify;line-height:  normal;'><span style='font-family:"Calibri Light",sans-serif;color:black;'>NOMBRE DEL ESTUDIANTE</span></p>
            </td>
            <td style="width: 292.8pt;border-top: 1pt solid rgb(142, 170, 219);border-right: 1pt solid rgb(142, 170, 219);border-bottom: 1pt solid rgb(142, 170, 219);border-image: initial;border-left: none;background: rgb(217, 226, 243);padding: 0cm 5.4pt;vertical-align: top;">
                <p style='margin-top:0cm;margin-right:0cm;margin-bottom:0cm;margin-left:0cm;font-size:11.0pt;font-family:"Calibri",sans-serif;text-align:justify;line-height:  normal;'><span style='font-family:"Calibri Light",sans-serif;'>&nbsp;${nombreEstudiante}</span></p>
            </td>
        </tr>
        <tr>
            <td style="width: 148.6pt;border-right: 1pt solid rgb(142, 170, 219);border-bottom: 1pt solid rgb(142, 170, 219);border-left: 1pt solid rgb(142, 170, 219);border-image: initial;border-top: none;padding: 0cm 5.4pt;vertical-align: top;">
                <p style='margin-top:0cm;margin-right:0cm;margin-bottom:0cm;margin-left:0cm;font-size:11.0pt;font-family:"Calibri",sans-serif;text-align:justify;line-height:  normal;'><span style='font-family:"Calibri Light",sans-serif;'>CURSO&nbsp;</span></p>
            </td>
            <td style="width: 292.8pt;border-top: none;border-left: none;border-bottom: 1pt solid rgb(142, 170, 219);border-right: 1pt solid rgb(142, 170, 219);padding: 0cm 5.4pt;vertical-align: top;">
                <p style='margin-top:0cm;margin-right:0cm;margin-bottom:0cm;margin-left:0cm;font-size:11.0pt;font-family:"Calibri",sans-serif;text-align:justify;line-height:  normal;'><span style='font-family:"Calibri Light",sans-serif;'>&nbsp;${course}</span></p>
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
                <p style='margin-top:0cm;margin-right:0cm;margin-bottom:0cm;margin-left:0cm;font-size:11.0pt;font-family:"Calibri",sans-serif;text-align:justify;line-height:  normal;'><span style='font-family:"Calibri Light",sans-serif;'>&nbsp;${nombreTutor}</span></p>
            </td>
        </tr>
        <tr>
            <td style="width: 148.6pt;border-right: 1pt solid rgb(142, 170, 219);border-bottom: 1pt solid rgb(142, 170, 219);border-left: 1pt solid rgb(142, 170, 219);border-image: initial;border-top: none;padding: 0cm 5.4pt;vertical-align: top;">
                <p style='margin-top:0cm;margin-right:0cm;margin-bottom:0cm;margin-left:0cm;font-size:11.0pt;font-family:"Calibri",sans-serif;text-align:justify;line-height:  normal;'><span style='font-family:"Calibri Light",sans-serif;'>RUT APODERADO/A</span></p>
            </td>
            <td style="width: 292.8pt;border-top: none;border-left: none;border-bottom: 1pt solid rgb(142, 170, 219);border-right: 1pt solid rgb(142, 170, 219);padding: 0cm 5.4pt;vertical-align: top;">
                <p style='margin-top:0cm;margin-right:0cm;margin-bottom:0cm;margin-left:0cm;font-size:11.0pt;font-family:"Calibri",sans-serif;text-align:justify;line-height:  normal;'><span style='font-family:"Calibri Light",sans-serif;'>&nbsp;${rut}</span></p>
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
</table>`;
  }
  static autorizacionAbordajeDec(nombretutor, rut, nombreestudiante, curso) {
    return `<p style='margin-top:0cm;margin-right:0cm;margin-bottom:8.0pt;margin-left:0cm;font-size:11.0pt;font-family:"Calibri",sans-serif;text-align:center;'><strong><span style='font-size:19px;line-height:107%;font-family:"Calibri Light",sans-serif;'>AUTORIZACI&Oacute;N</span></strong></p>
<p style='margin-top:0cm;margin-right:0cm;margin-bottom:8.0pt;margin-left:0cm;font-size:11.0pt;font-family:"Calibri",sans-serif;text-align:center;'><strong><span style='font-size:19px;line-height:107%;font-family:"Calibri Light",sans-serif;'>Aplicaci&oacute;n del protocolo integral para la gesti&oacute;n de la desregulaci&oacute;n emocional y/o conductual</span></strong></p>
<p style='margin-top:0cm;margin-right:0cm;margin-bottom:8.0pt;margin-left:0cm;font-size:11.0pt;font-family:"Calibri",sans-serif;text-align:center;'><strong><span style='font-size:19px;line-height:107%;font-family:"Calibri Light",sans-serif;'>&nbsp;</span></strong></p>
<p style='margin-top:0cm;margin-right:0cm;margin-bottom:8.0pt;margin-left:0cm;font-size:11.0pt;font-family:"Calibri",sans-serif;text-align:justify;'><span style='font-size:19px;line-height:107%;font-family:"Calibri Light",sans-serif;'>Yo ${nombretutor}, RUT:&nbsp; ${rut}</span></p>
<p style='margin-top:0cm;margin-right:0cm;margin-bottom:8.0pt;margin-left:0cm;font-size:11.0pt;font-family:"Calibri",sans-serif;text-align:justify;'><span style='font-size:19px;line-height:107%;font-family:"Calibri Light",sans-serif;'>apoderado/a de ${nombreestudiante} estudiante del curso ${curso}. Estoy en conocimiento del protocolo integral para la gesti&oacute;n de la desregulaci&oacute;n emocional y/o conductual de estudiantes, por lo cual, autorizo al personal especializado o SOS del establecimiento para que brinde la contenci&oacute;n emocional y f&iacute;sica presente en el protocolo, en caso que mi pupilo presente una desregulaci&oacute;n emocional y/o conductual en el establecimiento.</span></p>
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
</table>`
  }
}
