<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <title>Lista de alunos(as)</title>
  </head>
  <body>

    <table>

      <!-- Cabecalho -->
      <thead>
        <tr>
          <th>Matrícula</th>
          <th>Nome</th>
        </tr>
      </thead>

      <!-- Linhas -> dados dos alunos -->
      <tbody>
        <?php
          while ($linha = $alunos->fetch() ) {
            echo "<tr>";
            echo "<td>" . $linha["id"] . "</td>";
            echo "<td>" . $linha["nome"] . "</td>";
            echo "</tr>";
          }
         ?>
      </tbody>

    </table>


  </body>
</html>
