



$(document).ready(function() {

  console.log("Documento está pronto para uso!");

  $("a").click(function() {

    alert("Clique no link!");

  });

  $("#conteudo").click(function() {

    $("#conteudo").append("<h5>Clicou!</h5>");

  });


  $("button[name='exibir']").click(function() {
    $("#links").show();
  });

  $("button[name='ocultar']").click(function() {
    $("#links").hide();
  });

  $("button[name='mudar']").click(function() {
    $("button[name='ocultar']").addClass("btn btn-primary");
  });

  $("#calcular").click(function() {

    $("#resultado").val( parseInt($("#valor1").val()) + parseInt($("#valor2").val()) );

  });










});
