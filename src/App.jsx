import { Component } from "react";

function App() {
  return (
    <div className="App">
      <Feedback />
    </div>
  );
}

export default App;

class Feedback extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  generateButtons = () => {
    return Object.keys(this.state).map((element) => (
      <button
        key={element}
        onClick={() => this.onBtnClickCounterIncrements(element)}
      >
        {element}
      </button>
    ));
  };

  generateStatistics = () => {
    return Object.keys(this.state).map((element) => (
      <li key={element}>{element + ": " + this.state[element]}</li>
    ));
  };

  onBtnClickCounterIncrements = (element) => {
    this.setState(() => ({ [element]: this.state[element] + 1 }));
  };

  render() {
    return (
      <>
        <h1>Please leave feedback</h1>
        {this.generateButtons()}
        <h2>Statistics</h2>
        <ul>{this.generateStatistics()}</ul>
      </>
    );
  }
}

// add independent keys generator
