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
        { name: 'Arto Hellas', number: '040-123456' },
        { name: 'Martti Tienari', number: '040-123456' },
        { name: 'Arto Järvinen', number: '040-123456' },
        { name: 'Lea Kutvonen', number: '040-123456' }
      ],
      newName: '',
      newNumber: '',
      filter: ''
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

  updateFilter = (event) => {
    this.setState({ filter: event.target.value })
  }

  render() {
    const persons = this.state.persons
          .filter(person => this.state.filter === '' || person.name.toLowerCase().includes(this.state.filter.toLowerCase()))
          .map(person => <Person key={person.name} name={person.name} number={person.number} />)

    return (
      <div>
        <h2>Puhelinluettelo</h2>
        <div>
          rajaa näytettäviä: <input
                               value={this.state.filter}
                               onChange={this.updateFilter}
                               />
        </div>
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
