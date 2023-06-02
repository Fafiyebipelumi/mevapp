import React, { useState, useRef, useEffect } from 'react';
import '../styles/HtmlText.css';
import CodeEditor, { SelectionText } from "@uiw/react-textarea-code-editor";
import PopUp from './PopUp';
import { baseURL } from '../interceptor/axios';
import axios from 'axios';
import { toast, ToastContainer } from 'react-toastify';

const HtmlText = ({ message, setMessage,selectedTemplate_name,selectedTemplate_id }) => {

    const textRef = useRef();
    const [preview, setPreview] = useState(false);
    const [isOpen, setIsOpen] = useState(false);
    const [template_name, set_template_name] = useState('');

    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        if (textRef.current) {
            const obj = new SelectionText(textRef.current);
            console.log("obj:", obj);
        }
    }, []);

    const handleSaveEmailTemplate = async (e) => {
        e.preventDefault();

        // if (!senderEmail || !senderName) { 
        //     return toast.warn('Please enter all fields')
        // }

        // console.log(senderName, senderEmail, subject);
        const access_token = localStorage.getItem('token')
        const name = localStorage.getItem('name')
        const avatar = name.split(' ').map(word => word[0]).join('');

        
        const form = new FormData();
        form.append('access_token', access_token);
        form.append('grant_type', 'access_token');
        form.append('name', document.getElementById('email_template_name').value);
        form.append('body', message);

        await axios.post(`${baseURL}/messaging/userCreateEmailTemplate.php`, form)
            .then((response) => {
                if (response.data.status === 'Success') {
                    toast.success(response.data.message)
                } else {
                    toast.error(response.data.message)
                }
                setLoading(false)
            })
            .catch((error) => {
                console.log(error.message)
                setError(error.message)
                setLoading(false)
            })
        }

    const handlePreview = () => {
        setPreview(!preview);
        setIsOpen(true);
    }

    const handlePopupClose = () => {
        setIsOpen(false);
        setPreview(false);
    }

    return (
        <div className='text-container'>
            <div data-color-mode='light' className='text-editor'>
                <h2>Title Your New Template</h2>
                <input type="text"
                    placeholder="Enter a name for this template"
                    name="template_name"
                    id="email_template_name"
                    value={selectedTemplate_name}
                    onChange={(e) => selectedTemplate_name(e.target.value)}
                    style={{width:'100%', height:40}}
                />
                <h2>Paste your HTML code here</h2>
                <CodeEditor
                    value={message}
                    ref={textRef}
                    language='html'
                    placeholder='<html></html>'
                    onChange={(env) => setMessage(env.target.value)}
                    padding={20}
                    style={{
                        fontFamily: 'Montserrat', fontSize: 18, fontWeight: 600, width: 900, maxHeight: '500px', overflow: 'auto'
                    }}
                />

                <button onClick={handlePreview} className='preview-btn'>
                    {preview ? 'Edit' : 'Preview'}
                </button>

                <button onClick={handleSaveEmailTemplate} className='save-btn mr20'>
                    Save Email Template
                </button>
                <PopUp isOpen={isOpen} onClose={handlePopupClose}>
                    {preview ? (
                        <div className='preview'>
                            <iframe
                                className='preview-overflow'
                                title='Preview'
                                ref={(frame) => {
                                    if (frame) {
                                        frame.contentDocument.open();
                                        frame.contentDocument.write(message);
                                        frame.contentDocument.close();
                                    }
                                }}
                            />
                        </div>
                    ) : null}
                </PopUp>
            </div>
        </div>
    )
}

export default HtmlText;
