<h1>Alunos</h1>

<table>
  <tr>
    <th>Código</th>
    <th>Nome</th>
    <th>Cidade</th>
  </tr>

  <?php foreach ($alunos as $aluno): ?>

    <tr>
      <td>
        <?php echo $aluno['Aluno']['id']; ?>
      </td>
      <td>
        <?php echo $this->Html->link($aluno['Aluno']['nome'],
          array('controller' => 'alunos',
                'action' => 'view', $aluno['Aluno']['id']));

         ?>
      </td>
      <td>
        <?php echo $this->Html->link($aluno['Aluno']['cidade_id'],
          array('controller' => 'cidades',
                'action' => 'view', $aluno['Aluno']['cidade_id']));

         ?>
      </td>



    </tr>

  <?php endforeach; ?>
</table>
