import React from 'react'
import { NavLink } from 'react-router-dom'

export const Nav = (
    {
        navLink,
        children
    }) =>
    <NavLink
        to={navLink}
        activeStyle={{
            textDecoration: 'none',
            color: 'black'
        }}
    >
        {children}
    </NavLink>;
