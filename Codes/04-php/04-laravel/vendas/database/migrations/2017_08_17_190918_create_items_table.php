<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateItemsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('items', function (Blueprint $table) {
            $table->increments('id');

            $table->integer('compra_id')->unsigned();
            $table->integer('produto_id')->unsigned();
            $table->decimal('quantidade');

            $table->timestamps();

            $table->foreign('compra_id')
                    ->references('id')
                    ->on('compras');

            $table->foreign('produto_id')
                    ->references('id')
                    ->on('produtos');

        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('items');
    }
}
