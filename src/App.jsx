import { Component } from "react";
import {
  FeedbackOptions,
  Statistics,
  Section,
  Notification,
} from "./components";
import { Wrapper } from "./App.styled";

function App() {
  return (
    <Wrapper className="App">
      <Feedback />
    </Wrapper>
  );
}

export default App;

class Feedback extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  updateState = (e) => {
    this.setState(() => ({
      [e.target.textContent]: this.state[e.target.textContent] + 1,
    }));
  };

  countTotalFeedback = () => Object.values(this.state).reduce((a, b) => a + b);

  countPositiveFeedbackPercentage = () =>
    Math.round((this.state.good / this.countTotalFeedback()) * 100);

  render() {
    return (
      <>
        <Section title="Please leave a feedback">
          <FeedbackOptions
            options={this.state}
            onLeaveFeedback={this.updateState}
            type={"button"}
          ></FeedbackOptions>
        </Section>
        <Section title="Statistics">
          {this.countTotalFeedback() ? (
            <Statistics
              good={this.state.good}
              neutral={this.state.neutral}
              bad={this.state.bad}
              total={this.countTotalFeedback()}
              positivePercentage={this.countPositiveFeedbackPercentage()}
            />
          ) : (
            <Notification message="There is no feedback yet"></Notification>
          )}
        </Section>
      </>
    );
  }
}
