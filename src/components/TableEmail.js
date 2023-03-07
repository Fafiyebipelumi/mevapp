import React from 'react'

const TableEmail = ({ email, tableId, tableKey }) => {
    return (
        <div>
            {tableId === tableKey ?
                <ul>
                    <li style={{ listStyle: 'none' }} className='table-email'>{email.Email}</li>
                </ul>
                : ''
            }
        </div>
    )
}

export default TableEmail;

