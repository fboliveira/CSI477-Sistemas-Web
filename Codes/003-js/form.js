function validar(campo, alerta) {

}

function calcular() {

  var n1 = parseInt(document.dados.valor1.value);
  var n2 = parseInt(document.dados.valor2.value);

  if ( document.dados.valor1.value.length == 0
          || isNaN(n1) ) {
            //window.alert("Preencha o primeiro valor corretamente!");
            document.getElementById("alertaV1").style.display = "block";
            document.dados.valor1.classList.add("is-invalid");
            document.getElementById("labelV1").classList.add("text-danger");
            document.dados.valor1.value = "";
            document.dados.valor1.focus();
            return;
          }

    document.getElementById("alertaV1").style.display = "none";
    document.dados.valor1.classList.remove("is-invalid");
    document.dados.valor1.classList.add("is-valid");
    document.getElementById("labelV1").classList.remove("text-danger");

    if ( document.dados.valor2.value.length == 0
            || isNaN(n2) ) {
              //window.alert("Preencha o segundo valor corretamente!");
              document.dados.valor2.value = "";
              document.dados.valor2.focus();
              return;
            }


  var res = n1 + n2;

  document.dados.resultado.value = res;






}
