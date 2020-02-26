import React from 'react';

import Input from "./components/input/input.component";
import Output from "./components/output/output.component";

import { AppContainer } from "./App.styles";

class App extends React.Component {
  state = {
    userName: "Sergey",
    inputValue: "Start"
  }

  inputChangeHandler = event => {
    this.setState({
      inputValue: event.target.value
    });
  }

  render() {
    return (
      <AppContainer>
        <Input user={this.state.userName} input={this.state.inputValue} change={this.inputChangeHandler}/>
        <Output user={this.state.userName} input={this.state.inputValue} />
      </AppContainer>
    );
  }
}

export default App;
