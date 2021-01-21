import { Button, Card, CardContent, Divider, Drawer, Grid, IconButton, LinearProgress, Typography } from '@material-ui/core';
import { makeStyles, Theme } from '@material-ui/core/styles';
import * as React from 'react';
import { useForm } from 'react-hook-form';
import { FaLongArrowAltDown } from 'react-icons/fa';
import { GrFormClose } from 'react-icons/gr';
import { IoIosAddCircle, IoMdArrowBack } from 'react-icons/io';
import { RiDeleteBin3Fill } from 'react-icons/ri';

type FormData = {
    location: string;
    comment: string
}
interface Props {
    openDrawer: boolean;
    setOpenDrawer: (val: boolean) => void;
    application?: ApplicationModel;
}
const status: string[] = ['created', 'transferred', 'received'];

const ZDrawerapplicationDetail: React.FC<Props> = ({ openDrawer, setOpenDrawer, container }) => {
    const classes = useStyles();
    const authUser = useAppStore((state) => state.authUser);
    const locations = useAppStore((state) => state.locations);
    const [isShowDelete, setIsShowDelete] = React.useState<boolean>(false);
    const [isAddStep, setIsAddStep] = React.useState<boolean>(false);
    const [isShowAddStep, setIsShowAddStep] = React.useState<boolean>(false);
    const [isShowBackPage, setIsShowBackPage] = React.useState<boolean>(false);
    const { handleSubmit, errors, control, getValues } = useForm<FormData>({ mode: 'onSubmit', reValidateMode: 'onChange' });
    const [isUploadComplete, setIsUploadComplete] = React.useState<boolean>(false);
    const [isComplete, setIsComplete] = React.useState<boolean>(false);
    const [isLoding, setIsLoding] = React.useState<boolean>(false);

    const [filteredLocation, setFilteredLocation] = React.useState<LocationModel[]>([]);
    // const [status, setFilteredLocation] = React.useState<LocationModel[]>([]);



    React.useEffect(() => {

        setIsShowDelete(true)
        setIsShowAddStep(true)
        setIsAddStep(false)
        setIsUploadComplete(false);
        setIsShowBackPage(false);
        setIsComplete(container?.isCompleted ?? false);
        setIsLoding(false)
        setFilteredLocation(locations.filter((loc) => { return loc.name !== container?.trackingDetails?.slice(-1)[0].location }))
    }, [openDrawer, container]);


    const onSubmit = handleSubmit(async (data: FormData) => {
        setIsLoding(true)
        let locId: string = '';
        let status: string = '';
        if (data.location) {
            locations.forEach((element) => {
                if (element.name === data.location) {
                    locId = element.documentId;
                }
            })
        }
        else { locId = container!.trackingDetails!.slice!(-1)[0].locationId }
        if (
            container!.trackingDetails?.slice(-1)[0].status.toLocaleLowerCase() === 'created' ||
            container!.trackingDetails?.slice(-1)[0].status.toLocaleLowerCase() === 'received'
        ) {
            status = 'Transferred'
        }
        else if (isComplete) {
            status = 'Completed'
        }
        else { status = 'Received' }

        const trackingDetails: ITrackingDetailsUpdate = {
            comment: data.comment,
            status: status,
            userId: authUser!.id,
            userEmail: authUser!.email,
            userName: authUser!.getFullName(),
            locationId: locId,
            isCompleted: isComplete
        }

        const res = await ContainerService.containerTrackingStepAdd(trackingDetails, container!);

        if (res) {
            setIsUploadComplete(true);
        }

        setIsLoding(false)

    })
    return (
        <Drawer
            anchor='right'
            open={openDrawer}
            onClose={() => {
                setOpenDrawer(false);
                setIsShowAddStep(true);
                setIsShowDelete(true);
                setIsAddStep(false);
                setIsShowBackPage(false)
                setIsUploadComplete(true);
                setIsLoding(false)
            }}>
            <Grid container justify='space-between' alignItems='center'>
                {isShowBackPage && (
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
                )}
                {!isAddStep && (
                    <Grid container item xs={7}>
                        <Typography className={classes.title} variant='h6' id='tableTitle' component='div'>
                            Container Details
                     </Typography>
                    </Grid>
                )}

                {isAddStep && container!.trackingDetails?.slice(-1)[0].status.toLocaleLowerCase() === status[1] && (
                    <Grid container item xs={7}>
                        <Typography className={classes.title} variant='h6' id='tableTitle' component='div'>
                            Add Step - Recieved
                                    </Typography>
                    </Grid>
                )}
                {isAddStep && container!.trackingDetails?.slice(-1)[0].status.toLocaleLowerCase() !== status[1] && (
                    <Grid container item xs={7}>
                        <Typography className={classes.title} variant='h6' id='tableTitle' component='div'>
                            Add Step - Transfer
                                    </Typography>
                    </Grid>
                )}
                {isShowAddStep && !isComplete && (
                    <IconButton
                        onClick={() => {
                            setIsShowAddStep(false);
                            setIsShowDelete(false);
                            setIsAddStep(true);
                            setIsShowBackPage(true)

                        }}>
                        <IoIosAddCircle className={classes.iconButtonAdd} />
                    </IconButton>
                )}
                {isShowDelete && !isComplete && (
                    <IconButton
                        onClick={() => {
                            setIsShowDelete(true);
                        }}>
                        <RiDeleteBin3Fill className={classes.iconButtonDelete} />
                    </IconButton>
                )}
                {isComplete && !isAddStep && (

                    <Button size='small' color='secondary' variant='contained'  >
                        COMPLETED
                    </Button>

                )}
                <IconButton
                    onClick={() => {
                        setOpenDrawer(false);
                        setIsShowAddStep(true);
                        setIsShowDelete(true);
                        setIsAddStep(false);
                        setIsShowBackPage(false)
                    }}>
                    <GrFormClose />
                </IconButton>


            </Grid>
            <Divider />

            {
                !isAddStep && (
                    <Grid className={classes.root} key={'trackingDetails'} >
                        <Grid className={classes.cardContainer} container
                            direction="column"
                            alignItems="center"
                            justify="center"
                        ><Grid item md={12} className={classes.conDetailsContainer}>
                                <Typography variant='subtitle2' id='conId' >
                                    Container Id# : {container?.containerId}
                                </Typography>
                            </Grid>
                            <Divider />

                            <Grid item md={11} >
                                {container?.trackingDetails?.map((details, index) => (
                                    <><Card
                                        variant="outlined"
                                        className={classes.card}
                                        key={index}
                                    >
                                        <CardContent>
                                            <Typography>
                                                {details.location}
                                            </Typography>
                                            <Typography variant="subtitle2" component="h2">
                                                {details.status}: {DateParser(details.timestampCreated, true)}
                                            </Typography>
                                            <Typography variant="subtitle2" component="h2">
                                                {details.userName}
                                            </Typography>
                                            <Divider />
                                            <Typography variant="body2">
                                                {details.comment}
                                            </Typography>
                                        </CardContent>
                                    </Card>
                                        {index !== container!.trackingDetails!.length - 1 && (
                                            <Grid className={classes.cardContainer} container
                                                direction="row"
                                                alignItems="center"
                                                justify="center">
                                                <FaLongArrowAltDown className={classes.arrowDown} />
                                                <Typography variant="subtitle2" component="h2">
                                                    {container!.trackingDetails![index + 1]!.timestampCreated.getDate() - details.timestampCreated.getDate()}
                                                </Typography>
                                            </Grid>

                                        )}

                                    </>
                                ))}

                            </Grid>
                        </Grid>
                        {isLoding && (<LinearProgress className={classes.textField} />)}

                    </Grid>
                )
            }

            {
                isAddStep && !isUploadComplete && (
                    <Grid className={classes.root} key={'addStep'}>
                        <Grid className={classes.textFieldContainer} container>
                            <Grid item xs={12} md={12} className={classes.conDetailsContainer} >
                                <Typography variant="subtitle2" component="h2" className={classes.containerDetails}>
                                    Id# : {container!.containerId}
                                </Typography>
                                <Typography variant="subtitle2" component="h2" className={classes.containerDetails}>
                                    Location : {container!.trackingDetails?.slice(-1)[0].location}
                                </Typography>
                                <Typography variant="subtitle2" component="h2" className={classes.containerDetails}>
                                    Current Status : {container!.trackingDetails?.slice(-1)[0].status}
                                </Typography>

                                <Typography variant="subtitle2" component="h2" className={classes.containerDetails}>
                                    User : {container!.trackingDetails?.slice(-1)[0].userName}
                                </Typography>


                                <Typography variant="subtitle2" component="h2" className={classes.containerDetails}>
                                    Date : {DateParser(container!.trackingDetails!.slice(-1)![0]!.timestampCreated, true)}
                                </Typography>
                                <Divider />
                            </Grid>
                            <Divider />
                            {(container!.trackingDetails?.slice(-1)[0].status.toLocaleLowerCase() === status[0] ||
                                container!.trackingDetails?.slice(-1)[0].status.toLocaleLowerCase() === status[2])
                                && (
                                    <Grid item xs={12} md={12}>
                                        <ZTextFormFieldDropdown
                                            className={classes.textField}
                                            name='location'
                                            label='Location' control={control}
                                            error={errors.location}
                                            rules={{ required: 'Please select location', }}
                                            defaultValue={filteredLocation[0].name}
                                            valuesMap={filteredLocation} />

                                    </Grid>
                                )}
                            <Grid item xs={12} md={12}>
                                <ZTextFormField
                                    className={classes.textField}
                                    error={errors.comment}
                                    rules={{ required: 'Comments id required', }}
                                    label='Comment'
                                    name='comment'
                                    rows={3}
                                    control={control}
                                />
                            </Grid>
                            {container!.trackingDetails?.slice(-1)[0].status.toLocaleLowerCase() === status[1] && (
                                <Grid item xs={12} md={12}>
                                    <ZSwitchListTile label='Compleate the process' value={isComplete} onChange={(v) => setIsComplete(v)} />
                                </Grid>
                            )}
                        </Grid>

                        <Grid container alignItems='center' justify='center'>
                            <Button type='submit' onClick={onSubmit} className={classes.buttonSave} size='medium' color='primary' fullWidth variant='contained' disabled={isLoding}>
                                Confirm
                        </Button>
                        </Grid>

                        {isLoding && (<LinearProgress className={classes.textField} />)}

                    </Grid>)}
            {isUploadComplete && (
                <Grid className={classes.uploadContainer} container alignItems='center'>
                    <Grid item xs={12} container justify='center' alignItems='center' direction='column'>
                        <img className={classes.uploadImg} src={require('../assets/images/successUpload.png')} alt='' />
                        <p>Tracking Step Added Successful!</p>
                    </Grid>
                    <Grid item xs={12} container justify='center'>
                        <Button
                            className={classes.uploadCompleteButton}
                            onClick={() => {
                                setOpenDrawer(false);
                                setIsShowAddStep(true);
                                setIsShowDelete(true);
                                setIsAddStep(false);
                                setIsShowBackPage(false)
                                setIsUploadComplete(false);
                                setIsLoding(false)
                            }}
                            variant='outlined' >
                            Close </Button>
                    </Grid>

                </Grid>
            )
            }
        </Drawer >
    );
}

const useStyles = makeStyles((theme: Theme) => ({

    root: {
        width: 420,
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
