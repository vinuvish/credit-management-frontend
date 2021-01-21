import { createStyles, Grid, makeStyles, Theme } from '@material-ui/core';
import React from 'react';
import { Route, Router, Switch } from 'react-router-dom';
import history from './app_utils/History';
import ZAppBar from './components/ZAppBar';
import ZAppBarDrawer from './components/ZAppBarDrawer';
import { fireAuth } from './firebase/firebase';
import { useAppStore } from './models_stores/appStore';
import NotFoundPage from './pages/app/NotFoundPage';
import ResetPasswordPage from './pages/auth/ResetPasswordPage';
import SignInPage from './pages/auth/SignInPage';
import ContainersPage from './pages/main/ContainersPage';
import LocationsPage from './pages/main/LocationsPage';
import UsersPage from './pages/main/UsersPage';


const AppRouterRoutes = () => {
    const classes = useStyles();
    const authUser = useAppStore((state) => state.authUser);
    const isInitializing = useAppStore((state) => state.isInitializing);

    return (
        <div>
            <Router history={history}>


                <>
                    <ZAppBar />
                    <Grid className={classes.grid}>
                        <ZAppBarDrawer />
                        <Grid className={classes.containerAuthenticated}>
                            <Switch>{[AuthenticatedRoutesAdmin]}</Switch>
                        </Grid>
                    </Grid>
                </>

            </Router>
        </div>
    );
};

const UnauthenticatedRoutes = [
    <Route exact path='/' component={SignInPage} />,
    <Route exact path='/signIn' component={SignInPage} />,
    <Route exact path='/resetPassword' component={ResetPasswordPage} />,
    <Route component={NotFoundPage} />
];

const AuthenticatedRoutesAdmin = [
    <Route exact path='/' component={ContainersPage} />,
    <Route exact path='/ctracker' component={ContainersPage} />,
    <Route exact path='/locations' component={LocationsPage} />,
    <Route exact path='/users' component={UsersPage} />,
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
