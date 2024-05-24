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
    <div style="line-height: 1.5; text-align: justify;">
        <table style="width: 100%;collapse: collapse;border: 1px solid black;" class="h5">
            <tr>
                <td>NOMBRE DEL ESTUDIANTE</td>
                <td>{{$student->name}}</td>
            </tr>
        </table>
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
