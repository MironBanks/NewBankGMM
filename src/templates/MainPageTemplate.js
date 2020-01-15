import React from 'react';
import PropTypes from 'prop-types';
import FooterBar from '../components/organisms/FooterBar/FooterBar';
import MainBar from '../components/organisms/MainBar/MainBar';

const MainPageTemplate = ({ children }) => (
  <>
    <MainBar />
    <FooterBar />
    {children}
  </>
);

MainPageTemplate.propTypes = {
  children: PropTypes.element.isRequired,
};

export default MainPageTemplate;
