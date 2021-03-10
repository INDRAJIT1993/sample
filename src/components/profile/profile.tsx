import React from 'react';
import Modal from './dialog/dialog';
import AvatarModal from './avatar/avatar';
import Grid from '@material-ui/core/Grid';
import Navbar from '../Navbar/Navbar'
import { makeStyles } from '@material-ui/core/styles';
import TextField from "@material-ui/core/TextField";
import './profile.css'

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    width: '100%'
  },
  rowLayout: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center' // To be vertically aligned
  },
}));

function Profile() {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const [openAvatar, setOpenAvatar] = React.useState(false);


  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  const handleClickOpenAvatar = () => {
    setOpenAvatar(true);
  };
  const handleCloseAvatar = () => {
    setOpenAvatar(false);
  };
  return (
    <div>
     <Navbar Title={`Profile`}/>
      <div className='Profile'>
        <Grid container justify="center" spacing={1}>
          <Grid item xs={3} lg={3} style={{ paddingRight: "140px" }}>
            <div>
              <div id="avatar" onClick={handleClickOpenAvatar}></div>
              <button className="button" onClick={handleClickOpen}>Change Role</button>
              <div className="metrics">
                <p>Metrics and Analysis</p>
              </div>
            </div>
          </Grid>
          <Grid item xs={3} lg={9}>
            <p className="displayname">Chester A. Arthur</p>
            <div className="displyarole">
              <p>School Administrator </p>
              <p>School Name </p>
            </div>
          </Grid>
        </Grid>
        <Modal show={open} handleClose={handleClose}>
          <p className='roleText'>Current Role</p>
        </Modal>
        <AvatarModal show={openAvatar} handleClose={handleCloseAvatar} />
      </div>
    </div>

  );
}

export default Profile;