import React, { Component } from 'react'
import { FiChevronRight } from 'react-icons/fi'
import { Link } from 'react-router-dom'

export default class ExpertiseAndServices extends Component {
    constructor(props){
        super(props);
        this.state= {
           parentPage: this.props.parentPage
        }
    }

    render() {
        return (
             <div className="col-md-4 service-expertise-wrapper">
                    
            <h2>Other Services</h2>
            <ul className="service-exp-nav">
                <li><Link to="/client-services/aviation" className="item">Aviation</Link></li>
                <li><Link to="/client-services/banking-finance" className="item">Banking and Finance</Link></li>
                <li><Link to="/client-services/corporate-commercial" className="item">Corporate & Commercial</Link></li>
                <li><Link to="/client-services/debt-recovery" className="item">Debt Recovery</Link></li>
                <li><Link to="/client-services/dispute-resolution" className="item">Dispute Resolution</Link></li>
                <li><Link to="/client-services/healthcare" className="item">Healthcare</Link></li>
                <li><Link to="/client-services/insurance-and-reinsurance" className="item">Insurance & Reinsurance</Link></li>
                <li><Link to="/client-services/intellectual-property" className="item">Intellectual Property</Link></li>
                <li><Link to="/client-services/islamic-finance" className="item">Islamic Finance</Link></li>
                <li><Link to="/client-services/labor-and-employment" className="item">Labor & Employment</Link></li>
                <li><Link to="/client-services/Maritime" className="item">Maritime</Link></li>
                <li><Link to="/client-services/project-infrastructure" className="item">Projects, Infrastructure & Energy</Link></li>
                <li><Link to="/client-services/real-estate" className="item">Real Estate & Construction</Link></li>
                <li><Link to="/client-services/technology-media" className="item">Technology, Media, & Telecom </Link></li>
            </ul>
        </div>
               
        )
    }
}
