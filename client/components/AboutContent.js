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
                                    <img src="./img/HTML-logo.png" className="image"/>
                                </div>
                                <div className="col-xl-4 col-lg-4 col-md-6 col-sm-6 cold-xl-12 box">
                                    <img src="./img/CSS-logo.png" className="image"/>
                                </div>
                                <div className="col-xl-4 col-lg-4 col-md-6 col-sm-6 cold-xl-12 box">
                                    <img src="./img/Javascript-logo.png" className="image"/>
                                </div>
                                <div className="col-xl-4 col-lg-4 col-md-6 col-sm-6 cold-xl-12 box">
                                    <img src="./img/jQuery-logo.png" className="image"/>
                                </div>
                                <div className="col-xl-4 col-lg-4 col-md-6 col-sm-6 cold-xl-12 box">
                                    <img src="./img/Vue-logo.png" className="image"/>
                                </div>
                                <div className="col-xl-4 col-lg-4 col-md-6 col-sm-6 cold-xl-12 box">
                                    <img src="./img/React-logo.png" className="image"/>
                                </div>
                                <div className="col-xl-4 col-lg-4 col-md-6 col-sm-6 cold-xl-12 box">
                                    <img src="./img/NodeJs-logo.png" className="image"/>
                                </div>
                                <div className="col-xl-4 col-lg-4 col-md-6 col-sm-6 cold-xl-12 box">
                                    <img src="./img/MongoDB-logo.png" className="image"/>
                                </div>
                                <div className="col-xl-4 col-lg-4 col-md-6 col-sm-6 cold-xl-12 box">
                                    <img src="./img/Socket-logo.png" className="image"/>
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