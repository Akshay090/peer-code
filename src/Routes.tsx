import { BrowserRouter, Route, Switch } from 'react-router-dom';

import React from 'react';
import LandingPage from './Pages/LandingPage';
import Dashboard from './Pages/Dashboard';

const Routes = (): JSX.Element => {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/app" component={Dashboard} />
                <Route path="/" component={LandingPage} />
            </Switch>
        </BrowserRouter>
    );
};

export default Routes;
