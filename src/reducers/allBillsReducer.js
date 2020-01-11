import initialState from '../redux/initial-state';

export default (productsState = initialState.allBills, action) => {
    switch (action.type) {
        case productActions.types.PENDING:
            return {
                ...productsState,
                isFetching: true,
            };
        case productActions.types.SUCCESS:
            return {
                isFetching: false,
                data: action.payload
            };
        default:
            return productsState
    }
}