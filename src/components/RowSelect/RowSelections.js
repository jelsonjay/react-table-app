import React from 'react'

export const RowSelections = ({filter, setFilter}) => {
  return (
    <div className='search'>
    Search:
    <input name='name' value={filter || ''} onChange={(e) => setFilter(e.target.value)} />
    </div>
  )
}