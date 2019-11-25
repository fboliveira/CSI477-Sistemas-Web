<?php

/** @var \Illuminate\Database\Eloquent\Factory $factory */

use App\Cidade;
use Faker\Generator as Faker;

$factory->define(Cidade::class, function (Faker $faker) {
    $estados = App\Estado::pluck('id')->toArray();

    return [
        'nome' => $faker->city,
        'estado_id' => $faker->randomElement($estados),
    ];
});
