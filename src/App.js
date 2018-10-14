import React, { Component } from "react";
import Layout from "./UI/Layout";
import Field from "./UI/Field";
import Button from "./UI/Button";
import ContollPanel from "./UI/ControllPanel";
import Score from "./UI/Score";
import { initCells, moveCells, directions } from "./Logic";

class App extends Component {
  state = this.getNewState();

  mapKeyCodeToDirection = {
    52: directions.LEFT,
    50: directions.DOWN,
    54: directions.RIGHT,
    56: directions.UP
  };

  getNewState() {
    return {
      cells: initCells(),
      score: 0
    };
  }

  newGame = () => {
    this.setState(this.getNewState());
  };

  componentDidMount() {
    document.addEventListener("keypress", this.handleKeyPress);
  }

  componentWillMount() {
    document.removeEventListener("keypress", this.handleKeyPress);
  }

  handleKeyPress = event => {
    console.log(event.keyCode);
    if ([52, 50, 54, 56].includes(event.keyCode))
      this.setState(state => ({
        ...state,
        cells: moveCells(state.cells, this.mapKeyCodeToDirection[event.keyCode])
      }));
  };

  render() {
    const { cells, score } = this.state;
    return (
      <Layout>
        <ContollPanel>
          <Button onClick={this.newGame}>New Game</Button>
          <Score>{score}</Score>
        </ContollPanel>
        <Field cells={cells} />
      </Layout>
    );
  }
}

export default App;
