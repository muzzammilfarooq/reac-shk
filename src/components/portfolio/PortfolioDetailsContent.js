import React, { Component } from 'react'
import SingleImg from '../../assets/images/img15.jpg'
import { FiCheckCircle } from 'react-icons/fi'
import { FaCaretRight } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import chartimg from '../../assets/images/chart-bar.png'
import img1 from '../../assets/images/img22.jpg'

export default class PortfolioDetailsContent extends Component {
    render() {
        return (
            <section className="portfolio-details-wrapper">
                <div className="container">
                    <div className="portfolio-details-image-box">
                        <div className="portfolio-details-image">
                            <img src={SingleImg} alt="Portfolio Details" />
                        </div>
                        <div className="portfolio-details-info-grid d-grid">
                            <div className="item">
                                <h4>Client</h4>
                                <span className="d-flex">TechyDevs Ltd.</span>
                            </div>
                            <div className="item">
                                <h4>Date</h4>
                                <span className="d-flex">February 20, 2020</span>
                            </div>
                            <div className="item">
                                <h4>Services</h4>
                                <span className="d-flex"> <span><Link to="/">Business</Link>, <Link to="/">Consulting</Link></span></span>
                            </div>
                            <div className="item">
                                <h4>Website</h4>
                                <a href="https://techydevs.com" className="weblink d-flex">www.techydevs.com</a>
                            </div>
                        </div>
                        <div className="portfolio-details-content">
                            <h1>Business Management.</h1>
                            <p>Dut perspiciatis unde omnis iste natus error sit voluptatems accusantium doloremqu laudantiums ut, totams se aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae duis autems vell eums iriure dolors in hendrerit saep. HUGE bump in visitor-to-leads conversion. Just moving our same opt-in offer from the sidebar to the header I went from 2 percent of visitors becoming subscribers to 5 percent.</p>
                            <p>Eveniet in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at seds eros sed et accumsan et iusto odio dignissim. Temporibus autem quibusdam et aut officiis. Optimizing this above-the-fold area to make the most of the screen real estate had the biggest impact of all the things I tested. Switching my opt-in box from the sidebar on the right to the header area just below my logo and navigation was a</p>
                            <p>Eveniet in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at seds eros sed et accumsan et iusto odio dignissim. Temporibus autem quibusdam et aut officiis. Optimizing this above-the-fold area to make the most of the screen real estate had the biggest impact of all the things I tested. Switching my opt-in box from the sidebar on the right to the header area just below my logo and navigation was a</p>
                        </div>
                        <div className="portfolio-details-project-lists d-grid">
                            <div className="item project-features">
                                <h3>Project Features</h3>
                                <ul>
                                    <li className="d-flex"><FaCaretRight className="icon" />Strategy and Optimisation consulting</li>
                                    <li className="d-flex"><FaCaretRight className="icon" />Technologies And Innovations consultant</li>
                                    <li className="d-flex"><FaCaretRight className="icon" />Financial Planning consultant</li>
                                    <li className="d-flex"><FaCaretRight className="icon" />Marketing business plan</li>
                                    <li className="d-flex"><FaCaretRight className="icon" />Advice business plan</li>
                                    <li className="d-flex"><FaCaretRight className="icon" />Strategy business plan</li>
                                    <li className="d-flex"><FaCaretRight className="icon" />Analize business plant</li>
                                    <li className="d-flex"><FaCaretRight className="icon" />Consulting business plan</li>
                                </ul>
                            </div>
                            <div className="item solution">
                                <h3>Solutions</h3>
                                <p>Adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                                <ul>
                                    <li className="d-flex"><FiCheckCircle className="icon" />Strategy And Optimization consulting</li>
                                    <li className="d-flex"><FiCheckCircle className="icon" />Technologies And Innovations consultant</li>
                                    <li className="d-flex"><FiCheckCircle className="icon" />Financial Planning consultant</li>
                                    <li className="d-flex"><FiCheckCircle className="icon" />Secured Transactions consultant</li>
                                </ul>
                            </div>
                            <div className="item results">
                                <h3>Better Results</h3>
                                <img src={chartimg} alt="chart bar" />
                            </div>
                        </div>
                        <div className="related-projects-wrap">
                            <h2>Related Projects.</h2>
                            <div className="related-projects-grid d-grid">
                                <div className="portfolio-item">
                                    <img src={img1} alt="related project" />
                                    <div className="overlay d-flex text-center">
                                        <Link to="/portfolio-details">
                                            <h4>Business Management</h4>
                                            <span>Business</span>
                                        </Link>
                                    </div>
                                </div>
                                <div className="portfolio-item">
                                    <img src={img1} alt="related project" />
                                    <div className="overlay d-flex text-center">
                                        <Link to="/portfolio-details">
                                            <h4>Digital Analysis</h4>
                                            <span>Business</span>
                                        </Link>
                                    </div>
                                </div>
                                <div className="portfolio-item">
                                    <img src={img1} alt="related project" />
                                    <div className="overlay d-flex text-center">
                                        <Link to="/portfolio-details">
                                            <h4>Fund Management</h4>
                                            <span>Finance</span>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}
