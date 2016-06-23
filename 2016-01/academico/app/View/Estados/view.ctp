<h1>Dados do Estado:</h1>

<p>Código: <?php echo $estado['Estado']['id'] ?> </p>
<p>Nome: <?php echo $estado['Estado']['nome'] ?> </p>
<p>Sigla: <?php echo $estado['Estado']['sigla'] ?> </p>


<?php

  echo $this->Html->link("Voltar",
        array('controller' => 'estados',
              'action' => 'index'));

 ?>
