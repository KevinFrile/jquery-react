import React from 'react'
import ReactDOM from 'react-dom'
import { createStore } from 'redux'
import Counter from './components/Counter'
import Menu from './components/Menu'
import counter from './reducers'


import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";


const store = createStore(counter)
const rootEl = document.getElementById('root')

const render = () => ReactDOM.render(
  <>
  
    <Counter
      value={store.getState()}
      onIncrement={() => store.dispatch({ type: 'INCREMENT' })}
      onDecrement={() => store.dispatch({ type: 'DECREMENT' })}
    />
  </>,
  rootEl
)

render()
store.subscribe(render)

export default render;
