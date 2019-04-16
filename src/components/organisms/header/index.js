import React from 'react';
import PropTypes from 'prop-types';
import { Cell, Container, FlexContainer, Icon, Nav } from '../../atoms';
import empireIcon from '../../../static/icons/galactic-empire.svg';
import './Header.scss';

export const Header = ({ id, area, className = '' }) => (
  <Cell id={id} area={area} className={`Header ${className}`}>
    <FlexContainer justifyContent="space-between" className="NavContainer">
      <Nav navLink="/">
        <Icon id="empireIcon" className="HeaderLogo" icon={empireIcon} />
      </Nav>
      <Container className="NavInnerContainer">
        <Nav navLink="/aboutUs">About Us</Nav>
      </Container>
    </FlexContainer>
  </Cell>
);

Header.propTypes = {
  id: PropTypes.string,
  className: PropTypes.string,
  area: PropTypes.string,
};
