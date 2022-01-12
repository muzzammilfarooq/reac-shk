import React, { Component } from 'react'
// import { FiChevronRight } from 'react-icons/fi'
// import { Link } from 'react-router-dom'
import SectionsTitle from '../common/SectionsTitle'
// import DataJson from "../../assets/data/Alerts";
export default class Alerts extends Component {
    constructor(props){
        super(props)
        this.state= {
            alertsAndUpdateData : [],
            count: this.props.count,
            parentPage: this.props.parentPage
        }
        this.fetchData()
    }
    fetchData = () => {
      fetch('https://shk-law.com/alerts.json')
      .then((response) => response.json())
      .then((json) => {
        //   console.log("alerts",json.alerts)
        this.setState({
            alertsAndUpdateData : json.alerts
        })
      })
      .catch((error) => console.error(error))
      
    }

    render() {
        return (
            <>
            {
                this.state.alertsAndUpdateData != [] && this.state.alertsAndUpdateData.length > 0 &&
                <div>
                    {
                        this.state.parentPage == "home"  &&
                        <SectionsTitle title="Alerts and Updates " subtitle="" />
                    }
               
                <div className="row">
                    {
                        this.state.alertsAndUpdateData.map((data,index) => {
                        if(this.state.parentPage == "home" && index < this.state.count){
                            var divStyle = {
                                
                            }
                            return(
                                <div className="col-md-4" key={index}>
                                    <a style={{textDecoration: 'none'}} href={data.link} target="_blank">
                                        <div className="alert-box-wrapper">
                                    
                                            <div className="alert-bg-image" style={{backgroundImage: 'url(' + data.image + ')'}}></div>
                                            <div className="alert-content">
                                                <span >{data.dateTime}</span>
                                                <h3>{data.title}</h3>
                                                <p>{data.shortDescription}</p>
                                            </div>
                                        </div>
                                    </a>
                                </div>
                                    )
                        }else if(this.state.parentPage == "alerts"){
                            return(
                                <div key={index} className="col-md-4">
                                    <a  style={{textDecoration: 'none'}}  href={data.link} target="_blank">
                                        <div className="alert-box-wrapper">
                                        <div className="alert-bg-image" style={{backgroundImage: 'url(' + data.image + ')'}}></div>
                                            <div className="alert-content">
                                                <span>{data.dateTime}</span>
                                                <h3>{data.title}</h3>
                                                <p>{data.shortDescription}</p>
                                            </div>
                                        </div>
                                    </a>
                                </div>
                                    )
                        }
                       
                        })
                    }
                    
                </div>
                {
                    this.state.parentPage == "home" &&
                    <div className="row mt-4">
                            <div className="col-md-12 text-center ">
                            
                                <a href="/alerts" className="btn-view h4" >View More</a>
                            </div>
                        </div>
                }
            </div>
    }
    {
    (Object.keys(this.state.alertsAndUpdateData).length == 0  ||  this.state.alertsAndUpdateData.length == 0) && this.state.parentPage == "alerts"  &&
        <div>
            no updates
        </div>
    }
            </>
        )
    }
}
