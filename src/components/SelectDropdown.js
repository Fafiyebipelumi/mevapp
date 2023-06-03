import React, { useState } from 'react';
import { FaCaretDown } from 'react-icons/fa';
import '../styles/SelectDropdown.css';
import DisplayTableEmail from './DisplayTableEmail';
import { TailSpin } from 'react-loader-spinner';
import axios from 'axios';
import 'react-toastify/dist/ReactToastify.css';
import InputCSV from './InputCSV'
import { baseURL } from '../interceptor/axios';
import Loading from '../assets/Loaders/loading_big.gif';
import { Link } from 'react-router-dom';

const SelectDropdown = ({ showDropdown, setRecipients, handleSubmit, setCsv, loading }) => {

    const [isActive, setIsActive] = useState(false);
    const [useTables, setUseTables] = useState(false);
    const [useCSV, setUseCSV] = useState(false);
    const [emails, setEmails] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);
    const [selectedEmailId, setSelectedEmailId] = useState(null);
    const [selectedEmailFilterName, setSelectedFilterName] = useState(null);

    const handleSelectedEmail = (emailId, filter_name) => {
        setSelectedEmailId(emailId);
        setSelectedFilterName(filter_name);
        setIsActive(!isActive);
    };
    // 710a7b52d84e3dda0be93bfe557d21599768be49b297fd918ea0fd5e6b30a29d66ad288444816c259760628d26f1d4f58a48ddba0be72b7ecc65f4c3b0077666
    // ebf4c5c7897c61f6ebe6e9bafa108bea3663f1b6ad42c669753505e19769961ecce02acd625b0a5701d527c5f952f033ca8cb0bd97a22e1bedaf7bdf0a4cdb2c
    // bfcbe6c811fea0f7ecb7768779c4a607e80c4bbb1e5b82317d8d2d6c5936a3fa48bfd64895734763f1442b0f44e64baa0e8d238416eb4c498c2ae6d748c91340
    // const access_token = '01316e7b431202266a6ffcdcbaf91231762b7bc5ec741828b0b2130b5574429e3ca4a07913ae777f237731404c0ed26f27b087bbfaa28d0273c0244923fc3617';
    const access_token = localStorage.getItem('token')

    // const access_token = process.env.MEVAPP_ACCESS_TOKEN

    const form = new FormData()
    form.append('access_token', access_token);
    form.append('grant_type', 'access_token');
    form.append('fetch', 'true')

    const connectToZoho = {
        method: 'post',
        url: `${baseURL}/messaging/zohoRecruitAudience.php?access_token=${access_token}&grant_type=access_token&fetch=true`,
        headers: {
            'Content-Type': 'multipart/form-data'
        },
        data: form
    }
    const handleUseTableEmails = async () => {
        setUseTables(!useTables);
        try {
            setIsLoading(true)
            const response = await axios(connectToZoho)
            setEmails(response.data.data)
            setIsLoading(false)
        } catch (error) {
            console.error(error);
            setIsLoading(false)
        }

        // 
        // axios(connectToMevDB)
        //     .then((response) => {
        //         if (response.data.status === 'SUCCESSFUL') {
        //             setTableEmails(response.data.data);
        //             setIsLoading(false);
        //             setError(null);
        //         }
        //     })
        //     .catch((err) => {
        //         console.log(err); 
        //         setIsLoading(false)
        //         setError(err.message)
        //     })
    }

    return (
        <div>
            <div className='dropdown-wrapper'>
                <div className='dropdown'>
                    <div className='dropdown-btn' onClick={(e) => setIsActive(!isActive)}>
                        Choose an option
                        <FaCaretDown />
                    </div>
                    {isActive && (
                        <div className='dropdown-content'>
                            <div className='dropdown-item' onClick={handleUseTableEmails}>
                                Use contact in Zoho Recruit
                            </div>
                            {useTables && (
                                <>
                                    <div className='dropdown-table-emails custom-scroll'>
                                        {isLoading && <img src={Loading} alt='Loading' />}
                                        {error && <span>{error}</span>}
                                        {!emails ? 'No Records Found ' : emails.map((email) => (
                                            <DisplayTableEmail email={email} key={email.id} setRecipients={setRecipients} setSelectedEmailId={handleSelectedEmail} />
                                        ))}
                                    </div>
                                    {/* <a className='anchor' href='https://it-911.net/mev/v2/test/filter.php' target='_blank'>New Filter</a> */}
                                    <div className='mt-30'>
                                        <a className='anchor' href='https://it-911.net/mev/v2/test/filter.php' target='_blank' rel="noreferrer">New Filter</a>
                                    </div>
                                </>

                            )}
                            {/* <div className={!useTables ? 'dropdown-item' : 'dropdown-none'} onClick={(e) => setUseCSV(!useCSV)}>
                            Upload email in CSV files
                        </div>
                        {useCSV && (
                            <InputCSV setRecipients={setRecipients} setCsv={setCsv} />
                        )} */}
                        </div>
                    )}
                </div>
                <div className='drop-down-button'>
                    <div className='dropdown-button'>
                        <p>Filter ID : <b>{selectedEmailId}</b></p>
                        <button onClick={handleSubmit}>{!loading ? 'Save' : <TailSpin height='25' width='25' color='#3A915B' radius='3' visible={true} />}</button>
                        <button onClick={showDropdown}>Cancel</button>
                    </div>
                    {/* <ToastContainer
                    position="top-right"
                    autoClose={3000}
                    hideProgressBar
                    newestOnTop={false}
                    closeOnClick
                    rtl={false}
                    pauseOnFocusLoss
                    draggable
                    pauseOnHover
                /> */}
                </div>
            </div>
            <p>This email campaign will be sent to : <b>{selectedEmailFilterName}</b></p>
        </div>
    )
}

export default SelectDropdown;
