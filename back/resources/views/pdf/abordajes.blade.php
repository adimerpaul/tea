@extends('pdf.layouts.pdf')
@section('content')
<div class="bold center h1">
    AUTORIZACIÓN
    <br>
    <div>
        Aplicación del protocolo integral para la gestión de la desregulación emocional y/o conductual
    </div>
</div>
<br><br>
<div style="line-height: 1.5; text-align: justify;">
    Yo {{$student->tutorName}}, RUT: {{$student->tutorRut}}
    apoderado/a de {{$student->name}} estudiante del curso {{$student->course}}. Estoy en conocimiento del protocolo integral para la gestión de la desregulación emocional y/o conductual de estudiantes, por lo cual, autorizo al personal especializado o SOS del establecimiento para que brinde la contención emocional y física presente en el protocolo, en caso que mi pupilo presente una desregulación emocional y/o conductual en el establecimiento.
    Además, para facilitar su manejo, informo las siguientes estrategias para su contención:
</div>
<br>
<br>
<div style="padding: 10px; border: 1px solid black;line-height: 1.5;height: 250px; text-align: justify;">
    {{$documentable->description}}
</div>
<table style="width: 100%; margin-top: 100px;">
    <tr>
        <td>
            <div class="center">
                __________________________
            </div>
        </td>
        <td>
            <div class="center">
                __________________________
            </div>
        </td>
    </tr>
    <tr>
        <td valign="top">
            <div class="bold center h4">
                Firma del apoderado/a
            </div>
        </td>
        <td>
            <div class="bold center h4">
                Firma y timbre <br>
                representante <br>
                establecimiento.
            </div>
        </td>
    </tr>
</table>
@endsection
