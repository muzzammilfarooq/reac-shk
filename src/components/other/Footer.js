import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { FiPhone, FiChevronRight, FiHeart } from 'react-icons/fi'
import { FaEnvelope, FaMapMarkerAlt, FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn, FaYoutube, FaWhatsapp  } from 'react-icons/fa'
import {AiOutlineMail  } from 'react-icons/ai'

import { AiFillApple } from 'react-icons/ai'
import ScrollTopBtn from '../layouts/ScrollTopBtn'
export default class Footer extends Component {
render() {
return (
<>
{/* <ScrollTopBtn /> */}
<footer className="footer-wrapper">
    <div className="container">
        <div className=" row footer-widgets-grid">
            <div className="footer-widget footer-left col-md-6">
            <h2>Know us</h2>
                                        <p className="desc">We strive to be approachable to our clients and seek to make them comfortable in entrusting us with their legal needs. </p>
                                        <p className="desc">Our far-reaching, international network covers the Gulf Cooperation Council (GCC), Middle East, Europe and other corners of the world. SHK Law is a member of several private legal networks, giving us unique access to legal resources that we can provide to our clients. The firm is also a member of the International Chamber of Commerce (ICC) and the International Bar Association (IBA). </p>
                
                
            </div>
            <div className="footer-widget footer-help-links col-md-3">
                {/* <h2>QUICK LINKS</h2> */}
                <ul className="help-links">
                <h2 style={{visibility:'hidden'}}>Contact Us</h2>
                    <li><a href="/">Home</a></li>
                    <li> <Link to="/client-services"> Client Services  </Link></li>
                    {/* <li>  <Link to="/our-team">Our Team  </Link></li> */}
                    <li><Link to="/contact">Contact Us</Link></li>
                    <li><Link to="/alerts">Alerts</Link></li>
                    <li><Link to="/terms-of-services">Terms of Service</Link></li>
                </ul>
            </div>
            <div className="footer-widget footer-working-hours col-md-3">
                <h2>Contact Us</h2>
                <p className="desc line-t1">
                    ADGM<br/>
                    Abu Dhabi Global Market<br/>
                    Abu Dhabi, United Arab Emirates
                </p>
                {/* <div className="social">

                    <div className="social-box">
                        <div className="inner">
                   
                            <p className="value">+971 4 409 68 40</p>
                        </div>

                        
                    </div>

                     <div className="social-box">
                        <div className="inner">
                
                            <p className="value">info@shklaw.com</p>
                        </div>

                        
                    </div>

                   
                </div> */}
            </div>
            
        </div>
        <div className="copyright-wrap text-center">
            <p>© Copyright SHK Law 2020. All Rights Reserved.</p>
        </div>
    </div>
</footer>
</>
)
}
}