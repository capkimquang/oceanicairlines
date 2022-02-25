import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Grid } from "@material-ui/core";
import Avatar from "@material-ui/core/Avatar";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import CssBaseline from "@material-ui/core/CssBaseline";
import Paper from "@material-ui/core/Paper";
import makeStyles from "@material-ui/core/styles/makeStyles";
import { ActionButton } from "../presentational-components/Button";
import {
  Container,
  Box,
  Card,
  CardActions,
  CardContent,
  Button,
  Typography,
} from "@material-ui/core";
import { Table, TableBody, TableRow, TableCell } from "@material-ui/core";
import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
} from "@material-ui/core";
import {
  SelectInput,
  TextInput,
  TextInputWithValidation,
} from "../presentational-components/Input";
import { Text, TitleText } from "../presentational-components/Text";
import ErrorDialog from "../presentational-components/ErrorDialog";
import background from "../img/dashboard3.jpg";

const useStyles = makeStyles((theme) => ({
  img: {
    maxWidth: "1200px",
  },
  container: {
    paddingTop: "1%",
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
  },
  titleText: {
    padding: "2%",
    textAlign: "center",
  },
  titleText: {
    padding: "2%",
    textAlign: "center",
  },
}));

function Dashboard() {
 const classes = useStyles();
  return (
    <React.Fragment>
      <div className={classes.titleText}>
        {" "}
        <TitleText
          value="IN OCEANIC, WE DELIVER EVERYTIME!"
          fontSize="28px"
          color="#FF5C8D"
        />
      </div>
    <Grid className = {classes.container} container spacing={2}>
      <Grid>
        <img className = {classes.img} src = {background}  />
      </Grid>
    </Grid>
  </React.Fragment>
  )
}

export default Dashboard