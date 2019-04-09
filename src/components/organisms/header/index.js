import React from 'react';
import {Cell, Container, FlexContainer, Icon, Nav} from '../../atoms';
import empireIcon from '../../../static/icons/galactic-empire.svg'
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
        <FlexContainer
            justifyContent={'space-between'}
            className={'NavContainer'}
        >
            <Nav navLink={'/'}>
                <Icon
                    id={'nukeIcon'}
                    icon={empireIcon}
                />
            </Nav>
            <Container>
                <Nav navLink={'/home'}>
                    Home
                </Nav>
                <Nav navLink={'/aboutUs'}>
                    About Us
                </Nav>
            </Container>
        </FlexContainer>
    </Cell>;

