
import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { FiChevronRight, FiPlay } from 'react-icons/fi'
import about_video_img from '../../assets/images/img1.jpg'
import history_img from '../../assets/images/img2.jpg'
import ModalVideo from 'react-modal-video'

export default class About1 extends Component {
    constructor() {
        super()
        this.state = {
            isOpen: false
        }
        this.openModal2 = this.openModal2.bind(this)
    }

    openModal2() {
        this.setState({ isOpen: true })
    }

    render() {
        return (
            <section className="about-st1-wrapper">
                <div className="container">
                    <div className="about-st1-grid">
                        <div className="about-left">
                            <h1 className="about-left-title">
                                We Are Trusted by More Than <strong>19,700 Clients.</strong>
                            </h1>
                            <p className="about-left-desc">
                                There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum,
                            </p>
                            <Link to="/#" className="theme-button">
                                Join Now <FiChevronRight className="icon" />
                            </Link>
                        </div>
                        <div className="about-right">
                            <img className="about-right-img" src={about_video_img} alt="About Video" />
                            <ModalVideo channel='youtube' isOpen={this.state.isOpen} videoId='t3tsMEhlvwM' onClose={() => this.setState({ isOpen: false })} />
                            <div className="video-button-box">
                                <Link to="/#" className="video-button" onClick={this.openModal2}>
                                    <span className="icon"><FiPlay /></span>
                                    Watch Video
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className="history-area">
                        <div className="row">
                            <div className="col-8">
                                <img className="history_img" src={history_img} alt="History" />
                            </div>
                            <div className="history-details-box">
                                <h1 className="history-details-title">
                                    More Than <strong>300 Projects </strong>
                                    Were Completed.
                                </h1>
                                <p className="history-details-desc">
                                    There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour,
                                </p>
                                <Link to="/#" className="theme-button">
                                    Get Started <FiChevronRight className="icon" />
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}
