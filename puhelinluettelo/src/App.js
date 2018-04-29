import React from 'react'
import axios from 'axios'

import AddPersonForm from './components/AddPersonForm'
import Filter from './components/Filter'
import Person from './components/Person'

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

  addPerson = (name, number) => {
    if (this.state.persons.map(person => person.name).includes(name)) {
      return false
    }

    const newPerson = { name, number }
    axios
      .post('http://localhost:3001/persons', newPerson)
      .then(response => this.setState((prevState) => {
        const persons = prevState.persons.concat(response.data)
        return {
          persons,
          newName: '',
          newNumber: ''
        }
      }))


    return true
  }

  addPersonFormHandler = (event) => {
    event.preventDefault()
    const name = this.state.newName
    if (!this.addPerson(name, this.state.newNumber)) {
      alert('Nimi "' + name + '" löytyy jo puhelinluettelosta!')
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
    axios
      .get('http://localhost:3001/persons')
      .then(response => {
        this.setState({
          persons: response.data
        })
      })
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
