import React from 'react'
import {Link} from 'react-router-dom'

class LandingContent extends React.Component{
    render(){
        return(
            <div id="LandingContent">
                <div className="container">
                    <div className="content">
                        <h1 className="content-text">Razvan Jackson</h1>
                        <h1 className="content-text">Full Stack</h1>
                        <h1 className="content-text">Web Developer</h1>
                        <Link to="/portofolio" className="btn button">CHECK MY WORK</Link>
                    </div>
                </div>
            </div>
        )
    }
}

export default LandingContent