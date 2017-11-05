import React from 'react';
import styled from 'styled-components';

import Text from '../components/Text';

const Header = () => (
  <Container>
    <Text bold size="l" color="white">
      AstroReacts
    </Text>
  </Container>
);

const Container = styled.div`
  display: flex;
  flex: 1;
  padding-top: 8rem;
  justify-content: center;
  align-items: center;
`;

export default Header;
