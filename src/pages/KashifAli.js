import React, { Component } from 'react'
import TeamDetailsContent from '../components/team/TeamDetailsContent'
import Navbar from '../components/common/Navbar'
import Breadcrumb from '../components/common/Breadcrumb'
import Footer from '../components/other/Footer'
import { FiPhone, FiLink } from 'react-icons/fi'
import { FaEnvelope, FaQuoteLeft } from 'react-icons/fa'
import UserOne from "../assets/images/kashif.jpg";
export default class KashifAli extends Component {
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
                            <h1 className="name">Kashif Ali </h1>
                            <span className="skills">Senior Legal Associate</span>
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
                                    <p className="m-b-20">Kashif Ali graduated from the University of Peshawar in 2016 and obtained his Legal Practice Certificate to appear, act and plead as an advocate from the Khyber Pakhtunkhwa Bar Council. He has worked with different law firms for more than 3 years. Initially he started his legal career in Pakistan with a local law firm called Fayaz Law Chamber as an advocate, where his duties included appearing before the District Courts and providing legal advice to clients on their legal matters. He represented clients in civil and criminal cases in the courts of Pakistan. After working with Fayaz Law Chamber for a year, he shifted to the United Arab Emirates to gain some international legal experience.</p>
                                    <p className="m-b-20">In the United Arab Emirates, he worked with local and international law firms on different projects in hospitality, litigation as well as aviation and commercial transactions. He worked on investments in hospitality projects in Pakistan, United Arab Emirates, Madagascar and Georgia. He gained experience on commercial transactions between the Republic of China and North African countries, including work on an investment of 2 billion US Dollars in Pakistan by Chinese companies at the request of the Prime Minister of Pakistan. At SHK Law, he is responsible for advising clients on restructuring and setting up their businesses.</p>
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
