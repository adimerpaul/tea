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
        Schema::create('ficha_plans', function (Blueprint $table) {
            $table->id();
            $table->string('diagnostico')->nullable();
            $table->date('fecha_diagnostico')->nullable();
            $table->string('psicologo')->nullable();
            $table->string('educado')->nullable();
            $table->string('orientador')->nullable();
            $table->string('otros')->nullable();
            $table->date('fecha_elaboracion')->nullable();
            $table->date('fecha_revision')->nullable();
            $table->string('firma')->nullable();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('ficha_plans');
    }
};
