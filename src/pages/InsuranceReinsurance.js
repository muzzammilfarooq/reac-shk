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
                <FaShieldAlt />
                </div>
                <h1>Insurance & Reinsurance</h1>
            </div>
        </div>
    </div>
    <div className="container service-details-inner-wrappper">
        <div className="row ">
            <div className="col-md-7">
                
                {/* <h4>Technology</h4> */}
             <p>Insurance and reinsurance are similar yet different terms. They are closely related. Although both have the same purpose of covering up for a risk or loss. Reinsurance comes only after an insurance. Insurance can be purchased by an individual or a firm for many reasons, but that is not the case with reinsurance, it is not meant for individual purposes. </p>
             <p>Insurances can cover up losses or risks. A vehicle can be insured, a house can be insured and even life can be insured. Normally holders of an insurance policy pay a recurring fee for a fixed or non-fixed term. An agreed amount will be reimbursed by the insurance company as an aid to any financial loss caused by any unfortunate circumstance that are covered by the purchased policy. </p>
             <p>The insurance company themselves, would require cover ups to manage the risks if any were to occur. If too many policy bearers demand their reimbursements at the same time form an insurer, it can overload them, and things can complicate.  There will be an increased fear and possibility of bankruptcy. Insurance companies can reinsure themselves by purchasing policies from reinsurance providers. </p>
             <p>The insurance industry has many challenges. Law practitioners who has a deep understanding of this industry can efficiently help with all the regulatory, operational as well as financial matters. Issues such as insurance frauds or bad faith can arise. Sometimes misinterpreted information in the contracts are misunderstood for bad faith. Disputes can also be related to the usage of an insurance policy or simply sale of an insurance policy. </p>
             <p>SHK Law insurance and reinsurance lawyers have acquired a thorough conversancy of international insurance, reinsurance markets. It is one of our core specialization areas and we firmly observe arising local, international trends. We have assisted several insurance companies and policy holders. </p>
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