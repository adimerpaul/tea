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
        Schema::create('certificados', function (Blueprint $table) {
            $table->id();
            $table->string('description')->nullable();
            $table->string('etapa_inial')->nullable();
            $table->string('aumento')->nullable();
            $table->string('crisis')->nullable();
            $table->dateTime('hora_inicio')->nullable();
            $table->dateTime('hora_llamada')->nullable();
            $table->dateTime('hora_llegada')->nullable();
            $table->dateTime('hora_termino')->nullable();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('certificados');
    }
};
