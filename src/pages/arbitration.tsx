import React from "react";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import "../App.css";

const Practices: React.FC = () => {
  return (
    <>
      <Navbar />

       <div className="header">
        <div className="container">
            <h1 className="page-title">Arbitration</h1>
        </div>
    </div>

    <div className="container">
        <div className="content">
            <div className="main-content">
                <p>With alternate dispute resolution processes becoming more popular and convenient in comparison to traditional dispute solutions, Indian companies as well as foreign entities that entered into business transactions with Indian parties are increasingly opting to resolve their commercial disputes through arbitration.</p>

                <p>Coupled with significant amendments that have been made to the Arbitration & Conciliation Act, 1996, arbitration has received significant lift. In the context of cross-border trade and transactions, arbitration remains the primary dispute resolution mechanism with foreign seat under institutional rules.</p>

                <p>It necessitates arbitrations seated in India to be conducted in a timely manner with hearings to be conducted on a day-to-day basis.</p>

                <p>For the effective implementation of this strict timeline, parties require the support of dedicated full-time arbitration teams. Lakshmikumaran & Sridharan (LKS) understands the requirement and has created a team that focuses on this practice.</p>

                <h2 className="section-title">Arbitration at LKS</h2>

                <p>The Arbitration Practice team at LKS has dedicated arbitration lawyers for handling matters seated in India and overseas. The emphasis is on providing innovative and, at the same time, efficient legal solution.</p>

                <p>The team comprises of practitioners who are experienced and knowledgeable in a broad range of industries and business sectors such Oil & Gas, Infrastructure & Projects, Construction & Engineering, Power & Energy, Telecom & IT, Insurance, Banking & Finance, and matters arising out of Joint Ventures, Shareholders Agreement, Sale of Goods and General Commercial transactions. The team's experience comes from handling both large and complex disputes as well as mid-sized disputes that require specialist insight into the industry and business sensitivities.</p>

                <p>The team is involved in every aspect of international and domestic arbitration such as:</p>

                <ul className="services-list">
                    <li>Drafting the arbitration clause</li>
                    <li>Aiding in the selection of arbitral seat</li>
                    <li>Process and advising on the appointment of arbitrators</li>
                    <li>Advising and representing clients from the commencement of arbitration until the final hearing of the matter</li>
                    <li>Seeking interim measures of protection from courts and arbitral tribunals</li>
                    <li>Assisting in enforcing arbitral awards and taking recourse against awards</li>
                </ul>

                <p>The team at LKS comprises of practitioners who have experience of conducting arbitrations under Rules of SIAC, ICC, LCIA, AAA-ICDR, ICA, HKIAC, KLRCA, UNCITRAL and ad hoc arbitrations, as well as arbitration related litigation matters before the courts.</p>

                <p>The team is adept at conducting arbitrations in all major cities in India, and in foreign seats including Singapore, London, Paris, Geneva, Zurich, Stockholm, New York, Hong Kong, Kuala Lumpur and Dubai.</p>

                <div className="industry-updates">
                    <h2 className="updates-title">Industry Updates</h2>
                    
                    <div className="update-image">
                        [Arbitration 2023 - 530x225 Image Placeholder]
                    </div>

                    <div className="update-item">
                        <div className="update-category">LKS INSIGHTS</div>
                        <div className="update-title">Arbitration clauses in cross-border transactions – Indian perspective</div>
                        <div className="update-date">22 September 2023</div>
                    </div>

                    <div className="update-item">
                        <div className="update-category">NEWS</div>
                        <a href="#" className="update-link">
                            <div className="update-title">Director of company cannot be 'party' to arbitration against the company</div>
                        </a>
                        <div className="update-date">06 February 2024</div>
                        <div className="update-date">06 February 2024</div>
                    </div>

                    <div className="update-item">
                        <div className="update-category">NEWS</div>
                        <a href="#" className="update-link">
                            <div className="update-title">Arbitration – 2015 amendments not applicable where notice invoking arbitration is issued prior to amendment</div>
                        </a>
                        <div className="update-date">12 May 2023</div>
                        <div className="update-date">12 May 2023</div>
                    </div>

                    <div className="update-item">
                        <div className="update-category">NEWS</div>
                        <a href="#" className="update-link">
                            <div className="update-title">Arbitration agreement, which is part of an unstamped contract, has no existence</div>
                        </a>
                        <div className="update-date">01 May 2023</div>
                        <div className="update-date">01 May 2023</div>
                    </div>
                </div>
            </div>
        </div>
    </div>

      <Footer />
    </>
  );
};

export default Practices;
