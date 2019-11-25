<?php

/** @var \Illuminate\Database\Eloquent\Factory $factory */

use App\Disciplina;
use Faker\Generator as Faker;

$factory->define(Disciplina::class, function (Faker $faker) {
    return [
        'nome' => $faker->name,
        'carga' => $faker->numberBetween($min = 60, $max = 120),
    ];
});
