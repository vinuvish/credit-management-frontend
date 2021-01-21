import { Button, Grid, Paper, Typography } from '@material-ui/core';
import { makeStyles, Theme } from '@material-ui/core/styles';
import * as React from 'react';

interface Props { }

const ApplicationPage: React.FC<Props> = () => {
  const classes = useStyles();
  return (
    <Grid>
      <Paper>

        <Grid container alignItems='center' justify='space-between'>
          <Typography className={classes.title} variant='h6' id='tableTitle' component='div'>
            Users
          </Typography>

          <Button
            className={classes.buttonAdd}
            onClick={() => {

            }}
            size='small'
            variant='contained'
            color='primary'
          >
            Add User
          </Button>
        </Grid>

      </Paper>
    </Grid>

  );
};

const useStyles = makeStyles((theme: Theme) => ({
  root: {

  },
  title: {
    padding: '10px 10px'
  },
  buttonAdd: {
    margin: 10
  },
}));

ApplicationPage.defaultProps = {};

export default ApplicationPage;
