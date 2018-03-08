import React from 'react'

function ActionLink () {
  function handleClick (e) {
    e.preventDefault()
    console.log('The link was clicked.')
  }

  return (
    <a href='#blank' onClick={handleClick}>
      Action Link
    </a>
  )
}

class Toggle extends React.Component {
  constructor(props) {
    super(props)
    this.state = {isToggleOn: true}

    this.handleClick = this.handleClick.bind(this)
  }

  handleClick() {
    this.setState(preState => ({
      isToggleOn: !preState.isToggleOn
    }))
  }

  render() {
    return (
      <button onClick={this.handleClick}>
        {this.state.isToggleOn ? 'ON' : 'OFF'}
      </button>
    )
  }
}

class LoggingButtonA extends React.Component {
  // class field syntax
  handleClick = () => {
    console.log('this is:', this)
  }

  render() {
    return (
      <button onClick={this.handleClick}>
        Login A
      </button>
    )
  }
}

class LoggingButtonB extends React.Component {
  handleClick() {
    console.log('this is:', this)
  }

  render() {
    // This syntax ensures `this` is bound within handleClick
    // arrow function
    return (
      <button onClick={(e) => this.handleClick(e)}>
        Login B
      </button>
    )
  }
}

export default function HandleEvents() {
  return (
    <div>
      <h2 className='Component-title'>Handling Events Demo</h2>
      <b>Prevent Default Event: </b> <ActionLink /><br />
      <b>calling bind: </b><Toggle /> <br />
      <b>class field syntax: </b><LoggingButtonA /><br/>
      <b>arrow function: </b><LoggingButtonB />

      <p>notes: recommend binding in the constructor or using the class fields syntax, to avoid this sort of performance problem</p>

      <h3>Passing Arguments to Event Handlers</h3>
    </div>
  )
}