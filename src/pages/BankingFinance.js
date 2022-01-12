import React, { Component } from 'react'
import Navbar from "../components/common/Navbar";
import SectionsTitle from '../components/common/SectionsTitle'
import { Link } from 'react-router-dom'
import { FaPlane, FaMoneyBillAlt,FaRegBuilding,FaDollarSign, FaLaptop, FaRegHandshake ,  FaBolt,FaUserMd, FaShieldAlt,FaRegLightbulb, FaShip,FaStarAndCrescent , FaIndustry} from 'react-icons/fa'
import {AiOutlineMail  } from 'react-icons/ai'
import Footer from '../components/other/Footer';
import ExpertiseAndServices from '../components/ExpertiseAndServices/ExpertiseAndServices'
export default class BankingFinance extends Component {
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
                <FaMoneyBillAlt />
                </div>
                <h1>Banking & Finance</h1>
            </div>
        </div>
    </div>
    <div className="container service-details-inner-wrappper">
        <div className="row ">
            <div className="col-md-7">
                
                {/* <h4>Technology</h4> */}
                <p>Mending Money, monetary Disputes, monetary Discipline, monetary Discount, monetary Discrimination, monetary Disequilibrium, monetary Disbursement. The word “money“ has too much hype around it. Banking and Finance practices strictly adheres to money related matters. Particularly it addresses monetary institutions such as banks and other financial service providers like brokerage firms, insurance companies, mortgage institutions, investment company… Financial markets are ever evolving and demands sophisticated legal advisors who understands the meaning of risk and reward. </p>
                <p>Financial Transactions establishes relationships between lenders and borrowers, and they are contractual. Managing this relationship is sometimes difficult and often misconducted.  The transactions must be negotiable and must uphold each party’s interests legally.  Banking and Finance is a very vast and sought-after sector of the law that covers areas like negotiation, structuring, securitization Etc. Apart from communication and attention to details, a Banking and Financial Lawyer should have distinctive analytical abilities, to quickly grasp numbers, observe patterns and the ability to pace up and match the frequently emerging Financial trends. </p>
                <p>SHK Law provides cross jurisdiction support in Banking and Finance Matters.  We have lawyers specializing in negotiation, deal arrangements, asset finances, Islamic finances, Equity Securities and other areas of Banking and Finance Law.  We have already made a mark in this sector and our lawyers have successfully assisted many Financial service providers within our jurisdiction, and they excel in representing the lenders, borrowers, agents and other contributors as well. Each one of them are well versed with complex proceedings like tapping into bond market, restructuring businesses and focused in niche categories like Project Financing, Banking, Capital Markets, Real Estate Finance, Private Equity Finance, Acquisition Finance, Currency Derivatives… </p>
                <p>Regardless of the complexity of the Financial matters, our solutions are simplified with detailing and clarity on every aspect. The long term benefits are calculated and productive use as well as the implications are well communicated with our clients. </p>
                
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