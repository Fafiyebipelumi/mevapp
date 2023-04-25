import React, { useState } from 'react';
import '../styles/DisplayTableEmail.css';
import TableEmails from './TableEmails';
import TableEmail from './TableEmail';
import { baseURL } from '../interceptor/axios';
import Loading from '../assets/Loaders/loading_big.gif';
import axios from 'axios';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const DisplayTableEmail = ({ tableEmail, setRecipients }) => { 
    const [dropdownEmails, setDropdownEmails] = useState(false);
    const [emails, setEmails] = useState([]);
    const [tableKey, setTableKey] = useState('')
    const [isLoading, setIsLoading] = useState(true)
    const [error, setError] = useState(null)

    // const access_token = process.env.MEVAPP_ACCESS_TOKEN

    const access_token = '01316e7b431202266a6ffcdcbaf91231762b7bc5ec741828b0b2130b5574429e3ca4a07913ae777f237731404c0ed26f27b087bbfaa28d0273c0244923fc3617'
    const tableId = tableEmail.id
    const form = new FormData();
    form.append('access_token', access_token);
    form.append('grant_type', 'access_token');
    form.append('table_id', tableId);

    const emailLists = {
        method: 'post',
        url: `${baseURL}/database/getTableEmails?access_token=${access_token}&grant_type=access_token`,
        headers: {
            'Content-Type': 'multipart/form-data'
        },
        data: form
    }

    const getEmails = () => {
        axios(emailLists)
            .then((response) => {
                console.log(response);
                if (response.data.status === 'SUCCESSFUL') {
                    setIsLoading(false)
                    setEmails(response.data.FilesData)
                    setTableKey(response.data.TableId)
                    setError(null)
                }
            })
            .catch((error) => {
                setIsLoading(false)
                setError(error.message)
                console.log(error)
            })
    }

    const handleSelectEmails = () => {
        const tableEmail = document.getElementsByClassName('table-email')
        const emails = []
        for (let i = 0; i < tableEmail.length; i++) {
            emails.push(tableEmail[i].innerText)
        }
        console.log(JSON.stringify(emails))
        setRecipients(JSON.stringify(emails))
        toast.success('The emails in the table are selected')
        // setRecipientsEmails(emails)
    }


    return (
        <div className='display-emails'>
            <div className='display-emails-container'>
                <div className='display-emails-list'>
                    <div onClick={(e) => setDropdownEmails(!dropdownEmails)}>
                        <div className='display-emails-item' onClick={getEmails}>
                            <TableEmails tableEmail={tableEmail} />
                        </div>
                    </div>
                    {dropdownEmails && (
                        <div className='dropdown-emails'>
                            {error && <span>{error}</span>}
                            {isLoading && <img src={Loading} alt='Loading' />}
                            {!emails ? <span>No email in the Table</span> : emails.map((email, index) => (
                                <div key={index}>
                                    {tableKey === tableId ? <TableEmail email={email} /> : ''}
                                </div>
                            ))}
                            {!emails ? <button disabled style={{ visibility: 'hidden' }}>Select</button> : <button style={{ padding: '8px', backgroundColor: '#f4f4f4', color: '#000', cursor: 'pointer', marginTop: '15px' }} onClick={handleSelectEmails}>Select</button>}
                            <ToastContainer
                                position="top-right"
                                autoClose={5000}
                                hideProgressBar
                                newestOnTop={false}
                                closeOnClick
                                rtl={false}
                                pauseOnFocusLoss
                                draggable
                                pauseOnHover
                            />
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}

export default DisplayTableEmail;