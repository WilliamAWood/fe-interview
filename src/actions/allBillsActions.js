import {asyncActionTypes} from './async-action-types';

const FETCH_ALL_BILLS_ACTION_TYPES = asyncActionTypes('FETCH_ALL_BILLS');

const SET_IS_BILL_ACTION_TYPES = asyncActionTypes('SET_IS_BILL');

const fetchAllBills = () => dispatch => {
    dispatch({
        type: 'API',
        method: 'GET',
        payload: {
            url: 'bills',
            ...FETCH_ALL_BILLS_ACTION_TYPES
        }
    })
};

const setIsBill = (id, isBill) => dispatch => {
    dispatch({
        type: 'API',
        method: 'PATCH',
        payload: {
            url: `bills/${id}`,
            body: {
                isBill: isBill
            },
            ...SET_IS_BILL_ACTION_TYPES
        }
    });
};

export const allBillsActions = {
    fetchAllBills,
    setIsBill,
    types: {
        FETCH_ALL_BILLS_ACTION_TYPES,
        SET_IS_BILL_ACTION_TYPES,
    }
};

