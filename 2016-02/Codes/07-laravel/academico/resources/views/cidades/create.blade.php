@extends('layout.principal')


@section('conteudo')

<form method="post" action="/cidades">

  {{ csrf_field() }}

  <select name="estado_id">

    @foreach($estados as $e)

      <option value="{{ $e-> id }}">{{$e->nome}}-{{$e->sigla}}</option>

    @endforeach

  </select>


</form>

@endsection
