import React from 'react'

import Navbar from '../components/Navbar'
import LandingContent from '../components/LandingContent'
import Background from '../components/Background'

class LandingPage extends React.Component{
    render(){
        return(
            <div id="LandingPage">
                <Background/>
                <Navbar/>
                <LandingContent/>
            </div>
        )
    }
}

export default LandingPage