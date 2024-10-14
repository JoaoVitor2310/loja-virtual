<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class HistoricoVenda extends Model
{
    use HasFactory;

    protected $fillable = [
        'jogos_mais_vendidos',
        'receita_gerada',
        'vendas_periodo',
    ];
}
