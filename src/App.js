import React, { useState } from 'react'
import './App.css';
import { Routes, Route } from 'react-router-dom';
import { EmailWelcome } from './components/EmailWelcome';
import MessagingOption from './components/MessagingOption';
import Campaign from './pages/Campaign';
import Upload from './pages/Upload';
import CampaignDetails from './components/CampaignDetails';
import CreateOptions from './components/CreateOptions';
// import RichText from './components/RichText';
// import HtmlText from './components/HtmlText';
// import CreateSidebar from './components/CreateSidebar';

function App() {

  const [loading, setLoading] = useState(true);

  const spinner = document.getElementById('spinner')

  if (spinner) {
    setTimeout(() => {
      spinner.style.display = 'none'
      setLoading(false)
    }, 1000)
  }

  return (
    !loading && (
      <Routes>
        <Route exact path='/' element={<MessagingOption />} />
        <Route path='/welcome' element={<EmailWelcome />} />
        <Route path='/campaign' element={<Campaign />} />
        <Route path='/campaign/:uuid' element={<CampaignDetails />} />
        <Route path='/create/:uuid' element={<CreateOptions />} />
        <Route path='/upload' element={<Upload />} />
        {/* <Route path='/content/:uuid/rich-text' element={<RichText />} />
        <Route path='/content/:uuid/html-text' element={<HtmlText />} /> */}
      </Routes>
    )
  );
}

export default App;