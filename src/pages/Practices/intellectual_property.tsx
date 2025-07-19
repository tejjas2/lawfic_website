import React from "react";
import Navbar from "../../components/navbar";
import "../../App.css"
import Footer from "../../components/footer";
import gstImg from "../../assets/intellectual.jpg"


const imgStyle: React.CSSProperties = {
  width: '100vw',
  height: '85vh',
};

const Gst: React.FC = () => (
  <>
    <Navbar />
    <div className='carousel'>
      <img src={gstImg} alt="Main Slide" style={imgStyle} />
      <div className="info-container">
        <h1>Intelluctual Property</h1>
      </div>
    </div>
    <div className="gst-content">
        <h1>
          The dynamic Intellectual Property regime in India requires specialised knowledge and skill-set. With a multi-faceted R&D team of professionals and lawyers, the Intellectual Property practice vertical in Lawfic Tax Practices (LTP) is equipped to provide comprehensive services to clients.
        </h1>

        <div className="gst-columns">
          <div className="gst-column">
            <p>National legislations on intellectual property (IP) vary significantly, be it for protection, prosecution, infringement or revocation. Thus, a robust intellectual property strategy which includes effective solutions is sine qua non to a host of industries: from chemical and bio-pharma, to information technology, electronics, automotive engineering or bio-technology.</p>
          </div>
          <div className="gst-column">
            <p>The Intellectual Property Team serves Indian and global businesses to obtain and enforce intellectual property - patents, trademarks, design and copyright by assisting in filing, prosecution, registration, licensing, valuation and defending rights against infringement.</p>
          </div>
          <div className="gst-column">
            <p>The experts and attorneys at LTP have the experience in dealing across sectors and understand the importance of giving customised solutions.</p>
          </div>
        </div>
      </div>
      <div className="services-section">
        <h1>Intellectual Property at LTP</h1>
        <p>
          Multi-disciplinary expertise (ranging across different fields like law, science, and engineering) and skills (including drafting and formulating the best Intellectual Property strategy) are necessary to obtain and protect intellectual property and maximize the value derived from them. A patent agent, a litigator or technical advisor should necessarily have an Intellectual Property-focussed approach in understanding and executing his responsibilities.
          <br /><br />
          Services provided by LTP include opining on patentability, patenting, filing, prosecution, pre and post grant opposition, freedom-to-operate, due diligence, patent watch, evolving effective patent strategy, trademark registration and protection, anti-trust, plant variety protection (PVP) and licensing of copyright to name a few.
        </p>
        <p>IP Licenses affecting IP assets are essential to leverage their underlying value. An effective licensing strategy may enhance the IP value. LTP Licensing team handle a variety of IP licensing and technology agreements for organizations ranging from start-ups, to multinational corporations/established businesses. The LTP attorneys are able to able to utilize their deep understanding of the underlying technology along with their understanding of the businesses.</p>
        <p>As one of the leaders in securing IP protection in India, the IP Litigation team ensures that the IP of clients is protected against unauthorized use. The IP Litigation team at LTP possesses deep expertise and experience across a wide technology area. Coupled with a robust industry knowledge and up-to-date legal expertise, the IP Litigation team guides and advises clients as to how their IP interests can be effectively enforced.</p>
        <p>The Intellectual Property team provides assistance on the following areas of IP:</p>
        <ul className="services-list">
          <li>Patents</li>
          <li>Trademarks</li>
          <li>Copyrights</li>
          <li>Designs</li>
          <li>Plant Variety Protection</li>
          <li>Regulatory</li>
          <li>Geographical Indications</li>
        </ul>
      </div>
      {/* Industry Updates Section */}

    
  <Footer/>
  </>
);

export default Gst;