import React from 'react';
import styled from 'styled-components';

import Text from './Text';

const TextLink = ({ text, color }) => (
  <LinkBase>
    <StyledText bold size="xs" color={color}>
      {text}
    </StyledText>
  </LinkBase>
);

const StyledText = styled(Text)`
  border-bottom: ${({ color }) =>
    color ? `2px solid ${color}` : '2px solid #fff'};

  &:hover {
    color: rgb(254, 116, 131);
    border-bottom: 2px solid rgb(254, 116, 131);
  }

  &:active {
    color: rgb(245, 148, 158);
    border-bottom: 2px solid rgb(245, 148, 158);
  }
`;

const LinkBase = styled.div`
  display: flex;
  justify-content: center;
  outline: none;
  cursor: pointer;
`;

export default TextLink;
