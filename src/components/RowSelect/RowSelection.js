import React, {useMemo} from 'react'
import {useTable, useRowSelect } from 'react-table'
import MOCK_DATA from '../data/MOCK_DATA.json'
import {HeaderColumns} from '../Table/Header'
import '../Table/tableStyles.css'
import { Checkbox } from './Checkbox'

const RowSelection = () => {
 const columns = useMemo(() => HeaderColumns, [])
 const data = useMemo(() => MOCK_DATA, [])

  const {rows, prepareRow, getTableProps, 
    getTableBodyProps, footerGroups, selectedFlatRows,
    headerGroups} = useTable({
  columns,
  data,
  }, 
  useRowSelect,
  (hooks) => {
  hooks.visibleColumns.push((columns) => {
   return [
     {
       id: 'selection',
       Header: ({getToggleAllRowsSelectedProps}) => (
        <Checkbox {...getToggleAllRowsSelectedProps()} />
       ),
       cell: ({ row }) => (
       <Checkbox {...row.getToggleAllRowsSelectedProps()} />
       )
     },
     ...columns
   ]
  })
  }
  )

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
   <pre>
    <code>
   {JSON.stringify(
   {
   selectedFlatRows: selectedFlatRows.map((row) => row.original),
   },
   null,
   2
   )}
</code>
   </pre>

    

    </>
  )
}

export default RowSelection