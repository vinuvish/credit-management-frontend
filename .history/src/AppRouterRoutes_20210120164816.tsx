import { Switch } from '@material-ui/core';
import React, { Component } from 'react'
import ZAppBar from './components/ZAppBar';

const AppRouterRoutes = () => {

    return (
        <div>
            <ZAppBar />
            <Switch>{[AuthenticatedRoutesAdmin]}</Switch>

        </div>
    );

}

export default AppRouterRoutes;

