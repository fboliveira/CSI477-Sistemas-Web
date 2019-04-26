// Comentário
/*
  Comentários
*/

function calcular() {

  var n1 = parseFloat(document.dados.valor1.value);
  var n2 = parseFloat(document.dados.valor2.value);

  if ( document.dados.valor1.value.length == 0 || isNaN(n1) ) {

    //window.alert("Preencha o primeiro valor corretamente!");

    //document.getElementById("alerta1").innerHTML = "<h3>Preencha o primeiro valor corretamente!<h3>";

    document.getElementById("alerta1").style.display = "block";

    document.dados.valor1.value = "";
    document.dados.valor1.focus();
    return;

  }

  document.getElementById("alerta1").style.display = "none";

  if ( document.dados.valor2.value.length == 0 || isNaN(n2) ) {

    window.alert("Preencha o segundo valor corretamente!");
    document.dados.valor2.value = "";
    document.dados.valor2.focus();
    return;

  }

  var res = n1 + n2;

  document.dados.resultado.value = res;


}
