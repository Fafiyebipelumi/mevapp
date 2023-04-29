import React, { useEffect, useState } from 'react';
import { FaBars, FaSearch } from 'react-icons/fa';
import { Link, useParams } from 'react-router-dom';
import '../styles/CampaignDetails.css';
import axios from 'axios';
import Details from './Details';
import { HiOutlineArrowNarrowLeft } from 'react-icons/hi';
import { baseURL } from '../interceptor/axios';
import Sorry from '../assets/sorry.png';
import MEV from '../assets/Mevlogo.png';
import Loading from '../assets/Loaders/loading_big.gif';
import DetailSidebar from './DetailSidebar';

const CampaignDetails = () => {

    // const { uuid } = useParams();

    const [isLoading, setIsLoading] = useState(true);
    const [campaignInfo, setCampaignInfo] = useState([]);
    const [error, setError] = useState(null)
    const [sidebar, setSidebar] = useState(true);
    const [search, setSearch] = useState('');

    // API = userListCampaigns.php
    // const { campaign, isLoading, error } = useAxios(`${baseURL}/messaging/userListCampaigns.php`)
    // console.log(campaign) 

    // const access_token = '01316e7b431202266a6ffcdcbaf91231762b7bc5ec741828b0b2130b5574429e3ca4a07913ae777f237731404c0ed26f27b087bbfaa28d0273c0244923fc3617'
    const access_token = localStorage.getItem('token')
    const { uuid } = useParams()

    const details = new FormData();
    details.append('access_token', access_token);
    details.append('grant_type', 'access_token');
    details.append('campaignId', uuid);

    useEffect(() => {
        axios.post(`${baseURL}/messaging/userSingleCampaign.php`, details)
            .then((response) => {
                console.log('User Single Campaign', response.data)
                if (response.data.status === 'success') {
                    setIsLoading(false)
                    setCampaignInfo(response.data.data)
                }
            })
            .catch((err) => {
                setIsLoading(false)
                setError(err.message)
                console.log(err)
            })
    }, [])

    // const showSidebar = () => setSidebar(!sidebar)

    return (
        <div className='new-detail'>
            <div className='new-container'>
                <div className='new'>
                    <Link to='/campaign' className='menu-bars' style={{marginLeft: 30}}>
                        {/* <FaBars style={{ marginLeft: '3rem', color: '#fff', fontSize: '25px' }} /> */}
                        <img src={MEV} alt='' width={40} height={40} />
                    </Link>
                    {/* <HiOutlineArrowNarrowLeft style={{ cursor: 'pointer', color: '#fff' }} /> */}
                    <div className='new-search'>
                        {/* <FaSearch style={{ marginLeft: '30px', color: '#ccc' }} /><input type='text' value={search} onChange={(e) => setSearch(e.target.value)} placeholder='Search Campaigns' /> */}
                    </div>
                    <div className='avatar'></div>
                </div>
            </div>
            <div className='detail__container'>
                {isLoading && <div className='loading-tables'><img src={Loading} alt='' /></div>}
                {error && <div className='error'><img src={Sorry} alt='Network error' /> {error} <p>Check your internet connection</p></div>}
                {campaignInfo.map((detail) => {
                    return (
                        <div className='detail-container' key={detail.id}>
                            <div className='detail-wrapper'> 
                                <DetailSidebar detail={detail} />
                            </div>
                            <div className='details-active' >
                                <Details detail={detail} isLoading={isLoading} />
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default CampaignDetails;


{/* <nav className={sidebar ? 'new-menu active' : 'new-menu'}>
                    {campaigns && (
                        <ul className='new-menu-items'>
                            <li className='new-text'>
                                Report
                            </li>
                            <li className='new-text'>
                                Status
                                {campaigns.status}
                            </li>
                            <li className='new-text'>
                                Audience
                                {campaigns.recipient === null ? 'No recipient' : `Sent to ${campaigns.recipient.split(',').length} lists`}
                            </li>
                            <li className='new-text'>
                                Launch Date
                                {campaigns.createdAt}
                            </li>
                            <li className='new-text'>
                                Last Modified
                                {campaigns.updatedAt}
                            </li>
                        </ul>
                    )}
                </nav> */}



{/* <div className={sidebar ? 'detail' : 'detail-active'}>
                    <div className='detail-container'>
                        <div className='detail-wrapper'>
                            <h2>Campaign Title</h2>
                            <div className={sidebar ? 'detail-info' : 'detail-info-active'}>
                                <span>From:</span>{' '}<p>yusufhabeeb006@gmail.com</p>
                                <span>To:</span>{' '}<p>mathadeniyi@gmail.com</p>
                                <span>Subject:</span>{' '}<p>SAP Campaign</p>
                                <span>Date:</span>{' '}<p>28/05/2022</p>
                            </div>
                            <div className='detail-icons'>
                                <img src={MenuIcon} alt='Menu-Icon' />
                                <img src={PrintIcon} alt='Print-Icon' />
                                <img src={UndoIcon} alt='Undo-Icon' />
                                <img src={StarIcon} alt='Star-Icon' />
                            </div>
                        </div>
                        <div></div>
                    </div>
                </div> */}








// useEffect(() => {
//     axios(`${baseURL}/messaging/userListCampaigns.php/${uuid}`)
//         .then((response) => {
//             setCampaigns(response.data.data)
//             setIsLoading(false)
//             setError(null)
//         }).catch((err) => {
//             console.error(err);
//             setIsLoading(false);
//             setError(err.message);
//         })
// }, [])