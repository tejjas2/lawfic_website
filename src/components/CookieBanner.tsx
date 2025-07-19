import React, { useEffect, useState } from 'react';
import "../App.css"

const CookieBanner: React.FC = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const accepted = localStorage.getItem('cookieConsent');
    if (!accepted) setVisible(true);
  }, []);

  const handleAccept = () => {
    localStorage.setItem('cookieConsent', 'true');
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div className="cookie-banner">
        

      <p><strong>
        The rules of the Bar Council of India prohibit law firms from advertising and soliciting work through communication in the public domain. This website is meant solely for the purpose of information and not for the purpose of advertising. Lawfic Tax Practice does not intend to solicit clients through this website. We do not take responsibility for decisions taken by the reader based solely on the information provided in the website. By clicking on ‘I Agree’, the visitor acknowledges that the information provided in the website (a) does not amount to advertising or solicitation and (b) is meant only for his/her understanding about our activities and who we are.

By continuing to use this site you consent to the use of cookies on your device as described in our Cookie Policy{" "}
        </strong>
      </p>
      <button onClick={handleAccept}>I Agree</button>
      
    </div>
  );
};

export default CookieBanner;
