import React from 'react'
import styled from 'styled-components'
import { useTable } from 'react-table'

import makeData from './makeData'

const Styles = styled.div`
  padding: 1rem;
  width: 100%;
  display: grid;
  justify-items: center;
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
    rows,
    prepareRow,
  } = useTable({
    columns,
    data,
  })

  // Render the UI for your table
  return (
    <table {...getTableProps()}>
      <thead>
        {headerGroups.map(headerGroup => (
          <tr {...headerGroup.getHeaderGroupProps()}>
            {headerGroup.headers.map(column => (
              <th {...column.getHeaderProps()}>{column.render('Header')}</th>
            ))}
          </tr>
        ))}
      </thead>
      <tbody {...getTableBodyProps()}>
        {rows.map((row, i) => {
          prepareRow(row)
          return (
            <tr {...row.getRowProps()}>
              {row.cells.map(cell => {
                return <td {...cell.getCellProps()}>{cell.render('Cell')}</td>
              })}
            </tr>
          )
        })}
      </tbody>
    </table>
  )
}

function App({tableColumns}) {
  const columns = React.useMemo(
    () => [
      tableColumns
      // {
      //   Header: 'Name',
      //   columns: [
      //     {
      //       Header: 'First Name',
      //       accessor: 'firstName',
      //     },
      //     {
      //       Header: 'Last Name',
      //       accessor: 'lastName',
      //     },
      //   ],
      // },
      // {
      //   Header: 'Info',
      //   columns: [
      //     {
      //       Header: 'Age',
      //       accessor: 'age',
      //     },
      //     {
      //       Header: 'Visits',
      //       accessor: 'visits',
      //     },
      //     {
      //       Header: 'Status',
      //       accessor: 'status',
      //     },
      //     {
      //       Header: 'Profile Progress',
      //       accessor: 'progress',
      //     },
      //   ],
      // },
    ],
    []
  )

  const data = React.useMemo(() => makeData(12), [])

  return (
    <Styles>
      <Table columns={columns} data={data} />
    </Styles>
  )
}

export default App
