import { ChildCare } from '@material-ui/icons';
import React, { Children } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import './dailog.css';
import { setSourceMapRange } from 'typescript';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}));


const Modal = (props: any) => {
  const { show, handleClose, children } = props;
  const showHideClassName = show ? "modal display-block" : "modal display-none";
  const classes = useStyles();


  return (
    <div className={showHideClassName}>
      <section className="modal-main">
        <span onClick={handleClose} className="close-button topright">&times;</span>
        <div className="modalTitle">{children}</div>
        <div id="profileImage"></div>
        <div className='role'>
          <p>Admin</p>
        </div>
        <div className='school'>
          <p>SchoolName 1, SchoolName 2...</p>
        </div>
        <div className='selectrole'>
          <p>Choose a different role :</p>

        </div>
        <Grid item xs={12}>
          <Grid container justify="center" spacing={3}>
            {[0, 1, 2].map((value) => (
              <Grid key={value} item>
                <div id="roleimageadmin"></div>
                <h6 className="changerole">Admin</h6>
                <div className="schoolList">
                <p>SchoolName 1</p>
                <p>SchoolName 1</p>
                <p>SchoolName 1</p>
                </div>
              </Grid>
            ))}
          </Grid>
        </Grid>
      </section>
    </div>
  );
};

export default Modal;