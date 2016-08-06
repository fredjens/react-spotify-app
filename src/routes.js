
import React from 'react';
import { Router, Route, hashHistory, IndexRoute} from 'react-router';

import Main from './containers/main';
import Home from './containers/home';
import Artist from './containers/artist';

const routes = (
    <Router history={hashHistory}>
        <Route path="/" component={Main} >
            <IndexRoute component={Home} />
            <Route path="artists/:artistId" component={Artist} />
        </Route>
    </Router>
);

export default routes;
