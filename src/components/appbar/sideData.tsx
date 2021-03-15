import React from 'react';
import Home from './../../images/icons/homeicon.svg';
import TestAssignment from './../../images/icons/testassignemnticon.svg';
import proctoring from './../../images/icons/proctoringicon.svg';
import reporting from './../../images/icons/reportingicon.svg';
import adminstrative from './../../images/icons/administrativeicon.svg';
import logout from './../../images/icons/logouticon.svg';


export const SidebarDataAdmin = [
    {
        title: 'Dashboard',
        path: '/',
        icon: <img src={Home} alt="home" className="tooltip"/>,
        tooltip: <span className="iconnamedashboard">Dashboard</span>,
        cName: ''
    },
    {
        title: 'TestAssignment',
        path: '/products',
        icon: <img src={TestAssignment} alt="home" className="tooltip"/>,
        tooltip: <span className="iconnameassignment">TestAssignment</span>,
        cName: ''
    },
    {
        title: 'Proctoring',
        path: '/products',
        icon: <img src={proctoring} alt="home" className="tooltip"/>,
        tooltip: <span className="iconnameproctering">Proctoring</span>,
        cName: ''
    },
    {
        title: 'Reporting',
        path: '/reports',
        icon: <img src={reporting} alt="home" className="tooltip"/>,
        tooltip: <span className="iconnamereporting">Reporting</span>,
        cName: ''
    },
    {
        title: 'Administrative',
        path: '/team',
        icon: <img src={adminstrative} alt="home" className="tooltip"/>,
        tooltip: <span className="iconnameadminstrative">Administrative</span>,
        cName: ''
    },
    {
        title: 'Logout',
        path: '/support',
        icon: <img src={logout} alt="home" className="tooltip"/>,
        tooltip: <span className="iconnamelogout">Logout</span>,
        cName: ''
    }
];

export const SidebarDataTeacher = [
    {
        title: 'Dashboard',
        path: '/',
        icon: <img src={Home} alt="home" className="tooltip"/>,
        tooltip: <span className="iconnamedashboard">Dashboard</span>,
        cName: ''
    },
    {
        title: 'Proctoring',
        path: '/products',
        icon: <img src={proctoring} alt="home" className="tooltip"/>,
        tooltip: <span className="iconnameproctering">Proctoring</span>,
        cName: ''
    },
    {
        title: 'Reporting',
        path: '/reports',
        icon: <img src={reporting} alt="home" className="tooltip"/>,
        tooltip: <span className="iconnamereporting">Reporting</span>,
        cName: ''
    },
    {
        title: 'Administrative',
        path: '/team',
        icon: <img src={adminstrative} alt="home" className="tooltip"/>,
        tooltip: <span className="iconnameadminstrative">Administrative</span>,
        cName: ''
    },
    {
        title: 'Logout',
        path: '/support',
        icon: <img src={logout} alt="home" className="tooltip"/>,
        tooltip: <span className="iconnamelogout">Logout</span>,
        cName: ''
    }
];

export const admistrationAdmin = [
    {
        title: 'Clever',
        path: '/clever',
    },
    {
        title: 'Rostering',
        path: '/rostering',
    },
    {
        title: 'Setting and Preferences',
        path: '/settings',
    },
    {
        title: 'User Search',
        path: '/user-search',
    }
]

export const admistrationRootAdmin = [
    {
        title: 'Clever',
        path: '/clever',
    },
    {
        title: 'Rostering',
        path: '/rostering',
    },
    {
        title: 'Order history',
        path: '/order-history',
    },
    {
        title: 'Setting and Preferences',
        path: '/settings',
    },
    {
        title: 'User Search',
        path: '/uer-search',
    }
]

export const admistrationTeacher = [
    {
        title: 'user search',
        path: '/uer-search',
    }
]