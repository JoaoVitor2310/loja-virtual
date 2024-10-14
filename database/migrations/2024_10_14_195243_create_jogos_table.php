<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('jogos', function (Blueprint $table) {
            $table->id();
            $table->string('titulo');
            $table->string('desenvolvedora');
            $table->string('editora');
            $table->string('plataforma');
            $table->date('data_lancamento');
            $table->string('classificacao_etaria');
            $table->decimal('preco', total: 8, places: 2);
            $table->string('descricao');
            $table->string('requisitos');
            $table->int('quantidade');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('jogos');
    }
};
