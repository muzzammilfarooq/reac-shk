import React, { Component } from 'react'
import { AiOutlineNotification, AiOutlineUsergroupAdd, AiOutlineCheckCircle } from 'react-icons/ai'
import { FaHandshake } from 'react-icons/fa'
import { FiChevronRight } from 'react-icons/fi'
import SectionsTitle from '../common/SectionsTitle'
import { Link } from 'react-router-dom'
import CountUp from 'react-countup';


export default class CounterUp extends Component {

    counterstates = {
        items: [
            {
                icon: <AiOutlineNotification className="icon" />,
                number: <CountUp start={0}
                    end={1300}
                    duration={8}
                    separator=" "
                    decimal=","
                    prefix=" "
                    suffix=" "
                />,
                numsuffix: '+',
                title: 'Finishing Projects'
            },
            {
                icon: <AiOutlineUsergroupAdd className="icon" />,
                number: <CountUp start={0}
                    end={195}
                    duration={8}
                    separator=" "
                    decimal=","
                    prefix=" "
                    suffix=" "
                />,
                numsuffix: '+',
                title: 'Team Members'
            },
            {
                icon: <FaHandshake className="icon" />,
                number: <CountUp start={0}
                    end={750}
                    duration={8}
                    separator=" "
                    decimal=","
                    prefix=" "
                    suffix=" "
                />,
                numsuffix: '+',
                title: 'Lovely Clients'
            },
            {
                icon: <AiOutlineCheckCircle className="icon" />,
                number: <CountUp start={0}
                    end={30}
                    duration={8}
                    separator=" "
                    decimal=","
                    prefix=" "
                    suffix=" "
                />,
                numsuffix: '+',
                title: 'Years Of Experience'
            }
        ]
    }
    render() {
        return (
            <>
                <section className="counterup-wrapper text-center">
                    <div className="container">
                        <SectionsTitle title="Numbers Speak." subtitle="See What Our" />
                        <div className="counterup-grid-wrap">

                            {this.counterstates.items.map((item, index) => {
                                return <div className="counterup-items" key={index}>
                                    <div className="counterup-iconbox">
                                        {item.icon}
                                    </div>
                                    <h1 className="counterup-number">{item.number}{item.numsuffix}</h1>
                                    <p className="counterup-title">{item.title}</p>
                                </div>
                            })}

                        </div>
                        <div className="counterup-bottom-wrap">
                            <p>Do not hesitate to contact us for instant help and support</p>
                            <Link to="/#" className="theme-button">Let's Start Now <FiChevronRight className="icon" /></Link>
                        </div>
                    </div>
                </section>
            </>
        )
    }
}
