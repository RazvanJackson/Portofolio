import React from 'react'

import Navbar from '../components/Navbar'
import ContactContent from '../components/ContactContent'
import Background from '../components/Background'


class ContactPage extends React.Component{
    render(){
        return(
            <div id="ContactPage">
                <Background/>
                <Navbar/>
                <ContactContent/>
            </div>
        )
    }
}

export default ContactPage