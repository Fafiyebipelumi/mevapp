import React from 'react'

const TableEmails = ({ tableEmail }) => {
    return (
        <div>
            <h4>{tableEmail.name}</h4>
            <span>{tableEmail.records} records</span>
        </div>
    )
}

export default TableEmails;  