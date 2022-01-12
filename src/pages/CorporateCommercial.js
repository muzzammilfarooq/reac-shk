import React, { Component } from 'react'
import Navbar from "../components/common/Navbar";
import SectionsTitle from '../components/common/SectionsTitle'
import { Link } from 'react-router-dom'
import { FaPlane, FaMoneyBillAlt,FaRegBuilding,FaDollarSign, FaLaptop, FaRegHandshake ,  FaBolt,FaUserMd, FaShieldAlt,FaRegLightbulb, FaShip,FaStarAndCrescent , FaIndustry} from 'react-icons/fa'
import {AiOutlineMail  } from 'react-icons/ai'
import Footer from '../components/other/Footer';
import ExpertiseAndServices from '../components/ExpertiseAndServices/ExpertiseAndServices'
export default class CorporateCommercial extends Component {
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
                <FaRegBuilding />
                </div>
                <h1>Corporate & Commercial</h1>
            </div>
        </div>
    </div>
    <div className="container service-details-inner-wrappper">
        <div className="row ">
            <div className="col-md-7">
                
                {/* <h4>Technology</h4> */}
<p>While establishing a business, or while thinking about business expansion, consulting a Corporate and Commercial Law firm must be on your priority list.  So that you do not have to wait for the complications or disputes to arise.  Few of the many risks that a business would have to face can be legal, litigation, or related to agreements. Corporate and Commercial Laws are ever evolving, and it often adapts to the current economic situation; a smallest change can shake your business up as your business may not be complying to them anymore.</p>
<p>Furthermore, in case of disputes between the shareholders, a legal firm can represent your legal interests and safeguard your rights. </p>
<p>We have placed a special emphasis on Company and Commercial Law. Our services in the sector also includes the facilitation of company formation.</p>
<p>Is there a difference between the two?</p>
<p>Corporate and Commercial Laws are similar, but they aren’t the same. Corporate Law covers practice areas pertaining to the mergers, acquisitions as well as the day to day activities of a corporate institution.  Whereas Commercial Law has it is clutches over broader range of practice areas like Franchising and also litigation and Intellectual property rights.  Sometimes or more so often to settle larger matters, both the corporate and commercial law partners are required to work together to simplify the matter and provide clarity</p>
<p>To sum it up, from formation of a company to setting the share holder rights, everything is governed by the Corporate Law meanwhile Commercial Law mainly deals with the distribution of services/goods. </p>
<p>SHK Law’s Corporate and Commercial Law team </p>
<p>Our network of multinational Corporate and Commercial Lawyers are specialized in many practice areas like litigation, Intellectual Property rights, Arbitration etc… We provide consultation, resolutions, and also represent our client’s interests while safeguarding their rights. </p>
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