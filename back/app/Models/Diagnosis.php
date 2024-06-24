<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Diagnosis extends Model
{
    use HasFactory;
    protected $fillable = ['student_id', 'user_id', 'name', 'url_diagnosis'];
    protected $hidden = [ 'updated_at'];
    public function student(){
        return $this->belongsTo(Student::class);
    }
    public function user(){
        return $this->belongsTo(User::class);
    }
}
