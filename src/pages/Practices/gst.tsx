import React from "react";
import Navbar from "../../components/navbar";
import "../../App.css"
import Footer from "../../components/footer";
import gstImg from "../../assets/gst (2).jpg"


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
        <h1>Goods and Services Tax</h1>
      </div>
    </div>

    <div className="gst-content">
      <h1>
        Historically, India divided the power to tax various transactions between the Union and the States. This was especially true about indirect taxes such as excise, services tax, sales tax and value added tax. This resulted in different taxes being applied by the Central and State tax departments on sales and services transactions.
      </h1>

      <div className="gst-columns">
        <div className="gst-column">
          <p>The taxes were not deductible against each other and varied in rates of tax, compliance requirements and assessment procedures. Apart from double taxation, the system created several artificialities within business to ensure tax efficiencies.</p>
        </div>
        <div className="gst-column">
          <p>These taxes were replaced by a uniform Goods and Services Tax (GST) regime in July 2017. Though the regime implemented by India is complicated compared to regimes in other countries (Union and the States both tax the transaction but in the same manner), it has ensured most transactions are tax neutral and has allowed most companies to focus on their business rather than tax efficiency models.</p>
        </div>
        <div className="gst-column">
          <p>However, being a new regime, there are several outstanding issues that needs redressals such as transition procedures, intangibles, anti-profiteering, backward area exemptions & incentives, classification, refunds, input credits, tripartite contracts, transaction in securities, loyalty programs, trade promotion schemes, subvention income, securitization, and other issues.</p>
        </div>
      </div>
    </div>

    <div className="services-section">
      <h1>Goods and Services Tax at LTP</h1>
      <p>
        The GST team at the firm provides comprehensive services in this area. These include providing services relating to GST returns and assessments, GST advisory, tax compliance reviews, contract reviews, due diligence and litigation. Our attorneys also advise taxpayers on issues arising from restructuring of the supply chain following GST implementation.
        <br /><br />
        In the area of litigation, our team represents clients from departmental authorities and tribunals to High Court and Supreme Court. We also appear before the Advance Ruling Authorities to seek rulings for clients in relation to their business transactions. Our team has rich experience in this area having represented clients both in the previous indirect tax regime and the new GST regime.
      </p>
      <p>The Goods and Services tax team provides assistance on the following:</p>
      <ul className="services-list">
        <li>GST Advisory</li>
        <li>GST Transition</li>
        <li>GST Training</li>
        <li>GST Review</li>
      </ul>
    </div>

    {/* Industry Updates Section */}
    
    <Footer/>
  </>
);

export default Gst;
