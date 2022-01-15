import PropTypes from "prop-types";
import { List, ListItem } from "./Statistics.styled";

export const Statistics = ({
  good,
  neutral,
  bad,
  total,
  positivePercentage,
}) => (
  <List
    satisfactionrate={
      //calculated value are not allowed in pseudoelements content - this is a workaround
      (positivePercentage <= 33 && 'content: "😟"') ||
      (positivePercentage >= 66 && 'content: "😊"') ||
      'content:"😐"'
    }
  >
    <ListItem>Good: {good}</ListItem>
    <ListItem>Neutral: {neutral}</ListItem>
    <ListItem>Bad: {bad}</ListItem>
    <ListItem>Total: {total}</ListItem>
    <ListItem>Postive feedback: {positivePercentage}%</ListItem>
  </List>
);

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
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
