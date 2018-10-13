import React, { Component } from "react";
import Layout from "./UI/Layout";
import Field from "./UI/Field";
import Button from "./UI/Button";
import ContollPanel from "./UI/ControllPanel";
import Score from "./UI/Score";
import { initCells } from "./Logic";

class App extends Component {
  state = this.getNewState();

  getNewState() {
    return {
      cells: initCells(),
      score: 0
    };
  }

  newGame = () => {
    this.setState(this.getNewState());
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
