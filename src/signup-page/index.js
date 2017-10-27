import React from 'react';
import styled from 'styled-components';

import Header from './Header';
import LoginBlock from './LoginBlock';

import BackgroundImage from '../components/BackgroundImage';

const SignUp = () => (
  <div>
    <BackgroundImage>
      <LoginContent>
        <Header />
        <LoginBlock />
      </LoginContent>
    </BackgroundImage>
  </div>
);

const LoginContent = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export default SignUp;
