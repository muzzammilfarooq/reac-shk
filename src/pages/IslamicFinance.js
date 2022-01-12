import React, { Component } from 'react'
import Navbar from "../components/common/Navbar";
import SectionsTitle from '../components/common/SectionsTitle'
import { Link } from 'react-router-dom'
import { FaPlane, FaMoneyBillAlt,FaRegBuilding,FaDollarSign, FaLaptop, FaRegHandshake ,  FaBolt,FaUserMd, FaShieldAlt,FaRegLightbulb, FaShip,FaStarAndCrescent , FaIndustry} from 'react-icons/fa'
import {AiOutlineMail  } from 'react-icons/ai'
import Footer from '../components/other/Footer';
import ExpertiseAndServices from '../components/ExpertiseAndServices/ExpertiseAndServices'
export default class IslamicFinance extends Component {
render() {
return (
<>
<header className="header-area">
    <Navbar />
    </header>
    <div className="container-fuild sec-first service-details-header">
        <div className="container">
            <div className="col-md-12">
                <div className="ico-box">
                <FaStarAndCrescent />
                </div>
                <h1>Islamic Finance</h1>
            </div>
        </div>
    </div>
    <div className="container service-details-inner-wrappper">
        <div className="row ">
            <div className="col-md-7">
                
                {/* <h4>Technology</h4> */}
                <p>All the activities under the Islamic Finance, comply well with the Shariah Law.  Shariah Laws are age old laws derived from the holy Quran mostly. It is also referred to as the Islamic Laws as it came into being along with the religion itself. The fundamentals of Islamic Finance is different from that of the regular Finance. Many practices of the regular finance that does not comply with the Shariah are strictly prohibited by the Islamic Finance.  For instance, it strictly prohibits charging and paying of interests, as it is believed to burden the borrower and overpower the lender. Yet other popular practices in the forbidden list would be investing in impermissible(haram) activities like trade of alcohol, speculations like investing in stocks with higher risks… Most importantly- drawing a clear distinction between the Halal (permissible) activities and Haram (impermissible) activities is crucial. </p>
                
          
                <p>SHK Law can assist clients with many Islamic Financing dispositions like Musharakah, Mudarabah, Ijarah, Ijarah Suquq… Relating to joint venture, partnership, leasing and leasing bond respectively. We encourage investors to explore several options, which is marked by the use of Shariah-compliant transactions. There is an increase in clients seeking Solutions from our massive multitude of the Islamic Finance services as they benefit from the stability of investments and there is no or very little chance of uncertainty.  Mutual investment, Installments, Equities are also some of the most sought Islamic Finance areas.</p>
                <p>The Islamic finance practices date back to the centuries (Islam mandates Islamic Finance for the Muslims just like the rest of the Shariah laws) but recently it is admired and adopted by several economies across the world because of its ethical, risk free and progressive nature. Personal Islamic Finance is also much in demand as it creates opportunities and increases wealth.  The Modern Islamic Finance law expands its clutches and improvises to meet the requirements of the constantly evolving economy. </p>
                
                <Link to="/contact" className="btn-find-lawer">Find a Lawyer</Link>
            </div>
            <div className="col-md-1"></div>
            <ExpertiseAndServices/>
                {/* <div className="col-md-4 service-expertise-wrapper">
                    
                    <h2>Other Services </h2>
                    <ul className="service-exp-nav">
                        <li><Link to="/technology-media" className="item">Aviation</Link></li>
                        <li><Link to="/technology-media" className="item">Banking and Finance</Link></li>
                        <li><Link to="/technology-media" className="item">Corporate & Commercial</Link></li>
                        <li><Link to="/technology-media" className="item">Debt Recovery</Link></li>
                        <li><Link to="/technology-media" className="item">Dispute Resolution</Link></li>
                        <li><Link to="/technology-media" className="item">Healthcare</Link></li>
                        <li><Link to="/technology-media" className="item">Insurance & Reinsurance</Link></li>
                        <li><Link to="/technology-media" className="item">Intellectual Property</Link></li>
                        <li><Link to="/technology-media" className="item">Islamic Finance</Link></li>
                        <li><Link to="/technology-media" className="item">Labor & Employment</Link></li>
                        <li><Link to="/technology-media" className="item">Maritime</Link></li>
                        <li><Link to="/technology-media" className="item">Projects, Infrastructure & Energy</Link></li>
                        <li><Link to="/technology-media" className="item">Real Estate & Construction</Link></li>
                        <li><Link to="/technology-media" className="item">Technology, Media, & Telecom </Link></li>
                    </ul>
                </div> */}
            </div>
            
            
        </div>
        
        
        
        <Footer />
            </>
            )
            }
            }