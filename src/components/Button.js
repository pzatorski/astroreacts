import React from 'react';
import styled from 'styled-components';

import Text from './Text';

const Button = ({ text }) => (
  <ButtonBase>
    <Text bold size="xs" color="white">
      {text}
    </Text>
  </ButtonBase>
);

const ButtonBase = styled.button`
  display: flex;
  border: 0;
  outline: none;
  background-color: rgb(189, 96, 100);
  height: 3rem;
  width: 10rem;
  border-radius: 30px;
  color: rgb(40, 45, 50);
  cursor: pointer;
  justify-content: center;

  transition: all 0.5s;
  transition-timing-function: cubic-bezier(0.2, 3, 0.4, 1);
  user-select: none;

  &:hover {
    transform: scale(1.1, 1.1);
  }

  &:active {
    transform: scale(1.05, 1.05);
  }
`;

export default Button;
