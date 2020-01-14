
import React from 'react';
import renderer from 'react-test-renderer';
import Tab from "./Tab";

const props = {
    tabName: 'tabName',
    isActive: true,
};

it('renders correctly', () => {
    const tree = renderer
        .create(<Tab {...props}/>)
        .toJSON();
    expect(tree).toMatchSnapshot();
});
