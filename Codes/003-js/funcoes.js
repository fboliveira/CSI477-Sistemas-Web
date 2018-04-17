function calcular() {

}

// Sintaxe:
// $(seletor).acao();

// Executar quando o documento estiver carregado - completo
$(document).ready(function(){

  // Todo código jQuery

  console.log("Documento carregado.");

  // Ocultar -> P: onclick
  $("p").click(function(){
    $(this).hide();
  });

  $("button[name='exibir']").click(function(){
      $("#links").show();
  });

  $("button[name='ocultar']").click(function(){
      $("#links").hide();
  });

  $("button[name='mudar']").click(function(){
      $("#links").toggle("slow");
      $("button[name='mudar']").text("Mudar");
      $("p").addClass("h2");
      $("p").removeClass("alert-danger");

      $("button").toggleClass("btn btn-primary");

      $("#titulo").toggleClass("jumbotron");

  });

  $("button[name='validar']").click(function(){
      if ( $("#estado").val() == "0" ) {
          alert("Selecione o estado!");
          $("#estado").focus();
      } else {
        alert($("#estado option:selected").text());
      }
  });






});
