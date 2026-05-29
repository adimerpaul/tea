<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class DiagnosisSeeder extends Seeder
{
    public function run(): void
    {
        DB::table('diagnoses')->insert([
            [
                'student_id'    => 1,
                'user_id'       => 3,
                'name'          => 'Trastorno del Espectro Autista (TEA) Nivel 1',
                'url_diagnosis' => 'documentos/diagnostico_matias_2024.pdf',
                'created_at'    => now(), 'updated_at' => now(),
            ],
            [
                'student_id'    => 2,
                'user_id'       => 3,
                'name'          => 'TEA Nivel 1 con déficit atencional asociado',
                'url_diagnosis' => 'documentos/diagnostico_valentina_2024.pdf',
                'created_at'    => now(), 'updated_at' => now(),
            ],
            [
                'student_id'    => 3,
                'user_id'       => 4,
                'name'          => 'Trastorno del Espectro Autista (TEA) Nivel 2',
                'url_diagnosis' => 'documentos/diagnostico_sebastian_2023.pdf',
                'created_at'    => now(), 'updated_at' => now(),
            ],
            [
                'student_id'    => 4,
                'user_id'       => 5,
                'name'          => 'TEA Nivel 1 con ansiedad generalizada',
                'url_diagnosis' => 'documentos/diagnostico_isidora_2024.pdf',
                'created_at'    => now(), 'updated_at' => now(),
            ],
            [
                'student_id'    => 5,
                'user_id'       => 3,
                'name'          => 'Trastorno del Espectro Autista (TEA) Nivel 2',
                'url_diagnosis' => 'documentos/diagnostico_diego_2022.pdf',
                'created_at'    => now(), 'updated_at' => now(),
            ],
        ]);
    }
}
