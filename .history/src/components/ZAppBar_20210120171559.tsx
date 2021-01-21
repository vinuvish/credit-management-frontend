import AppBar from '@material-ui/core/AppBar';
import IconButton from '@material-ui/core/IconButton';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import AccountCircle from '@material-ui/icons/AccountCircle';
import MenuIcon from '@material-ui/icons/Menu';
import React from 'react';
import history from '../app_utils/History';

export default function ZAppBar() {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState<null | HTMLElement>(null);

  const isMenuOpen = Boolean(anchorEl);




  const menuId = 'primary-search-account-menu';
  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
      id={menuId}
      keepMounted
      transformOrigin={{ vertical: 'top', horizontal: 'right' }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
      <MenuItem
        onClick={() => {

        }}
      >
        Sign Out
      </MenuItem>
    </Menu>
  );


  return (
    <div className={classes.grow}>
      <AppBar className={classes.appBar} position='fixed' elevation={2}>
        <Toolbar>
          <IconButton className={classes.menuButton} onClick={handleTemporaryDrawer} edge='start' color='inherit' aria-label='open drawer'>
            <MenuIcon />
          </IconButton>
          <Typography className={classes.title} variant='h6' noWrap>
            Credit Management System
          </Typography>

          <div className={classes.grow} />
          <div className={classes.sectionDesktop}>
            <IconButton edge='end' aria-label='account of current user' aria-controls={menuId} aria-haspopup='true' onClick={handleProfileMenuOpen} color='inherit'>
              <AccountCircle />
            </IconButton>
          </div>

        </Toolbar>
      </AppBar>



      {renderMenu}


    </div>
  );
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    appBar: {
      zIndex: theme.zIndex.drawer + 1,
      borderBottom: '1px solid rgba(0, 0, 0, 0.12)'
    },
    grow: {
      flexGrow: 1
    },
    menuButton: {
      display: 'none',
      marginRight: theme.spacing(2),
      [theme.breakpoints.down('md')]: {
        display: 'flex'
      }
    },
    title: {
      display: 'block'
    },

    content: {
      flexGrow: 1,
      padding: theme.spacing(3)
    },
    sectionDesktop: {
      display: 'flex',
      [theme.breakpoints.down('md')]: {
        display: 'none'
      }
    },
    sectionMobile: {
      display: 'none',
      [theme.breakpoints.down('md')]: {
        display: 'flex'
      }
    }
  })
);
