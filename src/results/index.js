import React from 'react';

import GameImage from '../assets/images/game-galaxy.jpg';

import Menu from '../components/Menu';
import BackgroundImage from '../components/BackgroundImage';
import RecordTable from './RecordTable';

const Results = () => (
  <div>
    <BackgroundImage height="100vh" image={GameImage}>
      <Menu />
      <RecordTable />
    </BackgroundImage>
  </div>
);

export default Results;
