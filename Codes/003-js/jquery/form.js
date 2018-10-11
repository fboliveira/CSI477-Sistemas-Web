function validarCampo(campo, alerta, label) {

  console.log("validarCampo: " + campo + " " + alerta + " " + label);

  // Validar campo
  var valor = parseInt($(campo).val());

  // Valor 1 -- inválido
  if ( isNaN(valor) ) {
    // Exibe o alerta
    $(alerta).slideDown();
    // Adiciona CSS de erro - input
    $(campo).addClass("is-invalid");
    // No label
    $(label).addClass("text-danger");
    // Limpar o campo
    $(campo).val("");
    // Definir o foco para o input
    $(campo).focus();
    // Abandonar a execução
    return false;
  }

  // Valor - correto

  // Oculta o alerta
  $(alerta).hide();
  // Remover as classes de erro
  $(campo).removeClass("is-invalid");
  $(label).removeClass("text-danger");
  // Adicionar classe de validade
  $(campo).addClass("is-valid");
  return true;

}




$(document).ready(function(){

  // Vincular ação ao botão de cálculo
  // $("#btnCalcular").click(function(){
  //
  // });

  $("button[name='calculo']").click(function(){

    if ( validarCampo("input[name='valor1']", "#alertaV1", "#labelV1") &&
         validarCampo("input[name='valor2']", "#alertaV2", "#labelV2")) {

           var n1 = parseInt( $("input[name='valor1']").val() );
           var n2 = parseInt( $("input[name='valor2']").val() );

           var res = n1 + n2;

           // Apresentar o resultado
           $("input[name='resultado']").val(res);

    } else {
      $("input[name='resultado']").val("");
    }

  });

  $("input[name='valor1']").focusout(function(){
    validarCampo("input[name='valor1']", "#alertaV1", "#labelV1");
  });

  $("input[name='valor2']").focusout(function(){
    validarCampo("input[name='valor2']", "#alertaV2", "#labelV2");
  });



});
