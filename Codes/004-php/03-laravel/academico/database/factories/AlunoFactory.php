<?php

/** @var \Illuminate\Database\Eloquent\Factory $factory */

use App\Aluno;
use Faker\Generator as Faker;

$factory->define(Aluno::class, function (Faker $faker) {

    $cidades = App\Cidade::pluck('id')->toArray();

    return [
        'nome' => $faker->name,
        'email' => $faker->unique()->safeEmail,
        'cidade_id' => $faker->randomElement($cidades),
    ];
});
