
import React from 'react';
import { Router, Route, hashHistory, IndexRoute} from 'react-router';

import Main from './views/main';
import Home from './views/home';
import Artist from './views/artist';

const routes = (
    <Router history={hashHistory}>
        <Route path="/" component={Main} >
            <IndexRoute component={Home} />
            <Route path="artists/:artistId" component={Artist} />
        </Route>
    </Router>
);

export default routes;
