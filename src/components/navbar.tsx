import React from "react";
import websiteLogo from "../assets/imagen.png"

import { Link } from 'react-router-dom';




const Navbar : React.FC = () => {

    return (
        <div className="navbar-container">
  <div className="navbar-logo">
    <Link to="/">
      <img src={websiteLogo} alt="Logo" />
    </Link>
  </div>
            <div className="list-items">
                <ul className="navbar-list-items">
                    <li><Link to="/People">PEOPLE</Link></li>
                    <li className="dropdown">
                    <li>PRACTICES</li>
                    <ul className="dropdown-menu">
                        
                       
                        <li> <Link to="/practices/gst">Goods And Services Tax</Link> </li>
                        <li><Link to="/practices/customs">Customs</Link></li>
                        <li><Link to="/practices/intellectual_property">Intellectual Property</Link></li>
                        <li><Link to="/practices/economic_offences">Economic Offences</Link></li>
                        <li><Link to="/practices/wto">WTO</Link></li>
                    </ul>
                </li>
                    <li className="dropdown">
                        <span className="nav-link">INSIGHTS</span>
                        <ul className="dropdown-menu">
                        <li><Link to="/focus">In Focus</Link>
                        </li>
                        </ul>
                    </li>
                   
                    <li>
                        <Link to="/#about-us">ABOUT US</Link>
                    
                     
                    </li>
                    
                    
                </ul>
                
            </div>
           
             
        </div>


    )

}
export default Navbar;