import React, {useMemo} from 'react'
import {useTable, usePagination} from 'react-table'
import MOCK_DATA from '../data/MOCK_DATA.json'
import {HeaderColumns} from '../Table/Header'
import '../Table/tableStyles.css'

const Pagination = () => {
 const columns = useMemo(() => HeaderColumns, [])
 const data = useMemo(() => MOCK_DATA, [])

  const {page, prepareRow, getTableProps, gotoPage, pageCount,
    getTableBodyProps, nextPage, previousPage,
    canNextPage, canPreviousPage, state, pageOptions,
    headerGroups} = useTable({
  columns,
  data,
  initialState: { pageIndex: 1}
  }, 
  usePagination)

  const { pageIndex } = state

  return (
    <>
    <h1>React Table App With Pagination</h1>
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
      page.map((row) => {
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
    </table>
    <span>
    Page {''}
    <strong> {pageIndex + 1 } of {pageOptions.length}</strong>
    {''}
    </span>
    <span> Go to page: {''} </span>
    <input type='number' defaultValue={pageIndex + 1} onChange={e => {const pageNumber = e.target.value ? Number(e.target.value) - 1 : 0 
    gotoPage(pageNumber)
    }} style={{width: '50'}}/>
    <br />
    <button onClick={() => gotoPage(0)} disabled={!canPreviousPage}>{'<<'}</button>
    <div>
    <button onClick={() => previousPage()} disabled={!canPreviousPage}>Previous</button>
    {''}
    <button onClick={() => nextPage()} disabled={!canNextPage}>Next</button>
    </div>
     <button onClick={() => gotoPage(pageCount - 1)} disabled={!canNextPage}>{'>>'}</button>
    </>
  )
}

export default Pagination