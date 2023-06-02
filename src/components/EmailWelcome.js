import React, { useState } from 'react';
import '../styles/EmailWelcome.css';
import { Link } from 'react-router-dom';
import PopUp from './PopUp';

export const EmailWelcome = () => {

    return (
        <>
            <div className='email-welcome'>
                <h1>Hi, Welcome to MEV Suite Mail</h1>
                <Link to='/campaign'><button>Continue</button></Link>
            </div>
        </>
    )
} 
