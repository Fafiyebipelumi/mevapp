import React, { useMemo } from 'react'
import { COLUMNS } from './columns';
import JSON_DATA from './MOCK_DATA.json';
import { useTable, usePagination } from 'react-table';
import '../styles/Table.css';
import { AiOutlineArrowLeft, AiOutlineArrowRight } from 'react-icons/ai'

export const Pagination = () => {
    const columns = useMemo(() => COLUMNS, [])
    const data = useMemo(() => JSON_DATA, [])

    const {
        getTableProps,
        getTableBodyProps,
        headerGroups,
        page,
        nextPage,
        previousPage,
        canNextPage,
        canPreviousPage,
        prepareRow
    } =
        useTable(
            { columns, data }, usePagination
        )

    return (
        <div>
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
                    {page.map(row => {
                        prepareRow(row)
                        return (
                            <tr {...row.getRowProps()}>
                                {row.cells.map(cell => {
                                    return <td {...cell.getCellProps()} style={{ color: 'black', textAlign: 'center' }}>
                                        {cell.render('Cell')}
                                    </td>
                                })}
                            </tr>
                        )
                    })}
                </tbody>
            </table>
            <div>
                <AiOutlineArrowLeft style={{ alignItems: 'center', justifyContent: 'center', margin: '30px' }} onClick={() => previousPage()} disabled={!canPreviousPage} />
                <AiOutlineArrowRight style={{ alignItems: 'center', justifyContent: 'center', margin: '30px' }} onClick={() => nextPage()} disabled={!canNextPage} />
            </div>
        </div>
    )
}
