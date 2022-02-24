import React, { useContext, useEffect, useState } from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import TableToolbar from '../presentational-components/TableToolbar';
import { Container, Box, Card, CardActions, CardContent, Button, Typography } from '@material-ui/core';
import { allOrders } from '../service-components/allOrders';
import { TitleText } from '../presentational-components/Text';
import Toolbar from "@material-ui/core/Toolbar";
import { useNavigate } from 'react-router-dom';
import AddIcon from '@material-ui/icons/Add';
import makeStyles from "@material-ui/core/styles/makeStyles";
import EditIcon from '@mui/icons-material/Edit';
import { IconActionButton } from '../presentational-components/Button';
import LockResetIcon from '@mui/icons-material/LockReset';
import PersonRemoveIcon from '@mui/icons-material/PersonRemove';

let columns = [
    {
        id: 'id',
        label: 'ID',
        align: 'center',
        compareFn: (a, b, dir) => {
            const res = a.id - b.id;
            return dir === 'asc' ? res : -res;
        }
    }, {
        id: 'name',
        label: 'Name',
        align: 'left',
        compareFn: (a, b, dir) => {
            const res = a.name.toUpperCase() > b.name.toUpperCase() ? 1 : -1;
            return dir === 'asc' ? res : -res;
        }
    }, {
      id: 'role',
      label: 'Role',
      align: 'left',
      compareFn: (a, b, dir) => {
          const res = a.name.toUpperCase() > b.name.toUpperCase() ? 1 : -1;
          return dir === 'asc' ? res : -res;
      }
    }
];

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1
    },
    title: {
        flexGrow: 1,
        display: "none",
        [theme.breakpoints.up("sm")]: {
            display: "block"
        }
    },
}));

export default function Employees() {
    const classes = useStyles();
    const navigate = useNavigate();
    const [employees, setEmployees] = useState([
        {
        id: '1',
        name: 'hello1',
        role: 'hellooo1'
        },    {
        id: '2',
        name: 'hello2',
        role: 'hellooo2'
        },    {
        id: '3',
        name: 'hello3',
        role: 'hellooo3'
        },    {
        id: '4',
        name: 'hello4',
        role: 'hellooo4'
        }
    ]);

  const handleEditButton = () => {
    navigate("/employee/modify");
  } 

  const handleResetButton = () => {

  }

  const handleRemoveButton = () => {

  }

  return (
    <React.Fragment>
      <Container maxWidth = "lg">
      <Toolbar>
        <Typography className={classes.title} variant="h6" color="primary" noWrap>
            Employees
        </Typography>
    </Toolbar>
      <TableContainer>
                    <Table size="medium" stickyHeader>
                        <TableHead>
                            <TableRow>
                                {columns.map((column) => (
                                    <TableCell key = { column.id } align = { column.align }>
                                      {column.label}
                                    </TableCell>
                                ))}
                                <TableCell></TableCell>
                                <TableCell></TableCell>
                                <TableCell></TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            { employees.map((employee) => {
                                return (
                                    <TableRow hover key = { employee.id }>
                                        { columns.map((column) => {
                                            return (
                                                <TableCell key = { column.id } align = { column.align }>
                                                  { employee[column.id] }
                                                </TableCell>
                                            );
                                        })}
                                        <TableCell>
                                            <IconActionButton size = 'small' icon = {<EditIcon />} onClick = { () => handleEditButton() } />
                                        </TableCell>
                                        <TableCell>
                                            <IconActionButton disabled size = 'small' icon = {<LockResetIcon />} onClick = { () => handleResetButton() } />
                                        </TableCell>
                                        <TableCell>
                                            <IconActionButton disabled size = 'small' icon = {<PersonRemoveIcon />} onClick = { () => handleRemoveButton() } />
                                        </TableCell>
                                    </TableRow>
                                );
                            })}
                        </TableBody>
                    </Table>
                </TableContainer>
              </Container>
            </React.Fragment>
        );
}

