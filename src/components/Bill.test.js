
import React from 'react';
import renderer from 'react-test-renderer';
import Bill from "./Bill";

const props = {
    bill: {
        id: 1,
        isBill: true,
        name: "Vodafone",
        transactions: [
            {
                "amount": 12,
                "date": "2018-01-13",
                "id": 1
            }]
    },
    isActive: true,
};

it('renders correctly', () => {
    const tree = renderer
        .create(<Bill {...props}/>)
        .toJSON();
    expect(tree).toMatchSnapshot();
});
