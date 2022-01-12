import React, { Component } from 'react'
import HeaderError from '../components/common/HeaderError'
import FooterError from '../components/other/FooterError'
import ErrorContent from '../components/other/ErrorContent'

export default class Error extends Component {
    render() {
        return (
            <div className="error-wrap">
                <span className="error-circle"></span>
                <span className="error-circle"></span>
                <span className="error-circle"></span>
                <span className="error-circle"></span>
                <span className="error-circle"></span>
                <span className="error-circle"></span>
                <span className="error-circle"></span>
                <span className="error-circle"></span>
                <HeaderError />
                <div className="container">
                    <ErrorContent />
                    <FooterError />
                </div>
            </div>
        )
    }
}
