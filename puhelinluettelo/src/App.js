import React from 'react';

const Person = (props) => {
  return (
    <div>{props.name}</div>
  )
}

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      persons: [
        { name: 'Arto Hellas' }
      ],
      newName: ''
    }
  }

  addPerson = (event) => {
    event.preventDefault()
    this.setState((prevState) => {
      const newName = prevState.newName

      if (prevState.persons.map(person => person.name).includes(newName)) {
        alert('Nimi "' + newName + '" löytyy jo puhelinluettelosta!')
        return {
          newName: ''
        }
      }

      const newPerson = {
        name: newName
      }

      const persons = prevState.persons.concat(newPerson)
      return {
        persons,
        newName: ''
      }
    })
  }

  updateNewName = (event) => {
    this.setState({ newName: event.target.value })
  }

  render() {
    const names = this.state.persons.map(person => <Person key={person.name} name={person.name} />)

    return (
      <div>
        <h2>Puhelinluettelo</h2>
        <form onSubmit={this.addPerson}>
          <div>
            nimi:
            <input
              value={this.state.newName}
              onChange={this.updateNewName}
              />
          </div>
          <div>
            <button type="submit">lisää</button>
          </div>
        </form>
        <h2>Numerot</h2>
        {names}
      </div>
    )
  }
}

export default App
