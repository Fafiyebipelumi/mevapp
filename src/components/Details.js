import React from 'react';
// import DetailSidebar from './DetailSidebar';
import DetailMessage from './DetailMessage';
import '../styles/Details.css';
import StarIcon from '../assets/star.png';
import UndoIcon from '../assets/undo.png';
import PrintIcon from '../assets/printer.png';
import MenuIcon from '../assets/menu.png';
import Sorry from '../assets/sorry.png';
import Loading from '../assets/Loaders/loading_big.gif';

const Details = ({ detail, sidebar }) => {
    return (
        <>
            <div className='detail'>
                <div className='details'>
                    {/* <div className='detail-container'> */}
                    <div className='detail__wrapper'>
                        <h2>{detail.subject}</h2>
                        <div className='detail-option'>
                            <span>From:</span>{' '}
                            <p>{detail.fromEmail}</p>
                        </div>
                        <div className='detail-info'>
                            {/* <div className='detail-option'>
                            <span>To:</span>{' '}
                            <p>{detail.recipient === null || '' ? 'No recipient' : `${detail.recipient.split(',').length} lists`}</p>
                        </div>
                        <div className='detail-option'>
                            <span>Subject:</span>{' '}
                            <p>{detail.subject}</p>
                        </div>
                        <div className='detail-option'>
                            <span>Date:</span>{' '}
                            <p>{detail.createdAt}</p>
                        </div> */}
                        </div>
                        {/* <div className='detail-icons'>
                        <img src={MenuIcon} alt='Menu-Icon' />
                        <img src={PrintIcon} alt='Print-Icon' />
                        <img src={UndoIcon} alt='Undo-Icon' />
                        <img src={StarIcon} alt='Star-Icon' />
                    </div> */}
                    </div>
                        <DetailMessage detail={detail} />
                </div>
            </div>
        </>
    )
}

export default Details;