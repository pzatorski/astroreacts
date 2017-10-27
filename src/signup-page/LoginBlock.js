import React from 'react';
import styled from 'styled-components';

import Text from '../components/Text';
import LoginIcon from '../components/LoginIcon';
import GithubIcon from '../components/GithubIcon';
import InputPassword from '../components/InputPassword';
import InputUser from '../components/InputUser';
import Button from '../components/Button';
import Url from '../components/Url';

const LoginBlock = () => (
  <Container>
    <Column>
      <LoginContainer>
        <LogoContainer>
          <LoginIcon />
        </LogoContainer>
        <Content>
          <Centered>
            <StyledText size="m" bold color="#FE7483">
              Member Login
            </StyledText>
            <StyledInputUser placeholder="Username" />
            <StyledInputPassword placeholder="Password" />
            <Button>Login</Button>
          </Centered>
          <GithubContainer>
            <Url
              href="//github.com/pzatorski/astroreacts"
              rel="noopener noreferrer"
              target="_blank"
            >
              <GithubIcon />
            </Url>
          </GithubContainer>
        </Content>
      </LoginContainer>
    </Column>
  </Container>
);

const StyledText = styled(Text)`margin-bottom: 6rem;`;

const StyledInputUser = styled(InputUser)`margin-bottom: 4rem;`;

const StyledInputPassword = styled(InputPassword)`margin-bottom: 4rem;`;

const Content = styled.div`padding-top: 6rem;`;

const Centered = styled.div`
  display: flex;
  position: relative;
  flex-direction: column;
`;

const Column = styled.div`
  display: flex;
  position: relative;
  flex-direction: column;
`;

const GithubContainer = styled.div`
  position: absolute;
  bottom: 2rem;
  right: 2rem;
`;

const LoginContainer = styled.div`
  display: flex;
  height: 35rem;
  width: 28rem;
  border-radius: 10px;
  box-shadow: 20px 20px 25rem #000000;
  background-color: rgba(255, 173, 173, 0.1);
  align-items: center;
  flex-direction: column;

  transition: 0.25s ease-in-out;
  -moz-transition: 0.25s ease-in-out;
  -webkit-transition: 0.25s ease-in-out;
`;

const LogoContainer = styled.div`
  display: flex;
  position: absolute;
  top: -6rem;
  height: 10rem;
  width: 10rem;
  border-radius: 50%;
  box-shadow: 20px 20px 25rem #000000;
  background-color: rgba(53, 92, 125, 0.6);
  justify-content: center;
  align-items: center;
`;

const Container = styled.div`
  display: flex;
  flex: 5;
  justify-content: center;
  align-items: center;
`;

export default LoginBlock;
