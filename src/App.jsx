// import { Feedback } from "./components";
import { Component } from 'react';
import {
  FeedbackOptions,
  Statistics,
  Section,
  Notification,
} from './components';

import { Wrapper } from './App.styled';

export default class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  updateState = e => {
    const targetButtonContent = e.target.textContent;

    this.setState(() => ({
      [targetButtonContent]: this.state[targetButtonContent] + 1,
    }));
  };

  countTotalFeedback = () => Object.values(this.state).reduce((a, b) => a + b);

  countPositiveFeedbackPercentage = () => {
    const positiveFeedbackQuantity = this.state.good;
    const totalFeedbackQuantity = this.countTotalFeedback();

    return Math.round((positiveFeedbackQuantity / totalFeedbackQuantity) * 100);
  };

  render() {
    const {
      state,
      updateState,
      countTotalFeedback,
      countPositiveFeedbackPercentage,
    } = this;

    return (
      <Wrapper>
        <Section title="Please leave a feedback">
          <FeedbackOptions
            options={Object.keys(state)}
            feedbackHandler={updateState}
            type={'button'}
          ></FeedbackOptions>
        </Section>
        <Section title="Statistics">
          {countTotalFeedback() ? (
            <Statistics
              good={state.good}
              neutral={state.neutral}
              bad={state.bad}
              totalFeedbackCount={countTotalFeedback()}
              positiveFeedbackPercentage={countPositiveFeedbackPercentage()}
            />
          ) : (
            <Notification message="There is no feedback yet"></Notification>
          )}
        </Section>
      </Wrapper>
    );
  }
}
