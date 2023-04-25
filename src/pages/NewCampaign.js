import React, { useState } from 'react';
import { FaBars, FaSearch } from 'react-icons/fa';
import { AiOutlineClose } from 'react-icons/ai';
import { Link } from 'react-router-dom';
import '../styles/NewCampaign.css';
import StarIcon from '../assets/star.png';
import UndoIcon from '../assets/undo.png';
import PrintIcon from '../assets/printer.png';
import MenuIcon from '../assets/menu.png';

const NewCampaign = () => {

    const [sidebar, setSidebar] = useState(false);
    const [search, setSearch] = useState('');

    const showSidebar = () => setSidebar(!sidebar)

    return (
        <div>
            <div className='new-container'>
                <div className='new'>
                    <Link to='#' className='menu-bars'>
                        <FaBars onClick={showSidebar} style={{ marginLeft: '3rem', color: '#fff', fontSize: '25px' }} />
                    </Link>
                    {sidebar ? <AiOutlineClose style={{ cursor: 'pointer', color: '#fff' }} onClick={showSidebar} /> : null}
                    <div className='new-search'>
                        <FaSearch style={{ marginLeft: '30px', color: '#ccc' }} /><input type='text' value={search} onChange={(e) => setSearch(e.target.value)} placeholder='Search Campaigns' />
                    </div>
                    <div className='avatar'></div>
                </div>
                <nav className={sidebar ? 'new-menu active' : 'new-menu'}>
                    <ul className='new-menu-items'>
                        <li className='new-text'>
                            Report
                        </li>
                        <li className='new-text'>
                            Status
                        </li>
                        <li className='new-text'>
                            Audience
                        </li>
                        <li className='new-text'>
                            Launch Date
                        </li>
                        <li className='new-text'>
                            Last Modified
                        </li>
                    </ul>
                </nav>
                <div className={sidebar ? 'detail' : 'detail-active'}>
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
                </div>
            </div>
        </div>
    )
}

export default NewCampaign;