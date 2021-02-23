import React from 'react'

export const ColunnHidings = ({filter, setFilter}) => {
  return (
    <div>
    Search:
    <input name='name' value={filter || ''} onChange={(e) => setFilter(e.target.value)} />
    </div>
  )
}