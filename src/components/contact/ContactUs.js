import React, {useState} from 'react';
import emailjs from 'emailjs-com';
import { FaCheckCircle } from "react-icons/fa";
//import './ContactUs.css';

export default function ContactUs() {
  
const [success, setSuccess] = useState(false);
const [loader, setLoader] = useState(false);

  function sendEmail(e) {
      console.log("ikm")
        e.preventDefault();
        setLoader(true)
    emailjs.sendForm('waqartech', 'template_OZh8FDut', e.target, 'user_kTusFBQ6ty2taI9La4WQp')
      .then((result) => {
          console.log(result.text);
          setSuccess(true)
          setLoader(false)
          document.getElementById("emailForm").reset();

      }, (error) => {
          console.log(error.text);
          setLoader(false)
      });
  }

  return (
    <section className="contact-form-new-wrapper">
                <div className="container">
                    <div className="contact-us-wrap ">
                  
                        <div className="left">
                            <form onSubmit={sendEmail} id = "emailForm" >
                                <div className="form-grid d-grid">
                                    <div className="left m-b-15" >
                                     
                                        <input type="text" id="user_name" placeholder="Full Name" required name="user_name" />
                                    </div>
                                    <div className="right m-b-15">
                                    
                                        <input type="email" id="user_email" placeholder="Email Address" required name="user_email" />
                                    </div>
                                  
                                    <div className="right m-b-15">
                                   
                                        <input type="text" id="subject" placeholder="Subject" required name="subject"/>
                                    </div>
                                </div>
                                <div className="form-textarea m-b-15">
                                    <textarea id="message" placeholder="Message" name="message"></textarea>
                                </div>
                                {
                                 success && <div className="thanks-warp">
                                                 <FaCheckCircle />
                                 Message sent.</div>
                                }   
                                {
                                    loader  ? <button type="button" style={{float:'right'}} className="theme-button">Sending...</button>
                                    :
                                    <button type="submit" className="theme-button" style={{float:'right'}}>Send Message </button>
                                }
                                
                                
                            </form>
                         </div>
                        <div className="right">
                     
                        <p>RAKN-223
                            <br/>
                            Rakeen Building<br/>
                            Al Hamra Industrial Zone-FZ<br/>
                            RAK,United Arab Emirates</p>
                            <p> <span>+971 04 409 68 40</span></p>

                            <br/>
                            <br/>
                       
                        <p>#1 College Road    
                            <br/>
                            F-7/3 Islamabad,<br/>
                            Pakistan<br/>
                            RAK, United Arab Emirates</p>
                        
                           
                            <p> <span>+971 04 409 68 40</span></p>
                       
                            <p> <span>info@shklaw.com</span></p>
                        </div>
                    </div>

                    {/* <div className="contact-form-map-grid d-grid">
                        <div className="left">
                            <Maps />
                        </div>
                        <div className="right">
                            <ContactSidebar />
                        </div>
                    </div>

                    <div className="contact-form-subscribe-wrap text-center">
                        <h1>Subscribe to Newsletter</h1>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci culpa dolorum explicabo id incidunt <br /> iure maxime obcaecati Duis consectetur auctor elit Neque, Vel?</p>
                        <SubscribeForm />
                    </div> */}
                </div>
            </section>
  );
}