import React, { useState, useEffect } from 'react';
import '../styles/TextOptions.css';
import HtmlText from './HtmlText';
import RichText from './RichText';

const TextOptions = () => {

    const [value, setValue] = useState('rich-text');

    const [richTextVisible, setRichTextVisible] = useState(false);

    const [htmlTextVisible, setHtmlTextVisible] = useState(false);

    useEffect(() => {
        value === 'rich-text' ? setRichTextVisible(true) : setRichTextVisible(false);
        value === 'html-text' ? setHtmlTextVisible(true) : setHtmlTextVisible(false)
    }, [value])

    const handleChange = (e) => {
        setValue(e.target.value)
    }

    return (
        <>
            {richTextVisible && <RichText />}
            {htmlTextVisible && <HtmlText />}
            <div className='text'>
                <select value={value} onChange={handleChange}>
                    <option value='rich-text'>RICH TEXT</option>
                    <option value='html-text'>HTML</option>
                </select>
                <div className='text-buttons'>
                    <button>Finish</button>
                    <button>Cancel</button>
                </div>
            </div>
        </>
    )
}

export default TextOptions