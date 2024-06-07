<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Route;


Route::post('/login', [\App\Http\Controllers\UserController::class, 'login']);

Route::group(['middleware' => 'auth:sanctum'], function(){
    Route::get('/me', [\App\Http\Controllers\UserController::class, 'me']);
    Route::post('/logout', [\App\Http\Controllers\UserController::class, 'logout']);
//    dashboard
    Route::get('/dashboard', [\App\Http\Controllers\DashboardController::class, 'index']);

    Route::get('/users', [\App\Http\Controllers\UserController::class, 'index']);
    Route::post('/users', [\App\Http\Controllers\UserController::class, 'store']);
    Route::put('/users/{id}', [\App\Http\Controllers\UserController::class, 'update']);
    Route::delete('/users/{id}', [\App\Http\Controllers\UserController::class, 'delete']);
    Route::put('/passwordUpdate/{id}', [\App\Http\Controllers\UserController::class, 'passwordUpdate']);

    Route::get('/students', [\App\Http\Controllers\StudentController::class, 'index']);
    Route::post('/students', [\App\Http\Controllers\StudentController::class, 'store']);
    Route::put('/students/{id}', [\App\Http\Controllers\StudentController::class, 'update']);
    Route::delete('/students/{id}', [\App\Http\Controllers\StudentController::class, 'destroy']);
    Route::get('/students/{id}', [\App\Http\Controllers\StudentController::class, 'show']);
    Route::post('/students/{id}/diagnoses', [\App\Http\Controllers\DiagnosisController::class, 'store']);

    Route::delete('/diagnoses/{id}', [\App\Http\Controllers\DiagnosisController::class, 'destroy']);
    Route::get('/diagnoses/{id}/download', [\App\Http\Controllers\DiagnosisController::class, 'download']);

    Route::post('/history', [\App\Http\Controllers\HistoryController::class, 'store']);
    Route::put('/history/{id}', [\App\Http\Controllers\HistoryController::class, 'update']);
    Route::delete('/history/{id}', [\App\Http\Controllers\HistoryController::class, 'destroy']);

    Route::get('/documents', [\App\Http\Controllers\DocumentController::class, 'index']);
    Route::post('/documents', [\App\Http\Controllers\DocumentController::class, 'store']);
    Route::put('/documents/{id}', [\App\Http\Controllers\DocumentController::class, 'update']);
    Route::get('/documents/{id}/download', [\App\Http\Controllers\DocumentController::class, 'download']);
    Route::get('/documents/{id}/download64', [\App\Http\Controllers\DocumentController::class, 'download64']);


    Route::delete('/documents/{id}', [\App\Http\Controllers\DocumentController::class, 'destroy']);

    Route::get('/appointments', [\App\Http\Controllers\AppointmentController::class, 'index']);
    Route::post('/appointments', [\App\Http\Controllers\AppointmentController::class, 'store']);
    Route::put('/appointments/{id}', [\App\Http\Controllers\AppointmentController::class, 'update']);
    Route::delete('/appointments/{id}', [\App\Http\Controllers\AppointmentController::class, 'destroy']);
});
//Route::get('/documents/{codigo}/show', [\App\Http\Controllers\DocumentController::class, 'showMobile']);

Route::get('/documents/{id}/show', [\App\Http\Controllers\DocumentController::class, 'download']);

Route::get('/compromiso/{loan_id}', [\App\Http\Controllers\ReportController::class, 'compromiso']);
