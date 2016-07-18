<h1>Relação de Notas do(a) Aluno(a)</h1>

<p class="success">Aluno(a): <?php echo $notas['0']['Aluno']['nome'] ?> </p>

<table>
  <tr>
    <th>Ano</th>
    <th>Semestre</th>
    <th>Nota 1</th>
    <th>Nota 2</th>
    <th>Nota 3</th>
    <th>Média</th>
    <th>Aprovado</th>
  </tr>

  <?php foreach ($notas as $nota): ?>
    <tr>
      <td>
        <?php echo $nota['Nota']['ano']; ?>
      </td>
      <td>
        <?php echo $nota['Nota']['semestre']; ?>
      </td>
      <td>
        <?php echo number_format($nota['Nota']['nota1'], 2, ',', ''); ?>
      </td>
      <td>
        <?php echo number_format($nota['Nota']['nota2'], 2, ',', ''); ?>
      </td>
      <td>
        <?php echo number_format($nota['Nota']['nota3'], 2, ',', ''); ?>
      </td>
      <td>
        <?php
            $media = ($nota['Nota']['nota1'] + $nota['Nota']['nota2'] + $nota['Nota']['nota3']) / 3;
            echo number_format($media, 2, ',', '');
        ?>
      </td>

      <td>
        <?php if ($nota['Nota']['aprovado'] == 1)
                  echo '<p class="success">Aprovado</p>';
              else
              echo '<p class="error">Reprovado</p>';
        ?>
      </td>
    </tr>
  <?php endforeach; ?>
</table>

<?php

  echo $this->Html->link("Voltar",
        array('controller' => 'notas',
              'action' => 'index'));

 ?>
