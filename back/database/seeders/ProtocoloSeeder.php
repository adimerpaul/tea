<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class ProtocoloSeeder extends Seeder
{
    public function run(): void
    {
        DB::table('protocolos')->insert([
            [
                'nombre'     => 'Protocolo de Crisis Conductual',
                'html'       => '<h2>Protocolo de Crisis Conductual</h2><p>Este protocolo describe los pasos a seguir ante una crisis conductual de un estudiante con TEA.</p><ol><li>Mantener la calma y hablar en voz baja.</li><li>Retirar al estudiante del entorno de estimulación.</li><li>Ofrecer espacio seguro y objeto de regulación.</li><li>Notificar al encargado PIE.</li><li>Registrar el evento en ficha de seguimiento.</li></ol>',
                'colegio_id' => 1,
                'created_at' => now(), 'updated_at' => now(),
            ],
            [
                'nombre'     => 'Protocolo de Acogida para Estudiantes TEA',
                'html'       => '<h2>Protocolo de Acogida</h2><p>Procedimiento para la incorporación de un nuevo estudiante con TEA al establecimiento.</p><ol><li>Reunión inicial con familia y equipo PIE.</li><li>Visita al establecimiento previa al inicio de clases.</li><li>Elaboración de perfil sensorial y conductual.</li><li>Sensibilización al curso receptor.</li><li>Seguimiento quincenal el primer mes.</li></ol>',
                'colegio_id' => 1,
                'created_at' => now(), 'updated_at' => now(),
            ],
            [
                'nombre'     => 'Protocolo de Comunicación con Familias',
                'html'       => '<h2>Protocolo de Comunicación con Familias</h2><p>Define los canales y periodicidad de comunicación con los apoderados de estudiantes PIE.</p><ul><li>Reunión mensual de seguimiento.</li><li>Bitácora digital de incidencias.</li><li>Contacto de emergencia habilitado.</li><li>Informe semestral de avances.</li></ul>',
                'colegio_id' => 2,
                'created_at' => now(), 'updated_at' => now(),
            ],
            [
                'nombre'     => 'Protocolo de Adaptación Curricular',
                'html'       => '<h2>Protocolo de Adaptación Curricular</h2><p>Orientaciones para la adaptación de contenidos y evaluaciones para estudiantes con TEA.</p><ol><li>Identificar objetivos prioritarios del plan de estudios.</li><li>Adaptar materiales al perfil visual-concreto del estudiante.</li><li>Flexibilizar tiempos de evaluación.</li><li>Coordinar con docentes de asignatura mensualmente.</li></ol>',
                'colegio_id' => 2,
                'created_at' => now(), 'updated_at' => now(),
            ],
            [
                'nombre'     => 'Protocolo de Manejo Sensorial en el Aula',
                'html'       => '<h2>Protocolo Sensorial</h2><p>Pautas para el manejo del entorno sensorial en beneficio de estudiantes con hipersensibilidad.</p><ul><li>Controlar nivel de ruido en el aula.</li><li>Permitir uso de auriculares de atenuación.</li><li>Identificar y reducir estímulos visuales en exceso.</li><li>Habilitar zona de regulación sensorial.</li></ul>',
                'colegio_id' => 3,
                'created_at' => now(), 'updated_at' => now(),
            ],
        ]);
    }
}
