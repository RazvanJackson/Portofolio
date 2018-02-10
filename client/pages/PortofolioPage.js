import React from 'react'

import Navbar from '../components/Navbar'
import Background from '../components/Background'
import Portofolio from '../components/PortofolioContent'

class PortofolioPage extends React.Component{
    render(){
        return(
            <div id="PortofolioPage">
                <Background/>
                <Navbar/>
                <Portofolio/>
            </div>
        )
    }
}

export default PortofolioPage