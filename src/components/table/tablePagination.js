import React from 'react'
import styled from 'styled-components'
import { useTable, usePagination, useExpanded } from 'react-table'

// import makeData from './makedata2'

const Styles = styled.div`
 	padding: 1rem;

  width: 100%;
  display: grid;
  justify-items: center;
  @media only screen and (max-width: ${props => props.theme.breakPoints.bpSmall2}) {
    overflow: scroll;
  }
  table {
    width: 100%;
    grid-column: 1/-1;
    border-spacing: 0;
    padding: 1rem 3rem;
    /* border: 1px solid black; */
    box-shadow: .2rem .4rem 30px rgba(0,0,0, .3),
      -0.2rem -0.4rem 30px rgba(255,255,255, .3);
    color: ${props => props.theme.colorDark};

    tr {
      :last-child {
        td {
          border-bottom: 0;
        }
      }
    }

    th,
    td {
      margin: 0;
      padding: 0.5rem;
      border-bottom: 1px solid #00000033;
      text-align: center;
      padding: 2rem 2rem;
      /* border-right: 1px solid black; */

      :last-child {
        border-right: 0;
      }
    }
  }
`

function Table({ columns, data, renderRowSubComponent, handleVerifyClick }) {
  // Use the state and functions returned from useTable to build your UI
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    prepareRow,
    page, // Instead of using 'rows', we'll use page,
    // which has only the rows for the active page
    // rows,
    visibleColumns,
    // The rest of these things are super handy, too ;)
    canPreviousPage,
    canNextPage,
    pageOptions,
    pageCount,
    gotoPage,
    nextPage,
    previousPage,
    setPageSize,
    state: { pageIndex, pageSize , /* expanded */},
  } = useTable(
    {
      columns,
      data,
      initialState: { pageIndex: 0 },
    },
    useExpanded,
    usePagination,
  )

  // Render the UI for your table
  return (
    <Styles>
      <div className="tableWrap">
        <table {...getTableProps()}>
          <thead>
            {headerGroups.map(headerGroup => (
              <tr {...headerGroup.getHeaderGroupProps()}>
                {headerGroup.headers.map(column => (
                  <th
                    {...column.getHeaderProps({
                      className: column.collapse ? 'collapse' : '',
                    })}
                  >
                    {column.render('Header')}
                  </th>
                ))}
                <th></th>
              </tr>
            ))}
          </thead>
          <tbody {...getTableBodyProps()}>
            {page.map((row, i) => {
              prepareRow(row)

              return (
                <React.Fragment key={i}>
                <tr key={i} {...row.getRowProps()}>
                  {row.cells.map((cell, index) => {
                    return (
                      <td
                      key={index}
                        {...cell.getCellProps({
                          className: cell.column.collapse ? 'collapse' : '',
                        })}
                      >
                        {cell.render('Cell')}
                        {/* {console.log(cell.row.original.id)} */}
                      </td>
                    )
                  })}
                </tr>
                
                {row.isExpanded ? (
                  <tr>
                    <td colSpan={visibleColumns.length}>
                      {/*
                          Inside it, call our renderRowSubComponent function. In reality,
                          you could pass whatever you want as props to
                          a component like this, including the entire
                          table instance. But for this example, we'll just
                          pass the row
                        */}
                      {renderRowSubComponent({ row })}
                    </td>
                  </tr>
                ) : null}

                </React.Fragment>
              )
            })}
          </tbody>
        </table>
        {/* 
        Pagination can be built however you'd like. 
        This is just a very basic UI implementation:
      */}
      </div>
      <div className="pagination">
        <button className="pagination-first--page" onClick={() => gotoPage(0)} disabled={!canPreviousPage}>
          {'<<'}
        </button>{' '}
        <button onClick={() => previousPage()} disabled={!canPreviousPage}>
          {'<'}
        </button>{' '}
        <button onClick={() => nextPage()} disabled={!canNextPage}>
          {'>'}
        </button>{' '}
        <button onClick={() => gotoPage(pageCount - 1)} disabled={!canNextPage}>
          {'>>'}
        </button>{' '}
        <span>
          Page{' '}
          <strong>
            {pageIndex + 1} of {pageOptions.length}
          </strong>{' '}
        </span>
        <span>
          | Go to page:{' '}
          <input
            type="number"
            defaultValue="1"
            onChange={e => {
              const page = e.target.value ? Number(e.target.value) - 1 : 0
              gotoPage(page)
            }}
            style={{ width: '100px' }}
          />
        </span>{' '}
        <select
          value={pageSize}
          onChange={e => {
            setPageSize(Number(e.target.value))
          }}
        >
          {[10, 20, 30, 40, 50].map(pageSize => (
            <option key={pageSize} value={pageSize}>
              Show {pageSize}
            </option>
          ))}
        </select>
      </div>
    </Styles>
  )
}

function PaginatedTable({data, tableColumns,handleVerifyClick, expandedComponent}) {
  const columns = React.useMemo(
    () => tableColumns,
    [tableColumns]
  )

  // const tableData = React.useMemo(() => data, [])

  // Create a function that will render our row sub components
  const renderRowSubComponent = React.useCallback(
    ({ row }) => (
      <>
        { expandedComponent?  expandedComponent(row) : null}
      </>
    ),
    [expandedComponent]
  )
  // console.log(data)
  return <Table columns={columns} data={data}
    // We added this as a prop for our table component
    // Remember, this is not part of the React Table API,
    // it's merely a rendering option we created for
    // ourselves
    renderRowSubComponent={renderRowSubComponent}
    handleVerifyClick={handleVerifyClick}
      />
}

export default PaginatedTable