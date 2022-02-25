import React, { useContext, useEffect, useState } from "react";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import TableToolbar from "../presentational-components/TableToolbar";
import {
  Container,
  Box,
  Card,
  CardActions,
  CardContent,
  Button,
  Typography,
  makeStyles,
  Paper,
} from "@material-ui/core";
import { allOrders } from "../service-components/allOrders";
import { TitleText } from "../presentational-components/Text";
import Toolbar from "@material-ui/core/Toolbar";
import { useNavigate } from "react-router-dom";
import AddIcon from "@material-ui/icons/Add";
import background from "../img/delivery5.jpg";

let columns = [
  {
    id: "id",
    label: "ID",
    align: "center",
    compareFn: (a, b, dir) => {
      const res = a.id - b.id;
      return dir === "asc" ? res : -res;
    },
  },
  {
    id: "sendername",
    label: "Sender",
    align: "left",
    compareFn: (a, b, dir) => {
      const res = a.name.toUpperCase() > b.name.toUpperCase() ? 1 : -1;
      return dir === "asc" ? res : -res;
    },
  },
  {
    id: "senderphone",
    label: "Sender Phone",
    align: "left",
    compareFn: (a, b, dir) => {
      const res = a.name.toUpperCase() > b.name.toUpperCase() ? 1 : -1;
      return dir === "asc" ? res : -res;
    },
  },
  {
    id: "receivername",
    label: "Receiver",
    align: "left",
    compareFn: (a, b, dir) => {
      const res = a.gender.toUpperCase() > b.gender.toUpperCase() ? 1 : -1;
      return dir === "asc" ? res : -res;
    },
  },
  {
    id: "receiverphone",
    label: "Receiver Phone",
    align: "left",
    compareFn: (a, b, dir) => {
      const res = a.gender.toUpperCase() > b.gender.toUpperCase() ? 1 : -1;
      return dir === "asc" ? res : -res;
    },
  },
  {
    id: "departure",
    label: "Departure",
    align: "left",
    compareFn: (a, b, dir) => {
      const res = a.email.toUpperCase() > b.email.toUpperCase() ? 1 : -1;
      return dir === "asc" ? res : -res;
    },
  },
  {
    id: "arrival",
    label: "Arrival",
    align: "right",
    compareFn: (a, b, dir) => {
      const res = a.phone.toUpperCase() > b.phone.toUpperCase() ? 1 : -1;
      return dir === "asc" ? res : -res;
    },
  },
  {
    id: "price",
    label: "Price",
    align: "right",
    compareFn: (a, b, dir) => {
      const res = a.ssn.toUpperCase() > b.ssn.toUpperCase() ? 1 : -1;
      return dir === "asc" ? res : -res;
    },
  },
];
const useStyles = makeStyles((theme) => ({
  title: {
    padding: "2%",
    textAlign: "center",
  },
  background: {
    backgroundImage: `url(${Image})`,
    maxWWidth: '1200px'
  },
  img: {
    maxWidth: '1800px'
  },
  imgContainer: {
    display: 'flex',
		flexDirection: 'row',
		justifyContent: 'center',
  }
}));

export default function Orders() {
  const classes = useStyles();
  const navigate = useNavigate();
  const [orders, setOrders] = useState([
    {
      id: "1",
      sendername: "Malcom Gladwell",
      senderphone: "0905555789",
      receivername: "Adam Smith",
      receiverphone: "0914114115",
      departure: "TUR",
      arrival: "CAI",
      price: 1800,
    },
    {
      id: "2",
      sendername: "Adam Josh",
      senderphone: "0905123123",
      receivername: "Joe Jenvey",
      receiverphone: "0956876123",
      departure: "EGY",
      arrival: "CAI",
      price: 2500,
    },
    {
      id: "3",
      sendername: "Joe Smith",
      senderphone: "0905555789",
      receivername: "Selena Doe",
      receiverphone: "0914189981",
      departure: "MAL",
      arrival: "VTU",
      price: 1900,
    },
    {
      id: "4",
      sendername: "Malcom Gladwell",
      senderphone: "0905555789",
      receivername: "Adam Smith",
      receiverphone: "090017181719",
      departure: "CAI",
      arrival: "MAL",
      price: 2800
    },
  ]);

  const handleNewOrderClick = () => {
    navigate("/order/create");
  };

  return (
    <div className = {classes.background}>
      <div className={classes.title}>
        {" "}
        <TitleText value="ORDER MANAGEMENT" fontSize="28px" color="#FF5C8D" />
      </div>
      <Container maxWidth="lg">
        <TableToolbar
          buttonIcon={<AddIcon />}
          buttonText="New Order"
          onClick={() => handleNewOrderClick()}
        />
        <TableContainer>
          <Table size="medium" stickyHeader>
            <TableHead>
              <TableRow>
                {columns.map((column) => (
                  <TableCell key={column.id} align={column.align}>
                    {column.label}
                  </TableCell>
                ))}
              </TableRow>
            </TableHead>
            <TableBody>
              {orders.map((order) => {
                return (
                  <TableRow hover key={order.id}>
                    {columns.map((column) => {
                      return (
                        <TableCell key={column.id} align={column.align}>
                          {order[column.id]}
                        </TableCell>
                      );
                    })}
                  </TableRow>
                );
              })}
            </TableBody>
          </Table>
        </TableContainer>
      </Container>
      <div className = {classes.imgContainer}>
      <img className = {classes.img} src = {background}  />
      </div>
    </div>
  );
}
