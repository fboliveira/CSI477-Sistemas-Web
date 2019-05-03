// Comentário
/*
  Comentários
*/

function validar(campo, alerta, label) {

  var n = parseFloat(campo.value);

  if (campo.value.length == 0 || isNaN(n)) {
    
    // Erro
    document.getElementById(alerta).style.display = "block";

    document.getElementById(label).classList.add("text-danger");

    campo.classList.add("is-invalid");

    campo.value = "";
    campo.focus();
    return false;
    
  }

  // Tudo correto
  document.getElementById(alerta).style.display = "none";
  campo.classList.remove("is-invalid");
  campo.classList.add("is-valid");

  document.getElementById(label).classList.remove("text-danger");

  return true;

}

function calcular() {
 
  var v1 = document.dados.valor1;
  var v2 = document.dados.valor2;

  if ( validar(v1, "alerta1", "labelv1") && validar(v2, "alerta2", "labelv2") ) {

    var n1 = parseFloat(v1.value);
    var n2 = parseFloat(v2.value);
  
    var res = n1 + n2;

    document.dados.resultado.value = res;
      
  }
  
}



function calcular1() {

  var v1 = document.dados.valor1;
  var v2 = document.dados.valor2;

  var n1 = parseFloat(v1.value);
  var n2 = parseFloat(document.dados.valor2.value);

  if ( v1.value.length == 0 || isNaN(n1) ) {

    //window.alert("Preencha o primeiro valor corretamente!");

    //document.getElementById("alerta1").innerHTML = "<h3>Preencha o primeiro valor corretamente!<h3>";

    document.getElementById("alerta1").style.display = "block";

    document.getElementById("labelv1").classList.add("text-danger");

    v1.classList.add("is-invalid");

    v1.value = "";
    v1.focus();
    return;

  }

  document.getElementById("alerta1").style.display = "none";
  v1.classList.remove("is-invalid");
  v1.classList.add("is-valid");

  document.getElementById("labelv1").classList.remove("text-danger");
  // document.getElementById("labelv1").classList.add("text-success");

  if ( document.dados.valor2.value.length == 0 || isNaN(n2) ) {

    window.alert("Preencha o segundo valor corretamente!");
    document.dados.valor2.value = "";
    document.dados.valor2.focus();
    return;

  }

  var res = n1 + n2;

  document.dados.resultado.value = res;


}
