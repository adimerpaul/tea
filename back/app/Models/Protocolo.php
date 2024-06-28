<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Protocolo extends Model
{
    use HasFactory;
    protected $fillable = ['nombre', 'html', 'colegio_id'];
    public function colegio(){
        return $this->belongsTo(Colegio::class);
    }
    protected $hidden = ['created_at', 'updated_at'];
}
