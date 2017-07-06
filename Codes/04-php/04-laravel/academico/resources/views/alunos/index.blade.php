 @extends('principal')

 @section('conteudo')

  <h1>Alunos</h1>

  @foreach($alunos as $a)
    <p>{{ $a->id }} - {{ $a->nome }}</p>
  @endforeach

 @endsection
