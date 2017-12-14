// Sintaxe:
// $(seletor).acao()

$(document).ready(function(){

    // Todo conteúdo jQuery
    console.log("Documento pronto para uso.");

    // P -> click -> ocultar
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
        $("#links").addClass("alert alert-info");

        $("p").removeClass("h2");

        $("a").toggleClass("btn btn-warning");
    });

    $("button[name='validar']").click(function(){
        if ($("#estado").val() == "0") {
            alert("Selecione o estado!");
            $("#estado").focus();
        } else {
            alert($("#estado option:selected").val());
        }
    });










});
