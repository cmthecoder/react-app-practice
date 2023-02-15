import React from 'react'

const Person = (props) => {
  return (
    <div>
      <h1>Name: {props.name}</h1>
      <h2>Last Name: {props.lastName}</h2>
      <h2>Age: {props.age}</h2>
    </div>
  )
}

export default Person