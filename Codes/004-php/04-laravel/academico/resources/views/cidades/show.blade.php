@extends('layout.principal')

@section('conteudo')

<h1>Dados da cidade</h1>

<p>Código: {{ $cidade->id }}</p>
<p>Nome: {{ $cidade->nome }}</p>

<p>Estado: {{ $cidade->estado->nome }}</p>

<a href="{{ url('/cidades') }}">Voltar</a>

<form method="post" action="/cidades/{{ $cidade->id }}">

    {{ csrf_field()  }}
    {{ method_field('DELETE')}}

    <input type="submit" value="Excluir">

</form>








@endsection
