<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class UserSeeder extends Seeder
{
    public function run(): void
    {
        DB::table('users')->insert([
            [
                'name'       => 'Administrador',
                'username'   => 'admin',
                'email'      => 'admin@tea.cl',
                'role'       => 'ADMIN',
                'password'   => bcrypt('admin'),
                'colegio_id' => null,
                'created_at' => now(), 'updated_at' => now(),
            ],
            [
                'name'       => 'Carlos Fuentes Rojas',
                'username'   => 'cfuentes',
                'email'      => 'cfuentes@colegio.cl',
                'role'       => 'ADMIN COLEGIO',
                'password'   => bcrypt('password'),
                'colegio_id' => 1,
                'created_at' => now(), 'updated_at' => now(),
            ],
            [
                'name'       => 'María González Pizarro',
                'username'   => 'mgonzalez',
                'email'      => 'mgonzalez@colegio.cl',
                'role'       => 'ENCARGADO PIE',
                'password'   => bcrypt('password'),
                'colegio_id' => 1,
                'created_at' => now(), 'updated_at' => now(),
            ],
            [
                'name'       => 'Jorge Navarro Soto',
                'username'   => 'jnavarro',
                'email'      => 'jnavarro@colegio.cl',
                'role'       => 'DOCENTE',
                'password'   => bcrypt('password'),
                'colegio_id' => 2,
                'created_at' => now(), 'updated_at' => now(),
            ],
            [
                'name'       => 'Ana Vargas Muñoz',
                'username'   => 'avargas',
                'email'      => 'avargas@colegio.cl',
                'role'       => 'ASISTENTE EDUCATIVO',
                'password'   => bcrypt('password'),
                'colegio_id' => 2,
                'created_at' => now(), 'updated_at' => now(),
            ],
        ]);
    }
}
