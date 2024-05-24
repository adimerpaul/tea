<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Certificado extends Model
{
    use HasFactory;
    protected $fillable = [
        'description',
        'etapa_inial',
        'aumento',
        'crisis',
        'hora_inicio',
        'hora_llamada',
        'hora_llegada',
        'hora_termino'
    ];
    protected $hidden = [
        'created_at',
        'updated_at'
    ];
}
