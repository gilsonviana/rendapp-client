import '../../assets/css/ace.min.css'
import '../../assets/css/ace-skins.min.css'
import '../../assets/css/ace-rtl.min.css'
import React, { Component } from 'react'
import { Route } from 'react-router-dom'

import Navbar from './Navbar'
import Sidebar from './Sidebar'
import Default from './Default'

export default class Dashboard extends Component {        
    render() {
        return(
            <div className="main-container ace-save-state" id="main-container">
                <Navbar />
                <Sidebar />            
                <Route exact path={`${this.props.location.pathname}/`} component={Default} />
            </div>
        )
    }
}