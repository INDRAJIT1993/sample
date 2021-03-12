import React from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import * as IoIcons from 'react-icons/io';

export const SidebarData = [
  {
    title: 'Dashboard',
    path: '/',
    icon: <AiIcons.AiFillHome/>,
    cName: 'nav-text'
  },
  {
    title: 'TestAssignment',
    path: '/products',
    icon: <FaIcons.FaAddressBook/>,
    cName: 'nav-text'
  },
  {
    title: 'Proctoring',
    path: '/products',
    icon: <FaIcons.FaArrowsAltV/>,
    cName: 'nav-text'
  }, 
  {
    title: 'Reporting',
    path: '/reports',
    icon: <IoIcons.IoIosPaper/>,
    cName: 'nav-text'
  },
  {
    title: 'Administrative',
    path: '/team',
    icon: <FaIcons.FaUserAlt/>,
    cName: 'nav-text'
  },
  {
    title: 'Logout',
    path: '/support',
    icon: <AiIcons.AiOutlineLogout/>,
    cName: 'nav-text'
  }
];