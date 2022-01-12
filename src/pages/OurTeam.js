import React, { Component } from 'react'
import Navbar from "../components/common/Navbar";
import SectionsTitle from '../components/common/SectionsTitle'
// import Slider from '../components/sliders/slider'
import { Link } from 'react-router-dom'
// import { FiChevronRight } from "react-icons/fi";
import ProfileImageMrYousaf from "../assets/images/Yousaf-Zalme.jpg";
import ProfileImageMrMohammad from "../assets/images/Mohammad.jpg";
import ProfileImageMrKhasif from "../assets/images/kashif.jpg";
// import { FaMobileAlt, } from 'react-icons/fa'
// import { AiOutlineMail, AiOutlineMobile } from 'react-icons/ai'
// import { RiArrowRightSLine } from 'react-icons/ri'
import Footer from '../components/other/Footer';
export default class OurTeam extends Component {
    render() {
        return (
            <>
                <header className="header-area">
                    <Navbar />
                </header>
                <div className="container">

                    <div className=" our-team-wrapper sec-first">
                        <SectionsTitle title="Our Team" subtitle="" />
                        <div className="col-12  w-800">
                                <h2>Meet the SHK Law Team</h2>
                                <p>The dedication of our team is commendable. Their inclination towards innovation and urge to improvise are much appreciated by our clients. Constant internal review helps to maximize our potential.</p>
                                <p>Each member of the team has immensely contributed to the success stories that we share today, together as a team we grow.</p>
                            </div>
                        <br/>
                        <div className="row justify-content-md-center">
                            <div className=" col-md-6 col-lg-6 col-xl-4">
                                <div className="row team-box">
                                    <div className="col-lg-12 col-xl-5 img-box p-xl-0 ">
                                        <img src={ProfileImageMrYousaf} />
                                    </div>
                                    <div className="col-lg-12 col-xl-7  content-box">

                                        <h3>Yousaf Zalmé Said </h3>
                                        <span>Managing Partner/ Founder</span>
                                        <Link to="/our-team/yousaf-zalme-said" className="btn-read-more">READ MORE</Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row justify-content-md-center">
                            <div className=" col-md-6 col-lg-6 col-xl-4">
                                <div className="row team-box">
                                    <div className="col-lg-12 col-xl-5 img-box p-xl-0 ">
                                        <img src={ProfileImageMrMohammad} />
                                    </div>
                                    <div className="col-lg-12 col-xl-7  content-box">
                                        <h3>Mohammad Alharoun</h3>
                                        <span>Senior Legal Associate</span>

                                        <Link to="/our-team/mohammad-alharoun" className="btn-read-more">READ MORE</Link>

                                    </div>
                                </div>
                            </div>
                            <div className=" col-md-6 col-lg-6 col-xl-4">
                                <div className="row team-box">
                                    <div className="col-lg-12 col-xl-5 img-box p-xl-0 ">
                                        <img src={ProfileImageMrKhasif} />
                                    </div>
                                    <div className="col-lg-12 col-xl-7  content-box">
                                        <h3>Kashif Ali </h3>
                                        <span>Senior Legal Associate</span>

                                        <Link to="/our-team/Kashif-ali" className="btn-read-more">READ MORE</Link>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row m-b-60">

                        <div className="col-md-12">
                            <div className="container"> 
                                <div className="row">
                                    <div className="col-12  w-800">

                                        <h2 className="m-b-20">Principles and ethics that we operate on:</h2>
                                        <h3 className="common-h3">We are Lucid</h3>
                                        <p className="common-h2-p">We are very transparent about our services, terms and pricing. Our relationships with our clients are borne out of trust and an uncompromised integrity. </p>
                                        <h3 className="common-h3">We are Responsible</h3>
                                        <p className="common-h2-p">As we deal with legal practices, we very understand the impact we can create on the region that we operate on. We are accountable for our work and clients. </p>
                                        <h3 className="common-h3">We are Reputed</h3>
                                        <p className="common-h2-p">Our position in this industry is hard earned and well deserved by our team of reliable professionals. We honor our clients just as much. </p>
                                        <h3 className="common-h3">We are Revolutionary</h3>
                                        <p className="common-h2-p">We innovate and encourage our team members not just to be UpToDate but to progress. It produces much more effective procedures.</p>
                                        <h2>Why is SHK Law a contemporary law firm?</h2>
                                        <p>The norms of contemporary lifestyle, have increased the complexity of legal challenges. Adaptation is a way and innovation is another.  Innovation enables us to assess the matters differently and provide ultimate solutions to the client.  It is beyond being well read. We have never left a stone unturned and we don’t hesitate to be the pioneer. Our team is constantly learning, improvising in order for them to provide better than the best solutions to our clients and unfailingly maintain the quality of our services. </p>

                                        <div className=" w-800"><h2>Our Corporate Social Responsibility</h2>
                                            <p>We work for the greater good of humanity.</p>
                                            <p>Our CSR programs produce a more grounded bond amongst the employees, clients as well as the organization as an entity. It aids the support spirit and helps people to feel progressively associated with their general surroundings- like the society, the environment…</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>


                </div>



                <Footer />
            </>
        )
    }
}