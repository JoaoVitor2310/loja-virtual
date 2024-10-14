<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Jogo extends Model
{
    use HasFactory;

    protected $fillable = [
        'titulo',
        'desenvolvedora',
        'editora',
        'plataforma',
        'data_lancamento',
        'classificacao_etaria',
        'preco',
        'descricao',
        'requisitos',
        'quantidade',
    ];
}
