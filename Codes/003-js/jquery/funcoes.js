// jQuery -> sintaxe
// $(seletor).acao();

$(document).ready(function(){

  console.log("Documento carregado.");


  $("p").click(function(){
    $(this).hide();
  });

  $("button[name='exibir']").click(function(){
    $("#links").show();
    $("#texto").show();
  });

  $("button[name='ocultar']").click(function(){
    $("#links").hide();
    $("#texto").hide();
  });

  $("button[name='mudar']").click(function(){
    $("#links").toggle("slow");
    $("#texto").toggle("slow");
    $("button[name='mudar']").text("Mudar");

    $("p").addClass("text-uppercase");
    $("#titulo").toggleClass("jumbotron");

    $("button").toggleClass("btn btn-primary");

    $("p").removeClass("text-danger");

    window.alert($("#valor").val());

  });

  $("button[name='validar']").click(function(){

    if( $("#estado").val() == "0" ) {
      window.alert("Selecione o estado!");
      $("#estado").focus();
    } else {
      window.alert($("#estado option:selected").text());
    }

  });






});
