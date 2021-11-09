import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import React from './components/React';
import Post from './components/Post';
import Menu from './components/Menu';
import Counter from './components/Counter'
import counter from './reducers'
import { createStore } from 'redux'
import ReactDOM from 'react-dom'
import Primero from './Primero';

import { render } from 'react-dom'
import { Provider } from 'react-redux'
import Todo from './Todo/components/App'
import rootReducer from './Todo/reducers'


import './css/menu.css';
import './css/post.css';
import './css/index.css';
import react from "react";


const store = createStore(counter)


function App() {
  return (
    <>

      <Router>
        <Switch>
          <Route exact path="/" render={() => (
            <>
              <Menu />
              <React />
            </>
          )} />
          <Route exact path="/Post" render={() => (
            <>
              <Menu />
              <Post />
            </>
          )} />
          <Route exact path="/Vanilla" render={() => (
            <>
              <Menu />

            </>
          )} />
          <Route exact path="/Counter" component={Primero} ></Route>

          <Router exact path="/Todos-with-Undo" render={() => (
            <>
              <Menu />

            </>
          )} />
          <Router exact path="/TodoMVC" render={() => (
            <>
              <Menu />

            </>
          )} />
          <Router exact path="/Shopping-Cart" render={() => (
            <>
              <Menu />

            </>
          )} />
          <Router exact path="/Tree-View" render={() => (
            <>
              <Menu />

            </>
          )} />
          <Router exact path="/Async" render={() => (
            <>
              <Menu />

            </>
          )} />
          <Router exact path="/Universal" render={() => (
            <>
              <Menu />

            </>
          )} />
          <Router exact path="/Real-World" render={() => (
            <>
              <Menu />

            </>
          )} />
        </Switch>
      </Router>
    </>
  );

}

export default App;


