<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateEntradasTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('entradas', function (Blueprint $table) {
            $table->increments('id');
            $table->integer('produto_id')->unsigned();
            $table->integer('fornecedor_id')->unsigned();
            $table->decimal('quantidade');
            $table->timestamps();

            $table->foreign('produto_id')
                      ->references('id')
                      ->on('produtos');

            $table->foreign('fornecedor_id')
                      ->references('id')
                      ->on('fornecedors');

        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('entradas');
    }
}
