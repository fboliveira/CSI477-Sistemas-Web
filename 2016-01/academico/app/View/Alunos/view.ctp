<h1>Dados do(a) Aluno(a):</h1>

<p>Código: <?php echo $aluno['Aluno']['id']; ?> </p>
<p>Nome: <?php echo $aluno['Aluno']['nome']; ?> </p>
<p>Endereço: <?php echo $aluno['Aluno']['rua'] . ' - ' . $aluno['Aluno']['numero'] . ' - ' . $aluno['Aluno']['bairro'];   ?> </p>
<p>Cidade: <?php echo $aluno['Cidade']['nome'] . '-' . $aluno['Cidade']['Estado']['sigla'] . ' - CEP: ' . $aluno['Aluno']['cep'] ;  ?></p>

<?php

  echo $this->Html->link("Voltar",
        array('controller' => 'alunos',
              'action' => 'index'));

 ?>
