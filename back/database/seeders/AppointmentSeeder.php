<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class AppointmentSeeder extends Seeder
{
    public function run(): void
    {
        DB::table('appointments')->insert([
            [
                'date'        => '2024-09-10 09:00:00',
                'description' => 'Reunión de seguimiento mensual con apoderado de Matías Torres.',
                'result'      => 'Se acordaron estrategias de regulación emocional en casa.',
                'status'      => 'CONFIRMADA',
                'user_id'     => 3,
                'student_id'  => 1,
                'created_at'  => now(), 'updated_at' => now(),
            ],
            [
                'date'        => '2024-09-17 10:30:00',
                'description' => 'Evaluación psicopedagógica inicial de Valentina Rojas.',
                'result'      => null,
                'status'      => 'PENDIENTE',
                'user_id'     => 3,
                'student_id'  => 2,
                'created_at'  => now(), 'updated_at' => now(),
            ],
            [
                'date'        => '2024-09-05 11:00:00',
                'description' => 'Entrevista con docente jefe de Sebastián Pérez.',
                'result'      => 'Se identificaron ajustes necesarios en el aula.',
                'status'      => 'CONFIRMADA',
                'user_id'     => 4,
                'student_id'  => 3,
                'created_at'  => now(), 'updated_at' => now(),
            ],
            [
                'date'        => '2024-08-20 14:00:00',
                'description' => 'Reunión de planificación PIE para Isidora Castro.',
                'result'      => 'Cancelada por inasistencia del apoderado.',
                'status'      => 'CANCELADA',
                'user_id'     => 5,
                'student_id'  => 4,
                'created_at'  => now(), 'updated_at' => now(),
            ],
            [
                'date'        => '2024-10-02 15:00:00',
                'description' => 'Seguimiento trimestral de Diego Morales.',
                'result'      => null,
                'status'      => 'PENDIENTE',
                'user_id'     => 3,
                'student_id'  => 5,
                'created_at'  => now(), 'updated_at' => now(),
            ],
        ]);
    }
}
