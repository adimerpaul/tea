<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('planes', function (Blueprint $table) {
            $table->id();

//            PLAN DE ACOMPAÑAMIENTO EMOCIONAL Y/O CONDUCTUAL.
//            1)	Antecedentes del o la estudiante:
//Nombre del o la estudiante
//RUT
//Edad
//Curso
//Nacionalidad
//Nombre apoderado/a
//Contacto apoderado/a
//
//2)	Caracterización del o la estudiante:
//Diagnóstico primario
//Diagnóstico secundario
//Profesional especializado o SOS
//Profesional especializado o SOS remplazante
//Profesor/a Jefe
//
//3)	Particularidades del o la estudiante:
//Indicar las particularidades del o la estudiante, por ejemplo:  situaciones sociales y/o ambientales que lo o la desregulan, si evita o no el contacto físico, características sensoriales, si presenta conductas de evitación, si sus desregulaciones son con llantos, autolesiones o golpes, entre otras.
//
//
//
//
//
//
//
//
//
//
//            Indicar posibles estrategias que puedan facilitar su regulación emocional y/o conductual, por ejemplo: Si existe alguna rutina que le agrade realizar, si existe algún modulador sensorial, si existe algún lugar particular donde se sienta comodo/a.
//            Manejo del ambiente, como por ejemplo: identificar si existe algo del ambiente donde regularmente se desenvuelve que genere una hiper o hipo reactividad.
//
//            4)	% Asistencia del o la estudiante:
//Mar	Abr	May	Jun	Jul	Ago	Sep	Oct	Nov	Dic
//
//


            $table->string('diag_primario')->nullable();
            $table->string('diag_secundario')->nullable();
            $table->string('profesional_especializado')->nullable();
            $table->string('profesional_especializado_remplazante')->nullable();
            $table->string('profesor_jefe')->nullable();
            $table->string('particularidades')->nullable();
            $table->string('estrategias')->nullable();
            $table->string('manejo_ambiente')->nullable();
            $table->text('asistencia')->nullable();
            $table->text('intervenciones')->nullable();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('planes');
    }
};
