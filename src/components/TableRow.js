import React from 'react';
import styled from 'styled-components';

import Text from './Text';

const TableRow = ({ place, username, topScore }) => (
  <Tr>
    <Td noBorderLeft>
      <Text color="white">{place}</Text>
    </Td>
    <Td>
      <Text color="white">{username}</Text>
    </Td>
    <Td>
      <Text color="white">{topScore}</Text>
    </Td>
  </Tr>
);

const Td = styled.td`
  text-align: left;
  padding: 1rem 2rem;
  border-left: ${({ noBorderLeft }) => noBorderLeft || '1px solid #fff'};
`;

const Tr = styled.tr``;

export default TableRow;
