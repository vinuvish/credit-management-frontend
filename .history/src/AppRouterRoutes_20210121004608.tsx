import { Grid } from '@material-ui/core';
import { createStyles, makeStyles, Theme } from '@material-ui/core';
import React from 'react';
import { Route, Router, Switch } from 'react-router-dom';
import history from './app_utils/History';
import ZAppBar from './components/ZAppBar';
import ApplicationPage from './pages/ApplicationPage';

const AppRouterRoutes = () => {
    const classes = useStyles();
    return (
        <div>
            <Router history={history}>



                <>

                    <ZAppBar />
                    <ApplicationPage />
                    {/* <Switch>{[Routes]}</Switch> */}

                </>
            </Router>

        </div >
    );

};
const Routes = [
    <Route exact path='/' component={ApplicationPage} />,

]
const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        grid: {
            display: 'flex'
        },

    })
);
export default AppRouterRoutes;

