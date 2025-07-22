import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import People from './pages/people';

import Gst from './pages/Practices/gst';
import Customs from './pages/Practices/customs';
import Intellectual_property from './pages/Practices/intellectual_property';
import Economic_offences from './pages/Practices/economic_offences';
import Wto from './pages/Practices/wto';
import ScrollToHash from './components/ScrollToHash';
import Privacy from './pages/Practices/privacy';
import Terms from './pages/Practices/terms';
import Cookie from './pages/Practices/cookie';
import Regulatory from './pages/Practices/regulatory';
import CookieBanner from './components/CookieBanner'; 
import Contact from './pages/Practices/contact';
import Focus from './pages/Practices/focus'



const App: React.FC = () => {
  return (
    <Router>
      <ScrollToHash />
      <CookieBanner />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/people" element={<People />} />
        <Route path="/Practices/gst" element={<Gst />} />
        <Route path="/Practices/customs" element={<Customs />} />
        <Route path="/Practices/intellectual_property" element={<Intellectual_property />} />
        <Route path="/Practices/economic_offences" element={<Economic_offences />} />
        <Route path="/Practices/wto" element={<Wto />} />
        <Route path="/privacy" element={<Privacy />} />
        <Route path="/terms" element={<Terms />} />
        <Route path="/cookies" element={<Cookie />} />
        <Route path="/regulatory-disclosures" element={<Regulatory />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/focus" element={<Focus/>}/>
        
        
      </Routes>
    </Router>
  );
};

export default App;
