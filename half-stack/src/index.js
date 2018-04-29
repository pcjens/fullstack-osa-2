import React from 'react'
import ReactDOM from 'react-dom'

const Otsikko = (props) => {
    const otsikko = props.name

    return (
      <h1>{otsikko}</h1>
    )
}

const Osa = (props) => {
  const nimi = props.osa.nimi
  const tehtavia = props.osa.tehtavia

  return (
      <p>{nimi} {tehtavia}</p>
  )
}

const Sisalto = (props) => {
  const osat = props.osat.map((osa, i) => <Osa key={i} osa={osa}/>)

  return (
    <div>
      {osat}
    </div>
  )
}

const Kurssi = (props) => {
  const kurssi = props.kurssi

  return (
    <div>
      <Otsikko name={kurssi.nimi} />
      <Sisalto osat={kurssi.osat} />
    </div>
  )
}

const App = () => {
  const kurssi = {
    nimi: 'Half Stack -sovelluskehitys',
    osat: [
      {
        nimi: 'Reactin perusteet',
        tehtavia: 10,
        id: 1
      },
      {
        nimi: 'Tiedonvälitys propseilla',
        tehtavia: 7,
        id: 2
      },
      {
        nimi: 'Komponenttien tila',
        tehtavia: 14,
        id: 3
      }
    ]
  }

  return (
    <div>
      <Kurssi kurssi={kurssi} />
    </div>
  )
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
)
