import styled from 'styled-components';
import {StyleConstants} from "../shared/constants";

const {primary, secondary} = StyleConstants.colors;

export const StyledRow = styled.div`
  background: ${props => props.isActive ? secondary : primary};
  color: ${props => props.isActive ? primary : secondary};

  display:inline-flex
  font-size: 1em;
  padding: 0.25em 1em;
  border: 2px solid ${secondary};
  border-radius: 3px;
`;