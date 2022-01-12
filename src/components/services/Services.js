import React, { Component } from 'react'
import { Link } from "react-router-dom";
import { FiTarget, FiMonitor } from "react-icons/fi";
import { MdAccountBalance } from "react-icons/md";
import { AiOutlineDollar, AiOutlineFileSearch } from "react-icons/ai";
import { IoIosBuild } from "react-icons/io";


export default class Service extends Component {
    servicestates = {
        items: [
            {
                icon: <FiTarget className="service-items-icon" />,
                title: 'Finance Management.',
                description: 'sed quia lipsum dolor sit atur adipiscing elit is nunc quis tellus sed ligula porta ultricies quis nec neulla.'
            },
            {
                icon: <MdAccountBalance className="service-items-icon" />,
                title: 'Banking Investigation.',
                description: 'sed quia lipsum dolor sit atur adipiscing elit is nunc quis tellus sed ligula porta ultricies quis nec neulla.'
            },
            {
                icon: <AiOutlineDollar className="service-items-icon" />,
                title: 'Business Insurance.',
                description: 'sed quia lipsum dolor sit atur adipiscing elit is nunc quis tellus sed ligula porta ultricies quis nec neulla.'
            },
            {
                icon: <AiOutlineFileSearch className="service-items-icon" />,
                title: 'Market Research.',
                description: 'sed quia lipsum dolor sit atur adipiscing elit is nunc quis tellus sed ligula porta ultricies quis nec neulla.'
            },
            {
                icon: <IoIosBuild className="service-items-icon" />,
                title: 'Strong Business',
                description: 'sed quia lipsum dolor sit atur adipiscing elit is nunc quis tellus sed ligula porta ultricies quis nec neulla.'
            },
            {
                icon: <FiMonitor className="service-items-icon" />,
                title: 'Large Markets',
                description: 'sed quia lipsum dolor sit atur adipiscing elit is nunc quis tellus sed ligula porta ultricies quis nec neulla.'
            }
        ]
    }
    render() {
        return (
            <section className="services-area">
                <div className="container">
                    <div className="services-items-grid">
                        {
                            this.servicestates.items.map((item, index) => {
                                return <div className="service-items" key={index}>
                                    <span className="service-items-num">{index}</span>
                                    <span className="service-items-iconbox">{item.icon}</span>
                                    <Link to="/service-details">
                                        <h3 className="service-items-title">{item.title}</h3>
                                    </Link>
                                    <p className="service-items-description">{item.description}</p>
                                </div>
                            })
                        }
                    </div>
                </div>
            </section>
        )
    }
}

