<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class DocumentSeeder extends Seeder
{
    public function run(): void
    {
        DB::table('documents')->insert([
            [
                'description'       => 'Certificado de crisis conductual — agosto 2024',
                'date'              => '2024-08-12 10:40:00',
                'student_id'        => 1,
                'user_id'           => 3,
                'documentable_id'   => 1,
                'documentable_type' => 'App\\Models\\Certificado',
                'codigo'            => 'CERT-2024-001',
                'html'              => '<p>Se certifica que el estudiante <strong>Matías Torres</strong> presentó episodio de crisis el 12/08/2024.</p>',
                'created_at'        => now(), 'updated_at' => now(),
            ],
            [
                'description'       => 'Contrato de apoyo — asistente de aula 2024',
                'date'              => '2024-03-01 08:00:00',
                'student_id'        => 1,
                'user_id'           => 3,
                'documentable_id'   => 1,
                'documentable_type' => 'App\\Models\\Contrato',
                'codigo'            => 'CONT-2024-001',
                'html'              => '<p>Contrato de apoyo dentro del aula para el año 2024.</p>',
                'created_at'        => now(), 'updated_at' => now(),
            ],
            [
                'description'       => 'Certificado de crisis sensorial — julio 2024',
                'date'              => '2024-07-03 11:20:00',
                'student_id'        => 3,
                'user_id'           => 4,
                'documentable_id'   => 3,
                'documentable_type' => 'App\\Models\\Certificado',
                'codigo'            => 'CERT-2024-002',
                'html'              => '<p>Se certifica que el estudiante <strong>Sebastián Pérez</strong> presentó sobrecarga sensorial el 03/07/2024.</p>',
                'created_at'        => now(), 'updated_at' => now(),
            ],
            [
                'description'       => 'Contrato fonoaudiología 2024',
                'date'              => '2024-03-15 10:00:00',
                'student_id'        => 3,
                'user_id'           => 4,
                'documentable_id'   => 3,
                'documentable_type' => 'App\\Models\\Contrato',
                'codigo'            => 'CONT-2024-002',
                'html'              => '<p>Contrato de intervención fonoaudiológica — 2 veces por semana año 2024.</p>',
                'created_at'        => now(), 'updated_at' => now(),
            ],
            [
                'description'       => 'Certificado de crisis — autolesión leve agosto 2024',
                'date'              => '2024-08-19 14:30:00',
                'student_id'        => 2,
                'user_id'           => 3,
                'documentable_id'   => 2,
                'documentable_type' => 'App\\Models\\Certificado',
                'codigo'            => 'CERT-2024-003',
                'html'              => '<p>Se certifica que la estudiante <strong>Valentina Rojas</strong> presentó episodio de autolesión leve el 19/08/2024.</p>',
                'created_at'        => now(), 'updated_at' => now(),
            ],
        ]);
    }
}
