import { createStyles, Grid, makeStyles, Theme } from '@material-ui/core';
import React from 'react';
import { Route, Router, Switch } from 'react-router-dom';
import history from './app_utils/History';
import ZAppBar from './components/ZAppBar';
import ZAppBarDrawer from './components/ZAppBarDrawer';
import ApplicationPage from './pages/ApplicationPage';
import NotFoundPage from './pages/NotFoundPage';




const AppRouterRoutes = () => {
    const classes = useStyles();


    return (
        <div>
            <Router history={history}>


                <>
                    <ZAppBar />
                    <Grid className={classes.grid}>
                        <ZAppBarDrawer />
                        <Grid className={classes.containerAuthenticated}>
                            <Switch>{[Routes]}</Switch>
                        </Grid>
                    </Grid>
                </>

            </Router>
        </div>
    );
};


const Routes = [
    <Route exact path='/' component={ApplicationPage} />,
    <Route component={NotFoundPage} />
];

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        grid: {
            display: 'flex'
        },
        containerAuthenticated: {
            margin: 'auto',
            marginTop: 68,
            padding: 20,
            width: `calc(100% - 240px)`,
            [theme.breakpoints.down('md')]: {
                width: '100%'
            }
        },
        containerUnauthenticated: {}
    })
);

export default AppRouterRoutes;
