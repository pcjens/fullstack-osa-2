import React from 'react'

import AddPersonForm from './components/AddPersonForm'
import Filter from './components/Filter'
import Person from './components/Person'

import personService from './services/persons'

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      persons: [],
      newName: '',
      newNumber: '',
      filter: ''
    }
  }

  addPersonFormHandler = (event) => {
    event.preventDefault()
    const name = this.state.newName
    const number = this.state.newNumber
    const newPerson = { name, number }
    const addNewPerson = (update, id) => (person) => this.setState((prevState) => {
      const persons = prevState.persons
            .filter(person => !update || person.id !== id)
            .concat(person)
      return {
        persons,
        newName: '',
        newNumber: ''
      }
    })

    const index = this.state.persons.map(person => person.name).indexOf(name)
    if (index !== -1 && window.confirm(`${name} on jo luettelossa, korvataanko vanha numero uudella?`)) {
      const id = this.state.persons[index].id
      personService
        .update(id, newPerson)
        .then(addNewPerson(true, id))
    } else if (index === -1) {
      personService
        .create(newPerson)
        .then(addNewPerson(false))
    }
  }

  removePersonFormHandler = (id, name) => (event) => {
    event.preventDefault()
    if (window.confirm(`Poistetaanko ${name} varmasti?`)) {
      personService
        .remove(id)
        .then(data => {
          this.setState(prevState => {
            return {
              persons: prevState.persons.filter(person => person.id !== id)
            }
          })
        })
    }
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

  componentWillMount() {
    personService
      .getAll()
      .then(persons => {
        this.setState({
          persons
        })
      })
  }

  render() {
    const persons = this.state.persons
          .filter(person =>
                  this.state.filter === '' ||
                  person.name.toLowerCase().includes(this.state.filter.toLowerCase()))
          .map(person => <Person key={person.id} name={person.name} number={person.number} removePerson={this.removePersonFormHandler(person.id, person.name)} />)

    return (
      <div>
        <h2>Puhelinluettelo</h2>
        <Filter filter={this.state.filter} updateFilter={this.updateFilter} />
        <AddPersonForm addPerson={this.addPersonFormHandler} name={this.state.newName} updateName={this.updateNewName} number={this.state.newNumber} updateNumber={this.updateNewNumber} />

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
