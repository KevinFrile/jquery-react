function cambiar() {
    var contents = prompt("What to put in Pandora's box?", "all evils");
    console.log("putting " + contents + " into Pandora's box");
    $('#pandora').html(contents);
}

function cambiar2() {

    $("#fig1").css("border-top", "3px solid white");
    $("#fig1").css("border-bottom", "3px solid white");
    $("#fig1").css("text-align", "center");
    $("#fig1").css("padding", "10px");
    $("#fig1 figcaption").css("background-color", "white");
    $("#cap1").css("border-radius", "20px");
}

function cambiar3() {

    $("#img2").attr("src", "https://cdn.pixabay.com/photo/2017/06/24/23/03/railway-2439189_960_720.jpg");
    $("#img2").attr("alt", "vias del tren");
    $("#fig2 figcaption").html("Vias del tren en verano");
}

function mostrar() {

    $("#fig3").show();
}
function ocultar() {

    $("#fig3").hide();
}

function cambiar4() {

    $("#characters1 li").css("font-size", "18px");   // matches 10 elts
    $("#characters1 .gryffindor").css("color", "red");  // matches 5 elts
    $("#characters1 .slytherin").hide();    // matches 3 elts

}
function cambiar5(){

    $("#fig4")
    .css("border-top","2px solid black")
    .css("border-bottom","2px solid black")
    .css("text-align","center")
    .css("padding","10px");
}

function cambiar6(){
    $("<li>")
    .html("Percy")
    .addClass("gryffindor")
    .css("text-decoration","line-through")
    .appendTo("#characters2");
}