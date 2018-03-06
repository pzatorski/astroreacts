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

All of the components which Login returns are html types
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

class Login extends React.Component {
  componentWillMount() {
    if (localStorage.LoggedIn) {
      this.props.history.goBack();
    }
  }

  submit = data => {
    if (localStorage[data.email]) {
      const parsedUser = JSON.parse(localStorage[data.email]) || [];

      if (
        parsedUser.email === data.email &&
        parsedUser.password === data.password
      ) {
        alert('Good luck and have fun!');
        this.props.history.push('/game');
        localStorage.LoggedIn = parsedUser.email;
      } else {
        alert('Wrong login or password');
      }
    } else {
      alert('Wrong login or password');
    }

    // console.log(localStorage);
  };

  render() {
    return (
      <div>
        <ScrollToTop />
        <BackgroundImage height="70rem" image={AstroImage}>
          <LoginContent>
            <Menu />
            {/* I pass submit function defined above render() via props to Component LoginBlock */}
            <LoginBlock submit={this.submit} />
          </LoginContent>
        </BackgroundImage>
      </div>
    );
  }
}

const LoginContent = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export default Login;
