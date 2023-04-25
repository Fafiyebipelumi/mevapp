import React, { useState } from 'react';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import '../styles/RichText.css';
import 'react-toastify/dist/ReactToastify.css';

// import TextOptions from './TextOptions';

const RichText = ({ message, setMessage }) => {

    const handleChange = (e, editor) => {
        const data = editor.getData()
        setMessage(data)
    }

    return (
        <div className='text-container'>
            <div className='text-wrapper'>
                <h2>Write and format your text below</h2>
            </div>
            <div className='text-editor'>
                <CKEditor
                    editor={ClassicEditor}
                    data={message}
                    onChange={handleChange}
                />
            </div>
            <div className='select-container'>
                {/* <p>{message}</p> */}
                {/* <select>
                    <option value='html-text'>HTML</option>
                    <option value='rich-text'>RICH TEXT</option>
                </select> */}
                {/* <div className='select-btns'>
                    <button>Finish</button>
                    <button>Cancel</button>
                </div> */}
            </div>
        </div>
    )
}

export default RichText;