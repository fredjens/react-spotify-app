'use strict'

import React, { Component }  from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, hashHistory, IndexRoute} from 'react-router';

import Main from './components/main';
import Home from './components/home';
import Artist from './components/artist';

import './scss/main.scss';

ReactDOM.render((
        <Router history={hashHistory}>
            <Route path="/" component={Main} >
                <IndexRoute component={Home} />
                <Route path="artists/:artistId" component={Artist} />
            </Route>
        </Router>
    ), document.getElementById('app')
);
