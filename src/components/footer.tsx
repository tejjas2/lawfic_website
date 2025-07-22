import React from 'react';
import "../App.css"
import { Link } from "react-router-dom";


const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="footer-links">
        {/* Column 1: Legal Links */}
        <div className="footer-column">
            <Link to="/regulatory-disclosures">Regulatory Disclosures</Link>
            <Link to="/privacy">Privacy and Security</Link>
            <Link to="/terms">Terms of Use</Link>
            <Link to="/cookies">Cookie Policy</Link>
            
            
        </div>

        {/* Column 2: Social Media */}
        <div className="footer-column">
          <a   href="https://www.facebook.com/share/1AaXCe1jxY/"
    target="_blank"
    rel="noopener noreferrer">Facebook</a>
            <a
    href="https://www.linkedin.com/in/gupteshwar-shah-23a345289?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
    target="_blank"
    rel="noopener noreferrer"
  >LinkedIn</a>
          <a href="https://www.instagram.com/p/DMPfwg1NpLx/?igsh=MWR3dWlhaXg4ajh0cQ=="
    target="_blank"
    rel="noopener noreferrer">Instagram</a>
          <a href="#">+91-8104457555</a>
          <a href="https://wa.me/message/35WEMIK77H33N1 " target="_blank" rel="noopener noreferrer">WhatsApp</a>
        </div>
        

        {/* Column 3: Company */}
        <div className="footer-column">
          <Link to="/#about-us">About Us</Link>
           <Link to="/contact">Contact Us</Link>
        </div>

        {/* Column 4: Newsletter */}
        <div className="footer-newsletter">
          <h4>LTP NEWSLETTERS</h4>
          <input type="email" placeholder="your work email here" />
          <button>SUBSCRIBE</button>
        </div>
      </div>

      {/* Bottom copyright */}
      <div className="footer-bottom">
       Lawfic Tax Practice, All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;
