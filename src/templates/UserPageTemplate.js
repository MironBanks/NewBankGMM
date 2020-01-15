import React from 'react';
import PropTypes from 'prop-types';
import FooterBar from '../components/organisms/FooterBar/FooterBar';

const UserPageTemplate = ({ children }) => (
  <>
    <FooterBar />
    {children}
  </>
);

UserPageTemplate.propTypes = {
  children: PropTypes.element.isRequired,
};

export default UserPageTemplate;
