import React, { useContext, useEffect, useState } from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import { Container, Box, Card, CardActions, CardContent, Button, Typography } from '@material-ui/core';

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
        id: 'sendername',
        label: 'Sender',
        align: 'left',
        compareFn: (a, b, dir) => {
            const res = a.name.toUpperCase() > b.name.toUpperCase() ? 1 : -1;
            return dir === 'asc' ? res : -res;
        }
    }, {
      id: 'senderphone',
      label: 'Sender Phone',
      align: 'left',
      compareFn: (a, b, dir) => {
          const res = a.name.toUpperCase() > b.name.toUpperCase() ? 1 : -1;
          return dir === 'asc' ? res : -res;
      }
    }, {
        id: 'receivername',
        label: 'Receiver',
        align: 'left',
        compareFn: (a, b, dir) => {
            const res = a.gender.toUpperCase() > b.gender.toUpperCase() ? 1 : -1;
            return dir === 'asc' ? res : -res;
        }
    }, {
      id: 'receiverphone',
      label: 'Receiver Phone',
      align: 'left',
      compareFn: (a, b, dir) => {
          const res = a.gender.toUpperCase() > b.gender.toUpperCase() ? 1 : -1;
          return dir === 'asc' ? res : -res;
      }
    }, {
        id: 'departure',
        label: 'Departure',
        align: 'left',
        compareFn: (a, b, dir) => {
            const res = a.email.toUpperCase() > b.email.toUpperCase() ? 1 : -1;
            return dir === 'asc' ? res : -res;
        }
    }, {
        id: 'arrival',
        label: 'Arrival',
        align: 'right',
        compareFn: (a, b, dir) => {
            const res = a.phone.toUpperCase() > b.phone.toUpperCase() ? 1 : -1;
            return dir === 'asc' ? res : -res;
        }
    }, {
        id: 'price',
        label: 'Price',
        align: 'right',
        compareFn: (a, b, dir) => {
            const res = a.ssn.toUpperCase() > b.ssn.toUpperCase() ? 1 : -1;
            return dir === 'asc' ? res : -res;
        }
    }
];

export default function Orders() {
  const [orders, setOrders] = useState([]);

  return (
    <React.Fragment>
      <Container maxWidth = "lg">
      <TableContainer>
                    <Table size="medium" stickyHeader>
                        <TableHead>
                            <TableRow>
                                {columns.map((column) => (
                                    <TableCell key = { column.id } align = { column.align }>
                                      {column.label}
                                    </TableCell>
                                ))}
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            { orders.map((order) => {
                                return (
                                    <TableRow hover key = { order.id }>
                                        { columns.map((column) => {
                                            return (
                                                <TableCell key = { column.id } align = { column.align }>
                                                  { order[column.id] }
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
            </React.Fragment>
        );
}

