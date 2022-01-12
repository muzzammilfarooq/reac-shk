import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import OwlCarousel from 'react-owl-carousel';
import '../../assets/css/owl.carousel.css';
import '../../assets/css/owl.theme.default.min.css';
import { FiChevronRight } from 'react-icons/fi'

export default class owlcarousel extends Component {
    sliders = {
        items: [
            {
                title: 'Let us solve it amicably ',
                description: "SHK Law has a very amicable approach towards claims/disputes. Why litigation if it can be avoided?",
                bg: 'slide-1',
                col: '10'
            },
            {
                title: 'UAE’s First Smart Law Firm',
                description: 'We are a contemporary law firm, constantly evolving and improvising, with offices in Asia and GCC',
         
                bg: 'bg-slide-2',
                col: '10'
            },
            {
                title: 'Confidentiality is our responsibility ',
                description: 'Client confidentiality is of utmost importance to us and we observe this duty diligently',
         
                bg: 'bg-slide-3',
                col: '10'
            },
        ]
    }
    render() {
        return (
            <section className="hero-slider-wrapper">
 <OwlCarousel className="owl-theme" loop={true} autoplay={true} margin={10} dots={false} autoplaySpeed={2000} autoplayTimeout={6000}  nav={false} items={1} >
                    {this.sliders.items.map((item, index) => {
                        return <div key={index} className={'hero-slider-item ' + item.bg}>
                            <div className="container">
                                <div className="row">
                                    <div className={'col-' + item.col}>
                                        <div className="hero-slider-content">
                                            <h1>{item.title}</h1>
                                            <p>{item.description}</p>
                                     
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    })}

                </OwlCarousel>
            </section >
        )
    }
}
