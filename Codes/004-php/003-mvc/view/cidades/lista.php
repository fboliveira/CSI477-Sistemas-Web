<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <title>Lista de cidades</title>
  </head>
  <body>

    <table border="1">

      <tr>
        <th>Código</th>
        <th>Cidade</th>
        <th>Estado</th>
      </tr>

      <?php foreach( $lista as $linha ): ?>
      <tr>
        <td><?= $linha['id'] ?></td>
        <td><?= $linha['nome'] ?></td>
        <td><?= $linha['sigla'] ?></td>
      </tr>
    <?php endforeach ?>

    </table>








  </body>
</html>
