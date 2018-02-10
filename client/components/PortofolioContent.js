import React from 'react'
import {Link} from 'react-router-dom'

class PortofolioContent extends React.Component{
    render(){
        return(
            <div id="PortofolioContent">
                <div className="container">
                    <div className="row projects">
                        <div className="col-xl-5 col-lg-5 col-md-12 col-sm-12 col-xs-12 project">
                            <h1 className="title project-title"> Voting App </h1>
                            <div id="voting-slider" className="carousel slide" data-ride="carousel">
                                <div className="carousel-inner">
                                    <div className="carousel-item active">
                                        <img className="d-block w-100 slider-image" src="../img/Voting-1.png" alt="First slide"/>
                                    </div>
                                    <div className="carousel-item">
                                        <img className="d-block w-100 slider-image" src="../img/Voting-2.png" alt="Second slide"/>
                                    </div>
                                </div>
                                <a className="carousel-control-prev" href="#voting-slider" role="button" data-slide="prev">
                                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                                    <span className="sr-only">Previous</span>
                                </a>
                                <a className="carousel-control-next" href="#voting-slider" role="button" data-slide="next">
                                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                                    <span className="sr-only">Next</span>
                                </a>
                            </div>
                            <div className="tehnologies">
                                <h1 className="title tehnologies-title">Tehnologies:</h1>
                                <ul>
                                    <div className="row">
                                        <li className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-xs-12 tehnologies-text">Node.Js</li>
                                        <li className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-xs-12 tehnologies-text">MongoDB</li>
                                        <li className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-xs-12 tehnologies-text">Bootstrap</li>
                                        <li className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-xs-12 tehnologies-text">JavaScript</li>
                                        <li className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-xs-12 tehnologies-text">HTML</li>
                                        <li className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-xs-12 tehnologies-text">CSS</li>
                                    </div>
                                </ul>
                            </div>
                        </div>
                        <div className="col-xl-2 col-lg-2 col-md-12 col-sm-12 col-xs-12"></div>
                        <div className="col-xl-5 col-lg-5 col-md-12 col-sm-12 col-xs-12 project">
                                <h1 className="title project-title"> Gambling App </h1>
                                <div id="gambling-slider" className="carousel slide" data-ride="carousel">
                                    <div className="carousel-inner">
                                        <div className="carousel-item active">
                                            <img className="d-block w-100 slider-image" src="../img/Gambling-1.png" alt="First slide"/>
                                        </div>
                                        <div className="carousel-item">
                                            <img className="d-block w-100 slider-image" src="../img/Gambling-2.png" alt="Second slide"/>
                                        </div>
                                    </div>
                                    <a className="carousel-control-prev" href="#gambling-slider" role="button" data-slide="prev">
                                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                                        <span className="sr-only">Previous</span>
                                    </a>
                                    <a className="carousel-control-next" href="#gambling-slider" role="button" data-slide="next">
                                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                                        <span className="sr-only">Next</span>
                                    </a>
                                </div>
                            <div className="tehnologies">
                                <h1 className="title tehnologies-title">Tehnologies:</h1>
                                <ul>
                                    <div className="row">
                                        <li className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-xs-12 tehnologies-text">Node.Js</li>
                                        <li className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-xs-12 tehnologies-text">MongoDB</li>
                                        <li className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-xs-12 tehnologies-text">Socket.io</li>
                                        <li className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-xs-12 tehnologies-text">Vue.js</li>
                                        <li className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-xs-12 tehnologies-text">jQuery</li>
                                        <li className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-xs-12 tehnologies-text">JavaScript</li>
                                        <li className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-xs-12 tehnologies-text">Bulma</li>
                                        <li className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-xs-12 tehnologies-text">HTML</li>
                                        <li className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-xs-12 tehnologies-text">CSS</li>
                                    </div>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default PortofolioContent