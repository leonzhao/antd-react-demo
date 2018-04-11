import React from 'react'


function NumberList(props) {
  const numbers = props.numbers
  const listItems = numbers.map(number => <li key={number}>{number}</li>)

  return (
    <ul>{listItems}</ul>
  )
}

const numbers = [1,3,5,7,9]
export default class Lists extends React.Component {
  
  render() {
    return (
      <div>
        <h2 className='Component-title'>Basic List Component</h2>
        <NumberList numbers={numbers} />
      
      </div>

    )
  }
}