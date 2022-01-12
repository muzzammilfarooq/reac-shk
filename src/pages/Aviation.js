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
                <FaPlane />
                </div>
                <h1>Aviation</h1>
            </div>
        </div>
    </div>
    <div className="container service-details-inner-wrappper">
        <div className="row ">
            <div className="col-md-7">
                
                {/* <h4>Technology</h4> */}
             <p>Aviation law is a division of the legislation that deals with aircrafts, airport operations, and everything pertaining to the aviation industry including airspace policies, pilot licensing etc. They ensure safe air charter servicing, by standardizing aircraft maintenance procedures, setting safety rules, and most importantly safeguarding your air travel. </p>
<p>Apart from defense of accused aircraft professionals, law violators and consumers seeking help incase of injuries or loss of private possessions, aviation law also deals with business aspects of the aviation industry for instance manufactures held liable for malfunctioning parts. </p>
<p>For commercial flights to operate there are many authorizations required. Even parachuting from an aircraft such as helicopter (Skydiving) have certain rules and regulations that come under the civil aviation law. Aircrafts putting up a show (Aerobatics) such as jets performing acrobatics also require authorization. From a business perspective there can be issues concerning employment, cargo claims, development, production, financing, sale or lease of aircrafts and avionics (aviation equipment). Meteorology to an extend is also controlled by aviation law in many jurisdictions. </p>
<p>Is it same as the admiralty law? No, it is not same, but they sometimes overlap because of their international disposition. However, admiralty law takes care of disputes that are nautical in nature and relates to maritime activities and is more so often referred as the maritime law.  The difference between the two would be that of air and water, literally. </p>
<p>Aviation disputes can be very complex, may it be for a logistic company using air transport frequently, or a domestic airlines company, there are too many regulations and rules to follow, our team of specialized aviation attorneys can aid the legal proceedings with clarity and ease. It is always better to have a law firm on board specializing in aviation law, so that you can avoid the disputes from arising in the first place. </p>

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