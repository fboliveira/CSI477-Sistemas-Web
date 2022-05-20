@extends('app')

@section('conteudo')

    <form action="{{ route('estados.update', $estado->id) }}" method="POST">

        @csrf
        @method('PUT')

        <div class="mb-3">
            <label for="nome" class="form-label">Nome</label>
            <input type="text" name="nome" id="nome" class="form-control 
            @error('nome')
                is-invalid
            @enderror" value="{{ old('nome', $estado) }}">
        </div>

        <div class="mb-3">
            <label for="sigla" class="form-label">Sigla</label>
            <input type="text" name="sigla" id="sigla" class="form-control 
            @error('sigla')
                is-invalid
            @enderror            
            " value="{{ old('sigla', $estado) }}">
        </div>


        <div class="mb-3">
            <input type="submit" value="Atualizar" name="atualizar" class="btn btn-primary">
            <input type="reset" value="Limpar" class="btn btn-danger">
        </div>


    </form>

@endsection