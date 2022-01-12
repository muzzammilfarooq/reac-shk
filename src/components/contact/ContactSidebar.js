import React, { Component } from 'react'
import img1 from '../../assets/images/img1.jpg'
import { FiMapPin, FiPhone, FiChevronRight } from 'react-icons/fi'
import { FaEnvelope } from 'react-icons/fa'

export default class ContactSidebar extends Component {
    render() {
        return (
            <aside className="contact-sidebar">
                <h1>Our Office</h1>
                <img src={img1} alt="Contact Sidebar" />
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci culpa dolorum explicabo id incidunt iure</p>
                <div className="contact-sidebar-infos">
                    <div className="item d-flex">
                        <div className="icon">
                            <span><FiMapPin /></span>
                        </div>
                        <div className="details">
                            <h3>Address.</h3>
                            <span>Melbourne, Australia, 105 South Park Avenue</span>
                        </div>
                    </div>

                    <div className="item d-flex">
                        <div className="icon">
                            <span><FiPhone /></span>
                        </div>
                        <div className="details">
                            <h3>Address.</h3>
                            <span>Local: 2800 256 508</span>
                            <span>Local: 666 777 888</span>
                        </div>
                    </div>

                    <div className="item d-flex">
                        <div className="icon">
                            <span><FaEnvelope /></span>
                        </div>
                        <div className="details">
                            <h3>Email.</h3>
                            <span>Needhelp@shklaw.com</span>
                            <span>inquiry@shklaw.com</span>
                        </div>
                    </div>
                </div>

                <button className="theme-button" type="submit">Contact With Us <FiChevronRight className="icon" /></button>
            </aside>
        )
    }
}
