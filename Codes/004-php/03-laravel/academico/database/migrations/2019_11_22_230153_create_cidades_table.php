<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateCidadesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('cidades', function (Blueprint $table) {
            $table->bigIncrements('id');

            $table->string('nome', 100);

            // estados -> 1:N
            // estado_id
            $table->unsignedInteger('estado_id');

            $table->timestamps();



            //1:N -> estados
            $table->foreign('estado_id')
                      ->references('id')
                      ->on('estados');

        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('cidades');
    }
}
