<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Student extends Model
{
    use HasFactory;
    protected $hidden = ['created_at', 'updated_at'];
    protected $fillable = ['rut', 'name', 'birthdate', 'year_PIE', 'course', 'year', 'address', 'phone', 'sex','tutorRut','tutorName'];
    public function histories(){
        return $this->hasMany(History::class)->with('user')->orderBy('id', 'desc');
    }
    public function diagnoses(){
        return $this->hasMany(Diagnosis::class)->orderBy('id', 'desc');
    }
}
