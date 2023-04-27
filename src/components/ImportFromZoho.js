import React, { useState } from "react";
import '../styles/ImportFromZoho.css';
import { FaCaretDown } from "react-icons/fa";

const ImportFromZoho = () => {
    const [isActive, setIsActive] = useState(false);
    const [useTables, setUseTables] = useState(false);

    const handleGetTemplatesFromZoho = () => {
        setUseTables(!useTables)
    }

    return (
        <div className='zoho-wrapper'>
            <div className='zoho'>
                <div className='zoho-btn' onClick={(e) => setIsActive(!isActive)}>
                    Import From Zoho Recruit
                </div>
                {isActive && (
                    <div className='zoho-content'>
                        <div className='zoho-item' style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }} onClick={handleGetTemplatesFromZoho}>
                            Choose Templates
                            <FaCaretDown />
                        </div>
                        {useTables && (
                            <>
                                <div>Template 1</div>
                                <div>Template 2</div>
                                <div>Template 3</div>
                                <div>Template 4</div>
                            </>
                            // <div className='zoho-templates'>
                            //     {isLoading && <img src={Loading} alt='Loading' />}
                            //     {error && <span>{error}</span>}
                            //     {!tableEmails ? 'No Tables Found ' : tableEmails.map((tableEmail) => (
                            //         <DisplayTableEmail tableEmail={tableEmail} key={tableEmail.id} setRecipients={setRecipients} />
                            //     ))}
                            // </div>
                        )}
                        {/* <div className={!useTables ? 'dropdown-item' : 'dropdown-none'} onClick={(e) => setUseCSV(!useCSV)}>
                            Upload email in CSV files
                        </div>
                        {useCSV && (
                            <InputCSV setRecipients={setRecipients} setCsv={setCsv} />
                        )} */}
                    </div>
                )}
            </div>
        </div>
    )
}

export default ImportFromZoho;