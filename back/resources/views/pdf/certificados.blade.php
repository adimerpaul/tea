@extends('pdf.layouts.pdf')

@section('content')
    <div class="bold center h1">
        CERTIFICADO
        <br>
        <div>
            Aplicación del protocolo integral para la gestión de la desregulación emocional y/o conductual
        </div>
    </div>
    <br><br>
    <div style="line-height: 1.5; text-align: center;">
        <table style="width: 100%; border-collapse: collapse;" class="h5 center-table">
            <tr style="background: rgba(0, 172, 193, 0.50);">
                <td style="border: 1px solid black;width: 35%">NOMBRE DEL ESTUDIANTE</td>
                <td style="border: 1px solid black;">{{ $student->name }}</td>
            </tr>
            <tr>
                <td style="border: 1px solid black;">CURSO</td>
                <td style="border: 1px solid black;">{{ $student->course }}</td>
            </tr>
        </table>
    </div>
    <br>
    <div style="line-height: 1.5; text-align: center;">
        <table style="width: 100%; border-collapse: collapse;" class="h5 center-table">
            <tr style="background: rgba(0, 172, 193, 0.50);">
                <td style="border: 1px solid black;;width: 35%">NOMBRE APODERADO/A</td>
                <td style="border: 1px solid black;">{{ $student->tutorName }}</td>
            </tr>
            <tr>
                <td style="border: 1px solid black;">RUT APODERADO/A</td>
                <td style="border: 1px solid black;">{{ $student->tutorRut }}</td>
            </tr>
        </table>
    </div>
    <br><br>

    <div style="line-height: 1.5; text-align: center;">
        <table style="width: 100%; border-collapse: collapse;" class="h5 center-table">
            <tr style="background: rgba(0, 172, 193, 0.50);">
                <th style="border: 1px solid black;;width: 35%">DESCRIPICIÓN DE LA DEC (antecedentes relevantes, lugar, duración, entre otros)</th>
{{--                <td style="border: 1px solid black;">{{ $student->tutorName }}</td>--}}
            </tr>
            <tr>
{{--                <td style="border: 1px solid black;">RUT APODERADO/A</td>--}}
                <td style="border: 1px solid black;height: 100px" valign="top">{{ $documentable->description }}</td>
            </tr>
        </table>
    </div>
    <br>
    <div style="line-height: 1.5; text-align: center;">
        <table style="width: 100%; border-collapse: collapse;" class="h5 center-table">
            <tr style="background: rgba(0, 172, 193, 0.50);">
                <th style="border: 1px solid black;" colspan="3">DESCRIPICIÓN DE LA DEC (antecedentes relevantes, lugar, duración, entre otros)</th>
            </tr>
            <tr>
                <th width="33%" style="border: 1px solid black" valign="top">Etapa inicial</th>
                <th width="34%" style="border: 1px solid black" valign="top">Etapa de aumento de la desregulación emocional y conductual, con riesgo para sí mismo/a o terceros</th>
                <th width="33%" style="border: 1px solid black" valign="top">Etapa de crisis declarada, cuando el descontrol y los riesgos para sí o terceros implican la necesidad de contener físicamente al estudiante</th>
            </tr>
            <tr style="background: rgba(0, 172, 193, 0.50);">
                <td width="33%" style="border: 1px solid black" valign="top">{{ $documentable->etapa_inial }}</td>
                <td width="34%" style="border: 1px solid black" valign="top">{{ $documentable->aumento }}</td>
                <td width="33%" style="border: 1px solid black" valign="top">{{ $documentable->crisis }}</td>
            </tr>
        </table>
    </div>
    <br>
    <div style="line-height: 1.5; text-align: center;">
        <table style="width: 100%; border-collapse: collapse;" class="h5 center-table">
            <tr style="background: rgba(0, 172, 193, 0.50);">
                <th width="25%" style="border: 1px solid black" valign="top">Hora de inicio</th>
                <th width="25%" style="border: 1px solid black" valign="top">Hora de llamada apoderado/a</th>
                <th width="25%" style="border: 1px solid black" valign="top">Hora de llegada apoderado/a</th>
                <th width="25%" style="border: 1px solid black" valign="top">Hora de termino</th>
            </tr>
            <tr>
                <th width="25%" style="border: 1px solid black;height: 20px" valign="top">{{ $documentable->hora_inicio }}</th>
                <th width="25%" style="border: 1px solid black;height: 20px" valign="top">{{ $documentable->hora_llamada }}</th>
                <th width="25%" style="border: 1px solid black;height: 20px" valign="top">{{ $documentable->hora_llegada }}</th>
                <th width="25%" style="border: 1px solid black;height: 20px" valign="top">{{ $documentable->hora_termino }}</th>
            </tr>
        </table>
    </div>
    <br>
    <div>
        Se emite el presente certificado para ser presentado al empleador del apoderado/a por atender a la desregulación emocional y/o conductual de su pupilo.
    </div>
    <table style="width: 100%; margin-top: 100px;">
        <tr>
            <td style="text-align: center;">
                __________________________
            </td>
            <td style="text-align: center;">
                __________________________
            </td>
        </tr>
        <tr>
            <td valign="top" style="text-align: center;">
                <div class="bold center h4">
                    Firma del apoderado/a
                </div>
            </td>
            <td style="text-align: center;">
                <div class="bold center h4">
                    Firma y timbre <br>
                    representante <br>
                    establecimiento
                </div>
            </td>
        </tr>
    </table>
@endsection
