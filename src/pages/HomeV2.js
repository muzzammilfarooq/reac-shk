import React, { Component } from 'react'
import Navbar from "../components/common/Navbar";
import SectionsTitle from '../components/common/SectionsTitle'
import Divider from '../components/other/Divider'
import HeroSlidere2 from '../components/sliders/HeroSlider2'
import About2 from '../components/about/About2';
import ServiceSlider from '../components/services/ServiceSlider';
import ServiceVideo from '../components/services/ServiceVideo';
import AdvanceTab from '../components/tabs/AdvanceTab';
import CounterUp from '../components/other/CounterUp';
import Team from '../components/team/Team';
import ChartArea from '../components/other/ChartArea';
import Testimonial from '../components/team/Testimonial';
import Cta from '../components/other/Cta';
import Clients from '../components/other/Clients';
import Blog from '../components/blog/Blog';
import { Link } from 'react-router-dom'
import { FiChevronRight } from 'react-icons/fi'

import Footer from '../components/other/Footer';

export default class HomeV2 extends Component {
    render() {
        return (
            <main className="home-v2">
                <header className="header-area header-style2">
                    <Navbar />
                </header>
                <HeroSlidere2 />
                <About2 />
                <ServiceSlider />
                <ServiceVideo />
                <Divider />
                <AdvanceTab />
                <CounterUp />
                <Team />
                <Divider />
                <ChartArea />
                <Divider />
                <section className="testimonial-wrapper ">
                    <div className="text-center">
                        <SectionsTitle title="Say About Us." subtitle="See What Our Customers" />
                    </div>
                    <Testimonial />
                </section>
                <Cta />
                <Clients />
                <Divider />
                <div className="h-blog-wrap">
                    <div className="container">
                        <div className="row">
                            <div className="col-8">
                                <SectionsTitle title="Our Recent News." subtitle="Latest From The Blog" />
                            </div>
                            <div className="col-4 text-right">
                                <Link to="/blog-grid" className="theme-button">View All Posts <FiChevronRight className="icon" /></Link>
                            </div>
                        </div>
                    </div>
                    <Blog />
                </div>
                <Footer />
            </main>
        )
    }
}
