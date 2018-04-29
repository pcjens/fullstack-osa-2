import React from 'react'

const Filter = (props) => {
  const filter = props.filter
  const updateFilter = props.updateFilter

  return(
    <div>
      rajaa näytettäviä: <input
                           value={filter}
                           onChange={updateFilter}
                           />
    </div>
  )
}

export default Filter
