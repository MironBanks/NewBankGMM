import React from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import ButtonIcon from '../../atoms/ButtonIcon/ButtonIcon';
import cardsIcon from '../../../assets/icons/cards.svg';
import logoutIcon from '../../../assets/icons/logout.svg';
import homeIcon from '../../../assets/icons/home.svg';
import paymentsIcon from '../../../assets/icons/payments1.svg';

const StyledWrapper = styled.nav`
  position: fixed;
  left: 0;
  bottom: 0;
  padding: 0;
  width: 100vw;
  height: 80px;
  background-color: ${({ theme }) => theme.grey100};
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
`;

const FooterBar = () => (
  <StyledWrapper>
    <ButtonIcon as={NavLink} to="/" icon={homeIcon} activeclass="active" />
    <ButtonIcon as={NavLink} to="/payments" icon={paymentsIcon} activeclass="active" />
    <ButtonIcon as={NavLink} to="/cards" icon={cardsIcon} activeclass="active" />
    <ButtonIcon as={NavLink} to="/logout" icon={logoutIcon} activeclass="active" />
  </StyledWrapper>
);

export default FooterBar;
