import React, { Children } from 'react';
import Grid from '@material-ui/core/Grid';
import './avatar.css';
import avatar from './../../../images/avatar/avatar.png';

const AvatarModal = (props: any) => {
    const { show, handleClose, children } = props;
    const showHideClassName = show ? "modal display-block" : "modal display-none";

    return (
        <div className={showHideClassName}>
            <section className="modal-main">
                <span onClick={handleClose} className="close-button topright">&times;</span>
                <div className="slectedavatar">
                    <img src={avatar} className="photo" alt="avatar" />
                </div>
                <div className='selectAvatar'>
                    <p>Choose your avatar :</p>
                </div>
                <Grid item xs={12}>
                    <Grid container justify="center" spacing={1}>
                        {[0, 1, 2, 3, 4, 5, 6, 7].map((value) => (
                            <Grid key={value} item>
                                <div className="slectedavatar">
                                    <img src={avatar} className="photo" alt="avatar" />
                                </div>
                            </Grid>
                        ))}
                    </Grid>
                </Grid>
            </section>
        </div>
    );
};

export default AvatarModal;