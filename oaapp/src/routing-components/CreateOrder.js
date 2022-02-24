import React, { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Grid } from "@material-ui/core";
import Avatar from "@material-ui/core/Avatar";
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import CssBaseline from '@material-ui/core/CssBaseline';
import Paper from '@material-ui/core/Paper';
import makeStyles from "@material-ui/core/styles/makeStyles";
import { ActionButton } from '../presentational-components/Button';
import { Container, Box, Card, CardActions, CardContent, Button, Typography } from '@material-ui/core';
import { Table, TableBody, TableRow, TableCell } from '@material-ui/core';
import { Dialog, DialogActions, DialogContent, DialogTitle } from '@material-ui/core';
import { SelectInput, TextInput, TextInputWithValidation } from '../presentational-components/Input';
import { Text } from '../presentational-components/Text';
import ErrorDialog from '../presentational-components/ErrorDialog';

const availableroute = [
    {
        departure: 'ABC',
        arrival: 'DEF',
        departureDate: '22/02/2022',
        arrivalDate: '25/02/2022',
        price: '110'
    },
    {
        departure: 'ABC',
        arrival: 'DEF',
        departureDate: '22/02/2022',
        arrivalDate: '25/02/2022',
        price: '110'
    },
    {
        departure: 'ABC',
        arrival: 'DEF',
        departureDate: '22/02/2022',
        arrivalDate: '25/02/2022',
        price: '110'
    },
    {
        departure: 'ABC',
        arrival: 'DEF',
        departureDate: '22/02/2022',
        arrivalDate: '25/02/2022',
        price: '110'
    },
];

const availablecity = [
    {
        cityCode: "CAI",
        cityName: "Cairo"
    },
    { 
        cityCode: "NYC",
        cityName: 'New York City'
    }
];

const useStyles = makeStyles((theme) => ({
    root: {
        height: '100vh',
    },
    image: {
        backgroundImage: 'url(https://tophinhanhdep.com/wp-content/uploads/2021/10/Airplane-4K-Wallpapers.jpg)',
        backgroundRepeat: 'no-repeat',
        backgroundColor:
            theme.palette.type === 'light' ? theme.palette.grey[50] : theme.palette.grey[900],
        backgroundSize: 'cover',
        backgroundPosition: 'center',
    },
    paper: {
        margin: theme.spacing(8, 4),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    avatar: {
        margin: theme.spacing(1),
        backgroundColor: theme.palette.secondary.main,
    },
    form: {
        width: '100%',
        marginTop: theme.spacing(1),
    },
}));

export default function CreateOrder() {
    const classes = useStyles();
    const navigate = useNavigate();

    const [packageInfo, setPackageInfo] = useState({
        sendername: "",
        senderphone: "",
        receivername: "",
        receiverphone: "",
        departure: "",
        arrival: "",
        dimensionx: "",
        dimensiony: "",
        dimensionz: "",
        typeofpackage: "",
        weight: ""
    });

    const [packageInfoError, setPackageInfoError] = useState({
       senderphone: false,
       receiverphone: false,
       departure: false,
       arrival: false,
       dimensionx: false,
       dimensiony: false,
       dimensionz: false,
       typeofpackage: false,
       weight: false 
    });

    const [error, setError] = useState(false);
    const [errorDialog, setErrorDialog] = useState(false);
    const [routeInfo, setRouteInfo] = useState({
        departure: '',
        arrival: '',
        departureDate: '',
        arrivalDate: '',
        price: ''
    });
    const [confirmScreen, setConfirmScreen] = useState(false);

    const handlePackageInfoChange = (prop) => (event) => {
        event.preventDefault();
        setPackageInfo({ ...packageInfo, [prop]: event.target.value });
        if (prop == "dimensionx" || prop == "dimensiony" || prop == "dimensionz") {
            setPackageInfoError({ ...packageInfoError, [prop]: (event.target.value >= 200)});
            setError(true);
        }
    };

    const handleRouteInfoChange = (event) => {

    }

    const handleConfirmButton = () => {
        let requiredField = false;
        for (const key in packageInfo) {
            if (packageInfo[key] == "") requiredField = true;
        }

        if (packageInfo['arrival'] == packageInfo['departure']) {
            console.log('hello');
            setError(true);
            console.log(error);
        }

        // check not error
        if (error || requiredField) {
            // check require
            setErrorDialog(true);
        } else {
            console.log(packageInfo);
            setConfirmScreen(true);
        }


    };

    const handleCreateOrderButton = () => {
        // call API to create order.
        navigate("/orders");
    }

    const handleBackButton = () => {
        setConfirmScreen(false);
    }

    const handleErrorDialog = () => {
        setErrorDialog(false);
    }

    return (
        <React.Fragment>
            <ErrorDialog open = { errorDialog } onClose = { () => handleErrorDialog() } error = "Please check all the input again. Either missing required field or wrong format." />
            <Container maxWidth = "lg">
                <CssBaseline />
                <div>image</div>
                <Grid sx = {{ flexGrow: 1 }} container justifyContent = 'center' spacing = {2}>
                    { confirmScreen && 
                    <Grid item xs = {12}>
                        <Text value = "Please check again all the information." align = 'left' />
                    </Grid> }
                    <Grid item xs = {12} sm = {6}>
                        <Grid container justifyContent = 'center' spacing = {1}>
                                    <Grid item xs = {12} sm = {8}>
                                        <TextInput label = "Sender Name" name = "sendername" size = "small"
                                                        value = { packageInfo['sendername'] } disabled = { confirmScreen }
                                                        onChange = { handlePackageInfoChange('sendername') } />
                                        </Grid>
                                        <Grid item xs = {12} sm = {4}>
                                            <TextInputWithValidation label = "Sender Phone" name = "senderphone" size = "small"
                                                        value = { packageInfo['senderphone'] } disabled = { confirmScreen }
                                                        onChange = { handlePackageInfoChange('senderphone') } />
                                        </Grid>
                                        <Grid item xs = {12} sm = {8}>
                                            <TextInput label = "Receiver Name" name = "receivername" size = "small"
                                                        value = { packageInfo['receivername'] } disabled = { confirmScreen }
                                                        onChange = { handlePackageInfoChange('receivername') } />
                                        </Grid>
                                        <Grid item xs = {12} sm = {4}>
                                            <TextInputWithValidation label = "Receiver Phone" name = "receiverphone" size = "small"
                                                        value = { packageInfo['receiverphone'] } disabled = { confirmScreen }
                                                        onChange = { handlePackageInfoChange('receiverphone') } />
                                        </Grid>
                                        <Grid item xs = {12} sm = {6}>
                                            <SelectInput label = "Departure" name = "departure" size = "small"
                                                        choices = { availablecity } disabled = { confirmScreen }
                                                        onChange = { handlePackageInfoChange('departure') } />
                                        </Grid>
                                        <Grid item xs = {12} sm = {6}>
                                            <SelectInput label = "Arrival" name = "arrival" size = "small"
                                                        choices = { availablecity } disabled = { confirmScreen }
                                                        onChange = { handlePackageInfoChange('arrival') } />
                                        </Grid>
                                        <Grid item xs = {12} sm = {4}>
                                            <TextInputWithValidation label = "Weight" name = "weight" size = "small"
                                                        value = { packageInfo['weight'] } disabled = { confirmScreen }
                                                        onChange = { handlePackageInfoChange('weight') } />
                                        </Grid>
                                        <Grid item xs = {12} sm = {8}>
                                            <TextInputWithValidation label = "Type of Package" name = "typeofpackage" size = "small"
                                                        value = { packageInfo['typeofpackage'] } disabled = { confirmScreen }
                                                        onChange = { handlePackageInfoChange('typeofpackage') } />
                                        </Grid>
                                        <Grid item xs = {4} sm = {4}>
                                            <TextInputWithValidation label = "Dimension (x)" name = "dimensionx" size = "small"
                                                        error = { packageInfoError['dimensionx'] } helperText = 'Smaller than 200cm.'
                                                        value = { packageInfo['dimensionx'] } disabled = { confirmScreen }
                                                        onChange = { handlePackageInfoChange('dimensionx') } />
                                        </Grid>
                                        <Grid item xs = {4} sm = {4}>
                                            <TextInputWithValidation label = "Dimension (y)" name = "dimensiony" size = "small"
                                                        error = { packageInfoError['dimensiony'] } helperText = 'Smaller than 200cm.'
                                                        value = { packageInfo['dimensiony'] } disabled = { confirmScreen }
                                                        onChange = { handlePackageInfoChange('dimensiony') } />
                                        </Grid>
                                        <Grid item xs = {4} sm = {4}>
                                            <TextInputWithValidation label = "Dimension (z)" name = "dimensionz" size = "small"
                                                        error = { packageInfoError['dimensionz'] } helperText = 'Smaller than 200cm.'
                                                        value = { packageInfo['dimensionz'] } disabled = { confirmScreen }
                                                        onChange = { handlePackageInfoChange('dimensionz') } />
                                        </Grid>
                        </Grid>
                    </Grid>
                    <Grid item xs = {12} md = {6}>
                        <Paper variant='outlined' classes = { classes.paper }>
                            {/*WIP: show only the choosen route when submit*/}
                            <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
                                <TableBody>
                                    { availableroute.map((row) => (
                                    <TableRow
                                            key = {`${row.departure}-${row.arrival}`}
                                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                                        <TableCell component="th" scope="row">{row.departure}</TableCell>
                                        <TableCell align="right">{row.arrival}</TableCell>
                                        <TableCell align="right">{row.departureDate}</TableCell>
                                        <TableCell align="right">{row.arrivalDate}</TableCell>
                                        <TableCell align="right">{row.price}</TableCell>
                                    </TableRow>
                                        )) }
                                </TableBody>
                            </Table>
                        </Paper>
                    </Grid>
                </Grid>
                {   confirmScreen ?
                        <Grid container spacing = {2} justifyContent = 'center'>
                            <Grid item xs = {12} md = {3}>
                                <ActionButton value = "Back" onClick = { () => handleBackButton() } />
                            </Grid>
                            <Grid item xs = {12} md = {3}>
                                <ActionButton value = "Create Order" onClick = { () => handleCreateOrderButton() } />
                            </Grid>
                        </Grid>
                        :
                        <Grid container spacing = {2} justifyContent = 'center'>
                            <Grid item xs = {12} md = {3}>
                                <ActionButton value = "Confirm" onClick = { () => handleConfirmButton() } />
                            </Grid>
                        </Grid>
                }
            </Container>
        </React.Fragment>
    );
};