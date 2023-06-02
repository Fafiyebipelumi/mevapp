import React, { useState } from 'react';
import Papa from 'papaparse';
import '../styles/InputCSV.css';

const InputCSV = ({ setRecipients, setCsv }) => {

    const [emails, setEmails] = useState([])

    const handleFileUpload = (e) => {
        const file = e.target.files[0];
        // console.log(file);
        const reader = new FileReader()
        reader.onload = () => {
            const emailRegex = /\S+@\S+\.S+/;
            const lines = reader.result.split('\n');
            const extractedEmails = lines
            .map(line => line.split(',')[0])
            .filter(email => emailRegex.test(email));
            setEmails(extractedEmails)
        }
        // Papa.parse(file, {
        //     header: true,
        //     complete: (result) => {
        //         const emailRegex = /\S+@\S+\.S+/;
        //         const extractedEmails = result.data
        //         .filter((row) => emailRegex.test(row.email))
        //         .map((row) => row.email)
        //         setEmails(extractedEmails)
        //         // console.log(allEmails);
        //     }
        // })
    }

    // const handleFileChange = (e) => {
    //     const file = e.target.files[0]
    //     console.log(file); 
    //     const type = file.type
    //     if (type === 'text/csv') {
    //         setCsv(file)
    //     }
    // }

    // const handleFileChange = (e) => {
    //     console.log(e.target.files[0])
    //     Papa.parse(e.target.files[0], {
    //         header: true,
    //         skipEmptyLines: true,
    //         complete: function (results) {
    //             console.log(results.data);
    //         }
    //     })
    // }

    return (
        <div>
            <label htmlFor='csvInput' style={{ display: 'block' }}>
                Enter CSV file
            </label>
            <div className='input-csv'>
                <input
                    name='file'
                    type='file'
                    accept='.csv'
                    onChange={handleFileUpload}
                    className='custom-file-input'
                />
                {/* <div>
                    <button style={{ padding: '10px', backgroundColor: '#000', color: '#fff', cursor: 'pointer' }}>Submit</button>
                    onClick={handleParse}
                </div> */}
            </div>
            {/* <span>1</span>
            <span>2</span>
            <span>3</span>
            <span>4</span> */}
            {/* <div style={{ marginTop: '2rem' }}>
                {error ? error : data.map((col, idx) => (
                    <div key={idx}>{col}</div>
                ))}
            </div> */}
        </div>
    )
}

export default InputCSV;




// const [data, setData] = useState([])
// const [error, setError] = useState('')
// const [file, setFile] = useState('')

// const handleFileChange = (e) => {
//     setError('')
//     if (e.target.files.length) {
//         const inputFile = e.target.files[0];
//         const fileExtension = inputFile?.type.split('/')[1]

//         if (!allowedExtensions.includes(fileExtension)) {
//             setError('Please input a csv file');
//             return;
//         }
//         setFile(inputFile);
//     }
// }

// const handleParse = () => {
//     if (!file) return setError('Enter a valid file')

//     const reader = new FileReader();
//     reader.onload = async ({ target }) => {
//         const csv = Papa.parse(target.result, { header: true })
//         const parsedData = csv?.data;
//         const columns = Object.keys(parsedData[1])
//         setData(columns);
//     };
//     reader.readAsText(file);
// }
