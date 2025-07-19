import React from "react";
import Navbar from "../../components/navbar";
import "../../App.css"
import Footer from "../../components/footer";





const Regulatory: React.FC = () => (
  <>
    <Navbar />
    
    <div className="gst-content">
        <h1>
          Regulatory Disclosures
        </h1>

        <div className="regulatory">
        <p>Lawfic tax practice is a partnership firm of advocates constituted under the laws of India. The advocates retained by the law firm are governed by the Advocates Act, 1961 and are registered with the Bar Council of India in the relevant States. The conduct of the firm and the advocates are also regulated by the rules and regulations laid down by the Bar Council of India, the regulatory body for Advocates in India.</p>
        <p>The firm also retains the services of other professionals such as Chartered Accountants, Cost Accountants, Company Secretaries, Patent Agents, Trade Mark Agents, Engineers and other similarly qualified professionals. These professionals are governed by the relevant laws and rules framed under the respective Acts. The professionals work closely with advocates at the firm and under the direction of the Partner concerned at the firm.</p>
        <p>All the professionals, advocates and others, maintain the highest levels of ethics and professional conduct as expected under rules and regulations laid down under the Advocates Act, 1961 by the Bar Council of India. In addition, the professionals enter into a non-disclosure agreement with the firm to ensure the highest client confidentiality.</p>
        <p>This website has been prepared in line with the rules and regulations laid down by the Bar Council of India and does not seek to advertise or solicit work through public domain. This website is meant solely for information and the firm takes no responsibility for decisions taken by the readers or users or visitors on the basis of the information provided in this website.</p>
         <p>Visitors to this website may please write to lawfictaxpractice@gmail.com in case of any queries relating to the Legal and Regulatory Information pertaining to the law firm.</p>
          
        </div>
      </div>
     
      

    
  <Footer/>
  </>
);

export default Regulatory;