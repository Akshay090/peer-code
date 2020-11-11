import React from 'react';
import ReactDOM from 'react-dom';
import { Auth0Provider } from './auth/react-auth0-spa';
import './assets/css/main.css';
import Routes from './Routes';

const { REACT_APP_DOMAIN, REACT_APP_CLIENT_ID, REACT_APP_AUDIENCE } = process.env;
ReactDOM.render(
    <React.StrictMode>
        <Auth0Provider
            domain={REACT_APP_DOMAIN}
            client_id={REACT_APP_CLIENT_ID}
            audience={REACT_APP_AUDIENCE}
            redirect_uri={`${window.location.origin}/app`}
        >
            <Routes />
        </Auth0Provider>
        ,
    </React.StrictMode>,
    document.getElementById('root'),
);
