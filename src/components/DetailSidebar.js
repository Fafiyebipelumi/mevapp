import React from 'react';
import '../styles/DetailSidebar.css';

const DetailSidebar = ({ detail }) => {
    return (
        <div className='detail-sidebar'>
            <div className='detail-sidebar-container'>
                <div className='detail-sidebar-report'>
                    <h3>Report</h3>
                </div>
                <div className='detail-sidebar-wrapper'> 
                    <div className='detail-sidebar-options'>
                        <h3>Status</h3>
                        <p className='detail-status'>{detail.status}</p>
                    </div>
                    <div className='detail-sidebar-options'>
                        <h3>Audience</h3>
                        <p className='detail-audience'>{detail.recipient === null || '' ? 'No recipient' : `Sent to ${detail.recipient.split(',').length} lists`}</p>
                    </div>
                    <div className='detail-sidebar-options'>
                        <h3>Launch Date</h3>
                        <p className='detail-launch'>{detail.createdAt}</p>
                    </div>
                    <div className='detail-sidebar-options'>
                        <h3>Last Modified</h3>
                        <p className='detail-modified'>{detail.updatedAt}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default DetailSidebar;