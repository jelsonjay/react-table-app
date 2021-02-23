import React, {useMemo} from 'react'
import {useTable, useRowSelect } from 'react-table'
import MOCK_DATA from '../data/MOCK_DATA.json'
import {HeaderColumns} from '../Table/Header'
import '../Table/tableStyles.css'

const RowSelection = () => {
 const columns = useMemo(() => HeaderColumns, [])
 const data = useMemo(() => MOCK_DATA, [])

  const {rows, prepareRow, getTableProps, 
    getTableBodyProps, footerGroups,
    headerGroups} = useTable({
  columns,
  data,
  }, 
  useRowSelect)

  const  firstPageRows  = rows.slice(0, 10)

  return (
    <>
    <h1>React Table App With Row Selection</h1>
    <table {...getTableProps()}>
    <thead>
    {
    headerGroups.map(headerGroups => (
    <tr {...headerGroups.getFooterGroupProps()}>
    {
    headerGroups.headers.map((items) => (
   <th {...items.getHeaderProps()}>{items.render('Header')}
   <div>{items.canFilter ? items.render('Filter') : null}</div>
    </th>
    ))}
    </tr>
    ))}
    </thead>

    <tbody {...getTableBodyProps()}>
      {
      firstPageRows.map((row) => {
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

export default RowSelection