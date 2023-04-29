import React from 'react';
import '../styles/CreateSidebar.css';
import { FaBars, FaUsers } from 'react-icons/fa';
import { SiCampaignmonitor } from 'react-icons/si';
import { IoMdCreate } from 'react-icons/io';
import { Link } from 'react-router-dom';
import SettingIcon from '../assets/settings.png'
import MEV from '../assets/Mevlogo.png'

const CreateSidebar = ({handleAudience, handleCampaign, handleSettings}) => { 
    return (
        <div className='create-sidebar'>
            <div className='create-sidebar-container'>
                <div className='create-sidebar-icon'>
                    <Link to={'/campaign'}><img src={MEV} alt='mev-logo' width={40} height={40} /></Link>
                    {/* <FaBars style={{ color: '#57BF7E', fontSize: '25px', cursor: 'pointer' }} /> */}
                </div>
                <div className='create-sidebar-wrapper'>
                    <span><IoMdCreate style={{ color: '#fff', fontSize: '25px' }} /></span><p>Create</p>
                </div>
                <ul className='create-sidebar-links'>
                    <li onClick={handleAudience}><FaUsers style={{ color: '#57BF7E', marginRight: '10px', fontSize: '20px' }} />Audience</li>
                    <li onClick={handleCampaign}><SiCampaignmonitor style={{ color: '#57BF7E', marginRight: '10px', fontSize: '20px' }} />Campaign</li>
                    <li onClick={handleSettings}><img src={SettingIcon} alt='Settings' />Settings</li>
                </ul>
            </div>
        </div>
    )
}

export default CreateSidebar;