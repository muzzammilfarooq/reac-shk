import React, { Component } from 'react'

import SectionsTitle from '../common/SectionsTitle'
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn, FaGooglePlusG } from 'react-icons/fa'
import ContactSidebar from './ContactSidebar'
import Maps from '../contact/Maps'
import { FiMapPin, FiPhone, FiChevronRight } from 'react-icons/fi'
import { FaEnvelope } from 'react-icons/fa'
import SubscribeForm from '../other/SubscribeForm'
import ContactUs from '../contact/ContactUs'
import { FaCheckCircle } from "react-icons/fa";
export default class ContactDetails extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            email: '',
            message: '',
            subject: '',
            success: false,
            loader: false
        }
        this.onChangeState = this.onChangeState.bind(this);
        this.afterSubmission = this.afterSubmission.bind(this);
    }

    onChangeState(e) {
        this.setState({
            [e.target.name]: e.target.value
        })
    }


    sendEmail = async (e) => {

        //get parameters from from
        let company = "SHK Law";
        // let subject = "Contact Us";
        let to_email = "info@shklaw.com";
        let from_name = this.state.name;
        let from_email = this.state.email;
        let message = this.state.message;
        let subject = this.state.subject;

        //validation
        if (from_name == null || from_name == "") { return; }
        if (from_email == null || from_email == "") { return; }
        if (message == null || message == "") { return; }
        if (subject == null || subject == "") { return; }

        //construct payload
        this.setState({
            loader: false
        })
        let postData = '{"data":{';
        postData += '"company":"' + company + '",';
        postData += '"to_email":"' + to_email + '",';
        postData += '"from_name":"' + from_name + '",';
        postData += '"from_email":"' + from_email + '",';
        postData += '"message":"' + message + '"}}';

        //REST endpoint for emailer
        let APIUrl = "https://prod-24.westindia.logic.azure.com:443/workflows/534c7816e010458b920b248af1673023/triggers/manual/paths/invoke?api-version=2016-10-01&sp=%2Ftriggers%2Fmanual%2Frun&sv=1.0&sig=K0GljBg1yfOTFt3zAQbySZctngScWwCSiwAlzJzk7rc";
        try {
            console.log("postData",postData)
            var response = await fetch(APIUrl, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: postData
            })
            let result = response
            console.log("result", result)
            if (result.ok) {
                this.setState({
                    name: '',
                    email: '',
                    message: '',
                    subject: '',
                    loader: false,
                    success: true
                })
            }
            else {
                this.setState({
                    loader: false
                })

            }
        }
        catch (ex) {
            this.setState({
                loader: false
            })
        }
    }

    afterSubmission = event => {
        event.preventDefault();
    }
    render() {
        return (
           // <ContactUs></ContactUs>

            <section className="contact-form-new-wrapper">
                <div className="container">
                    <div className="contact-us-wrap ">

                        <div className="left">
                            <form onSubmit={this.afterSubmission} id="emailForm" >
                                <div className="form-grid d-grid">
                                    <div className="left m-b-15" >

                                        <input value={this.state.name} onChange={this.onChangeState} name="name" type="text" id="user_name" placeholder="Full Name" required  />
                                    </div>
                                    <div className="right m-b-15">

                                        <input value={this.state.email} onChange={this.onChangeState} name="email" type="email" id="user_email" placeholder="Email Address" required  />
                                    </div>

                                    <div className="right m-b-15">

                                        <input value={this.state.subject} onChange={this.onChangeState} name="subject" type="text" id="subject" placeholder="Subject" required  />
                                    </div>
                                </div>
                                <div className="form-textarea m-b-15">
                                    <textarea value={this.state.message} onChange={this.onChangeState} name="message" id="message" placeholder="Message" ></textarea>
                                </div>
                                {
                                    this.state.success && <div className="thanks-warp">
                                        <FaCheckCircle />
                             Message sent.</div>
                                }
                                {
                                    this.state.loader ? <button type="button" style={{ float: 'right' }} className="theme-button">Sending...</button>
                                        :
                                        <button type="button" onClick={()=> this.sendEmail()} className="theme-button" style={{ float: 'right' }}>Send Message </button>
                                }


                            </form>
                        </div>
                        <div className="right">

                            <p>ADGM
                            <br />
                            Abu Dhabi Global Market<br />
                            Abu Dhabi, United Arab Emirates</p>
                            {/* <div> 
                                <span>+971 04 409 68 40</span>
                            </div>

                            <br />
                            <br />

                            <p>#1 College Road
                            <br />
                            F-7/3 Islamabad,<br />
                            Pakistan<br />
                            RAK, United Arab Emirates</p>
                            <div> <span>+971 04 409 68 40</span></div>
                            <br /> */}
                            {/* <div> <span>info@shklaw.com</span></div> */}
                        </div>
                    </div>

                    
                </div>
            </section>

        )
    }
}
