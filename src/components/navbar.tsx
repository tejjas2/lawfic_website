import React from "react";
import websiteLogo from "../assets/image.png"
import SearchIcon from '@mui/icons-material/Search';
import LanguageIcon from '@mui/icons-material/Language';
import { Link } from 'react-router-dom';




const Navbar : React.FC = () => {

    return (
        <div className="navbar-container">
            <Link to="/">
            <img src={websiteLogo} alt="Logo" style={{ height: '115px', width: 'auto' }} />
            </Link>
            <div className="list-items">
                <ul className="navbar-list-items">
                    <li><Link to="/People">PEOPLE</Link></li>
                    <li className="dropdown">
                    <Link className="nav-link" to="/practices">PRACTICES</Link>
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
                           
                            <li><Link to="/bis">Articles</Link></li>
                            <li><Link to="/banking-finance">Newsletters</Link></li>
                            
                        </ul>
                    </li>
                    <li className="dropdown">
                        <span className="nav-link">NEWSROOM</span>
                        <ul className="dropdown-menu">
                            <li><Link to="/arbitration">News & Briefings</Link></li>
                            <li><Link to="/bis">Events</Link></li>
                        </ul>
                    </li>
                    <li>
                        <Link to="/#about-us">ABOUT US</Link>
                    
                     
                    </li>
                    <li><Link to="/#">CAREERS</Link></li>
                    
                </ul>
                <SearchIcon style={{ color: 'darkblue', cursor: 'pointer' }} />
            </div>
            <div className="vertical-line"> | </div>
            <div className="navbar-right-language-toggles">
            <LanguageIcon style={{ fontSize: 24, color: '#555', cursor: 'pointer' }} />
            <span>ENGLISH</span>

            </div>
             
        </div>


    )

}
export default Navbar;