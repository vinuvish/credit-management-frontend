import { Button, Drawer, Grid, Paper, Typography } from '@material-ui/core';
import { makeStyles, Theme } from '@material-ui/core/styles';
import * as React from 'react';
import { ApplicationModel } from '../models/ApplicationModel';


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
                            setIsShowAddStep(true);
                            setIsShowDelete(true);
                            setIsAddStep(false);
                            setIsShowBackPage(false)
                            setIsUploadComplete(false);
                            setIsLoding(false)

                        }}>
                        <IoMdArrowBack className={classes.iconButtonBack} />
                    </IconButton>
                    <Grid container alignItems='center' >
                        <Typography className={classes.title} variant='h6' id='tableTitle' component='div'>
                            Application :
          </Typography>

                        <Typography className={classes.title} variant='h6' id='tableTitle' component='div'>
                            Application
          </Typography>
                    </Grid>
                </Paper>
            </Grid>
        </Drawer >
    );
}

const useStyles = makeStyles((theme: Theme) => ({

    root: {
        width: 600,
    },
    title: {
        padding: '17.5px 10px',
        fontWeight: 600,
        fontSize: 18
    }, cardContainer: {
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


}));

ZDrawerapplicationDetail.defaultProps = {};

export default ZDrawerapplicationDetail;
