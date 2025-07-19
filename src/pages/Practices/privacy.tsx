import React from "react";
import Navbar from "../../components/navbar";
import "../../App.css"
import Footer from "../../components/footer";



const Privacy: React.FC = () => (
  <>
    <Navbar />
   <div className="gst-content">
        <h1>
          Privacy and Security
        </h1>

        <div className="regulatory">
        <p>All the data including the name, email ids and telephone numbers or even (collectively referred to as the ‘Personal Data’), which has either been collected by LTP during the course of creation of an attorney client relationship, or voluntarily submitted by a user on this website, will be kept confidential and protected by using reasonable technical and organisational measures. The Personal Data shall however be processed and be solely utilised for the purpose of sending the LTP newsletters on a monthly basis, or for sharing any legal updates and knowledge-based resources and information from time to time (collectively referred to as the ‘Legal Information’). The Personal Data shall not be shared by LTP with any third person without the consent of the concerned person. However, for the purpose of enabling the dissemination of the Legal Information, the Personal Data shall be shared by LTP with third parties including our related parties (‘Authorised Third Parties’), who provides LTP with the required technical facility.</p>
        <p>The recipients of the Legal Information may at any time opt out and request LTP for the deletion or restricted use of their Personal Data from the LTP database by clicking on the ‘unsubscribe’ button (‘Withdrawing Recipient’) present in the subscription page. Upon the receipt of such request, LTP shall with immediate effect delete the Personal Data of the Withdrawing Recipient from its database, after which, the Withdrawing Recipient shall stop receiving the Legal Information. LTP shall in such a case also contractually ensure that the Authorised Third Parties follow suit and delete the Personal Data of the Withdrawing Recipient from its own database</p>
        <p>It is hereby clarified that LTP and its Authorised Third Parties shall continue to retain the Personal Data of the recipients of the Legal Information, until a request for withdrawal is specifically received by LTP</p>
        
          
        </div>
      </div>
     
    
  <Footer/>
  </>
);

export default Privacy;