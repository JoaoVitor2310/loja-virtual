<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class JogoPedido extends Model
{
    use HasFactory;

    protected $fillable = [
        'quantidade',
        'preco',
    ];
}
