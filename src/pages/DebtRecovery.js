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
                <FaDollarSign />
                </div>
                <h1>Debt Recovery</h1>
            </div>
        </div>
    </div>
    <div className="container service-details-inner-wrappper">
        <div className="row ">
            <div className="col-md-7">
                
                {/* <h4>Technology</h4> */}
<p>You know you are in debt when you owe money or certain amount in overdue. Debt can be personal as well as commercial. There are many types of debts. The most common would be secured debt, unsecured debt, and revolving debt. </p>
<p>Secured debts are always backed by one or more assets. If the borrower fails to pay the lender can seize the asset. Car loan is an example of a secured debt. The lender can seize the vehicle or completely own it if the   borrower fails to pay.</p>
<p>Unsecured debts are a result of unsecured loans. There loans are difficult to attain, as there is some sort of uncertainty in the payback.  Here the lender is extremely careful and needs to verify the borrower’s profile, previous debt history etc. thoroughly in an attempt to know his capability to payback. There are lots of formalities before issuing such a loan. </p>
<p>Credit card is the best example for revolving debts, there is a maximum limit set by the creditor.  Until this limit is reached, the customer can borrow in iterations. Mortgages are often the largest and longest form of debt.  The term of a mortgage can extend up to several years. </p>
<p>Debt recovery is required when a loan goes unpaid or has been defaulted. Both creditor and debtor will require debt recovery assistance and sometimes even third-party collection departments. </p>
<p>It is of utmost importance to the debtor/defaulter as it directly reflects on their credit score. They might as well need guidance with the repayment plan, and it must be communicated to the collector (responsible for collecting payment on behalf of the creditor). </p>
<p>The creditor will require the expertise of a debt recovery lawyer to draw conclusions with the defaulters, they can further transfer the matters into the court if required. They be your legal representatives helping with all the legal proceedings. If the collection agency fails to collect, debt recovery lawyers becomes the ultimate choice. </p>
<p>SHK Law debt recovery lawyers have assisted many creditors as well as third party collection agencies with fair debt collections. </p>

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