import React from 'react';
import styled from 'styled-components';

import GameImage from '../assets/images/game-galaxy.jpg';

import Menu from '../components/Menu';
import BackgroundImage from '../components/BackgroundImage';
import Text from '../components/Text';
import RecordTable from './RecordTable';

class Results extends React.Component {
  render() {
    return (
      <BackgroundImage height="100vh" image={GameImage}>
        <Menu />
        {localStorage.records ? (
          <RecordTable />
        ) : (
          <Container>
            <Text color="white" size="m">
              Not results to view yet..
            </Text>
          </Container>
        )}
      </BackgroundImage>
    );
  }
}

const Container = styled.div`
  display: flex;
  flex: 1;
  padding-top: 4rem;
  justify-content: center;
  align-items: center;
`;

export default Results;
