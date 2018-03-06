import React from 'react';

import { GameBlock } from './GameBlock';

import Menu from '../components/Menu';
// import BackgroundImage from '../components/BackgroundImage';
// import GameImage from '../assets/images/game-galaxy.jpg';

class Game extends React.Component {
  componentWillMount() {
    if (!localStorage.LoggedIn) {
      this.props.history.push('/login');
    }
  }
  render() {
    return (
      <div>
        <Menu />
        <div>{localStorage.LoggedIn && <GameBlock />}</div>
      </div>
    );
  }
}

export default Game;
