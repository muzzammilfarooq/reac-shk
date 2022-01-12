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
                <FaShip />
                </div>
                <h1>Maritime</h1>
            </div>
        </div>
    </div>
    <div className="container service-details-inner-wrappper">
        <div className="row ">
            <div className="col-md-7">
                
                {/* <h4>Technology</h4> */}
             <p>Maritime law is an area of law that regulates international waters- Sea/Ocean. It is also known as admiralty law. It governs all aspects of nautical matters. There are many maritime businesses-like shipping companies that often resort to Maritime laws in case of offenses and disputes. </p>
             <p>Registration of the ships, contracts, inspection, maintenance are outlined by the Maritime Law. It also protects from nautical piracy, ensuring safe journey of ships in the international waters. Sometimes these laws operate in conjunction with the laws of Federal Transport Authority as ultimately water is a medium of transport.  It is in fact one of the earliest forms of transport and trade. The maritime law can differ from country to country. In some of the developed countries maritime law has very little to do with the national laws. There are several maritime laws that are outlined by the IMO (International Maritime organization)- the UN, they are basically responsible for secure shipping in the international waters. </p>
             <p>When you own a ship or a related business, the country of registration of the ship is very important, as tax policies and everything of that country will be applicable to the business.  We need to look for countries that not only allows foreign registration but also has forbearing maritime laws. This practice is termed as Flag of convenience. </p>

             <p>Before filing any maritime claim, it’s very important that you completely understand your rights. A maritime lawyer can assist you with understanding your rights that you as an individual may have failed to notice or documenting the paper works and everything else. Maritime lawyers are also excellent with communication and negotiation, they will ensure that all your claims and demands are justified.</p>
             <p>With SHK Law, you can get assistance on charter parties, marine insurance, collisions/salvage…</p>
             <p>We are actively involved in a broad range of maritime representations. </p>
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