<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class ColegioSeeder extends Seeder
{
    public function run(): void
    {
        DB::table('colegios')->insert([
            [
                'nombre'    => 'Escuela Básica Los Alamos',
                'codigo'    => 'COL001',
                'logo'      => 'default.jpg',
                'direccion' => 'Av. Los Álamos 1234, Santiago',
                'telefono'  => '+56223456789',
                'email'     => 'losalamos@colegio.cl',
                'color'     => '#1565C0',
                'created_at' => now(), 'updated_at' => now(),
            ],
            [
                'nombre'    => 'Colegio San Martín de Porres',
                'codigo'    => 'COL002',
                'logo'      => 'default.jpg',
                'direccion' => 'Calle Maipú 456, Puente Alto',
                'telefono'  => '+56228765432',
                'email'     => 'sanmartin@colegio.cl',
                'color'     => '#2E7D32',
                'created_at' => now(), 'updated_at' => now(),
            ],
            [
                'nombre'    => 'Escuela República de Bolivia',
                'codigo'    => 'COL003',
                'logo'      => 'default.jpg',
                'direccion' => 'Pasaje Bolivia 789, La Florida',
                'telefono'  => '+56221234567',
                'email'     => 'bolivia@colegio.cl',
                'color'     => '#6A1B9A',
                'created_at' => now(), 'updated_at' => now(),
            ],
            [
                'nombre'    => 'Liceo Técnico Industrial Nº12',
                'codigo'    => 'COL004',
                'logo'      => 'default.jpg',
                'direccion' => 'Av. Industrial 321, Maipú',
                'telefono'  => '+56229876543',
                'email'     => 'liceo12@colegio.cl',
                'color'     => '#C62828',
                'created_at' => now(), 'updated_at' => now(),
            ],
            [
                'nombre'    => 'Colegio Particular Manantial',
                'codigo'    => 'COL005',
                'logo'      => 'default.jpg',
                'direccion' => 'Calle Las Rosas 654, Ñuñoa',
                'telefono'  => '+56224567890',
                'email'     => 'manantial@colegio.cl',
                'color'     => '#00838F',
                'created_at' => now(), 'updated_at' => now(),
            ],
        ]);
    }
}
