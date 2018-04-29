import React from 'react'

const AddPersonForm = ({ addPerson, name, updateName, number, updateNumber }) => {
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
