import React from 'react'
import ReactDOM from 'react-dom'
import {Switch, Router, Route, BrowserRouter} from 'react-router-dom'
import createHistory from "history/createBrowserHistory"

const history = createHistory();

import AboutPage from './pages/AboutPage'
import ContactPage from './pages/ContactPage'
import LandingPage from './pages/LandingPage'
import NotFoundPage from './pages/NotFoundPage'
import PortofolioPage from './pages/PortofolioPage'

ReactDOM.render(
    <BrowserRouter>
        <Switch>
            <Route exact path="/" component={LandingPage}/>
            <Route exact path="/portofolio" component={PortofolioPage}/>
            <Route exact path="/about" component={AboutPage}/>
            <Route exact path="/contact" component={ContactPage}/>
            <Route path="*" component={NotFoundPage}/>
        </Switch>
    </BrowserRouter>,
    document.querySelector('#root'))