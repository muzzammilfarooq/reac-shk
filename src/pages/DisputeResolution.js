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
                <FaRegHandshake />
                </div>
                <h1>Dispute Resolution</h1>
            </div>
        </div>
    </div>
    <div className="container service-details-inner-wrappper">
        <div className="row ">
            <div className="col-md-7">
                
                {/* <h4>Technology</h4> */}
  <p>Disputes can be more than mere disagreements, especially when it is between two officials, an employer and an employee, a husband and a wife, two corporate entities or two countries. There is a need for it to be resolved without much havoc. </p>
  <p>There are several ways a conflict can be resolved without dragging it to the court, that is one of the major significances of dispute resolution. </p>
  <p>Trials can take longer; it is advisable to resort to dispute resolution first. They are much more pliant unlike court proceedings and are formal in nature. </p>
  <h3>Who need dispute resolution?</h3>
  <p>Somebody in the family, in the neighborhood, in a corporate firm. Anybody and everybody facing major disputes either with their employer, landlord or even spouse for that matter. Here the people involved in the dispute has more control rather than the court or other legal institutions. It is a much more personal approach. </p>
  <h3>What is alternative dispute resolution?</h3>
  <p>It is a way of settling disagreements externally outside the court or other legal institutions, therefore it is called external/alternative dispute resolution. There is no litigation involved here. However, the courts can sometimes request the mediation of disagreeing parties with alternate dispute resolution.  In certain jurisdictions, mediations are a mandate, even if they do not lead to conclusions. </p> 
  <p>It relieves the courts from the increased number of cases. If more disputes can be solved through ADR, there will be decreased load on the legal institutions. </p>
  <p> Dispute resolution lawyers can help their clients to better understand their claims. They can also try to resolve the matters without any litigation. If the matter drags on to the court, ADR lawyers can represent the client and assist in all the legal proceedings. They can oversee all the potential settlement options and can coordinate with the disagreeing opponent accordingly. </p>
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