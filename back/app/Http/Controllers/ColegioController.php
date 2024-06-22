<?php

namespace App\Http\Controllers;

use App\Models\Colegio;
use Illuminate\Http\Request;

class ColegioController extends Controller{
    public function index(){
        return Colegio::orderBy('id', 'desc')->get();
    }
    function store(Request $request){
////        subir imagen
//        $imagen = $request->file('logo');
//        $nombre = time().'_'.$imagen->getClientOriginalName();
//        $imagen->move('imagenes', $nombre);

        $colegio = new Colegio();
        $colegio->nombre = $request->nombre;
        $colegio->codigo = $request->codigo;
//        $colegio->logo = $nombre;
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
