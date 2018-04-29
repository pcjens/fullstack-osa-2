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
  const osa1 = props.osat[0]
  const osa2 = props.osat[1]
  const osa3 = props.osat[2]

  return (
    <div>
      <Osa osa={osa1} />
      <Osa osa={osa2} />
      <Osa osa={osa3} />
    </div>
  )
}

const Yhteensa = (props) => {
  const lkm = props.osat.reduce((acc, osa) => acc + osa.tehtavia, 0)

  return (
    <p>yhteensä {lkm} tehtävää</p>
  )
}

const App = () => {
  const kurssi = {
    nimi: 'Half Stack -sovelluskehitys',
    osat: [
      {
        nimi: 'Reactin perusteet',
        tehtavia: 10
      },
      {
        nimi: 'Tiedonvälitys propseilla',
        tehtavia: 7
      },
      {
        nimi: 'Komponenttien tila',
        tehtavia: 14
      }
    ]
  }

  return (
    <div>
      <Otsikko name={kurssi.nimi} />
      <Sisalto osat={kurssi.osat} />
      <Yhteensa osat={kurssi.osat} />
    </div>
  )
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
)
