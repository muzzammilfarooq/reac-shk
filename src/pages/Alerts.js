import React, { Component } from 'react'
import Navbar from "../components/common/Navbar";
import SectionsTitle from '../components/common/SectionsTitle'
// import Slider from '../components/sliders/slider'
// import { Link } from 'react-router-dom'
// import { FiChevronRight } from "react-icons/fi";
// import UserOne from "../assets/images/bg-team1.jpg";
// import UserTwo from "../assets/images/bg-team2.jpg";
// import UserThree from "../assets/images/bg-team3.jpg";
// import UserFour from "../assets/images/bg-team4.jpg";
// import { FaMobileAlt, } from 'react-icons/fa'
// import { AiOutlineMail, AiOutlineMobile } from 'react-icons/ai'
// import { RiArrowRightSLine } from 'react-icons/ri'
import AlertsAndUpdates from '../components/alertsAndUpdates/Alerts';
// import BlogImage from "../assets/images/bg-alert-blog.jpg";
import Footer from '../components/other/Footer';
export default class Alerts extends Component {
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
                                    <div className="col-12">
                                        <SectionsTitle title="Alerts and Updates" subtitle="Read all you need to know about law and more... Get latest updates, alerts, news across varied industries like Healthcare, Banking and Finance etc. " />
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                    <div className="sec-alerts-updates bg-white">
                        <AlertsAndUpdates parentPage = {"alerts"} />
                    </div>
                </div>
                <Footer />
            </>
        )
    }
}