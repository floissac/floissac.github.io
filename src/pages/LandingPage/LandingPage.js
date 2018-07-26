import React from 'react';
import PropTypes from 'prop-types';

import Nav from '@components/Nav';
// import ScrollToNext from '@components/ScrollToNext';
import BrowserNotes from '@components/BrowserNotes';

import './style.scss';

const LandingPage = (props, context) => {
  const { theme: { bgPrimary, colorPrimary } } = context;

  return (
    <div style={{ backgroundColor: bgPrimary }} className="landing-page">
      <Nav />
      <main style={{ color: colorPrimary }}>
        <BrowserNotes />
        <div className="intro-wrapper">
          <div className="intro-name">Hello World, I'm William Floissac.</div>
          <div className="tagline">
            Web Developer | Tech dude | x5 Fortnite Champion
          </div>
        </div>
      </main>
      {/* <ScrollToNext pageSelector=".about-page" /> */}
    </div>
  );
};
LandingPage.contextTypes = {
  theme: PropTypes.any
};
export default LandingPage;
