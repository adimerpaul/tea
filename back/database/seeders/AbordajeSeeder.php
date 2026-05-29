<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class AbordajeSeeder extends Seeder
{
    public function run(): void
    {
        DB::table('abordajes')->insert([
            ['description' => 'Rutinas visuales y anticipación de cambios mediante pictogramas.', 'created_at' => now(), 'updated_at' => now()],
            ['description' => 'Espacio de descompresión sensorial habilitado en sala de recursos.', 'created_at' => now(), 'updated_at' => now()],
            ['description' => 'Apoyo de par tutor durante recreos y actividades no estructuradas.', 'created_at' => now(), 'updated_at' => now()],
            ['description' => 'Comunicación aumentativa alternativa (CAA) para expresión emocional.', 'created_at' => now(), 'updated_at' => now()],
            ['description' => 'Reducción de estímulos sensoriales en el entorno inmediato del estudiante.', 'created_at' => now(), 'updated_at' => now()],
        ]);
    }
}
