import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter as Router, Route } from 'react-router-dom';

import './reset.css';
import './fonts/fonts.css';
import './index.css';

import App from './App';
import Event from './Event/Event';

ReactDOM.render(
    <Router>
        <Route path="/">
            <App>
                <Route path="/event/:event_name" component={Event} />
            </App>
        </Route>
    </Router>,
    document.getElementById('root')
);
