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
            $table->text('description')->nullable();
            $table->text('etapa_inial')->nullable();
            $table->text('aumento')->nullable();
            $table->text('crisis')->nullable();
            $table->time('hora_inicio')->nullable();
            $table->time('hora_llamada')->nullable();
            $table->time('hora_llegada')->nullable();
            $table->time('hora_termino')->nullable();
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
