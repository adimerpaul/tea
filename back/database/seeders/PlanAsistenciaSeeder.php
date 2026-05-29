<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class PlanAsistenciaSeeder extends Seeder
{
    public function run(): void
    {
        DB::table('plan_asistencias')->insert([
            ['description' => 'Asistencia regular primer semestre — 92% promedio.', 'plan_id' => 1, 'created_at' => now(), 'updated_at' => now()],
            ['description' => 'Ausencias justificadas por controles médicos (3 días).', 'plan_id' => 1, 'created_at' => now(), 'updated_at' => now()],
            ['description' => 'Asistencia primer semestre — 87% promedio.', 'plan_id' => 2, 'created_at' => now(), 'updated_at' => now()],
            ['description' => 'Asistencia irregular por episodios de ansiedad anticipatoria.', 'plan_id' => 3, 'created_at' => now(), 'updated_at' => now()],
            ['description' => 'Asistencia sobresaliente segundo semestre — 94%.', 'plan_id' => 4, 'created_at' => now(), 'updated_at' => now()],
        ]);
    }
}
