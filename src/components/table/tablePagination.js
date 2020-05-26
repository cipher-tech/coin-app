import React from 'react'
import styled from 'styled-components'
import { useTable, usePagination } from 'react-table'

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

function Table({ columns, data }) {
  // Use the state and functions returned from useTable to build your UI
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    prepareRow,
    page, // Instead of using 'rows', we'll use page,
    // which has only the rows for the active page

    // The rest of these things are super handy, too ;)
    canPreviousPage,
    canNextPage,
    pageOptions,
    pageCount,
    gotoPage,
    nextPage,
    previousPage,
    setPageSize,
    state: { pageIndex, pageSize },
  } = useTable(
    {
      columns,
      data,
      initialState: { pageIndex: 0 },
    },
    usePagination
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
              console.log(row.original)

              return (
                <tr {...row.getRowProps()}>
                  {row.cells.map(cell => {
                    return (
                      <td
                        {...cell.getCellProps({
                          className: cell.column.collapse ? 'collapse' : '',
                        })}
                      >
                        {cell.render('Cell')}
                      </td>
                    )
                  })}
                  <td>
                    <button>
                      Edit
                    </button>
                  </td>
                </tr>
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

function PaginatedTable({data, tableColumns}) {
  const columns = React.useMemo(
    () => tableColumns,
    [tableColumns]
  )

  const tableData = React.useMemo(() => data, [])

  console.log(data)
  return <Table columns={columns} data={data} />
}

export default PaginatedTable


/* 
data-driven-classes-and-styles

import React from 'react'
import styled from 'styled-components'
import { useTable } from 'react-table'

import makeData from './makeData'

const Styles = styled.div`
  padding: 1rem;

  .user {
    background-color: blue;
    color: white;
  }

  table {
    border-spacing: 0;
    border: 1px solid black;

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
      border-bottom: 1px solid black;
      border-right: 1px solid black;

      :last-child {
        border-right: 0;
      }
    }
  }
`

// Create a default prop getter
const defaultPropGetter = () => ({})

// Expose some prop getters for headers, rows and cells, or more if you want!
function Table({
  columns,
  data,
  getHeaderProps = defaultPropGetter,
  getColumnProps = defaultPropGetter,
  getRowProps = defaultPropGetter,
  getCellProps = defaultPropGetter,
}) {
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
  } = useTable({
    columns,
    data,
  })

  return (
    <table {...getTableProps()}>
      <thead>
        {headerGroups.map(headerGroup => (
          <tr {...headerGroup.getHeaderGroupProps()}>
            {headerGroup.headers.map(column => (
              <th
                // Return an array of prop objects and react-table will merge them appropriately
                {...column.getHeaderProps([
                  {
                    className: column.className,
                    style: column.style,
                  },
                  getColumnProps(column),
                  getHeaderProps(column),
                ])}
              >
                {column.render('Header')}
              </th>
            ))}
          </tr>
        ))}
      </thead>
      <tbody {...getTableBodyProps()}>
        {rows.map((row, i) => {
          prepareRow(row)
          return (
            // Merge user row props in
            <tr {...row.getRowProps(getRowProps(row))}>
              {row.cells.map(cell => {
                return (
                  <td
                    // Return an array of prop objects and react-table will merge them appropriately
                    {...cell.getCellProps([
                      {
                        className: cell.column.className,
                        style: cell.column.style,
                      },
                      getColumnProps(cell.column),
                      getCellProps(cell),
                    ])}
                  >
                    {cell.render('Cell')}
                  </td>
                )
              })}
            </tr>
          )
        })}
      </tbody>
    </table>
  )
}

function App() {
  const columns = React.useMemo(
    () => [
      {
        Header: 'Name',
        columns: [
          {
            Header: 'First Name',
            accessor: 'firstName',
            className: 'user',
            style: {
              fontWeight: 'bolder',
            },
          },
        ],
      },
      {
        Header: 'Scores',
        columns: [
          {
            Header: 'Day 1',
            accessor: 'score0',
          },
          {
            Header: 'Day 2',
            accessor: 'score1',
          },
          {
            Header: 'Day 3',
            accessor: 'score2',
          },
          {
            Header: 'Day 4',
            accessor: 'score3',
          },
          {
            Header: 'Day 5',
            accessor: 'score4',
          },
          {
            Header: 'Day 6',
            accessor: 'score5',
          },
          {
            Header: 'Day 7',
            accessor: 'score6',
          },
        ],
      },
    ],
    []
  )

  const data = React.useMemo(() => makeData(20), [])

  return (
    <Styles>
      <Table
        columns={columns}
        data={data}
        getHeaderProps={column => ({
          onClick: () => alert('Header!'),
        })}
        getColumnProps={column => ({
          onClick: () => alert('Column!'),
        })}
        getRowProps={row => ({
          style: {
            background: row.index % 2 === 0 ? 'rgba(0,0,0,.1)' : 'white',
          },
        })}
        getCellProps={cellInfo => ({
          style: {
            backgroundColor: `hsl(${120 * ((120 - cellInfo.value) / 120) * -1 +
              120}, 100%, 67%)`,
          },
        })}
      />
    </Styles>
  )
}

export default App


*/