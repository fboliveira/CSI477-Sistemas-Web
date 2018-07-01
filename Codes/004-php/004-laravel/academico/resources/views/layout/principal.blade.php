<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <title>Sistema Acadêmico</title>
    <link rel="stylesheet" href="{{ asset('css/app.css') }}">
  </head>
  <body>

    <!-- Flash: mensagem //-->
    @if ( Session::has('mensagem') )
      <p class="alert alert-info">{{ Session::get('mensagem') }}</p>
    @endif

    <!-- Usuario autenticado //-->
    @if ( Auth::check() )
      <nav class="navbar navbar-light bg-secondary">
        <span class="text-white">Usuário: {{ Auth::user()->name }} -

        @if ( Auth::user()->type == 1 )
          Administrador do Sistema
        @else
          Usuário
        @endif

        </span>
      </nav>
    @endif

    <!-- LINKS //-->
    <a href="/estados">Estados</a>
    <a href="{{ route('cidades.index') }}">Cidades</a>
    <a href="{{ route('alunos.index') }}">Alunos</a>
    <a href="#">Turmas</a>
    <a href="#">Notas</a>

    <!-- CONTEUDO //-->
    @yield('conteudo')







  </body>
</html>
