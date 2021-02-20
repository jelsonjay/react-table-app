import React from 'react'

export const ColumnFilter = ({filter, setFilter}) => {
//const { filterValue, setFilter} = items
  return (
    <div className='search'>
    Search:
    <input name='name' value={filter || ''} onChange={(e) => setFilter(e.target.value)} />
    </div>
  )
}