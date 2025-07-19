import React from "react";
import Navbar from "../../components/navbar";
import "../../App.css"
import Footer from "../../components/footer";





const Contact: React.FC = () => (
  <>
    <Navbar />
    
    <div className="gst-content">
        <h1>
          Contact Us
        </h1>

        <div className="regulatory">
        <p>We have a centralised system for managing mails for Intellectual Property (IP) practice. For Your IP related queries mail at <strong>lawfictaxpractice@gmail.com</strong> or contact us at <strong>+91-8104457555</strong></p>
        <p>Location- Delhi & NCR, Mumbai, Chennai, Kolkata, Bangaluru, Ahemadabad, Jaipur, Prayagraj</p>
          
        </div>
      </div>
     
      

    
  <Footer/>
  </>
);

export default Contact;