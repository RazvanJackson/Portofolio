import React from 'react'

import Navbar from '../components/Navbar'
import NotFound from '../components/NotFound'
import Background from '../components/Background'

class NotFoundPage extends React.Component{
    render(){
        return(
            <div id="NotFoundPage">
                <Background/>
                <NotFound/>
            </div>
        )
    }
}

export default NotFoundPage