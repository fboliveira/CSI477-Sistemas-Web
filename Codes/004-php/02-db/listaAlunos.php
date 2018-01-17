<?php

    // Model
    $db = new PDO('mysql:host=localhost;dbname=academico',
    'sistemaweb', '123456');

    // mysqli, procedural way
    // $mysqli = mysqli_connect( 'localhost', 'username', 'password', 'database');

    // mysqli, object oriented way
    // $mysqli = new mysqli( 'localhost', 'username', 'password', 'database');

    // Controller
    $alunos = $db->query("SELECT * FROM alunos order by nome");


?>
<!DOCTYPE html>
<html>
    <head>
        <meta charset="utf-8">
        <title>Lista de Alunos(as)</title>
    </head>
    <body>

        <!-- Cabecalho da tabela //-->
        <table>
            <tr>
                <th>Matrícula</th>
                <th>Nome</th>
            </tr>
        <?php

            // View
            // Para cada linha...
            while( $linha = $alunos->fetch(PDO::FETCH_ASSOC) ) {
                // Inserir uma linha na tabela
                echo "<tr>";
                echo "<td>" . $linha["id"] . "</td>";
                echo "<td>" . $linha["nome"] . "</td>";
                echo "</tr>";
            }

         ?>

        <!-- Finalizacao da tabela //-->
     </table>


    </body>
</html>
