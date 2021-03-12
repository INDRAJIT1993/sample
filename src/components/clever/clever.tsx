import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Navbar from '../Navbar/Navbar';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import './clever.css';
import { blue } from '@material-ui/core/colors';
import ButtonAppBar from './../appbar/appbar';

const StyledTableCell = withStyles((theme) => ({
    head: {
      backgroundColor: '#096DA9',
      color: theme.palette.common.white,
    },
    body: {
      fontSize: 14,
    },
  }))(TableCell);
  
  const StyledTableRow = withStyles((theme) => ({
    root: {
      '&:nth-of-type(odd)': {
        backgroundColor: theme.palette.action.hover,
      },
    },
  }))(TableRow);

  const useStyles = makeStyles({
    table: {
      paddingBottom: 30,
      paddingTop: 30
    },
  });

function createData(name: string, calories: string, fat: string) {
    return { name, calories, fat };
}


const rows = [
    createData('2021-01-12 11:42', "Completed", "",),
    createData('2021-01-12 11:42', "Completed", "",),
    createData('2021-01-12 11:42', "Completed", "",),
    createData('2021-01-12 11:42', "Completed", "",),
    createData('2021-01-12 11:42', "Completed", "",),
];

export default function BasicTextFields() {
    const classes = useStyles();
    const [show, setShow] = useState(false);
    const click = () => setShow(!show);

    const getData=()=>{
        axios.get(`http://afcf1031fc30c4d8abde58d1c08718a6-366633710.us-west-2.elb.amazonaws.com/roster/v1.0/syncDetails?district=58da8a43cc70ab00017a1a87`)
        .then(res => {
          const persons = res.data;
          console.log("tttt",persons);
        }).catch((err)=>{
         console.log(err);
        })
    }
    useEffect(()=>{
        getData();
    })
    return (
        <div>
            <ButtonAppBar/>
            <div className="rectangle" >
                <input className="inputtoken" type="number" id="token" name="tokenName"></input>
                <button type="submit" className="submitButton" onClick={click}>Submit</button>
            </div>
            {
                show ?
                    <div style={{ maxWidth: "50%" }}>
                        <TableContainer component={Paper}>
                            <Table className={classes.table} size="small" aria-label="a dense table">
                                <TableHead >
                                    <TableRow>
                                        <StyledTableCell>Sync Performed on date</StyledTableCell>
                                        <StyledTableCell align="right">Status</StyledTableCell>
                                        <StyledTableCell align="right">Error</StyledTableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    {rows.map((row) => (
                                        <StyledTableRow key={row.name}>
                                            <StyledTableCell component="th" scope="row">
                                                {row.name}
                                            </StyledTableCell>
                                            <StyledTableCell align="right">{row.calories}</StyledTableCell>
                                            <StyledTableCell align="right">{row.fat}</StyledTableCell>
                                        </StyledTableRow>
                                    ))}
                                </TableBody>
                            </Table>
                        </TableContainer>
                    </div> : ""
            }
        </div>
    );
}
