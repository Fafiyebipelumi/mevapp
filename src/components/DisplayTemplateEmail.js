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

const DisplayTemplateEmail = ({ template_info, setSelectedTemplateId }) => {
    const [dropdownEmails, setDropdownEmails] = useState(false);
    const [emails, setEmails] = useState([]);
    const [tableKey, setTableKey] = useState('');
    const [isLoading, setIsLoading] = useState(true)
    const [error, setError] = useState(null)

    const handleTemplateSelection = (e) => {
        setSelectedTemplateId(template_info.id, template_info.name);
        // onSelect(email.id, email.filter_name);
    };

    return (
        <div className='display-emails'>
            <div className='display-emails-container'>
                <div className='display' onClick={handleTemplateSelection}>
                    {template_info.name}
                </div>
            </div>
        </div>
    );
}

export default DisplayTemplateEmail;