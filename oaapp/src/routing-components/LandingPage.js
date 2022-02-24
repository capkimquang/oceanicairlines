import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Grid, Typography } from "@material-ui/core";
import Avatar from "@material-ui/core/Avatar";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import CssBaseline from "@material-ui/core/CssBaseline";
import Paper from "@material-ui/core/Paper";
import makeStyles from "@material-ui/core/styles/makeStyles";
import { ActionButton } from "../presentational-components/Button";
import { PasswordInput, TextInput } from "../presentational-components/Input";
import { Text, TitleText } from "../presentational-components/Text";
import { Container } from "@material-ui/core";
import background from "../img/background.jpg";
import { height } from "@mui/system";

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
	paddingTop: '200px'
  },
  paper: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    height: "400px",
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: "80%",
  }
}));

export default function LandingPage() {
  const classes = useStyles();
  const navigate = useNavigate();
  const [signInInfo, setSignInInfo] = useState({
    username: "",
    password: "",
  });
  const [error, setError] = useState(null);

  const handleSignInChange = (prop) => (event) => {
    event.preventDefault();
    setSignInInfo({ ...signInInfo, [prop]: event.target.value });
  };

  const handleSignInClick = () => {
    if (
      signInInfo["username"] == "test@netcompany.com" &&
      signInInfo["password"] == "test"
    ) {
      navigate("/home");
    }
  };

  return (
    <React.Fragment>
      <Grid className = {classes.container} container spacing={2}>
        <Grid>
          <img className = {classes.img} src = {background}  />
        </Grid>
        <Grid className = {classes.signInForm}>
          <Container maxWidth="xs">
            <CssBaseline />
            <Paper className={classes.paper}>
              <Avatar className={classes.avatar}>
                <LockOutlinedIcon />
              </Avatar>
              <TitleText value="Sign In" fontSize="18px" />
              <form className={classes.form}>
                <Grid
                  sx={{ flexGrow: 1 }}
                  container
                  justifyContent="center"
                  spacing={2}
                >
                  <Grid item xs={12} sm={12}>
                    <TextInput
                      label="Username"
                      name="username"
                      value={signInInfo["username"]}
                      onChange={handleSignInChange("username")}
                    />
                  </Grid>
                  <Grid item xs={12} sm={12}>
                    <PasswordInput
                      label="Password"
                      name="password"
                      value={signInInfo["password"]}
                      onChange={handleSignInChange("password")}
                    />
                  </Grid>
                  <Grid item xs={12} sm={12}>
                    <ActionButton
                      value="Sign In"
                      onClick={() => handleSignInClick()}
                    />
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
