import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/MessagingOption.css';
import MailImage from '../assets/mail.png';
import SmsImage from '../assets/sms.png';
import WhatsappImage from '../assets/whatsapp.png';

const MessagingOption = () => {
    return (
        <div className='message'>
            <div className='message-heading'>
                <h1>What will you like to send?</h1>
            </div>
            <div className='message-container'>
                <Link to='/welcome'>
                    <div className='mail-option'>
                        <img src={MailImage} alt='Email icon' width='70.4px' height='51.6px' />
                        <h2>Email</h2>
                    </div>
                </Link>
                <div className='sms-option'>
                    <img src={SmsImage} alt='SMS icon' width='86px' height='86px' />
                    <h2>SMS</h2>
                </div>
                <div className='whatsapp-option'>
                    <img src={WhatsappImage} alt='Whatsapp icon' width='69px' height='69px' />
                    <h2>Whatsapp</h2>
                </div>
            </div>
        </div>
    )
}

export default MessagingOption;