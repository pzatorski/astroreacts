import React from 'react';
import styled from 'styled-components';

import Text from '../components/Text';
import LoginIcon from '../components/LoginIcon';
import GithubIcon from '../components/GithubIcon';
import Input from '../components/Input';
import Button from '../components/Button';

const LoginBlock = () => (
  <Container>
    <Column>
      <LoginContainer>
        <LogoContainer>
          <LoginIcon />
        </LogoContainer>
        <Centered>
          <StyledText size="l" bold color="#FE7483">
            Member Login
          </StyledText>
          <StyledInput />
          <StyledInput />
          <Button>Login</Button>
        </Centered>
        <GithubContainer>
          <GithubIcon />
        </GithubContainer>
      </LoginContainer>
    </Column>
  </Container>
);

const StyledText = styled(Text)`margin-bottom: 6rem;`;

const StyledInput = styled(Input)`margin-bottom: 4rem;`;

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
  height: 52rem;
  width: 37.5rem;
  border-radius: 10px;
  box-shadow: 20px 20px 25rem #000000;
  background-color: rgba(255, 173, 173, 0.1);
  justify-content: center;
  align-items: center;
  transition: 0.25s ease-in-out;
  -moz-transition: 0.25s ease-in-out;
  -webkit-transition: 0.25s ease-in-out;
`;

const LogoContainer = styled.div`
  display: flex;
  position: absolute;
  top: -7.5rem;
  left: 11.5rem;
  height: 15rem;
  width: 15rem;
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
