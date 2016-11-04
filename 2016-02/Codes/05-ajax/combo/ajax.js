function criarRequest(obj) {

  var xmlhttp = new XMLHttpRequest();

  xmlhttp.onreadystatechange = function () {

    if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {

      document.getElementById(obj).innerHTML = xmlhttp.responseText;

    }

  }

  return xmlhttp;

}
