import React from 'react';
import '../styles/TableCampaign.css';
import { Link } from 'react-router-dom';

const TableCampaign = ({ campaign }) => {

    function DraftedStatus() {
        return <p style={{
            background: '#DDF2E5',
            borderRadius: 10,
            padding: 10,
            fontFamily: 'Montserrat',
            fontStyle: 'normal',
            fontWeight: 700,
            fontSize: 14,
            color: '#57BF7E',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
        }}>{campaign.status}</p>
    }

    function PendingStatus() {
        return <p style={{
            background: '#FAF0CD',
            borderRadius: 10,
            padding: 10,
            fontFamily: 'Montserrat',
            fontStyle: 'normal',
            fontWeight: 700,
            fontSize: 14,
            color: '#E5B404',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
        }}>{campaign.status}</p>
    }

    return (
        <div className='table-campaign'>
            <Link style={{ textDecoration: 'none' }} to={`/campaign/${campaign.uuid}`}>
                <div className='table-campaign-wrapper'>
                    <div className='table-campaign-container'>
                        <input type='checkbox' />
                        <div className='table-campaign-name'>
                            <p>{campaign.subject === null | '' ? 'No subject' : campaign.subject}</p>
                            <span>Email</span>
                        </div>
                    </div>
                    <div className='table-campaign-others'>
                        <p>{campaign.status === 'DRAFTED' ? <DraftedStatus /> : <PendingStatus />}</p>
                        <p>{campaign.recipient === null | '' ? 'No recipient' : `Sent to ${campaign.recipient.split(',').length} lists`}</p>
                        <p>{campaign.createdAt}</p>
                        <p>{campaign.updatedAt}</p>
                    </div>
                </div>
            </Link>
        </div>
    )
}

export default TableCampaign;