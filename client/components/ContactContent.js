import React from 'react'
import {Link} from 'react-router-dom'

class ContactContent extends React.Component{
    render(){
        return(
            <div id="ContactContent">
                <div className="container">
                    <div className="content">
                        <h1 className="content-text"><i className="fas fa-envelope"></i>&nbsp; Email: razvan_jackson@yahoo.com</h1>
                        <h1 className="content-text"><i className="fab fa-skype"></i>&nbsp; Skype: razvan_jackson@yahoo.com</h1>
                        <h1 className="content-text"><i className="fas fa-phone"></i>&nbsp; Phone Number: +40722002640</h1>
                    </div>
                </div>
            </div>
        )
    }
}

export default ContactContent