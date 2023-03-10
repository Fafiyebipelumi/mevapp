import React, { useState } from 'react';
import { FaCaretDown } from 'react-icons/fa';
import '../styles/SelectDropdown.css';
import DisplayTableEmail from './DisplayTableEmail';
import axios from 'axios';
import 'react-toastify/dist/ReactToastify.css';
import InputCSV from './InputCSV'
import { baseURL } from '../interceptor/axios';
import Loading from '../assets/Loaders/loading_big.gif';

const SelectDropdown = ({ showDropdown, setRecipients, handleSubmit, setCsv }) => {

    const [isActive, setIsActive] = useState(false);
    const [useTables, setUseTables] = useState(false);
    const [useCSV, setUseCSV] = useState(false);
    const [tableEmails, setTableEmails] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);
    // 710a7b52d84e3dda0be93bfe557d21599768be49b297fd918ea0fd5e6b30a29d66ad288444816c259760628d26f1d4f58a48ddba0be72b7ecc65f4c3b0077666
    // ebf4c5c7897c61f6ebe6e9bafa108bea3663f1b6ad42c669753505e19769961ecce02acd625b0a5701d527c5f952f033ca8cb0bd97a22e1bedaf7bdf0a4cdb2c
    // bfcbe6c811fea0f7ecb7768779c4a607e80c4bbb1e5b82317d8d2d6c5936a3fa48bfd64895734763f1442b0f44e64baa0e8d238416eb4c498c2ae6d748c91340
    const access_token = '695c0ef1165b595cbee47769c566ce0e19dd70ce01b84487524fc6f4a2b704be88f98b43880c842a91740468ee690f454507c3ec5989c3d235d0043f256dbbf2';
    // const access_token = process.env.MEVAPP_ACCESS_TOKEN

    const form = new FormData()
    form.append('access_token', access_token);
    form.append('grant_type', 'access_token');

    const connectToMevDB = {
        method: 'post',
        url: `${baseURL}/database/getUserTables?access_token=${access_token}&grant_type=access_token`,
        headers: {
            'Content-Type': 'multipart/form-data'
        },
        data: form
    }
    const handleUseTableEmails = () => {
        setUseTables(!useTables);
        axios(connectToMevDB)
            .then((response) => {
                if (response.data.status === 'SUCCESSFUL') {
                    setTableEmails(response.data.data);
                    setIsLoading(false);
                    setError(null);
                }
            })
            .catch((err) => {
                console.log(err);
                setIsLoading(false)
                setError(err.message)
            })
    }

    return (
        <div className='dropdown-wrapper'>
            <div className='dropdown'>
                <div className='dropdown-btn' onClick={(e) => setIsActive(!isActive)}>
                    Choose an option
                    <FaCaretDown />
                </div>
                {isActive && (
                    <div className='dropdown-content'>
                        <div className='dropdown-item' onClick={handleUseTableEmails}>
                            Use contact in MEV table
                        </div>
                        {useTables && (
                            <div className='dropdown-table-emails'>
                                {isLoading && <img src={Loading} alt='Loading' />}
                                {error && <span>{error}</span>}
                                {!tableEmails ? 'No Tables Found ' : tableEmails.map((tableEmail) => (
                                    <DisplayTableEmail tableEmail={tableEmail} key={tableEmail.id} setRecipients={setRecipients} />
                                ))}
                            </div>
                        )}
                        <div className={!useTables ? 'dropdown-item' : 'dropdown-none'} onClick={(e) => setUseCSV(!useCSV)}>
                            Upload email in CSV files
                        </div>
                        {useCSV && (
                            <InputCSV setRecipients={setRecipients} setCsv={setCsv} />
                        )}
                    </div>
                )}
            </div>
            <div className='drop-down-button'>
                <div className='dropdown-button'>
                    <button onClick={handleSubmit}>Save</button>
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
    )
}

export default SelectDropdown;
