<h1>Relação de Cidades</h1>

<?php

  echo $this->Html->link("Inserir",
          array('controller' => 'cidades',
                'action' => 'add'));

 ?>


<table>
  <tr>
    <th>Código</th>
    <th>Nome</th>
    <th>Estado</th>
    <th>Ação</th>
  </tr>

  <?php foreach ($cidades as $c): ?>
    <tr>
      <td>
        <?php echo $c['Cidade']['id']; ?>
      </td>
      <td>
        <?php echo $this->Html->link($c['Cidade']['nome'],
                array('controller' => 'cidades',
                      'action' => 'view', $c['Cidade']['id'])); ?>
      </td>
      <td>
        <?php echo $this->Html->link($c['Estado']['nome'] . '-' . $c['Estado']['sigla'],
        array('controller' => 'estados',
              'action' => 'view', $c['Estado']['id'])); ?>
      </td>

      <td>
        Editar Excluir
      </td>

    </tr>
  <?php endforeach; ?>
</table>

<?php

  //Debugger::dump($cidades);

 ?>
