import React from 'react';
import {allBillsSelector} from "./allBillsReducer";

const billOne = {
    "id": "1",
    "isBill": true,
};

const billTwo = {
    "id": "2",
    "isBill": false,
};

const billThree = {
    "id": "3",
    "isBill": false,
};


const state = {
    allBills: {
        data: [
            billOne, billTwo, billThree
        ],
        isFetching: true,
        isDirty: true
    }
};

it('selects selects state correctly', () => {
    expect(allBillsSelector(state)).toEqual(
        {
            isFetching: true,
            isDirty: true,
            data: {
                bills: [billOne],
                potentialBills: [billTwo, billThree]
            }
        }
    );
});
