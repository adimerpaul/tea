<?php

namespace App\Http\Controllers;

use App\Models\Student;
use Illuminate\Http\Request;

class StudentController extends Controller{
    public function index(){
        return Student::orderBy('id', 'desc')->get();
    }
    public function store(Request $request){
        return Student::create($request->all());
    }
    public function show($id){
        return Student::with(['histories', 'diagnoses'])->find($id);
    }
    public function update(Request $request, $id){
        $student = Student::find($id);
        $student->update($request->all());
        return $student;
    }
    public function destroy($id){
        return Student::destroy($id);
    }
}
