import React from 'react';
import styled from 'styled-components';
import Media from 'react-media';

import Text from '../components/Text';
import Column from '../components/Column';
import ScrollIndicator from '../components/ScrollIndicator';

const Header = () => (
  <Content>
    <Media query="(max-width: 641px)">
      {matches => (matches ? null : <Container />)}
    </Media>
    <Container>
      <Margin>
        <Column>
          <Container>
            <Text size="xl" color="white">
              AstroReacts
            </Text>
          </Container>
          <Container>
            <TextContent>
              <Text size="xs" color="white">
                In the Astroreacts game the player flies a spacecraft in an
                asteroids field. The gamer must avoid flying rocks which is
                traversed by flying saucers.
              </Text>
            </TextContent>
          </Container>
        </Column>
      </Margin>
    </Container>
    <ScrollContainer>
      <StyledText color="white">Read more</StyledText>
      <ScrollIndicator />
    </ScrollContainer>
  </Content>
);

const Container = styled.div`
  display: flex;
  felx: 1;
  width: 100%;
  justify-content: center;
  align-items: center;
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

const Margin = styled.div`
  margin-right: 4rem;

  @media only screen and (min-width: 641px) and (max-width: 1024px) {
    margin-right: 3rem;
  }

  @media only screen and (min-width: 320px) and (max-width: 640px) {
    margin: 1.5rem;
  }
`;

const StyledText = styled(Text)`margin-bottom: 0.5rem;`;

export default Header;
