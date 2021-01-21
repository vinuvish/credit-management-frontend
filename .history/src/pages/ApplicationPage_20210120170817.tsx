import * as React from 'react';
import { makeStyles, Theme } from '@material-ui/core/styles';
import { Grid, Paper, Typography } from '@material-ui/core';
import { Button } from '@material-ui/core';

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
    buttonAdd: {
      margin: 10
    },
  }
}));

ApplicationPage.defaultProps = {};

export default ApplicationPage;
