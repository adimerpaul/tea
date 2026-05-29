<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::table('students', function (Blueprint $table) {
            $exists = DB::select("SHOW COLUMNS FROM `students` LIKE 'user_id'");
            if (empty($exists)) {
                $table->unsignedBigInteger('user_id')->nullable();
                $table->foreign('user_id')->references('id')->on('users');
            }
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::table('students', function (Blueprint $table) {
            $keys = DB::select("SELECT CONSTRAINT_NAME FROM information_schema.TABLE_CONSTRAINTS WHERE TABLE_SCHEMA = DATABASE() AND TABLE_NAME = 'students' AND CONSTRAINT_NAME = 'students_user_id_foreign' AND CONSTRAINT_TYPE = 'FOREIGN KEY'");
            if (!empty($keys)) {
                $table->dropForeign(['user_id']);
            }
            $exists = DB::select("SHOW COLUMNS FROM `students` LIKE 'user_id'");
            if (!empty($exists)) {
                $table->dropColumn('user_id');
            }
        });
    }
};
