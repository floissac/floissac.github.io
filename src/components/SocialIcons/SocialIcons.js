import React from 'react';
import PropTypes from 'prop-types';

import './style.scss';

const SocialIcons = (props, context) => {
  const { theme: { colorPrimary } } = context;

  return (
    <div className="social-icons animate-icons">
        <a target="_blank" rel="noopener noreferrer" href="https://twitter.com/flexdinesh" style={ { color: colorPrimary } }><i className="fab fa-twitter"></i></a>       
        <a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/dineshpandiyan" style={ { color: colorPrimary } }><i className="fab fa-linkedin"></i></a>
        <a target="_blank" rel="noopener noreferrer" href="https://github.com/flexdinesh" style={ { color: colorPrimary } }><i className="fab fa-github"></i></a>
      </div>
  );
};

SocialIcons.contextTypes = {
  theme: PropTypes.any
};

export default SocialIcons;
