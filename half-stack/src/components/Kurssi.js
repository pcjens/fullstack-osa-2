import React from 'react'
import Otsikko from './Otsikko'

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

export default Kurssi
