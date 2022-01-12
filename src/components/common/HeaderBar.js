import React, { Component } from 'react'
import { FiPhone, FiMapPin, FiChevronDown, FiChevronRight } from 'react-icons/fi'
import { FaEnvelope, FaFacebookF, FaTwitter, FaYoutube } from 'react-icons/fa'
import flat1 from '../../assets/images/flag.jpg'
import flat2 from '../../assets/images/flag2.jpg'
import flat3 from '../../assets/images/flag3.jpg'

export default class HeaderBar extends Component {
    render() {
        return (
            <div className="header-bar-wrapper">
                <div className="container">
                    <div className="header-bar-grid">
                        <div className="header-bar-left">
                            <ul className="d-flex">
                                <li className="d-flex"><FiPhone className="icon" /> <a href="tel:+4024025838">+402 402 5838</a></li>
                                <li className="d-flex"><FaEnvelope className="icon" /> <a href="mailto:example@gmail.com">example@gmail.com</a></li>
                                <li className="d-flex"><FiMapPin className="icon" /> 1st Avenue, Boston</li>
                            </ul>
                        </div>
                        <div className="header-bar-right text-right">
                            <div className="header-bar-right-flex d-flex">
                                <ul className="header-bar-social d-flex">
                                    <li><a href="https://facebook.com"><FaFacebookF /></a></li>
                                    <li><a href="https://twitter.com"><FaTwitter /></a></li>
                                    <li><a href="https://youtube.com"><FaYoutube /></a></li>
                                </ul>
                                <ul className="header-bar-language">
                                    <li>
                                        <a href="/" className="d-flex"><img src={flat1} alt="flag" /> English <FiChevronDown className="icon" /></a>
                                        <ul>
                                            <li><a href="/" className="d-flex"><img src={flat1} alt="flag" /> English</a></li>
                                            <li><a href="/" className="d-flex"><img src={flat2} alt="flag" /> USA</a></li>
                                            <li><a href="/" className="d-flex"><img src={flat3} alt="flag" /> France</a></li>
                                        </ul>
                                    </li>
                                </ul>
                                <div className="header-bar-cta-btn">
                                    <a href="/" className="theme-button">Work With Us <FiChevronRight className="icon" /></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
