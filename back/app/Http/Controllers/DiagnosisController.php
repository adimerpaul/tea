<?php

namespace App\Http\Controllers;

use App\Models\Diagnosis;
use Illuminate\Http\Request;

class DiagnosisController extends Controller{
    public function store(Request $request){
        $request->validate([
            'file' => 'required|file|mimes:pdf|max:10240',
        ]);
        if ($request->hasFile('file')) {
            $file = $request->file('file');
            $name = time().'_'.$file->getClientOriginalName();
            $nameNoExt = pathinfo($file->getClientOriginalName(), PATHINFO_FILENAME);
            $file->move(public_path('diagnosis'), $name);
            $diagnosis = new Diagnosis();
            $diagnosis->student_id = $request->student_id;
            $diagnosis->user_id = auth()->id();
            $diagnosis->name = $nameNoExt;
            $diagnosis->url_diagnosis = 'diagnosis/'.$name;
            $diagnosis->save();
            return $diagnosis;
        }
    }
    public function destroy($id){
        $diagnosis = Diagnosis::find($id);
        if ($diagnosis) {
            $diagnosis->delete();
            return response()->json(['message' => 'Diagnosis deleted']);
        }
        return response()->json(['message' => 'Diagnosis not found'], 404);
    }
}
