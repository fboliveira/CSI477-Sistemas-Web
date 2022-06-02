@extends('app')

@section('conteudo')

<h1>Dados da Cidade: {{ $cidade->nome }}</h1>

<ul>
    <li>Id: {{ $cidade->id }}</li>
    <li>Nome: {{ $cidade->nome }}</li>
    <li>Estado: <a href="{{ route('estados.show', $cidade->estado_id) }}">{{ $cidade->estado->nome }}</a></li>
    <li>Criação: {{ $cidade->created_at }} </li>
    <li>Última alteração: {{ $cidade->updated_at }}</li>
</ul>

<div>
    <a href="{{ url()->previous() }}" class="btn btn-primary">Voltar</a> 
    <a href="{{ route('cidades.edit', $cidade->id) }}" class="btn btn-primary">Editar</a> 
    <a href="#" class="btn btn-danger" onclick="confirmaExclusao()">Excluir</a> 
</div>

<form action="{{ route('cidades.destroy', $cidade->id) }}" method="post" name="exclusao">

    @csrf
    @method('DELETE')

</form>

<script>
    function confirmaExclusao() {
        if (confirm("Confirma exclusão da Cidade?")) {
            document.exclusao.submit();
        }
    }
</script>


@endsection