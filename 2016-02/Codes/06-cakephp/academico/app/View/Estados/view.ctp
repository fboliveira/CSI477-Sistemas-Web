<?php
  if (empty($estado)) {
    echo "<h1>Estado não encontrado!</h1>";
  } else {
?>

<h1><?= $estado['Estado']['nome']; ?></h1>

<p>Código: <?= $estado['Estado']['id']; ?></p>
<p>Sigla: <?= $estado['Estado']['sigla']; ?></p>

<?=
  $this->Html->link("Voltar",
    array('controller' => 'estados',
          'action' => 'index'));
?>
<?php
  }
