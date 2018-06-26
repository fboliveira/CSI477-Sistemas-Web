@extends('layout.principal')

@section('conteudo')

<h1>Dados da cidade</h1>

<p>Código: {{ $cidade->id }}</p>
<p>Nome: {{ $cidade->nome }}</p>

<p>Estado: {{ $cidade->estado->nome }}</p>

<a href="{{ route('cidades.index') }}">Voltar</a>
<a href="{{ route('cidades.edit', $cidade->id) }}">Editar</a>

<form method="post" action="{{ route('cidades.destroy', $cidade->id) }}">

  @csrf
  @method('DELETE')
  <input type="submit" value="Excluir">

</form>

@endsection
