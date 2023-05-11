import React, { useState } from 'react';
import '../styles/DisplayTableEmail.css';
import TableEmails from './TableEmails';
import TableEmail from './TableEmail';
import { baseURL } from '../interceptor/axios';
import Loading from '../assets/Loaders/loading_big.gif';
import axios from 'axios';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Link } from 'react-router-dom';

const DisplayTableEmail = ({email}) => { 
    const [dropdownEmails, setDropdownEmails] = useState(false);
    const [emails, setEmails] = useState([]);
    const [tableKey, setTableKey] = useState('');
    const [isLoading, setIsLoading] = useState(true)
    const [error, setError] = useState(null)


// https://it-911.net/mev/v2/test/filter.php


    return (
        <div className='display-emails'>
            <div className='display-emails-container'>
                {/* <p>{email.filter_name}</p> */}
                <div className='display'>
                    {email.filter_name}
                </div>
            </div>
        </div>
    );
}

export default DisplayTableEmail;