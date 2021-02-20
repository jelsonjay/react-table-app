import React, {useMemo} from 'react'
import {useTable, useGlobalFilter} from 'react-table'
import MOCK_DATA from '../data/MOCK_DATA.json'
import { GlobalFilter } from './GlobalFilter'
import {HeaderColumns} from '../Table/Header'
import './tableStyles.css'

const Sorting = () => {
 const columns = useMemo(() => HeaderColumns, [])
 const data = useMemo(() => MOCK_DATA, [])

  const {rows, prepareRow, getTableProps, 
    footerGroups, getTableBodyProps, state, setGlobalFilter, 
    headerGroups} = useTable({
  columns,
  data,
  }, useGlobalFilter)

  const {globalFilter} = state


  return (
    <>
    <GlobalFilter filter={globalFilter} setFilter={setGlobalFilter} />
    
    <h1>React Table App With Filter</h1>
    <table {...getTableProps()}>
    <thead>
    {
    headerGroups.map(headerGroups => (
    <tr {...headerGroups.getFooterGroupProps()}>
    {
    headerGroups.headers.map((items) => (
   <th {...items.getHeaderProps()}>{items.render('Header')}
     </th>
    ))}
    </tr>
    ))}
    </thead>

    <tbody {...getTableBodyProps()}>
      {
      rows.map((row) => {
      prepareRow(row)
      return(
    <tr {...row.getRowProps()}>
    {
    row.cells.map(cell => {
    return (
 <td {...cell.getCellProps()}>{cell.render('Cell')}</td>
    )
    })}
    </tr>
    )})}

    </tbody>
    <tfoot>
    {
    footerGroups.map(footer => (
    <tr {...footer.getFooterGroupProps()}>
    {
    footer.headers.map(items => (
      <td {...items.getFooterProps}>
    {
    items.render('Footer')
    }
      </td>
    )) 
    }
    </tr>
    ))
    }
    </tfoot>
    </table>
    </>
  )
}

export default Sorting