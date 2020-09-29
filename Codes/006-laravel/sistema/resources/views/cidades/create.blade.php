@extends('principal')

@section('conteudo')


    <form action="{{ route('cidades.store') }}" method="post">

        @csrf

        <div class="form-group">
            <label for="nome">Nome</label>
            <input type="text" class="form-control" name="nome" id="nome">
        </div>

        <div class="form-group">
            <label for="estado_id">Estado</label>

            <select name="estado_id" id="estado_id" class="form-control">

            @foreach($estados as $e)
                <option value="{{$e->id}}">{{$e->nome}}</option>
            @endforeach

            </select>

        </div>

        <div class="text-right">
            <input type="submit" value="Cadastrar" class="btn btn-primary">
            <input type="reset" value="Limpar" class="btn btn-danger">
        </div>

    </form>

    <a href="{{ route('cidades.index') }}">Voltar</a>

@endsection('conteudo')
