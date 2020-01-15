import React from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import MainButtonIcon from '../../atoms/MainButtonIcon/MainButtonIcon';
import requestIcon from '../../../assets/icons/request.svg';
import scanIcon from '../../../assets/icons/scan.svg';
import sendIcon from '../../../assets/icons/send.svg';

const StyledWrapper = styled.nav`
  position: fixed;
  left: 0;
  top: 150px;
  padding: 0;
  width: 100vw;
  height: 80px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding-left: 50px;
  padding-right: 50px;
`;

const MainBar = () => (
  <StyledWrapper>
    <MainButtonIcon as={NavLink} to="/send" icon={sendIcon} activeclass="active" />
    <MainButtonIcon as={NavLink} to="/request" icon={requestIcon} activeclass="active" />
    <MainButtonIcon as={NavLink} to="/scan" icon={scanIcon} activeclass="active" />
  </StyledWrapper>
);

export default MainBar;
