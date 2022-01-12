import React, { Component } from 'react'
import Navbar from "../components/common/Navbar";
import SectionsTitle from '../components/common/SectionsTitle'
import Service from '../components/services/Services'
import About1 from '../components/about/About1'
import Divider from '../components/other/Divider'
import About from '../components/about/About'
import CounterUp from '../components/other/CounterUp'
import Slider from '../components/sliders/slider'
import SimpleTab from '../components/tabs/SimpleTab'
import Cta from '../components/other/Cta'
import Testimonial from '../components/team/Testimonial';
import Team from '../components/team/Team';
import ChartArea from '../components/other/ChartArea';
import Clients from '../components/other/Clients';
import Pricing from '../components/other/Pricing';
import CtaForm from '../components/other/CtaForm';
import Blog from '../components/blog/Blog';
import Alerts from '../components/alertsAndUpdates/Alerts';
import { Link } from 'react-router-dom'
import { FiChevronRight } from "react-icons/fi";
import BlogImage from "../assets/images/bg-alert-blog.jpg";
import Footer from '../components/other/Footer';
export default class Home extends Component {
    render() {
        return (
            <div>
                <header className="header-area">
                    <Navbar />
                </header>
                <Slider />
                <div className="sec-t1">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12 col-lg-12 col-xl-12  w-800">
                                <SectionsTitle title="The Advent of Law" subtitle="" />
                                <p >The laws and ideas of a specific era direct the human progress of that era. Laws and ideas are the administering standards and philosophies equipped for impacting the employable elements of an era, it directly contributes to human progression, cultural development, and upheaval. </p>
<div>    <blockquote className="quote-box">
      <p className="quotation-mark">
        “
      </p>
      <p className="quote-text">
      Doing well, by doing good.
      </p>
      <hr/>
      <div className="blog-post-actions">
        <p className="blog-post-bottom pull-left text-right">
        Benjamin Franklin
        </p>
        <p className="blog-post-bottom pull-right">
          
        </p>
      </div>
    </blockquote></div>
    <p>Disputes can be efficiently resolved without causing a mayhem by resorting to concerning laws. </p>
    <p>Often, the legal aid seekers are in doubt and not sure about whom to approach and how. A professional law firm can elucidate matters with much clarity. </p>
    <h2 className="common-h2">Why entrust SHK Law with your legal needs?</h2>
    <p className="common-h2-p" style={{padding: '0px'}}>Here are a few things out of the many, that you can benefit from:</p>
    <h3 className="common-h3">Unparalleled Expertise </h3>
    <p className="common-h2-p">Our proficiency in legal matters and practices is much appreciated by the clients and often a talk in the industry that we serve. </p>
    <h3 className="common-h3">Uncompromised Quality</h3>
    <p  className="common-h3-p">We cut the overhead not the quality. It is our guiding force and is instilled with our sincere efforts and skillful execution. </p>
    <h3 className="common-h3">Unbeatable Charges</h3>
    <p  className="common-h3-p">We provide affordable services with a transparent fee structure, thereby making it available to everybody, unbiased. </p>
    <h3 className="common-h3">Comprehensive Research</h3>
    <p  className="common-h3-p">All the matters are thoroughly researched and understood by our well versed professionals prior to providing solutions.</p>
    <h3 className="common-h3">7-Days a Week!</h3>
    <p  className="common-h3-p">We are up and working 7 days a week so that you don’t have to wait to resort to legal help. Ask away!</p>
    <h3 className="common-h3">Instant Response</h3>
    <p className="common-h3-p">All your legal queries will be heard in no time and we will instantly, reach back to understand the nature of your request.</p>
    <h4 className="common-h4">Our Assurance</h4>
    <p  className="common-h4-p">We adhere to the top-notched ethical and legal standards established by our firm, and it reflects in all our practices. The privacy of our clients is well guarded as it is of utmost importance to us. </p>
                            </div>
                       
                        </div>
                    </div>
                </div>
              
                <div className="sec-alerts-updates">
                    <div className="container">
                        <Alerts count={3} parentPage={"home"} />

                    </div>
                </div>
                <Footer />
            </div>
        )
    }
}