import React from 'react';

import Header from './Header';
import LoginBlock from './LoginBlock';

import Text from '../components/Text';
import BackgroundImage from '../components/BackgroundImage';

const SignUp = () => (
  <div>
    <BackgroundImage>
      <div style={{ display: 'flex', flexDirection: 'column', width: '100%' }}>
        <Header />
        <LoginBlock />
      </div>
    </BackgroundImage>
  </div>
);

export default SignUp;
