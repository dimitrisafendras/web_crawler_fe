import React from 'react';
import {Cell, FlexContainer, Icon, Nav} from '../../atoms';
import nuke from '../../../static/nuke.svg'
import './Header.scss';

export const Header = (
    {
        id,
        area,
        className = '',
    }) =>
    <Cell
        id={id}
        area={area}
        className={`Header ${className}`}
    >
        <FlexContainer>
            <Nav navLink={'/'}>
                <Icon
                    id={'nukeIcon'}
                    icon={nuke}
                />
            </Nav>
            <Nav navLink={'/home'}>
                Home
            </Nav>
            <Nav navLink={'/aboutUs'}>
                About Us
            </Nav>
        </FlexContainer>
    </Cell>;

