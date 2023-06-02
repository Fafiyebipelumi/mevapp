import React, { useState } from "react";
import DisplayTemplateEmail from './DisplayTemplateEmail';
import '../styles/SelectDropdown.css';
import { FaCaretDown } from "react-icons/fa";
import { baseURL } from '../interceptor/axios';
import axios from 'axios';

const ImportTemplate = ({selectedTemplate}) => {
    const [isActive, setIsActive] = useState(false);
    const [useTables, setUseTables] = useState(false); 
    const [templateEmails, setTemplateEmails] = useState([]);
    // const [emails, setEmails] = useState([]);

    const access_token = localStorage.getItem('token')

    const form = new FormData()
    form.append('access_token', access_token);
    form.append('grant_type', 'access_token');
    form.append('fetch', 'true')

    const connectToZoho = {
        method: 'post',
        url: `${baseURL}/messaging/userListAllEmailTemplate.php`,
        headers: {
            'Content-Type': 'multipart/form-data'
        },
        data: form
    }

    const handleUseTemplateEmails = async () => {
        setUseTables(!useTables)
        // setIsActive(!isActive);
        try {
            const response = await axios(connectToZoho)
            setTemplateEmails(response.data.data)
            // console.log(response.data.data);
        } catch (error) {
            console.error(error);
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

    const handleChooseTemplates = () => {
        setIsActive(!isActive);
    }
    const handleSelectedTemplateId = (temp_id,temp_name) => {
        selectedTemplate(temp_id,temp_name)
        setIsActive(!isActive);
    };

    return (
        <div className='dropdown-wrapper'>
            <div className='dropdown'>
                <div className='dropdown-btn' onClick={handleChooseTemplates}>
                    Use a Presaved Email Template
                </div>
                {isActive && (
                    <div className='dropdown-content'>
                        <div className='dropdown-item' style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }} onClick={handleUseTemplateEmails}>
                            Choose Templates
                            <FaCaretDown />
                        </div>
                        {useTables && (
                            // <>
                            //     <div>Template 1</div>
                            //     <div>Template 2</div>
                            //     <div>Template 3</div>
                            //     <div>Template 4</div>
                            // </>
                            <div className='dropdown-table-emails custom-scroll'>
                                {/* {isLoading && <img src={Loading} alt='Loading' />} */}
                                {/* {error && <span>{error}</span>} */}
                                {!templateEmails ? 'No Templates Found ' : templateEmails.map((template_info) => (
                                    <DisplayTemplateEmail template_info={template_info} key={template_info.id} setSelectedTemplateId={handleSelectedTemplateId} />
                                ))}
                            </div>
                        )}
                    </div>
                )}
            </div>
        </div>
    )
}

export default ImportTemplate;