import React from 'react';
import styled from 'styled-components';

import StyledLink from './StyledLink';
import Logo from './Logo';
import MainMargin from './MainMargin';
import Row from './Row';
import Button from './Button';

const Menu = () => {
  return (
    <StyledContainer>
      <MainMargin>
        <Container>
          <Flex>
            <StyledLink to="/">
              <Logo />
            </StyledLink>
          </Flex>
          <Row>
            <StyledLink to="/login">
              <Button secondary text="Login" />
            </StyledLink>
            <StyledLink to="login">
              <Button text="Sign up" />
            </StyledLink>
          </Row>
        </Container>
      </MainMargin>
    </StyledContainer>
  );
};

const Flex = styled.div`
  display: flex;
  flex: 1;
  align-items: center;
`;

const StyledContainer = styled.div`
  position: fixed;
  z-index: 2;
  height: 5.5rem;
  width: 100%;
  background-color: rgba(20, 80, 110, 0.5);
  border-bottom: 1px solid #ffffff;
  box-shadow: 0px 5px 60px #ffffff;
  flex-direction: row;
`;

const Container = styled.div`
  display: flex;
  flex: 1;
  height: 5.5rem;
  align-items: center;
`;

export default Menu;
