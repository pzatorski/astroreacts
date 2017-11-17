import React, { Component } from 'react';
import styled from 'styled-components';

import Column from '../components/Column';
import GameSimulation from '../assets/images/game-simulation.jpg';

class GameBlock extends Component {
  constructor() {
    super();
    this.state = {
      screen: {
        width: window.innerWidth,
        height: window.innerHeight,
        ratio: window.devicePixelRatio || 1
      },
      score: {
        currentScore: 100,
        topScore: 1000
      }
    };
  }
  render() {
    console.log(this.state.screen.width);
    return (
      <div>
        <CurrentScore className="score current-score">
          Score: {this.state.score.currentScore}
        </CurrentScore>
        <TopScore className="score top-score">
          Top Score: {this.state.score.topScore}
        </TopScore>
        <Controls>
          [←][↑][↓][→] to MOVE<br />
          Use [SPACE] to SHOOT
        </Controls>
        <canvas
          ref="canvas"
          width={this.state.screen.width * this.state.screen.ratio}
          height={this.state.screen.height * this.state.screen.ratio}
        />
      </div>
    );
  }
}

const CurrentScore = styled.span`
  color: white;
  position: absolute;
  top: 5.5rem;
  right: 0;
  z-index: 2;
`;

const TopScore = styled.span`
  color: white;
  position: absolute;
  top: 5.5rem;
  left: 0;
  z-index: 2;
`;

const Controls = styled.span`
  color: white;
  position: absolute;
  top: 5.5rem;
  left: 0;
  right: 0;
  text-align: center;
  z-index: 2;
`;

const Image = styled.img`
  height: 30rem;
  padding-top: 5rem;
`;

const Container = styled.div`
  display: flex;
  felx: 1;
  width: 100%;
  justify-content: center;
  align-items: center;
`;

export default GameBlock;
