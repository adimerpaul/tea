<?php

namespace App\Http\Controllers;

use App\Models\Abordaje;
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
            'documentable' => $document->documentable
        ];
        $pdf = Pdf::loadView('pdf.abordajes', $data);
//        return $pdf->download('abordajes.pdf');
        return $pdf->stream();
    }
    public function store(Request $request){
        $user_id = $request->user()->id;
        $student_id = $request->student_id;
        $documento = $request->document;
//        error_log(json_encode($documento));
        error_log($user_id);
//        documents: [
//            'AUTORIZACIÓN PARA EL ABORDAJE DEC.',
//            'CERTIFICADO PARA EL EMPLEADOR',
//            'CONTRATO DE CONTIGENCIAS',
//            'FICHA DEL PLAN DE APOYO INDIVIDUALIZADO (PAI) PARA ESTUDIANTES CON TEA',
//            'PLAN DE ACOMPAÑAMIENTO EMOCIONAL Y CONDUCTUAL',
//            'FICHA DE SEGUIMIENTO INDIVIDUALIZADA PARA DESREGULACIÓN EMOCIONAL'
//        ],
        if ($documento['name'] == 'AUTORIZACIÓN PARA EL ABORDAJE DEC.'){
            $abordaje = new Abordaje();
            $abordaje->description = $documento['description'];
            $abordaje->save();

            $document = new Document();
//            ['description', 'date', 'student_id', 'user_id', 'documentable_id', 'documentable_type'];
            $document->description = $documento['name'];
            $document->date = date('Y-m-d H:i:s');
            $document->student_id = $student_id;
            $document->user_id = $user_id;
            $document->documentable_id = $abordaje->id;
            $document->documentable_type = 'App\Models\Abordaje';
            $document->save();
        }
        return $document;
    }
}
