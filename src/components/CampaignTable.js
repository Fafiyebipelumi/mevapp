import React, { useMemo } from 'react'
import { COLUMNS } from './columns';
import JSON_DATA from './JSON_DATA.json'
import { useTable } from 'react-table';
import '../styles/Table.css'

export const CampaignTable = () => {
    const columns = useMemo(() => COLUMNS, [])
    const data = useMemo(() => JSON_DATA, [])

    const {
        getTableProps,
        getTableBodyProps,
        headerGroups,
        rows,
        prepareRow
    } =
        useTable(
            { columns, data }
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
                    {rows.map(row => {
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
        </div>
    )
}
