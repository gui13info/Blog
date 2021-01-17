import React from 'react';

import { Switch, Route } from 'react-router-dom';

import Posts from './pages/posts';
import PostDetails from './pages/posts-details';
import User from './pages/user';

const Routes = () => (
    <Switch>
        <Route exact path="/" component={Posts} />
        <Route path="/post-details/:id" component={PostDetails} />
        <Route path="/user/:id" component={User} />
    </Switch>
);

export default Routes;