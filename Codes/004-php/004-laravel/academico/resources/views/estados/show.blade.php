@extends('layout.principal')

@section('conteudo')

<h1>Dados do Estado</h1>

<p>Código: {{ $estado->id }}</p>
<p>Nome: {{ $estado->nome }}</p>
<p>Sigla: {{ $estado->sigla }}</p>


<a href="/estados">Voltar</a>
<a href="#">Editar</a>
<a href="#">Excluir</a>

@endsection('conteudo')
