<h1>Dados da Cidade:</h1>

<p>Código: <?php echo $cidade['Cidade']['id'] ?> </p>
<p>Nome: <?php echo $cidade['Cidade']['nome'] ?> </p>
<p>Sigla: <?php echo $cidade['Estado']['nome'] . '-' . $cidade['Estado']['sigla'] ?> </p>


<?php

  echo $this->Html->link("Editar ",
  array('controller' => 'cidades',
        'action' => 'edit',
        $cidade['Cidade']['id'] ));

  echo $this->Html->link("Excluir ",
        array('controller' => 'cidades',
              'action' => 'del',
       $cidade['Cidade']['id']),
       array('confirm' => 'Deseja excluir?'));

  echo $this->Html->link("Voltar",
        array('controller' => 'cidades',
              'action' => 'index'));

 ?>
