<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateAlunosTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('alunos', function (Blueprint $table) {
            $table->bigIncrements('id');

            $table->string('nome', 100);
            $table->string('email', 100);
            $table->unsignedBigInteger('cidade_id');

            $table->timestamps();

            //1:N -> estados
            $table->foreign('cidade_id')
                ->references('id')
                ->on('cidades');
  
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('alunos');
    }
}
