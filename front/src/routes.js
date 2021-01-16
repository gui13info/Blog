import React from 'react';

import { Switch, Route } from 'react-router-dom';

import Posts from './pages/posts';
import PostDetails from './pages/posts-details';

const Routes = () => (
    <Switch>
        <Route exact path="/" component={Posts} />
        <Route path="/post-details/:id" component={PostDetails} />
    </Switch>
);

export default Routes;