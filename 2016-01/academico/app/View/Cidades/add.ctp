<h1>Inserir cidade</h1>

<?php

  echo $this->Form->create('Cidade');
  echo $this->Form->input('nome');
  echo $this->Form->select('estado_id', $estados,
                array('empty' => 'Selecione:'));

   echo $this->Form->end('Salvar');                  



 ?>
