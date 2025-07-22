import React from 'react';
import { Carousel } from 'antd';
import Navbar from '../components/navbar';
import "../App.css"
import Footer from "../components/footer"
import img from "../assets/gst (2).jpg"




const imgStyle: React.CSSProperties = {
  width: '99vw',
  height: '82vh',
//   objectFit: 'cover',
};

const Home: React.FC = () => (
    <>
    
    <Navbar/>
  <Carousel>
    <div className='carousel'>
        <img src={img} alt="Slide 1" style={imgStyle} />
       
    </div>
    

  </Carousel>

  <div className="about-us-section" id="about-us">
    <h2 style={{ textDecoration: "underline", marginBottom: "8px" }}>What we do</h2>
   <div className='inner-content'>
    <p>Lawfic Tax Practice is a full-service law firm based in India. 
      The firm provides services of professionals in more than 14 locations across India with presence in every major city specializing 
      in areas such as customs law, Goods and Services Tax (GST), economic offences (FERA and FEMA), Intellectual property rights,
       WTO, Exam Policy, etc. We work with a variety of clients-start-up, small and medium enterprises, large Indian corporates and multinational companies.
        We implement our knowledge of the law with industry experience to design legal solutions that our clients can implement.</p>
   </div>
   <h2 style={{ textDecoration: "underline", marginBottom: "8px" }}>Who We Are</h2>
   <div className='inner-content'>  
    <p>We are a team of lawyers who are expert in 
      their niche areas, some of our team members have experience of more than ten years of working in customs 
      and GST department as govt. officers at major ports, airports and GST offices, which makes them aware about the legal 
      and technical issues faced by our clients in course of their trade such as import, export, etc. We have a team of diverse 
      people, many of our team members are dual qualified having studied science, engineering or accounting as their primary 
      qualification. A diverse mix of knowledge, experience and domain expertise allows the firm to collaborate effectively, 
      addresses areas where law combines with technology or accounting and design solutions for the client. </p>
   </div>
   <h2 style={{ textDecoration: "underline", marginBottom: "8px" }}>Values That Shapes Us</h2>
   <div className="inner-content">
    <p>We are a team of legally sound professionals; our aim is to serve our clients in most satisfactory manner as we can. Humility, knowledge, passion, integrity are the principles that resonate with every member of Lawfic Tax 
      Practice (LTP) family and the assignment they do. “We are dedicated to serve, 
      our moto is “knowledge is virtue” we aspire to gain knowledge and enhance our skills to serve more, help more.”</p>
   </div>
  </div>

  
    <Footer/>

  </>
);

export default Home;