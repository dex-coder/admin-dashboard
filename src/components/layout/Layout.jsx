import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Sidebar, TopNav} from '../index';
import Routes from '../Routes'

import './layout.css';
const Layout = () => {
    return (
        <Router>
            <Route render={(props) => (
                <div className="layout">
                    <Sidebar {...props} />
                    <div className="layout__content">
                        <TopNav />
                        <div className="layout__content-main">
                            <Routes />
                        </div>
                    </div>
                </div>
            )}>

            </Route>
        </Router>
    )
}

export default Layout
