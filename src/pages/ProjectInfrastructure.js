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
                <FaBolt />
                </div>
                <h1>Projects, Infrastructure & Energy</h1>
            </div>
        </div>
    </div>
    <div className="container service-details-inner-wrappper">
        <div className="row ">
            <div className="col-md-7">
                
                {/* <h4>Technology</h4> */}
                <p>Hyperloops, Telecom Towers, Electrical Systems, Sewage and Waste Disposal Facilities… these are some of the many gigantic infrastructural projects. Most of these are big businesses that requires lots of paper and legal works. Often infrastructure lawyers work in conjunction with other corporate and finance lawyers to facilitate project infrastructures that are massive and ensure their smooth operation. </p>
             <p>All the development work involving construction, expansion or any other form of redevelopment will require a team of project infrastructure lawyers to assist with the project legalities. Law firms can provide cost effective project infrastructure advisory solutions. </p>
             <h3>Who needs assistance from project infrastructure lawyers?</h3>
             <p>Infrastructure investors, sponsors, developers, builders, and everyone else who is involved in the infrastructure development might as well require legal assistance. Some of the popular areas under project infrastructure would be Energy/Power, Transport, Telecomm and Satellites etc. </p>
             <p>The SHK Law, infrastructure lawyers have experience in domestic as well as international infrastructural projects. Most of the infrastructural projects, just like any other business require disposition, deal structures, targets, partnership contracts etc. But unlike other businesses they are humungous and demands expertise of lawyers specializing in this field. </p>
             <p>Advising project under energy, construction or redevelopment structure needs years of experience and expertise in project infrastructure. Only a law firm specializing in this field can assist with drafting contracts, risk management, claims or disputes, conciliation, litigation and so forth efficiently. </p>
             <p>SHK Law is a single stop for all the project infrastructure advisory requirements. We have worked on energy projects valued over 10 Billion US dollars in the UAE and yet other projects in the GCC as well as in the international markets.  Our clients can greatly benefit as we have a team of specialized advisors in this field and an unparalleled experience. </p>
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