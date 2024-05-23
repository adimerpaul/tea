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
        Schema::create('plan_mes', function (Blueprint $table) {
            $table->id();
            $table->string('mes')->nullable();
            $table->string('pie')->nullable();
            $table->string('cantidad_pie')->nullable();
            $table->string('conv_escolar')->nullable();
            $table->string('cantidad_conv_escolar')->nullable();
            $table->string('inspectoria_general')->nullable();
            $table->string('cantidad_inspectoria_general')->nullable();
            $table->string('profesor_jefe')->nullable();
            $table->string('cantidad_profesor_jefe')->nullable();
            $table->string('orientador')->nullable();
            $table->string('cantidad_orientador')->nullable();
            $table->string('motivo')->nullable();
            $table->unsignedBigInteger('plan_id');
            $table->foreign('plan_id')->references('id')->on('planes');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('plan_mes');
    }
};
