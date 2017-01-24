
<h1><?= $cidade['Cidade']['nome']; ?></h1>

<p>Código: <?= $cidade['Cidade']['id']; ?></p>
<p>Nome: <?= $cidade['Cidade']['nome']; ?></p>
<p>Estado: <?= $this->Html->link($cidade['Estado']['nome'] . '-' . $cidade['Estado']['sigla'],
     array('controller' => 'estados',
           'action' => 'view', $cidade['Cidade']['estado_id']));
           ?></p>

<?=
  $this->Html->link("Voltar",
    array('controller' => 'cidades',
          'action' => 'index'));
?>
