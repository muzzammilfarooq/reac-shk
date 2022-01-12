import React, { Component } from 'react'
import Navbar from "../components/common/Navbar";
import SectionsTitle from '../components/common/SectionsTitle'
import { Link } from 'react-router-dom'
import { FaPlane, FaMoneyBillAlt,FaRegBuilding,FaDollarSign, FaLaptop, FaRegHandshake ,  FaBolt,FaUserMd, FaShieldAlt,FaRegLightbulb, FaShip,FaStarAndCrescent , FaIndustry} from 'react-icons/fa'
import {AiOutlineMail  } from 'react-icons/ai'
import Footer from '../components/other/Footer';
import ExpertiseAndServices from '../components/ExpertiseAndServices/ExpertiseAndServices'
export default class TechnologyMedia extends Component {
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
                    <FaLaptop />
                </div>
                <h1>Technology, Media, & Telecom</h1>
            </div>
        </div>
    </div>
    <div className="container service-details-inner-wrappper">
        <div className="row ">
            <div className="col-md-7">
                
                <h3>What is media and telecommunication industry?</h3>
                <p>Art, entertainment, innovative technology, communication companies etc.. fall under this sector. It can involve, production, distribution, redistribution, publication of media materials, new technology or communication mediums. </p>
                <p>There are many communication and media laws, they are framed to resolve the many issues revolving around this sector. Defamation, copyright infringements, censorship conflicts are only a few of them.  The laws can vary depending on the mediums, laws for print is different from that of online media. Similarly, on air or live broadcasts can have slightly different set of regulations. These laws directly impact people working for this sector like the publishers, telecommunication operators, journalists and even the engineers, researchers, designers working for this industry. </p>
                <p>Media and telecom law is a very hefty term with a broad scope. These laws collaboratively represent the Internet Laws, Freedom of Speech laws, law around copyrights and patents etc. </p>
                <h3>Have you heard about cease and desist letter?</h3>
                <p>This is a letter issued to stop a certain activity or remove a certain publication with immediate effect and never restart it. It is often the first step leading towards serious litigations. It can be sent out to a corporate entity or an individual. Ligations can also have serious consequences such as mediating the licensed activities or cancellation of license. If disputes of such short arise, Legal firms with lawyers specializing in this industry is your best resort. </p>
                <p>Making certain statements online or on air can also land you in trouble and so does publishing print materials, because what looks like freedom of speech to you maybe beyond the set limitations by a certain jurisdiction. With SHK Law you can get access to the best possible legal solutions to resolve your disputes, entitle you claims and save your propriety. </p>

                <a href="" className="btn-find-lawer">
                    Find a Lawyer
                </a>
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