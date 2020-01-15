import styled from 'styled-components';
import {StyleConstants} from "../shared/constants";

export const StyledButton = styled.button`
    background: ${StyleConstants.colors.primary};
    color: ${StyleConstants.colors.secondary};
    border: 2px solid ${StyleConstants.colors.secondary};
`;