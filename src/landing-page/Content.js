import React from 'react';
import styled from 'styled-components';

import Text from '../components/Text';
import StyledLink from '../components/StyledLink';
import Button from '../components/Button';
import MainMargin from '../components/MainMargin';
import ContentWrapper from '../components/ContentWrapper';

const Content = () => (
  <ContentWrapper>
    <MainMargin>
      <Padding>
        <Centered>
          <StyledText bold center size="m">
            Crash through the asteroid field and own the rift!
          </StyledText>
          <StyledLink to="/login">
            <Button text="Let's play" />
          </StyledLink>
        </Centered>
      </Padding>
    </MainMargin>
  </ContentWrapper>
);

const Centered = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const StyledText = styled(Text)`
  margin-bottom: 2.5rem;
  max-width: 40rem;
`;

const Padding = styled.div`padding: 4rem 0rem;`;

export default Content;
