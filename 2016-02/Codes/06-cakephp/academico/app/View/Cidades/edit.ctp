<h1>Editar cidade</h1>

<?php

  echo $this->Form->create('Cidade');

  echo $this->Form->input('id');

  echo $this->Form->input('nome');
  echo $this->Form->select('estado_id', $estados);

  echo $this->Form->end('Salvar');






 ?>
