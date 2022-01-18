import { Component } from "react";
import { FeedbackOptions, Statistics, Section, Notification } from "../";

export class Feedback extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  updateState = (e) => {
    const targetElementContent = e.target.textContent;

    this.setState(() => ({
      [targetElementContent]: this.state[targetElementContent] + 1,
    }));
  };

  countTotalFeedback = () => Object.values(this.state).reduce((a, b) => a + b);

  countPositiveFeedbackPercentage = () =>
    Math.round((this.state.good / this.countTotalFeedback()) * 100);

  render() {
    const {
      state,
      updateState,
      countTotalFeedback,
      countPositiveFeedbackPercentage,
    } = this;
    const { good, neutral, bad } = this.state;

    return (
      <>
        <Section title="Please leave a feedback">
          <FeedbackOptions
            options={state}
            onLeaveFeedback={updateState}
            type={"button"}
          ></FeedbackOptions>
        </Section>
        <Section title="Statistics">
          {countTotalFeedback() ? (
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={countTotalFeedback()}
              positivePercentage={countPositiveFeedbackPercentage()}
            />
          ) : (
            <Notification message="There is no feedback yet"></Notification>
          )}
        </Section>
      </>
    );
  }
}
