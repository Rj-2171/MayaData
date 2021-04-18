import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import deleteIcon from '../Assets/delete.svg';
import "../styles.css";
 

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});

function createData(sno, name, people, date, starttime,endtime) {
  return { sno, name, people, date, starttime,endtime };
}

const rows = [
  createData(1,"John's Meeting",5,"20/08/2021","9:00 AM","11:00 AM"),
  createData(2,"John's Meeting",5,"20/08/2021","9:00 AM","11:00 AM"),
  createData(3,"John's Meeting",5,"20/08/2021","9:00 AM","11:00 AM"),
  createData(4,"John's Meeting",5,"20/08/2021","9:00 AM","11:00 AM"),
  createData(5,"John's Meeting",5,"20/08/2021","9:00 AM","11:00 AM"),
  createData("-","-------","----","---","---","--"),
];

export default function Tablepart() {
  const classes = useStyles();

  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} size="small" aria-label="a dense table">
        <TableHead>
          <TableRow>
            <TableCell>S.No</TableCell>
            <TableCell align="right">Meeting Name</TableCell>
            <TableCell align="right">No of People Attdending</TableCell>
            <TableCell align="right">Date</TableCell>
            <TableCell align="right">Start Time</TableCell>
            <TableCell align="right">End Time</TableCell>
            <TableCell align="right">Action</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.sno}>
              <TableCell component="th" scope="row">
                {row.sno}
              </TableCell>
              <TableCell align="right">{row.name}</TableCell>
              <TableCell align="right">{row.people}</TableCell>
              <TableCell align="right">{row.date}</TableCell>
              <TableCell align="right">{row.starttime}</TableCell>
              <TableCell align="right">{row.endtime}</TableCell>
              <TableCell align="center"><img src={deleteIcon} /></TableCell>
            </TableRow>
          ))}
          <button className = "add" type="submit">ADD</button>
        </TableBody>
      </Table>
    </TableContainer>
  );
}
