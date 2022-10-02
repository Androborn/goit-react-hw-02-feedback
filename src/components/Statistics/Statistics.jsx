import PropTypes from 'prop-types';
import { List, ListItem } from './Statistics.styled';

export const Statistics = ({
  good,
  neutral,
  bad,
  totalFeedbackCount,
  positiveFeedbackPercentage,
}) => (
  <List
    satisfactionRate={
      //calculated values are not allowed in pseudoelements content - this is a workaround
      (positiveFeedbackPercentage <= 33 && 'content: "😟"') ||
      (positiveFeedbackPercentage >= 66 && 'content: "😊"') ||
      'content:"😐"'
    }
  >
    <ListItem>Good: {good}</ListItem>
    <ListItem>Neutral: {neutral}</ListItem>
    <ListItem>Bad: {bad}</ListItem>
    <ListItem>Total: {totalFeedbackCount}</ListItem>
    <ListItem>Postive feedback: {positiveFeedbackPercentage}%</ListItem>
  </List>
);

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  totalFeedbackCount: PropTypes.number.isRequired,
  positiveFeedbackPercentage: PropTypes.number.isRequired,
};

// ===========
// universal component to render a list for any q-ty of any object properties

// export const DataSetList = ({ dataSet, style }) => {
//   return Object.keys(dataSet).map((dataSetElement) => (
//     <li key={dataSetElement} style={style}>
//       {dataSetElement + ": " + dataSet[dataSetElement]}
//     </li>
//   ));
// };
