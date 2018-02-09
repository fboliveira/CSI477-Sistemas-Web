@extends('layout.principal')

@section('conteudo')

    <h1>Editar cidade</h1>

    <a href="{{ url('/cidades') }}">Voltar</a>

    <form method="post" action="/cidades/{{ $cidade->id }}">

        {{ csrf_field() }}
        {{ method_field('PATCH') }}

        Nome: <input type="text" name="nome" value="{{ $cidade->nome }}"> <br>
        Estado:
            <!-- <input type="text" name="estado_id"> <br> //-->
            <select name="estado_id">
                <option value="">Selecione:</option>
                <!-- Dados dos estados //-->
                @foreach($estados as $e)
                    <option value="{{ $e->id }}" 
                        @if ( $e->id == $cidade->estado_id )
                            selected="selected"
                        @endif
                         >{{ $e->nome }}-{{ $e->sigla }}</option>
                @endforeach
            </select>

            <input type="submit" name="btnSalvar" value="Salvar">











    </form>




@endsection
