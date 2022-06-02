@extends('app')

@section('conteudo')

<h1>Dados do Estado: {{ $estado->nome }}</h1>

<ul>
    <li>Id: {{ $estado->id }}</li>
    <li>Nome: {{ $estado->nome }}</li>
    <li>Sigla: {{ $estado->sigla }}</li>
    <li>Criação: {{ $estado->created_at }}</li>
    <li>Última alteração: {{ $estado->updated_at }}</li>
</ul>

<a href="{{ route('estados.edit', $estado->id) }}" class="btn btn-primary">Editar</a>

<a href="{{ url()->previous() }}" class="btn btn-primary">Voltar</a>

<form action="{{ route('estados.destroy', $estado->id) }}" method="post" onsubmit="return confirmaExclusao()">

    @csrf
    @method('DELETE')

    <input type="submit" value="Excluir" class="btn btn-danger">

</form>

<script>

    function confirmaExclusao() {
        return window.confirm("Confirma a exclusão do Estado?");
    }

</script>

@endsection