import React from 'react';
import '../styles/NoTableFound.css';
import CreateCampaign from './CreateCampaign';
import NoCampaign from '../assets/illustration-hit-send.svg';

const NoTableFound = () => {
    return (
        <div className='no-table'>
            <div className='no-table-container'>
                <CreateCampaign />
            </div>
            {/* <img src={NoCampaign} alt='No Campaign' /> */}
            <h2>No Campaign Table Found</h2>
            <p>Click on New Campaign to create a Campaign.</p>
        </div>
    )
}

export default NoTableFound;