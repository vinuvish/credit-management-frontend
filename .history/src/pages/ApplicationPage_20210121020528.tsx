import {
  Button,
  Container,
  Divider,
  Grid,
  IconButton,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableFooter,
  TableHead,
  TablePagination,
  TableRow,
  Typography
} from '@material-ui/core';
import { makeStyles, Theme } from '@material-ui/core/styles';
import TablePaginationActions from '@material-ui/core/TablePagination/TablePaginationActions';
import * as React from 'react';
import { useHistory } from 'react-router-dom';
import ZDrawerapplicationDetail from '../components/ZDrawerApplicationDetail';
import ZTextField from '../components/ZTextField';
import { ApplicationModel } from '../models/ApplicationModel';
import { useAppStore } from '../models_stores/appStore';

interface Props { }

const ApplicationPage: React.FC<Props> = () => {
  const classes = useStyles();
  const applications = useAppStore((state) => state.applications)

  const [search, setSearch] = React.useState<string>();
  const [applicationSearch, setApplicationSearch] = React.useState<ApplicationModel[]>([]);

  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);
  const [openDrawer, setOpenDrawer] = React.useState<boolean>(false);
  const [selectedApplication, setSelectedApplication] = React.useState<ApplicationModel[]>([]);
  const [openDetailsDrawer, setDetailsDrawer] = React.useState<boolean>(false);

  const history = useHistory()
  const handleChangePage = (event: React.MouseEvent<HTMLButtonElement> | null, newPage: number) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };
  React.useEffect(() => {
    if (search === '' || search == null) return setApplicationSearch(applications)
    if (search) return setSelectedApplication(applications.filter((application) => application.firstName.toLocaleLowerCase().includes(search.toLocaleLowerCase())));

  }, [applications, search])


  return (
    <Grid>
      <ZDrawerapplicationDetail
        openDrawer={openDetailsDrawer}
        setOpenDrawer={setDetailsDrawer}
        application={selectedApplication}
      />
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
            <ZTextField className={classes.search} onChange={setSearch} defaultValue={''} label='Search application(First Name)...' />
          </Grid>
        </Grid>
        <Divider className={classes.divider} />
        <TableContainer>
          <Table className={classes.table} aria-label='simple table'>
            <TableHead>
              <TableRow>
                <TableCell align='left'>ID#</TableCell>
                <TableCell align='left'>FirstName</TableCell>
                <TableCell align='left'>LastName</TableCell>
                <TableCell align='left'>phone</TableCell>
                <TableCell align='left'>email</TableCell>
                <TableCell align='left'>Status</TableCell>
                <TableCell align='left'>Edit/View</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {applicationSearch.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((application) => (
                <TableRow >
                  <TableCell align='left'>{application.id}</TableCell>
                  <TableCell align='left'>{application.firstName}</TableCell>
                  <TableCell align='left'>{application.lastName}</TableCell>
                  <TableCell align='left'>{application.phone}</TableCell>
                  <TableCell align='left'>{application.email}</TableCell>

                  <TableCell align='left'>

                    <Button className={classes.buttonStatus} size='small' color='primary' variant='contained'>
                      {application.status}
                    </Button>

                  </TableCell>


                  <TableCell align='left' >

                    <Button
                      size='small'
                      color='secondary'
                      variant='contained'
                      onClick={() => {
                        setSelectedApplication(Object.create(applicationSearch));
                        setOpenDrawer(true);
                      }}> Select</Button>

                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
            <TableFooter>
              <TableRow>
                <TablePagination
                  rowsPerPageOptions={[5, 10, 25, { label: 'All', value: -1 }]}
                  colSpan={7}
                  count={applicationSearch.length}
                  rowsPerPage={rowsPerPage}
                  page={page}
                  SelectProps={{
                    inputProps: { 'aria-label': 'rows per page' },
                    native: true
                  }}
                  onChangePage={handleChangePage}
                  onChangeRowsPerPage={handleChangeRowsPerPage}
                  ActionsComponent={TablePaginationActions}
                />
              </TableRow>
            </TableFooter>
          </Table>
        </TableContainer>


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
