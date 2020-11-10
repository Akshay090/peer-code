import { BrowserRouter, Route, Switch } from 'react-router-dom';

import React from 'react';
import LandingPage from './Pages/LandingPage';

const Routes = (): JSX.Element => {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" component={LandingPage} />
            </Switch>
        </BrowserRouter>
    );
};

export default Routes;
