import { useState } from 'react';
import { FaPlus } from 'react-icons/fa';
import { TailSpin } from 'react-loader-spinner';
import { useNavigate } from 'react-router-dom';
import { baseURL } from '../interceptor/axios';
import axios from 'axios';
import '../styles/CreateCampaign.css';
import { toast, ToastContainer } from 'react-toastify';

const CreateCampaign = () => {
    const access_token = '695c0ef1165b595cbee47769c566ce0e19dd70ce01b84487524fc6f4a2b704be88f98b43880c842a91740468ee690f454507c3ec5989c3d235d0043f256dbbf2'
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
            <h3>{error}</h3>
            <div className='create-campaign'>
                <h1>Campaigns</h1>
                <div>
                    {!btnLoading && <button onClick={handleCreateNewCampaign}><FaPlus style={{ border: '2px', paddingRight: '5px' }} /> New Campaign</button>}
                    {btnLoading && <button disabled>Loading... <TailSpin height='20' width='20' color='#fff' radius='1' visible={true} /></button>}
                </div>
            </div>
        </div>
    )
}

export default CreateCampaign;