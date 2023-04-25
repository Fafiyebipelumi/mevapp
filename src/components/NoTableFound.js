import React from 'react';
import '../styles/NoTableFound.css';
import CreateCampaign from './CreateCampaign';

const NoTableFound = () => {
    return (
        <div className='no-table'>
            <div className='no-table-container'>
                <CreateCampaign />
            </div>
            <h2>No Campaign Table Found</h2>
            <p>Click on New Campaign to create a Campaign.</p>
        </div>
    )
}

export default NoTableFound;