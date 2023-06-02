import { useEffect, useState } from 'react';
import { FaSearch } from 'react-icons/fa';
import { baseURL } from '../interceptor/axios';
import '../styles/Campaigns.css';
import axios from 'axios';
import Table from './Table';
import RecentIcon from '../assets/recent-icon.png';
import FinishedIcon from '../assets/finished-icon.png';
import ArchivedIcon from '../assets/archived-icon.png';
import FilterIcon from '../assets/filter-icon.png';
import Sorry from '../assets/sorry.png';
import Loading from '../assets/Loaders/loading_big.gif';
import CreateCampaign from './CreateCampaign';

const Campaigns = () => {
    // const access_token = localStorage.getItem('access_token_mev')
    // ebf4c5c7897c61f6ebe6e9bafa108bea3663f1b6ad42c669753505e19769961ecce02acd625b0a5701d527c5f952f033ca8cb0bd97a22e1bedaf7bdf0a4cdb2c
    // my_token = 'bfcbe6c811fea0f7ecb7768779c4a607e80c4bbb1e5b82317d8d2d6c5936a3fa48bfd64895734763f1442b0f44e64baa0e8d238416eb4c498c2ae6d748c91340'
    // 710a7b52d84e3dda0be93bfe557d21599768be49b297fd918ea0fd5e6b30a29d66ad288444816c259760628d26f1d4f58a48ddba0be72b7ecc65f4c3b0077666
    // const access_token = process.env.React_App_MEVAPP_ACCESS_TOKEN
    // 8f6c3ac00d95e1c055bc06060df59f366742aa03feffe61769559612c2d66694b55f242ed268829087295ae8c186afd5d1894e8d9355076a6859d514859b7848
    
    // const access_token = '01316e7b431202266a6ffcdcbaf91231762b7bc5ec741828b0b2130b5574429e3ca4a07913ae777f237731404c0ed26f27b087bbfaa28d0273c0244923fc3617'
    const token = localStorage.getItem('token')
    const username = localStorage.getItem('name')
    const formData = new FormData();
    formData.append('access_token', token)
    formData.append('grant_type', 'access_token')

    const [campaigns, setCampaigns] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    // const [btnLoading, setBtnLoading] = useState(false);
    const [error, setError] = useState(null);
    const [search, setSearch] = useState('');

    const options = {
        method: 'post',
        url: `${baseURL}/messaging/userListCampaigns.php`,
        headers: {
            'Content-Type': 'multipart/form-data'
        },
        data: formData
    }
    useEffect(() => {
        axios(options)
            .then((response) => {
                if (response.data.status === 'success') {
                    setCampaigns(response.data.data)
                    setIsLoading(false)
                    setError(null)
                }
            })
            .catch((err) => {
                console.error(err);
                setIsLoading(false);
                setError(err.message);
            })
    }, [])

    return (
        <>
            <div className='campaign'>
                <CreateCampaign />
                {/* <div className='campaign-header'>
                    <h1>Campaigns</h1>
                    { <CreateCampaignButton />}
                </div> */}
                {/* <div className='campaign-wrapper'> */}
                    <div className='campaign-options'>
                        <h2>Hello, {username}</h2>
                        {/* <p><img src={RecentIcon} alt='' width='16px' height='14px' />Recent</p>
                        <p><img src={FinishedIcon} alt='' width='20.6px' height='10.62px' />Finished</p>
                        <p><img src={ArchivedIcon} alt='' width='17px' height='14px' />Archived</p>
                        <p><img src={FilterIcon} alt='' width='15px' height='7px' />Filter</p> */}
                        <div className='campaign-search'>
                            <FaSearch style={{ marginLeft: '30px', color: '#ccc' }} /><input type='text' value={search} onChange={(e) => setSearch(e.target.value)} placeholder='Search Campaigns' />
                            {/*<FaSearch style={{ color: '#677194' }} /><input type='text' placeholder='Search Instructors by email' value={searchInput} onChange={(e) => setSearchInput(e.target.value)} />*/}
                        </div>
                    </div>
                {/* </div> */}
            </div>
            <div className='campaign-table' style={{marginTop: 20}}>
                {isLoading && <div className='loading-tables'><img src={Loading} alt='' /> <p>Loading Campaigns</p></div>}
                {error && <div className='error'><img src={Sorry} /> {error} <p>Check your internet connection</p></div>}
                {campaigns && <Table campaigns={campaigns} isLoading={isLoading} search={search} setSearch={setSearch} />}
            </div>
        </>
    )
}

export default Campaigns;
