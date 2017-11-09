import React from 'react';

import Header from './Header';
import Content from './Content';

import BackgroundImage from '../components/BackgroundImage';
import SpaceImage from '../assets/images/billy-huynh-galaxy.jpg';

import Menu from '../components/Menu';
import ScrollToTop from '../components/ScrollToTop';

const LandingPage = () => (
  <div>
    <ScrollToTop />
    <BackgroundImage height="44rem" image={SpaceImage}>
      <Menu />
      <Header />
    </BackgroundImage>
    <Content />
  </div>
);

export default LandingPage;
