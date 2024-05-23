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
        Schema::create('contratos', function (Blueprint $table) {
            $table->id();
            $table->date('fecha')->nullable();
            $table->string('auxilio')->nullable();
            $table->string('labor')->nullable();
            $table->string('si')->nullable();
            $table->string('no')->nullable();
            $table->string('lunes_ingres')->nullable();
            $table->string('martes_ingres')->nullable();
            $table->string('miercoles_ingres')->nullable();
            $table->string('jueves_ingres')->nullable();
            $table->string('viernes_ingres')->nullable();
            $table->string('lunes_sal')->nullable();
            $table->string('martes_sal')->nullable();
            $table->string('miercoles_sal')->nullable();
            $table->string('jueves_sal')->nullable();
            $table->string('viernes_sal')->nullable();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('contratos');
    }
};
