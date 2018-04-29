import React from 'react';

const Person = (props) => {
  return (
    <tr><td>{props.name}</td><td>{props.number}</td></tr>
  )
}

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      persons: [
        { name: 'Arto Hellas', number: '040-123456' }
      ],
      newName: '',
      newNumber: ''
    }
  }

  addPerson = (event) => {
    event.preventDefault()
    this.setState((prevState) => {
      const newName = prevState.newName

      if (prevState.persons.map(person => person.name).includes(newName)) {
        alert('Nimi "' + newName + '" löytyy jo puhelinluettelosta!')
        return {
        }
      }

      const newPerson = {
        name: newName,
        number: prevState.newNumber
      }

      const persons = prevState.persons.concat(newPerson)
      return {
        persons,
        newName: '',
        newNumber: ''
      }
    })
  }

  updateNewName = (event) => {
    this.setState({ newName: event.target.value })
  }

  updateNewNumber = (event) => {
    this.setState({ newNumber: event.target.value })
  }

  render() {
    const persons = this.state.persons.map(person => <Person key={person.name} name={person.name} number={person.number} />)

    return (
      <div>
        <h2>Puhelinluettelo</h2>
        <form onSubmit={this.addPerson}>
          <div>
            nimi: <input
                    value={this.state.newName}
                    onChange={this.updateNewName}
                    />
          </div>
          <div>
            numero: <input
                      value={this.state.newNumber}
                      onChange={this.updateNewNumber}
                      />
          </div>
          <div>
            <button type="submit">lisää</button>
          </div>
        </form>
        <h2>Numerot</h2>
        <table>
          <tbody>
            {persons}
          </tbody>
        </table>
      </div>
    )
  }
}

export default App
