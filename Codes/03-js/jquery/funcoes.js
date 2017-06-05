// Sintaxe:
// $(seletor).acao()

// Document.ready()
//$(function() {
//
//});

$(document).ready(function(){

  // Todo código jQuery
  console.log("Documento pronto para uso.");

  // Ocultar "P" -> click
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
    $("#titulo").addClass("jumbotron");
    $("button").addClass("btn btn-primary");
    $("p").removeClass("h2");
    $("#links").addClass("alert alert-info");

    $("a").toggleClass("btn btn-warning");

  });






});
