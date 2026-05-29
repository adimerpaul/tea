<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class HistorySeeder extends Seeder
{
    public function run(): void
    {
        DB::table('histories')->insert([
            [
                'description' => 'Matías presentó episodio de desregulación emocional durante recreo. Se aplicó protocolo de calma con éxito.',
                'date'        => '2024-08-12',
                'student_id'  => 1,
                'user_id'     => 3,
                'created_at'  => now(), 'updated_at' => now(),
            ],
            [
                'description' => 'Valentina logró completar actividad grupal sin necesidad de intervención adicional del equipo PIE.',
                'date'        => '2024-08-19',
                'student_id'  => 2,
                'user_id'     => 3,
                'created_at'  => now(), 'updated_at' => now(),
            ],
            [
                'description' => 'Sebastián presentó dificultades en transición entre clases. Se reforzaron rutinas visuales.',
                'date'        => '2024-09-02',
                'student_id'  => 3,
                'user_id'     => 4,
                'created_at'  => now(), 'updated_at' => now(),
            ],
            [
                'description' => 'Isidora participó activamente en taller de habilidades sociales. Avance significativo en contacto visual.',
                'date'        => '2024-09-09',
                'student_id'  => 4,
                'user_id'     => 5,
                'created_at'  => now(), 'updated_at' => now(),
            ],
            [
                'description' => 'Diego presentó dificultades con cambio inesperado de horario. Se coordinó con familia para anticipar cambios.',
                'date'        => '2024-09-16',
                'student_id'  => 5,
                'user_id'     => 3,
                'created_at'  => now(), 'updated_at' => now(),
            ],
        ]);
    }
}
