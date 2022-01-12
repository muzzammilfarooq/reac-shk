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
                <FaIndustry />
                </div>
                <h1>Labour and Employment</h1>
            </div>
        </div>
    </div>
    <div className="container service-details-inner-wrappper">
        <div className="row ">
            <div className="col-md-7">
                
                {/* <h4>Technology</h4> */}
             <p>The labour and employment laws outline the primary relationship between an employee, and an employer and the institution employing the employee. It determines the necessary conditions and precautionary standards that must be set for an employee who is at work. Employees have certain obligations towards their job as well as towards their employers, even these are standardized by the labour laws.</p>
             <p>The obligation of an employee towards his job alongside his rights and relationship between the two (employee and an employer) are enforced with the help of an employment contract. In most of the jurisdictions the terms of employment will be clearly mentioned in the contract. Compensation, paid and unpaid leave, sick leave, termination etc. will become a part of the terms. Prior to the contract a Job description document is drafted so that the employee has a clear understanding of what is expected of him/her. A jurisdiction can observe local, international labour laws or a mix of both. </p>
             <h3>What is Arbitrary dismissal?</h3>
             <p>If an employee is terminated by the employer without any legit reasons or impels a resignation on an irrational ground, it is called an arbitrary dismissal, the employee can seek legal help against it.  If the termination is related to work efficiency or performance, it is not arbitrary. </p>
             <p>In most jurisdictions if the termination proves to be arbitrary the employee will be entitled for a compensation amount along with the gratuity and notice period dues, if applicable. </p>
             <p>SHK Law extends its services to both employers and the employees.  May it be termination of contracts, employment bans, non-compete clause claims, absconding employees or employers, unsettled dues,  or any other sort of compensation disputes, we are known for our amicable approach. /.</p>
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