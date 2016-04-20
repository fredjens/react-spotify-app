'use strict'

import React, { Component }  from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, Link, browserHistory } from 'react-router'

import Main from './components/main';
import RelatedArtists from './components/RelatedArtists';

import './scss/main.scss';

ReactDOM.render((
        <Router history={browserHistory}>
            <Route path="/" component={Main} >
                <Route path="artists/:artistId" component={RelatedArtists} />
            </Route>
        </Router>
    ), document.getElementById('app')
);
