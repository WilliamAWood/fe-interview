import styled from 'styled-components';

export const StyledTab = styled.div`
  background: ${props => props.isActive ? "palevioletred" : "white"};
  color: ${props => props.isActive ? "white" : "palevioletred"};

  margin: 0;
  display:inline-flex
  font-size: 1em;
  padding: 0.5em;
  border: 2px solid palevioletred;
  border-radius: 3px;
`;