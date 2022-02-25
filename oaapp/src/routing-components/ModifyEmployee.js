import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Grid, Typography } from "@material-ui/core";
import Avatar from "@material-ui/core/Avatar";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import CssBaseline from "@material-ui/core/CssBaseline";
import Paper from "@material-ui/core/Paper";
import makeStyles from "@material-ui/core/styles/makeStyles";
import { ActionButton } from "../presentational-components/Button";
import { PasswordInput, SelectInput, TextInput } from "../presentational-components/Input";
import { Text, TitleText } from "../presentational-components/Text";
import { Container } from "@material-ui/core";
import background from "../img/background.jpg";
import { height } from "@mui/system";
import { FormControl } from '@material-ui/core';
import { InputLabel } from '@material-ui/core';
import { MenuItem } from "@material-ui/core";
import { Select } from "@material-ui/core";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

const useStyles = makeStyles((theme) => ({
	container: {
		paddingTop: '1%',
		display: 'flex',
		flexDirection: 'row',
		justifyContent: 'center',
	},
  img: {
    maxHeight: '800px'
  },
  signInForm: {
	  paddingTop: '35%'
  },
  avatarGroup: {
    paddingTop: '10%'
  },
  button: {
    paddingTop: '5%'
  },
  paper: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    height: "450px",
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: "80%",
    paddingTop: '10%'
  }
}));

const roles = ["EMPLOYEE", "ADMIN", "SUPER ADMIN"];

export default function ModifyEmployee() {
  const classes = useStyles();
  const navigate = useNavigate();
  const [employeeInfo, setEmployeeInfo] = useState({
    id: '',
    name: '',
    role: ''
  });
  const [error, setError] = useState(null);

  const handleEmployeeInfoChange = (prop) => (event) => {
        event.preventDefault();
        setEmployeeInfo({ ...employeeInfo, [prop]: event.target.value });
    };

    const handleConfirmButton = () => {
        // call API to modify employee.
    }

  return (
    <React.Fragment>
      <Grid className = {classes.container} container spacing={2}>
        <Grid >
          <Container className = {classes.signInForm} maxWidth="xs">
            <CssBaseline />
            <Paper className={classes.paper}>
              <div className = {classes.avatarGroup}>
              <Avatar className={classes.avatar}>
                <AccountCircleIcon />
              </Avatar>
              </div>
              <TitleText value="Modify Employee Information" fontSize="18px" />
              <form className={classes.form}>
                <Grid
                  sx={{ flexGrow: 1 }}
                  container
                  justifyContent="center"
                  spacing={2}
                >
                  <Grid item xs={12} sm={12}>
                        <TextInput
                            disabled
                            label="ID"
                            name="id"
                            size = 'small'
                            value={employeeInfo["id"]}
                        />
                  </Grid>
                  <Grid item xs={12} sm={12}>
                        <TextInput
                            disabled
                            label="Name"
                            name="name"
                            size = 'small'
                            value={employeeInfo["name"]}
                        />
                  </Grid>
                  <Grid item xs={12} sm={12}>
                  <FormControl fullWidth>
                        <InputLabel style = {{paddingLeft: '7%'}} id="role-label">Role</InputLabel>
                        <Select
                            required fullWidth select
                            variant = "outlined"
                            labelId = "role-label"
                            size = 'small'
                            name = "Role"
                            onChange = { (event) => handleEmployeeInfoChange(event) }
                        >
                            { roles.map((role) => {
                                return (
                                    <MenuItem key = { role } value = { role }>{ role }</MenuItem>
                                );
                            })}
                        </Select>
                    </FormControl>
                  </Grid>
                  <Grid item xs={12} sm={12}>
                    <div className = {classes.button}>
                    <ActionButton
                      value="Confirm"
                      onClick={() => handleConfirmButton()}
                    />
                    </div>
                  </Grid>
                </Grid>
              </form>
            </Paper>
          </Container>
        </Grid>
      </Grid>
    </React.Fragment>
  );
}
