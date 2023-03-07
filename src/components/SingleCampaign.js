import React from 'react';
import '../styles/SingleCampaign.css';

const SingleCampaign = ({ data }) => {
    return (
        <>
            <div className='single-campaign-container'>
                <tr>
                    <td>Campaign Name</td>
                </tr>
                <tr>
                    <td>Status</td>
                </tr>
                <tr>
                    <td>Audience</td>
                </tr>
                <tr>
                    <td>Launch Date</td>
                </tr>
                <tr>
                    <td>Modified</td>
                </tr>
            </div>
            {data.map((item, index) => (
                <div key={index} className='single-list'>
                    <tr>
                        <td>{item.first_name}</td>
                    </tr>
                    <tr>
                        <td>{item.last_name}</td>
                    </tr>
                    <tr>
                        <td>{item.last_name}</td>
                    </tr>
                    <tr>
                        <td>{item.date_and_time}</td>
                    </tr>
                    <tr>
                        <td>{item.modified}</td>
                    </tr>
                </div>
            ))}
        </>
    )
}

export default SingleCampaign;