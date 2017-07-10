@extends('principal')

@section('conteudo')

  <h1>Inserir cidade</h1>

  <a href="/cidades">Voltar</a> <br><br>

  <form method="post" action="/cidades">

    {{ csrf_field() }}

    Nome: <input type="text" name="nome"> <br>
    Estado:
    <select name="estado_id">
      <option value="">Selecione:</option>

      <!-- Dados dos Estados //-->
      @foreach($estados as $e)
        <option value="{{ $e->id }}">{{ $e->nome }}-{{ $e->sigla }}</option>
      @endforeach

    </select>

    <input type="submit" name="botaoSalvar" value="Salvar">

  </form>



@endsection
