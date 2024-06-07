<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Appointment extends Model
{
    use HasFactory;
    protected $fillable = ['date', 'description', 'result', 'status', 'user_id', 'student_id'];
    protected $hidden = ['created_at', 'updated_at'];
    function user(){
        return $this->belongsTo(User::class);
    }
    function student(){
        return $this->belongsTo(User::class);
    }
}
