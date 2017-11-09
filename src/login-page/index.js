import React from 'react';
import styled from 'styled-components';

// import Header from './Header';
import LoginBlock from './LoginBlock';

import Menu from '../components/Menu';
import ScrollToTop from '../components/ScrollToTop';
import BackgroundImage from '../components/BackgroundImage';
import AstroImage from '../assets/images/diego-ph-asteroids.jpg';

/*

I name Components the same way how I will name class in html.

All of the components which SignUp returns are html types
Using library 'styled-components' I am able to assign css style for each component
For example:

const LoginContent = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

You will see more of that components in other files.

When I create Component I create "small blocks" on that point my code is clear.
*/

const Login = () => (
  <div>
    <ScrollToTop />
    <BackgroundImage height="70rem" image={AstroImage}>
      <LoginContent>
        <Menu />
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

export default Login;
