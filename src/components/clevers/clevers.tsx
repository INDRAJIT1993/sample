import React, { useEffect, useState } from 'react';
import axios from 'axios';
import ButtonAppBar from '../appbar/appbar';
import './clevers.css';
import { makeStyles, TableCell, TableRow, withStyles } from '@material-ui/core';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import Paper from '@material-ui/core/Paper';
import * as FaIcons from 'react-icons/fa';


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
    paddingTop: 30,
  },
});

const Data = [
  { district: "58da8a43cc70ab00017a1a87", syncDate: "22-02-2021 03:19:07", syncStatus: "Error", accessToken: "9637cf75174d07f85a5bc37a95a157fcc0a291c9" },
  { district: "58da8a43cc70ab00017a1a87", syncDate: "23-02-2021 09:58:07", syncStatus: "Completed", accessToken: "9637cf75174d07f85a5bc37a95a157fcc0a291c9" },
  { district: "58da8a43cc70ab00017a1a87", syncDate: "25-02-2021 16:55:07", syncStatus: "Error", accessToken: "9637cf75174d07f85a5bc37a95a157fcc0a291c9" },
  { district: "58da8a43cc70ab00017a1a87", syncDate: "01-03-2021 18:33:07", syncStatus: "Completed", accessToken: "9637cf75174d07f85a5bc37a95a157fcc0a291c9" },
  { district: "58da8a43cc70ab00017a1a87", syncDate: "24-02-2021 01:10:07", syncStatus: "Completed", accessToken: "9637cf75174d07f85a5bc37a95a157fcc0a291c9" },
]

export default function Clevers() {
  const classes = useStyles();
  const [show, setShow] = useState(false);
  const [tableData, setTableData] = useState([]);

  function handleSubmit(event:any){
    event.preventDefault();
   console.log("opopop",event.target.value);
  }

  const getData = () => {
    setShow(true)
    axios.get(`http://afbe83ed305c74ac9b631268adab5c87-895327856.us-west-2.elb.amazonaws.com/roster/v1.0/syncDetails?district=58da8a43cc70ab00017a1a87`)
      .then(res => {
        console.log("hghghghghg", res.data.data);
        setTableData(res.data.data)
      }).catch((err) => {
        console.log(err);
      })
  }

  return (
    <div>
      <ButtonAppBar />
      <form className="form-inline" onSubmit={handleSubmit}>
        <input type="text" id="district" placeholder="Enter Id" name="district" />
        <input type="submit" value="submit" onClick={getData}/>
      </form>
      {
        show ?
          <div style={{ maxWidth: "100%" }}>
            <table>
              <caption className="syncpagetitle">Sync performed Summary</caption>
              <thead>
                <tr>
                  <th scope="col">Sync performed on date</th>
                  <th scope="col">Status</th>
                  <th scope="col">Error</th>
                </tr>
              </thead>
              <tbody>
                {tableData.map((item: any) => {
                  return (
                    <tr>
                      <td scope="row" data-label="Sync performed on date">{item.syncDate}</td>
                      <td data-label="Status" className="syncstatus">{item.syncStatus}</td>
                      <td data-label="Error" >{item.syncStatus == "Error" ? <div className="tooltip"><FaIcons.FaExclamationTriangle /></div> : ''}</td>
                    </tr>
                  )
                }
                )}
              </tbody>
            </table>
          </div> : ""
      }
    </div>
  )
}