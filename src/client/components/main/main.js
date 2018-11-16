import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Blog from '../blog/blog';
import Editor from '../editor/editor';
import SinglePost from '../singlepost/singlepost';
import CreateArticle from '../create/create';

const Main = () => (
    <Switch>
        <Route exact path='/' component={ Blog }/>
        <Route path='/edit/:slug' component={ Editor }/>
        <Route path='/post/:slug' component={ SinglePost }/>
        <Route path='/new/' component={ CreateArticle }/>
    </Switch>
)

export default Main