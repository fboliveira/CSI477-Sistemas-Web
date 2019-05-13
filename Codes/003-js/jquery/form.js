function validar(campo, alerta, label) {

  console.log("Validar: " + campo);

  //input[name='valorX']
  //#idDoCampo
  var n = parseFloat( $(campo).val() );

  if ( $(campo).val().length == 0 || isNaN(n)) {

    // Erro
    // Exibir alerta
    $(alerta).slideDown();

    // Adiciona erro ao label
    $(label).addClass("text-danger");
    // No input
    $(campo).addClass("is-invalid");

    $(campo).val("");
    $(campo).focus();
    return false;

  }

  // Tudo correto

  // Oculta alerta
  $(alerta).hide();
  // Remove classes
  $(campo).removeClass("is-invalid");
  $(label).removeClass("text-danger");
  // Adiciona classe ao input
  $(campo).addClass("is-valid");

  return true;

}

$(document).ready(function(){

  //$("button[name='calculo']")
  $("#calculo").click(function(){

    if ( validar( "input[name='valor1']", "#alerta1", "#labelv1" )
      && validar( "input[name='valor2']", "#alerta2", "#labelv2" ) ) {

        var n1 = parseFloat( $("input[name='valor1']").val() );
        var n2 = parseFloat( $("input[name='valor2']").val() );

        var res = n1 + n2;

        $("input[name='resultado']").val(res);


      } else {
        $("input[name='resultado']").val("");
      }

  });





});
