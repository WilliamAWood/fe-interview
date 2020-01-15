import React, {Component} from 'react';
import {StyledRow} from "../styled-components/StyledRow";
import {StyledButton} from "../styled-components/StyledButton";

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
                <StyledButton data-test={`billButton-${bill.id}`}
                        onClick={() => onButtonClick()}>
                    {bill.isBill ? 'is not bill' : 'is bill'}
                </StyledButton>
            </li>
        );
    }
}

export default Bill;