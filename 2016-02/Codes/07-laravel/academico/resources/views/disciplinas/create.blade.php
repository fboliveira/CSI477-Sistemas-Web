@extends('layout.principal')

@section('conteudo')

        <h1>Inserir disciplina</h1>

        <form method="post" action="/disciplinas">

          {{ csrf_field() }}
 
          <div class="form-group">
              <label for="nome">Nome</label>
              <input type="text" class="form-control" name="nome" />
          </div>

          <div class="form-group">
              <label for="codigo">Código</label>
              <input type="text" class="form-control" name="codigo" />
          </div>

          <div class="form-group">
              <label for="carga">Carga Horária</label>
              <input type="text" class="form-control" name="carga" />
          </div>

          <input type="submit" class="btn btn-primary" value="Salvar"/>

          <a href="/disciplinas" class="btn btn-primary">Voltar</a>

@endsection
