import React, { Component } from 'react'
import Navbar from "../components/common/Navbar";
import SectionsTitle from '../components/common/SectionsTitle'
import Service from '../components/services/Services'
import About1 from '../components/about/About1'
import Divider from '../components/other/Divider'
import About from '../components/about/About'
import CounterUp from '../components/other/CounterUp'
import Slider from '../components/sliders/slider'
import SimpleTab from '../components/tabs/SimpleTab'
import Cta from '../components/other/Cta'
import Testimonial from '../components/team/Testimonial';
import Team from '../components/team/Team';
import ChartArea from '../components/other/ChartArea';
import Clients from '../components/other/Clients';
import Pricing from '../components/other/Pricing';
import CtaForm from '../components/other/CtaForm';
import Blog from '../components/blog/Blog';
import { Link } from 'react-router-dom'
import { FiChevronRight } from "react-icons/fi";
import logo from "../assets/images/bg-alert-blog.jpg";
import { FaPlane, FaMoneyBillAlt, FaBuilding, FaRegBuilding,FaDollarSign, FaLaptop, FaRegHandshake ,  FaBolt,FaUserMd, FaShieldAlt,FaRegLightbulb, FaShip,FaStarAndCrescent , FaIndustry} from 'react-icons/fa'
import {AiOutlineMail  } from 'react-icons/ai'
import Footer from '../components/other/Footer';
export default class ClientServices extends Component {
render() {
return (
<>
<header className="header-area">
    <Navbar />
    </header>
    <div className="container">
        <div className="row sec-first">
            <div className="col-md-12">
                <div className="container">
                    <div className="row">
                        <div className="col-12 w-800">
                            
                            <SectionsTitle title="Client Services" subtitle="" />
                            <p>
                            SHK Law is a contemporary legal firm with a hard-earned repute of its own in the jurisdiction that we serve. We can simplify and give clarity even on the most complicated cross border transactions/ legal matters. Providing full legal service for several industries including Banking and Finance, Maritime, Healthcare, Aviation, Real Estate and Construction, Projects, Infrastructure and Energy, Technology, Media and Telecom. 
                                </p>
                                <p>
                                Missed Opportunities or a Successful Outcome? What do you prefer?
                                    </p>
                                    <p>
                                    Entrusting SHK Law would ensure that you are always getting best deals possible and all the legal support you need. Facing a legal issue single handedly can be exhausting and can lead to severe setbacks.  For a successful outcome you will need a specialized team by your side, we work as your extended team. Chances of winning a legal battle doubles with a law firm.
                                        </p>
                                        <p>
                                        Regardless of the substance of the matter, our services remain unbiased.  All the client matters are equally sensitive and of utmost importance to us. Years of experience and in-depth knowledge allows us to better represent our client’s interests and provide cost effective solutions. 
                                            </p>
                                            <p>Attempts are neglected, Successes are remembered </p>
                                            <p>We don’t attempt, we aim to succeed. SHK Law  has maintained an exceptional success rate unfailingly. Our clients enjoy a sense of security with us and their confidence in us, impel us to achieve more.  It is an obligation towards the faith invested in us by our clients, we shall not fail them!</p>
                                            <p>With SHK Law you get multilingual assistance, complete anonymity, full-fledged legal knowledge base, distant rendering of legal services, transparent pricing, licensed and experienced lawyers.  As we are a multidisciplinary firm, our lawyers collaboratively put their best foot together to provide best solutions to the client. A few of our specialization areas would be Debt Recovery, Dispute Resolution, Labor & Employment, Islamic Finance… </p>
                            </div>
                        </div>
                    </div>
                    
                </div>
            </div>
            <div className="sec-t1 client-services-wrapper">
                <div className="row">
                    <Link to="/client-services/aviation" className=" col-md-6 col-lg-4 col-xl-4 ">
                        <div className="services-box">
                            <div className="ico-box ico-aviation">
                                <FaPlane />
                            </div>
                            <h3>Aviation</h3>
                            <p>Aviation disputes can be very complex, for a logistic company using air transport frequently, or a domestic airline company. Our lawyers can provide expert advice on a vast array of legal issues in the aviation field.</p>
                            <Link to="/client-services/aviation" className="btn-view">Read More </Link>
                        </div>
                    </Link>
                    <Link to="/client-services/banking-finance" className=" col-md-6 col-lg-4 col-xl-4 ">
                        <div className="services-box">
                            <div className="ico-box ">
                                <FaMoneyBillAlt />
                            </div>
                            <h3>Banking & Finance</h3>
                            <p>With its evolving financial markets, certain jurisdictions will require sophisticated legal advisers who understand the meaning of risk and reward.</p>
                            <Link to="/client-services/banking-finance" className="btn-view">Read More </Link>
                           
                        </div>
                    </Link>
                    <Link to="/client-services/corporate-commercial"  className=" col-md-6 col-lg-4 col-xl-4 ">
                        <div className="services-box">
                            <div className="ico-box ">
                                <FaRegBuilding />
                            </div>
                            <h3>Corporate & Commercial</h3>
                            <p>We have placed a special emphasis on Company and Commercial law. Our services in the sector include the facilitation of company formation.</p>
                            
                            <Link to="/client-services/corporate-commercial" className="btn-view">Read More </Link>
                        </div>
                    </Link>
                    <Link to="/client-services/debt-recovery"  className=" col-md-6 col-lg-4 col-xl-4 ">
                        <div className="services-box">
                            <div className="ico-box ">
                                <FaDollarSign />
                            </div>
                            <h3>Debt Recovery</h3>
                            <p>We have a specialized and separate department for debt recovery, composed of highly qualified lawyers who handle negotiations on behalf of our Client's interest and claims.</p> 
                            <Link to="/client-services/debt-recovery" className="btn-view">Read More </Link>
                        </div>
                    </Link>

                    <Link to="/client-services/dispute-resolution" className=" col-md-6 col-lg-4 col-xl-4 ">
                        <div className="services-box">
                            <div className="ico-box ">
                                <FaRegHandshake />
                            </div>
                            <h3>Dispute Resolution</h3>
                            <p>The attorney at SHK Law are well versed and experienced in all relevant provisions of Pakistan legislation concerning arbitration as well.</p>
                            <Link to="/client-services/dispute-resolution" className="btn-view">Read More</Link>
                        </div>
                    </Link>
                    <Link to="/client-services/healthcare" className=" col-md-6 col-lg-4 col-xl-4 ">
                        <div className="services-box">
                            <div className="ico-box ">
                                <FaUserMd />
                            </div>
                            <h3>Healthcare</h3>
                            <p>Our lawyers in the Healthcare Department have a close relationship with our trial lawyers to ensure the best possible outcome for a case. They work as a team to prevent litigation whenever possible.</p>
                            <Link to="/client-services/healthcare" className="btn-view">Read More </Link>
                        </div>
                    </Link>
                    <Link to="/client-services/insurance-and-reinsurance" className=" col-md-6 col-lg-4 col-xl-4 ">
                        <div className="services-box">
                            <div className="ico-box ">
                                <FaShieldAlt />
                            </div>
                            <h3>Insurance & Reinsurance</h3>
                            <p>SHK Law insurance and reinsurance lawyers have acquired a thorough conversancy of international insurance, reinsurance markets.Our lawyers offer advice and consultation to several insurance companies and policy holders in all aspects.</p>
                            <Link to="/client-services/insurance-and-reinsurance" className="btn-view">Read More </Link>
                        </div>
                    </Link>
                    <Link to="/client-services/intellectual-property" className=" col-md-6 col-lg-4 col-xl-4 ">
                        <div className="services-box">
                            <div className="ico-box ">
                                <FaRegLightbulb />
                            </div>
                            <h3>Intellectual Property</h3>
                            <p>We have a specialized and separate department for debt recovery, composed of highly qualified lawyers who handle negotiations on behalf of our Client's interest and claims.</p>
                            <Link to="/client-services/intellectual-property" className="btn-view">Read More </Link>                            
                        </div>
                    </Link>
              
                    <Link to="/client-services/islamic-finance" className=" col-md-6 col-lg-4 col-xl-4 ">
                        <div className="services-box">
                            <div className="ico-box ">
                                <FaStarAndCrescent />
                            </div>
                            <h3>Islamic Finance</h3>
                            <p>Certain regions and jurisdiction allow investors to explore several options, which is marked by the use of Sharia-compliant transactions.</p>
                            <Link to="/client-services/islamic-finance" className="btn-view">Read More </Link>
                        </div>
                    </Link>
                    <Link to="/client-services/labor-and-employment"  className=" col-md-6 col-lg-4 col-xl-4 ">
                        <div className="services-box">
                            <div className="ico-box ">
                                <FaIndustry />
                            </div>
                            <h3>Labor & Employment</h3>
                            <p>With offices throughout Pakistan and associate offices in the Middle East and Europe, Our firm enables us to serve Clients on an international, regional and local level.</p>
                            <Link to="/client-services/labor-and-employment" className="btn-view">Read More </Link>
                        </div>
                    </Link>
                    <Link to="/client-services/Maritime"  className=" col-md-6 col-lg-4 col-xl-4 ">
                        <div className="services-box">
                            <div className="ico-box">
                                <FaShip />
                            </div>
                            <h3>Maritime</h3>
                            <p>The firm offers advice on laws related to charter parties, marine insurance and laws related to collisions and salvage. We are actively involved in a broad range of maritime representations.</p>
                            <Link to="/client-services/Maritime" className="btn-view">Read More </Link>
                        </div>
                    </Link>
                    <Link to="/client-services/project-infrastructure" className=" col-md-6 col-lg-4 col-xl-4 ">
                        <div className="services-box">
                            <div className="ico-box">
                                <FaBolt />
                            </div>
                            <h3>Projects, Infrastructure & Energy</h3>
                            <p>We have a specialized and separate department for debt recovery, composed of highly qualified lawyers who handle negotiations on behalf of our Client's interest and claims.</p>
                            <Link to="/client-services/project-infrastructure" className="btn-view">Read More </Link>
                        </div>
                    </Link>
                </div>
                <div className="row justify-content-center">
                    <Link to="/client-services/real-estate" className=" col-md-6 col-lg-4 col-xl-4 ">
                        <div className="services-box">
                            <div className="ico-box">
                                <FaBuilding />
                            </div>
                            <h3>Real Estate & Construction</h3>
                            <p>The real estate team at SHK Law has worked on some of the most iconic real estate projects in Dubai and advised some of the largest developers in the region.</p>
                            <Link to="/client-services/real-estate" className="btn-view">Read More </Link>
                        </div>
                    </Link>
                    <Link to="/client-services/technology-media" className=" col-md-6 col-lg-4 col-xl-4 ">
                        <div className="services-box">
                            <div className="ico-box ">
                                <FaLaptop />
                            </div>
                            <h3>Technology, Media, & Telecom</h3>
                            <p>There are many communication and media laws, they are framed to resolve the many issues revolving around this sector. Get best legal solutions to resolve your disputes, entitle you claims and save your propriety.</p>
                            <Link to="/client-services/technology-media" className="btn-view">Read More </Link>
                        </div>
                    </Link>
                </div>
                
            </div>
            
        </div>
        
        
        
        <Footer />
            </>
            )
            }
            }