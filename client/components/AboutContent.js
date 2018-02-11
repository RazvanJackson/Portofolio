import React from 'react'
import {Link} from 'react-router-dom'

class AboutContent extends React.Component{
    render(){
        return(
            <div id="AboutContent">
                <div className="container">
                    <div className="content">
                        <div className="jumbotron about">
                            <h1 className="title about-title">About me</h1>
                            <p className="content-text">
                                &nbsp; &nbsp; I am a Full Stack Web Developer who can make your business come world wide web.
                                When working on a new project, I like to listen the client, so that I can have a clear
                                understanding of his/her needs and vision of the project and maybe suggest some interesting ideas.
                                I am very ambitious in getting project done and i can stay over scheduled to make it happen.
                            </p>
                        </div>

                        <div className="jumbotron qualities">
                            <h1 className="title qualities-title">Qualities</h1>
                            <ul>
                                <li className="content-text">Fast learning</li>
                                <li className="content-text">Responsibility</li>
                                <li className="content-text">Commitment</li>
                                <li className="content-text">Communication</li>
                                <li className="content-text">Fast adap</li>
                            </ul>
                        </div>

                        <div className="jumbotron skills">
                            <h1 className="title skills-title">Skills</h1>
                            <div className="row">
                                <div className="col-xl-4 col-lg-4 col-md-6 col-sm-6 cold-xl-12 box">
                                    <img src="https://preview.ibb.co/mW6Fd7/HTML_logo.png" alt="HTML" className="image"/>
                                </div>
                                <div className="col-xl-4 col-lg-4 col-md-6 col-sm-6 cold-xl-12 box">
                                    <img src="https://preview.ibb.co/bY7crS/CSS_Logo.png" alt="CSS" className="image"/>
                                </div>
                                <div className="col-xl-4 col-lg-4 col-md-6 col-sm-6 cold-xl-12 box">
                                    <img src="https://preview.ibb.co/iZPOWS/Java_Script_logo.png" alt="JavaScript" className="image"/>
                                </div>
                                <div className="col-xl-4 col-lg-4 col-md-6 col-sm-6 cold-xl-12 box">
                                    <img src="https://preview.ibb.co/gdnABS/j_Query_logo.png" alt="jQuery" className="image"/>
                                </div>
                                <div className="col-xl-4 col-lg-4 col-md-6 col-sm-6 cold-xl-12 box">
                                    <img src="https://preview.ibb.co/d191J7/Vue_logo.png" alt="Vue" className="image"/>
                                </div>
                                <div className="col-xl-4 col-lg-4 col-md-6 col-sm-6 cold-xl-12 box">
                                    <img src="https://preview.ibb.co/dUwgJ7/React_logo.png" alt="React" className="image"/>
                                </div>
                                <div className="col-xl-4 col-lg-4 col-md-6 col-sm-6 cold-xl-12 box">
                                    <img src="https://preview.ibb.co/iyD6kn/Node_Js_Logo.png" alt="NodeJS" className="image"/>
                                </div>
                                <div className="col-xl-4 col-lg-4 col-md-6 col-sm-6 cold-xl-12 box">
                                    <img src="https://image.ibb.co/hwi6kn/Mongo_DB_logo.png" alt="MongoDB" className="image"/>
                                </div>
                                <div className="col-xl-4 col-lg-4 col-md-6 col-sm-6 cold-xl-12 box">
                                    <img src="https://image.ibb.co/jHvK5n/Socket_logo.png" alt="Socket" className="image"/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default AboutContent