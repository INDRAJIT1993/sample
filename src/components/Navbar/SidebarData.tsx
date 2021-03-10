import React from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import * as IoIcons from 'react-icons/io';

export const SidebarData = [
  {
    title: 'Dashboard',
    path: '/',
    icon: <AiIcons.AiFillHome style={{color: 'grey'}}/>,
    cName: 'nav-text'
  },
  {
    title: 'TestAssignment',
    path: '/products',
    icon: <FaIcons.FaAddressBook style={{color: 'grey'}}/>,
    cName: 'nav-text'
  },
  {
    title: 'Proctoring',
    path: '/products',
    icon: <FaIcons.FaArrowsAltV style={{color: 'grey'}}/>,
    cName: 'nav-text'
  }, 
  {
    title: 'Reporting',
    path: '/reports',
    icon: <IoIcons.IoIosPaper style={{color: 'grey'}}/>,
    cName: 'nav-text'
  },
  {
    title: 'Administrative',
    path: '/team',
    icon: <FaIcons.FaUserAlt style={{color: 'grey'}}/>,
    cName: 'nav-text'
  },
  {
    title: 'Logout',
    path: '/support',
    icon: <AiIcons.AiOutlineLogout style={{color: 'grey'}}/>,
    cName: 'nav-text'
  }
];