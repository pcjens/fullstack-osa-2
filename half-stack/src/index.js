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
  const osat = props.osat.map(osa => <Osa key={osa.id} osa={osa}/>)

  return (
    <div>
      {osat}
    </div>
  )
}

const Yhteensa = (props) => {
  const lkm = props.osat.map(osa => osa.tehtavia).reduce((acc, x) => acc + x)

  return (
    <p>yhteensa {lkm} tehtävää</p>
  )
}

const Kurssi = (props) => {
  const kurssi = props.kurssi

  return (
    <div>
      <Otsikko name={kurssi.nimi} />
      <Sisalto osat={kurssi.osat} />
      <Yhteensa osat={kurssi.osat}/>
    </div>
  )
}

const Kurssit = (props) => {
  const kurssit = props.kurssit.map(kurssi => <Kurssi key={kurssi.id} kurssi={kurssi} />)

  return (
    <div>
      {kurssit}
    </div>
  )
}

const App = () => {
  const kurssit = [
    {
      nimi: 'Half Stack -sovelluskehitys',
      id: 1,
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
    },
    {
      nimi: 'Node.js',
      id: 2,
      osat: [
        {
          nimi: 'Routing',
          tehtavia: 3,
          id: 1
        },
        {
          nimi: 'Middlewaret',
          tehtavia: 7,
          id: 2
        }
      ]
    }
  ]

  return (
    <div>
      <Otsikko name="Opetusohjelma" />
      <Kurssit kurssit={kurssit} />
    </div>
  )
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
)
