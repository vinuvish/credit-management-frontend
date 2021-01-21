import React from 'react';
import { Route, Router, Switch } from 'react-router-dom';
import history from './app_utils/History';
import ZAppBar from './components/ZAppBar';
import ApplicationPage from './pages/ApplicationPage';

const AppRouterRoutes = () => {

    return (
        <div>

            <ZAppBar />
            <ApplicationPage />


        </div >
    );

};
const Routes = [
    <Route exact path='/' component={ApplicationPage} />,

]

export default AppRouterRoutes;

