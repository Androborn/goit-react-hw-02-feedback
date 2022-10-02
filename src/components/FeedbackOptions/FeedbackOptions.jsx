import PropTypes from 'prop-types';
import { Button } from './FeedbackOptions.styled';

export const FeedbackOptions = ({ options, feedbackHandler, type }) =>
  options.map(dataSetElement => (
    <Button type={type} key={dataSetElement} onClick={feedbackHandler}>
      {dataSetElement}
    </Button>
  ));

FeedbackOptions.propTypes = {
  options: PropTypes.array.isRequired,
  feedbackHandler: PropTypes.func.isRequired,
  type: PropTypes.string.isRequired,
};
