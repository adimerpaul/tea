<?php

namespace App\Http\Controllers;

use App\Models\Abordaje;
use App\Models\Certificado;
use App\Models\Document;
use Barryvdh\DomPDF\Facade\Pdf;
use Illuminate\Http\Request;

class DocumentController extends Controller{
    public function index(Request $request){
        $student_id = $request->input('student_id');
        return Document::where('student_id', $student_id)
            ->orderBy('date', 'desc')
            ->with('user')
            ->get();
    }
    public function download($id){
        $document = Document::find($id);
        $data = [
            'document' => $document,
            'user' => $document->user,
            'student' => $document->student,
            'documentable' => $document->documentable_id == 0 ? null : $document->documentable
        ];
//        return $data;
//        if ($document->description == 'AUTORIZACIÓN PARA EL ABORDAJE DEC.'){
//            $pdf = Pdf::loadView('pdf.abordajes', $data);
//        }elseif ($document->description == 'CERTIFICADO PARA EL EMPLEADOR'){
//            $pdf = Pdf::loadView('pdf.certificados', $data);
//        }else{
            $pdf = Pdf::loadView('pdf.html', $data);
//        }
//        return $pdf->download('abordajes.pdf');
        return $pdf->stream();
    }
    public function showMobile($codigo){
        $document = Document::where('codigo', $codigo)->first();
        if (!$document){
            return response()->json(['message' => 'No se encontró el documento'], 404);
        }
        $data = [
            'document' => $document,
            'user' => $document->user,
            'student' => $document->student,
            'documentable' => $document->documentable
        ];
        if ($document->description == 'AUTORIZACIÓN PARA EL ABORDAJE DEC.'){
            $pdf = Pdf::loadView('pdf.abordajes', $data);
        }elseif ($document->description == 'CERTIFICADO PARA EL EMPLEADOR'){
            $pdf = Pdf::loadView('pdf.certificados', $data);
        }
//        return $pdf->download('abordajes.pdf');
        return $pdf->stream();
    }
    public function download64($id){
        $document = Document::find($id);
        $data = [
            'document' => $document,
            'user' => $document->user,
            'student' => $document->student,
            'documentable' => $document->documentable_id == 0 ? null : $document->documentable
        ];
//        if ($document->description == 'AUTORIZACIÓN PARA EL ABORDAJE DEC.'){
//            $pdf = Pdf::loadView('pdf.abordajes', $data);
//        }elseif ($document->description == 'CERTIFICADO PARA EL EMPLEADOR'){
//            $pdf = Pdf::loadView('pdf.certificados', $data);
//        }
        $pdf = Pdf::loadView('pdf.html', $data);
        $pdf64 = base64_encode($pdf->output());
        return response()->json(['pdf' => $pdf64]);
    }
    public function show($id){
        $document = Document::find($id);
        return $document;
    }
    public function update(Request $request, $id){
        $document = Document::find($id);
        $document->html = $request->html;
        $document->save();
        return $document;
    }
    public function store(Request $request){
        $validated = $request->validate([
            'student_id' => 'required',
            'document' => 'required'
        ]);

        $user_id = $request->user()->id;
        $student_id = $request->student_id;
        $documento = $request->document;
//        error_log(json_encode($documento));
//        documents: [
//            'AUTORIZACIÓN PARA EL ABORDAJE DEC.',
//            'CERTIFICADO PARA EL EMPLEADOR',
//            'CONTRATO DE CONTIGENCIAS',
//            'FICHA DEL PLAN DE APOYO INDIVIDUALIZADO (PAI) PARA ESTUDIANTES CON TEA',
//            'PLAN DE ACOMPAÑAMIENTO EMOCIONAL Y CONDUCTUAL',
//            'FICHA DE SEGUIMIENTO INDIVIDUALIZADA PARA DESREGULACIÓN EMOCIONAL'
//        ],
        $document = new Document();
//        if ($documento['name'] == 'AUTORIZACIÓN PARA EL ABORDAJE DEC.'){
//            $abordaje = new Abordaje();
//            $abordaje->description = isset($documento['description']) ? $documento['description'] : '';
//            $abordaje->save();
//
//            $document->description = $documento['name'];
//            $document->documentable_id = $abordaje->id;
//            $document->documentable_type = 'App\Models\Abordaje';
//
//        }elseif ($documento['name'] == 'CERTIFICADO PARA EL EMPLEADOR') {
//            $certificado = new Certificado();
//
//            $certificado->description = isset($documento['description']) ? $documento['description'] : '';
//            $certificado->etapa_inial = isset($documento['etapa_inial']) ? $documento['etapa_inial'] : '';
//            $certificado->aumento = isset($documento['aumento']) ? $documento['aumento'] : '';
//            $certificado->crisis = isset($documento['crisis']) ? $documento['crisis'] : '';
//            $certificado->hora_inicio = isset($documento['hora_inicio']) ? $documento['hora_inicio'] : null;
//            $certificado->hora_llamada = isset($documento['hora_llamada']) ? $documento['hora_llamada'] : null;
//            $certificado->hora_llegada = isset($documento['hora_llegada']) ? $documento['hora_llegada'] : null;
//            $certificado->hora_termino = isset($documento['hora_termino']) ? $documento['hora_termino'] : null;
//            $certificado->save();
//
//            $document->description = $documento['name'];
//            $document->documentable_id = $certificado->id;
//            $document->documentable_type = 'App\Models\Certificado';
//        }else{
            $document->description = $documento['name'];
            $document->documentable_id = 0;
            $document->documentable_type = '';
            $document->html = isset($documento['html']) ? $documento['html'] : '';
//        }

        $document->date = date('Y-m-d H:i:s');
        $document->student_id = $student_id;
        $document->user_id = $user_id;
        $codigo10caracteres = substr(md5(uniqid(rand())),0,10);
        $document->codigo = $codigo10caracteres;
        $document->save();
        return $document;
    }
    public function destroy($id){
        $document = Document::find($id);
        $document->delete();
        return $document;
    }
}
