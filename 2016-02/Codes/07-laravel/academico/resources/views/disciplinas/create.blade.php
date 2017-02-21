<!DOCTYPE html>
<html lang="en">
    <head>
        <title>Sistema Acadêmico</title>
    </head>
    <body>

        <h1>Inserir disciplina</h1>

        <form method="post" action="/disciplinas">

          {{ csrf_field() }}

          Nome: <input type="text" name="nome" /><br>
          Código: <input type="text" name="codigo" /><br>
          CH: <input type="text" name="carga"  /> <br>

          <input type="submit" value="Salvar"/>

        </form>

    </body>
</html>
