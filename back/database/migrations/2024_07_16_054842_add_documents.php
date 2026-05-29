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
        Schema::table('documents', function (Blueprint $table) {
            $exists = DB::select("SHOW COLUMNS FROM `documents` LIKE 'firma'");
            if (empty($exists)) {
                $table->string('firma')->nullable();
            }
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::table('documents', function (Blueprint $table) {
            $exists = DB::select("SHOW COLUMNS FROM `documents` LIKE 'firma'");
            if (!empty($exists)) {
                $table->dropColumn('firma');
            }
        });
    }
};
