import React, { Component } from 'react';
import styled from 'styled-components';
import Ship from './Ship';
import Asteroid from './Asteroid';
import { randomNumBetweenExcluding } from './helpers';

import Text from '../components/Text';
import Button from '../components/Button';

const KEY = {
  LEFT: 37,
  RIGHT: 39,
  UP: 38,
  A: 65,
  D: 68,
  W: 87,
  SPACE: 32
};

export class GameBlock extends Component {
  constructor() {
    super();

    const userTopScore = JSON.parse(
      localStorage.getItem(localStorage.LoggedIn)
    );

    this.state = {
      screen: {
        width: window.innerWidth,
        height: window.innerHeight,
        ratio: window.devicePixelRatio || 1
      },
      context: null,
      keys: {
        left: 0,
        right: 0,
        up: 0,
        down: 0,
        space: 0
      },
      asteroidCount: 3,
      currentScore: 0,
      topScore: userTopScore.topScore || 0,
      username: userTopScore.username || '',
      inGame: false
    };
    this.ship = [];
    this.asteroids = [];
    this.bullets = [];
    this.particles = [];
  }

  handleResize(value, e) {
    this.setState({
      screen: {
        width: window.innerWidth,
        height: window.innerHeight,
        ratio: window.devicePixelRatio || 1
      }
    });
  }

  handleKeys(value, e) {
    let keys = this.state.keys;
    if (e.keyCode === KEY.LEFT || e.keyCode === KEY.A) keys.left = value;
    if (e.keyCode === KEY.RIGHT || e.keyCode === KEY.D) keys.right = value;
    if (e.keyCode === KEY.UP || e.keyCode === KEY.W) keys.up = value;
    if (e.keyCode === KEY.SPACE) keys.space = value;
    this.setState({
      keys: keys
    });
  }

  componentDidMount() {
    window.addEventListener('keyup', this.handleKeys.bind(this, false));
    window.addEventListener('keydown', this.handleKeys.bind(this, true));
    window.addEventListener('resize', this.handleResize.bind(this, false));

    const context = this.refs.canvas.getContext('2d');
    this.setState({ context: context });
    this.startGame();
    requestAnimationFrame(() => {
      this.update();
    });
  }

  componentWillUnmount() {
    window.removeEventListener('keyup', this.handleKeys);
    window.removeEventListener('keydown', this.handleKeys);
    window.removeEventListener('resize', this.handleResize);
  }

  update() {
    const context = this.state.context;
    const keys = this.state.keys;
    const ship = this.ship[0];

    context.save();
    context.scale(this.state.screen.ratio, this.state.screen.ratio);

    // Motion trail
    context.fillStyle = '#000';
    context.globalAlpha = 0.4;
    context.fillRect(0, 0, this.state.screen.width, this.state.screen.height);
    context.globalAlpha = 1;

    // Next set of asteroids
    if (!this.asteroids.length) {
      let count = this.state.asteroidCount + 1;
      this.setState({ asteroidCount: count });
      this.generateAsteroids(count);
    }

    // Check for colisions
    this.checkCollisionsWith(this.bullets, this.asteroids);
    this.checkCollisionsWith(this.ship, this.asteroids);

    // Remove or render
    this.updateObjects(this.particles, 'particles');
    this.updateObjects(this.asteroids, 'asteroids');
    this.updateObjects(this.bullets, 'bullets');
    this.updateObjects(this.ship, 'ship');

    context.restore();

    // Next frame
    requestAnimationFrame(() => {
      this.update();
    });
  }

  addScore(points) {
    if (this.state.inGame) {
      this.setState({
        currentScore: this.state.currentScore + points
      });
    }
  }

  startGame() {
    this.setState({
      inGame: true,
      currentScore: 0
    });

    // Make ship
    let ship = new Ship({
      position: {
        x: this.state.screen.width / 2,
        y: this.state.screen.height / 2
      },
      create: this.createObject.bind(this),
      onDie: this.gameOver.bind(this)
    });
    this.createObject(ship, 'ship');

    // Make asteroids
    this.asteroids = [];
    this.generateAsteroids(this.state.asteroidCount);
  }

  gameOver() {
    this.setState({
      inGame: false
    });

    // Replace top score
    if (this.state.currentScore > this.state.topScore) {
      this.setState({
        topScore: this.state.currentScore
      });

      // Replace existing object with new top score
      const userTopScore = JSON.parse(
        localStorage.getItem(localStorage.LoggedIn)
      );

      userTopScore.topScore = this.state.currentScore;
      localStorage.setItem(localStorage.LoggedIn, JSON.stringify(userTopScore));

      // Set up of tableRecord
      const tableRecord = {
        username: this.state.username,
        topScore: this.state.currentScore
      };

      //Update of records in localStorage
      if (localStorage.records) {
        const table = JSON.parse(localStorage.records);

        const getUsernames = table.map(function(user, index) {
          return user.username;
        });

        if (getUsernames.includes(userTopScore.username)) {
          var tableRecords = [];
          tableRecords.push(tableRecord);
          localStorage.setItem('records', JSON.stringify(tableRecords));
        } else {
          tableRecords = JSON.parse(localStorage.getItem('records'));
          tableRecords.push(tableRecord);
          localStorage.setItem('records', JSON.stringify(tableRecords));
        }
      }

      // Set up new array in localStorage
      if (!localStorage.records) {
        var tableRecords = [];
        tableRecords.push(tableRecord);
        localStorage.setItem('records', JSON.stringify(tableRecords));
      }
    }
  }

  generateAsteroids(howMany) {
    let asteroids = [];
    let ship = this.ship[0];
    for (let i = 0; i < howMany; i++) {
      let asteroid = new Asteroid({
        size: 80,
        position: {
          x: randomNumBetweenExcluding(
            0,
            this.state.screen.width,
            ship.position.x - 60,
            ship.position.x + 60
          ),
          y: randomNumBetweenExcluding(
            0,
            this.state.screen.height,
            ship.position.y - 60,
            ship.position.y + 60
          )
        },
        create: this.createObject.bind(this),
        addScore: this.addScore.bind(this)
      });

      this.createObject(asteroid, 'asteroids');
    }
  }

  createObject(item, group) {
    this[group].push(item);
  }

  updateObjects(items, group) {
    let index = 0;
    for (let item of items) {
      if (item.delete) {
        this[group].splice(index, 1);
      } else {
        items[index].render(this.state);
      }
      index++;
    }
  }

  checkCollisionsWith(items1, items2) {
    var a = items1.length - 1;
    var b;
    for (a; a > -1; --a) {
      b = items2.length - 1;
      for (b; b > -1; --b) {
        var item1 = items1[a];
        var item2 = items2[b];
        if (this.checkCollision(item1, item2)) {
          item1.destroy();
          item2.destroy();
        }
      }
    }
  }

  checkCollision(obj1, obj2) {
    var vx = obj1.position.x - obj2.position.x;
    var vy = obj1.position.y - obj2.position.y;
    var length = Math.sqrt(vx * vx + vy * vy);
    if (length < obj1.radius + obj2.radius) {
      return true;
    }
    return false;
  }

  render() {
    let endgame;
    let message;

    if (this.state.currentScore <= 0) {
      message = '0 points... So sad.';
    } else if (this.state.currentScore >= this.state.topScore) {
      message = 'Top score with ' + this.state.currentScore + ' points. Woo!';
    } else {
      message = this.state.currentScore + ' Points though :)';
    }

    if (!this.state.inGame) {
      endgame = (
        <div className="endgame">
          <Text center size="xs" color="#fff">
            Game over, man!
          </Text>
          <Text center size="xs" color="#fff" margin="0rem 0rem 1.5rem 0rem">
            {message}
          </Text>
          <div style={{ display: 'flex', justifyContent: 'center' }}>
            <Button gameOver={this.startGame.bind(this)} text="Try again?" />
          </div>
        </div>
      );
    }

    return (
      <div>
        {endgame}
        <CurrentScore>
          <Text size="xs" color="#fff">
            Score:
          </Text>
          <Text size="xs" color="#fff">
            {this.state.currentScore}
          </Text>
        </CurrentScore>
        <TopScore>
          <Text size="xs" color="#fff">
            Top Score:
          </Text>
          <Text size="xs" color="#fff">
            {this.state.topScore}
          </Text>
        </TopScore>
        <Controls>
          Use [A][S][W][D] or [←][↑][↓][→] to MOVE<br />
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
  right: 1rem;
  z-index: 2;
`;

const TopScore = styled.span`
  color: white;
  position: absolute;
  top: 5.5rem;
  left: 1rem;
  z-index: 2;
`;

const Controls = styled.span`
  color: white;
  position: absolute;
  top: 5.5rem;
  text-align: center;
  left: 0;
  right: 0;
  z-index: 2;
`;
