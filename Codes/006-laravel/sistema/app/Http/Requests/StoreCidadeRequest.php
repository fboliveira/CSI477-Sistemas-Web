<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class StoreCidadeRequest extends FormRequest
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
            'estado_id' => 'required|exists:estados,id'
        ];
    }

    public function messages()
    {

        return [
            'nome.required' => 'Informe o nome da Cidade.',
            'estado_id.required' => 'Selecione o Estado corretamente.'
        ];

    }
}
