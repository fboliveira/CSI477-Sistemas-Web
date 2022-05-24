<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;
use App\Models\Cidade;
use App\Models\Estado;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Cidade>
 */
class CidadeFactory extends Factory
{

    protected $model = Cidade::class;

    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition()
    {       
        // 'estado_id' => Estado::factory()  
        return [
            'nome' => $this->faker->city,
            'estado_id' => Estado::inRandomOrder()->first()
        ];
    }
}
