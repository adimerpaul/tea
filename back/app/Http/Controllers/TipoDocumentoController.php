<?php

namespace App\Http\Controllers;

use App\Models\TipoDocumento;
use Illuminate\Http\Request;

class TipoDocumentoController extends Controller
{
    public function index(Request $request)
    {
        $query = TipoDocumento::orderBy('nombre');

        // El módulo admin pasa ?todos=1 para ver todos; el selector de ficha solo ve activos
        if (!$request->boolean('todos')) {
            $query->where('activo', true);
        }

        return $query->get();
    }

    public function store(Request $request)
    {
        $request->validate([
            'nombre' => 'required|string|unique:tipos_documentos,nombre',
        ]);

        return TipoDocumento::create([
            'nombre'      => $request->nombre,
            'descripcion' => $request->descripcion,
            'activo'      => true,
        ]);
    }

    public function update(Request $request, $id)
    {
        $tipo = TipoDocumento::findOrFail($id);

        $request->validate([
            'nombre' => 'required|string|unique:tipos_documentos,nombre,' . $id,
        ]);

        $tipo->update($request->only(['nombre', 'descripcion', 'html', 'activo']));

        return $tipo;
    }

    public function destroy($id)
    {
        TipoDocumento::findOrFail($id)->delete();
        return response()->json(['message' => 'Eliminado']);
    }
}
