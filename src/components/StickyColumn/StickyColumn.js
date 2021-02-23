import React, {useMemo} from 'react'
import {useTable, useBlockLayout} from 'react-table'
import { useSticky } from 'react-table-sticky'
import MOCK_DATA from '../data/MOCK_DATA.json'
import {HeaderColumns} from '../Table/Header'
import { Checkbox } from '../RowSelect/Checkbox'
import '../Table/tableStyles.css'

const StickyColumn = () => {
 const columns = useMemo(() => HeaderColumns, [])
 const data = useMemo(() => MOCK_DATA, [])

  const table = useTable({
  columns,
  data,
  }, useBlockLayout, useSticky)

  const {rows, prepareRow, getToggleHideAllColumnsProps,
    getTableProps, footerGroups, allColumns,
    getTableBodyProps, 
    headerGroups} = table




  return (

    <>
    <div>
    <div>
   <Checkbox {...getToggleHideAllColumnsProps()}/> Toggle All
    </div>
    {
    allColumns.map(column => {
    <div key={column.id}>
    <label>
    <input type='checkbox' {...column.getToggleHiddenProps} />
    {column.Header}
    </label>
    </div>
    })
    }
    </div>
 
    <h1>React Table App Column Hiding</h1>
    <table {...getTableProps()}>
    <thead>
    {
    headerGroups.map(headerGroups => (
    <tr {...headerGroups.getFooterGroupProps()}>
    {
    headerGroups.headers.map((items) => (
   <th {...items.getHeaderProps()}>{items.render('Header')}</th>
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

export default StickyColumn