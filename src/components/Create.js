import axios from 'axios';
import React, { useState } from 'react';
import { AiOutlineArrowLeft } from 'react-icons/ai';
import { FaBars } from 'react-icons/fa';
import { Link, useNavigate } from 'react-router-dom';
import { baseURL } from '../interceptor/axios';
import '../styles/Create.css';
import 'react-toastify/dist/ReactToastify.css';
import CreateOptions from './CreateOptions';
// import Swal from 'sweetalert2';
// import 'sweetalert2/src/sweetalert2.scss'
// import CreateSidebar from './CreateSidebar';
import { toast, ToastContainer } from 'react-toastify';

const Create = () => {

    // const access_token = '695c0ef1165b595cbee47769c566ce0e19dd70ce01b84487524fc6f4a2b704be88f98b43880c842a91740468ee690f454507c3ec5989c3d235d0043f256dbbf2'

    const [sidebar, setSidebar] = useState(true);
    // const [recipients, setRecipients] = useState('');
    // const [senderName, setSenderName] = useState('');
    // const [senderEmail, setSenderEmail] = useState('');
    // const [subject, setSubject] = useState('');
    // const [message, setMessage] = useState('');
    // const [csv, setCsv] = useState(null);
    // const [error, setError] = useState(null)

    const showSidebar = () => setSidebar(!sidebar);

    const navigate = useNavigate();

    // const sendData = new FormData();

    // sendData.append('access_token', access_token);
    // sendData.append('grant_type', 'access_token');
    // sendData.append('fromName', senderName);
    // sendData.append('from', senderEmail);
    // sendData.append('recipients', recipients);
    // sendData.append('subject', subject);
    // sendData.append('textbody', message);

    // const handleSendCampaign = async () => {

    //     await axios.post(`${baseURL}/messaging/sesSendMail.php`, form)
    //         .then(response => {
    //             if (response.data.status === 'success') {
    //                 Swal.fire(
    //                     'Congratulations!',
    //                     'You have successfully sent campaign!',
    //                     'success'
    //                 )
    //                 navigate('/campaign')
    //                 // alert("Congratulations!, you've successfully sent campaign.")
    //                 // toast.success('Campaign Sent')
    //                 // navigate('/campaign')
    //             } else {
    //                 toast.error('Campaign failed')
    //             }
    //         })
    //         .catch((error) => {
    //             setError(error.message)
    //         })
    // }

    return (
        <div className='create'>
            {/* <div className='create-container'>
                <FaBars onClick={showSidebar} style={{ color: '#57BF7E', marginLeft: '30px', fontSize: '25px', cursor: 'pointer' }} />
                <div className='create-close-icon'>
                    <div>{sidebar ? <Link to='/campaign'><AiOutlineArrowLeft style={{ fontSize: '18px', color: '#424242', cursor: 'pointer', marginLeft: '30px' }} onClick={showSidebar} /></Link> : null}</div>
                </div>
                <div className='create-buttons'>
                    <button>Schedule</button>
                    <button>Finish Later</button>
                    <button>Send</button>
                    <div className='create-avatar'>img</div>
                </div>
            </div>  */}
            <CreateOptions showSidebar={showSidebar} sidebar={sidebar} />
        </div>
    )
}

export default Create;

// recipients={recipients}
// setRecipients={setRecipients}
// senderName={senderName}
// setSenderName={setSenderName}
// senderEmail={senderEmail}
// setSenderEmail={setSenderEmail}
// subject={subject}
// setSubject={setSubject}
// message={message}
// setMessage={setMessage}
// csv={csv}
// setCsv={setCsv}


            // <div>
            //     <div className={sidebar ? 'create-active' : 'create-options'}>
            //         <CreateOptions
            //             sidebar={sidebar}
            //             showSidebar={showSidebar}
            //             uuid={uuid}
            //             recipients={recipients}
            //             setRecipients={setRecipients}
            //             senderName={senderName}
            //             setSenderName={setSenderName}
            //             senderEmail={senderEmail}
            //             setSenderEmail={setSenderEmail}
            //             subject={subject}
            //             setSubject={setSubject}
            //             message={message}
            //             setMessage={setMessage}
            //             csv={csv}
            //             setCsv={setCsv}
            //         />
            //     </div>
            // </div>