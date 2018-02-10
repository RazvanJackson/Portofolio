import React from 'react'
import {Link} from 'react-router-dom'

class Navbar extends React.Component{
    render(){
        return(
            <div id="Navbar">
                <nav className="navbar navbar-expand-lg">
                    <div className="container">
                        <a href="/" className="navbar-brand"><i className="fas fa-code"></i></a>
                        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbar-right" aria-controls="navbar-right" aria-expanded="false" aria-label="Toggle navigation">
                            <i class="fas fa-bars icon"></i>
                        </button>
                        
                        <div className="collapse navbar-collapse" id="navbar-right">
                            <ul className="nav navbar-nav navbar-right ml-auto">
                                <li className="nav-item">
                                    <Link to="/portofolio" className="btn nav-link"><i className="fas fa-suitcase"></i>&nbsp;Portofolio</Link>
                                </li>
                                <li className="nav-item">
                                    <Link to="/about" className="btn nav-link"><i className="fas fa-user"></i>&nbsp;About</Link>
                                </li>
                                <li className="nav-item">
                                    <Link to="/contact" className="btn nav-link"><i className="far fa-address-book"></i>&nbsp;Contact</Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </div>
        )
    }
}

export default Navbar