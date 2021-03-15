import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import { Link } from 'react-router-dom';
import * as AiIcons from 'react-icons/ai';
import { SidebarDataAdmin, SidebarDataTeacher, admistrationRootAdmin, admistrationAdmin, admistrationTeacher } from './sideData';
import './appbar.css';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    color: 'grey',
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

export default function ButtonAppBar(props: any) {
  const { myProp, authority } = props;
  const [role, setRole] = useState(myProp);
  const classes = useStyles();
  const [sidebar, setSidebar] = useState(false);
  const [subsidebar, setSubsidebar] = useState(false);
  const showSidebar = () => {
    setSidebar(!sidebar);
    setSubsidebar(false);
  }
  const showSubidebar = () => setSubsidebar(!subsidebar);
  let SidebarData = SidebarDataAdmin;
  let sidenavData = (authority == "root") ? admistrationRootAdmin : admistrationAdmin;
  if (role == 'Teacher') {
    SidebarData = SidebarDataTeacher;
    sidenavData = admistrationTeacher;
  }

  return (
    <div className={classes.root}>
      <AppBar style={{ background: '#096DA9' }} position="static">
        <Toolbar>
          <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu" onClick={showSidebar}>
            <MenuIcon />
          </IconButton>
          <div className={sidebar ? 'sidebar' : 'nav-menu'}>
            <li>
              <Link to='#' onClick={showSidebar} className={'hover'}>
                <AiIcons.AiOutlineClose />
              </Link>
            </li>
            {SidebarData.map((item, index) => {
              if (item.title == "Administrative") {
                return (
                  <li key={index} className={item.cName}>
                    <Link to="#" onClick={showSubidebar} className={'hover'}>
                      {item.icon}
                      {/* <span className="tooltiptext">Tooltip text</span> */}
                    </Link>
                  </li>
                )
              } else {
                return (
                  <li key={index} className={item.cName}>
                    <Link to="#">
                      <div>
                        {item.icon}
                      </div>
                    </Link>
                  </li>
                )
              }
            })}
          </div>
          <div id="mySidenav" className={subsidebar ? 'sidenavopen' : 'sidenavclose'}>
            <a href="#" className="text">Administration</a>
            
            {sidenavData.map((item, index) => {
              return (
                <div className={'sidenavmenu'}>
                  <a href={item.path} style={{ color: 'grey', textDecoration: 'none' }}>{item.title}</a>
                </div>
              )
            })}
          </div>
        </Toolbar >
      </AppBar >
    </div >
  );
}