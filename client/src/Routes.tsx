import { BrowserRouter, Route, Switch } from 'react-router-dom';

import AuthenticatedRoute from './components/AuthenticatedRoute';
import React from 'react';
import LandingPage from './Pages/LandingPage';
import Dashboard from './Pages/Dashboard';

const Routes = (): JSX.Element => {
    return (
        <BrowserRouter>
            <Switch>
                <AuthenticatedRoute path="/app" component={Dashboard} />
                <Route path="/" component={LandingPage} />
            </Switch>
        </BrowserRouter>
    );
};

export default Routes;
