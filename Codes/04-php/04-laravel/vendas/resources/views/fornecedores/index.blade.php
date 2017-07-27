@extends('principal')

@section('conteudo')

<h1>Fornecedores</h1>
<a class="btn btn-primary" href="/fornecedores/create">Inserir</a>

@foreach($fornecedores as $f)

  <p>{{ $f->id }} - {{ $f->nome }} - {{ $f->nomeFantasia }} - {{ $f->telefone }}</p>

@endforeach

@endsection
