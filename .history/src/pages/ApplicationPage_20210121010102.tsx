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
  title: {
    padding: '20px 20px'
  },
  buttonAdd: {
    margin: 20
  },
}));

ApplicationPage.defaultProps = {};

export default ApplicationPage;
