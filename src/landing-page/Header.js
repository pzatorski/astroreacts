import React from 'react';
import styled from 'styled-components';

import Text from '../components/Text';
import Column from '../components/Column';
import ScrollIndicator from '../components/ScrollIndicator';

const Header = () => (
  <Content>
    <Container />
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
`;

const Margin = styled.div`margin-right: 4rem;`;

const StyledText = styled(Text)`margin-bottom: 0.5rem;`;

export default Header;
