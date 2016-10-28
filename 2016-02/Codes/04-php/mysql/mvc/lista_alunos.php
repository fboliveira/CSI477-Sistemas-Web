<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <title>Dados dos alunos</title>
  </head>
  <body>

    <table>
      <tr>
        <th>Código</th>
        <th>Nome</th>
      </tr>

      <!-- Exibicao dos dados dos alunos //-->
      <?php
        while($linha = $resultado->fetch_assoc()) {
       ?>
      <tr>
        <td><?php echo $linha["id"]; ?></td>
        <td><?php echo $linha["nome"]; ?></td>
      </tr>

      <?php } ?>

    </table>

  </body>
</html>
