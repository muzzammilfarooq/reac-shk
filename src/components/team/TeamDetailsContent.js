import React, { Component } from 'react'
import img from '../../assets/images/team-8.jpg'
import { FiPhone, FiLink } from 'react-icons/fi'
import { FaEnvelope, FaQuoteLeft } from 'react-icons/fa'
import UserOne from "../../assets/images/Mohammad.jpg";
import TeamSidebar from './TeamSidebar'

export default class TeamDetailsContent extends Component {
    expertise = {
        items: [
            {
                list: "Business transformation"
            },
            {
                list: "Restructuring and turnaround"
            },
            {
                list: "Integration"
            },
            {
                list: "Growth strategy"
            }
        ]
    }
    educations = {
        items: [
            {
                list: "MBA, Rotterdam School of Management, Erasmus University"
            },
            {
                list: "BS, Engineering, Technical University of Denmark"
            }
        ]
    }
    render() {
        return (
            <section className="team-details-wrapper">
            <div className="container">
                <div className="team-details-grid-top d-grid">
                    <div className="team-details-img">
                        {/* <img src={img}  /> */}
                        <img src={UserOne} alt="Team Details" />
                    </div>
                    <div className="team-details-content">
                        <h1 className="name">Mohammad Alharoun</h1>
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
                                <p className="m-b-20">Mohammad Alharoun is a Kuwaiti attorney whose work focuses on corporate matters and dispute resolution. He graduated with a Juris Doctor degree from the University of Michigan Law School, and he is licensed by the New York Bar Association. His broad experience in the Middle East region includes advising on corporate and commercial law, real estate law and dispute resolution matters.</p>
                                <p className="m-b-20">At SHK Law, he is responsible for drafting all English-language agreements on behalf of UAE investor groups and companies, including investment agreements, escrow agreements, loan agreements and acquisition agreements.</p>
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
        )
    }
}
