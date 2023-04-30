import React, { useState, useRef, useEffect } from 'react';
import '../styles/HtmlText.css';
import CodeEditor, { SelectionText } from "@uiw/react-textarea-code-editor";

const HtmlText = ({ message, setMessage }) => {

    const textRef = useRef();

    const [preview, setPreview] = useState(false);

    useEffect(() => {
        if (textRef.current) {
            const obj = new SelectionText(textRef.current)

            console.log("obj:", obj)
        }
    }, [])

    return (
        <div className='text-container'>
            <div data-color-mode='light' className='text-editor'>
                <h2>Paste your HTML code here</h2>
                <CodeEditor
                    value={message}
                    ref={textRef}
                    language='html'
                    placeholder='<html></html>'
                    onChange={(env) => setMessage(env.target.value)}
                    padding={20}
                    style={{
                        fontFamily: 'Montserrat', fontSize: 18, fontWeight: 600, width: 900
                    }}
                />
                <button onClick={() => setPreview(!preview)} className='preview-btn'>
                    {preview ? 'Edit' : 'Preview'}
                </button>
            </div>
                {preview ? (
                    <div dangerouslySetInnerHTML={{__html: message}} className='preview' />
                ) : null}
        </div>
    )
}

export default HtmlText;

