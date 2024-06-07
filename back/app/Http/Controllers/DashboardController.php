<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class DashboardController extends Controller{
    public function index(){
        $data = [
            'users' => \App\Models\User::count(),
            'students' => \App\Models\Student::count(),
            'diagnoses' => \App\Models\Diagnosis::count(),
            'documents' => \App\Models\Document::count(),
            'appointments' => \App\Models\Appointment::count(),
            'histories' => \App\Models\History::count(),
        ];
        return $data;
    }
}
