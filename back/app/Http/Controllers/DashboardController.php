<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class DashboardController extends Controller{
    public function index(Request $request){
        error_log($request->user()->role);
        $user = $request->user();

        if ($user->role == 'ADMIN') {
            $data = [
                'users' => \App\Models\User::count(),
                'students' => \App\Models\Student::count(),
                'diagnoses' => \App\Models\Diagnosis::count(),
                'documents' => \App\Models\Document::count(),
                'appointments' => \App\Models\Appointment::count(),
                'histories' => \App\Models\History::count(),
            ];
            return $data;
        }else{
            $data = [
                'users' => \App\Models\User::where('colegio_id', $user->colegio_id)->count(),
                'students' => \App\Models\Student::where('colegio_id', $user->colegio_id)->count(),
                'diagnoses' => \App\Models\Diagnosis::whereHas('student', function($q) use ($request){
                    $q->where('colegio_id', $request->user()->colegio_id);
                })->count(),
                'documents' => \App\Models\Document::whereHas('student', function($q) use ($request){
                    $q->where('colegio_id', $request->user()->colegio_id);
                })->count(),
                'appointments' => \App\Models\Appointment::whereHas('student', function($q) use ($request){
                    $q->where('colegio_id', $request->user()->colegio_id);
                })->count(),
                'histories' => \App\Models\History::whereHas('student', function($q) use ($request){
                    $q->where('colegio_id', $request->user()->colegio_id);
                })->count(),
                'colegios' => \App\Models\Colegio::where('id', $user->colegio_id)->count(),
            ];
            return $data;
        }
    }
}
