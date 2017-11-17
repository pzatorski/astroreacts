import React from 'react';
import styled from 'styled-components';

import Column from '../components/Column';
import Text from '../components/Text';

const RecordTable = () => (
  <Container>
    <Column>
      <TableBlock>
        <Tr>
          <Th>
            <Text bold size="s" color="white">
              Place
            </Text>
          </Th>
          <Th>
            <Text bold size="s" color="white">
              User
            </Text>
          </Th>
          <Th>
            <Text bold size="s" color="white">
              Points
            </Text>
          </Th>
        </Tr>
        <Tr>
          <Td>
            <Text size="xs" color="white">
              1.
            </Text>
          </Td>
          <Td>
            <Text size="xs" color="white">
              Govanni
            </Text>
          </Td>
          <Td>
            <Text size="xs" color="white">
              360
            </Text>
          </Td>
        </Tr>
        <Tr>
          <Td>
            <Text size="xs" color="white">
              2.
            </Text>
          </Td>
          <Td>
            <Text size="xs" color="white">
              David
            </Text>
          </Td>
          <Td>
            <Text size="xs" color="white">
              330
            </Text>
          </Td>
        </Tr>
        <Tr>
          <Td>
            <Text size="xs" color="white">
              3.
            </Text>
          </Td>
          <Td>
            <Text size="xs" color="white">
              Patryk
            </Text>
          </Td>
          <Td>
            <Text size="xs" color="white">
              310
            </Text>
          </Td>
        </Tr>
      </TableBlock>
    </Column>
  </Container>
);

const Td = styled.td`
  text-align: left;
  padding: 1rem 2rem;
`;

const Th = styled.th`
  text-align: left;
  padding: 2rem;
  border-bottom: 2px solid #fff;
`;

const Tr = styled.tr``;

const TableBlock = styled.table`
  display: table;
  height: 100%;
  width: 100%;
  padding: 3rem 2rem;
  background-color: rgba(100, 100, 100, 0.8);
  border-radius: 5px;
  box-shadow: 10px 10px 5rem #d1d1d1;
`;

const Container = styled.div`
  display: flex;
  felx: 1;
  position: relative;
  width: 100%;
  justify-content: center;
  align-items: center;
  padding-top: 3rem;
`;

export default RecordTable;
