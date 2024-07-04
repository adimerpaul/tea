<?php

namespace App\Http\Controllers;

use App\Models\Student;
use Illuminate\Http\Request;

class ReporteController extends Controller{
    function reporteEstudiantes(Request $request){
        $cursos = [
            'PREKINDER',
            'KINDER',
            '1ER BASICO',
            '2DO BASICO',
            '3ER BASICO',
            '4TO BASICO',
            '5TO BASICO',
            '6TO BASICO',
            '7MO BASICO',
            '8VO BASICO',
            '1ER SECUNDARIA',
            '2DO SECUNDARIA',
            '3ER SECUNDARIA',
            '4TO SECUNDARIA',
        ];
        $cursosSort = [
            'PREKIN',
            'KIN',
            '1ER B',
            '2DO B',
            '3ER B',
            '4TO B',
            '5TO B',
            '6TO B',
            '7MO B',
            '8VO B',
            '1ER S',
            '2DO S',
            '3ER S',
            '4TO S',
        ];
        $data = [];
        foreach ($cursos as $curso){
            $data[] = Student::where('course', $curso)->count();
        }
        $res= $this->reportePorFechas();
        return response()->json([
            'data' => $data,
            'labels' => $cursosSort,
            'data2' => $res['data'],
            'labels2' => $res['labels'],
        ]);
    }
    function reportePorFechas(){
        $data = [];
        $years = Student::select('year')->distinct()->get();
        $labels = [];
        foreach ($years as $year){
            $data[] = Student::where('year', $year->year)->count();
            $labels[] = $year->year;
        }
        return [
            'data' => $data,
            'labels' => $labels
        ];
    }
}
