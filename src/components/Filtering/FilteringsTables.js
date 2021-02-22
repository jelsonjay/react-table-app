import React, { useState } from 'react'
import  {useAsyncDebounce} from 'react-table'

export const Filterings = ({filter, setFilter}) => {
const { value, setValue} = useState(filter)

const onChange = useAsyncDebounce((value ) => {
  setFilter(value || undefined)
}, 1000) 

  return (
    <div className='search'>
    Search:
    <input name='name' value={value || ''} 
    onChange={(e) => 
      {setValue(e.target.value) 
      onChange(e.target.value)}} />
    </div>
  )
}