import React from 'react'
import axios from 'axios'

const CountryDisplay = (props) => {
  const countries = props.countries

  if (countries.length > 10) {
    return (<p>too many matches, specify another filter</p>)
  } else if (countries.length > 1) {
    const countryList = countries
          .map(country =>
               <li key={country.name} onClick={props.selectCountry(country.name)}>
               {country.name}
               </li>
              )
    return (
      <ul>
        {countryList}
      </ul>
    )
  } else if (countries.length === 0) {
    return (
      <p>no countries found</p>
    )
  } else if (countries.length === 1) {
    const country = countries[0]
    const name = country.name
    const nativeName = country.nativeName
    const capital = country.capital
    const population = country.population
    const flagURL = country.flag

    return (
      <div>
        <h1>{name} {nativeName}</h1>
        <p>capital: {capital}</p>
        <p>population: {population}</p>
        <img src={flagURL} alt={ "Flag of " + name } width="400px" />
      </div>
    )
  }
}

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      countryName: '',
      countries: []
    }
  }

  updateCountryName = (event) => {
    this.setState({
      countryName: event.target.value
    })
  }

  selectCountry = (countryName) => () => {
    this.setState({
      countryName
    })
  }

  componentWillMount() {
    axios
      .get("https://restcountries.eu/rest/v2/all")
      .then(response => {
        this.setState({
          countries: response.data
        })
      })
  }

  render() {
    const countries = this.state.countries
          .filter(country =>
                  this.state.countryName === '' ||
                  country.name.toLowerCase().includes(this.state.countryName.toLowerCase()))

    return (
      <div>
        find countries: <input
                          value={this.state.countryName}
                          onChange={this.updateCountryName}
                          />
        <CountryDisplay countries={countries} selectCountry={this.selectCountry} />
      </div>
    );
  }
}

export default App
