<h1>Relação de Estados</h1>
<table>
  <tr>
    <th>Código</th>
    <th>Nome</th>
    <th>Sigla</th>
  </tr>

  <?php foreach ($estados as $e): ?>
    <tr>
      <td>
        <?php echo $e['Estado']['id']; ?>
      </td>
      <td>
        <?php echo $this->Html->link($e['Estado']['nome'],
                array('controller' => 'estados',
                      'action' => 'view', $e['Estado']['id'])); ?>
      </td>
      <td>
        <?php echo $e['Estado']['sigla']; ?>
      </td>
    </tr>
  <?php endforeach; ?>
</table>
