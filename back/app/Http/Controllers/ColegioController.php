<?php

namespace App\Http\Controllers;

use App\Models\Colegio;
use App\Models\Protocolo;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class ColegioController extends Controller{
    public function index(){
        return Colegio::orderBy('id', 'desc')->get();
    }
    function store(Request $request){
        try {
            DB::beginTransaction();
            $colores =['F44336', 'E91E63', '9C27B0', '673AB7', '3F51B5', '2196F3', '03A9F4', '00BCD4', '009688', '4CAF50', '8BC34A', 'CDDC39', 'FFEB3B', 'FFC107', 'FF9800', 'FF5722', '795548', '9E9E9E', '607D8B'];
            $color = $colores[rand(0, count($colores)-1)];
            $colegio = new Colegio();
            $colegio->nombre = $request->nombre;
            $colegio->codigo = $request->codigo;
            $colegio->color = $color;
            $colegio->direccion = $request->direccion;
            $colegio->telefono = $request->telefono;
            $colegio->email = $request->email;
            $colegio->save();
            //crear 5 protocolors
            $protocolo = new Protocolo();
            $protocolo->nombre = strtoupper('PROTOCOLO DESREGULACIÓN EMOCIONAL Y CONDUCTUAL 2.0');
            $protocolo->html = file_get_contents('p1.txt');
            $protocolo->colegio_id = $colegio->id;
            $protocolo->save();
            $protocolo = new Protocolo();
            $protocolo->nombre = strtoupper('PROTOCOLO PARA ESTUDIANTES EN GENERAL');
            $protocolo->html = file_get_contents('p2.txt');
            $protocolo->colegio_id = $colegio->id;
            $protocolo->save();
            $protocolo = new Protocolo();
            $protocolo->nombre = strtoupper('Protocolo para estudiantes TEA');
            $protocolo->html = file_get_contents('p3.txt');
            $protocolo->colegio_id = $colegio->id;
            $protocolo->save();
            $protocolo = new Protocolo();
            $protocolo->nombre = strtoupper('protocolo y acciones');
            $protocolo->html = file_get_contents('p4.txt');
            $protocolo->colegio_id = $colegio->id;
            $protocolo->save();
            $protocolo = new Protocolo();
            $protocolo->nombre = strtoupper('Protocolo de accion en caso de desregulacion conductual y emocional 1');
            $protocolo->html = file_get_contents('p5.txt');
            $protocolo->colegio_id = $colegio->id;
            $protocolo->save();
            DB::commit();
            return Colegio::where('id', $colegio->id)->first();
        }catch (\Exception $e){
            DB::rollBack();
            return response()->json(['message' => $e->getMessage()], 500);
        }
    }
    function update(Request $request, $id){
        $colegio = Colegio::find($id);
        $colegio->nombre = $request->nombre;
        $colegio->codigo = $request->codigo;
        $colegio->direccion = $request->direccion;
        $colegio->telefono = $request->telefono;
        $colegio->email = $request->email;
        $colegio->save();
        return $colegio;
    }
    function destroy($id){
        $colegio = Colegio::find($id);
        $colegio->delete();
        return $colegio;
    }
    function fotoColegio(Request $request, $id){
        $validated = $request->validate([
            'logo' => 'required|image|mimes:jpeg,png,jpg,gif,svg|max:2048',
        ]);
        $colegio = Colegio::find($id);
        $imagen = $request->file('logo');
        $nombre = time().'_'.$imagen->getClientOriginalName();
        $imagen->move('imagenes', $nombre);
        $colegio->logo = $nombre;
        $colegio->save();
        return $colegio;
    }
}
