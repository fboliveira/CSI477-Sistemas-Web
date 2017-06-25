<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <title>Lista de alunos(a)</title>
  </head>
  <body>

    <table>
      <tr>
        <th>Código</th>
        <th>Nome</th>
      </tr>

      <?php foreach($lista as $aluno): ?>
        <tr>
          <td><?= $aluno['id'] ?></td>
          <td><?= $aluno['nome'] ?></td>
        </tr>
      <?php endforeach ?>

    </table>

  </body>
</html>
