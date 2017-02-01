<span class="notice success">
	<?= $this->Html->link("Estados",
		array('controller' => 'estados',
			  'action' => 'index')); ?>
</span>

<span class="notice success">
	<?= $this->Html->link("Cidades",
		array('controller' => 'cidades',
			  'action' => 'index')); ?>
</span>

<span class="notice success">
	<?= $this->Html->link("Alunos",
		array('controller' => 'alunos',
			  'action' => 'index')); ?>
</span>

<span class="notice success">

	<?= $this->Html->link("Sair do Sistema ",
array('controller' => 'usuarios',
			'action' => 'logout')); ?>
			
 </span>
