import styled from 'styled-components';

export const List = styled.ul`
  &::after {
    font-size: 2rem;
    ${props => props.satisfactionRate};
  }
`;

export const ListItem = styled.li`
  margin-bottom: 0.5rem;
  &:nth-last-child(-n + 2) {
    text-decoration: underline;
  }
`;
