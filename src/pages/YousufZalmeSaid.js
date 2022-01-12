import React, { Component } from 'react'
import TeamDetailsContent from '../components/team/TeamDetailsContent'
import Navbar from '../components/common/Navbar'
import Breadcrumb from '../components/common/Breadcrumb'
import Footer from '../components/other/Footer'
import { FiPhone, FiLink } from 'react-icons/fi'
import { FaEnvelope, FaQuoteLeft } from 'react-icons/fa'
import UserOne from "../assets/images/Yousaf-Zalme.jpg";

export default class MohammadAlharoun extends Component {
    render() {
        return (
            < >
                <header className="header-area">
                    <Navbar />
                </header>

                <section className="team-details-wrapper">
                <div className="container">
                    <div className="team-details-grid-top d-grid">
                        <div className="team-details-img">
                            {/* <img src={img}  /> */}
                            <img src={UserOne} alt="Team Details" />
                        </div>
                        <div className="team-details-content">
                            <h1 className="name">Yousaf Zalmé Said</h1>
                            <span className="skills">Managing Partner/ Founder</span>
                            {/* <p className="desc">Dubai Maze Tower, UAE</p> */}
                            {/* <ul className="team-details-contact">
                                <li><a href="tel:+971 99 999 9999"> +971 99 999 9999</a></li>
                                <li><a href="mailto:s.qudah@tamimi.com"> xxxxx@SaidAndCo.com</a></li>
                                <li><a href="www.collinroberts.com"><span className="icon"><FiLink /></span> www.collinroberts.com</a></li> 
                            </ul> */}
                            {/* <div className="team-expertise-education-grid d-grid">
                                <div className="left">
                                    <h2>Practices</h2>
                                    <p>Corporate Structuring</p>
                                    <ul className="team-details-expertise lists">
                                        {this.expertise.items.map((item, index) => {
                                            return <li key={index}>{item.list}</li>
                                        })}
                                    </ul>
                                </div>
                                <div className="right">
                                    <h2>Education</h2>
                                    <p>1997 – <em>LLM, </em>University of Aberdeen</p>
                                    <p>1995 – <em>LLB, </em>University of Jordan</p>
                                    <ul className="team-details-education lists">
                                        {this.educations.items.map((item, index) => {
                                            return <li key={index}>{item.list}</li>
                                        })}
                                    </ul>
                                </div>
                            </div> */}
                            {/* <div className="team-expertise-education-grid d-grid"><div className="left"><h2> Languages    </h2><p>Arabic</p>
                                <p>English</p></div><div className="right"><h2>Sectors</h2><p>Fast Moving Consumer Goods</p><p>Education</p>
                                   </div>
                                   </div> */}
                            <div className="team-expertise-education-grid d-grid">
                                <div className="left">
                                    <h2>Biography</h2>
                                    <p className="m-b-20">Mr Yousaf Zalmé Said is the Managing Partner of SHK Law and has developed a thriving corporate and commercial practice for the firm with some of the top Family offices and Sovereign Wealth Funds within the GCC .  He  heads yet other corporate entities from diversified verticals. </p>
                                    <p className="m-b-20">
                                        Having attained Master of Laws (LLM) from Queen Mary University of London and a Bar-at- Law from Lincolns Inn Uk , and with 15+ years of practice in the Middle east region, he set off to establish SHK Law, a contemporary law firm with networks covering the Gulf Corporation Council (GCC), Europe and every other nook of the world. The firm is also a member of the International Chamber of Commerce (ICC) and the International Bar Association (IBA).
                                    </p>
                                </div></div>
                            {/* <div className="team-expertise-education-grid d-grid">
                                <div className="left">
                                    <h2>Practices</h2>
                                    <p>Corporate Structuring</p>
                                  
                                </div>
                                <div className="right">
                                    <h2>Education</h2>
                                    <p>1997 – <em>LLM, </em>University of Aberdeen</p>
                                    <p>1995 – <em>LLB, </em>University of Jordan</p>
                                    
                                </div>
                            </div> */}
                        </div>
                    </div>

                </div>
            </section>
                <Footer />

            </>
        )
    }
}
