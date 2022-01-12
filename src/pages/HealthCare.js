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
                <FaUserMd />
                </div>
                <h1>Healthcare</h1>
            </div>
        </div>
    </div>
    <div className="container service-details-inner-wrappper">
        <div className="row ">
            <div className="col-md-7">
                
                {/* <h4>Technology</h4> */}
      <p>
      We can take care of all the legal work, essential for smooth operation of any business within the healthcare industry, hospitals, clinics, rehabs/therapy centres, laboratories, pharmaceuticals … you name it! There are many regulations and obligations that both healthcare providers and buyers must adhere to. Because of the complex nature of the businesses in this field, often issues pertaining to operations, regulations or transactions may arise. It is a constantly evolving field as its main focus lies on improving health facilities and ensuring safety, and very often there can be need for updates in healthcare policies/ procedures. 
      </p>
      <p>
      Healthcare lawyers are not only thorough with healthcare specific realms like medical malpractices and bioethics but also are exceptionally good with corporate and commercial law, as end of the day these are businesses that requires securities, litigation, tax incorporation and so forth. 
      </p>
      <p>
      Medical malpractices in itself is a stand-alone area and some of its realms are categorized under personal injury law and we have lawyers specialized in this area of law as well.  In case of suspected medical negligence, practitioners can be at a risk of their license being ceased, the best way around it is to involve healthcare lawyers to assist the matter. 
      </p>
      <p>
      Other most sought out areas of law under healthcare would be: Patients’ rights and Medical Privacy.  Patients’ rights can slightly vary depending upon the jurisdiction the healthcare facility operates in. It establishes and standardizes the patient-practitioner relationships. For instance, it decides whether a practitioner can deliberate treatment for his patient or just guide the patient and help him/her decide better. 
      </p>
      <p>
      Health Privacy is another name for Medical privacy. It is often a concern as the patients prefer their medical records and sometimes even the conversations shared with their practitioner to remain discrete. Any leak of information to third parties like to insurance companies are often undesired and considered privacy breach. 
      </p>
      <p>
      Healthcare law is a vast field, with the involvement of specialized lawyers in the field, you can get coherent assistance. 
      </p>

    
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