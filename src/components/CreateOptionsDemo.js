import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../styles/CreateOptions.css';
import CreateSidebar from './CreateSidebar';
import RichText from '../assets/text.png';
import PopUp from './PopUp';

const CreateOptions = ({ sidebar, showSidebar }) => {

    const [buttonPopup, setButtonPopup] = useState(false)

    const [dropdown, setDropdown] = useState(true);
    const [emailDropdown, setEmailDropdown] = useState(true);
    const [subjectDropdown, setSubjectDropdown] = useState(true);
    const [designDropdown, setDesignDropdown] = useState(true);

    const showDropdown = () => setDropdown(!dropdown);
    const showEmailDropdown = () => setEmailDropdown(!emailDropdown);
    const showSubjectDropdown = () => setSubjectDropdown(!subjectDropdown);
    const showDesignDropdown = () => setDesignDropdown(!designDropdown);

    return (
        <div className='create-option'>
            <div className={sidebar ? 'create-menu active' : 'create-menu'}>
                <CreateSidebar showSidebar={showSidebar} />
            </div>
            <div className='create-option-container'>
                <div className='create-option-edit'>
                    <h2>Untitled</h2>
                    <p>Edit name</p>
                </div>
                <div className={sidebar ? 'create-option-wrap' : 'create-option-wrapper'}>
                    <div className='create-option-group'>
                        <p>1</p>
                        <div className='create-option-items'>
                            <div className='create-option-item'>
                                <div className='create-option-heading'>
                                    <h5>To</h5>
                                    <h5>Who are you sending this campaign?</h5>
                                </div>
                                <div className={sidebar ? 'create-option-button' : 'create-option-button-active'}>
                                    {dropdown ? <button onClick={showDropdown}>Add Recipient</button> : null}
                                </div>
                            </div>
                            <div className={dropdown ? 'create-option-clear' : 'create-option-select'}>
                                <div className={sidebar ? 'create-select-width' : 'create-select-width-active'}>
                                    <select>
                                        <option defaultChecked>.....</option>
                                        <option value='database'>Connect to MEV database</option>
                                        <option value='csv'>Connect to CSV files</option>
                                    </select>
                                </div>
                                <div className='create-option-buttons'>
                                    <button onClick={() => setButtonPopup(true)}>Save</button>
                                    <button onClick={showDropdown}>Cancel</button>
                                </div>
                            </div>
                        </div>
                        <PopUp trigger={buttonPopup} setTrigger={setButtonPopup}></PopUp>
                    </div>
                    <div className='create-option-group'>
                        <p>2</p>
                        <div className='create-option-items'>
                            <div className='create-option-item'>
                                <div className='create-option-heading'>
                                    <h5>From</h5>
                                    <h5>Who is sending this campaign?</h5>
                                </div>
                                <div className={sidebar ? 'email-create-option-button' : 'email-create-option-button-active'}>
                                    {emailDropdown ? <button onClick={showEmailDropdown}>Add From</button> : null}
                                </div>
                            </div>
                            <div className={emailDropdown ? 'email-create-option-clear' : 'email-create-option-select'}>
                                <div className={sidebar ? 'create-input' : 'create-inputs'}>
                                    <input type='text' placeholder='Enter your name here' />
                                    <input type='email' placeholder='Enter your email address here' />
                                </div>
                                <div className='email-create-option-buttons'>
                                    <button>Save</button>
                                    <button onClick={showEmailDropdown}>Cancel</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='create-option-group'>
                        <p>3</p>
                        <div className='create-option-items'>
                            <div className='create-option-item'>
                                <div className='create-option-heading'>
                                    <h5>Subject</h5>
                                    <h5>What is the subject of this campaign?</h5>
                                </div>
                                <div className={sidebar ? 'subject-create-option-button' : 'subject-create-option-button-active'}>
                                    {subjectDropdown ? <button onClick={showSubjectDropdown}>Add Subject</button> : null}
                                </div>
                            </div>
                            <div className={subjectDropdown ? 'email-create-option-clear' : 'email-create-option-select'}>
                                <div className={sidebar ? 'create-input' : 'create-inputs'}>
                                    <input type='text' placeholder='Subject' />
                                    <input type='email' placeholder='Preview Text' />
                                </div>
                                <div className='email-create-option-buttons'>
                                    <button>Save</button>
                                    <button onClick={showSubjectDropdown}>Cancel</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='create-option-group'>
                        <p>4</p>
                        <div className='create-option-items'>
                            <div className='create-option-item'>
                                <div className='create-option-heading'>
                                    <h5>Content</h5>
                                    <h5>Design the content for your mail</h5>
                                </div>
                                <div className={sidebar ? 'design-create-option-button' : 'design-create-option-button-active'}>
                                    {designDropdown ? <button onClick={showDesignDropdown}>Design Email</button> : null}
                                </div>
                            </div>
                            <div className={designDropdown ? 'email-create-option-clear' : 'email-create-option-select'}>
                                <div className={sidebar ? 'create-display' : 'create_display'}>
                                    <div className='template'>
                                        <h3>Rich Text Editor</h3>
                                        <img src={RichText} alt='' />
                                        <Link to='/rich-text'><button>Select</button></Link>
                                    </div>
                                    <div className='template'>
                                        <h3>HTML Templates</h3>
                                        <img src='' alt='' />
                                        <Link to='/html-text'><button>Select</button></Link>
                                    </div>
                                </div>
                                <div className='email-create-option-buttons'>
                                    <button>Save</button>
                                    <button onClick={showDesignDropdown}>Cancel</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CreateOptions;