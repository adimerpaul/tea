<?php

namespace App\Http\Controllers;

use App\Models\Student;
use Illuminate\Http\Request;

class StudentController extends Controller{
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
        } else {
            return Student::with(['colegio', 'user'])
                ->where('colegio_id', $request->user()->colegio_id)
                ->orderBy('id', 'desc')
                ->get();
        }
    }
    public function store(Request $request){
        $student= Student::create($request->all());
        return Student::with(['colegio', 'user'])->find($student->id);
    }
    public function show($id){
        return Student::with(['histories', 'diagnoses'])->find($id);
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
