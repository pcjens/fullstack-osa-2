import React from 'react';
import AddPersonForm from './components/AddPersonForm';
import Filter from './components/Filter'
import Person from './components/Person'

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
          .filter(person =>
                  this.state.filter === '' ||
                  person.name.toLowerCase().includes(this.state.filter.toLowerCase()))
          .map(person => <Person key={person.name} name={person.name} number={person.number} />)

    return (
      <div>
        <h2>Puhelinluettelo</h2>
        <Filter filter={this.state.filter} updateFilter={this.updateFilter} />
        <AddPersonForm addPerson={this.addPerson} name={this.state.newName} updateName={this.updateNewName} number={this.state.newNumber} updateNumber={this.updateNewNumber} />

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
