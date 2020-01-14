import styled from 'styled-components';

export const StyledRow = styled.div`
  background: ${props => props.isActive ? "palevioletred" : "white"};
  color: ${props => props.isActive ? "white" : "palevioletred"};

  display:inline-flex
  font-size: 1em;
  padding: 0.25em 1em;
  border: 2px solid palevioletred;
  border-radius: 3px;
`;