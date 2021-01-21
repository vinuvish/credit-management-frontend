import { Route, Router, Switch } from 'react-router-dom';

import React, { Component } from 'react'
import ZAppBar from './components/ZAppBar';
import ApplicationPage from './pages/ApplicationPage';

const AppRouterRoutes = () => {

    return (
        <div>
            <Router history={history}></Router>
            <ZAppBar />
            <Switch>{[Routes]}</Switch>
            </Router>

        </div >
    );

};
const Routes = [
    <Route exact path='/' component={ApplicationPage} />,

]

export default AppRouterRoutes;

