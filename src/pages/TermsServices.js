import React, { Component } from 'react'
import Navbar from "../components/common/Navbar";
import SectionsTitle from '../components/common/SectionsTitle'
import Slider from '../components/sliders/slider'
import { Link } from 'react-router-dom'
import { FiChevronRight } from "react-icons/fi";
import UserOne from "../assets/images/bg-team1.jpg";
import UserTwo from "../assets/images/bg-team2.jpg";
import UserThree from "../assets/images/bg-team3.jpg";
import UserFour from "../assets/images/bg-team4.jpg";
import { FaMobileAlt, } from 'react-icons/fa'
import { AiOutlineMail, AiOutlineMobile } from 'react-icons/ai'
import { RiArrowRightSLine } from 'react-icons/ri'
import Footer from '../components/other/Footer';
export default class TermsServices extends Component {
    render() {
        return (
            <>
                <header className="header-area">
                    <Navbar />
                </header>
                <div className="container">
                    <div className="row sec-first">
                        <div className="col-md-12 w-800">
                            <div className="container">
                                <div className="row">
                                    <div className="col-12">
                                        <SectionsTitle title="Terms of Service" subtitle="" />
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                    <div className="sec-t1 our-team-wrapper">
                        <div className="row">
                            <div className="col-md-12 w-800">
                                <div >
                                    <h3 className="m-b-20">Privacy Policy</h3>
                                    <hr className="blue-divider" />
                                    <p>
                                        Our Privacy Policy is intended to describe to you how and what data we collect, and how and why we use your personal data. It also describes options we provide for you to access, update or otherwise take control of your personal data that we process.
                         </p>
                                    <p>
                                        By browsing, visiting, accessing and/or using the services on this Site (or searching for any of the pages on this Site), you as a customer consent and agree to our privacy policy laid out herein. You also agree that the information furnished by you is lawful, true and correct and does not violate or infringe any laws of the United Arab Emirates. In case of any violations, infringement, furnishing of wrongful or unauthorized information, the laws of the United Arab Emirates shall be applicable.
                         </p>
                                    <p>
                                        Please note that our privacy policy is subject to change at any time without notice. Therefore, you may periodically review this page to make sure you have the latest version of the privacy policy.
                         </p>
                                    <h3>What information do we collect?</h3>
                                    <p>We collect and store your personal information from you when you use our contact forms, such as name, address, email address and phone number. We also record information when you contact us, including customer service requests and notes or details explaining what you asked and how we responded. We also use cookies on our websites and mobile applications to collect information about interactions and usage, although these do not include any of your personal information.</p>
                                    <h3>How do we use information about you?</h3>
                                    <p>We use information about you to deliver, improve, update and enhance the services we provide to you. For example, we use information about you to deliver our services, and to detect and prevent fraud and abuse.</p>
                                    <h3>Do we share your data with third parties?</h3>
                                    <p>We do not share your personal data with third parties, except where required to do so by local laws and/or regulations. We only share the minimum information necessary to perform or deliver that service.</p>
                                    <h3>How can you have your personal information deleted?</h3>
                                    <p>You may request us to delete your personal data from our records. However, there may be certain legal restrictions in place that require us to retain some information about you for a certain period of time. You will be advised of such restrictions, if applicable, when we receive your request. </p>
                                    <h3>What is the purpose of the Cookies on the website?</h3>
                                    <p>Cookies on our websites allow us to improve your user experience and track your browsing behavior. This allows us to provide you with more relevant product offerings, a better experience on our websites, and to collect, analyse and improve the performance of our Services. We do not share that information with any third party. For more information please read our Cookie Statement.</p>
                                    <p>Cookies can also help us provide information that is targeted to your interests. You are always free to decline our cookies if your browser permits, although in that case you may not be able to use certain features on the Site. Additionally, you may encounter "cookies" or other similar devices on certain pages of the Site that are placed by third parties. We do not control the use of cookies by third parties.</p>
                                    <h3>How will we use your email address?</h3>
                                    <p>
                                        We will use your email address to communicate with you regarding your inquiry. We do not share your email address with any third party. You can choose not to receive email communications from us at any time by using the links shown at the bottom of email messages that we send to you.
                         </p>
                                    <h3>Who else could access your stored personal information? </h3>
                                    <p>We are obliged to cooperate with government and law enforcement officials to enforce and comply with the law as applied in the United Arab Emirates. We will disclose information about you to government or law enforcement officials as we, in our sole discretion, believe necessary or appropriate to respond to claims and legal process (such as subpoena requests), to protect our property and rights or the property and rights of a third party, to protect the safety of the public or any person, or to prevent or stop activity we consider to be illegal or unethical. To the extent we are legally permitted to do so, we will take reasonable steps to notify you in the event that we are required to provide your personal information as part of a legal process.</p>
                                    <p>If at any time you have additional questions about our practices or any of your rights described above, you may reach us at info@shklaw.com</p>
                                </div>
                            </div>
                        </div>




                    </div>
               
                    <div className="sec-t1 our-team-wrapper">
                        <div className="row">
                            <div className="col-md-12 w-800">
                                <div>
                                <h2 className="m-b-20">Cookie Statement</h2>
                                <hr className="blue-divider" />
                                    <p>
                                        In order to meet customer expectations and improve the services offered on our website, we may use cookies. If you want to learn more about what are cookies, how they're used and what your choices are, you can read more here.
                                    </p>
                                    <h3>What are cookies?</h3>
                                    <p>Cookies are small data files that are placed on your computer or mobile device when you visit a website. These cookies allow us to distinguish you from other users of our website, which helps us to understand your needs and provide better services tailored to meet your expectations.</p>
                                    <h3>How are cookies used?</h3>
                                    <p>
                                        Cookies are used for different purposes. They allow you to be recognized as the same user across the different pages of a website, between websites, or when you use an app. The types of info that we collect through cookies include IP address; browser type; browsing info; operating system; internet service provider and features used or activities engaged in within the website/apps.
                                    </p>
                                    <h3>
                                        What are your choices?
                                    </h3>
                                    <p>To learn more about cookies and how to manage or delete them, just visit allaboutcookies.org and the help section of your browser. In the settings for browsers like Internet Explorer, Safari, Firefox or Chrome, you can set which cookies to accept and which to reject. Where you find these settings depends on your browser – use the "Help" function in your browser to locate the settings you need.</p>
                                    <p>You are always free to decline our cookies if your browser permits, although in that case you may not be able to use certain features on the Site.</p>
                                    <p>If you have any questions, suggestions, or comments about this Cookie Statement, send an email to info@shklaw.com. Our Cookie Statement may also be amended from time to time – so visit this page regularly to stay up to date.</p>
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