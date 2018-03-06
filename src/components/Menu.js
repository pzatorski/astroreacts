import React from 'react';
import { withRouter } from 'react-router-dom';
import styled from 'styled-components';
import Media from 'react-media';
import { stack as BurgerMenu } from 'react-burger-menu';

import StyledLink from './StyledLink';
import Logo from './Logo';
import MainMargin from './MainMargin';
import Row from './Row';
import Button from './Button';
import TextLink from './TextLink';
import ContentWrapper from './ContentWrapper';

class Menu extends React.Component {
  handleLogOut(e) {
    window.location.reload();
    localStorage.removeItem('LoggedIn');
  }
  render() {
    const { location } = this.props;

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
                    )
                  }
                </Media>
              </Flex>
              <Row>
                <Media query="(max-width: 845px)">
                  {matches =>
                    matches ? (
                      <BurgerMenu style={{ top: 0 }} right width={240}>
                        <MarginBottom>
                          <StyledLink to="/">
                            <TextLink
                              text="Home"
                              color={
                                location.pathname === '/'
                                  ? 'rgb(254, 116, 131)'
                                  : '#fff'
                              }
                            />
                          </StyledLink>
                        </MarginBottom>
                        <MarginBottom>
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
                        </MarginBottom>
                        <MarginBottom>
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
                        </MarginBottom>
                        {localStorage.LoggedIn ? (
                          <StyledLink to="/">
                            <TextLink
                              text="Logout"
                              color={'#fff'}
                              loggedOut={this.handleLogOut}
                            />
                          </StyledLink>
                        ) : (
                          <div>
                            <MarginBottom>
                              <StyledLink to="/login">
                                <TextLink
                                  text="Login"
                                  color={
                                    location.pathname === '/login'
                                      ? 'rgb(254, 116, 131)'
                                      : '#fff'
                                  }
                                />
                              </StyledLink>
                            </MarginBottom>
                            <MarginBottom>
                              <StyledLink to="/sign-up">
                                <TextLink
                                  text="Sign up"
                                  color={
                                    location.pathname === '/sign-up'
                                      ? 'rgb(254, 116, 131)'
                                      : '#fff'
                                  }
                                />
                              </StyledLink>
                            </MarginBottom>
                          </div>
                        )}
                      </BurgerMenu>
                    ) : (
                      <Container>
                        {localStorage.LoggedIn ? (
                          <div style={{ display: 'flex' }}>
                            <StyledLink to="/game">
                              <Button secondary text="Play" />
                            </StyledLink>
                            <Button
                              text="Logout"
                              textColor="rgb(160, 78, 111)"
                              color="#fff"
                              loggedOut={this.handleLogOut}
                            />
                          </div>
                        ) : (
                          <div style={{ display: 'flex' }}>
                            <StyledLink to="/login">
                              {location.pathname === '/login' ? (
                                <Button
                                  text="Login"
                                  textColor="rgb(160, 78, 111)"
                                  color="#fff"
                                />
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
                                <Button
                                  color="rgb(160, 78, 111)"
                                  text="Sign up"
                                />
                              )}
                            </StyledLink>
                          </div>
                        )}
                      </Container>
                    )
                  }
                </Media>
              </Row>
            </Container>
          </MainMargin>
        </ContentWrapper>
      </StyledContainer>
    );
  }
}

const MarginRight = styled.div`
  margin-right: 8rem;

  @media only screen and (min-width: 641px) and (max-width: 1024px) {
    margin-right: 4rem;
  }

  @media only screen and (min-width: 320px) and (max-width: 640px) {
    margin-right: 1.5rem;
  }
`;

const MarginTextLink = styled.div`
  margin-right: 4rem;
`;

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

const MarginBottom = styled.div`
  margin-bottom: 1.5rem;
`;

export default withRouter(Menu);
