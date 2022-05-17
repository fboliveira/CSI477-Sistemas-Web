<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class StoreEstadoRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, mixed>
     */
    public function rules()
    {
        return [
            'nome' => 'required|max:100',
            'sigla' => 'required|min:2|max:2'
        ];
    }

    public function messages() {

        return [
            'nome.required' => 'Informe o Estado corretamente.',
            'sigla.required' => 'A sigla deve ser informada com duas letras.'
        ];

    }
}
