import React from 'react'

import Navbar from '../components/Navbar'
import AboutContent from '../components/AboutContent'
import Background from '../components/Background'

class AboutPage extends React.Component{
    render(){
        return(
            <div id="AboutPage">
                <Background/>
                <Navbar/>
                <AboutContent/>
            </div>
        )
    }
}

export default AboutPage