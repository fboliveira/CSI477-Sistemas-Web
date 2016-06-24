<h1>Relação de Cidades</h1>
<table>
  <tr>
    <th>Código</th>
    <th>Nome</th>
    <th>Estado</th>
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
    </tr>
  <?php endforeach; ?>
</table>

<?php

  //Debugger::dump($cidades);

 ?>
