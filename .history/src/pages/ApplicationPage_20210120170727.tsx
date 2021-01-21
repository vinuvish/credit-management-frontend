import * as React from 'react';
import { makeStyles, Theme } from '@material-ui/core/styles';
import { Grid, Paper } from '@material-ui/core';

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
              setOpenDrawer(true);
              setSelectedUser(undefined);
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
  root: {}
}));

ApplicationPage.defaultProps = {};

export default ApplicationPage;
