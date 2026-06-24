<?php

namespace App\Http\Controllers;

use App\Models\Student;
use Barryvdh\DomPDF\Facade\Pdf;
use Illuminate\Http\Request;

class StudentController extends Controller{

    public function printAntecedentes($id)
    {
        $student  = Student::with(['histories.user', 'colegio'])->findOrFail($id);
        $pdf      = Pdf::loadView('pdf.antecedentes', compact('student'))
                        ->setPaper('letter', 'portrait');
        $filename = 'antecedentes_' . str_replace([' ', '/'], '_', $student->rut) . '.pdf';
        return $pdf->stream($filename);
    }

    public function printDocumentos($id)
    {
        $student   = Student::with(['colegio'])->findOrFail($id);
        $documents = \App\Models\Document::where('student_id', $id)
                        ->orderBy('date', 'desc')
                        ->with('user')
                        ->get();
        $pdf       = Pdf::loadView('pdf.documentos', compact('student', 'documents'))
                        ->setPaper('letter', 'portrait');
        $filename  = 'documentos_' . str_replace([' ', '/'], '_', $student->rut) . '.pdf';
        return $pdf->stream($filename);
    }

    public function printAntecedenteSingle($id, $historyId)
    {
        $student = Student::with(['colegio'])->findOrFail($id);
        $history = \App\Models\History::with('user')->findOrFail($historyId);
        $pdf     = Pdf::loadView('pdf.antecedente_single', compact('student', 'history'))
                        ->setPaper('letter', 'portrait');
        $filename = 'antecedente_' . str_replace([' ', '/'], '_', $student->rut) . '_' . $historyId . '.pdf';
        return $pdf->stream($filename);
    }
    function fotoStudent(Request $request, $id){
        $request->validate([
            'file' => 'required|file|mimes:jpeg,png,jpg|max:10240',
        ]);
        if ($request->hasFile('file')) {
            $file = $request->file('file');
            $name = time().'_'.$file->getClientOriginalName();
            $file->move(public_path('students'), $name);
            $student = Student::find($id);
            $student->foto = $name;
            $student->save();
            return $student;
        }
    }
    public function index(Request $request){
        $role = $request->user()->role;
        if ($role == 'ADMIN') {
            return Student::with(['colegio', 'user'])
                ->orderBy('id', 'desc')
                ->get();
//            ENCARGADO PIE
        } else if($role == 'ENCARGADO PIE' || $role == 'DOCENTE' || $role == 'ASISTENTE EDUCATIVO' || $role == 'ADMIN COLEGIO'){
            return Student::with(['colegio', 'user'])
                ->where('colegio_id', $request->user()->colegio_id)
                ->orderBy('id', 'desc')
                ->get();
        } else{
            return Student::with(['colegio', 'user'])
                ->where('user_id', $request->user()->id)
                ->orderBy('id', 'desc')
                ->get();
        }
    }
    public function store(Request $request){
        $student= Student::create($request->all());
        return Student::with(['colegio', 'user'])->find($student->id);
    }
    public function show($id){
        return Student::with(['histories', 'diagnoses','colegio'])->find($id);
    }
    public function update(Request $request, $id){
        $student = Student::find($id);
        $student->update($request->all());
        return Student::with(['colegio', 'user'])->find($student->id);
    }
    public function destroy($id){
        return Student::destroy($id);
    }
}
