<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    public function run(): void
    {
        $this->call([
            ColegioSeeder::class,       // sin dependencias
            UserSeeder::class,          // depende: colegios
            StudentSeeder::class,       // depende: colegios, users
            AppointmentSeeder::class,   // depende: users, students
            HistorySeeder::class,       // depende: students, users
            DiagnosisSeeder::class,     // depende: students, users
            AbordajeSeeder::class,      // sin dependencias
            CertificadoSeeder::class,   // sin dependencias
            ContratoSeeder::class,      // sin dependencias
            FichaPlanSeeder::class,     // sin dependencias
            PlanSeeder::class,          // sin dependencias
            PlanAsistenciaSeeder::class,// depende: planes
            FichaSeguimientoSeeder::class, // sin dependencias
            ProtocoloSeeder::class,     // depende: colegios
            DocumentSeeder::class,      // depende: students, users, certificados, contratos
        ]);
    }
}
