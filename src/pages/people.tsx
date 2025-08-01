import React from "react";
import Navbar from '../components/navbar';
import Footer from "../components/footer"
import "../App.css"
import img1 from "../assets/name1.jpg"
import img2 from "../assets/name2.jpg"
import img3 from "../assets/name3.jpg"



const People : React.FC = () => {
  return (
    <>
    <Navbar/>
     <div className="gst-content">
        <h1 style={{ textDecoration: "underline", marginBottom: "15px",alignContent:"center" ,fontSize:"40px"}} >
          People
        </h1>

        <div className="regulatory">
        <h1 >1.GUPTESHWAR SHAH</h1>
        <img src={img3} alt="Img1" style={{ width: '220px', height: 'auto' }} />
        
        <p><strong>Gupteshwar shah is the Founder and Managing Partner of Lawfic tax practice (LTP).</strong></p>
        <p><strong>ABOUT GUPTESHWAR SHAH</strong></p>
        <p>Education-Bsc Life Sciences (University of Delhi)
		| LLB (Campus Law Center, University of Delhi)
		| Post Graduate Diploma in Intellectual Property Rights
</p>
<p>Gupteshwar shah advises companies in all areas of taxation, including International Taxation and Transfer Pricing, Goods and Services Tax (GST), Customs, Excise, Service Tax, Value Added Tax (VAT), Foreign Trade Policy, and Special Economic Zones, offering consulting, advisory, litigation and compliance services. He has also successfully represented clients from many countries in several anti-dumping, subsidy and trade investigations initiated by India. His expertise in handling cross border matters and related party transactions is widely recognized.</p>
<p><strong>He has experience of more than ten years in serving customs and excise department (GST). He has vide knowledge of working of laws and procedures and rules.</strong></p>
         <p>He has represented his clients before adjudicatory authorities in customs and GST department also he appears at CESTAT and High Courts and Supreme Court.</p>
          <h1>2.PARVIND KUMAR</h1>
           <img src={img1} alt="Img3" style={{ width: '220px', height: 'auto' }} />
          <p><strong>Parvind Kumar is the Founder and Managing Partner of Lawfic tax practice (LTP).</strong></p>
          <p><strong>ABOUT PARVIND KUMAR</strong></p>
          <p>Education-Bsc Electronics (University of Delhi)
		| LLB (Campus Law Center, University of Delhi)</p>
          <p>Parvind Kumar advises companies in all areas of taxation, including International Taxation and Transfer Pricing, Goods and Services Tax (GST), Customs, Excise, Service Tax, Value Added Tax (VAT), Foreign Trade Policy, and Special Economic Zones, offering consulting, advisory, litigation and compliance services. He has also successfully represented clients from many countries in several anti-dumping, subsidy and trade investigations initiated by India. His expertise in handling cross border matters and related party transactions is widely recognized.
He has represented his clients before adjudicatory authorities in customs and GST department also he appears at CESTAT and High Courts and Supreme Court.
</p>
<h1>3.ANJALI SHAH</h1>
<img src={img2} alt="Img2" style={{ width: '220px', height: 'auto' }} />
<p><strong>Anjali shah is the Founder and Managing Partner of Lawfic tax practice (LTP).</strong></p>
<p><strong>ABOUT ANJALI SHAH</strong></p>
<p>Education- Bsc Physics (H) (Miranda House College, University of Delhi)
		| LLB (Campus Law Center, University of Delhi)
		| Post Graduate Diploma in Intellectual Property Rights
</p>
<p>Anjali shah advises companies in all areas of taxation, including International Taxation and Transfer Pricing, Goods and Services Tax (GST), Customs, Excise, Service Tax, Value Added Tax (VAT), Foreign Trade Policy, and Special Economic Zones, offering consulting, advisory, litigation and compliance services. She has also successfully represented clients from many countries in several anti-dumping, subsidy and trade investigations initiated by India. Her expertise in handling cross border matters and related party transactions is widely recognized.</p>
<p>She has experience of more than ten years in serving customs and excise department (GST). SHe has vide knowledge of working of laws and procedures and rules.</p>
<p>She has represented her clients before adjudicatory authorities in customs and GST department also he appears at CESTAT and High Courts and Supreme Court.</p>










        </div>
      </div>
     
    
    <Footer/>
    </>
  );
};


export default People;

