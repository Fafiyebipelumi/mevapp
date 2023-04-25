import React from 'react';
import '../styles/CreateSidebar.css';
import { FaBars, FaUsers } from 'react-icons/fa';
import { SiCampaignmonitor } from 'react-icons/si';
import { IoMdCreate } from 'react-icons/io';
import { Link } from 'react-router-dom';
import SettingIcon from '../assets/settings.png'

const CreateSidebar = ({ showSidebar }) => {
    return (
        <div className='create-sidebar'>
            <div className='create-sidebar-container'>
                <div className='create-sidebar-icon'>
                    <FaBars style={{ color: '#57BF7E', fontSize: '25px', cursor: 'pointer' }} onClick={showSidebar} />
                </div>
                <div className='create-sidebar-wrapper'>
                    <span><IoMdCreate style={{ color: '#fff', fontSize: '25px' }} /></span><p>Create</p>
                </div>
                <ul className='create-sidebar-links'>
                    <li><SiCampaignmonitor style={{ color: '#57BF7E', marginRight: '10px', fontSize: '20px' }} /><Link to='#'>Campaign</Link></li>
                    <li><FaUsers style={{ color: '#57BF7E', marginRight: '10px', fontSize: '20px' }} /><Link to='#'>Audience</Link></li>
                    <li><img src={SettingIcon} alt='Settings' /><Link to='#'>Settings</Link></li>
                </ul>
            </div>
        </div>
    )
}

export default CreateSidebar;