 @extends('principal')

 @section('conteudo')

  <h1>Alunos</h1>

  @foreach($alunos as $a)
    {{ $a->id }} - {{ $a->nome }}
  @endforeach

 @endsection
