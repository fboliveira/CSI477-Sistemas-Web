$(document).ready(function(){

  $("button[name='calculo']").click(function(){

    var n1 = $("input[name='n1']").val();
    var n2 = $("input[name='n2']").val();
    var res = parseInt(n1) + parseInt(n2);

    $("input[name='resultado']").val(res);

  });

});
