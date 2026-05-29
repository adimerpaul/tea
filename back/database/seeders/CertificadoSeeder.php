<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class CertificadoSeeder extends Seeder
{
    public function run(): void
    {
        DB::table('certificados')->insert([
            [
                'description'  => 'Crisis de desregulación emocional intensa con llanto prolongado.',
                'etapa_inial'  => 'El estudiante comenzó a golpear la mesa y a emitir sonidos repetitivos.',
                'aumento'      => 'Intentó abandonar el aula y presentó agitación motora.',
                'crisis'       => 'Llanto intenso por 15 minutos, necesitó espacio de calma.',
                'hora_inicio'  => '10:15:00',
                'hora_llamada' => '10:18:00',
                'hora_llegada' => '10:20:00',
                'hora_termino' => '10:40:00',
                'created_at'   => now(), 'updated_at' => now(),
            ],
            [
                'description'  => 'Episodio de autolesión leve durante clase de educación física.',
                'etapa_inial'  => 'Se negó a participar en la actividad grupal y se aisló.',
                'aumento'      => 'Comenzó a morderse la mano al recibir instrucción directa.',
                'crisis'       => 'Autolesión leve, fue necesario retiro del espacio.',
                'hora_inicio'  => '14:05:00',
                'hora_llamada' => '14:07:00',
                'hora_llegada' => '14:10:00',
                'hora_termino' => '14:30:00',
                'created_at'   => now(), 'updated_at' => now(),
            ],
            [
                'description'  => 'Desregulación por cambio inesperado de sala.',
                'etapa_inial'  => 'Se mostró ansioso al ser informado del cambio de aula.',
                'aumento'      => 'Gritó repetidamente y se negó a moverse del lugar.',
                'crisis'       => 'Crisis de 20 minutos, se requirió apoyo de dos profesionales.',
                'hora_inicio'  => '08:45:00',
                'hora_llamada' => '08:47:00',
                'hora_llegada' => '08:50:00',
                'hora_termino' => '09:10:00',
                'created_at'   => now(), 'updated_at' => now(),
            ],
            [
                'description'  => 'Crisis sensorial durante acto escolar con alto nivel de ruido.',
                'etapa_inial'  => 'Tapó oídos y comenzó a balancearse ante los aplausos.',
                'aumento'      => 'Intentó salir corriendo del gimnasio.',
                'crisis'       => 'Requirió retiro inmediato y uso de auriculares de atenuación.',
                'hora_inicio'  => '11:00:00',
                'hora_llamada' => '11:02:00',
                'hora_llegada' => '11:03:00',
                'hora_termino' => '11:20:00',
                'created_at'   => now(), 'updated_at' => now(),
            ],
        ]);
    }
}
