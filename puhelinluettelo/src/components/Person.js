import React from 'react'

const Person = (props) => {
  const removePerson = props.removePerson

  return (
    <tr><td>{props.name}</td><td>{props.number}</td><td><button onClick={removePerson}>poista</button></td></tr>
  )
}

export default Person
