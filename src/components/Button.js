import React from 'react';
import styled from 'styled-components';

import Text from './Text';

const Button = ({ text, secondary, color, textColor }) => (
  <ButtonBase secondary={secondary} color={color}>
    <Text bold size="xs" color={textColor || '#fff'}>
      {text}
    </Text>
  </ButtonBase>
);

const ButtonBase = styled.button`
  display: flex;
  justify-content: center;
  outline: none;
  background-color: ${({ secondary, color }) =>
    (secondary && 'transparent') || color || `rgb(189, 96, 100)`};
  height: 3rem;
  padding: 0rem 2.5rem;
  margin: 0rem 0.5rem;
  border: ${({ secondary }) => (secondary ? '2px solid #fff' : 0)};
  border-radius: 30px;
  color: rgb(40, 45, 50);
  cursor: pointer;

  transition: all 0.5s;
  transition-timing-function: cubic-bezier(0.2, 3, 0.4, 1);
  user-select: none;

  &:hover {
    transform: scale(1.1, 1.1);
  }

  &:active {
    transform: scale(1.05, 1.05);
  }

  @media only screen and (min-width: 320px) and (max-width: 640px) {
    height: 2.5rem;
    padding: 0rem 1.5rem;
  }
`;

export default Button;
