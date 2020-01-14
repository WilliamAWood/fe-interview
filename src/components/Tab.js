import React, { Component } from 'react';
import {StyledTab} from "../styled-components/StyledTab";

class Tab extends Component {

    render() {
        const {isActive, tabName, onClick} = this.props;
        return (
            <StyledTab isActive={isActive}
                    key={tabName}
                    onClick={() => onClick()}>
                    {tabName}
            </StyledTab>
        );
    }
}

export default Tab;