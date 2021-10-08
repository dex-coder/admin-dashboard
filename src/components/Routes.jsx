import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { Dashboard, Customers } from '../pages/index';

const Routes = () => {
    return (
        <Switch>
            <Route exact path="/" component={Dashboard} />
            <Route path="/customers" component={Customers} />
        </Switch>
    )
}

export default Routes
