import React, { Component } from 'react'
import Navbar from '../components/common/Navbar'
import Breadcrumb from '../components/common/Breadcrumb'
import ContactDetails from '../components/contact/ContactDetails'
import SectionsTitle from '../components/common/SectionsTitle'
import Footer from '../components/other/Footer'

export default class ContactPage extends Component {
    render() {
        return (
            <>
                <header className="header-area">
                    <Navbar />
                </header>
                {/* <Breadcrumb title="Contact Us." /> */}
                <div className=" sec-first">

<div className="col-md-12">
    <div className="container">
        <div className="row">
            <div className="col-12">
                <SectionsTitle title="Contact Us" subtitle="Would you like to know more about us? Or get legal assistance? Get in touch! " />
            </div>
        </div>
    </div>
        
</div>
</div>
                <ContactDetails />
                <Footer />
            </>
        )
    }
}
