import { Component } from 'react';
import $ from 'jquery';

export class Jquery extends Component {

  cambiar = (e) => {
    var contents = prompt("What to put in Pandora's box?", "all evils");
    console.log("putting " + contents + " into Pandora's box");
    $('#pandora').html(contents);
  };

  cambiar2 = () => {

    $("#fig1").css("border-top", "3px solid white");
    $("#fig1").css("border-bottom", "3px solid white");
    $("#fig1").css("text-align", "center");
    $("#fig1").css("padding", "10px");
    $("#fig1 figcaption").css("background-color", "white");
    $("#cap1").css("border-radius", "20px");
  }

  cambiar3 = () => {

    $("#img2").attr("src", "https://cdn.pixabay.com/photo/2017/06/24/23/03/railway-2439189_960_720.jpg");
    $("#img2").attr("alt", "vias del tren");
    $("#fig2 figcaption").html("Vias del tren en verano");
  }

  mostrar = () => {

    $("#fig3").show();
  }
  ocultar = () => {

    $("#fig3").hide();
  }

  cambiar4 = () => {

    $("#characters1 li").css("font-size", "18px");   // matches 10 elts
    $("#characters1 .gryffindor").css("color", "red");  // matches 5 elts
    $("#characters1 .slytherin").hide();    // matches 3 elts

  }
  cambiar5 = () => {

    $("#fig4")
      .css("border-top", "2px solid black")
      .css("border-bottom", "2px solid black")
      .css("text-align", "center")
      .css("padding", "10px");
  }

  cambiar6 = () => {
    $("<li>")
      .html("Percy")
      .addClass("gryffindor")
      .css("text-decoration", "line-through")
      .appendTo("#characters2");
  }

  render() {
    return (
      <>


        <a id="Ejercicio-1"></a>
        <div class="row Ejercicio-1  m-0">
          <h2 class="ejercicio">Ejercicio 1</h2>
          <div id="pandora" class="letra2">This is Pandora's box</div>
          <input type="button" name="Button" value="Ejecutalo" class="boton letra1" onClick={this.cambiar} />
        </div>

        <a id="Ejercicio-2"></a>
        <div class="row Ejercicio-2 m-0">
          <h2 class="ejercicio">Ejercicio 2</h2>
          <figure id="fig1" class="p-3 m-0">
            <img id="img1" src="https://cdn.pixabay.com/photo/2016/03/09/09/37/railway-1245906_960_720.jpg" alt="vias del tren en la nieve" /><br /><br />
            <figcaption id="cap1">ferrocarril vias</figcaption>
          </figure>
          <input type="button" name="Button" value="Ejecutalo" class="boton letra1" onClick={this.cambiar2} />
        </div>

        <a id="Ejercicio-3"></a>
        <div class="row Ejercicio-3 m-0">
          <h2 class="ejercicio">Ejercicio 3</h2>
          <figure id="fig2" class="p-3 m-0">
            <img id="img2" src="https://cdn.pixabay.com/photo/2016/03/09/09/37/railway-1245906_960_720.jpg" alt="vias del tren en invierno" /><br /><br />
            <figcaption id="cap2" class="text-center">Vias del tren en invierno</figcaption>
          </figure>
          <input type="button" name="Button" value="Ejecutalo" class="boton letra1" onClick={this.cambiar3} />
        </div>

        <a id="Ejercicio-4"></a>
        <div class="row Ejercicio-4 m-0">
          <h2 class="ejercicio">Ejercicio 4</h2>
          <figure id="fig3" class="p-3 m-0">
            <img id="img3" src="https://cdn.pixabay.com/photo/2016/03/09/09/37/railway-1245906_960_720.jpg" alt="vias del tren en invierno" /><br /><br />
            <figcaption id="cap3" class="text-center">Vias del tren en invierno</figcaption>
          </figure>
          <input type="button" name="Button" value="Mostrar" class="boton letra1" onClick={this.mostrar} />
          <input type="button" name="Button" value="Ocultar" class="boton letra1" onClick={this.ocultar} />
        </div>

        <a id="Ejercicio-5"></a>
        <div class="row Ejercicio-5 m-0">
          <h2 class="ejercicio">Ejercicio 5</h2>
          <ol id="characters1">
            <li class="gryffindor">Harry</li>
            <li class="gryffindor">Ron</li>
            <li class="gryffindor">Hermione</li>
            <li class="gryffindor">Fred</li>
            <li class="gryffindor">George</li>
            <li class="ravenclaw">Cho</li>
            <li class="hufflepuff">Cedric</li>
            <li class="slytherin">Draco</li>
            <li class="slytherin">Crabbe</li>
            <li class="slytherin">Goyle</li>
          </ol>

          <input type="button" name="Button" value="Ejecutalo" class="boton letra1" onClick={this.cambiar4} />
        </div>

        <a id="Ejercicio-6"></a>
        <div class="row Ejercicio-6 m-0">
          <h2 class="ejercicio">Ejercicio 6</h2>
          <figure id="fig4" class="p-3 m-0">
            <img id="img4" src="https://cdn.pixabay.com/photo/2016/03/09/09/37/railway-1245906_960_720.jpg" alt="vias del tren en invierno" /><br /><br />
            <figcaption id="cap4" class="text-center">Vias del tren en invierno</figcaption>
          </figure>
          <input type="button" name="Button" value="Ejecutalo" class="boton letra1" onClick={this.cambiar5} />
        </div>

        <a id="Ejercicio-7"></a>
        <div class="row Ejercicio-7 m-0">
          <h2 class="ejercicio">Ejercicio 7</h2>
          <ol id="characters2">
            <li class="gryffindor">Harry</li>
            <li class="gryffindor">Ron</li>
            <li class="gryffindor">Hermione</li>
            <li class="gryffindor">Fred</li>
            <li class="gryffindor">George</li>
            <li class="ravenclaw">Cho</li>
            <li class="hufflepuff">Cedric</li>
            <li class="slytherin">Draco</li>
            <li class="slytherin">Crabbe</li>
            <li class="slytherin">Goyle</li>
          </ol>

          <input type="button" name="Button" value="Ejecutalo" class="boton letra1" onClick={this.cambiar6} />
        </div>

      </>
    );
  }
}


