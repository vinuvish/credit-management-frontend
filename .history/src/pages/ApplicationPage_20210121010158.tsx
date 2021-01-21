import { Button, Grid, Paper, Typography } from '@material-ui/core';
import { makeStyles, Theme } from '@material-ui/core/styles';
import * as React from 'react';
import ZTextField from '../components/ZTextField';

interface Props { }

const ApplicationPage: React.FC<Props> = () => {
  const classes = useStyles();
  const [search, setSearch] = React.useState<string>();
  return (
    <Grid>
      <Paper>

        <Grid container alignItems='center' justify='space-between'>
          <Typography className={classes.title} variant='h6' id='tableTitle' component='div'>
            Application
          </Typography>

          <Button
            className={classes.buttonAdd}
            onClick={() => {

            }}
            size='small'
            variant='contained'
            color='primary'
          >
            Add Application
          </Button>
        </Grid>
        <Grid container alignItems='center' justify='space-between'>
          <Grid item md={12}>
            <ZTextField className={classes.search} onChange={setSearch} defaultValue={''} label='Search users...' />
          </Grid>
        </Grid>
        <Divider className={classes.divider} />



      </Paper>
    </Grid>

  );
};

const useStyles = makeStyles((theme: Theme) => ({
  root: {

  },
  search: {
    margin: '10px 10px'
  },
  itemsGrid: {
    marginTop: 30
  },
  buttonView: {
    padding: 0
  },
  buttonStatus: {
    padding: 0
  },
  title: {
    padding: '10px 10px'
  },
  divider: {
    margin: '20px 0'
  },
  buttonAdd: {
    margin: 10
  },
  itemPaper: {
    padding: 10,
    margin: 10
  },
  itemButton: {
    margin: '0px 3px',
    padding: 0
  },
  table: {
    minWidth: 650
  },
  tablePagination: {
    width: '100%'
  },
  itemText: {
    // margin: '5px auto'
  },
  iconButtonContainer: {
    padding: 0,
    marginLeft: 20
  },
  iconButtonEdit: {
    padding: 0,
    fontSize: 22,
    color: theme.palette.secondary.light
  },
  iconButtonView: {
    padding: 0,
    fontSize: 22,
    color: theme.palette.primary.light
  }
}));

ApplicationPage.defaultProps = {};

export default ApplicationPage;
