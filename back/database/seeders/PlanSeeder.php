<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class PlanSeeder extends Seeder
{
    public function run(): void
    {
        DB::table('planes')->insert([
            [
                'diag_primario'                        => 'TEA Nivel 1',
                'diag_secundario'                      => 'Ansiedad situacional',
                'profesional_especializado'            => 'María González Pizarro',
                'profesional_especializado_remplazante'=> 'Ana Vargas Muñoz',
                'profesor_jefe'                        => 'Claudia Herrera',
                'particularidades'                     => 'Evita el contacto físico. Se desregula ante ruidos fuertes e imprevistos. Presenta movimientos repetitivos como mecer el cuerpo.',
                'estrategias'                          => 'Uso de auriculares, espacio de calma, pictogramas de rutina diaria.',
                'manejo_ambiente'                      => 'Ubicar lejos de ventanas y puertas. Iluminación tenue cuando sea posible.',
                'asistencia'                           => json_encode(['Mar'=>92,'Abr'=>88,'May'=>95,'Jun'=>90,'Jul'=>85]),
                'intervenciones'                       => 'Sesiones semanales con psicóloga. Talleres de habilidades sociales.',
                'created_at'                           => now(), 'updated_at' => now(),
            ],
            [
                'diag_primario'                        => 'TEA Nivel 1',
                'diag_secundario'                      => 'Déficit atencional',
                'profesional_especializado'            => 'María González Pizarro',
                'profesional_especializado_remplazante'=> 'Jorge Navarro Soto',
                'profesor_jefe'                        => 'Rosa Muñoz',
                'particularidades'                     => 'Alta sensibilidad al tacto. Le agrada trabajar con material concreto y visual.',
                'estrategias'                          => 'Instrucciones cortas y claras, material visual, descansos frecuentes.',
                'manejo_ambiente'                      => 'Minimizar distractores visuales en el entorno cercano.',
                'asistencia'                           => json_encode(['Mar'=>90,'Abr'=>85,'May'=>88,'Jun'=>92,'Jul'=>80]),
                'intervenciones'                       => 'Apoyo psicopedagógico 3 veces por semana.',
                'created_at'                           => now(), 'updated_at' => now(),
            ],
            [
                'diag_primario'                        => 'TEA Nivel 2',
                'diag_secundario'                      => null,
                'profesional_especializado'            => 'Jorge Navarro Soto',
                'profesional_especializado_remplazante'=> 'Ana Vargas Muñoz',
                'profesor_jefe'                        => 'Mario Lira',
                'particularidades'                     => 'Comunicación limitada. Requiere apoyo permanente en transiciones.',
                'estrategias'                          => 'CAA, anticipación de cambios con agenda visual, par tutor.',
                'manejo_ambiente'                      => 'Rutina fija y espacio propio identificado en el aula.',
                'asistencia'                           => json_encode(['Mar'=>78,'Abr'=>82,'May'=>80,'Jun'=>75,'Jul'=>79]),
                'intervenciones'                       => 'Fonoaudiología 2 veces/semana. Terapia ocupacional 2 veces/semana.',
                'created_at'                           => now(), 'updated_at' => now(),
            ],
            [
                'diag_primario'                        => 'TEA Nivel 1',
                'diag_secundario'                      => 'Ansiedad generalizada',
                'profesional_especializado'            => 'Ana Vargas Muñoz',
                'profesional_especializado_remplazante'=> 'María González Pizarro',
                'profesor_jefe'                        => 'Luis Godoy',
                'particularidades'                     => 'Dificultad para trabajo en grupos grandes. Le gustan las actividades al aire libre.',
                'estrategias'                          => 'Grupos reducidos, espacios abiertos, técnicas de respiración.',
                'manejo_ambiente'                      => 'Evitar actividades competitivas no estructuradas.',
                'asistencia'                           => json_encode(['Mar'=>95,'Abr'=>93,'May'=>97,'Jun'=>91,'Jul'=>88]),
                'intervenciones'                       => 'Psicología semanal. Taller de mindfulness.',
                'created_at'                           => now(), 'updated_at' => now(),
            ],
        ]);
    }
}
