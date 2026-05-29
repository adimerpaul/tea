<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class TipoDocumentoSeeder extends Seeder
{
    public function run(): void
    {
        $tipos = [
            [
                'nombre'      => 'FICHA DE SEGUIMIENTO INDIVIDUALIZADA PARA DESREGULACIÓN EMOCIONAL',
                'descripcion' => 'Registro detallado de episodios de desregulación emocional del estudiante.',
                'activo'      => true,
            ],
            [
                'nombre'      => 'AUTORIZACION',
                'descripcion' => 'Autorización del apoderado para el abordaje y manejo de desregulaciones emocionales.',
                'activo'      => true,
            ],
            [
                'nombre'      => 'certificado para el empleador',
                'descripcion' => 'Certificado emitido para que el apoderado justifique ausencia laboral por atención al estudiante.',
                'activo'      => true,
            ],
            [
                'nombre'      => 'contrato de contingencia',
                'descripcion' => 'Contrato que establece los apoyos y horarios de los profesionales PIE.',
                'activo'      => true,
            ],
            [
                'nombre'      => 'PLAN DE ACOMPAÑAMIENTO EMOCIONAL Y CONDUCTUAL',
                'descripcion' => 'Plan individualizado de estrategias para el acompañamiento emocional y conductual del estudiante.',
                'activo'      => true,
            ],
            [
                'nombre'      => 'PROTOCOLO DE ADMINISTRACIÓN DE FÁRMACOS EN EL CONTEXTO ESCOLAR',
                'descripcion' => 'Protocolo para la administración segura de medicamentos dentro del establecimiento.',
                'activo'      => true,
            ],
            [
                'nombre'      => 'Registro de Desencadenantes de Desregulación Emocional en Estudiantes con TEA',
                'descripcion' => 'Documento para identificar y registrar los factores que desencadenan desregulaciones emocionales.',
                'activo'      => true,
            ],
        ];

        foreach ($tipos as $tipo) {
            DB::table('tipos_documentos')->insertOrIgnore(array_merge($tipo, [
                'created_at' => now(),
                'updated_at' => now(),
            ]));
        }
    }
}
