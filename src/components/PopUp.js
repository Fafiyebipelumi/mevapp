import React from 'react';
import '../styles/PopUp.css';
// import { AiOutlineExclamationCircle } from 'react-icons/ai'
// import { Scrollbars } from 'react-custom-scrollbars';

const MODAL_STYLE = {
    position: 'fixed',
    top: '10%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    // backgroundColor: '#fff',
    // padding: '50px',
    zIndex: 1000
}

const OVERLAY_STYLE = {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.7)',
    zIndex: 1000
}

const PopUp = ({ children, isOpen, onClose }) => {
    if (!isOpen) return null
    return (
        <>
            {/* <Scrollbars> */}
                <div style={OVERLAY_STYLE} />
                <div style={MODAL_STYLE}>
                    <button onClick={onClose}>Close</button>
                    {children}
                </div>
            {/* </Scrollbars> */}
        </>
    )
}

export default PopUp;