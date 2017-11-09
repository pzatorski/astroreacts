import React from 'react';
import { withRouter } from 'react-router-dom';
import styled from 'styled-components';
import Media from 'react-media';

import StyledLink from './StyledLink';
import Logo from './Logo';
import MainMargin from './MainMargin';
import Row from './Row';
import Button from './Button';
import TextLink from './TextLink';
import ContentWrapper from './ContentWrapper';
import MenuIcon from './MenuIcon';

const Menu = ({ location }) => {
  return (
    <StyledContainer>
      <ContentWrapper>
        <MainMargin>
          <Container>
            <Flex>
              <MarginRight>
                <StyledLink to="/">
                  <Logo />
                </StyledLink>
              </MarginRight>

              <Media query="(max-width: 845px)">
                {matches =>
                  matches ? null : (
                    <Container>
                      <MarginTextLink>
                        <StyledLink to="/game">
                          <TextLink
                            text="Game"
                            color={
                              location.pathname === '/game'
                                ? 'rgb(254, 116, 131)'
                                : '#fff'
                            }
                          />
                        </StyledLink>
                      </MarginTextLink>
                      <MarginTextLink>
                        <StyledLink to="/results">
                          <TextLink
                            text="Results"
                            color={
                              location.pathname === '/results'
                                ? 'rgb(254, 116, 131)'
                                : '#fff'
                            }
                          />
                        </StyledLink>
                      </MarginTextLink>
                    </Container>
                  )}
              </Media>
            </Flex>
            <Row>
              <Media query="(max-width: 641px)">
                {matches =>
                  matches ? (
                    <MenuIcon />
                  ) : (
                    <Container>
                      <StyledLink to="/login">
                        {location.pathname === '/login' ? (
                          <Button text="Login" textColor color="#fff" />
                        ) : (
                          <Button secondary text="Login" />
                        )}
                      </StyledLink>
                      <StyledLink to="/sign-up">
                        {location.pathname === '/sign-up' ? (
                          <Button
                            text="Sign up"
                            textColor="rgb(160, 78, 111)"
                            color="#fff"
                          />
                        ) : (
                          <Button color="rgb(160, 78, 111)" text="Sign up" />
                        )}
                      </StyledLink>
                    </Container>
                  )}
              </Media>
            </Row>
          </Container>
        </MainMargin>
      </ContentWrapper>
    </StyledContainer>
  );
};

const MarginRight = styled.div`
  margin-right: 8rem;

  @media only screen and (min-width: 641px) and (max-width: 1024px) {
    margin-right: 4rem;
  }

  @media only screen and (min-width: 320px) and (max-width: 640px) {
    margin-right: 1.5rem;
  }
`;

const MarginTextLink = styled.div`margin-right: 4rem;`;

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

export default withRouter(Menu);
