<?php

namespace App\Http\Controllers;

use App\Models\Student;
use Illuminate\Http\Request;

class StudentController extends Controller{
    public function index(){
        return Student::with('colegio')
            ->orderBy('id', 'desc')
            ->get();
    }
    public function store(Request $request){
        $student= Student::create($request->all());
        return Student::with('colegio')->find($student->id);
    }
    public function show($id){
        return Student::with(['histories', 'diagnoses'])->find($id);
    }
    public function update(Request $request, $id){
        $student = Student::find($id);
        $student->update($request->all());
        return Student::with('colegio')->find($student->id);
    }
    public function destroy($id){
        return Student::destroy($id);
    }
}
