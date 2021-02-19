import React, {useMemo} from 'react'
import {useTable, useSortBy} from 'react-table'
import MOCK_DATA from '../data/MOCK_DATA.json'
import {HeaderColumns} from './Header'
import './tableStyles.css'

const Sorting = () => {
 const columns = useMemo(() => HeaderColumns, [])
 const data = useMemo(() => MOCK_DATA, [])

  const {rows, prepareRow, 
    getTableProps, footerGroups,
    getTableBodyProps, 
    headerGroups} = useTable({
  columns,
  data,
  }, useSortBy)

  


  return (
    <>
    <h1>React Table App With Sorting</h1>
    <table {...getTableProps()}>
    <thead>
    {
    headerGroups.map(headerGroups => (
    <tr {...headerGroups.getFooterGroupProps()}>
    {
    headerGroups.headers.map((items) => (
   <th {...items.getHeaderProps(items.getSortByToggleProps())}>
     {items.render('Header')}
     <span>
      {items.isSorted ? (items.isSortedDesc ? '<small>up</small>' : '<small>down</small>') : ''}
     </span>
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