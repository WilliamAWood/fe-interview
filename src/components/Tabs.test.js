import React from 'react'
import {mount, shallow} from 'enzyme'
import { Tabs } from './Tabs'
import Bill from "./Bill";
import {StyledRow} from "../styled-components/StyledRow";
import {StyledButton} from "../styled-components/StyledButton";

describe('Tabs', () => {
    let fetchAllBills, setIsBill;

    let wrapper;
    let allBills = {
        isFetching: false,
        isDirty: false,
        data: {
            bills: [{
                id: 1,
                isBill: true,
                name: "Vodafone",
                transactions: [
                    {
                        "amount": 12,
                        "date": "2018-01-13",
                        "id": 1
                    }]
            }],
            potentialBills: [{
                id: 2,
                isBill: false,
                name: "Sky TV",
                transactions: [
                    {
                        "amount": 13,
                        "date": "2019-01-13",
                        "id": 2
                    }]
            }]
        }
    };

    beforeEach(() => {
        fetchAllBills = jest.fn();
        setIsBill = jest.fn();

        wrapper = mount(<Tabs
            allBills={allBills}
            fetchAllBills={fetchAllBills}
            setIsBill={setIsBill}
        />)
    });

    test('renders without crashing', () => {
        wrapper
    });

    test('fetches bills', () => {
        expect(fetchAllBills).toHaveBeenCalled();
    });

    test('renders bills for active tab', () => {
        expect(wrapper.state().activeTab).toEqual('bills');

        const bills = wrapper.find(Bill);
        expect(bills.length).toBe(1);
        expect(bills.first().props().bill.id).toEqual(1)
    });

    test('switches active tab', () => {
        expect(wrapper.state().activeTab).toEqual('bills');

        const tabs = wrapper.find('[data-test="tab-potentialBills"]');
        expect(tabs.length).toBe(1);

        tabs.first().simulate('click');
        expect(wrapper.state().activeTab).toEqual('potentialBills');

        const bills = wrapper.find(Bill);
        expect(bills.length).toBe(1);
        expect(bills.first().props().bill.id).toEqual(2)
    });

    test('toggles bill active when clicking on row', () => {
        expect(wrapper.state().activeBills).toEqual([]);

        const billRow = wrapper.find(StyledRow);
        expect(billRow.length).toEqual(1);
        expect(billRow.props().isActive).toEqual(false);

        billRow.first().simulate('click');
        expect(wrapper.state().activeBills).toEqual([1]);

        const reRenderedRow = wrapper.find(StyledRow);
        expect(reRenderedRow.props().isActive).toEqual(true)
    });

    test('calls setIsBill when button pressed', () => {
        const billButton = wrapper.find(StyledButton);

        expect(billButton.length).toEqual(1);

        billButton.first().simulate('click');

        expect(setIsBill).toHaveBeenCalledWith(allBills.data.bills[0].id, !allBills.data.bills[0].isBill);
    });

    test('fetches data again when data is dirty', () => {

        expect(fetchAllBills).toHaveBeenCalledTimes(1);

        wrapper.setProps({
            allBills: {
                isDirty: true
            }
        });

        expect(fetchAllBills).toHaveBeenCalledTimes(2);
    });

    test('does not fetch data again when data is dirty', () => {

        expect(fetchAllBills).toHaveBeenCalledTimes(1);

        wrapper.setProps({
            allBills: {
                isDirty: false
            }
        });

        expect(fetchAllBills).toHaveBeenCalledTimes(1);
    });
});
