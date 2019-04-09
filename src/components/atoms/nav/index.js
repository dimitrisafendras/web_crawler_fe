import React from 'react'
import { NavLink } from 'react-router-dom'
import './NavLink.scss';

//TODO: navlinktxt, navlinkicon
export const Nav = (
    {
        navLink,
        children,
        className = '',
        activeClassName= ''
    }) =>
    <NavLink
        to={navLink}
        className={`NavLink NavLink--normal ${className}`}
        activeClassName={`NavLink NavLink--active ${activeClassName}`}
    >
        {children}
    </NavLink>;
