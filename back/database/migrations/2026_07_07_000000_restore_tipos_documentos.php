<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Support\Facades\DB;

return new class extends Migration
{
    public function up(): void
    {
        $autorizacion = <<<'HTML'
<p style='margin-top:0cm;margin-right:0cm;margin-bottom:8.0pt;margin-left:0cm;font-size:11.0pt;font-family:"Calibri",sans-serif;text-align:center;'>AUTORIZACI&Oacute;N</p>
<p style='margin-top:0cm;margin-right:0cm;margin-bottom:8.0pt;margin-left:0cm;font-size:11.0pt;font-family:"Calibri",sans-serif;'>&nbsp;</p>
<p style='margin-top:0cm;margin-right:0cm;margin-bottom:8.0pt;margin-left:0cm;font-size:11.0pt;font-family:"Calibri",sans-serif;'>Aplicaci&oacute;n del Protocolo Integral para la Gesti&oacute;n de la Desregulaci&oacute;n Emocional y/o Conductual</p>
<p style='margin-top:0cm;margin-right:0cm;margin-bottom:8.0pt;margin-left:0cm;font-size:11.0pt;font-family:"Calibri",sans-serif;'>&nbsp;</p>
<p style='margin-top:0cm;margin-right:0cm;margin-bottom:8.0pt;margin-left:0cm;font-size:11.0pt;font-family:"Calibri",sans-serif;'>Yo, {{tutor}}, RUT: {{tutorRut}}, en calidad de apoderado/a de {{nombre}}, estudiante del curso {{curso}}, declaro estar al tanto del Protocolo Integral para la Gesti&oacute;n de la Desregulaci&oacute;n Emocional y/o Conductual de estudiantes. En consecuencia, autorizo al personal especializado o SOS del establecimiento a proporcionar la contenci&oacute;n emocional y f&iacute;sica estipulada en dicho protocolo en caso de que mi pupilo presente desregulaci&oacute;n emocional y/o conductual en el establecimiento.</p>
<p style='margin-top:0cm;margin-right:0cm;margin-bottom:8.0pt;margin-left:0cm;font-size:11.0pt;font-family:"Calibri",sans-serif;'>&nbsp;</p>
<p style='margin-top:0cm;margin-right:0cm;margin-bottom:8.0pt;margin-left:0cm;font-size:11.0pt;font-family:"Calibri",sans-serif;'>Adem&aacute;s, para facilitar su manejo, indico las siguientes estrategias para su contenci&oacute;n:</p>
<p style='margin-top:0cm;margin-right:0cm;margin-bottom:8.0pt;margin-left:0cm;font-size:11.0pt;font-family:"Calibri",sans-serif;'>a)</p>
<p style='margin-top:0cm;margin-right:0cm;margin-bottom:8.0pt;margin-left:0cm;font-size:11.0pt;font-family:"Calibri",sans-serif;'>b)</p>
<p style='margin-top:0cm;margin-right:0cm;margin-bottom:8.0pt;margin-left:0cm;font-size:11.0pt;font-family:"Calibri",sans-serif;'>c)</p>
<p style='margin-top:0cm;margin-right:0cm;margin-bottom:8.0pt;margin-left:0cm;font-size:11.0pt;font-family:"Calibri",sans-serif;'>&nbsp;</p>
<p style='margin-top:0cm;margin-right:0cm;margin-bottom:8.0pt;margin-left:0cm;font-size:11.0pt;font-family:"Calibri",sans-serif;'>Firma del apoderado/a: ___________________________&nbsp;</p>
<p style='margin-top:0cm;margin-right:0cm;margin-bottom:8.0pt;margin-left:0cm;font-size:11.0pt;font-family:"Calibri",sans-serif;'>&nbsp;</p>
<p style='margin-top:0cm;margin-right:0cm;margin-bottom:8.0pt;margin-left:0cm;font-size:11.0pt;font-family:"Calibri",sans-serif;'>&nbsp;</p>
<p style='margin-top:0cm;margin-right:0cm;margin-bottom:8.0pt;margin-left:0cm;font-size:11.0pt;font-family:"Calibri",sans-serif;'>Firma y timbre del representante del establecimiento: ___________________________</p>
HTML;

        $certificadoEmpleador = <<<'HTML'
<p style='margin-top:0cm;margin-right:0cm;margin-bottom:8.0pt;margin-left:0cm;font-size:11.0pt;font-family:"Calibri",sans-serif;text-align:center;'>CERTIFICADO DE INTERVENCI&Oacute;N PARA EL EMPLEADOR</p>
<p style='margin-top:0cm;margin-right:0cm;margin-bottom:8.0pt;margin-left:0cm;font-size:11.0pt;font-family:"Calibri",sans-serif;'>&nbsp;</p>
<p style='margin-top:0cm;margin-right:0cm;margin-bottom:8.0pt;margin-left:0cm;font-size:11.0pt;font-family:"Calibri",sans-serif;'>Aplicaci&oacute;n del Protocolo Integral para la Gesti&oacute;n de la Desregulaci&oacute;n Emocional y/o Conductual</p>
<p style='margin-top:0cm;margin-right:0cm;margin-bottom:8.0pt;margin-left:0cm;font-size:11.0pt;font-family:"Calibri",sans-serif;'>&nbsp;</p>
<p style='margin-top:0cm;margin-right:0cm;margin-bottom:8.0pt;margin-left:0cm;font-size:11.0pt;font-family:"Calibri",sans-serif;'>Nombre del Estudiante: {{nombre}}</p>
<p style='margin-top:0cm;margin-right:0cm;margin-bottom:8.0pt;margin-left:0cm;font-size:11.0pt;font-family:"Calibri",sans-serif;'>Curso: {{curso}}</p>
<p style='margin-top:0cm;margin-right:0cm;margin-bottom:8.0pt;margin-left:0cm;font-size:11.0pt;font-family:"Calibri",sans-serif;'>&nbsp;</p>
<p style='margin-top:0cm;margin-right:0cm;margin-bottom:8.0pt;margin-left:0cm;font-size:11.0pt;font-family:"Calibri",sans-serif;'>Nombre del Apoderado/a: {{tutor}}</p>
<p style='margin-top:0cm;margin-right:0cm;margin-bottom:8.0pt;margin-left:0cm;font-size:11.0pt;font-family:"Calibri",sans-serif;'>RUT del Apoderado/a: {{tutorRut}}</p>
<p style='margin-top:0cm;margin-right:0cm;margin-bottom:8.0pt;margin-left:0cm;font-size:11.0pt;font-family:"Calibri",sans-serif;'>&nbsp;</p>
<p style='margin-top:0cm;margin-right:0cm;margin-bottom:8.0pt;margin-left:0cm;font-size:11.0pt;font-family:"Calibri",sans-serif;'>Descripci&oacute;n del Incidente de Desregulaci&oacute;n Emocional y/o Conductual (DEC):</p>
<p style='margin-top:0cm;margin-right:0cm;margin-bottom:8.0pt;margin-left:0cm;font-size:11.0pt;font-family:"Calibri",sans-serif;'>[Incluir antecedentes relevantes, ubicaci&oacute;n del incidente, duraci&oacute;n, y cualquier otra informaci&oacute;n pertinente.]</p>
<p style='margin-top:0cm;margin-right:0cm;margin-bottom:8.0pt;margin-left:0cm;font-size:11.0pt;font-family:"Calibri",sans-serif;'>&nbsp;</p>
<p style='margin-top:0cm;margin-right:0cm;margin-bottom:8.0pt;margin-left:0cm;font-size:11.0pt;font-family:"Calibri",sans-serif;'>Intervenci&oacute;n del Personal en el Incidente:</p>
<p style='margin-top:0cm;margin-right:0cm;margin-bottom:8.0pt;margin-left:0cm;font-size:11.0pt;font-family:"Calibri",sans-serif;'>&nbsp;</p>
<p style='margin-top:0cm;margin-right:0cm;margin-bottom:8.0pt;margin-left:0cm;font-size:11.0pt;font-family:"Calibri",sans-serif;'>Etapa Inicial:</p>
<p style='margin-top:0cm;margin-right:0cm;margin-bottom:8.0pt;margin-left:0cm;font-size:11.0pt;font-family:"Calibri",sans-serif;'>Personal Responsable: __________________________</p>
<p style='margin-top:0cm;margin-right:0cm;margin-bottom:8.0pt;margin-left:0cm;font-size:11.0pt;font-family:"Calibri",sans-serif;'>Hora de Inicio: __________________________</p>
<p style='margin-top:0cm;margin-right:0cm;margin-bottom:8.0pt;margin-left:0cm;font-size:11.0pt;font-family:"Calibri",sans-serif;'>&nbsp;</p>
<p style='margin-top:0cm;margin-right:0cm;margin-bottom:8.0pt;margin-left:0cm;font-size:11.0pt;font-family:"Calibri",sans-serif;'>Etapa de Aumento de la Desregulaci&oacute;n (con riesgo para s&iacute; mismo/a o terceros):</p>
<p style='margin-top:0cm;margin-right:0cm;margin-bottom:8.0pt;margin-left:0cm;font-size:11.0pt;font-family:"Calibri",sans-serif;'>Personal Responsable: __________________________</p>
<p style='margin-top:0cm;margin-right:0cm;margin-bottom:8.0pt;margin-left:0cm;font-size:11.0pt;font-family:"Calibri",sans-serif;'>Hora de Intervenci&oacute;n: __________________________</p>
<p style='margin-top:0cm;margin-right:0cm;margin-bottom:8.0pt;margin-left:0cm;font-size:11.0pt;font-family:"Calibri",sans-serif;'>&nbsp;</p>
<p style='margin-top:0cm;margin-right:0cm;margin-bottom:8.0pt;margin-left:0cm;font-size:11.0pt;font-family:"Calibri",sans-serif;'>Etapa de Crisis Declarada (cuando se requiere contenci&oacute;n f&iacute;sica):</p>
<p style='margin-top:0cm;margin-right:0cm;margin-bottom:8.0pt;margin-left:0cm;font-size:11.0pt;font-family:"Calibri",sans-serif;'>Personal Responsable: __________________________</p>
<p style='margin-top:0cm;margin-right:0cm;margin-bottom:8.0pt;margin-left:0cm;font-size:11.0pt;font-family:"Calibri",sans-serif;'>Hora de Intervenci&oacute;n: __________________________</p>
<p style='margin-top:0cm;margin-right:0cm;margin-bottom:8.0pt;margin-left:0cm;font-size:11.0pt;font-family:"Calibri",sans-serif;'>&nbsp;</p>
<p style='margin-top:0cm;margin-right:0cm;margin-bottom:8.0pt;margin-left:0cm;font-size:11.0pt;font-family:"Calibri",sans-serif;'>&nbsp;</p>
<p style='margin-top:0cm;margin-right:0cm;margin-bottom:8.0pt;margin-left:0cm;font-size:11.0pt;font-family:"Calibri",sans-serif;'>Detalles de Tiempo:</p>
<p style='margin-top:0cm;margin-right:0cm;margin-bottom:8.0pt;margin-left:0cm;font-size:11.0pt;font-family:"Calibri",sans-serif;'>&nbsp;</p>
<p style='margin-top:0cm;margin-right:0cm;margin-bottom:8.0pt;margin-left:0cm;font-size:11.0pt;font-family:"Calibri",sans-serif;'>Hora de Inicio del Incidente: __________________________</p>
<p style='margin-top:0cm;margin-right:0cm;margin-bottom:8.0pt;margin-left:0cm;font-size:11.0pt;font-family:"Calibri",sans-serif;'>Hora de Llamada al Apoderado/a: __________________________</p>
<p style='margin-top:0cm;margin-right:0cm;margin-bottom:8.0pt;margin-left:0cm;font-size:11.0pt;font-family:"Calibri",sans-serif;'>Hora de Llegada del Apoderado/a: __________________________</p>
<p style='margin-top:0cm;margin-right:0cm;margin-bottom:8.0pt;margin-left:0cm;font-size:11.0pt;font-family:"Calibri",sans-serif;'>Hora de Conclusi&oacute;n del Incidente: __________________________</p>
<p style='margin-top:0cm;margin-right:0cm;margin-bottom:8.0pt;margin-left:0cm;font-size:11.0pt;font-family:"Calibri",sans-serif;'>Se emite el presente certificado para que el apoderado/a lo presente a su empleador, justificando la atenci&oacute;n brindada a la desregulaci&oacute;n emocional y/o conductual de su pupilo.</p>
<p style='margin-top:0cm;margin-right:0cm;margin-bottom:8.0pt;margin-left:0cm;font-size:11.0pt;font-family:"Calibri",sans-serif;'>&nbsp;</p>
<p style='margin-top:0cm;margin-right:0cm;margin-bottom:8.0pt;margin-left:0cm;font-size:11.0pt;font-family:"Calibri",sans-serif;'>Firma del Apoderado/a: __________________________</p>
<p style='margin-top:0cm;margin-right:0cm;margin-bottom:8.0pt;margin-left:0cm;font-size:11.0pt;font-family:"Calibri",sans-serif;'>Firma y Timbre del Representante del Establecimiento: __________________________</p>
<p style='margin-top:0cm;margin-right:0cm;margin-bottom:8.0pt;margin-left:0cm;font-size:11.0pt;font-family:"Calibri",sans-serif;'>Fecha: __________________________</p>
HTML;

        $contratoContingencia = <<<'HTML'
<p style='margin-top:0cm;margin-right:0cm;margin-bottom:8.0pt;margin-left:0cm;font-size:11.0pt;font-family:"Calibri",sans-serif;text-align:center;'>CONTRATO DE CONTINGENCIAS</p>
<p style='margin-top:0cm;margin-right:0cm;margin-bottom:8.0pt;margin-left:0cm;font-size:11.0pt;font-family:"Calibri",sans-serif;'>&nbsp;</p>
<p style='margin-top:0cm;margin-right:0cm;margin-bottom:8.0pt;margin-left:0cm;font-size:11.0pt;font-family:"Calibri",sans-serif;'>Aplicaci&oacute;n del Protocolo Integral para la Gesti&oacute;n de la Desregulaci&oacute;n Emocional y/o Conductual</p>
<p style='margin-top:0cm;margin-right:0cm;margin-bottom:8.0pt;margin-left:0cm;font-size:11.0pt;font-family:"Calibri",sans-serif;'>&nbsp;</p>
<p style='margin-top:0cm;margin-right:0cm;margin-bottom:8.0pt;margin-left:0cm;font-size:11.0pt;font-family:"Calibri",sans-serif;'>Entre:</p>
<p style='margin-top:0cm;margin-right:0cm;margin-bottom:8.0pt;margin-left:0cm;font-size:11.0pt;font-family:"Calibri",sans-serif;'>El Establecimiento Escolar:</p>
<p style='margin-top:0cm;margin-right:0cm;margin-bottom:8.0pt;margin-left:0cm;font-size:11.0pt;font-family:"Calibri",sans-serif;'>Nombre del Representante: __________________________</p>
<p style='margin-top:0cm;margin-right:0cm;margin-bottom:8.0pt;margin-left:0cm;font-size:11.0pt;font-family:"Calibri",sans-serif;'>Cargo: ___________________________</p>
<p style='margin-top:0cm;margin-right:0cm;margin-bottom:8.0pt;margin-left:0cm;font-size:11.0pt;font-family:"Calibri",sans-serif;'>Nombre del Establecimiento: _________________________</p>
<p style='margin-top:0cm;margin-right:0cm;margin-bottom:8.0pt;margin-left:0cm;font-size:11.0pt;font-family:"Calibri",sans-serif;'>El Apoderado/a:</p>
<p style='margin-top:0cm;margin-right:0cm;margin-bottom:8.0pt;margin-left:0cm;font-size:11.0pt;font-family:"Calibri",sans-serif;'>Nombre: {{tutor}}</p>
<p style='margin-top:0cm;margin-right:0cm;margin-bottom:8.0pt;margin-left:0cm;font-size:11.0pt;font-family:"Calibri",sans-serif;'>RUT: {{tutorRut}}</p>
<p style='margin-top:0cm;margin-right:0cm;margin-bottom:8.0pt;margin-left:0cm;font-size:11.0pt;font-family:"Calibri",sans-serif;'>Relaci&oacute;n con el Estudiante: __________________________</p>
<p style='margin-top:0cm;margin-right:0cm;margin-bottom:8.0pt;margin-left:0cm;font-size:11.0pt;font-family:"Calibri",sans-serif;'>El Estudiante:</p>
<p style='margin-top:0cm;margin-right:0cm;margin-bottom:8.0pt;margin-left:0cm;font-size:11.0pt;font-family:"Calibri",sans-serif;'>Nombre: {{nombre}}</p>
<p style='margin-top:0cm;margin-right:0cm;margin-bottom:8.0pt;margin-left:0cm;font-size:11.0pt;font-family:"Calibri",sans-serif;'>Curso: {{curso}}</p>
<p style='margin-top:0cm;margin-right:0cm;margin-bottom:8.0pt;margin-left:0cm;font-size:11.0pt;font-family:"Calibri",sans-serif;'>Fecha: ___________________________</p>
<p style='margin-top:0cm;margin-right:0cm;margin-bottom:8.0pt;margin-left:0cm;font-size:11.0pt;font-family:"Calibri",sans-serif;'>&nbsp;</p>
<p style='margin-top:0cm;margin-right:0cm;margin-bottom:8.0pt;margin-left:0cm;font-size:11.0pt;font-family:"Calibri",sans-serif;'>OBJETIVO GENERAL:</p>
<p style='margin-top:0cm;margin-right:0cm;margin-bottom:8.0pt;margin-left:0cm;font-size:11.0pt;font-family:"Calibri",sans-serif;'>El presente contrato establece de manera clara y transparente las medidas acordadas entre el apoderado/a y el establecimiento escolar para la gesti&oacute;n de la desregulaci&oacute;n emocional y/o conductual del estudiante en el entorno escolar. Se busca implementar un enfoque preventivo que asegure la integridad del estudiante y del resto de la comunidad educativa.</p>
<p style='margin-top:0cm;margin-right:0cm;margin-bottom:8.0pt;margin-left:0cm;font-size:11.0pt;font-family:"Calibri",sans-serif;'>&nbsp;</p>
<p style='margin-top:0cm;margin-right:0cm;margin-bottom:8.0pt;margin-left:0cm;font-size:11.0pt;font-family:"Calibri",sans-serif;'>&nbsp;</p>
<p style='margin-top:0cm;margin-right:0cm;margin-bottom:8.0pt;margin-left:0cm;font-size:11.0pt;font-family:"Calibri",sans-serif;'>CL&Aacute;USULAS:</p>
<p style='margin-top:0cm;margin-right:0cm;margin-bottom:8.0pt;margin-left:0cm;font-size:11.0pt;font-family:"Calibri",sans-serif;'>&nbsp;</p>
<p style='margin-top:0cm;margin-right:0cm;margin-bottom:8.0pt;margin-left:0cm;font-size:11.0pt;font-family:"Calibri",sans-serif;'>Conocimiento del Protocolo:</p>
<p style='margin-top:0cm;margin-right:0cm;margin-bottom:8.0pt;margin-left:0cm;font-size:11.0pt;font-family:"Calibri",sans-serif;'>El apoderado/a confirma haber recibido y comprendido los procedimientos descritos en el Protocolo Integral para la Gesti&oacute;n de la Desregulaci&oacute;n Emocional y/o Conductual de estudiantes.</p>
<p style='margin-top:0cm;margin-right:0cm;margin-bottom:8.0pt;margin-left:0cm;font-size:11.0pt;font-family:"Calibri",sans-serif;'>&nbsp;</p>
<p style='margin-top:0cm;margin-right:0cm;margin-bottom:8.0pt;margin-left:0cm;font-size:11.0pt;font-family:"Calibri",sans-serif;'>Intervenci&oacute;n del Apoderado/a:</p>
<p style='margin-top:0cm;margin-right:0cm;margin-bottom:8.0pt;margin-left:0cm;font-size:11.0pt;font-family:"Calibri",sans-serif;'>En caso de que el estudiante presente desregulaci&oacute;n emocional y/o conductual, el apoderado/a se compromete a asistir al establecimiento de inmediato. Durante este tiempo, el establecimiento escolar se encargar&aacute; de proporcionar primeros auxilios y contenci&oacute;n al estudiante.</p>
<p style='margin-top:0cm;margin-right:0cm;margin-bottom:8.0pt;margin-left:0cm;font-size:11.0pt;font-family:"Calibri",sans-serif;'>Certificaci&oacute;n del Incidente:</p>
<p style='margin-top:0cm;margin-right:0cm;margin-bottom:8.0pt;margin-left:0cm;font-size:11.0pt;font-family:"Calibri",sans-serif;'>El establecimiento emitir&aacute; un certificado detallando la hora de inicio de la desregulaci&oacute;n emocional y/o conductual (DEC), la hora de contacto con el apoderado/a, la hora de llegada del apoderado/a y la hora de finalizaci&oacute;n de la DEC. Este certificado ser&aacute; entregado al apoderado/a para su presentaci&oacute;n ante su empleador.</p>
<p style='margin-top:0cm;margin-right:0cm;margin-bottom:8.0pt;margin-left:0cm;font-size:11.0pt;font-family:"Calibri",sans-serif;'>Personal Encargado de la Contenci&oacute;n:</p>
<p style='margin-top:0cm;margin-right:0cm;margin-bottom:8.0pt;margin-left:0cm;font-size:11.0pt;font-family:"Calibri",sans-serif;'>El personal especializado o SOS encargado de proporcionar primeros auxilios y contenci&oacute;n ser&aacute;: _____________________________. En caso de ausencia, este ser&aacute; reemplazado por el siguiente profesional: ____________________________.</p>
<p style='margin-top:0cm;margin-right:0cm;margin-bottom:8.0pt;margin-left:0cm;font-size:11.0pt;font-family:"Calibri",sans-serif;'>&nbsp;</p>
<p style='margin-top:0cm;margin-right:0cm;margin-bottom:8.0pt;margin-left:0cm;font-size:11.0pt;font-family:"Calibri",sans-serif;'>Flexibilizaci&oacute;n Horaria del Estudiante:</p>
<p style='margin-top:0cm;margin-right:0cm;margin-bottom:8.0pt;margin-left:0cm;font-size:11.0pt;font-family:"Calibri",sans-serif;'>Se acuerda si se permitir&aacute; flexibilizaci&oacute;n horaria para el estudiante: S&iacute; _____ No _____ (En caso afirmativo, se deber&aacute; completar el siguiente cuadro):</p>
<table style="border-collapse:collapse;border:none;">
    <tbody>
        <tr>
            <td style="width: 73.55pt;border: 1pt solid windowtext;padding: 0cm 5.4pt;vertical-align: top;">
                <p style='margin-top:0cm;margin-right:0cm;margin-bottom:0cm;margin-left:0cm;font-size:11.0pt;font-family:"Calibri",sans-serif;line-height:normal;'>D&iacute;a</p>
            </td>
            <td style="width: 73.55pt;border-top: 1pt solid windowtext;border-right: 1pt solid windowtext;border-bottom: 1pt solid windowtext;border-image: initial;border-left: none;padding: 0cm 5.4pt;vertical-align: top;">
                <p style='margin-top:0cm;margin-right:0cm;margin-bottom:0cm;margin-left:0cm;font-size:11.0pt;font-family:"Calibri",sans-serif;line-height:normal;'>Lunes</p>
            </td>
            <td style="width: 73.55pt;border-top: 1pt solid windowtext;border-right: 1pt solid windowtext;border-bottom: 1pt solid windowtext;border-image: initial;border-left: none;padding: 0cm 5.4pt;vertical-align: top;">
                <p style='margin-top:0cm;margin-right:0cm;margin-bottom:0cm;margin-left:0cm;font-size:11.0pt;font-family:"Calibri",sans-serif;line-height:normal;'>Martes</p>
            </td>
            <td style="width: 73.55pt;border-top: 1pt solid windowtext;border-right: 1pt solid windowtext;border-bottom: 1pt solid windowtext;border-image: initial;border-left: none;padding: 0cm 5.4pt;vertical-align: top;">
                <p style='margin-top:0cm;margin-right:0cm;margin-bottom:0cm;margin-left:0cm;font-size:11.0pt;font-family:"Calibri",sans-serif;line-height:normal;'>Mi&eacute;rcoles</p>
            </td>
            <td style="width: 73.6pt;border-top: 1pt solid windowtext;border-right: 1pt solid windowtext;border-bottom: 1pt solid windowtext;border-image: initial;border-left: none;padding: 0cm 5.4pt;vertical-align: top;">
                <p style='margin-top:0cm;margin-right:0cm;margin-bottom:0cm;margin-left:0cm;font-size:11.0pt;font-family:"Calibri",sans-serif;line-height:normal;'>Jueves&nbsp; &nbsp;</p>
            </td>
            <td style="width: 73.6pt;border-top: 1pt solid windowtext;border-right: 1pt solid windowtext;border-bottom: 1pt solid windowtext;border-image: initial;border-left: none;padding: 0cm 5.4pt;vertical-align: top;">
                <p style='margin-top:0cm;margin-right:0cm;margin-bottom:0cm;margin-left:0cm;font-size:11.0pt;font-family:"Calibri",sans-serif;line-height:normal;'>Viernes</p>
            </td>
        </tr>
        <tr>
            <td style="width: 73.55pt;border-right: 1pt solid windowtext;border-bottom: 1pt solid windowtext;border-left: 1pt solid windowtext;border-image: initial;border-top: none;padding: 0cm 5.4pt;vertical-align: top;">
                <p style='margin-top:0cm;margin-right:0cm;margin-bottom:0cm;margin-left:0cm;font-size:11.0pt;font-family:"Calibri",sans-serif;line-height:normal;'>Ingreso&nbsp;</p>
            </td>
            <td style="width: 73.55pt;border-top: none;border-left: none;border-bottom: 1pt solid windowtext;border-right: 1pt solid windowtext;padding: 0cm 5.4pt;vertical-align: top;">
                <p style='margin-top:0cm;margin-right:0cm;margin-bottom:0cm;margin-left:0cm;font-size:11.0pt;font-family:"Calibri",sans-serif;line-height:normal;'>&nbsp;</p>
            </td>
            <td style="width: 73.55pt;border-top: none;border-left: none;border-bottom: 1pt solid windowtext;border-right: 1pt solid windowtext;padding: 0cm 5.4pt;vertical-align: top;">
                <p style='margin-top:0cm;margin-right:0cm;margin-bottom:0cm;margin-left:0cm;font-size:11.0pt;font-family:"Calibri",sans-serif;line-height:normal;'>&nbsp;</p>
            </td>
            <td style="width: 73.55pt;border-top: none;border-left: none;border-bottom: 1pt solid windowtext;border-right: 1pt solid windowtext;padding: 0cm 5.4pt;vertical-align: top;">
                <p style='margin-top:0cm;margin-right:0cm;margin-bottom:0cm;margin-left:0cm;font-size:11.0pt;font-family:"Calibri",sans-serif;line-height:normal;'>&nbsp;</p>
            </td>
            <td style="width: 73.6pt;border-top: none;border-left: none;border-bottom: 1pt solid windowtext;border-right: 1pt solid windowtext;padding: 0cm 5.4pt;vertical-align: top;">
                <p style='margin-top:0cm;margin-right:0cm;margin-bottom:0cm;margin-left:0cm;font-size:11.0pt;font-family:"Calibri",sans-serif;line-height:normal;'>&nbsp;</p>
            </td>
            <td style="width: 73.6pt;border-top: none;border-left: none;border-bottom: 1pt solid windowtext;border-right: 1pt solid windowtext;padding: 0cm 5.4pt;vertical-align: top;">
                <p style='margin-top:0cm;margin-right:0cm;margin-bottom:0cm;margin-left:0cm;font-size:11.0pt;font-family:"Calibri",sans-serif;line-height:normal;'>&nbsp;</p>
            </td>
        </tr>
        <tr>
            <td style="width: 73.55pt;border-right: 1pt solid windowtext;border-bottom: 1pt solid windowtext;border-left: 1pt solid windowtext;border-image: initial;border-top: none;padding: 0cm 5.4pt;vertical-align: top;">
                <p style='margin-top:0cm;margin-right:0cm;margin-bottom:0cm;margin-left:0cm;font-size:11.0pt;font-family:"Calibri",sans-serif;line-height:normal;'>Salida</p>
            </td>
            <td style="width: 73.55pt;border-top: none;border-left: none;border-bottom: 1pt solid windowtext;border-right: 1pt solid windowtext;padding: 0cm 5.4pt;vertical-align: top;">
                <p style='margin-top:0cm;margin-right:0cm;margin-bottom:0cm;margin-left:0cm;font-size:11.0pt;font-family:"Calibri",sans-serif;line-height:normal;'>&nbsp;</p>
            </td>
            <td style="width: 73.55pt;border-top: none;border-left: none;border-bottom: 1pt solid windowtext;border-right: 1pt solid windowtext;padding: 0cm 5.4pt;vertical-align: top;">
                <p style='margin-top:0cm;margin-right:0cm;margin-bottom:0cm;margin-left:0cm;font-size:11.0pt;font-family:"Calibri",sans-serif;line-height:normal;'>&nbsp;</p>
            </td>
            <td style="width: 73.55pt;border-top: none;border-left: none;border-bottom: 1pt solid windowtext;border-right: 1pt solid windowtext;padding: 0cm 5.4pt;vertical-align: top;">
                <p style='margin-top:0cm;margin-right:0cm;margin-bottom:0cm;margin-left:0cm;font-size:11.0pt;font-family:"Calibri",sans-serif;line-height:normal;'>&nbsp;</p>
            </td>
            <td style="width: 73.6pt;border-top: none;border-left: none;border-bottom: 1pt solid windowtext;border-right: 1pt solid windowtext;padding: 0cm 5.4pt;vertical-align: top;">
                <p style='margin-top:0cm;margin-right:0cm;margin-bottom:0cm;margin-left:0cm;font-size:11.0pt;font-family:"Calibri",sans-serif;line-height:normal;'>&nbsp;</p>
            </td>
            <td style="width: 73.6pt;border-top: none;border-left: none;border-bottom: 1pt solid windowtext;border-right: 1pt solid windowtext;padding: 0cm 5.4pt;vertical-align: top;">
                <p style='margin-top:0cm;margin-right:0cm;margin-bottom:0cm;margin-left:0cm;font-size:11.0pt;font-family:"Calibri",sans-serif;line-height:normal;'>&nbsp;</p>
            </td>
        </tr>
    </tbody>
</table>
<p style='margin-top:0cm;margin-right:0cm;margin-bottom:8.0pt;margin-left:0cm;font-size:11.0pt;font-family:"Calibri",sans-serif;'>&nbsp;</p>
<p style='margin-top:0cm;margin-right:0cm;margin-bottom:8.0pt;margin-left:0cm;font-size:11.0pt;font-family:"Calibri",sans-serif;'>FIRMA DE LAS PARTES:</p>
<p style='margin-top:0cm;margin-right:0cm;margin-bottom:8.0pt;margin-left:0cm;font-size:11.0pt;font-family:"Calibri",sans-serif;'>&nbsp;</p>
<p style='margin-top:0cm;margin-right:0cm;margin-bottom:8.0pt;margin-left:0cm;font-size:11.0pt;font-family:"Calibri",sans-serif;'>Por el Establecimiento Escolar:</p>
<p style='margin-top:0cm;margin-right:0cm;margin-bottom:8.0pt;margin-left:0cm;font-size:11.0pt;font-family:"Calibri",sans-serif;'>Nombre: __________________________</p>
<p style='margin-top:0cm;margin-right:0cm;margin-bottom:8.0pt;margin-left:0cm;font-size:11.0pt;font-family:"Calibri",sans-serif;'>Firma: ___________________________</p>
<p style='margin-top:0cm;margin-right:0cm;margin-bottom:8.0pt;margin-left:0cm;font-size:11.0pt;font-family:"Calibri",sans-serif;'>Fecha: ___________________________</p>
<p style='margin-top:0cm;margin-right:0cm;margin-bottom:8.0pt;margin-left:0cm;font-size:11.0pt;font-family:"Calibri",sans-serif;'>&nbsp;</p>
<p style='margin-top:0cm;margin-right:0cm;margin-bottom:8.0pt;margin-left:0cm;font-size:11.0pt;font-family:"Calibri",sans-serif;'>Apoderado/a:</p>
<p style='margin-top:0cm;margin-right:0cm;margin-bottom:8.0pt;margin-left:0cm;font-size:11.0pt;font-family:"Calibri",sans-serif;'>Nombre: __________________________</p>
<p style='margin-top:0cm;margin-right:0cm;margin-bottom:8.0pt;margin-left:0cm;font-size:11.0pt;font-family:"Calibri",sans-serif;'>Firma: ___________________________</p>
<p style='margin-top:0cm;margin-right:0cm;margin-bottom:8.0pt;margin-left:0cm;font-size:11.0pt;font-family:"Calibri",sans-serif;text-align:center;'>Fecha: ___________________________</p>
HTML;

        $planAcompanamiento = <<<'HTML'
<p style='margin-top:0cm;margin-right:0cm;margin-bottom:8.0pt;margin-left:0cm;font-size:11.0pt;font-family:"Calibri",sans-serif;line-height:normal;'><strong><span style='font-size:16px;font-family:"Times New Roman",serif;'>PLAN DE ACOMPA&Ntilde;AMIENTO EMOCIONAL Y/O CONDUCTUAL</span></strong></p>
<p style='margin-top:0cm;margin-right:0cm;margin-bottom:8.0pt;margin-left:0cm;font-size:11.0pt;font-family:"Calibri",sans-serif;line-height:normal;'><strong><span style='font-size:16px;font-family:"Times New Roman",serif;'>1. Antecedentes del Estudiante</span></strong></p>
<ul type="disc" style="margin-bottom:0cm;">
    <li style='margin-top:0cm;margin-right:0cm;margin-bottom:8.0pt;margin-left:0cm;font-size:11.0pt;font-family:"Calibri",sans-serif;line-height:normal;'><strong><span style='font-size:16px;font-family:"Times New Roman",serif;'>Nombre del estudiante</span></strong><span style='font-size:16px;font-family:"Times New Roman",serif;'>: {{nombre}}</span></li>
    <li style='margin-top:0cm;margin-right:0cm;margin-bottom:8.0pt;margin-left:0cm;font-size:11.0pt;font-family:"Calibri",sans-serif;line-height:normal;'><strong><span style='font-size:16px;font-family:"Times New Roman",serif;'>RUT</span></strong><span style='font-size:16px;font-family:"Times New Roman",serif;'>: {{rut}}</span></li>
    <li style='margin-top:0cm;margin-right:0cm;margin-bottom:8.0pt;margin-left:0cm;font-size:11.0pt;font-family:"Calibri",sans-serif;line-height:normal;'><strong><span style='font-size:16px;font-family:"Times New Roman",serif;'>Edad</span></strong><span style='font-size:16px;font-family:"Times New Roman",serif;'>: {{edad}} a&ntilde;os</span></li>
    <li style='margin-top:0cm;margin-right:0cm;margin-bottom:8.0pt;margin-left:0cm;font-size:11.0pt;font-family:"Calibri",sans-serif;line-height:normal;'><strong><span style='font-size:16px;font-family:"Times New Roman",serif;'>Curso</span></strong><span style='font-size:16px;font-family:"Times New Roman",serif;'>: {{curso}}</span></li>
    <li style='margin-top:0cm;margin-right:0cm;margin-bottom:8.0pt;margin-left:0cm;font-size:11.0pt;font-family:"Calibri",sans-serif;line-height:normal;'><strong><span style='font-size:16px;font-family:"Times New Roman",serif;'>Nacionalidad</span></strong><span style='font-size:16px;font-family:"Times New Roman",serif;'>: [Indicar Nacionalidad]</span></li>
    <li style='margin-top:0cm;margin-right:0cm;margin-bottom:8.0pt;margin-left:0cm;font-size:11.0pt;font-family:"Calibri",sans-serif;line-height:normal;'><strong><span style='font-size:16px;font-family:"Times New Roman",serif;'>Apoderado/a</span></strong><span style='font-size:16px;font-family:"Times New Roman",serif;'>: {{tutor}}</span></li>
    <li style='margin-top:0cm;margin-right:0cm;margin-bottom:8.0pt;margin-left:0cm;font-size:11.0pt;font-family:"Calibri",sans-serif;line-height:normal;'><strong><span style='font-size:16px;font-family:"Times New Roman",serif;'>Tel&eacute;fono del Apoderado</span></strong><span style='font-size:16px;font-family:"Times New Roman",serif;'>: {{telefono}}</span></li>
    <li style='margin-top:0cm;margin-right:0cm;margin-bottom:8.0pt;margin-left:0cm;font-size:11.0pt;font-family:"Calibri",sans-serif;line-height:normal;'><strong><span style='font-size:16px;font-family:"Times New Roman",serif;'>Contacto del Apoderado</span></strong><span style='font-size:16px;font-family:"Times New Roman",serif;'>: [Indicar Informaci&oacute;n de Contacto Adicional]</span></li>
</ul>
<p style='margin-top:0cm;margin-right:0cm;margin-bottom:8.0pt;margin-left:0cm;font-size:11.0pt;font-family:"Calibri",sans-serif;line-height:normal;'><strong><span style='font-size:16px;font-family:"Times New Roman",serif;'>2. Caracterizaci&oacute;n del Estudiante</span></strong></p>
<ul type="disc" style="margin-bottom:0cm;">
    <li style='margin-top:0cm;margin-right:0cm;margin-bottom:8.0pt;margin-left:0cm;font-size:11.0pt;font-family:"Calibri",sans-serif;line-height:normal;'><strong><span style='font-size:16px;font-family:"Times New Roman",serif;'>Diagn&oacute;stico Primario</span></strong><span style='font-size:16px;font-family:     "Times New Roman",serif;'>: [Indicar Diagn&oacute;stico]</span></li>
    <li style='margin-top:0cm;margin-right:0cm;margin-bottom:8.0pt;margin-left:0cm;font-size:11.0pt;font-family:"Calibri",sans-serif;line-height:normal;'><strong><span style='font-size:16px;font-family:"Times New Roman",serif;'>Diagn&oacute;stico Secundario</span></strong><span style='font-size:16px;font-family:     "Times New Roman",serif;'>: [Indicar Diagn&oacute;stico]</span></li>
    <li style='margin-top:0cm;margin-right:0cm;margin-bottom:8.0pt;margin-left:0cm;font-size:11.0pt;font-family:"Calibri",sans-serif;line-height:normal;'><strong><span style='font-size:16px;font-family:"Times New Roman",serif;'>Especializado o SOS</span></strong><span style='font-size:16px;font-family:"Times New Roman",serif;'>: [Nombre del Profesional o Remplazante]</span></li>
    <li style='margin-top:0cm;margin-right:0cm;margin-bottom:8.0pt;margin-left:0cm;font-size:11.0pt;font-family:"Calibri",sans-serif;line-height:normal;'><strong><span style='font-size:16px;font-family:"Times New Roman",serif;'>Profesor/a Jefe</span></strong><span style='font-size:16px;font-family:"Times New Roman",serif;'>: [Nombre del Profesor]</span></li>
</ul>
<p style='margin-top:0cm;margin-right:0cm;margin-bottom:8.0pt;margin-left:0cm;font-size:11.0pt;font-family:"Calibri",sans-serif;line-height:normal;'><strong><span style='font-size:16px;font-family:"Times New Roman",serif;'>3. Particularidades del Estudiante</span></strong></p>
<ul type="disc" style="margin-bottom:0cm;">
    <li style='margin-top:0cm;margin-right:0cm;margin-bottom:8.0pt;margin-left:0cm;font-size:11.0pt;font-family:"Calibri",sans-serif;line-height:normal;'><strong><span style='font-size:16px;font-family:"Times New Roman",serif;'>Desregulaci&oacute;n Emocional</span></strong><span style='font-size:16px;font-family:     "Times New Roman",serif;'>: [Describir desregulaciones observadas y sus desencadenantes espec&iacute;ficos.]</span></li>
    <li style='margin-top:0cm;margin-right:0cm;margin-bottom:8.0pt;margin-left:0cm;font-size:11.0pt;font-family:"Calibri",sans-serif;line-height:normal;'><strong><span style='font-size:16px;font-family:"Times New Roman",serif;'>Contacto F&iacute;sico</span></strong><span style='font-size:16px;font-family:     "Times New Roman",serif;'>: [Indicar si el contacto f&iacute;sico es un factor que lo desregula o no]</span></li>
    <li style='margin-top:0cm;margin-right:0cm;margin-bottom:8.0pt;margin-left:0cm;font-size:11.0pt;font-family:"Calibri",sans-serif;line-height:normal;'><strong><span style='font-size:16px;font-family:"Times New Roman",serif;'>Caracter&iacute;sticas Sensoriales</span></strong><span style='font-size:16px;font-family:     "Times New Roman",serif;'>: [Indicar sensibilidad a luces, ruidos, temperaturas, etc.]</span></li>
    <li style='margin-top:0cm;margin-right:0cm;margin-bottom:8.0pt;margin-left:0cm;font-size:11.0pt;font-family:"Calibri",sans-serif;line-height:normal;'><strong><span style='font-size:16px;font-family:"Times New Roman",serif;'>Conductas de Evitaci&oacute;n</span></strong><span style='font-size:16px;font-family:"Times New Roman",serif;'>: [Indicar si presenta conductas de evitaci&oacute;n y ejemplos espec&iacute;ficos]</span></li>
    <li style='margin-top:0cm;margin-right:0cm;margin-bottom:8.0pt;margin-left:0cm;font-size:11.0pt;font-family:"Calibri",sans-serif;line-height:normal;'><strong><span style='font-size:16px;font-family:"Times New Roman",serif;'>Estrategias de Regulaci&oacute;n Emocional/Conductual</span></strong><span style='font-size:16px;font-family:"Times New Roman",serif;'>:</span>
        <ul type="circle" style="margin-bottom:0cm;">
            <li style='margin-top:0cm;margin-right:0cm;margin-bottom:8.0pt;margin-left:0cm;font-size:11.0pt;font-family:"Calibri",sans-serif;line-height:normal;'><strong><span style='font-size:16px;font-family:"Times New Roman",serif;'>Moduladores Sensoriales</span></strong><span style='font-size:16px;font-family:"Times New Roman",serif;'>: [Ejemplo: Uso de auriculares para reducir el ruido, luces suaves]</span></li>
            <li style='margin-top:0cm;margin-right:0cm;margin-bottom:8.0pt;margin-left:0cm;font-size:11.0pt;font-family:"Calibri",sans-serif;line-height:normal;'><strong><span style='font-size:16px;font-family:"Times New Roman",serif;'>Lugares de Confort</span></strong><span style='font-size:16px;font-family:      "Times New Roman",serif;'>: Crear un espacio tranquilo donde el estudiante pueda retirarse si se siente abrumado.</span></li>
            <li style='margin-top:0cm;margin-right:0cm;margin-bottom:8.0pt;margin-left:0cm;font-size:11.0pt;font-family:"Calibri",sans-serif;line-height:normal;'><strong><span style='font-size:16px;font-family:"Times New Roman",serif;'>Manejo del Ambiente</span></strong><span style='font-size:16px;font-family:"Times New Roman",serif;'>: Ajustar el entorno para minimizar est&iacute;mulos que puedan generar hiper o hipo reactividad.</span></li>
        </ul>
    </li>
</ul>
<p style='margin-top:0cm;margin-right:0cm;margin-bottom:8.0pt;margin-left:0cm;font-size:11.0pt;font-family:"Calibri",sans-serif;line-height:normal;'><strong><span style='font-size:16px;font-family:"Times New Roman",serif;'>4. Evaluaci&oacute;n Mensual</span></strong></p>
<ul type="disc" style="margin-bottom:0cm;">
    <li style='margin-top:0cm;margin-right:0cm;margin-bottom:8.0pt;margin-left:0cm;font-size:11.0pt;font-family:"Calibri",sans-serif;line-height:normal;'><strong><span style='font-size:16px;font-family:"Times New Roman",serif;'>Marzo</span></strong><span style='font-size:16px;font-family:"Times New Roman",serif;'>: [Indicar Observaciones o Evaluaciones]</span></li>
    <li style='margin-top:0cm;margin-right:0cm;margin-bottom:8.0pt;margin-left:0cm;font-size:11.0pt;font-family:"Calibri",sans-serif;line-height:normal;'><strong><span style='font-size:16px;font-family:"Times New Roman",serif;'>Abril</span></strong><span style='font-size:16px;font-family:"Times New Roman",serif;'>: [Indicar Observaciones o Evaluaciones]</span></li>
    <li style='margin-top:0cm;margin-right:0cm;margin-bottom:8.0pt;margin-left:0cm;font-size:11.0pt;font-family:"Calibri",sans-serif;line-height:normal;'><strong><span style='font-size:16px;font-family:"Times New Roman",serif;'>Mayo</span></strong><span style='font-size:16px;font-family:"Times New Roman",serif;'>: [Indicar Observaciones o Evaluaciones]</span></li>
    <li style='margin-top:0cm;margin-right:0cm;margin-bottom:8.0pt;margin-left:0cm;font-size:11.0pt;font-family:"Calibri",sans-serif;line-height:normal;'><strong><span style='font-size:16px;font-family:"Times New Roman",serif;'>Junio</span></strong><span style='font-size:16px;font-family:"Times New Roman",serif;'>: [Indicar Observaciones o Evaluaciones]</span></li>
    <li style='margin-top:0cm;margin-right:0cm;margin-bottom:8.0pt;margin-left:0cm;font-size:11.0pt;font-family:"Calibri",sans-serif;line-height:normal;'><strong><span style='font-size:16px;font-family:"Times New Roman",serif;'>Julio</span></strong><span style='font-size:16px;font-family:"Times New Roman",serif;'>: [Indicar Observaciones o Evaluaciones]</span></li>
    <li style='margin-top:0cm;margin-right:0cm;margin-bottom:8.0pt;margin-left:0cm;font-size:11.0pt;font-family:"Calibri",sans-serif;line-height:normal;'><strong><span style='font-size:16px;font-family:"Times New Roman",serif;'>Agosto</span></strong><span style='font-size:16px;font-family:"Times New Roman",serif;'>: [Indicar Observaciones o Evaluaciones]</span></li>
    <li style='margin-top:0cm;margin-right:0cm;margin-bottom:8.0pt;margin-left:0cm;font-size:11.0pt;font-family:"Calibri",sans-serif;line-height:normal;'><strong><span style='font-size:16px;font-family:"Times New Roman",serif;'>Septiembre</span></strong><span style='font-size:16px;font-family:"Times New Roman",serif;'>: [Indicar Observaciones o Evaluaciones]</span></li>
    <li style='margin-top:0cm;margin-right:0cm;margin-bottom:8.0pt;margin-left:0cm;font-size:11.0pt;font-family:"Calibri",sans-serif;line-height:normal;'><strong><span style='font-size:16px;font-family:"Times New Roman",serif;'>Octubre</span></strong><span style='font-size:16px;font-family:"Times New Roman",serif;'>: [Indicar Observaciones o Evaluaciones]</span></li>
    <li style='margin-top:0cm;margin-right:0cm;margin-bottom:8.0pt;margin-left:0cm;font-size:11.0pt;font-family:"Calibri",sans-serif;line-height:normal;'><strong><span style='font-size:16px;font-family:"Times New Roman",serif;'>Noviembre</span></strong><span style='font-size:16px;font-family:"Times New Roman",serif;'>: [Indicar Observaciones o Evaluaciones]</span></li>
    <li style='margin-top:0cm;margin-right:0cm;margin-bottom:8.0pt;margin-left:0cm;font-size:11.0pt;font-family:"Calibri",sans-serif;line-height:normal;'><strong><span style='font-size:16px;font-family:"Times New Roman",serif;'>Diciembre</span></strong><span style='font-size:16px;font-family:"Times New Roman",serif;'>: [Indicar Observaciones o Evaluaciones]</span></li>
</ul>
<p style='margin-top:0cm;margin-right:0cm;margin-bottom:8.0pt;margin-left:0cm;font-size:11.0pt;font-family:"Calibri",sans-serif;line-height:normal;'><strong><span style='font-size:16px;font-family:"Times New Roman",serif;'>5. Intervenciones Realizadas Durante el A&ntilde;o</span></strong></p>
<p style='margin-top:0cm;margin-right:0cm;margin-bottom:8.0pt;margin-left:0cm;font-size:11.0pt;font-family:"Calibri",sans-serif;line-height:normal;'><span style='font-size:16px;font-family:"Times New Roman",serif;'>[Registrar por mes: profesionales involucrados, cantidad de sesiones/entrevistas y detalles de la intervenci&oacute;n.]</span></p>
<p style='margin-top:0cm;margin-right:0cm;margin-bottom:8.0pt;margin-left:0cm;font-size:11.0pt;font-family:"Calibri",sans-serif;line-height:normal;'><strong><span style='font-size:16px;font-family:"Times New Roman",serif;'>Notas Adicionales</span></strong><span style='font-size:16px;font-family:"Times New Roman",serif;'>: En cada mes, se deben documentar las sesiones y entrevistas realizadas, as&iacute; como cualquier ajuste necesario en el plan de acompa&ntilde;amiento. El seguimiento continuo y la coordinaci&oacute;n entre los diferentes profesionales involucrados son clave para asegurar el bienestar emocional y conductual del estudiante.</span></p>
HTML;

        $protocoloFarmacos = <<<'HTML'
<p>PROTOCOLO DE ADMINISTRACI&Oacute;N DE F&Aacute;RMACOS EN EL CONTEXTO ESCOLAR</p>
<p><br></p>
<p>Objetivo General:</p>
<p><br></p>
<p>Apoyar a los padres en la administraci&oacute;n adecuada de medicamentos recetados a estudiantes durante el horario escolar. Este apoyo se brindar&aacute; conforme a la solicitud del apoderado y de acuerdo con la prescripci&oacute;n m&eacute;dica, garantizando el respeto a los derechos del estudiante a recibir el tratamiento necesario para su bienestar. Tambi&eacute;n se asegurar&aacute; que los padres reciban la informaci&oacute;n y el apoyo necesario para cumplir con esta responsabilidad de manera segura y efectiva.</p>
<p><br></p>
<p>Criterios y Normas para la Administraci&oacute;n de F&aacute;rmacos en el Contexto Escolar:</p>
<p><br></p>
<p>Solicitud de Administraci&oacute;n:</p>
<p><br></p>
<p>Si el apoderado no puede administrar el medicamento al estudiante durante el horario escolar, deber&aacute; comunicarse con el establecimiento educativo para exponer la situaci&oacute;n y justificar la entrega de las dosis necesarias para su administraci&oacute;n. La evaluaci&oacute;n del caso se realizar&aacute; en funci&oacute;n de los antecedentes m&eacute;dicos proporcionados.</p>
<p>Documentaci&oacute;n Requerida:</p>
<p><br></p>
<p>El apoderado debe presentar en el establecimiento educativo:</p>
<p>Fotocopia del diagn&oacute;stico y receta m&eacute;dica actualizada, que incluya el nombre del estudiante, fecha de emisi&oacute;n, frecuencia de administraci&oacute;n, dosis y hora en que debe ser administrado el medicamento. Estos documentos deben estar firmados por el profesional tratante.</p>
<p>Informar la duraci&oacute;n del tratamiento, considerando el estado y la fecha de caducidad del medicamento.</p>
<p>Entrega y Almacenamiento de Medicamentos:</p>
<p><br></p>
<p>Los medicamentos deben ser enviados en su envase original o en un pastillero claramente marcado con los datos del estudiante para garantizar una administraci&oacute;n adecuada. Deben entregarse semanalmente al profesional responsable del protocolo.</p>
<p>Responsabilidad del Establecimiento:</p>
<p><br></p>
<p>El establecimiento educativo no podr&aacute; hacerse responsable de la administraci&oacute;n del medicamento si no se cumplen los criterios establecidos.</p>
<p>Carta de Autorizaci&oacute;n para la Administraci&oacute;n de Medicamentos</p>
<p><br></p>
<p>Estimado/a Sr./Sra. Apoderado/a:</p>
<p><br></p>
<p>Conforme al diagn&oacute;stico proporcionado por el m&eacute;dico tratante de su estudiante, usted ha solicitado que se administre un medicamento durante la jornada escolar. Para formalizar esta solicitud, le pedimos que se presente en el Establecimiento Educativo con una copia del diagn&oacute;stico y una receta m&eacute;dica actualizada. Esto permitir&aacute; respaldar la dosis necesaria para su hijo/a y formalizar su autorizaci&oacute;n para que un profesional del establecimiento administre el medicamento seg&uacute;n las indicaciones del especialista.</p>
<p><br></p>
<p>A continuaci&oacute;n, se detalla la autorizaci&oacute;n requerida:</p>
<p><br></p>
<p>Fecha: {{fecha}}</p>
<p><br></p>
<p>Autorizaci&oacute;n:</p>
<p><br></p>
<p>Autorizo al profesional {{tutor}}, perteneciente al establecimiento educativo {{colegio}}, para que administre al estudiante {{nombre}} del curso {{curso}} el/los medicamentos ___________________________________________ en los horarios _______________________________________, seg&uacute;n lo indicado por el especialista m&eacute;dico tratante, Dr. ________________________________________.</p>
<p><br></p>
<p>Nombre, Firma y RUT del Apoderado/a:</p>
<p><br></p>
<p>Firma:</p>
<p><br></p>
<p>RUT:</p>
<p><br></p>
<p>Este protocolo busca garantizar el cumplimiento seguro y efectivo de la administraci&oacute;n de medicamentos en el contexto escolar, asegurando el bienestar del estudiante y el cumplimiento de sus derechos. Agradecemos su colaboraci&oacute;n y comprensi&oacute;n en este proceso.</p>
<p><br></p>
HTML;

        $registroDesencadenantes = <<<'HTML'
<p>Registro de Desencadenantes de Desregulaci&oacute;n Emocional en Estudiantes con TEA</p>
<p>________________________________________</p>
<p>Estudiante: {{nombre}}</p>
<p>Fecha: {{fecha}}</p>
<p>Observaciones: (Registrar aqu&iacute; las observaciones detalladas sobre el comportamiento del estudiante y los desencadenantes identificados durante el episodio de desregulaci&oacute;n.)</p>
<p>Desencadenantes Identificados:</p>
<p>1. &nbsp; &nbsp;Situaciones Estresantes:</p>
<p>o &nbsp; &nbsp;Cambios inesperados en la rutina.</p>
<p>o &nbsp; &nbsp;Demandas sociales intensas o situaciones sociales conflictivas.</p>
<p>o &nbsp; &nbsp;Expectativas acad&eacute;micas o de rendimiento excesivas.</p>
<p>o &nbsp; &nbsp;Exposici&oacute;n a situaciones desconocidas o desafiantes.</p>
<p>o &nbsp; &nbsp;Otros: (Especificar)</p>
<p>2. &nbsp; &nbsp;Cambios en la Rutina:</p>
<p>o &nbsp; &nbsp;Alteraciones en el horario escolar.</p>
<p>o &nbsp; &nbsp;Modificaciones en las actividades planificadas.</p>
<p>o &nbsp; &nbsp;Interrupciones en los patrones de sue&ntilde;o o alimentaci&oacute;n.</p>
<p>o &nbsp; &nbsp;Transiciones entre actividades o entornos.</p>
<p>o &nbsp; &nbsp;Otros: (Especificar)</p>
<p>3. &nbsp; &nbsp;Sobreestimulaci&oacute;n Sensorial:</p>
<p>o &nbsp; &nbsp;Ambientes ruidosos o muy concurridos.</p>
<p>o &nbsp; &nbsp;Luces brillantes o parpadeantes.</p>
<p>o &nbsp; &nbsp;Texturas, olores o sabores desagradables.</p>
<p>o &nbsp; &nbsp;Sensaciones t&aacute;ctiles intensas o invasivas.</p>
<p>o &nbsp; &nbsp;Otros: (Especificar)</p>
<p>4. &nbsp; &nbsp;Dificultades de Comunicaci&oacute;n:</p>
<p>o &nbsp; &nbsp;Dificultades para expresar necesidades o emociones.</p>
<p>o &nbsp; &nbsp;Falta de comprensi&oacute;n de instrucciones o informaci&oacute;n.</p>
<p>o &nbsp; &nbsp;Barreras en la comunicaci&oacute;n no verbal.</p>
<p>o &nbsp; &nbsp;Fracaso en la interpretaci&oacute;n de las se&ntilde;ales sociales.</p>
<p>o &nbsp; &nbsp;Otros: (Especificar)</p>
<p>Acciones Tomadas: (Registrar aqu&iacute; las acciones tomadas por el personal educativo y de apoyo para abordar los desencadenantes identificados y manejar el episodio de desregulaci&oacute;n.)</p>
<p>Comentarios Adicionales: (Especificar cualquier comentario relevante o informaci&oacute;n adicional sobre el episodio de desregulaci&oacute;n y las estrategias utilizadas para gestionarlo.)</p>
<p>________________________________________</p>
<p>Este registro proporciona un formato estructurado para documentar los episodios de desregulaci&oacute;n emocional en estudiantes con TEA, facilitando la identificaci&oacute;n de patrones y la implementaci&oacute;n de estrategias efectivas para el manejo de estas situaciones.</p>
<p><br></p>
<p><br></p>
<p><br></p>
<p><br></p>
<p><br></p>
<p><br></p>
HTML;

        $tipos = [
            [
                'nombre'      => 'FICHA DE SEGUIMIENTO INDIVIDUALIZADA PARA DESREGULACIÓN EMOCIONAL',
                'descripcion' => 'Registro detallado de episodios de desregulación emocional del estudiante.',
                'html'        => null, // se genera dinámicamente desde un formulario, no usa plantilla HTML fija
                'activo'      => true,
            ],
            [
                'nombre'      => 'AUTORIZACION',
                'descripcion' => 'Autorización del apoderado para el abordaje y manejo de desregulaciones emocionales.',
                'html'        => $autorizacion,
                'activo'      => true,
            ],
            [
                'nombre'      => 'certificado para el empleador',
                'descripcion' => 'Certificado emitido para que el apoderado justifique ausencia laboral por atención al estudiante.',
                'html'        => $certificadoEmpleador,
                'activo'      => true,
            ],
            [
                'nombre'      => 'contrato de contingencia',
                'descripcion' => 'Contrato que establece los apoyos y horarios de los profesionales PIE.',
                'html'        => $contratoContingencia,
                'activo'      => true,
            ],
            [
                'nombre'      => 'PLAN DE ACOMPAÑAMIENTO EMOCIONAL Y CONDUCTUAL',
                'descripcion' => 'Plan individualizado de estrategias para el acompañamiento emocional y conductual del estudiante.',
                'html'        => $planAcompanamiento,
                'activo'      => true,
            ],
            [
                'nombre'      => 'PROTOCOLO DE ADMINISTRACIÓN DE FÁRMACOS EN EL CONTEXTO ESCOLAR',
                'descripcion' => 'Protocolo para la administración segura de medicamentos dentro del establecimiento.',
                'html'        => $protocoloFarmacos,
                'activo'      => true,
            ],
            [
                'nombre'      => 'Registro de Desencadenantes de Desregulación Emocional en Estudiantes con TEA',
                'descripcion' => 'Documento para identificar y registrar los factores que desencadenan desregulaciones emocionales.',
                'html'        => $registroDesencadenantes,
                'activo'      => true,
            ],
        ];

        foreach ($tipos as $tipo) {
            $nombre = $tipo['nombre'];
            unset($tipo['nombre']);

            DB::table('tipos_documentos')->updateOrInsert(
                ['nombre' => $nombre],
                array_merge($tipo, ['updated_at' => now()])
            );

            DB::table('tipos_documentos')
                ->where('nombre', $nombre)
                ->whereNull('created_at')
                ->update(['created_at' => now()]);
        }
    }

    public function down(): void
    {
        // No-op: no borramos tipos de documentos al revertir, podrían tener documentos asociados.
    }
};
