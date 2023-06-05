import React, { useEffect, useState } from 'react';
import '../styles/CreateOptions.css';
import CreateSidebar from './CreateSidebar';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
// import DisplayTableEmail from './DisplayTableEmail';
import { baseURL } from '../interceptor/axios';
import RichTextImage from '../assets/text.png';
import SelectDropdown from './SelectDropdown';
import { TailSpin } from 'react-loader-spinner';
import { AiOutlineArrowLeft } from 'react-icons/ai';
import { FaBars, FaCaretDown } from 'react-icons/fa';
import { Link, useNavigate, useParams } from 'react-router-dom';
import Swal from 'sweetalert2';
// import 'sweetalert2/src/sweetalert2.scss'
import HTML from '../assets/html-logo.png'
import axios from 'axios';
// import DesignContent from './DesignContent';
import RichText from './RichText';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import HtmlText from './HtmlText';
import validator from 'validator';
import Create from './Create';
import ImportTemplate from './ImportTemplates';
import { HiOutlineArrowNarrowLeft, HiOutlineArrowNarrowRight } from 'react-icons/hi';
// , recipients, setRecipients, senderName, setSenderName, senderEmail, setSenderEmail, subject, setSubject, message, setMessage, csv, setCsv 
const CreateOptions = ({ sidebar, showSidebar }) => {
    const [invalidEmail, setInvalidEmail] = useState('')
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);
    const [dropdown, setDropdown] = useState(true);
    const [emailDropdown, setEmailDropdown] = useState(true);
    const [subjectDropdown, setSubjectDropdown] = useState(true);
    const [designDropdown, setDesignDropdown] = useState(true);
    const [recipients, setRecipients] = useState('')
    const [senderName, setSenderName] = useState('');
    const [senderEmail, setSenderEmail] = useState('');
    const [subject, setSubject] = useState('');
    const [message, setMessage] = useState('');
    const [selected_template_name, selectedTemplateInfo_name] = useState('');
    const [selected_template_id, selectedTemplateInfo_id] = useState('');
    const [csv, setCsv] = useState(null);
    const [richText, setRichText] = useState(true)
    const [htmlText, setHtmlText] = useState(true)
    const [showRichText, setShowRichText] = useState(false);
    const [showHtmlText, setShowHtmlText] = useState(false);

    
    const [audience, setAudience] = useState(true)
    const [campaigns, setCampaigns] = useState(false)
    const [settings, setSettings] = useState(false)
    const [sendgrid, setSendGrid] = useState('SendGrid')
    const [ses, setSes] = useState('SES')
    const [defaultOption, setDefaultOption] = useState('Default')
    const [showSendGrid, setShowSendGrid] = useState(false)
    const [showSes, setShowSes] = useState(false)
    const [showDefaultOption, setShowDefaultOption] = useState(false)
    const [useTables, setUseTables] = useState(false);

    const handleSelectSendGrid = () => {
        setShowSendGrid(true)
        setShowSes(false)
        setSendGrid(sendgrid)
        setUseTables(false)
    }
    const handleSelectSes = () => {
        setShowSes(true)
        setShowSendGrid(false)
        setSes(ses)
        setUseTables(false)
    }
    const handleSelectDefaultOption = () => {
        setShowDefaultOption(true)
        setShowSendGrid(false)
        setDefaultOption(defaultOption)
        setUseTables(false)
    }

    const showDropdown = () => setDropdown(!dropdown);
    const showEmailDropdown = () => setEmailDropdown(!emailDropdown);
    const showSubjectDropdown = () => setSubjectDropdown(!subjectDropdown);
    const showDesignDropdown = () => setDesignDropdown(!designDropdown);
    
    const selectRichText = () => {
        setShowRichText(true)
        setHtmlText(false)
    }
    const selectHtmlText = () => {
        setShowHtmlText(true)
        setRichText(false)
    }

    const cancelRichText = () => {
        setShowRichText(false)
        setHtmlText(true)
    }

    const cancelHtmlText = () => {
        setShowHtmlText(false)
        setRichText(true)
    }
    
    const navigate = useNavigate()
    
    // const access_token = '01316e7b431202266a6ffcdcbaf91231762b7bc5ec741828b0b2130b5574429e3ca4a07913ae777f237731404c0ed26f27b087bbfaa28d0273c0244923fc3617'
    const access_token = localStorage.getItem('token')
    const name = localStorage.getItem('name')
    const avatar = name.split(' ').map(word => word[0]).join('');
    const { uuid } = useParams()

    const form = new FormData();
    form.append('access_token', access_token);
    form.append('grant_type', 'access_token');
    form.append('subject', subject);
    form.append('message', message);
    form.append('recipients', recipients)
    form.append('fromName', senderName);
    form.append('fromEmail', senderEmail);
    form.append('csv', csv);
    form.append('campaignId', uuid);

    const handleSubmit = async (e) => {
        e.preventDefault();

        // if (!senderEmail || !senderName) { 
        //     return toast.warn('Please enter all fields')
        // }

        // console.log(senderName, senderEmail, subject);
        setLoading(true)
        await axios.post(`${baseURL}/messaging/userUpdateCampaign.php`, form)
            .then((response) => {
                console.log(response, 'User Updated Successfully');
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


        // const handleValidateEmail = (e) => {
            //     const email = e.target.value
    //     setSenderEmail(email)
    //     if (validator.isEmail(email)) {
    //         setInvalidEmail('')
    //     } else {
        //         setTimeout(() => setInvalidEmail('Invalid Email'), 3000)
        //     }
    // }
    
    const handleSendCampaign = async () => {
        
        // add an extra form field
        
        await axios.post(`${baseURL}/messaging/userUpdateCampaign.php?snow`, form)
            .then(response => {
                if (response.data.status === 'Success') {
                    alert("Congratulations!, you've successfully sent campaign.")

                    // Swal.fire(
                        //     'Congratulations!',
                    //     'You have successfully sent campaign!',
                    //     'success'
                    // )
                    navigate('/campaign')
                    // alert("Congratulations!, you've successfully sent campaign.")
                    // toast.success('Campaign Sent')
                    // navigate('/campaign')
                } else {
                    toast.error('Campaign failed')
                }
            })
            .catch((error) => {
                setError(error.message)
            })
        }
        
    const handleAudience = () => {
        setAudience(true)
        setCampaigns(false)
        setSettings(false)
    }
    const handleCampaign = () => {
        setAudience(false)
        setCampaigns(true)
        setSettings(false)
    }
    const handleSettings = () => {
        setAudience(false)
        setCampaigns(false)
        setSettings(true)
    }
    
    const handleGetTemplatesFromZoho = () => {
        setUseTables(!useTables)
        setShowSendGrid(false)
        setShowSes(false)
        setShowDefaultOption(false)
    }

    const updateSelectedEmailTemplatetoUI = (template_id,template_name) => {
        // alert(template_name)
        selectedTemplateInfo_name(template_name);
        selectedTemplateInfo_id(template_id);
        // setSelectedFilterName(filter_name);
    };
    
    const btnSelected = !senderName || !senderEmail || !subject || !message
    
    return (
        <div>
            <div className='create'>
                <div className='create-container'>
                    <FaBars onClick={showSidebar} style={{ color: '#57BF7E', marginLeft: '30px', fontSize: '25px', cursor: 'pointer' }} />
                    {/* <div className='create-close-icon'>
                        <div>{sidebar ? <Link to='/campaign'><AiOutlineArrowLeft style={{ fontSize: '18px', color: '#424242', cursor: 'pointer', marginLeft: '30px' }} onClick={showSidebar} /></Link> : null}</div>
                    </div> */}
                    <div className='create-buttons'>
                        <button>Schedule</button>
                        <button>Finish Later</button>
                        <button className={btnSelected ? 'disabled-btn' : 'able-btn'} onClick={handleSendCampaign}>Send</button>
                        <div className='create-avatar'>{avatar}</div>
                    </div>
                </div>
            </div>
            <div className='create-option'>
                <div className={sidebar ? 'create-menu active' : 'create-menu'}>
                    <CreateSidebar handleAudience={handleAudience} handleCampaign={handleCampaign} handleSettings={handleSettings} />
                </div>
                <div className='create-option-container'>
                    {/* <div className={sidebar ? 'create-option-edit' : 'create-option-editing'}>
                        <h2>Untitled</h2>
                        <p>Edit name</p>
                    </div> */}
                    <div className={sidebar ? 'create-option-wrap' : 'create-option-wrapper'}>
                        {audience && (
                            <>
                                <div className='create-option-group'>
                                    <h6>1</h6>
                                    <div className='create-option-items'>
                                        <div className='create-option-item'>
                                            <div className='create-option-heading'>
                                                <h5>To</h5>
                                                <h5>Who are you sending this campaign ?</h5>
                                            </div>
                                            <div className={sidebar ? 'create-option-button' : 'create-option-button-active'}>
                                                {dropdown ? <button onClick={showDropdown}>Add Recipient</button> : null}
                                            </div>
                                        </div>
                                        <div className={dropdown ? 'create-option-clear' : 'create-option-select'}>
                                            <div className={sidebar ? 'create-select-width' : 'create-select-width-active'}>
                                                <div className='create-select-dropdown'>
                                                    <SelectDropdown loading={loading} showDropdown={showDropdown} setRecipients={setRecipients} handleSubmit={handleSubmit} setCsv={setCsv} />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    {/* <PopUp trigger={buttonPopup} setTrigger={setButtonPopup}></PopUp> */}
                                </div>
                                <button onClick={handleCampaign} className='next-btn'>Next <HiOutlineArrowNarrowRight style={{ marginLeft: 10 }} /></button>
                            </>
                        )
                        }
                        {campaigns && (
                            <>
                                <div className='create-option-group'>
                                    <h6>2</h6>
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
                                                <form onSubmit={handleSubmit}>
                                                    <div className='sender-form'>
                                                        <input
                                                            required
                                                            type='text'
                                                            placeholder='Enter your name here'
                                                            value={senderName}
                                                            onChange={(e) => setSenderName(e.target.value)}
                                                        />
                                                        <div className='email-container'>
                                                            <input
                                                                required
                                                                type='email'
                                                                placeholder='Enter your email address here'
                                                                value={senderEmail}
                                                                onChange={(e) => setSenderEmail(e.target.value)}
                                                            // onChange={(e) => setSenderEmail(e.target.value)}
                                                            />
                                                            <span className='email-validate'>{invalidEmail}</span>
                                                        </div>
                                                    </div>
                                                    <div className='email-create-option-buttons'>
                                                        <button type='submit'>{!loading ? 'Save' : <TailSpin height='25' width='25' color='#3A915B' radius='3' visible={true} />}</button>
                                                        <span onClick={showEmailDropdown}>Cancel</span>
                                                    </div>
                                                </form>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className='create-option-group'>
                                    <h6>3</h6>
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
                                                <form onSubmit={handleSubmit}>
                                                    <input
                                                        required
                                                        type='text'
                                                        placeholder='Subject'
                                                        value={subject}
                                                        onChange={(e) => setSubject(e.target.value)}
                                                    />
                                                    <input
                                                        type='text'
                                                        placeholder='Preview Text'
                                                    />
                                                    <div className='email-create-option-buttons'>
                                                        <button type='submit'>{!loading ? 'Save' : <TailSpin height='25' width='25' color='#3A915B' radius='3' visible={true} />}</button>
                                                        <span onClick={showSubjectDropdown}>Cancel</span>
                                                    </div>
                                                </form>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className='create-option-content'>
                                    <h6>4</h6>
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
                                                {richText && (
                                                    <div className='template'>
                                                        <h3>Rich Text Editor</h3>
                                                        <img src={RichTextImage} alt='' />
                                                        <button onClick={selectRichText}>Select</button>
                                                    </div>
                                                )}
                                                {htmlText && (
                                                    <div className='template'>
                                                        <h3>HTML Template</h3>
                                                        <img src={HTML} alt='' width={80} height={50} />
                                                        <button onClick={selectHtmlText}>Select</button>
                                                    </div>
                                                )}
                                            </div>
                                            {showRichText && (
                                                <div>
                                                    <RichText message={message} setMessage={setMessage} />
                                                    <div className='email-create-option-buttons'>
                                                        <button onClick={handleSubmit}>{!loading ? 'Save' : <TailSpin height='25' width='25' color='#3A915B' radius='3' visible={true} />}</button>
                                                        <span onClick={cancelRichText}>Cancel</span>
                                                    </div>
                                                </div>
                                            )}
                                            {showHtmlText && (
                                                <div>
                                                    <ImportTemplate setMessage={setMessage} selectedTemplate={updateSelectedEmailTemplatetoUI}/>
                                                    <p>Selected Template: <b>{selected_template_name}</b></p>
                                                    <HtmlText message={message} setMessage={setMessage} selectedTemplate_name={selected_template_name} selectedTemplate_id={selected_template_id}/>
                                                    <div className='email-create-option-buttons'>
                                                        <button onClick={handleSubmit}>{!loading ? 'Save' : <TailSpin height='25' width='25' color='#3A915B' radius='3' visible={true} />}</button>
                                                        <span onClick={cancelHtmlText}>Cancel</span>
                                                    </div>
                                                </div>
                                            )}
                                        </div>
                                    </div>
                                </div>
                                <div className='next-create-campaign-btn'>
                                    <button className='previous-btn' onClick={handleAudience}><HiOutlineArrowNarrowLeft style={{ marginRight: 10 }} /> Previous</button>
                                    {/* <button className='next-btn'>Next</button> */}
                                </div>
                            </>
                        )
                        }
                        <div>
                            {settings && (
                                <>
                                    <div className='create-option-group'>
                                        <h6>1</h6>
                                        <div className='create-option-items'>
                                            <div className='create-option-item'>
                                                <div className='create-option-heading'>
                                                    <h5>Choose ESP</h5>
                                                    <div className='esp-content'>
                                                        <div className='esp-item' style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }} onClick={handleGetTemplatesFromZoho}>
                                                            <FaCaretDown />
                                                        </div>
                                                        {useTables && (
                                                            <div className='esp-options'>
                                                                <p onClick={handleSelectSendGrid}>{sendgrid}</p>
                                                                <p onClick={handleSelectSes}>{ses}</p>
                                                                <p onClick={handleSelectDefaultOption}>{defaultOption}</p>
                                                            </div>
                                                        )}
                                                        {showSendGrid && <span>This campaign will be sent through - {sendgrid}</span>}
                                                        {showSes && <span>This campaign will be sent through - {ses}</span>}
                                                        {showDefaultOption && <span>This campaign will be sent by the {defaultOption} option</span>}
                                                    </div>
                                                    {/* <h5>Who is sending this campaign?</h5> */}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='create-option-group'>
                                        <h6>2</h6>
                                        <div className='create-option-items'>
                                            <div className='create-option-item'>
                                                <div className='create-option-heading'>
                                                    <h5>When to send this email</h5>
                                                    <div className='when-btns'>
                                                        <button className='now'>Now</button>
                                                        <button className='schedule'>Schedule</button>
                                                    </div>
                                                    {/* <h5>Who is sending this campaign?</h5> */}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='create-option-group'>
                                        <h6>3</h6>
                                        <div className='create-option-items'>
                                            <div className='create-option-item'>
                                                <div className='create-option-heading'>
                                                    <h5>Email Report</h5>
                                                    <p style={{fontSize: 15, marginTop: 10}}>Do you want to see report?</p>
                                                    <div className='report-btns'>
                                                        <button className='yes'>Yes</button>
                                                        <button className='no'>No</button>
                                                    </div>
                                                    {/* <h5>Who is sending this campaign?</h5> */}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </>
                            )}
                        </div>
                    </div>
                </div>
                <ToastContainer
                    position="top-right"
                    autoClose={3000}
                    hideProgressBar
                    newestOnTop={false}
                    closeOnClick
                    rtl={false}
                    pauseOnFocusLoss
                    draggable
                    pauseOnHover
                />
            </div>
        </div>
    )
}

export default CreateOptions;

    // axios.post('https://api.mevstaging.com/messaging/userListCampaigns.php', form)
    //     .then((res) => {
    //     })
    //     .catch((err) => {
    //         console.log(err)
    //     })


    // const handleClick = async (e) => {
    //     e.preventDefault()

    //     if (!senderName && !senderEmail) {
    //         return toast.error('Please Enter the required fields')
    //     }

    //     const form = new FormData();
    //     form.append('access_token', 'token');
    //     form.append('grant_type', 'access_token');

    //     try {
    //         const response = await axios.post('messaging/userListCampaigns.php', form)
    //         console.log(response);
    //     } catch (error) {
    //         console.log(error)
    //     }
    // }