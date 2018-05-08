<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <title>Inserir cidades</title>
  </head>
  <body>

    <form method="post" action="router.php?op=3">

      <label for="nome">Nome:</label>
      <input type="text" name="nome">

      <label for="estado_id">Estado:</label>
      <select name="estado_id">
        <option value="">Selecione:</option>
        <!-- Estados //-->
        <?php foreach( $lista as $e ): ?>
          <option value="<?= $e['id'] ?>"><?= $e['nome'] ?></option>
        <?php endforeach ?>
      </select>

      <input type="submit" value="Cadastrar">
      <input type="reset" value="Limpar">

    </form>






  </body>
</html>
