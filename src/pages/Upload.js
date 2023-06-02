import axios from 'axios';
import React, { useState } from 'react';

const Upload = () => {
    const [imageSelected, setImageSelected] = useState('');

    const handleUploadImage = () => {
        const formData = new FormData()
        formData.append('file', imageSelected)
        formData.append('upload_preset', 'zrk4koq6')

        axios.post('https://api.cloudinary.com/v1_1/dm0pr113t/image/upload', formData)
            .then(response => {
                console.log(response);
            })
    }

    return (
        <div>
            <input type='file' onChange={(e) => setImageSelected(e.target.files[0])} />
            <button onClick={handleUploadImage}>Upload</button>
        </div>
    )
}

export default Upload;