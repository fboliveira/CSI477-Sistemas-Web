// Sintaxe:
// $(seletor).acao( function() {} );

// Funcao que encapsula as demais
$(document).ready( function() {

  console.log("Documento carregado.");

  $("p").click(function(){
    $(this).hide();
  });

  // Ocultar
  $("button[name='ocultar']").click(function(){
    $("#texto").hide();
    $("#links").hide();
  });


  // Exibir
  $("button[name='exibir']").click(function(){
    $("#texto").show();
    $("#links").show();
  });

  //$("#mudar").click(function(){});
  $("button[name='alternar']").click(function(){
    $("#texto").fadeToggle("slow");
    $("#links").fadeToggle("slow");


    $("p").addClass("text-uppercase");
    $("p").removeClass("text-danger");

    $("#titulo").toggleClass("jumbotron");
    $("button").toggleClass("btn btn-primary");

    if ( $("#mudar").text() == "Alternar" ) {
      $("#mudar").text("Aparecer");
    } else {
      $("#mudar").text("Alternar");
    }


  });

  $("#validar").click(function(){

    // var est = document.dados.estado;    window.alert(est.value);
    // window.alert( est.options[ est.selectedIndex ].text );

    window.alert( $("#estado").val() );
    window.alert( $("#estado option:selected").text() );



  });






});
