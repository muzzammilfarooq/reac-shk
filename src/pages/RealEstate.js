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
                <h1>Real Estate & Construction</h1>
            </div>
        </div>
    </div>
    <div className="container service-details-inner-wrappper">
        <div className="row ">
            <div className="col-md-7">
                
                {/* <h4>Technology</h4> */}
             <p>Real estate is real property consisting of either land or buildings and sometimes both land and buildings alongside the resources within, such as wells, view, furniture etc. Any business around real estate, including selling, leasing, or simply renting out the properties is called a real estate business. A licensed person conducting such businesses is called a realtor. </p>
             <p>There are many rules and law concerning real estate and they can vary depending on the jurisdiction the property is located at. A real estate lawyer will be thorough with all the legal formalities and can easily facilitate any real estate transaction. In some jurisdictions real estate transactions cannot be made in the absence of a real estate attorney. Especially of you are looking forward to buying or selling a house, real estate attorneys can be of help. </p>
             <p>Hiring a legal firm can be very advantageous for both corporates as well as individuals. Especially if you are facing issues with foreclosures (acquiring / selling of mortgaged assets).  Legal firms can safeguard their clients from mortgage frauds. Sometimes there are chances of Short Sale, where the property (asset) value is lesser than the mortgage loan- All these can be efficiently dealt with by our dedicated team of specialized advisors. </p>
            <h3>What is zoning in real estate?</h3>
             <p>There are many zoning laws that needs to be carefully understood and observed. These laws mainly state how a land or property within a particular jurisdiction can be handled. They ensure the safety of the local communities and people in the vicinity. It can vary within a jurisdiction depending on a specific area, municipality, or locality. </p>
             <p>If you have a real estate law firm on board, you can be carefree, we can verify the commercial property (that you would want to invest in)  to understand if it has any legal restrictions or a lien attached to it. Furthermore, you can prevent yourself from unknowingly disobeying a law or two. </p>
          
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