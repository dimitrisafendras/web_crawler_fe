import React from 'react'
import { NavLink } from 'react-router-dom'

export const FilterLink = ({ filter, children }) => (
    <NavLink
        to={filter === 'SHOW_ALL' ? '/' : `/${filter}`}
        activeStyle={{
            textDecoration: 'none',
            color: 'black'
        }}
    >
        {children}
    </NavLink>
);
