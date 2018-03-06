import React, { Component } from 'react';
import styled from 'styled-components';

import Text from '../components/Text';
import Column from '../components/Column';
import ScrollIndicator from '../components/ScrollIndicator';
import MainMargin from '../components/MainMargin';
import ContentWrapper from '../components/ContentWrapper';

class Header extends Component {
  scrollToBottom() {
    window.scrollTo({
      top: document.body.scrollHeight,
      behavior: 'smooth'
    });
  }
  render() {
    return (
      <Content>
        <ContentWrapper>
          <MainMargin>
            <Container>
              <Column>
                <Container>
                  <Text size="xl" color="white">
                    AstroReacts
                  </Text>
                </Container>
                <Container>
                  <TextContent>
                    <Text size="xs" color="white">
                      In the Astroreacts game the player flies a spacecraft in
                      an asteroids field. The gamer must avoid flying rocks
                      which is traversed by flying saucers.
                    </Text>
                  </TextContent>
                </Container>
              </Column>
            </Container>
          </MainMargin>
        </ContentWrapper>
        <ScrollContainer onClick={this.scrollToBottom}>
          <StyledText color="white">Read more</StyledText>
          <ScrollIndicator />
        </ScrollContainer>
      </Content>
    );
  }
}

const Container = styled.div`
  display: flex;
  felx: 1;
  width: 100%;
  justify-content: center;
  align-items: center;

  /* Fade in animation when content loads */

  opacity: 0;
  -webkit-animation: fadein ease-in 1s; /* Safari, Chrome */
  -moz-animation: fadein ease-in 1s; /* Firefox */
  -ms-animation: fadein ease-in 1s; /* Internet Explorer */
  -o-animation: fadein ease-in 1s; /* Opera */
  animation: fadein ease-in 1s;

  animation-fill-mode: forwards;
  animation-duration: 0.5s;

  @keyframes fadein {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`;

const Content = styled.div`
  display: flex;
  flex: 1;
`;

const ScrollContainer = styled.div`
  display: flex;
  flex: 1;
  position: absolute;
  flex-direction: column;
  width: 100%;
  bottom: 3rem;
  align-items: center;

  /* Fade in animation when content loads */

  opacity: 0;
  -webkit-animation: fadein ease-in 1s; /* Safari, Chrome */
  -moz-animation: fadein ease-in 1s; /* Firefox */
  -ms-animation: fadein ease-in 1s; /* Internet Explorer */
  -o-animation: fadein ease-in 1s; /* Opera */
  animation: fadein ease-in 1s;

  animation-fill-mode: forwards;
  animation-duration: 1.5s;

  @keyframes fadein {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`;

const TextContent = styled.div`
  margin-top: 2rem;
  margin-left: auto;
  max-width: 30rem;

  @media only screen and (min-width: 641px) and (max-width: 1024px) {
    max-width: 100%;
  }

  @media only screen and (min-width: 320px) and (max-width: 640px) {
    max-width: 100%;
  }
`;

const StyledText = styled(Text)`
  margin-bottom: 0.5rem;
`;

export default Header;
