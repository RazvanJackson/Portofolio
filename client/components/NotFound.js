import React from 'react'
import {Link} from 'react-router-dom'

class NotFound extends React.Component{
    render(){
        return(
            <div id="NotFound">
                <div className="container">
                    <div className="content">
                        <h1 className="content-text">Page not found</h1>
                        <Link to="/" className="btn button">Click here to go to Home Page</Link>
                    </div>
                </div>
            </div>
        )
    }
}

export default NotFound