<?php

namespace App\Http\Controllers;

use App\Models\Protocolo;
use Barryvdh\DomPDF\Facade\Pdf;
use Illuminate\Http\Request;

class ProtocoloController extends Controller{
    function update(Request $request, $id){
        $protocolo = Protocolo::find($id);
        $protocolo->html = $request->input('html');
        $protocolo->save();
        return response()->json($protocolo);
    }
    public function index(Request $request){
        $colegio_id = $request->user()->colegio_id;
        $protocolos = Protocolo::where('colegio_id', $colegio_id)->get();
        return response()->json($protocolos);
    }
    function protocolospdf($id){
        $protocolo = Protocolo::find($id);
        $data = [
            'html' => $protocolo->html
        ];
        $pdf = Pdf::loadView('pdf.file', $data);

        return $pdf->stream();
    }
}
