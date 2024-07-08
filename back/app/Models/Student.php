<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Student extends Model
{
    use HasFactory;
    protected $hidden = ['created_at', 'updated_at'];
    protected $fillable = ['rut', 'name', 'birthdate', 'year_PIE', 'course', 'year', 'address', 'phone', 'sex','tutorRut','tutorName','colegio_id','email','foto','user_id'];
    public function histories(){
        return $this->hasMany(History::class)->with('user')->orderBy('id', 'desc');
    }
    public function diagnoses(){
        return $this->hasMany(Diagnosis::class)->orderBy('id', 'desc');
    }
    public function documents(){
        return $this->hasMany(Document::class)->orderBy('id', 'desc');
    }
    public function colegio(){
        return $this->belongsTo(Colegio::class);
    }
    public function user(){
        return $this->belongsTo(User::class);
    }
}
