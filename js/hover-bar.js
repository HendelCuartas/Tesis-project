function hoverBar() {
    console.log("entrahover");
    $("#go-home").hover(
        function () {
            console.log("entrahover");
            $("#go-home").append(`<div class="etiqueta"> <p> Home </p> </div>`);
        }, function () {
            $(".etiqueta").remove();
        });
    $("#go-doc").hover(
        function () {
            console.log("entrahover");
            $("#go-doc").append(`<div class="etiqueta"> <p> Mapa </p> </div>`);
        }, function () {
            $(".etiqueta").remove();
        });
    $("#go-his").hover(
        function () {
            console.log("entrahover");
            $("#go-his").append(`<div class="etiqueta"> <p> Historias </p> </div>`);
        }, function () {
            $(".etiqueta").remove();
        });
    $("#go-con").hover(
        function () {
            console.log("entrahover");
            $("#go-con").append(`<div class="etiqueta"> <p> Contacto </p> </div>`);
        }, function () {
            $(".etiqueta").remove();
        });
}