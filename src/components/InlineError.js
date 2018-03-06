import React from 'react';
import styled from 'styled-components';

import Text from './Text';

const InlineError = ({ text }) => (
  <ErrorBlock>
    <Text size="xxs" color="#AE5856">
      {text}
    </Text>
  </ErrorBlock>
);

const ErrorBlock = styled.div`
  display: flex;
  position: absolute;
  bottom: -1.25rem;
  right: 0;
  left: 0;
  justify-content: center;
`;

export default InlineError;
