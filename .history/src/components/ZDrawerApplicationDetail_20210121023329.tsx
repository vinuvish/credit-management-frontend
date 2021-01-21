import { Button, Divider, Drawer, Grid, IconButton, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from '@material-ui/core';
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
                                <TableCell align='left'>Plan#</TableCell>
                                <TableCell align='left'>Amortization</TableCell>
                                <TableCell align='left'>Interest</TableCell>
                                <TableCell align='left'>Invoice Fee</TableCell>
                                <TableCell align='left'>Total tp pay</TableCell>
                                <TableCell align='left'>Debt Balance</TableCell>

                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {application?.paymentPlans?.map((plan) => (
                                <TableRow >
                                    <TableCell align='left'>{plan.plan}</TableCell>
                                    <TableCell align='left'>{plan.amortization}</TableCell>
                                    <TableCell align='left'>{plan.interest}</TableCell>
                                    <TableCell align='left'>{plan.invoiceFee}</TableCell>
                                    <TableCell align='left'>{plan.totalPay}</TableCell>
                                    <TableCell align='left'>{plan.debtBalance}</TableCell>



                                </TableRow>
                            ))}
                        </TableBody>

                    </Table>
                </TableContainer>


            </Grid>
        </Drawer >
    );
}

const useStyles = makeStyles((theme: Theme) => ({

    root: {
        width: 500,
    },
    title: {
        padding: '2px 5px',
        marginLeft: 20,

    },
    table: {
        minWidth: 400
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
