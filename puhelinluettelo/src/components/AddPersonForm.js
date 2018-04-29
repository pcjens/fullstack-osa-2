import React from 'react'

const AddPersonForm = (props) => {
  const addPerson = props.addPerson
  const name = props.name
  const updateName = props.updateName
  const number = props.number
  const updateNumber = props.updateNumber

  return (
    <div>
      <h2>Lisää uusi</h2>
      <form onSubmit={addPerson}>
        <div>
          nimi: <input
                  value={name}
                  onChange={updateName}
                  />
        </div>
        <div>
          numero: <input
                    value={number}
                    onChange={updateNumber}
                    />
        </div>
        <div>
          <button type="submit">lisää</button>
        </div>
      </form>
    </div>
  )
}

export default AddPersonForm
