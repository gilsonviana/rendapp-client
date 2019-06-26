import React, { Component } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import Sidebar from './Sidebar';

export default class Dashboard extends Component {        
    render() {
        return(
            <div className="main-container ace-save-state" id="main-container">
                <Sidebar />            
                {/** MAIN CONTENT */}    
            </div>
        )
    }
}