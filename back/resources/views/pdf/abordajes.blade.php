<!doctype html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport"
          content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Abordaje</title>
    <style>
        *{
            font-family: Calibri;
        }
        .center {
            text-align: center;
        }
        .h6 {
            font-size: 10px;
        }
        .h5 {
            font-size: 12px;
        }
        .h4 {
            font-size: 14px;
        }
        .h3 {
            font-size: 16px;
        }
        .h2 {
            font-size: 18px;
        }
        .h1 {
            font-size: 20px;
        }
        .bold {
            font-weight: bold;
        }
        .mt-1 {
            margin-top: 5px;
        }
        .mt-2 {
            margin-top: 10px;
        }
        .mt-3 {
            margin-top: 15px;
        }
        .mt-4 {
            margin-top: 20px;
        }
        .mt-5 {
            margin-top: 25px;
        }
        .w-100 {
            width: 100%;
        }
        .w-50 {
            width: 50%;
        }
        .w-25 {
            width: 25%;
        }

    </style>
</head>
<body>

<div style="text-align: right;font-size: 10px;">
    {{$document->date}}
    <br>
    {{$user->name}}
</div>
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
    apoderado/a de {{$student->tutorName}} estudiante del curso {{$student->course}}. Estoy en conocimiento del protocolo integral para la gestión de la desregulación emocional y/o conductual de estudiantes, por lo cual, autorizo al personal especializado o SOS del establecimiento para que brinde la contención emocional y física presente en el protocolo, en caso que mi pupilo presente una desregulación emocional y/o conductual en el establecimiento.
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
        <td>
            <div class="bold center h4">
                Firma del apoderado/a
            </div>
        </td>
        <td>
            <div class="bold center h4">
                Firma del estudiante
            </div>
        </td>
    </tr>
</table>
</body>
</html>
