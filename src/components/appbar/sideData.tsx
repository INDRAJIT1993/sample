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
        icon: <img src={Home} alt="home" />,
        cName: 'nav-text'
    },
    {
        title: 'TestAssignment',
        path: '/products',
        icon: <img src={TestAssignment} alt="home" />,
        cName: 'nav-text'
    },
    {
        title: 'Proctoring',
        path: '/products',
        icon: <img src={proctoring} alt="home" />,
        cName: 'nav-text'
    },
    {
        title: 'Reporting',
        path: '/reports',
        icon: <img src={adminstrative} alt="home" />,
        cName: 'nav-text'
    },
    {
        title: 'Administrative',
        path: '/team',
        icon: <img src={reporting} alt="home" />,
        cName: 'nav-text'
    },
    {
        title: 'Logout',
        path: '/support',
        icon: <img src={logout} alt="home" />,
        cName: 'nav-text'
    }
];

export const SidebarDataTeacher = [
    {
        title: 'Dashboard',
        path: '/',
        icon: <img src={Home} alt="home" />,
        cName: 'nav-text'
    },
    {
        title: 'Proctoring',
        path: '/products',
        icon: <img src={proctoring} alt="home" />,
        cName: 'nav-text'
    },
    {
        title: 'Reporting',
        path: '/reports',
        icon: <img src={adminstrative} alt="home" />,
        cName: 'nav-text'
    },
    {
        title: 'Administrative',
        path: '/team',
        icon: <img src={reporting} alt="home" />,
        cName: 'nav-text'
    },
    {
        title: 'Logout',
        path: '/support',
        icon: <img src={logout} alt="home" />,
        cName: 'nav-text'
    }
];

export const admistrationAdmin = [
    {
        title: 'clever',
        path: '/clever',
    },
    {
        title: 'rostering',
        path: '/rostering',
    },
    {
        title: 'orfer history-root admin only',
        path: '/order-history',
    },
    {
        title: 'setting and preferences',
        path: '/settings',
    },
    {
        title: 'user search',
        path: '/uer-search',
    }
]

export const admistrationTeacher = [
    {
        title: 'user search',
        path: '/uer-search',
    }
]