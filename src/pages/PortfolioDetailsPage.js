import React, { Component } from 'react'
import PortfolioDetailsContent from '../components/portfolio/PortfolioDetailsContent'
import Navbar from '../components/common/Navbar'
import Breadcrumb from '../components/common/Breadcrumb'
import CtaForm from '../components/other/CtaForm'
import Divider from '../components/other/Divider'
import Footer from '../components/other/Footer'

export default class PortfolioDetailsPage extends Component {
    render() {
        return (
            <>
                <header className="header-area">
                    <Navbar />
                </header>
                <Breadcrumb title="Portfolio Details." />
                <PortfolioDetailsContent />
                <Divider />
                <div className="form-white-bg">
                    <CtaForm />
                </div>
                <Footer />
            </>
        )
    }
}
