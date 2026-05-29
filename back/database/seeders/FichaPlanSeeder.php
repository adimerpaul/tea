<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class FichaPlanSeeder extends Seeder
{
    public function run(): void
    {
        DB::table('ficha_plans')->insert([
            [
                'diagnostico'       => 'TEA Nivel 1',
                'fecha_diagnostico' => '2023-11-10',
                'psicologo'         => 'Dra. Andrea Soto Mora',
                'educado'           => 'Psicopedagoga Laura Rojas',
                'orientador'        => 'Pedro Castillo',
                'otros'             => 'Neurólogo Dr. Felipe Ríos',
                'fecha_elaboracion' => '2024-03-10',
                'fecha_revision'    => '2024-07-10',
                'firma'             => 'Andrea Soto Mora',
                'created_at'        => now(), 'updated_at' => now(),
            ],
            [
                'diagnostico'       => 'TEA Nivel 1 con déficit atencional',
                'fecha_diagnostico' => '2024-01-15',
                'psicologo'         => 'Dr. Marcelo Vidal',
                'educado'           => 'Psicopedagoga Claudia Herrera',
                'orientador'        => 'Rosa Muñoz',
                'otros'             => null,
                'fecha_elaboracion' => '2024-03-15',
                'fecha_revision'    => '2024-09-15',
                'firma'             => 'Marcelo Vidal',
                'created_at'        => now(), 'updated_at' => now(),
            ],
            [
                'diagnostico'       => 'TEA Nivel 2',
                'fecha_diagnostico' => '2022-06-20',
                'psicologo'         => 'Dra. Susana Flores',
                'educado'           => 'Terapeuta Ocupacional Juan Pérez',
                'orientador'        => 'Mario Lira',
                'otros'             => 'Fonoaudióloga Carla Bravo',
                'fecha_elaboracion' => '2023-03-01',
                'fecha_revision'    => '2024-03-01',
                'firma'             => 'Susana Flores',
                'created_at'        => now(), 'updated_at' => now(),
            ],
            [
                'diagnostico'       => 'TEA Nivel 1 con ansiedad generalizada',
                'fecha_diagnostico' => '2024-02-05',
                'psicologo'         => 'Dra. Beatriz Araya',
                'educado'           => 'Psicopedagoga Tamara Salas',
                'orientador'        => 'Luis Godoy',
                'otros'             => null,
                'fecha_elaboracion' => '2024-03-20',
                'fecha_revision'    => '2024-09-20',
                'firma'             => 'Beatriz Araya',
                'created_at'        => now(), 'updated_at' => now(),
            ],
        ]);
    }
}
