import React from 'react';

import Header from './Header';

import BackgroundImage from '../components/BackgroundImage';
import SpaceImage from '../assets/images/billy-huynh-galaxy.jpg';

import Menu from '../components/Menu';

const LandingPage = () => (
  <div>
    <BackgroundImage height="44rem" image={SpaceImage}>
      <Menu />
      <Header />
    </BackgroundImage>
    <div style={{ height: '20rem' }}>YOLO</div>
  </div>
);

export default LandingPage;
