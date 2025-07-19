 import React from "react";
import Navbar from "../../components/navbar";
import "../../App.css"
import Footer from "../../components/footer";
import gstImg from "../../assets/wto.jpg"


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
        <h1>International Trade & WTO</h1>
      </div>
    </div>
    <div className="gst-content">
        <h1>
          Our globally ranked international trade practice is one of the oldest in India, and has dealt with trade remedy investigations in multiple jurisdictions. The team also handles advisory and consultancy services on all aspects of WTO law.
        </h1>

        <div className="gst-columns">
          <div className="gst-column">
            <p>Black's Law Dictionary defines International Trade as the exchange of goods or services between nations. While nations may agree in principle to free trade and market access, considerations like protecting local industry and negating unfair pricing make them resort to trade remedies. WTO compliant trade remedies (such as anti-dumping duties, subsidies and countervailing measures and safeguard duties) are being used by member nations and have far reaching implications for the importer and exporter. </p>
          </div>
          <div className="gst-column">
            <p>As WTO agreements have been embraced by almost every nation, complying with their provisions requires a good understanding of GATT and all its covered agreements.
Industries require assistance in initiation of measures to move the concerned government to raise a dispute before the WTO Dispute Settlement Body, in order to seek appropriate relief and identification of issues that can be raised before the WTO.
</p>
          </div>
          <div className="gst-column">
            <p>Advisory services cover areas like market access, domestic subsidies, Agreement on Agriculture, Customs Valuation Agreement, GATS, TRIPS, TRIMS, Free Trade Agreements, etc.</p>
          </div>
        </div>
      </div>
      <div className="services-section">
        <h1>International Trade & WTO at LTP</h1>
        <p>
         Lawfic Tax Practices (LTP) International Trade and WTO practice was started in the 90s and is the earliest such practices in law firms in India. The practice has grown significantly since India introduced formal procedures for trade remedies in 1995. Today, LTP has one of the largest dedicated Trade teams in the country with specialist professionals comprising lawyers, chartered accountants, economists and engineers as well as professionals having dual qualifications in one or more of these fields.
          <br /><br />
          Over the last two decades, the team has accumulated knowledge and experience, by successfully representing governments, Indian producers, foreign producers/exporters as well as Indian users and importers before the Indian investigating authority as well as investigating authorities in foreign jurisdictions.
        </p>
        <p>This broad portfolio of representation enables the team to have a holistic understanding of the investigative process. Having handled more than 350 trade remedy investigations dealing with anti-dumping, anti-subsidy and safeguards, in India as well as other jurisdictions like Australia, Brazil, Canada, China, European Union, Indonesia, Mexico, Pakistan, Russia, South Africa, Thailand, Turkey and the United States– the team is recognized for its expertise in the area of trade remedial investigations and disputes.</p>
        <p>Our lawyers are well-versed with the intricacies of WTO law, free trade agreements, generalised system of preferences (GSP), customs and other trade policy instruments, regularly offering advisory and consultancy services to domestic as well as multinational companies and trade associations. We have successfully represented India and other countries in the WTO dispute settlement process and continue to advise governments with respect to WTO issues of compliance.
Being vertically integrated with other specialised teams which exclusively handle litigation, the team delivers complete solutions right from the scratch.
</p>
        <p>The International Trade team provides assistance on the following:</p>
        <ul className="services-list">
          <li>Anti-Dumping/Subsidy Investigations</li>
          <li>Advisory and Litigation assistance in Multilateral Agreements</li>
          <li>Foreign Trade Policy</li>
          <li>Special Economic Zones</li>
          <li>Free Trade Agreements (FTAS)</li>
        </ul>
      </div>
      
  <Footer/>
  </>
);

export default Gst;