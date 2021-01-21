import { Button, Drawer, Grid, IconButton, Paper, Typography } from '@material-ui/core';
import { makeStyles, Theme } from '@material-ui/core/styles';
import * as React from 'react';
import { ApplicationModel } from '../models/ApplicationModel';
import { IoIosAddCircle, IoMdArrowBack } from 'react-icons/io';


interface Props {
    openDrawer: boolean;
    setOpenDrawer: (val: boolean) => void;
    application?: ApplicationModel;
}

const ZDrawerapplicationDetail: React.FC<Props> = ({ openDrawer, setOpenDrawer, application }) => {
    const classes = useStyles();



    return (
        <Drawer
            anchor='right'
            open={openDrawer}
            onClose={() => {
                setOpenDrawer(false);

            }}>
            <Grid className={classes.root}>
                <Paper>
                    <IconButton
                        onClick={() => {
                            setOpenDrawer(false);

                        }}>
                        <IoMdArrowBack className={classes.iconButtonBack} />
                    </IconButton>
                    <Grid container alignItems='center' >
                        <Typography className={classes.title} variant='subtitle1' id='tableTitle' component='div'>
                            ID # :
          </Typography>

                        <Typography variant='subtitle1' id='tableTitle' component='div'>
                            {application?.id}
                        </Typography>
                    </Grid>
                    <Grid container alignItems='center' >
                        <Typography className={classes.title} variant='subtitle1' id='tableTitle' component='div'>
                            FirstName:
          </Typography>

                        <Typography variant='subtitle1' id='tableTitle' component='div'>
                            {application?.firstName}
                        </Typography>
                    </Grid>

                    <Grid container alignItems='center' >
                        <Typography className={classes.title} variant='subtitle1' id='tableTitle' component='div'>
                            LastName:
          </Typography>

                        <Typography variant='subtitle1' id='tableTitle' component='div'>
                            {application?.lastName}
                        </Typography>
                    </Grid>

                    <Grid container alignItems='center' >
                        <Typography className={classes.title} variant='subtitle1' id='tableTitle' component='div'>
                            Email:
          </Typography>

                        <Typography variant='subtitle1' id='tableTitle' component='div'>
                            {application?.email}
                        </Typography>
                    </Grid>
                    <Grid container alignItems='center' >
                        <Typography className={classes.title} variant='subtitle1' id='tableTitle' component='div'>
                            Phone Number:
          </Typography>

                        <Typography variant='subtitle1' id='tableTitle' component='div'>
                            {application?.phone}
                        </Typography>
                    </Grid>
                    <Grid container alignItems='center' >
                        <Typography className={classes.title} variant='subtitle1' id='tableTitle' component='div'>
                            SSN:
          </Typography>

                        <Typography variant='subtitle1' id='tableTitle' component='div'>
                            {application?.ssn}
                        </Typography>
                    </Grid>
                    <Grid container alignItems='center' >
                        <Typography className={classes.title} variant='subtitle1' id='tableTitle' component='div'>
                            Approved Amount:
          </Typography>

                        <Typography variant='subtitle1' id='tableTitle' component='div'>
                            {application?.approvedAmount}
                        </Typography>
                    </Grid>
                    <Grid container alignItems='center' >
                        <Typography className={classes.title} variant='subtitle1' id='tableTitle' component='div'>
                            Interest Rate:
          </Typography>

                        <Typography variant='subtitle1' id='tableTitle' component='div'>
                            {application?.interestRate}
                        </Typography>
                    </Grid>
                    <Grid container alignItems='center' >
                        <Typography className={classes.title} variant='subtitle1' id='tableTitle' component='div'>
                            Payback Period:
          </Typography>

                        <Typography variant='subtitle1' id='tableTitle' component='div'>
                            {application?.paybackPeriod}
                        </Typography>
                    </Grid>
                    <Grid container alignItems='center' >
                        <Typography className={classes.title} variant='subtitle1' id='tableTitle' component='div'>
                            Loan type:
          </Typography>

                        <Typography variant='subtitle1' id='tableTitle' component='div'>
                            {application?.loanType}
                        </Typography>
                    </Grid>

                    <Grid container alignItems='center' >
                        <Typography className={classes.title} variant='subtitle1' id='tableTitle' component='div'>
                            Status:
          </Typography>

                        <Typography variant='subtitle1' id='tableTitle' component='div'>
                            {application?.status.toUpperCase()}
                        </Typography>
                    </Grid>
                </Paper>

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
                                                setSelectedApplication(Object.create(application));
                                                setDetailsDrawer(true);
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


            </Grid>
        </Drawer >
    );
}

const useStyles = makeStyles((theme: Theme) => ({

    root: {
        width: 600,
    },
    title: {
        padding: '2px 5px',
        marginLeft: 20,

    },

    cardContainer: {
        paddingTop: 10,
        marginBottom: 5,
    }, textField: {
        margin: '5px 10px'
    }, buttonSave: {
        margin: 10
    }, uploadContainer: {
        marginTop: 40
    },
    uploadImg: {
        height: 120,
        width: 120
    }, uploadCompleteButton: {
        width: 140,
        margin: '0px 10px'
    }, iconButtonContainer: {
        padding: 0,
        marginLeft: 10
    },
    iconButtonDelete: {
        padding: 0,
        color: theme.palette.secondary.light
    },
    iconButtonAdd: {
        fontSize: 30,
        color: theme.palette.primary.light
    },
    iconButtonBack: {
        fontSize: 30,
        color: 'black'
    },
    card: {
        background: theme.palette.background.default
    },
    arrowDown: {
        fontSize: 30,
    }, textFieldContainer: {
        marginTop: 5,
        marginBottom: 15
    },
    conDetailsContainer: {
        margin: 15,
    },
    containerDetails: {
        margin: 10,

    }, circularProgress: {
        position: 'relative'
    },
    divider: {
        margin: '20px 0'
    },

}));

ZDrawerapplicationDetail.defaultProps = {};

export default ZDrawerapplicationDetail;
