import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import { Jquery } from './Jquery';
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'

import Todo from '../Todo/components/App'
import rootReducer from '../Todo/reducers'

import TodosWhitUndo from '../TodosWhitUndo/components/App'
import reducer from '../TodosWhitUndo/reducers'

import MVC from '../TodoMVC/components/App'
import reducer1 from '../TodoMVC/reducers'
// import 'todomvc-app-css/index.css'


import { createLogger } from 'redux-logger'

import thunk from 'redux-thunk'
import reducer2 from '../Car/reducers'
import { getAllProducts } from '../Car/actions'
import Car from '../Car/containers/App'


import reducer3 from '../treeView/reducers'
import generateTree from '../generateTree'
import Node from '../treeView/containers/Node'


import reducer6 from '../Async/reducers'
import Async from '../Async/containers/App'



const middleware2 = [thunk]
if (process.env.NODE_ENV !== 'production') {
  middleware2.push(createLogger())
}

const store7 = createStore(
  reducer6,
  applyMiddleware(...middleware2)
)

const tree = generateTree()
const store6 = createStore(reducer3, tree)

const store2 = createStore(rootReducer)
const store3 = createStore(reducer)
const store4 = createStore(reducer1)

const middleware = [thunk];
if (process.env.NODE_ENV !== 'production') {
  middleware.push(createLogger());
}

const store5 = createStore(
  reducer2,
  applyMiddleware(...middleware)
)

store5.dispatch(getAllProducts())

function React() {
  return (
    <>
      <Jquery />
      <a id="Ejercicio-8"></a>
      <div class="row Ejercicio-8 m-0">
        <h2 class="ejercicio">Ejercicio 8</h2>

        <a href="http://localhost/jquery-react/consultas/consultas.html" class="boton letra1">Ejercicio-consultas</a>

      </div>

      <a id="Ejercicio-9"></a>
      <div class="row Ejercicio-9 m-0">
        <h2 class="ejercicio">Ejercicio 9</h2>

        <a href="http://localhost/jquery-react/crud/crud.php" class="boton letra1">Ejercicio-CRUD</a>
      </div>

      <a id="Ejercicio-10"></a>
      <div class="row Ejercicio-10 m-0">
        <h2 class="ejercicio">Ejercicio 10</h2>

        <Link to="/Post" className="boton letra1">Ejercicio React #1</Link>
      </div>

      <a id="Ejercicio-11"></a>
      <div class="row Ejercicio-11 m-0">
        <h2 class="ejercicio">Ejercicio 11</h2>

        <Link to="/Vanilla" className="boton letra1">Ejercicio Counter Vanilla</Link>
      </div>

      <a id="Ejercicio-12"></a>
      <div class="row Ejercicio-12 m-0">
        <h2 class="ejercicio">Ejercicio 12</h2>

        <Link to="/Counter" className="boton letra1">Ejercicio Counter</Link>
      </div>

      <a id="Ejercicio-13"></a>
      <div class="row Ejercicio-13 m-0">
        <h2 class="ejercicio">Ejercicio 13 - TODO</h2>
        <div id="Todo">
          <Provider store={store2}>
            <Todo />
          </Provider>
        </div>
      </div>

      <a id="Ejercicio-14"></a>
      <div class="row Ejercicio-14 m-0">
        <h2 class="ejercicio">Ejercicio 14 - TodosWhitUndo</h2>
        <div id="Todo">
          <Provider store={store3}>
            <TodosWhitUndo />
          </Provider>
        </div>
      </div>

      <a id="Ejercicio-15"></a>
      <div class="row Ejercicio-15 m-0">
        <h2 class="ejercicio">Ejercicio 15 - MVC</h2>
        <div id="Todo">
          <Provider store={store4}>
            <MVC />
          </Provider>
        </div>
      </div>

      <a id="Ejercicio-16"></a>
      <div class="row Ejercicio-16 m-0">
        <h2 class="ejercicio">Ejercicio 16 - car</h2>

        <div id="Todo">
          <Provider store={store5}>
            <Car />
          </Provider>
        </div>
      </div>

      <a id="Ejercicio-17"></a>
      <div class="row Ejercicio-17 m-0">
        <h2 class="ejercicio">Ejercicio 17</h2>

        <h1>Error</h1>
      </div>

      <a id="Ejercicio-18"></a>
      <div class="row Ejercicio-18 m-0">
        <h2 class="ejercicio">Ejercicio 18 - Async</h2>

        <Provider store={store7}>
          <Async />
        </Provider>

      </div>

      <a id="Ejercicio-19"></a>
      <div class="row Ejercicio-19 m-0">
        <h2 class="ejercicio">Ejercicio 19 - Universal</h2>

        <h1>Error</h1>
        

      </div>

      <a id="Ejercicio-20"></a>
      <div class="row Ejercicio-20 m-0">
        <h2 class="ejercicio">Ejercicio 20 Tree-View</h2>
        <br /><br /><br />
        <div>
          <Provider store={store6}>
            <Node id={0} />
          </Provider>
        </div>

      </div>


    </>
  );
}

export default React;


