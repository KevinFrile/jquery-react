import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Menu from './Menu';

class Counter extends Component {
  constructor(props) {
    super(props);
    this.incrementAsync = this.incrementAsync.bind(this);
    this.incrementIfOdd = this.incrementIfOdd.bind(this);
  }

  incrementIfOdd() {
    if (this.props.value % 2 !== 0) {
      this.props.onIncrement()
    }
  }

  incrementAsync() {
    setTimeout(this.props.onIncrement, 1000)
  }

  render() {
    const { value, onIncrement, onDecrement } = this.props
    return (
      <>
        <div class="container-fluid">

          <div class="row" id="navbar">
            <nav class="col-12">

              <a id="enlace1" href="/">
                INICIO
              </a>
            </nav>
          </div>
        </div>

        <br/><br/><br/><br/>
        
        <p>
          Clicked: {value} times
          {' '}
          <button onClick={onIncrement}>
            +
          </button>
          {' '}
          <button onClick={onDecrement}>
            -
          </button>
          {' '}
          <button onClick={this.incrementIfOdd}>
            Increment if odd
          </button>
          {' '}
          <button onClick={this.incrementAsync}>
            Increment async
          </button>
        </p>
      </>
    )
  }
}

Counter.propTypes = {
  value: PropTypes.number.isRequired,
  onIncrement: PropTypes.func.isRequired,
  onDecrement: PropTypes.func.isRequired
}

export default Counter
