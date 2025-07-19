import React from "react";
import Navbar from "../../components/navbar";
import "../../App.css"
import Footer from "../../components/footer";
import gstImg from "../../assets/intel.jpg"


const imgStyle: React.CSSProperties = {
  width: '100vw',
  height: '76vh',
  
};

const Gst: React.FC = () => (
  <>
    <Navbar />
    <div className='carousel'>
      <img src={gstImg} alt="Main Slide" style={imgStyle} />
      <div className="info-container">
        <h1>Economic Offences</h1>
      </div>
    </div>
    <div className="gst-content">
        <h1>
          Economic Offences Laws/White-collar crime team at LTP specializes in navigating complex litigation matters and providing robust investigations and advisory support. Comprising seasoned lawyers and chartered accountants, our team has in-depth knowledge and unparalleled expertise in laws related to financial crimes.
        </h1>

        <div className="gst-columns">
          <div className="gst-column">
            <p>In addition to an array of services, our team offers comprehensive support in due diligence, compliance management, risk mitigation strategies and other advisory support.</p>
          </div>
          <div className="gst-column">
            <p>The team is committed to not only providing solutions but also empowering clients with the latest insights to protect them from potential risks. </p>
          </div>
          <div className="gst-column">
            <p>To achieve this, our team actively works with clients, industry associations, chambers, trade groups, and other thinktanks to disseminate knowledge on the evolving landscape of economic offences laws. The team also interacts with policy makers in the government to advocate progressive changes in the laws.</p>
          </div>
        </div>
      </div>
      <div className="services-section">
        <h1>Economic Offences at LTP</h1>
        <p>
          Our team has a wealth of experience in handling domestic investigations and collaborates with global law firms to provide comprehensive solutions to clients in cross border investigations.


          <br /><br />
          
        </p>
        <p>We provide handholding and litigation support to our clients in investigations conducted by various Indian agencies like:</p>
        <ul className="services-list">
          <li>Enforcement Directorate (ED) under Foreign Exchange (FEMA) and Prevention of Money Laundering (PMLA) laws</li>
          <li>Serious Fraud Investigation Office (SFIO) under the Companies law</li>
          <li>Income Tax Department under the Income tax, Black Money and Benami laws</li>
          <li>Ministry of Home Affairs (MHA) under the Foreign Contribution (Regulation) Act (FCRA)</li>
        </ul>
      </div>
        <div className="services-section">
        <h1>Service Offerings</h1>
        <p><strong>Investigation Handholding and Support</strong> 
          
        </p>
        <p>Our team boasts of extensive experience in providing comprehensive support during investigations conducted by a multitude of authorities.</p>
        <p><strong>Litigation</strong></p>
        
        <p>We have an in-house team to handle litigation related to white-collar crimes. The team represents clients before quasi-judicial/statutory authorities, tribunals, High courts and Supreme Court. We prepare the case from the first level of litigation to the higher courts to ensure a uniform strategy with relevant factual evidence and legal arguments to support the case.</p>
        <p><strong>Due Diligence, Advisory Support and Risk Mitigation Strategies</strong></p>
        <p>The team specializes in providing expert support in conducting due diligence, compliance management and implementing risk mitigation strategies under white-collar crime laws. We assist our clients in proactively identifying and rectifying non-compliances and contraventions across various laws, ensuring a smooth compliance and regularization process. Additionally, we offer tailored advisory support to help clients adopt effective risk mitigation strategies, thereby minimizing potential exposure during investigations.</p>
      </div>

      
  <Footer/>
  </>
);

export default Gst;