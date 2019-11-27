@extends('principal')

@section('conteudo')

  <form method="post" action="{{ route('cidades.store') }}">

    <p>Nome: <input type="text" name="nome"></p>

    <p>Estado: </p>

    <select name="estado_id">

      @foreach ($estados as $e)
        <option value="{{ $e->id }}">{{ $e->nome }}</option>
      @endforeach


    </select>


    <input type="submit" name="btnSalvar" value="Incluir">






  </form>

@endsection
