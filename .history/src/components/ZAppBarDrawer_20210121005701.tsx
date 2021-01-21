import Drawer from '@material-ui/core/Drawer';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import React from 'react';
import Toolbar from '@material-ui/core/Toolbar';
import { BsCreditCard, BsExclude, BsInbox } from 'react-icons/bs';
import { FiUsers } from 'react-icons/fi';
import { IconType } from 'react-icons/lib';
import { MdLocationCity } from 'react-icons/md';
import { Link, RouteComponentProps, withRouter } from 'react-router-dom';
import { ListSubheader, Typography } from '@material-ui/core';
import { VscOpenPreview } from 'react-icons/vsc';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import { useAppStore } from '../models/appStore';

const drawerWidth = 240;

interface Props {
  name?: string;
  house?: string;
}

interface PropsItems {
  to: string;
  selected: boolean;
  icon: IconType;
  title: string;
}

const ZAppBarDrawer: React.FC<RouteComponentProps & Props> = ({ history: h }) => {
  const classes = useStyles();

  console.log(h.location.pathname);

  const ZLinkItem = (props: PropsItems) => {
    const Icon = props.icon;
    return (
      <ListItem className={classes.listItem} button component={Link} to={props.to} selected={props.selected}>
        <ListItemIcon>
          <Icon className={classes.icons} />
        </ListItemIcon>
        <Typography className={classes.tabText}>{props.title}</Typography>
      </ListItem>
    );
  };

  return (
    <div>
      <Drawer elevation={0} className={classes.drawer} variant='permanent' classes={{ paper: classes.drawerPaper }}>
        <Toolbar />

        <div className={classes.drawerContainer}>

          <>
            <ListSubheader className={classes.listSubheader}>Review</ListSubheader>
            <ZLinkItem to={'/ctracker'} selected={h.location.pathname === '/ctracker' || h.location.pathname === '/'} icon={BsInbox} title={'Applications'} />
            <ListSubheader className={classes.listSubheader}>Management</ListSubheader>
            <ZLinkItem to={'/users'} selected={h.location.pathname === '/users'} icon={FiUsers} title={'Users'} />
            <ZLinkItem to={'/compenies'} selected={h.location.pathname === '/locations'} icon={MdLocationCity} title={'compenies'} />
          </>

        </div>
      </Drawer>
    </div>
  );
};

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    drawer: {
      width: drawerWidth,

      flexShrink: 0,
      [theme.breakpoints.down('md')]: {
        display: 'none'
      }
    },
    drawerTemp: {
      flexShrink: 0,
      display: 'none',
      [theme.breakpoints.down('md')]: {
        display: 'flex'
      }
    },
    drawerTempListWidth: {
      width: drawerWidth
    },
    drawerPaper: {
      width: drawerWidth
    },
    drawerContainer: {
      overflow: 'auto'
    },
    content: {
      flexGrow: 1,
      padding: theme.spacing(3)
    },
    listItem: {
      margin: '4px 0px'
    },
    listSubheader: {
      margin: '4px 0px'
    },
    icons: {
      fontSize: 18,
      color: '#546e7a'
    },
    tabText: {
      marginLeft: -18,
      fontFamily: 'Roboto, Helvetica, Arial, sans-serif',
      fontWeight: 500,
      lineHeight: 1.5,
      letterSpacing: '0.00938em',
      color: '#546e7a',
      fontSize: '0.925rem'
    }
  })
);

export default withRouter(ZAppBarDrawer);
