import React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Container from '@mui/material/Container';
import './Table.css';

function createdate(name, trackingId, date, status) {
  return { name, trackingId, date, status };
}

const rows = [
  createdate("Lasania Chiken Fri", 18908424, "2 March 2022", "Approved"),
  createdate("Big Baza Bang", 18908424, "2 March 2022", "Pending"),
  createdate("Mouth Freshner", 18908424, "2 March 2022", "Approved"),
  createdate("Cupcake", 18908424, "2 March 2022", "Delivered"),
];

const getStatusStyle = (status) => {
  if (status === 'Approved') {
    return {
      background: 'rgb(145 254 159 / 47%)',
      color: 'green',
    };
  } else if (status === 'Pending') {
    return {
      background: '#ffadad8f',
      color: 'red',
    };
  } else {
    return {
      background: '#59bfff',
      color: 'white',
    };
  }
};

export default function BasicTable() {
  return (
    <div className="Table">
      <h3>Recent Orders</h3>
      <Container>
        <TableContainer component={Paper}
          style={{ boxShadow: '0px 13px 20px 0px #80808029' }}
        >
          <Table sx={{ minWidth: 650 }}>
            <TableHead>
              <TableRow>
                <TableCell>Product</TableCell>
                <TableCell align="left">Tracking Id</TableCell>
                <TableCell align="left">Date</TableCell>
                <TableCell align="left">Status</TableCell>
                <TableCell align="left"></TableCell>
              </TableRow>
            </TableHead>

            <TableBody>
              {rows.map((row) => (
                <TableRow key={row.name}>
                  <TableCell>{row.name}</TableCell>
                  <TableCell>{row.trackingId}</TableCell>
                  <TableCell>{row.date}</TableCell>
                  <TableCell>
                    <span className='status' style={getStatusStyle(row.status)}>
                      {row.status}
                    </span>
                  </TableCell>
                  <TableCell className='details'>Detail</TableCell>
                </TableRow>
              ))}
            </TableBody>

          </Table>
        </TableContainer>
      </Container>
    </div>
  );
}