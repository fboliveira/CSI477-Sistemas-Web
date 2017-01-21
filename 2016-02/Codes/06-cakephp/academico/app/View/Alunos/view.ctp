
<h1><?= $aluno['Aluno']['nome']; ?></h1>

<p>Código: <?= $aluno['Aluno']['id']; ?></p>
<p>Nome: <?= $aluno['Aluno']['nome']; ?></p>
<p>Cidade: <?= $this->Html->link($aluno['Aluno']['cidade_id'],
       array('controller' => 'cidades',
             'action' => 'view', $aluno['Aluno']['cidade_id']));
             ?></p>

<?=
  $this->Html->link("Voltar",
    array('controller' => 'alunos',
          'action' => 'index'));
?>
