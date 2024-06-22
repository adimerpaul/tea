<?php

namespace App\Http\Controllers;

use App\Models\Colegio;
use Illuminate\Http\Request;

class ColegioController extends Controller{
    public function index(){
        return Colegio::orderBy('id', 'desc')->get();
    }
    function store(Request $request){
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
        return $colegio;
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
        $colegio = Colegio::find($id);
        $imagen = $request->file('logo');
        $nombre = time().'_'.$imagen->getClientOriginalName();
        $imagen->move('imagenes', $nombre);
        $colegio->logo = $nombre;
        $colegio->save();
        return $colegio;
    }
}
