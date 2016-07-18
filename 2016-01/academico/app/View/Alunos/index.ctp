<h1>Relação de Alunos</h1>
<table>
  <tr>
    <th>Código</th>
    <th>Nome</th>
    <th>Cidade-UF</th>
  </tr>

  <?php foreach ($alunos as $aluno): ?>
    <tr>
      <td>
        <?php echo $aluno['Aluno']['id']; ?>
      </td>
      <td>
        <?php echo $this->Html->link($aluno['Aluno']['nome'],
                array('controller' => 'alunos',
                      'action' => 'view', $aluno['Aluno']['id'])); ?>
      </td>
      <td>
        <?php echo $aluno['Cidade']['nome'] . '-' . $aluno['Cidade']['Estado']['sigla']; ?>
      </td>
    </tr>
  <?php endforeach; ?>
</table>

<?php

  echo $this->Html->link("Voltar",
        array('controller' => 'pages',
              'action' => 'home'));

 ?>
