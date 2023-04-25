import React from 'react';
import '../styles/PopUp.css';
import { AiOutlineExclamationCircle } from 'react-icons/ai'

const PopUp = (props) => {
    return (props.trigger) ? (
        <div className='popup'>
            <div className='popup-container'>
                <div className='circle'><AiOutlineExclamationCircle style={{ color: '#57BF7E', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '80px' }} /></div>
                <div className='popup-heading'>
                    {/* <span>Here are the emails in the Table selected</span>
                    <h4>{props.email}</h4>
                    <span>Do you want to send campaign to the email(s) below?</span> */}
                    <div className='popup-buttons'>
                        <button onClick={() => props.setTrigger(false)}>YES</button>
                        <button onClick={() => props.setTrigger(false)}>NO</button>
                    </div>
                </div>
            </div>
            {props.children}
        </div>
    ) : ''
}

export default PopUp