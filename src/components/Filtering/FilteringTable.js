import React, {useMemo} from 'react'
import {useTable, useGlobalFilter, useFilters} from 'react-table'
import MOCK_DATA from '../data/MOCK_DATA.json'
import { Filterings } from './FilteringsTables'
import {HeaderColumns} from '../Table/Header'
import '../Table/tableStyles.css'
import { ColumnFilter } from '../Column/ColumnFilter'

const Filtering = () => {
 const columns = useMemo(() => HeaderColumns, [])
 const data = useMemo(() => MOCK_DATA, [])
 
 const defaultColumn = useMemo(() => {
  return {
  Filter: ColumnFilter
  }
 }, [])

  const {rows, prepareRow, getTableProps, 
    footerGroups, getTableBodyProps, state, setGlobalFilter, 
    headerGroups} = useTable({
  columns,
  data,
  defaultColumn
  }, 
  useFilters,
  useGlobalFilter)

  const {globalFilter} = state


  return (
    <>
    <Filterings filter={globalFilter} setFilter={setGlobalFilter} />
    
    <h1>React Table App With Filtering</h1>
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

export default Filtering