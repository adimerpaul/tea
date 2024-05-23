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
        Schema::create('ficha_seguimientos', function (Blueprint $table) {
            $table->id();
            //fecha evaluador contexto emocion fisica conductales duracion inteversion  estrategia ayuda ayuda_externa corto_plaza largo_plazo seguimiento_fecha
            //responsable seguimiento instrumentos observaciones factores necesidades recursos coordinacion notas
            $table->date('fecha')->nullable();
            $table->string('evaluador')->nullable();
            $table->string('contexto')->nullable();
            $table->string('emocion')->nullable();
            $table->string('fisica')->nullable();
            $table->string('conductales')->nullable();
            $table->string('duracion')->nullable();
            $table->string('inteversion')->nullable();
            $table->string('estrategia')->nullable();
            $table->string('ayuda')->nullable();
            $table->string('ayuda_externa')->nullable();
            $table->string('corto_plaza')->nullable();
            $table->string('largo_plazo')->nullable();
            $table->date('seguimiento_fecha')->nullable();
            $table->string('responsable')->nullable();
            $table->string('seguimiento')->nullable();
            $table->string('instrumentos')->nullable();
            $table->string('observaciones')->nullable();
            $table->string('factores')->nullable();
            $table->string('necesidades')->nullable();
            $table->string('recursos')->nullable();
            $table->string('coordinacion')->nullable();
            $table->string('notas')->nullable();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('ficha_seguimientos');
    }
};
