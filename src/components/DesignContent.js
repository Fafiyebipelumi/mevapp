// import React from 'react'
// import '../styles/DesignContent.css';
// import RichTextImage from '../assets/text.png';
// import { Link } from 'react-router-dom';
// import RichText from './RichText';

// function DesignContent({ message, setMessage, handleSubmit }) {
//     const uuid = localStorage.getItem('campUUID')

//     const handleDesignOption = () => {
//         return <RichText />
//     }

//     return (
//         <div className='design-content'>
//             <div className='template'>
//                 <h3>Rich Text Editor</h3>
//                 <img src={RichTextImage} alt='' />
//                 <Link to={`/content/${uuid}/rich-text`}><button onClick={handleDesignOption}>Select</button></Link>
//             </div>
//             <div className='template'>
//                 <h3>HTML Template</h3>
//                 <img src='' alt='' />
//                 <Link to={`/content/${uuid}/html-text`}><button>Select</button></Link>
//             </div>
//         </div>
//     )
// }

// export default DesignContent;