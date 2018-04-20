/*
 * Validar os campos do formulários
 * Operar - soma
*/

function validarCampo(campo, grupo, alerta) {

  console.log("validarCampo: " + campo + " " + grupo + " " + alerta);

  // Validar os campos - valor1 e valor2
  var valor1 = parseInt($(campo).val());

  // Validar - valor
  if (isNaN(valor1)) {
      // Exibe o alerta
      $(alerta).slideDown();
      // Adiciona a classe CSS de erro
      $(grupo).addClass("has-error");
      // Limpa o campo
      $(campo).val("");
      // Define o foco para o campo
      $(campo).focus();
      return false;
  }

  // Valor - correto
  // Remover a classe de erro;
  $(grupo).removeClass("has-error");
  // Ocultar o alerta - mensagem
  $(alerta).hide();
  return true;
}


// Aguardar que o documento esteja completo - carregado
$(document).ready(function(){

  console.log("Documento carregado.");

  // $("input[name='valor1']").focusout(function(){
  //   // Validar os campos - valor1 e valor2
  //   var valor1 = parseInt($("input[name='valor1']").val());
  //
  //   // Validar - valor1
  //   if (isNaN(valor1)) {
  //       // Exibe o alerta
  //       $("#alertaV1").slideDown();
  //       // Adiciona a classe CSS de erro
  //       $("#grupoV1").addClass("has-error");
  //       // Limpa o campo
  //       $("input[name='valor1']").val("");
  //       // Define o foco para o campo
  //       $("input[name='valor1']").focus();
  //       return;
  //   }
  //
  //   // Valor1 - correto
  //   // Remover a classe de erro;
  //   $("#grupoV1").removeClass("has-error");
  //   // Ocultar o alerta - mensagem
  //   $("#alertaV1").hide();
  // });

  $("#valor1").blur(function(){
    validarCampo("#valor1", "#grupoV1", "#alertaV1");
  });
  $("#valor2").blur(function(){
    validarCampo("#valor2", "#grupoV2", "#alertaV2");
  });


  $("button[name='calculo']").click(function(){

   //  // Validar os campos - valor1 e valor2
   //  var valor1 = parseInt($("input[name='valor1']").val());
   //
   //  // Validar - valor1
   //  if (isNaN(valor1)) {
   //      // Exibe o alerta
   //      $("#alertaV1").slideDown();
   //      // Adiciona a classe CSS de erro
   //      $("#grupoV1").addClass("has-error");
   //      // Limpa o campo
   //      $("input[name='valor1']").val("");
   //      // Define o foco para o campo
   //      $("input[name='valor1']").focus();
   //      return;
   //  }
   //
   //  // Valor1 - correto
   //  // Remover a classe de erro;
   //  $("#grupoV1").removeClass("has-error");
   //  // Ocultar o alerta - mensagem
   //  $("#alertaV1").hide();
   //
   //  //--------------------------------------------------
   //
   //  // Validar - valor2
   //  var valor2 = parseInt($("input[name='valor2']").val());
   //
   //  // Validar - valor2
   //  if (isNaN(valor2)) {
   //      // Exibe o alerta
   //      $("#alertaV2").show();
   //      // Adiciona a classe CSS de erro
   //      $("#grupoV2").addClass("has-error");
   //      // Limpa o campo
   //      $("input[name='valor2']").val("");
   //      // Define o foco para o campo
   //      $("input[name='valor2']").focus();
   //      return;
   //  }
   //
   //  // Valor2 - correto
   //  // Remover a classe de erro;
   //  $("#grupoV2").removeClass("has-error");
   //  // Ocultar o alerta - mensagem
   //  $("#alertaV2").hide();
   //

   if (validarCampo("#valor1", "#grupoV1", "#alertaV1") &&
        validarCampo("#valor2", "#grupoV2", "#alertaV2")) {
          // Operar
          var valor1 = parseInt($("#valor1").val());
          var valor2 = parseInt($("#valor2").val());

          var res = valor1 + valor2;

          // Apresentar o resultado
          $("input[name='res']").val(res);
        }

  });

});
