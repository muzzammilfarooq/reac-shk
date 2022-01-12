import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { FiChevronDown, FiShoppingCart, FiSearch, FiChevronRight } from "react-icons/fi";
import logo from "../../assets/images/logo.png";
import HeaderBar from "../common/HeaderBar";
import { ProductConsumer } from '../../productcontext'
import $ from 'jquery'
import MenuCart from "./menucart/MenuCart";
import ReactGA from 'react-ga';


export default function Navbar() {
    const [searchOpen, setsearchOpen] = useState(false)
    const [navOpen, setnavOpen] = useState(false)
    ReactGA.initialize('UA-171518286-1', { standardImplementation: true });
    ReactGA.pageview(window.location.pathname + window.location.search);


    /*====  side-widget-menu  =====*/
    $(document).on('click', '.side-menu-wrap .side-menu-ul .sidenav__item', function () {
        $(".side-menu-wrap .side-menu-ul .sidenav__item").removeClass('active');
        $(this).toggleClass("active")
    })
    $(document).on('click', '.side-menu-wrap .side-menu-ul .sidenav__item.active', function () {
        $(".side-menu-wrap .side-menu-ul .sidenav__item.active").removeClass('active');
    })

    $(window).on('scroll', function () {

        // Header Menu Fixed
        if ($(window).scrollTop() > 30) {
            $('body').addClass('header-menu-fixed');
            $('.header-menu-wrapper').addClass('d-none');
            $('.scroll-d-block').addClass('d-block').removeClass('d-none');
        } else {
            $('body').removeClass('header-menu-fixed');
            $('.header-menu-wrapper').removeClass('d-none');
            $('.scroll-d-block').removeClass('d-block').addClass('d-none');
        }
    });

    return (
        <>

            <div className="header-menu-wrapper">
                <div className="header-menu-container container">
                    <div className="header-menu-flex">
                        <div className="header-menu-left">
                            <NavLink to="/">
                                <img src={logo} alt="Logo" />
                            </NavLink>
                        </div>
                        <div className="header-menu-right">
                            <nav>
                                <ul>
                                    <li>
                                        <NavLink to="/home" >
                                            Home
                                        </NavLink>

                                    </li>
                                    <li>
                                        <NavLink to="/client-services" activeClassName="active">
                                            Client Services
                                            </NavLink>

                                    </li>
                                    {/* <li>
                                        <NavLink to="/our-team" activeClassName="active">
                                            Our Team
                                        </NavLink>

                                    </li> */}

                                    <li>
                                        <NavLink to="/alerts" activeClassName="active">
                                            Alerts
                                        </NavLink>

                                    </li>
                                    <li>
                                        <NavLink to="/terms-of-services" activeClassName="active">
                                            Terms of Service
                                        </NavLink>

                                    </li>
                                    <li>
                                        <NavLink to="/contact" activeClassName="active">
                                            Contact Us
                                        </NavLink>

                                    </li>
                                    <li>
                                        <NavLink to="/contact" className="btn-header-t1">Find a Lawyer</NavLink>
                                    </li>

                                </ul>
                            </nav>
                            <div className="header-menu-right-flex">

                                <div className="side-menu-open" onClick={() => setnavOpen(!navOpen)}>
                                    <span className="menu__bar"></span>
                                    <span className="menu__bar"></span>
                                    <span className="menu__bar"></span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="header-menu-wrapper d-none scroll-d-block">
                <div className="header-menu-container container">
                    <div className="header-menu-flex">
                        <div className="header-menu-left">
                            <a href="/">
                                <img src={logo} alt="Logo" />
                            </a>
                        </div>
                        <div className="header-menu-right">
                            <nav>
                                <ul>
                                    <li>
                                        <NavLink to="/home">
                                            Home
                                        </NavLink>

                                    </li>
                                    <li>
                                        <NavLink to="/client-services" activeClassName="active">
                                            Client Services
                                        </NavLink>

                                    </li>
                                    {/* <li>
                                        <NavLink to="/our-team" activeClassName="active">
                                            Our Team
                                        </NavLink>

                                    </li> */}

                                    <li>
                                        <NavLink to="/alerts" activeClassName="active">
                                            Alerts
                                        </NavLink>

                                    </li>
                                    <li>
                                        <NavLink to="/terms-of-services" activeClassName="active">
                                            Terms of Service
                                        </NavLink>

                                    </li>
                                    <li>
                                        <NavLink to="/contact" activeClassName="active">
                                            Contact Us
                                        </NavLink>

                                    </li>
                                    <li>
                                        <NavLink to="/contact" className="btn-header-t1">Find a Lawyer</NavLink>
                                    </li>

                                </ul>
                            </nav>
                            <div className="header-menu-right-flex">

                                <div className="side-menu-open" onClick={() => setnavOpen(!navOpen)}>
                                    <span className="menu__bar"></span>
                                    <span className="menu__bar"></span>
                                    <span className="menu__bar"></span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


            <div className={navOpen ? 'side-nav-container active' : 'side-nav-container'}>
                <div className="humburger-menu">
                    <div className="humburger-menu-lines side-menu-close" onClick={() => setnavOpen(!navOpen)}></div>
                </div>
                <div className="side-menu-wrap">
                    <ul className="side-menu-ul">
                        <li className="sidenav__item">
                            <NavLink to="/" >Home</NavLink>

                        </li>
                        <li className="sidenav__item">
                            <NavLink to="/client-services" activeClassName="active">
                                Client Services
                                        </NavLink>

                        </li>
                        {/* <li className="sidenav__item">
                            <NavLink to="/our-team" activeClassName="active">
                                Our Team
                                        </NavLink>
                        </li> */}

                        <li className="sidenav__item" >
                            <NavLink to="/alerts" activeClassName="active">
                                Alerts
                                        </NavLink>
                        </li>
                        <li className="sidenav__item">
                            <NavLink to="/terms-of-services" activeClassName="active">
                                Terms of Service
                                        </NavLink>
                        </li>
                        <li className="sidenav__item">
                            <NavLink to="/contact" activeClassName="active">
                                Contact Us
                                        </NavLink>
                        </li>
                        <li className="sidenav__item">
                            <NavLink to="/contact" className="btn-header-t1">Find a Lawyer</NavLink>
                        </li>

                    </ul>
                </div>
            </div>

        </>
    );
}



