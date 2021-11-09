import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function Menu() {
  return (
    <>
      <div class="container-fluid">

        <div class="row" id="navbar">
          <nav class="col-12">

            <Link id="enlace1" to="/">
              INICIO
            </Link>

            <button id="botonHamburguesa" data-bs-toggle="offcanvas" data-bs-target="#Menu-right"
              aria-controls="Menu-right"> <i class="fas fa-bars"></i>
            </button>

            <div class="offcanvas offcanvas-end" tabindex="-1" id="Menu-right">

              <div class="offcanvas-header">

                <button type="button" class="btn text-reset" data-bs-dismiss="offcanvas" aria-label="Close"><i
                  class="fas fa-times botonCerrar"></i>
                </button>

              </div>
              <div class="offcanvas-body ">
                <hr />
                <h3>JQuery</h3>
                <a class="enlace2collapsado" href="#Ejercicio-1">
                  <h4> Ejercicio 1</h4>
                </a>
                <a class="enlace2collapsado" href="#Ejercicio-2">
                  <h4> Ejercicio 2</h4>
                </a>
                <a class="enlace2collapsado" href="#Ejercicio-3">
                  <h4> Ejercicio 3</h4>
                </a>
                <a class="enlace2collapsado" href="#Ejercicio-4">
                  <h4> Ejercicio 4</h4>
                </a>
                <a class="enlace2collapsado" href="#Ejercicio-5">
                  <h4> Ejercicio 5</h4>
                </a>
                <a class="enlace2collapsado" href="#Ejercicio-6">
                  <h4> Ejercicio 6</h4>
                </a>
                <a class="enlace2collapsado" href="#Ejercicio-7">
                  <h4> Ejercicio 7</h4>
                </a>
                <hr />
                <h3>PDO</h3>
                <a class="enlace2collapsado" href="#Ejercicio-8">
                  <h4> Ejercicio 8</h4>
                </a>
                <a class="enlace2collapsado" href="#Ejercicio-9">
                  <h4> Ejercicio 9</h4>
                </a>
                <hr />
                <h3>REACT - REDUX</h3>
                <a class="enlace2collapsado" href="#Ejercicio-10">
                  <h4> Ejercicio 10</h4>
                </a>
                <a class="enlace2collapsado" href="#Ejercicio-11">
                  <h4> Ejercicio 11</h4>
                </a>
                <a class="enlace2collapsado" href="#Ejercicio-12">
                  <h4> Ejercicio 12</h4>
                </a>
                <a class="enlace2collapsado" href="#Ejercicio-13">
                  <h4> Ejercicio 13</h4>
                </a>
                <a class="enlace2collapsado" href="#Ejercicio-14">
                  <h4> Ejercicio 14</h4>
                </a>
                <a class="enlace2collapsado" href="#Ejercicio-15">
                  <h4> Ejercicio 15</h4>
                </a>
                <a class="enlace2collapsado" href="#Ejercicio-16">
                  <h4> Ejercicio 16</h4>
                </a>
                <a class="enlace2collapsado" href="#Ejercicio-17">
                  <h4> Ejercicio 17</h4>
                </a>
                <a class="enlace2collapsado" href="#Ejercicio-18">
                  <h4> Ejercicio 18</h4>
                </a>
                <a class="enlace2collapsado" href="#Ejercicio-19">
                  <h4> Ejercicio 19</h4>
                </a>
                <a class="enlace2collapsado" href="#Ejercicio-20">
                  <h4> Ejercicio 20</h4>
                </a>
                <hr />
                <br />
                <h5 class="text-center Copyright">Copyright © Kevin Andres Fraile Camacho 2021</h5>
                <br />
                <img src="https://cdn.worldvectorlogo.com/logos/w3c-blue.svg" alt="w3c" id="w3c" />

              </div>
            </div>

          </nav>

        </div>
      </div>

    </>
  );
}

export default Menu;
