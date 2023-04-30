import React from 'react';
import '../styles/DetailMessage.css';
import parse from 'html-react-parser';
import { Scrollbars } from 'react-custom-scrollbars';

const DetailMessage = ({ detail }) => {
    return (
        <div className='detail-message'>
            <Scrollbars>
                <div className='detail-message-container'>
                    <p>{parse(detail.message)}</p>
                </div> 
            </Scrollbars>
        </div> 
    )
}

export default DetailMessage;