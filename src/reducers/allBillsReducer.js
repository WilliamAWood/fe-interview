import initialState from '../redux/initial-state';
import {allBillsActions} from "../actions/allBillsActions";

export default (allBillsState = initialState.allBills, action) => {
    switch (action.type) {
        case allBillsActions.types.FETCH_ALL_BILLS_ACTION_TYPES.PENDING:
            return {
                ...allBillsState,
                isDirty: false,
                isFetching: true,
            };
        case allBillsActions.types.FETCH_ALL_BILLS_ACTION_TYPES.SUCCESS:
            return {
                isFetching: false,
                isDirty: false,
                data: action.payload
            };
        case allBillsActions.types.SET_IS_BILL_ACTION_TYPES.SUCCESS:
            return {
                ...allBillsState,
                isDirty: true,
            };
        default:
            return allBillsState
    }
}

export const allBillsSelector = (state) => {
        return {
                isFetching: state.allBills.isFetching,
                isDirty: state.allBills.isDirty,
                data: {
                    bills: state.allBills.data && state.allBills.data.filter(bill => bill.isBill === true),
                    potentialBills: state.allBills.data && state.allBills.data.filter(bill => bill.isBill === false),
                }

        }

};
