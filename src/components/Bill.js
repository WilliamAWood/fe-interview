import React, {Component} from 'react';
import {StyledRow} from "../styled-components/StyledRow";
import {buttonStyle} from "../styled-components/buttonStyle";

class Bill extends Component {

    render() {

        const {bill, isActive, onButtonClick, onRowClick} = this.props;
        return (

            <li key={bill.id}>
                <StyledRow
                    data-test={`billRow-${bill.id}`}
                    isActive={isActive}
                    onClick ={() => onRowClick()}>
                    {bill.name}
                    {isActive &&
                    <ul>
                        {bill.transactions.map(transaction => (
                            <li key={transaction.id}>
                                <p>date: {transaction.date}</p>
                                <p>amount: {transaction.amount}</p>
                            </li>
                        ))}
                    </ul>}
                </StyledRow>
                <button style={buttonStyle} data-test={`billButton-${bill.id}`}
                        onClick={() => onButtonClick()}>
                    {bill.isBill ? 'is not bill' : 'is bill'}
                </button>
            </li>
        );
    }
}

export default Bill;