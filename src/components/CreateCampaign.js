import { useState } from 'react';
import { FaPlus } from 'react-icons/fa';
import { TailSpin } from 'react-loader-spinner';
import { useNavigate } from 'react-router-dom';
import { baseURL } from '../interceptor/axios';
import axios from 'axios';
import '../styles/CreateCampaign.css';
import { toast, ToastContainer } from 'react-toastify';
import MEV from '../assets/Mevlogo.png';

const CreateCampaign = () => {
    // const access_token = '01316e7b431202266a6ffcdcbaf91231762b7bc5ec741828b0b2130b5574429e3ca4a07913ae777f237731404c0ed26f27b087bbfaa28d0273c0244923fc3617'
    const access_token = localStorage.getItem('token')
    const formData = new FormData();
    formData.append('access_token', access_token)
    formData.append('grant_type', 'access_token')

    const [btnLoading, setBtnLoading] = useState(false);
    const [error, setError] = useState(null)
    const navigate = useNavigate();

    const handleCreateNewCampaign = async () => {
        setBtnLoading(true)
        await axios.post(`${baseURL}/messaging/userCreateEmptyCampaign.php`, formData)
            .then(response => {
                setBtnLoading(false)
                if (response.data.status === 'Error') {
                    toast.error(response.data.message)
                    // navigate('/campaign')
                } else {
                    localStorage.setItem('campUUID', response.data.uuid)
                    navigate(`/create/${response.data.uuid}`)
                }
            })
            .catch(err => {
                setBtnLoading(false)
                setError(err.message)
            })
    }

    return (
        <div>
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
            <div className='create-campaign'>
                {/* <h1></h1> */}
                <img src={MEV} alt='' width={50} height={50} />
                <div>
                    <a href="http://0.0.0.0:8081/list.php" target='_blank'><button className='ma-40'>Lists</button></a>

                    <a href="http://0.0.0.0:8081/user.php" target='_blank'><button className='ma-40'>Settings</button></a>
                    {!btnLoading && <button onClick={handleCreateNewCampaign}><FaPlus style={{ border: '2px', paddingRight: '5px' }} /> New Campaign</button>}
                    {btnLoading && <button disabled style={{display: 'flex'}}>Loading...<TailSpin height='20' width='20' color='#fff' radius='1' visible={true} /></button>}
                </div>
            </div>
        </div>
    )
}

export default CreateCampaign;