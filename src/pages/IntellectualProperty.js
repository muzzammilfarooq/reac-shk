import React, { Component } from 'react'
import Navbar from "../components/common/Navbar";
import SectionsTitle from '../components/common/SectionsTitle'
import { Link } from 'react-router-dom'
import { FaPlane, FaMoneyBillAlt,FaRegBuilding,FaDollarSign, FaLaptop, FaRegHandshake ,  FaBolt,FaUserMd, FaShieldAlt,FaRegLightbulb, FaShip,FaStarAndCrescent , FaIndustry} from 'react-icons/fa'
import {AiOutlineMail  } from 'react-icons/ai'
import Footer from '../components/other/Footer';
import ExpertiseAndServices from '../components/ExpertiseAndServices/ExpertiseAndServices'
export default class IntellectualProperty extends Component {
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
                <FaRegLightbulb />
                </div>
                <h1>Intellectual property rights</h1>
            </div>
        </div>
    </div>
    <div className="container service-details-inner-wrappper">
        <div className="row ">
            <div className="col-md-7">
                
                {/* <h4>Technology</h4> */}
      <p>Intellectual property refers to the original constructions of your mind. It can be a concept, an idea, a design, a symbol or a story… So, if you have a brainchild, you can protect it from theft and forgery with the help of Intellectual Property Rights, it will also help you obtain recognition for the same. </p>
      <p>Intellectual property rights (IP), they are just as important to the clients of the proprietors as to the proprietors. While it protects the proprietor from infringement, it protects the clients from infringed goods/services. Either ways it is a win-win. It is very crucial for the economy as it encourages originality and facilitates innovation which in return would increase the employment opportunities. Patents, Copyrights, Intellectual designs, Trademarks… IP rights comprises of many such elements.</p>
          <p>Intellectual property rights are one of the core expertise of SHK Law.  Some of our most sought Ip rights services are listed below:</p>
          <h3>1) Patents </h3>
<p>It can grant you an exclusive right of making, using and distributing your intellectual properties.  </p>
<h3>2) Copyright</h3>
<p>Identifying you as the sole owner of the work, who is allowed produce the work as well as reproduce it. </p>
<h3>3) Trademark</h3>
<p>Trademarks can be a symbol, a logo, a phrase. It is distinct and helps to distinguish your goods/ company.</p>
<h3>4) Industrial Design</h3>
<p>It is an important element of Mass production; these are original designs applied to the products prior to production. </p>
<h3>5) Trade Dress</h3>
<p>Trade dress is all about how a finished product would look and feel. Apart from the design of the product it also includes packaging. </p>
<h3>6) Trademark Watch</h3>
<p>This service alerts the proprietors of a trademark when a similar trademark is filed or even launched</p>

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