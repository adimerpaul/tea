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
        Schema::create('students', function (Blueprint $table) {
            $table->id();
            $table->string('rut');
            $table->string('name');
            $table->date('birthdate');
            $table->integer('year_PIE');
            $table->string('course');
            $table->integer('year');
            $table->string('address');
            $table->string('phone');
            $table->string('sex');
            $table->string('tutorRut');
            $table->string('tutorName');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('students');
    }
};
