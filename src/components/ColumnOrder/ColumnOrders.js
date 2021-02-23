import React from 'react'

export const ColunnOrders = ({filter, setFilter}) => {
  return (
    <div>
    Search:
    <input name='name' value={filter || ''} onChange={(e) => setFilter(e.target.value)} />
    </div>
  )
}