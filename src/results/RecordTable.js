import React from 'react';
import styled from 'styled-components';

import Column from '../components/Column';
import Text from '../components/Text';
import TableRow from '../components/TableRow';

class RecordTable extends React.Component {
  render() {
    const records = JSON.parse(localStorage.records);

    records.sort(function(a, b) {
      return b.topScore - a.topScore;
    });

    const sortedScoreData = records.map(function(user, index) {
      return (
        <TableRow
          key={index + 1}
          place={index + 1}
          username={user.username}
          topScore={user.topScore}
        />
      );
    });

    return (
      <Container>
        <Column>
          <TableBlock>
            <thead>
              <Tr>
                <Th noBorderLeft>
                  <Text color="white">Place</Text>
                </Th>
                <Th>
                  <Text color="white">Username</Text>
                </Th>
                <Th>
                  <Text color="white">Points</Text>
                </Th>
              </Tr>
            </thead>
            <tbody>{sortedScoreData}</tbody>
          </TableBlock>
        </Column>
      </Container>
    );
  }
}

const Th = styled.th`
  text-align: left;
  padding: 2rem;
  border-bottom: 1px solid #fff;
  border-left: ${({ noBorderLeft }) => noBorderLeft || '1px solid #fff'};
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
