import React from 'react'

const Filter = ({ filter, updateFilter }) => {
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
