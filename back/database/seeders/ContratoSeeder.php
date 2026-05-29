<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class ContratoSeeder extends Seeder
{
    public function run(): void
    {
        DB::table('contratos')->insert([
            [
                'fecha'            => '2024-03-01',
                'auxilio'          => 'Asistente de Aula',
                'labor'            => 'Apoyo dentro del aula en todas las asignaturas',
                'si'               => 'Requiere apoyo permanente',
                'no'               => null,
                'lunes_ingres'     => '08:00', 'martes_ingres'    => '08:00',
                'miercoles_ingres' => '08:00', 'jueves_ingres'    => '08:00',
                'viernes_ingres'   => '08:00',
                'lunes_sal'        => '14:00', 'martes_sal'       => '14:00',
                'miercoles_sal'    => '14:00', 'jueves_sal'       => '14:00',
                'viernes_sal'      => '13:00',
                'created_at'       => now(), 'updated_at'        => now(),
            ],
            [
                'fecha'            => '2024-03-01',
                'auxilio'          => 'Psicólogo PIE',
                'labor'            => 'Intervención psicológica individual y grupal',
                'si'               => 'Sesiones semanales individuales',
                'no'               => 'No requiere apoyo en recreos',
                'lunes_ingres'     => '09:00', 'martes_ingres'    => '09:00',
                'miercoles_ingres' => '09:00', 'jueves_ingres'    => '09:00',
                'viernes_ingres'   => '09:00',
                'lunes_sal'        => '17:00', 'martes_sal'       => '17:00',
                'miercoles_sal'    => '17:00', 'jueves_sal'       => '17:00',
                'viernes_sal'      => '14:00',
                'created_at'       => now(), 'updated_at'        => now(),
            ],
            [
                'fecha'            => '2024-03-15',
                'auxilio'          => 'Fonoaudiólogo',
                'labor'            => 'Apoyo en comunicación y lenguaje',
                'si'               => 'Intervención 2 veces por semana',
                'no'               => null,
                'lunes_ingres'     => '10:00', 'martes_ingres'    => null,
                'miercoles_ingres' => '10:00', 'jueves_ingres'    => null,
                'viernes_ingres'   => null,
                'lunes_sal'        => '13:00', 'martes_sal'       => null,
                'miercoles_sal'    => '13:00', 'jueves_sal'       => null,
                'viernes_sal'      => null,
                'created_at'       => now(), 'updated_at'        => now(),
            ],
            [
                'fecha'            => '2024-04-01',
                'auxilio'          => 'Terapeuta Ocupacional',
                'labor'            => 'Intervención sensoriomotora y de integración sensorial',
                'si'               => 'Apoyo en recreos estructurados',
                'no'               => null,
                'lunes_ingres'     => null, 'martes_ingres'    => '08:30',
                'miercoles_ingres' => null, 'jueves_ingres'    => '08:30',
                'viernes_ingres'   => null,
                'lunes_sal'        => null, 'martes_sal'       => '12:30',
                'miercoles_sal'    => null, 'jueves_sal'       => '12:30',
                'viernes_sal'      => null,
                'created_at'       => now(), 'updated_at'       => now(),
            ],
        ]);
    }
}
