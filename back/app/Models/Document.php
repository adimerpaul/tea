<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Document extends Model
{
    use HasFactory;
    protected $fillable = ['description', 'date', 'student_id', 'user_id', 'documentable_id', 'documentable_type','codigo','html'];
    protected $hidden = ['created_at', 'updated_at'];
    public function documentable(){
        return $this->morphTo();
    }
    public function student(){
        return $this->belongsTo(Student::class);
    }
    public function user(){
        return $this->belongsTo(User::class)->select('id', 'name');
    }
}
