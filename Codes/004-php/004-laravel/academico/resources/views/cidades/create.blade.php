@extends('layout.principal')

@section('conteudo')

    <h1>Inserir cidade</h1>

    <a href="{{ route('cidades.index') }}">Voltar</a>

    <form method="post" action="{{ url('/cidades') }}">

        @csrf

        Nome: <input type="text" name="nome"> <br>
        Estado:
          <!-- <input type="text" name="estado_id"> <br> //-->
          <select name="estado_id">
            <option value="">Selecione:</option>
            <!-- Dados dos estados //-->
            @foreach($estados as $e)
              <option value="{{ $e->id }}">{{ $e->nome }}-{{ $e->sigla }}</option>
            @endforeach
          </select>
          
        <input type="submit" name="btnSalvar" value="Salvar">

    </form>

@endsection
